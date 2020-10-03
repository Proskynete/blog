import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "components/Layout";
import glob from "glob";
import matter from "gray-matter";
import { prettyFormat } from "helpers/date.helper";
import { prettyReadingTime } from "helpers/reading-time.helper";
import { scrollToNextContent } from "helpers/scroll.helper";
import {
  FrontMatterInterface,
  PathsResponseInterface,
  PropsInterface,
  ReturnInterface,
  SectionsInterface,
} from "models/blogtemplate.model";
import { FC, memo, SyntheticEvent } from "react";
import ReactMarkdown from "react-markdown/with-html";

const handleGoTo = (event: SyntheticEvent<EventTarget>): void => {
  event.preventDefault();
  const targetElement: HTMLInputElement = event.target as HTMLInputElement;
  const title: string = targetElement.getAttribute("href");
  scrollToNextContent(title);
};

const BlogTemplate: FC<PropsInterface> = (props) => {
  const { frontmatter, markdownBody, slug } = props;
  const {
    date,
    description,
    hero_image,
    read_time,
    sections,
    title,
    introduction,
  } = frontmatter;

  return (
    <Layout
      customTitle={title}
      description={description}
      image={hero_image}
      url={`https://eduardoalvarez.cl/${slug}`}
    >
      <article>
        <header>
          <h1>{title}</h1>
          <FontAwesomeIcon icon={faCalendar} />
          <time dateTime={date}>Publicado el {prettyFormat(date)}</time>
          <p>
            <FontAwesomeIcon icon={faClock} />
            {prettyReadingTime(read_time)}
          </p>
        </header>

        <figure>
          <img src={hero_image} />
        </figure>

        <div>
          <h2>{introduction.title}</h2>
          <ReactMarkdown source={introduction.content} />
        </div>

        <aside>
          {sections.map((section: SectionsInterface) => (
            <a
              href={section.anchor}
              key={section.anchor}
              onClick={(e) => handleGoTo(e)}
            >
              {section.title}
            </a>
          ))}
        </aside>
        <div>
          <ReactMarkdown source={markdownBody} escapeHtml={false} />
        </div>
      </article>
    </Layout>
  );
};

export default memo(BlogTemplate);

export const getStaticProps = async ({ ...ctx }): Promise<ReturnInterface> => {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: JSON.parse(
        JSON.stringify(data.data)
      ) as FrontMatterInterface,
      markdownBody: data.content,
      slug: slug,
    },
  };
};

export const getStaticPaths = async (): Promise<PathsResponseInterface> => {
  const blogs = glob.sync("posts/**/*.md");

  const blogSlugs = blogs.map((file: any) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  const paths = blogSlugs.map((slug: string) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

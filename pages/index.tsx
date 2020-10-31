import Article from 'components/Article';
import Layout from 'components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import { generateRss } from 'helpers/rss.helper';
import { dataSerialized } from 'helpers/serializer.helper';
import {
	BlogTemplatePropsInterface,
	FrontMatterInterface,
} from 'models/blogtemplate.model';
import {
	ArticleContentInterface,
	GetStaticPropsReturnInterface,
	HomePropsInterface,
} from 'models/index.model';
import Link from 'next/link';
import { memo } from 'react';

const Index = (props: HomePropsInterface) => {
	const { title, description, image, articles } = props;

	return (
		<Layout customTitle={title} description={description} image={image}>
			<div className='home'>
				<div className='row'>
					<div className='col-12'>
						<div className='home__presentation'>
							<div className='home__presentation__image'>
								<img
									src='https://res.cloudinary.com/soy-eduardoalvarez/image/upload/v1587245039/user_view/eduardo_alvarez.jpg'
									alt='Imagen de Eduardo Álvarez'
									className='home__presentation__image__img'
								/>
							</div>
							<div className='home__presentation__description'>
								<p className='home__presentation__description__title'>
									Hola! Mi nombre es Eduardo Álvarez
								</p>
								<p className='home__presentation__description__text'>
									... Y soy un apasionado por las tecnologías web (JS Lover).
									Busco compartir todo lo que he aprendido en estos años
									mediante artículos, tutoriales y cursos.
								</p>

								<Link href='/autor'>
									<a className='home__presentation__description__link'>
										Conoce más sobre mi
									</a>
								</Link>
							</div>
						</div>
						<div className='row justify-content-md-center'>
							<div className='col-12 col-lg-7 col-xl-6'>
								<section className='articles'>
									<div className='articles__header'>
										<p className='articles__header__title'>Últimos artículos</p>
										<Link href='/articulos/'>
											<a className='articles__header__subtitle'>Ver más</a>
										</Link>
									</div>
									{articles.map((article: ArticleContentInterface) => {
										return <Article key={article.slug} {...article} />;
									})}
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default memo(Index);

export const getStaticProps = async (): Promise<
	GetStaticPropsReturnInterface
> => {
	const siteConfig = await import(`data/config.json`);

	const posts: Array<BlogTemplatePropsInterface> = ((context) => {
		const nameFiles = context.keys();
		const contentFile = nameFiles.map(context);

		const data = nameFiles.map((nameFile: string, index: number) => {
			const slug = nameFile
				.replace(/^.*[\\/]/, '')
				.split('.')
				.slice(0, -1)
				.join('.');

			const content = contentFile[index];
			const document = matter(content.default);

			return {
				frontmatter: dataSerialized(document.data as FrontMatterInterface),
				markdownBody: document.content,
				slug,
			};
		});

		return data;
	})(require['context']('../posts', true, /\.md$/));

	const postsSortered = posts.sort((a, b) => {
		const _a = new Date(a.frontmatter.date);
		const _b = new Date(b.frontmatter.date);

		return _a > _b ? -1 : _a < _b ? 1 : 0;
	});

	const rrs = generateRss(postsSortered);
	fs.writeFileSync('public/rss.xml', rrs);
	const articlesSliced = postsSortered.slice(0, 3);

	return {
		props: {
			articles: articlesSliced,
			title: siteConfig.title,
			description: siteConfig.description,
			image: siteConfig.image,
		},
	};
};

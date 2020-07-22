import React from 'react';
import { Link } from 'react-router-dom';

export const copyTextToClipboard = (e, string) => {
	e.preventDefault();

	const textarea = document.createElement('textarea');
	textarea.innerText = string;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
};

const handleCopyUrl = (e) => {
	const urlToShare = `https://eduardoalvarez.cl/blog/${slug}`;
	copyTextToClipboard(e, urlToShare);
};

const Article = (props) => {
	const { slug, title, description, reading_time, create_at } = props;

	return (
		<article className='article'>
			<Link className='article__header' to={`/blog/${slug}`}>
				<h1 className='article__header__title'>
					<span className='article__header__title__first'>{title}</span>
					{title}
				</h1>
			</Link>
			<p className='article__header__info'>
				<span className='article__header__info__read'>
					<i className='far fa-clock' />
					{reading_time}
				</span>
				<span className='article__header__info__published'>
					<i className='far fa-calendar-alt' />
					<time dateTime={create_at}>{create_at}</time>
				</span>
			</p>
			<div className='article__content'>{description}</div>
			<div className='article__bottom'>
				<Link className='article__bottom__read-more' to={`/blog/${slug}`}>
					Seguir leyendo
				</Link>
				<div className='article__bottom__share'>
					<a
						className='article__bottom__share__link'
						title='Compartir en facebook'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-facebook-f' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir en twitter'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir en linkedin'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir por whatsapp'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-whatsapp' />
					</a>
					<a
						role='button'
						className='article__bottom__share__link'
						title='Compartir copiando link'
						onClick={handleCopyUrl}
					>
						<i className='far fa-copy' />
					</a>
				</div>
			</div>
		</article>
	);
};

export default Article;

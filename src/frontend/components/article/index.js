import React from 'react';
import { Link } from 'react-router-dom';
import { prettyDate } from '../../helpers/transform-date.helper';
import { handleCopyUrl } from '../../helpers/copy-text.helper';
import { getFirstLetter } from '../../helpers/letters.helper';
import { prettyReadingTime } from '../../helpers/time-to-read.helper';
import './index.scss';

const Article = (props) => {
	const { slug, title, description, reading_time, create_at } = props;

	return (
		<article className='article'>
			<Link to={`/blog/${slug}`} className='article__header'>
				<h1 className='article__header__title'>
					<span className='article__header__title__first'>
						{getFirstLetter(title)}
					</span>
					{title}
				</h1>
			</Link>
			<div className='article__header__info'>
				<span className='article__header__info__read'>
					<i className='far fa-clock' />
					{prettyReadingTime(reading_time)}
				</span>
				<span className='article__header__info__published'>
					<i className='far fa-calendar-alt' />
					<time dateTime={create_at}>{prettyDate(create_at)}</time>
				</span>
			</div>
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
						onClick={(e) => handleCopyUrl(e, slug)}
					>
						<i className='far fa-copy' />
					</a>
				</div>
			</div>
		</article>
	);
};

export default Article;

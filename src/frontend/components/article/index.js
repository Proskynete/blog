import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { prettyDate } from '../../helpers/transform-date.helper';
import { urlToShare, handleCopyUrl } from '../../helpers/copy-text.helper';
import {
	getFirstLetter,
	titleForSocialNetwork,
} from '../../helpers/letters.helper';
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
						href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare(
							slug,
						)}`}
						rel='noopener noreferrer'
					>
						<i className='fab fa-facebook-f' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir en twitter'
						target='_blank'
						href={`https://twitter.com/intent/tweet?text=${titleForSocialNetwork(
							title,
						)}&url=${urlToShare(slug)}`}
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir en linkedin'
						target='_blank'
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare(
							slug,
						)}`}
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
					<a
						className='article__bottom__share__link'
						title='Compartir por whatsapp'
						target='_blank'
						href={`https://api.whatsapp.com/send?text=${titleForSocialNetwork(
							title,
						)}${urlToShare(slug)}`}
						rel='noopener noreferrer'
					>
						<i className='fab fa-whatsapp' />
					</a>
					<button
						role='menuitem'
						type='button'
						tabIndex='0'
						className='article__bottom__share__link'
						title='Compartir copiando link'
						onClick={(e) => handleCopyUrl(e, slug)}
					>
						<i className='far fa-copy' />
					</button>
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	reading_time: PropTypes.string.isRequired,
	create_at: PropTypes.string.isRequired,
};

export default Article;

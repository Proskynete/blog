import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { transformMarkdownToHtml } from '../../helpers/transform-markdown.helper';
import { getHomeDataAction, getLastBlogDataAction } from '../../actions';
import Article from '../../components/article';
import './index.scss';
import Loader from '../../components/loader';

const Home = (props) => {
	const {
		homeContent,
		lastArticles,
		getHomeDataMethod,
		getLastBlogDataMethod,
	} = props;

	useEffect(() => {
		getHomeDataMethod();
		getLastBlogDataMethod();
	}, []);

	return (
		<section className='home-section'>
			<div className='home-section__inner'>
				<div className='home-section__inner__text'>
					<h1 className='home-section__inner__title'>
						Hola! mi nombre es Eduardo Álvarez
					</h1>
					<h3 className='home-section__inner__subtitle'>
						Soy frontend developer y este es mi sitio web. Bienvenidx!!
					</h3>
				</div>
				<div className='home-section__inner__image'>
					<img
						className='home-section__inner__image__img'
						src='https://res.cloudinary.com/soy-eduardoalvarez/image/upload/v1595372290/%5B%22user%22%5D_view/proskynete.png'
						alt='Animoji de Eduardo Álvarez'
					/>
				</div>
			</div>

			<section className='home-section__content'>
				{homeContent.length > 0 ? (
					homeContent.map((data) => (
						<div key={data._id} className='markdown_text_transformed'>
							{transformMarkdownToHtml(data.content)}
						</div>
					))
				) : (
					<Loader text='Cargando contenido...' />
				)}
			</section>

			<section className='home-section__articles'>
				<p className='home-section__articles__title'>
					Últimos artículos publicados
				</p>
				<Link to='/blog' className='home-section__articles__subtitle'>
					Ver todos
				</Link>

				{lastArticles.length > 0 ? (
					lastArticles.map((data) => <Article key={data._id} {...data} />)
				) : (
					<div className='home-section__articles__loader'>
						<Loader text='Cargando artículos...' />
					</div>
				)}
			</section>
		</section>
	);
};

Home.propTypes = {
	homeContent: PropTypes.instanceOf(Array).isRequired,
	lastArticles: PropTypes.instanceOf(Array).isRequired,
	getHomeDataMethod: PropTypes.func.isRequired,
	getLastBlogDataMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		homeContent: state.home.content,
		lastArticles: state.article.content,
	}),
	(dispatch) => ({
		getHomeDataMethod: getHomeDataAction(dispatch),
		getLastBlogDataMethod: getLastBlogDataAction(dispatch),
	}),
)(memo(Home));

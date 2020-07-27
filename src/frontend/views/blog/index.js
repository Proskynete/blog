import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBlogDataAction } from '../../actions';
import Article from '../../components/article';
import Loader from '../../components/loader';
import './index.scss';

const Blog = (props) => {
	const { articles, getBlogDataMethod } = props;

	useEffect(() => {
		getBlogDataMethod();
	}, []);

	return (
		<section className='blog-section'>
			<div className='blog-section__inner'>
				<h1 className='blog-section__inner__title'>Artículos publicados</h1>

				<section className='blog-section__inner__container'>
					{articles.length > 0 ? (
						articles.map((data) => <Article key={data._id} {...data} />)
					) : (
						<div className='home-section__articles__loader'>
							<Loader text='Cargando artículos...' />
						</div>
					)}
				</section>
			</div>
		</section>
	);
};

Blog.propTypes = {
	articles: PropTypes.instanceOf(Array).isRequired,
	getBlogDataMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		articles: state.article.content,
	}),
	(dispatch) => ({
		getBlogDataMethod: getBlogDataAction(dispatch),
	}),
)(memo(Blog));

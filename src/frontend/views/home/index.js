import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { transformMarkdownToHtml } from '../../helpers/transform_markdown.helper';
import { getHomeDataAction } from '../../actions';
import './index.scss';

const Home = (props) => {
	const { homeContent, getHomeDataMethod } = props;

	useEffect(() => {
		getHomeDataMethod();
	}, []);

	return (
		<div className='home-section'>
			<div className='home-section__inner'>
				<h1 className='home-section__inner__title'>
					Hola! mi nombre es Eduardo Álvarez
				</h1>
				<h3 className='home-section__inner__subtitle'>
					Soy frontend developer y este es mi sitio web. Bienvenidx!!
				</h3>
				<div className='home-section__inner__image'>
					<img
						className='home-section__inner__image__img'
						src='https://res.cloudinary.com/soy-eduardoalvarez/image/upload/v1595372290/%5B%22user%22%5D_view/proskynete.png'
						alt='Animoji de Eduardo Álvarez'
					/>
				</div>
			</div>

			<div className='home-section__content'>
				{homeContent.length > 0
					? homeContent.map((data) => (
							<div key={data._id} className='markdown_text_transformed'>
								{transformMarkdownToHtml(data.content)}
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

Home.propTypes = {
	homeContent: PropTypes.array.isRequired,
	getHomeDataMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		homeContent: state.home.content,
	}),
	(dispatch) => ({
		getHomeDataMethod: getHomeDataAction(dispatch),
	}),
)(memo(Home));

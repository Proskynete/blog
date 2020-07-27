import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { transformMarkdownToHtml } from '../../helpers/transform-markdown.helper';
import { getAboutMeDataAction } from '../../actions';
import Loader from '../../components/loader';
import './index.scss';

const AboutMe = (props) => {
	const { aboutMeContent, getAboutMeDataMethod } = props;

	useEffect(() => {
		getAboutMeDataMethod();
	}, []);

	return (
		<section className='about-me-section'>
			<div className='about-me-section__inner'>
				<section className='about-me-section__inner__container'>
					{aboutMeContent.length > 0 ? (
						aboutMeContent.map((data) => (
							<article
								key={data._id}
								className='about-me-section__inner__container__content'
							>
								<div className='about-me-section__inner__container__content__header'>
									<p className='about-me-section__inner__container__content__header__title'>
										{data.title}
									</p>
									<p className='about-me-section__inner__container__content__header__subtitle'>
										{data.subtitle}
									</p>
								</div>
								<div key={data._id} className='markdown_text_transformed'>
									{transformMarkdownToHtml(data.content)}
								</div>
							</article>
						))
					) : (
						<Loader text='Cargando contenido...' />
					)}
				</section>
			</div>
		</section>
	);
};

AboutMe.propTypes = {
	aboutMeContent: PropTypes.instanceOf(Array).isRequired,
	getAboutMeDataMethod: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		aboutMeContent: state.aboutMe.content,
	}),
	(dispatch) => ({
		getAboutMeDataMethod: getAboutMeDataAction(dispatch),
	}),
)(memo(AboutMe));

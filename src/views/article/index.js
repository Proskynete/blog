import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { prettyFormat } from '@Helpers/date-format';
import { transformMarkdownToHtml } from '@Helpers/print-html.helper';
import { connect } from 'react-redux';
import { getArticleBySlugAction } from '@Actions/';
import { AuthorComponent, Line, TableOfContent } from '@Components/';
import { highlightFormat } from '@Helpers/highlight.helper.js';
import { changeMetadataValue } from '@Helpers/add_metadata.helper';
import { startInTop } from '@Helpers/start_in_top.helper';
import mapOptions from '@Helpers/options_to_render.helper';
import { printReadingTime } from '@Helpers/reading_time.helper';
import './index.scss';

const ArticleView = props => {
	const { slug } = useParams();
	const { articleData, getArticleBySlugMethod } = props;

	useEffect(() => {
		startInTop();
		getArticleBySlugMethod(slug);
	}, []);

	highlightFormat();

	return (
		<>
			{changeMetadataValue({
				title: articleData.title,
				description: articleData.description,
				urlImage: articleData.image_url,
			})}
			<div className="container-fluid">
				<div className="row justify-content-md-center">
					<div className="col col-md-8">
						<div className="container">
							<div className="blog-blog-article">
								<div className="blog-article__header">
									<h1>{articleData.title}</h1>
									<div className="blog-article__header__info">
										<span className="blog-article__header__info__published">
											<i className="far fa-calendar-alt" />
											Publicado el {prettyFormat(articleData.create_at)}
										</span>
										<span className="blog-article__header__info__read">
											<i className="far fa-clock" />
											{printReadingTime(articleData.reading_time)}
										</span>

										<span className="blog-article__header__info__tags">
											<i className="fas fa-tag" />
											{mapOptions[articleData.tags]}
										</span>
									</div>
								</div>
								<div className="blog-article__body">
									<div className="blog-article__body__header">
										<img
											className="blog-article__body__header__image"
											src={articleData.image_url}
											alt={articleData.title}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="blog-article__body__content">
							<div className="row">
								<div className="col-12 col-md-2">
									<TableOfContent />
								</div>
								<div className="col-12 col-md-8">
									{transformMarkdownToHtml(articleData.content)}
									<Line />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row justify-content-md-center">
					<div className="col col-md-8">
						<div className="container">
							<AuthorComponent {...articleData.create_by} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

ArticleView.propTypes = {
	articleData: PropTypes.object.isRequired,
	getArticleBySlugMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		articleData: state.articleData.articleContent,
	}),
	dispatch => ({
		getArticleBySlugMethod: getArticleBySlugAction(dispatch),
	}),
)(ArticleView);

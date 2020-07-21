import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomeDataAction } from '../../actions';
import './index.scss';

const Home = (props) => {
	const { homeContent, getHomeDataMethod } = props;

	useEffect(() => {
		getHomeDataMethod();
	}, []);

	console.log(homeContent);

	return (
		<div className='home-section'>
			<div className='home-section__inner container'>
				<h1 className='home-section__inner__title'>
					Hola! mi nombre es Eduardo Álvarez
				</h1>
				<h3 className='home-section__inner__subtitle'>
					Soy desarrollador web y este es mi sitio web. Bienvenidx!!
				</h3>
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

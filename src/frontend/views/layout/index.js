import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Layout = (props) => {
	const { children } = props;

	return <div className='layout'>{children}</div>;
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Layout;

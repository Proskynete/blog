import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = (props) => {
	const { children } = props;

	return (
		<header className='header'>{children.map((section) => section)}</header>
	);
};

Header.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Header;

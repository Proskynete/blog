import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

const Layout = (props) => {
	const { children } = props;

	return (
		<>
			<Header>
				<Nav />
			</Header>
			<div className='container'>{children}</div>
      <Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Layout;

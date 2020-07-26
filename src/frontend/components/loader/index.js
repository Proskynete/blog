import React from 'react';
import './index.scss';

const Loader = (props) => {
	const { text } = props;

	return (
		<div className='loader'>
			<i className='fas fa-spinner fa-spin' />
			<span className='loader__text'>{text}</span>
		</div>
	);
};

export default Loader;

import React, { memo } from 'react';
import './index.scss';

const Home = () => {
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

export default memo(Home);

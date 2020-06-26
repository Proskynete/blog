/* eslint-disable import/no-unresolved */
import React from 'react';
import config from '@Config/config-content';
import randomText from '@Helpers/random-text';
import { changeMetadataValue } from '@Helpers/add_metadata.helper';

import './index.scss';

const Loader = () => {
	return (
		<>
			{changeMetadataValue({ title: 'Cargando...' })}
			<div className='loader'>
				<div className='loader__inner'>
					<div className='loader__inner__spinner'>
						<i className='fab fa-react fa-spin' />
					</div>
					<p className='loader__inner__text'>{randomText(config.loaderText)}</p>
				</div>
			</div>
		</>
	);
};

export default Loader;

import React from 'react';
import './index.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner'>
				<div className='footer__inner__section'>
					<p className='footer__inner__section__text'>
						<a
							className='footer__inner__section__text__link'
							title='Ir a mi github'
							href='https://github.com/Proskynete'
							rel='noopener noreferrer'
							target='_blank'
						>
							Github
						</a>
					</p>
					<p className='footer__inner__section__text'>
						<a
							className='footer__inner__section__text__link'
							title='Ir a mi instagram'
							href='https://www.instagram.com/proskynete/'
							rel='noopener noreferrer'
							target='_blank'
						>
							Instagram
						</a>
					</p>
					<p className='footer__inner__section__text'>
						<a
							className='footer__inner__section__text__link'
							title='Ir a mi twitter'
							href='https://twitter.com/proskynete'
							rel='noopener noreferrer'
							target='_blank'
						>
							Twitter
						</a>
					</p>
				</div>
				<div className='footer__inner__section'>
					<p className='footer__inner__section__text'>
						&copy; 2020 por Eduardo Álvarez
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

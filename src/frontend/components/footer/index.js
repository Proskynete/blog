import React from 'react';
import { socialLinks } from '../../config/socials-links';
import './index.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner'>
				<div className='footer__inner__section'>
					{socialLinks.map((link) => (
						<p key={link.title} className='footer__inner__section__text'>
							<a
								className='footer__inner__section__text__link'
								title={link.title}
								href={link.url}
								rel='noopener noreferrer'
								target='_blank'
							>
								{link.label}
							</a>
						</p>
					))}
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

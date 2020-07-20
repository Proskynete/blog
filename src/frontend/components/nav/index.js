import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import './index.scss';

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);

	const socialNetworks = [
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/eduardoalvarezc/',
			icon: 'fab fa-linkedin-in',
		},
		{
			name: 'Github',
			url: 'https://github.com/Proskynete/',
			icon: 'fab fa-github',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/proskynete',
			icon: 'fab fa-twitter',
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/channel/UCVrAjdQkLTKOdG0TUFFJomw',
			icon: 'fab fa-youtube',
		},
	];

	const handleShowMenu = () => {
		setShowMenu(true);
	};

	const handleHideMenu = () => {
		setShowMenu(false);
	};

	return (
		<nav className='nav bd-grid'>
			<div>
				<Link to='/' className='nav__logo' onClick={handleHideMenu}>
					{'eduardoalvarez />'}
				</Link>
			</div>

			<div className={`nav__menu ${showMenu ? 'show' : ''}`}>
				<ul className='nav__list'>
					<div
						role='presentation'
						className='nav__close'
						onClick={handleHideMenu}
					>
						<i className='fas fa-times' />
					</div>
					<p className='nav__title'>Menú</p>
					{routes.map((route) =>
						route.show_nav ? (
							<li className='nav__item' key={route.name}>
								<Link
									to={route.path}
									className='nav__link'
									onClick={handleHideMenu}
								>
									{route.label}
								</Link>
							</li>
						) : null,
					)}
				</ul>

				<div className='nav__list'>
					<p className='nav__title'>Redes sociales</p>
					<div className='nav__item nav--social'>
						{socialNetworks.map((link) => (
							<a
								key={link.name}
								className='nav__social_link'
								href={link.url}
								rel='noopener noreferrer'
								target='_blank'
							>
								<i className={link.icon} title={link.name} />
							</a>
						))}
					</div>
				</div>
			</div>

			<div role='presentation' className='nav__toggle' onClick={handleShowMenu}>
				<i className='fas fa-bars' />
			</div>
		</nav>
	);
};

export default Nav;

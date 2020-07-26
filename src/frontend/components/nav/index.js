import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { socialLinks } from '../../config/socials-links';
import './index.scss';

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);

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
						{socialLinks.map((link) => (
							<span key={link.title}>
								<a
									title={link.title}
									className='nav__social_link'
									href={link.url}
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className={link.icon} />
								</a>
							</span>
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

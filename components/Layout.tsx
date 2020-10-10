import { PropsInterface } from 'models/layout.model';
import { FC } from 'react';

import Footer from './Footer';
import Meta from './Meta';

const Layout: FC<PropsInterface> = (props) => {
	const { customTitle, description, image, slug, children } = props;

	return (
		<>
			<Meta
				customTitle={customTitle}
				description={description}
				image={image}
				slug={slug}
			/>
			<main className='container-fluid'>
				{children}
				<Footer />
			</main>
		</>
	);
};

export default Layout;

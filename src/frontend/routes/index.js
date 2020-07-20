import Home from '../views/home';
import Blog from '../views/blog';
import AboutMe from '../views/about_me';

const routes = [
	{
		name: 'home',
		exact: true,
		path: '/',
		component: Home,
	},
	{
		name: 'blog',
		exact: true,
		path: '/blog',
		component: Blog,
	},
	{
		name: 'about-me',
		exact: true,
		path: '/sobre-mi',
		component: AboutMe,
	},
];

export default routes;

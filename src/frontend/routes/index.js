import Home from '../views/home';
import Blog from '../views/blog';
import Article from '../views/article';
import AboutMe from '../views/about_me';

const routes = [
	{
		show_nav: true,
		name: 'home',
		label: 'Inicio',
		exact: true,
		path: '/',
		component: Home,
	},
	{
		show_nav: true,
		name: 'blog',
		label: 'Blog',
		exact: true,
		path: '/blog',
		component: Blog,
	},
	{
		show_nav: false,
		name: 'article',
		label: 'Article',
		exact: true,
		path: '/blog/:slug',
		component: Article,
	},
	{
		show_nav: true,
		name: 'about-me',
		label: 'Quien soy',
		exact: true,
		path: '/sobre-mi',
		component: AboutMe,
	},
];

export default routes;

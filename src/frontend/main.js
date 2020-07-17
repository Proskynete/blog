import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './views/layout';

const mainMenu = routes.map((route) => (
	<Route
		key={route.name}
		path={route.path}
		exact={route.exact}
		component={(props) => <route.component {...props} />}
	/>
));

const App = () => (
	<BrowserRouter>
		<Switch>
			<Layout>{mainMenu}</Layout>
		</Switch>
	</BrowserRouter>
);

export default App;

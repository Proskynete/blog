import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

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
		<Switch>{mainMenu}</Switch>
	</BrowserRouter>
);

export default App;

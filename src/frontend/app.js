import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
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
		<Layout>
			<Switch>
				{mainMenu}
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;

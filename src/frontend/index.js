import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import store from './store';
import Main from './main';
import './assets/scss/index.scss';

const history = createBrowserHistory();

const root = document.querySelector('#root');

hydrate(
	<Provider store={store}>
		<Router history={history}>
			<Main />
		</Router>
	</Provider>,
	root,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { homeReducer } from './reducers';

import Main from './main';

const rootReducer = combineReducers({
	home: homeReducer,
});

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
	<Provider store={store}>
		<Router history={history}>
			<Main />
		</Router>
	</Provider>,
	document.getElementById('app'),
);

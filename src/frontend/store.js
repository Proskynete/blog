import window from 'global';
import { createStore, combineReducers, compose } from 'redux';
import { homeReducer } from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	home: homeReducer,
});

const store = createStore(rootReducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

export default store;

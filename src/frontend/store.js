import window from 'global';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, articleReducer, aboutMeReducer } from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	home: homeReducer,
	article: articleReducer,
	aboutMe: aboutMeReducer,
});

const store = createStore(
	rootReducer,
	preloadedState,
	composeEnhancers(applyMiddleware(thunk)),
);

delete window.__PRELOADED_STATE__;

export default store;

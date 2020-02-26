import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';

import AuthRecuder from './auth';
import TodoRecuder from './todo';

const reducers = combineReducers({
	todo: TodoRecuder,
	auth: AuthRecuder,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

export default store;

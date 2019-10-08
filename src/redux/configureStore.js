import { createStore, combineReducers } from 'redux';
import auth from './auth';

// Exemplo com redux
const reducers = combineReducers({
	auth,
});

const store = createStore(reducers);

export default store;

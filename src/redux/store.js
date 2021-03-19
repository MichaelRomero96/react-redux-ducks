import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//Ducks
import checkoutReducer from './checkoutDucks';
import mainReducer from './mainDucks';

const rootReducer = combineReducers({
    main: mainReducer,
    checkout: checkoutReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}
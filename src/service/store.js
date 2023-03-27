import thunk from 'redux-thunk';
import {mainReducer} from './reducers/mainReducer';
import { applyMiddleware, createStore, combineReducers, compose} from 'redux';


const rootReducer = combineReducers({
    mainReducer: mainReducer
   });

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunk), ...enhancerList);

export const initStore = () => createStore(rootReducer, {}, composedEnhancer);


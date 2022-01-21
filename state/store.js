import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

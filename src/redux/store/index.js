import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from '../reducers';

const persistedState = {
  userReducer: {
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
      loading: false,
      error: null,
  },
};

const store = createStore(
  userReducer,
  persistedState,
  applyMiddleware(thunk)
);

export default store;
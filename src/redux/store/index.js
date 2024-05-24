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

// const rootReducer = combineReducers({
//   user: userReducer,
// });

const store = createStore(
  userReducer,
  persistedState,
  applyMiddleware(thunk)
);

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
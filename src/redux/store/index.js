import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "../reducers/cartSlice";
import userReducer from "../reducers/index";

const rootReducer = combineReducers({
    cart: cartReducer,
    userReducer: userReducer,
});

const persistedState = {
    userReducer: {
        userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
        loading: false,
        error: null,
    },
    cart: {
        items: [],
    },
};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

export default store;

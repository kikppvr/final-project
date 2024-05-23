// import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

// Utility function to deep clone an object
const cloneDeep = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const initialState = {
    name: '',
    username: '',
    email: '',
    userImg: null
}

//User reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const loginState = cloneDeep(state);
            loginState.username = action.payload.username;
            loginState.userImg = action.payload.userImg;
            return loginState;
    
        case 'REGISTER':
            const registerState = cloneDeep(state);
            registerState.username = action.payload.username;
            registerState.name  = action.payload.name;
            registerState.email   = action.payload.email;
            return registerState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: userReducer,
})

const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
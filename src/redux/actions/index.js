import axios from "axios";
import { Types } from "./types";

const API_URL = "https://crudcrud.com/api/cba60f96ea334ca1ba4045c4d0499ba6/users";

// Action Creators
export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: Types.REGISTER_REQUEST });
    try {
        const response = await axios.post(API_URL, userData);
        dispatch({ type: Types.REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: Types.REGISTER_FAILURE, payload: error.message });
    }
};

export const loginUser = (userData) => async (dispatch) => {
    dispatch({ type: Types.LOGIN_REQUEST });
    try {
        const response = await axios.get(API_URL);
        const users = response.data;
        const user = users.find((u) => u.username === userData.username && u.password === userData.password) 
        if(user) {
            localStorage.setItem('userInfo', JSON.stringify(user));
            dispatch({ type: Types.LOGIN_SUCCESS, payload: user });
            return user;
        } else {
            dispatch({ type: Types.LOGIN_FAILURE, payload: 'Invalid credentials' });
            return null;
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        return null;
    }
};


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: Types.LOGOUT });
};

import axios from "axios";
import { Types } from "./types";

const API_URL = "https://crudcrud.com/api/89257c2057a04bebac9fc36bf88cf248/users"
// Then use this URL in your requests

// const API_URL = "/api/users";  // ใช้ Proxy Path

// Action Creators
export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: Types.REGISTER_REQUEST });
    try {
        const response = await axios.post(API_URL, userData);
        dispatch({ type: Types.REGISTER_SUCCESS, payload: response.data });
        return response.data;
    } catch (error) {
        dispatch({ type: Types.REGISTER_FAILURE, payload: error.message });
        return null;
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
        dispatch({ type: Types.LOGIN_FAILURE, payload: error.message });
        return null;
    }
};

export const updateProfile = (userData) => async (dispatch) => {
    // dispatch({ type: Types.UPDATE_PROFILE_REQUEST });
    // try {
    //     const response = await axios.put(`${API_URL}/${userData._id}`, userData);
    //     dispatch({ type: Types.UPDATE_PROFILE_SUCCESS, payload: response.data });
    //     localStorage.setItem('userInfo', JSON.stringify(response.data));
    // } catch (error) {
    //     dispatch({ type: Types.UPDATE_PROFILE_FAILURE, payload: error.message });
    //     throw error; // Rethrow เพื่อจัดการใน component
    // }
    dispatch({ type: Types.UPDATE_PROFILE_REQUEST });
    try {
        console.log("Updating user with data: ", userData); // Log the data to be updated
        const response = await axios.put(`${API_URL}/${userData._id}`, userData);
        dispatch({ type: Types.UPDATE_PROFILE_SUCCESS, payload: response.data });
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("Error updating profile: ", error.message); // Log the error message
        dispatch({ type: Types.UPDATE_PROFILE_FAILURE, payload: error.message });
        throw error; // Rethrow เพื่อจัดการใน component
    }
};


export const deleteUser = (userData) => async (dispatch) => {
    dispatch({ type: Types.DELETE_USER_REQUEST });
    try {
        const response = await axios.delete(`${API_URL}/${userData._id}`, userData);
        dispatch({ type: Types.DELETE_USER_SUCCESS, payload: response.data });
        localStorage.removeItem('userInfo');
        return null;
    } catch (error) {
        dispatch({ type: Types.DELETE_USER_FAILURE, payload: error.message });
        throw error; 
    }
};


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: Types.LOGOUT });
};


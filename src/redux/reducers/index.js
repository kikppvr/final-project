
import { Types } from "../actions/types";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_USER:
            return { ...state, userInfo: action.payload };
        case Types.LOGOUT_USER:
            return { ...state, userInfo: null};

        case Types.REGISTER_REQUEST:
        case Types.LOGIN_REQUEST:
        case Types.UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true, error: null};
        
        case Types.REGISTER_SUCCESS:
        case Types.LOGIN_SUCCESS: 
        case Types.UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };

        case Types.REGISTER_FAILURE:
        case Types.LOGIN_FAILURE: 
        case Types.UPDATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };
        
        case Types.LOGOUT: 
            return { ...state, userInfo: null };
        
        default: 
            return state;
    }
}

export default userReducer;
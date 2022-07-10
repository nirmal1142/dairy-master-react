import { authConstants } from "../constants";

const initialState = {
    isAuthenticated: false,
    data: "",
    error: "",
    loading: false,
    loginStatus: "",
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                loginStatus: "",
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                loginStatus: "success",
                data: action.data,
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                loginStatus: "failure",
                error: action.error,
            };
        case authConstants.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                data: "",
                error: "",
                loading: false,
                loginStatus: "",
            };
        case authConstants.INITIATE_AUTH:
            return {
                ...state,
                isAuthenticated: false,
                data: "",
                error: "",
                loading: true,
                loginStatus: "",
            };
        case authConstants.AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                data: "",
                error: action.error,
                loading: false,
                loginStatus: "",
            };
        case authConstants.CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: "",
            };
        default:
            return state;
    }
}
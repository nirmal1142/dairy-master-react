import { authConstants } from "../constants";


export const loginSuccess = (data) => {
    return {
        type: authConstants.LOGIN_SUCCESS,
        data,
    };
}

export const loginFailure = (error) => {
    return {
        type: authConstants.LOGIN_FAILURE,
        error,
    };
}

export const initiateAuth = () => {
    return {
        type: authConstants.AUTH_ERROR,
    };
};

export const authErrorClear = () => {
    return {
        type: authConstants.CLEAR_AUTH_ERROR,
    };
};

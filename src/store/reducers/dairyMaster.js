import { dairyMasterConstants } from "../constants";

const initialState = {
    data: [],
    error: "",
    loading: false,
    loginStatus: "",
}

export const dairyMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_REQUEST:
            return {
                ...state,
                loading: true,
                loginStatus: "",
            };
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginStatus: "success",
                data: action.data,
            };
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_ERROR:
            return {
                ...state,
                loading: false,
                loginStatus: "failure",
                error: action.error,
            };
        case dairyMasterConstants.CLEAR_DAIRY_MASTER_ERROR:
            return {
                ...state,
                error: "",
            };
        default:
            return state;
    }
}
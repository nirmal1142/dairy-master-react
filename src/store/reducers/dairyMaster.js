import { dairyMasterConstants } from "../constants";

const initialState = {
    data: [],
    error: "",
    loading: false,
    status: "",
}

export const dairyMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_REQUEST:
            return {
                ...state,
                loading: true,
                status: "",
                error: "",
            };
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: "success",
                data: action?.payload,
                error: "",
            };
        case dairyMasterConstants.GET_ALL_DAIRY_MASTER_ERROR:
            return {
                ...state,
                loading: false,
                status: "failure",
                error: action.payload,
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


const initialStateAdd = {
    data: {},
    error: "",
    loading: false,
    status: "",
}

export const dairyMasterAddReducer = (state = initialStateAdd, action) => {
    switch (action.type) {
        case dairyMasterConstants.ADD_DAIRY_MASTER_REQUEST:
            return {
                ...state,
                loading: true,
                status: "",
                error: "",
            };
        case dairyMasterConstants.ADD_DAIRY_MASTER_SUCCESS:
            return {
                ...state,
                loading: false,
                status: "success",
                data: action?.payload,
                error: "",
            };
        case dairyMasterConstants.ADD_DAIRY_MASTER_ERROR:
            return {
                ...state,
                loading: false,
                status: "failure",
                data: "",
                error: action.payload,
            };
        case dairyMasterConstants.CLEAR_ADD_DAIRY_MASTER_ERROR:
            return {
                ...state,
                error: "",
                data: "",
                loading: false,
                status: "",
            };
        default:
            return state;
    }
}

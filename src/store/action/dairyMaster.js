import { dairyMasterConstants } from "../constants";


export const getAllDairyMasterRequest = () => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_REQUEST,
    };
}

export const getAllDairyMasterSuccess = (data) => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_SUCCESS,
        data,
    };
}

export const getAllDairyMasterError = (error) => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_ERROR,
        error,
    };
}

export const clearDairyMasterError = () => {
    return {
        type: dairyMasterConstants.CLEAR_DAIRY_MASTER_ERROR,
    };
}

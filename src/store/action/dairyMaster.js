import { dairyMasterConstants } from "../constants";


//  ----------  GET ALL DAIRY MASTER  ----------

export const getAllDairyMasterRequest = () => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_REQUEST,
    };
}

export const getAllDairyMasterSuccess = (data) => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_SUCCESS,
        payload: data,
    };
}

export const getAllDairyMasterError = (error) => {
    return {
        type: dairyMasterConstants.GET_ALL_DAIRY_MASTER_ERROR,
        payload: error,
    };
}

export const clearDairyMasterError = () => {
    return {
        type: dairyMasterConstants.CLEAR_DAIRY_MASTER_ERROR,
    };
}


//  ----------  ADD DAIRY MASTER  ----------


export const addDairyMasterRequest =(data)=>{
    return {
        type: dairyMasterConstants.ADD_DAIRY_MASTER_REQUEST,
        payload: data,
    };
}

export const addDairyMasterSuccess = (data) => {
    return {
        type: dairyMasterConstants.ADD_DAIRY_MASTER_SUCCESS,
        payload: data,
    };
}


export const addDairyMasterError = (error) => {
    return {
        type: dairyMasterConstants.ADD_DAIRY_MASTER_ERROR,
        payload: error,
    };
}

export const clearAddDairyMasterError = () => {
    return {
        type: dairyMasterConstants.CLEAR_ADD_DAIRY_MASTER_ERROR,
    };
}


//  ----------  DELETE DAIRY MASTER  ----------


export const deleteDairyMasterRequest = (id) => {
    return {
        type: dairyMasterConstants.DELETE_DAIRY_MASTER_REQUEST,
        payload: id,
    };
}


export const deleteDairyMasterSuccess = (id) => {
    return {
        type: dairyMasterConstants.DELETE_DAIRY_MASTER_SUCCESS,
        payload: id,
    };
}


export const deleteDairyMasterError = (error) => {
    return {
        type: dairyMasterConstants.DELETE_DAIRY_MASTER_ERROR,
        payload: error,
    };
}


export const clearDeleteDairyMasterError = () => {
    return {
        type: dairyMasterConstants.CLEAR_DELETE_DAIRY_MASTER_ERROR,
    };
}


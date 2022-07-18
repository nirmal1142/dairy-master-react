import { toast } from "react-toastify";
import { ApiDelete, ApiGet, ApiPost } from "../../helpers/API/ApiData";
import {
    getAllDairyMasterError,
    getAllDairyMasterRequest,
    getAllDairyMasterSuccess,
    addDairyMasterError,
    addDairyMasterRequest,
    addDairyMasterSuccess,
    clearAddDairyMasterError,
    clearDeleteDairyMasterError,
    deleteDairyMasterRequest,
    deleteDairyMasterSuccess,
    deleteDairyMasterError,
} from "../action";

export const getAllDairyMaster = () => {
    return async (dispatch) => {
        dispatch(getAllDairyMasterRequest());
        await ApiGet("dairy-masteraster/get-all")
            .then((response) => {
                let reversedData = response.data.data.reverse();
                dispatch(getAllDairyMasterSuccess(reversedData));
            })
            .catch((error) => {
                dispatch(getAllDairyMasterError(error));
                toast.error(error.response?.data?.errors.detail);
            })
    }
}

export const addDairyMasterDetails = (data) => {
    return async (dispatch) => {
        dispatch(addDairyMasterRequest());
        await ApiPost("dairy-masteraster/daily-milk-details-add/", data)
            .then((response) => {
                dispatch(addDairyMasterSuccess(response.data));
                toast.success("Dairy Master Added Successfully");
            })
            .catch((error) => {
                dispatch(addDairyMasterError(error));
                toast.error(error.response?.data?.errors[0]);
            })
    }
}


export const deleteDairyMaster = (id) => {
    return async (dispatch) => {
        dispatch(deleteDairyMasterRequest());
        await ApiDelete(`dairy-masteraster/daily-milk-details-update?id=${id}`)
            .then((response) => {
                dispatch(deleteDairyMasterSuccess());
                toast.success("Dairy Master Deleted Successfully");
            }).catch((error) => {
                toast.error(error.response?.data?.errors[0]);
                dispatch(deleteDairyMasterError());
            }).finally(() => {
                dispatch(clearDeleteDairyMasterError());
                dispatch(getAllDairyMaster());
            }
            )
    }
}

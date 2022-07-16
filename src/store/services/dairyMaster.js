import { toast } from "react-toastify";
import { ApiGet, ApiPost } from "../../helpers/API/ApiData";
import {
    getAllDairyMasterError,
    getAllDairyMasterRequest,
    getAllDairyMasterSuccess,
    addDairyMasterError,
    addDairyMasterRequest,
    addDairyMasterSuccess,
    clearAddDairyMasterError,
} from "../action";

export const getAllDairyMaster = () => {
    return async (dispatch) => {
        dispatch(getAllDairyMasterRequest());
        await ApiGet("dairy-masteraster/get-all")
            .then((response) => {
                dispatch(getAllDairyMasterSuccess(response.data));
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

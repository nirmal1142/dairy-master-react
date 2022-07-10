import { toast } from "react-toastify";
import { ApiGet } from "../../helpers/API/ApiData";
import { getAllDairyMasterError, getAllDairyMasterRequest, getAllDairyMasterSuccess } from "../action";

export const getAllDairyMaster = (data) =>{
    return async (dispatch) => {
        dispatch(getAllDairyMasterRequest());
        await ApiGet("dairy-masteraster/get-all")
            .then((response) => {
                dispatch(getAllDairyMasterSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getAllDairyMasterError(error));
                console.log("error", error);
                toast.error(error.response?.data?.errors.detail);
            })
    }
}
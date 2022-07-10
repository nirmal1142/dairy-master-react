import { ApiPostNoAuth } from "../../helpers/API/ApiData";
import { loginFailure, loginSuccess } from "../action";
import * as authUtil from "../../helpers/utils/auth.util";
import { toast } from "react-toastify";

export const login = (data) => {
    return async (dispatch) => {
        dispatch(loginFailure());
        await ApiPostNoAuth("user/login/", data)
            .then((response) => {
                dispatch(loginSuccess({...response.data?.user_data}));
                authUtil.setToken(response?.data.token?.access);
                authUtil.setLogin(true)
                toast.success("Login Successful");
            })
            .catch((error) => {
                dispatch(loginFailure(error));
                toast.error(error.response?.data?.errors);
            })
    }
}
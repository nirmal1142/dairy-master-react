import { STORAGEKEY } from "../../config/APP/app.config";
import localStore from "./localstore.util";

export const getToken = () => localStore.get_data(STORAGEKEY.token);

export const setLogin = (flag) => localStore.store_data(STORAGEKEY.islogin, flag);

export const getLogin = () => localStore.get_data(STORAGEKEY.islogin);

export const setToken = (token) => localStore.store_data(STORAGEKEY.token, token);

export const logout = () => {
  localStore.remove_all();
  return true;
};

export const isLoggedIn = () => {
  const islogin = getLogin();
  return islogin === true ? true : false;
};

export const authenticate = () => {
  const token = getToken();
  return !!token;
};

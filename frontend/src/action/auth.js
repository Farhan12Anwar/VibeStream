import * as api from "../Api/index.js";
import { setcurrentuser } from "./currentuser.js";

export const login = (authdata) => async (dispatch) => {
  try {
    const { data } = await api.login(authdata);
    dispatch({ type: "AUTH", data });
    dispatch(setcurrentuser(JSON.parse(localStorage.getItem("profile"))));
  } catch (error) {
    alert(error);
  }
};

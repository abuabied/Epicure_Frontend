import { LoginData, RegistrationData } from "../../constants/interfaces";
import axios from "axios";
import { loginAPI, registerAPI } from "../../constants/fetchesAPIs";

export const userRegiter = async (data: RegistrationData) => {
  try {
    const res = await axios.post(registerAPI, data);
    console.log(res);
    return res;
  } catch (error: any) {
    if (error?.response?.status !== 400)
      return {
        data: { status: "error", msg: "Something went wrong! Try again." },
      };
    return {
      data: { status: "failure", msg: "Email already exists!" },
    };
  }
};

export const userLogin = async (data: LoginData) => {
  try {
    const res = await axios.post(loginAPI, data);
    return res;
  } catch (error: any) {
    if (error?.response?.status !== 400)
      return {
        data: { status: "error", msg: "Something went wrong! Try again." },
      };
    return {
      data: { status: "failure", msg: "Incorrect Email or password." },
    };
  }
};

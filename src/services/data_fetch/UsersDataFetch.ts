import { LoginData, RegistrationData } from "../../constants/interfaces";
import axios from "axios";
import { loginAPI, registerAPI } from "../../constants/fetchesAPIs";

export const userRegiter = async (data: RegistrationData) => {
  try {
    const res = await axios.post(registerAPI, data);
    return res;
  } catch (error) {
    return {
      data: { status: "error", msg: "Something went wrong! Try again." },
    };
  }
};

export const userLogin = async (data: LoginData) => {
  try {
    const res = await axios.post(loginAPI, data);
    return res;
  } catch (error) {
    return {
      data: { status: "error", msg: "Something went wrong! Try again." },
    };
  }
};

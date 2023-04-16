import { Typography, FormControl, InputLabel, Input } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { userLogin } from "../../../../services/data_fetch/UsersDataFetch";
import { StyledButton } from "../../../shared/button/StyledButton";
import {
  EmptyLine,
  DoubleEmptyLines,
} from "../../../shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../../shared/helper_components/MyContainers";
import { titleStyle, contentStyle } from "./TextStyles";
import isEmail from "validator/lib/isEmail";
import { createCookie } from "../../../../services/data/cookies/cookieFunctions";

export const LoginView = (args: { closeDialog: () => void }) => {
  const [buttonMode, setButtonMode] = useState("disabled");

  const checkEmptyInput = () => {
    const email = document.getElementById("email") as HTMLInputElement | null;
    const pass = document.getElementById("pass") as HTMLInputElement | null;
    if (email?.value === "" || pass?.value === "") setButtonMode("disabled");
    else setButtonMode("dark");
  };

  const loginCLick = async () => {
    const email = document.getElementById("email") as HTMLInputElement | null;
    const pass = document.getElementById("pass") as HTMLInputElement | null;
    const loginData = {
      email: email?.value ? email.value : "",
      password: pass?.value ? pass.value : "",
    };

    if (isEmail(loginData.email)) {
      const res: any = await userLogin(loginData);
      if (res?.data?.status === "success") {
        createCookie("loggedIn", true, 5 / (24 * 60));
        args.closeDialog();
        toast.success("Logged in for 5mins");
      } else if (res?.data?.status === "failure") toast.warning(res?.data?.msg);
      else toast.error(res?.data?.msg);
    } else {
      toast.warning("Enter a valid Email!");
    }
  };

  return (
    <ColumnContainer>
      <Typography sx={titleStyle}>sign in</Typography>
      <EmptyLine />
      <Typography sx={contentStyle}>
        To continue the order, please sign in
      </Typography>
      <DoubleEmptyLines />
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          placeholder="example@domain.ed"
          onChange={checkEmptyInput}
        />
      </FormControl>
      <EmptyLine />
      <FormControl>
        <InputLabel htmlFor="pass">Password</InputLabel>
          <Input
            id="pass"
            placeholder="Password"
            type="password"
            onChange={checkEmptyInput}
          />
      </FormControl>
      <DoubleEmptyLines />
      <StyledButton
        alignSelf={"center"}
        buttonText={"login"}
        buttonType={buttonMode}
        onClick={loginCLick}
      />
    </ColumnContainer>
  );
};

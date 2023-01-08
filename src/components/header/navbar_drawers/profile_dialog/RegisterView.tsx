import { Typography, FormControl, InputLabel, Input } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { RegistrationData } from "../../../../constants/interfaces";
import { validateRegisterData } from "../../../../helpers/resgisterFunctions";
import { createCookie } from "../../../../services/data/cookies/cookieFunctions";
import { userRegiter } from "../../../../services/data_fetch/UsersDataFetch";
import { StyledButton } from "../../../shared/button/StyledButton";
import {
  DoubleEmptyLines,
  EmptyLine,
} from "../../../shared/helper_components/EmptyLines";
import { ColumnContainer } from "../../../shared/helper_components/MyContainers";
import { titleStyle, contentStyle, passwordTipStyle } from "./TextStyles";

export const RegisterView = (args: { closeDialog: () => void }) => {
  const [buttonMode, setButtonMode] = useState("disabled");

  const checkEmptyInput = () => {
    const fname = document.getElementById("fname") as HTMLInputElement | null;
    const lname = document.getElementById("lname") as HTMLInputElement | null;
    const email = document.getElementById("email") as HTMLInputElement | null;
    const pass = document.getElementById("pass") as HTMLInputElement | null;
    const pass2 = document.getElementById("pass2") as HTMLInputElement | null;
    if (
      fname?.value === "" ||
      lname?.value === "" ||
      email?.value === "" ||
      pass?.value === "" ||
      pass2?.value === ""
    )
      setButtonMode("disabled");
    else setButtonMode("light");
  };

  const registerClick = async () => {
    const fname = document.getElementById("fname") as HTMLInputElement | null;
    const lname = document.getElementById("lname") as HTMLInputElement | null;
    const email = document.getElementById("email") as HTMLInputElement | null;
    const pass = document.getElementById("pass") as HTMLInputElement | null;
    const pass2 = document.getElementById("pass2") as HTMLInputElement | null;
    const pass2Val = pass2?.value ? pass2.value : "";
    const registerData: RegistrationData = {
      fname: fname?.value ? fname.value : "",
      lname: lname?.value ? lname.value : "",
      email: email?.value ? email.value : "",
      password: pass?.value ? pass.value : "",
    };

    const isValid = validateRegisterData(registerData);
    if (isValid?.length > 0) {
      isValid.forEach((err: any) => {
        toast.warning(err);
      });
    } else {
      if (pass2Val !== registerData.password)
        toast.warning("Passwords don't match!");
      else {
        const res: any = await userRegiter(registerData);
        if (res?.data?.status === "success") {
          toast.success(res?.data?.msg);
          createCookie("loggedIn", 'true', 1 / (24 * 60));
          args.closeDialog();
        } else if (res?.data?.status === "failure")
          toast.warning(res?.data?.msg);
        else toast.error(res?.data?.msg);
      }
    }
  };

  return (
    <ColumnContainer>
      <Typography sx={titleStyle}>Register</Typography>
      <EmptyLine />
      <Typography sx={contentStyle}>
        Please fill in the following form
      </Typography>
      <DoubleEmptyLines />
      <FormControl autoSave="false">
        <InputLabel htmlFor="fname">First name</InputLabel>
        <Input id="fname" placeholder="First name" onChange={checkEmptyInput} />
      </FormControl>
      <EmptyLine />
      <FormControl autoSave="false">
        <InputLabel htmlFor="lname">Last name</InputLabel>
        <Input id="lname" placeholder="Last name" onChange={checkEmptyInput} />
      </FormControl>
      <EmptyLine />
      <FormControl autoSave="false">
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          placeholder="example@domain.ed"
          onChange={checkEmptyInput}
        />
      </FormControl>
      <EmptyLine />
      <FormControl autoSave="false">
        <InputLabel htmlFor="pass">Password</InputLabel>
        <Input
          id="pass"
          placeholder="Password"
          type="password"
          onChange={checkEmptyInput}
        />
      </FormControl>
      <EmptyLine />
      <FormControl autoSave="false">
        <InputLabel htmlFor="pass2">Confirm Password</InputLabel>
        <Input
          id="pass2"
          placeholder="Password"
          type="password"
          onChange={checkEmptyInput}
        />
      </FormControl>
      <DoubleEmptyLines />
      <StyledButton
        alignSelf={"center"}
        buttonText={"register"}
        buttonType={buttonMode}
        onClick={registerClick}
      />
      <EmptyLine />
      <Typography sx={passwordTipStyle}>
        Password must contain at least:
        <EmptyLine />
        -Six characters
        <EmptyLine />
        -One lowercase letter
        <EmptyLine />
        -One uppercase letter
        <EmptyLine />
        -One digit
      </Typography>
    </ColumnContainer>
  );
};

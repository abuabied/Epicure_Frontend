import { RegistrationData } from "../constants/interfaces";
import passwordValidator from "password-validator";
import isEmail from "validator/lib/isEmail";

export const validateRegisterData = (data: RegistrationData) => {
  let errors = [];
  errors.push(isEmail(data.email) ? true : "Enter a valid Email!");
  errors.push(validatePassword(data.password));
  return errors.filter((err: any) => err !== true);
};

const validatePassword = (password: string) => {
  const schema = new passwordValidator();
  schema
    .is()
    .min(6) // Minimum length 6
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(1)
    .has()
    .not()
    .spaces();
  return schema.validate(password) ? true : "Make sure you entered a valid password!";
 
};

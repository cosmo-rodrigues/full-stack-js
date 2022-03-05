import { httpStatusCode } from "../constants/httpStatusCode";

import { HttpException } from "../utils/HttpException";

interface IUserProps {
  email: string;
  password: string;
}

const mailValidate = (email: string) => {
  if (email === undefined) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"email" is required');
  }
  if (email === "") {
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      '"email" is not allowed to be empty',
    );
  }
};

const passValidate = (password: string) => {
  if (password === undefined) {
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      '"password" is required',
    );
  }
  if (password === "") {
    throw new HttpException(
      httpStatusCode.BAD_REQUEST,
      '"password" is not allowed to be empty',
    );
  }
};

export const loginValidations = ({ email, password }: IUserProps) => {
  mailValidate(email);
  passValidate(password);
};

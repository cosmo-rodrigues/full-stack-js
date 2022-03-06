import { UserModel } from "../../models/userModel";
import { HttpException } from "../../utils/HttpException";
import { tokenGenerate } from "../../auth/tokenGenerator";

import { loginValidations } from "../../validations/login";

import { httpStatusCode } from "../../constants/httpStatusCode";

interface Props {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Props) => {
  loginValidations({ email, password });
  const alreadyRegisteredUser = await UserModel.findOne({ where: { email } });
  if (!alreadyRegisteredUser) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, "Invalid fields");
  }

  const token = tokenGenerate({ email });
  return token;
};

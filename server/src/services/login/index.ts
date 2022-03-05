import { UserModel } from "../../database/modules/User/userModels";
import { HttpException } from "../../utils/HttpException";
import { tokenGenerate } from "../../auth/tokenGenerator";

import { loginValidations } from "../../validations/login";

import { httpStatusCode } from "../../constants/httpStatusCode";

export const login = async (userInfos) => {
  loginValidations(userInfos);
  const { email } = userInfos;
  const alreadyRegisteredUser = await UserModel.findOne({ where: { email } });
  if (!alreadyRegisteredUser) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, "Invalid fields");
  }

  const token = tokenGenerate({ email });
  return token;
};

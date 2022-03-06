import { httpStatusCode } from '../../constants/httpStatusCode';
import { tokenGenerate } from '../../auth/tokenGenerator';
import { HttpException } from '../../utils/HttpException';
import { UserModel } from '../../models/userModel';

import * as userValidations from '../../validations/user';

export const createUser = async (displayName, email, password, image) => {
  userValidations.nameValidate(displayName);
  userValidations.mailValidate(email);
  userValidations.passValidate(password);
  const alreadyRegisteredUser = await UserModel.findOne({ where: { email } });
  if (alreadyRegisteredUser) {
    throw new HttpException(httpStatusCode.CONFLICT, 'User already registered');
  }

  await UserModel.create({
    displayName, email, password, image,
  });
  const token = tokenGenerate({ email });
  return token;
};

export const findAll = async () => {
  const usersFound = await UserModel.findAll();
  return usersFound;
};

export const findOne = async (id) => {
  const userFound = await UserModel.findOne({ where: { id } });
  return userFound;
};

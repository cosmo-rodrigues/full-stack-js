import jwt from 'jsonwebtoken';
import { httpStatusCode } from '../constants/httpStatusCode';
import { HttpException } from '../utils/HttpException';

const secret = process.env.JWT_SALT;

export const nameValidate = (displayName) => {
  if (displayName === '' || displayName === undefined) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"displayName" is required');
  }
  if (displayName.length < 8) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"displayName" length must be at least 8 characters long');
  }
};

export const emailIsvalid = (email) => {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
  const emailIsValid = regexEmail.test(email);
  return emailIsValid;
};

export const mailValidate = (email) => {
  if (email === '' || email === undefined) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"email" is required');
  }
  if (!emailIsvalid(email)) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"email" must be a valid email');
  }
};

export const passValidate = (password) => {
  if (password === '' || password === undefined) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"password" is required');
  }
  if (password.length < 6) {
    throw new HttpException(httpStatusCode.BAD_REQUEST, '"password" length must be 6 characters long');
  }
};

export const tokenValidator = (token) => {
  const decoded = jwt.verify(token, secret);
  if (!decoded) throw new HttpException(httpStatusCode.UNAUTHORIZED, 'Expired or invalid token');
};

import { NextFunction, Request, Response } from "express";
import { httpStatusCode } from "../../constants/httpStatusCode";
import { HttpException } from "../../utils/HttpException";

import * as userService from "../../services/user";

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const {
    displayName, email, password, image,
  } = request.body;

  try {
    const createdUser = await userService.createUser(
      displayName,
      email,
      password,
      image,
    );
    response.status(httpStatusCode.CREATED).json({ token: createdUser });
  } catch (error) {
    return next(error);
  }
  return next();
};

export const findAll = async (
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const getUsers = await userService.findAll();
    if (!getUsers) {
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    }

    return response.status(httpStatusCode.OK).send(getUsers);
  } catch (error) {
    return next(error);
  }
};

export const findOne = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { id } = request.params;
  try {
    const getUser = await userService.findOne(id);
    if (!getUser) {
      throw new HttpException(httpStatusCode.NOT_FOUND, "User does not exist");
    }
    return response.status(httpStatusCode.OK).send(getUser);
  } catch (error) {
    return next(error);
  }
};

import { User } from "../entity/User";
import { UserService } from "../service/userService";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "../utils/HttpException";
import { httpStatusCode } from "../constants/httpStatusCode";

const userService = new UserService();

export const create = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name, username, email, phone, website } = request.body;
    const user = new User(name, username, email, phone, website);
    await userService.create(user);
    response.send(httpStatusCode.CREATED).json({ token: user });
  } catch (error) {
    return next(error);
  }
};

export const findAll = async (
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.findAll();
    if (!users)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(users);
  } catch (error) {
    return next(error);
  }
};

export const findOne = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(request.params.id);
    const user = await userService.findOne(id);
    if (!user)
      throw new HttpException(httpStatusCode.NOT_FOUND, "User does not exist");
    response.json(user);
  } catch (error) {
    return next(error);
  }
};

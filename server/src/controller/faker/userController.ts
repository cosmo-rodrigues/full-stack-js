import { FakerService } from "../../service/fakerService";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../utils/HttpException";
import { httpStatusCode } from "../../constant/httpStatusCode";

const fakerService = new FakerService();


export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
  ) => {
  try {
    const data = request.body;
    const createdUser = await fakerService.createUser(data);
    if (!createdUser)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(createdUser).sendStatus(httpStatusCode.CREATED);
  } catch (error) {
    return next(error);
  }
};

export const findAllUsers = async (
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const users = await fakerService.findAllUsers();
    if (!users)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(users).sendStatus(httpStatusCode.OK);
  } catch (error) {
    return next(error);
  }
};

export const findOneUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  try {
    const id = request.params.id
    const foundUser = await fakerService.findOneUser(+id);
    if (!foundUser)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(foundUser).sendStatus(httpStatusCode.OK);
  } catch (error) {
    return next(error);
  }
};
import { FakerService } from "../service/fakerService";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "../utils/HttpException";
import { httpStatusCode } from "../constant/httpStatusCode";

const fakerService = new FakerService();


export const create = async (
  request: Request,
  response: Response,
  next: NextFunction
  ) => {
  try {
    const data = request.body;
    const createdUser = await fakerService.create(data);
    if (!createdUser)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(createdUser).sendStatus(httpStatusCode.CREATED);
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
    const users = await fakerService.findAll();
    if (!users)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(users).sendStatus(httpStatusCode.OK);
  } catch (error) {
    return next(error);
  }
};

export const findOne = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("AQUI")

  try {
    const id = request.params.id
    const foundUser = await fakerService.findOne(+id);
    if (!foundUser)
      throw new HttpException(httpStatusCode.BAD_REQUEST, "Nothing to show");
    response.json(foundUser).sendStatus(httpStatusCode.OK);
  } catch (error) {
    return next(error);
  }
};
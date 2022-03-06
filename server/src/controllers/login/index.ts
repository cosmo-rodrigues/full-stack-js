import { NextFunction, Request, Response } from "express";
import { login } from "../../services/login";
import { httpStatusCode } from "../../constants/httpStatusCode";

export const loginController = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const logged = await login(request.body);
    response.status(httpStatusCode.OK).json({ token: logged });
  } catch (error) {
    return next(error);
  }
  return next();
};

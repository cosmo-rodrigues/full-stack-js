import jwt, { JwtPayload } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import { httpStatusCode } from "../constants/httpStatusCode";

import { HttpException } from "../utils/HttpException";

const secret = process.env.JWT_SECRET;

const malFormedToken = new HttpException(
  httpStatusCode.UNAUTHORIZED,
  "Expired or invalid token",
);

interface IRequest extends Request {
  user: string | JwtPayload;
}

export const tokenValidator = (
  request: IRequest,
  _response: Response,
  next: NextFunction,
) => {
  const token = request.headers.authorization;
  if (!token) {
    throw new HttpException(httpStatusCode.UNAUTHORIZED, "Token not found");
  }
  try {
    const decoded = jwt.verify(token, secret);
    request.user = decoded;
  } catch (error) {
    return next(malFormedToken);
  }
  return next();
};

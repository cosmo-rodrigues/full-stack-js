import { Request, Response } from "express";
import { HttpException } from "../utils/HttpException";

const DEFAULT_ERR = {
  status: 500,
  message: "Internal Server Error",
};

export function handleError(
  error: HttpException,
  _request: Request,
  response: Response,
) {
  const { status, message } = error;

  if (error instanceof HttpException) {
    return response.status(status).json({ message });
  }

  return response
    .status(DEFAULT_ERR.status)
    .json({ message: DEFAULT_ERR.message });
}

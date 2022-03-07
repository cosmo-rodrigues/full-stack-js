import * as jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const tokenGenerate = (payload) => {
  const token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "3d",
  });
  return token;
};

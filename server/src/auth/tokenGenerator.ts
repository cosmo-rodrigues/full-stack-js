import jwt from "jsonwebtoken";

const secret = process.env.JWT_SALT;

interface PayloadProps {
  email: string;
}

export const tokenGenerate = ({ email }: PayloadProps) => {
  const token = jwt.sign(email, secret, {
    algorithm: "HS256",
    expiresIn: "3d",
  });
  return token;
};

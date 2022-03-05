import express from "express";

import { loginController } from "../controller/login";

const login = express.Router();

login.post("/", loginController);

export { login };

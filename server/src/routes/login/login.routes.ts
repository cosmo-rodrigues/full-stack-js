import express from "express";

import { loginController } from "../../controllers/login";

const login = express.Router();

login.get("/login", loginController);

export { login };

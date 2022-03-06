import express from "express";

import { login } from "./login/login.routes";
import { user } from "./user";

const router = express.Router();

router.use("/login", login);
router.use("/user", user);

export { router };

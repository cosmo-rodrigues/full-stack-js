import express from "express";
import { login } from "./login.routes";

const router = express.Router();

router.use("/login", login);

export { router };

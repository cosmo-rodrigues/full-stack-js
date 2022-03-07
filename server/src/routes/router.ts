import * as express from "express";
import { company } from "./company";
import { login } from "./login";
import { post } from "./posts";
import { user } from "./user";

export const router = express.Router();

router.use("/login", login);

router.use("/user", user);

router.use("/company", company);

router.use("/post", post);

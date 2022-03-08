import * as express from "express";
import { company } from "./company";
import { faker } from './faker';
import { login } from "./login";
import { post } from "./posts";
import { user } from "./user";

export const router = express.Router();

router.use('/faker', faker)

router.use("/login", login);

router.use("/user", user);

router.use("/company", company);

router.use("/post", post);

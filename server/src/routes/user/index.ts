import express from "express";

import { tokenValidator } from "../../middlewares/tokenValidator";
import * as userController from "../../controllers/user";

const user = express.Router();

user.post("/", userController.createUser);
user.get("/", userController.findAll);
user.get("/:id", tokenValidator, userController.findOne);

export { user };

import * as express from "express";
import * as userController from "../controller/userController";

export const user = express.Router();

user.post("/", userController.create);
user.get("/", userController.findAll);
user.get("/:id", userController.findOne);
// user.delete("/:id");

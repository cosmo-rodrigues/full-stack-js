import * as express from "express";
import * as userController from "../controller/faker/userController";
import * as postsController from "../controller/faker/postsController";

export const faker = express.Router();

faker.get("/users", userController.findAllUsers);
faker.get("/users/:id", userController.findOneUser);

faker.get("/posts", postsController.findAllPosts);
faker.get("/posts/:id", postsController.findAllPostsByUserId);
faker.get("/posts/:id", postsController.findOnePost);
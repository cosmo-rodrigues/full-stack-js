import * as express from "express";
import * as fakerController from "../controller/fakerController";

export const faker = express.Router();

faker.get("/", fakerController.findAll);
faker.get("/:id", fakerController.findOne);

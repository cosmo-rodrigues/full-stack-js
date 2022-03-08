import * as express from "express";
import * as fakerController from "../controller/fakerController";

export const faker = express.Router();

faker.post("/", fakerController.create);
faker.get("/", fakerController.findAll);
faker.get("/:id", fakerController.findOne);
// faker.delete("/:id");

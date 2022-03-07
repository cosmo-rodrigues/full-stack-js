import * as express from "express";

export const company = express.Router();

company.post("/");
company.get("/");
company.get("/:id");
company.delete("/:id");

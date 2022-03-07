import * as express from "express";

export const post = express.Router();

post.post("/");
post.get("/");
post.get("/:id");
post.put("/:id");
post.delete("/:id");

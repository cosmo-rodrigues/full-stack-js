import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";

import { handleError } from "./middleware/handleError";

import { db } from "./config/db";
import { router } from "./routes/router";

export const app = express();

db();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(handleError);
// app.use(logger("dev"));

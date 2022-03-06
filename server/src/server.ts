import express from "express";
import { router } from "./routes/index.routes";
import { handleError } from "./middlewares/handleError";
import db from './database';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (_request, response) => {
  response.send("Tô on");
});

app.use(router);
app.use(handleError);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log("ouvindo porta 3000!"));
});

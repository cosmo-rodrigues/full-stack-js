import express from "express";
import { router } from "./routes/index.routes";
import { handleError } from "./middlewares/handleError";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("ouvindo porta 3000!"));

app.get("/", (_request, response) => {
  response.send();
});

app.use(router);
app.use(handleError);

import { app } from "./app";

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(`Listen on ${PORT}`));

process.on("SIGINT", () => {
  server.close();
  console.log("App closed");
});

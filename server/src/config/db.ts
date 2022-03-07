import { createConnection } from "typeorm";
import { Address } from "../entity/Address";
import { Company } from "../entity/Company";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

export const db = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "talk_db",
    entities: [User, Post, Company, Address],
    synchronize: true,
    dropSchema: true,
    migrations: ["build/src/migration/*.ts"],
    cli: {
      migrationsDir: "src/migration/*.ts",
    },
  });
  console.log(`Connected to BD ${connection.options.database}`);

  process.on("SIGINT", () => {
    connection.close().then(() => console.log("Connection closed"));
  });
};

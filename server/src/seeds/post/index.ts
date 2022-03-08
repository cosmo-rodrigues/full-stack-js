import { Post } from "../../entity/Post";
import { MigrationInterface, QueryRunner } from "typeorm";
import { postSeed } from "./post";

export class PostSeedClass implements MigrationInterface {
  name = "PostSeedClass";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const GBP = await queryRunner.manager.save(
      queryRunner.manager.create<Post>(Post, postSeed)
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM post`);
  }
}

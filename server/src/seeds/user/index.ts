import { User } from "../../entity/User";
import { MigrationInterface, QueryRunner } from "typeorm";
import { userSeed } from "./user";

export class UserSeedClass implements MigrationInterface {
  name = "UserSeedClass";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const GBP = await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, userSeed)
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM user`);
  }
}

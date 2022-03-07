import { Company } from "../../entity/Company";
import { MigrationInterface, QueryRunner } from "typeorm";
import { companySeed } from "./company";

export class UserSeedClass implements MigrationInterface {
  name = "UserSeedClass";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const GBP = await queryRunner.manager.save(
      queryRunner.manager.create<Company>(Company, companySeed)
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM company`);
  }
}

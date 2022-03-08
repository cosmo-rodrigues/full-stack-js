import { Address } from "../../entity/Address";
import { MigrationInterface, QueryRunner } from "typeorm";
import { addressSeed } from "./address";

export class AddressSeedClass implements MigrationInterface {
  name = "AddressSeedClass";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const GBP = await queryRunner.manager.save(
      queryRunner.manager.create<Address>(Address, addressSeed)
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM address`);
  }
}

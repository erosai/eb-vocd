import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductInfo1681143874133 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsText2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsTest2" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsTest3" character varying(255)`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsTest3"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsTest2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsText2" character varying(255)`, undefined);
   }

}

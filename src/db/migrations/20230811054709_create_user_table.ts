import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user", (builder) => {
    builder.increments().notNullable();
    builder.string("email", 254).unique().notNullable();
    builder.string("username", 40).unique().notNullable();
    builder.string("password", 127).notNullable();
    builder.string("display_name", 40);
    builder.string("avatar_url", 2048);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("user");
}

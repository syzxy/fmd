import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user", (builder) => {
    builder.increments("user_id").notNullable();
    builder.string("email", 254).unique().notNullable();
    builder.string("username", 40).unique().notNullable();
    builder.string("password", 127).notNullable();
    builder.string("display_name", 40);
    builder.string("avatar_url", 2048);
  });

  await knex.schema.createTable("note", (builder) => {
    builder.increments("note_id").notNullable();
    builder.integer("author").unsigned().notNullable();
    builder.string("title").notNullable();
    builder.text("raw");
    builder.boolean("private").defaultTo(false);
    builder.foreign("author").references("user_id").inTable("user");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("note");
  await knex.schema.dropTable("user");
}

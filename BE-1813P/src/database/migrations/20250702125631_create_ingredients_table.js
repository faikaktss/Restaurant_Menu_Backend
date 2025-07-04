exports.up = function(knex) {
  return knex.schema.createTable('ingredients', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable().unique();
    table.boolean('is_allergen').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable();
    table.timestamp('deleted_at').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};

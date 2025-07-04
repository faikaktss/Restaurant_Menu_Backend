exports.up = function(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.text('description');
    table.decimal('price', 8, 2).notNullable();
    table.integer('category_id')
         .unsigned()
         .references('id')
         .inTable('categories')
         .onDelete('SET NULL');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable();
    table.timestamp('deleted_at').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
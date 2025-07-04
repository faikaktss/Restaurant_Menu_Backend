exports.up = function(knex) {
  return knex.schema.createTable('product_ingredients', function(table) {
    table.integer('product_id')
         .unsigned()
         .references('id')
         .inTable('products')
         .onDelete('CASCADE');

    table.integer('ingredient_id')
         .unsigned()
         .references('id')
         .inTable('ingredients')
         .onDelete('CASCADE');

    table.primary(['product_id', 'ingredient_id']);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('product_ingredients');
};
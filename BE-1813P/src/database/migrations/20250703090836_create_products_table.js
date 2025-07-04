/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products',function(table){
        table.increments('id').primary();//Otomatik artankey anahtarı
        table.string('name').notNullable().unique();
        table.string('description');
        table.decimal('price',8,2);
        table.string('image_url');
        table.integer('category_id').unsigned().notNullable();
        table.foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE');
        table.timestamps(true,true);
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');//Tabloyu silmek için kullanılır
};

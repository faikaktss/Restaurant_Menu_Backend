exports.seed = async function(knex){
  await knex('products').del();

  await knex('products').insert([
    { id: 1, name: 'Mercimek Çorbası', description: 'Klasik ev yapımı mercimek çorbası.', price: 25.00,  category_id: 1 },
    { id: 2, name: 'Domates Çorbası', description: 'Taze domateslerle hazırlanmış krema çorbası.', price: 28.00,  category_id: 1 },
    { id: 3, name: 'Adana Kebap', description: 'Geleneksel Adana usulü acılı kebap.', price: 95.00,  category_id: 2 },
    { id: 4, name: 'Tavuk Sote', description: 'Mantar ve biberlerle harmanlanmış tavuk sote.', price: 70.00,  category_id: 2 },
    { id: 5, name: 'Çoban Salata', description: 'Domates, salatalık, soğan ve biberden oluşan taze salata.', price: 35.00,  category_id: 3 },
    { id: 6, name: 'Sütlaç', description: 'Fırında geleneksel sütlaç.', price: 40.00,  category_id: 4 },
    { id: 7, name: 'Kola', description: 'Coca-Cola 330ml.', price: 20.00,category_id: 5 }
]);
};
exports.seed = async function(knex) {
  // Mevcut tüm kayıtları sil
  await knex('product_ingredients').del();

  // Ürün-malzeme ilişkilerini ekle
  // product_id'ler 03_products seed'indeki id'lerle, ingredient_id'ler 02_ingredients seed'indeki id'lerle eşleşmeli
  await knex('product_ingredients').insert([
    // Mercimek Çorbası (id:1)
    { product_id: 1, ingredient_id: 6 }, // Mercimek
    { product_id: 1, ingredient_id: 3 }, // Soğan
    { product_id: 1, ingredient_id: 10 }, // Zeytinyağı

    // Domates Çorbası (id:2)
    { product_id: 2, ingredient_id: 1 }, // Domates
    { product_id: 2, ingredient_id: 8 }, // Süt (Krema için varsayalım)
    { product_id: 2, ingredient_id: 7 }, // Un (Kıvam için varsayalım)

    // Adana Kebap (id:3)
    { product_id: 3, ingredient_id: 4 }, // Kırmızı Et
    { product_id: 3, ingredient_id: 3 }, // Soğan

    // Tavuk Sote (id:4)
    { product_id: 4, ingredient_id: 5 }, // Tavuk Göğsü
    { product_id: 4, ingredient_id: 3 }, // Soğan

    // Çoban Salata (id:5)
    { product_id: 5, ingredient_id: 1 }, // Domates
    { product_id: 5, ingredient_id: 2 }, // Salatalık
    { product_id: 5, ingredient_id: 3 }, // Soğan
    { product_id: 5, ingredient_id: 10 }, // Zeytinyağı
    { product_id: 5, ingredient_id: 11 }, // Marul

    // Sütlaç (id:6)
    { product_id: 6, ingredient_id: 8 }, // Süt
    { product_id: 6, ingredient_id: 12 }, // Pirinç
    { product_id: 6, ingredient_id: 9 } // Yumurta
  ]);
};
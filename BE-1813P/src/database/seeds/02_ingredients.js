exports.seed = async function(knex){
  await knex('ingredients').del();

  //Malzemeleri ekle
  await knex('ingredients').insert([
    { id: 1, name: 'Domates', is_allergen: false },
    { id: 2, name: 'Salatalık', is_allergen: false },
    { id: 3, name: 'Soğan', is_allergen: false },
    { id: 4, name: 'Kırmızı Et', is_allergen: false },
    { id: 5, name: 'Tavuk Göğsü', is_allergen: false },
    { id: 6, name: 'Mercimek', is_allergen: false },
    { id: 7, name: 'Un', is_allergen: true }, // Alerjen
    { id: 8, name: 'Süt', is_allergen: true }, // Alerjen
    { id: 9, name: 'Yumurta', is_allergen: true }, // Alerjen
    { id: 10, name: 'Zeytinyağı', is_allergen: false },
    { id: 11, name: 'Marul', is_allergen: false },
    { id: 12, name: 'Pirinç', is_allergen: false }
]);
};
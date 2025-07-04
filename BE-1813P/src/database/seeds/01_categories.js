exports.seed = async function(knex){
  await knex('categories').del();//veri eklemeden önce tüm kayıtları siliyoruz

//Kategorileri ekle
await knex('categories').insert([
  {id:1,name:'Çorbalar',description:'Günün çorbaları ve yöresel çorbalar'},
  {id:2,name:'Ana Yemekler',description:'Et tavuk ve sebze ağırlıklı yemekler'},
  {id:3,name:'Salatalar',description:'Taze ve sağlıklı salata seçenekleri'},
  {id:4,name:'Tatlıar',description:'Geleneksel ve modern tatlılar'},
  {id:5,name:'İçecekler',description:'Soğuk ve sıcak ilişkiler'}
]);
};


const knex = require('../config/dbConfig');

const getAllCategories = async (req, res) => {
  console.log('[CONTROLLER LOG] getAllCategories function called. Attempting to fetch from DB.'); // Controller fonksiyonu çağrıldığında log
  try {
    const categories = await knex('categories').select('*');
    console.log('[CONTROLLER LOG] Categories fetched from DB successfully. Count:', categories.length); // Veritabanından veri çekildiğinde log
    res.status(200).json(categories);
  } catch (error) {
    console.error('[CONTROLLER ERROR] Error fetching categories: ', error); // Hata durumunda log
    res.status(500).json({ message: 'Internal Server Error', detail: error.message }); // Hata mesajını daha detaylı gönder
  }
};


//Kategori ekleme(POST)
const addCategory = async(req,res) =>{
  const {name,description} = req.body;//istek gövdesinden name ve description'u al
  console.log(`[controller log] addCateg function called. Data Name =${name} Descriptino =${description}`);

  if(!name){
    return res.status(400).json({message:'category name is required'});
  }
  try{
    //yeni kategoriyi veritabanına ekliyoruz
    const [newCategory] = await knex('categories').insert({name,description}).returning('*');
    console.log('[Contorller log] category added successfully: ',newCategory);
    res.status(201).json(newCategory);
  }catch(error){
    console.error('[Controller error] Errır adding category: ',error);
    if(error.code==='234505'){
      return res.status(409).json({message:'Category with this name already exists'});
  }
  res.status(500).json({message:'Internal Server Error',detail : error.message});
  }
}


//Kategoriyi Güncelleme

const updateCategory = async(req,res) =>{
  const {id} = req.params;//URl'den kategoriy ID'sini al
  const {name,description} = req.body;//istek gövdesinden güncellenecek verileri al
  console.log(`[Controller log] updateCategory function called. ID:${id}, Data: Name ${name}, Description:${description}`);
 
  if(!name && !description){  
    return res.status(400).json({message:'At least one filed (name or description) is required for update'});
  }
  try{
    const updatedRows = await knex('categories')
    .where({id})//belirtilen ID'ye sahip kategoriyi bul
    .update({name,description})//Verileri güncelle
    .returning('*');

//hiç bir kategori güncellenmediyse
    if(updatedRows.length ===0){
      console.log(`[Controller log] Categroy with ID ${id} not found for update.`);
      return res.status(404).json({message:'Category not found'});
    }
    console.log('[Controller log] Category updated successfuly:',updatedRows[0]);
    res.status(200).json(updatedRows[0]);//Güncellene kategoriyi döndür
}catch(error){
  console.error('[Controller error] error updating category: ',error);
  if(error.code === '23505'){
    return res.status(409).json({message:error});
  }  
  return res.status(500).json({ message: 'Category name already exists.', detail: error.detail});
}
}
//Kategoriyi Silme(Delete)
const deleteCategory = async(req,res)=>{
  const{id} = req.params;//URL'den kategori ID'sini al
  console.log(`[Controller log] deleteCategory function called. ID: ${id}`);

  try{
    const deleteRows = await knex('categories')
    .where({id})//Belirtilen ID'yi al
    .del(); //silme işlemini yap
  
    if(deleteRows===0){
      console.log(`[Controller log] category with ID ${id} not found deletions`);
      res.status(404).json({message:'Category not found'});
  }
  console.log('[Controller log] category deleted successfully. rows affected: ',deleteRows);
  res.status(204).send();
  }catch(error){
  console.error('[controller error] error deleting category:', error);
    res.status(500).json({message:'Internal server error',detail:error.message});
  }
};


module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory
};
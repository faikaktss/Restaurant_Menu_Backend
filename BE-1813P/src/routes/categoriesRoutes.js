const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

console.log('[ROUTES LOG] categoriesRoutes file loaded. Defining / route.'); // Bu dosya yüklendiğinde log

//Kategorileri getir
router.get('/',categoriesController.getAllCategories);

//Kategori ekle
router.post('/',categoriesController.addCategory);

//Kategori Güncelleme
router.put('/:id',categoriesController.updateCategory);

//Kategori silme
router.delete('/:id',categoriesController.deleteCategory);

module.exports = router;
const express = require('express');
const router = express.Router();//Express router objesi oluşturuyoruz
const productsController = require('../controllers/productsController');

//Post isteği
router.post('/',productsController.addProduct);
//Tüm ürünleri listeleme
router.get('/',productsController.getAllProducts);
//get isteği
router.get('/:id',productsController.getProductById);
//put isteği
router.put('/:id',productsController.updateProduct);
//delete isteği
router.delete('/:id', productsController.deleteProduct)
module.exports = router;
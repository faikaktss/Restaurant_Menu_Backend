// src/controllers/productsController.js

const knex = require('../config/dbConfig');

// Add a new product
const addProduct = async (req, res) => {
    const { name, description, price, image_url, category_id } = req.body;

    if (!name || !price || !category_id) {
        return res.status(400).json({ message: 'Name, price, and category_id are required' });
    }

    try {
        // Kategori ID'sinin varlığını kontrol et
        const categoryExists = await knex('categories').where({ id: category_id }).first();
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        const [newProductId] = await knex('products').insert({
            name,
            description,
            price,
            image_url,
            category_id
        });
        const newProduct = await knex('products').where({ id: newProductId }).first();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await knex('products')
            .select(
                'products.id',
                'products.name',
                'products.description',
                'products.price',
                'products.image_url',
                'products.created_at',
                'products.updated_at',
                // Kategori bilgilerini de ekliyoruz
                'categories.name as category_name', // Kategori adını 'category_name' olarak alias veriyoruz
                'categories.description as category_description', // Kategori açıklamasını 'category_description' olarak alias veriyoruz
                'products.category_id' // Ürünün kendi category_id'si de hala görünsün
            )
            .join('categories', 'products.category_id', '=', 'categories.id'); // 'categories' tablosuyla join yapıyoruz

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await knex('products')
            .select(
                'products.id',
                'products.name',
                'products.description',
                'products.price',
                'products.image_url',
                'products.created_at',
                'products.updated_at',
                // Kategori bilgilerini de ekliyoruz
                'categories.name as category_name',
                'categories.description as category_description',
                'products.category_id'
            )
            .join('categories', 'products.category_id', '=', 'categories.id')
            .where('products.id', id) // 'products.id' olarak belirtmek daha iyi
            .first();

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving product', error: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url, category_id } = req.body;

    if (!name || !price || !category_id) {
        return res.status(400).json({ message: 'Name, price, and category_id are required for update' });
    }

    try {
        // Kategori ID'sinin varlığını kontrol et (güncellemede de önemli)
        const categoryExists = await knex('categories').where({ id: category_id }).first();
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        const updatedRows = await knex('products').where({ id }).update({
            name,
            description,
            price,
            image_url,
            category_id
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Product not found for update.' });
        }

        const updatedProduct = await knex('products').where({ id }).first();
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedRows = await knex('products').where({ id }).del();

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(204).send(); // No Content, successful deletion
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

// Tüm fonksiyonları dışa aktar
module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct, 
    deleteProduct  
};
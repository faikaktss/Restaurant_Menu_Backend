// src/config/server.js
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000; 

// Rota dosyalarını doğru isimlerle import edin
const categoriesRoutes = require('../routes/categoriesRoutes');
const productsRoutes = require('../routes/productsRoutes'); 

// Middleware'ler
app.use(express.json());
app.use(cors());

// Her gelen isteği logla (
app.use((req, res, next) => {
    console.log(`[SERVER LOG] Request received: ${req.method} ${req.url}`);
    next();
});

console.log('[SERVER LOG] Express app started. Attempting to mount routes.');

// Rotaları uygulamaya bağlayın
app.use('/api/categories', categoriesRoutes);
console.log('[SERVER LOG] /api/categories route mounted.');

app.use('/api/products', productsRoutes); 
console.log('[SERVER LOG] /api/products route mounted.');

// Ana rota
app.get('/', (req, res) => {
    console.log('[SERVER LOG] Root ("/") route hit.');
    res.send('Restaurant Menu API is running!');
});

// Sunucuyu başlatın
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
    console.log('[SERVER LOG] Server successfully started and listening for requests.');
});

module.exports = app;
const knex = require('knex');
const knexConfig = require('../config/knexfile');

const environment = process.env.NODE_ENV || 'development'; // 'environment' doğru yazılmış mı?
const connection = knex(knexConfig[environment]);

module.exports = connection;
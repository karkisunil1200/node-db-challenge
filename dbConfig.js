const knex = require('knex');

const config = require('./knexfile');

const db = config(config.development);

module.exports = db;

/* istanbul ignore file */
const { Pool } = require('pg');
const env = require('../../../../config/env');

const pool = new Pool();

module.exports = pool;

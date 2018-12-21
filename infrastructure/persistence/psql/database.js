const pgp = require('pg-promise')({});
const config = require('../../config/app');

module.exports = {
    db: pgp(config.databaseConnectionUrl)
};
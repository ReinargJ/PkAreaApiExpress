const mariadbclient = require('mariadb');
const {mariadb} = require('./config.js');

const pool = mariadbclient.createPool({
    host: mariadb.host,
    user: mariadb.user,
    password: mariadb.password,
    database: mariadb.database,
    connectTimeout: 500
  });

module.exports = {
    pool
}
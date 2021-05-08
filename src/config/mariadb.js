const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    connectionLimit: 5,
    database: 'pkarea',
    connectTimeout: 1000
  });

module.exports = {
    pool
}
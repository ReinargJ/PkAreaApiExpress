const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pkarea',
    connectTimeout: 500
  });

module.exports = {
    pool
}
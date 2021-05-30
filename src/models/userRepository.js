const { pool } = require("../config/mariadb");


async function findByName(name) {
    conn = await pool.getConnection();
    let rows = await conn.query(`SELECT name, password from user where name = '${name}'`);
    conn.end();
    return rows[0];
}

module.exports = {
    findByName
}
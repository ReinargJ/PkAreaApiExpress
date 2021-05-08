const { pool } = require("../config/mariadb");


async function fetchPks() {
    conn = await pool.getConnection();
    let rows = await conn.query("SELECT * from pk");
    return rows;
}

module.exports = {
    fetchPks
}
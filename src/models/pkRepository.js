const logger = require("../config/logger");
const { pool } = require("../config/mariadb");
const {  outputFullQuery } = require("../utils/pkUtil");


async function fetchPks() {
    conn = await pool.getConnection();
    let rows = await conn.query("SELECT * from pk");
    return rows;
}

async function saveAllPks(updates, inserts) {
    const query = outputFullQuery(updates, inserts);

    if (query.length > 0) {
        conn = await pool.getConnection();
        let rows = await conn.query(query);
        logger.info("Query returned :" + JSON.stringify(rows));
        return rows;
    }
}

module.exports = {
    fetchPks,
    saveAllPks
}
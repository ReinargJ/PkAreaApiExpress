const logger = require("../config/logger");
const { pool } = require("../config/mariadb");
const { outputFullQuery, outputInsert } = require("../utils/pkUtil");


async function fetchPks() {
    conn = await pool.getConnection();
    let rows = await conn.query("SELECT * from pk");
    conn.end();
    return rows;
}

async function saveAllPks(updates, inserts) {
    const query = outputFullQuery(updates, inserts);

    if (query.length > 0) {
        conn = await pool.getConnection();
        let rows = await conn.query(query);
        logger.info("Query returned :" + JSON.stringify(rows));
        conn.end()
        return rows;
    }
}


async function createPk(pk) {
    conn = await pool.getConnection();
    let rows = await conn.query(outputInsert(pk));
    conn.end();
    return rows;
}

async function deletePkById(pkId) {
    conn = await pool.getConnection();
    let rows = await conn.query("DELETE FROM pk WHERE pk_id = " + pkId);
    conn.end();
    return rows;
}

module.exports = {
    fetchPks,
    saveAllPks,
    deletePkById,
    createPk
}
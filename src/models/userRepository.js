const { pool } = require("../config/mariadb");


async function findByName(name) {
    return {name: "pkarea", password: "pkarea"}
}

module.exports = {
    findByName
}
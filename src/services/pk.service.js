const { fetchPks, deletePkById, createPk } = require("../models/pkRepository");

const fetchAllpks = async () => {
    return await fetchPks();
}

const deletePk = async (pkId) => {
    return await deletePkById(pkId);
}

const insertPk = async (pk) => {
    return await createPk(pk)
}
module.exports = {
    fetchAllpks,
    deletePk,
    insertPk
}
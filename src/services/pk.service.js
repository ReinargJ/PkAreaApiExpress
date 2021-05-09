const { fetchPks } = require("../models/pkRepository");
const { findByName } = require("../models/userRepository")

const fetchAllpks = async () => {
    return await fetchPks();
}

module.exports = {
    fetchAllpks
}
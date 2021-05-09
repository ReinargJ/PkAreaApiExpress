const { findByName } = require("../models/userRepository")

const getUserByName = async (name) => {
    return await findByName(name);
}

module.exports = {
    getUserByName
}
const logger = require("../config/logger");
const { fetchPks, saveAllPks } = require("../models/pkRepository");
const { fetchAllpks } = require("../services/pk.service");
const catchAsync = require("../utils/catchAsync");

const getAllPks = catchAsync(async (req, res) => {
    logger.info("Welcome to get all pks")
    const pks = await fetchAllpks();

    res.send(pks);
});

const savePks = catchAsync(async (req, res) => {
    return await saveAllPks(req.updates, req.inserts);
});

module.exports = {
    getAllPks,
    savePks
}
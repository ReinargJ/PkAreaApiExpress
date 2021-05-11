const logger = require("../config/logger");
const { saveAllPks } = require("../models/pkRepository");
const { fetchAllpks, deletePk, insertPk } = require("../services/pk.service");
const catchAsync = require("../utils/catchAsync");

const getAllPks = catchAsync(async (req, res) => {
    logger.info("Welcome to get all pks")
    const pks = await fetchAllpks();

    res.send(pks);
});

const savePks = catchAsync(async (req, res) => {
    console.log(req.body.insert, req.body.insert);
    let updated = await saveAllPks(req.body.update, req.body.insert);
    res.status(200);
    res.send(updated)
});

const deleteById = catchAsync(async (req, res) => {
    console.log(req.body)
    let deleted = await deletePk(req.body.pkId);
    res.status(200);
    res.send(deleted)
});

const createPk = catchAsync(async (req, res) => {
    console.log(req.body)
    let inserted =  await insertPk(req.body.pk);
    console.log(inserted);
    res.status(201);
    res.send(inserted);
});

module.exports = {
    getAllPks,
    savePks,
    deleteById,
    createPk
}
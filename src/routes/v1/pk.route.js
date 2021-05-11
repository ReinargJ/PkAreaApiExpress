const express = require('express');
const { getAllPks, savePks, deleteById, createPk } = require('../../controllers/pk.controller');

const router = express.Router();

router.get('/', (req, res, next) => next(), getAllPks)
router.post('/update', (req, res, next) => next(), savePks)
router.post('/delete', (req, res, next) => next(), deleteById)
router.post('/insert', (req, res, next) => next(), createPk)

module.exports = router;
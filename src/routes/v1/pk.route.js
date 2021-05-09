const express = require('express');
const { getAllPks, savePks } = require('../../controllers/pk.controller');

const router = express.Router();

router.get('/', (req, res, next) => next(), getAllPks)
router.post('/update', (req, res, next) => next(), savePks)

module.exports = router;
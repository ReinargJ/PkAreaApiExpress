const express = require('express');
const { getAllPks } = require('../../controllers/pk.controller');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', (req, res, next) => next(), getAllPks)

module.exports = router;
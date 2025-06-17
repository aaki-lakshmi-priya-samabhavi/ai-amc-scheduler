const { dummy } = require('../controllers/dummyController');

const express = require('express');
const router = express.Router();
const { testAPI } = require('../controllers/dummyController');

router.get('/', testAPI);

module.exports = router;

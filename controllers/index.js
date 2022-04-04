const router = require('express').Router();

const apiRoutes = require('./api');


//we are at /api

router.use('/api', apiRoutes);

module.exports = router;

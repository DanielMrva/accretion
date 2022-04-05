const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');


//we are at /api

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

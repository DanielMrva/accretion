const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const navRoutes = require('./navbar-routes')


//we are at /api

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/navbar-routes', navRoutes);

module.exports = router;

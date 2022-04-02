const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pubRoutes = require('./publication-routes');
const empRoutes = require('./employee-routes');
const mediaRoutes = require('./media-routes');
const officeRoutes = require('./office-routes');

router.use('/users', userRoutes);
router.use('/publications', pubRoutes);
router.use('/employees', empRoutes);
router.use('/media', mediaRoutes);
router.use('/offices', officeRoutes);


module.exports = router;

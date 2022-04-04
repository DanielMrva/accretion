const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pubRoutes = require('./publication-routes');
const empRoutes = require('./employee-routes');
const mediaRoutes = require('./media-routes');
const officeRoutes = require('./office-routes');
const meetingRoutes = require('./meetingRoutes');
const achievementRoutes = require('./achievementRoutes');
const congressRoutes = require('./congressRoutes');



router.use('/users', userRoutes);
router.use('/publications', pubRoutes);
router.use('/employees', empRoutes);
router.use('/media', mediaRoutes);
router.use('/offices', officeRoutes);
router.use('/users', userRoutes);
router.use('/achievements', achievementRoutes);
router.use('/meetings', meetingRoutes);
router.use('/congress', congressRoutes);

module.exports = router;

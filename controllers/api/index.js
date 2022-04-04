const router = require('express').Router();
const userRoutes = require('./userRoutes');
const meetingRoutes = require('./meetingRoutes');
const achievementRoutes = require('./achievementRoutes');
const congressRoutes = require('./congressRoutes');

router.use('/users', userRoutes);
router.use('/achievements', achievementRoutes);
router.use('/meetings', meetingRoutes);
router.use('/congress', congressRoutes);

module.exports = router;

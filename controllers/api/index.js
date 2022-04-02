const router = require('express').Router();
const userRoutes = require('./userRoutes');
const meetingRoutes = require('./meetingRoutes');
const achievementRoutes = require('./achievementRoutes');
const congressRoutes = require('./congressRoutes');

router.use('/users', userRoutes);

module.exports = router;

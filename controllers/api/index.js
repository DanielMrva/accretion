const router = require('express').Router();

const userRoutes = require('./userRoutes');
const pubRoutes = require('./publication-routes');
const mediaRoutes = require('./media-routes');
const officeRoutes = require('./office-routes');
const meetingRoutes = require('./meetingRoutes');
const congressRoutes = require('./congressRoutes');
const ftrRoutes = require('./ftr-routes');
const weeklyreport = require('./weeklyreport-routes');
const weeklyPDF = require('./weeklyPDF-routes');



router.use('/users', userRoutes);
router.use('/publications', pubRoutes);
router.use('/media', mediaRoutes);
router.use('/offices', officeRoutes);
router.use('/meetings', meetingRoutes);
router.use('/congress', congressRoutes);
router.use('/ftr', ftrRoutes);
router.use('/weekly-report', weeklyreport);
router.use('/weekly-pdf', weeklyPDF);
module.exports = router;

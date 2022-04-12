const router = require('express').Router();
const { Congress, Office, FTR, Media, Meeting, Publication  } = require('../models');

//endpoint: /navbar-routes/congress
router.get('/congress', async (req, res) => {
    try {
      const congressData = await Congress.findAll({
        include: [{model: Office}]
      });

      const conInteractions = congressData.map((congress) => congress.get({plain: true}));

      res.render('congress', {conInteractions}); 

    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/publication', async (req, res) => {

  try {
      //publications get
      const pubData = await Publication.findAll({
        include: [{model: Office}],
      });

      const publications = pubData.map((publication) => publication.get({plain: true}));
      
      res.render('publication', {publications}); 

    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/meeting', async (req, res) => {

  try {
    const meetingData = await Meeting.findAll({
        include: [{model: Office}],
    });

    const meetings = meetingData.map((meeting) => meeting.get({plain: true}));

    res.render('meeting', {meetings}); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/media', async (req, res) => {

  try {
    const mediaData = await Media.findAll({
      include: [{model: Office}],
    });

    const mediaInteractions = mediaData.map((media) => media.get({plain: true}));

    res.render('media', {mediaInteractions}); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/ftr', async (req, res) => {

  try {
    const recordData = await FTR.findAll({
      include: [{model: Office}],
    });
    const records = recordData.map((forTheRecord) => forTheRecord.get({plain: true}));

    res.render('ftr', {records}); 
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
const router = require('express').Router();
const { Meeting } = require('../../models');

//endpoint location: /api/meetings
//gets a list of all meetings in the database
router.get('/', async (req, res) => {
    try {
      const meetingData = await Meeting.findAll({
      });
      res.status(200).json(meetingData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//endpoint location: /api/meetings/:id
//gets one meeting from the database, needs an id
router.get('/:id', async (req, res) => {
try {
    const meetingData = await Meeting.findByPk(req.params.id, {
    });
    if (!meetingData) {
    res.status(404).json({ message: 'No meetings found with this id!' });
    return;
    }
    res.status(200).json(meetingData);  
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//endpoint location: /api/meetings
//creates a meeting in the database
router.post('/', async (req, res) => {
    try {
      const meetingData = await Meeting.create(req.body);
      res.status(200).json(meetingData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


//endpoint location: /api/meetings/:id
//updates a meeting in the database, needs an id
router.put('/:id', async (req, res) => {
    try {
        const meetingData = await Meeting.update(
        {mtg_name: req.body.mtg_name},
        {where: {id: req.params.id}}
        );
        res.status(200).json(meetingData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//endpoint location: /api/meetings/:id
//deletes a meeting in the database, needs an id
router.delete('/:id', async (req, res) => {
    try {
      const meetingData = await Meeting.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!meetingData) {
        res.status(404).json({ message: 'No meetings found with this id!' });
        return;
      }
      res.status(200).json(meetingData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  
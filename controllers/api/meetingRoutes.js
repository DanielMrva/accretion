const router = require('express').Router();
const { Meeting, Office } = require('../../models');

const { Op } = require('sequelize');

//endpoint location: /api/meetings
//gets a list of all meetings in the database
router.get('/', async (req, res) => {
    try {
      const meetingData = await Meeting.findAll({
        include: [{model: Office}]
      });
      const meetings = meetingData.map((meeting) => meeting.get({plain: true}));

      res.render('meeting', {meetings})
  
    } catch (err) {
      res.status(500).json(err);
    }
    
});

//endpoint location: /api/meetings/:id
//gets one meeting from the database, needs an id
router.get('/:id', async (req, res) => {
try {
    const meetingData = await Meeting.findByPk(req.params.id, {
      include: [{model: Office}]
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
      res.status(500).json(err);
    }
  });


//endpoint location: /api/meetings/:id
//updates a meeting in the database, needs an id
router.put('/:id', async (req, res) => {

  let data = {};

    try {

          if (req.body.mtg_ach) {
            data.mtg_ach = req.body.mtg_ach;
          }

          if (req.body.desc) {
            data.desc = req.body.desc;
          }

          if (req.body.employee_name) {
            data.employee_name = req.body.employee_name;
          }

          if (req.body.employee_email) {
            data.employee_email = req.body.employee_email;
          }

          if (req.body.office_id) {
            data.office_id = req.body.office_id;
          }

        const meetingData = await Meeting.update(
        data,
        {where: {id: req.params.id}}
        );

        if (!meetingData) {
          res.status(404).json({message: "Could not find that record"});
          return;
        }
        res.status(200).json(meetingData);
    } catch (err) {
        res.status(500).json(err);
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
  
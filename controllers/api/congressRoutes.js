const router = require('express').Router();
const { Congress, Office } = require('../../models');

//endpoint: /api/congress
//gets a list of all congressional hearings in database
router.get('/', async (req, res) => {
    try {
      const congressData = await Congress.findAll({
        include: [{model: Office}]
      });
      
      res.status(200).json(congressData);

    } catch (err) {
      res.status(500).json(err);
    }
});


//endpoint: /api/congress/:id
//gets one congressional hearing, needs id 
router.get('/:id', async (req, res) => {
try {
    const congressData = await Congress.findByPk(req.params.id, {
      include: [{model: Office}]
    });
    if (!congressData) {
    res.status(404).json({ message: 'No congressional hearings found with this id!' });
    return;
    }
    res.status(200).json(congressData);  
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//endpoint: /api/congress
//creates one new congressional hearing
router.post('/', async (req, res) => {
    try {
      const congressData = await Congress.create(req.body);
      res.status(200).json(congressData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//endpoint: /api/congress/:id
//updates one congressional hearing, needs id
router.put('/:id', async (req, res) => {

  let data = {};

    try {

        if (req.body.rep_committee) {
          data.rep_committee = req.body.rep_committee;
        }

        if (req.body.desc) {
          data.desc = req.body.desc;
        }
        
        if (req.body.employee_name) {
          data.employee_name;
        }

        if (req.body.employee_email) {
          data.employee_email = req.body.employee_email
        }

        if (req.body.office_id) {
          data.office_id = req.body.office_id;
        }

        const congressData = await Congress.update(
        data,
        {where: {id: req.params.id}}
        );

        if (!congressData) {
          res.status(404).json({message: 'Could not find that record'})
          return;
        }

        res.status(200).json(congressData);

    } catch (err) {
        res.status(500).json(err);
    }
});

//endpoint: /api/congress/:id
//deletes one congressional hearing, needs id
router.delete('/:id', async (req, res) => {
    try {
      const congressData = await Congress.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!congressData) {
        res.status(404).json({ message: 'No congressional hearings found with this id!' });
        return;
      }
      res.status(200).json(congressData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  
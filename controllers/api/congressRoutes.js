const router = require('express').Router();
const { Congress } = require('../../models');

//endpoint: /api/congress
//gets a list of all congressional hearings in database
router.get('/', async (req, res) => {
    try {
      const congressData = await Congress.findAll({
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
      res.status(400).json(err);
    }
  });

//endpoint: /api/congress/:id
//updates one congressional hearing, needs id
router.put('/:id', async (req, res) => {
    try {
        const congressData = await Congress.update(
        {reps_comm: req.body.reps_comm},
        {where: {id: req.params.id}}
        );
        res.status(200).json(congressData);
    } catch (err) {
        res.status(400).json(err);
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
  
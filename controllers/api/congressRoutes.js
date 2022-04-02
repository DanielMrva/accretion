const router = require('express').Router();
const { Congress } = require('../../models');

//endpoint: /api/congressroutes

router.get('/', async (req, res) => {
    try {
      const congressData = await Congress.findAll({
      });
      res.status(200).json(congressData);
    } catch (err) {
      res.status(500).json(err);
    }
});

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

//check this when data is seeded
router.post('/', async (req, res) => {
    try {
      const congressData = await Congress.create(req.body);
      res.status(200).json(congressData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const congressData = await Congress.update(
        //fix this to match the congress model: {achievement_name: req.body.achievement_name},
        {where: {id: req.params.id}}
        );
        res.status(200).json(congressData);
    } catch (err) {
        res.status(400).json(err);
    }
});

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
  
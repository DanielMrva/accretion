const router = require('express').Router();
const { Achievement } = require('../../models');

//endpoint: /api/achievements

router.get('/', async (req, res) => {
    try {
      const achievementData = await Achievement.findAll({
      });
      res.status(200).json(achievementData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
try {
    const achievementData = await Achievement.findByPk(req.params.id, {
    });
    if (!achievementData) {
    res.status(404).json({ message: 'No achievement found with this id!' });
    return;
    }
    res.status(200).json(achievementData);  
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//check this when data is seeded
router.post('/', async (req, res) => {
    try {
      const achievementData = await Achievement.create(req.body);
      res.status(200).json(achievementData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const achievementData = await Achievement.update(
        {achievement_name: req.body.achievement_name},
        {where: {id: req.params.id}}
        );
        res.status(200).json(achievementData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const achievementData = await Achievement.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!achievementData) {
        res.status(404).json({ message: 'No achievement found with this id!' });
        return;
      }
      res.status(200).json(achievementData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  
const router = require('express').Router();
const { Achievement } = require('../../models');

//endpoint location: /api/achievements
//get a list of all achievements in database
router.get('/', async (req, res) => {
    try {
      const achievementData = await Achievement.findAll({
      });
      res.status(200).json(achievementData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//endpoint location: /api/achievements/:id
//get one achievement by giving the id of the achievement
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

//endpoint location: /api/achievements
//create a new achievement
router.post('/', async (req, res) => {
    try {
      const achievementData = await Achievement.create(req.body);
      res.status(200).json(achievementData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//endpoint location: /api/achievements/:id
//update an achievement by id
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

//endpoint location: /api/achievements/:id
//delete an achievement by id
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
  
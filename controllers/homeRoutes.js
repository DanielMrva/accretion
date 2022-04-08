const router = require('express').Router();
<<<<<<< HEAD

const { User } = require ('../models');
const withAuth = require('../utils/auth');



=======
const { User } = require ('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage')
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
      res.render('login')
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });
    
  res.render('dashboard', {
    user,
    loggin_in: true
  })
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/form', async (req, res) => {
  try {
    res.render('form')
  } catch (err) {
    res.status(500).json(err);
  }
});
>>>>>>> 047924d71fbec30543b756b7c2faf4b07f021c3d

module.exports = router;
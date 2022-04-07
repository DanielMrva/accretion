const router = require('express').Router();
const { User } = require ('../models');
const withAuth = require('../utils/auth');

<<<<<<< HEAD
// router.get('/', withAuth, async (req, res) => {
//     try {
//        const userData = await User.findAll({
//            attributes: { exclude: ['password'] },
//            order: [['last_name', 'ASC']],
//        });

//        const users = userData.map((project) => project.get({ plain: true }));

       
//        res.render('homepage', {
//            users,
//            logged_in: req.session.logged_in,
//        });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });


=======
<<<<<<< HEAD
router.get('/login', (req, res) => {
    if (res.session.logged_in) {
        res.redirect('/');
        return;
=======
router.get('/', async (req, res) => {
    try {
      res.render('homepage')
    } catch (err) {
      res.status(500).json(err);
>>>>>>> 6c43b80f1dd8bbf2a0ea9659d588989ffbe1fe7d
    }
});

router.get('/login', async (req, res) => {
    try {
      res.render('login')
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
      res.render('dashboard')
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
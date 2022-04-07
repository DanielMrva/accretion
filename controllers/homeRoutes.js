const router = require('express').Router();
const { User } = require ('../models');
const withAuth = require('../utils/auth');

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

<<<<<<< HEAD
router.get('/login', (req, res) => {
    if (res.session.logged_in) {
        res.redirect('/');
        return;
    }
=======
// router.get('/login', (req, res) => {
//     if (res.session.logged_in) {
//         res.redirect('/');
//         return;
//     }
>>>>>>> 7ff3d30fdec6a02063d59b57daa6eff2b175663d

//     res.render('login');
// })

module.exports = router;
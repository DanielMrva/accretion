const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
// const { TimeoutError } = require('sequelize/types');
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
=======
<<<<<<< HEAD
router.get('/login', (req, res) => {
    if (res.session.logged_in) {
        res.redirect('/');
        return;
    }
=======
>>>>>>> 55d9973a050376a799d0da0c4a449ee4ec770764
// router.get('/login', (req, res) => {
//     if (res.session.logged_in) {
//         res.redirect('/');
//         return;
//     }
<<<<<<< HEAD

//     res.render('login');
// })

// router.get('/', async (req, res) => {

//     res.render('homepage');
    
// })
=======
>>>>>>> 7ff3d30fdec6a02063d59b57daa6eff2b175663d

//     res.render('login');
// })
>>>>>>> 55d9973a050376a799d0da0c4a449ee4ec770764

module.exports = router;
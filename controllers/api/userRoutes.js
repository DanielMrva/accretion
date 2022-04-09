const router = require('express').Router();
const { User } = require('../../models');

//endpoint location: /api/users
//creates new user 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password:req.body.password,
      office_id: req.body.office
    });

    req.session.save(() => {
      // req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//endpoint location: /api/users/login
//log in with correct email and password
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400).send('Incorrect user or password. Please try again!');
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400).send('Incorrect user or password. Please try again!');
      return;
    }

    req.session.save(() => {
      // req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//endpoint location: /api/users/logout
//logs user out 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

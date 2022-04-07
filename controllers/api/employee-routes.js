const router = require('express').Router();
const { User, Office } = require('../../models');


// api/users endpoint

// get all users
router.get('/', async (req, res) => {

    try {

        const userData = await User.findAll();

        res.status(200).json(userData);
    
    } catch (err) {

        res.status(500).json(err);

    }

});

// get one user
router.get('/:id', async (req, res) => {

    try {

        const userData = await User.findByPk(req.params.id, {include: [{model: Office}]});

        if (!userData) {

            res.status(404).json({message: 'Cannot find that user'})
            return;

        }

        res.status(200).json(userData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// post a new user
router.post('/', async (req, res) => {

    try {

        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// update an existing user
router.put('/:id', async (req, res) => {

    try {

        // for some reason it wasn't letting me update properly without passing in this data variable

        let data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            off_id: req.body.off_id
        };

        // in the final product we will want to verify that each of those things is present. maybe a series of if statements
        // if (req.body.first_name) {
        //     data.first_name = req.body.first_name
        // } 
        // (do this for all properties)
        // this way it will only pass through the things you update

        const userData = await User.update(
            data,
            {where: {id: req.params.id}}
        );

        if (!userData) {

            res.status(404).json({message: 'Cannot find that user'})
            return;

        }

        res.status(200).json(userData);

    } catch (err) {

        res.status(500).json(err);

    }

});


// delete a user
router.delete('/:id', async (req, res) => {

    try {

        const userData = await User.destroy({where: {id: req.params.id}});

        if (!userData) {

            res.status(404).json({message: 'Cannot find that user'})
            return;

        }

        res.status(200).json(userData);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router
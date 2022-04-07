const router = require('express').Router();
const { Publication, User, UserPub } = require('../../models');

// api/publications endpoint


// get all publication data
router.get('/', async (req, res) => {

    try { 

        const pubData = await Publication.findAll({include: [{model:User}]});

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// get one publication record
router.get('/:id', async (req, res) => {

    try {
        
<<<<<<< HEAD
        const pubData = await Publication.findByPk(req.params.id)
=======
        const pubData = await Publication.findByPk(req.params.id, {
            include: [
                {model: User}
            ]
        });
>>>>>>> 55d9973a050376a799d0da0c4a449ee4ec770764

        if (!pubData) {

            res.status(404).json({message: 'Could not find that record'})
            return;
        };
        
        res.status(200).json(pubData);

        } catch (err) {

            res.status(500).json(err);

        }

});


// post a new publication record
router.post('/', async (req, res) => {

    try {

        const pubData = await Publication.create(req.body);

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// update an existing publication record
router.put('/:id', async (req, res) => {

    let data = {};

    try {

        // these if statements verify which fields are being updated
        if (req.body.pub_name) {
            data.pub_name = req.body.pub_name;
        }

        if (req.body.pub_date) {
            data.pub_date = req.body.pub_date;
        }

        if (req.body.keywords) {
            data.keywords = req.body.keywords;
        }

        if (req.body.article_title) {
            data.article_title = req.body.article_title;
        }

        if (req.body.author_name) {
            data.author_name = req.body.author_name;
        }

        if (req.body.other_contrib) {
            data.other_contrib = req.body.other_contrib;
        }

        console.log('routes body:')
        console.log(data);

        const pubData = await Publication.update(
            data,
            {where: {id: req.params.id}}
        );

        if (!pubData) {

            res.status(404).json({message: 'Could not find that record'})
            return;
        };

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    };

});

// delete a publication record
router.delete('/:id', async (req, res) => {

    try {

        const pubData = await Publication.destroy({ where: { id: req.params.id } });

        if (!pubData) {

            res.status(404).json({message: 'Could not find that record'})
            return;
        };

        res.status(200).json(pubData)

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;
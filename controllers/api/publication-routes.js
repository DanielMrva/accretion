const router = require('express').Router();
const { Publication, Office } = require('../../models');


// api/publications endpoint


// get all publication data
router.get('/', async (req, res) => {

    try { 

        const pubData = await Publication.findAll({
            include: [{model: Office}]
        });

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// get one publication record
router.get('/:id', async (req, res) => {

    try {
        
        const pubData = await Publication.findByPk(req.params.id, {
            include: [{model: Office}]
        });

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

        if (req.body.title) {
            data.title = req.body.title;
        }

        if (req.body.desc) {
            data.desc = req.body.desc;
        }

        if (req.body.employee_name) {
            data.employee_name = req.body.employee_name;
        }

        if (req.body.employee_email) {
            data.employee_email = req.body.employee_email;
        }

        if (req.body.authors) {
            data.authors = req.body.authors;
        }

        if (req.body.office_id) {
            data.office_id = req.body.office_id;
        }

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
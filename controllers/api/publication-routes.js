const router = require('express').Router();
const { Publication } = require('../../models');

// api/publications endpoint


// get all publication data
router.get('/', async (req, res) => {

    try { 

        const pubData = await Publication.findAll();

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    }

});

router.get('/:id', async (req, res) => {

    try {
        
        const pubData = await Publication.findByPK(req.params.id)

        if (!pubData) {

            res.status(404).json({message: 'Could not find that record'})
            return;
        };
        
        res.status(200).json(pubData);

        } catch (err) {

            res.status(500).json(err);

        }

});

router.post('/', async (req, res) => {

    try {

        const pubData = await Publication.create(req.body);

        res.status(200).json(pubData);

    } catch (err) {

        res.status(500).json(err);

    }

});


router.put('/:id', async (req, res) => {

    try {

        const pubData = await Publication.update(
            {pub_name: req.body.pub_name},
            {pub_date: req.body.pub_date},
            {keywords: req.body.keywords},
            {article_title: req.body.article_title},
            {emp_id: req.body.emp_id},
            {usgs_contrib: req.body.usgs_contrib},
            {other_contrib: req.body.other_contrib},
            {off_id: req.body.off_id},
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

module.exports = router
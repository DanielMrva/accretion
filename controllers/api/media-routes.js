const router = require('express').Router();
const { Media } = require('../../models');


// api/media endpoint

// get all media data
router.get('/', async (req, res) => {

    try {

        const mediaData = await Media.findAll();

        res.status(200).json(mediaData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// get one media record
router.get('/:id', async (req, res) => {

    try {

        const mediaData = await Media.findByPk(req.params.id)

        if (!mediaData) {

            res.status(404).json({message: 'Cannot find that entry'})
            return;

        }

        res.status(200).json(mediaData);

    } catch (err) {

        res.status(500).json(err);

    }

});

//post a new media record
router.post('/', async (req, res) => {

    try {

        const mediaData = await Media.create(req.body);

        res.status(200).json(mediaData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// update an existing media record
router.put('/:id', async (req, res) => {

    let data = {};

    try {

        if (req.body.outlet) {
            data.outlet = req.body.outlet;
        }

        if (req.body.topic) {
            data.topic = req.body.topic;
        }

        if (req.body.date) {
            data.date = req.body.date;
        }

        if (req.body.off_id) {
            data.off_id = req.body.off_id;
        }

        const mediaData = await Media.update(
            data,
            {where: {id: req.params.id}}
        );

        if (!mediaData) {

            res.status(404).json({message: 'Cannot find that entry'})
            return;

        }

        res.status(200).json(mediaData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// delete a media record
router.delete('/:id', async (req, res) => {

    try {

        const mediaData = Media.destroy({where: {id: req.params.id}})

        if (!mediaData) {

            res.status(404).json({message: 'Cannot find that entry'})
            return;

        }

        res.status(200).json(mediaData);
        
    } catch (err) {

        res.status(500).json(err);

    }


});

module.exports = router
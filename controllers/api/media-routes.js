const router = require('express').Router();
const { Media, Office } = require('../../models');


// api/media endpoint

// get all media data
router.get('/', async (req, res) => {

    try {

        const mediaData = await Media.findAll({
            include: [{model: Office}]
        });

        res.status(200).json(mediaData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// get one media record
router.get('/:id', async (req, res) => {

    try {

        const mediaData = await Media.findByPk(req.params.id, {
            include: [{model: Office}]
        });

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

        if(req.body.name) {
            data.name = req.body.name;
        }

        if (req.body.outlet) {
            data.outlet = req.body.outlet;
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

        if (req.body.office_id) {
            data.office_id = req.body.office_id;
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
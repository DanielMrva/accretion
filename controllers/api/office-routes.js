const router = require('express').Router();
const req = require('express/lib/request');
const { Office } = require('../../models');


// api/offices endpoint

//get all offices
router.get('/', async (req, res) => {

    try {

        const offData = await Office.findAll();

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// find one office 
router.get('/:id', async (req, res) => {

    try {

        const offData = await Office.findByPk(req.params.id);

        if (!offData) {

            res.status(404).json({message: 'Cannot find that office'})
            return;

        }

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// find an office by abbreviation
router.get('/abbrev/:abbrev', async (req, res) => {

    try {

        const offData = await Office.findAll({
            where: {
                abbreviation: req.params.abbrev
            }
        })

        if (!offData) {
            res.status(404).json({message: 'Could not find that office'})
            return;
        }

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// post a new office
router.post('/', async (req, res) => {

    try {

        const offData = await Office.create(req.body);

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);
    }

});

// update an existing office
router.put('/:id', async (req, res) => {

    let data = {};

    try {

        if (req.body.office_name) {
            data.office_name = req.body.office_name;
        }

        if (req.body.abbreviation) {
            data.abbreviation = req.body.abbreviation;
        }

        const offData = await Office.update(
            data,
            {where: {id: req.params.id}}
        )

        if (!offData) {

            res.status(404).json({message: 'Cannot find that office'})
            return;

        }

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// delete an office
router.delete('/:id', async (req, res) => {

    try {

        const offData = await Office.destroy({where: {id: req.params.id}});

        if (!offData) {

            res.status(404).json({message: 'Cannot find that office'})
            return;

        }

        res.status(200).json(offData);

    } catch (err) {

        res.status(500).json(err);

    }

});


module.exports = router
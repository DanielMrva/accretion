const router = require('express').Router();
const { Sequelize } = require('../../config/connection');
const { FTR, Office } = require('../../models');


// api/ftr endpoint

// get all FTR records
router.get('/', async (req, res) => {

    try {

        const ftrData = await FTR.findAll();

        res.status(200).json(ftrData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// get one ftr record
router.get('/:id', async (req, res) => {

    try {

        const ftrData = await FTR.findByPk(req.params.id);


        if (!ftrData) {

            res.status(404).json({message: 'Could not find that record'});
            return;

        }

        res.status(200).json(ftrData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// post a new ftr record
router.post('/', async (req, res) => {

    try {

        const ftrData = await FTR.create(req.body);

        res.status(200).json(ftrData);

    } catch (err) {

        res.status(500).json(err);

    }

});

//update an existing ftr record
router.put('/:id', async (req, res) => {

    let data = [];

    try {

        if (req.body.note) {
            data.note = req.body.note;
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

        const ftrData = await FTR.update(
            data,
            {where: {id: req.params.id}}
        );

        if(!ftrData) {
            res.status(404).json({message: 'Could not find that record'});
            return;
        };

        res.status(200).json(ftrData);

    } catch (err) {

        res.status(500).json(err);

    }

});

// delete an ftr record
router.delete('/:id', async (req, res) => {

    try {

        const pubData = await FTR.destroy(
            {
                where: 
                {id: req.params.id}
            }
        );

        res.status(200).json(ftrData);

    } catch (err) {

        res.status(500).json(err);

    }
});

module.exports = router;
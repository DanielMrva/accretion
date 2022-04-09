const router = require('express').Router();

const { User, Office, Publication, Media, Congress, Meeting, Achievement } = require('../../models');

const { Op } = require('sequelize');


// api/weekly-report
router.get('/', async (req, res) => {

    try {

        const pubData = await Publication.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );

        const mediaData = await Media.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );


        const congressData = await Congress.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );


        const meetingData = await Meeting.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );


        const achievementData = await Achievement.findAll(
            {
                where: {
                    created_at: {
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }
        );

        let data = [
            {publications: pubData},
            {media: mediaData},
            {congress: congressData},
            {meetings: meetingData},
            {achievements: achievementData}
        ]

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json(err);

    }

});


module.exports = router;
const router = require('express').Router();

const { User, Office, Publication, Media, Congress, Meeting, FTR } = require('../../models');

const { Op } = require('sequelize');


// api/weekly-report
router.get('/', async (req, res) => {

    try {
        //publications get
        const pubData = await Publication.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );
        const publications = pubData.map((publication) => {
            publication.get({plain: true})
        });

        //meetings get
        const meetingData = await Meeting.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );
        const meetings = meetingData.map((meeting) => {
            meeting.get({plain: true})
        });

        //media get
        const mediaData = await Media.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );
        const mediaInteractions = mediaData.map((media) => {
            media.get({plain: true})
        });

        //for the record
        const recordData = await FTR.findAll(
            {
                where: {
                    created_at: {
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }
        );
        const records = recordData.map((forTheRecord) => {
            forTheRecord.get({plain: true})
        });

        //congress get
        const congressData = await Congress.findAll(
            {
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );
        const conInteractions = congressData.map((congress) => {
            congress.get({plain: true})
        });

        // let data = [
        //     {publications: pubData},
        //     {media: mediaData},
        //     {congress: congressData},
        //     {meetings: meetingData},
        //     {achievements: achievementData}
        // ]
        res.render('weeklyReport', {publications, meetings, mediaInteractions, records, conInteractions});

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json(err);

    }

});


module.exports = router;
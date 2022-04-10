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
        const publications = pubData.map((publication) => publication.get({plain: true}));

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
        const meetings = meetingData.map((meeting) => meeting.get({plain: true}));

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
        const mediaInteractions = mediaData.map((media) => media.get({plain: true}));

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
        const records = recordData.map((forTheRecord) => forTheRecord.get({plain: true}));

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
        const conInteractions = congressData.map((congress) => congress.get({plain: true}));

        // let data = {
        //     publications: pubData,
        //     meetings: meetingData,
        //     media: mediaData,
        //     ftr: recordData,
        //     congress: congressData
        // }

        let data = {
            publications: publications,
            meetings: meetings,
            media: mediaInteractions,
            ftr: records,
            congress: conInteractions
        }

        // let dataType = typeof(data);

        // let data = [
        //     {publications: publications},
        //     {meetings: meetings},
        //     {media: mediaInteractions},
        //     {ftr: records},
        //     {congress: conInteractions},
        // ]
        
        // let data = [
        //     {publications: pubData},
        //     {meetings: meetingData},
        //     {media: mediaData},
        //     {ftr: recordData},
        //     {congress: congressData},
        // ]
        // res.render('weeklyReport', {publications});
        res.render('weeklyReport', {publications, meetings, mediaInteractions, records, conInteractions});   
        // res.render('weeklyReport', {pubData, meetingData, mediaData, recordData, congressData});
        // res.status(200).json(data[0].publications[0]);
        // res.status(200).json(publications)

    } catch (err) {

        res.status(500).json(err);
        return;
    }

});


module.exports = router;
const PDFDocument = require('pdfkit');

const blobStream = require('blob-stream');
const router = require('express').Router();
const { Office, Publication, Media, Congress, Meeting, FTR } = require('../../models');
const { Op } = require('sequelize');


// api/weekly-report
router.get('/', async (req, res) => {

    try {
        //publications get
        const pubData = await Publication.findAll(
            {
                include: [{model: Office}],
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
                include: [{model: Office}],
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
                include: [{model: Office}],
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
                include: [{model: Office}],
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
                include: [{model: Office}],
                where: {
                    created_at: { 
                        [Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
                    }
                }
            }   
        );
        const conInteractions = congressData.map((congress) => congress.get({plain: true}));
        const doc = new PDFDocument({
            bufferPages: true
        });
        doc.pipe(res);
        doc.font("Helvetica-Bold", 20);
        doc.text("Weely Report");
        doc.moveDown();
        doc.font("Helvetica", 18);
        doc.text("Upcoming Significant Publications or Science Products (not yet published)");
        doc.moveDown();
        publications.forEach((publication) => {
            doc
                .font("Helvetica", 15)
                .text(`Publication ${publication.pub_name} (${publication.office.abbreviation})`)
                .font("Helvetica", 12)
                .text(`Title: ${publication.title}`)
                .moveDown()
                .text(`Description: ${publication.desc}`)
                .text(`Employee: ${publication.employee_name}, ${publication.employee_email} `)
                .text(`Authors: ${publication.authors}`)
                .moveDown();
        });
        doc.addPage();
        doc.font("Helvetica", 18);
        doc.text("Upcoming Meetings, Events, or Scientific Achievements");
        doc.moveDown();
        meetings.forEach((meeting) => {
            doc
                .font("Helvetica", 15)
                .text(`${meeting.mtg_ach} (${meeting.office.abbreviation})`)
                .font("Helvetica", 12)
                .moveDown()
                .text(`Description: ${meeting.desc}`)
                .text(`Employee: ${meeting.employee_name}, ${meeting.employee_email} `)
                .moveDown()
        });
        doc.addPage();
        doc.font("Helvetica", 18);
        doc.text("Media Interactions");
        doc.moveDown();
        mediaInteractions.forEach((media) => {
            doc
                .font("Helvetica", 15)
                .text(`Interaction with: ${media.outlet} (${media.office.abbreviation})`)
                .font("Helvetica", 12)
                .moveDown()
                .text(`Description: ${media.desc}`)
                .text(`Employee: ${media.employee_name}, ${media.employee_email} `)
                .moveDown()
        });
        doc.addPage();
        doc.font("Helvetica", 18);
        doc.text("For the Record");
        doc.moveDown();
        records.forEach((record) => {
            doc
                .font("Helvetica", 15)
                .text(`${record.note} (${record.office.abbreviation})`)
                .font("Helvetica", 12)
                .moveDown()
                .text(`Description: ${record.desc}`)
                .text(`Employee: ${record.employee_name}, ${record.employee_email} `)
                .moveDown()
        });
        doc.addPage();
        doc.font("Helvetica", 18);
        doc.text("Congressional Interactions");
        doc.moveDown();
        conInteractions.forEach((congress) => {
            doc
                .font("Helvetica", 15)
                .text(`${congress.employee_name}, (${congress.employee_email}) meets with ${congress.rep_committee}`)
                .font("Helvetica", 12)
                .text(`Office: ${congress.office.abbreviation}`)
                .moveDown()
                .text(`Description: ${congress.desc} `)
                .moveDown()
        });
        //Global Edits to All Pages (Header/Footer, etc)
        let pages = doc.bufferedPageRange();
        for (let i = 0; i < pages.count; i++) {
            doc.switchToPage(i);

            let oldBMargin = doc.page.margins.bottom;
            doc.page.margins.bottom = 0
            doc.text(`Page: ${i + 1} of ${pages.count}`,
            0,
            doc.page.height - (oldBMargin/2),
            {align: 'center'}
            );
            doc.page.margins.bottom=oldBMargin;
        }
        doc.end();
        res.status(200);

    } catch (err) {

        res.status(500).json(err);
        return;
    }

});


module.exports = router;
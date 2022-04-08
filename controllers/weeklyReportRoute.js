const router = require('express').Router();
const { Achievement, User, Office, Media, Meeting, Congress, Publication } = require('../models');
const Op = Sequelize.Op;
const withAuth = require('../utils/auth');

router.get('/weeklyReport', withAuth, async (req, res) => {
    try {
        const achievementData = await Achievement.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const achievements = achievementData.map((achievement) => achievement.get({plain:true}));

        const mediaData = await Media.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const media = mediaData.map((medium) => medium.get({plain:true}));

        const meetingData = await Meeting.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const meetings = meetingData.map((meeting) => meeting.get({plain:true}));

        const congressData = await Congress.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const cons = congressData.map((congress) => congress.get({plain:true}));

        const publicationData = await Publication.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const publications = publicationData.map((publication) => publication.get({plain:true}));

        res.render('weeklyReport', {achievements, cons, media, meetings, publications})
    } catch (err) {
        res.status(500).json(err);
    }
})
const router = require('express').Router();
const { Achievement, User, Office, Media, Meeting, Congress, Publication } = require('../../models');
const Op = Sequelize.Op;

router.get('/weeklyReport', async (req, res) => {
    try {
        const achievementData = await Achievement.findAll({where: {
            createdAt: {
              [Op.lt]: new Date(),
              [Op.gt]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          }
        });
        const achievements = achievementData.map((achievement) => achievement.get({plain:true}));

        res.render('weeklyReport', {achievements})
    }
})
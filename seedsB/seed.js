const sequelize = require('../config/connection');
const {User, Office, Publication, Meeting, Media, Achievement, Congress, UserPub, UserMeeting, UserCongress, UserMedia} = require('../models');

const userData = require('./user.json');
const officeData = require('./office.json');
const pubData = require('./publication.json');
const meetData = require('./meeting.json');
const mediaData = require('./media.json');
const achData = require('./achievement.json');
const conData = require('./congress.json');
const upData = require('./userPub.json')
const umData = require('./userMeeting.json');
const ucData = require('./userCongress.json');
const umdData = require('./userMedia.json');

const seedDatabase = async () => {
    await sequelize.sync({ force:true });

    const office = await Office.bulkCreate(officeData);

    const user = await User.bulkCreate(userData, {
        individualHooks: true, returning: true,
    });

    const pub = await Publication.bulkCreate(pubData);

    const meet = await Meeting.bulkCreate(meetData);

    const media = await Media.bulkCreate(mediaData);

    const ach = await Achievement.bulkCreate(achData);

    const con = await Congress.bulkCreate(conData);

    const up = await UserPub.bulkCreate(upData);

    const um = await UserMeeting.bulkCreate(umData);

    const uc = await UserCongress.bulkCreate(ucData);

    const umd = await UserMedia.bulkCreate(umdData);

    process.exit(0);
};

seedDatabase();
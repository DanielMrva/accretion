const sequelize = require('../config/connection');
const { Office, User, Publication, Meeting, Media, Congress, FTR } = require('../models');

const userData = require('./user.json');
const officeData = require('./office.json');
const pubData = require('./publication.json');
const meetData = require('./meeting.json');
const mediaData = require('./media.json');
const conData = require('./congress.json');
const ftrData = require('./ftr.json')


const seedDatabase = async () => {
    await sequelize.sync({ force:true });

    const office = await Office.bulkCreate(officeData);

    const user = await User.bulkCreate(userData, {
        individualHooks: true, returning: true,
    });

    const pub = await Publication.bulkCreate(pubData);

    const meet = await Meeting.bulkCreate(meetData);

    const media = await Media.bulkCreate(mediaData);

    const con = await Congress.bulkCreate(conData);

    const ftr = await FTR.bulkCreate(ftrData);

    process.exit(0);
};

seedDatabase();
const User = require('./User');
const Office = require('./Office');
const Publication = require('./Publication');
const Achievement = require('./Achievement');
const Congress = require('./Congress');
const Media = require('./Media');
const Meeting = require('./Meeting');

// const { User, Office, Publication, Achievement, Congress, Media, Meeting } = require('../models2')

Office.hasMany(User);
User.belongsTo(Office);

User.hasMany(Publication);
Publication.belongsTo(User);

User.hasMany(Congress);
Congress.belongsTo(User);

User.hasMany(Media);
Media.belongsTo(User);

User.hasMany(Meeting);
Meeting.belongsTo(User);

User.hasMany(Achievement);
Achievement.belongsTo(User);


module.exports = { User, Office, Publication, Achievement, Congress, Media, Meeting };

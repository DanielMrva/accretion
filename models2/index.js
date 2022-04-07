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

User.belongsToMany(Publication, {through: UserPub} );
Publication.belongsToMany(User, {through: UserPub} );

User.hasMany(Achievement, {foreignKey: 'user_id', onDelete: 'CASCADE'});
Achievement.belongsTo(User, {foreignKey: 'user_id'});

User.belongsToMany(Media, { through: UserMedia, foreignKey: 'user_id' });
Media.belongsToMany(User, { through: UserMedia, foreignKey: 'media_id' });

User.belongsToMany(Congress, {through: UserCongress} );
Congress.belongsToMany(User, {through: UserCongress} );


User.belongsToMany(Meeting, {through: UserMeeting} );
Meeting.belongsToMany(User, {through: UserMeeting} );


module.exports = { User, Office, Publication, Achievement, Congress, Media, Meeting };

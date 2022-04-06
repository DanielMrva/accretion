const User = require('./User');
const Office = require('./Office');
const Publication = require('./Publication');
const Achievement = require('./Achievement');
const Congress = require('./Congress');
const Media = require('./Media');
const Meeting = require('./Meeting');
const UserPub = require('./UserPub');
const UserMeeting = require('./UserMeeting')
const UserMedia = require('./UserMedia')
const UserCongress = require('./UserCongress')

Office.hasMany(User);
User.belongsTo(Office);

User.belongsToMany(Publication, {through: {model: UserPub, foreignKey:'pub_id'}} );
Publication.belongsToMany(User, {through: {model: UserPub, foreignKey:'emp_id'}} );

// User.belongsToMany(Publication, {through: {model: UserPub}} );
// Publication.belongsToMany(User, {through: {model: UserPub}} );

User.hasMany(Achievement, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Achievement.belongsTo(User, {foreignKey: 'emp_id'});

User.belongsToMany(Media, {through: {model: UserMedia, foreignKey:'media_id'}} );
Media.belongsToMany(User, {through: {model: UserMedia, foreignKey:'emp_id'}} );

User.belongsToMany(Congress, {through: {model: UserCongress, foreignKey:'congress_id'}} );
Congress.belongsToMany(User, {through: {model: UserCongress, foreignKey:'emp_id'}} );


User.belongsToMany(Meeting, {through: {model: UserMeeting, foreignKey: 'meeting_id'}} );
Meeting.belongsToMany(User, {through: {model: UserMeeting, foreignKey: 'emp_id'}} );


module.exports = { User, Office, Publication, Achievement, Congress, Media, Meeting, UserPub, UserMeeting, UserCongress, UserMedia };

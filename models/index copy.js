const User = require('./User');
const Office = require('./Office');
const Publication = require('./Publication');
const Achievement = require('./Achievement');
const Congress = require('./Congress');
const Media = require('./Media');
const Meeting = require('./Meeting');
const UserPub = require('./UserPub');
const UserMeeting = require('./UserMeeting')

Office.hasMany(User);
User.belongsTo(Office);

User.belongsToMany(Publication, {through: {model: UserPub, foreignKey:'pub_id'}} );
Publication.belongsToMany(User, {through: {model: UserPub, foreignKey:'emp_id'}} );

User.hasMany(Achievement, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Achievement.belongsTo(User, {foreignKey: 'emp_id'});

User.hasMany(Media, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Media.belongsTo(User, {foreignKey: 'emp_id'});

User.hasMany(Congress, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Congress.belongsTo(User, {foreignKey: 'emp_id', onDelete: 'CASCADE'});

User.belongsToMany(Meeting, {through: {model: UserMeeting, foreignKey: 'meeting_id'}} );
Meeting.belongsToMany(User, {through: {model: UserMeeting, foreignKey: 'emp_id'}} );


module.exports = { User, Office, Publication, Achievement, Congress, Media, Meeting, UserPub, UserMeeting };

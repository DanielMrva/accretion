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

// User.belongsToMany(Publication, {through: {model: UserPub, foreignKey:'pub_id'}} );
// Publication.belongsToMany(User, {through: {model: UserPub, foreignKey:'emp_id'}} );

User.belongsToMany(Publication, {through: UserPub} );
Publication.belongsToMany(User, {through: UserPub} );

User.hasMany(Achievement, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Achievement.belongsTo(User, {foreignKey: 'emp_id'});

User.belongsToMany(Media, {through: UserMedia} );
Media.belongsToMany(User, {through: UserMedia} );

User.belongsToMany(Congress, {through: UserCongress} );
Congress.belongsToMany(User, {through: UserCongress} );


User.belongsToMany(Meeting, {through: UserMeeting} );
Meeting.belongsToMany(User, {through: UserMeeting} );


module.exports = { User, Office, Publication, Achievement, Congress, Media, Meeting, UserPub, UserMeeting, UserCongress, UserMedia };

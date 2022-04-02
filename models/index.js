const User = require('./User');
const Office = require('./Office');
const Publication = require('./Publication');
const Achievement = require('./Achievement');
const Congress = require('./Congress');
const Media = require('./Media');
const Meeting = require('./Meeting');
const UserOffPub = require('./UserOffPub');

Office.hasMany(User);
User.belongsTo(Office);

User.belongsToMany(Publication, {through: UserOffPub});
Office.belongsToMany(Publication, {through: UserOffPub});
Publication.belongsToMany(User, {through: UserOffPub} );
Publication.hasOne(Office);

User.hasMany(Achievement, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Achievement.belongsTo(User, {foreignKey: 'emp_id'});

User.hasMany(Media, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Media.belongsTo(User, {foreignKey: 'emp_id'});

User.hasMany(Congress, {foreignKey: 'emp_id', onDelete: 'CASCADE'});
Congress.belongsTo(User, {foreignKey: 'emp_id', onDelete: 'CASCADE'});

User.belongsToMany(Meeting, {through: UserMeeting});
Meeting.belongsToMany(User, {through: UserMeeting});


module.exports = { User, Office, Publication, UserOffPub };

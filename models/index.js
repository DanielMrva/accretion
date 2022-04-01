const User = require('./User');
const Office = require('./Office');
const Publication = require('./Publication');
const UserOffPub = require('./UserOffPub');

Office.hasMany(User);
User.belongsTo(Office);

User.belongsToMany(Publication, {through: UserOffPub});
Office.belongsToMany(Publication, {through: UserOffPub});
Publication.belongsToMany(User, {through: UserOffPub} );
Publication.hasOne(Office);

module.exports = { User, Office, Publication, UserOffPub };

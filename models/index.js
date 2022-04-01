const User = require('./User');
const Office = require('./Office');

Office.hasMany(User);
User.belongsTo(Office);

module.exports = { User, Office };

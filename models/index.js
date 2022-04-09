const Office = require('./Office');
const Publication = require('./Publicaton');
const Meeting = require('./Meeting');
const Media = require('./Media');
const Congress = require('./Congress');
const FTR = require('./FTR');

Office.hasMany(Publication);
Publication.belongsTo(Office);

Office.hasMany(Meeting);
Meeting.belongsTo(Office);

Office.hasMany(Media);
Media.belongsTo(Office);

Office.hasMany(Congress);
Congress.belongsTo(Office);

Office. hasMany(FTR);
FTR.belongsTo(Office);

module.exports = { Office, Publication, Meeting, Media, Congress, FTR };
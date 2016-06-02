var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var seasonSchema = Schema({
    startDate: Date,
    endDate: Date,
    Teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    Matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

var Season = mongoose.model('Season', seasonSchema);

module.exports = Season;

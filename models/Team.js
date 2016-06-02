var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = Schema({
    name: String,
    Players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    Matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;

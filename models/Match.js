var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statSchema = new Schema({
    player: { type: Schema.Types.ObjectId, ref: 'Player' },
    stats: { type: Schema.Types.ObjectId, ref: 'BasketBallStatPack' }
});

var matchSchema = mongoose.Schema({
    homeTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    visitor: { type: Schema.Types.ObjectId, ref: 'Team' },
    date: Date,
    winner: String,
    Stats: [statSchema]
});

var Match = mongoose.model('Match', matchSchema);

module.exports = Match;

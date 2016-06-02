var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var basketBallStatPackSchema = mongoose.Schema({
    freeThrow: {
        attempts: Number,
        made: Number
    },
    fouls: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    shots: {
        attempts: Number,
        made: Number
    },
    threes: {
        attempts: Number,
        made: Number
    },
    assists: Number,
    rebounds: Number
});

var BasketBallStatPack = mongoose.model('BasketBallStatPack', basketBallStatPackSchema);

module.exports = BasketBallStatPack;

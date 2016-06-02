var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = Schema({
    firstName: String,
    lastName: String,
    age: Number,
    team: { type: Schema.Types.ObjectId, ref: 'Team' }
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;

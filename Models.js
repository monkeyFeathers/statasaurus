import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seasonSchema = Schema({
    startDate: Date,
    endDate: Date,
    Teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    Matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

const teamSchema = Schema({
    name: String,
    Players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    Matches: [{ type: Schema.Types.ObjectId, ref: 'Match' }]
});

const playerSchema = Schema({
    firstName: String,
    lastName: String,
    age: Number,
    team: { type: Schema.Types.ObjectId, ref: 'Team' }
});

const statSchema = new Schema({
    player: { type: Schema.Types.ObjectId, ref: 'Player' },
    stats: { type: Schema.Types.ObjectId, ref: 'BasketBallStatPack' }
});

const matchSchema = Schema({
    homeTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    visitor: { type: Schema.Types.ObjectId, ref: 'Team' },
    date: Date,
    winner: String,
    Stats: [statSchema]
});

const basketBallStatPackSchema = Schema({
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
    rebounds: Number,
});

export const Season = mongoose.model('Season', seasonSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Player = mongoose.model('Player', playerSchema);
export const Match = mongoose.model('Match', matchSchema);
export const BasketBallStatPack = mongoose.model('BasketBallStatPack', basketBallStatPackSchema);

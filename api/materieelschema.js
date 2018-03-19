var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materieel = new Schema({
    mattype: String,
    faciliteiten: [String],
    afbeelding: String,
    zitplaatsen: {
        staanplaatsEersteKlas: Number,
        staanplaatsTweedeKlas: Number,
        zitplaatsEersteKlas: Number,
        zitplaatsTweedeKlas: Number,
        klapstoelEersteKlas: Number,
        klapstoelTweedeKlas: Number
    }
});

var Materieel = mongoose.model('Materieel', materieel);

module.exports = Materieel;
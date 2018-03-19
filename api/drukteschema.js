var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drukteSchema = new Schema({
    tijd: String,
    ritNummer: Number,
    stationsCode: String,
    dag: String,
    drukte: Number
});

var Drukte = mongoose.model('Drukte', drukteSchema);

module.exports = Drukte;
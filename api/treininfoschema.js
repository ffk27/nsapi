var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var treininfoSchema = new Schema({info: [{
    vertrektijd: String,
    ritnummer: Number,
    station: String,
    vervoerder: String,
    materieeldelen: [{
        materieelnummer: Number, mat: {type: String, ref: 'Materieel'}
    }],
    geplandeMaterieeldelen: [{materieelnummer: Number, mat: {type: String, ref: 'Materieel'}}],
    ingekort: false,
    lengte: Number,
    geplandeLengte: Number
}]});

var Treininfo = mongoose.model('Treininfo', treininfoSchema);

module.exports = Treininfo;
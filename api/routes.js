/**
 * Created by ffk27 on 18-6-2017.
 */
var mongoose = require('mongoose');

module.exports = function (router) {
    router.route('/treindrukte')
        .get(getDrukte);
};

function getDrukte(req, res) {
    const rit = req.search.rit;
    const tijd = req.search.tijd;
    const vertrekstation = req.search.vertrekstation;
    res.send(rit + '' + tijd);
}
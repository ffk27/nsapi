/**
 * Created by ffk27 on 18-6-2017.
 */
const mongoose = require('mongoose');
var request = require('request');
const Drukte = require('./drukteschema');
const Materieel = require('./materieelschema');
const Treininfo = require('./treininfoschema');

module.exports = function (router) {
    router.route('/treindrukte').get(getDrukte);
    router.route('/stations').get(getStations);
    router.route('/departures').get(getDepartures);
    router.route('/treininfo').get(getTreininfo);
};

// GET /api/treindrukte
function getDrukte(req, res) {
    // rit=7067&tijd=2017-12-23T19:02&vertrekstation=wdn
    //https://www.ns.nl/reisinfo-api/service/treindrukte?rit=7071&tijd=2017-12-23T21:02&vertrekstation=wdn
    //https://www.ns.nl/reisinfo-api/service/treindrukte?rit=7071&tijd=2017-12-23T20%3A02&vertrekstation=wdn
    const tijd = req.query.tijd;
    const rit = req.query.rit;

    Drukte.findOne({
        tijd: tijd,
        ritNummer: rit
    }, function (err, drukte) {
        if (err) {
            return res.json(err);
        }
        if (drukte) {
            return res.json(drukte);
        }
        request({
            url: 'http://www.ns.nl/reisinfo-api/service/treindrukte',
            qs: req.query
        }, function (error, response, body) {
            if (error) {
                return res.json(error);
            }
            try {
                const apiDrukte = JSON.parse(body);
                const newDrukte = new Drukte({
                    tijd: tijd,
                    ritNummer: rit,
                    stationsCode: req.query.vertrekstation,
                    dag: apiDrukte.dag,
                    drukte: apiDrukte.drukte
                });
                newDrukte.save(function (err, savedDrukte) {
                    return res.json(savedDrukte);
                });
            } catch (e) {
                return res.json(e);
            }
        });
    });
}

function getTreininfo(req, res) {
    /* https://www.ns.nl/reisinfo-api/service/treininformatie?q=7075&vertrekstation=wdn&vertrektijd=2017-12-23T22:02 */
    const qs = {
        q: req.query.rit,
        vertrekstation: req.query.vertrekstation,
        vertrektijd: req.query.tijd
    };
    Treininfo.findOne({
        vertrektijd: qs.vertrekstation,
        ritnummer: qs.q
    }).populate('info.materieeldelen.mat').exec((err, inf) => {
        if (err) res.json(err);
        if (inf) res.json(inf);

        const url = 'http://www.ns.nl/reisinfo-api/service/treininformatie';

        request({
            url: url,
            qs: qs
        }, function (error, response, body) {
            if (error) res.json(error);
            try {
                const treininfo = new Treininfo({
                    info: []
                });
                const mattypes = [];
                for (let info of JSON.parse(body)) {
                    treininfo.info[treininfo.info.length] = {
                        vertrektijd: qs.vertrektijd,
                        ritnummer: info.ritnummer,
                        station: info.station,
                        vervoerder: info.vervoerder,
                        materieeldelen: info.materieeldelen,
                        geplandeMaterieeldelen: info.geplandeMaterieeldelen,
                        ingekort: info.ingekort,
                        lengte: info.lengte,
                        geplandeLengte: info.geplandeLengte
                    };
                    info.materieeldelen && info.materieeldelen.forEach(matdeel => {
                        mattypes.indexOf(matdeel.type) === -1 && mattypes.push(matdeel.type);
                    });
                    info.geplandeMaterieeldelen && info.geplandeMaterieeldelen.forEach(matdeel => {
                        mattypes.indexOf(matdeel.type) === -1 && mattypes.push(matdeel.type);
                    });
                }
                const matToAdd = [];
                Materieel.find({
                    mattype: {
                        $in: mattypes
                    }
                }, function (err, mats) {
                    if (err) return res.json(err);
                    treininfo.info.forEach(info => {
                        info.materieeldelen && info.materieeldelen.forEach((matdeel, key) => {
                            const mat = mats.find(mat => {
                                return mat.mattype === matdeel.type
                            });
                            if (mat) { // Als het materieel al in de db zit
                                info.materieeldelen[key] = {
                                    materieelnummer: matdeel.materieelnummer,
                                    mat: mat._id,
                                }
                            } else if (!matToAdd.find(mat => {
                                    return mat.mattype === matdeel.type
                                })) {
                                // Als het materieel nog niet in de db zit en niet op de lijst van toe te voegen
                                matToAdd.push({
                                    mattype: matdeel.type,
                                    faciliteiten: matdeel.faciliteiten,
                                    afbeelding: matdeel.afbeelding,
                                    zitplaatsen: matdeel.zitplaatsen
                                });
                            }
                        });
                    });

                    Materieel.insertMany(matToAdd, function (err, addedMats) {
                        if (err) return res.json(err);
                        treininfo.info.forEach(info => {
                            info.materieeldelen && info.materieeldelen.forEach((matdeel, key) => {
                                if (!matdeel.mat) {
                                    const addedMat = addedMats.find(mat => {
                                        return mat.mattype === matdeel.type
                                    });
                                    if (addedMat) info.materieeldelen[key].mat = addedMat._id;
                                }
                            });
                        });
                        treininfo.save(function (err, savedTreininfo) {
                            savedTreininfo.populate('info.materieeldelen.mat', function (err, inf) {
                                if (err) res.json(err);
                                return res.json(inf);
                            })
                        });
                    });
                });
            } catch (e) {
                return res.json(e);
            }
        });
    });
}

function getStations(req, res) {
    request({
        url: 'http://www.ns.nl/reisinfo-api/service/stations/',
        qs: req.query
    }, function (error, response, body) {
        if (error) {
            return res.json(error);
        }
        try {
            return res.json(JSON.parse(body));
        } catch (e) {
            return res.json(e);
        }
    });
}

function getDepartures(req, res) {
    request({
        url: 'https://www.rijdendetreinen.nl/ajax/departures',
        qs: req.query
    }, function (error, response, body) {
        if (error) {
            return res.json(error);
        }
        try {
            return res.json(JSON.parse(body));
        } catch (e) {
            return res.json(e);
        }
    });
}
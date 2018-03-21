/**
 * Created by ffk27 on 18-6-2017.
 */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = express.Router();
const api = express();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/treininfo', {
    useMongoClient: true
});

api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(cors());
api.use('/api', router);
api.use('/assets', express.static(__dirname + '/assets'));
api.use('/', express.static(__dirname + '/webapp'));
api.listen(3000);

require('./routes')(router);
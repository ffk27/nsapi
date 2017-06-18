/**
 * Created by ffk27 on 18-6-2017.
 */
require('./proxy').startProxy(8012);

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
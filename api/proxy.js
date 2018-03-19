/**
 * Created by ffk27 on 18-6-2017.
 */
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var cors_proxy = require('cors-anywhere');

exports.startProxy = function (port) {
    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, function() {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
};
let fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

let T = new Twit(config);

T.post('statuses/update', { status: 'Look, I am tweeting!' }, function(err, data, response) {
    console.log(data)
});
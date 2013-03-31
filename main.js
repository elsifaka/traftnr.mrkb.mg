var twitter = require('ntwitter');
var conf = require('./config.json')

var twit = new twitter(conf.twitter)

twit.stream('statuses/filter', conf.traftnr, function(stream) {
    stream.on('data', function(data) {
        if (data.user.screen_name != conf.screen_name)
        twit.retweetStatus(data.id_str, function(){
            console.log("RT @" + data.user.screen_name + ": " + data.text);
        });
    });
});
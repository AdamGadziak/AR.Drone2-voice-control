var express = require('express');
var app = express();
var server = require("http").createServer(app);
var arDrone = require('ar-drone');
var client = arDrone.createClient();

app.get('/', function(req, res){
  res.send('hello world');
});
app.post('/start', function (req, res) {
    console.log('takeoff');
		client.takeoff();
	res.end();
});
app.post('/stop', function (req, res) {
    console.log('stop');
		client.stop();
			res.end();
});
app.post('/left', function (req, res) {
    console.log('left');
        client.left(0.1);
            res.end();
});
app.post('/right', function (req, res) {
    console.log('right');
        client.right(0.1);
            res.end();
});
app.post('/clock', function (req, res) {
    console.log('clock');
        client.clockwise(0.5);
            res.end();
});
app.post('/front', function (req, res) {
    console.log('front');
        client.front(0.1);
            res.end();
});
app.post('/back', function (req, res) {
    console.log('back');
        client.back(0.1);
            res.end();
});
app.post('/flipf', function (req, res) {
    console.log('flipf');
    client.animate('flipAhead', 100);
        res.end();

});
app.post('/flipb', function (req, res) {
    console.log('flipb');
    client.animate('flipBehind', 100);
        res.end();

});
app.post('/flipl', function (req, res) {
    console.log('flipl');
    client.animate('flipLeft', 100);
    	res.end();

});
app.post('/flipr', function (req, res) {
    console.log('flipr');
    client.animate('flipRight', 100);
        res.end();

});
app.post('/land', function (req, res) {
    console.log('land');
		client.land();
			res.end();

});

app.use(express.static(__dirname + '/'));
require("dronestream").listen(server);
server.listen(3000);
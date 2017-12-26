var redis = require('redis');
var port = 6379;
var host = '127.0.0.1';
var client = redis.createClient(port, host);

function testAddingValue() {

	// String values
	// 
	client.set('framework', "AngularJS-lori", function(err, reply) {
		console.log('set value framework:\t');
		console.log(reply);
	});

	client.get('framework', function(err, reply) {
		console.log("get value of key: framework:\t");
		console.log(reply);
	});

	// List values
	// 
	client.rpush(['frameworks', 'angularjs', 'backbone'], function(err, reply) {
		console.log(reply);
	});

	client.lrange('frameworks', 0, -1, function(err, reply) {
		console.log(reply); // ['angularjs', 'backbone']
	});
}

client.on('connect', function() {
	console.log('connected');

	testAddingValue();
});



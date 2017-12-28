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

	client.rpush('rm-resourcecmd', 'lori');
	client.rpush('rm-resourcecmd', "{\"id\":\"5da4402e-ebce-47aa-9301-c6950dbb988c\",\"type\":\"fusionworker\",\"name\":\"fusionworker : 5cd19c28-d3ad-485e-937d-e59913aea474\",\"queue\":\"fusionworker : 5cd19c28-d3ad-485e-937d-e59913aea474_queue\",\"minMemoryPerWorker\":1,\"ipAddress\":\"10.148.227.97\",\"managerIP\":\"127.0.0.1\",\"managerPort\":6379,\"cmdQueue\":\"rm-resourcecmd\",\"count\":1,\"connected\":true,\"started\":1514268772525,\"jobs\":0,\"capacity\":1,\"qos\":117051,\"metadata\":{\"uptime\":\"0:01:47\",\"startDate\":\"Tue Dec 26 2017 14:14:37 GMT+0800 (China Standard Time)\",\"buildInfo\":{\"created\":\"Wed, 13 Dec 2017 07:22:55 GMT\"},\"totalmem\":34280173568,\"freemem\":17225760768},\"currentJobs\":[],\"cmd\":\"resource_added\"}");

	client.lrange('rm-resourcecmd', 0, -1, function(err, reply) {
		console.log('keys: rm-resourcecmd');
		console.log(reply); // ['angularjs', 'backbone']
	});
}

client.on('connect', function() {
	console.log('connected');

	testAddingValue();
});



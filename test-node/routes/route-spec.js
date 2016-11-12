// Easy HTTP calls, allows us to check the body
var request = require('request');

describe('GET request for', function(done) {
	it(' /test', function() {
		request.get('http://localhost:3000/test', function(err, res, body) {
			expect(body).toEqual("<h1>I'm HTML!</h1>");
			expect(res.statusCode).toEqual(200);

			// Waits for the GET request to finish before running spec
			done();
		});
	});
});
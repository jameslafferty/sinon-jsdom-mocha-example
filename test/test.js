/*eslint-env mocha */
function getXMLHttpRequest() {
	return global.XMLHttpRequest || require('jsdom').jsdom('', {
			url: 'http://localhost'
		}).defaultView.XMLHttpRequest;
}

function setupServer(sinon, before, after) {
	var server;
	before(function() {
		server = sinon.fakeServer.create({
			autoRespond: true
		});
		server.respondWith('GET', '/test', [
			200,
			{
				'Content-Type': 'text/plain'
			},
			'true'
		]);
	});
	after(function() {
		server.restore();
	});
}

global.XMLHttpRequest = getXMLHttpRequest();
var assert = require('assert');
var sinon = require('sinon');
var sendXhr = require('../index.js');

describe('XMLHttpRequest', function() {
	setupServer(sinon, before, after);

	it('should return true', function(done) {
		sendXhr('/test', function(event) {
			assert(event.target.responseText === 'true');
			done();
		});
	});

	it('should 404', function(done) {
		sendXhr('/testError', function(event) {
			assert(event.target.status === 404);
			done();
		});
	});

});

process.env.NODE_ENV = 'test';

const request = require('request');
var expect = require('chai').expect
const service = require('../server');
const app = service.app;
var server;

describe("Ilovepets UnitTests", function(done) {

  server = app.listen();

  describe("Home Page", function() {
    var url = "http://localhost:3000/";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    

  });

  describe("Dogs Page", function() {
    var url = "http://localhost:3000/dogs";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

  });


  describe("Cats Page", function() {
    var url = "http://localhost:3000/cats";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

  });

  after(function(done) {
    if (server) {
      server.close(done);
    }
  });


});
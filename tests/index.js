var fs = require('fs');
var isCameraOn = require('..');
var should = require('should');

describe('isCameraOn', function() {
  it('should return false if it is off', function(done) {
    isCameraOn(function(err, bool) {
      should(bool).equal(false);
      done();
    })
  });
  it('should return true if it is on', function(done) {
    fs.open('/dev/video0', 'w', function(err, fd) {
      if (err) throw err;
      isCameraOn(function(err, bool) {
        should(bool).equal(true);
        fs.close(fd, done);
      });
    });
  });
  it('#promise should return false if it is off', function(done) {
    isCameraOn().then(function(bool) {
      should(bool).equal(false);
      done();
    })
  });
  it('#promise should return true if it is on', function(done) {
    fs.open('/dev/video0', 'w', function(err, fd) {
      if (err) throw err;
      isCameraOn().then(function(bool) {
        should(bool).equal(true);
        fs.close(fd, done);
      });
    });
  });
});

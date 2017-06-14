var exec = require('child_process').exec;

module.exports = function isCameraOn(cb) {
  var promise = new Promise(function (resolve, reject) {
    exec('fuser /dev/video0', function (err, stderr, stdout) {
      if (err) {
        if (err.code === 1) {
          return resolve(false);
        }
        return reject(err);
      }
      return resolve(true);
    });
  });
  if (cb) {
    promise.then(cb.bind(null, null), cb);
  }
  return promise;
};

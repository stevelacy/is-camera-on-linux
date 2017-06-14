# is-camera-on-linux
[![Build Status](https://travis-ci.org/stevelacy/is-camera-on-linux.png?branch=master)](https://travis-ci.org/stevelacy/is-camera-on-linux)
[![NPM version](https://badge.fury.io/js/is-camera-on-linux.png)](http://badge.fury.io/js/is-camera-on-linux)

> Checks if the camera is in use on linux

### Install

```sh
npm i -D is-camera-on-linux
```

### Usage

```js
var isCameraOn = require('is-camera-on-linux');

isCameraOn(function(err, bool) {
  // => true/false
});


// Promise notation:

isCameraOn().then((isOn) => {
  // => true/false
});

async () => {
  const isOn = await isCameraOn();
  // => true/false
}

```

### License [MIT](LICENSE)

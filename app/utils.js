"use strict";

var isPort = function isPort(port) {
  return (/^\d{1,5}$/.test(port) && port >= 1 && port <= 65535
  );
};

module.exports.isPort = isPort;
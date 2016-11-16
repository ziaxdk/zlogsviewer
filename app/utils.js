var isPort = function(port) {
  return (/^\d{1,5}$/.test(port) && port >= 1 && port <= 65535);
}

module.exports.isPort = isPort;
const utils = require('./utils');
const json = require('./package.json');

module.exports = function(args) {

  var check = [], argv = [];

  args.forEach(v => {
    if (utils.isPort(v)) {
      check.push(parseInt(v));
    }
  });

  if (check.length === 0) check.push(8080);

  module.exports = {
    args: check,
    _v: json.version
  }
}
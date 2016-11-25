'use strict';

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _package = require('./package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (args) {

  var check = [],
      argv = [];

  args.forEach(function (v) {
    if (_utils2.default.isPort(v)) {
      check.push(parseInt(v));
    }
  });

  if (check.length === 0) check.push(8080);

  module.exports = {
    args: check,
    _v: _package2.default.version
  };
};
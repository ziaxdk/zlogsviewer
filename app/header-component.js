'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _package = require('./package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  controller: function controller(args) {
    return {
      version: _package2.default.version
    };
  },

  view: function view(ctrl, args) {
    return (0, _mithril2.default)('header', { class: "toolbar toolbar-header" }, (0, _mithril2.default)('h1', { class: "title" }, 'zlogsviwer v' + ctrl.version));
  }
};
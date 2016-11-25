'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  controller: function controller(args) {},

  view: function view(ctrl, args) {
    return (0, _mithril2.default)('footer', { class: "toolbar toolbar-footer" }, (0, _mithril2.default)('h1', { class: "title" }, args.tab.totalCount + ' messages'));
  }
};
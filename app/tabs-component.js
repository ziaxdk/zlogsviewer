'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _tabComponent = require('./tab-component');

var _tabComponent2 = _interopRequireDefault(_tabComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  controller: function controller(args) {
    this.newClick = function () {
      args.new(9000);
    };
  },
  view: function view(ctrl, args) {
    return (0, _mithril2.default)('div.tab-group', args.tabs.map(function (tab) {
      return (0, _mithril2.default)(_tabComponent2.default, { tab: tab, vm: args });
    }), (0, _mithril2.default)('a', { onclick: ctrl.newClick }, (0, _mithril2.default)('div', { class: "tab-item tab-item-fixed" }, (0, _mithril2.default)('span', { class: "icon icon-plus" }))));
  }
};
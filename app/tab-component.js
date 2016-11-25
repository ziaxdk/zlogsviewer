'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  controller: function controller(args) {},
  view: function view(ctrl, args) {
    return (0, _mithril2.default)('div', { class: (0, _classnames2.default)('tab-item', { 'active': args.tab.active }), onclick: function onclick() {
        args.vm.select(args.tab);
      }, oncontextmenu: function oncontextmenu() {
        return args.tab.clear();
      } }, (0, _mithril2.default)('span', { class: "icon icon-cancel icon-close-tab", onclick: function onclick(e) {
        e.stopPropagation();args.vm.close(args.tab);
      } }), (0, _mithril2.default)('span', { class: 'icon icon-record', style: { 'color': '#34c84a', visibility: args.tab.newEntry ? 'visible' : 'hidden' } }), (0, _mithril2.default)('span', { style: { 'color': args.tab.isPaused ? '#999' : '#333' } }, args.tab.port)
    // m('span', { class: cn('icon', { 'icon-play': !args.tab.isPaused, 'icon-pause': args.tab.isPaused }) })
    );
  }
};
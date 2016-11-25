'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _headerComponent = require('./header-component');

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _contentComponent = require('./content-component');

var _contentComponent2 = _interopRequireDefault(_contentComponent);

var _footerComponent = require('./footer-component');

var _footerComponent2 = _interopRequireDefault(_footerComponent);

var _tabsComponent = require('./tabs-component');

var _tabsComponent2 = _interopRequireDefault(_tabsComponent);

var _ViewModel = require('./ViewModel');

var _ViewModel2 = _interopRequireDefault(_ViewModel);

var _runtime = require('./runtime');

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  controller: function controller(args) {
    return new _ViewModel2.default(_runtime2.default.args);
  },

  view: function view(vm) {
    return (0, _mithril2.default)("div.window", [
    // m(HeaderComponent),
    (0, _mithril2.default)(_tabsComponent2.default, vm), (0, _mithril2.default)(_contentComponent2.default, vm), (0, _mithril2.default)(_footerComponent2.default, vm)]);
  }
};
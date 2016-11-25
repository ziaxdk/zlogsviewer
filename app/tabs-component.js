'use strict';

var m = require('mithril');
var TabComponent = require('./tab-component');

module.exports = {
  controller: function controller(args) {
    this.newClick = function () {
      args.new(9000);
    };
  },
  view: function view(ctrl, args) {
    return m('div.tab-group', args.tabs.map(function (tab) {
      return m(TabComponent, { tab: tab, vm: args });
    }), m('a', { onclick: ctrl.newClick }, m('div', { class: "tab-item tab-item-fixed" }, m('span', { class: "icon icon-plus" }))));
  }
};
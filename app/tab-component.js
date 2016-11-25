'use strict';

var m = require('mithril');
var cn = require('classnames');

module.exports = {
  controller: function controller(args) {},
  view: function view(ctrl, args) {
    return m('div', { class: cn('tab-item', { 'active': args.tab.active }), onclick: function onclick() {
        args.vm.select(args.tab);
      }, oncontextmenu: function oncontextmenu() {
        return args.tab.clear();
      } }, m('span', { class: "icon icon-cancel icon-close-tab", onclick: function onclick(e) {
        e.stopPropagation();args.vm.close(args.tab);
      } }), m('span', { class: 'icon icon-record', style: { 'color': '#34c84a', visibility: args.tab.newEntry ? 'visible' : 'hidden' } }), m('span', { style: { 'color': args.tab.isPaused ? '#999' : '#333' } }, args.tab.port)
    // m('span', { class: cn('icon', { 'icon-play': !args.tab.isPaused, 'icon-pause': args.tab.isPaused }) })
    );
  }
};
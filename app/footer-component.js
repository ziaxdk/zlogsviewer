'use strict';

var m = require('mithril');

module.exports = {
  controller: function controller(args) {},

  view: function view(ctrl, args) {
    return m('footer', { class: "toolbar toolbar-footer" }, m('h1', { class: "title" }, args.tab.totalCount + ' messages'));
  }
};
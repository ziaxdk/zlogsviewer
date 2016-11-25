'use strict';

var m = require('mithril');
var json = require('./package.json');

module.exports = {
  controller: function controller(args) {
    return {
      version: json.version
    };
  },

  view: function view(ctrl, args) {
    return m('header', { class: "toolbar toolbar-header" }, m('h1', { class: "title" }, 'zlogsviwer v' + ctrl.version));
  }
};
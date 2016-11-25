'use strict';

var m = require('mithril');
var HeaderComponent = require('./header-component');
var ContentComponent = require('./content-component');
var FooterComponent = require('./footer-component');
var TabsComponent = require('./tabs-component');

var ViewModel = require('./ViewModel');
var runtime = require('./runtime');

module.exports = {

  controller: function controller(args) {
    return new ViewModel(runtime.args);
  },

  view: function view(vm) {
    return m("div.window", [
    // m(HeaderComponent),
    m(TabsComponent, vm), m(ContentComponent, vm), m(FooterComponent, vm)]);
  }
};
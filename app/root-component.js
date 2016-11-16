const m = require('mithril');
const HeaderComponent = require ('./header-component');
const ContentComponent = require ('./content-component');
const FooterComponent = require ('./footer-component');
const TabsComponent = require ('./tabs-component');

const ViewModel = require('./ViewModel');
const runtime = require('./runtime');

module.exports = {

  controller: function(args) {
    return new ViewModel(runtime.args);
  },

  view: function(vm) {
    return m("div.window", [
      // m(HeaderComponent),
      m(TabsComponent, vm),
      m(ContentComponent, vm),
      m(FooterComponent, vm)
    ]);
  }
};

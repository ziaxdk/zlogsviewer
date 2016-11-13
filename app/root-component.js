const m = require('mithril');
const HeaderComponent = require ('./header-component');
const ContentComponent = require ('./content-component');
const FooterComponent = require ('./footer-component');
const TabsComponent = require ('./tabs-component');

const ViewModel = require('./ViewModel');
const runtime = require('./runtime');

module.exports = {

  controller: function(args) {
    var check = [], argv = runtime.args || [];
  
    argv.forEach(v => {
      if (Number.isSafeInteger(v)) {
        check.push(parseInt(v));
      }
    });
  
    if (check.length === 0) check.push(8080);
    var vm = new ViewModel(check);
    return vm;
  },

  view: function(ctrl, args) {
    return m("div.window", [
      m(HeaderComponent),
      m(TabsComponent, ctrl),
      m(ContentComponent, ctrl),
      m(FooterComponent, ctrl)
    ]);
  }
};

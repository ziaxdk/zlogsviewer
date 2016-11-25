import m from 'mithril';
import HeaderComponent from './header-component';
import ContentComponent from './content-component';
import FooterComponent from './footer-component';
import TabsComponent from './tabs-component';

import ViewModel from './ViewModel';
import runtime from './runtime';

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

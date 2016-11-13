const m = require('mithril');
const TabComponent = require('./tab-component');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
    return m('div.tab-group',
      args.tabs.map(tab => {
        return m(TabComponent, { tab, vm: args });
      }),
      m('div', { class: "tab-item tab-item-fixed" },
        m('span', { class: "icon icon-plus" })
    )
  );
  }
};



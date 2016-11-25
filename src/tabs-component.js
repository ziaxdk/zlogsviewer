import m from 'mithril';
import TabComponent from './tab-component';

module.exports = {
  controller(args) {
    this.newClick = () => {
      args.new(9000);
    }
  },

  view(ctrl, args) {
    return m('div.tab-group',
      args.tabs.map(tab => {
        return m(TabComponent, { tab, vm: args });
      }),
        m('a', { onclick: ctrl.newClick },
          m('div', { class: "tab-item tab-item-fixed" },
            m('span', { class: "icon icon-plus" }))
    )
  );
  }
};



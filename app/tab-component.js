const m = require('mithril');
const cn = require('classnames');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
    return m('div', { class: cn('tab-item', { 'active': args.tab.active }) , onclick: function() { args.vm.select(args.tab); } },
      m('span', { class: "icon icon-cancel icon-close-tab", onclick: function(e) { e.stopPropagation(); args.vm.close(args.tab); } }),
      [
        m('span', { class: 'icon icon-record', style: { 'color': '#34c84a', visibility: args.tab.newEntry ? 'visible' : 'hidden' } }),
        ' ' + args.tab.port
    ]
  );
  }
};

const m = require('mithril');
const cn = require('classnames');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
    // return m('div', { class: cn('tab-item', { 'active': args.tab.active }), onclick: () => { args.vm.select(args.tab); } },
    return m('div', { class: cn('tab-item', { 'active': args.tab.active }) },
      m('span', { class: "icon icon-cancel icon-close-tab", onclick: (e) => { e.stopPropagation(); args.vm.close(args.tab); } }),
      m('span', { class: 'icon icon-record', style: { 'color': '#34c84a', visibility: args.tab.newEntry ? 'visible' : 'hidden' } }),
      m('span', { onclick: () => { console.log('ZZZZZ'); } }, args.tab.port),
      m('span', { class: cn('icon', { 'icon-play': !args.tab.isPaused, 'icon-pause': args.tab.isPaused }), onclick: () => { console.log('ZZ2') } })
  );
  }
};

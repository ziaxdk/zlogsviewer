const m = require('mithril');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
    return m('footer', { class: "toolbar toolbar-footer"},
      m('div', { class: 'toolbar-actions' },
        [
        m('button', { class: 'btn btn-default', onclick: () => args.tab.clear() }, 'Clear'),
        m('span', { class: "title"}, `${args.tab.totalCount} messages`)
      ])
      
    );
  }
};



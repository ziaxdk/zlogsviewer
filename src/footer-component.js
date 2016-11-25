const m = require('mithril');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
    return m('footer', { class: "toolbar toolbar-footer"},
        m('h1', { class: "title"}, `${args.tab.totalCount} messages`)
    );
  }
};



const m = require('mithril');
const json = require('./package.json');

module.exports = {
  controller: function(args) {
  	return {
  		version: json.version
  	}
  },

  view: function(ctrl, args) {
    return m('header', { class: "toolbar toolbar-header" },
    	m('h1', { class: "title" }, `logz-ziax v${ctrl.version}`)
    );
  }
};



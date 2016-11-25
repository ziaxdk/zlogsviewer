import m from 'mithril';
import json from './package.json';

module.exports = {
  controller: function(args) {
  	return {
  		version: json.version
  	}
  },

  view: function(ctrl, args) {
    return m('header', { class: "toolbar toolbar-header" },
    	m('h1', { class: "title" }, `zlogsviwer v${ctrl.version}`)
    );
  }
};



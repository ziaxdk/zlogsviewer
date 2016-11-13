const m = require('mithril');

module.exports = {
  controller: function(args) {
  },

  view: function(ctrl, args) {
  	var regex = /^ ?(DEBUG|INFO|WARNING|ERROR|FATAL)/;
  	function mangle(val) {
  		var valv = m('span', val);

  		var match = val.match(regex);
  		if (!match) return valv;
  		// console.log(match)
  		var color, m1 = match[1];
  		if (m1 === 'DEBUG') {
  			color = '#57acf5';
  		}
  		else if (m1 === 'INFO') {
  			color = '#34c84a';
  		}
  		else if (m1 === 'WARNING') {
  			color = '#fdbc40';
  		}
  		else if (m1 === 'ERROR') {
  			color = '#fc605b';
  		}
  		else if (m1 === 'FATAL') {
  			color = '#fc605b';
  		}
  		var dotv = m('span', { class: "icon icon-record", style: { 'color': color } });
  		valv = m('span', match.input.replace(match[0], ''));
  		return [ dotv, valv ];
  	}

    return m("div.window-content",
    	m('ul.list-group',
	    	args.content.map(ctn => {
	    		return m('li.list-group-item', { class: '_list-group-item-clear' }, mangle(ctn));
	    	})
    	)
	);
  }
};

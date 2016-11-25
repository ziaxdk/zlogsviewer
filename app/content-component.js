'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  controller: function controller(args) {},

  view: function view(ctrl, args) {
    function marking(doMarking, input) {
      if (!doMarking) return input;
      return _mithril2.default.trust(input.replace('\n', '<br/>').replace(' ', '&nbsp;'));
    }

    var regex = /^ ?(DEBUG|INFO|WARNING|ERROR|FATAL)/;
    function mangle(val) {
      var valv = (0, _mithril2.default)('span', val);

      var match = val.match(regex);
      if (!match) return valv;
      // console.log(match)
      var color,
          m1 = match[1];
      if (m1 === 'DEBUG') {
        color = '#57acf5';
      } else if (m1 === 'INFO') {
        color = '#34c84a';
      } else if (m1 === 'WARNING') {
        color = '#fdbc40';
      } else if (m1 === 'ERROR') {
        color = '#fc605b';
      } else if (m1 === 'FATAL') {
        color = '#fc605b';
      }
      var dotv = (0, _mithril2.default)('span', { class: "icon icon-record", style: { 'color': color } });
      valv = (0, _mithril2.default)('span', marking(false, match.input.replace(match[0], '')));
      return [dotv, valv];
    }

    return (0, _mithril2.default)("div.window-content", (0, _mithril2.default)('ul.list-group', args.content.map(function (ctn) {
      return (0, _mithril2.default)('li.list-group-item', { key: ctn.id, class: '_list-group-item-clear' }, mangle(ctn.data));
    })));
  }
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uniq = require('lodash.uniq');
var Tab = require('./Tab');
var utils = require('./utils');

var ViewModel = function () {
  function ViewModel(ports) {
    _classCallCheck(this, ViewModel);

    this.tabs = uniq(ports).map(function (port) {
      return new Tab(port);
    });
    this.select(this.tabs[0]);
  }

  _createClass(ViewModel, [{
    key: 'select',
    value: function select(tab) {
      var _this = this;

      if (tab.active) {
        tab.pause();
        return;
      }

      this.tabs.forEach(function (t) {
        if (t === tab) {
          t.active = true;
          t.newEntry = false;
          _this.tab = t;
          _this.content = t.buffer;
        } else {
          t.active = false;
        }
      });
    }
  }, {
    key: 'close',
    value: function close(tab) {
      if (this.tabs.length == 1) return;
      tab.close();
      this.tabs = this.tabs.filter(function (v) {
        return v !== tab;
      });
      if (!this.tabs.some(function (v) {
        return v.active;
      })) {
        this.select(this.tabs[this.tabs.length - 1]);
      }
    }
  }, {
    key: 'new',
    value: function _new(port) {
      if (!this.isPort(port) || this.tabs.some(function (v) {
        return v.port === port;
      })) return;
      this.tabs.push(new Tab(port));
    }
  }, {
    key: 'isPort',
    value: function isPort(port) {
      return utils.isPort(port);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.tabs.forEach(function (tab) {
        return tab.destroy();
      });
    }
  }]);

  return ViewModel;
}();

module.exports = ViewModel;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogReceiver = require('./dummy-log-receiver');
// const LogReceiver = require('./log-receiver');
var m = require('mithril');

var Tab = function () {
	function Tab(port) {
		var _this = this;

		_classCallCheck(this, Tab);

		this.port = port;
		this.buffer = [];
		this.active = false;
		this.newEntry = false;
		this.totalCount = 0;
		this.isPaused = false;
		var log = new LogReceiver({ port: port });
		log.on('data', function (s) {
			if (_this.isPaused) return;
			_this.buffer.unshift({ id: _this.totalCount, data: s });

			if (_this.buffer.length >= 256) {
				_this.buffer.pop();
			}
			// console.log('..', s);
			if (_this.totalCount != 0) {
				_this.newEntry = true;
			}
			if (_this.active) {
				m.redraw();
			} else {}
			_this.totalCount++;
		});

		this.log = log;
		log.listen();
	}

	_createClass(Tab, [{
		key: 'clear',
		value: function clear() {
			this.buffer.length = 0;
			this.totalCount = 0;
		}
	}, {
		key: 'close',
		value: function close() {
			this.destroy();
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.log.destroy();
		}
	}, {
		key: 'pause',
		value: function pause() {
			this.isPaused = !this.isPaused;
		}
	}]);

	return Tab;
}();

module.exports = Tab;
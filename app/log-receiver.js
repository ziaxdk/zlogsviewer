'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _dgram = require('dgram');

var _dgram2 = _interopRequireDefault(_dgram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = new WeakMap();

var Log = function (_EventEmitter) {
  _inherits(Log, _EventEmitter);

  function Log(options) {
    _classCallCheck(this, Log);

    var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this));

    _this.options = Object.assign({}, { port: 8080 }, options);
    return _this;
  }

  _createClass(Log, [{
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      var server = _dgram2.default.createSocket('udp4');

      server.on('error', function (err) {
        _this2.emit('data', 'Error: ' + err);
        server.close();
      });

      server.on('message', function (msg) {
        // console.log(msg);
        _this2.emit('data', msg.toString());
      });

      server.on('listening', function () {
        var address = server.address();
        _this2.emit('data', 'Port ' + address.port + ' ready...');
        // this.emit('data', ' DEBUG TEST');
        // this.emit('data', ' INFO TEST');
        // this.emit('data', ' ERROR TEST');
        // this.emit('data', ' FATAL TEST');
      });
      __.set(this, { server: server });

      server.bind(this.options.port);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var server = __.get(this).server;
      __.set(this, { server: null });
      server.close();
    }
  }]);

  return Log;
}(_events2.default);

module.exports = Log;
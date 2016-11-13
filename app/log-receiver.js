const EventEmitter = require('events');
const Util = require('util');
const dgram = require('dgram');
const __ = new WeakMap();

class Log extends EventEmitter {


  constructor(options) {
    super();
    this.options = Object.assign({}, { port: 8080 }, options);
  }



  listen() {
    let server = dgram.createSocket('udp4');

    server.on('error', (err) => {
      this.emit('data', `Error: ${err}`);
      server.close();
    });

    server.on('message', (msg) => {
      // console.log(msg);
      this.emit('data', msg.toString());
    });

    server.on('listening', () => {
      var address = server.address();
      this.emit('data', `Port ${address.port} ready...`);
      // this.emit('data', ' DEBUG TEST');
      // this.emit('data', ' INFO TEST');
      // this.emit('data', ' ERROR TEST');
      // this.emit('data', ' FATAL TEST');
    });
    __.set(this, { server });

    server.bind(this.options.port);
  }

  destroy() {
    let server = __.get(this).server;
    __.set(this, { server: null });
    server.close();
  }
}

module.exports = Log;
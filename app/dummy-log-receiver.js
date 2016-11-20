const EventEmitter = require('events');

const __ = new WeakMap();

class Log extends EventEmitter {


	constructor(options) {
		super();
		this.options = Object.assign({}, { port: 8080 }, options);
	}



	listen() {
		let i = 1;
		let id = setInterval(() => {
			var s = 'to ' + this.options.port + ' (' + (i++) + ')';
			this.emit('data', s);
			// console.log(s);
		}, 30);
		__.set(this, { id });

	}

	destroy() {
		clearInterval(__.get(this).id);
		__.set(this, { id: null });
	}
}


module.exports = Log;
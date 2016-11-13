// const LogReceiver = require('./dummy-log-receiver');
const LogReceiver = require('./log-receiver');
const m = require('mithril');

class Tab {
	constructor(port) {
		this.port = port;
		this.buffer = [];
		this.active = false;
		this.newEntry = false;
		this.totalCount = 0;
		let log = new LogReceiver({ port: port });
	    log.on('data', s => {
	    	this.buffer.unshift(s);

	      if (this.buffer.length >= 256) {
	        this.buffer.pop();
	      }
	      // console.log('..', s);
	      if (this.totalCount !=0) {
		      this.newEntry = true;
		  }
	      if (this.active) {
		      m.redraw();
		  }
		  else {
		  }
		  this.totalCount++;
	    });

		this.log = log;
		log.listen();
	}

	close() {
		this.destroy();
	}

	destroy() {
		this.log.destroy();
	}
	
}

module.exports = Tab;
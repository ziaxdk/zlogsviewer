import LogReceiver from './dummy-log-receiver';
// import LogReceiver from './log-receiver';
import m from 'mithril';
import Rx from 'rxjs/Rx';



class Tab {
	constructor(port) {
		this.port = port;
		this.buffer = [];
		this.active = false;
		this.newEntry = false;
		this.totalCount = 0;
		this.isPaused = false;
		let log = new LogReceiver({ port: port });
    log.on('data', s => {
    	if (this.isPaused) return;
    	this.buffer.unshift({ id: this.totalCount, data: s });

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

		// var clicks = Rx.Observable.fromEvent(log, 'data');
		// clicks.subscribe(x => console.log(x));


		this.log = log;
		log.listen();
	}

	clear() {
		this.buffer.length = 0;
		this.totalCount = 0;
	}

	close() {
		this.destroy();
	}

	destroy() {
		this.log.destroy();
	}

	pause() {
		this.isPaused = !this.isPaused;
	}
	
}

module.exports = Tab;
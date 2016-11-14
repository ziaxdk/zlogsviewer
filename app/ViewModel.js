const uniq = require('lodash.uniq');
const Tab = require('./Tab');

class ViewModel {
	constructor(ports) {

		this.tabs = uniq(ports).map(port => new Tab(port));
    this.select(this.tabs[0]);
	}

  select(tab) {
    this.tabs.forEach(t => {
      if (t === tab) {
        t.active = true;
        t.newEntry = false;
        this.tab = t;
        this.content = t.buffer;
      }
      else {
        t.active = false;
      }
    })

  }
  close(tab) {
    if (this.tabs.length == 1) return;
    tab.close();
    this.tabs = this.tabs.filter(v => v !== tab);
    if(!this.tabs.some(v => v.active)) {
      this.select(this.tabs[this.tabs.length - 1]);
    }
  }

  new(port) {
    if (!this.isPort(port) || this.tabs.some(v => v.port === port)) return;
    this.tabs.push(new Tab(port));
  }

  isPort(port) {
    return (/^\d{1,5}$/.test(port) && port >= 1 && port <= 65535);
  }
	
  destroy() {
    this.tabs.forEach(tab => tab.destroy());
  }
}

module.exports = ViewModel;
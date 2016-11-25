import uniq from 'lodash.uniq';
import Tab from './Tab';
import utils from './utils';

class ViewModel {
	constructor(ports) {

		this.tabs = uniq(ports).map(port => new Tab(port));
    this.select(this.tabs[0]);
	}

  select(tab) {
    if (tab.active) {
      tab.pause();
      return;
    }


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
    return utils.isPort(port);
  }
	
  destroy() {
    this.tabs.forEach(tab => tab.destroy());
  }
}

module.exports = ViewModel;
class Observable {
  constructor() {
    this.listeners = [];
  }

  observe(cb) {
    this.listeners.push(cb);
  }

  notify(data) {
    this.listeners.forEach((listener) => {
      listener(data);
    });
  }
}

export default Observable;

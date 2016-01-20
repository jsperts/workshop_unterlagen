import angular from 'angular';

class Provider {
  config(name) {
    this.name = name;
  }

  $get() {
    const self = this;
    return {
      getName() {
        return self.name;
      }
    };
  }
}

export default Provider;
export const name = 'Provider';

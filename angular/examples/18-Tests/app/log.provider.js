class Log {
  config(loggingOn) {
    this.logging = loggingOn;
  }

  $get() {
    const self = this;
    return {
      log(str) {
        if (self.logging) {
          console.log(str);
        }
      }
    };
  }
}

export default Log;
export const name = 'Log';

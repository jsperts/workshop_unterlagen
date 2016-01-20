function factory() {
  return {
    getName() {
      return 'Max';
    }
  };
}

export default factory;
export const name = 'decoratedFactory';

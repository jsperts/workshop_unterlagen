function factory() {
  const name = 'Factory Name';
  return {
    getName() {
      return name;
    }
  };
}

export default factory;
export const name = 'factoryService';

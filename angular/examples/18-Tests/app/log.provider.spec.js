describe('log Provider', () => {
  let provider;

  beforeEach(() => {
    angular.mock.module('app', (LogProvider) => {
      provider = LogProvider
    });
    angular.mock.inject(()=>{})
  });

  it('should set the logging option to false', () => {
    provider.config(false);
    expect(provider.logging).toBe(false)
  });

  it('should set the logging option to true', () => {
    provider.config(true);
    expect(provider.logging).toBe(true)
  });

  it('should call console.log if logging is true', () => {
    provider.config(true);
    spyOn(console, 'log');
    provider.$get().log();
    expect(console.log).toHaveBeenCalled();
  });
});

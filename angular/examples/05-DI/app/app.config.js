import {name as providerProviderName} from './provider.provider';

function providerServiceConfig(provider) {
  const name = 'Name for Provider';
  provider.config(name);
}

// DI: inline array annotation
export default [`${providerProviderName}Provider`, providerServiceConfig]

import {name as logProviderName} from './log.provider';

function logProviderConfig(logProvider) {
  const loggingOn = true;
  logProvider.config(loggingOn);
}

export default [`${logProviderName}Provider`, logProviderConfig]

import { COUNTER_INCREMENTED } from './events';

export function incrementCounter() {
  return {
    type: COUNTER_INCREMENTED,
  };
}

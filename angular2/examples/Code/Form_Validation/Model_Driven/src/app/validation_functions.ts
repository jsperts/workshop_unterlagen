import { ValidatorFn, AsyncValidatorFn, FormGroup, FormControl } from '@angular/forms';

export function equals(): ValidatorFn {
  return function equals(group: FormGroup) {
    const keys = Object.keys(group.value);
    const allEqual = keys
        .map((key) => group.value[key])
        .every((c) => c === group.value[keys[0]]);
    return !allEqual ? {equals: true} : null;
  };
}

export function usernameExists(): AsyncValidatorFn {
  return function usernameExists(control: FormControl) {
    // Must return Promise or Observable
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'Max') {
          resolve({
            usernameExists: true
          });
        }
        resolve(null);
      }, 1000);
      // If the promise gets rejected -> the field remains pending until we resolve
    }).catch(() => {
      return null;
    });
  };
}

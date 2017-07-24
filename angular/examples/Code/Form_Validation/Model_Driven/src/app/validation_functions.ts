import { ValidatorFn, AsyncValidatorFn, FormGroup, FormControl, ValidationErrors } from '@angular/forms';

export function equals(): ValidatorFn {
  return (group: FormGroup) => {
    const keys = Object.keys(group.value);
    const allEqual = keys
        .map((key) => group.value[key])
        .every((c) => c === group.value[keys[0]]);
    return !allEqual ? {equals: true} : null;
  };
}

export function usernameExists(): AsyncValidatorFn {
  return (control: FormControl) => {
    // Must return Promise or Observable
    return new Promise<ValidationErrors | null>((resolve) => {
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

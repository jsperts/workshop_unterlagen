import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFilter',
  pure: true // default
})
export class PureFilterPipe implements PipeTransform {
  transform(listEntries: Array<{ isActive: boolean; }>) {
    return listEntries.filter((entry) => entry.isActive);
  }
}

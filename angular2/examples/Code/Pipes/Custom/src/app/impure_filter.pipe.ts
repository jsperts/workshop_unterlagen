import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilter',
  pure: false
})
export class ImpureFilterPipe implements PipeTransform {
  transform(listEntries: Array<{ isActive: boolean; }>) {
    return listEntries.filter((entry) => entry.isActive);
  }
}

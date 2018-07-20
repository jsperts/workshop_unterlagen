import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface HasChangesComponent {
  hasChanges: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AllSavedGuardService implements CanDeactivate<HasChangesComponent> {
  canDeactivate(component: HasChangesComponent) {
    console.log('canDeactivate');
    return !component.hasChanges();
  }
}

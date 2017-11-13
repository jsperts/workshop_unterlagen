import angular from 'angular';

import AppComponent, { name as appComponentName} from './app.component';
import ChildComponent, { name as childComponentName } from './child.component';

angular.module('app', [])
    .component(appComponentName, AppComponent)
    .component(childComponentName, ChildComponent);

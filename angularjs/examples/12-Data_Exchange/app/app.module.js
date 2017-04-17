import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';
import {default as AddDataComponent, name as addDataComponentName} from './add_data.component';
import {default as ReactOnAddComponent, name as reactOnAddComponentName} from './react_on_add.component';

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .component(addDataComponentName, AddDataComponent)
    .component(reactOnAddComponentName, ReactOnAddComponent);

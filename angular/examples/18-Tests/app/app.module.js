import angular from 'angular';
// Wird gebraucht für die Tests. Sollte nur bei Tests geladen werden!
import 'angular-mocks';

import {default as ColorSelectorComponent, name as colorSelectorName} from './color_selector.component';

import {default as colorFilter, name as colorFilterName} from './color.filter';

import {default as colorDirective, name as colorDirectiveName} from './color.directive';
import {default as capitalizeDirective, name as capitalizeDirectiveName} from './capitalize.directive';
import {default as containsAbcDirective, name as containsAbcDirectiveName} from './contains_abc.directive';
import {default as containsAbcAsyncDirective, name as containsAbcAsyncDirectiveName} from './contains_abc_async.directive';

import {default as SendToServerService, name as sendToServerServiceName} from './send_to_server.service';
import {default as LogProvider, name as logProviderName} from './log.provider';

import {default as appConfig} from './app.config'

angular.module('app', [])
    .config(appConfig)
    .component(colorSelectorName, ColorSelectorComponent)
    .filter(colorFilterName, colorFilter)
    .directive(colorDirectiveName, colorDirective)
    .directive(capitalizeDirectiveName, capitalizeDirective)
    .directive(containsAbcDirectiveName, containsAbcDirective)
    .directive(containsAbcAsyncDirectiveName, containsAbcAsyncDirective)
    .service(sendToServerServiceName, SendToServerService)
    .provider(logProviderName, LogProvider);
import angular from 'angular';

import {default as MainComponent, name as mainComponentName} from './main.component';

import {default as onClickDirective, name as onClickDirectiveName} from './on_click.directive';
import {default as isolatedInterpolationDirective, name as isolatedInterpolationDirectiveName} from './interpolation.directive';
import {default as isolatedTwoWayDirective, name as isolatedTwoWayDirectiveName} from './two_way.directive';
import {default as isolatedTwoWayStarDirective, name as isolatedTwoWayStarDirectiveName} from './two_way_star.directive';
import {default as isolatedOneWayDirective, name as isolatedOneWayDirectiveName} from './one_way.directive';
import {default as isolatedExpressionDirective, name as isolatedExpressionDirectiveName} from './expression.directive';

angular.module('app', [])
    .component(mainComponentName, MainComponent)
    .directive(onClickDirectiveName, onClickDirective)
    .directive(isolatedInterpolationDirectiveName, isolatedInterpolationDirective)
    .directive(isolatedTwoWayDirectiveName, isolatedTwoWayDirective)
    .directive(isolatedTwoWayStarDirectiveName, isolatedTwoWayStarDirective)
    .directive(isolatedOneWayDirectiveName, isolatedOneWayDirective)
    .directive(isolatedExpressionDirectiveName, isolatedExpressionDirective);

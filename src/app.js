


import $ from 'jquery';
import 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/gcal.js';

import 'bootstrap/dist/css/bootstrap-theme.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import angular from 'angular';
import ngRoute from 'angular-route';



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import  uiBootstrap from 'angular-ui-bootstrap';

import ngAnimate from 'angular-animate';
import 'angular-toastr/dist/angular-toastr.css';
import toastr from 'angular-toastr';
import 'angularjs-datetime-picker';
import 'angularjs-datetime-picker/angularjs-datetime-picker.css';



import 'angular-ui-calendar';
import 'ng-confirm' ;

import partTimeView from './module/PartTime/PartTime.html';
import cardView from './module/PartTime/Card.html';
import partTimeCreate from './module/PartTime/Create.html';
import listView from './module/PartTime/Table.html';
import homeView from './module/Home/Home.html';




var myApp = angular.module('myApp', [
    ngRoute,
    uiBootstrap,
    ngAnimate,
    toastr,
    'ui.calendar',
    'angularjs-datetime-picker',
   
    
    ])
    myApp.component('homeView',{
        template:homeView,
        controller:HomeController,
        bindings: {
            viewType: '@'
        }

    });
    myApp.component('partTime',{
        template:partTimeView,
        controller:PartTimeController,
        bindings: {
            viewType: '@'
        }
    });
    myApp.component('cardView',{
        template:cardView,
        controller:PartTimeController,
        bindings: {}
    });
    myApp.component('listView',{
        template:listView,
        controller:PartTimeController,
        bindings: {}
    });
    myApp.component('create',{
        template:partTimeCreate,
        controller:PartTimeController,
        bindings: {}
    });

    $('#timetable').fullCalendar({
        editable: true,
        firstDay: 1,
        droppable: true,
    }) 
    


import appConfig from './app.config.js';
myApp.config(appConfig);

import HomeController from './module/Home/HomeController.js';
myApp.controller("HomeController", HomeController);

import PartCalendarController from './module/Home/PartCalendarController.js';
myApp.controller("PartCalendarController", PartCalendarController);

import PartTimeController from './module/PartTime/PartTimeController.js';
myApp.controller("PartTimeController", PartTimeController);

import PartTimeService from './module/PartTime/PartTimeService.js';
myApp.service("PartTimeService", PartTimeService);

import HomeService from './module/Home/HomeService.js';
myApp.service("HomeService", HomeService);


export default myApp;



import homeView from './module/Home/Home.html';
import partTimeView from './module/PartTime/PartTime.html';

import createView from './module/PartTime/Create.html';
import createnewEvents from './module/Home/CreateNewEvent.html';

var appConfig = function  ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/Home', {
            template: homeView,
            controller: 'HomeController'
        }).when('/PartTime', {
            template: '<part-time view-type="list"></part-time>'
        }).when('/CreateParttime', {
            template: '<part-time view-type="create"></part-time>'
        }).when('/CreateNewEvent', {
            template: createnewEvents
        }).when('/Card', {
            template: '<part-time view-type="card"></part-time>'
        }).when('/List', {
            template: '<part-time view-type="list"></part-time>'
        }).otherwise({
            redirectTo: '/Home'
        });
    
       

}

export default appConfig;


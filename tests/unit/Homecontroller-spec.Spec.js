
import "angular";
import "angular-mocks";
import HomeController from "../../src/module/Home/HomeController";


var $compile, $timeout,uiCalendarConfig,HomeService,toastr,$scope,$controller,objectUnderTest,MockHomeService,$q, $httpBackend;

describe('HomeController', function () {


    beforeEach(() => {
        angular.mock.module('myApp')
    });

    beforeEach(angular.mock.inject(( _$rootScope_,_uiCalendarConfig_,_$compile_,_HomeService_,_$controller_,_$timeout_,_toastr_,_$q_) => {
        console.log('helllllo');

        
        $scope = _$rootScope_.$new();
        
        $compile = _$compile_;
        uiCalendarConfig = _uiCalendarConfig_ ;
        HomeService = _HomeService_  ;
        $timeout = _$timeout_;
        toastr = _toastr_ ;
        $controller = _$controller_;
        $q = _$q_;



        $controller =$controller('HomeController',{
            $scope : $scope,
            uiCalendarConfig :_uiCalendarConfig_ ,
            $compile :_$compile_,
            HomeService :_HomeService_ ,
            $timeout :_$timeout_,
            toastr :_toastr_ 
        });
  
       // spyOn(HomeService, 'getAll');
        spyOn(HomeService, 'getPart');
        spyOn(HomeService, 'delete');
        spyOn(HomeService, 'add').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve('Remote call result');
            return deferred.promise;
        });

       

    }));



    it('Should $scope be defined', function () {
        expect($scope).toBeDefined();
    })

    it('home controller should be defined', function(){
        expect($controller).toBeDefined();
    })

    it('home service should be defined', function(){
        expect(HomeService).toBeDefined();
    })
    // it('home service getAll method should be defined', function(){
    //     expect(HomeService.getAll).toBeDefined();
    // })
    // it('getAll events assigned to events value to HomeService ', function(){
    //     HomeService.getAll()
    //     expect(HomeService.getAll).toHaveBeenCalled();
    // })
    

    it('home controller add method must be add true value', function(){
        var event= {
            EventID:5,
            Title:"parttime",
            start: "2019-02-19 09:10:00" ,
            start:"2019-02-19 09:10:00" ,
            Description:"parttime" ,
            allDay:true
        }
    
        $scope.updateView = jasmine.createSpy();
        $scope.event = event
        $scope.add();
        var expected_event = {
            id: 5,
            title: "parttime",
            start: "2019-02-19 09:10:00",
            end: "2019-02-19 09:10:00",
            description: "parttime",
            allDay: true
             
            
        }

        // 
    
        expect(HomeService.add).toHaveBeenCalledWith(expected_event);
        expect($scope.updateView).toHaveBeenCalled();
        

    })

   
});




































 // describe('HomeService', function () {

    //     var HomeService,httpBackend;

    //     beforeEach(inject(function(HomeService) {
      
    //     HomeService = HomeService;
    //     }));

       


      






       
    //     // var eventForService = [{id: 85, title: "Melody", start: "2019-02-19 09:10:00", end: "2019-02-19 09:10:00", description: "e", color: "#415d85",allDay: false},{id: 86, title: "Asli", start: "2019-02-19 09:10:00", end: "2019-02-19 09:10:00", description: "e", color: "#415d85",allDay: false}];
    //     // beforeEach(inject(function($q,$httpBackend,HomeService) {
    //     // $http = $http;
    //     // httpBackend = $httpBackend;
    //     // }));
    
    
    //     // it('home service should be call the getAll method',function(){
           
           
    //     //     httpBackend.whenGET("http://localhost/Parttime/api/Calendar/GetAll").respond({eventForService});
    //     //     expect($scope.events).toEqual(eventForService);
    
    //     //     httpBackend.flush();
    
    
    //     // })
    
      
    
    
    // });

  


 // var returnData = [];
        // var expectedUrl = "http://localhost/Parttime/api/Calendar/GetAll";
        // $http.when('GET', expectedUrl).respond(200, returnData);
        // var returnedPromise = [];
        // returnedPromise = HomeService.getAll();
        // var result;
        // returnedPromise.then(function (response) {
        //     result = response.data;
        // });






    




























// describe('HomeService', function () {

//     var $httpBackend;
  

//     beforeEach(inject(function(_$httpBackend_) {
//     $httpBackend = _$httpBackend_;//Using this service to prepare call for testing
//     }));


//     it('home service should be call the getAll method',function(){
//         var returnData = [];
//         var expectedUrl = "http://localhost/Parttime/api/Calendar/GetAll";
//         $httpBackend.when('GET', expectedUrl).respond(200, returnData);
//         var returnedPromise = [];
//         returnedPromise = HomeService.getAll();
//         var result;
//         returnedPromise.then(function (response) {
//             result = response.data;
//         });
//         httpBackend.flush();
//         expect(result).toEqual(returnData);
//     })


// })

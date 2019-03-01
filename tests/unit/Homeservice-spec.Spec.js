import "angular";
import "angular-mocks";


describe('HomeService', function () {
    
    var $httpBackend,HomeService;

    beforeEach(() => {
        angular.mock.module('myApp')
    });

    var eventForService = [[{id: 85, title: "Melody", start: "2019-02-19 09:10:00", end: "2019-02-19 09:10:00", description: "e", color: "#415d85",allDay: false},{id: 86, title: "Asli", start: "2019-02-19 09:10:00", end: "2019-02-19 09:10:00", description: "e", color: "#415d85",allDay: false}]];
    beforeEach(inject(function($injector,_HomeService_) {
        $httpBackend = $injector.get('$httpBackend');
        HomeService=_HomeService_;

    }));
    
    it('Home Service getAll Method should be return all events list',function(){

        $httpBackend.expectGET('http://localhost/Parttime/api/Calendar/GetAll').respond(eventForService);
        var data = [];
        HomeService.getAll().then(function(list) {
            console.log('hellloo',list)
            list.forEach(event => {
                data.push(event);
            })
        
        });

        $httpBackend.flush();
        expect(data).toEqual(eventForService);
   
    });
});

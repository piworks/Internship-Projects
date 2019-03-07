
import "angular";
import "angular-mocks";

describe('Parttime component', function() {
  
    beforeEach(() => {
        angular.mock.module('myApp')
    });

    

    var $httpBackend,PartTimeService;
    var $compile;
    var $scope;
    var element;
    var parttimeList= [[{id: 1, firstname: "asli", lastname: "ural", email: "aasliuural@gmail.com", workfrom: "inoffice"}]];


    beforeEach(inject(function($injector,_PartTimeService_,_$compile_, _$rootScope_) {
        $httpBackend = $injector.get('$httpBackend');
        PartTimeService = _PartTimeService_;
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $httpBackend.whenGET('http://localhost/Parttime/api/Values/GetAll/').respond(function(){
            return parttimeList;
        });


    }));




    it('should output result to expected HTML format', function() {
       var html = '<part-time view-type="cardView"></part-time>';
       var element = $compile(html)($scope);
       $scope.$digest();
       expect(element.find('i').length).toBe(3);
    
    });

    it('should output result to expected HTML format', function() {
        var html = '<part-time view-type="listView"></part-time>';
        var element = $compile(html)($scope);
        $scope.$digest();
        expect(element.find('i').length).toBe(3);
     
     });

   
    it('PartTime Service getAll Method should be return all events list',function(){
    $httpBackend.expectGET('http://localhost/Parttime/api/Values/GetAll/').respond(parttimeList);
    var data = [];
    PartTimeService.getAll().then(function(list) {
            list.forEach(event => {
                data.push(event);
            })
        
        });
    $httpBackend.flush();
    expect(data).toEqual(parttimeList);
    });

  
 
  
    var expectedHtml = [
        '<div class="col-sm-4">',
              '<h3 class="ng-binding">Testing what is here</h3>',
        '</div>'
    ]
  


});



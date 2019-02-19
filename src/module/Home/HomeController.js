import PartCalendarController from "./PartCalendarController";

var HomeController = function ($scope,uiCalendarConfig,$compile,HomeService,$timeout,toastr) { 
    $scope.submit = true;
    window.s = $scope;
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.event = {};
    $scope.events = [];
    $scope.eventList = [];

    $scope.parttime = {};
    $scope.parttimeList = [];
    $scope.newPartTime = {};
    

    HomeService.getPart().then(
        function (parttimeList) {
            $scope.parttimeList = parttimeList;
        }
    );


    HomeService.getAll().then(
        function (events) {
            events.forEach(event => {
                var cal_event = {"id": event.EventID ,"title": event.Title ,"start": event.start , "end": event.end ,"description": event.Description, "allDay": event.IsFullDay }
                if(event.Work === "inoffice"){
                    cal_event.color = '#415d85';
                }
                if(event.Work === "remote"){
                    cal_event.color = '#f08585';
                }
                if(event.Work === "home"){
                    cal_event.color = '#9fccad';
                }
                $scope.events.push(cal_event);
            });
            $scope.updateView('myCalendar',$scope.events);
        }
        
    );
    $scope.add = function(){
    
        var newEvent  = {
            id: $scope.event.EventID,
            title: $scope.event.Title,
            start: $scope.event.start,
            end: $scope.event.start,
            description: $scope.event.Description,
            allDay: true,
             
            
        };

        
        

        HomeService.add(newEvent).then(
            function () {
               // $scope.events = [];
                $scope.events.push(newEvent);

            }
 
        );

        $scope.updateView('myCalendar',$scope.events);

        toastr.success("Created a new newEvent");
    };


    $scope.updateView = function(calendar,events) {
        uiCalendarConfig.calendars[calendar].fullCalendar('addEventSource', events);
        uiCalendarConfig.calendars[calendar].fullCalendar('refetchEvents');
    };

   

    /* Change View */
    $scope.changeView = function(view,calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
      };
      $scope.renderCalender = function(calendar) {
        if(uiCalendarConfig.calendars[calendar]){
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
      };
       /* Render Tooltip */
      $scope.eventRender = function( event, element, view ) { 
          $compile(element)($scope);

          
          
      };
      /* config object */
      $scope.uiConfig = {
          calendar:{
            height: 'auto',
            header:{
              center: 'title',
              right: 'prev next,today'
            },
            selectable : true,
            selectHelpher : true,
            editable: true,
            eventClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender
            
          }
      };

      



  $timeout(function() {
    uiCalendarConfig.calendars.myCalendar.fullCalendar('gotoDate', $scope.events[0].start);
    });



   
}

HomeController.$inject = ["$scope","uiCalendarConfig","$compile","HomeService","$timeout","toastr"];
export default HomeController;



var PartCalendarController = function ($scope,uiCalendarConfig,$compile,$timeout,HomeService,toastr) { 
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

    $scope.eventsFiltered = [];

    HomeService.getPart().then(
        function (parttimeList) {
            $scope.parttimeList = parttimeList;
        }
    );

    $scope.run = function (parttime) {
       
        $scope.parttime = parttime;
        $scope.eventsFiltered = $scope.events.filter((e) => e.ParttimeId == $scope.parttime.id);
        $scope.updateView('myCalendar',$scope.eventsFiltered);
        
        
    }

    $scope.showEvent = function (event) {
       
        $scope.event = event;
        $scope.eventsFiltered = $scope.events.filter((e) => e.id == $scope.event.id);
        
        $scope.updateView('myCalendar',$scope.eventsFiltered);
        
        
    }

    $scope.addList = function (event) { 


        $scope.eventList.push(angular.copy(event));
        $scope.event = {};
        return  $scope.eventList;
    }



   
    HomeService.getAll().then(
        function (events) {
            events.forEach(event => {
                var cal_event = {"id": event.EventID ,"title": event.Title ,"start": event.start , "end": event.end ,"description": event.Description, "allDay": event.IsFullDay ,"ParttimeId": event.ParttimeId}
             
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

            
        }
    );

    $scope.add = function(parttime){


        $scope.eventList.forEach(event =>{
            var newEvent  = {
                title: parttime.firstname,
                work: event.Work,
                start: event.StartAt,
                end: event.StartAt,
                description: event.Description,
                allDay: true,
                ParttimeId: parttime.id
                 
                
            };
    
            if(newEvent.work === "inoffice"){
                newEvent.color = '#415d85';
            }
            if(newEvent.work === "remote"){
                newEvent.color = '#f08585';
            }
            if(newEvent.work === "home"){
                newEvent.color = '#9fccad';
            }
          
    
            HomeService.add(newEvent).then(
                function () {
                    $scope.events.push(newEvent);
                    
                    $scope.eventList=[];

            

                    $scope.eventsFiltered = $scope.events.filter((e) => e.ParttimeId == $scope.parttime.id);
                    $scope.updateView('myCalendar',$scope.eventsFiltered);

                    toastr.success("Created a new newEvent");

                    locaiton.reload();
    
                }
     
            );

        })

    };

    $scope.cancel = function(event){

       
        $scope.eventList.splice($scope.events.indexOf(event),1);
    };

    $scope.delete = function(event){
       
      
        HomeService.delete(event).then(
            function () {

                $scope.events.splice($scope.events.indexOf(event),1);
                $scope.eventsFiltered = $scope.events.filter((e) => e.ParttimeId == $scope.parttime.id);
                $scope.updateView('myCalendar',$scope.eventsFiltered);
                toastr.error("event is deleted");
        
            }
            
        );

        locaiton.reload();

       
    }

    $scope.findEvent = function (parttime) {

        $scope.eventList = [];
        $scope.parttime = parttime;
        $scope.eventList = $scope.events.filter((e) => e.ParttimeId == $scope.parttime.id);

        return($scope.eventList);
    }

   



    $scope.updateView = function(calendar,events) {
        uiCalendarConfig.calendars[calendar].fullCalendar('removeEvents');
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
            //defaultView: 'basicWeek',
            selectable : true,
            selectHelpher : true,
            editable: true,
            droppable: true,
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                  // if so, remove the element from the "Draggable Events" list
                  $(this).remove();
                }
              }, 
            eventClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender,
            
            
          }
      };

      $scope.confirmationDialogConfig = {};

      $scope.confirmationDialog = function(event) {
          $scope.event=event;
        $scope.confirmationDialogConfig = {
          title: "Delete Screen",
          message: "Are you sure you want to delete?",
          buttons: [{
            label: "Delete",
            action: "delete"
          }]
        };
        $scope.showDialog(true);
      };

      $scope.showDialog = function(flag) {
        jQuery("#confirmation-dialog .modal").modal(flag ? 'show' : 'hide');
      };

      




   
}

PartCalendarController.$inject = ["$scope","uiCalendarConfig","$compile","$timeout","HomeService","toastr"];
export default PartCalendarController;


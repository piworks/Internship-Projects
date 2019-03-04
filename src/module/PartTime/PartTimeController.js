
var PartTimeController = function($scope,PartTimeService,toastr) {

    window.pts = $scope;
    $scope.submit = true;

    $scope.parttime = {};
    $scope.parttimeList = [];
    $scope.newPartTime = {};
    

    PartTimeService.getAll().then(
        function (parttimeList) {
            $scope.parttimeList = parttimeList;
        }
    );




    $scope.delete = function(parttime){
        toastr.error("Parttime is deleted");
        PartTimeService.delete(parttime).then(
            function (parttimeList) {
                $scope.parttimeList = parttimeList;
            }
            
        );

    }

    $scope.update = function(parttime){
       

        PartTimeService.update(parttime).then(
            function (parttimeList) {
                $scope.parttimeList = parttimeList;
            }
        );

        toastr.success("Updated a new parttime");
    }

    $scope.add = function(){
    
        var newPartTime  = {
            id: $scope.parttime.id,
            firstname: $scope.parttime.firstname,
            lastname: $scope.parttime.lastname,
            email: $scope.parttime.email,
            workfrom: $scope.parttime.workfrom
            
        };
        

        PartTimeService.add(newPartTime).then(
            function () {
                $scope.parttimeList = [];
                $scope.parttimeList.push(newPartTime);
                toastr.success("Created a new parttime");
            }
 
        )


    }

    $scope.editParttime = function(parttime){
        console.log(parttime.id);   
    }

    $scope.confirmationDialogConfig = {};

    $scope.confirmationDialog = function(parttime) {
        $scope.parttime=parttime;
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

    
};

PartTimeController.$inject = ["$scope", "PartTimeService","toastr"];

export default PartTimeController;

 
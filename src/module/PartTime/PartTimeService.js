
const PartTimeService = function ($http) {
            return {
                getAll : function () {
                    return $http.get('http://localhost/Parttime/api/Values/GetAll/').then(
                        function (successResponse) {
                        return successResponse.data;
                    },
                    function (errorResponse) {
                        
                    });
                },
                delete : function(parttime){
                    return $http.get('http://localhost/Parttime/api/Values/Delete/'+parttime.id).then(
                        function (successResponse) {
                        return successResponse.data;
                    },
                    function (errorResponse) {
                        
                    });
                },
                update : function(parttime){
                    return $http.post('http://localhost/Parttime/api/Values/Update/',parttime).then(
                        function (successResponse) {
                        return successResponse.data;
                    },
                    function (errorResponse) {
                        
                    });
                },
                add : function(parttime){
                    return $http.post('http://localhost/Parttime/api/Values/Add/',parttime).then(
                        function (successResponse) {
                        return successResponse.data;
                    },
                    function (errorResponse) {
                        
                    });
                }
            } 
};

export default PartTimeService;
    
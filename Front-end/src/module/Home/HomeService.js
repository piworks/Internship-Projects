const HomeService = function ($http) {
    return{
        getAll : function () {
            return $http.get('http://localhost/Parttime/api/Calendar/GetAll').then(
                function (successResponse) {
                return successResponse.data;
            },
            function (errorResponse) {
                
            });
        },
        add : function(event){
            return $http.post('http://localhost/Parttime/api/Calendar/Add/',event).then(
                function (successResponse) {
                return successResponse.data;
            },
            function (errorResponse) {
                
            });
        },
        getPart : function () {
            return $http.get('http://localhost/Parttime/api/Values/GetAll/').then(
                function (successResponse) {
                return successResponse.data;
            },
            function (errorResponse) {
                
            });
        },
        delete : function(event){
            return $http.get('http://localhost/Parttime/api/Calendar/Delete/'+event.id).then(
                function (successResponse) {
                return successResponse.data;
            },
            function (errorResponse) {
                
            });
        },

    }
};
export default HomeService;
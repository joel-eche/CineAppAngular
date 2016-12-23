
angular.module("misPelisSeriesApp").service("apiService",["$http",function($http){
	this.consultaApi=function(servicio){
		return $http.get("https://api.themoviedb.org/3/"+servicio+"?api_key=826b523c417cbb888744b13031d846c2&language=es")
	};
}]);

angular.module("misPelisSeriesApp")
.controller("peliculasCarteleraController", ["$scope","apiService",function($scope,apiService){
	
	apiService
	.consultaApi("movie/now_playing")
	.then(
		function(resultado){
			$scope.peliculas=resultado.data.results;
		},
		function(){
			alert("error")
		}
	);

}]);
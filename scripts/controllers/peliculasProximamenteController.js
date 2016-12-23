angular.module("misPelisSeriesApp")
.controller("peliculasProximamenteController", ["$scope","apiService",function($scope,apiService){
	
	apiService
	.consultaApi("movie/upcoming")
	.then(
		function(resultado){
			$scope.peliculas=resultado.data.results;
		},
		function(){
			alert("error")
		}
	);

}]);
angular.module("misPelisSeriesApp")
.controller("peliculasProximamenteController", ["$scope","apiService","$filter",function($scope,apiService,$filter){
	
	apiService
	.consultaApi("movie/upcoming")
	.then(
		function(resultado){
			$scope.peliculas=$filter("orderBy")(resultado.data.results,'release_date');

		},
		function(){
			alert("error")
		}
	);

}]);
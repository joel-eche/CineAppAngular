//Controlador para la vista de próximas películas
angular.module("misPelisSeriesApp")
.controller("peliculasProximamenteController", ["$scope","$filter","Peliculas",function($scope,$filter,Peliculas){
	
	$scope.peliculas=$filter("orderBy")(Peliculas.data.results,'release_date');

	/*
	apiService
	.consultaApi("movie/upcoming")
	.then(
		function(resultado){
			$scope.peliculas=$filter("orderBy")(resultado.data.results,'release_date');

		},
		function(){
			alert("error");
		}
	);
	*/
}]);
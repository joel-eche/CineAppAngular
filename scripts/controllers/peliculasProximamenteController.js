//Controlador para la vista de próximas películas
angular.module("misPelisSeriesApp")
.controller("peliculasProximamenteController", 
	["$scope","$filter","Peliculas","$location",function($scope,$filter,Peliculas,$location){
	
	$scope.peliculas=$filter("orderBy")(Peliculas.data.results,'release_date');
	
	$scope.verDetalle=function(id){
		$location.path("/peliculas/detalles").search({
			//?param1=3&param2=9....
			idPelicula:id
		});
	}
}]);
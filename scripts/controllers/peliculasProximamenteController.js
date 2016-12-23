//Controlador para la vista de próximas películas
angular.module("misPelisSeriesApp")
.controller("peliculasProximamenteController", 
	["$scope","$filter","apiService","Peliculas","$location",function($scope,$filter,apiService,Peliculas,$location){
	
	$scope.peliculas=$filter("orderBy")(Peliculas.data.results,'release_date');
	
	$scope.rutaImagen=function(ruta){
		return ruta==null?null:apiService.obtenerRutaImagen(45,ruta);
	};

	$scope.verDetalle=function(id){
		$location.path("/peliculas/detalles").search({
			//?param1=3&param2=9....
			idPelicula:id
		});
	}
}]);
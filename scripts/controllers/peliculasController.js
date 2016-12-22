angular.module("misPelisSeriesApp").controller("peliculasController", ["$scope","$routeSegment", function($scope,$routeSegment){
	$scope.rutaEsProximamente=function(){
		return $routeSegment.startsWith("peliculas.proximamente");
	};
	$scope.rutaEsCartelera=function(){
		return $routeSegment.startsWith("peliculas.cartelera");
	};
}]);

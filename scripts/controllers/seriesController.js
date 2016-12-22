angular.module("misPelisSeriesApp").controller("seriesController", ["$scope","$routeSegment", function($scope,$routeSegment){
	$scope.rutaEsHoy=function(){
		return $routeSegment.startsWith("series.hoy");
	};
	$scope.rutaEsEmision=function(){
		return $routeSegment.startsWith("series.emision");
	};
}]);
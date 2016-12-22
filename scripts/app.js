angular.module("misPelisSeriesApp",["ngRoute","route-segment","view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider",function($routeSegmentProvider) {
	
	$routeSegmentProvider.when("/peliculas","peliculas");
	$routeSegmentProvider.when("/peliculas/proximamente","peliculas.proximamente");
	$routeSegmentProvider.when("/peliculas/cartelera","peliculas.cartelera");
	$routeSegmentProvider.when("/series","series");
	$routeSegmentProvider.when("/series/hoy","series.hoy");
	$routeSegmentProvider.when("/series/emision","series.emision");

	$routeSegmentProvider.segment("peliculas",{
		controller:"peliculasController",
		templateUrl:"views/peliculas.html"
	});
	$routeSegmentProvider.within("peliculas").segment('proximamente',{
		controller:"peliculasProximamenteController",
		templateUrl:"views/peliculasProximamente.html"
	});
	$routeSegmentProvider.within("peliculas").segment('cartelera',{
		controller:"peliculasCarteleraController",
		templateUrl:"views/peliculasCartelera.html"
	});

	$routeSegmentProvider.segment("series",{
		controller:"seriesController",
		templateUrl:"views/series.html"
	});
	$routeSegmentProvider.within("series").segment('hoy',{
		controller:"seriesHoyController",
		templateUrl:"views/seriesHoy.html"
	});
	$routeSegmentProvider.within("series").segment('emision',{
		controller:"seriesEmisionController",
		templateUrl:"views/seriesEmision.html"
	});

}]);

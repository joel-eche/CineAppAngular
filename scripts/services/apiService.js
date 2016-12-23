//Servicio que establece las utilidades relacionadas con la API de The Novie Database
angular.module("misPelisSeriesApp").service("apiService",["$http","configuracion",function($http,configuracion){

	//Realiza peticiones a la API
	this.consultaApi=function(servicio){

		//Con el servicio $http hacemos peticiones de recursos
		var url="https://api.themoviedb.org/"+configuracion.apiVersion;
		url+= "/"+servicio+"?api_key="+configuracion.apiKey+"&language=es";

		return $http.get(url)
	};
}]);

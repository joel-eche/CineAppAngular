angular.module("misPelisSeriesApp")
.directive("generos",["$compile",function($compile){
	return{
		restrict:"AE",
		scope:{
			coleccion:"="
		},
		link:function(scope,elemento){
			var vista="<div class=\"caja-generos\">";
			for(f=0;f<scope.coleccion.length;f++){
				vista+="<span class=\"label label-info\">"+scope.coleccion[f].name+"</span>";
			}
			vista+="</div>";

			var nuevoElemento=angular.element(vista);
			var nuevoElementoCompilado=$compile(nuevoElemento)(scope);

			elemento.replaceWith(nuevoElementoCompilado);
		}
	};
}]);
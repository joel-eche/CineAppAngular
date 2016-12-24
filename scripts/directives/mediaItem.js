angular.module("misPelisSeriesApp")
.directive("mediaItem",["apiService",function(apiService){
    return {
        restrict:"AE",
        replace:true,
        templateUrl:"views/mediaItem.html",
        scope:{
            datos:"=" ,  //Todos los datos de la película
            alSeleccionar:"&"
        },
        link:function(scope){
            scope.rutaImagen=function(ruta){
                return ruta==null?null:apiService.obtenerRutaImagen(45,ruta);
            };
            
            scope.clickEnMedia=function(id){
                scope.alSeleccionar({
                    mediaId:id
                });
            }
        }
    };
}]);
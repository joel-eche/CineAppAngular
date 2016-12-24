angular.module("misPelisSeriesApp")
.directive("votacion",[function(){
    return {
        restrict:"AE",
        replace:true,
        scope:{
            media:"@",
        },
        link:function(scope){
            var mediaComoNumero=parseFloat(scope.media);
        }
    };
}]);
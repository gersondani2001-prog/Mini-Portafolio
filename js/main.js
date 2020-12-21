// codigo fuente de javascript cconponentes logiccos

// Cod. Javascript
console.log("Cod. Javascript");
// escribir codigo de javascript abajo

// Cod. Jquery
$(document).ready(function(){
    console.log("Cod. Jquery");
    // escribir codigo de jquery abajo
});

// Cod. AngularJS
var app = angular.module("app",[]);
app.controller("myCtrl", function($scope) {
    $scope.CodAngularJs = "Cod. AngularJs";
    console.log($scope.CodAngularJs);
    // escribir codigo de angular js abajo
});
/**
 * Cytonn Technologies
 * @author Ndirangu Wilson <wndirangu@cytonn.com>
 *
 */

 var app=angular.module('YahooCurrencies', []);

 app.controller('retrieveCurrenciesController', ['$scope','$http', function($scope,$http) {
   $scope.items = [];

   $scope.getItems = function() {
    $http({method: 'GET',url: 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=jsonp'})
       .success(function(data, status) {
           $scope.items = data;
        })
       .error(function(data, status) {
           alert("Error");
       });
   };
}]);

/**
 * Cytonn Technologies
 * @author Ndirangu Wilson <wndirangu@cytonn.com>
 *
 */

var app = angular.module('NetflixMovies', []);

app.controller('retrieveMovieController', ['$scope', '$http', function($scope, $http) {
  $scope.items = [];
  var self = this;

  var Moviename = String(self.moviename);

  $scope.getItems = function() {
    var split_string = self.moviename.split(" ");
    length = split_string.length;
    var api = "http://netflixroulette.net/api/api.php?title=" + split_string[0];
    for (i = 1; i < length; i++) {
      api += "%20" + split_string[i];
    }
    $http({
        method: 'GET',
        url: api
      })
      .success(function(data, status) {
        $scope.items = data;

        console.log(split_string[0]);


      })
      .error(function(data, status) {
        alert(" Sorry We couldn't find a movie with that title!");
      });
  };
}]);

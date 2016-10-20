'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movieInfo = [
      {
        title: 'movie1',
        url: 'www.movies.com'
      },
      {
        title: 'movie2',
        url: 'www.newmovies.com'
      }
    ];
  });

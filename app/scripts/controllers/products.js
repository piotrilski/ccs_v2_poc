'use strict';

/**
 * @ngdoc function
 * @name ccsV2App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the ccsV2App
 */
angular.module('ccsV2App')
	.controller('ProductsCtrl', ['$scope',
		function($scope){
			$scope.datasource = ['anna', 'maria'];
		}]);

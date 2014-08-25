'use strict';

/**
 * @ngdoc function
 * @name ccsV2App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the ccsV2App
 */
angular.module('ccsV2App')
	.controller('ProductsCtrl', [
		'$scope',
		'$http',
		'$log',
		function ($scope, $http, $log) {

			var loadData = function(callback) {
				$http.get('/res/data.json')
					.then(function(data){
						if(data && data.data) {
							callback(data.data.data, null);
						} else {
							callback(null, { exception: 'NO DATA'});
						}
					});
			};

			$scope.products = [];
			$scope.gridOptions = {
				data:'products'
			};

			loadData(function(data, error) {

				if(data) {					
					$log.debug(data.length);
					$scope.products = angular.fromJson(data);

					$log.debug($scope.products.length);
				} else {
					$scope.error = error;
				}
			});
		}
	]);

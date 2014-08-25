'use strict';

/**
 * @ngdoc function
 * @name ccsV2App.controller:ProductsgridCtrl
 * @description
 * # ProductsgridCtrl
 * Controller of the ccsV2App
 */

angular.module('ccsV2App')
	.controller('ProductsgridCtrl', [
		'$scope',
		'$http',
		'productService',
		function ($scope, $http, productService) {

			var loadData = function() {				
				productService.getAll().then(function(prods) {					
					$scope.products = prods;
				});
			};

			var init = function() {
				$scope.products = [];
				$scope.gridOptions = {
					data:'products',
					enablePinning: true
				};
			};

			init();
			loadData();
		}
	]);

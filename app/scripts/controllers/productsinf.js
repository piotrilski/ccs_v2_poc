'use strict';

/**
 * @ngdoc function
 * @name ccsV2App.controller:ProductsinfCtrl
 * @description
 * # ProductsinfCtrl
 * Controller of the ccsV2App
 */

angular.module('ccsV2App')
	.controller('ProductsinfCtrl', ['$scope', '$http', 'productService', function ($scope, $http, productService) {
		var loadData = function() {
			productService.getAll().then(function(prods){
				$scope.products = prods;
			});
		};

		var init = function() {
			$scope.products = [];
		};
		
		init();
		loadData();
	}]);

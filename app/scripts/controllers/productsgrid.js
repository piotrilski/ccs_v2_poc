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
					showGroupPanel: true,    			
					columnDefs: [
						{field:'0', displayName:'name'},
						{field:'1', displayName:'second name'},
						{field:'2', displayName:'adress'},
						{field:'3', displayName:'country'}
					]
				};
			};

			init();
			loadData();
		}
	]);

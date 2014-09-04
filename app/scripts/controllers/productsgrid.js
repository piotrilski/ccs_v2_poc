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

			$scope.totalServerItems = 0;
			$scope.pagingOptions = {
				pageSizes: [20,100,1000],
				pageSize: 20,
				currentPage: 1
			};

			$scope.setPagingData = function(data, page, pageSize){	
				var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
				$scope.myData = pagedData;
				$scope.totalServerItems = data.length;
				if (!$scope.$$phase) {
					$scope.$apply();
				}
			};
			$scope.getPagedDataAsync = function (pageSize, page, searchText) {
				setTimeout(function () {
					var data;
					if (searchText) {
						var ft = searchText.toLowerCase();

						productService.getAll().then(function (largeLoad) {		
							data = largeLoad.filter(function(item) {
								return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
							});
							$scope.setPagingData(data,page,pageSize);
						});            
					} else {
						productService.getAll().then(function(largeLoad) {
							$scope.setPagingData(largeLoad,page,pageSize);
						});
					}
				}, 100);
			};

			$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
	
			$scope.$watch('pagingOptions', function (newVal, oldVal) {
				if (newVal !== oldVal && 
					(newVal.currentPage !== oldVal.currentPage ||
					newVal.pageSize !== oldVal.pageSize)) {
					$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterText);
				}
			}, true);
			$scope.$watch('filterText', function (newVal, oldVal) {
				if (newVal !== oldVal) {
					$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterText);
				}
			}, true);
			
			var init = function() {
				$scope.filterText = '';
				$scope.products = [];
				$scope.selectedRow = [];
				$scope.gridOptions = {
					data:'myData',
					showGroupPanel: true,
					enablePaging: true,
					enableSorting:true,
					showFooter: true,
					multiSelect: false,
					showFilter:false,
					plugins: [new ngGridFlexibleHeightPlugin()],
					selectedItems: $scope.selectedRow,
					columnDefs: [						
						{field:'0', displayName:'name'},
						{field:'1', displayName:'second name'},
						{field:'2', displayName:'adress'},
						{field:'3', displayName:'country'}
					],
					totalServerItems:'totalServerItems',
					pagingOptions: $scope.pagingOptions					
				};


			};

			init();
			loadData();
		}
	]);

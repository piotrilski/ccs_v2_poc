'use strict';

/**
 * @ngdoc service
 * @name ccsV2App.product
 * @description
 * # product
 * Factory in the ccsV2App.
 */
angular.module('ccsV2App.services', [])
	.factory('productService', ['$http', '$q',
		function ($http, $q) {		
			var loadData = function() {
				var deferred = $q.defer();

				$http.get('/res/data.json')
					.then(function(data){						
						if(data && data.data) {							
							deferred.resolve(data.data.data);
						} else {
							deferred.reject('no data!');
						}
					});

				return deferred.promise;
			};
			
			return {
				get: function(index, count, success) {
					var from = index >0 ? index-1 : 0;
					var to = count + index >=0 ? count+index : index;
					
					loadData().then(function(data) {
						success(data.slice(from, to));
					});
				},
				getAll: loadData,				
			};
	}]);

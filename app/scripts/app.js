'use strict';

/**
 * @ngdoc overview
 * @name ccsV2App
 * @description
 * # ccsV2App
 *
 * Main module of the application.
 */
angular
	.module('ccsV2App', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngGrid',
		'ui.router',
		'ui.scroll',
		'ccsV2App.services'
	])
	.config([
		'$stateProvider', 
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
		
			$urlRouterProvider.otherwise('index');

			$stateProvider
				.state('index', {
					url: '/',
					views: {
						'mainView' : { templateUrl: 'views/productsgrid.html', controller: 'ProductsgridCtrl'},
						'leftView' : {templateUrl: 'views/leftmenu.html', controller: 'LeftmenuCtrl'}
					}
				})
				.state('about', {
					url: '/about',
					views: {
						'mainView' : { templateUrl: 'views/about.html', controller: 'AboutCtrl'}
					}
				})
				.state('contact', {
					url: '/contact',
					views: {
						'mainView' : { templateUrl: 'views/contact.html'}
					}
				})
				.state('products', {
					url: '/products',
					views: {
						'mainView' : {templateUrl: 'views/products.html', controller: 'ProductsCtrl'},
						'leftView' : {templateUrl: 'views/leftmenu.html', controller: 'LeftmenuCtrl'}
					}
				})
				.state('products.grid', {
					url: '/grid',
					templateUrl: 'views/productsgrid.html', 
					controller: 'ProductsgridCtrl'
				})
				.state('products.inf', {
					url: '/inf',
					templateUrl: 'views/productsinf.html', 
					controller: 'ProductsinfCtrl'
				});
		}
	]);

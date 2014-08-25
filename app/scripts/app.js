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
		'ui.router'
	])
	.config(function ($stateProvider) {
		$stateProvider
			.state('index', {
				url: '/',
				views: {
					'mainView' : { templateUrl: 'views/main.html', controller: 'MainCtrl'}
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
					'mainView' : {templateUrl: 'views/products.html', controller: 'ProductsCtrl'}
				}
			});
	});

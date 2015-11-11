(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial','ui.bootstrap'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateProject',{
			url: '/createproject',
			templateUrl: 'views/createproject.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();

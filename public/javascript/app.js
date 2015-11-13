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
		}).state('CreatePost',{
			url: '/createpost',
			templateUrl: 'views/createpost.html'
		}).state('Post',{
			url: '/post/:id',
			templateUrl: 'views/post.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();

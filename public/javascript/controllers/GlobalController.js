(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);


	function GlobalController() {
		var vm = this;
		vm.title = 'Welcome to our App!';
	}
})();

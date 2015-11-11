(function() {
	'use strict';
	angular.module('app')
	.controller('ProjectController', ProjectController);


	function ProjectController(HomeFactory) {
		var vm = this;
    vm.nproject = {};

vm.createProject = function(){
	console.log("in createProject function in controller");
  HomeFactory.createProject(vm.nproject).then(function(res){
    vm.nproject = {};
  })
}
	}
})();

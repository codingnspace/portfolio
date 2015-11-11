(function() {
	'use strict';
	angular.module('app')
	.controller('ProjectController', ProjectController);


	function ProjectController(HomeFactory, $state) {
		var vm = this;
    vm.nproject = {};
		vm.projects = {};


HomeFactory.getProjects().then(function(res){
	vm.projects = res;
});

vm.createProject = function(){
	console.log("in createProject function in controller");
  HomeFactory.createProject(vm.nproject).then(function(res){
    vm.nproject = {};
		$state.go('Home');
  })
}
	}
})();

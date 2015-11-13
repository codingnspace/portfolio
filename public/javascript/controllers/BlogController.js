(function() {
	'use strict';
	angular.module('app')
	.controller('BlogController', BlogController);


	function BlogController(HomeFactory, $state, $stateParams) {
		var vm = this;
    vm.posts = {};
    vm.npost = {};
    vm.npost.tags = [];
		vm.post = {};

if ($stateParams.id != undefined){
	HomeFactory.getPost($stateParams.id).then(function(res){
		vm.post = res;
	})
}

HomeFactory.getPosts().then(function(res){
	vm.posts = res;
});

vm.createPost = function(){
	HomeFactory.createPost(vm.npost).then(function(){
		$state.go('Home');
	})
}
	}
})();

(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);


	function HomeFactory($http, $q) {
		var o = {};

o.createProject = function(newProject){
	var q = $q.defer();
	// console.log("create project in factory");
	$http.post('/api/project/create', newProject)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}

o.getPosts = function(){
	var q = $q.defer();
	$http.get('/api/blog/post')
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}

o.getPost = function(id){
	var q = $q.defer();
	$http.get('/api/blog/post/' +id)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}

o.createPost = function(post){
	var q = $q.defer();
	$http.post('/api/blog/create', post)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}

o.getProjects = function(){
	var q = $q.defer();
	$http.get('/api/project/get')
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}


		return o;
	}
})();

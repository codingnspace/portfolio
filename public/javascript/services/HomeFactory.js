(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);


	function HomeFactory($http, $q) {
		var o = {};

o.createProject = function(newProject){
	var q = $q.defer();
	console.log("create project in factory");
	$http.post('/api/project/create', newProject)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
}


		return o;
	}
})();

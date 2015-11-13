var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Blog = mongoose.model('Blog');
var Project = mongoose.model('Project');
var passport = require('passport');
var jwt = require('express-jwt');
var auth = jwt({
	userProperty: 'payload',
	secret: 'PearlIsAnAwesomeDeveloper'
});

router.post('/project/create', function(req,res,next){
// console.log(req.body , " req.body");
	var project = new Project(req.body);
  project.save(function(err,result){
    if (err) return next(err);
    res.send();
  });
});

router.get('/project/get', function(req,res,next){
	Project.find({}, function(err,result){
		if(err) return next(err);
		res.send(result);
	});
});

router.post('/blog/create', function(req,res,next){
	var blog = new Blog(req.body);
	blog.save(function(err,result){
		if(err) return next (err);
		res.send(result);
	})
})

router.get('/blog/post', function(req,res,next){
	Blog.find({}, function(err,result){
		if(err) return next (err);
		res.send(result);
	});
});


router.get('/blog/post/:id', function(req,res,next){
	Blog.findOne({_id: req.params.id}, function(err,result){
		if (err) return next(err);
		res.send(result);
	})
})
module.exports = router;

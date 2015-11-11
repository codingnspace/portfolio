var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var ProjectSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: Array,
  author: String,
  pic: String,
  tech:{
    front: Array,
    back: Array,
  },
  github: String,
  demo: String,
});

mongoose.model('Project', ProjectSchema);

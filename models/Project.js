var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  title: String,
  body: String,
  highlights: Array,
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

var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: Array,
  author: String,
  pic: String,
  tags: Array,
});

mongoose.model('Blog', BlogSchema);

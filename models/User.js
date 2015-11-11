var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  fullName: String,
  email: { unique: true, type:String, lowercase: true, trim: true},
  isValidated: Boolean, // Checks if the user has been validated via email
  rand: Number,
  pic: String,
  passwordHash: String,
  salt: String,
});

UserSchema.methods.setPassword = function(password) {
 this.salt = crypto.randomBytes(16).toString('hex');
    this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.checkPassword = function(password) {
 var passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
 return (passwordHash === this.passwordHash);
};

UserSchema.methods.generateJWT = function() {
 return jwt.sign({
   _id: this._id,
   fullName: this.lastName,
   email: this.email,
   pic: this.pic

 },  "PearlIsAnAwesomeDeveloper");
};




mongoose.model('User', UserSchema);

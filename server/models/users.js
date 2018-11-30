const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
    name:  {type: String, required: true},
    email: {type: String, required: true},
    info:  {type: String},
    password: {type: String, required: true},
    rate: {tyep: Number, 'default': 0},
    createdOn: {type: Date, 'default': Date.now}
});

//check new user
userSchema.statics.checkUserExists = function(req,res,callback) {
    User.findOne({email:req.body.signemail}||{username:req.body.signusername})
    .exec(function(error,user){
        if (!user){
            if (req.body.signpassword !== req.body.signpasswordconfirm){
                var error = new Error("Password in two fields should be the same.");
                callback(error);
            } else {
                callback(null,user);
            }
        } else {
            var error = new Error("User or email already exists");
            callback(error);
    }
})
}

// build user model
const Users = mongoose.model('User', userSchema);
module.exports = Users;
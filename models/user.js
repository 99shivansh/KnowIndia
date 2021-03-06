const mongoose=require('mongoose');
const bcrypt =require('bcryptjs');
const config=require('../config/database');

const UserSchema=mongoose.Schema({
name:{
    type:String
},
email:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
});

const User=module.exports=mongoose.model('user',UserSchema);
module.exports.getuserbyid=function(id,callback){
user.findById(id,callback);
};
module.exports.getuserbyusername=function(username,callback){
const query={username:username}
  User.findOne(query,callback);
};
module.exports.adduser=function(newUser,callback){
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newUser.password,salt,(err,hash)=>{
             if(err) throw err;
             newUser.password=hash;
             newUser.save(callback);
    });
});
}
module.exports.comparepassword=function(candidatepassword,hash,callback){
bcrypt.compare(candidatepassword,hash,(err,isMatch)=>
{
    if(err) throw err;
    callback(null,isMatch);

});
}

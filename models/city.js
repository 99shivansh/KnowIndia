const mongoose=require('mongoose');
const config=require('../config/database');


const cityschema=mongoose.Schema({
    cityid: {type:String},//not required only used in update query
    cityname:{type:String,required:true},
    citydesc:{type:String,required:true},
    citydesc2:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String},
    updated: { type: Date, default: Date.now }
});

const citydb=module.exports=mongoose.model('citydb',cityschema);

module.exports.getcitybyid=function(id,callback){
    citydb.findById(id,callback);
    };
module.exports.getcitybycityname=function(cityname,callback){
    const query={cityname:cityname}
      citydb.findOne(query,callback);
      };
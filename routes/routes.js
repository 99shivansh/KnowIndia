const express=require('express');
const router=express.Router();
const User=require('../models/user');
const city=require('../models/city');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
var server = require('http').createServer(express);
var io = require('socket.io')(server);
var multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set The Storage Engine
 
// const storage = multer.diskStorage({
//     destination: './angular-src/src/assets/images/uploads/',
//     // './public/uploads/'
//     filename: function(req, file, cb){
//         a=file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//       cb(null,a);
//       //console.log(a);
//     }
//   });
  
//   // Init Upload
//   const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
//     fileFilter: function(req, file, cb){
//       checkFileType(file, cb);
//     }
//   }).single('image');
  
//   // Check File Type
//   function checkFileType(file, cb){
//     // Allowed ext
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check ext
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check mime
//     const mimetype = filetypes.test(file.mimetype);
  
//     if(mimetype && extname){
//       return cb(null,true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }
var 
    aws = require('aws-sdk'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: '0mLYGp0WfjFZlym0oxUUjPVp9DSLdroDeYz4aIPo',
    accessKeyId: 'AKIAJCKW4PNN7SGJV5JA',
    region: 'us-east-2'
});

var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());
a=Date.now()+'.png';
var upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'knowindiacityimages',
        key: function (req, file, cb) {
            console.log(a);
           // console.log(file.originalname);
            cb(null, a); //use Date.now() for unique file keys
        }
    })
});
// socket io
io.on('connection', function (socket) {
    socket.on('updatedata', function (data) {
        io.emit('update-data', { data: data });
    });
});
router.post('/register',(req,res,next)=>
{
// res.send("user registered");
let newUser= new User({
    name:req.body.name,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
});

User.adduser(newUser,(err,user)=>
{
    if(err) {
        res.json({success:false,msg:'Failed to add user'});
    }
    else{
        res.json({success:true,msg:'suer registered'});
    }
});
});
router.post('/authenticate',(req,res,next)=>
{
    const username=req.body.username;
    const password=req.body.password;

    User.getuserbyusername(username,(err,user)=>
    {
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:'User not found'});
        }
        User.comparepassword(password,user.password,(err,isMatch)=>
        {
            if(err) throw err;
            if(isMatch)
            {
                const token=jwt.sign({data:user},config.secret,{
                 expiresIn:604800 //1week
                });
                res.json({
                    success:true,
                    token:'JWT '+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        username:user.username,
                        email:user.email
                    }
                });
            }
            else
            {
                return res.json({success:false,msg:'Wrong Password'});
            }
        });
    });


});
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user});
});
router.get('/validate',(req,res,next)=>{
    res.send("user validate");
});
// list data
router.get('/getallcitydata', function(req, res) {
    city.find(function (err, cityd) {
        if (err) return next(err);
        res.json(cityd);
    });
});
router.post('/newcitydata',(req,res,next)=>{
    body=req.body;
     name=body.cityname;
     id=body.cityid;
     city.getcitybycityname(name,(err,cityd)=>{if(cityd){res.json('cityname exists');} });
    // city.findById(id,(err,cityd)=>{if(cityd){res.json('id exists');} });
    city.create(body, function (err, cityd) {
        if (err) {
            console.log(err);
            return next(err);
        }
        //res.json(cityd);
    });
});
router.get('/getcitydata',(req,res,next)=>{
   
      city.findById(req.query.id, function (err, cityd) {
        if (err) return next(err);
        res.json(cityd);
    });
});

router.put('/updatecitydata',(req,res,next)=>{
    city.findByIdAndUpdate(req.body.cityid, req.body, function (err, cityd) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(cityd);
    });
});
// delete data by id
router.delete('/deletecitydata', function(req, res, next) {
    city.findByIdAndRemove(req.query.id, function (err, cityd) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(cityd);
    });
});
// router.post('/upload', (req, res, next) => {
//     upload(req, res, (err) => {
//       if(err){
//         // res.render('index', {
//         //   msg: err
//         // });
//         console.log('error ',err);
//       } 
//       else {
//         if(req.file == undefined){
//         //   res.render('index', {
//         //     msg: 'Error: No File Selected!'
//         //   });
//         res.send('Error:Nofileselected');
//         } 
//         else {
//         //   res.render('index', {
//         //     msg: 'File Uploaded!',
//         //     file: `uploads/${req.file.filename}`
//         //   });
//         res.json({msg:'working image uplaoded successfuly',filename:'/assets/images/uploads/'+a});
//         }
//       }
//     });
//   });
router.post('/upload', upload.single('image'), function (req, res, next) {
    //res.send("Uploaded!");var popup = require('popups');
    
    let alert = require('alert');  
    alert("Image Uploaded Successfully")
    res.json({msg:'working image uplaoded successfuly',filename:'https://knowindiacityimages.s3.us-east-2.amazonaws.com/'+a});
});
module.exports=router;
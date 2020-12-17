const express=require('express');
const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const path =require('path');
const cors=require('cors');
const app=express();
const route=require('./routes/routes');
const bodyParser=require('body-parser');
const passport=require('passport');
 const config=require('./config/database');
 

//connect to database
mongoose.connect(config.database, { useUnifiedTopology: true , useNewUrlParser: true });

//connection on
mongoose.connection.on('connected',()=>{
console.log('connected to database'+config.database);
});
//database error
mongoose.connection.on('error',(err)=>{
   console.log('error of database is'+err);
   });
   mongoose.set('useFindAndModify', false);
   //cors middleware
app.use(cors());

   app.use(express.static(path.join(__dirname,'public')));

//body parser Middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.use('/user',route);
app.get('/',(req,res)=>
{
    res.send("Invalid endpoin route not dfiend 1st route");

}
);


app.listen(5000,()=>{console.log("server started");})

var express = require('express');
var bodyparser = require('body-parser');
const mongoose  = require('mongoose');
mongoose.set("strictQuery", false);
const routes = require('./Routes/route.js');
const app = express();


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/',routes);

mongoose.connect('mongodb://127.0.0.1:27017/edurekavideostream',{useNewUrlParser:true,useUnifiedTopology:true})
.then(client =>{
    app.listen(7000,'localhost',()=>{
        console.log(`server running on http://localhost:${7000}`);
    });
}).catch(err =>{
    console.log(err);
});
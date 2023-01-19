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
// app.get("/shows", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// }); 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/',routes);


mongoose.connect('mongodb://127.0.0.1:27017/edurekavideostream',{useNewUrlParser:true,useUnifiedTopology:true})
.then(client =>{
    app.listen(7000,'localhost',()=>{
        console.log(`server running on http://localhost:${7000}`);
    });
    var conn = mongoose.connection;
    conn.on('connected', function() {
        console.log('database is connected successfully');
    });
    conn.on('disconnected',function(){
        console.log('database is disconnected successfully');
    })
    conn.on('error', console.error.bind(console, 'connection error:'));
    module.exports = conn;
}).catch(err =>{
    console.log(err);
});
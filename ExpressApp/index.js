/**
 * Created by abhishekrathore on 6/28/16.
 */
var express = require("express");

var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

//middlewares
app.use(express.static("public"));
app.use(logger('combined'));
app.use(bodyParser. urlencoded({ extended: false }));
app.use(bodyParser.json());



//custom middleware

app.use(function(req,res,done){

    console.log("log", req.url);


    done();

})



//Routes

app.get("/",function(req,res){
    res.send("Hello World");
})


app.get("/another",function(req,res){
    res.send("another World");
})

app.post("/submit",function(req,res){

    res.send(req.body.firstName);
});


app.listen(8888,function(){
    console.log("server stared at 8888");
});
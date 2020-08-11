/* var http = require('http'); */
var fs = require('fs');



var  express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/app_server/views'));

var routeElektronik = require('./app_server/routes/elektronikRoute');

app.use('/public',  express.static(path.join(__dirname, 'public')))

app.use(function(req,res,next){
    console.log("url...:" + req.url)
    console.log("time..:" + Date.now());
    next();
});

app.use('/elektronik',routeElektronik)

/*app.get('/elektronik', ctrlElektronik.index);
app.get('/elektronik/bilgisayar', ctrlElektronik.bilgisayar); */

/*
var yonlendirici = new Object();

var homeController = function(req, res){
}
var  loginController = function(req, res){ 
}

yonlendirici['/'] = homeController;
yonlendirici['/login'] = loginController; 

var server = http.createServer(function(req,res){

   if(req.url in yonlendirici)
        yonlendirici[req.url](req, res);
});
*/
app.listen(8000);
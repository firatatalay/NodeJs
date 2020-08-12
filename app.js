var fs = require('fs');

var  express = require('express');
var app = express();
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/app_server/views'));

app.use(ejsLayouts);
app.use('/public',  express.static(path.join(__dirname, 'public')))

//Dinamik bir yönlendirme için routeManager oluşturuldu.
require('./app_server/routes/routeManager')(app)

app.listen(8000);
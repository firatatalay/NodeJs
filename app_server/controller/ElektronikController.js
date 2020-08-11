var path = require('path');


module.exports.index =  function(req,res){

    var kisiler=['Ahmet','Mehmet','Veli'];

    res.render('bilgisayar', { 
        
        mesaj:'Merhaba ben controller.',
        kisiler: kisiler
    });
}


module.exports.bilgisayar = function(req,res){
    res.sendFile(path.join(__dirname, '../../login.html'));
}


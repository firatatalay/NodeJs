var path = require('path');


module.exports.index =  function(req,res){
    res.render('elektronik');
    
}


module.exports.bilgisayar = function(req,res){
    var kisiler=['Ahmet','Mehmet','Veli','Şaban'];

    res.render('bilgisayar', { 
        
        mesaj:'Merhaba ben controller.',
        kisiler: kisiler
    });
}


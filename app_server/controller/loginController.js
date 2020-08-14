var Kullanici = require('../models/kullanici')


module.exports.indexGet = function(req,res){
    res.render('login');
}

module.exports.indexPost = function(req,res){

    console.log(req.body)

    res.render('login',{
        username: req.body.inputEmail,
        password: req.body.inputPassword
    });
}

module.exports.signupGet = function(req,res){
    res.render('signup');
}


module.exports.signupPost = function(req,res){
    try {
        console.log('test');
        var yeniKullanici = new Kullanici({
            ad:req.body.name,
            soyad:req.body.surname,
            email:req.body.inputEmail,
            kullaniciadi:req.body.username,
            sifre:req.body.inputPassword
        });
        yeniKullanici.save();
        console.log(yeniKullanici);
    
        res.render('signup');
    } catch (error) {
        console.log(error);
    }
}
var Kullanici = require('../models/kullanici')
var bcrypt = require('bcrypt');
const { db } = require('../models/kullanici');
var saltRounds = 10;

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


        bcrypt.hash(req.body.inputPassword, saltRounds, (err, hash) => {
            var yeniKullanici = new Kullanici({
                ad:req.body.name,
                soyad:req.body.surname,
                email:req.body.inputEmail,
                kullaniciAdi:req.body.username,
                sifre:hash
            });
            yeniKullanici.save();
            console.log(yeniKullanici);
    
        res.render('login',{ title: 'Registration Successfully!'});
        });
    }
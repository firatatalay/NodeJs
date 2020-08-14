var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controller/loginController');

router.get('/',ctrlLogin.indexGet);
router.post('/',ctrlLogin.indexPost);

router.post('/signup',ctrlLogin.signupPost);
router.get('/signup',ctrlLogin.signupGet);


module.exports = router;
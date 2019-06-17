var express = require('express');
var router = express.Router();

router.get('/registrasi', function(req, res, next) {
    res.render('registrasi')
})

router.get('/Login', function(req, res, next) {
    res.render('Login')
})

router.get('/Dashboard', function(req, res, next) {
    res.render('Dashboard')
})
module.exports = router;
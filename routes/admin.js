/*var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
    res.render('users/dashboard')
})
router.get('/Login', function(req, res, next) {
    res.render('Login')
})
module.exports = router;
*/

var express = require('express');
var crypto = require('crypto')

var User = require('../model/user')
var Auth_middleware = require('../middlewares/auth')

var router = express.Router();
var secret = 'rahasia'
var session_store

/* GET users listing. */
router.get('/users', Auth_middleware.check_login, Auth_middleware.is_admin, function(req, res, next) {
    session_store = req.session

    User.find({}, function(err, user) {
        console.log(user);
        res.render('users/dashboard', { session_store: session_store, users: user })
    }).select('username email firstname lastname users createdAt updatedAt')
});


module.exports = router;
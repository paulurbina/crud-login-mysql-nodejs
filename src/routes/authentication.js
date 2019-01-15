const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

/**
 * 
 * 
 * REGISTRO DE USUARIO
 */
router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

/**
 * 
 * 
 * LOGIN DE USUARIO
 */
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', isNotLoggedIn,  (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

/**PERFIL DE WEB DE USUARIO */

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

/**
 * 
 * 
 * LOGOUT
 */
router.get('/logout', isNotLoggedIn,(req, res) => {
    req.logout();
    res.redirect('/signin');
})





module.exports = router;
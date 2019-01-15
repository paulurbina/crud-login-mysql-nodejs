const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// DATABASE
const pool = require('../database');

// METHODS HELPERS 
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await pool.query('SELECT*FROM users WHERE username = ?', [username]);
    if(rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword) {
            done(null, user, req.flash('success', 'Welcome' + user.username));
        } else {
            done(null, false, req.flash('error', 'Incorrect Password'));
        }
    } else {
        return done(null, false, req.flash('error', 'The Username does not exists'));
    }
}));

/**
 * 
 * 
 * FOR SIGNUP
 */
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { fullname } = req.body;
    const newUser = {
        username,
        password,
        fullname
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
}));
/**ENCRIPTA EL PASSWORD */
passport.serializeUser((user, done) => {
    done(null, user.id);
});

/**COMPARA EL PASSWORD DE LA DBA CON EL DE LOGIN */
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');


// We want to login with username and password
passport.use(
    new LocalStrategy(
        {
            usernameField: 'username'
        },
        (username, password, done) => {
            db.User.findOne({
                where: {
                    username: username
                }
            }).then(dbUser => {
                if (!dbUser) {
                    return done(null, false, {
                        message: 'Invalid Username'
                    });
                }
               
                return done(null, dbUser);
            });
        }
    )
);

// Sequelize needs to serialize and deserialize the user 
// in order to keep authentiation state across HTTP requests.

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;
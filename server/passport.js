const passport      = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User          = require('./models/user'),
      { validatePassword } = require('./util/password')
      

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return done(null, false);
                }

                const valid = validatePassword(password, user.hash, user.salt);

                if (valid) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            })
            .catch(err => {
                done(err);
            }) 
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err));
});
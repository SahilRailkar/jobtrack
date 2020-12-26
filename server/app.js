var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    dotenv         = require('dotenv'),
    session        = require('express-session'),
    MongoStore     = require('connect-mongo')(session),
    passport       = require('passport'),
    LocalStrategy  = require('passport-local'),
    User           = require('./models/user');
require('./passport');

var indexRoutes = require("./routes/index");

dotenv.config();
const URI = `mongodb+srv://admin:${process.env.ATLAS}@cluster0.fnell.mongodb.net/jobtrack?retryWrites=true&w=majority`;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(e => {
            console.error('Connection error:', e.message)
        });

var options = {
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
};
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore(options),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));
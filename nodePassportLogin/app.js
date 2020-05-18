/*
https://www.youtube.com/watch?v=6FOq4cUdH8k&t=196s
35:21
 */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose'); // mongoose 是給 Node.js 用的 MongoDB ODM
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI;

// connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false}));

// flash middleware (express session)
app.use(session({
    secret: "space monkey",
    resave: true,
    saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// Global variable
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
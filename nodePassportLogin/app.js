/*
https://www.youtube.com/watch?v=6FOq4cUdH8k&t=196s
27:15
 */

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').MongoURI;

// connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongoose connected'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
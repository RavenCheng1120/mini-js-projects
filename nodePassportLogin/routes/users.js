const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// connect to mongoose model
const User = require('../models/User');

// Login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Register page
router.get('/register', (req, res) => {
    res.render('register');
});

// Register Handle
router.post('/register', (req, res) => {
    let { name, email, password, password2 } = req.body;
    let errors = [];
    name = name.trim();
    email = email.trim();
    password = password.trim();
    password2 = password2.trim();

    // check no blank
    if( !name || !email || !password || !password2){
        errors.push({ msg: '請填寫全部的資料'} );
    }

    // check email format
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRe.test(email)){
        errors.push({ msg: '電子郵件格式錯誤'} );
    }

    // check password
    if( password2 !== password){
        errors.push({ msg: '密碼檢查錯誤'} );
    }

    // check password length
    if( password.length < 6){
        errors.push({ msg: '密碼長度要至少6個字元'} );
    }

    if( errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }else{
        // Validation passed
        // res.send('pass'); // testing
        User.findOne( { email: email } )
            .then(user => { 
                if(user){   // user already exists
                    errors.push({ msg: "此電子郵件已經註冊過"});
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                }else{
                    // Create object 
                    const newUser = new User({
                        name,
                        email,
                        password
                    });

                    // Encrypt the password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hashed) => {
                            if(err) throw err;
                            newUser.password = hashed

                            // save the user to DB
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', "成功註冊，可以登入帳號");
                                    res.redirect('/users/login')
                                })
                                .catch(err => console.log(err));
                        });
                    });
                }
            });
    }
});

// login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// logout handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', '你已登出帳號');
    res.redirect('/users/login');
});


module.exports = router;
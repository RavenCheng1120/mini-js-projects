const express = require('express');
const router = express.Router();

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

    // check password
    if( password2 !== password){
        errors.push({ msg: '密碼檢查錯誤'} );
    }

    // check password length
    if( password.length < 6){
        errors.push({ msg: '密碼長度要至少6個字元'} );
    }

    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRe.test(email)){
        errors.push({ msg: '電子郵件格式錯誤'} );
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
        res.send('pass');
    }
});


module.exports = router;
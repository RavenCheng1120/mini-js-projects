const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../models/employee.model');

// 用來輸入員工資料的頁面
router.get("/", (req,res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "新增員工資料" // 傳入標題到html之中(handlebars)
    });
});

// 瀏覽員工的主頁面
router.get("/list", (req,res) => {
    Employee.find((err, doc) => {
        if(err) console.log(err);
        else{
            res.render("employee/list", {
                list: doc.map(doc => doc.toJSON())
            });
        }
    });
});

// 按下submit按鈕，傳出POST
router.post('/', (req, res) => {
    insertRecord(req, res);
});

// 將資料存入DB物件中
const insertRecord = (req, res) => {
    let employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.city = req.body.city;
    employee.phoneNumber = req.body.phoneNumber;
    employee.save((err, doc) => {
        if(err){
            // console.log(err);
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "Insert Employee",
                    employee: req.body  // 用來列印錯誤訊息
                });
            }
        } 
        else{
            res.redirect('employee/list'); // 成功存入資料庫，導回主頁面
        }
    });
};

// 存入錯誤訊息到body之中
const handleValidationError = (err, body) => {
    for(field in err.errors){
        switch (err.errors[field].path){
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
};

module.exports = router;
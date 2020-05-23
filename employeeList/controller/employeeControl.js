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
    if(req.body._id == "")  // 新增員工
        insertRecord(req, res);
    else // 更改員工資料
        updateRecord(req, res);
});

// 將資料存入DB物件中
const insertRecord = (req, res) => {
    let employee = new Employee();
    employee.fullName = req.body.fullName.trim();
    employee.email = req.body.email.trim();
    employee.city = req.body.city.trim();
    employee.phoneNumber = req.body.phoneNumber.trim();
    employee.save((err, doc) => {
        if(err){
            // console.log(err);
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "新增員工資料",
                    employee: req.body  // 用來列印錯誤訊息
                });
            }
        } 
        else{
            res.redirect('employee/list'); // 成功存入資料庫，導回主頁面
        }
    });
};

const updateRecord = (req, res) => {
    Employee.findOneAndUpdate({ _id : req.body._id }, req.body, {new: true}, (err, doc) => {
        if(err){
            console.log(err);
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "新增員工資料",
                    employee: req.body  // 用來列印錯誤訊息
                });
            }
        } 
        else
            res.redirect('/employee/list');
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

// 更改員工資料，透過傳回的id找到資料庫中相對應的員工
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if(err) console.log(err);
        else{
            res.render("employee/addOrEdit", {
                viewTitle: "更改資料",
                employee: doc.toJSON()  // 用來傳遞原先的資料
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) console.log(err);
        else{
            res.redirect('/employee/list');
        }
    });
});

module.exports = router;
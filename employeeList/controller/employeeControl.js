const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../models/employee.model');

router.get("/", (req,res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

router.get("/list", (req,res) => {
    res.json("List!");
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

const insertRecord = (req, res) => {
    let employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.city = req.body.city;
    employee.phoneNumber = req.body.phoneNumber;
    employee.save((err, doc) => {
        if(err) console.log(err);
        else{
            res.redirect('employee/list');
        }
    });
};

module.exports = router;
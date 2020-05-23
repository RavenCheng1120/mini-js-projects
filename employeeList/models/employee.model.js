const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: "Please enter the name." // 若未填，存入錯誤訊息
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    phoneNumber: {
        type: String
    }
});

// 檢查email輸入格式
employeeSchema.path('email').validate((val) => {
    const reg = /^\w+((-\w+)|(\.\w+)|(\+\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    return reg.test(val);
}, "Invalid email.");

module.exports = mongoose.model('Employee', employeeSchema);
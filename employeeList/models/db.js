const mongoose = require('mongoose');
const uri = "mongodb+srv://pattyCheng:******@cluster0-2dupc.mongodb.net/EmployeeDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true , useFindAndModify: false})
    .then(() => {
        console.log(`MongoDB Connected.`);
    })
    .catch(err => console.log(err));

// 資料庫內儲存格式
require('./employee.model');

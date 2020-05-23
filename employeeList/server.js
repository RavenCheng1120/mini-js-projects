const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars'); 
const bodyparser = require('body-parser');

const employeeControl = require("./controller/employeeControl");

// 取得db連線
require('./models/db');

// 將post的資訊嵌入到req之中
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// middleware，要放在bodyparser之下
app.use('/employee', employeeControl);

// 連接handlebar
app.set('views', path.join(__dirname,"/views/"));
// 將所有hbs檔套上layouts
app.engine('hbs', exphbs( { extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname+'/views/layouts/'} ));
app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
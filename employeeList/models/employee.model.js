const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
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

module.exports = mongoose.model('Employee', employeeSchema);
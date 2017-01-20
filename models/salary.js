var mongoose = require('mongoose');

var salarySchema = new mongoose.Schema({
    id: String,
    name: String,
    salary: Number
});


module.exports = mongoose.model("Salary", salarySchema);

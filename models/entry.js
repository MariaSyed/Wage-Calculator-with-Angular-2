var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
    name: String,
    id: String,
    date: String,
    startTime: String,
    endTime: String,
    dailyWage: Number
});

module.exports = mongoose.model("Entry", entrySchema);

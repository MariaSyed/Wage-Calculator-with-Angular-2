var Entry = require('../models/entry'),
    Salary = require('../models/salary'),
    calculate = require('./calculate'),
    async = require('async'),
    csv = require('fast-csv'),
    fs = require('fs');

//read from csv file and populate collection with data
function refreshDB(filePath, done) {
    var newEntries = [];

    Salary.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed salaries!");
        }
    });

    Entry.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed entries!");
            var stream = fs.createReadStream(filePath);

            //reading from file
            csv.fromStream(stream, {
                headers: true
            }).on("data", function(data) {
                var newEntry = {
                    name: data['Person Name'],
                    id: data['Person ID'],
                    date: data['Date'],
                    startTime: data['Start'],
                    endTime: data['End']
                };

                //calculating daily wage for each entry and setting dailyWage field
                newEntry.dailyWage = calculate.calculateDailyWage(newEntry);
                newEntries.push(newEntry);
            }).on("end", function() {
                async.each(newEntries, function(newEntry, cb) {
                    Entry.create(newEntry, function(err, entry) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Added new entry!");
                            cb(null);
                        }
                    });
                }, function(err) {
                    console.log("finished!");
                    Entry.find()
                    .exec(function(err, entries) {
                        done(err, entries);
                    });
                });
            })
        }
    });
}


//exporting module as refreshDB to be used
module.exports = refreshDB;

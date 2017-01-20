var express = require('express'),
    router = express.Router(),
    Entry = require('../models/entry'),
    calculate = require('../services/calculate'),
    refreshDB = require('../services/refresh.js');

//GET DATA
router.get("/", function(req, res, next){
  Entry.find()
      .exec(function (err, entries) {
          if (err) {
              return res.status(500).json({
                  title: 'An error occurred',
                  error: err
              });
          }
          res.status(200).json({
              message: 'Success',
              obj: entries
          });
      });
});



//REFRESH DATA
router.post("/refresh", function(req, res, next){
  //Removing all data and re-populating database from csv file
  refreshDB("HourList201403.csv", function(err, entries){
    if (err) {
        return res.json({
            title: 'An error occurred',
            error: err
        });
    }
    res.json({
        message: 'Refreshed entries',
        obj: entries
    });
  })
});


//ADD DATA
router.post("/",function(req, res, next){
    var newEntry = {
        name: req.body.name,
        id: req.body.id,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    };
    //Calculating daily wage for employee created and storing it as dailyWage
    newEntry.dailyWage = calculate.calculateDailyWage(newEntry);
    Entry.create(newEntry, function(err, entry){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved entry',
            obj: entry
        });
    });
});

//UPDATE DATA
router.patch("/:id", function(req, res, next){
    console.log("reached inside patch request");
    Entry.findById(req.params.id, function (err, entry) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!entry) {
            return res.status(500).json({
                title: 'No Entry Found!',
                error: {message: 'Entry not found'}
            });
        }
        entry.name = req.body.name,
        entry.id = req.body.id,
        entry.date = req.body.date,
        entry.startTime = req.body.startTime,
        entry.endTime = req.body.endTime

        //Calculating daily wage for updated entry
        entry.dailyWage = calculate.calculateDailyWage(entry);
        console.log('here is updated entry:');
        console.log(entry);
        entry.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated entry',
                obj: result
            });
        });
    });
});

//DELETE DATA
router.delete("/:id", function(req, res, next){
    Entry.findByIdAndRemove(req.params.id, function(err){
      if (err) {
          return res.status(500).json({
              title: 'An error occurred',
              error: err
          });
      }
      res.status(200).json({
          message: 'Deleted entry'
      });
    });
});

module.exports = router;

var express = require('express'),
    router = express.Router(),
    Entry = require('../models/entry'),
    Salary = require('../models/salary');

//show salaries
router.get("/", function(req, res){
    Salary.find()
      .exec(function(err, salaries){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: salaries
        });
    })
});

//process salaries
router.post("/", function(req, res){
    Entry.aggregate( [
      { $group : { _id : "$id", id : { $first: "$id" },name : { $first: "$name" }, salary: { $sum: "$dailyWage" } } },
      { $out : "salaries" }], function(err){
          if(err){
            res.json({
                title: 'An error occurred',
                error: err
            });
          } else {
              console.log("Aggregated!");
              Salary.find({},function(err, salaries){
                if(err){
                  res.json({
                    title: 'An error occured',
                    obj: err
                  })
                } else {
                  res.json({
                      message: 'Success',
                      obj: salaries
                  });
                }
              })
          }
      });
});

module.exports = router;

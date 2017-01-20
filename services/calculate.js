var moment = require('moment');
var hourlyWage = 3.75;

module.exports.calculateDailyWage = function(entry){
       var start = moment(entry.startTime, "HH:mm"); //convert startTime using momentjs
       var end = moment(entry.endTime, "HH:mm"); //convert endTime using momentjs
       var time = moment(entry.startTime, "HH:mm"); //set time as start time
       var dailyWage = 0; //initial daily wage
        while (time.format("HH:mm") != end.format("HH:mm")){
            time = time.add(15,'m'); //add 15 minutes to time
            if(time > moment("06:00", 'HH:mm') && time <= moment("18:00", "HH:mm")){ //check if time is between regular hours
                dailyWage += hourlyWage / 4; //add regular wage per 15 minutes
            } else {
                dailyWage += (hourlyWage + 1.15) / 4; //add evening compensation wage per 15 minutes
            }
        }

        var hoursWorked = moment.duration(end.diff(start)).asHours();
        if (hoursWorked < 0) {hoursWorked += 24;} //Account for end time after midnight
        if (hoursWorked > 8){
            var overtimeHours = hoursWorked - 8;
            for(var i = 1; i <= overtimeHours; i++){
                if(i<=2) {dailyWage += hourlyWage * 0.25} //for first 2 hours, add 25% of hourly wage
                else if(i>2 && i <=4) {dailyWage += hourlyWage * 0.5} //next 2 hours, add 50% of hourly wage
                else {dailyWage += hourlyWage * 1.00} //after that, add 100% of hourly wage
            }
        }
        return dailyWage;
};

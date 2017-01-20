var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

//getting routes
var timesheetRoutes = require("./routes/timesheet"),
    salaryRoutes  = require('./routes/salaries'),
    indexRoutes = require('./routes/index');

var url = process.env.DATABASEURL || "mongodb://localhost/company";
mongoose.connect(url);

app.set("view engine","hbs");
//app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//using routes
app.use(indexRoutes);
app.use('/timesheet-entry',timesheetRoutes);
app.use('/salary',salaryRoutes);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});
module.exports = app;
// app.listen(3000, function(){
//   console.log("Server started on 3000");
// })

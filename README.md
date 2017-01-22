## Wage Calculator v2.0 *by Maria Syed*

Application to calculate employee salaries for the month using data from a csv file. Entries can also be added, uploaded and deleted.  

Deployed app can be used at: https://wage-calculator-v2.herokuapp.com/

## How to Run Locally
### Install Mongodb
* Download installation files from: https://docs.mongodb.com/manual/administration/install-community/
* Install in root directory

### Install Nodejs
https://nodejs.org/en/download/

### Set up environment
1. Navigate into the folder (in the command line/ terminal)
2. Run `npm install` to install all required dependencies
3. Run `npm run build` to run the development build script => Keep this process running! It recompiles the files upon changes.
4. Run `./bin/mongod` to start mongodb server (or run mongod.exe file)=> Keep this process running too. It is the mongo server.
5. Run `npm start` in a new command line/ terminal window => Keep this process running as well. It is the Nodejs server.

### Use Application
Go to: http://localhost:3000

## How to Use Applicaton
* Click on 'See Timesheet' to view timesheet

* Fill in the form on the page and click Save to add new entry.
(*Note: data must be of certain format to be added successfully*)

* Click on the icons next to each table data to edit/delete entry.

* Click on the refresh button (top right) to refresh entries.
(*Note: All changes will be gone*)

* Click 'See Salaries' (navigation bar) to view salaries

* Click 'Calculate' to calculate new salaries based on current timesheet

## What Was Used

#### Front-end
* Angular 2
* HTML5/CSS
* Bootstrap for styling
* Jquery for fade Ins
* Google fonts
* Font awesome for awesome icons

#### Back-end
* **MEAN Stack**
    * MongoDB to store data (MongoLab to access database on deployed version)
    * Express framework
    * Nodejs as back-end programming language
* **Important Libraries**
    * mongoose to connect to mongoDB
    * HBS to incorporate javascript in HTML
    * momentjs to handle time
    * fast-csv to get data from csv file
    * async to perform asynchronous functions

## How It Works

* Data is read from "HourList201403.csv" and is used to populate database on mongoDB.     

* After data is read, daily wage for each entry is calculated and added as a new field to each entry which can be viewed at '/timesheet'


* Upon refresh, all data from the time sheet is removed and data is read from "HourList201403.csv" again to re-populate collection.

* On Salaries page, clicking on "Calculate Salary" prompts the database to group the entries according to their id and summing their daily wages to get salary for the month.

### How Daily Wages are Calculated

* For hours between 6:00 and 18:00, employees get paid $3.75/hour
* For hours between 18:00 and 6:00 employees get paid $3.75+$1.15/hour
* If hours worked are greater than 8,
    * For first 2 hours, add 3.75 * 0.25
    * For next 2 hours, add 3.75 * 0.50
    * For rest hours, add 3.75 * 1.00
* All is added to result in daily wage

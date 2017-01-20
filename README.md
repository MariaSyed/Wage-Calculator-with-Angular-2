## Wage Calculator v2.0 *by Maria Syed*

MEAN stack application to calculate employee salaries for the month using data from a csv file. Entries can also be added, uploaded and deleted.  

## How to Use (Un-deployed Version)
### Install Mongodb
* Download installation files from: https://docs.mongodb.com/manual/administration/install-community/
* Install in root directory 

### Install Nodejs
https://nodejs.org/en/download/

### Set up environment 
1. Navigate into the folder (in the command line/ terminal)
2. Run `npm install` to install all required dependencies
3. Run `npm run build` to run the development build script => Keep this process running! It recompiles the files upon changes.
4. Run `./bin/mongod` to start mongodb server
5. Run `npm start` in a new command line/ terminal window => Keep this process running as well. 

### Use Application
Go to: http://localhost:3000 

## What Was Used

#### Front-end 
* Angular 2
* HTML5/CSS
* Bootstrap for styling
* Jquery for fade Ins
* Google fonts 
* Font awesome for awesome icons

#### Back-end
* **MEN Stack**
    * MongoDB to store data
    * Express framework
    * Nodejs as back-end programming language 
* **Libraries**
    * mongoose to connect to mongoDB
    * HBS to incorporate javascript in HTML
    * momentjs to handle time
    * fast-csv to get data from csv file
    * method-override to perform put and delete requests

## How It Works

* Data is read from "HourList201403.csv" and is used to populate database on mongoDB.     

* As data is being read, daily wage for each entry is calculated and added as a new field to each entry which can be viewed at https://morning-eyrie-64726.herokuapp.com/time-sheet

* New entries can be added to collection by filling in the form on the page.  
(*Note: data must be of certain format to be added successfully*)

* Entries can be editted or deleted from the table by clicking on the icons next to each table data.

* Collection can also be refreshed by clicking on the refresh button (top right). This means all data from the time sheet is removed and data is read from "HourList201403.csv" again to re-populate collection. All new entries or changes will be
 lost.

* Clicking on "Calculate Salary" prompts the database to group the entries according to their id and summing their daily wages to get salary for the month.

### How Daily Wages are Calculated

* For hours between 6:00 and 18:00, employees get paid $3.75/hour
* For hours between 18:00 and 6:00 employees get paid $3.75+$1.15/hour
* If hours worked are greater than 8,
    * For first 2 hours, add 3.75 * 0.25 
    * For next 2 hours, add 3.75 * 0.50
    * For rest hours, add 3.75 * 1.00 
* All is added to result in daily wage

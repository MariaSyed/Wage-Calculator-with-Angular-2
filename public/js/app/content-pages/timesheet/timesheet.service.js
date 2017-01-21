import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Entry } from "./entry.model";
export var TimesheetService = (function () {
    function TimesheetService(http) {
        this.http = http;
        this.entries = [];
        this.domain = "https://wage-calculator-v2.herokuapp.com/";
        this.entryIsEdit = new EventEmitter();
    }
    TimesheetService.prototype.getEntries = function () {
        var _this = this;
        return this.http.get(this.domain + 'timesheet-entry')
            .map(function (response) {
            return _this.entries = _this.transformEntry(response.json().obj);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TimesheetService.prototype.addEntry = function (entry) {
        var _this = this;
        var body = JSON.stringify(entry);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.domain + 'timesheet-entry', body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var entry = new Entry(result.obj.name, result.obj.id, result.obj.date, result.obj.startTime, result.obj.endTime, result.obj.dailyWage);
            _this.entries.push(entry);
            return entry;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TimesheetService.prototype.refreshEntries = function () {
        var _this = this;
        return this.http.post(this.domain + 'timesheet-entry/refresh', '')
            .map(function (response) {
            _this.entries = _this.transformEntry(response.json().obj);
            console.log(_this.entries);
            return _this.entries;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TimesheetService.prototype.editEntry = function (entry) {
        this.entryIsEdit.emit(entry);
    };
    TimesheetService.prototype.updateEntry = function (entry) {
        var body = JSON.stringify(entry);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.domain + 'timesheet-entry/' + entry.entryId, body, { headers: headers })
            .map(function (response) {
            entry.dailyWage = response.json().obj.dailyWage.toFixed(2);
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TimesheetService.prototype.deleteEntry = function (entry) {
        this.entries.splice(this.entries.indexOf(entry), 1);
        return this.http.delete(this.domain + 'timesheet-entry/' + entry.entryId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TimesheetService.prototype.transformEntry = function (obj) {
        var entries = obj;
        var transformedEntries = [];
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            transformedEntries.push(new Entry(entry.name, entry.id, entry.date, entry.startTime, entry.endTime, entry.dailyWage, entry._id));
        }
        return transformedEntries;
    };
    TimesheetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TimesheetService.ctorParameters = [
        { type: Http, },
    ];
    return TimesheetService;
}());
//# sourceMappingURL=timesheet.service.js.map
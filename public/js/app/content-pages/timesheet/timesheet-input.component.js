import { Component } from '@angular/core';
import { TimesheetService } from './timesheet.service';
import { Entry } from './entry.model';
export var TimesheetInputComponent = (function () {
    function TimesheetInputComponent(timesheetService) {
        this.timesheetService = timesheetService;
    }
    TimesheetInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timesheetService.entryIsEdit.subscribe(function (entry) { return _this.entry = entry; });
    };
    TimesheetInputComponent.prototype.onClear = function (form) {
        this.entry = null;
        form.resetForm();
    };
    TimesheetInputComponent.prototype.onSubmit = function (form) {
        if (this.entry) {
            var f = form.value;
            this.entry.name = f.name;
            this.entry.id = f.id;
            this.entry.date = f.date;
            this.entry.startTime = f.startTime;
            this.entry.endTime = f.endTime;
            this.timesheetService.updateEntry(this.entry)
                .subscribe(function (result) { return console.log(result); });
            this.entry = null;
        }
        else {
            var f = form.value;
            var entry = new Entry(f.name, f.id, f.date, f.startTime, f.endTime, 0);
            this.timesheetService.addEntry(entry)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            form.resetForm();
        }
    };
    TimesheetInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-timesheet-input',
                    templateUrl: './timesheet-input.component.html',
                    styleUrls: ['../content-pages.css']
                },] },
    ];
    /** @nocollapse */
    TimesheetInputComponent.ctorParameters = [
        { type: TimesheetService, },
    ];
    return TimesheetInputComponent;
}());
//# sourceMappingURL=timesheet-input.component.js.map
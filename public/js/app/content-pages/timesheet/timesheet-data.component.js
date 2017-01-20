import { Component, Input } from '@angular/core';
import { TimesheetService } from "./timesheet.service";
export var TimesheetDataComponent = (function () {
    function TimesheetDataComponent(timesheetService) {
        this.timesheetService = timesheetService;
    }
    ;
    TimesheetDataComponent.prototype.onEdit = function () {
        this.timesheetService.editEntry(this.entry);
    };
    TimesheetDataComponent.prototype.onDelete = function () {
        this.timesheetService.deleteEntry(this.entry)
            .subscribe(function (result) { return console.log(result); });
    };
    TimesheetDataComponent.decorators = [
        { type: Component, args: [{
                    selector: '[wc-timesheet-data]',
                    templateUrl: './timesheet-data.component.html',
                    styleUrls: ['../content-pages.css']
                },] },
    ];
    /** @nocollapse */
    TimesheetDataComponent.ctorParameters = [
        { type: TimesheetService, },
    ];
    TimesheetDataComponent.propDecorators = {
        'entry': [{ type: Input },],
    };
    return TimesheetDataComponent;
}());
//# sourceMappingURL=timesheet-data.component.js.map
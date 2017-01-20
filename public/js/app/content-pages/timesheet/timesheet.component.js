var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component } from '@angular/core';
import { TimesheetService } from './timesheet.service';
import { LoadingComponent } from '../loading.component';
export var TimesheetComponent = (function (_super) {
    __extends(TimesheetComponent, _super);
    function TimesheetComponent(timesheetService) {
        _super.call(this, true); //sets loading to true
        this.timesheetService = timesheetService;
    }
    ;
    TimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timesheetService.getEntries()
            .subscribe(function (entries) {
            _this.entries = entries;
            _this.ready(); //sets loading to false
        });
        this.timesheetService.entryIsEdit.subscribe(function (entry) { $("wc-timesheet-input").fadeIn(); });
    };
    TimesheetComponent.prototype.toggleForm = function () {
        $("wc-timesheet-input").fadeToggle();
    };
    TimesheetComponent.prototype.onRefresh = function () {
        var _this = this;
        console.log('refresh clicked!');
        this.timesheetService.refreshEntries().subscribe(function (entries) { return _this.entries = entries; });
    };
    TimesheetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-timesheet',
                    templateUrl: './timesheet.component.html',
                    styleUrls: ['../content-pages.css']
                },] },
    ];
    /** @nocollapse */
    TimesheetComponent.ctorParameters = [
        { type: TimesheetService, },
    ];
    return TimesheetComponent;
}(LoadingComponent));
//# sourceMappingURL=timesheet.component.js.map
import { Component } from '@angular/core';
import { TimesheetService } from './content-pages/timesheet/timesheet.service';
import { SalaryService } from './content-pages/salary/salary.service';
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-app',
                    templateUrl: './app.component.html',
                    providers: [TimesheetService, SalaryService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map
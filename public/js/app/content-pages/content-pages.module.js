import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing } from "./content-pages.routing";
import { LoadingIndicator } from "./loading.component";
import { HeaderComponent } from "./header.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetDataComponent } from './timesheet/timesheet-data.component';
import { TimesheetInputComponent } from './timesheet/timesheet-input.component';
import { TimesheetService } from './timesheet/timesheet.service';
import { SalaryComponent } from './salary/salary.component';
import { SalaryDataComponent } from './salary/salary-data.component';
import { SalaryService } from './salary/salary.service';
export var ContentPagesModule = (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LoadingIndicator,
                        HeaderComponent,
                        TimesheetComponent,
                        TimesheetDataComponent,
                        TimesheetInputComponent,
                        SalaryComponent,
                        SalaryDataComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        routing
                    ],
                    providers: [TimesheetService, SalaryService]
                },] },
    ];
    /** @nocollapse */
    ContentPagesModule.ctorParameters = [];
    return ContentPagesModule;
}());
//# sourceMappingURL=content-pages.module.js.map
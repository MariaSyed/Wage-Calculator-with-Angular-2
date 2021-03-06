import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoadingIndicator } from "./loading.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetDataComponent } from './timesheet/timesheet-data.component';
import { TimesheetInputComponent } from './timesheet/timesheet-input.component';
import { TimesheetService } from './timesheet/timesheet.service';

import { SalaryComponent } from './salary/salary.component';
import { SalaryDataComponent } from './salary/salary-data.component';
import { SalaryService } from './salary/salary.service';

@NgModule({
  declarations: [
    LoadingIndicator,
    TimesheetComponent,
    TimesheetDataComponent,
    TimesheetInputComponent,
    SalaryComponent,
    SalaryDataComponent
    ],
  imports: [
    CommonModule,
    FormsModule
    ],
  providers: [TimesheetService, SalaryService]
})

export class ContentPagesModule {

}

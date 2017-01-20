import { Component } from '@angular/core';
import { TimesheetService } from './timesheet/timesheet.service';
import { SalaryService } from './salary/salary.service';

@Component({
  selector: 'wc-app',
  templateUrl: './app.component.html',
  providers: [TimesheetService, SalaryService]
})
export class AppComponent {
}

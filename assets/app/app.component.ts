import { Component } from '@angular/core';
import { TimesheetService } from './content-pages/timesheet/timesheet.service';
import { SalaryService } from './content-pages/salary/salary.service';

@Component({
  selector: 'wc-app',
  templateUrl: './app.component.html',
  providers: [TimesheetService, SalaryService]
})
export class AppComponent {
}

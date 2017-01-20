import { Component, Input } from '@angular/core';

import { Salary } from './salary.model';

@Component({
  selector: '[wc-salary-data]',
  templateUrl: './salary-data.component.html',
  styleUrls: ['../timesheet/timesheet.component.css']
})
export class SalaryDataComponent {
  @Input() salary: Salary;
}

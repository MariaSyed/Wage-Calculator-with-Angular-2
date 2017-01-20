import { Component, Input } from '@angular/core';

import { Salary } from './salary.model';

@Component({
  selector: '[wc-salary-data]',
  templateUrl: './salary-data.component.html',
  styleUrls: ['../content-pages.css']
})
export class SalaryDataComponent {
  @Input() salary: Salary;
}

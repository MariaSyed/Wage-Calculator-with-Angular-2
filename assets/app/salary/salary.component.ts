import { Component, Input, OnInit } from '@angular/core';
import { SalaryService } from './salary.service';
import { Salary } from './salary.model';
import { LoadingComponent } from '../loading.component';

@Component({
  selector: 'wc-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['../timesheet/timesheet.component.css']
})
export class SalaryComponent extends LoadingComponent implements OnInit {
  salaries: Salary[];
  constructor(private salaryService: SalaryService){
    super(true);
  }

  ngOnInit(){
    this.salaryService.getSalaries()
      .subscribe(
        (salaries: Salary[]) => {
          this.salaries = salaries;
          this.ready();
        }
      )
  }

  calculateSalaries(){
    console.log('calc clicked!');
    this.salaryService.calculateSalaries()
      .subscribe((salaries: Salary[]) => this.salaries = salaries);
  }

}

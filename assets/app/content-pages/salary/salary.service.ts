import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Salary } from "./salary.model";

@Injectable()
export class SalaryService {
    private salaries: Salary[] = [];


    constructor(private http: Http) {}

    getSalaries() {
        // return this.salaries;
        return this.http.get('http://localhost:3000/salary')//should be changed after deploying the app
            .map((response: Response) => {
              return this.salaries = this.transformSalary(response.json().obj);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }


    calculateSalaries(){
      return this.http.post('http://localhost:3000/salary',"")
        .map((response: Response) => {
          return this.salaries = this.transformSalary(response.json().obj);
        })
          .catch((error: Response) => Observable.throw(error.json()));
    }

    transformSalary(obj: Array<any>){
      const salaries = obj;
      let transformedSalaries: Salary[] = [];
      for (let salary of salaries) {
          transformedSalaries.push(new Salary(salary.name, salary.id, salary.salary, salary._id));
      }
      return transformedSalaries;
    }
}

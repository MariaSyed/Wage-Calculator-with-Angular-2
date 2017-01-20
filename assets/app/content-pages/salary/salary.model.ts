export class Salary {
  salary: string;
  constructor(public name: string, public id: string, salary: number, salaryId?: string){
    this.salary = salary.toFixed(2);
  }
}

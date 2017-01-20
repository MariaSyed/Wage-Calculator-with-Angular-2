export class Entry {
  dailyWage: string;
  constructor(public name: string, public id: string, public date: string, public startTime: string, public endTime: string, dailyWage?: number, public entryId?:string){
    this.dailyWage = dailyWage.toFixed(2);
  }
}

import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Entry } from "./entry.model";

@Injectable()
export class TimesheetService {
    private entries: Entry[] = [];
    domain = "https://wage-calculator-v2.herokuapp.com/";
    entryIsEdit = new EventEmitter<Entry>();

    constructor(private http: Http) {}

    getEntries() {
     return this.http.get(this.domain + 'timesheet-entry')
       .map((response: Response) => {
         return this.entries = this.transformEntry(response.json().obj);
       })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    addEntry(entry: Entry) {
      const body = JSON.stringify(entry);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.domain + 'timesheet-entry', body, {headers: headers})
          .map((response: Response) => {
              const result = response.json();
              const entry = new Entry(result.obj.name, result.obj.id, result.obj.date, result.obj.startTime, result.obj.endTime, result.obj.dailyWage);
              this.entries.push(entry);
              return entry;
          })
           .catch((error: Response) => Observable.throw(error.json()));
    }

    refreshEntries(){
      return this.http.post(this.domain + 'timesheet-entry/refresh','')
        .map((response: Response) =>{
          this.entries = this.transformEntry(response.json().obj);
          console.log(this.entries);
          return this.entries;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    editEntry(entry: Entry) {
      this.entryIsEdit.emit(entry);
    }

    updateEntry(entry: Entry) {
      const body = JSON.stringify(entry);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.patch(this.domain + 'timesheet-entry/' + entry.entryId, body, {headers: headers})
          .map((response: Response) => {
            entry.dailyWage = response.json().obj.dailyWage.toFixed(2);
            return response.json()}
          )
          .catch((error: Response) => Observable.throw(error.json()));
      }

    deleteEntry(entry: Entry) {
      this.entries.splice(this.entries.indexOf(entry), 1);
      return this.http.delete(this.domain + 'timesheet-entry/' + entry.entryId)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
    }

    transformEntry(obj: Array<any>){
      const entries = obj;
      let transformedEntries: Entry[] = [];
      for (let entry of entries) {
        transformedEntries.push(new Entry(entry.name, entry.id, entry.date, entry.startTime, entry.endTime, entry.dailyWage,entry._id));
      }
      return transformedEntries;
    }
}

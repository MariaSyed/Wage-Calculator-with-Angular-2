import { Component, OnInit } from '@angular/core';
import { TimesheetService } from './timesheet.service';
import { NgForm } from '@angular/forms';
import { Entry } from './entry.model';

@Component({
  selector: 'wc-timesheet-input',
  templateUrl: './timesheet-input.component.html',
  styleUrls: ['../content-pages.css']
})
export class TimesheetInputComponent implements OnInit{
  entry: Entry;

  constructor(private timesheetService: TimesheetService) { }

  ngOnInit(){
    this.timesheetService.entryIsEdit.subscribe(
        (entry: Entry) => this.entry = entry
    );
  }

  onClear(form: NgForm){
    this.entry = null;
    form.resetForm();
  }

  onSubmit(form: NgForm){
    if(this.entry){
      const f = form.value;
      this.entry.name = f.name;
      this.entry.id = f.id;
      this.entry.date = f.date;
      this.entry.startTime = f.startTime;
      this.entry.endTime = f.endTime;
      this.timesheetService.updateEntry(this.entry)
        .subscribe(
          result => console.log(result));
      this.entry = null;
    } else {
      const f = form.value;
      const entry = new Entry(f.name,f.id,f.date,f.startTime,f.endTime,0);
      this.timesheetService.addEntry(entry)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      form.resetForm();
  }
}

}

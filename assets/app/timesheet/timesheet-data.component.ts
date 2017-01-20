import { Component, Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

import { TimesheetService } from "./timesheet.service";
import { Entry } from './entry.model';

@Component({
  selector: '[wc-timesheet-data]',
  templateUrl: './timesheet-data.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetDataComponent {
  @Input() entry: Entry;

  constructor(private timesheetService: TimesheetService){};

  onEdit(){
    this.timesheetService.editEntry(this.entry);
  }

  onDelete(){
    this.timesheetService.deleteEntry(this.entry)
      .subscribe(
        result => console.log(result)
      );
  }
}

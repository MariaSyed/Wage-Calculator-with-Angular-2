import { Component, OnInit} from '@angular/core';

import { Entry } from './entry.model';
import { TimesheetService } from './timesheet.service';
import { LoadingComponent } from '../loading.component';
declare var $: any;

@Component({
  selector: 'wc-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['../content-pages.css']
})
export class TimesheetComponent extends LoadingComponent implements OnInit {
  entries: Entry[];

  constructor(private timesheetService: TimesheetService){
    super(true); //sets loading to true
  };

  ngOnInit() {
      this.timesheetService.getEntries()
        .subscribe(
        (entries: Entry[]) => {
                 this.entries = entries;
                 this.ready(); //sets loading to false
             }
        )
        this.timesheetService.entryIsEdit.subscribe(
          entry => {$("wc-timesheet-input").fadeIn();}
        )
  }

  toggleForm(){
      $("wc-timesheet-input").fadeToggle();
  }

  onRefresh(){
    console.log('refresh clicked!');
    this.timesheetService.refreshEntries().subscribe(
      (entries: Entry[]) => this.entries = entries
    )
  }
}

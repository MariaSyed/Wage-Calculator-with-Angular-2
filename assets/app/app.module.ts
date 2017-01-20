import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header.component";
import { LoadingIndicator } from "./loading.component";
import { HomeComponent } from './home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SalaryComponent } from './salary/salary.component';
import { TimesheetDataComponent } from './timesheet/timesheet-data.component';
import { SalaryDataComponent } from './salary/salary-data.component';
import { TimesheetInputComponent } from './timesheet/timesheet-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    HomeComponent,
    HomeComponent,
    SalaryComponent,
    TimesheetDataComponent,
    SalaryDataComponent,
    TimesheetInputComponent,
    HeaderComponent,
    LoadingIndicator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

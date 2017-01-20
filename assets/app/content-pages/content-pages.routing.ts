import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "../home.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { SalaryComponent } from "./salary/salary.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'timesheet', component: TimesheetComponent},
  { path: 'salaries', component: SalaryComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

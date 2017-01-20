import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { SalaryComponent } from "./salary/salary.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: 'salaries', component: SalaryComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=content-pages.routing.js.map
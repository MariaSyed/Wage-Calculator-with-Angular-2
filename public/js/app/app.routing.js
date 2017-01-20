import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TimesheetComponent } from "./content-pages/timesheet/timesheet.component";
import { SalaryComponent } from "./content-pages/salary/salary.component";
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'timesheet', component: TimesheetComponent },
    { path: 'salaries', component: SalaryComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map
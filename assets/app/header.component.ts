import { Component } from "@angular/core";

@Component({
    selector: 'wc-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/timesheet']">See Timesheet</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/salaries']">See Salaries</a></li>
                </ul>
            </nav>
        </header>
    `,
    styles: [`
        li {
          background-color: white;
          border-radius: 5px;
          margin: 10px;
        }
      `]
})

export class HeaderComponent {

}

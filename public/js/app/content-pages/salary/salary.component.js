var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component } from '@angular/core';
import { SalaryService } from './salary.service';
import { LoadingComponent } from '../loading.component';
export var SalaryComponent = (function (_super) {
    __extends(SalaryComponent, _super);
    function SalaryComponent(salaryService) {
        _super.call(this, true);
        this.salaryService = salaryService;
    }
    SalaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salaryService.getSalaries()
            .subscribe(function (salaries) {
            _this.salaries = salaries;
            _this.ready();
        });
    };
    SalaryComponent.prototype.calculateSalaries = function () {
        var _this = this;
        console.log('calc clicked!');
        this.salaryService.calculateSalaries()
            .subscribe(function (salaries) { return _this.salaries = salaries; });
    };
    SalaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-salary',
                    templateUrl: './salary.component.html',
                    styleUrls: ['../content-pages.css']
                },] },
    ];
    /** @nocollapse */
    SalaryComponent.ctorParameters = [
        { type: SalaryService, },
    ];
    return SalaryComponent;
}(LoadingComponent));
//# sourceMappingURL=salary.component.js.map
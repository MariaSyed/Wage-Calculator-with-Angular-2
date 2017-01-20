import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Salary } from "./salary.model";
export var SalaryService = (function () {
    function SalaryService(http) {
        this.http = http;
        this.salaries = [];
    }
    SalaryService.prototype.getSalaries = function () {
        var _this = this;
        // return this.salaries;
        return this.http.get('http://localhost:3000/salary') //should be changed after deploying the app
            .map(function (response) {
            return _this.salaries = _this.transformSalary(response.json().obj);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    SalaryService.prototype.calculateSalaries = function () {
        var _this = this;
        return this.http.post('http://localhost:3000/salary', "")
            .map(function (response) {
            return _this.salaries = _this.transformSalary(response.json().obj);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    SalaryService.prototype.transformSalary = function (obj) {
        var salaries = obj;
        var transformedSalaries = [];
        for (var _i = 0, salaries_1 = salaries; _i < salaries_1.length; _i++) {
            var salary = salaries_1[_i];
            transformedSalaries.push(new Salary(salary.name, salary.id, salary.salary, salary._id));
        }
        return transformedSalaries;
    };
    SalaryService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SalaryService.ctorParameters = [
        { type: Http, },
    ];
    return SalaryService;
}());
//# sourceMappingURL=salary.service.js.map
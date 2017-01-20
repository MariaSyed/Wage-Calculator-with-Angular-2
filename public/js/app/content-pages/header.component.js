import { Component } from "@angular/core";
export var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wc-header',
                    template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['/timesheet']\">See Timesheet</a></li>\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['/salaries']\">See Salaries</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
                    styles: ["\n        li {\n          background-color: white;\n          border-radius: 5px;\n          margin: 10px;\n        }\n      "]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [];
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map
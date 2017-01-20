import { Component } from '@angular/core';
export var LoadingIndicator = (function () {
    function LoadingIndicator() {
    }
    LoadingIndicator.decorators = [
        { type: Component, args: [{
                    selector: 'loading-indicator',
                    template: "<div class=\"loader loader-small\"></div>"
                },] },
    ];
    /** @nocollapse */
    LoadingIndicator.ctorParameters = [];
    return LoadingIndicator;
}());
export var LoadingComponent = (function () {
    function LoadingComponent(val) {
        this.loading = val;
    }
    LoadingComponent.prototype.standby = function () {
        this.loading = true;
    };
    LoadingComponent.prototype.ready = function () {
        this.loading = false;
    };
    return LoadingComponent;
}());
//# sourceMappingURL=loading.component.js.map
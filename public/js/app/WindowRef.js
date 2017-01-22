import { Injectable } from '@angular/core';
function _window() {
    // return the global native browser window object
    return window.location.protocol + "//" + window.location.host;
}
export var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "domain", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WindowRef.ctorParameters = [];
    return WindowRef;
}());
//# sourceMappingURL=WindowRef.js.map
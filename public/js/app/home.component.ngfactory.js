/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './home.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './home.component.css.shim';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/core/src/security';
var renderType_HomeComponent_Host = null;
var _View_HomeComponent_Host0 = (function (_super) {
    __extends(_View_HomeComponent_Host0, _super);
    function _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent_Host0, renderType_HomeComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('wc-home', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomeComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomeComponent_0_4 = new import3.HomeComponent();
        this._appEl_0.initComponent(this._HomeComponent_0_4, [], compView_0);
        compView_0.create(this._HomeComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_4;
        }
        return notFoundResult;
    };
    _View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._HomeComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomeComponent_Host0;
}(import1.AppView));
function viewFactory_HomeComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent_Host === null)) {
        (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomeComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomeComponentNgFactory = new import9.ComponentFactory('wc-home', viewFactory_HomeComponent_Host0, import3.HomeComponent);
var styles_HomeComponent = [import10.styles];
var renderType_HomeComponent = null;
var _View_HomeComponent0 = (function (_super) {
    __extends(_View_HomeComponent0, _super);
    function _View_HomeComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomeComponent0, renderType_HomeComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'id', 'titleBox');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h1', null);
        this.renderer.setElementAttribute(this._el_4, 'id', 'mainTitle');
        this._text_5 = this.renderer.createText(this._el_4, 'Wage Calculator', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'a', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'btn');
        this.renderer.setElementAttribute(this._el_7, 'id', 'view-btn');
        this._RouterLinkWithHref_7_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import12.Router), this.parentInjector.get(import13.ActivatedRoute), this.parentInjector.get(import14.LocationStrategy));
        this._text_8 = this.renderer.createText(this._el_7, 'Click here to view data', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11
        ], [disposable_0], []);
        return null;
    };
    _View_HomeComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3;
        }
        return notFoundResult;
    };
    _View_HomeComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_1 = this._arr_0('/timesheet');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLinkWithHref_7_3.routerLink = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['routerLink'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._RouterLinkWithHref_7_3.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this._RouterLinkWithHref_7_3.href;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_7, 'href', this.viewUtils.sanitizer.sanitize(import15.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_HomeComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    _View_HomeComponent0.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLinkWithHref_7_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_HomeComponent0;
}(import1.AppView));
export function viewFactory_HomeComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomeComponent === null)) {
        (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Users/Maria_2/Documents/WageCalulator/wc-from-scratch/assets/app/home.component.html', 0, import8.ViewEncapsulation.Emulated, styles_HomeComponent, {}));
    }
    return new _View_HomeComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.component.ngfactory.js.map
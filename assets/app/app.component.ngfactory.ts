/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from './content-pages/timesheet/timesheet.service';
import * as import5 from './content-pages/salary/salary.service';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from './WindowRef';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from './header.component';
import * as import15 from '@angular/router/src/directives/router_outlet';
import * as import16 from './header.component.ngfactory';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
var renderType_AppComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AppComponent_0_4:import3.AppComponent;
  __TimesheetService_0_5:import4.TimesheetService;
  __SalaryService_0_6:import5.SalaryService;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _TimesheetService_0_5():import4.TimesheetService {
    if ((this.__TimesheetService_0_5 == (null as any))) { (this.__TimesheetService_0_5 = new import4.TimesheetService(this.parentInjector.get(import10.Http),this.parentInjector.get(import11.WindowRef))); }
    return this.__TimesheetService_0_5;
  }
  get _SalaryService_0_6():import5.SalaryService {
    if ((this.__SalaryService_0_6 == (null as any))) { (this.__SalaryService_0_6 = new import5.SalaryService(this.parentInjector.get(import10.Http),this.parentInjector.get(import11.WindowRef))); }
    return this.__SalaryService_0_6;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('wc-app',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new import3.AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4,[],compView_0);
    compView_0.create(this._AppComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4; }
    if (((token === import4.TimesheetService) && (0 === requestNodeIndex))) { return this._TimesheetService_0_5; }
    if (((token === import5.SalaryService) && (0 === requestNodeIndex))) { return this._SalaryService_0_6; }
    return notFoundResult;
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import13.ComponentFactory<import3.AppComponent> = new import13.ComponentFactory<import3.AppComponent>('wc-app',viewFactory_AppComponent_Host0,import3.AppComponent);
const styles_AppComponent:any[] = [];
var renderType_AppComponent:import0.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import3.AppComponent> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HeaderComponent_0_4:import14.HeaderComponent;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _RouterOutlet_2_5:import15.RouterOutlet;
  _text_3:any;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'wc-header',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import16.viewFactory_HeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeaderComponent_0_4 = new import14.HeaderComponent();
    this._appEl_0.initComponent(this._HeaderComponent_0_4,[],compView_0);
    compView_0.create(this._HeaderComponent_0_4,[],(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'router-outlet',(null as any));
    this._appEl_2 = new import2.AppElement(2,(null as any),this,this._el_2);
    this._RouterOutlet_2_5 = new import15.RouterOutlet(this.parentInjector.get(import17.RouterOutletMap),this._appEl_2.vcRef,this.parentInjector.get(import18.ComponentFactoryResolver),(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_4; }
    if (((token === import15.RouterOutlet) && (2 === requestNodeIndex))) { return this._RouterOutlet_2_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._RouterOutlet_2_5.ngOnDestroy();
  }
}
export function viewFactory_AppComponent0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Users/Maria_2/Documents/WageCalulator/wc-from-scratch/assets/app/app.component.html',0,import12.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
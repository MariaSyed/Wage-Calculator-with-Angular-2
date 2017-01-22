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
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from './content-pages/content-pages.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from './WindowRef';
import * as import28 from './content-pages/timesheet/timesheet.service';
import * as import29 from './content-pages/salary/salary.service';
import * as import30 from '@angular/common/src/location/location';
import * as import31 from '@angular/router/src/url_tree';
import * as import32 from '@angular/router/src/router_outlet_map';
import * as import33 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import35 from './home.component.ngfactory';
import * as import36 from './content-pages/timesheet/timesheet.component.ngfactory';
import * as import37 from './content-pages/salary/salary.component.ngfactory';
import * as import38 from './app.component.ngfactory';
import * as import39 from '@angular/core/src/application_tokens';
import * as import40 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import41 from '@angular/platform-browser/src/dom/events/key_events';
import * as import42 from '@angular/core/src/zone/ng_zone';
import * as import43 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import44 from '@angular/common/src/location/platform_location';
import * as import45 from '@angular/common/src/location/location_strategy';
import * as import46 from './home.component';
import * as import47 from './content-pages/timesheet/timesheet.component';
import * as import48 from './content-pages/salary/salary.component';
import * as import49 from '@angular/router/src/router';
import * as import50 from '@angular/core/src/console';
import * as import51 from '@angular/core/src/i18n/tokens';
import * as import52 from '@angular/core/src/error_handler';
import * as import53 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import54 from '@angular/platform-browser/src/dom/animation_driver';
import * as import55 from '@angular/core/src/render/api';
import * as import56 from '@angular/core/src/security';
import * as import57 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import58 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import59 from '@angular/http/src/interfaces';
import * as import60 from '@angular/http/src/http';
import * as import61 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import62 from '@angular/router/src/router_config_loader';
import * as import63 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import35.HomeComponentNgFactory,
            import36.TimesheetComponentNgFactory,
            import37.SalaryComponentNgFactory,
            import35.HomeComponentNgFactory,
            import38.AppComponentNgFactory
        ], [import38.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = 'en-US');
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import10.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_16", {
        get: function () {
            if ((this.__ApplicationRef_16 == null)) {
                (this.__ApplicationRef_16 = this._ApplicationRef__15);
            }
            return this.__ApplicationRef_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_17", {
        get: function () {
            if ((this.__Compiler_17 == null)) {
                (this.__Compiler_17 = new import14.Compiler());
            }
            return this.__Compiler_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_18", {
        get: function () {
            if ((this.__APP_ID_18 == null)) {
                (this.__APP_ID_18 = import39._appIdRandomProviderFactory());
            }
            return this.__APP_ID_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_19", {
        get: function () {
            if ((this.__DOCUMENT_19 == null)) {
                (this.__DOCUMENT_19 = import4._document());
            }
            return this.__DOCUMENT_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import40.DomEventsPlugin(),
                    new import41.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import42.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_23", {
        get: function () {
            if ((this.__DomSharedStylesHost_23 == null)) {
                (this.__DomSharedStylesHost_23 = new import17.DomSharedStylesHost(this._DOCUMENT_19));
            }
            return this.__DomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_25", {
        get: function () {
            if ((this.__DomRootRenderer_25 == null)) {
                (this.__DomRootRenderer_25 = new import18.DomRootRenderer_(this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24));
            }
            return this.__DomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_26", {
        get: function () {
            if ((this.__RootRenderer_26 == null)) {
                (this.__RootRenderer_26 = import43._createConditionalRootRenderer(this._DomRootRenderer_25, this.parent.get(import43.NgProbeToken, null)));
            }
            return this.__RootRenderer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_27", {
        get: function () {
            if ((this.__DomSanitizer_27 == null)) {
                (this.__DomSanitizer_27 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_28", {
        get: function () {
            if ((this.__Sanitizer_28 == null)) {
                (this.__Sanitizer_28 = this._DomSanitizer_27);
            }
            return this.__Sanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_29", {
        get: function () {
            if ((this.__ViewUtils_29 == null)) {
                (this.__ViewUtils_29 = new import20.ViewUtils(this._RootRenderer_26, this._APP_ID_18, this._Sanitizer_28));
            }
            return this.__ViewUtils_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_30", {
        get: function () {
            if ((this.__IterableDiffers_30 == null)) {
                (this.__IterableDiffers_30 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_31", {
        get: function () {
            if ((this.__KeyValueDiffers_31 == null)) {
                (this.__KeyValueDiffers_31 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_32", {
        get: function () {
            if ((this.__SharedStylesHost_32 == null)) {
                (this.__SharedStylesHost_32 = this._DomSharedStylesHost_23);
            }
            return this.__SharedStylesHost_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_33", {
        get: function () {
            if ((this.__Title_33 == null)) {
                (this.__Title_33 = new import21.Title());
            }
            return this.__Title_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_34", {
        get: function () {
            if ((this.__BrowserXhr_34 == null)) {
                (this.__BrowserXhr_34 = new import22.BrowserXhr());
            }
            return this.__BrowserXhr_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_35", {
        get: function () {
            if ((this.__ResponseOptions_35 == null)) {
                (this.__ResponseOptions_35 = new import23.BaseResponseOptions());
            }
            return this.__ResponseOptions_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_36", {
        get: function () {
            if ((this.__XSRFStrategy_36 == null)) {
                (this.__XSRFStrategy_36 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_37", {
        get: function () {
            if ((this.__XHRBackend_37 == null)) {
                (this.__XHRBackend_37 = new import24.XHRBackend(this._BrowserXhr_34, this._ResponseOptions_35, this._XSRFStrategy_36));
            }
            return this.__XHRBackend_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_38", {
        get: function () {
            if ((this.__RequestOptions_38 == null)) {
                (this.__RequestOptions_38 = new import25.BaseRequestOptions());
            }
            return this.__RequestOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_39", {
        get: function () {
            if ((this.__Http_39 == null)) {
                (this.__Http_39 = import5.httpFactory(this._XHRBackend_37, this._RequestOptions_38));
            }
            return this.__Http_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_40", {
        get: function () {
            if ((this.__RadioControlRegistry_40 == null)) {
                (this.__RadioControlRegistry_40 = new import26.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_WindowRef_41", {
        get: function () {
            if ((this.__WindowRef_41 == null)) {
                (this.__WindowRef_41 = new import27.WindowRef());
            }
            return this.__WindowRef_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TimesheetService_42", {
        get: function () {
            if ((this.__TimesheetService_42 == null)) {
                (this.__TimesheetService_42 = new import28.TimesheetService(this._Http_39, this._WindowRef_41));
            }
            return this.__TimesheetService_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SalaryService_43", {
        get: function () {
            if ((this.__SalaryService_43 == null)) {
                (this.__SalaryService_43 = new import29.SalaryService(this._Http_39, this._WindowRef_41));
            }
            return this.__SalaryService_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_44", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_44 == null)) {
                (this.__ROUTER_CONFIGURATION_44 = {});
            }
            return this.__ROUTER_CONFIGURATION_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_45", {
        get: function () {
            if ((this.__LocationStrategy_45 == null)) {
                (this.__LocationStrategy_45 = import6.provideLocationStrategy(this.parent.get(import44.PlatformLocation), this.parent.get(import45.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_44));
            }
            return this.__LocationStrategy_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_46", {
        get: function () {
            if ((this.__Location_46 == null)) {
                (this.__Location_46 = new import30.Location(this._LocationStrategy_45));
            }
            return this.__Location_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_47", {
        get: function () {
            if ((this.__UrlSerializer_47 == null)) {
                (this.__UrlSerializer_47 = new import31.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_48", {
        get: function () {
            if ((this.__RouterOutletMap_48 == null)) {
                (this.__RouterOutletMap_48 = new import32.RouterOutletMap());
            }
            return this.__RouterOutletMap_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_49", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_49 == null)) {
                (this.__NgModuleFactoryLoader_49 = new import33.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import33.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_50", {
        get: function () {
            if ((this.__ROUTES_50 == null)) {
                (this.__ROUTES_50 = [[
                        {
                            path: '',
                            component: import46.HomeComponent
                        },
                        {
                            path: 'timesheet',
                            component: import47.TimesheetComponent
                        },
                        {
                            path: 'salaries',
                            component: import48.SalaryComponent
                        },
                        {
                            path: '**',
                            component: import46.HomeComponent
                        }
                    ]
                ]);
            }
            return this.__ROUTES_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_51", {
        get: function () {
            if ((this.__Router_51 == null)) {
                (this.__Router_51 = import6.setupRouter(this._ApplicationRef_16, this._UrlSerializer_47, this._RouterOutletMap_48, this._Location_46, this, this._NgModuleFactoryLoader_49, this._Compiler_17, this._ROUTES_50, this._ROUTER_CONFIGURATION_44));
            }
            return this.__Router_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_52", {
        get: function () {
            if ((this.__ActivatedRoute_52 == null)) {
                (this.__ActivatedRoute_52 = import6.rootRoute(this._Router_51));
            }
            return this.__ActivatedRoute_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_53", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_53 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_53 = [import6.initialRouterNavigation(this._Router_51, this._ROUTER_CONFIGURATION_44)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_53;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import49.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
        this._FormsModule_7 = new import8.FormsModule();
        this._ContentPagesModule_8 = new import9.ContentPagesModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ApplicationInitStatus_13 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER, null));
        this._Testability_14 = new import12.Testability(this.parent.get(import42.NgZone));
        this._ApplicationRef__15 = new import13.ApplicationRef_(this.parent.get(import42.NgZone), this.parent.get(import50.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(import12.TestabilityRegistry, null), this._Testability_14);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_6;
        }
        if ((token === import8.FormsModule)) {
            return this._FormsModule_7;
        }
        if ((token === import9.ContentPagesModule)) {
            return this._ContentPagesModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import51.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import52.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === import12.Testability)) {
            return this._Testability_14;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__15;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_16;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import39.APP_ID)) {
            return this._APP_ID_18;
        }
        if ((token === import53.DOCUMENT)) {
            return this._DOCUMENT_19;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === import54.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_25;
        }
        if ((token === import55.RootRenderer)) {
            return this._RootRenderer_26;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_27;
        }
        if ((token === import56.Sanitizer)) {
            return this._Sanitizer_28;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_29;
        }
        if ((token === import57.IterableDiffers)) {
            return this._IterableDiffers_30;
        }
        if ((token === import58.KeyValueDiffers)) {
            return this._KeyValueDiffers_31;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_32;
        }
        if ((token === import21.Title)) {
            return this._Title_33;
        }
        if ((token === import22.BrowserXhr)) {
            return this._BrowserXhr_34;
        }
        if ((token === import23.ResponseOptions)) {
            return this._ResponseOptions_35;
        }
        if ((token === import59.XSRFStrategy)) {
            return this._XSRFStrategy_36;
        }
        if ((token === import24.XHRBackend)) {
            return this._XHRBackend_37;
        }
        if ((token === import25.RequestOptions)) {
            return this._RequestOptions_38;
        }
        if ((token === import60.Http)) {
            return this._Http_39;
        }
        if ((token === import26.RadioControlRegistry)) {
            return this._RadioControlRegistry_40;
        }
        if ((token === import27.WindowRef)) {
            return this._WindowRef_41;
        }
        if ((token === import28.TimesheetService)) {
            return this._TimesheetService_42;
        }
        if ((token === import29.SalaryService)) {
            return this._SalaryService_43;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_44;
        }
        if ((token === import45.LocationStrategy)) {
            return this._LocationStrategy_45;
        }
        if ((token === import30.Location)) {
            return this._Location_46;
        }
        if ((token === import31.UrlSerializer)) {
            return this._UrlSerializer_47;
        }
        if ((token === import32.RouterOutletMap)) {
            return this._RouterOutletMap_48;
        }
        if ((token === import61.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_49;
        }
        if ((token === import62.ROUTES)) {
            return this._ROUTES_50;
        }
        if ((token === import49.Router)) {
            return this._Router_51;
        }
        if ((token === import63.ActivatedRoute)) {
            return this._ActivatedRoute_52;
        }
        if ((token === import39.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_53;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__15.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map
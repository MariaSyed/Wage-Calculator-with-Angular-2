import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ContentPagesModule } from './content-pages/content-pages.module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        HomeComponent
                    ],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        routing,
                        ContentPagesModule
                    ],
                    providers: [],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map
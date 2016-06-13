"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vincebloise on 6/12/16.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var home_1 = require('./components/home');
var product_1 = require('./components/product');
var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        core_1.Component({
            selector: 'basic-routing',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n        <a [routerLink]=\"['/']\">Home</a>\n        <a [routerLink]=\"['/product']\">Product Details</a>\n        <router-outlet></router-outlet>\n    "
        }),
        router_1.Routes([
            { path: '/', component: home_1.HomeComponent },
            { path: '/product', component: product_1.ProductDetailComponent }
        ])
    ], RootComponent);
    return RootComponent;
}());
platform_browser_dynamic_1.bootstrap(RootComponent, [
    router_1.ROUTER_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);

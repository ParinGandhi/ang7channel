(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view//view.component */ "./src/app/components/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: { reuse: true }
    },
    {
        path: 'view',
        component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
        data: { reuse: true }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet> -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row navbar\">\r\n    <div class=\"col-sm-12\">\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <app-search> </app-search>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-grid> </app-grid>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-waveform></app-waveform>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #337ab7;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvU2FpIEt1bWFyL0Rvd25sb2Fkcy9mb3JidWlsZHMvdHJ1bmsvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtDQ0NIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgICBjb2xvcjogd2hpdGU7XG59IiwiLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _routeReuse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routeReuse */ "./src/app/routeReuse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/waveform/waveform.component */ "./src/app/components/waveform/waveform.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _custom_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-router */ "./src/app/custom-router.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/play-audio/play-audio.component */ "./src/app/components/play-audio/play-audio.component.ts");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ngx_cleave_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-cleave-directive */ "./node_modules/ngx-cleave-directive/fesm5/ngx-cleave-directive.js");
/* harmony import */ var _components_play_play_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/play/play.component */ "./src/app/components/play/play.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"],
                _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_16__["WaveformComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _components_view_view_component__WEBPACK_IMPORTED_MODULE_24__["ViewComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_25__["HistoryComponent"],
                _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_26__["PlayAudioComponent"],
                _components_play_play_component__WEBPACK_IMPORTED_MODULE_31__["PlayComponent"],
                _custom_router__WEBPACK_IMPORTED_MODULE_19__["CustomRouterLink"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_27__["CalendarModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_28__["SidebarModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_29__["SelectDropDownModule"],
                angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_22__["AngularDateTimePickerModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_18__["NvD3Module"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                ngx_cleave_directive__WEBPACK_IMPORTED_MODULE_30__["NgxCleaveDirectiveModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([_components_history_history_component__WEBPACK_IMPORTED_MODULE_25__["HistoryComponent"], _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_26__["PlayAudioComponent"], _components_play_play_component__WEBPACK_IMPORTED_MODULE_31__["PlayComponent"]]),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [{ provide: _services_data_service__WEBPACK_IMPORTED_MODULE_23__["DataService"], useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_23__["DataService"] }, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouteReuseStrategy"], useClass: _routeReuse__WEBPACK_IMPORTED_MODULE_9__["routeReuseStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='isLoggedIn'>\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-md-12\" style=\"padding-bottom: 20px;\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-5\">\r\n        <div class=\" pull-right\">\r\n          Last refreshed: {{lastRefreshed | date:'medium'}}&nbsp;&nbsp;&nbsp;\r\n          <button class=\"btn btn-sm btn-default\" (click)=\"getDashBoardData();\"><span class=\"glyphicon glyphicon-refresh\"\r\n              aria-hidden=\"true\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-md-3 col-md-offset-7\" style=\"padding-bottom: 20px;\">\r\n      <div class=\"pull-right\">\r\n        Last refreshed: {{lastRefreshed | date:'medium'}}&nbsp;&nbsp;&nbsp;\r\n        <button class=\"btn btn-sm btn-default\" (click)=\"getDashBoardData(); getEventsData();\"><span\r\n            class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\" style=\"padding-bottom: 20px;\">\r\n\r\n      <select class=\"form-control\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"dashboardRefreshInverval\" (change)=\"setRefreshInterval(dashboardRefreshInverval)\">\r\n        <option value=\"1\">Select an auto refresh interval...</option>\r\n        <option *ngFor=\"let refreshInterval of refreshIntervals\" [ngValue]=\"refreshInterval\">\r\n          {{refreshInterval.description}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          Channels By Site\r\n          <span class=\"pull-right\">Total: {{lengthOfsites}} </span>\r\n          <!-- <div class=\"card-header-actions pull-right\">\r\n                    Total: {{dashboardData.siteNames.length}}\r\n                  </div> -->\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"chart-wrapper\">\r\n            <nvd3 [options]=\"optionsForTool\" [data]=\"data\"></nvd3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Active/Inactive Channels\r\n              <span class=\"pull-right\"></span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                        Total: {{activeInactiveChartLabels.length}}\r\n                      </div> -->\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"chart-wrapper\">\r\n                <nvd3 [options]=\"options\" [data]=\"chartActivityData\"></nvd3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Enabled/Disabled Channels\r\n              <span class=\"pull-right\"></span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                    Total: {{activeInactiveChartLabels.length}}\r\n                  </div> -->\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"chart-wrapper\">\r\n                <nvd3 [options]=\"options\" [data]=\"chartActiveInactiveData\"></nvd3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          Error Advisory\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <ag-grid-angular style=\"width: 100%; height: 500px; margin-top: 10px;\" class=\"ag-theme-balham\"\r\n            [rowData]=\"eventsRowData\" [columnDefs]=\"eventsColumnDefs\" [enableColResize]=\"true\" [enableSorting]=\"true\"\r\n            [enableFilter]=\"true\" [gridOptions]=\"eventsGridOptions\" [paginationPageSize]=20 [pagination]=\"true\"\r\n            [rowSelection]=\"eventsRowSelection\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Application Details\r\n              <span class=\"pull-right\"></span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                  Total: {{activeInactiveChartLabels.length}}\r\n                </div> -->\r\n            </div>\r\n            <div class=\"panel-body\" style=\"\r\n              height: 540px;\">\r\n              <div>\r\n                <!-- <span *ngFor=\"let item of dashboardData?.applicationAttributes | keyvalue\">\r\n                  <span class=\"blackdot\" style=\"\r\n                      margin-bottom: 0%\"></span> &nbsp;<span><label>{{item?.key}}\r\n                      &nbsp;:</label>\r\n                    {{item?.value}}</span><br><br>\r\n                </span> -->\r\n\r\n                <span *ngFor=\"let item of applicationAttributes\">\r\n                  <span class=\"blackdot\" style=\"margin-bottom: 0%\"></span> &nbsp;<span><label>{{item.title}}:</label>\r\n                    &nbsp;{{item.name}}</span><br><br>\r\n                </span>\r\n\r\n\r\n                <!-- <span class=\"blackdot\" style=\"\r\n                margin-bottom: -1%\"></span> &nbsp;<span><label>Application Name\r\n                    &nbsp;:</label>\r\n                  {{dashboardData.applicationAttributes.ApplicationName}}</span><br><br>\r\n                <span class=\"blackdot\" style=\"\r\n        margin-bottom: -1%\"></span> &nbsp;<span><label>Application Version\r\n                    &nbsp;:</label>\r\n                  {{dashboardData.applicationAttributes.ApplicationVersion}}</span><br><br>\r\n                <span class=\"blackdot\" style=\"\r\n        margin-bottom: -1%\"></span> &nbsp;<span><label>OSVersion &nbsp;:</label>\r\n                  {{dashboardData.applicationAttributes.OSVersion}}</span><br><br>\r\n                <span class=\"blackdot\" style=\"\r\n        margin-bottom: -1%\"></span> &nbsp;<span><label>Application State&nbsp;:</label>\r\n                  {{dashboardData.applicationAttributes.ApplicationState}}</span><br><br> -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, sharedService, toastr, router) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this.router = router;
        this.rowSelection = "multiple";
        this.appAttributes = {
            ApplicationVersion: null,
            OSVersion: null,
            ApplicationState: null,
            ApplicationName: null,
        };
        this.chartData = [];
        this.activeInactiveData = [];
        this.activityData = [];
        this.chartActiveInactiveData = [];
        this.chartActivityData = [];
        this.appAttributesChartData = [];
        this.isLoggedIn = false;
        this.activeChannelsBySite = [];
        this.applicationAttributes = [];
        this.refreshIntervals = [
            {
                description: "1 minute",
                value: 60000
            },
            {
                description: "5 minutes",
                value: 300000
            },
            {
                description: "30 minutes",
                value: 1800000
            },
            {
                description: "1 hour",
                value: 3600000
            }
        ];
        this.activeInactiveChartLabels = ['Enabled', 'Disabled'];
        this.activityLabels = ['Active', 'Inactive'];
        this.eventsColumnDefs = [
            // { headerCheckboxSelection: true, checkboxSelection: true, width: 30 },
            { headerName: 'Status', field: 'category' },
            { headerName: 'Name', field: 'name' },
            { headerName: 'Type', field: 'eventType' },
            { headerName: 'Event', field: 'eventResponse' },
            { headerName: 'Time', field: 'eventTime' }
        ];
        this.getDashBoardData = function () {
            var _this = this;
            if (!this.optionsForTool) {
                this.optionsForTool = {
                    chart: {
                        type: 'discreteBarChart',
                        height: 750,
                        margin: {
                            top: 20,
                            right: 20,
                            bottom: 50,
                            left: 55
                        },
                        x: function (d) { return d.label; },
                        y: function (d) { return d.value; },
                        tooltip: {
                            x: function (d) {
                                return d.siteNames + ' ' + '[' + d.siteCount + ']';
                            },
                            contentGenerator: function (key) {
                                return tooltip(key);
                            },
                            hideDelay: 0
                        },
                        noData: 'No data available',
                        showValues: true,
                        duration: 500,
                        xAxis: {
                            axisLabel: 'CHANNELS'
                        },
                        discretebar: {
                            dispatch: {
                                elementClick: function (e) {
                                    _this.redirectToRecordings(e);
                                }
                            }
                        },
                        groupSpacing: 0.3,
                        yAxis: {
                            axisLabel: 'SITES',
                            axisLabelDistance: -6,
                            tickFormat: function (d) {
                                if ((d * 10) % 10 === 0) {
                                    return d3.format('0f')(d);
                                }
                                else {
                                    return '';
                                }
                            }
                            //tickValues:([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200]),
                        }
                    }
                };
            }
            var activeCount;
            var maxCount;
            this.dashboardData = {};
            this.chartData = [];
            this.appAttributesChartData = [];
            this.activeInactiveData = [];
            this.activityData = [];
            this.applicationAttributes = [];
            this.dataService.getDashboardData().subscribe(function (response) {
                _this.lastRefreshed = new Date();
                _this.dashboardData = response;
                for (var key in _this.dashboardData.applicationAttributes) {
                    if (_this.dashboardData.applicationAttributes.hasOwnProperty(key)) {
                        var appProp = {
                            title: key,
                            name: _this.dashboardData.applicationAttributes[key]
                        };
                        _this.applicationAttributes.push(appProp);
                    }
                }
                activeCount = _this.dashboardData.activeChannelsBySite;
                maxCount = Math.max.apply(Math, _this.dashboardData.siteCount);
                _this.optionsForTool.chart['valueFormat'] = function (d) {
                    return d3.format('0f')(d);
                };
                _this.lengthOfsites = _this.dashboardData.siteNames.length;
                if (_this.dashboardData.siteNames.length <= 5 && _this.dashboardData.siteNames.length != 0) {
                    _this.optionsForTool.chart['valueFormat'] = function (d) {
                        if (d != 0) {
                            return d3.format('0f')(d);
                        }
                    };
                    _this.setDummyData();
                }
                for (var i = 0; i < _this.dashboardData.siteNames.length; i++) {
                    var obj = {
                        label: _this.dashboardData.siteNames[i],
                        value: _this.dashboardData.siteCount[i]
                    };
                    _this.chartData.push(obj);
                }
                var appAttributes = {
                    siteNames: _this.dashboardData.applicationAttributes.ApplicationName,
                    siteCount: 1
                };
                _this.appAttributesChartData.push(appAttributes);
                _this.chartAppAttributesChartData = _this.appAttributesChartData;
                _this.data = [
                    {
                        values: _this.chartData
                    }
                ];
                var availableData = {
                    siteNames: _this.activeInactiveChartLabels[0],
                    siteCount: _this.dashboardData.totalNumberofAvaiableChannels
                };
                var unAvailableData = {
                    siteNames: _this.activeInactiveChartLabels[1],
                    siteCount: _this.dashboardData.totalNumberofChannels - _this.dashboardData.totalNumberofAvaiableChannels
                };
                var activeData = {
                    siteNames: _this.activityLabels[0],
                    siteCount: _this.dashboardData.totalNumberofActiveChannels
                };
                var inActiveData = {
                    siteNames: _this.activityLabels[1],
                    siteCount: _this.dashboardData.totalNumberofChannels - _this.dashboardData.totalNumberofActiveChannels
                };
                _this.activeInactiveData.push(availableData);
                _this.activeInactiveData.push(unAvailableData);
                _this.activityData.push(activeData);
                _this.activityData.push(inActiveData);
                _this.chartActivityData = _this.activityData;
                _this.chartActiveInactiveData = _this.activeInactiveData;
                _this.optionsForTool.chart["yDomain"] = ([0, maxCount]);
            });
            var tooltip = function (hoveredData) {
                var toolTipView = '<button type="button" id="hideon" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : 0  </button>';
                for (var _i = 0, activeCount_1 = activeCount; _i < activeCount_1.length; _i++) {
                    var appViewState = activeCount_1[_i];
                    if (appViewState.siteName == hoveredData.data.label) {
                        toolTipView = '<button type="button" id="hideon" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : ' + appViewState.count + ' </button>';
                    }
                }
                return toolTipView;
            };
            if (!this.options) {
                this.options = {
                    chart: {
                        type: 'pieChart',
                        height: 325,
                        x: function (d) {
                            return d.siteNames + ' ' + '[' + d.siteCount + ']';
                        },
                        y: function (d) {
                            return d.siteCount;
                        },
                        showLabels: true,
                        noData: 'No data available',
                        duration: 500,
                        tooltip: {
                            enabled: false
                        },
                        labelThreshold: 0.01,
                        labelSunbeamLayout: false
                    }
                };
            }
            this.getEventsData();
        };
        this.getEventsData = function () {
            var _this = this;
            this.dataService.getErrorAdvisoryData().subscribe(function (response) {
                _this.eventsRowData = response;
                for (var i = 0; i < _this.eventsRowData.length; i++) {
                    _this.eventsRowData[i].eventTime = _this.calculateJulianDay(_this.eventsRowData[i].lastModifiedTs);
                }
                // setInterval(() => {
                //   this.getEventsData();
                // }, 300000)
            });
        };
        this.calculateJulianDay = function (lastModTime) {
            var myDate = lastModTime;
            var year = myDate.substring(0, 4);
            var month = myDate.substring(5, 7);
            var day = myDate.substring(8, 10);
            var hour = myDate.substring(11, 13);
            var minutes = myDate.substring(14, 16);
            var seconds = myDate.substring(17, 19);
            var currentYear = new Date().getFullYear();
            var dayOne = new Date(currentYear, 0, 1);
            var eventDate = new Date(year, month - 1, day);
            var timeDiff = Math.abs(eventDate.getTime() - dayOne.getTime());
            var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
            if (dayDifference < 100) {
                if (dayDifference < 10) {
                    dayDifference = "00" + dayDifference;
                }
                else {
                    dayDifference = "0" + dayDifference;
                }
            }
            var finalOutput = dayDifference.toString() + ":" + year + ":" + hour + minutes + seconds;
            return finalOutput;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedLoginResource.subscribe(function (data) {
            _this.isLoggedIn = data;
            if (_this.isLoggedIn) {
                _this.getDashBoardData();
                _this.setRefreshInterval({
                    description: "5 minutes",
                    value: 300000
                });
                _this.dashboardRefreshInverval = _this.refreshIntervals[1];
            }
        });
        // this.sharedService.sharedDataSource.subscribe(data => {
        //   this.getDashBoardData();
        // });
        this.sharedService.refreshDashboardData.subscribe(function (data) {
            if (data) {
                _this.getDashBoardData();
            }
        });
        if (!this.isLoggedIn) {
            setTimeout(function () {
                document.getElementById('login').click();
            }, 500);
        }
        this.getEventsData();
        this.dummySites = ["   ",
            "",
            " ",
            "   ",
            "    ",
            "      "];
    };
    DashboardComponent.prototype.setDummyData = function () {
        for (var k = 0; k <= this.dummySites.length - 1; k++) {
            this.dashboardData.siteNames.push(this.dummySites[k]);
            this.dashboardData.siteCount.push("0");
        }
    };
    DashboardComponent.prototype.setRefreshInterval = function (refreshInterval) {
        var _this = this;
        if (this.dashboardInterval) {
            clearInterval(this.dashboardInterval);
        }
        this.dashboardInterval = setInterval(function () {
            _this.getDashBoardData();
            _this.getEventsData();
        }, refreshInterval.value);
        if (refreshInterval.value !== 9999999) {
            this.toastr.success('Successfully set auto refresh to ' + refreshInterval.description, '', {
                timeOut: 10000
            });
        }
        else {
            this.toastr.success('Successfully cancelled auto refresh.', '', {
                timeOut: 10000
            });
        }
    };
    DashboardComponent.prototype.redirectToRecordings = function (a) {
        var _this = this;
        this.dataService.getSearchData('siteName=' + a.data.label)
            .subscribe(function (rowData) {
            console.log('Table response: %o', rowData);
            _this.sharedService.setSearchFlag(false);
            _this.sharedService.changeDataSource(rowData);
            _this.sharedService.setDashboardSearch(true);
            document.getElementById('hideon').remove();
            _this.router.navigateByUrl('/view');
            _this.toastr.success('Successfully returned ' + rowData.length + ' rows', '', {
                timeOut: 10000
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-sidebar [(visible)]=\"display\" [style]=\"{width:'350px'}\">\r\n  <!-- <app-search (searchData)=\"setSearchData($event)\"> </app-search> -->\r\n  <app-search (searchData)=\"setSearchData($event);\"> </app-search>\r\n</p-sidebar>\r\n<div class=\"row\" style=\"margin-top: 25px;\">\r\n  <!-- <div class=\"col-md-12\"> -->\r\n  <div class=\"col-sm-6\">\r\n    <button class=\"btn btn-success\" (click)=\"setSearchFlag()\"><span class=\"glyphicon glyphicon-search\"\r\n        aria-hidden=\"true\"></span>&nbsp;Search</button>\r\n    <button *ngIf=\"loggedIn && !guestUser\" class=\"btn btn-success\" (click)=\"exportToCsv();\"\r\n      style=\"margin-left: 1%;\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span>&nbsp;Export to\r\n      CSV</button>\r\n    <button *ngIf=\"!guestUser\" class=\"btn btn-success\" (click)=\"archiveChannels();\" style=\"margin-left: 1%;\"><span\r\n        class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span>&nbsp;&nbsp;Archive channels\r\n    </button>\r\n  </div>\r\n  <!-- <div class=\"col-sm-2\">\r\n    <button *ngIf=\"loggedIn\" class=\"btn btn-success\" (click)=\"exportToCsv();\"><span\r\n        class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span>&nbsp;Export to CSV</button>\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-success\" (click)=\"archiveChannels();\"><span class=\"glyphicon glyphicon-folder-open\"\r\n        aria-hidden=\"true\"></span>&nbsp;&nbsp;Archive channels\r\n    </button>\r\n  </div> -->\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"pull-right\">\r\n      Last refreshed: {{lastRefreshed | date:'medium'}}&nbsp;&nbsp;&nbsp;\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"getGridData();\"><span class=\"glyphicon glyphicon-refresh\"\r\n          aria-hidden=\"true\"></span></button>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"col-md-2\">\r\n    <select class=\"form-control\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n      [(ngModel)]=\"gridRefreshInterval\" (change)=\"setRefreshInterval(gridRefreshInterval)\">\r\n      <option value=\"1\">Select an auto refresh interval...</option>\r\n      <option *ngFor=\"let refreshInterval of refreshIntervals\" [ngValue]=\"refreshInterval\">\r\n        {{refreshInterval.description}}</option>\r\n    </select>\r\n  </div> -->\r\n  <!-- </div> -->\r\n</div>\r\n<ag-grid-angular style=\"width: 100%; height: 500px; margin-top: 10px;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n  [columnDefs]=\"columnDefs\" [enableColResize]=\"true\" [enableSorting]=\"true\" [enableFilter]=\"true\"\r\n  [gridOptions]=\"gridOptions\" [paginationPageSize]=20 [pagination]=\"true\" [rowSelection]=\"rowSelection\">\r\n</ag-grid-angular>\r\n<div *ngIf=\"showPlayer\" class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-waveform [metaDataChannelName]=channelName></app-waveform>\r\n  </div>\r\n</div>\r\n\r\n<!-- History Modal -->\r\n<ngx-smart-modal #historyModal customClass=\"nsm-dialog-animation-ttb historyModal\" identifier=\"historyModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">History</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <button class=\"btn btn-success widthUnset btn-block\" (click)=\"exportHistoryToCsv();\"><span\r\n            class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span>&nbsp;Export to CSV</button>\r\n      </div>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height: 500px; margin-top: 40px;\" class=\"ag-theme-balham\"\r\n      [rowData]=\"historyRowData\" [columnDefs]=\"historyColumnDefs\" [gridOptions]=\"historyGridOptions\"\r\n      [enableColResize]=\"true\" [enableSorting]=\"true\" [enableFilter]=\"true\" [paginationPageSize]=20 [pagination]=\"true\">\r\n    </ag-grid-angular>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"historyModal.close()\">Close</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End History Modal -->"

/***/ }),

/***/ "./src/app/components/grid/grid.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nsm-content {\n  width: inherit;\n}\n.historyModal {\n  width: 213%;\n  margin-left: 20%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL0M6L1VzZXJzL1NhaSBLdW1hci9Eb3dubG9hZHMvZm9yYnVpbGRzL3RydW5rL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtDQ0NIO0FEQ0M7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5zbS1jb250ZW50e1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICB9XG4gIC5oaXN0b3J5TW9kYWx7XG4gIHdpZHRoOiAyMTMlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB9IiwiLm5zbS1jb250ZW50IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uaGlzdG9yeU1vZGFsIHtcbiAgd2lkdGg6IDIxMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../play-audio/play-audio.component */ "./src/app/components/play-audio/play-audio.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import sampleJson from './sampleJson.json';
var GridComponent = /** @class */ (function () {
    function GridComponent(dataService, sharedService, cdref, ngxSmartModalService, zone, toastr) {
        // this.frameworkComponents = {
        //   historyComponent: HistoryComponent
        // };
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.ngxSmartModalService = ngxSmartModalService;
        this.zone = zone;
        this.toastr = toastr;
        this.loggedIn = false;
        this.rowSelection = "multiple";
        this.showPlayer = false;
        this.channelName = [];
        this.url = "assets/sample.wav";
        this.display = false;
        this.gridRefreshInterval = 1;
        this.refreshIntervals = [
            {
                description: "1 minute",
                value: 60000
            },
            {
                description: "5 minutes",
                value: 300000
            },
            {
                description: "30 minutes",
                value: 1800000
            },
            {
                description: "1 hour",
                value: 3600000
            },
            {
                description: "Cancel auto refresh",
                value: 9999999
            }
        ];
        this.enabledRenderer = function (params) {
            var result;
            if (params.value === "TRUE") {
                result = "Yes";
            }
            else if (params.value === "FALSE") {
                result = "No";
            }
            return "<span>" + result + "</span>";
        };
        this.columnDefs = [
            { headerCheckboxSelection: true, checkboxSelection: true, width: 40 },
            // {
            //   headerName: 'Play', cellRendererFramework: PlayAudioComponent, cellRendererParams: {
            //     onClick: this.sample.bind(this),
            //     label: 'Click 1'
            //   }, width: 75
            // },
            {
                headerName: 'Channel Name', field: 'channelName', cellRendererFramework: _play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_3__["PlayAudioComponent"], cellRendererParams: {
                    onClick: this.sample.bind(this)
                },
                width: 200
            },
            { headerName: 'Site ID', field: 'stndSite.nm' },
            { headerName: 'Classification', field: 'standardClassification.nm' },
            { headerName: 'Role ID', field: 'stndRole.nm' },
            { headerName: "Originated IP", field: "mediaOriginatedIp", hide: true },
            { headerName: "Originated Port", field: "mediaOriginatedPort", hide: true },
            { headerName: "Enabled", field: "enableIn", cellRenderer: this.enabledRenderer },
            {
                headerName: 'History', cellRendererFramework: _history_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"], cellRendererParams: {
                    onClick: this.getHistory.bind(this),
                    label: 'Click 1',
                    width: 75
                },
            }
        ];
        this.historyColumnDefs = [
            { headerName: 'Channel Name', field: 'channelName', width: 200 },
            { headerName: 'Site ID', field: 'stndSiteDescriptionTx', width: 200 },
            { headerName: "Originated IP", field: "mediaOriginatedIp", width: 200 },
            { headerName: "Originated Port", field: "mediaOriginatedPort", width: 200 },
            { headerName: 'Classification', field: 'classification', width: 200 },
            { headerName: 'Role ID', field: 'stndRoleDescriptionTx', width: 200 },
            { headerName: 'Last modified user', field: 'lastModifiedUserId', width: 200 },
            {
                headerName: 'Action', field: 'actionTaken', cellRenderer: function (data) {
                    if (data.value === 'H') {
                        return "History";
                    }
                    else if (data.value === 'A') {
                        return "Archive";
                    }
                    else {
                        return "";
                    }
                }
            },
            {
                headerName: 'Last modified time', type: 'date', field: 'lastModifiedTs', cellRenderer: function (data) {
                    return data.value ? (new Date(data.value)).toLocaleDateString() + ' ' + (new Date(data.value)).toLocaleTimeString() : '';
                }
            }
        ];
    }
    GridComponent.prototype.getHistory = function (e) {
        var _this = this;
        this.channelNameForExport = e.rowData.channelName;
        this.dataService.getHistoryData(e.rowData.id)
            .subscribe(function (response) {
            // this.ngxSmartModalService.setModalData(response, 'historyModal');
            _this.historyRowData = response;
            // this.historyRowData = sampleJson;
            _this.ngxSmartModalService.getModal('historyModal').open();
        }, function (error) {
            console.log(error);
            // this.openHistoryModal(error, e, false) 
        });
    };
    ;
    GridComponent.prototype.exportToCsv = function () {
        var _this = this;
        var params = {
            columnKeys: ["channelName", "stndSite.nm", "mediaOriginatedIp", "mediaOriginatedPort", "standardClassification.nm", "stndRole.nm", "enableIn"],
            fileName: 'AudioExport.csv',
            suppressQuotes: true,
            processHeaderCallback: function (params) {
                console.clear();
                console.log(params);
                console.log(params.column.getColDef().headerName);
                if (params.column.getColDef().field === "channelName") {
                    return "Channel Name";
                }
                else {
                    return params.column.getColDef().headerName;
                }
                // return params.column.getColDef().headerName.toUpperCase();
            },
            processCellCallback: function (params) {
                if (params.column.getColDef().field === "enableIn") {
                    if (params.value === "TRUE") {
                        return "Yes";
                    }
                    else if (params.value === "FALSE") {
                        return "No";
                    }
                }
                else {
                    return params.value;
                }
            }
        };
        this.gridOptions.api.exportDataAsCsv(params);
        var event = {
            category: "Success",
            name: window.sessionStorage.getItem("user-id"),
            descriptionText: "Export recordings",
            eventResponse: 'Export of channel list',
            eventType: "Export",
            startTs: new Date(),
            lastModifiedUserId: window.sessionStorage.getItem("user-id"),
            lastModifiedTs: new Date()
        };
        this.dataService.createEvent(event)
            .subscribe(function (successResponse) {
            _this.sharedService.changeDashboardData(true);
            console.log(successResponse);
        });
    };
    ;
    GridComponent.prototype.exportHistoryToCsv = function () {
        var _this = this;
        var params = {
            columnKeys: ["channelName", "stndSiteDescriptionTx", "mediaOriginatedIp", "mediaOriginatedPort", "classification", "stndRoleDescriptionTx", "actionTaken", "lastModifiedUserId", "lastModifiedTs"],
            fileName: 'AudioHistoryExport-' + this.channelNameForExport + '.csv',
            suppressQuotes: true,
            processCellCallback: function (params) {
                if (params.column.getColDef().field === "lastModifiedTs") {
                    var lastModTsExport = " " + Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(params.value), "M/d/yyyy h:mm:ss a", "en-US");
                    // var lastModTsExport = " " + formatDate(new Date(params.value).getTime(), "short", "en-US");
                    console.log(lastModTsExport);
                    console.log(lastModTsExport.toString());
                    return lastModTsExport.toString();
                }
                else if (params.column.getColDef().field === "actionTaken") {
                    if (params.value === "H") {
                        return "History";
                    }
                    else if (params.value === "A") {
                        return "Archive";
                    }
                    else {
                        return "";
                    }
                }
                else {
                    return params.value;
                }
            }
        };
        this.historyGridOptions.api.exportDataAsCsv(params);
        var event = {
            category: "Success",
            name: window.sessionStorage.getItem("user-id"),
            descriptionText: "Export channel",
            eventResponse: 'Export for channel: ' + this.channelNameForExport,
            eventType: "Export",
            startTs: new Date(),
            lastModifiedUserId: window.sessionStorage.getItem("user-id"),
            lastModifiedTs: new Date()
        };
        this.dataService.createEvent(event)
            .subscribe(function (successResponse) {
            _this.sharedService.changeDashboardData(true);
            console.log(successResponse);
        });
    };
    ;
    GridComponent.prototype.archiveChannels = function () {
        var _this = this;
        var selectedRows = this.gridOptions.api.getSelectedRows();
        var channelList = [];
        for (var i = 0; i < selectedRows.length; i++) {
            channelList.push(selectedRows[i].channelName);
        }
        console.log(channelList);
        if (channelList.length > 0) {
            this.dataService.archiveChannels(channelList).subscribe(function (channel) {
                console.log(channel);
                _this.toastr.success('Successfully archived selected channels', '', {
                    timeOut: 10000
                });
            });
        }
        else {
            this.toastr.error('Please select at least one channel to archive', '', {
                timeOut: 10000
            });
        }
    };
    ;
    GridComponent.prototype.sample = function (rowData) {
        this.channelName.push(rowData.rowData.channelName);
        this.channelName = this.channelName.slice();
        this.showPlayer = true;
    };
    ;
    GridComponent.prototype.getSearchResults = function (data) {
        this.rowData = data;
    };
    GridComponent.prototype.ngOnChanges = function () {
        this.rowData = this.recObj;
    };
    GridComponent.prototype.getGridData = function () {
        var _this = this;
        this.dataService.getChannelList().subscribe(function (rowData) {
            _this.lastRefreshed = new Date();
            _this.rowData = rowData;
            _this.showPlayer = false;
            //this.sharedService.isDashboardSearch.next(false);
            _this.toastr.success('', 'Retrieved ' + rowData.length + ' records', {
                timeOut: 10000
            });
        });
    };
    GridComponent.prototype.setSearchFlag = function () {
        this.sharedService.setSearchFlag(true);
    };
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedDataSource.subscribe(function (data) {
            _this.rowData = data;
            _this.showPlayer = false;
        });
        this.sharedService.currentFlag.subscribe(function (data) { return _this.display = data; });
        this.sharedService.sharedLoginResource.subscribe(function (data) {
            _this.loggedIn = data;
            console.log(data);
        });
        this.sharedService.dashboardSearch.subscribe(function (data) {
            if (!data) {
                _this.getGridData();
            }
        });
        this.sharedService.currentGuestUser.subscribe(function (data) {
            _this.guestUser = data;
        });
        this.gridOptions = {
            onGridReady: function () {
                _this.gridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 35
        };
        this.historyGridOptions = {
            onGridReady: function () {
                _this.historyGridOptions.api.sizeColumnsToFit();
            },
            rowHeight: 35
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('receivedOb'),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "recObj", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.less */ "./src/app/components/grid/grid.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.agInit = function (params) {
        this.params = params;
        this.label = this.params.label || null;
    };
    HistoryComponent.prototype.onClick = function ($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            var params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    };
    HistoryComponent.prototype.refresh = function (params) {
        return true;
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: "<button class=\"btn btn-default btn-sm\" style=\"margin-bottom: 6px;\" (click)=\"onClick($event)\"> History</button>"
            //template: `<button type="button" (click)="onClick($event)">{{label}}</button>`,
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-brand\">vEAS</div>\r\n<button class=\"btn btn-link navbarLinks\" customRouterLink=\"/dashboard\">Dashboard</button>\r\n<button class=\"btn btn-link navbarLinks\" customRouterLink=\"/view\">Recordings</button>\r\n<button class=\"btn btn-link navbarLinks\" *ngIf=\"loggedIn && !guestUser\"\r\n  (click)=\"ngxSmartModalService.getModal('manageChannelModal').open()\">Manage\r\n  Channels</button>\r\n<button class=\"btn btn-link navbarLinks\" *ngIf=\"loggedIn && !guestUser\"\r\n  (click)=\"ngxSmartModalService.getModal('uploadFileModal').open()\">Upload\r\n  File</button>\r\n<button class=\"btn btn-link navbarLinks\" *ngIf=\"loggedIn\" (click)=\"openHelp()\">Help</button>\r\n<button class=\"btn btn-link navbarLinks pull-right\" *ngIf=\"!loggedIn\" id=\"login\"\r\n  (click)=\"ngxSmartModalService.getModal('loginModal').open()\">Sign\r\n  In</button>\r\n<button class=\"btn btn-link navbarLinks pull-right\" *ngIf=\"loggedIn\" (click)=\"checkLogOut(false);\">Sign Out</button>\r\n\r\n<!-- Manage channel modal -->\r\n<ngx-smart-modal #manageChannelModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"manageChannelModal\" [closable]='false'>\r\n  <div class=\"modal-header\">\r\n\r\n    <div class=\"col-md-12  modal-title\">\r\n      <div class=\"col-md-6 pull-left\">\r\n        <h4>Manage channels</h4>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\" pull-right\">\r\n          <button style=\"font-size: 19px;\r\n            border: none;\r\n            background: none; \" (click)=\"clearChannelInfo(); manageChannelModal.close()\"> <i\r\n              class=\"fa fa-times-thin fa-2x\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <!-- <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"availableChannels\">Search channels</label>\r\n        <input class=\"form-control\" type=\"text\" list=\"manageChannel\" [(ngModel)]='searchText'\r\n          (ngModelChange)=\"onChannelChanged($event)\">\r\n        \r\n        <datalist id=\"manageChannel\">\r\n\r\n          <option *ngFor=\"let channel of channelList\" [ngValue]=\"channel\">{{channel.channelName}}</option>\r\n        </datalist>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"availableChannels\">Search channels</label>\r\n        <select class=\"form-control\" name=\"availableChannels\" id=\"availableChannels\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchText\" (ngModelChange)=\"onChannelChanged($event)\">\r\n          <option value=\"\">Search for a channel...</option>\r\n          <option *ngFor=\"let channel of channelList\" [ngValue]=\"channel\">{{channel.channelName}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"channelName\">Channel name *</label>\r\n        <input class=\"form-control\" required id=\"channelName\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.channelName\" #manageChannel=\"ngModel\" maxlength=\"48\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"siteId\">Site ID *</label>\r\n        <select class=\"form-control\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.stndSite.id\">\r\n          <option value=\"\">Select a site id...</option>\r\n          <option *ngFor=\"let siteId of siteIdList?.results\" [value]=\"siteId.id\">{{siteId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageSiteModal').open()\"><span class=\"glyphicon glyphicon-plus\"\r\n            aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"originatedIp\">Originated IP *</label>\r\n        <input class=\"form-control\" id=\"originatedIp\" type=\"text\" [cleave]=\"{delimiter: '.', blocks: [3,3,3,3]}\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaDataToCreate.mediaOriginatedIp\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"col-sm-10 col-sm-offset-1\">\r\n        <label for=\"originatedIp\">Originated IP *</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"col-sm-2 col-sm-offset-1\">\r\n        <!-- <input class=\"form-control\" id=\"octetOne\" type=\"text\" maxlength=\"3\" (blur)=\"padIp(ipOctetOne, 'ipOctetOne')\" -->\r\n        <input class=\"form-control\" id=\"octetOne\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetOne)\"\r\n          (keyup)=\"checkIpValue(ipOctetOne, 'octetTwo', $event, 'ipOctetOne')\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"ipOctetOne\">\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <input class=\"form-control\" id=\"octetTwo\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetTwo)\"\r\n          (keyup)=\"checkIpValue(ipOctetTwo, 'octetThree', $event, 'ipOctetTwo')\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"ipOctetTwo\">\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <input class=\"form-control\" id=\"octetThree\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetThree)\"\r\n          (keyup)=\"checkIpValue(ipOctetThree, 'octetFour', $event, 'ipOctetThree')\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"ipOctetThree\">\r\n      </div>\r\n      <div class=\"col-sm-2 \">\r\n        <input class=\"form-control\" id=\"octetFour\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetFour)\"\r\n          (keyup)=\"checkIpValue(ipOctetFour, 'octetFour', $event, 'ipOctetFour')\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"ipOctetFour\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"originatedPort\">Originated port *</label>\r\n        <input class=\"form-control\" id=\"originatedPort\" type=\"number\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.mediaOriginatedPort\" [cleave]=\"{blocks: [5]}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"manageClassification\">Classification *</label>\r\n        <select class=\"form-control\" name=\"manageClassification\" id=\"manageClassification\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaDataToCreate.standardClassification.id\">\r\n          <option value=\"\">Select a classification...</option>\r\n          <option *ngFor=\"let classificationId of classificationList?.results\" [value]=\"classificationId.id\">\r\n            {{classificationId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageClassificationModal').open()\"><span\r\n            class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"roleId\">Role ID *</label>\r\n        <select class=\"form-control\" name=\"roleId\" id=\"roleId\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.stndRole.id\">\r\n          <option value=\"\">Select a role id...</option>\r\n          <option *ngFor=\"let roleId of roleIdList?.results\" [value]=\"roleId.id\">{{roleId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageRoleModal').open()\"><span class=\"glyphicon glyphicon-plus\"\r\n            aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"active\">Active *</label>\r\n        <select class=\"form-control\" name=\"activeIndSearch\" id=\"activeIndSearch\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.enableIn\">\r\n          <option value=\"\">Select an active indicator...</option>\r\n          <option value=\"TRUE\">Active</option>\r\n          <option value=\"FALSE\">Inactive</option>\r\n        </select>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"row\" style=\"margin-top: 15px;\">\r\n      <div class=\"input-field col-sm-5 col-sm-offset-1\">\r\n        <label for=\"\">Enable recording? *</label>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <label for=\"manageEnableTrue\" class=\"radio-inline\"><input type=\"radio\" name=\"manageTrue\" [value]=\"TRUE\"\r\n            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaDataToCreate.enableIn\">Yes</label>\r\n        <label for=\"manageEnableFalse\" class=\"radio-inline\"><input type=\"radio\" name=\"manageFalse\" [value]=\"FALSE\"\r\n            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaDataToCreate.enableIn\">No</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"encodingFormat\">Encoding format</label>\r\n        <input class=\"form-control\" id=\"encodingFormat\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.encodingFormat\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearChannelInfo(); manageChannelModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateChannelButton\" (click)=\"addChannel();\">Add\r\n      channel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateChannelButton\" (click)=\"updateChannel();\">Update\r\n      channel</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Manage Channel Modal -->\r\n\r\n<!-- Manage Site Modal -->\r\n<ngx-smart-modal #manageSiteModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"manageSiteModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage site</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteId\">Available sites</label>\r\n        <select class=\"form-control\" name=\"siteid\" id=\"manageSiteid\" [ngModel]=\"stndSite\"\r\n          (ngModelChange)=\"populateSite($event)\">\r\n          <option value=\"\">Select a site...</option>\r\n          <option *ngFor=\"let site of siteIdList?.results\" [ngValue]=\"site\">{{site.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteName\">Site name *</label>\r\n        <input required class=\"form-control\" id=\"siteName\" type=\"text\" [(ngModel)]=\"stndSite.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\" maxlength=\"16\" [cleave]=\"{blocks: [16]}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteDescription\">Site description</label>\r\n        <input required class=\"form-control\" id=\"siteDesription\" type=\"text\" [(ngModel)]=\"stndSite.descriptionTx\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearSite(); manageSiteModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showSiteUpdateButton\" (click)=\"addSite();\">Add site</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showSiteUpdateButton\" (click)=\"updateSite();\">Update\r\n      site</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Site Modal -->\r\n\r\n<!-- Manage Role Modal -->\r\n<ngx-smart-modal #manageRoleModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"manageRoleModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage role</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleId\">Available roles</label>\r\n        <select class=\"form-control\" name=\"roleId\" id=\"manageRoleId\" [ngModel]=\"stndRole\"\r\n          (ngModelChange)=\"populateRole($event)\">\r\n          <option value=\"\">Select a role...</option>\r\n          <option *ngFor=\"let role of roleIdList?.results\" [ngValue]=\"role\">{{role.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleName\">Role name *</label>\r\n        <input required class=\"form-control\" id=\"roleName\" type=\"text\" [(ngModel)]=\"stndRole.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\" maxlength=\"16\" [cleave]=\"{blocks: [16]}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleDescription\">Role description</label>\r\n        <input required class=\"form-control\" id=\"roleDescription\" type=\"text\" [(ngModel)]=\"stndRole.descriptionTx\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearRole(); manageRoleModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateRoleButton\" (click)=\"addRole();\">Add\r\n      role</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateRoleButton\" (click)=\"updateRole();\">Update\r\n      role</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Role Modal -->\r\n\r\n<!-- Manage Classification Modal -->\r\n<ngx-smart-modal #manageClassificationModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"manageClassificationModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage Classification</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classification\">Available classifications</label>\r\n        <select class=\"form-control\" name=\"classification\" id=\"classification\" [ngModel]=\"standardClassification\"\r\n          (ngModelChange)=\"populateClassification($event)\">\r\n          <option value=\"\">Select a classification...</option>\r\n          <option *ngFor=\"let classification of classificationList?.results\" [ngValue]=\"classification\">\r\n            {{classification.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classificationName\">Classification name *</label>\r\n        <input required class=\"form-control\" id=\"classificationName\" type=\"text\" [(ngModel)]=\"standardClassification.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\" maxlength=\"32\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classificationDescription\">Classification description *</label>\r\n        <input required class=\"form-control\" id=\"classificationDescription\" type=\"text\"\r\n          [(ngModel)]=\"standardClassification.descriptionTx\" [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearClassification(); manageClassificationModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateClassificationButton\"\r\n      (click)=\"addClassification();\">Add\r\n      classification</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateClassificationButton\"\r\n      (click)=\"updateClassification();\">Update\r\n      classification</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Classification Modal -->\r\n\r\n<!-- Login Modal -->\r\n<ngx-smart-modal #loginModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\" identifier=\"loginModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Login</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"loginId\">Login ID</label>\r\n        <input class=\"form-control\" id=\"loginId\" type=\"text\" [(ngModel)]=\"credentials.username\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"password\">Password</label>\r\n        <input class=\"form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"credentials.password\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"loginModal.close()\">Close</button>\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkLogin(loginModal)\">Login</button> -->\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"login(loginModal)\">Login</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Login Modal -->\r\n\r\n<!-- Upload File Modal -->\r\n<ngx-smart-modal #uploadFileModal [dismissable]=\"false\" customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"uploadFileModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Import file</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"form-group\">\r\n        <label for=\"file\">Choose File&nbsp;</label>\r\n        <input class=\"form-control-file\" type=\"file\" id=\"file\" (change)=\"setFile($event.target.files)\">\r\n        <ngx-spinner type=\"square-jelly-box\" fullScreen=\"true\">\r\n          <p style=\"color: white\"> Loading... </p>\r\n        </ngx-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"uploadFileModal.close()\">Close</button>\r\n    <button class=\"btn btn-primary\" (click)=\"handleFileInput(uploadFileModal)\">Upload</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Upload File Modal -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalInputHeight {\n  margin-top: 10px;\n}\n.navbarLinks {\n  color: white;\n  text-decoration: none;\n  margin-top: 10px;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzovVXNlcnMvU2FpIEt1bWFyL0Rvd25sb2Fkcy9mb3JidWlsZHMvdHJ1bmsvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0NDQ0g7QURFRDtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0NDQUg7QURHRDtFQUNJLDJCQUFBO0NDREgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxJbnB1dEhlaWdodCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5hdmJhckxpbmtzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59IiwiLm1vZGFsSW5wdXRIZWlnaHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm5hdmJhckxpbmtzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    /** Constructor */
    function NavbarComponent(ngxSmartModalService, spinner, dataService, sharedService, toastr) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this.stndSite = {
            id: null,
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
            notificationThreshold: null,
            startTs: null
        };
        this.stndRole = {
            id: null,
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
            startTs: null
        };
        this.standardClassification = {
            id: null,
            descriptionTx: "",
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: "",
            startTs: null,
            notificationThreshold: null,
        };
        this.easMediaDataToCreate = {
            id: null,
            channelName: "",
            standardClassification: this.standardClassification,
            encodingFormat: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            mediaOriginatedIp: null,
            mediaOriginatedPort: null,
            enableIn: null,
            stndSite: this.stndSite,
            stndRole: this.stndRole
        };
        this.loggedIn = false;
        this.showUpdateChannelButton = false;
        this.showSiteUpdateButton = false;
        this.showUpdateRoleButton = false;
        this.showUpdateClassificationButton = false;
        this.validChannel = true;
        this.toastrTimeOut = 10000;
        this.file = null;
        this.credentials = {
            username: null,
            password: null
        };
        this.keyCodeList = [8, 9, 13, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
        this.guestUser = false;
        this.TRUE = "TRUE";
        this.FALSE = "FALSE";
    }
    NavbarComponent.prototype.getGridData = function () {
        var _this = this;
        this.dataService.getChannelList().subscribe(function (rowData) {
            _this.newGridData = rowData;
            _this.sharedService.changeDataSource(rowData);
            _this.sharedService.refreshDashboard(true);
        });
    };
    NavbarComponent.prototype.addChannel = function () {
        var _this = this;
        this.validationMessage = "";
        this.validationMessage += '<ul>';
        if (this.validateAllInputs() && this.validateChannel()) {
            this.easMediaDataToCreate.mediaOriginatedIp = this.ipOctetOne + '.' + this.ipOctetTwo + '.' + this.ipOctetThree + '.' + this.ipOctetFour;
            this.easMediaDataToCreate.lastModifiedTs = new Date();
            this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
            this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn.toUpperCase();
            this.dataService.addChannel(this.easMediaDataToCreate)
                .subscribe(function (createdChannel) {
                console.log(createdChannel);
                _this.clearChannelInfo();
                _this.getGridData();
                _this.invokeDropdowns();
                //this.sharedService.changeDashboardData(true);
                _this.toastr.success('Successfully added channel', '', {
                    timeOut: _this.toastrTimeOut
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.validationMessage += '</ul>';
            this.toastr.error(this.validationMessage, 'Missing fields', {
                timeOut: this.toastrTimeOut * 2,
                enableHtml: true
            });
        }
    };
    ;
    NavbarComponent.prototype.addSite = function () {
        var _this = this;
        if (this.stndSite.nm) {
            this.stndSite.lastModifiedTs = new Date();
            this.stndSite.lastModifiedUserId = 'testUser';
            this.dataService.addSite(this.stndSite).subscribe(function (success) {
                _this.clearSite();
                _this.toastr.success('Successfully added site', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.dataService.getSiteIdList().subscribe(function (siteIdList) {
                    _this.siteIdList = siteIdList;
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.toastr.error('Site name is mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.checkLogin = function (loginModel) {
        this.loggedIn = true;
        loginModel.close();
        this.sharedService.changeLoginSource(this.loggedIn);
    };
    NavbarComponent.prototype.checkLogOut = function () {
        this.loggedIn = false;
        this.sharedService.changeLoginSource(false);
        setTimeout(function () {
            document.getElementById('login').click();
        }, 500);
    };
    NavbarComponent.prototype.addRole = function () {
        var _this = this;
        if (this.stndRole.nm) {
            this.stndRole.lastModifiedTs = new Date();
            this.stndRole.lastModifiedUserId = 'testUser';
            this.dataService.addRole(this.stndRole).subscribe(function (success) {
                _this.clearRole();
                _this.toastr.success('Successfully added role', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.dataService.getRoleIdList().subscribe(function (roleIdList) {
                    _this.roleIdList = roleIdList;
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.toastr.error('Role name is mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.addClassification = function () {
        var _this = this;
        if (this.standardClassification.nm.trim() && this.standardClassification.descriptionTx) {
            var validClassificationName = true;
            var classificationMatch = /^[a-zA-Z0-9\\\/ ]*$/g;
            if (!this.standardClassification.nm.match(classificationMatch)) {
                this.toastr.error('Classification name can only contain alphanumeric characters, spaces, and slashes.', '', {
                    timeOut: this.toastrTimeOut
                });
                validClassificationName = false;
            }
            if (validClassificationName) {
                this.standardClassification.lastModifiedTs = new Date();
                this.standardClassification.lastModifiedUserId = 'testUser';
                this.dataService.addClassification(this.standardClassification).subscribe(function (success) {
                    _this.clearClassification();
                    _this.toastr.success('Successfully added classification', '', {
                        timeOut: _this.toastrTimeOut
                    });
                    _this.dataService.getClassificationList().subscribe(function (classificationList) {
                        _this.classificationList = classificationList;
                    });
                }, function (error) {
                    _this.toastr.error(error.error.message, '', {
                        timeOut: _this.toastrTimeOut
                    });
                });
            }
        }
        else {
            this.toastr.error('Classification name and description are mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.login = function (loginModal) {
        var _this = this;
        this.dataService.login(this.credentials).subscribe(function (response) {
            _this.checkLogin(loginModal);
            _this.guestUser = response.guestUser;
            _this.sharedService.setGuestUser(_this.guestUser);
            window.sessionStorage.setItem("user-id", _this.credentials.username);
        }, function (error) {
            if (error.status === 401) {
                _this.toastr.error('You are not authorized to access this site.', '', {
                    timeOut: _this.toastrTimeOut
                });
                window.sessionStorage.removeItem("user-id");
            }
        });
    };
    ;
    NavbarComponent.prototype.onChannelChanged = function (productName) {
        console.log(productName);
        // this.populateChannel(this.getSelectedChannelByName(productName));
        this.populateChannel(productName);
    };
    NavbarComponent.prototype.getSelectedChannelByName = function (selectedName) {
        return this.channelList.find(function (product) { return product.channelName === selectedName; });
    };
    NavbarComponent.prototype.populateChannel = function (selectedChannel) {
        //alert(index);
        if (selectedChannel !== "" && selectedChannel !== undefined) {
            this.easMediaDataToCreate.channelName = selectedChannel.channelName;
            this.easMediaDataToCreate.mediaOriginatedIp = selectedChannel.mediaOriginatedIp;
            var ipArray = selectedChannel.mediaOriginatedIp.split('.');
            this.ipOctetOne = ipArray[0];
            this.ipOctetTwo = ipArray[1];
            this.ipOctetThree = ipArray[2];
            this.ipOctetFour = ipArray[3];
            this.easMediaDataToCreate.stndSite.id = selectedChannel.stndSite.id;
            this.easMediaDataToCreate.mediaOriginatedPort = selectedChannel.mediaOriginatedPort;
            this.easMediaDataToCreate.standardClassification = selectedChannel.standardClassification;
            this.easMediaDataToCreate.stndRole.id = selectedChannel.stndRole.id;
            this.easMediaDataToCreate.enableIn = selectedChannel.enableIn;
            this.easMediaDataToCreate.encodingFormat = selectedChannel.encodingFormat;
            this.easMediaDataToCreate.id = selectedChannel.id;
            this.showUpdateChannelButton = true;
        }
        else {
            this.clearChannelInfo();
        }
        // console.log("Populate channel: %o", channel);
        // this.channelName = channel.channelName;
    };
    ;
    NavbarComponent.prototype.populateSite = function (selectedSite) {
        // alert(selectedSite);
        if (selectedSite !== "") {
            this.stndSite.nm = selectedSite.nm;
            this.stndSite.descriptionTx = selectedSite.descriptionTx;
            this.stndSite.id = selectedSite.id;
            this.showSiteUpdateButton = true;
        }
        else {
            this.clearSite();
        }
    };
    ;
    NavbarComponent.prototype.populateRole = function (selectedRole) {
        // alert(selectedSite);
        if (selectedRole !== "") {
            this.stndRole.nm = selectedRole.nm;
            this.stndRole.descriptionTx = selectedRole.descriptionTx;
            this.stndRole.id = selectedRole.id;
            this.showUpdateRoleButton = true;
        }
        else {
            this.clearRole();
        }
    };
    ;
    NavbarComponent.prototype.populateClassification = function (selectedClassification) {
        // alert(selectedSite);
        if (selectedClassification !== "") {
            this.standardClassification.nm = selectedClassification.nm;
            this.standardClassification.descriptionTx = selectedClassification.descriptionTx;
            this.standardClassification.id = selectedClassification.id;
            this.showUpdateClassificationButton = true;
        }
        else {
            this.clearClassification();
        }
    };
    ;
    NavbarComponent.prototype.clearChannelInfo = function () {
        this.searchText = null;
        this.easMediaDataToCreate.channelName = "";
        this.easMediaDataToCreate.mediaOriginatedIp = null;
        this.easMediaDataToCreate.stndSite.id = null;
        this.easMediaDataToCreate.mediaOriginatedPort = null;
        this.easMediaDataToCreate.standardClassification.id = null;
        this.easMediaDataToCreate.stndRole.id = null;
        this.easMediaDataToCreate.enableIn = null;
        this.easMediaDataToCreate.encodingFormat = null;
        this.easMediaDataToCreate.id = null;
        this.showUpdateChannelButton = false;
        this.ipOctetOne = null;
        this.ipOctetTwo = null;
        this.ipOctetThree = null;
        this.ipOctetFour = null;
    };
    ;
    NavbarComponent.prototype.clearSite = function () {
        this.stndSite.nm = "";
        this.stndSite.descriptionTx = "";
        // this.showSiteSuccessMsg = false;
        // this.showSiteAddSuccessMsg = false;
        this.showSiteUpdateButton = false;
        this.stndSite.id = null;
    };
    ;
    NavbarComponent.prototype.clearRole = function () {
        this.stndRole.nm = "";
        this.stndRole.descriptionTx = "";
        this.showUpdateRoleButton = false;
        this.stndRole.id = null;
        // this.showRoleSuccessMsg = false;
        // this.showRoleAddSuccessMsg = false;
    };
    ;
    NavbarComponent.prototype.clearClassification = function () {
        this.standardClassification.nm = "";
        this.standardClassification.descriptionTx = "";
        this.standardClassification.id = null;
        // this.showSiteSuccessMsg = false;
        // this.showSiteAddSuccessMsg = false;
        this.showUpdateClassificationButton = false;
    };
    ;
    NavbarComponent.prototype.updateSite = function () {
        var _this = this;
        if (this.stndSite.nm) {
            this.stndSite.lastModifiedUserId = "testUser";
            this.stndSite.startTs = new Date();
            this.dataService.updateSite(this.stndSite)
                .subscribe(function (site) {
                _this.clearSite();
                _this.toastr.success('Successfully updated site', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.dataService.getSiteIdList()
                    .subscribe(function (siteIdList) {
                    _this.siteIdList = siteIdList;
                }, function (error) {
                    _this.toastr.error(error.error.message, '', {
                        timeOut: _this.toastrTimeOut
                    });
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.toastr.error('Site name is mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.updateRole = function () {
        var _this = this;
        if (this.stndRole.nm) {
            this.stndRole.lastModifiedUserId = "testUser";
            this.stndRole.startTs = new Date();
            this.dataService.updateRole(this.stndRole)
                .subscribe(function (role) {
                _this.clearRole();
                _this.toastr.success('Successfully updated role', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.dataService.getRoleIdList()
                    .subscribe(function (roleIdList) {
                    _this.roleIdList = roleIdList;
                }, function (error) {
                    _this.toastr.error(error.error.message, '', {
                        timeOut: _this.toastrTimeOut
                    });
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.toastr.error('Role name is mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.updateClassification = function () {
        var _this = this;
        if (this.standardClassification.nm.trim() && this.standardClassification.descriptionTx) {
            var validClassificationName = true;
            var classificationMatch = /^[a-zA-Z0-9\\\/ ]*$/g;
            if (!this.standardClassification.nm.match(classificationMatch)) {
                this.toastr.error('Classification name can only contain alphanumeric characters, spaces, and slashes.', '', {
                    timeOut: this.toastrTimeOut
                });
                validClassificationName = false;
            }
            if (validClassificationName) {
                this.standardClassification.lastModifiedUserId = "testUser";
                this.standardClassification.startTs = new Date();
                this.dataService.updateClassification(this.standardClassification)
                    .subscribe(function (role) {
                    _this.clearClassification();
                    _this.toastr.success('Successfully updated classification', '', {
                        timeOut: _this.toastrTimeOut
                    });
                    _this.dataService.getClassificationList()
                        .subscribe(function (classificationList) {
                        _this.classificationList = classificationList;
                    }, function (error) {
                        _this.toastr.error(error.error.message, '', {
                            timeOut: _this.toastrTimeOut
                        });
                    });
                }, function (error) {
                    _this.toastr.error(error.error.message, '', {
                        timeOut: _this.toastrTimeOut
                    });
                });
            }
        }
        else {
            this.toastr.error('Classification name and description are mandatory', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    ;
    NavbarComponent.prototype.updateChannel = function () {
        var _this = this;
        this.validationMessage = "";
        this.validationMessage += '<ul>';
        if (this.validateAllInputs() && this.validateChannel()) {
            this.easMediaDataToCreate.mediaOriginatedIp = this.ipOctetOne + '.' + this.ipOctetTwo + '.' + this.ipOctetThree + '.' + this.ipOctetFour;
            this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
            // this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn.toString().toUpperCase();
            this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn;
            this.dataService.updateChannel(this.easMediaDataToCreate)
                .subscribe(function (response) {
                _this.dataService.getChannelList()
                    .subscribe(function (channelList) {
                    console.log("Channel list: %o", channelList);
                    _this.channelList = channelList;
                    _this.clearChannelInfo();
                    _this.getGridData();
                    _this.invokeDropdowns();
                    _this.toastr.success('Successfully updated channel', '', {
                        timeOut: _this.toastrTimeOut
                    });
                });
            }, function (error) {
                _this.toastr.error(error.error.message, '', {
                    timeOut: _this.toastrTimeOut
                });
            });
        }
        else {
            this.validationMessage += '</ul>';
            this.toastr.error(this.validationMessage, 'Missing mandatory fields', {
                timeOut: this.toastrTimeOut * 2,
                enableHtml: true
            });
        }
    };
    ;
    NavbarComponent.prototype.validateChannel = function () {
        this.validChannel = true;
        if (!this.easMediaDataToCreate.channelName.trim()) {
            this.validChannel = false;
            this.validationMessage += '<li>Channel name</li>';
        }
        if (!this.easMediaDataToCreate.stndSite.id) {
            this.validChannel = false;
            this.validationMessage += '<li>Site Id</li>';
        }
        if (!this.ipOctetOne || !this.ipOctetTwo || !this.ipOctetThree || !this.ipOctetFour) {
            this.validChannel = false;
            this.validationMessage += '<li>Originated IP</li>';
        }
        if (!this.easMediaDataToCreate.mediaOriginatedPort) {
            this.validChannel = false;
            this.validationMessage += '<li>Originated port</li>';
        }
        if (!this.easMediaDataToCreate.standardClassification.id) {
            this.validChannel = false;
            this.validationMessage += '<li>Classification</li>';
        }
        if (!this.easMediaDataToCreate.stndRole.id) {
            this.validChannel = false;
            this.validationMessage += '<li>Role Id</li>';
        }
        if (!this.easMediaDataToCreate.enableIn) {
            this.validChannel = false;
            this.validationMessage += '<li>Enable recording</li>';
        }
        return this.validChannel;
    };
    ;
    NavbarComponent.prototype.setFile = function (files) {
        this.file = files.item(0);
    };
    ;
    NavbarComponent.prototype.handleFileInput = function (modelInstance) {
        var _this = this;
        // this.file = files.item(0);
        this.spinner.show();
        var fd = new FormData();
        fd.append('file', this.file);
        this.dataService.postFile(fd).subscribe(function (data) {
            // do something, if upload success
            _this.spinner.hide();
            modelInstance.close();
            _this.getGridData();
            _this.invokeDropdowns();
            _this.sharedService.changeDashboardData(true);
            _this.toastr.success('Successfully imported file', '', {
                timeOut: _this.toastrTimeOut
            });
        }, function (error) {
            _this.spinner.hide();
            _this.sharedService.changeDashboardData(true);
            console.log(error);
            _this.sharedService.refreshDashboard(true);
            _this.toastr.error('Failed to import file. Please try again later', '', {
                timeOut: _this.toastrTimeOut
            });
        });
    };
    ;
    NavbarComponent.prototype.openHelp = function () {
        window.open('/help');
    };
    ;
    NavbarComponent.prototype.validateAllInputs = function () {
        var inputsAreValid = true;
        if (this.easMediaDataToCreate.mediaOriginatedPort > 65535) {
            this.validationMessage += '<li>Port cannot be larger than 65535</li>';
            // this.toastr.error("Port cannot be larger than 65535");
            inputsAreValid = false;
        }
        // if (parseInt(this.ipOctetOne) > 255 || parseInt(this.ipOctetTwo) > 255 || parseInt(this.ipOctetThree) > 255 || parseInt(this.ipOctetFour) > 255 ||) {
        if (parseInt(this.ipOctetOne) > 255 || parseInt(this.ipOctetTwo) > 255 || parseInt(this.ipOctetThree) > 255 || parseInt(this.ipOctetFour) > 255) {
            // this.toastr.error("Invalid IP address. IP cannot be greater than 255.255.255.255");
            this.validationMessage += '<li> IP address cannot be greater than 255.255.255.255"</li>';
            inputsAreValid = false;
            return inputsAreValid;
        }
        // if (!this.ipOctetOne || !this.ipOctetTwo || !this.ipOctetThree || !this.ipOctetFour) {
        // //  this.toastr.error("Invalid IP address. Please verify and try again");
        //   this.validationMessage += '<li>Invalid IP address. Please verify and try again</li>';
        // }
        return inputsAreValid;
    };
    NavbarComponent.prototype.padIp = function (octet, modelName) {
        var newIpOctet;
        switch (octet.length) {
            case 1:
                newIpOctet = "00" + octet;
                break;
            case 2:
                newIpOctet = "0" + octet;
                break;
            default:
                break;
        }
        if (newIpOctet) {
            switch (modelName) {
                case "ipOctetOne":
                    this.ipOctetOne = newIpOctet;
                    break;
                case "ipOctetTwo":
                    this.ipOctetTwo = newIpOctet;
                    break;
                case "ipOctetThree":
                    this.ipOctetThree = newIpOctet;
                    break;
                case "ipOctetFour":
                    this.ipOctetFour = newIpOctet;
                    break;
                default:
                    break;
            }
        }
    };
    NavbarComponent.prototype.checkIpValue = function (fromTextBox, toTextBox, e, modelName) {
        // if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 9) {
        if (!this.keyCodeList.includes(e.keyCode)) {
            switch (modelName) {
                case "ipOctetOne":
                    this.ipOctetOne = this.ipOctetOne.substring(0, this.ipOctetOne.length - 1);
                    ;
                    break;
                case "ipOctetTwo":
                    this.ipOctetTwo = this.ipOctetTwo.substring(0, this.ipOctetTwo.length - 1);
                    ;
                    break;
                case "ipOctetThree":
                    this.ipOctetThree = this.ipOctetThree.substring(0, this.ipOctetThree.length - 1);
                    ;
                    break;
                case "ipOctetFour":
                    this.ipOctetFour = this.ipOctetFour.substring(0, this.ipOctetFour.length - 1);
                    ;
                    break;
                default:
                    break;
            }
        }
        // var length = fromTextBox.length;
        // if (length === 3) {
        //   document.getElementById(toTextBox).focus();
        // }
    };
    NavbarComponent.prototype.validateIPValue = function (ipValue) {
        if (ipValue < 0 || ipValue > 255) {
            this.toastr.error(ipValue + ' is not a valid IP. Please check the value and try again', '', {
                timeOut: this.toastrTimeOut
            });
        }
    };
    /** On init */
    NavbarComponent.prototype.ngOnInit = function () {
        this.invokeDropdowns();
    };
    NavbarComponent.prototype.invokeDropdowns = function () {
        var _this = this;
        this.sharedService.sharedDataSource.subscribe(function (data) { return _this.newGridData = data; });
        this.dataService.getSiteIdList().subscribe(function (siteIdList) {
            _this.siteIdList = siteIdList;
            _this.sharedService.changeSiteIdData(siteIdList);
        });
        this.dataService.getRoleIdList().subscribe(function (roleIdList) {
            _this.roleIdList = roleIdList;
            _this.sharedService.changeRoleIdData(roleIdList);
        });
        this.dataService.getClassificationList().subscribe(function (classificationList) {
            _this.classificationList = classificationList;
            _this.sharedService.changeClassData(classificationList);
        });
        this.dataService.getChannelList().subscribe(function (channelList) {
            console.log("Channel list: %o", channelList);
            _this.channelList = channelList;
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.less */ "./src/app/components/navbar/navbar.component.less")],
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/play-audio/play-audio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/play-audio/play-audio.component.ts ***!
  \***************************************************************/
/*! exports provided: PlayAudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayAudioComponent", function() { return PlayAudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlayAudioComponent = /** @class */ (function () {
    function PlayAudioComponent() {
    }
    PlayAudioComponent.prototype.agInit = function (params) {
        this.params = params;
        this.label = this.params.label || null;
    };
    PlayAudioComponent.prototype.onClick = function ($event) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            var params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    };
    PlayAudioComponent.prototype.refresh = function (params) {
        return true;
    };
    PlayAudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play-audio',
            template: "<a style=\"margin-bottom: 6px;\" (click)=\"onClick($event)\">{{params.node.data.channelName}}</a>"
            // templateUrl: './play-audio.component.html',
        })
    ], PlayAudioComponent);
    return PlayAudioComponent;
}());



/***/ }),

/***/ "./src/app/components/play/play.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/play/play.component.ts ***!
  \***************************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayComponent = /** @class */ (function () {
    function PlayComponent() {
    }
    PlayComponent.prototype.agInit = function (params) {
        this.params = params;
        this.label = this.params.label || null;
    };
    PlayComponent.prototype.onClick = function ($event, isPlay) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            var params = {
                event: $event,
                rowData: this.params.node.data,
                isPlay: isPlay
                // ...something
            };
            this.params.onClick(params);
        }
    };
    PlayComponent.prototype.refresh = function (params) {
        return true;
    };
    PlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play',
            template: "<button class=\"btn btn-primary\" style=\"margin-bottom: 0.1%;\" (click)=\"onClick($event,true)\"> Play</button> &nbsp; <button class=\"btn btn-primary\" style=\"margin-bottom: 0.1%;\" (click)=\"onClick($event,false)\"> <i class=\"fa fa-download\"></i> Download</button>",
        }),
        __metadata("design:paramtypes", [])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"channelName\" class=\"searchLabel\">Channel name</label>\r\n      <input class=\"form-control input-sm\" id=\"channelName\" type=\"text\" (keydown.enter)=\"submitSearch();\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.channelName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"siteId\" class=\"searchLabel\">Site ID</label>\r\n      <select class=\"form-control input-sm\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"easMediaData.stndSite.id\">\r\n        <option value=\"-1\" disabled>Select a site id...</option>\r\n        <option *ngFor=\"let siteId of siteIdList.results\" [value]=\"siteId.id\">{{siteId.nm}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"originatedIp\" class=\"searchLabel\">Originated IP</label>\r\n      <input class=\"form-control input-sm\" id=\"originatedIp\" type=\"text\" [cleave]=\"{delimiter: '.', blocks: [3,3,3,3]}\"\r\n        (keyup)=\"checkIpValue(easMediaData.mediaOriginatedIp, $event)\" (keydown.enter)=\"submitSearch();\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.mediaOriginatedIp\">\r\n    </div>\r\n  </div> -->\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"col-sm-10 col-sm-offset-1\">\r\n      <label for=\"originatedIp\">Originated IP</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"col-sm-offset-1\" style=\"margin-left: 44px;\">\r\n      <!-- <input class=\"form-control\" id=\"octetOne\" type=\"text\" maxlength=\"3\" (blur)=\"padIp(ipOctetOne, 'ipOctetOne')\" -->\r\n      <div>\r\n        <input class=\"form-control-custom\" id=\"octetOne\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetOne)\"\r\n          (keyup)=\"checkIpValue(ipOctetOne, 'octetTwo', $event, 'ipOctetOne')\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"ipOctetOne\" style=\"width: 18%;\">\r\n        <input class=\"form-control-custom ipOctets\" id=\"octetTwo\" type=\"text\" maxlength=\"3\"\r\n          (blur)=\"validateIPValue(ipOctetTwo)\" (keyup)=\"checkIpValue(ipOctetTwo, 'octetThree', $event, 'ipOctetTwo')\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"ipOctetTwo\">\r\n        <input class=\"form-control-custom ipOctets\" id=\"octetThree\" type=\"text\" maxlength=\"3\"\r\n          (blur)=\"validateIPValue(ipOctetThree)\"\r\n          (keyup)=\"checkIpValue(ipOctetThree, 'octetFour', $event, 'ipOctetThree')\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"ipOctetThree\">\r\n        <input class=\"form-control-custom ipOctets\" id=\"octetFour\" type=\"text\" maxlength=\"3\"\r\n          (blur)=\"validateIPValue(ipOctetFour)\" (keyup)=\"checkIpValue(ipOctetFour, 'octetFour', $event, 'ipOctetFour')\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"ipOctetFour\">\r\n      </div>\r\n    </div>\r\n    <!-- <div>\r\n      <input class=\"form-control\" id=\"octetTwo\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetTwo)\"\r\n        (keyup)=\"checkIpValue(ipOctetTwo, 'octetThree', $event, 'ipOctetTwo')\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"ipOctetTwo\" style=\"width: 50px;\">\r\n    </div> -->\r\n    <!-- <div class=\"col-sm-2\">\r\n      <input class=\"form-control\" id=\"octetThree\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetThree)\"\r\n        (keyup)=\"checkIpValue(ipOctetThree, 'octetFour', $event, 'ipOctetThree')\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"ipOctetThree\">\r\n    </div>\r\n    <div class=\"col-sm-2 \">\r\n      <input class=\"form-control\" id=\"octetFour\" type=\"text\" maxlength=\"3\" (blur)=\"validateIPValue(ipOctetFour)\"\r\n        (keyup)=\"checkIpValue(ipOctetFour, 'octetFour', $event, 'ipOctetFour')\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"ipOctetFour\">\r\n    </div> -->\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"originatedPort\" class=\"searchLabel\">Originated port</label>\r\n      <input class=\"form-control input-sm\" id=\"originatedPort\" type=\"text\" [cleave]=\"{blocks: [5]}\"\r\n        (keydown.enter)=\"submitSearch();\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"easMediaData.mediaOriginatedPort\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"manageClassification\" class=\"searchLabel\">Classification</label>\r\n      <select class=\"form-control input-sm\" name=\"manageClassification\" id=\"manageClassification\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.standardClassification.id\">\r\n        <option value=\"-1\" disabled>Select a classification...</option>\r\n        <option *ngFor=\"let classificationId of classificationList.results\" [value]=\"classificationId.id\">\r\n          {{classificationId.nm}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"roleId\" class=\"searchLabel\">Role ID</label>\r\n      <select class=\"form-control input-sm\" name=\"roleId\" id=\"roleId\" [ngModelOptions]=\"{standalone: true}\"\r\n        [(ngModel)]=\"easMediaData.stndRole.id\">\r\n        <option value=\"-1\" disabled>Select a role id...</option>\r\n        <option *ngFor=\"let roleId of roleIdList.results\" [value]=\"roleId.id\">{{roleId.nm}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"activeIndSearch\" class=\"searchLabel\">Active indicator</label>\r\n      <select class=\"form-control input-sm\" name=\"activeIndSearch\" id=\"activeIndSearch\"\r\n        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.enableIn\">\r\n        <option value=\"default\" disabled>Select an active indicator...</option>\r\n        <option value=\"TRUE\">Active</option>\r\n        <option value=\"FALSE\">Inactive</option>\r\n      </select>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"row\" style=\"margin-top: 10px;\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"\">Enable recording?</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\" col-sm-10 col-sm-offset-1\">\r\n      <label for=\"enabledTrue\" class=\"radio-inline\"><input type=\"radio\" name=\"true\" [value]=\"TRUE\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.enableIn\">Yes</label>\r\n      <label for=\"enabledFalse\" class=\"radio-inline\"><input type=\"radio\" name=\"false\" [value]=\"FALSE\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.enableIn\">No</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 20px;\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"timeRange\">Time range</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"startDate\" class=\"searchLabel\">Begin</label>\r\n      <br>\r\n      <p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"startDate\" ngDefaultControl>\r\n      </p-calendar>\r\n      <!-- <span style=\"margin-left:35px\"></span> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeight\">\r\n    <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n      <label for=\"endDate\" class=\"searchLabel\">End</label>\r\n      <br>\r\n      <p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"endDate\" ngDefaultControl>\r\n      </p-calendar>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row searchHeightBtns\">\r\n    <div class=\"col-sm-5 col-sm-offset-1\">\r\n      <button class=\"btn btn-primary btn-block\" (click)=\"submitSearch();\">Submit</button>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n      <button class=\"btn btn-default btn-block\" (click)=\"clearSearch();\">Clear</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchHeight {\n  margin-top: 5px;\n}\n.searchHeightBtns {\n  margin-top: 15px;\n}\n.form-control-custom {\n  width: 100%;\n  height: 30px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control-custom:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control-custom::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control-custom:-ms-input-placeholder {\n  color: #999;\n}\n.form-control-custom::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control-custom::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n.form-control-custom[disabled],\n.form-control-custom[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n.form-control-custom[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n.ipOctets {\n  width: 18%;\n  margin-left: 4%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzovVXNlcnMvU2FpIEt1bWFyL0Rvd25sb2Fkcy9mb3JidWlsZHMvdHJ1bmsvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0NDQ0g7QURFRDtFQUNJLGlCQUFBO0NDQUg7QURHRDtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaURBQUE7RUFHQSx5RUFBQTtDQ0RIO0FESUQ7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxtRkFBQTtDQ0ZIO0FES0Q7RUFDSSxZQUFBO0VBQ0EsV0FBQTtDQ0hIO0FETUQ7RUFDSSxZQUFBO0NDSkg7QURPRDtFQUNJLFlBQUE7Q0NMSDtBRFFEO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0NDTkg7QURTRDs7O0VBR0ksMEJBQUE7RUFDQSxXQUFBO0NDUEg7QURVRDs7RUFFSSxvQkFBQTtDQ1JIO0FEV0Q7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7Q0NUSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hIZWlnaHQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNlYXJjaEhlaWdodEJ0bnMge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wtY3VzdG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xuICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cblxuLmZvcm0tY29udHJvbC1jdXN0b206Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpLCAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcbn1cblxuLmZvcm0tY29udHJvbC1jdXN0b206Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5mb3JtLWNvbnRyb2wtY3VzdG9tOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cbi5mb3JtLWNvbnRyb2wtY3VzdG9tOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuLmZvcm0tY29udHJvbC1jdXN0b206Oi1tcy1leHBhbmQge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tY29udHJvbC1jdXN0b21bZGlzYWJsZWRdLFxuLmZvcm0tY29udHJvbC1jdXN0b21bcmVhZG9ubHldLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmZvcm0tY29udHJvbC1jdXN0b21bZGlzYWJsZWRdLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2wge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pcE9jdGV0cyB7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG59XG5cbi8vIC5zZWFyY2hMYWJlbCB7XG4vLyAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gfSIsIi5zZWFyY2hIZWlnaHQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VhcmNoSGVpZ2h0QnRucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZm9ybS1jb250cm9sLWN1c3RvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG59XG4uZm9ybS1jb250cm9sLWN1c3RvbTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xufVxuLmZvcm0tY29udHJvbC1jdXN0b206Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbiAgb3BhY2l0eTogMTtcbn1cbi5mb3JtLWNvbnRyb2wtY3VzdG9tOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuLmZvcm0tY29udHJvbC1jdXN0b206Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cbi5mb3JtLWNvbnRyb2wtY3VzdG9tOjotbXMtZXhwYW5kIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWNvbnRyb2wtY3VzdG9tW2Rpc2FibGVkXSxcbi5mb3JtLWNvbnRyb2wtY3VzdG9tW3JlYWRvbmx5XSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgb3BhY2l0eTogMTtcbn1cbi5mb3JtLWNvbnRyb2wtY3VzdG9tW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9sIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5pcE9jdGV0cyB7XG4gIHdpZHRoOiAxOCU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(dataService, sharedService, toastr, gridComponent) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.toastr = toastr;
        this.gridComponent = gridComponent;
        this.searchData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stndSite = {
            id: null,
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
            notificationThreshold: null,
            startTs: null
        };
        this.stndRole = {
            id: null,
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
            startTs: null
        };
        this.standardClassification = {
            id: null,
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
            notificationThreshold: null,
            startTs: null
        };
        this.easMediaData = {
            id: null,
            channelName: null,
            standardClassification: this.standardClassification,
            encodingFormat: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            mediaOriginatedIp: null,
            mediaOriginatedPort: null,
            enableIn: "",
            stndSite: this.stndSite,
            stndRole: this.stndRole
        };
        this.toastrTimeOut = 10000;
        this.keyCodeList = [8, 9, 13, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
        this.TRUE = "TRUE";
        this.FALSE = "FALSE";
    }
    SearchComponent.prototype.submitSearch = function () {
        var _this = this;
        var queryParams = [];
        var queryString;
        var searchUrl;
        var validDate = true;
        var validIP = true;
        this.easMediaData.mediaOriginatedIp = null;
        if (this.ipOctetOne || this.ipOctetTwo || this.ipOctetThree || this.ipOctetFour) {
            // First Octet
            if (this.ipOctetOne) {
                this.easMediaData.mediaOriginatedIp = this.ipOctetOne;
            }
            else {
                validIP = false;
            }
            // Second Octet
            if (validIP) {
                if (this.ipOctetTwo) {
                    this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetTwo;
                }
            }
            // Third Octet
            if (validIP) {
                if (this.ipOctetThree) {
                    if (this.ipOctetTwo) {
                        this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetThree;
                    }
                    else {
                        validIP = false;
                    }
                }
            }
            // Fourth Octet
            if (validIP) {
                if (this.ipOctetFour) {
                    if (this.ipOctetThree) {
                        this.easMediaData.mediaOriginatedIp = this.easMediaData.mediaOriginatedIp + "." + this.ipOctetFour;
                    }
                    else {
                        validIP = false;
                    }
                }
            }
            if (!validIP) {
                this.toastr.error('Please enter the IP address sequentially. There cannot be blanks between octets', '', {
                    timeOut: 10000
                });
            }
        }
        if (this.easMediaData.channelName !== 'undefined' && this.easMediaData.channelName !== null && this.easMediaData.channelName !== '') {
            queryParams.push('channelName=' + this.easMediaData.channelName);
        }
        if (this.easMediaData.stndSite.id && this.easMediaData.stndSite.id !== -1) {
            queryParams.push('standardSiteId=' + this.easMediaData.stndSite.id);
        }
        if (this.easMediaData.mediaOriginatedIp !== 'undefined' && this.easMediaData.mediaOriginatedIp !== null && this.easMediaData.mediaOriginatedIp !== '') {
            queryParams.push('mediaOriginatedIp=' + this.easMediaData.mediaOriginatedIp);
        }
        if (this.easMediaData.mediaOriginatedPort) {
            queryParams.push('mediaOriginatedPort=' + this.easMediaData.mediaOriginatedPort);
        }
        if (this.easMediaData.standardClassification.id && this.easMediaData.standardClassification.id !== -1) {
            queryParams.push('standardClsfId=' + this.easMediaData.standardClassification.id);
        }
        if (this.easMediaData.stndRole.id && this.easMediaData.stndRole.id !== -1) {
            queryParams.push('standardRoleId=' + this.easMediaData.stndRole.id);
        }
        if (this.easMediaData.enableIn !== 'undefined' && this.easMediaData.enableIn !== null && this.easMediaData.enableIn !== '' && this.easMediaData.enableIn !== 'default') {
            queryParams.push('enableIn=' + this.easMediaData.enableIn);
        }
        if (new Date(this.startDate).getTime() > new Date(this.endDate).getTime()) {
            validDate = false;
            this.toastr.error('Begin date cannot be greater than End date', '', {
                timeOut: 10000
            });
        }
        if ((new Date(this.startDate).getTime() && !new Date(this.endDate).getTime()) || (!new Date(this.startDate).getTime() && new Date(this.endDate).getTime())) {
            validDate = false;
            this.toastr.error('Both Begin date and End date have to be populated', '', {
                timeOut: 10000
            });
        }
        if (new Date(this.startDate).getTime() && new Date(this.endDate).getTime() && validDate) {
            queryParams.push('startDate=' + new Date(this.startDate).getTime());
            queryParams.push('endDate=' + new Date(this.endDate).getTime());
        }
        for (var i = 0; i < queryParams.length; i++) {
            if (i >= 1) {
                queryString += '&' + queryParams[i];
            }
            else {
                queryString = queryParams[i];
            }
        }
        //searchUrl = 'http://localhost:8080/eas-media-data?' + queryString;
        if (validDate && validIP) {
            this.dataService.getSearchData(queryString)
                .subscribe(function (rowData) {
                console.log('Table response: %o', rowData);
                _this.searchData.emit(rowData);
                _this.sharedService.setSearchFlag(false);
                _this.sharedService.changeDataSource(rowData);
                _this.toastr.success('Successfully returned ' + rowData.length + ' rows', '', {
                    timeOut: 10000
                });
            });
        }
    };
    ;
    SearchComponent.prototype.clearSearch = function () {
        var _this = this;
        this.easMediaData.channelName = null;
        this.easMediaData.stndSite.id = -1;
        this.easMediaData.mediaOriginatedIp = null;
        this.ipOctetOne = null;
        this.ipOctetTwo = null;
        this.ipOctetThree = null;
        this.ipOctetFour = null;
        this.easMediaData.mediaOriginatedPort = null;
        this.stndRole.id = -1;
        this.easMediaData.standardClassification.id = -1;
        this.easMediaData.enableIn = "default";
        this.startDate = '';
        this.endDate = '';
        this.dataService.getChannelList()
            .subscribe(function (channelList) {
            _this.searchData.emit(channelList);
        });
    };
    ;
    SearchComponent.prototype.checkIpValue = function (fromTextBox, toTextBox, e, modelName) {
        // if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 9) {
        if (!this.keyCodeList.includes(e.keyCode)) {
            switch (modelName) {
                case "ipOctetOne":
                    this.ipOctetOne = this.ipOctetOne.substring(0, this.ipOctetOne.length - 1);
                    ;
                    break;
                case "ipOctetTwo":
                    this.ipOctetTwo = this.ipOctetTwo.substring(0, this.ipOctetTwo.length - 1);
                    ;
                    break;
                case "ipOctetThree":
                    this.ipOctetThree = this.ipOctetThree.substring(0, this.ipOctetThree.length - 1);
                    ;
                    break;
                case "ipOctetFour":
                    this.ipOctetFour = this.ipOctetFour.substring(0, this.ipOctetFour.length - 1);
                    ;
                    break;
                default:
                    break;
            }
        }
        // var length = fromTextBox.length;
        // if (length === 3) {
        //   document.getElementById(toTextBox).focus();
        // }
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedSiteIdDataSource.subscribe(function (data) { return _this.siteIdList = data; });
        this.sharedService.sharedRoleIdDataSource.subscribe(function (data) { return _this.roleIdList = data; });
        this.sharedService.sharedClassDataSource.subscribe(function (data) { return _this.classificationList = data; });
        this.dataService.getSiteIdList().subscribe(function (siteIdList) {
            _this.siteIdList = siteIdList;
        });
        this.dataService.getRoleIdList().subscribe(function (roleIdList) {
            _this.roleIdList = roleIdList;
        });
        this.dataService.getClassificationList().subscribe(function (classificationList) {
            _this.classificationList = classificationList;
        });
        this.clearSearch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "searchData", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.less */ "./src/app/components/search/search.component.less")],
            providers: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf='isLoggedIn' class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-search (searchData)=\"setSearchData($event)\"> </app-search>\r\n  </div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <app-grid [receivedOb]=\"recievedObj\"> </app-grid>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<div *ngIf='isLoggedIn' class=\"row\">\r\n  <!-- <div class=\"col-sm-2\">\r\n      <app-search (searchData)=\"setSearchData($event)\"> </app-search>\r\n    </div> -->\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <app-grid [receivedOb]=\"recievedObj\"> </app-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewComponent = /** @class */ (function () {
    function ViewComponent(sharedService) {
        this.sharedService = sharedService;
        this.isLoggedIn = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedLoginResource.subscribe(function (data) { return _this.isLoggedIn = data; });
        if (this.isLoggedIn) {
        }
        else {
            setTimeout(function () {
                document.getElementById('login').click();
            }, 500);
        }
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/view/view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/components/waveform/waveform.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/waveform/waveform.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"col-md-10\">\r\n    <ag-grid-angular style=\"width: 100%; height: 165px; margin-top: 2%;\" class=\"ag-theme-balham\"\r\n      [rowData]=\"waveformData\" [columnDefs]=\"waveformColumnDefs\" [gridOptions]=\"waveFormGridOptions\"\r\n      [enableColResize]=\"true\" [enableSorting]=\"true\" [enableFilter]=\"true\" [paginationPageSize]=20\r\n      [rowSelection]=\"rowSelection\" (selectionChanged)=\"onSelectionChanged($event)\" [pagination]=\"true\">\r\n    </ag-grid-angular>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div style=\"margin-top:10%\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-3 padleftzero\"> <label style=\"\r\n          margin-top: 6%;\r\n      \">Start time</label></div>\r\n        <div class=\"col-md-9 padleftzero\">\r\n          <p-calendar [(ngModel)]=\"startDate\" [inputStyle]=\"{'width':'70%'}\" [showIcon]=\"true\" [showTime]=\"true\"\r\n            name=\"startDate\" ngDefaultControl>\r\n          </p-calendar>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\" style=\"\r\n        margin-top: 6%;\r\n    \">\r\n        <div class=\" col-md-3 padleftzero\"><label style=\"\r\n              margin-top: 6%;\r\n          \">End time</label> </div>\r\n        <div class=\"col-md-9 padleftzero\">\r\n          <p-calendar [(ngModel)]=\"endDate\" [inputStyle]=\"{'width':'70%'}\" [showIcon]=\"true\" [showTime]=\"true\"\r\n            name=\"endDate\" ngDefaultControl>\r\n          </p-calendar>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\"><button [disabled]='disablePlay' type=\"button\" style=\"margin-top: 6%;\"\r\n            class=\"btn btn-primary\" (click)=\"loadAudioUrl()\">\r\n            Play\r\n          </button>\r\n          &nbsp;\r\n          <button *ngIf=\"enableDownload\" type=\"button\" style=\"margin-top: 6%;\" class=\"btn btn-primary\"\r\n            (click)=\"downloadAudio()\">\r\n            <i class=\"fa fa-download\"></i> Download\r\n          </button></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div>\r\n  <div [hidden]=\"!enableOnGridClick\">\r\n    <!-- <div class=\"col-md-12\" style=\"padding-bottom: 50px; padding-top:10px;\"> -->\r\n\r\n    <!-- <div class=\"col-md-4\">\r\n        <label>Start time</label> &nbsp;\r\n        <p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"startDate\" ngDefaultControl>\r\n        </p-calendar>\r\n        <span style=\"margin-left:35px\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>End time</label> &nbsp;\r\n        <p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"endDate\" ngDefaultControl>\r\n        </p-calendar>\r\n        <span style=\"margin-left:35px\"></span>\r\n\r\n      </div> -->\r\n    <!-- <div class=\"col-md-4\">\r\n        <button [disabled]='disablePlay' type=\"button\" class=\"btn btn-primary\" (click)=\"loadAudioUrl()\">\r\n          Play\r\n        </button>\r\n        &nbsp;\r\n        <button *ngIf=\"enableDownload\" type=\"button\" class=\"btn btn-primary\" (click)=\"downloadAudio()\">\r\n          <i class=\"fa fa-download\"></i> Download\r\n        </button>\r\n      </div> -->\r\n\r\n    <!-- </div> -->\r\n    <div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-10\">\r\n          <div [hidden]=\"!enableWaveForm\">\r\n            <div id=\"waveform\"></div>\r\n            <div id=\"waveform-timeline\"></div>\r\n          </div>\r\n        </div>\r\n        <div [hidden]=\"!enableOnGridClick\" class=\"col-md-2\">\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-md-3 padleftzero\" > <label style=\"\r\n              margin-top: 6%;\r\n          \">Start time</label></div>\r\n             <div class=\"col-md-9 padleftzero\"><p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"startDate\" ngDefaultControl>\r\n              </p-calendar></div>\r\n      \r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 padleftzero\"><label style=\"\r\n                  margin-top: 6%;\r\n              \">End time</label> </div>\r\n                <div class=\"col-md-9 padleftzero\"><p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"endDate\" ngDefaultControl>\r\n              </p-calendar></div>\r\n              \r\n              \r\n            </div>\r\n            <div class=\"row\"  style=\"\r\n            padding-top: 3%;\r\n            padding-left: 27%;\r\n        \"><button [disabled]='disablePlay' type=\"button\" class=\"btn btn-primary\" (click)=\"loadAudioUrl()\">\r\n                Play\r\n              </button>\r\n              &nbsp;\r\n              <button *ngIf=\"enableDownload\" type=\"button\" class=\"btn btn-primary\" (click)=\"downloadAudio()\">\r\n                <i class=\"fa fa-download\"></i> Download\r\n              </button></div>\r\n            <br> -->\r\n          <div *ngIf=\"showPlayer\" class=\"row\" style=\"margin-top: 16%;\">\r\n\r\n            <div class=\"flexDisplay\">\r\n\r\n              <!-- <button type=\"button\" id=\"button_bw\" class=\"btn pauseMenu \" (click)='toogleMute()'>\r\n               \r\n              <span [hidden]=\"!mute\"><i class=\"fa fa-volume-up\"></i></span>\r\n              <span [hidden]=\"mute\"><i class=\" fa fa-volume-off\"></i></span>\r\n            </button> &nbsp; -->\r\n              <img src=\"assets/stop.png\" (click)='wavesurferStop()'>\r\n              <!-- <button type=\"button\" id=\"button_bw\" class=\"btn pauseMenu\" (click)='waveSurfer.skipBackward()'> -->\r\n              <img src=\"assets/back.png\" (click)=\"waveSurfer.skipBackward()\">\r\n              <!-- </button> &nbsp; -->\r\n\r\n              <!-- <button type=\"button\" id=\"button_play\" class=\"btn pauseMenu\" (click)=\"checkPlayPause()\"> -->\r\n              <span [hidden]=\"!play\"><img src=\"assets/play.png\" style=\"border-radius: 20%\"\r\n                  (click)=\"checkPlayPause()\"></span>\r\n              <span [hidden]=\"play\"><img src=\"assets/pause.png\" style=\"border-radius: 20%\"\r\n                  (click)=\"checkPlayPause()\"></span>\r\n              <!-- </button> &nbsp; -->\r\n\r\n              <!-- <button type=\"button\" id=\"button_stop\" class=\"btn pauseMenu\" (click)='wavesurferStop()'>\r\n              <i class=\"fa fa-stop\"></i>\r\n            </button>&nbsp; -->\r\n\r\n              <!-- <button type=\"button\" id=\"button_fw\" class=\"btn pauseMenu\" (click)='waveSurfer.skipForward()'> -->\r\n              <img src=\"assets/forward.png\" (click)=\"waveSurfer.skipForward()\">\r\n              <!-- </button>     -->\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div *ngIf=\"enableWaveForm\" style=\"padding-top: 5%\">\r\n          <h1 id=\"scroller\"></h1>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/waveform/waveform.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/waveform/waveform.component.ts ***!
  \***********************************************************/
/*! exports provided: WaveformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveformComponent", function() { return WaveformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.min.js");
/* harmony import */ var _node_modules_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_wavesurfer_js_dist_plugin_wavesurfer_timeline_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js */ "./node_modules/wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js");
/* harmony import */ var _node_modules_wavesurfer_js_dist_plugin_wavesurfer_timeline_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_wavesurfer_js_dist_plugin_wavesurfer_timeline_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WaveformComponent = /** @class */ (function () {
    function WaveformComponent(cdref, dataService, toastr) {
        this.cdref = cdref;
        this.dataService = dataService;
        this.toastr = toastr;
        this.isWavformExist = false;
        this.isPlayAudio = false;
        this.rowSelection = "single";
        this.showPlayer = true;
        this.gridDefined = false;
        this.enableOnGridClick = false;
        this.enableWaveForm = false;
        this.enableDownload = false;
        this.toastrTimeOut = 10000;
        this.mute = false;
        this.disablePlay = false;
        this.audoInputData = {
            channelName: null,
            startDate: null,
            endDate: null
        };
        this.waveformColumnDefs = [
            { headerName: '', checkboxSelection: true, width: 80 },
            { headerName: 'Channel Name', field: 'channelName', width: 200 },
            {
                headerName: 'Initialized time', field: 'initializedTime', width: 200, cellRenderer: function (data) {
                    return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
                }
            },
            {
                headerName: "Start time", field: "startTime", width: 200, cellRenderer: function (data) {
                    return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
                }
            },
            {
                headerName: "End time", field: "endTime", width: 200, cellRenderer: function (data) {
                    return data.value ? (new Date(data.value * 1000)).toLocaleDateString() + " " + new Date(data.value * 1000).toLocaleTimeString() : '';
                }
            }
            // {
            //   headerName: '', cellRendererFramework: PlayComponent, cellRendererParams: {
            //     onClick: this.loadAudioUrl.bind(this),
            //     label: 'Click 1',
            //     width: 75
            //   },
            // }
        ];
    }
    WaveformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showPlayer = false;
        this.waveFormGridOptions = {
            onGridReady: function () {
                _this.waveFormGridOptions.api.sizeColumnsToFit();
                _this.waveFormGridOptions.api.forEachNode(function (node) { return node.rowIndex ? 0 : node.setSelected(true); });
            },
            rowHeight: 40
        };
        //this.getChannelData(this.metaDataChannelName[this.metaDataChannelName.length-1])
    };
    WaveformComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //this.constructWaveSurfer("assets/sample.wav");
        if (!this.gridDefined) {
            this.waveFormGridOptions = {
                onGridReady: function () {
                    _this.waveFormGridOptions.api.sizeColumnsToFit();
                },
                rowHeight: 35
            };
            this.gridDefined = true;
        }
        this.getChannelData(this.metaDataChannelName[this.metaDataChannelName.length - 1]);
    };
    WaveformComponent.prototype.ngOnDestroy = function () {
        if (this.isWavformExist) {
            this.waveSurfer.pause();
            this.waveSurfer.empty();
            this.startDate = null;
            this.endDate = null;
            this.enableWaveForm = false;
        }
    };
    WaveformComponent.prototype.constructWaveSurfer = function (url) {
        var _this = this;
        this.isPlayAudio = true;
        if (!this.isWavformExist) {
            this.waveSurfer = _node_modules_wavesurfer_js__WEBPACK_IMPORTED_MODULE_1___default.a.create({
                container: '#waveform',
                waveColor: '#337ab7',
                plugins: [
                    _node_modules_wavesurfer_js_dist_plugin_wavesurfer_timeline_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.create({
                        container: '#waveform-timeline'
                    })
                ]
            });
            this.isWavformExist = true;
        }
        if (url != undefined) {
            this.showPlayer = true;
            this.waveSurfer.load(url);
            this.waveSurfer.on('ready', function () {
                _this.waveSurfer.play();
                _this.play = false;
            });
        }
    };
    WaveformComponent.prototype.getChannelData = function (channelName) {
        var _this = this;
        if (this.isWavformExist) {
            this.waveSurfer.pause();
            this.waveSurfer.empty();
            this.startDate = null;
            this.endDate = null;
            this.enableWaveForm = false;
        }
        this.enableDownload = false;
        // if(this.isWavformExist){
        //   this.waveSurfer.pause();
        //   this.waveSurfer.empty();
        //   this.startDate=null;
        //   this.endDate=null;
        // }
        this.showPlayer = false;
        this.enableOnGridClick = false;
        this.gridChannelName = channelName;
        this.dataService.getDataByChannelName(channelName)
            .subscribe(function (response) {
            // this.ngxSmartModalService.setModalData(response, 'historyModal');
            //this.waveformData =response;
            _this.waveFormGridOptions.api.setRowData(response);
            _this.waveFormGridOptions.api.forEachNode(function (node) { return node.rowIndex ? 0 : node.setSelected(true); });
        }, function (error) {
            console.log(error);
            // this.openHistoryModal(error, e, false) 
        });
    };
    ;
    WaveformComponent.prototype.onSelectionChanged = function () {
        this.enableOnGridClick = true;
        var selectedRows = this.waveFormGridOptions.api.getSelectedRows();
        if (selectedRows[0].startTime != null) {
            this.startDate = (new Date(selectedRows[0].startTime * 1000));
        }
        if (selectedRows[0].endTime != null) {
            this.endDate = (new Date(selectedRows[0].endTime * 1000));
        }
        this.disablePlay = false;
        // this.autoScroll();
    };
    WaveformComponent.prototype.checkPlayPause = function () {
        this.waveSurfer.playPause();
        this.tooglePlay();
    };
    WaveformComponent.prototype.tooglePlay = function () {
        if (this.waveSurfer.isPlaying()) {
            this.play = false;
        }
        else {
            this.play = true;
        }
    };
    WaveformComponent.prototype.wavesurferStop = function () {
        this.waveSurfer.stop();
        this.tooglePlay();
    };
    WaveformComponent.prototype.toogleMute = function () {
        this.waveSurfer.toggleMute();
        this.mute = !this.mute;
    };
    WaveformComponent.prototype.loadAudioUrl = function () {
        var _this = this;
        if (this.isWavformExist) {
            this.waveSurfer.pause();
            this.waveSurfer.empty();
        }
        // this.getStartEndTimes(selectRow);
        this.audoInputData.endDate = new Date(this.endDate).getTime();
        this.audoInputData.startDate = new Date(this.startDate).getTime();
        this.audoInputData.channelName = this.gridChannelName;
        this.disablePlay = true;
        this.dataService.getUrlByChannelName(this.audoInputData)
            .subscribe(function (response) {
            _this.enableWaveForm = true;
            _this.constructWaveSurfer(response);
            _this.disablePlay = false;
            _this.enableDownload = true;
            _this.audioFileName = _this.getAudioFileName(response);
            _this.autoScroll();
        }, function (error) {
            if (error.status != 200) {
                _this.toastr.error('No audio found', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.enableDownload = false;
                _this.disablePlay = false;
            }
            if (error.status === 200) {
                _this.enableWaveForm = true;
                _this.constructWaveSurfer(error.error.text);
                _this.disablePlay = false;
                _this.audioFileName = _this.getAudioFileName(error.error.text);
                _this.enableDownload = true;
                _this.autoScroll();
            }
            console.log(error);
        });
    };
    WaveformComponent.prototype.getAudioFileName = function (audioUrl) {
        var arrVars = audioUrl.split("/");
        return arrVars.pop();
    };
    WaveformComponent.prototype.downloadAudio = function () {
        // this.loadAudioUrl(e);
        this.dataService.downloadAudio(this.audioFileName);
    };
    WaveformComponent.prototype.autoScroll = function () {
        var elementt = null;
        var interval = setInterval(function () {
            if (elementt != null) {
                clearInterval(interval);
            }
            elementt = document.getElementById("scroller");
            elementt.scrollIntoView({ block: "end" });
        }, 200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WaveformComponent.prototype, "metaDataChannelName", void 0);
    WaveformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waveform',
            template: __webpack_require__(/*! ./waveform.component.html */ "./src/app/components/waveform/waveform.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], WaveformComponent);
    return WaveformComponent;
}());



/***/ }),

/***/ "./src/app/custom-router.ts":
/*!**********************************!*\
  !*** ./src/app/custom-router.ts ***!
  \**********************************/
/*! exports provided: CustomRouterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterLink", function() { return CustomRouterLink; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomRouterLink = /** @class */ (function () {
    function CustomRouterLink(elementRef, router) {
        this.elementRef = elementRef;
        this.router = router;
        this.customRouterLink = '';
    }
    CustomRouterLink.prototype.ngOnInit = function () {
        this.pathParts = this.customRouterLink.split("/");
        this.elementRef.nativeElement.addEventListener('click', this.activate.bind(this));
    };
    CustomRouterLink.prototype.activate = function () {
        var _this = this;
        if (this.pathParts.length) {
            var p_1 = this.pathParts[0];
            // console.log("navigating to " + p);
            var promise = this.router.navigateByUrl(p_1);
            for (var i = 1; i < this.pathParts.length; i++) {
                p_1 = p_1 + "/" + this.pathParts[i];
                promise = promise.then(function () {
                    // console.log("navigating to " + p);
                    _this.router.navigateByUrl(p_1);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomRouterLink.prototype, "customRouterLink", void 0);
    CustomRouterLink = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[customRouterLink]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomRouterLink);
    return CustomRouterLink;
}());



/***/ }),

/***/ "./src/app/routeReuse.ts":
/*!*******************************!*\
  !*** ./src/app/routeReuse.ts ***!
  \*******************************/
/*! exports provided: routeReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeReuseStrategy", function() { return routeReuseStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routeReuseStrategy = /** @class */ (function () {
    function routeReuseStrategy(sharedService) {
        this.sharedService = sharedService;
        this.routeCache = new Map();
    }
    routeReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        var ret = future.routeConfig === curr.routeConfig;
        if (ret) {
            this.addRedirectsRecursively(future); // update redirects
        }
        return ret;
    };
    routeReuseStrategy.prototype.shouldDetach = function (route) {
        var data = this.getRouteData(route);
        return data && data.reuse;
    };
    routeReuseStrategy.prototype.store = function (route, handle) {
        var url = this.getFullRouteUrl(route);
        var data = this.getRouteData(route);
        this.routeCache.set(url, { handle: handle, data: data });
        this.addRedirectsRecursively(route);
    };
    routeReuseStrategy.prototype.shouldAttach = function (route) {
        var url = this.getFullRouteUrl(route);
        if (url === 'dashboard' && this.routeCache.has(url)) {
            this.sharedService.refreshDashboard(true);
        }
        return this.routeCache.has(url);
    };
    routeReuseStrategy.prototype.retrieve = function (route) {
        var url = this.getFullRouteUrl(route);
        var data = this.getRouteData(route);
        return data && data.reuse && this.routeCache.has(url)
            ? this.routeCache.get(url).handle
            : null;
    };
    routeReuseStrategy.prototype.addRedirectsRecursively = function (route) {
        var _this = this;
        var config = route.routeConfig;
        if (config) {
            if (!config.loadChildren) {
                var routeFirstChild = route.firstChild;
                var routeFirstChildUrl = routeFirstChild
                    ? this.getRouteUrlPaths(routeFirstChild).join('/')
                    : '';
                var childConfigs = config.children;
                if (childConfigs) {
                    var childConfigWithRedirect = childConfigs.find(function (c) { return c.path === '' && !!c.redirectTo; });
                    if (childConfigWithRedirect) {
                        childConfigWithRedirect.redirectTo = routeFirstChildUrl;
                    }
                }
            }
            route.children.forEach(function (childRoute) { return _this.addRedirectsRecursively(childRoute); });
        }
    };
    routeReuseStrategy.prototype.getFullRouteUrl = function (route) {
        return this.getFullRouteUrlPaths(route).filter(Boolean).join('/');
    };
    routeReuseStrategy.prototype.getFullRouteUrlPaths = function (route) {
        var paths = this.getRouteUrlPaths(route);
        return route.parent
            ? this.getFullRouteUrlPaths(route.parent).concat(paths) : paths;
    };
    routeReuseStrategy.prototype.getRouteUrlPaths = function (route) {
        return route.url.map(function (urlSegment) { return urlSegment.path; });
    };
    routeReuseStrategy.prototype.getRouteData = function (route) {
        return route.routeConfig && route.routeConfig.data;
    };
    routeReuseStrategy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], routeReuseStrategy);
    return routeReuseStrategy;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // easMediaDataList: EasMediaData[];
        // stndSiteList: StandardSite[];
        // stndRole: StandardRole;
        this.location = window.location;
        this.baseUrl = this.getUrlBase();
        // getChannelListUrl: string = 'http://localhost:8080/eas-media-data';
        // getSiteIdListUrl: string = 'http://localhost:8080/reference-data?type=site';
        // getRoleIdListUrl: string = 'http://localhost:8080/reference-data?type=role';
        // addChannelUrl: string = 'http://localhost:8080/eas-media-data';
        // addSiteUrl: string = 'http://localhost:8080/standard-site';
        // addRoleUrl: string = 'http://localhost:8080/standard-role';
        // historyDataUrl: string = 'http://localhost:8080/eas-media-data-history';
        // archiveChannelsUrl: string = 'http://localhost:8080/eas-media-data/archive';
        // updateSiteUrl: string = 'http://localhost:8080/standard-site';
        // updateRoleUrl: string = 'http://localhost:8080/standard-role';
        // updateChannelUrl: string = 'http://localhost:8080/eas-media-data';
        // getClassificationUrl: string = 'http://localhost:8080/reference-data?type=clsf';
        // addClassificationUrl: string = 'http://localhost:8080/standard-classification';
        // updateClassificationUrl: string = 'http://localhost:8080/standard-classification';
        // dashboardInfoUrl: string = 'http://localhost:8080/dashboard-info';
        // getChannelData: string = 'http://localhost:8080/eas-media-data-activity?channelName=';
        // urlByChannelName: string = 'http://localhost:8080//fetch-audio'
        this.getChannelListUrl = this.baseUrl + '/eas-media-data';
        this.getSiteIdListUrl = this.baseUrl + '/reference-data?type=site';
        this.getRoleIdListUrl = this.baseUrl + '/reference-data?type=role';
        this.addChannelUrl = this.baseUrl + '/eas-media-data';
        this.addSiteUrl = this.baseUrl + '/standard-site';
        this.addRoleUrl = this.baseUrl + '/standard-role';
        this.historyDataUrl = this.baseUrl + '/eas-media-data-history';
        this.archiveChannelsUrl = this.baseUrl + '/eas-media-data/archive';
        this.updateSiteUrl = this.baseUrl + '/standard-site';
        this.updateRoleUrl = this.baseUrl + '/standard-role';
        this.updateChannelUrl = this.baseUrl + '/eas-media-data';
        this.getClassificationUrl = this.baseUrl + '/reference-data?type=clsf';
        this.addClassificationUrl = this.baseUrl + '/standard-classification';
        this.updateClassificationUrl = this.baseUrl + '/standard-classification';
        this.dashboardInfoUrl = this.baseUrl + '/dashboard-info';
        this.getChannelData = this.baseUrl + '/eas-media-data-activity?channelName=';
        this.getDownloadAudio = this.baseUrl + '/downloadClip/';
        this.urlByChannelName = this.baseUrl + '/fetch-audio';
        this.authenticateUserUrl = this.baseUrl + '/authenticate';
        this.errorAdvisoryUrl = this.baseUrl + '/eas-event';
        this.uploadFileUrl = this.baseUrl + '/mass-upload';
        this.createEventUrl = this.baseUrl + '/eas-event';
        this.dashboardArray = [];
    }
    DataService.prototype.getHeaders = function () {
        var userid = window.sessionStorage.getItem("user-id");
        var httpHeaderOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        if (userid) {
            httpHeaderOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'user-id': window.sessionStorage.getItem("user-id")
                })
            };
        }
        return httpHeaderOptions;
    };
    DataService.prototype.getChannelList = function () {
        return this.http.get(this.getChannelListUrl, this.getHeaders());
    };
    ;
    DataService.prototype.getSiteIdList = function () {
        return this.http.get(this.getSiteIdListUrl, this.getHeaders());
    };
    ;
    DataService.prototype.getRoleIdList = function () {
        return this.http.get(this.getRoleIdListUrl, this.getHeaders());
    };
    ;
    DataService.prototype.getDataByChannelName = function (channelName) {
        return this.http.get(this.getChannelData + channelName, this.getHeaders());
    };
    ;
    DataService.prototype.getErrorAdvisoryData = function () {
        return this.http.get(this.errorAdvisoryUrl, this.getHeaders());
    };
    ;
    DataService.prototype.downloadAudio = function (audioFileName) {
        window.open(this.getDownloadAudio + audioFileName, "_blank");
    };
    DataService.prototype.getUrlByChannelName = function (AudioInputs) {
        return this.http.post(this.urlByChannelName, AudioInputs, this.getHeaders());
    };
    ;
    DataService.prototype.getClassificationList = function () {
        return this.http.get(this.getClassificationUrl, this.getHeaders());
    };
    ;
    DataService.prototype.addClassification = function (newClassification) {
        return this.http.post(this.addClassificationUrl, newClassification, this.getHeaders());
    };
    ;
    DataService.prototype.addChannel = function (newChannel) {
        return this.http.post(this.addChannelUrl, newChannel, this.getHeaders());
    };
    ;
    DataService.prototype.addSite = function (newSite) {
        return this.http.post(this.addSiteUrl, newSite, this.getHeaders());
    };
    ;
    DataService.prototype.addRole = function (newRole) {
        return this.http.post(this.addRoleUrl, newRole, this.getHeaders());
    };
    ;
    DataService.prototype.getSearchData = function (queryString) {
        var url = this.baseUrl + '/eas-media-data?' + queryString;
        return this.http.get(url, this.getHeaders());
    };
    ;
    DataService.prototype.getHistoryData = function (id) {
        return this.http.get(this.historyDataUrl + '?easMediaDataId=' + id);
    };
    ;
    DataService.prototype.archiveChannels = function (channelList) {
        return this.http.post(this.archiveChannelsUrl, channelList, this.getHeaders());
    };
    ;
    DataService.prototype.updateSite = function (siteInfo) {
        return this.http.put(this.updateSiteUrl, siteInfo, this.getHeaders());
    };
    ;
    DataService.prototype.updateRole = function (roleInfo) {
        return this.http.put(this.updateRoleUrl, roleInfo, this.getHeaders());
    };
    ;
    DataService.prototype.updateClassification = function (classificationInfo) {
        return this.http.put(this.updateClassificationUrl, classificationInfo, this.getHeaders());
    };
    ;
    DataService.prototype.updateChannel = function (channelInfo) {
        return this.http.put(this.updateChannelUrl, channelInfo, this.getHeaders());
    };
    ;
    DataService.prototype.getDashboardData = function () {
        return this.http.get(this.dashboardInfoUrl, this.getHeaders());
    };
    ;
    DataService.prototype.login = function (credentials) {
        return this.http.post(this.authenticateUserUrl, credentials);
    };
    DataService.prototype.postFile = function (fileToUpload) {
        var loginid = window.sessionStorage.getItem("user-id");
        var fileUploadOptions;
        fileUploadOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'user-id': "null" })
        };
        if (loginid) {
            fileUploadOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'user-id': window.sessionStorage.getItem("user-id") })
            };
        }
        //const endpoint = 'http://localhost:8080/mass-upload';
        // const endpoint = this.getUrlBase() + '/mass-upload';
        // const formData: FormData = new FormData();
        // formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(this.uploadFileUrl, fileToUpload, fileUploadOptions);
        // .map(() => { return true; });
        // .pipe(map(() => { return true; }));
    };
    DataService.prototype.createEvent = function (newEvent) {
        return this.http.post(this.createEventUrl, newEvent, this.getHeaders());
    };
    ;
    DataService.prototype.getUrlBase = function () {
        if (this.location.port === "4200") {
            return "http://localhost:8080";
        }
        else {
            return this.location.protocol;
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.sharedDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.sharedSiteIdDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.sharedRoleIdDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.sharedClassDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.isDashboardSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.refreshDashboardData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.searchFlag = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.changeDashboardDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.sharedLoginResource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.sharedGuestUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.sharedDataSource.asObservable();
        this.currentLogin = this.sharedLoginResource.asObservable();
        this.currentSitId = this.sharedSiteIdDataSource.asObservable();
        this.currentRoleId = this.sharedRoleIdDataSource.asObservable();
        this.currentClassData = this.sharedClassDataSource.asObservable();
        this.currentFlag = this.searchFlag.asObservable();
        this.currentGuestUser = this.sharedGuestUser.asObservable();
        this.dashboardSearch = this.isDashboardSearch.asObservable();
    }
    SharedService.prototype.changeDataSource = function (data) {
        this.sharedDataSource.next(data);
    };
    SharedService.prototype.changeLoginSource = function (data) {
        this.sharedLoginResource.next(data);
    };
    SharedService.prototype.changeSiteIdData = function (data) {
        this.sharedSiteIdDataSource.next(data);
    };
    SharedService.prototype.setDashboardSearch = function (data) {
        this.isDashboardSearch.next(data);
    };
    SharedService.prototype.refreshDashboard = function (data) {
        this.refreshDashboardData.next(data);
    };
    SharedService.prototype.changeDashboardData = function (data) {
        this.changeDashboardDataSource.next(data);
    };
    SharedService.prototype.changeRoleIdData = function (data) {
        this.sharedRoleIdDataSource.next(data);
    };
    SharedService.prototype.changeClassData = function (data) {
        this.sharedClassDataSource.next(data);
    };
    SharedService.prototype.setSearchFlag = function (data) {
        this.searchFlag.next(data);
    };
    SharedService.prototype.setGuestUser = function (data) {
        this.sharedGuestUser.next(data);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sai Kumar\Downloads\forbuilds\trunk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
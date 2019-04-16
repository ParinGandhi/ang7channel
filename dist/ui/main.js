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
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'view',
        component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = ".navbar {\n  background-color: #337ab7;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovZGV2ZWxvcG1lbnQvUmF5dGhlb24vYXVkaW8vdWkvMDMuMTguMjAxOS90cnVuay9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0NDQ0giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/waveform/waveform.component */ "./src/app/components/waveform/waveform.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-nvd3 */ "./node_modules/ng2-nvd3/build/index.js");
/* harmony import */ var ng2_nvd3__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_nvd3__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/play-audio/play-audio.component */ "./src/app/components/play-audio/play-audio.component.ts");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"],
                _components_waveform_waveform_component__WEBPACK_IMPORTED_MODULE_14__["WaveformComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _components_view_view_component__WEBPACK_IMPORTED_MODULE_21__["ViewComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"],
                _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_23__["PlayAudioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__["SelectDropDownModule"],
                angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_19__["AngularDateTimePickerModule"],
                ng2_nvd3__WEBPACK_IMPORTED_MODULE_16__["NvD3Module"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([_components_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"], _components_play_audio_play_audio_component__WEBPACK_IMPORTED_MODULE_23__["PlayAudioComponent"]]),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_6__["NgxSmartModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot()
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
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

module.exports = "<div *ngIf='isLoggedIn'>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"padding-bottom: 20px;\">\r\n      <div class=\"col-md-4\"></div>\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-5\">\r\n        <div class=\" pull-right\">\r\n          Last refreshed: {{lastRefreshed | date:'medium'}}&nbsp;&nbsp;&nbsp;\r\n          <button class=\"btn btn-sm btn-default\" (click)=\"getDashBoardData();\"><span class=\"glyphicon glyphicon-refresh\"\r\n              aria-hidden=\"true\"></span></button>\r\n          <!-- <select name=\"\" id=\"\" [(ngModel)]=\"refreshInterval\">\r\n            <option value=\"1000\">1 minute</option>\r\n            <option value=\"2000\">5 minutes</option>\r\n            <option value=\"3000\">10 minutes</option>\r\n            <option value=\"4000\">15 minutes</option>\r\n          </select> -->\r\n\r\n          <!-- <select name=\"\" id=\"\" [(ngModel)]=\"selectedInterval\" (change)=\"setRefreshInterval(selectedInterval)\">\r\n            <option *ngFor=\"let interval of intervalList\" [ngValue]=\"interval\">{{interval.label}}</option>\r\n          </select> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          Channels By Site\r\n          <span class=\"pull-right\">Total: {{dashboardData.siteNames.length}}</span>\r\n          <!-- <div class=\"card-header-actions pull-right\">\r\n                    Total: {{dashboardData.siteNames.length}}\r\n                  </div> -->\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"chart-wrapper\">\r\n            <nvd3 [options]=\"optionsForTool\" [data]=\"data\"></nvd3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Application Details\r\n              <span class=\"pull-right\">Total: 1</span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                      Total: {{activeInactiveChartLabels.length}}\r\n                    </div> -->\r\n            </div>\r\n            <div class=\"panel-body\" style=\"\r\n                  height: 334px;\">\r\n              <div>\r\n                <span *ngFor=\"let item of dashboardData.applicationAttributes | keyvalue\">\r\n                  <span class=\"blackdot\" style=\"\r\n                          margin-bottom: 0%\"></span> &nbsp;<span><label>{{item.key}}\r\n                      &nbsp;:</label>\r\n                    {{item.value}}</span><br><br>\r\n                </span>\r\n                <!-- <span class=\"blackdot\" style=\"\r\n                    margin-bottom: -1%\"></span> &nbsp;<span><label>Application Name\r\n                        &nbsp;:</label>\r\n                      {{dashboardData.applicationAttributes.ApplicationName}}</span><br><br>\r\n                    <span class=\"blackdot\" style=\"\r\n            margin-bottom: -1%\"></span> &nbsp;<span><label>Application Version\r\n                        &nbsp;:</label>\r\n                      {{dashboardData.applicationAttributes.ApplicationVersion}}</span><br><br>\r\n                    <span class=\"blackdot\" style=\"\r\n            margin-bottom: -1%\"></span> &nbsp;<span><label>OSVersion &nbsp;:</label>\r\n                      {{dashboardData.applicationAttributes.OSVersion}}</span><br><br>\r\n                    <span class=\"blackdot\" style=\"\r\n            margin-bottom: -1%\"></span> &nbsp;<span><label>Application State&nbsp;:</label>\r\n                      {{dashboardData.applicationAttributes.ApplicationState}}</span><br><br> -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Active/Inactive Channels\r\n              <span class=\"pull-right\">Total: {{activityLabels.length}}</span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                        Total: {{activeInactiveChartLabels.length}}\r\n                      </div> -->\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"chart-wrapper\">\r\n                <nvd3 [options]=\"options\" [data]=\"chartActivityData\"></nvd3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              Enabled/Disabled Channels\r\n              <span class=\"pull-right\">Total: {{activeInactiveChartLabels.length}}</span>\r\n              <!-- <div class=\"card-header-actions pull-right\">\r\n                    Total: {{activeInactiveChartLabels.length}}\r\n                  </div> -->\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"chart-wrapper\">\r\n                <nvd3 [options]=\"options\" [data]=\"chartActiveInactiveData\"></nvd3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>"

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
    function DashboardComponent(dataService, sharedService) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.appAttributes = {
            ApplicationVersion: null,
            OSVersion: null,
            ApplicationState: null,
            ApplicationName: null
        };
        this.chartData = [];
        this.activeInactiveData = [];
        this.activityData = [];
        this.chartActiveInactiveData = [];
        this.chartActivityData = [];
        this.appAttributesChartData = [];
        this.isLoggedIn = false;
        this.activeChannelsBySite = [];
        this.intervalList = [
            {
                label: '1 minute',
                value: 1000
            }, {
                label: '2 minutes',
                value: 2000
            }, {
                label: '3 minutes',
                value: 3000
            }, {
                label: '4 minutes',
                value: 4000
            }, {
                label: '5 minutes',
                value: 5000
            }
        ];
        this.activeInactiveChartLabels = ['Available', 'Unavailable'];
        this.activityLabels = ['Active', 'Inactive'];
        this.getDashBoardData = function () {
            var _this = this;
            var activeCount;
            this.dashboardData = {};
            this.chartData = [];
            this.appAttributesChartData = [];
            this.activeInactiveData = [];
            this.activityData = [];
            this.dataService.getDashboardData().subscribe(function (response) {
                _this.lastRefreshed = new Date();
                _this.dashboardData = response;
                activeCount = _this.dashboardData.activeChannelsBySite;
                for (var i = 0; i < _this.dashboardData.siteNames.length; i++) {
                    var obj = {
                        siteNames: _this.dashboardData.siteNames[i],
                        siteCount: _this.dashboardData.siteCount[i]
                    };
                    _this.chartData.push(obj);
                }
                var appAttributes = {
                    siteNames: _this.dashboardData.applicationAttributes.ApplicationName,
                    siteCount: 1
                };
                _this.appAttributesChartData.push(appAttributes);
                _this.chartAppAttributesChartData = _this.appAttributesChartData;
                _this.data = _this.chartData;
                var obj1 = {
                    siteNames: _this.activeInactiveChartLabels[0],
                    siteCount: _this.dashboardData.totalNumberofAvaiableChannels
                };
                var obj2 = {
                    siteNames: _this.activeInactiveChartLabels[1],
                    siteCount: _this.dashboardData.totalNumberofChannels - _this.dashboardData.totalNumberofAvaiableChannels
                };
                var obj3 = {
                    siteNames: _this.activityLabels[0],
                    siteCount: _this.dashboardData.totalNumberofActiveChannels
                };
                var obj4 = {
                    siteNames: _this.activityLabels[1],
                    siteCount: _this.dashboardData.totalNumberofChannels - _this.dashboardData.totalNumberofActiveChannels
                };
                _this.activeInactiveData.push(obj1);
                _this.activeInactiveData.push(obj2);
                _this.activityData.push(obj3);
                _this.activityData.push(obj4);
                _this.chartActivityData = _this.activityData;
                _this.chartActiveInactiveData = _this.activeInactiveData;
            });
            var tooltip = function (hoveredData) {
                var toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : 0 </button>';
                for (var _i = 0, activeCount_1 = activeCount; _i < activeCount_1.length; _i++) {
                    var appViewState = activeCount_1[_i];
                    if (appViewState.siteName == hoveredData.data.siteNames) {
                        toolTipView = '<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" > Number of Active channels : ' + appViewState.count + ' </button>';
                    }
                }
                return toolTipView;
            };
            this.options = {
                chart: {
                    type: 'pieChart',
                    height: 300,
                    x: function (d) {
                        return d.siteNames + ' ' + '[' + d.siteCount + ']';
                    },
                    y: function (d) {
                        return d.siteCount;
                    },
                    showLabels: true,
                    duration: 500,
                    tooltip: {
                        enabled: false
                    },
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 10,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };
            this.optionsForTool = {
                chart: {
                    type: 'pieChart',
                    height: 700,
                    x: function (d) {
                        return d.siteNames + ' ' + '[' + d.siteCount + ']';
                    },
                    y: function (d) {
                        return d.siteCount;
                    },
                    showLabels: true,
                    duration: 500,
                    tooltip: {
                        x: function (d) {
                            return d.siteNames + ' ' + '[' + d.siteCount + ']';
                        },
                        contentGenerator: function (key) {
                            return tooltip(key);
                        }
                    },
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 10,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };
            // this.optionsForTool = {
            //   chart: {
            //     type: 'discreteBarChart',
            //     height: 450,
            //     margin: {
            //       top: 20,
            //       right: 20,
            //       bottom: 50,
            //       left: 55
            //     },
            //     x: function (d) { return d.siteNames + ' ' + '[' + d.siteCount + ']'; },
            //     y: function (d) { return d.siteCount; },
            //     showValues: true,
            //     // valueFormat: function (d) {
            //     //   return d3.format(',.4f')(d);
            //     // },
            //     duration: 500,
            //     xAxis: {
            //       axisLabel: 'X Axis'
            //     },
            //     yAxis: {
            //       axisLabel: 'Y Axis',
            //       axisLabelDistance: -10
            //     }
            //   }
            // }
        };
        // this.data = [
        //   {
        //     key: "P60-1",
        //     y: 256
        //   },
        //   {
        //     key: "P60-2",
        //     y: 445
        //   },
        //   {
        //     key: "P40",
        //     y: 225
        //   },
        //   {
        //     key: "P73",
        //     y: 127
        //   },
        //   {
        //     key: "P71",
        //     y: 128
        //   }
        // ];
        // this.dashboardData.siteNames = [
        // for (let i = 0; i < this.dashboardData.siteNames.length; i++) {
        //   let obj = {
        //     siteNames: this.dashboardData.siteNames[i],
        //     siteCount: this.dashboardData.siteCount[i]
        //   }
        //   this.chartData.push(obj);
        // }
        // this.data = this.chartData;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedLoginResource.subscribe(function (data) { return _this.isLoggedIn = data; });
        if (this.isLoggedIn) {
            this.getDashBoardData();
        }
        else {
            this.getDashBoardData();
            setTimeout(function () {
                document.getElementById('login').click();
            }, 500);
        }
    };
    DashboardComponent.prototype.setRefreshInterval = function (intervalData) {
        // alert(JSON.stringify(intervalData));
        setInterval(function () {
            this.getDashboardData();
        }, intervalData.value);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<div class=\"row\" style=\"margin-top: 25px;\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"col-md-2 \">\r\n      <button class=\"btn btn-success btn-block\" (click)=\"exportToCsv();\"><span class=\"glyphicon glyphicon-download-alt\"\r\n          aria-hidden=\"true\"></span>&nbsp;Export to CSV</button>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <button class=\"btn btn-success btn-block\" (click)=\"archiveChannels();\"><span\r\n          class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span>&nbsp;&nbsp;Archive channels\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-4 pull-right\">\r\n      Last refreshed: {{lastRefreshed | date:'medium'}}&nbsp;&nbsp;&nbsp;\r\n      <button class=\"btn btn-sm btn-default\" (click)=\"getGridData();\"><span class=\"glyphicon glyphicon-refresh\"\r\n          aria-hidden=\"true\"></span></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ag-grid-angular style=\"width: 100%; height: 500px; margin-top: 10px;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n  [columnDefs]=\"columnDefs\" [enableColResize]=\"true\" [enableSorting]=\"true\" [enableFilter]=\"true\"\r\n  [gridOptions]=\"gridOptions\" [paginationPageSize]=20 [pagination]=\"true\" [rowSelection]=\"rowSelection\">\r\n</ag-grid-angular>\r\n<div *ngIf=\"showPlayer\" class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-waveform [metaDataChannelName]=channelName></app-waveform>\r\n  </div>\r\n</div>\r\n\r\n<!-- History Modal -->\r\n<ngx-smart-modal #historyModal customClass=\"nsm-dialog-animation-ttb historyModal\" identifier=\"historyModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">History</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <button class=\"btn btn-success widthUnset btn-block\" (click)=\"exportHistoryToCsv();\"><span\r\n            class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span>&nbsp;Export to CSV</button>\r\n      </div>\r\n    </div>\r\n    <ag-grid-angular style=\"width: 100%; height: 500px; margin-top: 40px;\" class=\"ag-theme-balham\"\r\n      [rowData]=\"historyRowData\" [columnDefs]=\"historyColumnDefs\" [gridOptions]=\"historyGridOptions\"\r\n      [enableColResize]=\"true\" [enableSorting]=\"true\" [enableFilter]=\"true\" [paginationPageSize]=20 [pagination]=\"true\">\r\n    </ag-grid-angular>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"historyModal.close()\">Close</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End History Modal -->"

/***/ }),

/***/ "./src/app/components/grid/grid.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nsm-content {\n  width: inherit;\n}\n.historyModal {\n  width: 213%;\n  margin-left: 20%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL0M6L2RldmVsb3BtZW50L1JheXRoZW9uL2F1ZGlvL3VpLzAzLjE4LjIwMTkvdHJ1bmsvc3JjL2FwcC9jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0NDQ0g7QURDQztFQUNBLFlBQUE7RUFDQSxpQkFBQTtDQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkL2dyaWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnNtLWNvbnRlbnR7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbiAgLmhpc3RvcnlNb2RhbHtcbiAgd2lkdGg6IDIxMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIH0iLCIubnNtLWNvbnRlbnQge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5oaXN0b3J5TW9kYWwge1xuICB3aWR0aDogMjEzJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbiJdfQ== */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.rowSelection = "multiple";
        this.showPlayer = false;
        this.channelName = [];
        this.url = "assets/sample.wav";
        this.columnDefs = [
            { headerCheckboxSelection: true, checkboxSelection: true, width: 30 },
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
                headerName: 'Last modified time', field: 'lastModifiedTs', cellRenderer: function (data) {
                    return data.value ? (new Date(data.value)).toLocaleDateString() + ' ' + (new Date(data.value)).toLocaleTimeString() : '';
                }
            }
        ];
    }
    GridComponent.prototype.getHistory = function (e) {
        var _this = this;
        this.dataService.getHistoryData(e.rowData.id)
            .subscribe(function (response) {
            // this.ngxSmartModalService.setModalData(response, 'historyModal');
            _this.historyRowData = response;
            _this.ngxSmartModalService.getModal('historyModal').open();
        }, function (error) {
            console.log(error);
            // this.openHistoryModal(error, e, false) 
        });
    };
    ;
    GridComponent.prototype.exportToCsv = function () {
        var params = {
            columnKeys: ["channelName", "stndSite.nm", "mediaOriginatedIp", "mediaOriginatedPort", "standardClassification.nm", "stndRole.nm"],
            fileName: 'AudioExport.csv',
            suppressQuotes: true
        };
        this.gridOptions.api.exportDataAsCsv(params);
    };
    ;
    GridComponent.prototype.exportHistoryToCsv = function () {
        var params = {
            columnKeys: ["channelName", "stndSite.descriptionTx", "mediaOriginatedIp", "mediaOriginatedPort", "classification", "stndRole.descriptionTx"],
            fileName: 'AudioHitoryExport.csv',
            suppressQuotes: true
        };
        this.historyGridOptions.api.exportDataAsCsv(params);
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
            _this.toastr.success('', 'Retrieved ' + rowData.length + ' records', {
                timeOut: 10000
            });
        });
    };
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.sharedDataSource.subscribe(function (data) { return _this.rowData = data; });
        this.getGridData();
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

module.exports = "<div class=\"navbar-brand\">vEAS</div>\r\n<button class=\"btn btn-link navbarLinks\" routerLink=\"/dashboard\">Dashboard</button>\r\n<button class=\"btn btn-link navbarLinks\" routerLink=\"/view\">Recordings</button>\r\n<button class=\"btn btn-link navbarLinks\" *ngIf=\"loggedIn && !guestUser\"\r\n  (click)=\"ngxSmartModalService.getModal('manageChannelModal').open()\">Manage\r\n  Channels</button>\r\n<button class=\"btn btn-link navbarLinks\" *ngIf=\"loggedIn\"\r\n  (click)=\"ngxSmartModalService.getModal('uploadFileModal').open()\">Upload\r\n  File</button>\r\n<button class=\"btn btn-link navbarLinks pull-right\" *ngIf=\"!loggedIn\" id=\"login\"\r\n  (click)=\"ngxSmartModalService.getModal('loginModal').open()\">Sign\r\n  In</button>\r\n<button class=\"btn btn-link navbarLinks pull-right\" *ngIf=\"loggedIn\" (click)=\"checkLogOut(false);\">Sign Out</button>\r\n\r\n<!-- Manage channel modal -->\r\n<ngx-smart-modal #manageChannelModal customClass=\"nsm-dialog-animation-ttb\" identifier=\"manageChannelModal\"\r\n  [closable]='false'>\r\n  <div class=\"modal-header\">\r\n\r\n    <div class=\"col-md-12  modal-title\">\r\n      <div class=\"col-md-6 pull-left\">\r\n        <h4>Manage channels</h4>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\" pull-right\">\r\n          <button style=\"font-size: 19px;\r\n            border: none;\r\n            background: none; \" (click)=\"clearChannelInfo(); manageChannelModal.close()\"> <i\r\n              class=\"fa fa-times-thin fa-2x\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"availableChannels\">Search channels</label>\r\n        <input class=\"form-control\" type=\"text\" list=\"manageChannel\" [(ngModel)]='searchText'\r\n          (ngModelChange)=\"onChannelChanged($event)\">\r\n        <!-- [ngModel]=\"easMediaDataToCreate.channelName\"\r\n        (ngModelChange)=\"populateChannel($event)\" -->\r\n        <!-- <datalist id=\"citynames\">\r\n  <option value=\"Boston\">\r\n  <option value=\"Cambridge\">\r\n</datalist> -->\r\n        <datalist id=\"manageChannel\">\r\n\r\n          <option *ngFor=\"let channel of channelList\" [ngValue]=\"channel\">{{channel.channelName}}</option>\r\n        </datalist>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"channelName\">Channel name *</label>\r\n        <input class=\"form-control\" required id=\"channelName\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.channelName\" #manageChannel=\"ngModel\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"siteId\">Site ID *</label>\r\n        <select class=\"form-control\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.stndSite.id\">\r\n          <option value=\"\">Select a site id...</option>\r\n          <option *ngFor=\"let siteId of siteIdList.results\" [value]=\"siteId.id\">{{siteId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageSiteModal').open()\"><span class=\"glyphicon glyphicon-plus\"\r\n            aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"originatedIp\">Originated IP *</label>\r\n        <input class=\"form-control\" id=\"originatedIp\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.mediaOriginatedIp\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"originatedPort\">Originated port *</label>\r\n        <input class=\"form-control\" id=\"originatedPort\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.mediaOriginatedPort\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"manageClassification\">Classification *</label>\r\n        <select class=\"form-control\" name=\"manageClassification\" id=\"manageClassification\"\r\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaDataToCreate.standardClassification.id\">\r\n          <option value=\"\">Select a classification...</option>\r\n          <option *ngFor=\"let classificationId of classificationList.results\" [value]=\"classificationId.id\">\r\n            {{classificationId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageClassificationModal').open()\"><span\r\n            class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"manageClassification\">Classification *</label>\r\n        <input class=\"form-control\" id=\"manageClassification\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.classification\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-8 col-sm-offset-1\">\r\n        <label for=\"roleId\">Role ID *</label>\r\n        <select class=\"form-control\" name=\"roleId\" id=\"roleId\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.stndRole.id\">\r\n          <option value=\"\">Select a role id...</option>\r\n          <option *ngFor=\"let roleId of roleIdList.results\" [value]=\"roleId.id\">{{roleId.nm}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"input-field col-sm-2\">\r\n        <button class=\"btn btn-primary btn-block\" style=\"margin-top: 25px;\"\r\n          (click)=\"ngxSmartModalService.getModal('manageRoleModal').open()\"><span class=\"glyphicon glyphicon-plus\"\r\n            aria-hidden=\"true\"></span></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"active\">Active *</label>\r\n        <select class=\"form-control\" name=\"activeIndSearch\" id=\"activeIndSearch\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.enableIn\">\r\n          <option value=\"\">Select an active indicator...</option>\r\n          <option value=\"TRUE\">Active</option>\r\n          <option value=\"FALSE\">Inactive</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"encodingFormat\">Encoding format</label>\r\n        <input class=\"form-control\" id=\"encodingFormat\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\r\n          [(ngModel)]=\"easMediaDataToCreate.encodingFormat\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearChannelInfo(); manageChannelModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateChannelButton\" (click)=\"addChannel();\">Add\r\n      channel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateChannelButton\" (click)=\"updateChannel();\">Update\r\n      channel</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Manage Channel Modal -->\r\n\r\n<!-- Manage Site Modal -->\r\n<ngx-smart-modal #manageSiteModal customClass=\"nsm-dialog-animation-ttb\" identifier=\"manageSiteModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage site</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteId\">Available sites</label>\r\n        <select class=\"form-control\" name=\"siteid\" id=\"manageSiteid\" [ngModel]=\"stndSite\"\r\n          (ngModelChange)=\"populateSite($event)\">\r\n          <option value=\"\">Select a site...</option>\r\n          <option *ngFor=\"let site of siteIdList.results\" [ngValue]=\"site\">{{site.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteName\">Site name</label>\r\n        <input required class=\"form-control\" id=\"siteName\" type=\"text\" [(ngModel)]=\"stndSite.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"siteDescription\">Site description</label>\r\n        <input required class=\"form-control\" id=\"siteDesription\" type=\"text\" [(ngModel)]=\"stndSite.descriptionTx\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearSite(); manageSiteModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showSiteUpdateButton\" (click)=\"addSite();\">Add site</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showSiteUpdateButton\" (click)=\"updateSite();\">Update\r\n      site</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Site Modal -->\r\n\r\n<!-- Manage Role Modal -->\r\n<ngx-smart-modal #manageRoleModal customClass=\"nsm-dialog-animation-ttb\" identifier=\"manageRoleModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage role</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleId\">Available roles</label>\r\n        <select class=\"form-control\" name=\"roleId\" id=\"manageRoleId\" [ngModel]=\"stndRole\"\r\n          (ngModelChange)=\"populateRole($event)\">\r\n          <option value=\"\">Select a role...</option>\r\n          <option *ngFor=\"let role of roleIdList.results\" [ngValue]=\"role\">{{role.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleName\">Role name</label>\r\n        <input required class=\"form-control\" id=\"roleName\" type=\"text\" [(ngModel)]=\"stndRole.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"roleDescription\">Role description</label>\r\n        <input required class=\"form-control\" id=\"roleDescription\" type=\"text\" [(ngModel)]=\"stndRole.descriptionTx\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearRole(); manageRoleModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateRoleButton\" (click)=\"addRole();\">Add\r\n      role</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateRoleButton\" (click)=\"updateRole();\">Update\r\n      role</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Role Modal -->\r\n\r\n<!-- Manage Classification Modal -->\r\n<ngx-smart-modal #manageClassificationModal customClass=\"nsm-dialog-animation-ttb\"\r\n  identifier=\"manageClassificationModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Manage Classification</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classification\">Available classifications</label>\r\n        <select class=\"form-control\" name=\"classification\" id=\"classification\" [ngModel]=\"standardClassification\"\r\n          (ngModelChange)=\"populateClassification($event)\">\r\n          <option value=\"\">Select a classification...</option>\r\n          <option *ngFor=\"let classification of classificationList.results\" [ngValue]=\"classification\">\r\n            {{classification.nm}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classificationName\">Classification name</label>\r\n        <input required class=\"form-control\" id=\"classificationName\" type=\"text\" [(ngModel)]=\"standardClassification.nm\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"classificationDescription\">Classification description</label>\r\n        <input required class=\"form-control\" id=\"classificationDescription\" type=\"text\"\r\n          [(ngModel)]=\"standardClassification.descriptionTx\" [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\"\r\n      (click)=\"clearClassification(); manageClassificationModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showUpdateClassificationButton\"\r\n      (click)=\"addClassification();\">Add\r\n      classification</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showUpdateClassificationButton\"\r\n      (click)=\"updateClassification();\">Update\r\n      classification</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Add Classification Modal -->\r\n\r\n<!-- Login Modal -->\r\n<ngx-smart-modal #loginModal customClass=\"nsm-dialog-animation-ttb\" identifier=\"loginModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Login</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"loginId\">Login ID</label>\r\n        <input class=\"form-control\" id=\"loginId\" type=\"text\" [(ngModel)]=\"credentials.username\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n        <label for=\"password\">Password</label>\r\n        <input class=\"form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"credentials.password\"\r\n          [ngModelOptions]=\"{standalone: true}\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"loginModal.close()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"login(loginModal)\">Login</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Login Modal -->\r\n\r\n<!-- Upload File Modal -->\r\n<ngx-smart-modal #uploadFileModal customClass=\"nsm-dialog-animation-ttb\" identifier=\"uploadFileModal\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Import file</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row modalInputHeight\">\r\n      <div class=\"form-group\">\r\n        <label for=\"file\">Choose File&nbsp;</label>\r\n        <input class=\"form-control-file\" type=\"file\" id=\"file\" (change)=\"setFile($event.target.files)\">\r\n        <ngx-spinner type=\"square-jelly-box\" fullScreen=\"true\">\r\n          <p style=\"color: white\"> Loading... </p>\r\n        </ngx-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"uploadFileModal.close()\">Close</button>\r\n    <button class=\"btn btn-primary\" (click)=\"handleFileInput(uploadFileModal)\">Upload</button>\r\n  </div>\r\n</ngx-smart-modal>\r\n<!-- End Upload File Modal -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalInputHeight {\n  margin-top: 10px;\n}\n.navbarLinks {\n  color: white;\n  text-decoration: none;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzovZGV2ZWxvcG1lbnQvUmF5dGhlb24vYXVkaW8vdWkvMDMuMTguMjAxOS90cnVuay9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7Q0NDSDtBREVEO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7Q0NBSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbElucHV0SGVpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmF2YmFyTGlua3Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iLCIubW9kYWxJbnB1dEhlaWdodCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubmF2YmFyTGlua3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"

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
            descriptionTx: null,
            endTs: null,
            lastModifiedTs: null,
            lastModifiedUserId: null,
            nm: null,
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
            enableIn: "",
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
        this.guestUser = false;
    }
    NavbarComponent.prototype.getGridData = function () {
        var _this = this;
        this.dataService.getChannelList().subscribe(function (rowData) {
            _this.newGridData = rowData;
            _this.sharedService.changeDataSource(rowData);
        });
    };
    NavbarComponent.prototype.addChannel = function () {
        var _this = this;
        this.easMediaDataToCreate.lastModifiedTs = new Date();
        this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
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
        });
    };
    ;
    NavbarComponent.prototype.addSite = function () {
        var _this = this;
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
        });
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
        });
    };
    ;
    NavbarComponent.prototype.addClassification = function () {
        var _this = this;
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
        });
    };
    ;
    NavbarComponent.prototype.login = function (loginModal) {
        var _this = this;
        this.dataService.login(this.credentials).subscribe(function (response) {
            _this.checkLogin(loginModal);
            _this.guestUser = response.guestUser;
        }, function (error) {
            if (error.status === 401) {
                _this.toastr.error('You are not authorized to access this site.', '', {
                    timeOut: _this.toastrTimeOut
                });
            }
        });
    };
    ;
    NavbarComponent.prototype.onChannelChanged = function (productName) {
        console.log(productName);
        this.populateChannel(this.getSelectedChannelByName(productName));
    };
    NavbarComponent.prototype.getSelectedChannelByName = function (selectedName) {
        return this.channelList.find(function (product) { return product.channelName === selectedName; });
    };
    NavbarComponent.prototype.populateChannel = function (selectedChannel) {
        //alert(index);
        if (selectedChannel !== "" && selectedChannel !== undefined) {
            this.easMediaDataToCreate.channelName = selectedChannel.channelName;
            this.easMediaDataToCreate.mediaOriginatedIp = selectedChannel.mediaOriginatedIp;
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
    };
    ;
    NavbarComponent.prototype.clearSite = function () {
        this.stndSite.nm = "";
        this.stndSite.descriptionTx = "";
        // this.showSiteSuccessMsg = false;
        // this.showSiteAddSuccessMsg = false;
        this.showSiteUpdateButton = false;
    };
    ;
    NavbarComponent.prototype.clearRole = function () {
        this.stndRole.nm = "";
        this.stndRole.descriptionTx = "";
        this.showUpdateRoleButton = false;
        // this.showRoleSuccessMsg = false;
        // this.showRoleAddSuccessMsg = false;
    };
    ;
    NavbarComponent.prototype.clearClassification = function () {
        this.standardClassification.nm = "";
        this.standardClassification.descriptionTx = "";
        // this.showSiteSuccessMsg = false;
        // this.showSiteAddSuccessMsg = false;
        this.showUpdateClassificationButton = false;
    };
    ;
    NavbarComponent.prototype.updateSite = function () {
        var _this = this;
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
            });
        });
    };
    ;
    NavbarComponent.prototype.updateRole = function () {
        var _this = this;
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
            });
        });
    };
    ;
    NavbarComponent.prototype.updateClassification = function () {
        var _this = this;
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
            });
        });
    };
    ;
    NavbarComponent.prototype.updateChannel = function () {
        var _this = this;
        if (this.validateChannel()) {
            this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
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
            });
        }
        else {
            this.toastr.error(this.validationMessage, 'Missing fields:', {
                timeOut: this.toastrTimeOut * 2,
                enableHtml: true
            });
        }
    };
    ;
    NavbarComponent.prototype.validateChannel = function () {
        this.validationMessage = "";
        this.validationMessage += '<ul>';
        if (!this.easMediaDataToCreate.channelName.trim()) {
            this.validChannel = false;
            this.validationMessage += '<li>Channel name</li>';
        }
        if (!this.easMediaDataToCreate.stndSite) {
            this.validChannel = false;
            this.validationMessage += '<li>Site</li>';
        }
        if (!this.easMediaDataToCreate.mediaOriginatedIp.trim()) {
            this.validChannel = false;
            this.validationMessage += '<li>Originated IP</li>';
        }
        if (!this.easMediaDataToCreate.mediaOriginatedPort) {
            this.validChannel = false;
            this.validationMessage += '<li>Originated port</li>';
        }
        if (!this.easMediaDataToCreate.standardClassification) {
            this.validChannel = false;
            this.validationMessage += '<li>Classification</li>';
        }
        if (!this.easMediaDataToCreate.stndRole) {
            this.validChannel = false;
            this.validationMessage += '<li>Role</li>';
        }
        if (!this.easMediaDataToCreate.enableIn) {
            this.validChannel = false;
            this.validationMessage += '<li>Active indicator</li>';
        }
        this.validationMessage += '</ul>';
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
            console.log(error);
            _this.toastr.error('Failed to import file. Please try again later', '', {
                timeOut: _this.toastrTimeOut
            });
        });
    };
    ;
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

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"channelName\" class=\"searchLabel\">Channel name</label>\r\n    <input class=\"form-control input-sm\" id=\"channelName\" type=\"text\" (keydown.enter)=\"submitSearch();\"\r\n      [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.channelName\">\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"siteId\" class=\"searchLabel\">Site ID</label>\r\n    <select class=\"form-control input-sm\" name=\"siteid\" id=\"siteid\" [ngModelOptions]=\"{standalone: true}\"\r\n      [(ngModel)]=\"easMediaData.stndSite.id\">\r\n      <option value=\"\">Select a site id...</option>\r\n      <option *ngFor=\"let siteId of siteIdList.results\" [value]=\"siteId.id\">{{siteId.nm}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"originatedIp\" class=\"searchLabel\">Originated IP</label>\r\n    <input class=\"form-control input-sm\" id=\"originatedIp\" type=\"text\" (keydown.enter)=\"submitSearch();\"\r\n      [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.mediaOriginatedIp\">\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"originatedPort\" class=\"searchLabel\">Originated port</label>\r\n    <input class=\"form-control input-sm\" id=\"originatedPort\" type=\"text\" (keydown.enter)=\"submitSearch();\"\r\n      [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.mediaOriginatedPort\">\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"manageClassification\" class=\"searchLabel\">Classification</label>\r\n    <select class=\"form-control input-sm\" name=\"manageClassification\" id=\"manageClassification\"\r\n      [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.standardClassification.id\">\r\n      <option value=\"\">Select a classification...</option>\r\n      <option *ngFor=\"let classificationId of classificationList.results\" [value]=\"classificationId.id\">\r\n        {{classificationId.nm}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"roleId\" class=\"searchLabel\">Role ID</label>\r\n    <select class=\"form-control input-sm\" name=\"roleId\" id=\"roleId\" [ngModelOptions]=\"{standalone: true}\"\r\n      [(ngModel)]=\"easMediaData.stndRole.id\">\r\n      <option value=\"\">Select a role id...</option>\r\n      <option *ngFor=\"let roleId of roleIdList.results\" [value]=\"roleId.id\">{{roleId.nm}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"activeIndSearch\" class=\"searchLabel\">Active indicator</label>\r\n    <select class=\"form-control input-sm\" name=\"activeIndSearch\" id=\"activeIndSearch\"\r\n      [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"easMediaData.enableIn\">\r\n      <option value=\"\">Select an active indicator...</option>\r\n      <option value=\"TRUE\">Active</option>\r\n      <option value=\"FALSE\">Inactive</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"startDate\" class=\"searchLabel\">Start date</label>\r\n    <br>\r\n    <p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"startDate\" ngDefaultControl>\r\n    </p-calendar>\r\n    <span style=\"margin-left:35px\"></span>\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"input-field col-sm-10 col-sm-offset-1\">\r\n    <label for=\"endDate\" class=\"searchLabel\">End date</label>\r\n    <br>\r\n    <p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"endDate\" ngDefaultControl></p-calendar>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row searchHeight\">\r\n  <div class=\"col-sm-5 col-sm-offset-1\">\r\n    <button class=\"btn btn-primary btn-block\" (click)=\"submitSearch();\">Submit</button>\r\n  </div>\r\n  <div class=\"col-sm-5\">\r\n    <button class=\"btn btn-default btn-block\" (click)=\"clearSearch();\">Clear</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchHeight {\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzovZGV2ZWxvcG1lbnQvUmF5dGhlb24vYXVkaW8vdWkvMDMuMTguMjAxOS90cnVuay9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7Q0NDSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hIZWlnaHQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vIC5zZWFyY2hMYWJlbCB7XG4vLyAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gfSIsIi5zZWFyY2hIZWlnaHQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

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
    }
    SearchComponent.prototype.submitSearch = function () {
        var _this = this;
        var queryParams = [];
        var queryString;
        var searchUrl;
        var validDate = true;
        if (this.easMediaData.channelName !== 'undefined' && this.easMediaData.channelName !== null && this.easMediaData.channelName !== '') {
            queryParams.push('channelName=' + this.easMediaData.channelName);
        }
        if (this.easMediaData.stndSite.id) {
            queryParams.push('standardSiteId=' + this.easMediaData.stndSite.id);
        }
        if (this.easMediaData.mediaOriginatedIp !== 'undefined' && this.easMediaData.mediaOriginatedIp !== null && this.easMediaData.mediaOriginatedIp !== '') {
            queryParams.push('mediaOriginatedIp=' + this.easMediaData.mediaOriginatedIp);
        }
        if (this.easMediaData.mediaOriginatedPort) {
            queryParams.push('mediaOriginatedPort=' + this.easMediaData.mediaOriginatedPort);
        }
        if (this.easMediaData.standardClassification.id) {
            queryParams.push('standardClsfId=' + this.easMediaData.standardClassification.id);
        }
        if (this.easMediaData.stndRole.id) {
            queryParams.push('standardRoleId=' + this.easMediaData.stndRole.id);
        }
        if (this.easMediaData.enableIn !== 'undefined' && this.easMediaData.enableIn !== null && this.easMediaData.enableIn !== '') {
            queryParams.push('enableIn=' + this.easMediaData.enableIn);
        }
        if (new Date(this.startDate).getTime() > new Date(this.endDate).getTime()) {
            validDate = false;
            this.toastr.error('Start date cannot be greater than end date', '', {
                timeOut: 10000
            });
        }
        if ((new Date(this.startDate).getTime() && !new Date(this.endDate).getTime()) || (!new Date(this.startDate).getTime() && new Date(this.endDate).getTime())) {
            validDate = false;
            this.toastr.error('Both start date and end date have to be populated', '', {
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
        if (validDate) {
            this.dataService.getSearchData(queryString)
                .subscribe(function (rowData) {
                console.log('Table response: %o', rowData);
                _this.searchData.emit(rowData);
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
        this.easMediaData.stndSite.id = null;
        this.easMediaData.mediaOriginatedIp = null;
        this.easMediaData.mediaOriginatedPort = null;
        this.stndRole.id = null;
        this.easMediaData.enableIn = "";
        this.startDate = '';
        this.endDate = '';
        this.dataService.getChannelList()
            .subscribe(function (channelList) {
            _this.searchData.emit(channelList);
        });
    };
    ;
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

module.exports = "<div *ngIf='isLoggedIn' class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-search (searchData)=\"setSearchData($event)\"> </app-search>\r\n  </div>\r\n  <div class=\"col-sm-10\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <app-grid [receivedOb]=\"recievedObj\"> </app-grid>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");
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
    ViewComponent.prototype.setSearchData = function (rObj) {
        this.recievedObj = rObj;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]),
        __metadata("design:type", Object)
    ], ViewComponent.prototype, "child", void 0);
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/view/view.component.html")
        }),
        __metadata("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<ag-grid-angular style=\"width: 100%; height: 300px; margin-top: 40px;\" class=\"ag-theme-balham\" [rowData]=\"waveformData\"\r\n  [columnDefs]=\"waveformColumnDefs\" [gridOptions]=\"waveFormGridOptions\" [enableColResize]=\"true\" [enableSorting]=\"true\"\r\n  [enableFilter]=\"true\" [paginationPageSize]=20 [rowSelection]=\"rowSelection\"\r\n  (selectionChanged)=\"onSelectionChanged($event)\" [pagination]=\"true\">\r\n</ag-grid-angular>\r\n<div>\r\n  <div [hidden]=\"!enableOnGridClick\">\r\n    <div class=\"col-md-12\" style=\"padding-bottom: 50px; padding-top:10px;\">\r\n\r\n      <div class=\"col-md-4\">\r\n        <label>Start time</label> &nbsp;\r\n        <p-calendar [(ngModel)]=\"startDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"startDate\" ngDefaultControl>\r\n        </p-calendar>\r\n        <span style=\"margin-left:35px\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label>End time</label> &nbsp;\r\n        <p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\" [showTime]=\"true\" name=\"endDate\" ngDefaultControl>\r\n        </p-calendar>\r\n        <span style=\"margin-left:35px\"></span>\r\n\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <button [disabled]='disablePlay' type=\"button\" class=\"btn btn-primary\" (click)=\"loadAudioUrl()\">\r\n          Play\r\n        </button>\r\n        &nbsp;\r\n        <button *ngIf=\"enableDownload\" type=\"button\" class=\"btn btn-primary\" (click)=\"downloadAudio()\">\r\n          <i class=\"fa fa-download\"></i> Download\r\n        </button>\r\n      </div>\r\n      <br>\r\n      <br>\r\n    </div>\r\n\r\n    <div [hidden]=\"!enableWaveForm\" class=\"col-md-12\">\r\n      <div id=\"waveform\"></div>\r\n      <div id=\"waveform-timeline\"></div>\r\n      <br>\r\n      <div *ngIf=\"showPlayer\">\r\n        <button type=\"button\" id=\"button_play\" class=\"btn\" (click)=\"waveSurfer.playPause()\">\r\n          <i class=\"fa fa-play\"></i>/\r\n          <i class=\"fa fa-pause\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n</div>"

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
        ];
    }
    WaveformComponent.prototype.ngOnInit = function () {
        this.showPlayer = false;
        // this.waveFormGridOptions = <GridOptions>{
        //   onGridReady: () => {
        //     this.waveFormGridOptions.api.sizeColumnsToFit();
        //   },
        //   rowHeight: 35
        // };
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
    };
    WaveformComponent.prototype.loadAudioUrl = function () {
        var _this = this;
        if (this.isWavformExist) {
            this.waveSurfer.pause();
            this.waveSurfer.empty();
        }
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
            console.log(response);
        }, function (error) {
            if (error.status != 200) {
                _this.toastr.error('No audio found', '', {
                    timeOut: _this.toastrTimeOut
                });
                _this.enableDownload = false;
            }
            if (error.status === 200) {
                _this.enableWaveForm = true;
                _this.constructWaveSurfer(error.error.text);
                _this.disablePlay = false;
                _this.audioFileName = _this.getAudioFileName(error.error.text);
                _this.enableDownload = true;
            }
            console.log(error);
        });
    };
    WaveformComponent.prototype.getAudioFileName = function (audioUrl) {
        var arrVars = audioUrl.split("/");
        return arrVars.pop();
    };
    WaveformComponent.prototype.downloadAudio = function () {
        this.dataService.downloadAudio(this.audioFileName);
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
var fileUploadOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' })
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
        this.updateClassificationUrl = this.baseUrl + 'standard-classification';
        this.dashboardInfoUrl = this.baseUrl + '/dashboard-info';
        this.getChannelData = this.baseUrl + '/eas-media-data-activity?channelName=';
        this.getDownloadAudio = this.baseUrl + '/downloadClip/';
        this.urlByChannelName = this.baseUrl + '/fetch-audio';
        this.authenticateUserUrl = this.baseUrl + '/authenticate';
        this.dashboardArray = [];
    }
    DataService.prototype.getChannelList = function () {
        return this.http.get(this.getChannelListUrl);
    };
    ;
    DataService.prototype.getSiteIdList = function () {
        return this.http.get(this.getSiteIdListUrl);
    };
    ;
    DataService.prototype.getRoleIdList = function () {
        return this.http.get(this.getRoleIdListUrl);
    };
    ;
    DataService.prototype.getDataByChannelName = function (channelName) {
        return this.http.get(this.getChannelData + channelName);
    };
    ;
    DataService.prototype.downloadAudio = function (audioFileName) {
        window.open(this.getDownloadAudio + audioFileName, "_blank");
    };
    DataService.prototype.getUrlByChannelName = function (AudioInputs) {
        return this.http.post(this.urlByChannelName, AudioInputs, httpOptions);
    };
    ;
    DataService.prototype.getClassificationList = function () {
        return this.http.get(this.getClassificationUrl);
    };
    ;
    DataService.prototype.addClassification = function (newClassification) {
        return this.http.post(this.addClassificationUrl, newClassification, httpOptions);
    };
    ;
    DataService.prototype.addChannel = function (newChannel) {
        return this.http.post(this.addChannelUrl, newChannel, httpOptions);
    };
    ;
    DataService.prototype.addSite = function (newSite) {
        return this.http.post(this.addSiteUrl, newSite, httpOptions);
    };
    ;
    DataService.prototype.addRole = function (newRole) {
        return this.http.post(this.addRoleUrl, newRole, httpOptions);
    };
    ;
    DataService.prototype.getSearchData = function (queryString) {
        var url = this.baseUrl + '/eas-media-data?' + queryString;
        return this.http.get(url);
    };
    ;
    DataService.prototype.getHistoryData = function (id) {
        return this.http.get(this.historyDataUrl + '?easMediaDataId=' + id);
    };
    ;
    DataService.prototype.archiveChannels = function (channelList) {
        return this.http.post(this.archiveChannelsUrl, channelList, httpOptions);
    };
    ;
    DataService.prototype.updateSite = function (siteInfo) {
        return this.http.put(this.updateSiteUrl, siteInfo, httpOptions);
    };
    ;
    DataService.prototype.updateRole = function (roleInfo) {
        return this.http.put(this.updateRoleUrl, roleInfo, httpOptions);
    };
    ;
    DataService.prototype.updateClassification = function (classificationInfo) {
        return this.http.put(this.updateClassificationUrl, classificationInfo, httpOptions);
    };
    ;
    DataService.prototype.updateChannel = function (channelInfo) {
        return this.http.put(this.updateChannelUrl, channelInfo, httpOptions);
    };
    ;
    DataService.prototype.getDashboardData = function () {
        return this.http.get(this.dashboardInfoUrl);
    };
    ;
    DataService.prototype.login = function (credentials) {
        return this.http.post(this.authenticateUserUrl, credentials, httpOptions);
    };
    DataService.prototype.postFile = function (fileToUpload) {
        //const endpoint = 'http://localhost:8080/mass-upload';
        var endpoint = this.getUrlBase() + '/mass-upload';
        // const formData: FormData = new FormData();
        // formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http
            .post(endpoint, fileToUpload)
            // .map(() => { return true; });
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return true; }));
    };
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
        this.changeDashboardDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.sharedLoginResource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentMessage = this.sharedDataSource.asObservable();
        this.currentLogin = this.sharedLoginResource.asObservable();
        this.currentSitId = this.sharedSiteIdDataSource.asObservable();
        this.currentRoleId = this.sharedRoleIdDataSource.asObservable();
        this.currentClassData = this.sharedClassDataSource.asObservable();
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
    SharedService.prototype.changeDashboardData = function (data) {
        this.changeDashboardDataSource.next(data);
    };
    SharedService.prototype.changeRoleIdData = function (data) {
        this.sharedRoleIdDataSource.next(data);
    };
    SharedService.prototype.changeClassData = function (data) {
        this.sharedClassDataSource.next(data);
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

module.exports = __webpack_require__(/*! C:\development\Raytheon\audio\ui\03.18.2019\trunk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
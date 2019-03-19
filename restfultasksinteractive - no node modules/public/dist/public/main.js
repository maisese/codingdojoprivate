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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to Mai's Restful API Assignment {{ title }} - Continued!!\n  </h1>\n\n</div>\n\n<div class=\"container center\">\n\n  <button (click)=\"jellyTrue()\" class=\"center\">Click me to get Task Titles!</button>\n  <h1>All the Tasks</h1>\n  <div *ngIf=\"jelly\">\n    <!-- if variable jelly is truthy -->\n    <div *ngFor=\"let nuts of peanutbutter.tasks\" value=\"false\">Title: {{nuts.title}} | <button (click)=\"showdesc(nuts)\" class=\"center\">Click me to get the description!</button></div>\n  </div>\n  <hr>\n\n  \n  <h1>All the Desc(s)</h1>\n  <div *ngIf=\"showtaskdesc\"> {{showtaskdesc.description}}</div>\n\n  \n  <!-- <div *ngIf=\"bananas\">\n    <div *ngFor=\"let nuts of peanutbutter.tasks\" value=\"false\">Description {{nuts.description}}</div>\n  </div> -->\n\n\n\n  <h1>Below is the Latest Task</h1>\n  <h3>Title: {{lastTask.title}} | Description {{lastTask.description}}</h3>\n\n\n\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    //
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //this is how the page is loaded
        this.getalltasks();
        // this.deleteTask();
        this.jelly = false;
        this.bananas = false;
    };
    ;
    AppComponent.prototype.getalltasks = function () {
        var _this = this;
        console.log('in get task');
        var tempObservable = this._httpService.getalltasks();
        tempObservable.subscribe(function (data) {
            console.log("Got our tasks!", data);
            _this.peanutbutter = data;
            // this.editTaskid = data["tasks"][data['tasks'].length - 1]["_id"]
            _this.lastTask = data["tasks"][data['tasks'].length - 1];
        });
    };
    ;
    AppComponent.prototype.postTask = function () {
        console.log('in post task');
        var tempObservable = this._httpService.postTask({});
        tempObservable.subscribe(function (data) { return console.log("Posting your task!", data); });
    };
    ;
    AppComponent.prototype.getEditTask = function () {
        console.log('the get edit task');
        var tempObservable = this._httpService.getEditTask({});
        tempObservable.subscribe(function (data) { return console.log("Got your ONE task to edit!", data); });
    };
    ;
    AppComponent.prototype.putEditTask = function () {
        console.log('in the put edit task');
        var tempObservable = this._httpService.putEditTask({});
        //go to postman, and place test object here, change order of operations on load. Go to NGonit, and put this route first.
        tempObservable.subscribe(function (data) { return console.log("Updating your ONE task!", data); });
    };
    ;
    AppComponent.prototype.deleteTask = function () {
        console.log('in the delete task');
        var tempObservable = this._httpService.deleteTask({
            _id: "5c8d95cf2afbf736141374d8",
            title: "go home and nap",
            description: "probably for a while",
            completed: false,
            createdAt: "2019-03-17T00:33:19.197Z",
            updatedAt: "2019-03-17T00:33:19.197Z",
            __v: 0
        });
        tempObservable.subscribe(function (data) { return console.log("Deleting this one task!", data); });
    };
    ;
    AppComponent.prototype.jellyTrue = function () {
        this.jelly = true;
    };
    ;
    AppComponent.prototype.showdesc = function (task) {
        this.showtaskdesc = task;
    };
    ;
    AppComponent.prototype.bananasTrue = function () {
        this.bananas = true;
    };
    ;
    AppComponent.prototype.onButtonClickParam = function (num) {
        console.log("Click event is working with num param: " + num);
        // call the service's method to post the data, but make sure the data is bundled up in an object!
        var observable = this._httpService.postToServer({ data: num });
        observable.subscribe(function (data) { return console.log("Got our data!", data); });
    };
    ;
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getalltasks = function () {
        return this._http.get('/tasks');
    };
    HttpService.prototype.postTask = function (obj) {
        return this._http.post('/task/new', obj);
    };
    //to pass data to the database, in angular, you will pass it an object, and you will use obj
    HttpService.prototype.getEditTask = function (obj) {
        return this._http.get('/task/edit/', obj);
    };
    HttpService.prototype.putEditTask = function (obj) {
        return this._http.put('/task/' + obj["_id"], obj);
    };
    HttpService.prototype.deleteTask = function (obj) {
        return this._http.delete('/task/delete/' + obj["_id"], obj);
    };
    HttpService.prototype.postToServer = function (num) {
        // use the .post() method of HttpClient
        // num must be an object
        // provide the url of your post route - make sure this is set up in your server!
        return this._http.post('/tasks', num);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! C:\Users\Mai\Desktop\restfultaskspost\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
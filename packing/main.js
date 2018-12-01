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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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

module.exports = "<form [formGroup]=\"form\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\"><h1>Förpackningar</h1></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <svg\n          class=\"img-fluid\"\n          [attr.viewBox]=\"viewBox$ | async\"\n          class=\"bg-light\"\n          style=\"max-height: 400px\"\n          preserveAspectRatio=\"xMidYMid meet\"\n          width=\"500\"\n        >\n          <g *ngFor=\"let bin of (packedResult$ | async); index as idx\">\n            <rect\n              [attr.x]=\"bin.x\"\n              [attr.y]=\"bin.y\"\n              [attr.width]=\"bin.width\"\n              [attr.height]=\"bin.height\"\n              [ngClass]=\"bin.item.color\"\n            ></rect>\n            <text\n              [attr.x]=\"bin.x\"\n              [attr.y]=\"bin.y + 16\"\n              style=\"fill:#333\"\n              [textContent]=\"bin.width + '*' + bin.height\"\n            ></text>\n          </g>\n        </svg>\n      </div>\n    </div>\n\n    <ng-container\n      formArrayName=\"bins\"\n      *ngFor=\"let bin of form.get('bins')?.controls; index as idx\"\n    >\n      <div\n        class=\"form-row\"\n        [ngClass]=\"bin.get('color').value\"\n        [formGroupName]=\"idx\"\n      >\n        <div class=\"col-sm-12 col-md-2\">\n          <label>Bredd</label>\n          <input class=\"form-control\" type=\"number\" formControlName=\"width\" />\n        </div>\n        <div class=\"col-sm-12 col-md-2\">\n          <label>Höjd</label>\n          <input class=\"form-control\" type=\"number\" formControlName=\"height\" />\n        </div>\n        <div class=\"col\">\n          <button class=\"btn btn-danger mt-4\" (click)=\"removeBin(idx)\">\n            <svg\n              version=\"1.1\"\n              id=\"Layer_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              width=\"24px\"\n              height=\"24px\"\n              viewBox=\"0 0 92 92\"\n              enable-background=\"new 0 0 92 92\"\n              xml:space=\"preserve\"\n            >\n              <path\n                id=\"XMLID_1348_\"\n                d=\"M78.4,30.4l-3.1,57.8c-0.1,2.1-1.9,3.8-4,3.8H20.7c-2.1,0-3.9-1.7-4-3.8l-3.1-57.8\n\tc-0.1-2.2,1.6-4.1,3.8-4.2c2.2-0.1,4.1,1.6,4.2,3.8l2.9,54h43.1l2.9-54c0.1-2.2,2-3.9,4.2-3.8C76.8,26.3,78.5,28.2,78.4,30.4z\n\t M89,17c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4s1.8-4,4-4h22V4c0-1.9,1.3-3,3.2-3h27.6C61.7,1,63,2.1,63,4v9h22C87.2,13,89,14.8,89,17z\n\t M36,13h20V8H36V13z M37.7,78C37.7,78,37.7,78,37.7,78c2,0,3.5-1.9,3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5c-1.9,0-3.5,1.6-3.4,3.6\n\tl1,43.3C34.2,76.3,35.8,78,37.7,78z M54.2,78c1.9,0,3.5-1.6,3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6c-2,0-3.5,1.5-3.6,3.4l-1,43.2\n\tC50.6,76.3,52.2,78,54.2,78C54.1,78,54.1,78,54.2,78z\"\n              />\n            </svg>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <button class=\"btn btn-success\" (click)=\"addBin()\">\n          Lägg till förpackning\n          <!--\n            Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)\n          -->\n          <svg\n            version=\"1.1\"\n            id=\"Layer_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"24px\"\n            height=\"24px\"\n            viewBox=\"0 0 92 92\"\n            enable-background=\"new 0 0 92 92\"\n            xml:space=\"preserve\"\n          >\n            <path\n              id=\"XMLID_933_\"\n              d=\"M72.5,46.5c0,2.5-2,4.5-4.5,4.5H50v17c0,2.5-2,4.5-4.5,4.5S41,70.5,41,68V51H24c-2.5,0-4.5-2-4.5-4.5\n          \ts2-4.5,4.5-4.5h17V24c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v18h18C70.5,42,72.5,44,72.5,46.5z\"\n            />\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row {\n  border-left-width: 5px;\n  border-left-style: solid;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px; }\n  .form-row.black {\n    border-left-color: #000000; }\n  .form-row.silver {\n    border-left-color: #c0c0c0; }\n  .form-row.gray {\n    border-left-color: #808080; }\n  .form-row.white {\n    border-left-color: #fff; }\n  .form-row.maroon {\n    border-left-color: #800000; }\n  .form-row.red {\n    border-left-color: #ff0000; }\n  .form-row.purple {\n    border-left-color: #800080; }\n  .form-row.fuchsia {\n    border-left-color: #ff00ff; }\n  .form-row.green {\n    border-left-color: #008000; }\n  .form-row.lime {\n    border-left-color: #00ff00; }\n  .form-row.olive {\n    border-left-color: #808000; }\n  .form-row.yellow {\n    border-left-color: #ffff00; }\n  .form-row.navy {\n    border-left-color: #000080; }\n  .form-row.blue {\n    border-left-color: #0000ff; }\n  .form-row.teal {\n    border-left-color: #008080; }\n  .form-row.aqua {\n    border-left-color: #00ffff; }\n  svg .black {\n  fill: #000000; }\n  svg .silver {\n  fill: #c0c0c0; }\n  svg .gray {\n  fill: #808080; }\n  svg .white {\n  fill: #fff; }\n  svg .maroon {\n  fill: #800000; }\n  svg .red {\n  fill: #ff0000; }\n  svg .purple {\n  fill: #800080; }\n  svg .fuchsia {\n  fill: #ff00ff; }\n  svg .green {\n  fill: #008000; }\n  svg .lime {\n  fill: #00ff00; }\n  svg .olive {\n  fill: #808000; }\n  svg .yellow {\n  fill: #ffff00; }\n  svg .navy {\n  fill: #000080; }\n  svg .blue {\n  fill: #0000ff; }\n  svg .teal {\n  fill: #008080; }\n  svg .aqua {\n  fill: #00ffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXE1hcnRpblxcRG9jdW1lbnRzXFxjb2RlXFxwYWNraW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLDZCQUE0QjtFQUM1QixnQ0FBK0IsRUFnRWhDO0VBcEVEO0lBTUksMkJBQTBCLEVBQzNCO0VBUEg7SUFVSSwyQkFBMEIsRUFDM0I7RUFYSDtJQWNJLDJCQUEwQixFQUMzQjtFQWZIO0lBa0JJLHdCQUF1QixFQUN4QjtFQW5CSDtJQXNCSSwyQkFBMEIsRUFDM0I7RUF2Qkg7SUEwQkksMkJBQTBCLEVBQzNCO0VBM0JIO0lBOEJJLDJCQUEwQixFQUMzQjtFQS9CSDtJQWtDSSwyQkFBMEIsRUFDM0I7RUFuQ0g7SUFzQ0ksMkJBQTBCLEVBQzNCO0VBdkNIO0lBMENJLDJCQUEwQixFQUMzQjtFQTNDSDtJQThDSSwyQkFBMEIsRUFDM0I7RUEvQ0g7SUFrREksMkJBQTBCLEVBQzNCO0VBbkRIO0lBc0RJLDJCQUEwQixFQUMzQjtFQXZESDtJQTBESSwyQkFBMEIsRUFDM0I7RUEzREg7SUE4REksMkJBQTBCLEVBQzNCO0VBL0RIO0lBa0VJLDJCQUEwQixFQUMzQjtFQUVIO0VBRUksY0FBYSxFQUNkO0VBSEg7RUFNSSxjQUFhLEVBQ2Q7RUFQSDtFQVVJLGNBQWEsRUFDZDtFQVhIO0VBY0ksV0FBVSxFQUNYO0VBZkg7RUFrQkksY0FBYSxFQUNkO0VBbkJIO0VBc0JJLGNBQWEsRUFDZDtFQXZCSDtFQTBCSSxjQUFhLEVBQ2Q7RUEzQkg7RUE4QkksY0FBYSxFQUNkO0VBL0JIO0VBa0NJLGNBQWEsRUFDZDtFQW5DSDtFQXNDSSxjQUFhLEVBQ2Q7RUF2Q0g7RUEwQ0ksY0FBYSxFQUNkO0VBM0NIO0VBOENJLGNBQWEsRUFDZDtFQS9DSDtFQWtESSxjQUFhLEVBQ2Q7RUFuREg7RUFzREksY0FBYSxFQUNkO0VBdkRIO0VBMERJLGNBQWEsRUFDZDtFQTNESDtFQThESSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1yb3cge1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAmLmJsYWNrIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgJi5zaWx2ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNjMGMwYzA7XHJcbiAgfVxyXG5cclxuICAmLmdyYXkge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MDgwODA7XHJcbiAgfVxyXG5cclxuICAmLndoaXRlIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJi5tYXJvb24ge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MDAwMDA7XHJcbiAgfVxyXG5cclxuICAmLnJlZCB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmMDAwMDtcclxuICB9XHJcblxyXG4gICYucHVycGxlIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODAwMDgwO1xyXG4gIH1cclxuXHJcbiAgJi5mdWNoc2lhIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmYwMGZmO1xyXG4gIH1cclxuXHJcbiAgJi5ncmVlbiB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwODAwMDtcclxuICB9XHJcblxyXG4gICYubGltZSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwZmYwMDtcclxuICB9XHJcblxyXG4gICYub2xpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4MDgwMDA7XHJcbiAgfVxyXG5cclxuICAmLnllbGxvdyB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZmYwMDtcclxuICB9XHJcblxyXG4gICYubmF2eSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDA4MDtcclxuICB9XHJcblxyXG4gICYuYmx1ZSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDBmZjtcclxuICB9XHJcblxyXG4gICYudGVhbCB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwODA4MDtcclxuICB9XHJcblxyXG4gICYuYXF1YSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwZmZmZjtcclxuICB9XHJcbn1cclxuc3ZnIHtcclxuICAuYmxhY2sge1xyXG4gICAgZmlsbDogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5zaWx2ZXIge1xyXG4gICAgZmlsbDogI2MwYzBjMDtcclxuICB9XHJcblxyXG4gIC5ncmF5IHtcclxuICAgIGZpbGw6ICM4MDgwODA7XHJcbiAgfVxyXG5cclxuICAud2hpdGUge1xyXG4gICAgZmlsbDogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5tYXJvb24ge1xyXG4gICAgZmlsbDogIzgwMDAwMDtcclxuICB9XHJcblxyXG4gIC5yZWQge1xyXG4gICAgZmlsbDogI2ZmMDAwMDtcclxuICB9XHJcblxyXG4gIC5wdXJwbGUge1xyXG4gICAgZmlsbDogIzgwMDA4MDtcclxuICB9XHJcblxyXG4gIC5mdWNoc2lhIHtcclxuICAgIGZpbGw6ICNmZjAwZmY7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW4ge1xyXG4gICAgZmlsbDogIzAwODAwMDtcclxuICB9XHJcblxyXG4gIC5saW1lIHtcclxuICAgIGZpbGw6ICMwMGZmMDA7XHJcbiAgfVxyXG5cclxuICAub2xpdmUge1xyXG4gICAgZmlsbDogIzgwODAwMDtcclxuICB9XHJcblxyXG4gIC55ZWxsb3cge1xyXG4gICAgZmlsbDogI2ZmZmYwMDtcclxuICB9XHJcblxyXG4gIC5uYXZ5IHtcclxuICAgIGZpbGw6ICMwMDAwODA7XHJcbiAgfVxyXG5cclxuICAuYmx1ZSB7XHJcbiAgICBmaWxsOiAjMDAwMGZmO1xyXG4gIH1cclxuXHJcbiAgLnRlYWwge1xyXG4gICAgZmlsbDogIzAwODA4MDtcclxuICB9XHJcblxyXG4gIC5hcXVhIHtcclxuICAgIGZpbGw6ICMwMGZmZmY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var bin_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bin-pack */ "./node_modules/bin-pack/index.js");
/* harmony import */ var bin_pack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bin_pack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.viewBoxSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('0 0 0 0');
        this.colors = [
            'black',
            'silver',
            'gray',
            'white',
            'maroon',
            'red',
            'purple',
            'fuchsia',
            'green',
            'lime',
            'olive',
            'yellow',
            'navy',
            'blue',
            'teal',
            'aqua'
        ];
        this.viewBox$ = this.viewBoxSubject.asObservable();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            bins: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.packedResult$ = this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (values) {
            var result = bin_pack__WEBPACK_IMPORTED_MODULE_2__(values.bins);
            _this.viewBoxSubject.next("0 0 " + result.width + " " + result.height);
            return result.items;
        }));
    }
    AppComponent.prototype.addBin = function () {
        var arr = this.form.get('bins');
        arr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.colors[arr.length]),
            x: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            y: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        }));
    };
    AppComponent.prototype.removeBin = function (idx) {
        this.form.get('bins').removeAt(idx);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! E:\Martin\Documents\code\packing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
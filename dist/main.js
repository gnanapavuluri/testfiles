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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Multiple dropdown test in Angular with NgRx Store';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"container\">\n      <mat-toolbar color=\"primary\">\n        {{ title }}\n      </mat-toolbar>\n      <select-component></select-component>\n    </div>\n  "
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material */ "./src/app/material/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_11__["MutilselectDropdownComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["REDUCERS"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_10__["META_REDUCERS"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_10__["EFFECTS"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument()
            ],
            entryComponents: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: MutilselectDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_component_select_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-component/select-component.component */ "./src/app/components/select-component/select-component.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutilselectDropdownComponent", function() { return _select_component_select_component_component__WEBPACK_IMPORTED_MODULE_0__["MutilselectDropdownComponent"]; });


// export * from './bottom-sheet/bottom-sheet.component';


/***/ }),

/***/ "./src/app/components/select-component/select-component.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/select-component/select-component.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  flex: 1;\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/select-component/select-component.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/select-component/select-component.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-card>\n        <mat-card-title>\n            Region/Country Form\n        </mat-card-title>\n        <mat-card-content>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <mat-form-field class=\"full-width\">\n                        <!-- <label for=\"category\">Categories</label> -->\n                        <mat-select name=\"category\" placeholder=\"Region\" formControlName=\"categorySelect\">\n                            <mat-option *ngFor=\"let category of categories$ | async; trackBy: ngForTrackByFn\" [value]=\"category\"> {{ category.label }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-md-12\">&nbsp;</div>\n\n                <div class=\"col-md-12\">\n                    <mat-form-field class=\"full-width\">\n                        <!-- <label for=\"product\">Products</label> -->\n                        <mat-select name=\"product\" placeholder=\"Country\" formControlName=\"productSelect\">\n                            <mat-optgroup *ngFor=\"let group of products$ | async\" [label]=\"group.category.label\">\n                                <mat-option *ngFor=\"let product of group.products; trackBy: ngForTrackByFn\" [value]=\"product\">\n                                    {{ product.name }}\n                                </mat-option>\n                            </mat-optgroup>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </div>\n        </mat-card-content>\n\n\n\n        <div class=\"col-md-12\">&nbsp;</div>\n        <div class=\"col-md-12\">\n            <mat-card-title *ngIf=\"this.orderForm.value.productSelect\">\n                Country Details\n            </mat-card-title>\n            <table class=\"table\" *ngIf=\"this.orderForm.value.productSelect\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Capital</th>\n                        <th scope=\"col\">Population</th>\n                        <th scope=\"col\">Currencies</th>\n                        <th scope=\"col\">Flag</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">{{orderForm.value.productSelect.name}}</th>\n                        <td>{{orderForm.value.productSelect.capital}}</td>\n                        <td>{{orderForm.value.productSelect.population}}</td>\n                        <td>\n                            <div *ngFor=\"let currency of orderForm.value.productSelect.currencies\">\n                                Currency Code: {{currency.code}}<br> Currency Name: {{currency.name}}<br> Currency Symbol: {{currency.symbol}}<br>\n                                <p>&nbsp;</p>\n                            </div>\n\n                        </td>\n                        <td><img src=\"{{orderForm.value.productSelect.flag}}\" width=100 /></td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n\n    </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/components/select-component/select-component.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/select-component/select-component.component.ts ***!
  \***************************************************************************/
/*! exports provided: MutilselectDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutilselectDropdownComponent", function() { return MutilselectDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
var MutilselectDropdownComponent = /** @class */ (function () {
    function MutilselectDropdownComponent(formBuilder, bottomSheet, store) {
        this.formBuilder = formBuilder;
        this.bottomSheet = bottomSheet;
        this.store = store;
        this.ngForTrackByFn = function (index, item) {
            return item.id;
        };
        this.initForm();
        this.categories$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_6__["getCategories"]);
    }
    MutilselectDropdownComponent.prototype.initForm = function () {
        var _this = this;
        this.orderForm = this.formBuilder.group({
            categorySelect: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productSelect: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        var fromStore$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_6__["getProducts"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.orderForm.get('categorySelect').valueChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var fromStore = _a[0], fromForm = _a[1];
            // return fromStore.filter(s => fromForm.find(f => f.id === s.category.id));
            return fromStore.filter(function (s) { return fromForm.id === s.category.id; });
        }));
        var fromForm$ = this.orderForm.get('categorySelect').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (values) { return values ? values : []; }), // check to avoid null value upon form reset
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select(_store__WEBPACK_IMPORTED_MODULE_6__["getProducts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_a) {
            var fromForm = _a[0], fromStore = _a[1];
            var categories = fromForm; // .filter(f => !fromStore.find(s => s.category.id === f.id));
            /*
            User selects one Category at at time and we dispatch action to load products for that Category.
            So, we assume the filtered 'categories' array above to be of length 1 max.
            */
            // if (categories.length === 1) {
            _this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_6__["LoadProducts"](categories));
            _this.orderForm.get('productSelect').reset();
            //  } else if (categories.length > 1) {
            // console.error('MutilselectDropdownComponent', 'Filtered multiple LoadProducts dispatch actions');
            // }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var fromForm = _a[0], fromStore = _a[1];
            // return fromStore.filter(s => fromForm.find(f => f.id === s.category.id));
            return fromStore.filter(function (s) { return fromForm.id === s.category.id; });
        }));
        // emit outputs as one observable
        this.products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(fromStore$, fromForm$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (products) {
            var action = (products.length === 0) ? 'disable' : 'enable';
            _this.orderForm.get('productSelect')[action]();
        }));
    };
    MutilselectDropdownComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_6__["LoadCategories"]());
    };
    MutilselectDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-component',
            template: __webpack_require__(/*! ./select-component.component.html */ "./src/app/components/select-component/select-component.component.html"),
            styles: [__webpack_require__(/*! ./select-component.component.css */ "./src/app/components/select-component/select-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], MutilselectDropdownComponent);
    return MutilselectDropdownComponent;
}());



/***/ }),

/***/ "./src/app/material/index.ts":
/*!***********************************!*\
  !*** ./src/app/material/index.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/material/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MODULES,
            exports: MODULES,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendService = /** @class */ (function () {
    function BackendService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.dataResults = [];
        this.getCategories$ = function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.dataResults.map(function (v) { return v.category; }));
        };
        this.getProducts$ = function (category) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.dataResults.find(function (v) { return v.category.id === category.id; }).products).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                return {
                    category: category,
                    products: _this.dataResults.find(function (v) { return v.category.id === category.id; }).products
                };
            }), (Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)));
        };
        this.dataResults = [
            {
                category: { id: 1, label: 'Europe' },
                products: [
                    { id: 11, label: 'Water' }
                ]
            },
            {
                category: { id: 2, label: 'Asia' },
                products: [
                    { id: 21, label: 'Dairy' }
                ]
            }
        ];
        this.getDataServices().subscribe(function (data) {
            console.log(data);
            _this.dataResults[0].products = data;
            //this.countries = data;
        });
        this.getDataServices2().subscribe(function (data) {
            console.log(data);
            _this.dataResults[1].products = data;
            //this.countries = data;
        });
    }
    BackendService.prototype.getDataServices = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.httpClient.get("https://restcountries.eu/rest/v2/region/europe", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Capital not found!');
        }));
    };
    BackendService.prototype.getDataServices2 = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.httpClient.get("https://restcountries.eu/rest/v2/region/asia", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Capital not found!');
        }));
    };
    BackendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.service */ "./src/app/services/backend.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return _backend_service__WEBPACK_IMPORTED_MODULE_0__["BackendService"]; });




/***/ }),

/***/ "./src/app/store/actions/action-types.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/store/actions/action-types.enum.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LoadCategories"] = "[Categories] Load";
    ActionTypes["LoadCategoriesSuccess"] = "[Categories] Load Success";
    ActionTypes["LoadProducts"] = "[Products] Load";
    ActionTypes["LoadProductsSuccess"] = "[Products] Load Success";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: ActionTypes, LoadCategories, LoadCategoriesSuccess, LoadProducts, LoadProductsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types.enum */ "./src/app/store/actions/action-types.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _action_types_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"]; });

/* harmony import */ var _order_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.action */ "./src/app/store/actions/order.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadCategories", function() { return _order_action__WEBPACK_IMPORTED_MODULE_1__["LoadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadCategoriesSuccess", function() { return _order_action__WEBPACK_IMPORTED_MODULE_1__["LoadCategoriesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProducts", function() { return _order_action__WEBPACK_IMPORTED_MODULE_1__["LoadProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProductsSuccess", function() { return _order_action__WEBPACK_IMPORTED_MODULE_1__["LoadProductsSuccess"]; });





/***/ }),

/***/ "./src/app/store/actions/order.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/order.action.ts ***!
  \***********************************************/
/*! exports provided: LoadCategories, LoadCategoriesSuccess, LoadProducts, LoadProductsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCategories", function() { return LoadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCategoriesSuccess", function() { return LoadCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProducts", function() { return LoadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProductsSuccess", function() { return LoadProductsSuccess; });
/* harmony import */ var _action_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types.enum */ "./src/app/store/actions/action-types.enum.ts");

var LoadCategories = /** @class */ (function () {
    function LoadCategories() {
        this.type = _action_types_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadCategories;
    }
    return LoadCategories;
}());

var LoadCategoriesSuccess = /** @class */ (function () {
    function LoadCategoriesSuccess(payload) {
        this.payload = payload;
        this.type = _action_types_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadCategoriesSuccess;
    }
    return LoadCategoriesSuccess;
}());

var LoadProducts = /** @class */ (function () {
    function LoadProducts(payload) {
        this.payload = payload;
        this.type = _action_types_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadProducts;
    }
    return LoadProducts;
}());

var LoadProductsSuccess = /** @class */ (function () {
    function LoadProductsSuccess(payload) {
        this.payload = payload;
        this.type = _action_types_enum__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadProductsSuccess;
    }
    return LoadProductsSuccess;
}());



/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: EFFECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECTS", function() { return EFFECTS; });
/* harmony import */ var _order_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.effect */ "./src/app/store/effects/order.effect.ts");

var EFFECTS = [
    _order_effect__WEBPACK_IMPORTED_MODULE_0__["OrderEffects"]
];


/***/ }),

/***/ "./src/app/store/effects/order.effect.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/order.effect.ts ***!
  \***********************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderEffects = /** @class */ (function () {
    function OrderEffects(actions$, backendService) {
        this.actions$ = actions$;
        this.backendService = backendService;
        this.loadCategories$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].LoadCategories), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(this.backendService.getCategories$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadCategoriesSuccess"](result); }));
        this.loadProducts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].LoadProducts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(this.backendService.getProducts$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadProductsSuccess"](result); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OrderEffects.prototype, "loadCategories$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], OrderEffects.prototype, "loadProducts$", void 0);
    OrderEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services__WEBPACK_IMPORTED_MODULE_4__["BackendService"]])
    ], OrderEffects);
    return OrderEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: EFFECTS, REDUCERS, META_REDUCERS, ActionTypes, LoadCategories, LoadCategoriesSuccess, LoadProducts, LoadProductsSuccess, getCategories, getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadCategories", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadCategoriesSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadCategoriesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProducts", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadProductsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["LoadProductsSuccess"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EFFECTS", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["EFFECTS"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REDUCERS", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["REDUCERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return _reducers__WEBPACK_IMPORTED_MODULE_2__["META_REDUCERS"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProducts"]; });







/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: REDUCERS, META_REDUCERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCERS", function() { return REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return META_REDUCERS; });
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _order_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.reducer */ "./src/app/store/reducers/order.reducer.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var REDUCERS = {
    order: _order_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var META_REDUCERS = !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_0__["storeFreeze"]] : [];


/***/ }),

/***/ "./src/app/store/reducers/order.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/order.reducer.ts ***!
  \*************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var intitialState = {
    categories: [],
    products: []
};
function reducer(state, action) {
    if (state === void 0) { state = intitialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadCategoriesSuccess: {
            return __assign({}, state, { categories: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LoadProductsSuccess: {
            return __assign({}, state, { products: state.products.concat([
                    action.payload
                ]) });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/store/selectors/index.ts":
/*!******************************************!*\
  !*** ./src/app/store/selectors/index.ts ***!
  \******************************************/
/*! exports provided: getCategories, getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.selector */ "./src/app/store/selectors/order.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _order_selector__WEBPACK_IMPORTED_MODULE_0__["getCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _order_selector__WEBPACK_IMPORTED_MODULE_0__["getProducts"]; });




/***/ }),

/***/ "./src/app/store/selectors/order.selector.ts":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/order.selector.ts ***!
  \***************************************************/
/*! exports provided: getCategories, getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");

var orderFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('order');
var getCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(orderFeature, function (state) { return state.categories; });
var getProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(orderFeature, function (state) { return state.products; });


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prasadatchuta/Desktop/codeRun/lab/test/ag/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
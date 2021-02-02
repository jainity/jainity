(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schemewisedonation-schemewisedonation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schemewisedonation/schemewisedonation.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schemewisedonation/schemewisedonation.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-grid style=\"background-color:#ef7635;min-height: 40px;\">\n        <ion-row>\n            <ion-col>\n                <ion-icon (click)=\"onBackClick()\" style=\"text-align: start;margin-left: 5px;color: white;\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n                <ion-label style=\"text-align: center; font-size: medium;\" color=\"light\">Tittle</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"background-color:#204c55; text-align: center; min-height: 45px; border-radius: 3px; margin-left: 3px; margin-right: 3px; margin-top: 5px;margin-bottom: 8px;\">\n            <ion-col>\n                <ion-label class=\"roundedInput\" color=\"light\">Rs 00000</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of items; let i = index\" style=\"background-color:#204c55; min-height: 45px; border-radius: 3px; margin-left: 3px; margin-right: 3px; margin-top: 5px;margin-bottom: 8px;\">\n            <ion-col>\n                <ion-label color=\"light\">{{item}}</ion-label>\n                <ion-row>\n                    <ion-label style=\"margin-top: 7px;\" color=\"light\">Rs. 00000.00</ion-label>\n                </ion-row>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/schemewisedonation/schemewisedonation-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/schemewisedonation/schemewisedonation-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SchemewisedonationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemewisedonationPageRoutingModule", function() { return SchemewisedonationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _schemewisedonation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schemewisedonation.page */ "./src/app/schemewisedonation/schemewisedonation.page.ts");




const routes = [
    {
        path: '',
        component: _schemewisedonation_page__WEBPACK_IMPORTED_MODULE_3__["SchemewisedonationPage"]
    }
];
let SchemewisedonationPageRoutingModule = class SchemewisedonationPageRoutingModule {
};
SchemewisedonationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SchemewisedonationPageRoutingModule);



/***/ }),

/***/ "./src/app/schemewisedonation/schemewisedonation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/schemewisedonation/schemewisedonation.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchemewisedonationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemewisedonationPageModule", function() { return SchemewisedonationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _schemewisedonation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemewisedonation-routing.module */ "./src/app/schemewisedonation/schemewisedonation-routing.module.ts");
/* harmony import */ var _schemewisedonation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schemewisedonation.page */ "./src/app/schemewisedonation/schemewisedonation.page.ts");







let SchemewisedonationPageModule = class SchemewisedonationPageModule {
};
SchemewisedonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schemewisedonation_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemewisedonationPageRoutingModule"]
        ],
        declarations: [_schemewisedonation_page__WEBPACK_IMPORTED_MODULE_6__["SchemewisedonationPage"]]
    })
], SchemewisedonationPageModule);



/***/ }),

/***/ "./src/app/schemewisedonation/schemewisedonation.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/schemewisedonation/schemewisedonation.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtZXdpc2Vkb25hdGlvbi9zY2hlbWV3aXNlZG9uYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/schemewisedonation/schemewisedonation.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/schemewisedonation/schemewisedonation.page.ts ***!
  \***************************************************************/
/*! exports provided: SchemewisedonationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemewisedonationPage", function() { return SchemewisedonationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let SchemewisedonationPage = class SchemewisedonationPage {
    constructor(location) {
        this.location = location;
        this.items = [];
        for (let i = 0; i <= 4; i++) {
            this.items.push('SCHEME GROUP Wise Donation ' + (i + 1));
        }
    }
    ngOnInit() {
    }
    onBackClick() {
        this.location.back();
    }
};
SchemewisedonationPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SchemewisedonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schemewisedonation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schemewisedonation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schemewisedonation/schemewisedonation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schemewisedonation.page.scss */ "./src/app/schemewisedonation/schemewisedonation.page.scss")).default]
    })
], SchemewisedonationPage);



/***/ })

}]);
//# sourceMappingURL=schemewisedonation-schemewisedonation-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instiwisedonation-instiwisedonation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instiwisedonation/instiwisedonation.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instiwisedonation/instiwisedonation.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-grid style=\"background-color:#ef7635;min-height: 40px;\">\n        <ion-row>\n            <ion-col>\n                <ion-icon (click)=\"onBackClick()\" style=\"text-align: start;margin-left: 5px;color: white;\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n                <ion-label style=\"text-align: center; font-size: medium;\" color=\"light\">Tittle</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row style=\"background-color:#204c55; text-align: center; min-height: 45px; border-radius: 3px; margin-left: 3px; margin-right: 3px; margin-top: 5px;margin-bottom: 8px;\">\n            <ion-col>\n                <ion-label class=\"roundedInput\" color=\"light\">Rs 00000</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of items; let i = index\" style=\"background-color:#204c55; min-height: 45px; border-radius: 3px; margin-left: 3px; margin-right: 3px; margin-top: 5px;margin-bottom: 8px;\">\n            <ion-col>\n                <ion-label color=\"light\">{{item}}</ion-label>\n                <ion-row>\n                    <ion-label style=\"margin-top: 7px;\" color=\"light\">Rs. 00000.00</ion-label>\n                </ion-row>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/instiwisedonation/instiwisedonation-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/instiwisedonation/instiwisedonation-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InstiwisedonationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstiwisedonationPageRoutingModule", function() { return InstiwisedonationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _instiwisedonation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instiwisedonation.page */ "./src/app/instiwisedonation/instiwisedonation.page.ts");




const routes = [
    {
        path: '',
        component: _instiwisedonation_page__WEBPACK_IMPORTED_MODULE_3__["InstiwisedonationPage"]
    }
];
let InstiwisedonationPageRoutingModule = class InstiwisedonationPageRoutingModule {
};
InstiwisedonationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InstiwisedonationPageRoutingModule);



/***/ }),

/***/ "./src/app/instiwisedonation/instiwisedonation.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/instiwisedonation/instiwisedonation.module.ts ***!
  \***************************************************************/
/*! exports provided: InstiwisedonationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstiwisedonationPageModule", function() { return InstiwisedonationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _instiwisedonation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instiwisedonation-routing.module */ "./src/app/instiwisedonation/instiwisedonation-routing.module.ts");
/* harmony import */ var _instiwisedonation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instiwisedonation.page */ "./src/app/instiwisedonation/instiwisedonation.page.ts");







let InstiwisedonationPageModule = class InstiwisedonationPageModule {
};
InstiwisedonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _instiwisedonation_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstiwisedonationPageRoutingModule"]
        ],
        declarations: [_instiwisedonation_page__WEBPACK_IMPORTED_MODULE_6__["InstiwisedonationPage"]]
    })
], InstiwisedonationPageModule);



/***/ }),

/***/ "./src/app/instiwisedonation/instiwisedonation.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/instiwisedonation/instiwisedonation.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3Rpd2lzZWRvbmF0aW9uL2luc3Rpd2lzZWRvbmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/instiwisedonation/instiwisedonation.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/instiwisedonation/instiwisedonation.page.ts ***!
  \*************************************************************/
/*! exports provided: InstiwisedonationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstiwisedonationPage", function() { return InstiwisedonationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let InstiwisedonationPage = class InstiwisedonationPage {
    constructor(location) {
        this.location = location;
        this.items = [];
        for (let i = 0; i <= 4; i++) {
            this.items.push('Institute Wise Donation ' + (i + 1));
        }
    }
    ngOnInit() {
    }
    onBackClick() {
        this.location.back();
    }
};
InstiwisedonationPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
InstiwisedonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instiwisedonation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./instiwisedonation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instiwisedonation/instiwisedonation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./instiwisedonation.page.scss */ "./src/app/instiwisedonation/instiwisedonation.page.scss")).default]
    })
], InstiwisedonationPage);



/***/ })

}]);
//# sourceMappingURL=instiwisedonation-instiwisedonation-module-es2015.js.map
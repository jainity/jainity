(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchitem-searchitem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/searchitem/searchitem.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchitem/searchitem.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"floating\">Search Here</ion-label>\n                    <ion-input type=\"text\"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-top: 20px;\">\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"block\" style=\"margin-top: 10px;text-align: center !important;\">SCHEME GROUP-WISE DONATION</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/searchitem/searchitem-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/searchitem/searchitem-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchitemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchitemPageRoutingModule", function() { return SearchitemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _searchitem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchitem.page */ "./src/app/searchitem/searchitem.page.ts");




const routes = [
    {
        path: '',
        component: _searchitem_page__WEBPACK_IMPORTED_MODULE_3__["SearchitemPage"]
    }
];
let SearchitemPageRoutingModule = class SearchitemPageRoutingModule {
};
SearchitemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchitemPageRoutingModule);



/***/ }),

/***/ "./src/app/searchitem/searchitem.module.ts":
/*!*************************************************!*\
  !*** ./src/app/searchitem/searchitem.module.ts ***!
  \*************************************************/
/*! exports provided: SearchitemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchitemPageModule", function() { return SearchitemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _searchitem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchitem-routing.module */ "./src/app/searchitem/searchitem-routing.module.ts");
/* harmony import */ var _searchitem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchitem.page */ "./src/app/searchitem/searchitem.page.ts");







let SearchitemPageModule = class SearchitemPageModule {
};
SearchitemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searchitem_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchitemPageRoutingModule"]
        ],
        declarations: [_searchitem_page__WEBPACK_IMPORTED_MODULE_6__["SearchitemPage"]]
    })
], SearchitemPageModule);



/***/ }),

/***/ "./src/app/searchitem/searchitem.page.scss":
/*!*************************************************!*\
  !*** ./src/app/searchitem/searchitem.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGl0ZW0vc2VhcmNoaXRlbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/searchitem/searchitem.page.ts":
/*!***********************************************!*\
  !*** ./src/app/searchitem/searchitem.page.ts ***!
  \***********************************************/
/*! exports provided: SearchitemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchitemPage", function() { return SearchitemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchitemPage = class SearchitemPage {
    constructor() { }
    ngOnInit() { }
};
SearchitemPage.ctorParameters = () => [];
SearchitemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchitem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./searchitem.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/searchitem/searchitem.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./searchitem.page.scss */ "./src/app/searchitem/searchitem.page.scss")).default]
    })
], SearchitemPage);



/***/ })

}]);
//# sourceMappingURL=searchitem-searchitem-module-es2015.js.map
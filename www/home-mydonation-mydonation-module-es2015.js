(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-mydonation-mydonation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"list_block\" *ngFor=\"let item of items; let i = index\">\n                <ion-row class=\"list_box\">\n                    <ion-col class=\"list_count\">\n                        <ion-label color=\"light\">{{i+1}}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"list_content\">\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <div class=\"button_box\">\n                            <ion-button class=\"btn-orange\" (click)=\"onReceiptClick()\" shape=\"round\" expand=\"block\">RECEIPT</ion-button>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/mydonation/mydonation.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/mydonation/mydonation.module.ts ***!
  \******************************************************/
/*! exports provided: MydonationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydonationPageModule", function() { return MydonationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mydonation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mydonation.page */ "./src/app/home/mydonation/mydonation.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _mydonation_page__WEBPACK_IMPORTED_MODULE_5__["MydonationPage"]
    }
];
let MydonationPageModule = class MydonationPageModule {
};
MydonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_mydonation_page__WEBPACK_IMPORTED_MODULE_5__["MydonationPage"]]
    })
], MydonationPageModule);



/***/ }),

/***/ "./src/app/home/mydonation/mydonation.page.scss":
/*!******************************************************!*\
  !*** ./src/app/home/mydonation/mydonation.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbXlkb25hdGlvbi9teWRvbmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/mydonation/mydonation.page.ts":
/*!****************************************************!*\
  !*** ./src/app/home/mydonation/mydonation.page.ts ***!
  \****************************************************/
/*! exports provided: MydonationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydonationPage", function() { return MydonationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MydonationPage = class MydonationPage {
    constructor(route) {
        this.route = route;
        this.items = [];
        for (let i = 0; i < 10; i++) {
            this.items.push('MY DONATION ' + (i + 1));
        }
    }
    ngOnInit() {
    }
    onReceiptClick() {
        this.route.navigate(['/reciept']);
    }
};
MydonationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MydonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mydonation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mydonation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mydonation.page.scss */ "./src/app/home/mydonation/mydonation.page.scss")).default]
    })
], MydonationPage);



/***/ })

}]);
//# sourceMappingURL=home-mydonation-mydonation-module-es2015.js.map
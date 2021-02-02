(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schemedetails-schemedetails-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/schemedetails/schemedetails.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schemedetails/schemedetails.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSchemedetailsSchemedetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n    <div id=\"header\">\n        <div class=\"header-block\" id=\"header2\">\n            <div class=\"container\">\n                <div class=\"header-box\">\n                    <ion-grid class=\"p-0\">\n                        <ion-row>\n                            <ion-col class=\"back_icon p-0\">\n                                <ion-icon (click)=\"onBackClick()\" style=\"text-align: start; margin-left: 0; color: white; font-size: 30px;\" name=\"arrow-back-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col class=\"page_title p-0\">\n                                <ion-label style=\"text-align: center; font-size: medium;\" color=\"light\">Tittle</ion-label>\n                            </ion-col>\n                            <ion-col class=\"search_block p-0\">\n                                <div class=\"search_box\">\n                                    <ion-input [(ngModel)]=\"keyword\" placeholder=\"Search\" (keyup.enter)=\"onEnter($event)\"></ion-input>\n                                    <ion-img *ngIf=\"keyword.trim().length>0\" class=\"close_btn\" src=\"assets/img/close.png\" (click)=\"clearSearch($event)\"></ion-img>\n                                    <ion-img class=\"search_btn\" src=\"assets/img/search-w.png\" (click)=\"getItems($event)\"></ion-img>\n                                </div>                                \n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n\n    <div class=\"page_wapper\">\n      \n        <div class=\"page_inner\">\n            <div class=\"container\">\n                <div class=\"page_inner_box\">\n                    <ion-grid class=\"p-0\">\n                        <ion-row class=\"list_row\">\n                            <ion-col class=\"list_col\" *ngFor=\"let item of items\">\n                                <div class=\"list_inner_box\">\n                                    <ion-row class=\"p-0\">\n                                        <ion-col class=\"p-0\">\n                                            <ion-label class=\"white content\">{{item}}</ion-label>\n                                            <ion-label class=\"white content\">Dev Dravya</ion-label>\n                                            <ion-label class=\"white content\">Shree Matunga Jain</ion-label>\n                                            <ion-label class=\"white content\">Daily Agna Puja</ion-label>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row class=\"prise_boxs\">\n                                        <span>&#8377;</span>\n                                        <ion-col class=\"p-0\">\n                                            <ion-item>\n                                                <ion-label position=\"floating\">Amount</ion-label>\n                                                <ion-input [(ngModel)]=\"amount\" type=\"number\" maxlength=\"6\" ></ion-input>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col class=\"p-0\">\n                                            <ion-button class=\"btn-orange\" (click)=\"onDonateClick()\" shape=\"round\" expand=\"block\">DONATE</ion-button>\n                                        </ion-col>\n                                    </ion-row>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/schemedetails/schemedetails-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/schemedetails/schemedetails-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SchemedetailsPageRoutingModule */

    /***/
    function srcAppSchemedetailsSchemedetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchemedetailsPageRoutingModule", function () {
        return SchemedetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _schemedetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./schemedetails.page */
      "./src/app/schemedetails/schemedetails.page.ts");

      var routes = [{
        path: '',
        component: _schemedetails_page__WEBPACK_IMPORTED_MODULE_3__["SchemedetailsPage"]
      }];

      var SchemedetailsPageRoutingModule = function SchemedetailsPageRoutingModule() {
        _classCallCheck(this, SchemedetailsPageRoutingModule);
      };

      SchemedetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SchemedetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/schemedetails/schemedetails.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/schemedetails/schemedetails.module.ts ***!
      \*******************************************************/

    /*! exports provided: SchemedetailsPageModule */

    /***/
    function srcAppSchemedetailsSchemedetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchemedetailsPageModule", function () {
        return SchemedetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _schemedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./schemedetails-routing.module */
      "./src/app/schemedetails/schemedetails-routing.module.ts");
      /* harmony import */


      var _schemedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./schemedetails.page */
      "./src/app/schemedetails/schemedetails.page.ts");

      var SchemedetailsPageModule = function SchemedetailsPageModule() {
        _classCallCheck(this, SchemedetailsPageModule);
      };

      SchemedetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schemedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemedetailsPageRoutingModule"]],
        declarations: [_schemedetails_page__WEBPACK_IMPORTED_MODULE_6__["SchemedetailsPage"]]
      })], SchemedetailsPageModule);
      /***/
    },

    /***/
    "./src/app/schemedetails/schemedetails.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/schemedetails/schemedetails.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSchemedetailsSchemedetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --ion-background-color: #204c55;\n  --placeholder-color: white;\n  color: var(--ion-color-tertiary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1lZGV0YWlscy9zY2hlbWVkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2NoZW1lZGV0YWlscy9zY2hlbWVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjA0YzU1O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/schemedetails/schemedetails.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/schemedetails/schemedetails.page.ts ***!
      \*****************************************************/

    /*! exports provided: SchemedetailsPage */

    /***/
    function srcAppSchemedetailsSchemedetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchemedetailsPage", function () {
        return SchemedetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SchemedetailsPage = /*#__PURE__*/function () {
        function SchemedetailsPage(location) {
          _classCallCheck(this, SchemedetailsPage);

          this.location = location;
          this.keyword = "";
          this.items = [];
          this.amount = 0;

          for (var i = 0; i <= 4; i++) {
            this.items.push('Details' + (i + 1));
          }
        }

        _createClass(SchemedetailsPage, [{
          key: "onEnter",
          value: function onEnter(event) {}
        }, {
          key: "clearSearch",
          value: function clearSearch(event) {}
        }, {
          key: "getItems",
          value: function getItems(event) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//this.getValue= this.router.snapshot.paramMap.get("item")
            // console.log(JSON.parse(this.getValue))
          }
        }, {
          key: "onDonateClick",
          value: function onDonateClick() {}
        }, {
          key: "onBackClick",
          value: function onBackClick() {
            this.location.back();
          }
        }]);

        return SchemedetailsPage;
      }();

      SchemedetailsPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      };

      SchemedetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schemedetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./schemedetails.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/schemedetails/schemedetails.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./schemedetails.page.scss */
        "./src/app/schemedetails/schemedetails.page.scss"))["default"]]
      })], SchemedetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=schemedetails-schemedetails-module-es5.js.map
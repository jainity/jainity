(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reciept-reciept-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/reciept/reciept.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reciept/reciept.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecieptRecieptPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-grid style=\"background-color:#ef7635;min-height: 40px;\">\n        <ion-row>\n            <ion-col>\n                <ion-icon (click)=\"onBackClick()\" style=\"text-align: start;margin-left: 5px;color: white;\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n                <ion-label style=\"text-align: center; font-size: medium;\" color=\"light\">Tittle</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n    <iframe src=\"https://www.google.com\" style=\"width:100%;height:100%\" scrolling=\"yes\"></iframe>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/reciept/reciept-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/reciept/reciept-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RecieptPageRoutingModule */

    /***/
    function srcAppRecieptRecieptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecieptPageRoutingModule", function () {
        return RecieptPageRoutingModule;
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


      var _reciept_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reciept.page */
      "./src/app/reciept/reciept.page.ts");

      var routes = [{
        path: '',
        component: _reciept_page__WEBPACK_IMPORTED_MODULE_3__["RecieptPage"]
      }];

      var RecieptPageRoutingModule = function RecieptPageRoutingModule() {
        _classCallCheck(this, RecieptPageRoutingModule);
      };

      RecieptPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecieptPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/reciept/reciept.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/reciept/reciept.module.ts ***!
      \*******************************************/

    /*! exports provided: RecieptPageModule */

    /***/
    function srcAppRecieptRecieptModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecieptPageModule", function () {
        return RecieptPageModule;
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


      var _reciept_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reciept-routing.module */
      "./src/app/reciept/reciept-routing.module.ts");
      /* harmony import */


      var _reciept_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reciept.page */
      "./src/app/reciept/reciept.page.ts");

      var RecieptPageModule = function RecieptPageModule() {
        _classCallCheck(this, RecieptPageModule);
      };

      RecieptPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reciept_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecieptPageRoutingModule"]],
        declarations: [_reciept_page__WEBPACK_IMPORTED_MODULE_6__["RecieptPage"]]
      })], RecieptPageModule);
      /***/
    },

    /***/
    "./src/app/reciept/reciept.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/reciept/reciept.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecieptRecieptPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHQvcmVjaWVwdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/reciept/reciept.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/reciept/reciept.page.ts ***!
      \*****************************************/

    /*! exports provided: RecieptPage */

    /***/
    function srcAppRecieptRecieptPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecieptPage", function () {
        return RecieptPage;
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

      var RecieptPage = /*#__PURE__*/function () {
        function RecieptPage(location) {
          _classCallCheck(this, RecieptPage);

          this.location = location;
        }

        _createClass(RecieptPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onBackClick",
          value: function onBackClick() {
            this.location.back();
          }
        }]);

        return RecieptPage;
      }();

      RecieptPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      };

      RecieptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reciept',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reciept.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/reciept/reciept.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reciept.page.scss */
        "./src/app/reciept/reciept.page.scss"))["default"]]
      })], RecieptPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reciept-reciept-module-es5.js.map
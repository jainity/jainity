(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-mydonation-mydonation-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeMydonationMydonationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"list_block\" *ngFor=\"let item of items; let i = index\">\n                <ion-row class=\"list_box\">\n                    <ion-col class=\"list_count\">\n                        <ion-label color=\"light\">{{i+1}}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"list_content\">\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <ion-label class=\"white content\">{{item}}</ion-label>\n                        <div class=\"button_box\">\n                            <ion-button class=\"btn-orange\" (click)=\"onReceiptClick()\" shape=\"round\" expand=\"block\">RECEIPT</ion-button>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/mydonation/mydonation.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/home/mydonation/mydonation.module.ts ***!
      \******************************************************/

    /*! exports provided: MydonationPageModule */

    /***/
    function srcAppHomeMydonationMydonationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydonationPageModule", function () {
        return MydonationPageModule;
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


      var _mydonation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mydonation.page */
      "./src/app/home/mydonation/mydonation.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _mydonation_page__WEBPACK_IMPORTED_MODULE_5__["MydonationPage"]
      }];

      var MydonationPageModule = function MydonationPageModule() {
        _classCallCheck(this, MydonationPageModule);
      };

      MydonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_mydonation_page__WEBPACK_IMPORTED_MODULE_5__["MydonationPage"]]
      })], MydonationPageModule);
      /***/
    },

    /***/
    "./src/app/home/mydonation/mydonation.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/home/mydonation/mydonation.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeMydonationMydonationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbXlkb25hdGlvbi9teWRvbmF0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/home/mydonation/mydonation.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/home/mydonation/mydonation.page.ts ***!
      \****************************************************/

    /*! exports provided: MydonationPage */

    /***/
    function srcAppHomeMydonationMydonationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MydonationPage", function () {
        return MydonationPage;
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

      var MydonationPage = /*#__PURE__*/function () {
        function MydonationPage(route) {
          _classCallCheck(this, MydonationPage);

          this.route = route;
          this.items = [];

          for (var i = 0; i < 10; i++) {
            this.items.push('MY DONATION ' + (i + 1));
          }
        }

        _createClass(MydonationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onReceiptClick",
          value: function onReceiptClick() {
            this.route.navigate(['/reciept']);
          }
        }]);

        return MydonationPage;
      }();

      MydonationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MydonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mydonation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mydonation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/mydonation/mydonation.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mydonation.page.scss */
        "./src/app/home/mydonation/mydonation.page.scss"))["default"]]
      })], MydonationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-mydonation-mydonation-module-es5.js.map
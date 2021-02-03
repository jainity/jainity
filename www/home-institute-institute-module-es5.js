(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-institute-institute-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/institute/institute.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/institute/institute.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeInstituteInstitutePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"list_block\" *ngFor=\"let item of items; let i = index\" (click)=\"onInstiDetails(item)\">\n                <ion-row class=\"list_box\">\n                    <ion-col class=\"list_count\">\n                        <ion-label class=\"roundedInput\" color=\"light\">{{i+1}}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"list_content\">\n                        <ion-label color=\"light\">{{item}}</ion-label>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/institute/institute.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/home/institute/institute.module.ts ***!
      \****************************************************/

    /*! exports provided: InstitutePageModule */

    /***/
    function srcAppHomeInstituteInstituteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstitutePageModule", function () {
        return InstitutePageModule;
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


      var _institute_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./institute.page */
      "./src/app/home/institute/institute.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _institute_page__WEBPACK_IMPORTED_MODULE_5__["InstitutePage"]
      }];

      var InstitutePageModule = function InstitutePageModule() {
        _classCallCheck(this, InstitutePageModule);
      };

      InstitutePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_institute_page__WEBPACK_IMPORTED_MODULE_5__["InstitutePage"]]
      })], InstitutePageModule);
      /***/
    },

    /***/
    "./src/app/home/institute/institute.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/home/institute/institute.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeInstituteInstitutePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --border-radius: 30px;\n  --border-width: 1px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnN0aXR1dGUvaW5zdGl0dXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbnN0aXR1dGUvaW5zdGl0dXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZGVkSW5wdXQge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/home/institute/institute.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/home/institute/institute.page.ts ***!
      \**************************************************/

    /*! exports provided: InstitutePage */

    /***/
    function srcAppHomeInstituteInstitutePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstitutePage", function () {
        return InstitutePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InstitutePage = /*#__PURE__*/function () {
        function InstitutePage(route) {
          _classCallCheck(this, InstitutePage);

          this.route = route;
          this.items = [];

          for (var i = 0; i < 10; i++) {
            this.items.push('INSTITUTE ' + (i + 1));
          }
        }

        _createClass(InstitutePage, [{
          key: "onInstiDetails",
          value: function onInstiDetails(item) {
            this.route.navigate(['/schemedetails', {
              item: item
            }]); //this.route.navigate(['/schemedetails']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InstitutePage;
      }();

      InstitutePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      InstitutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-institute',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./institute.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/institute/institute.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./institute.page.scss */
        "./src/app/home/institute/institute.page.scss"))["default"]]
      })], InstitutePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-institute-institute-module-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-alldonation-alldonation-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/alldonation/alldonation.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/alldonation/alldonation.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeAlldonationAlldonationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <ion-grid>\n        <ion-row style=\"margin-top: 10px; justify-content: center;\">\n            <ion-col class=\"text-center\">\n                <ion-button class=\"btn-orange\" (click)=\"oninstwiseClick()\" shape=\"round\" expand=\"block\">INSTITUTE WISE DONATION</ion-button>\n            </ion-col>\n        </ion-row>\n        <ion-row style=\"margin-top: 10px; justify-content: center;\">\n            <ion-col class=\"text-center\">\n                <ion-button class=\"btn-orange\" (click)=\"onschemewiseClick()\"  shape=\"round\" expand=\"block\">SCHEME GROUP-WISE DONATION</ion-button>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/alldonation/alldonation.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/home/alldonation/alldonation.module.ts ***!
      \********************************************************/

    /*! exports provided: AlldonationPageModule */

    /***/
    function srcAppHomeAlldonationAlldonationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlldonationPageModule", function () {
        return AlldonationPageModule;
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


      var _alldonation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alldonation.page */
      "./src/app/home/alldonation/alldonation.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _alldonation_page__WEBPACK_IMPORTED_MODULE_5__["AlldonationPage"]
      }];

      var AlldonationPageModule = function AlldonationPageModule() {
        _classCallCheck(this, AlldonationPageModule);
      };

      AlldonationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_alldonation_page__WEBPACK_IMPORTED_MODULE_5__["AlldonationPage"]]
      })], AlldonationPageModule);
      /***/
    },

    /***/
    "./src/app/home/alldonation/alldonation.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/home/alldonation/alldonation.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeAlldonationAlldonationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWxsZG9uYXRpb24vYWxsZG9uYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/home/alldonation/alldonation.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/home/alldonation/alldonation.page.ts ***!
      \******************************************************/

    /*! exports provided: AlldonationPage */

    /***/
    function srcAppHomeAlldonationAlldonationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlldonationPage", function () {
        return AlldonationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AlldonationPage = /*#__PURE__*/function () {
        function AlldonationPage(route, toastController) {
          _classCallCheck(this, AlldonationPage);

          this.route = route;
          this.toastController = toastController;
        }

        _createClass(AlldonationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "oninstwiseClick",
          value: function oninstwiseClick() {
            this.route.navigate(['/instiwisedonation']); // const toast = await this.toastController.create({
            //   message: 'This Is Institute wise',
            //   duration: 2000 ,
            //   color: 'primary'
            // });
            // toast.present();
          }
        }, {
          key: "onschemewiseClick",
          value: function onschemewiseClick() {
            this.route.navigate(['/schemewisedonation']);
          }
        }]);

        return AlldonationPage;
      }();

      AlldonationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }];
      };

      AlldonationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-alldonation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./alldonation.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/alldonation/alldonation.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./alldonation.page.scss */
        "./src/app/home/alldonation/alldonation.page.scss"))["default"]]
      })], AlldonationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-alldonation-alldonation-module-es5.js.map
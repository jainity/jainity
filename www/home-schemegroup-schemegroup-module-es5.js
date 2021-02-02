(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-schemegroup-schemegroup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/schemegroup/schemegroup.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/schemegroup/schemegroup.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeSchemegroupSchemegroupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"list_block\" *ngFor=\"let item of SGList; let i = index\" (click)=\"onSchemeDetails(item)\">\n                <ion-row class=\"list_box\">\n                    <ion-col class=\"list_count\">\n                        <ion-label class=\"roundedInput\" color=\"light\">{{i+1}}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"list_content\">\n                        <ion-label color=\"light\">{{item.SchemeGroup}}</ion-label>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/schemegroup/schemegroup.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/home/schemegroup/schemegroup.module.ts ***!
      \********************************************************/

    /*! exports provided: SchemegroupPageModule */

    /***/
    function srcAppHomeSchemegroupSchemegroupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchemegroupPageModule", function () {
        return SchemegroupPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _schemegroup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./schemegroup.page */
      "./src/app/home/schemegroup/schemegroup.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _schemegroup_page__WEBPACK_IMPORTED_MODULE_4__["SchemegroupPage"]
      }];

      var SchemegroupPageModule = function SchemegroupPageModule() {
        _classCallCheck(this, SchemegroupPageModule);
      };

      SchemegroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_schemegroup_page__WEBPACK_IMPORTED_MODULE_4__["SchemegroupPage"]]
      })], SchemegroupPageModule);
      /***/
    },

    /***/
    "./src/app/home/schemegroup/schemegroup.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/home/schemegroup/schemegroup.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeSchemegroupSchemegroupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --border-radius: 30px;\n  --border-width: 1px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zY2hlbWVncm91cC9zY2hlbWVncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2NoZW1lZ3JvdXAvc2NoZW1lZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kZWRJbnB1dCB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm94LXNoYWRvdzogMnB4IGdyYXk7XG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/schemegroup/schemegroup.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/home/schemegroup/schemegroup.page.ts ***!
      \******************************************************/

    /*! exports provided: SchemegroupPage */

    /***/
    function srcAppHomeSchemegroupSchemegroupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchemegroupPage", function () {
        return SchemegroupPage;
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
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var src_app_shared_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/tools */
      "./src/app/shared/tools.ts");

      var SchemegroupPage = /*#__PURE__*/function () {
        function SchemegroupPage(route, alertController, apiService, formBuilder, apiServices, tools, toastController) {
          _classCallCheck(this, SchemegroupPage);

          // for (let i = 0; i < 10; i++) {
          //   this.SGList.push('SCHEME GROUP '+(i+1));
          // }
          this.route = route;
          this.alertController = alertController;
          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.apiServices = apiServices;
          this.tools = tools;
          this.toastController = toastController;
          this.SGList = [];
          this.pageMsg = 'Data not available';
        }

        _createClass(SchemegroupPage, [{
          key: "onSchemeDetails",
          value: function onSchemeDetails(item) {
            this.route.navigate(['/schemedetails', {
              item: item
            }]); //this.route.navigate(['/schemedetails']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getSGLISTCall();
          }
        }, {
          key: "getSGLISTCall",
          value: function getSGLISTCall() {
            var _this = this;

            if (this.tools.isNetwork()) {
              this.tools.openLoader();
              console.log('getSGLISTCall');
              this.apiServices.getSchemeGroup().subscribe(function (response) {
                console.log('RESPONSE>>>');

                _this.tools.closeLoader();

                var res = response;

                if (res.data != undefined) {
                  _this.SGList = res.data;
                } else {
                  _this.pageMsg = res.message;
                }

                console.log(res);
              }, function (error) {
                console.log('ERORR>>>');

                _this.tools.closeLoader();

                _this.tools.closeLoader();

                var err = error;
                console.log('Error ', err); // this.tools.openAlertToken(err.status, err.error.message);
              });
            } else {
              console.log('ELSE>> ');
              this.tools.closeLoader();
            }
          }
        }]);

        return SchemegroupPage;
      }();

      SchemegroupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: src_app_shared_tools__WEBPACK_IMPORTED_MODULE_6__["Tools"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      SchemegroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-schemegroup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./schemegroup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/schemegroup/schemegroup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./schemegroup.page.scss */
        "./src/app/home/schemegroup/schemegroup.page.scss"))["default"]]
      })], SchemegroupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-schemegroup-schemegroup-module-es5.js.map
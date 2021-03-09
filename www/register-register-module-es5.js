(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"page_block\">\n        <div class=\"page_box\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-img class=\"logo\"  src=\"assets/img/logo.png\"></ion-img>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-label class=\"content\">Please Enter Register Details</ion-label>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">First Name</ion-label>\n                            <ion-input [(ngModel)]=\"Fname\" type=\"text\" min=\"3\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">Last Name</ion-label>\n                            <ion-input [(ngModel)]=\"Lname\" type=\"text\" min=\"3\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">Mobile Number</ion-label>\n                            <ion-input [(ngModel)]=\"mobileno\" type=\"tel\" maxlength=\"10\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-button class=\"btn-orange w-100\" (click)=\"cliRegister()\" shape=\"round\" expand=\"block\">REGISTER</ion-button>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col style=\"text-align: end;\">\n                        <ion-label class=\"content d-inline\" style=\"margin-right: 15px;\" (click)=\"onLogClick()\">Already have an account ? </ion-label>\n                        <ion-label class=\"content d-inline\" style=\"color: #ef7635 !important; cursor: pointer;\" (click)=\"onLogClick()\" color=\"primary\"><u>Login</u></ion-label>\n                    </ion-col>\n                </ion-row>\n\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/shared.module */
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


      var _register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]
      }];

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _shared_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/tools */
      "./src/app/shared/tools.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(route, formBuilder, apiServices, tools, toastController) {
          _classCallCheck(this, RegisterPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.apiServices = apiServices;
          this.tools = tools;
          this.toastController = toastController;
          this.Fname = "";
          this.Lname = "";
          this.mobileno = "";
          this.loginForm = this.formBuilder.group({
            fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]+')]],
            lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]+')]],
            mobileno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]]
          });
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogClick",
          value: function onLogClick() {
            this.route.navigate(['/login']);
          }
        }, {
          key: "cliRegister",
          value: function cliRegister() {
            var _this = this;

            var msg = '';

            if (this.Fname == '') {
              msg = msg + 'Please enter First name<br />';
            } else if (this.Fname.length != 3) {
              msg = msg + 'First name should be at least 3 letters long and without any space<br />';
            } else if (this.Lname == '') {
              msg = msg + 'Please enter Last name<br />';
            } else if (this.Lname.length != 3) {
              msg = msg + 'Last name should be at least 3 letters long and without any space<br />';
            } else if (this.mobileno == '') {
              msg = msg + 'Please enter mobile number<br />';
            } else if (this.mobileno.length != 10) {
              msg = msg + 'Please enter valid mobile number<br />';
            }

            if (msg != '') {
              this.tools.openAlert(msg);
            } else {
              if (this.tools.isNetwork()) {
                this.tools.openLoader();
                this.apiServices.Register(this.Fname, this.Lname, this.mobileno).subscribe(function (response) {
                  _this.tools.closeLoader();

                  var res = response; //console.log('response ', res.login_token);

                  if (res.status) {
                    _this.route.navigate(['/otpverification']);
                  } else {
                    _this.tools.presentAlert('', 'Something Wrong...', 'Ok');
                  }
                }, function (error) {
                  _this.tools.closeLoader();

                  _this.tools.closeLoader();

                  console.log('Error ', error);
                  var err = error;

                  _this.tools.openAlertToken(err.status, err.error.message);
                });
              } else {
                this.tools.closeLoader();
              }
            }
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _shared_tools__WEBPACK_IMPORTED_MODULE_6__["Tools"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map
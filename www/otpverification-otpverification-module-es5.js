(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpverification-otpverification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOtpverificationOtpverificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"page_block\">\n        <div class=\"page_box\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-img class=\"logo\"  src=\"assets/img/logo.png\"></ion-img>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-label class=\"content\">{{verificont}}</ion-label>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">Enter OTP</ion-label>\n                            <ion-input [(ngModel)]=\"otpcode\" type=\"tel\" maxlength=\"6\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-button class=\"btn-orange w-100\" (click)=\"onSubmitClick()\" shape=\"round\" expand=\"block\">SUBMIT</ion-button>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col style=\"text-align: center;\">\n                        <ion-label style=\"cursor: pointer;\" (click)=\"onResendClick()\" color=\"primary\"><u>Resend?</u></ion-label>\n                    </ion-col>\n                </ion-row>\n\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.module.ts ***!
      \***********************************************************/

    /*! exports provided: OtpverificationPageModule */

    /***/
    function srcAppOtpverificationOtpverificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpverificationPageModule", function () {
        return OtpverificationPageModule;
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


      var _otpverification_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./otpverification.page */
      "./src/app/otpverification/otpverification.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _otpverification_page__WEBPACK_IMPORTED_MODULE_4__["OtpverificationPage"]
      }];

      var OtpverificationPageModule = function OtpverificationPageModule() {
        _classCallCheck(this, OtpverificationPageModule);
      };

      OtpverificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_otpverification_page__WEBPACK_IMPORTED_MODULE_4__["OtpverificationPage"]]
      })], OtpverificationPageModule);
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOtpverificationOtpverificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290cHZlcmlmaWNhdGlvbi9vdHB2ZXJpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.ts ***!
      \*********************************************************/

    /*! exports provided: OtpverificationPage */

    /***/
    function srcAppOtpverificationOtpverificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpverificationPage", function () {
        return OtpverificationPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _shared_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/tools */
      "./src/app/shared/tools.ts");

      var OtpverificationPage = /*#__PURE__*/function () {
        function OtpverificationPage(router, route, formBuilder, apiServices, tools) {
          _classCallCheck(this, OtpverificationPage);

          //this.mno = this.route.snapshot.paramMap.get('mno')  
          // this.dotp = this.route.snapshot.paramMap.get('dotp')  
          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.apiServices = apiServices;
          this.tools = tools;
          this.mno = ''; //dotp:any='';

          this.otpcode = "";
          this.verificont = "";
          this.mno = localStorage.getItem('mobileno');
          console.log('params1 =>', this.mno);
          this.verificont = "Please Enter Verification Code Send to ******" + this.mno.substr(this.mno.length - 4);
        }

        _createClass(OtpverificationPage, [{
          key: "onSubmitClick",
          value: function onSubmitClick() {
            var _this = this;

            //this.router.navigate(['/home']);
            var msg = '';

            if (this.otpcode == '') {
              msg = msg + 'Please enter OTP <br />';
            }

            if (msg != '') {
              this.tools.openAlert(msg);
            } else {
              if (this.tools.isNetwork()) {
                this.tools.openLoader();
                this.apiServices.VerificationOTP(this.otpcode, this.mno).subscribe(function (response) {
                  _this.tools.closeLoader();

                  var res = response;

                  if (res.status) {
                    localStorage.setItem('login_token', res.token);
                    console.log('response ', res.data[0]); //localStorage.setItem('userdata', JSON.stringify(res.data[0]));

                    _this.apiServices.setUserData(res.data[0]);

                    _this.router.navigateByUrl('/home', {
                      replaceUrl: true
                    }); // this.router.navigate(['/home'], { replaceUrl: true });

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
        }, {
          key: "onResendClick",
          value: function onResendClick() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OtpverificationPage;
      }();

      OtpverificationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _shared_tools__WEBPACK_IMPORTED_MODULE_5__["Tools"]
        }];
      };

      OtpverificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otpverification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otpverification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otpverification.page.scss */
        "./src/app/otpverification/otpverification.page.scss"))["default"]]
      })], OtpverificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otpverification-otpverification-module-es5.js.map
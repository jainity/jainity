(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~login-login-module~otpverification-otpverification-module~register-register-module"], {
    /***/
    "./src/app/services/api.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(device, http, alertController, router) {
          _classCallCheck(this, ApiService);

          this.device = device;
          this.http = http;
          this.alertController = alertController;
          this.router = router;
          this.apiKey = '';
          this.bacisAuth = 'Basic ' + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].username + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].password);
          this.setHeader();
        }

        _createClass(ApiService, [{
          key: "setHeader",
          value: function setHeader() {
            console.log('getLoginToken ', this.getLoginToken());

            if (this.getLoginToken() == undefined) {
              console.log('Basic auth ' + this.bacisAuth);
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                  // 'Accept': 'application/json,',
                  // 'Content-Type': 'multipart/form-data',
                  // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                  // 'Content-Type': 'application/json',
                  'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': this.bacisAuth,
                  'X-JAINITY-API-KEY': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey
                })
              };
            } else {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                  // 'Accept': 'application/json',
                  // 'Content-Type': 'multipart/form-data',
                  // 'Content-Type': 'application/json',
                  // 'Content-Type':'application/x-www-form-urlencoded',
                  'Access-Control-Allow-Headers': "Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': this.bacisAuth,
                  'X-JAINITY-API-KEY': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey,
                  'User-Id': this.getUserId(),
                  'X-JAINITY-LOGIN-TOKEN': this.getLoginToken()
                })
              };
            }
          }
        }, {
          key: "getLoginToken",
          value: function getLoginToken() {
            if (localStorage['login_token']) {
              return localStorage['login_token'];
            }

            return;
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            console.log('User Info--> ', this.getUserData());
            return this.getUserData().id;
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            console.log('User Data --> ', localStorage['userdata']);

            if (localStorage['userdata']) {
              return JSON.parse(localStorage.getItem('userdata'));
            }

            return;
          }
        }, {
          key: "setUserData",
          value: function setUserData(user) {
            console.log(user);

            if (user != null) {
              return localStorage.setItem('userdata', JSON.stringify(user));
            } else {
              localStorage.removeItem('userdata');
              return user;
            }
          }
        }, {
          key: "stateList",
          value: function stateList() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/category/state", this.httpOptions);
          }
        }, {
          key: "SendOTP",
          value: function SendOTP(username) {
            var postData = new FormData(); // postData.append('file', imageFile);

            postData.append("Mobile", username);
            postData.append("device_token", this.device.uuid);
            console.log('Params ', postData);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/send_otp", postData, this.httpOptions);
          }
        }, {
          key: "VerificationOTP",
          value: function VerificationOTP(OTP, Mobile) {
            var postData = new FormData(); // postData.append('file', imageFile);

            postData.append("OTP", OTP);
            postData.append("Mobile", Mobile);
            postData.append("device_token", this.device.uuid);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/verify_otp", postData, this.httpOptions);
          }
        }, {
          key: "logout",
          value: function logout() {
            var postData = new FormData();
            postData.append("DeviceID", this.device.uuid);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/logout", postData, this.httpOptions);
          }
        }, {
          key: "Register",
          value: function Register(Fname, Lname, Mobileno) {
            var postData = new FormData(); // postData.append('file', imageFile);

            postData.append("FirstName", Fname);
            postData.append("LastName", Lname);
            postData.append("Mobile", Mobileno);
            postData.append("device_token", this.device.uuid);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "auth/register", postData, this.httpOptions);
          }
        }, {
          key: "getSchemeGroup",
          value: function getSchemeGroup() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/scheme_group", this.httpOptions);
          }
        }, {
          key: "userData",
          value: function userData(isShow) {
            var _this = this;

            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/user_data", this.httpOptions).subscribe(function (response) {
              var res = response;

              if (res.status) {
                if (isShow) {
                  if (_this.dateDifference(res.data.user.planenddate) <= 0) {
                    _this.openAlert('Your plan expire, please contact to administrator', true);
                  } else if (_this.dateDifference(res.data.user.planenddate) <= 7) {
                    _this.openAlert('Your plan has expire after ' + _this.dateDifference(res.data.user.planenddate) + ' days please contact to administrator', false);
                  }
                }

                localStorage.setItem('userdata', JSON.stringify(res.data.user)); // this.tools.openAlert('Plan Expire ',res.data.user);
              }
            }, function (error) {
              var err = error;
              console.log('Error ', err.error);
            });
          }
        }, {
          key: "dateDifference",
          value: function dateDifference(end) {
            var startDt = new Date();
            var endDt = new Date(end);
            console.log('Date Difference ', (endDt.getTime() - startDt.getTime()) / (24 * 3600 * 1000));
            return Math.ceil((endDt.getTime() - startDt.getTime()) / (24 * 3600 * 1000));
          }
        }, {
          key: "editProfile",
          value: function editProfile(postData) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/edit_profile", postData, this.httpOptions);
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword(mobileno) {
            var postData = new FormData();
            postData.append("mobileno", mobileno);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/forgot_password", postData, this.httpOptions);
          }
        }, {
          key: "addCat",
          value: function addCat(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Category", postData, this.httpOptions);
          }
        }, {
          key: "delCat",
          value: function delCat(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/category/cat", postData, this.httpOptions); // return this.http.post(environment.BaseUrl + "/category/remove_category", postData, this.httpOptions);
          }
        }, {
          key: "getCat",
          value: function getCat() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Category", this.httpOptions);
          }
        }, {
          key: "getArrive",
          value: function getArrive() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/is_arrive", this.httpOptions);
          }
        }, {
          key: "addProduct",
          value: function addProduct(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/add_product", postData, this.httpOptions);
          }
        }, {
          key: "getProcudt",
          value: function getProcudt(catID) {
            this.setHeader();
            var postData = new FormData();
            postData.append("CategoryID", catID);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/product_list", postData, this.httpOptions);
          }
        }, {
          key: "getWishProduct",
          value: function getWishProduct() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/whishlist", this.httpOptions);
          }
        }, {
          key: "getFavProduct",
          value: function getFavProduct() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Like", this.httpOptions);
          }
        }, {
          key: "productLike",
          value: function productLike(ProductId, status) {
            this.setHeader();
            var postData = new FormData();
            postData.append("ProductID", ProductId);
            postData.append("IsLike", status);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Like", postData, this.httpOptions);
          }
        }, {
          key: "productFav",
          value: function productFav(ProductId, status) {
            this.setHeader();
            var postData = new FormData();
            postData.append("ProductID", ProductId);
            postData.append("isFav", status);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/whishlist", postData, this.httpOptions);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(prodId) {
            this.setHeader();
            var postData = new FormData();
            postData.append("ProductID", prodId);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/Product/remove_product", postData, this.httpOptions);
          }
        }, {
          key: "addCustomer",
          value: function addCustomer(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/add_customer", postData, this.httpOptions);
          }
        }, {
          key: "removeCustomer",
          value: function removeCustomer(custId) {
            this.setHeader();
            var postData = new FormData();
            postData.append("CustomerID", custId);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/remove_customer", postData, this.httpOptions);
          }
        }, {
          key: "addMeasurement",
          value: function addMeasurement(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/measurement", postData, this.httpOptions);
          }
        }, {
          key: "getCustomer",
          value: function getCustomer() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/customer_list", this.httpOptions);
          }
        }, {
          key: "getMeasurement",
          value: function getMeasurement(postData) {
            this.setHeader();
            ;
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/customer/measurement_list", postData, this.httpOptions);
          }
        }, {
          key: "getNotification",
          value: function getNotification() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/notification", this.httpOptions);
          }
        }, {
          key: "getOrderCustomer",
          value: function getOrderCustomer() {
            this.setHeader();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/customer_list", this.httpOptions);
          }
        }, {
          key: "getOrder",
          value: function getOrder(custId, type) {
            this.setHeader();
            var postData = new FormData();
            postData.append("CustomerID", custId);
            postData.append("type", type);
            console.log('Customer ID ', custId);
            console.log('Type ', type);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/order_list", postData, this.httpOptions);
          }
        }, {
          key: "removeOrder",
          value: function removeOrder(orderId) {
            this.setHeader();
            var postData = new FormData();
            postData.append("OderHdrID", orderId);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/remove_order", postData, this.httpOptions);
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(OderHdrID, Status) {
            this.setHeader();
            var postData = new FormData();
            postData.append("OderHdrID", OderHdrID);
            postData.append("Status", Status);
            console.log('OderHdrID ', OderHdrID);
            console.log('Status ', Status);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order/status", postData, this.httpOptions);
          }
        }, {
          key: "addOrder",
          value: function addOrder(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/order", postData, this.httpOptions);
          }
        }, {
          key: "getFrom",
          value: function getFrom() {
            if (window.localStorage['from']) {
              return localStorage.getItem('from');
            }

            return;
          }
        }, {
          key: "setFrom",
          value: function setFrom(from) {
            if (from != null) {
              return localStorage.setItem('from', from);
            } else {
              localStorage.removeItem('from');
              return from;
            }
          }
        }, {
          key: "getCustomerID",
          value: function getCustomerID() {
            if (window.localStorage['customerID']) {
              return localStorage.getItem('customerID');
            }

            return;
          }
        }, {
          key: "setCustomerID",
          value: function setCustomerID(customer) {
            if (customer != null) {
              return localStorage.setItem('customerID', customer);
            } else {
              localStorage.removeItem('customerID');
              return customer;
            }
          }
        }, {
          key: "getOrderData",
          value: function getOrderData() {
            if (window.localStorage['order']) {
              return JSON.parse(localStorage.getItem('order'));
            }

            return;
          }
        }, {
          key: "setOrderData",
          value: function setOrderData(order) {
            if (order != null) {
              return localStorage.setItem('order', JSON.stringify(order));
            } else {
              localStorage.removeItem('order');
              return order;
            }
          }
        }, {
          key: "getCustomerData",
          value: function getCustomerData() {
            if (window.localStorage['customer']) {
              return JSON.parse(localStorage.getItem('customer'));
            }

            return;
          }
        }, {
          key: "getStateList",
          value: function getStateList() {
            if (window.localStorage['stateList']) {
              return JSON.parse(localStorage.getItem('stateList'));
            }

            return;
          }
        }, {
          key: "setCustomerData",
          value: function setCustomerData(customer) {
            if (customer != null) {
              return localStorage.setItem('customer', JSON.stringify(customer));
            } else {
              localStorage.removeItem('customer');
              return customer;
            }
          }
        }, {
          key: "getProductData",
          value: function getProductData() {
            if (window.localStorage['product']) {
              return JSON.parse(localStorage.getItem('product'));
            }

            return;
          }
        }, {
          key: "setProductData",
          value: function setProductData(product) {
            if (product != null) {
              return localStorage.setItem('product', JSON.stringify(product));
            } else {
              localStorage.removeItem('product');
              return product;
            }
          }
        }, {
          key: "getCategoryData",
          value: function getCategoryData() {
            if (window.localStorage['Category']) {
              return JSON.parse(localStorage.getItem('Category'));
            }

            return;
          }
        }, {
          key: "setCategoryData",
          value: function setCategoryData(Category) {
            if (Category != null) {
              return localStorage.setItem('Category', JSON.stringify(Category));
            } else {
              localStorage.removeItem('Category');
              return Category;
            }
          }
        }, {
          key: "ChangePassword",
          value: function ChangePassword(postData) {
            this.setHeader();
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BaseUrl + "/auth/change_password", postData, this.httpOptions);
          }
        }, {
          key: "openAlert",
          value: function openAlert(message, isTrue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        message: message ? message : 'This is an alert message.',
                        buttons: [{
                          text: isTrue ? 'Login' : 'Ok',
                          handler: function handler() {
                            if (isTrue) {
                              localStorage.setItem('userdata', '');
                              localStorage.setItem('login_token', '');
                              localStorage.clear();

                              _this2.router.navigateByUrl('/login', {
                                replaceUrl: true
                              });
                            }
                          }
                        }],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getKeyPairValue",
          value: function getKeyPairValue(param) {
            var formBody = []; // tslint:disable-next-line:forin

            for (var property in param) {
              formBody.push(encodeURIComponent(property) + '=' + encodeURIComponent(param[property]));
            }

            formBody = formBody.join('&');
            return formBody;
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: 'image/jpeg'
            });
            return blob;
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _authguard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authguard.service */
      "./src/app/shared/authguard.service.ts");
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tools */
      "./src/app/shared/tools.ts"); // import { CommonModule } from '@angular/common';


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // declarations: [TranslateModule],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [_authguard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _tools__WEBPACK_IMPORTED_MODULE_6__["Tools"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "./src/app/shared/tools.ts":
    /*!*********************************!*\
      !*** ./src/app/shared/tools.ts ***!
      \*********************************/

    /*! exports provided: Tools */

    /***/
    function srcAppSharedToolsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tools", function () {
        return Tools;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");

      var Tools = /*#__PURE__*/function () {
        function Tools(alertController, apiServices, toastController, network, loadingController, router, navCtrl) {
          _classCallCheck(this, Tools);

          this.alertController = alertController;
          this.apiServices = apiServices;
          this.toastController = toastController;
          this.network = network;
          this.loadingController = loadingController;
          this.router = router;
          this.navCtrl = navCtrl;
        }

        _createClass(Tools, [{
          key: "backPage",
          value: function backPage() {
            this.navCtrl.back();
          }
        }, {
          key: "callStateList",
          value: function callStateList(isShow) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.isNetwork()) {
                        _context2.next = 5;
                        break;
                      }

                      if (isShow) this.openLoader();
                      this.apiServices.stateList().subscribe(function (response) {
                        var res = response;

                        _this3.closeLoader();

                        if (res.status) {
                          localStorage.setItem('stateList', JSON.stringify(res.state_list));
                        } else {
                          localStorage.setItem('stateList', JSON.stringify([]));
                          return [];
                        }
                      }, function (error) {
                        _this3.closeLoader();

                        console.log('Error ', error);
                      });
                      _context2.next = 7;
                      break;

                    case 5:
                      this.closeLoader();
                      return _context2.abrupt("return", []);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCities",
          value: function getCities(stateList, id) {
            if (stateList.length > 0) {
              if (stateList.filter(function (x) {
                return x.StateID === id;
              }).length > 0) return stateList.filter(function (x) {
                return x.StateID === id;
              })[0].City;else {
                return [];
              }
            }
          }
        }, {
          key: "isNetwork",
          value: function isNetwork() {
            this.closeLoader();

            if (this.network.type == 'none') {
              this.presentAlert('No internet', 'You do not have an Internet connection. Please check your connection status', 'Ok');
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "formatephone",
          value: function formatephone(phonenumber) {
            // tslint:disable-next-line:prefer-const
            var phonestring = phonenumber.replace(/[^a-zA-Z0-9]/g, ''); // tslint:disable-next-line:prefer-const

            var formatednumber = phonestring.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            return formatednumber;
          }
        }, {
          key: "openNotification",
          value: function openNotification(options) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: options.message,
                        duration: options.duration ? options.duration : 3000,
                        position: options.position ? options.position : 'top',
                        cssClass: options["class"] ? options["class"] : 'info'
                      });

                    case 2:
                      this.notification = _context3.sent;
                      this.notification.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "formateDateyyyymmddhis",
          value: function formateDateyyyymmddhis(date) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var mm, dd, yyyy, h, i, s, today;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      // tslint:disable-next-line:prefer-const
                      mm = ('0' + (date.getMonth() + 1)).slice(-2); // tslint:disable-next-line:prefer-const

                      dd = ('0' + date.getDate()).slice(-2); // tslint:disable-next-line:prefer-const

                      yyyy = date.getFullYear(); // tslint:disable-next-line:prefer-const

                      h = ('0' + date.getHours()).slice(-2); // tslint:disable-next-line:prefer-const

                      i = ('0' + date.getMinutes()).slice(-2); // tslint:disable-next-line:prefer-const

                      s = ('0' + date.getSeconds()).slice(-2); // tslint:disable-next-line:prefer-const

                      today = yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + i + ':' + s;
                      return _context4.abrupt("return", today);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "formateDay",
          value: function formateDay(today) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var dd, yyyy, mm;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      dd = today.getDate(); // tslint:disable-next-line:prefer-const

                      yyyy = today.getFullYear();
                      mm = today.getMonth() + 1; // January is 0!

                      if (dd < 10) {
                        dd = '0' + dd;
                      }

                      if (mm < 10) {
                        mm = '0' + mm;
                      }

                      today = yyyy + '-' + mm + '-' + dd;
                      return _context5.abrupt("return", today);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "formatAMPM1",
          value: function formatAMPM1(date) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var hours, minutes, ampm, strTime;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // console.log(date);
                      hours = date.getHours();
                      minutes = date.getMinutes(); // tslint:disable-next-line:prefer-const

                      ampm = hours >= 12 ? 'PM' : 'AM';
                      hours = hours % 12;
                      hours = hours ? hours : 12; // the hour '0' should be '12'

                      minutes = minutes < 10 ? '0' + minutes : minutes; // tslint:disable-next-line:prefer-const

                      strTime = hours + ':' + minutes + ' ' + ampm;
                      return _context6.abrupt("return", strTime);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "formatAMPM",
          value: function formatAMPM(date) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var hours, minutes, ampm, strTime;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      hours = date.getUTCHours();
                      minutes = date.getUTCMinutes(); // tslint:disable-next-line:prefer-const

                      ampm = hours >= 12 ? 'PM' : 'AM';
                      hours = hours % 12;
                      hours = hours ? hours : 12; // the hour '0' should be '12'

                      minutes = minutes < 10 ? '0' + minutes : minutes; // tslint:disable-next-line:prefer-const

                      strTime = hours + ':' + minutes + ' ' + ampm;
                      return _context7.abrupt("return", strTime);

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "openLoader",
          value: function openLoader() {
            var cssClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var msg = arguments.length > 1 ? arguments[1] : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingController.create({
                        message: msg ? msg : '',
                        keyboardClose: true,
                        showBackdrop: true,
                        cssClass: cssClass
                      });

                    case 2:
                      this.loading = _context8.sent;
                      _context8.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "openAlert",
          value: function openAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertController.create({
                        message: message ? message : 'This is an alert message.',
                        buttons: ['OK'],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                      return _context9.abrupt("return", _context9.sent);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "openAlertToken",
          value: function openAlertToken(status, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      console.log('Api Status ', status);
                      _context10.next = 3;
                      return this.alertController.create({
                        message: message ? message : 'This is an alert message.',
                        buttons: [{
                          text: status == 401 ? 'Login' : 'Ok',
                          handler: function handler() {
                            if (status == 401) {
                              localStorage.setItem('userdata', '');
                              localStorage.setItem('login_token', '');
                              localStorage.clear();

                              _this4.router.navigateByUrl('/login', {
                                replaceUrl: true
                              });
                            }
                          }
                        }],
                        backdropDismiss: false
                      });

                    case 3:
                      alert = _context10.sent;
                      _context10.next = 6;
                      return alert.present();

                    case 6:
                      return _context10.abrupt("return", _context10.sent);

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "presentLogout",
          value: function presentLogout(message, btnYes, btnNo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertController.create({
                        message: message,
                        buttons: [{
                          text: btnNo ? btnNo : 'Cancel',
                          role: 'cancel',
                          handler: function handler() {}
                        }, {
                          text: btnYes ? btnYes : 'Yes',
                          handler: function handler() {
                            localStorage.setItem('userdata', '');
                            localStorage.setItem('login_token', '');
                            localStorage.clear();

                            _this5.router.navigateByUrl('/login', {
                              replaceUrl: true
                            });
                          }
                        }],
                        backdropDismiss: true
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                      return _context11.abrupt("return", _context11.sent);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "presentAlertToLogin",
          value: function presentAlertToLogin(title, msg, btnOk) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.closeLoader();
                      _context12.next = 3;
                      return this.alertController.create({
                        header: title,
                        message: msg,
                        buttons: [{
                          text: btnOk,
                          handler: function handler() {
                            localStorage.setItem('userdata', '');
                            localStorage.setItem('login_token', '');
                            localStorage.clear();

                            _this6.router.navigateByUrl('/login', {
                              replaceUrl: true
                            });
                          }
                        }]
                      });

                    case 3:
                      alert = _context12.sent;
                      _context12.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(title, msg, btnOk, isMove) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.alertController.create({
                        header: title,
                        message: msg,
                        buttons: [{
                          text: btnOk,
                          handler: function handler() {
                            if (isMove) _this7.router.navigateByUrl('/dashboard', {
                              replaceUrl: true
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context13.sent;
                      _context13.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm(message, btnYes, btnNo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var alert;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.alertController.create({
                        message: message ? message : 'Do you want to buy this book?',
                        buttons: [{
                          text: btnNo ? btnNo : 'Cancel',
                          role: 'cancel',
                          handler: function handler() {// console.log('Cancel clicked');
                          }
                        }, {
                          text: btnYes ? btnYes : 'Yes',
                          handler: function handler() {// console.log('Buy clicked');
                          }
                        }],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context14.sent;
                      _context14.next = 5;
                      return alert.present();

                    case 5:
                      return _context14.abrupt("return", _context14.sent);

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "closeLoader",
          value: function closeLoader() {
            // setTimeout(() => {
            if (this.loading) {
              this.loading.dismiss();
            } // }, 500);

          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;

            if (dataURI.split(',')[0].indexOf('base64') >= 0) {
              byteString = atob(dataURI.split(',')[1]);
            } else {
              byteString = unescape(dataURI.split(',')[1]);
            } // separate out the mime component
            // tslint:disable-next-line:prefer-const


            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array
            // tslint:disable-next-line:prefer-const

            var ia = new Uint8Array(byteString.length);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
              type: mimeString
            });
          }
        }, {
          key: "returnImageName",
          value: function returnImageName(keys, file, blob) {
            var imagename;

            if (blob) {
              imagename = new Date().getTime() + keys + '.jpg';
              blob.lastModified = new Date();
              blob.name = imagename;
            } else {
              imagename = new Date().getTime() + keys + file.name;
            }

            imagename.replace(/_/g, ' ');
            imagename = imagename.replace(/\s+/g, '-');
            imagename = imagename.replace(/%20/g, '_');
            return imagename;
          }
        }]);

        return Tools;
      }();

      Tools.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_1__["Network"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      Tools = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], Tools);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~home-home-module~login-login-module~otpverification-otpverification-module~register-register-module-es5.js.map
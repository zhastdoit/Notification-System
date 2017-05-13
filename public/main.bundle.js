webpackJsonp([1,5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.author = 'Xiaojie Zha';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(176),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_module_main_module_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footbar_footbar_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_new_message_new_message_component__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_main_module_main_module_component__["a" /* MainModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_footbar_footbar_component__["a" /* FootbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_new_message_new_message_component__["a" /* NewMessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */]
        ],
        providers: [{
                provide: "auth",
                useClass: __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]
            }, {
                provide: "data",
                useClass: __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_module_main_module_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "profile",
        component: __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_2__components_main_module_main_module_component__["a" /* MainModuleComponent */]
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootbarComponent = (function () {
    function FootbarComponent() {
        this.author = "Xiaojie Zha";
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    return FootbarComponent;
}());
FootbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footbar',
        template: __webpack_require__(177),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], FootbarComponent);

//# sourceMappingURL=footbar.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(178),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.title = 'Simple Keyword Highlight App';
        this.username = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated()) {
            this.username = this.auth.userProfile.nickname;
        }
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.auth.login()
            .then(function (profile) { return _this.username = profile.nickname; });
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.auth.authenticated();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(180),
        styles: [__webpack_require__(169)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getSampleText = function () {
        return this.http.get("api/v1/sampleText")
            .toPromise()
            .then(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //For demo purposes only
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 35vh;\n  resize: none;\n}\n\n.output-session {\n  padding: 5px 10px 10px 10px;\n  overflow: auto;\n  height: 55vh;\n}\n\n.keywordInput{\n  margin-top: 25px;\n  margin-bottom: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".navbar-custom {\n  background-color:#656d74;\n  border-radius:0;\n}\n\n.navbar-nav > li > a {\n  padding-top:30px !important;\n  padding-bottom:30px !important;\n  font-size: 20px !important;\n}\n.navbar {\n  min-height: 80px !important\n}\n\n.navbar .nav .open>.dropdown-toggle, .navbar .nav .active>.dropdown-toggle, .navbar .nav .open.active>.dropdown-toggle {\n  background-color: transparent;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  min-width: 300px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 1px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n\n.logo-bittiger {\n  height: 32px;\n  margin-top: 10px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footbar></app-footbar>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          Copyright &copy; {{author}} 2017\n        </div>\n      </div>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Username</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        #username\n        placeholder=\"Enter your email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        #password\n        placeholder=\"Enter your password\">\n    </div>\n    <button\n      type=\"submit\"\n      class=\"btn btn-default\"\n      (click)=\"auth.login(username.value, password.value)\">\n      Log In\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default\"\n      (click)=\"auth.signup(username.value, password.value)\">\n      Sign Up\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default btn-primary\"\n      (click)=\"auth.loginWithGoogle()\">\n      Log In with Google\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n  <div class=\"col-sm-3\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"col-sm-9\">\n    <app-new-message></app-new-message>\n  </div>\n</div>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-custom\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header navbar-custom\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"logo-bittiger img-responsive\" alt=\"Brand\" src=\"//cdn-i2.tianmaying.com/public/homeV1/logo-tpye@3x.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <span class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span> <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n\n                <a routerLink=\"/profile\">My Profile</a>\n                <a class=\"text-right\" routerLink=\"/home\" (click)=\"delete()\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a>\n              <!--<li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>-->\n\n            </li>\n          </ul>\n          <!--<ul class=\"dropdown-menu list-group\">-->\n            <!--<li class=\"list-group-item\">-->\n              <!--<span class=\"badge\">14</span>-->\n              <!--Cras justo odio-->\n            <!--</li>-->\n          <!--</ul>-->\n        </li>\n        <li>\n          <form class=\"navbar-form\">\n            <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\" *ngIf=\"!(isAuthenticated())\">Sign in</button>-->\n          </form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/profile\">My Profile</a></li>\n            <li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#other\">Options</a></li>\n  </ul>\n  <br>\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class=\"form-group col-sm-8\">\n        <label for=\"username\">AccountID</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               name=\"username\" disabled value=\"{{username}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"nickname\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"nickname\"\n               name=\"nickname\" disabled value=\"{{nickname}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n               name=\"email\" disabled value=\"{{email}}\">\n      </div>\n    </div>\n    <div id=\"other\" class=\"tab-pane fade\">\n      <form class=\"navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" routerLink=\"/home\" (click)=\"logout()\">Log Out {{email}}</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(226),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".sidebarList{\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.btn{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"text-center\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> username</div>\n</div>\n\n<div>\n  <form class=\"navbar-form\">\n    <button type=\"button\" class=\"btn btn-large btn-success btn-block\" (click)=\"newMsg()\">New Mesage</button>\n  </form>\n</div>\n\n<div class=\"sidebarList\">\n  <ul class=\"nav nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#\">Inbox</a></li>\n    <li role=\"presentation\"><a href=\"#\">Starred</a></li>\n    <li role=\"presentation\"><a href=\"#\">Sent</a></li>\n    <hr>\n    <li role=\"presentation\"><a href=\"#\">Inbox</a></li>\n    <li role=\"presentation\"><a href=\"#\">Starred</a></li>\n    <li role=\"presentation\"><a href=\"#\">Sent</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SAMPLE_OPTIONS = ["CS503", "UX501"];
var NewMessageComponent = (function () {
    function NewMessageComponent() {
        this.options = SAMPLE_OPTIONS;
    }
    NewMessageComponent.prototype.ngOnInit = function () {
    };
    return NewMessageComponent;
}());
NewMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-message',
        template: __webpack_require__(229),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], NewMessageComponent);

//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 45vh;\n  resize: none;\n}\n\n.main_container{\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.no-border {\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main_container\">\n  <div>\n    <form #formRef=\"ngForm\">\n      <div class=\"row col-md-12 keywordInput\">\n        <div class=\"form-group\">\n          <div class = \"col-sm-12 col-md-12 div-margin\">\n            <!--<label for=\"title\">Subject</label>-->\n            <input type=\"text\" class=\"form-control no-border\" id=\"title\"\n                   name=\"title\" placeholder=\"Subject...\" [(ngModel)]=\"title\" (ngModelChange)=\"keywordMark()\">\n          </div>\n          <div class = \"col-sm-4 col-md-4 form-inline\">\n            <label for=\"option\">Groups</label>\n            <select class=\"form-control\" id=\"option\"\n                    name=\"options\" [(ngModel)]=\"choseOption\" (ngModelChange)=\"selectGroup()\" [value]=\"options\" >\n              <option *ngFor=\"let opt of options\">\n                {{opt}}\n              </option>\n            </select>\n          </div>\n          <div class = \"col-md-offset-4 col-sm-2 col-md-2 form-inline\">\n            <form>\n              <button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"sendMsg()\"> Send </button>\n            </form>\n          </div>\n          <div class = \"col-sm-2 col-md-2 form-inline\">\n            <form>\n              <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"cancelMsg()\">Cancel</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"searchKeyword()\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Search</button>-->\n    </form>\n  </div>\n  <div class = \"col-md-12 div-margin\">\n    <div>\n      <textarea class=\"form-control input-session\" id=\"input-session\"\n                name=\"input-session\" placeholder=\"Input Message Here...\" [(ngModel)]=\"inputContent\"></textarea>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//const SAMPLETXT: string = "Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history.[1] In 2014–15, Curry won the NBA Most Valuable Player Award and led the Warriors to their first championship since 1975. The following season, he became the first player in NBA history to be elected MVP by a unanimous vote and to lead the league in scoring while shooting above 50–40–90. That same year, the Warriors broke the record for the most wins in an NBA season. Curry is the son of former NBA player Dell Curry and older brother of current NBA player Seth Curry. He played college basketball for Davidson. There, he was twice named Southern Conference Player of the Year and set the all-time scoring record for both Davidson and the Southern Conference. During his sophomore year, he also set the single-season NCAA record for three-pointers made. During the 2012–13 season, Curry set the NBA record for three-pointers made in a regular season with 272. He surpassed that record in 2015 with 286, and again in 2016 with 402. During the 2013–14 season, he and teammate Klay Thompson were nicknamed the \"Splash Brothers\" en route to setting the NBA record for combined three-pointers in a season with 484, a record they broke the following season (525) and again in the 2015–16 season (678). (Abstracted from Wikipedia)";
var TWO_OPTIONS = ["Show all search results", "Show exact words only"];
var MainModuleComponent = (function () {
    function MainModuleComponent(route, data) {
        this.route = route;
        this.data = data;
        this.options = TWO_OPTIONS;
        this.choseOption = "Show all search results";
        this.keyword = "";
        this.inputContent = "";
        this.outputContent = "";
    }
    MainModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getSampleText()
                .then(function (sampleText) {
                _this.inputContent = sampleText;
                _this.outputContent = sampleText;
            });
        });
    };
    /** Usage:
     * replace(): $& contains the string matched by the last pattern match
     * RegExp(): g: global, i: case insensitive
     * replace(/\s/g, ''): kick out the all space keyword
     */
    MainModuleComponent.prototype.keywordMark = function () {
        var key = this.keyword;
        if (this.choseOption == "Show exact words only")
            key = " " + this.keyword + " ";
        var pattern = key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        var regexp = new RegExp(pattern, 'gi');
        this.outputContent = key && key.replace(/\s/g, '').length ? this.inputContent.replace(regexp, function (match) { return "<strong><mark>" + match + "</mark></strong>"; }) : this.inputContent;
    };
    return MainModuleComponent;
}());
MainModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-module',
        inputs: ['changeTrigger'],
        template: __webpack_require__(179),
        styles: [__webpack_require__(168)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])("data")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], MainModuleComponent);

var _a;
//# sourceMappingURL=main-module.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.username = ""; //AccountID
        this.nickname = ""; //Username
        this.email = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        if (this.auth.authenticated()) {
            this.email = profile.email;
            this.username = profile.name;
            this.nickname = profile.nickname;
        }
    };
    ProfileComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(181),
        styles: [__webpack_require__(170)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        // Configure Auth0
        this.lock = new Auth0Lock('b_FS9zxURaIR7-RuFeY2b3rNkxha2sUO', 'charleszha.auth0.com', {});
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for the Lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            // Fetch profile information *in async method!
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    // public login() {
    //   this.lock.show();
    // }
    AuthService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Call the show method to display the widget.
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.bundle.js.map
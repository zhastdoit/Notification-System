webpackJsonp([1,5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(183),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_module_main_module_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footbar_footbar_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_new_message_new_message_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_message_module_message_module_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_message_list_message_list_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_message_detail_message_detail_component__ = __webpack_require__(61);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_main_module_main_module_component__["a" /* MainModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footbar_footbar_component__["a" /* FootbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_new_message_new_message_component__["a" /* NewMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_message_module_message_module_component__["a" /* MessageModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_message_list_message_list_component__["a" /* MessageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_message_detail_message_detail_component__["a" /* MessageDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */]
        ],
        providers: [{
                provide: "data",
                useClass: __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_module_main_module_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_message_module_message_module_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_detail_message_detail_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }, {
        path: "profile",
        component: __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_2__components_main_module_main_module_component__["a" /* MainModuleComponent */]
    }, {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_3__components_message_module_message_module_component__["a" /* MessageModuleComponent */]
    }, {
        path: 'messages/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__components_message_detail_message_detail_component__["a" /* MessageDetailComponent */]
    }, {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        this.project = "BitTiger Capstone Project";
        this.author = "Group3";
        this.year = "2017";
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    return FootbarComponent;
}());
FootbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footbar',
        template: __webpack_require__(184),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], FootbarComponent);

//# sourceMappingURL=footbar.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DEFAULT_LOGIN = Object.freeze({
    email: "",
    password: ""
});
var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'login',
        template: __webpack_require__(185),
        styles: [__webpack_require__(169)]
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
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

var MessageListComponent = (function () {
    function MessageListComponent(data) {
        this.data = data;
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageListComponent.prototype.getMessage = function (id) {
        this.data.selectedId = id;
        console.log(this.data.selectedId);
    };
    MessageListComponent.prototype.getMessages = function () {
        var _this = this;
        this.subscriptionMessages = this.data.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; });
    };
    return MessageListComponent;
}());
MessageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-message-list',
        template: __webpack_require__(188),
        styles: [__webpack_require__(172)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], MessageListComponent);

//# sourceMappingURL=message-list.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

var DEFAULT_LOGIN = Object.freeze({
    email: "",
    password: ""
});
var NavbarComponent = (function () {
    function NavbarComponent(data) {
        this.data = data;
        this.username = "";
        this.messages = [];
        this.loginPairs = Object.assign({}, DEFAULT_LOGIN);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.data.authenticated()) {
            this.username = this.data.username;
            this.getMessages();
        }
    };
    NavbarComponent.prototype.login = function () {
        //console.log(this.loginPairs.email);
        this.data.login(this.loginPairs)
            .then(this.username = this.loginPairs.email)
            .catch(function (error) { return console.log(error._body); });
        this.loginPairs = Object.assign({}, DEFAULT_LOGIN);
    };
    // signup(): void{
    //   console.log("signup button is clicked.");
    // }
    NavbarComponent.prototype.logout = function () {
        this.username = "";
        this.data.logout();
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.data.authenticated();
    };
    NavbarComponent.prototype.getMessages = function () {
        var _this = this;
        this.subscriptionMessages = this.data.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(190),
        styles: [__webpack_require__(174)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        this.sendSuccess = false;
        this.choseOption = "";
        this.title = "";
        this.options = SAMPLE_OPTIONS;
    }
    NewMessageComponent.prototype.ngOnInit = function () {
    };
    NewMessageComponent.prototype.setTitle = function (tit) {
        this.title = tit;
    };
    NewMessageComponent.prototype.setRecipient = function (rec) {
        this.choseOption = rec;
    };
    return NewMessageComponent;
}());
NewMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-message',
        template: __webpack_require__(191),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], NewMessageComponent);

//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(193),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
        this.selectedId = 0;
        this.messagesSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.username = localStorage.getItem('username');
        this.userProfile = localStorage.getItem('profile');
    }
    DataService.prototype.login = function (loginPair) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/auth/login', loginPair, headers)
            .toPromise()
            .then(function (res) {
            //this.getProblems();
            console.log(res.json());
            localStorage.setItem('username', loginPair.email);
            localStorage.setItem('profile', JSON.stringify(res.json()));
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.authenticated = function () {
        if (localStorage.getItem('username') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.logout = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('profile');
    };
    DataService.prototype.getMessages = function () {
        var _this = this;
        this.http.get("messages/received/userId/" + this.username)
            .toPromise()
            .then(function (res) {
            //console.log(res.json());
            _this.messagesSource.next(res.json());
        })
            .catch(this.handleError);
        return this.messagesSource.asObservable();
    };
    //
    // getMessage(): Message {
    //   this.subscriptionMessages = this.getMessages()
    //     .subscribe(messages => {
    //       this.messages = messages;
    //       for (let message of this.messages) {
    //         if (message.id==this.selectedId)
    //           console.log("getMessage in dataservice if"+this.messages);
    //         return message;
    //     }
    //   });
    //   return null;
    // }
    //
    // addProblem(problem: Problem): Promise<Problem> {
    //   let headers = new Headers({ 'content-type': 'application/json' });
    //   return this.http.post('/api/v1/problems', problem, headers)
    //     .toPromise()
    //     .then((res: Response) => {
    //       this.getProblems();
    //       return res.json();
    //     })
    //     .catch(this.handleError);
    // }
    // error hanlder
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 112:
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 35vh;\n  resize: none;\n}\n\n.output-session {\n  padding: 5px 10px 10px 10px;\n  overflow: auto;\n  height: 55vh;\n}\n\n.keywordInput{\n  margin-top: 25px;\n  margin-bottom: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 45vh;\n  resize: none;\n}\n\n.main_container{\n  margin-top: 50px;\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.div-margin-title{\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.no-border {\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */\n}\n\n.font-grey{\n  color: lightgrey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main_container{\n  /*margin-top: 80px;*/\n  /*display: block;*/\n  /*height: auto;*/\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  /*transition: border-color;*/\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sidebarList{\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.btn{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".navbar-custom {\n  background-color:#656d74;\n  border-radius:0;\n}\n\n.navbar-nav > li > a {\n  padding-top:30px !important;\n  font-size: 15px !important;\n}\n\n.navbar-form {\n  padding-top: 16px !important;\n  color: white;\n}\n\n.navbar {\n  min-height: 80px !important\n}\n\n.navbar .nav .open>.dropdown-toggle, .navbar .nav .active>.dropdown-toggle, .navbar .nav .open.active>.dropdown-toggle {\n  background-color: transparent;\n}\n\n.output-session {\n  padding: 5px 10px 10px 10px;\n  overflow: auto;\n  max-height: 20vh;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  min-width: 400px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 1px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n\n.logo-bittiger {\n  height: 32px;\n  margin-top: 10px;\n}\n\n/*.inline{*/\n  /*display: inline-block;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 45vh;\n  resize: none;\n}\n\n\n.main_container{\n  margin-top: 68px;\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.no-border {\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footbar></app-footbar>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          {{project}} by {{author}} {{year}}\n        </div>\n      </div>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-inline\">\n      <label for=\"email\">e-mail</label>\n      <input\n        required\n        name=\"email\"\n        id=\"email\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Enter your email here...\"\n        [(ngModel)]=\"loginPairs.email\">\n      <label for=\"password\">Password</label>\n      <input\n        required\n        name=\"password\"\n        id=\"password\"\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"Enter your password here...\"\n        [(ngModel)]=\"loginPairs.password\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-default\"\n        (click)=\"login()\">\n        Log In\n      </button>\n    </div>\n    <!--<button-->\n      <!--type=\"button\"-->\n      <!--class=\"btn btn-default\"-->\n      <!--(click)=\"signup()\">-->\n      <!--Sign Up-->\n    <!--</button>-->\n  </form>\n</div>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n\n</div>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main_container\" *ngIf=\"message\">\n  <div>\n    <form>\n      <div class=\"row col-md-12\">\n        <!--<div class=\"alert alert-success\" *ngIf=\"sendSuccess\">-->\n          <!--<strong>Success!</strong>-->\n        <!--</div>-->\n        <div class=\"form-group\">\n          <div class = \"col-sm-12 col-md-12 div-margin-title no-border\">\n            <!--<label for=\"title\">Subject</label>-->\n            <h3>{{message.title}}</h3>\n          </div>\n          <div class = \"col-sm-6 col-md-6 form-inline font-grey\">\n            <label>{{message.createdById}} {{message.sendTime}}</label>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 pull-right\">\n            <div class=\"col-xs-6 form-inline\">\n              <a type=\"button\" class=\"btn btn-success btn-block\" data-toggle=\"pill\" href=\"#newmsg\" (click)=\"newMsg()\"> Reply </a>\n            </div>\n            <div class=\"col-xs-6 form-inline\">\n              <a type=\"button\" class=\"btn btn-danger btn-block\" data-toggle=\"pill\" href=\"#inbox\">Back</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"searchKeyword()\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Search</button>-->\n    </form>\n  </div>\n  <div class = \"col-md-12 div-margin\">\n    <div>\n      <p>{{message.text}}</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!--<div>-->\n    <!--<table class=\"table table-hover\">-->\n      <!--<tbody>-->\n        <!--<tr>-->\n          <!--<dt>UX501停课通知  <span class=\"label label-default\">New</span></dt>-->\n          <!--<dd>UX501小助手 2:31PM</dd>-->\n          <!--<dd>This is the message to say something.</dd>-->\n          <!--<dd>DELETE</dd>-->\n        <!--</tr>-->\n        <!--<tr>-->\n          <!--<dt>UX501停课通知</dt>-->\n          <!--<dd>UX501小助手 2:31PM</dd>-->\n          <!--<dd>This is the message to say something.</dd>-->\n          <!--<dd>DELETE</dd>-->\n        <!--</tr>-->\n      <!--</tbody>-->\n    <!--</table>-->\n  <!--</div>-->\n  <div class=\"list-group div-margin main_container\">\n    <a class=\"list-group-item\" data-toggle=\"pill\" href=\"#detail\">\n      <h4 class=\"list-group-item-heading\">UX501停课通知 <span class=\"label label-default\">New</span> </h4>\n      <p class=\"list-group-item-text\">UX501小助手 2:31PM</p>\n      <p class=\"list-group-item-text\">This is the message to say something.</p>\n    </a>\n    <a class=\"list-group-item\" data-toggle=\"pill\" href=\"#detail\">\n      <h4 class=\"list-group-item-heading\">UX501停课通知 </h4>\n      <p class=\"list-group-item-text\">UX501小助手 2:30PM</p>\n      <p class=\"list-group-item-text\">This is the message to say something.</p>\n    </a>\n    <a class=\"list-group-item\" *ngFor=\"let msg of messages\" data-toggle=\"pill\" href=\"#detail\" (click)=\"getMessage(msg.id)\">\n      <h4 class=\"list-group-item-heading\">{{msg.title}} <span class=\"label label-default\" *ngIf=\"msg.status==1\">New</span> </h4>\n      <p class=\"list-group-item-text\">{{msg.createdById}} {{msg.sendTime}} </p>\n      <p class=\"list-group-item-text\">{{msg.text}}</p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n  <div class=\"col-sm-3\">\n    <div>\n      <div class=\"text-center\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> username</div>\n    </div>\n\n    <div>\n      <form class=\"nav navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success btn-block\" data-toggle=\"tab\" href=\"#newmsg\">New Message</button>\n      </form>\n    </div>\n\n    <div class=\"sidebarList\">\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#inbox\">Inbox <span class=\"badge\">{{unreadNumber}}</span></a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#newmsg\">Starred</a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#inbox\">Sent</a></li>\n        <hr>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#\">CS501</a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#\">UX501</a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#\">BitTiger News</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-sm-9 tab-content\">\n    <div id=\"newmsg\" class=\"tab-pane fade\">\n      <app-new-message></app-new-message>\n    </div>\n    <div id=\"inbox\" class=\"tab-pane fade in active\">\n      <app-message-list></app-message-list>\n    </div>\n    <div id=\"detail\" class=\"tab-pane fade\">\n      <app-message-detail></app-message-detail>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-custom\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header navbar-custom\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"logo-bittiger img-responsive\" alt=\"Brand\" src=\"//cdn-i2.tianmaying.com/public/homeV1/logo-tpye@3x.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isAuthenticated()\">\n          <form class=\"navbar-form\">\n            <label for=\"email\">E-mail</label>\n            <input required name=\"email\" id=\"email\" type=\"text\"\n                   class=\"form-control\" placeholder=\"Enter your email here...\"\n                   [(ngModel)]=\"loginPairs.email\">\n            <label for=\"password\">Password</label>\n            <input\n              required name=\"password\" id=\"password\" type=\"password\"\n              class=\"form-control\" placeholder=\"Enter your password here...\"\n              [(ngModel)]=\"loginPairs.password\">\n            <button\n              type=\"submit\" class=\"btn btn-default\"\n              (click)=\"login()\"> Log In </button>\n          </form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <span style=\"font-size: 20px\" class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span> <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"list-group div-margin-nav output-session\">\n                <div *ngFor=\"let msg of messages\">\n                  <a class=\"list-group-item\" routerLink=\"/messages\">{{msg.title}}</a>\n                  <a class=\"text-right pull-right\" routerLink=\"/home\" (click)=\"delete()\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a>\n                </div>\n              </div>\n              <a routerLink=\"/messages\">All Messages</a>\n              <!--<li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>-->\n            </li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\" *ngIf=\"isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <!--<li><a routerLink=\"/profile\">My Profile</a></li>-->\n            <li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main_container\">\n  <div>\n    <form #formRef=\"ngForm\">\n      <div class=\"row col-md-12\">\n        <div class=\"alert alert-success\" *ngIf=\"sendSuccess\">\n            <strong>Success!</strong>\n        </div>\n        <div class=\"form-group\">\n          <div class = \"col-sm-12 col-md-12 div-margin\">\n            <!--<label for=\"title\">Subject</label>-->\n            <input type=\"text\" class=\"form-control no-border\" id=\"title\"\n                   name=\"title\" placeholder=\"Subject...\" [(ngModel)]=\"title\">\n          </div>\n          <div class = \"col-sm-4 col-md-4 form-inline\">\n            <label for=\"option\">To: </label>\n            <select class=\"form-control\" id=\"option\"\n                    name=\"options\" [(ngModel)]=\"choseOption\" [value]=\"options\" >\n              <option *ngFor=\"let opt of options\">\n                {{opt}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 pull-right\">\n            <div class=\"col-sm-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-success btn-block\" data-toggle=\"pill\" (click)=\"sendMsg()\"> Send </a>\n            </div>\n            <div class=\"col-sm-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-danger btn-block\" data-toggle=\"pill\" href=\"#inbox\">Cancel</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"searchKeyword()\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Search</button>-->\n    </form>\n  </div>\n  <div class = \"col-md-12 div-margin\">\n    <div>\n      <textarea class=\"form-control input-session\" id=\"input-session\"\n                name=\"input-session\" placeholder=\"Input Message Here...\" [(ngModel)]=\"inputContent\"></textarea>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#other\">Options</a></li>\n  </ul>\n  <br>\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class=\"form-group col-sm-8\">\n        <label for=\"username\">AccountID</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               name=\"username\" disabled value=\"{{username}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"nickname\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"nickname\"\n               name=\"nickname\" disabled value=\"{{nickname}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n               name=\"email\" disabled value=\"{{email}}\">\n      </div>\n    </div>\n    <div id=\"other\" class=\"tab-pane fade\">\n      <form class=\"navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" routerLink=\"/home\" (click)=\"logout()\">Log Out {{email}}</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
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
        // this.route.params.subscribe(params => {
        //   this.data.getSampleText()
        //     .then(sampleText => {
        //       this.inputContent = sampleText;
        //       this.outputContent = sampleText;
        //     });
        // });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-main-module',
        inputs: ['changeTrigger'],
        template: __webpack_require__(186),
        styles: [__webpack_require__(170)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])("data")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], MainModuleComponent);

var _a;
//# sourceMappingURL=main-module.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailComponent; });
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



var DEFAULT_MESSAGE = Object.freeze({
    id: 0,
    title: "",
    text: "",
    sendTime: "",
    tag: "",
    createdById: "",
    status: 0,
    parentId: 0
});
var MessageDetailComponent = (function () {
    function MessageDetailComponent(route, data) {
        this.route = route;
        this.data = data;
        this.message = DEFAULT_MESSAGE;
    }
    MessageDetailComponent.prototype.ngOnInit = function () {
        this.getMessage();
        console.log(this.message);
    };
    MessageDetailComponent.prototype.getMessage = function () {
        var _this = this;
        this.data.getMessages()
            .subscribe(function (messages) {
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                console.log("message.id: " + message.id);
                console.log("selectedid: " + _this.data.selectedId);
                if (message.id == _this.data.selectedId) {
                    _this.message = message;
                    console.log("getMessage in dataservice if" + message);
                }
            }
        });
    };
    return MessageDetailComponent;
}());
MessageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-message-detail',
        template: __webpack_require__(187),
        styles: [__webpack_require__(171)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])("data")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], MessageDetailComponent);

var _a;
//# sourceMappingURL=message-detail.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModuleComponent; });
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

var MessageModuleComponent = (function () {
    function MessageModuleComponent(data) {
        this.data = data;
        this.messages = [];
        this.unreadNumber = 0;
    }
    MessageModuleComponent.prototype.ngOnInit = function () {
        if (this.data.authenticated())
            this.getUnreadNumber();
    };
    MessageModuleComponent.prototype.getUnreadNumber = function () {
        var _this = this;
        this.subscriptionMessages = this.data.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            var count = 0;
            for (var _i = 0, _a = _this.messages; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.status == 1)
                    count++;
            }
            _this.unreadNumber = count;
        });
    };
    return MessageModuleComponent;
}());
MessageModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-message-module',
        template: __webpack_require__(189),
        styles: [__webpack_require__(173)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], MessageModuleComponent);

//# sourceMappingURL=message-module.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(192),
        styles: [__webpack_require__(176)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('auth')),
    __metadata("design:paramtypes", [Object])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.bundle.js.map
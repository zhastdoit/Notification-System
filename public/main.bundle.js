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
        template: __webpack_require__(180),
        styles: [__webpack_require__(166)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_new_message_new_message_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_message_module_message_module_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_message_list_message_list_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_message_detail_message_detail_component__ = __webpack_require__(106);
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
            __WEBPACK_IMPORTED_MODULE_13__components_new_message_new_message_component__["a" /* NewMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_message_module_message_module_component__["a" /* MessageModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_message_list_message_list_component__["a" /* MessageListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_message_detail_message_detail_component__["a" /* MessageDetailComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile_profile_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_module_main_module_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_message_module_message_module_component__ = __webpack_require__(61);
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
        template: __webpack_require__(181),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], FootbarComponent);

//# sourceMappingURL=footbar.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(77);
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



// const DEFAULT_MESSAGE: Message = Object.freeze({
//   id: 0,
//   title: "",
//   text: "",
//   sendTime: "",
//   tag: "",
//   createdById: "",
//   status: 0,
//   parentId: 0
// });
var MessageDetailComponent = (function () {
    function MessageDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    MessageDetailComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageDetailComponent.prototype.getMessages = function () {
        var _this = this;
        this.subscriptionMessages = this.data.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; });
    };
    MessageDetailComponent.prototype.replyMessage = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            if (message.id == this.data.selectedId) {
                this.data.isReply = true;
                this.data.replyTitle = "Re: " + message.title;
                this.data.replyUser = message.createdById;
                this.data.replyText = "\n----------------------\n"
                    + "The following message was sent by: " + message.createdById + "\n"
                    + "At: " + message.sendTime + "\n"
                    + "Content: \n" + message.text;
            }
        }
    };
    MessageDetailComponent.prototype.markMsg = function () {
        this.data.starMsg();
    };
    MessageDetailComponent.prototype.deleteMsg = function () {
        this.data.deleteMsg();
    };
    return MessageDetailComponent;
}());
MessageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-message-detail',
        template: __webpack_require__(183),
        styles: [__webpack_require__(169)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])("data")),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, Object])
], MessageDetailComponent);

var _a;
//# sourceMappingURL=message-detail.component.js.map

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
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var msg = _a[_i];
            if (msg.id == id)
                this.data.message = msg;
        }
        this.data.readMsg();
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
        template: __webpack_require__(184),
        styles: [__webpack_require__(170)]
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
    NavbarComponent.prototype.getMessage = function (id) {
        this.data.selectedId = id;
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var msg = _a[_i];
            if (msg.id == id)
                this.data.message = msg;
        }
        this.data.readMsg();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(186),
        styles: [__webpack_require__(172)]
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var SAMPLE_NEWMESSAGE = {
    "title": "",
    "recId": [],
    "text": "",
    "parentId": "",
    "tag": ""
};
var NewMessageComponent = (function () {
    function NewMessageComponent(data) {
        this.data = data;
        this.newmsg = SAMPLE_NEWMESSAGE;
        this.sendSuccess = false;
        this.userGroup = "";
        this.choseOption = "";
        this.title = "";
        this.options = [];
    }
    NewMessageComponent.prototype.ngOnInit = function () {
        this.setOptions();
        this.setReply();
    };
    NewMessageComponent.prototype.setReply = function () {
        if (this.data.replyTitle != "" && this.data.isReply == true) {
            this.newmsg.title = this.data.replyTitle;
            this.setReplyTo();
            this.newmsg.text = this.data.replyText;
            this.setOptions();
            this.data.isReply = false;
        }
        // if(this.data.replyTitle==""){
        //   this.newmsg.title = "";
        //   this.newmsg.recId = [];
        //   this.newmsg.text = "";
        //   this.setOptions();
        // }
        return true;
    };
    NewMessageComponent.prototype.setReplyTo = function () {
        // Deal with 2 types of user: student and admin
        if (this.data.isAdmin() == false) {
            var contacts = this.data.userProfile.userGroupContacts;
            for (var i = 0; i < contacts.length; i++) {
                // look for the entry with a matching `contacts` value
                if (contacts[i].email == this.data.replyUser) {
                    this.choseOption = contacts[i].name;
                }
            }
        }
        else {
            this.choseOption = this.data.replyUser;
        }
    };
    NewMessageComponent.prototype.setOptions = function () {
        if (this.data.authenticated()) {
            if (this.data.isAdmin()) {
                var group = [this.data.userProfile.adminGroup];
                this.options = group.concat(this.data.userProfile.adminGroupMembers);
                console.log(this.options);
            }
            else
                this.options = this.data.userProfile.userGroup;
        }
    };
    NewMessageComponent.prototype.sendMessage = function () {
        this.newmsg.parentId = "";
        this.newmsg.tag = this.choseOption;
        if (this.data.isAdmin()) {
            if (this.choseOption == this.data.userProfile.adminGroup)
                this.newmsg.recId = this.data.userProfile.adminGroupMembers;
            else
                this.newmsg.recId = [this.choseOption];
        }
        else {
            var contacts = this.data.userProfile.userGroupContacts;
            for (var i = 0; i < contacts.length; i++) {
                // look for the entry with a matching `contacts` value
                if (contacts[i].name == this.choseOption) {
                    this.newmsg.recId = [contacts[i].email];
                }
            }
        }
        this.data.sendMessage(this.newmsg);
    };
    return NewMessageComponent;
}());
NewMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new-message',
        template: __webpack_require__(187),
        styles: [__webpack_require__(173)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], NewMessageComponent);

//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(77);
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




var DEFAULT_PROFILE = {
    "admin": "",
    "adminGroup": "",
    "adminGroupMembers": [],
    "userGroup": [],
    "userGroupContacts": []
};
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.userProfile = DEFAULT_PROFILE;
        this.selectedId = 0;
        this.selectedTag = "";
        this.selectedStatus = 1;
        this.replyTitle = "";
        this.replyUser = "";
        this.replyText = "";
        this.isReply = false;
        this.messagesSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.username = localStorage.getItem('username');
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
    DataService.prototype.login = function (loginPair) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/auth/login', loginPair, headers)
            .toPromise()
            .then(function (res) {
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
    DataService.prototype.isAdmin = function () {
        if (this.authenticated() == true)
            return this.userProfile.admin == "1";
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
    DataService.prototype.sendMessage = function (message) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post("messages/userId/" + this.username, message, headers)
            .toPromise()
            .then(function (res) {
            _this.getMessages();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.readMsg = function () {
        var _this = this;
        if (this.message.status == 1) {
            var content = {
                "change": 0 // Message read
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
            return this.http.put("messages/userId/" + this.username + "/messageId/" + this.selectedId, content, headers)
                .toPromise()
                .then(function (res) {
                _this.getMessages();
                return res;
            })
                .catch(this.handleError);
        }
    };
    DataService.prototype.starMsg = function () {
        var _this = this;
        if (this.message.status != 4) {
            var content = {
                "change": 1 //mark star
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
            return this.http.put("messages/userId/" + this.username + "/messageId/" + this.selectedId, content, headers)
                .toPromise()
                .then(function (res) {
                _this.getMessages();
                return res;
            })
                .catch(this.handleError);
        }
        if (this.message.status == 4) {
            var content = {
                "change": 0 //unmark star
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'content-type': 'application/json' });
            return this.http.put("messages/userId/" + this.username + "/messageId/" + this.selectedId, content, headers)
                .toPromise()
                .then(function (res) {
                _this.getMessages();
                return res;
            })
                .catch(this.handleError);
        }
    };
    DataService.prototype.deleteMsg = function () {
        var _this = this;
        return this.http.delete("messages/userId/" + this.username + "/messageId/" + this.selectedId)
            .toPromise()
            .then(function (res) {
            _this.getMessages();
            return res;
        })
            .catch(this.handleError);
    };
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

/***/ 111:
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 35vh;\n  resize: none;\n}\n\n.output-session {\n  padding: 5px 10px 10px 10px;\n  overflow: auto;\n  height: 55vh;\n}\n\n.keywordInput{\n  margin-top: 25px;\n  margin-bottom: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 45vh;\n  resize: none;\n}\n.main_container{\n  margin-top: 50px;\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n.div-margin-title{\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.no-border {\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */\n}\n\n.font-grey{\n  font-size: 15px;\n  color: darkslategrey;\n}\n\n.titlebutton{\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main_container{\n  /*margin-top: 80px;*/\n  /*display: block;*/\n  /*height: auto;*/\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  /*transition: border-color;*/\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.yellow{\n  color: yellowgreen;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sidebarList{\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.btn{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".navbar-custom {\n  background-color:#656d74;\n  border-radius:0;\n}\n\n.navbar-nav > li > a {\n  padding-top:30px !important;\n  font-size: 15px !important;\n}\n\n.navbar-form {\n  padding-top: 16px !important;\n  color: white;\n}\n\n.navbar {\n  min-height: 80px !important\n}\n\n.navbar .nav .open>.dropdown-toggle, .navbar .nav .active>.dropdown-toggle, .navbar .nav .open.active>.dropdown-toggle {\n  background-color: transparent;\n}\n\n.output-session {\n  padding: 5px 10px 10px 10px;\n  overflow: auto;\n  max-height: 20vh;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  min-width: 400px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 1px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n\n.logo-bittiger {\n  height: 32px;\n  margin-top: 10px;\n}\n\n/*.inline{*/\n  /*display: inline-block;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".input-session  {\n  border: 1px solid rgba(0, 0, 0, .15);\n  overflow-y: auto;\n  height: 45vh;\n  resize: none;\n}\n\n\n.main_container{\n  margin-top: 68px;\n  display: block;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color;\n}\n\n.div-margin{\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.no-border {\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footbar></app-footbar>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          {{project}} by {{author}} {{year}}\n        </div>\n      </div>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of messages\">\n  <div class=\"container-fluid main_container\" *ngIf=\"message.id==this.data.selectedId\">\n    <div>\n      <form>\n        <div class=\"row col-md-12\">\n          <!--<div class=\"alert alert-success\" *ngIf=\"sendSuccess\">-->\n            <!--<strong>Success!</strong>-->\n          <!--</div>-->\n          <div class=\"form-group\">\n            <div class = \"col-sm-12 col-md-12 div-margin-title no-border\">\n              <!--<label for=\"title\">Subject</label>-->\n              <div class=\"col-sm-10\">\n                <h3>{{message.title}}</h3>\n              </div>\n              <div class=\"col-xs-1 form-inline titlebutton\">\n                <a type=\"button\" data-toggle=\"pill\" href=\"#inbox\" (click)=\"markMsg()\">\n                  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\n                </a>\n              </div>\n              <div class=\"col-xs-1 form-inline titlebutton\">\n                <a type=\"button\" data-toggle=\"pill\" href=\"#inbox\" (click)=\"deleteMsg()\">\n                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                </a>\n              </div>\n            </div>\n            <div class = \"col-sm-8 col-md-8 form-inline font-grey \">\n              <label>{{message.createdById}} {{message.sendTime}} <span class=\"label label-info\">{{message.tag}}</span></label>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 pull-right\">\n              <div class=\"col-xs-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-success btn-block\" data-toggle=\"pill\" href=\"#newmsg\" (click)=\"replyMessage()\"> Reply </a>\n              </div>\n              <div class=\"col-xs-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-danger btn-block\" data-toggle=\"pill\" href=\"#inbox\">Back</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class = \"col-md-12 div-margin\">\n            <p>{{message.text}}</p>\n        </div>\n        <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"searchKeyword()\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Search</button>-->\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"list-group div-margin main_container\" >\n    <ng-container *ngFor=\"let msg of messages\">\n      <a class=\"list-group-item\" *ngIf=\"(msg.tag==this.data.selectedTag||this.data.selectedTag=='')&&(msg.status==this.data.selectedStatus||(this.data.selectedStatus==1&&msg.status!=3))\"  data-toggle=\"pill\" href=\"#detail\" (click)=\"getMessage(msg.id)\">\n        <h4 class=\"list-group-item-heading\">{{msg.title}}\n          <span class=\"label label-info\"*ngIf=\"msg.tag!=''\">{{msg.tag}}</span>\n          <span class=\"label label-default\" *ngIf=\"msg.status==1\">New</span>\n          <span class=\"glyphicon glyphicon-star yellow\" aria-hidden=\"true\" *ngIf=\"msg.status==4\"></span>\n        </h4>\n        <p class=\"list-group-item-text\">{{msg.createdById}} {{msg.sendTime}} </p>\n        <p class=\"list-group-item-text\">{{msg.text}}</p>\n      </a>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class =\"container-fluid\">\n  <div class=\"col-sm-3\">\n    <div>\n      <div class=\"text-center\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> {{this.data.username}}</div>\n    </div>\n\n    <div>\n      <form class=\"nav navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success btn-block\" data-toggle=\"tab\" href=\"#newmsg\" (click)=\"newmsg()\">New Message</button>\n      </form>\n    </div>\n\n    <div class=\"sidebarList\">\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#inbox\" (click)=\"showTag('')\">Inbox <span class=\"badge\" *ngIf=\"unreadNumber!=0\">{{unreadNumber}}</span></a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#inbox\" (click)=\"showStar()\">Starred</a></li>\n        <li role=\"presentation\"><a data-toggle=\"pill\" href=\"#inbox\" (click)=\"showDelete()\">Deleted</a></li>\n        <hr>\n        <li role=\"presentation\" *ngFor=\"let tag of tags\">\n          <a data-toggle=\"pill\" href=\"#inbox\" (click)=\"showTag(tag)\">{{tag}}</a></li>\n        </ul>\n    </div>\n  </div>\n\n  <div class=\"col-sm-9 tab-content\">\n    <div id=\"newmsg\" class=\"tab-pane fade\">\n      <app-new-message></app-new-message>\n    </div>\n    <div id=\"inbox\" class=\"tab-pane fade in active\">\n      <app-message-list></app-message-list>\n    </div>\n    <div id=\"detail\" class=\"tab-pane fade\">\n      <app-message-detail></app-message-detail>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-custom\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header navbar-custom\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"logo-bittiger img-responsive\" alt=\"Brand\" src=\"//cdn-i2.tianmaying.com/public/homeV1/logo-tpye@3x.png\">\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse \" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isAuthenticated()\">\n          <form class=\"navbar-form\">\n            <label for=\"email\">E-mail</label>\n            <input required name=\"email\" id=\"email\" type=\"text\"\n                   class=\"form-control\" placeholder=\"Enter your email here...\"\n                   [(ngModel)]=\"loginPairs.email\">\n            <label for=\"password\">Password</label>\n            <input\n              required name=\"password\" id=\"password\" type=\"password\"\n              class=\"form-control\" placeholder=\"Enter your password here...\"\n              [(ngModel)]=\"loginPairs.password\">\n            <button\n              type=\"submit\" class=\"btn btn-default\"\n              (click)=\"login()\"> Log In </button>\n          </form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <span style=\"font-size: 20px\" class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span> <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <div class=\"list-group div-margin-nav output-session\" *ngIf=\"messages\">\n                <div *ngFor=\"let msg of messages\">\n                  <ng-container *ngIf=\"msg.status!=3\">\n                    <a class=\"list-group-item\" routerLink=\"/messages\" href=\"#detail\" (click)=\"getMessage(msg.id)\">{{msg.title}}</a>\n                  </ng-container>\n                </div>\n              </div>\n              <a routerLink=\"/messages\">All Messages</a>\n              <!--<li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>-->\n            </li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\" *ngIf=\"isAuthenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"username\">{{username}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <!--<li><a routerLink=\"/profile\">My Profile</a></li>-->\n            <li><a href=\"#\" (click)=\"logout()\">Log Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main_container\">\n  <div>\n    <form #formRef=\"ngForm\" *ngIf=\"setReply()\">\n      <div class=\"row col-md-12\">\n        <div class=\"alert alert-success\" *ngIf=\"sendSuccess\">\n            <strong>Success!</strong>\n        </div>\n        <div class=\"form-group\">\n          <div class = \"col-sm-12 col-md-12 div-margin\">\n            <input type=\"text\" class=\"form-control no-border\" id=\"title\" required\n                   name=\"title\" placeholder=\"Subject...\" [(ngModel)]=\"newmsg.title\">\n          </div>\n          <div class = \"col-sm-4 col-md-4 form-inline\">\n            <label for=\"option\">To: </label>\n            <select class=\"form-control\" id=\"option\" required\n                    name=\"options\" [(ngModel)]=\"choseOption\" [value]=\"options\">\n              <option *ngFor=\"let opt of options\">\n                {{opt}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 pull-right\">\n            <div class=\"col-sm-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-success btn-block\" data-toggle=\"pill\" (click)=\"sendMessage()\"  href=\"#inbox\"> Send </a>\n            </div>\n            <div class=\"col-sm-6 form-inline\">\n                <a type=\"button\" class=\"btn btn-danger btn-block\" data-toggle=\"pill\" href=\"#inbox\">Cancel</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--<button type=\"submit\" class=\"btn btn-default\" (click)=\"searchKeyword()\"> <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span> Search</button>-->\n     <div class = \"col-md-12 div-margin\">\n      <textarea class=\"form-control input-session\" id=\"input-session\" required\n                name=\"input-session\" placeholder=\"Input Message Here...\" [(ngModel)]=\"newmsg.text\"></textarea>\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#other\">Options</a></li>\n  </ul>\n  <br>\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class=\"form-group col-sm-8\">\n        <label for=\"username\">AccountID</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               name=\"username\" disabled value=\"{{username}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"nickname\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"nickname\"\n               name=\"nickname\" disabled value=\"{{nickname}}\">\n      </div>\n      <div class=\"form-group col-sm-8\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n               name=\"email\" disabled value=\"{{email}}\">\n      </div>\n    </div>\n    <div id=\"other\" class=\"tab-pane fade\">\n      <form class=\"navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" routerLink=\"/home\" (click)=\"logout()\">Log Out {{email}}</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

var MainModuleComponent = (function () {
    function MainModuleComponent() {
    }
    MainModuleComponent.prototype.ngOnInit = function () { };
    return MainModuleComponent;
}());
MainModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-main-module',
        inputs: ['changeTrigger'],
        template: __webpack_require__(182),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], MainModuleComponent);

//# sourceMappingURL=main-module.component.js.map

/***/ }),

/***/ 61:
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
        this.tags = [];
        this.unreadNumber = 0;
    }
    MessageModuleComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageModuleComponent.prototype.getMessages = function () {
        var _this = this;
        this.subscriptionMessages = this.data.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.getListInfo();
        });
    };
    //Get number of unread msg and list of tags.
    MessageModuleComponent.prototype.getListInfo = function () {
        var count = 0;
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            if (message.status != 3)
                this.tags.push(message.tag.toString());
            if (message.status == 1)
                count++;
        }
        this.tags = this.remove_duplicates(this.tags);
        this.unreadNumber = count;
    };
    MessageModuleComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        arr = [];
        for (var key in obj) {
            arr.push(key);
        }
        return arr;
    };
    MessageModuleComponent.prototype.showTag = function (tag) {
        this.data.selectedTag = tag;
        this.data.selectedStatus = 1;
    };
    MessageModuleComponent.prototype.showStar = function () {
        this.data.selectedStatus = 4; //stared
    };
    MessageModuleComponent.prototype.showDelete = function () {
        this.data.selectedStatus = 3; //deleted
    };
    MessageModuleComponent.prototype.newmsg = function () {
        this.data.replyTitle = "";
        this.data.replyUser = [];
        this.data.replyText = "";
    };
    return MessageModuleComponent;
}());
MessageModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-message-module',
        template: __webpack_require__(185),
        styles: [__webpack_require__(171)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])('data')),
    __metadata("design:paramtypes", [Object])
], MessageModuleComponent);

//# sourceMappingURL=message-module.component.js.map

/***/ }),

/***/ 62:
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
        template: __webpack_require__(188),
        styles: [__webpack_require__(174)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map
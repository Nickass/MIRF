/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = "bae3687b49f757098098";
/******/
/******/ 	// __webpack_chunkname__
/******/ 	__webpack_require__.cn = "main";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/Footer/assets/styles.scss":
/*!***************************************!*\
  !*** ./App/Footer/assets/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/Footer/index.tsx":
/*!******************************!*\
  !*** ./App/Footer/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/Footer/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules


// custom
// assets

;
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'Footer') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Created by Nikolay Nazarishin. 2019")));
    };
    return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Footer);


/***/ }),

/***/ "./App/Header/assets/styles.scss":
/*!***************************************!*\
  !*** ./App/Header/assets/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/Header/index.tsx":
/*!******************************!*\
  !*** ./App/Header/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/Header/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules



// system

// custom
// assets

var nav = [
    {
        to: system_book__WEBPACK_IMPORTED_MODULE_3__["default"].home.root(),
        name: 'Home',
    },
    {
        to: system_book__WEBPACK_IMPORTED_MODULE_3__["default"].words.root(''),
        name: 'Words'
    },
    {
        to: system_book__WEBPACK_IMPORTED_MODULE_3__["default"].settings.root(),
        name: 'Settings'
    }
];
;
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'Header') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Hi! Welcome to english cards!"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "Header__nav" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "Header__nav-list" }, nav.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "Header__nav-item", key: item.name },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { className: "Header__nav-link", activeClassName: "Header__nav-link--active", to: item.to, exact: true }, item.name))); })))));
    };
    return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./App/assets/styles.scss":
/*!********************************!*\
  !*** ./App/assets/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/constants.tsx":
/*!***************************!*\
  !*** ./App/constants.tsx ***!
  \***************************/
/*! exports provided: APP_INITED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_INITED", function() { return APP_INITED; });
var APP_INITED = 'APP_INITED';


/***/ }),

/***/ "./App/index.tsx":
/*!***********************!*\
  !*** ./App/index.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./App/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./App/Footer/index.tsx");
/* harmony import */ var _pages_Words__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Words */ "./App/pages/Words/index.tsx");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./App/pages/Settings/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules


// system

// custom




// assets

;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "App__header" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].words.root(''), component: _pages_Words__WEBPACK_IMPORTED_MODULE_8__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].settings.root(), component: _pages_Settings__WEBPACK_IMPORTED_MODULE_6__["default"] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "App__footer" })));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./App/pages/Settings/assets/styles.scss":
/*!***********************************************!*\
  !*** ./App/pages/Settings/assets/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/pages/Settings/constants.tsx":
/*!******************************************!*\
  !*** ./App/pages/Settings/constants.tsx ***!
  \******************************************/
/*! exports provided: SETTINGS_REQUEST, SETTINGS_UPDATE, SETTINGS_SUCCESS, SETTINGS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_REQUEST", function() { return SETTINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_UPDATE", function() { return SETTINGS_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_SUCCESS", function() { return SETTINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_FAILURE", function() { return SETTINGS_FAILURE; });
var SETTINGS_REQUEST = 'SETTINGS_REQUEST';
var SETTINGS_UPDATE = 'SETTINGS_UPDATE';
var SETTINGS_SUCCESS = 'SETTINGS_SUCCESS';
var SETTINGS_FAILURE = 'SETTINGS_FAILURE';


/***/ }),

/***/ "./App/pages/Settings/index.tsx":
/*!**************************************!*\
  !*** ./App/pages/Settings/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/pages/Settings/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules

// custom
// assets

;
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "Settings" }));
    };
    return Settings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ }),

/***/ "./App/pages/Settings/reducer.tsx":
/*!****************************************!*\
  !*** ./App/pages/Settings/reducer.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./App/pages/Settings/state.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./App/pages/Settings/constants.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// custom


var reducer = function (state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    switch (action.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_REQUEST"]: {
            return __assign({}, state, { loading: true });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_SUCCESS"]: {
            return __assign({}, state, { loading: false, settings: action.payload });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_UPDATE"]: {
            return __assign({}, state, { loading: true });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./App/pages/Settings/selectors.tsx":
/*!******************************************!*\
  !*** ./App/pages/Settings/selectors.tsx ***!
  \******************************************/
/*! exports provided: settingsSelector, selectWordsPerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSelector", function() { return settingsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWordsPerPage", function() { return selectWordsPerPage; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var settingsSelector = function (state) { return state.settings; };
var selectWordsPerPage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(settingsSelector, function (settings) { return settings.wordsPerPage; });


/***/ }),

/***/ "./App/pages/Settings/state.tsx":
/*!**************************************!*\
  !*** ./App/pages/Settings/state.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
var initialState = {
    wordsPerPage: 10,
};
/* harmony default export */ __webpack_exports__["default"] = (initialState);


/***/ }),

/***/ "./App/pages/Translator/constants.tsx":
/*!********************************************!*\
  !*** ./App/pages/Translator/constants.tsx ***!
  \********************************************/
/*! exports provided: WORDS_REQUEST, WORDS_SUCCESS, WORDS_FAILURE, INFO_WORDS_REQUEST, INFO_WORDS_SUCCESS, INFO_WORDS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_REQUEST", function() { return WORDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_SUCCESS", function() { return WORDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_FAILURE", function() { return WORDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_REQUEST", function() { return INFO_WORDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_SUCCESS", function() { return INFO_WORDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_FAILURE", function() { return INFO_WORDS_FAILURE; });
var WORDS_REQUEST = 'WORDS_REQUEST';
var WORDS_SUCCESS = 'WORDS_SUCCESS';
var WORDS_FAILURE = 'WORDS_FAILURE';
var INFO_WORDS_REQUEST = 'INFO_WORDS_REQUEST';
var INFO_WORDS_SUCCESS = 'INFO_WORDS_SUCCESS';
var INFO_WORDS_FAILURE = 'INFO_WORDS_FAILURE';


/***/ }),

/***/ "./App/pages/Translator/reducer.tsx":
/*!******************************************!*\
  !*** ./App/pages/Translator/reducer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./App/pages/Translator/state.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./App/pages/Translator/constants.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// custom


var reducer = function (state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    switch (action.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_REQUEST"]: {
            return __assign({}, state, { loading: true });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_SUCCESS"]: {
            return __assign({}, state, { loading: false, words: action.payload });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_REQUEST"]: {
            return __assign({}, state, { loading: true });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_SUCCESS"]: {
            return __assign({}, state, { loading: false, countWords: action.payload.countWords });
        }
        case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./App/pages/Translator/state.tsx":
/*!****************************************!*\
  !*** ./App/pages/Translator/state.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
var translatorState = {
    words: [
        {
            en: 'nothinga',
            ru: 'ничего'
        }
    ],
    countWords: 0,
};
/* harmony default export */ __webpack_exports__["default"] = (translatorState);


/***/ }),

/***/ "./App/pages/Words/actions.tsx":
/*!*************************************!*\
  !*** ./App/pages/Words/actions.tsx ***!
  \*************************************/
/*! exports provided: getWords, receiveWords, failWords, getInfo, receiveInfo, failInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWords", function() { return getWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveWords", function() { return receiveWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failWords", function() { return failWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveInfo", function() { return receiveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failInfo", function() { return failInfo; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./App/pages/Words/constants.tsx");

var getWords = function () {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["WORDS_REQUEST"]
    };
};
var receiveWords = function (words) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["WORDS_SUCCESS"],
        payload: words
    };
};
var failWords = function (err) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["WORDS_FAILURE"],
        payload: err
    };
};
var getInfo = function () {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["INFO_WORDS_REQUEST"]
    };
};
var receiveInfo = function (info) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["INFO_WORDS_SUCCESS"],
        payload: info
    };
};
var failInfo = function (err) {
    return {
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["INFO_WORDS_FAILURE"],
        payload: err
    };
};


/***/ }),

/***/ "./App/pages/Words/assets/styles.scss":
/*!********************************************!*\
  !*** ./App/pages/Words/assets/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/pages/Words/constants.tsx":
/*!***************************************!*\
  !*** ./App/pages/Words/constants.tsx ***!
  \***************************************/
/*! exports provided: WORDS_REQUEST, WORDS_SUCCESS, WORDS_FAILURE, INFO_WORDS_REQUEST, INFO_WORDS_SUCCESS, INFO_WORDS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_REQUEST", function() { return WORDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_SUCCESS", function() { return WORDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDS_FAILURE", function() { return WORDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_REQUEST", function() { return INFO_WORDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_SUCCESS", function() { return INFO_WORDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_WORDS_FAILURE", function() { return INFO_WORDS_FAILURE; });
var WORDS_REQUEST = 'WORDS_REQUEST';
var WORDS_SUCCESS = 'WORDS_SUCCESS';
var WORDS_FAILURE = 'WORDS_FAILURE';
var INFO_WORDS_REQUEST = 'INFO_WORDS_REQUEST';
var INFO_WORDS_SUCCESS = 'INFO_WORDS_SUCCESS';
var INFO_WORDS_FAILURE = 'INFO_WORDS_FAILURE';


/***/ }),

/***/ "./App/pages/Words/index.tsx":
/*!***********************************!*\
  !*** ./App/pages/Words/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ "./App/pages/Words/saga.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./App/pages/Words/selectors.tsx");
/* harmony import */ var App_pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/pages/Settings/selectors */ "./App/pages/Settings/selectors.tsx");
/* harmony import */ var App_widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/widgets/Pagination */ "./App/widgets/Pagination/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/pages/Words/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules



// import { Link } from 'react-router-dom';

// custom




// assets


;
var Words = /** @class */ (function (_super) {
    __extends(Words, _super);
    function Words() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Words.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, wordsPerPage = _a.wordsPerPage, id = _a.match.params.id;
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchInfo"])(dispatch);
    };
    Words.prototype.componentDidUpdate = function (prevProps) {
        var dispatch = prevProps.dispatch, wordsPerPage = prevProps.wordsPerPage, id = prevProps.match.params.id;
        if (id !== this.props.match.params.id) {
            Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        }
    };
    Words.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.words, words = _b === void 0 ? [] : _b, countWords = _a.countWords;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3__(className, 'Words') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "Words__title" }, "Words player"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "Words__table" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "EN"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "RU"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Know"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, words.map(function (_a, i) {
                    var en = _a.en, ru = _a.ru;
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: en + ru + i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, en),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, ru),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox" }))));
                }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App_widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "Words__pagination", count: countWords, path: system_book__WEBPACK_IMPORTED_MODULE_9__["default"].words.root('') })));
    };
    return Words;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({
    words: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectWords"],
    wordsPerPage: App_pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__["selectWordsPerPage"],
    countWords: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectCountWords"],
}))(Words));


/***/ }),

/***/ "./App/pages/Words/saga.tsx":
/*!**********************************!*\
  !*** ./App/pages/Words/saga.tsx ***!
  \**********************************/
/*! exports provided: fetchWords, fetchInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWords", function() { return fetchWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInfo", function() { return fetchInfo; });
/* harmony import */ var model_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model/words */ "./model/words/index.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./App/pages/Words/actions.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;


var fetchWords = function (dispatch, limit, offset) { return __awaiter(_this, void 0, void 0, function () {
    var translates, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getWords"])());
                return [4 /*yield*/, model_words__WEBPACK_IMPORTED_MODULE_0__["getTranslates"](limit, offset)];
            case 1:
                translates = _a.sent();
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["receiveWords"])(translates));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["failWords"])(e_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var fetchInfo = function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
    var data, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getInfo"])());
                return [4 /*yield*/, model_words__WEBPACK_IMPORTED_MODULE_0__["getInfo"]()];
            case 1:
                data = _a.sent();
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["receiveInfo"])(data));
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["failInfo"])(e_2));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./App/pages/Words/selectors.tsx":
/*!***************************************!*\
  !*** ./App/pages/Words/selectors.tsx ***!
  \***************************************/
/*! exports provided: wordsSelector, selectWords, selectCountWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordsSelector", function() { return wordsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWords", function() { return selectWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountWords", function() { return selectCountWords; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var wordsSelector = function (state) { return state.translator; };
var selectWords = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(wordsSelector, function (translator) { return translator.words; });
var selectCountWords = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(wordsSelector, function (translator) { return translator.countWords; });


/***/ }),

/***/ "./App/reducer.tsx":
/*!*************************!*\
  !*** ./App/reducer.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./App/state.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./App/constants.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var reducer = function (state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_0__["default"]; }
    switch (action.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__["APP_INITED"]: {
            return __assign({}, state, { inited: action.payload });
        }
    }
    return state;
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./App/state.tsx":
/*!***********************!*\
  !*** ./App/state.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var appState = {
    appInited: true
};
/* harmony default export */ __webpack_exports__["default"] = (appState);


/***/ }),

/***/ "./App/widgets/Pagination/assets/styles.scss":
/*!***************************************************!*\
  !*** ./App/widgets/Pagination/assets/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./App/widgets/Pagination/index.tsx":
/*!******************************************!*\
  !*** ./App/widgets/Pagination/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/widgets/Pagination/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modules



// assets

;
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, className = _a.className, path = _a.path, count = _a.count;
        count = count > 10 ? 10 : count;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "Pagination" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, 'Pagination__list') }, (new Array(count)).fill('').map(function (v, num) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "Pagination__item", key: (num + 1) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "Pagination__link", activeClassName: "Pagination__link--active", to: path + (num + 1), exact: true }, (num + 1)))); }))));
    };
    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Pagination);


/***/ }),

/***/ "./assets/atomic.scss":
/*!****************************!*\
  !*** ./assets/atomic.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/base.scss":
/*!**************************!*\
  !*** ./assets/base.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./client.tsx":
/*!********************!*\
  !*** ./client.tsx ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ "react-hot-loader");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store */ "./store/index.tsx");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalize.css/normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/base */ "./assets/base.scss");
/* harmony import */ var assets_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App */ "./App/index.tsx");
/* harmony import */ var assets_atomic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/atomic */ "./assets/atomic.scss");
/* harmony import */ var assets_atomic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_atomic__WEBPACK_IMPORTED_MODULE_9__);
// modules






// assets


// custom

// assets

var _a = Object(store__WEBPACK_IMPORTED_MODULE_5__["default"])(), store = _a[0], history = _a[1];
function main(Root) {
    if (Root === void 0) { Root = App__WEBPACK_IMPORTED_MODULE_8__["default"]; }
    var root = document.getElementById('app-root');
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: store },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](connected_react_router__WEBPACK_IMPORTED_MODULE_4__["ConnectedRouter"], { history: history },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, null)))), root);
}
if (!store__WEBPACK_IMPORTED_MODULE_5__["isServer"]) {
    if (false) {}
    main(App__WEBPACK_IMPORTED_MODULE_8__["default"]);
}
/* harmony default export */ __webpack_exports__["default"] = ({ App: App__WEBPACK_IMPORTED_MODULE_8__["default"], configureStore: store__WEBPACK_IMPORTED_MODULE_5__["default"] });


/***/ }),

/***/ "./model/words/index.tsx":
/*!*******************************!*\
  !*** ./model/words/index.tsx ***!
  \*******************************/
/*! exports provided: getTranslates, getInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslates", function() { return getTranslates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var getTranslates = function (limit, offset) {
    if (limit === void 0) { limit = 15; }
    if (offset === void 0) { offset = 0; }
    return __awaiter(_this, void 0, void 0, function () {
        var res, text, words, partOfWords, translates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/en.txt')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    text = _a.sent();
                    words = text.split('\n').map(function (pair) { return pair.split(' ')[0]; });
                    partOfWords = words.slice(offset, offset + limit);
                    translates = partOfWords.map(function (word) { return ({ en: word, ru: '' }); });
                    return [2 /*return*/, translates];
            }
        });
    });
};
var getInfo = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, text, words;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('/en.txt')];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.text()];
            case 2:
                text = _a.sent();
                words = text.split('\n').map(function (pair) { return pair.split(' ')[0]; });
                return [2 /*return*/, {
                        countWords: words.length
                    }];
        }
    });
}); };


/***/ }),

/***/ "./server.tsx":
/*!********************!*\
  !*** ./server.tsx ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client */ "./client.tsx");







 // will changed to require('./static/client.js') in prod
var clientName, assetUrl;
if (true) {
    assetUrl = "http://" + "localhost" + ":" + "9876" + "/";
    clientName = "client.js";
}
else {}
var Server = express__WEBPACK_IMPORTED_MODULE_0__();
var ReactApp = client__WEBPACK_IMPORTED_MODULE_7__["default"].App;
var store = client__WEBPACK_IMPORTED_MODULE_7__["default"].configureStore()[0];
Server.use("/static", express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/static/")));
Server.use("/static/" + clientName, express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/static/client.js")));
Server.post("/UPDATE_STORE", body_parser__WEBPACK_IMPORTED_MODULE_4__["json"](), function (req, res) {
    store = client__WEBPACK_IMPORTED_MODULE_7__["default"].configureStore(req.body.REDUX_STATE)[0]; // ADD CHECK 
    res.redirect(302, 'back');
});
Server.use(function (req, res) {
    var context = {};
    var serverProvider = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], { store: store },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], { location: req.url, context: context },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReactApp, null))));
    return res.end(renderHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"](serverProvider)));
});
Server.listen("3000", function () { return console.log('Server is runing!'); });
console.log('process.env.PORT', "3000");
function renderHTML(appContent) {
    return "\n  <!DOCTYPE html>\n  <html lang=\"en\"> \n    <head> \n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width\">\n      <title>WHEN I DO LEARN REACT I CRAZZY</title>\n      <script>window.REDUX_STATE = " + JSON.stringify(store.getState()) + "</script>\n    </head>\n    <body>\n      <div id=\"app-root\">" + appContent + "</div>\n      <script type=\"application/javascript\" src=\"" + assetUrl + "static/" + clientName + "\"></script>\n    </body>\n  </html>\n  ";
}


/***/ }),

/***/ "./store/index.tsx":
/*!*************************!*\
  !*** ./store/index.tsx ***!
  \*************************/
/*! exports provided: isServer, defaultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var App_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/state */ "./App/state.tsx");
/* harmony import */ var App_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! App/reducer */ "./App/reducer.tsx");
/* harmony import */ var App_pages_Settings_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/pages/Settings/state */ "./App/pages/Settings/state.tsx");
/* harmony import */ var App_pages_Settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/pages/Settings/reducer */ "./App/pages/Settings/reducer.tsx");
/* harmony import */ var App_pages_Translator_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/pages/Translator/state */ "./App/pages/Translator/state.tsx");
/* harmony import */ var App_pages_Translator_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/pages/Translator/reducer */ "./App/pages/Translator/reducer.tsx");









var isServer = !(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
var defaultState = {
    router: {},
    app: App_state__WEBPACK_IMPORTED_MODULE_3__["default"],
    settings: App_pages_Settings_state__WEBPACK_IMPORTED_MODULE_5__["default"],
    translator: App_pages_Translator_state__WEBPACK_IMPORTED_MODULE_7__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (initialState, url) {
    if (initialState === void 0) { initialState = defaultState; }
    if (url === void 0) { url = '/'; }
    var composeEnhancers = !isServer && "development" === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
    var history = !isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])() : Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])({
        initialEntries: ['/']
    });
    var enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)));
    var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
        router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history),
        app: App_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
        settings: App_pages_Settings_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
        translator: App_pages_Translator_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
    });
    var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, enhancer);
    if (false) {}
    return [store, history];
});


/***/ }),

/***/ "./system/book.tsx":
/*!*************************!*\
  !*** ./system/book.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var book = {
    home: {
        root: function () { return '/'; }
    },
    settings: {
        root: function () { return '/settings'; },
        user: function () { return '/settings/user'; },
        auth: function () { return '/settings/user/auth'; }
    },
    words: {
        root: function (id) {
            if (id === void 0) { id = ':id'; }
            return '/words/' + id;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (book);


/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi server.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! server.tsx */"./server.tsx");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL0FwcC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvU2V0dGluZ3MvcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL3N0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvVHJhbnNsYXRvci9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9wYWdlcy9UcmFuc2xhdG9yL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9wYWdlcy9UcmFuc2xhdG9yL3N0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvV29yZHMvYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1dvcmRzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1dvcmRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvV29yZHMvc2FnYS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1dvcmRzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3dpZGdldHMvUGFnaW5hdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2RlbC93b3Jkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3lzdGVtL2Jvb2sudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob3QtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IFwiYmFlMzY4N2I0OWY3NTcwOTgwOThcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2NodW5rbmFtZV9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNuID0gXCJtYWluXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgY2xhc3NOYW1lPzogYW55O1xufTtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvb3RlclByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ0Zvb3RlcicpfT5cbiAgICAgICAgPHA+Q3JlYXRlZCBieSBOaWtvbGF5IE5hemFyaXNoaW4uIDIwMTk8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgTmF2TGluayBhcyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIHN5c3RlbVxuaW1wb3J0IGJvb2sgZnJvbSAnc3lzdGVtL2Jvb2snO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuY29uc3QgbmF2ID0gW1xuICB7XG4gICAgdG86IGJvb2suaG9tZS5yb290KCksXG4gICAgbmFtZTogJ0hvbWUnLFxuICB9LFxuICB7XG4gICAgdG86IGJvb2sud29yZHMucm9vdCgnJyksXG4gICAgbmFtZTogJ1dvcmRzJ1xuICB9LFxuICB7XG4gICAgdG86IGJvb2suc2V0dGluZ3Mucm9vdCgpLFxuICAgIG5hbWU6ICdTZXR0aW5ncydcbiAgfVxuXVxuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBhbnk7XG59O1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SGVhZGVyUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnSGVhZGVyJyl9PlxuICAgICAgICA8aDE+SGkhIFdlbGNvbWUgdG8gZW5nbGlzaCBjYXJkcyE8L2gxPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIkhlYWRlcl9fbmF2XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkhlYWRlcl9fbmF2LWxpc3RcIj5cbiAgICAgICAgICAgIHtuYXYubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiSGVhZGVyX19uYXYtaXRlbVwiIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSGVhZGVyX19uYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJIZWFkZXJfX25hdi1saW5rLS1hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgdG89e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgICBleGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJleHBvcnQgY29uc3QgQVBQX0lOSVRFRCA9ICdBUFBfSU5JVEVEJzsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIHN5c3RlbVxuaW1wb3J0IGJvb2sgZnJvbSAnc3lzdGVtL2Jvb2snO1xuXG4vLyBjdXN0b21cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgV29yZHMgZnJvbSAnLi9wYWdlcy9Xb3Jkcyc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9wYWdlcy9TZXR0aW5ncyc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJBcHBfX2hlYWRlclwiIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9e2Jvb2suaG9tZS5yb290KCl9IGNvbXBvbmVudD17Um9vdH0gLz4gKi99XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay53b3Jkcy5yb290KCcnKX0gY29tcG9uZW50PXtXb3Jkc30gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtib29rLnNldHRpbmdzLnJvb3QoKX0gY29tcG9uZW50PXtTZXR0aW5nc30gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgey8qIDxXb3JkcyBjbGFzc05hbWU9XCJBcHBfX2NlbnRlclwiIC8+ICovfVxuICAgICAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cIkFwcF9fZm9vdGVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1JFUVVFU1QgPSAnU0VUVElOR1NfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfVVBEQVRFICA9ICdTRVRUSU5HU19VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1NVQ0NFU1MgPSAnU0VUVElOR1NfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfRkFJTFVSRSA9ICdTRVRUSU5HU19GQUlMVVJFJztcbiIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBTZXR0aW5nc1Byb3BzIHtcblxufTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNldHRpbmdzXCI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7IiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gY3VzdG9tXG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XG5pbXBvcnQgeyBTRVRUSU5HU19SRVFVRVNULCBTRVRUSU5HU19VUERBVEUsIFNFVFRJTkdTX1NVQ0NFU1MsIFNFVFRJTkdTX0ZBSUxVUkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8aW5pdGFsU3RhdGUsIGFjdGlvbj47XG5cbmNvbnN0IHJlZHVjZXI6IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUVElOR1NfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgIH1cblxuICAgIGNhc2UgU0VUVElOR1NfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzZXR0aW5nczogYWN0aW9uLnBheWxvYWR9XG4gICAgfVxuXG4gICAgY2FzZSBTRVRUSU5HU19VUERBVEU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICB9XG5cbiAgICBjYXNlIFNFVFRJTkdTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1NlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNldHRpbmdzO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0V29yZHNQZXJQYWdlID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNldHRpbmdzU2VsZWN0b3IsXG4gIHNldHRpbmdzID0+IHNldHRpbmdzLndvcmRzUGVyUGFnZVxuKTsiLCJpbnRlcmZhY2UgaW5pdGlhbFN0YXRlIHtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSA9IHtcbiAgd29yZHNQZXJQYWdlOiAxMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZTsiLCJleHBvcnQgY29uc3QgV09SRFNfUkVRVUVTVCA9ICdXT1JEU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBXT1JEU19TVUNDRVNTID0gJ1dPUkRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFdPUkRTX0ZBSUxVUkUgPSAnV09SRFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBJTkZPX1dPUkRTX1JFUVVFU1QgPSAnSU5GT19XT1JEU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBJTkZPX1dPUkRTX1NVQ0NFU1MgPSAnSU5GT19XT1JEU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBJTkZPX1dPUkRTX0ZBSUxVUkUgPSAnSU5GT19XT1JEU19GQUlMVVJFJzsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7XG4gIFdPUkRTX1JFUVVFU1QsXG4gIFdPUkRTX1NVQ0NFU1MsXG4gIFdPUkRTX0ZBSUxVUkUsXG5cbiAgSU5GT19XT1JEU19SRVFVRVNULFxuICBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gIElORk9fV09SRFNfRkFJTFVSRVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBXT1JEU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cbiAgICB9XG5cbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cblxuICAgIGNhc2UgSU5GT19XT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgY291bnRXb3JkczogYWN0aW9uLnBheWxvYWQuY291bnRXb3Jkc31cbiAgICB9XG5cbiAgICBjYXNlIElORk9fV09SRFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbnRlcmZhY2UgdHJhbnNsYXRvclN0YXRlIHtcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG59O1xuXG5jb25zdCB0cmFuc2xhdG9yU3RhdGU6IHRyYW5zbGF0b3JTdGF0ZSA9IHtcbiAgd29yZHM6IFtcbiAgICB7XG4gICAgICBlbjogJ25vdGhpbmdhJyxcbiAgICAgIHJ1OiAn0L3QuNGH0LXQs9C+J1xuICAgIH1cbiAgXSxcbiAgY291bnRXb3JkczogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0b3JTdGF0ZTsiLCJpbXBvcnQge1xuICBXT1JEU19SRVFVRVNULFxuICBXT1JEU19TVUNDRVNTLFxuICBXT1JEU19GQUlMVVJFLFxuXG4gIElORk9fV09SRFNfUkVRVUVTVCxcbiAgSU5GT19XT1JEU19TVUNDRVNTLFxuICBJTkZPX1dPUkRTX0ZBSUxVUkVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0V29yZHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfUkVRVUVTVFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZVdvcmRzID0gKHdvcmRzOiBBcnJheTx7IGVuOiBzdHJpbmc7IHJ1OiBzdHJpbmc7IH0+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB3b3Jkc1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmFpbFdvcmRzID0gKGVycjogYW55KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSU5GT19XT1JEU19SRVFVRVNUXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlSW5mbyA9IChpbmZvOiB7IGNvdW50V29yZHM6IG51bWJlcjsgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBpbmZvXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmYWlsSW5mbyA9IChlcnI6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBXT1JEU19SRVFVRVNUID0gJ1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFdPUkRTX1NVQ0NFU1MgPSAnV09SRFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgV09SRFNfRkFJTFVSRSA9ICdXT1JEU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfUkVRVUVTVCA9ICdJTkZPX1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfU1VDQ0VTUyA9ICdJTkZPX1dPUkRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfRkFJTFVSRSA9ICdJTkZPX1dPUkRTX0ZBSUxVUkUnOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgKiBhcyBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gY3VzdG9tXG5pbXBvcnQgeyBmZXRjaFdvcmRzLCBmZXRjaEluZm8gfSBmcm9tICcuL3NhZ2EnO1xuaW1wb3J0IHsgc2VsZWN0V29yZHMsIHNlbGVjdENvdW50V29yZHMgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZWxlY3RXb3Jkc1BlclBhZ2UgfSBmcm9tICdBcHAvcGFnZXMvU2V0dGluZ3Mvc2VsZWN0b3JzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0FwcC93aWRnZXRzL1BhZ2luYXRpb24nO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IGJvb2sgZnJvbSAnc3lzdGVtL2Jvb2snO1xuXG5pbnRlcmZhY2UgV29yZHNQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nfT47XG4gIHdvcmRzUGVyUGFnZTogbnVtYmVyO1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG4gIGRpc3BhdGNoOiBhbnk7XG4gIG1hdGNoOiBhbnk7XG59O1xuXG5jbGFzcyBXb3JkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXb3Jkc1Byb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBcbiAgICBmZXRjaFdvcmRzKGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIGlkICogd29yZHNQZXJQYWdlKTtcbiAgICBmZXRjaEluZm8oZGlzcGF0Y2gpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBhbnkpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIG1hdGNoOiB7IHBhcmFtczogeyBpZCB9IH0gfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChpZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIGZldGNoV29yZHMoZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgaWQgKiB3b3Jkc1BlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHdvcmRzID0gW10sIGNvdW50V29yZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdXb3JkcycpfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIldvcmRzX190aXRsZVwiPldvcmRzIHBsYXllcjwvaDI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJXb3Jkc19fdGFibGVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5FTjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5SVTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Lbm93PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh7ZW4sIHJ1fSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtlbiArIHJ1ICsgaX0+XG4gICAgICAgICAgICAgICAgPHRkPntlbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cnV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8UGFnaW5hdGlvbiBjbGFzc05hbWU9XCJXb3Jkc19fcGFnaW5hdGlvblwiIGNvdW50PXtjb3VudFdvcmRzfSBwYXRoPXtib29rLndvcmRzLnJvb3QoJycpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgd29yZHM6IHNlbGVjdFdvcmRzLFxuICB3b3Jkc1BlclBhZ2U6IHNlbGVjdFdvcmRzUGVyUGFnZSxcbiAgY291bnRXb3Jkczogc2VsZWN0Q291bnRXb3Jkcyxcbn0pKShXb3Jkcyk7IiwiaW1wb3J0ICogYXMgYmFja2VuZCBmcm9tICdtb2RlbC93b3Jkcyc7XG5cbmltcG9ydCB7XG4gIGdldFdvcmRzLFxuICByZWNlaXZlV29yZHMsXG4gIGZhaWxXb3JkcyxcbiAgZ2V0SW5mbyxcbiAgcmVjZWl2ZUluZm8sXG4gIGZhaWxJbmZvXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdvcmRzID0gYXN5bmMgKGRpc3BhdGNoOiBhbnksIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gIHRyeSB7XG4gICAgZGlzcGF0Y2goZ2V0V29yZHMoKSk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVzID0gYXdhaXQgYmFja2VuZC5nZXRUcmFuc2xhdGVzKGxpbWl0LCBvZmZzZXQpO1xuXG4gICAgZGlzcGF0Y2gocmVjZWl2ZVdvcmRzKHRyYW5zbGF0ZXMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKGZhaWxXb3JkcyhlKSlcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSW5mbyA9IGFzeW5jIChkaXNwYXRjaDogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgZGlzcGF0Y2goZ2V0SW5mbygpKTtcblxuICAgIGNvbnN0IGRhdGE6IHtcbiAgICAgIGNvdW50V29yZHM6IG51bWJlcjtcbiAgICB9ID0gYXdhaXQgYmFja2VuZC5nZXRJbmZvKCk7XG5cbiAgICBkaXNwYXRjaChyZWNlaXZlSW5mbyhkYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkaXNwYXRjaChmYWlsSW5mbyhlKSlcbiAgfVxufTsiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IHdvcmRzU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGUudHJhbnNsYXRvcjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzID0gY3JlYXRlU2VsZWN0b3IoXG4gIHdvcmRzU2VsZWN0b3IsXG4gIHRyYW5zbGF0b3IgPT4gdHJhbnNsYXRvci53b3Jkc1xuKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdENvdW50V29yZHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgd29yZHNTZWxlY3RvcixcbiAgdHJhbnNsYXRvciA9PiB0cmFuc2xhdG9yLmNvdW50V29yZHNcbik7IiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gY3VzdG9tXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBUFBfSU5JVEVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIHJlZHVjZXIgPSBSZWR1Y2VyPHR5cGVvZiBpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBUFBfSU5JVEVEOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW5pdGVkOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImNvbnN0IGFwcFN0YXRlID0ge1xuICBhcHBJbml0ZWQ6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFN0YXRlOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgYXMgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBQYWdpbmF0aW9uUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn07XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnaW5hdGlvblByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHsgY2xhc3NOYW1lLCBwYXRoLCBjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3VudCA9IGNvdW50ID4gMTAgPyAxMCA6IGNvdW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdQYWdpbmF0aW9uX19saXN0Jyl9PlxuICAgICAgICAgIHsobmV3IEFycmF5KGNvdW50KSkuZmlsbCgnJykubWFwKCh2LCBudW0pID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJQYWdpbmF0aW9uX19pdGVtXCIga2V5PXsobnVtICsgMSl9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlBhZ2luYXRpb25fX2xpbmtcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cIlBhZ2luYXRpb25fX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgdG89e3BhdGggKyAobnVtICsgMSl9XG4gICAgICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KG51bSArIDEpfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlLCB7IGlzU2VydmVyIH0gZnJvbSAnc3RvcmUnO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnYXNzZXRzL2Jhc2UnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuLy8gYXNzZXRzXG5pbXBvcnQgJ2Fzc2V0cy9hdG9taWMnO1xuXG5cbmNvbnN0IFtzdG9yZSwgaGlzdG9yeV0gPSBjb25maWd1cmVTdG9yZSgpO1xuXG5mdW5jdGlvbiBtYWluKFJvb3QgPSBBcHApIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtcm9vdCcpO1xuXG4gIHJlbmRlcihcbiAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICAgICAgPFJvb3QgLz5cbiAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvQXBwQ29udGFpbmVyPixcbiAgICByb290XG4gICk7XG59XG5cbmlmICghaXNTZXJ2ZXIpIHtcbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnQXBwJywgKCkgPT4ge1xuICAgICAgbWFpbihyZXF1aXJlKCdBcHAnKS5kZWZhdWx0KVxuICAgIH0pO1xuICB9XG5cbiAgbWFpbihBcHApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IEFwcCwgY29uZmlndXJlU3RvcmUgfTsiLCJpbXBvcnQgeyBkZWZhdWx0TWVtb2l6ZSB9IGZyb20gJ3Jlc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zbGF0ZXMgPSBhc3luYyAobGltaXQgPSAxNSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2VuLnR4dCcpO1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xuICBjb25zdCBwYXJ0T2ZXb3JkcyA9IHdvcmRzLnNsaWNlKG9mZnNldCwgIG9mZnNldCArIGxpbWl0KTtcbiAgY29uc3QgdHJhbnNsYXRlcyA9IHBhcnRPZldvcmRzLm1hcCh3b3JkID0+ICh7ZW46IHdvcmQsIHJ1OiAnJ30pKTtcblxuICByZXR1cm4gdHJhbnNsYXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IGdldEluZm8gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZW4udHh0Jyk7XG4gIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJ1xcbicpLm1hcChwYWlyID0+IHBhaXIuc3BsaXQoJyAnKVswXSk7XG4gIFxuICByZXR1cm4ge1xuICAgIGNvdW50V29yZHM6IHdvcmRzLmxlbmd0aFxuICB9O1xufSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjbGllbnQgZnJvbSAnY2xpZW50JzsgLy8gd2lsbCBjaGFuZ2VkIHRvIHJlcXVpcmUoJy4vc3RhdGljL2NsaWVudC5qcycpIGluIHByb2RcblxubGV0IGNsaWVudE5hbWU6IHN0cmluZywgYXNzZXRVcmw6IHN0cmluZztcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgYXNzZXRVcmwgPSBgaHR0cDovLyR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9IT1NUfToke3Byb2Nlc3MuZW52LkhNUl9TRVJWRVJfUE9SVH0vYDtcbiAgY2xpZW50TmFtZSA9IGBjbGllbnQuanNgO1xufSBlbHNlIHsgLy8gaWYgcHJvZCB3aWxsIGJlIHJlcXVpcmUgZnJvbSBjbGllbnQgYnVuZGxlXG4gIGFzc2V0VXJsID0gJy8nO1xuICBjbGllbnROYW1lID0gYGNsaWVudC0ke19fd2VicGFja19oYXNoX199LmpzYDtcbn0gXG5cbmNvbnN0IFNlcnZlciA9IGV4cHJlc3MoKTtcbmNvbnN0IFJlYWN0QXBwID0gY2xpZW50LkFwcDtcbmxldCBbc3RvcmVdID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKCk7XG5cblxuU2VydmVyLnVzZShgL3N0YXRpY2AsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIGAvc3RhdGljL2ApKSk7XG5TZXJ2ZXIudXNlKGAvc3RhdGljLyR7Y2xpZW50TmFtZX1gLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBgL3N0YXRpYy9jbGllbnQuanNgKSkpO1xuU2VydmVyLnBvc3QoYC9VUERBVEVfU1RPUkVgLCBib2R5UGFyc2VyLmpzb24oKSwgKHJlcSwgcmVzKSA9PiB7XG4gIFtzdG9yZV0gPSBjbGllbnQuY29uZmlndXJlU3RvcmUocmVxLmJvZHkuUkVEVVhfU1RBVEUpOyAvLyBBREQgQ0hFQ0sgXG4gIHJlcy5yZWRpcmVjdCgzMDIsICdiYWNrJyk7XG59KTtcblNlcnZlci51c2UoZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgbGV0IGNvbnRleHQgPSB7fTtcblxuICBsZXQgc2VydmVyUHJvdmlkZXIgPSAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPFJlYWN0QXBwIC8+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPik7XG5cbiAgcmV0dXJuIHJlcy5lbmQocmVuZGVySFRNTChSZWFjdERvbS5yZW5kZXJUb1N0cmluZyhzZXJ2ZXJQcm92aWRlcikpKTtcbn0pO1xuU2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5TRVJWRVJfUE9SVCwgKCk9PmNvbnNvbGUubG9nKCdTZXJ2ZXIgaXMgcnVuaW5nIScpKTtcblxuY29uc29sZS5sb2coJ3Byb2Nlc3MuZW52LlBPUlQnLCBwcm9jZXNzLmVudi5TRVJWRVJfUE9SVClcbmZ1bmN0aW9uIHJlbmRlckhUTUwoYXBwQ29udGVudDogYW55KSB7XG4gIHJldHVybiBgXG4gIDwhRE9DVFlQRSBodG1sPlxuICA8aHRtbCBsYW5nPVwiZW5cIj4gXG4gICAgPGhlYWQ+IFxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIj5cbiAgICAgIDx0aXRsZT5XSEVOIEkgRE8gTEVBUk4gUkVBQ1QgSSBDUkFaWlk8L3RpdGxlPlxuICAgICAgPHNjcmlwdD53aW5kb3cuUkVEVVhfU1RBVEUgPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpfTwvc2NyaXB0PlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtcm9vdFwiPiR7YXBwQ29udGVudH08L2Rpdj5cbiAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiBzcmM9XCIke2Fzc2V0VXJsfXN0YXRpYy8ke2NsaWVudE5hbWV9XCI+PC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG4gIGA7XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBSZWR1Y2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBhcHBTdGF0ZSBmcm9tICdBcHAvc3RhdGUnO1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnQXBwL3JlZHVjZXInO1xuaW1wb3J0IHNldHRpbmdzU3RhdGUgZnJvbSAnQXBwL3BhZ2VzL1NldHRpbmdzL3N0YXRlJztcbmltcG9ydCBzZXR0aW5nc1JlZHVjZXIgZnJvbSAnQXBwL3BhZ2VzL1NldHRpbmdzL3JlZHVjZXInO1xuaW1wb3J0IHRyYW5zbGF0b3JTdGF0ZSBmcm9tICdBcHAvcGFnZXMvVHJhbnNsYXRvci9zdGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRvclJlZHVjZXIgZnJvbSAnQXBwL3BhZ2VzL1RyYW5zbGF0b3IvcmVkdWNlcic7XG5cblxuZXhwb3J0IHR5cGUgYWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnk7IH07XG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAhKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICByb3V0ZXI6IHt9LFxuICBhcHA6IGFwcFN0YXRlLFxuICBzZXR0aW5nczogc2V0dGluZ3NTdGF0ZSxcbiAgdHJhbnNsYXRvcjogdHJhbnNsYXRvclN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbml0aWFsU3RhdGUgPSBkZWZhdWx0U3RhdGUsIHVybCA9ICcvJyk6IFtTdG9yZSwgSGlzdG9yeV0ge1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gIWlzU2VydmVyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGNvbXBvc2U7XG4gIGNvbnN0IGhpc3RvcnkgPSAhaXNTZXJ2ZXIgPyBjcmVhdGVCcm93c2VySGlzdG9yeSgpIDogY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgaW5pdGlhbEVudHJpZXM6IFsnLyddXG4gIH0pO1xuICBjb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpKTtcbiAgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8dHlwZW9mIGluaXRpYWxTdGF0ZT4oe1xuICAgIHJvdXRlcjogY29ubmVjdFJvdXRlcihoaXN0b3J5KSBhcyBhbnksXG4gICAgYXBwOiBhcHBSZWR1Y2VyLFxuICAgIHNldHRpbmdzOiBzZXR0aW5nc1JlZHVjZXIsXG4gICAgdHJhbnNsYXRvcjogdHJhbnNsYXRvclJlZHVjZXJcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmU8dHlwZW9mIGluaXRpYWxTdGF0ZSwgYWN0aW9uLCBhbnksIGFueT4ocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcC9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYXBwUmVkdWNlcilcbiAgICB9KTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAvcGFnZXMvU2V0dGluZ3MvcmVkdWNlcicsICgpID0+IHtcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlcilcbiAgICB9KTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAvcGFnZXMvVHJhbnNsYXRvci9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIodHJhbnNsYXRvclJlZHVjZXIpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW3N0b3JlLCBoaXN0b3J5XTtcbn1cbiIsImNvbnN0IGJvb2sgPSB7XG4gIGhvbWU6IHtcbiAgICByb290OiAoKSA9PiAnLydcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICByb290OiAoKSA9PiAnL3NldHRpbmdzJyxcbiAgICB1c2VyOiAoKSA9PiAnL3NldHRpbmdzL3VzZXInLFxuICAgIGF1dGg6ICgpID0+ICcvc2V0dGluZ3MvdXNlci9hdXRoJ1xuICB9LFxuICB3b3Jkczoge1xuICAgIHJvb3Q6IChpZDogYW55ID0gJzppZCcpID0+ICcvd29yZHMvJyArIGlkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9vazsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG90LWxvYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQVVBO0FBVEE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQTBCQTtBQXpCQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQWNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUFBOztBQWVBO0FBZEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFPQTtBQU5BO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7QUFBQTtBQUFBOztBQThDQTtBQTdDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBRUE7QUFTQTs7Ozs7O0FBRUE7QUFFQTs7QUFBQTtBQUVBOzs7O0FBRUE7Ozs7O0FBRUE7QUFFQTs7Ozs7O0FBRUE7QUFJQTs7QUFGQTtBQUlBOzs7O0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQUE7O0FBeUJBO0FBeEJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQWNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBLGlCQUlBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTs7OztBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLE9BR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBZUE7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUJBWUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
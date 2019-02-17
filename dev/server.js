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
/******/ 	__webpack_require__.h = "7ad594528c0d9da2c3e6";
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { className: "Header__logo", to: system_book__WEBPACK_IMPORTED_MODULE_3__["default"].home.root() }, "Hi! Welcome to english cards!"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "Header__nav" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "Header__nav-list" }, nav.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "Header__nav-item", key: item.name },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { className: "Header__nav-link", activeClassName: "Header__nav-link--active", to: item.to }, item.name))); })))));
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
/* harmony import */ var pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/Home */ "./pages/Home/index.tsx");
/* harmony import */ var pages_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/NotFound */ "./pages/NotFound/index.tsx");
/* harmony import */ var pages_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/Settings */ "./pages/Settings/index.tsx");
/* harmony import */ var pages_Words__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/Words */ "./pages/Words/index.tsx");
/* harmony import */ var widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widgets/ErrorBoundary */ "./widgets/ErrorBoundary/index.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./App/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./App/Footer/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
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

var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "App__header" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "App__center" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].home.root(), component: pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"], exact: true }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].words.root(''), component: pages_Words__WEBPACK_IMPORTED_MODULE_6__["default"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].settings.root(), component: pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: pages_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"] })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "App__footer" })));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


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

/***/ "./pages/Home/assets/styles.scss":
/*!***************************************!*\
  !*** ./pages/Home/assets/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Home/index.tsx":
/*!******************************!*\
  !*** ./pages/Home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./pages/Home/assets/styles.scss");
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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "App" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", { className: "App__header" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Welcom to light video player")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "App__center" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", { className: "Video" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("source", { src: "" }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: "App__footer" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Created by Nikolay Nazarishin. 2019"))));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./pages/NotFound/assets/styles.scss":
/*!*******************************************!*\
  !*** ./pages/NotFound/assets/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/NotFound/index.tsx":
/*!**********************************!*\
  !*** ./pages/NotFound/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./pages/NotFound/assets/styles.scss");
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
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "NotFound" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", { className: "NotFound__code" }, "404"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "NotFound__titl" }, "Sorry page not found")));
    };
    return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (NotFound);


/***/ }),

/***/ "./pages/Settings/assets/styles.scss":
/*!*******************************************!*\
  !*** ./pages/Settings/assets/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Settings/constants.tsx":
/*!**************************************!*\
  !*** ./pages/Settings/constants.tsx ***!
  \**************************************/
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

/***/ "./pages/Settings/index.tsx":
/*!**********************************!*\
  !*** ./pages/Settings/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles.scss */ "./pages/Settings/assets/styles.scss");
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

/***/ "./pages/Settings/reducer.tsx":
/*!************************************!*\
  !*** ./pages/Settings/reducer.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./pages/Settings/state.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./pages/Settings/constants.tsx");
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

/***/ "./pages/Settings/selectors.tsx":
/*!**************************************!*\
  !*** ./pages/Settings/selectors.tsx ***!
  \**************************************/
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

/***/ "./pages/Settings/state.tsx":
/*!**********************************!*\
  !*** ./pages/Settings/state.tsx ***!
  \**********************************/
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

/***/ "./pages/Words/actions.tsx":
/*!*********************************!*\
  !*** ./pages/Words/actions.tsx ***!
  \*********************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./pages/Words/constants.tsx");

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

/***/ "./pages/Words/assets/styles.scss":
/*!****************************************!*\
  !*** ./pages/Words/assets/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Words/constants.tsx":
/*!***********************************!*\
  !*** ./pages/Words/constants.tsx ***!
  \***********************************/
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

/***/ "./pages/Words/index.tsx":
/*!*******************************!*\
  !*** ./pages/Words/index.tsx ***!
  \*******************************/
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
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saga */ "./pages/Words/saga.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./pages/Words/selectors.tsx");
/* harmony import */ var pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/Settings/selectors */ "./pages/Settings/selectors.tsx");
/* harmony import */ var widgets_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! widgets/Pagination */ "./widgets/Pagination/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/styles.scss */ "./pages/Words/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
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
var Words = /** @class */ (function (_super) {
    __extends(Words, _super);
    function Words() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Words.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, wordsPerPage = _a.wordsPerPage, id = _a.match.params.id;
        Object(_saga__WEBPACK_IMPORTED_MODULE_5__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        Object(_saga__WEBPACK_IMPORTED_MODULE_5__["fetchInfo"])(dispatch);
    };
    Words.prototype.componentDidUpdate = function (prevProps) {
        var dispatch = prevProps.dispatch, wordsPerPage = prevProps.wordsPerPage, id = prevProps.match.params.id;
        if (id !== this.props.match.params.id) {
            Object(_saga__WEBPACK_IMPORTED_MODULE_5__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "Words__pagination", count: countWords, path: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].words.root('') })));
    };
    return Words;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({
    words: _selectors__WEBPACK_IMPORTED_MODULE_6__["selectWords"],
    wordsPerPage: pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_7__["selectWordsPerPage"],
    countWords: _selectors__WEBPACK_IMPORTED_MODULE_6__["selectCountWords"],
}))(Words));


/***/ }),

/***/ "./pages/Words/reducer.tsx":
/*!*********************************!*\
  !*** ./pages/Words/reducer.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./pages/Words/state.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./pages/Words/constants.tsx");
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

/***/ "./pages/Words/saga.tsx":
/*!******************************!*\
  !*** ./pages/Words/saga.tsx ***!
  \******************************/
/*! exports provided: fetchWords, fetchInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWords", function() { return fetchWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInfo", function() { return fetchInfo; });
/* harmony import */ var model_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model/words */ "./model/words/index.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./pages/Words/actions.tsx");
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

/***/ "./pages/Words/selectors.tsx":
/*!***********************************!*\
  !*** ./pages/Words/selectors.tsx ***!
  \***********************************/
/*! exports provided: wordsSelector, selectWords, selectCountWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordsSelector", function() { return wordsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWords", function() { return selectWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountWords", function() { return selectCountWords; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var wordsSelector = function (state) { return state.words; };
var selectWords = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(wordsSelector, function (words) { return words.words; });
var selectCountWords = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(wordsSelector, function (words) { return words.countWords; });


/***/ }),

/***/ "./pages/Words/state.tsx":
/*!*******************************!*\
  !*** ./pages/Words/state.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
var wordsState = {
    words: [
        {
            en: 'nothinga',
            ru: 'ничего'
        }
    ],
    countWords: 0,
};
/* harmony default export */ __webpack_exports__["default"] = (wordsState);


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
/* harmony import */ var pages_Settings_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/Settings/state */ "./pages/Settings/state.tsx");
/* harmony import */ var pages_Settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/Settings/reducer */ "./pages/Settings/reducer.tsx");
/* harmony import */ var pages_Words_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/Words/state */ "./pages/Words/state.tsx");
/* harmony import */ var pages_Words_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages/Words/reducer */ "./pages/Words/reducer.tsx");









var isServer = !(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
var defaultState = {
    router: {},
    app: App_state__WEBPACK_IMPORTED_MODULE_3__["default"],
    settings: pages_Settings_state__WEBPACK_IMPORTED_MODULE_5__["default"],
    words: pages_Words_state__WEBPACK_IMPORTED_MODULE_7__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (initialState, url) {
    if (initialState === void 0) { initialState = defaultState; }
    if (url === void 0) { url = '/'; }
    var composeEnhancers = !isServer && "development" === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
    var history = !isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])() : Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])({
        initialEntries: [url]
    });
    var enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)));
    var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
        router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history),
        app: App_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
        settings: pages_Settings_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
        words: pages_Words_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
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

/***/ "./widgets/ErrorBoundary/assets/styles.scss":
/*!**************************************************!*\
  !*** ./widgets/ErrorBoundary/assets/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./widgets/ErrorBoundary/index.tsx":
/*!*****************************************!*\
  !*** ./widgets/ErrorBoundary/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles.scss */ "./widgets/ErrorBoundary/assets/styles.scss");
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


// assets

var HasError = /** @class */ (function (_super) {
    __extends(HasError, _super);
    function HasError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        _this.error = null;
        _this.info = null;
        return _this;
    }
    // static getDerivedStateFromError(error: any, errorInfo: any) {
    //   console.dir('errrrorrr', error);
    //   console.dir('errrrorrr', errorInfo);
    //   return {error: 'errorInfo'};
    // }
    HasError.prototype.componentDidCatch = function (error, info) {
        // logger.info('component did catch');
        this.error = error;
        this.info = info;
        this.setState({
            hasError: true
        });
        // logger.info(info);
        // logger.error(error);
    };
    HasError.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        var hasError = this.state.hasError;
        return hasError ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'HasError') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { className: "HasError__title" }, "Something bad happens"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "HasError__desc" }, this.error && this.error.message),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "HasError__trace" }, this.info && this.info.componentStack
                .split('\n')
                .filter(function (trace) { return !!trace; })
                .map(function (trace, index) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: index },
                index + 1,
                " ",
                trace,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null))); })))) : children;
    };
    return HasError;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HasError);


/***/ }),

/***/ "./widgets/Pagination/assets/styles.scss":
/*!***********************************************!*\
  !*** ./widgets/Pagination/assets/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./widgets/Pagination/index.tsx":
/*!**************************************!*\
  !*** ./widgets/Pagination/index.tsx ***!
  \**************************************/
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
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles.scss */ "./widgets/Pagination/assets/styles.scss");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL0FwcC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2RlbC93b3Jkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTm90Rm91bmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3Mvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NhZ2EudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N5c3RlbS9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL0Vycm9yQm91bmRhcnkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvUGFnaW5hdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC1sb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gXCI3YWQ1OTQ1MjhjMGQ5ZGEyYzNlNlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfY2h1bmtuYW1lX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uY24gPSBcIm1haW5cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5pbnRlcmZhY2UgRm9vdGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBhbnk7XG59O1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9vdGVyUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnRm9vdGVyJyl9PlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IE5pa29sYXkgTmF6YXJpc2hpbi4gMjAxOTwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBOYXZMaW5rIGFzIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gc3lzdGVtXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBuYXYgPSBbXG4gIHtcbiAgICB0bzogYm9vay53b3Jkcy5yb290KCcnKSxcbiAgICBuYW1lOiAnV29yZHMnXG4gIH0sXG4gIHtcbiAgICB0bzogYm9vay5zZXR0aW5ncy5yb290KCksXG4gICAgbmFtZTogJ1NldHRpbmdzJ1xuICB9XG5dXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIGNsYXNzTmFtZT86IGFueTtcbn07XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIZWFkZXJQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdIZWFkZXInKX0+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIkhlYWRlcl9fbG9nb1wiIHRvPXtib29rLmhvbWUucm9vdCgpfT5cbiAgICAgICAgICBIaSEgV2VsY29tZSB0byBlbmdsaXNoIGNhcmRzIVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyX19uYXZcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiSGVhZGVyX19uYXYtbGlzdFwiPlxuICAgICAgICAgICAge25hdi5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJIZWFkZXJfX25hdi1pdGVtXCIga2V5PXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJIZWFkZXJfX25hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cIkhlYWRlcl9fbmF2LWxpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICB0bz17aXRlbS50b31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJleHBvcnQgY29uc3QgQVBQX0lOSVRFRCA9ICdBUFBfSU5JVEVEJzsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIHN5c3RlbVxuaW1wb3J0IGJvb2sgZnJvbSAnc3lzdGVtL2Jvb2snO1xuXG4vLyBjdXN0b21cbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJ3BhZ2VzL05vdEZvdW5kJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdwYWdlcy9TZXR0aW5ncyc7XG5pbXBvcnQgV29yZHMgZnJvbSAncGFnZXMvV29yZHMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnd2lkZ2V0cy9FcnJvckJvdW5kYXJ5JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbnR5cGUgQXBwUHJvcHMgPSB7XG59O1xudHlwZSBTdGF0ZSA9IHtcblxufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcFByb3BzLCBTdGF0ZT4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cIkFwcF9faGVhZGVyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBfX2NlbnRlclwiPlxuICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Jvb2suaG9tZS5yb290KCl9IGNvbXBvbmVudD17SG9tZX0gZXhhY3Q9e3RydWV9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtib29rLndvcmRzLnJvb3QoJycpfSBjb21wb25lbnQ9e1dvcmRzfSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay5zZXR0aW5ncy5yb290KCl9IGNvbXBvbmVudD17U2V0dGluZ3N9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBjbGFzc05hbWU9XCJBcHBfX2Zvb3RlclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsIi8vIG1vZHVsZXNcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAnc3RvcmUnO1xuaW1wb3J0IGluaXRhbFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQVBQX0lOSVRFRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjx0eXBlb2YgaW5pdGFsU3RhdGUsIGFjdGlvbj47XG5cbmNvbnN0IHJlZHVjZXI6IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVBQX0lOSVRFRDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluaXRlZDogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJjb25zdCBhcHBTdGF0ZSA9IHtcbiAgYXBwSW5pdGVkOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBTdGF0ZTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlLCB7IGlzU2VydmVyIH0gZnJvbSAnc3RvcmUnO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnYXNzZXRzL2Jhc2UnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuLy8gYXNzZXRzXG5pbXBvcnQgJ2Fzc2V0cy9hdG9taWMnO1xuXG5cbmNvbnN0IFtzdG9yZSwgaGlzdG9yeV0gPSBjb25maWd1cmVTdG9yZSgpO1xuXG5mdW5jdGlvbiBtYWluKFJvb3QgPSBBcHApIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtcm9vdCcpO1xuICByZW5kZXIoXG4gICAgPEFwcENvbnRhaW5lcj5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgIDxSb290IC8+XG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L0FwcENvbnRhaW5lcj4sXG4gICAgcm9vdFxuICApO1xufVxuXG5pZiAoIWlzU2VydmVyKSB7XG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcCcsICgpID0+IHtcbiAgICAgIG1haW4ocmVxdWlyZSgnQXBwJykuZGVmYXVsdClcbiAgICB9KTtcbiAgfVxuXG4gIG1haW4oQXBwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBBcHAsIGNvbmZpZ3VyZVN0b3JlIH07IiwiaW1wb3J0IHsgZGVmYXVsdE1lbW9pemUgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2xhdGVzID0gYXN5bmMgKGxpbWl0ID0gMTUsIG9mZnNldCA9IDApID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9lbi50eHQnKTtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnXFxuJykubWFwKHBhaXIgPT4gcGFpci5zcGxpdCgnICcpWzBdKTtcbiAgY29uc3QgcGFydE9mV29yZHMgPSB3b3Jkcy5zbGljZShvZmZzZXQsICBvZmZzZXQgKyBsaW1pdCk7XG4gIGNvbnN0IHRyYW5zbGF0ZXMgPSBwYXJ0T2ZXb3Jkcy5tYXAod29yZCA9PiAoe2VuOiB3b3JkLCBydTogJyd9KSk7XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2VuLnR4dCcpO1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xuICBcbiAgcmV0dXJuIHtcbiAgICBjb3VudFdvcmRzOiB3b3Jkcy5sZW5ndGhcbiAgfTtcbn0iLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuXG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHBfX2hlYWRlclwiPlxuICAgICAgICAgIDxoMT5XZWxjb20gdG8gbGlnaHQgdmlkZW8gcGxheWVyPC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwX19jZW50ZXJcIj5cbiAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwiVmlkZW9cIj5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiXCIgLz5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJBcHBfX2Zvb3RlclwiPlxuICAgICAgICAgIDxwPkNyZWF0ZWQgYnkgTmlrb2xheSBOYXphcmlzaGluLiAyMDE5PC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIE5vdEZvdW5kUHJvcHMge1xuXG59O1xuXG5jbGFzcyBOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxOb3RGb3VuZFByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTm90Rm91bmRcIj5cbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJOb3RGb3VuZF9fY29kZVwiPjQwNDwvc3Ryb25nPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiTm90Rm91bmRfX3RpdGxcIj5Tb3JyeSBwYWdlIG5vdCBmb3VuZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1JFUVVFU1QgPSAnU0VUVElOR1NfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfVVBEQVRFICA9ICdTRVRUSU5HU19VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1NVQ0NFU1MgPSAnU0VUVElOR1NfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfRkFJTFVSRSA9ICdTRVRUSU5HU19GQUlMVVJFJztcbiIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBTZXR0aW5nc1Byb3BzIHtcblxufTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNldHRpbmdzXCI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7IiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gY3VzdG9tXG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XG5pbXBvcnQgeyBTRVRUSU5HU19SRVFVRVNULCBTRVRUSU5HU19VUERBVEUsIFNFVFRJTkdTX1NVQ0NFU1MsIFNFVFRJTkdTX0ZBSUxVUkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8aW5pdGFsU3RhdGUsIGFjdGlvbj47XG5cbmNvbnN0IHJlZHVjZXI6IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUVElOR1NfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgIH1cblxuICAgIGNhc2UgU0VUVElOR1NfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzZXR0aW5nczogYWN0aW9uLnBheWxvYWR9XG4gICAgfVxuXG4gICAgY2FzZSBTRVRUSU5HU19VUERBVEU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICB9XG5cbiAgICBjYXNlIFNFVFRJTkdTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1NlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNldHRpbmdzO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0V29yZHNQZXJQYWdlID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNldHRpbmdzU2VsZWN0b3IsXG4gIHNldHRpbmdzID0+IHNldHRpbmdzLndvcmRzUGVyUGFnZVxuKTsiLCJpbnRlcmZhY2UgaW5pdGlhbFN0YXRlIHtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSA9IHtcbiAgd29yZHNQZXJQYWdlOiAxMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZTsiLCJpbXBvcnQge1xuICBXT1JEU19SRVFVRVNULFxuICBXT1JEU19TVUNDRVNTLFxuICBXT1JEU19GQUlMVVJFLFxuXG4gIElORk9fV09SRFNfUkVRVUVTVCxcbiAgSU5GT19XT1JEU19TVUNDRVNTLFxuICBJTkZPX1dPUkRTX0ZBSUxVUkVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0V29yZHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfUkVRVUVTVFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZVdvcmRzID0gKHdvcmRzOiBBcnJheTx7IGVuOiBzdHJpbmc7IHJ1OiBzdHJpbmc7IH0+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB3b3Jkc1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmFpbFdvcmRzID0gKGVycjogYW55KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSU5GT19XT1JEU19SRVFVRVNUXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlSW5mbyA9IChpbmZvOiB7IGNvdW50V29yZHM6IG51bWJlcjsgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBpbmZvXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmYWlsSW5mbyA9IChlcnI6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBXT1JEU19SRVFVRVNUID0gJ1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFdPUkRTX1NVQ0NFU1MgPSAnV09SRFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgV09SRFNfRkFJTFVSRSA9ICdXT1JEU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfUkVRVUVTVCA9ICdJTkZPX1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfU1VDQ0VTUyA9ICdJTkZPX1dPUkRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfRkFJTFVSRSA9ICdJTkZPX1dPUkRTX0ZBSUxVUkUnOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgKiBhcyBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gc3lzdGVtXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IHsgZmV0Y2hXb3JkcywgZmV0Y2hJbmZvIH0gZnJvbSAnLi9zYWdhJztcbmltcG9ydCB7IHNlbGVjdFdvcmRzLCBzZWxlY3RDb3VudFdvcmRzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2VsZWN0V29yZHNQZXJQYWdlIH0gZnJvbSAncGFnZXMvU2V0dGluZ3Mvc2VsZWN0b3JzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3dpZGdldHMvUGFnaW5hdGlvbic7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBXb3Jkc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3b3JkczogQXJyYXk8e2VuOiBzdHJpbmc7IHJ1OiBzdHJpbmd9PjtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG4gIGNvdW50V29yZHM6IG51bWJlcjtcbiAgZGlzcGF0Y2g6IGFueTtcbiAgbWF0Y2g6IGFueTtcbn07XG5cbmNsYXNzIFdvcmRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFdvcmRzUHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgd29yZHNQZXJQYWdlLCBtYXRjaDogeyBwYXJhbXM6IHsgaWQgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIGZldGNoV29yZHMoZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgaWQgKiB3b3Jkc1BlclBhZ2UpO1xuICAgIGZldGNoSW5mbyhkaXNwYXRjaCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKGlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgZmV0Y2hXb3JkcyhkaXNwYXRjaCwgd29yZHNQZXJQYWdlLCBpZCAqIHdvcmRzUGVyUGFnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgd29yZHMgPSBbXSwgY291bnRXb3JkcyB9ID0gdGhpcy5wcm9wcztcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ1dvcmRzJyl9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiV29yZHNfX3RpdGxlXCI+V29yZHMgcGxheWVyPC9oMj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIldvcmRzX190YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkVOPC90aD5cbiAgICAgICAgICAgICAgPHRoPlJVPC90aD5cbiAgICAgICAgICAgICAgPHRoPktub3c8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHtlbiwgcnV9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2VuICsgcnUgKyBpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2VufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntydX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxQYWdpbmF0aW9uIGNsYXNzTmFtZT1cIldvcmRzX19wYWdpbmF0aW9uXCIgY291bnQ9e2NvdW50V29yZHN9IHBhdGg9e2Jvb2sud29yZHMucm9vdCgnJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioe1xuICB3b3Jkczogc2VsZWN0V29yZHMsXG4gIHdvcmRzUGVyUGFnZTogc2VsZWN0V29yZHNQZXJQYWdlLFxuICBjb3VudFdvcmRzOiBzZWxlY3RDb3VudFdvcmRzLFxufSkpKFdvcmRzKTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7XG4gIFdPUkRTX1JFUVVFU1QsXG4gIFdPUkRTX1NVQ0NFU1MsXG4gIFdPUkRTX0ZBSUxVUkUsXG5cbiAgSU5GT19XT1JEU19SRVFVRVNULFxuICBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gIElORk9fV09SRFNfRkFJTFVSRVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBXT1JEU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cbiAgICB9XG5cbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cblxuICAgIGNhc2UgSU5GT19XT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgY291bnRXb3JkczogYWN0aW9uLnBheWxvYWQuY291bnRXb3Jkc31cbiAgICB9XG5cbiAgICBjYXNlIElORk9fV09SRFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgKiBhcyBiYWNrZW5kIGZyb20gJ21vZGVsL3dvcmRzJztcblxuaW1wb3J0IHtcbiAgZ2V0V29yZHMsXG4gIHJlY2VpdmVXb3JkcyxcbiAgZmFpbFdvcmRzLFxuICBnZXRJbmZvLFxuICByZWNlaXZlSW5mbyxcbiAgZmFpbEluZm9cbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGZldGNoV29yZHMgPSBhc3luYyAoZGlzcGF0Y2g6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRXb3JkcygpKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZXMgPSBhd2FpdCBiYWNrZW5kLmdldFRyYW5zbGF0ZXMobGltaXQsIG9mZnNldCk7XG5cbiAgICBkaXNwYXRjaChyZWNlaXZlV29yZHModHJhbnNsYXRlcykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2goZmFpbFdvcmRzKGUpKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRJbmZvKCkpO1xuXG4gICAgY29uc3QgZGF0YToge1xuICAgICAgY291bnRXb3JkczogbnVtYmVyO1xuICAgIH0gPSBhd2FpdCBiYWNrZW5kLmdldEluZm8oKTtcblxuICAgIGRpc3BhdGNoKHJlY2VpdmVJbmZvKGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKGZhaWxJbmZvKGUpKVxuICB9XG59OyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgd29yZHNTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS53b3JkcztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzID0gY3JlYXRlU2VsZWN0b3IoXG4gIHdvcmRzU2VsZWN0b3IsXG4gIHdvcmRzID0+IHdvcmRzLndvcmRzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnRXb3JkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICB3b3Jkc1NlbGVjdG9yLFxuICB3b3JkcyA9PiB3b3Jkcy5jb3VudFdvcmRzXG4pOyIsImludGVyZmFjZSB3b3Jkc1N0YXRlIHtcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG59O1xuXG5jb25zdCB3b3Jkc1N0YXRlOiB3b3Jkc1N0YXRlID0ge1xuICB3b3JkczogW1xuICAgIHtcbiAgICAgIGVuOiAnbm90aGluZ2EnLFxuICAgICAgcnU6ICfQvdC40YfQtdCz0L4nXG4gICAgfVxuICBdLFxuICBjb3VudFdvcmRzOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd29yZHNTdGF0ZTsiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgUmVhY3QgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJ2NsaWVudCc7IC8vIHdpbGwgY2hhbmdlZCB0byByZXF1aXJlKCcuL3N0YXRpYy9jbGllbnQuanMnKSBpbiBwcm9kXG5cbmxldCBjbGllbnROYW1lOiBzdHJpbmcsIGFzc2V0VXJsOiBzdHJpbmc7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGFzc2V0VXJsID0gYGh0dHA6Ly8ke3Byb2Nlc3MuZW52LkhNUl9TRVJWRVJfSE9TVH06JHtwcm9jZXNzLmVudi5ITVJfU0VSVkVSX1BPUlR9L2A7XG4gIGNsaWVudE5hbWUgPSBgY2xpZW50LmpzYDtcbn0gZWxzZSB7IC8vIGlmIHByb2Qgd2lsbCBiZSByZXF1aXJlIGZyb20gY2xpZW50IGJ1bmRsZVxuICBhc3NldFVybCA9ICcvJztcbiAgY2xpZW50TmFtZSA9IGBjbGllbnQtJHtfX3dlYnBhY2tfaGFzaF9ffS5qc2A7XG59IFxuXG5jb25zdCBTZXJ2ZXIgPSBleHByZXNzKCk7XG5jb25zdCBSZWFjdEFwcCA9IGNsaWVudC5BcHA7XG5sZXQgW3N0b3JlXSA9IGNsaWVudC5jb25maWd1cmVTdG9yZSgpO1xuXG5cblNlcnZlci51c2UoYC9zdGF0aWNgLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBgL3N0YXRpYy9gKSkpO1xuU2VydmVyLnVzZShgL3N0YXRpYy8ke2NsaWVudE5hbWV9YCwgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgYC9zdGF0aWMvY2xpZW50LmpzYCkpKTtcblNlcnZlci5wb3N0KGAvVVBEQVRFX1NUT1JFYCwgYm9keVBhcnNlci5qc29uKCksIChyZXEsIHJlcykgPT4ge1xuICBbc3RvcmVdID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKHJlcS5ib2R5LlJFRFVYX1NUQVRFKTsgLy8gQUREIENIRUNLIFxuICByZXMucmVkaXJlY3QoMzAyLCAnYmFjaycpO1xufSk7XG5TZXJ2ZXIudXNlKGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGxldCBjb250ZXh0ID0ge307XG5cbiAgbGV0IHNlcnZlclByb3ZpZGVyID0gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgIDxSZWFjdEFwcCAvPlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4pO1xuXG4gIHJldHVybiByZXMuZW5kKHJlbmRlckhUTUwoUmVhY3REb20ucmVuZGVyVG9TdHJpbmcoc2VydmVyUHJvdmlkZXIpKSk7XG59KTtcblNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQsICgpPT5jb25zb2xlLmxvZygnU2VydmVyIGlzIHJ1bmluZyEnKSk7XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwoYXBwQ29udGVudDogYW55KSB7XG4gIHJldHVybiBgXG4gIDwhRE9DVFlQRSBodG1sPlxuICA8aHRtbCBsYW5nPVwiZW5cIj4gXG4gICAgPGhlYWQ+IFxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIj5cbiAgICAgIDx0aXRsZT5XSEVOIEkgRE8gTEVBUk4gUkVBQ1QgSSBDUkFaWlk8L3RpdGxlPlxuICAgICAgPHNjcmlwdD53aW5kb3cuUkVEVVhfU1RBVEUgPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpfTwvc2NyaXB0PlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtcm9vdFwiPiR7YXBwQ29udGVudH08L2Rpdj5cbiAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiBzcmM9XCIke2Fzc2V0VXJsfXN0YXRpYy8ke2NsaWVudE5hbWV9XCI+PC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG4gIGA7XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBSZWR1Y2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBhcHBTdGF0ZSBmcm9tICdBcHAvc3RhdGUnO1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnQXBwL3JlZHVjZXInO1xuaW1wb3J0IHNldHRpbmdzU3RhdGUgZnJvbSAncGFnZXMvU2V0dGluZ3Mvc3RhdGUnO1xuaW1wb3J0IHNldHRpbmdzUmVkdWNlciBmcm9tICdwYWdlcy9TZXR0aW5ncy9yZWR1Y2VyJztcbmltcG9ydCB3b3Jkc1N0YXRlIGZyb20gJ3BhZ2VzL1dvcmRzL3N0YXRlJztcbmltcG9ydCB3b3Jkc1JlZHVjZXIgZnJvbSAncGFnZXMvV29yZHMvcmVkdWNlcic7XG5cblxuZXhwb3J0IHR5cGUgYWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnk7IH07XG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAhKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICByb3V0ZXI6IHt9LFxuICBhcHA6IGFwcFN0YXRlLFxuICBzZXR0aW5nczogc2V0dGluZ3NTdGF0ZSxcbiAgd29yZHM6IHdvcmRzU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgdXJsID0gJy8nKTogW1N0b3JlLCBIaXN0b3J5XSB7XG4gIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAhaXNTZXJ2ZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogY29tcG9zZTtcbiAgY29uc3QgaGlzdG9yeSA9ICFpc1NlcnZlciA/IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICBpbml0aWFsRW50cmllczogW3VybF1cbiAgfSk7XG4gIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUocm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSkpO1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vyczx0eXBlb2YgaW5pdGlhbFN0YXRlPih7XG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpIGFzIGFueSxcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgc2V0dGluZ3M6IHNldHRpbmdzUmVkdWNlcixcbiAgICB3b3Jkczogd29yZHNSZWR1Y2VyXG4gIH0pO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlPHR5cGVvZiBpbml0aWFsU3RhdGUsIGFjdGlvbiwgYW55LCBhbnk+KHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAvcmVkdWNlcicsICgpID0+IHtcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGFwcFJlZHVjZXIpXG4gICAgfSk7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdCgncGFnZXMvU2V0dGluZ3MvcmVkdWNlcicsICgpID0+IHtcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlcilcbiAgICB9KTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdwYWdlcy9Xb3Jkcy9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIod29yZHNSZWR1Y2VyKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFtzdG9yZSwgaGlzdG9yeV07XG59XG4iLCJjb25zdCBib29rID0ge1xuICBob21lOiB7XG4gICAgcm9vdDogKCkgPT4gJy8nXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcm9vdDogKCkgPT4gJy9zZXR0aW5ncycsXG4gICAgdXNlcjogKCkgPT4gJy9zZXR0aW5ncy91c2VyJyxcbiAgICBhdXRoOiAoKSA9PiAnL3NldHRpbmdzL3VzZXIvYXV0aCdcbiAgfSxcbiAgd29yZHM6IHtcbiAgICByb290OiAoaWQ6IGFueSA9ICc6aWQnKSA9PiAnL3dvcmRzLycgKyBpZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2s7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCB0eXBlIEhhc0Vycm9yUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xufVxuXG5jbGFzcyBIYXNFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIYXNFcnJvclByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBoYXNFcnJvcjogZmFsc2VcbiAgfTtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbCA9IG51bGw7XG4gIGluZm86IFJlYWN0LkVycm9ySW5mbyB8IG51bGwgPSBudWxsO1xuXG4gIC8vIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IGFueSwgZXJyb3JJbmZvOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmRpcignZXJycnJvcnJyJywgZXJyb3IpO1xuICAvLyAgIGNvbnNvbGUuZGlyKCdlcnJycm9ycnInLCBlcnJvckluZm8pO1xuICAvLyAgIHJldHVybiB7ZXJyb3I6ICdlcnJvckluZm8nfTtcbiAgLy8gfVxuICBcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBpbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcbiAgICAvLyBsb2dnZXIuaW5mbygnY29tcG9uZW50IGRpZCBjYXRjaCcpO1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB0aGlzLmluZm8gPSBpbmZvO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYXNFcnJvcjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gbG9nZ2VyLmluZm8oaW5mbyk7XG5cbiAgICAvLyBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoYXNFcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICByZXR1cm4gaGFzRXJyb3IgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnSGFzRXJyb3InKX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJIYXNFcnJvcl9fdGl0bGVcIj5Tb21ldGhpbmcgYmFkIGhhcHBlbnM8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJIYXNFcnJvcl9fZGVzY1wiPnt0aGlzLmVycm9yICYmIHRoaXMuZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIkhhc0Vycm9yX190cmFjZVwiPlxuICAgICAgICAgIHt0aGlzLmluZm8gJiYgdGhpcy5pbmZvLmNvbXBvbmVudFN0YWNrXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKHRyYWNlID0+ICEhdHJhY2UpXG4gICAgICAgICAgICAubWFwKCh0cmFjZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2luZGV4ICsgMX0ge3RyYWNlfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IGNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc0Vycm9yOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgYXMgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBQYWdpbmF0aW9uUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn07XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnaW5hdGlvblByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHsgY2xhc3NOYW1lLCBwYXRoLCBjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb3VudCA9IGNvdW50ID4gMTAgPyAxMCA6IGNvdW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdQYWdpbmF0aW9uX19saXN0Jyl9PlxuICAgICAgICAgIHsobmV3IEFycmF5KGNvdW50KSkuZmlsbCgnJykubWFwKCh2LCBudW0pID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJQYWdpbmF0aW9uX19pdGVtXCIga2V5PXsobnVtICsgMSl9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlBhZ2luYXRpb25fX2xpbmtcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cIlBhZ2luYXRpb25fX2xpbmstLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgdG89e3BhdGggKyAobnVtICsgMSl9XG4gICAgICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KG51bSArIDEpfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG90LWxvYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQVVBO0FBVEE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUEyQkE7QUExQkE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFhQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7O0FBbUJBO0FBbEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0EsaUJBSUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUVBO0FBQUE7QUFBQTs7Ozs7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUVBOzs7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFrQkE7QUFqQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBU0E7QUFSQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQU9BO0FBTkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQUE7QUFBQTs7QUE4Q0E7QUE3Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFFQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBRUE7QUFTQTs7Ozs7O0FBRUE7QUFFQTs7QUFBQTtBQUVBOzs7O0FBRUE7Ozs7O0FBRUE7QUFFQTs7Ozs7O0FBRUE7QUFJQTs7QUFGQTtBQUlBOzs7O0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsT0FHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUJBWUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTRDQTtBQTFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFBQTs7QUF5QkE7QUF4QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBY0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
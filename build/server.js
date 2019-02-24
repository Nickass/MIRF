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
/******/ 	__webpack_require__.h = "0d9fb75863ab837fa7fc";
/******/
/******/ 	// __webpack_chunkname__
/******/ 	__webpack_require__.cn = "main";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.tsx");
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

/***/ "./App/Header/assets/styles.tsx":
/*!**************************************!*\
  !*** ./App/Header/assets/styles.tsx ***!
  \**************************************/
/*! exports provided: Header, Logo, Nav, NavList, NavItem, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  max-width: 400px;\n  margin: 0 auto 1em;\n  font-size: 48px;\n  color: brown;\n  text-decoration: none;\n"], ["\n  display: block;\n  max-width: 400px;\n  margin: 0 auto 1em;\n  font-size: 48px;\n  color: brown;\n  text-decoration: none;\n"])));
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n"], ["\n  display: flex;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n"])));
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  margin-right: 10px;\n"], ["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  margin-right: 10px;\n"])));
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;    \n  color: inherit;\n  padding: 10px 20px;\n  text-decoration: none;\n  border-bottom: 2px solid rgba(pink, .6);\n  transition: 400ms;\n  font-weight: 600;\n  font-size: 14px;\n  color: #a11;\n  text-transform: uppercase;\n\n  &.active,\n  &:hover {\n    border-bottom: 2px solid red;\n  }\n  &.active {\n    color: black;\n  }\n"], ["\n  display: block;    \n  color: inherit;\n  padding: 10px 20px;\n  text-decoration: none;\n  border-bottom: 2px solid rgba(pink, .6);\n  transition: 400ms;\n  font-weight: 600;\n  font-size: 14px;\n  color: #a11;\n  text-transform: uppercase;\n\n  &.active,\n  &:hover {\n    border-bottom: 2px solid red;\n  }\n  &.active {\n    color: black;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


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
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles */ "./App/Header/assets/styles.tsx");
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
        to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].words.root(''),
        name: 'Words'
    },
    {
        to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].settings.root(),
        name: 'Settings'
    }
];
;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Header"], { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Logo"], { to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].home.root() }, "Hi! Welcome to english cards!"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Nav"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavList"], null, nav.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavItem"], { key: item.name },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: item.to }, item.name))); })))));
    };
    return default_1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (default_1);


/***/ }),

/***/ "./App/assets/styles.tsx":
/*!*******************************!*\
  !*** ./App/assets/styles.tsx ***!
  \*******************************/
/*! exports provided: Container, Header, center, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./App/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./App/Footer/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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




var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  text-align: center;\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 50px 0;\n  background: #eaeaea;\n"], ["\n  padding: 50px 0;\n  background: #eaeaea;\n"])));
var center = function (el) { return function (props) {
    var El = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(el)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: 900px;\n    margin: auto;\n  "], ["\n    max-width: 900px;\n    margin: auto;\n  "])));
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](El, __assign({}, props));
}; };
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: auto;\n  padding: 20px 0;\n  background: #3a3a3a;\n  color: #fff;\n"], ["\n  margin-top: auto;\n  padding: 20px 0;\n  background: #3a3a3a;\n  color: #fff;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles */ "./App/assets/styles.tsx");
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Header"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].home.root(), component: Object(_assets_styles__WEBPACK_IMPORTED_MODULE_8__["center"])(pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"]), exact: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].words.root(), component: Object(_assets_styles__WEBPACK_IMPORTED_MODULE_8__["center"])(pages_Words__WEBPACK_IMPORTED_MODULE_6__["default"]) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: system_book__WEBPACK_IMPORTED_MODULE_2__["default"].settings.root(), component: Object(_assets_styles__WEBPACK_IMPORTED_MODULE_8__["center"])(pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"]) }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: pages_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"] }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Footer"], null)));
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
    var _a = Object(store__WEBPACK_IMPORTED_MODULE_5__["default"])(window.REDUX_STATE), store = _a[0], history = _a[1];
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
/* harmony import */ var system_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! system/request */ "./system/request.tsx");
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

var cache;
var getTranslates = function (limit, offset) {
    if (limit === void 0) { limit = 15; }
    if (offset === void 0) { offset = 0; }
    return __awaiter(_this, void 0, void 0, function () {
        var res, text, words, partOfWords, translates, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!!cache) return [3 /*break*/, 3];
                    return [4 /*yield*/, Object(system_request__WEBPACK_IMPORTED_MODULE_0__["default"])("/public/en.txt")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    text = _a.sent();
                    words = text.split('\n').map(function (pair) { return pair.split(' ')[0]; });
                    cache = words;
                    _a.label = 3;
                case 3:
                    partOfWords = cache.slice(offset, offset + limit);
                    translates = partOfWords.map(function (word) { return ({ en: word, ru: '' }); });
                    return [2 /*return*/, translates];
                case 4:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [2 /*return*/, []];
                case 5: return [2 /*return*/];
            }
        });
    });
};
var getInfo = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, text, words, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                if (!!cache) return [3 /*break*/, 3];
                return [4 /*yield*/, Object(system_request__WEBPACK_IMPORTED_MODULE_0__["default"])("/public/en.txt")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.text()];
            case 2:
                text = _a.sent();
                words = text.split('\n').map(function (pair) { return pair.split(' ')[0]; });
                cache = words;
                _a.label = 3;
            case 3: return [2 /*return*/, { countWords: cache.length }];
            case 4:
                e_2 = _a.sent();
                console.error(e_2);
                return [2 /*return*/, { countWords: 0 }];
            case 5: return [2 /*return*/];
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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className }, "Hi and welocome to home!"));
    };
    return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Home);


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
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className },
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
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: className }, "You are at settings page"));
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

/***/ "./pages/Words/assets/styles.tsx":
/*!***************************************!*\
  !*** ./pages/Words/assets/styles.tsx ***!
  \***************************************/
/*! exports provided: Container, Title, Table, Th, Tr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border: 1px solid #e1e1e1;\n"], ["\n  width: 100%;\n  border: 1px solid #e1e1e1;\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  background: #f1f1f1;\n"], ["\n  width: 100%;\n  background: #f1f1f1;\n"])));
var Th = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 20px 0;\n  background: #ddd;\n"], ["\n  padding: 20px 0;\n  background: #ddd;\n"])));
var Tr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.tr(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  border: 1px solid #e1e1e1;\n\n  &:nth-child(2n + 1) {\n    background: #fff;\n  }\n"], ["\n  width: 100%;\n  border: 1px solid #e1e1e1;\n\n  &:nth-child(2n + 1) {\n    background: #fff;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


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
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ "./pages/Words/saga.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./pages/Words/selectors.tsx");
/* harmony import */ var pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/Settings/selectors */ "./pages/Settings/selectors.tsx");
/* harmony import */ var widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! widgets/Pagination */ "./widgets/Pagination/index.tsx");
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles */ "./pages/Words/assets/styles.tsx");
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
        var _a = this.props, dispatch = _a.dispatch, wordsPerPage = _a.wordsPerPage, history = _a.history, location = _a.location, id = _a.match.params.id;
        if (!id) {
            history.push(location.pathname + 1);
            return;
        }
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchInfo"])(dispatch);
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, parseInt(id) * wordsPerPage);
    };
    Words.prototype.componentDidUpdate = function (prevProps) {
        var dispatch = prevProps.dispatch, wordsPerPage = prevProps.wordsPerPage, id = prevProps.match.params.id;
        if (id !== this.props.match.params.id) {
            Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        }
    };
    Words.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.words, words = _b === void 0 ? [] : _b, wordsPerPage = _a.wordsPerPage, countWords = _a.countWords, id = _a.match.params.id;
        return words.length ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Title"], null, "Words player"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Table"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Tr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Th"], null, "EN"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Th"], null, "RU"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Th"], null, "Know"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, words.map(function (_a, i) {
                    var en = _a.en, ru = _a.ru;
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_8__["Tr"], { key: en + ru + i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, en),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, ru),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox" }))));
                }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], { count: Math.ceil(countWords / wordsPerPage), getTo: system_book__WEBPACK_IMPORTED_MODULE_3__["default"].words.root, current: parseInt(id) }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading..."));
    };
    return Words;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({
    words: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectWords"],
    wordsPerPage: pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__["selectWordsPerPage"],
    countWords: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectCountWords"],
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
    words: [],
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client */ "./client.tsx");








 // will changed to require('./public/client.js') in prod
var clientName, assetUrl, staticPath;
if (true) {
    staticPath = path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "../public/");
    assetUrl = "http://" + Object({"NODE_ENV":"development","PUBLIC_URL":"src"}).HMR_SERVER_HOST + ":" + Object({"NODE_ENV":"development","PUBLIC_URL":"src"}).HMR_SERVER_PORT + "/";
    clientName = "client.js";
}
else {}
var Server = express__WEBPACK_IMPORTED_MODULE_0__();
var ReactApp = client__WEBPACK_IMPORTED_MODULE_8__["default"].App;
var store = client__WEBPACK_IMPORTED_MODULE_8__["default"].configureStore()[0];
Server.use("/public", express__WEBPACK_IMPORTED_MODULE_0__["static"](staticPath));
Server.use("/public/" + clientName, express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/public/client.js")));
Server.post("/UPDATE_STORE", body_parser__WEBPACK_IMPORTED_MODULE_4__["json"](), function (req, res) {
    store = client__WEBPACK_IMPORTED_MODULE_8__["default"].configureStore(req.body.REDUX_STATE)[0]; // ADD CHECK 
    res.redirect(302, 'back');
});
Server.use(function (req, res) {
    var context = {};
    var serverProvider = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], { store: store },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], { location: req.url, context: context },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReactApp, null))));
    try {
        var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__["ServerStyleSheet"]();
        var css = sheet.getStyleTags();
        var html = react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"](serverProvider);
        return res.end(renderHTML(html, css));
    }
    catch (e) {
        return res.end(renderHTML('Something went wrong on server!<br />' + e.message));
    }
});
Server.listen(Object({"NODE_ENV":"development","PUBLIC_URL":"src"}).SERVER_PORT, function () { return console.log('Server is runing!'); });
function renderHTML(appContent, css) {
    if (css === void 0) { css = ''; }
    return "\n  <!DOCTYPE html>\n  <html lang=\"en\"> \n    <head> \n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width\">\n      <title>WHEN I DO LEARN REACT I CRAZZY</title>\n      " + css + "\n      <script>window.REDUX_STATE = " + JSON.stringify(store.getState()) + "</script>\n    </head>\n    <body>\n      <div id=\"app-root\">" + appContent + "</div>\n      <script type=\"application/javascript\" src=\"" + assetUrl + "public/" + clientName + "\"></script>\n    </body>\n  </html>\n  ";
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
            if (id === void 0) { id = ':id?'; }
            return '/words/' + id;
        }
    }
};
/* harmony default export */ __webpack_exports__["default"] = (book);


/***/ }),

/***/ "./system/request.tsx":
/*!****************************!*\
  !*** ./system/request.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (function (path, config) { return __awaiter(_this, void 0, void 0, function () {
    var serverPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (true) {
                    serverPath = "http://" + Object({"NODE_ENV":"development","PUBLIC_URL":"src"}).HMR_SERVER_HOST + ":" + Object({"NODE_ENV":"development","PUBLIC_URL":"src"}).HMR_SERVER_PORT;
                }
                else {}
                return [4 /*yield*/, fetch("" + serverPath + path)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });


/***/ }),

/***/ "./widgets/ErrorBoundary/assets/styles.tsx":
/*!*************************************************!*\
  !*** ./widgets/ErrorBoundary/assets/styles.tsx ***!
  \*************************************************/
/*! exports provided: Error, ErrorTitle, ErrorDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTitle", function() { return ErrorTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDesc", function() { return ErrorDesc; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var Error = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: left;\n"], ["\n  text-align: left;\n"])));
var ErrorTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var ErrorDesc = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3;


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
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles */ "./widgets/ErrorBoundary/assets/styles.tsx");
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
        return hasError ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Error"], { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorTitle"], null, "Something bad happens"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorDesc"], null, this.error && this.error.message),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorDesc"], null, this.info && this.info.componentStack
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

/***/ "./widgets/Pagination/assets/styles.tsx":
/*!**********************************************!*\
  !*** ./widgets/Pagination/assets/styles.tsx ***!
  \**********************************************/
/*! exports provided: Container, List, Item, Link, Empty, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return Empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  align-self: stretch;\n  flex: 1 1 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  align-self: stretch;\n  flex: 1 1 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"])));
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"], ["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"])));
var Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  padding: 3px;\n  margin: 0 5px;\n  border-radius: 50%;\n  background: #aaa;\n  color: #e1e1e1;\n  text-decoration: none;\n  font-size: 12px;\n\n  &.active {\n    border: 2px solid #aa0000;\n    color: #aa0000;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  padding: 3px;\n  margin: 0 5px;\n  border-radius: 50%;\n  background: #aaa;\n  color: #e1e1e1;\n  text-decoration: none;\n  font-size: 12px;\n\n  &.active {\n    border: 2px solid #aa0000;\n    color: #aa0000;\n  }\n"])), function (_a) {
    var _b = _a.size, size = _b === void 0 ? 40 : _b;
    return size;
}, function (_a) {
    var _b = _a.size, size = _b === void 0 ? 40 : _b;
    return size;
});
var Empty = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 10px;\n  background: #ddd;\n  color: gray;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0 5px;\n  font-size: 12px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 10px;\n  background: #ddd;\n  color: gray;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 0 5px;\n  font-size: 12px;\n"])));
var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  text-decoration: none;\n  flex: 1 1 auto;\n  border: 1px solid gray;\n  padding: 10px 20px;\n\n  &:last-child {\n    justify-content: flex-end;\n  }\n"], ["\n  display: flex;\n  text-decoration: none;\n  flex: 1 1 auto;\n  border: 1px solid gray;\n  padding: 10px 20px;\n\n  &:last-child {\n    justify-content: flex-end;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


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
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles */ "./widgets/Pagination/assets/styles.tsx");
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

var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.state = {
            pages: [],
        };
        _this.calcPages = function () {
            _this.setState({ pages: _this.getPagesTemplate() });
        };
        return _this;
    }
    Pagination.prototype.componentDidMount = function () {
        this.calcPages();
        window.addEventListener('resize', this.calcPages);
    };
    Pagination.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.calcPages);
    };
    Pagination.prototype.getPagesTemplate = function () {
        var _a = this.props, count = _a.count, current = _a.current;
        var maxCount = this.getMaxCountOfPages();
        if (count <= maxCount) {
            return new Array(count).fill('').map(function (v, i) { return i + 1; });
        }
        var template = new Array(maxCount).fill('').map(function (v, i) { return i + 1; });
        var middle = Math.floor(maxCount / 2);
        var rightCount = count - current;
        var leftCount = current;
        var toCollapseLeft = leftCount - 1 > middle;
        var toCollapseRight = rightCount - 1 > middle;
        var pos = (!toCollapseRight ? maxCount - (count - current) :
            !toCollapseLeft ? current - 1 : middle);
        for (var i = 1; i < maxCount + 1 - pos; i++) {
            template[maxCount - i] = count - i;
        }
        if (toCollapseLeft) {
            template[pos - 1] = current - 1;
            if (maxCount > pos + 3) {
                template[pos - 2] = null;
            }
            else {
                template[pos - 1] = null;
            }
        }
        if (toCollapseRight) {
            template[pos + 1] = current + 1;
            if (maxCount > pos + 3) {
                template[pos + 2] = null;
            }
            else {
                template[pos + 1] = null;
            }
        }
        template[pos] = current;
        return template;
    };
    Pagination.prototype.getMaxCountOfPages = function () {
        var current = this.container.current;
        if (current) {
            var width = current.offsetWidth;
            return Math.floor(width / 50);
        }
        else {
            return 0;
        }
    };
    Pagination.prototype.getTo = function (to) {
        var _a = this.props, count = _a.count, getTo = _a.getTo;
        if (to > count || to < 1) {
            throw RangeError("Out of range value. 0 < " + to + " > " + count);
        }
        return getTo(to);
    };
    Pagination.prototype.back = function () {
        var current = this.props.current;
        return this.getTo(current - 1);
    };
    Pagination.prototype.forvard = function () {
        var current = this.props.current;
        return this.getTo(current + 1);
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, current = _a.current, count = _a.count;
        var pages = this.state.pages;
        // p               |1|, 2, 3                n
        // p, 1, 2, 3, 4, 5, 6, 7, 8, |9|, 10, 11   n
        // p, 1, 2, 3, |4|, 5 ... 7, 8, 9, 10, 12   n
        // p, 1, 2, 3, 5, 6, 7, 8 ... 10, |11|, 12  n
        // p, 1, 2 ... 11, |12|, 13, ... 43, 44, 45 n
        // p, 1 ... 11, |12|, 13 ... 45 n
        return count > 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], { className: className },
            current > 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Arrow"], { to: this.back() }, "Prev")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["List"], { ref: this.container }, pages.map(function (num, index) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Item"], { key: 'empty_' + index }, num ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: _this.getTo(num), exact: true }, num)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Empty"], null, "...")))); })),
            current < count && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Arrow"], { to: this.forvard() }, "Next"))));
    };
    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Pagination);


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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL0FwcC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvYXNzZXRzL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2RlbC93b3Jkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTm90Rm91bmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3Mvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NhZ2EudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N5c3RlbS9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zeXN0ZW0vcmVxdWVzdC50c3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9FcnJvckJvdW5kYXJ5L2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvRXJyb3JCb3VuZGFyeS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9QYWdpbmF0aW9uL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvUGFnaW5hdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC1sb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBcIjBkOWZiNzU4NjNhYjgzN2ZhN2ZjXCI7XG5cbiBcdC8vIF9fd2VicGFja19jaHVua25hbWVfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jbiA9IFwibWFpblwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci50c3hcIik7XG4iLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIGNsYXNzTmFtZT86IGFueTtcbn07XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGb290ZXJQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdGb290ZXInKX0+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgTmlrb2xheSBOYXphcmlzaGluLiAyMDE5PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgc2MgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTmF2TGluayBhcyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzYy5oZWFkZXJgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc2MoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxZW07XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6IGJyb3duO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gc2MubmF2YFxuXG5gO1xuXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHNjLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzYy5saWBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHNjKExpbmspYFxuICBkaXNwbGF5OiBibG9jazsgICAgXG4gIGNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEocGluaywgLjYpO1xuICB0cmFuc2l0aW9uOiA0MDBtcztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ExMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmLmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gc3lzdGVtXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCB7XG4gIEhlYWRlcixcbiAgTG9nbyxcbiAgTmF2LFxuICBOYXZMaXN0LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbmNvbnN0IG5hdiA9IFtcbiAge1xuICAgIHRvOiBib29rLndvcmRzLnJvb3QoJycpLFxuICAgIG5hbWU6ICdXb3JkcydcbiAgfSxcbiAge1xuICAgIHRvOiBib29rLnNldHRpbmdzLnJvb3QoKSxcbiAgICBuYW1lOiAnU2V0dGluZ3MnXG4gIH1cbl1cblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgY2xhc3NOYW1lPzogYW55O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SGVhZGVyUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPExvZ28gdG89e2Jvb2suaG9tZS5yb290KCl9PlxuICAgICAgICAgIEhpISBXZWxjb21lIHRvIGVuZ2xpc2ggY2FyZHMhXG4gICAgICAgIDwvTG9nbz5cbiAgICAgICAgPE5hdj5cbiAgICAgICAgICA8TmF2TGlzdD5cbiAgICAgICAgICAgIHtuYXYubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2l0ZW0udG99ID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L05hdkxpc3Q+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9IZWFkZXI+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IHNjIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc2MuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc2MoaGVhZGVyKWBcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuYDtcblxuZXhwb3J0IGNvbnN0IGNlbnRlciA9IChlbDogYW55KSA9PiAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBFbCA9IHNjKGVsKWBcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgYDtcblxuICByZXR1cm4gPEVsIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc2MoZm9vdGVyKWBcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2ZmZjtcbmA7IiwiZXhwb3J0IGNvbnN0IEFQUF9JTklURUQgPSAnQVBQX0lOSVRFRCc7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBzeXN0ZW1cbmltcG9ydCBib29rIGZyb20gJ3N5c3RlbS9ib29rJztcblxuLy8gY3VzdG9tXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICdwYWdlcy9Ob3RGb3VuZCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAncGFnZXMvU2V0dGluZ3MnO1xuaW1wb3J0IFdvcmRzIGZyb20gJ3BhZ2VzL1dvcmRzJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ3dpZGdldHMvRXJyb3JCb3VuZGFyeSc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBIZWFkZXIsXG4gIGNlbnRlcixcbiAgRm9vdGVyXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbnR5cGUgQXBwUHJvcHMgPSB7XG59O1xudHlwZSBTdGF0ZSA9IHtcblxufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcFByb3BzLCBTdGF0ZT4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay5ob21lLnJvb3QoKX0gY29tcG9uZW50PXtjZW50ZXIoSG9tZSl9IGV4YWN0PXt0cnVlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Jvb2sud29yZHMucm9vdCgpfSBjb21wb25lbnQ9e2NlbnRlcihXb3Jkcyl9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay5zZXR0aW5ncy5yb290KCl9IGNvbXBvbmVudD17Y2VudGVyKFNldHRpbmdzKX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gY3VzdG9tXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBUFBfSU5JVEVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIHJlZHVjZXIgPSBSZWR1Y2VyPHR5cGVvZiBpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBUFBfSU5JVEVEOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW5pdGVkOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImNvbnN0IGFwcFN0YXRlID0ge1xuICBhcHBJbml0ZWQ6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFN0YXRlOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHsgaXNTZXJ2ZXIgfSBmcm9tICdzdG9yZSc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICdhc3NldHMvYmFzZSc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnYXNzZXRzL2F0b21pYyc7XG5cblxuY29uc3QgW3N0b3JlLCBoaXN0b3J5XSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmZ1bmN0aW9uIG1haW4oUm9vdCA9IEFwcCkge1xuICBjb25zdCBbc3RvcmUsIGhpc3RvcnldID0gY29uZmlndXJlU3RvcmUod2luZG93LlJFRFVYX1NUQVRFKTtcbiAgXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLXJvb3QnKTtcbiAgcmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICA8Um9vdCAvPlxuICAgICAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICAgIHJvb3RcbiAgKTtcbn1cblxuaWYgKCFpc1NlcnZlcikge1xuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAnLCAoKSA9PiB7XG4gICAgICBtYWluKHJlcXVpcmUoJ0FwcCcpLmRlZmF1bHQpXG4gICAgfSk7XG4gIH1cblxuICBtYWluKEFwcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgQXBwLCBjb25maWd1cmVTdG9yZSB9OyIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3lzdGVtL3JlcXVlc3QnO1xuXG5sZXQgY2FjaGU6IHN0cmluZ1tdO1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNsYXRlcyA9IGFzeW5jIChsaW1pdCA9IDE1LCBvZmZzZXQgPSAwKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFjYWNoZSkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChgL3B1YmxpYy9lbi50eHRgKTtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xuICAgICAgY2FjaGUgPSB3b3JkcztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGFydE9mV29yZHMgPSBjYWNoZS5zbGljZShvZmZzZXQsICBvZmZzZXQgKyBsaW1pdCk7XG4gICAgY29uc3QgdHJhbnNsYXRlcyA9IHBhcnRPZldvcmRzLm1hcCh3b3JkID0+ICh7ZW46IHdvcmQsIHJ1OiAnJ30pKTtcbiAgICBcbiAgICByZXR1cm4gdHJhbnNsYXRlcztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGlmKCFjYWNoZSkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChgL3B1YmxpYy9lbi50eHRgKTtcbiAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xuICBcbiAgICAgIGNhY2hlID0gd29yZHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY291bnRXb3JkczogY2FjaGUubGVuZ3RoIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHJldHVybiB7IGNvdW50V29yZHM6IDAgfVxuICB9XG59IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SG9tZVByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICBIaSBhbmQgd2Vsb2NvbWUgdG8gaG9tZSFcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBOb3RGb3VuZFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Tm90Rm91bmRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIk5vdEZvdW5kX19jb2RlXCI+NDA0PC9zdHJvbmc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJOb3RGb3VuZF9fdGl0bFwiPlNvcnJ5IHBhZ2Ugbm90IGZvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJleHBvcnQgY29uc3QgU0VUVElOR1NfUkVRVUVTVCA9ICdTRVRUSU5HU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19VUERBVEUgID0gJ1NFVFRJTkdTX1VQREFURSc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfU1VDQ0VTUyA9ICdTRVRUSU5HU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19GQUlMVVJFID0gJ1NFVFRJTkdTX0ZBSUxVUkUnO1xuIiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIFNldHRpbmdzUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nc1Byb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIFlvdSBhcmUgYXQgc2V0dGluZ3MgcGFnZVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzOyIsIi8vIG1vZHVsZXNcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IGluaXRhbFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAnc3RvcmUnO1xuaW1wb3J0IHsgU0VUVElOR1NfUkVRVUVTVCwgU0VUVElOR1NfVVBEQVRFLCBTRVRUSU5HU19TVUNDRVNTLCBTRVRUSU5HU19GQUlMVVJFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIHJlZHVjZXIgPSBSZWR1Y2VyPGluaXRhbFN0YXRlLCBhY3Rpb24+O1xuXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVFRJTkdTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICB9XG5cbiAgICBjYXNlIFNFVFRJTkdTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgc2V0dGluZ3M6IGFjdGlvbi5wYXlsb2FkfVxuICAgIH1cblxuICAgIGNhc2UgU0VUVElOR1NfVVBEQVRFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBTRVRUSU5HU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZXR0aW5ncztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzUGVyUGFnZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZXR0aW5nc1NlbGVjdG9yLFxuICBzZXR0aW5ncyA9PiBzZXR0aW5ncy53b3Jkc1BlclBhZ2Vcbik7IiwiaW50ZXJmYWNlIGluaXRpYWxTdGF0ZSB7XG4gIHdvcmRzUGVyUGFnZTogbnVtYmVyO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgPSB7XG4gIHdvcmRzUGVyUGFnZTogMTAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGU7IiwiaW1wb3J0IHtcbiAgV09SRFNfUkVRVUVTVCxcbiAgV09SRFNfU1VDQ0VTUyxcbiAgV09SRFNfRkFJTFVSRSxcblxuICBJTkZPX1dPUkRTX1JFUVVFU1QsXG4gIElORk9fV09SRFNfU1VDQ0VTUyxcbiAgSU5GT19XT1JEU19GQUlMVVJFXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldFdvcmRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX1JFUVVFU1RcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVXb3JkcyA9ICh3b3JkczogQXJyYXk8eyBlbjogc3RyaW5nOyBydTogc3RyaW5nOyB9PikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogd29yZHNcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZhaWxXb3JkcyA9IChlcnI6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX0ZBSUxVUkUsXG4gICAgcGF5bG9hZDogZXJyXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfUkVRVUVTVFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZUluZm8gPSAoaW5mbzogeyBjb3VudFdvcmRzOiBudW1iZXI7IH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogaW5mb1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmFpbEluZm8gPSAoZXJyOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTkZPX1dPUkRTX0ZBSUxVUkUsXG4gICAgcGF5bG9hZDogZXJyXG4gIH1cbn07XG4iLCJpbXBvcnQgc2MgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc2MuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHNjLmgxYFxuXG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSBzYy50YWJsZWBcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG5gO1xuXG5leHBvcnQgY29uc3QgVGggPSBzYy50aGBcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRyID0gc2MudHJgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuXG4gICY6bnRoLWNoaWxkKDJuICsgMSkge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbmA7IiwiZXhwb3J0IGNvbnN0IFdPUkRTX1JFUVVFU1QgPSAnV09SRFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgV09SRFNfU1VDQ0VTUyA9ICdXT1JEU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBXT1JEU19GQUlMVVJFID0gJ1dPUkRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19SRVFVRVNUID0gJ0lORk9fV09SRFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19TVUNDRVNTID0gJ0lORk9fV09SRFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19GQUlMVVJFID0gJ0lORk9fV09SRFNfRkFJTFVSRSc7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gc3lzdGVtXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IHsgZmV0Y2hXb3JkcywgZmV0Y2hJbmZvIH0gZnJvbSAnLi9zYWdhJztcbmltcG9ydCB7IHNlbGVjdFdvcmRzLCBzZWxlY3RDb3VudFdvcmRzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2VsZWN0V29yZHNQZXJQYWdlIH0gZnJvbSAncGFnZXMvU2V0dGluZ3Mvc2VsZWN0b3JzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3dpZGdldHMvUGFnaW5hdGlvbic7XG5cbi8vIGFzc2V0c1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUaXRsZSwgVGFibGUsIFRoLCBUciB9IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbmludGVyZmFjZSBXb3Jkc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3b3JkczogQXJyYXk8e2VuOiBzdHJpbmc7IHJ1OiBzdHJpbmd9PjtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG4gIGNvdW50V29yZHM6IG51bWJlcjtcbiAgZGlzcGF0Y2g6IGFueTtcbiAgbWF0Y2g6IG1hdGNoPHtpZDogc3RyaW5nO30+O1xuICBoaXN0b3J5OiBIaXN0b3J5O1xuICBsb2NhdGlvbjogTG9jYXRpb247XG59O1xuXG5jbGFzcyBXb3JkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXb3Jkc1Byb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgaGlzdG9yeSwgbG9jYXRpb24sIG1hdGNoOiB7IHBhcmFtczogeyBpZCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgXG4gICAgaWYgKCFpZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKGxvY2F0aW9uLnBhdGhuYW1lICsgMSk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZmV0Y2hJbmZvKGRpc3BhdGNoKTtcbiAgICBmZXRjaFdvcmRzKGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIHBhcnNlSW50KGlkKSAqIHdvcmRzUGVyUGFnZSk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKGlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgZmV0Y2hXb3JkcyhkaXNwYXRjaCwgd29yZHNQZXJQYWdlLCBpZCAqIHdvcmRzUGVyUGFnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgd29yZHMgPSBbXSwgd29yZHNQZXJQYWdlLCBjb3VudFdvcmRzLCBtYXRjaDogeyBwYXJhbXM6IHsgaWQgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIHJldHVybiB3b3Jkcy5sZW5ndGggPyAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPFRpdGxlPldvcmRzIHBsYXllcjwvVGl0bGU+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgIDxUaD5FTjwvVGg+XG4gICAgICAgICAgICAgIDxUaD5SVTwvVGg+XG4gICAgICAgICAgICAgIDxUaD5Lbm93PC9UaD5cbiAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh7ZW4sIHJ1fSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VHIga2V5PXtlbiArIHJ1ICsgaX0+XG4gICAgICAgICAgICAgICAgPHRkPntlbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cnV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17TWF0aC5jZWlsKGNvdW50V29yZHMgLyB3b3Jkc1BlclBhZ2UpfSBnZXRUbz17Ym9vay53b3Jkcy5yb290fSBjdXJyZW50PXtwYXJzZUludChpZCl9Lz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioe1xuICB3b3Jkczogc2VsZWN0V29yZHMsXG4gIHdvcmRzUGVyUGFnZTogc2VsZWN0V29yZHNQZXJQYWdlLFxuICBjb3VudFdvcmRzOiBzZWxlY3RDb3VudFdvcmRzLFxufSkpKFdvcmRzKTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7XG4gIFdPUkRTX1JFUVVFU1QsXG4gIFdPUkRTX1NVQ0NFU1MsXG4gIFdPUkRTX0ZBSUxVUkUsXG5cbiAgSU5GT19XT1JEU19SRVFVRVNULFxuICBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gIElORk9fV09SRFNfRkFJTFVSRVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBXT1JEU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cbiAgICB9XG5cbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cblxuICAgIGNhc2UgSU5GT19XT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgY291bnRXb3JkczogYWN0aW9uLnBheWxvYWQuY291bnRXb3Jkc31cbiAgICB9XG5cbiAgICBjYXNlIElORk9fV09SRFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgKiBhcyBiYWNrZW5kIGZyb20gJ21vZGVsL3dvcmRzJztcblxuaW1wb3J0IHtcbiAgZ2V0V29yZHMsXG4gIHJlY2VpdmVXb3JkcyxcbiAgZmFpbFdvcmRzLFxuICBnZXRJbmZvLFxuICByZWNlaXZlSW5mbyxcbiAgZmFpbEluZm9cbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGZldGNoV29yZHMgPSBhc3luYyAoZGlzcGF0Y2g6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRXb3JkcygpKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZXMgPSBhd2FpdCBiYWNrZW5kLmdldFRyYW5zbGF0ZXMobGltaXQsIG9mZnNldCk7XG5cbiAgICBkaXNwYXRjaChyZWNlaXZlV29yZHModHJhbnNsYXRlcykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2goZmFpbFdvcmRzKGUpKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRJbmZvKCkpO1xuXG4gICAgY29uc3QgZGF0YToge1xuICAgICAgY291bnRXb3JkczogbnVtYmVyO1xuICAgIH0gPSBhd2FpdCBiYWNrZW5kLmdldEluZm8oKTtcblxuICAgIGRpc3BhdGNoKHJlY2VpdmVJbmZvKGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKGZhaWxJbmZvKGUpKVxuICB9XG59OyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgd29yZHNTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS53b3JkcztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzID0gY3JlYXRlU2VsZWN0b3IoXG4gIHdvcmRzU2VsZWN0b3IsXG4gIHdvcmRzID0+IHdvcmRzLndvcmRzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnRXb3JkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICB3b3Jkc1NlbGVjdG9yLFxuICB3b3JkcyA9PiB3b3Jkcy5jb3VudFdvcmRzXG4pOyIsImludGVyZmFjZSB3b3Jkc1N0YXRlIHtcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG59O1xuXG5jb25zdCB3b3Jkc1N0YXRlOiB3b3Jkc1N0YXRlID0ge1xuICB3b3JkczogW10sXG4gIGNvdW50V29yZHM6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3Jkc1N0YXRlOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBjbGllbnQgZnJvbSAnY2xpZW50JzsgLy8gd2lsbCBjaGFuZ2VkIHRvIHJlcXVpcmUoJy4vcHVibGljL2NsaWVudC5qcycpIGluIHByb2RcblxubGV0IGNsaWVudE5hbWU6IHN0cmluZywgYXNzZXRVcmw6IHN0cmluZywgc3RhdGljUGF0aDogc3RyaW5nO1xuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBzdGF0aWNQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgYC4uL3B1YmxpYy9gKTtcbiAgYXNzZXRVcmwgPSBgaHR0cDovLyR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9IT1NUfToke3Byb2Nlc3MuZW52LkhNUl9TRVJWRVJfUE9SVH0vYDtcbiAgY2xpZW50TmFtZSA9IGBjbGllbnQuanNgO1xufSBlbHNlIHsgLy8gaWYgcHJvZCB3aWxsIGJlIHJlcXVpcmUgZnJvbSBjbGllbnQgYnVuZGxlXG4gIHN0YXRpY1BhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBgLi9wdWJsaWMvYCk7XG4gIGFzc2V0VXJsID0gJy8nO1xuICBjbGllbnROYW1lID0gYGNsaWVudC0ke19fd2VicGFja19oYXNoX199LmpzYDtcbn0gXG5cbmNvbnN0IFNlcnZlciA9IGV4cHJlc3MoKTtcbmNvbnN0IFJlYWN0QXBwID0gY2xpZW50LkFwcDtcbmxldCBbc3RvcmVdID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKCk7XG5cblxuU2VydmVyLnVzZShgL3B1YmxpY2AsIGV4cHJlc3Muc3RhdGljKHN0YXRpY1BhdGgpKTtcblNlcnZlci51c2UoYC9wdWJsaWMvJHtjbGllbnROYW1lfWAsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIGAvcHVibGljL2NsaWVudC5qc2ApKSk7XG5TZXJ2ZXIucG9zdChgL1VQREFURV9TVE9SRWAsIGJvZHlQYXJzZXIuanNvbigpLCAocmVxLCByZXMpID0+IHtcbiAgW3N0b3JlXSA9IGNsaWVudC5jb25maWd1cmVTdG9yZShyZXEuYm9keS5SRURVWF9TVEFURSk7IC8vIEFERCBDSEVDSyBcbiAgcmVzLnJlZGlyZWN0KDMwMiwgJ2JhY2snKTtcbn0pO1xuU2VydmVyLnVzZShmdW5jdGlvbihyZXEsIHJlcykge1xuICBsZXQgY29udGV4dCA9IHt9O1xuICBcbiAgbGV0IHNlcnZlclByb3ZpZGVyID0gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgIDxSZWFjdEFwcCAvPlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4pO1xuXG50cnkge1xuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG4gIGNvbnN0IGNzcyA9IHNoZWV0LmdldFN0eWxlVGFncygpO1xuICBjb25zdCBodG1sID0gUmVhY3REb20ucmVuZGVyVG9TdHJpbmcoc2VydmVyUHJvdmlkZXIpO1xuICByZXR1cm4gcmVzLmVuZChyZW5kZXJIVE1MKGh0bWwsIGNzcykpO1xufSBjYXRjaChlKSB7XG4gIHJldHVybiByZXMuZW5kKHJlbmRlckhUTUwoJ1NvbWV0aGluZyB3ZW50IHdyb25nIG9uIHNlcnZlciE8YnIgLz4nICsgZS5tZXNzYWdlKSk7XG59XG5cbn0pO1xuU2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5TRVJWRVJfUE9SVCwgKCk9PmNvbnNvbGUubG9nKCdTZXJ2ZXIgaXMgcnVuaW5nIScpKTtcblxuZnVuY3Rpb24gcmVuZGVySFRNTChhcHBDb250ZW50OiBhbnksIGNzcyA9ICcnKSB7XG4gIHJldHVybiBgXG4gIDwhRE9DVFlQRSBodG1sPlxuICA8aHRtbCBsYW5nPVwiZW5cIj4gXG4gICAgPGhlYWQ+IFxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIj5cbiAgICAgIDx0aXRsZT5XSEVOIEkgRE8gTEVBUk4gUkVBQ1QgSSBDUkFaWlk8L3RpdGxlPlxuICAgICAgJHtjc3N9XG4gICAgICA8c2NyaXB0PndpbmRvdy5SRURVWF9TVEFURSA9ICR7SlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSl9PC9zY3JpcHQ+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgPGRpdiBpZD1cImFwcC1yb290XCI+JHthcHBDb250ZW50fTwvZGl2PlxuICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIHNyYz1cIiR7YXNzZXRVcmx9cHVibGljLyR7Y2xpZW50TmFtZX1cIj48L3NjcmlwdD5cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbiAgYDtcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIFJlZHVjZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IGFwcFN0YXRlIGZyb20gJ0FwcC9zdGF0ZSc7XG5pbXBvcnQgYXBwUmVkdWNlciBmcm9tICdBcHAvcmVkdWNlcic7XG5pbXBvcnQgc2V0dGluZ3NTdGF0ZSBmcm9tICdwYWdlcy9TZXR0aW5ncy9zdGF0ZSc7XG5pbXBvcnQgc2V0dGluZ3NSZWR1Y2VyIGZyb20gJ3BhZ2VzL1NldHRpbmdzL3JlZHVjZXInO1xuaW1wb3J0IHdvcmRzU3RhdGUgZnJvbSAncGFnZXMvV29yZHMvc3RhdGUnO1xuaW1wb3J0IHdvcmRzUmVkdWNlciBmcm9tICdwYWdlcy9Xb3Jkcy9yZWR1Y2VyJztcblxuXG5leHBvcnQgdHlwZSBhY3Rpb24gPSB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueTsgfTtcbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9ICEoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHJvdXRlcjoge30sXG4gIGFwcDogYXBwU3RhdGUsXG4gIHNldHRpbmdzOiBzZXR0aW5nc1N0YXRlLFxuICB3b3Jkczogd29yZHNTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5pdGlhbFN0YXRlID0gZGVmYXVsdFN0YXRlLCB1cmwgPSAnLycpOiBbU3RvcmUsIEhpc3RvcnldIHtcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9ICFpc1NlcnZlciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gOiBjb21wb3NlO1xuICBjb25zdCBoaXN0b3J5ID0gIWlzU2VydmVyID8gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSA6IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgIGluaXRpYWxFbnRyaWVzOiBbdXJsXVxuICB9KTtcbiAgY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSk7XG4gIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzPHR5cGVvZiBpbml0aWFsU3RhdGU+KHtcbiAgICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkgYXMgYW55LFxuICAgIGFwcDogYXBwUmVkdWNlcixcbiAgICBzZXR0aW5nczogc2V0dGluZ3NSZWR1Y2VyLFxuICAgIHdvcmRzOiB3b3Jkc1JlZHVjZXJcbiAgfSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmU8dHlwZW9mIGluaXRpYWxTdGF0ZSwgYWN0aW9uLCBhbnksIGFueT4ocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcC9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYXBwUmVkdWNlcilcbiAgICB9KTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdwYWdlcy9TZXR0aW5ncy9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoc2V0dGluZ3NSZWR1Y2VyKVxuICAgIH0pO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ3BhZ2VzL1dvcmRzL3JlZHVjZXInLCAoKSA9PiB7XG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcih3b3Jkc1JlZHVjZXIpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW3N0b3JlLCBoaXN0b3J5XTtcbn1cbiIsImNvbnN0IGJvb2sgPSB7XG4gIGhvbWU6IHtcbiAgICByb290OiAoKSA9PiAnLydcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICByb290OiAoKSA9PiAnL3NldHRpbmdzJyxcbiAgICB1c2VyOiAoKSA9PiAnL3NldHRpbmdzL3VzZXInLFxuICAgIGF1dGg6ICgpID0+ICcvc2V0dGluZ3MvdXNlci9hdXRoJ1xuICB9LFxuICB3b3Jkczoge1xuICAgIHJvb3Q6IChpZDogYW55ID0gJzppZD8nKSA9PiAnL3dvcmRzLycgKyBpZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2s7IiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHBhdGg6IHN0cmluZywgY29uZmlnPzogYW55KSA9PiB7XG4gIGxldCBzZXJ2ZXJQYXRoOiBzdHJpbmc7XG4gIFxuICBcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgc2VydmVyUGF0aCA9IGBodHRwOi8vJHtwcm9jZXNzLmVudi5ITVJfU0VSVkVSX0hPU1R9OiR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9QT1JUfWA7XG4gIH0gZWxzZSB7XG4gICAgc2VydmVyUGF0aCA9IGBodHRwOi8vJHtwcm9jZXNzLmVudi5TRVJWRVJfSE9TVH06JHtwcm9jZXNzLmVudi5TRVJWRVJfUE9SVH1gOyAgICBcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJQYXRofSR7cGF0aH1gKTtcbn07IiwiaW1wb3J0IHNjIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEVycm9yID0gc2MuZGl2YFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9yVGl0bGUgPSBzYy5oMWBcblxuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9yRGVzYyA9IHNjLnBgXG5cbmA7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhc3NldHNcbmltcG9ydCB7XG4gIEVycm9yLFxuICBFcnJvclRpdGxlLFxuICBFcnJvckRlc2Ncbn0gZnJvbSAnLi9hc3NldHMvc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgSGFzRXJyb3JQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xufTtcblxudHlwZSBTdGF0ZSA9IHtcbiAgaGFzRXJyb3I6IGJvb2xlYW47XG59XG5cbmNsYXNzIEhhc0Vycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEhhc0Vycm9yUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIGhhc0Vycm9yOiBmYWxzZVxuICB9O1xuICBlcnJvcjogRXJyb3IgfCBudWxsID0gbnVsbDtcbiAgaW5mbzogUmVhY3QuRXJyb3JJbmZvIHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogYW55LCBlcnJvckluZm86IGFueSkge1xuICAvLyAgIGNvbnNvbGUuZGlyKCdlcnJycm9ycnInLCBlcnJvcik7XG4gIC8vICAgY29uc29sZS5kaXIoJ2VycnJyb3JycicsIGVycm9ySW5mbyk7XG4gIC8vICAgcmV0dXJuIHtlcnJvcjogJ2Vycm9ySW5mbyd9O1xuICAvLyB9XG4gIFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGluZm86IFJlYWN0LkVycm9ySW5mbykge1xuICAgIC8vIGxvZ2dlci5pbmZvKCdjb21wb25lbnQgZGlkIGNhdGNoJyk7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIHRoaXMuaW5mbyA9IGluZm87XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhhc0Vycm9yOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBsb2dnZXIuaW5mbyhpbmZvKTtcblxuICAgIC8vIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhhc0Vycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIFxuICAgIHJldHVybiBoYXNFcnJvciA/IChcbiAgICAgIDxFcnJvciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxFcnJvclRpdGxlPlNvbWV0aGluZyBiYWQgaGFwcGVuczwvRXJyb3JUaXRsZT5cbiAgICAgICAgPEVycm9yRGVzYz57dGhpcy5lcnJvciAmJiB0aGlzLmVycm9yLm1lc3NhZ2V9PC9FcnJvckRlc2M+XG4gICAgICAgIDxFcnJvckRlc2M+XG4gICAgICAgICAge3RoaXMuaW5mbyAmJiB0aGlzLmluZm8uY29tcG9uZW50U3RhY2tcbiAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5maWx0ZXIodHJhY2UgPT4gISF0cmFjZSlcbiAgICAgICAgICAgIC5tYXAoKHRyYWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfSB7dHJhY2V9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0Vycm9yRGVzYz5cbiAgICAgIDwvRXJyb3I+XG4gICAgKSA6IGNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhc0Vycm9yOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgcnJkIGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcbiAgXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBzdHlsZWQocnJkLk5hdkxpbmspPHtzaXplPzogbnVtYmVyfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHsoe3NpemUgPSA0MH0pID0+IHNpemUgfXB4O1xuICBoZWlnaHQ6ICR7KHtzaXplID0gNDB9KSA9PiBzaXplIH1weDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDAgNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG4gIGNvbG9yOiAjZTFlMWUxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICAmLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2FhMDAwMDtcbiAgICBjb2xvcjogI2FhMDAwMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVtcHR5ID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFycm93ID0gc3R5bGVkKHJyZC5MaW5rKWBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuYDsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBMaXN0LFxuICBJdGVtLFxuICBBcnJvdyxcbiAgTGluayxcbiAgRW1wdHksXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbnR5cGUgUGFnaW5hdGlvblByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIGN1cnJlbnQ6IG51bWJlcjtcbiAgZ2V0VG86IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XG59O1xuXG50eXBlIFBhZ2VzID0gQXJyYXk8KG51bWJlciB8IG51bGwpPjtcbnR5cGUgU3RhdGUgPSB7XG4gIHBhZ2VzOiBQYWdlcztcbn07XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnaW5hdGlvblByb3BzLCBTdGF0ZT4ge1xuICBjb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTFVMaXN0RWxlbWVudD4oKTtcbiAgc3RhdGUgPSB7XG4gICAgcGFnZXM6IFtdLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2FsY1BhZ2VzKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjUGFnZXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1BhZ2VzKTtcbiAgfVxuXG4gIGNhbGNQYWdlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtwYWdlczogdGhpcy5nZXRQYWdlc1RlbXBsYXRlKCl9KTtcbiAgfVxuXG4gIGdldFBhZ2VzVGVtcGxhdGUoKSB7XG4gICAgY29uc3QgeyBjb3VudCwgY3VycmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtYXhDb3VudCA9IHRoaXMuZ2V0TWF4Q291bnRPZlBhZ2VzKCk7XG4gICAgXG4gICAgaWYgKGNvdW50IDw9IG1heENvdW50KSB7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKCcnKS5tYXAoKHYsIGkpID0+IGkgKyAxKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGVtcGxhdGU6IFBhZ2VzID0gbmV3IEFycmF5KG1heENvdW50KS5maWxsKCcnKS5tYXAoKHYsIGkpID0+IGkgKyAxKTtcbiAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmZsb29yKG1heENvdW50IC8gMik7XG4gICAgY29uc3QgcmlnaHRDb3VudCA9IGNvdW50IC0gY3VycmVudDtcbiAgICBjb25zdCBsZWZ0Q291bnQgPSBjdXJyZW50O1xuICAgIGNvbnN0IHRvQ29sbGFwc2VMZWZ0ID0gbGVmdENvdW50IC0gMSA+IG1pZGRsZTtcbiAgICBjb25zdCB0b0NvbGxhcHNlUmlnaHQgPSByaWdodENvdW50IC0gMSA+IG1pZGRsZTtcbiAgICBjb25zdCBwb3MgPSAoIXRvQ29sbGFwc2VSaWdodCA/IG1heENvdW50IC0gKGNvdW50IC0gY3VycmVudCkgOiBcbiAgICAgICAgICAgICAgICAhdG9Db2xsYXBzZUxlZnQgPyBjdXJyZW50IC0gMSA6IG1pZGRsZSk7XG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgbWF4Q291bnQgKyAxIC0gcG9zOyBpKyspIHtcbiAgICAgIHRlbXBsYXRlW21heENvdW50IC0gaV0gPSBjb3VudCAtIGk7XG4gICAgfVxuXG4gICAgaWYgKHRvQ29sbGFwc2VMZWZ0KSB7XG4gICAgICB0ZW1wbGF0ZVtwb3MgLSAxXSA9IGN1cnJlbnQgLSAxO1xuXG4gICAgICBpZiAobWF4Q291bnQgPiBwb3MgKyAzKSB7XG4gICAgICAgIHRlbXBsYXRlW3BvcyAtIDJdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlW3BvcyAtIDFdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9Db2xsYXBzZVJpZ2h0KSB7XG4gICAgICB0ZW1wbGF0ZVtwb3MgKyAxXSA9IGN1cnJlbnQgKyAxO1xuICAgICAgXG4gICAgICBpZiAobWF4Q291bnQgPiBwb3MgKyAzKSB7XG4gICAgICAgIHRlbXBsYXRlW3BvcyArIDJdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlW3BvcyArIDFdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGVtcGxhdGVbcG9zXSA9IGN1cnJlbnQ7XG4gICAgXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0TWF4Q291bnRPZlBhZ2VzKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5jb250YWluZXI7XG5cbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih3aWR0aCAvIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG8odG86IG51bWJlcikge1xuICAgIGNvbnN0IHsgY291bnQsIGdldFRvIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRvID4gY291bnQgfHwgdG8gPCAxKSB7XG4gICAgICB0aHJvdyBSYW5nZUVycm9yKGBPdXQgb2YgcmFuZ2UgdmFsdWUuIDAgPCAke3RvfSA+ICR7Y291bnR9YClcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGdldFRvKHRvKTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0aGlzLmdldFRvKGN1cnJlbnQgLSAxKTtcbiAgfVxuXG4gIGZvcnZhcmQoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0aGlzLmdldFRvKGN1cnJlbnQgKyAxKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGN1cnJlbnQsIGNvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGFnZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyBwICAgICAgICAgICAgICAgfDF8LCAyLCAzICAgICAgICAgICAgICAgIG5cbiAgICAvLyBwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCB8OXwsIDEwLCAxMSAgIG5cbiAgICAvLyBwLCAxLCAyLCAzLCB8NHwsIDUgLi4uIDcsIDgsIDksIDEwLCAxMiAgIG5cbiAgICAvLyBwLCAxLCAyLCAzLCA1LCA2LCA3LCA4IC4uLiAxMCwgfDExfCwgMTIgIG5cbiAgICAvLyBwLCAxLCAyIC4uLiAxMSwgfDEyfCwgMTMsIC4uLiA0MywgNDQsIDQ1IG5cbiAgICAvLyBwLCAxIC4uLiAxMSwgfDEyfCwgMTMgLi4uIDQ1IG5cblxuICAgIHJldHVybiBjb3VudCA+IDEgJiYgKFxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjdXJyZW50ID4gMSAmJiAoXG4gICAgICAgICAgPEFycm93IHRvPXt0aGlzLmJhY2soKX0gPlxuICAgICAgICAgICAgUHJldlxuICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICl9IFxuXG4gICAgICAgIDxMaXN0IHJlZj17dGhpcy5jb250YWluZXJ9PlxuICAgICAgICAgIHtwYWdlcy5tYXAoKG51bSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17J2VtcHR5XycgKyBpbmRleH0+XG4gICAgICAgICAgICAgIHtudW0gPyAoXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e3RoaXMuZ2V0VG8obnVtKX0gZXhhY3Q9e3RydWV9PlxuICAgICAgICAgICAgICAgICAge251bX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEVtcHR5Pi4uLjwvRW1wdHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cblxuICAgICAgICB7Y3VycmVudCA8IGNvdW50ICYmIChcbiAgICAgICAgICA8QXJyb3cgdG89e3RoaXMuZm9ydmFyZCgpfT5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L0Fycm93PlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFVQTtBQVRBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBSUE7QUFTQTtBQUlBO0FBT0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQXVCQTtBQXRCQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQVNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQUFBO0FBQUE7O0FBaUJBO0FBaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0EsaUJBSUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBOzs7OztBQUVBO0FBRUE7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBRUE7O0FBR0E7OztBQUVBO0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFTQTtBQVJBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQVdBO0FBVkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQVVBO0FBVEE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFFQTtBQUtBO0FBSUE7QUFLQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQUE7QUFBQTs7QUFzREE7QUFyREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUVBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFFQTtBQVNBOzs7Ozs7QUFFQTtBQUVBOztBQUFBO0FBRUE7Ozs7QUFFQTs7Ozs7QUFFQTtBQUVBOzs7Ozs7QUFFQTtBQUlBOztBQUZBO0FBSUE7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFLQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsT0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlCQVlBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBLHVCQUVBO0FBRUE7QUFBQTs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE0Q0E7QUExQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUVBO0FBTUE7QUFXQTtBQU1BO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBZUE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBRUE7QUFDQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBOztBQXlIQTtBQXJJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBY0E7QUFPQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEtBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
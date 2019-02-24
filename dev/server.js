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
/******/ 	__webpack_require__.h = "994583c9cac280315abf";
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
var cache;
var getTranslates = function (limit, offset) {
    if (limit === void 0) { limit = 15; }
    if (offset === void 0) { offset = 0; }
    return __awaiter(_this, void 0, void 0, function () {
        var res, text, words, partOfWords, translates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!cache) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch('http://localhost:3000/static/en.txt')];
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
            }
        });
    });
};
var getInfo = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, text, words;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!cache) return [3 /*break*/, 3];
                return [4 /*yield*/, fetch('../static/en.txt')];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.text()];
            case 2:
                text = _a.sent();
                words = text.split('\n').map(function (pair) { return pair.split(' ')[0]; });
                cache = words;
                _a.label = 3;
            case 3: return [2 /*return*/, {
                    countWords: cache.length
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








 // will changed to require('./static/client.js') in prod
var clientName, assetUrl;
if (true) {
    assetUrl = "http://" + "localhost" + ":" + "9876" + "/";
    clientName = "client.js";
}
else {}
var Server = express__WEBPACK_IMPORTED_MODULE_0__();
var ReactApp = client__WEBPACK_IMPORTED_MODULE_8__["default"].App;
var store = client__WEBPACK_IMPORTED_MODULE_8__["default"].configureStore()[0];
Server.use("/static", express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/static/")));
Server.use("/static/" + clientName, express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/static/client.js")));
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
Server.listen("3000", function () { return console.log('Server is runing!'); });
function renderHTML(appContent, css) {
    if (css === void 0) { css = ''; }
    return "\n  <!DOCTYPE html>\n  <html lang=\"en\"> \n    <head> \n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width\">\n      <title>WHEN I DO LEARN REACT I CRAZZY</title>\n      " + css + "\n      <script>window.REDUX_STATE = " + JSON.stringify(store.getState()) + "</script>\n    </head>\n    <body>\n      <div id=\"app-root\">" + appContent + "</div>\n      <script type=\"application/javascript\" src=\"" + assetUrl + "static/" + clientName + "\"></script>\n    </body>\n  </html>\n  ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL0FwcC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvYXNzZXRzL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2RlbC93b3Jkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTm90Rm91bmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1NldHRpbmdzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3Mvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NhZ2EudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1dvcmRzL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL3NlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N5c3RlbS9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL0Vycm9yQm91bmRhcnkvYXNzZXRzL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9FcnJvckJvdW5kYXJ5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi93aWRnZXRzL1BhZ2luYXRpb24vYXNzZXRzL3N0eWxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9QYWdpbmF0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpc3RvcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG90LWxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IFwiOTk0NTgzYzljYWMyODAzMTVhYmZcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2NodW5rbmFtZV9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmNuID0gXCJtYWluXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgY2xhc3NOYW1lPzogYW55O1xufTtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvb3RlclByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ0Zvb3RlcicpfT5cbiAgICAgICAgPHA+Q3JlYXRlZCBieSBOaWtvbGF5IE5hemFyaXNoaW4uIDIwMTk8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBzYyBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOYXZMaW5rIGFzIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHNjLmhlYWRlcmBcblxuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzYyhMaW5rKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDFlbTtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogYnJvd247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSBzYy5uYXZgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZMaXN0ID0gc2MudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHNjLmxpYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc2MoTGluaylgXG4gIGRpc3BsYXk6IGJsb2NrOyAgICBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYShwaW5rLCAuNik7XG4gIHRyYW5zaXRpb246IDQwMG1zO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYTExO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICYuYWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBzeXN0ZW1cbmltcG9ydCBib29rIGZyb20gJ3N5c3RlbS9ib29rJztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0IHtcbiAgSGVhZGVyLFxuICBMb2dvLFxuICBOYXYsXG4gIE5hdkxpc3QsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmtcbn0gZnJvbSAnLi9hc3NldHMvc3R5bGVzJztcblxuY29uc3QgbmF2ID0gW1xuICB7XG4gICAgdG86IGJvb2sud29yZHMucm9vdCgnJyksXG4gICAgbmFtZTogJ1dvcmRzJ1xuICB9LFxuICB7XG4gICAgdG86IGJvb2suc2V0dGluZ3Mucm9vdCgpLFxuICAgIG5hbWU6ICdTZXR0aW5ncydcbiAgfVxuXVxuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBhbnk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIZWFkZXJQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8TG9nbyB0bz17Ym9vay5ob21lLnJvb3QoKX0+XG4gICAgICAgICAgSGkhIFdlbGNvbWUgdG8gZW5nbGlzaCBjYXJkcyFcbiAgICAgICAgPC9Mb2dvPlxuICAgICAgICA8TmF2PlxuICAgICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgICAge25hdi5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17aXRlbS50b30gPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTmF2TGlzdD5cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L0hlYWRlcj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgc2MgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzYy5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzYyhoZWFkZXIpYFxuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG5gO1xuXG5leHBvcnQgY29uc3QgY2VudGVyID0gKGVsOiBhbnkpID0+IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IEVsID0gc2MoZWwpYFxuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICBgO1xuXG4gIHJldHVybiA8RWwgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzYyhmb290ZXIpYFxuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjZmZmO1xuYDsiLCJleHBvcnQgY29uc3QgQVBQX0lOSVRFRCA9ICdBUFBfSU5JVEVEJzsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIHN5c3RlbVxuaW1wb3J0IGJvb2sgZnJvbSAnc3lzdGVtL2Jvb2snO1xuXG4vLyBjdXN0b21cbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJ3BhZ2VzL05vdEZvdW5kJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdwYWdlcy9TZXR0aW5ncyc7XG5pbXBvcnQgV29yZHMgZnJvbSAncGFnZXMvV29yZHMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnd2lkZ2V0cy9FcnJvckJvdW5kYXJ5JztcblxuLy8gYXNzZXRzXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEhlYWRlcixcbiAgY2VudGVyLFxuICBGb290ZXJcbn0gZnJvbSAnLi9hc3NldHMvc3R5bGVzJztcblxudHlwZSBBcHBQcm9wcyA9IHtcbn07XG50eXBlIFN0YXRlID0ge1xuXG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHMsIFN0YXRlPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtib29rLmhvbWUucm9vdCgpfSBjb21wb25lbnQ9e2NlbnRlcihIb21lKX0gZXhhY3Q9e3RydWV9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay53b3Jkcy5yb290KCl9IGNvbXBvbmVudD17Y2VudGVyKFdvcmRzKX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtib29rLnNldHRpbmdzLnJvb3QoKX0gY29tcG9uZW50PXtjZW50ZXIoU2V0dGluZ3MpfSAvPlxuICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFQUF9JTklURUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8dHlwZW9mIGluaXRhbFN0YXRlLCBhY3Rpb24+O1xuXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFQUF9JTklURUQ6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbml0ZWQ6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiY29uc3QgYXBwU3RhdGUgPSB7XG4gIGFwcEluaXRlZDogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwU3RhdGU7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBDb25uZWN0ZWRSb3V0ZXIgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSwgeyBpc1NlcnZlciB9IGZyb20gJ3N0b3JlJztcblxuLy8gYXNzZXRzXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJ2Fzc2V0cy9iYXNlJztcblxuLy8gY3VzdG9tXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICdhc3NldHMvYXRvbWljJztcblxuXG5jb25zdCBbc3RvcmUsIGhpc3RvcnldID0gY29uZmlndXJlU3RvcmUoKTtcblxuZnVuY3Rpb24gbWFpbihSb290ID0gQXBwKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLXJvb3QnKTtcbiAgcmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICA8Um9vdCAvPlxuICAgICAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICAgIHJvb3RcbiAgKTtcbn1cblxuaWYgKCFpc1NlcnZlcikge1xuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAnLCAoKSA9PiB7XG4gICAgICBtYWluKHJlcXVpcmUoJ0FwcCcpLmRlZmF1bHQpXG4gICAgfSk7XG4gIH1cblxuICBtYWluKEFwcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgQXBwLCBjb25maWd1cmVTdG9yZSB9OyIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplIH0gZnJvbSAncmVzZWxlY3QnO1xubGV0IGNhY2hlOiBzdHJpbmdbXTtcblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zbGF0ZXMgPSBhc3luYyAobGltaXQgPSAxNSwgb2Zmc2V0ID0gMCkgPT4ge1xuICBpZiAoIWNhY2hlKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zdGF0aWMvZW4udHh0Jyk7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xuICAgIGNhY2hlID0gd29yZHM7XG4gIH1cbiAgXG4gIGNvbnN0IHBhcnRPZldvcmRzID0gY2FjaGUuc2xpY2Uob2Zmc2V0LCAgb2Zmc2V0ICsgbGltaXQpO1xuICBjb25zdCB0cmFuc2xhdGVzID0gcGFydE9mV29yZHMubWFwKHdvcmQgPT4gKHtlbjogd29yZCwgcnU6ICcnfSkpO1xuICBcbiAgcmV0dXJuIHRyYW5zbGF0ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gYXN5bmMgKCkgPT4ge1xuICBpZighY2FjaGUpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLi4vc3RhdGljL2VuLnR4dCcpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnXFxuJykubWFwKHBhaXIgPT4gcGFpci5zcGxpdCgnICcpWzBdKTtcblxuICAgIGNhY2hlID0gd29yZHM7XG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgY291bnRXb3JkczogY2FjaGUubGVuZ3RoXG4gIH07XG59IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SG9tZVByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICBIaSBhbmQgd2Vsb2NvbWUgdG8gaG9tZSFcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gY3VzdG9tXG5cbi8vIGFzc2V0c1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XG5cbmludGVyZmFjZSBOb3RGb3VuZFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Tm90Rm91bmRQcm9wcz4ge1xuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIk5vdEZvdW5kX19jb2RlXCI+NDA0PC9zdHJvbmc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJOb3RGb3VuZF9fdGl0bFwiPlNvcnJ5IHBhZ2Ugbm90IGZvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDsiLCJleHBvcnQgY29uc3QgU0VUVElOR1NfUkVRVUVTVCA9ICdTRVRUSU5HU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19VUERBVEUgID0gJ1NFVFRJTkdTX1VQREFURSc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfU1VDQ0VTUyA9ICdTRVRUSU5HU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19GQUlMVVJFID0gJ1NFVFRJTkdTX0ZBSUxVUkUnO1xuIiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjdXN0b21cblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIFNldHRpbmdzUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nc1Byb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIFlvdSBhcmUgYXQgc2V0dGluZ3MgcGFnZVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzOyIsIi8vIG1vZHVsZXNcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IGluaXRhbFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAnc3RvcmUnO1xuaW1wb3J0IHsgU0VUVElOR1NfUkVRVUVTVCwgU0VUVElOR1NfVVBEQVRFLCBTRVRUSU5HU19TVUNDRVNTLCBTRVRUSU5HU19GQUlMVVJFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIHJlZHVjZXIgPSBSZWR1Y2VyPGluaXRhbFN0YXRlLCBhY3Rpb24+O1xuXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVFRJTkdTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICB9XG5cbiAgICBjYXNlIFNFVFRJTkdTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgc2V0dGluZ3M6IGFjdGlvbi5wYXlsb2FkfVxuICAgIH1cblxuICAgIGNhc2UgU0VUVElOR1NfVVBEQVRFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBTRVRUSU5HU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZXR0aW5ncztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzUGVyUGFnZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZXR0aW5nc1NlbGVjdG9yLFxuICBzZXR0aW5ncyA9PiBzZXR0aW5ncy53b3Jkc1BlclBhZ2Vcbik7IiwiaW50ZXJmYWNlIGluaXRpYWxTdGF0ZSB7XG4gIHdvcmRzUGVyUGFnZTogbnVtYmVyO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgPSB7XG4gIHdvcmRzUGVyUGFnZTogMTAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGU7IiwiaW1wb3J0IHtcbiAgV09SRFNfUkVRVUVTVCxcbiAgV09SRFNfU1VDQ0VTUyxcbiAgV09SRFNfRkFJTFVSRSxcblxuICBJTkZPX1dPUkRTX1JFUVVFU1QsXG4gIElORk9fV09SRFNfU1VDQ0VTUyxcbiAgSU5GT19XT1JEU19GQUlMVVJFXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldFdvcmRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX1JFUVVFU1RcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlY2VpdmVXb3JkcyA9ICh3b3JkczogQXJyYXk8eyBlbjogc3RyaW5nOyBydTogc3RyaW5nOyB9PikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogd29yZHNcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZhaWxXb3JkcyA9IChlcnI6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdPUkRTX0ZBSUxVUkUsXG4gICAgcGF5bG9hZDogZXJyXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfUkVRVUVTVFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZUluZm8gPSAoaW5mbzogeyBjb3VudFdvcmRzOiBudW1iZXI7IH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogaW5mb1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmFpbEluZm8gPSAoZXJyOiBhbnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTkZPX1dPUkRTX0ZBSUxVUkUsXG4gICAgcGF5bG9hZDogZXJyXG4gIH1cbn07XG4iLCJpbXBvcnQgc2MgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc2MuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHNjLmgxYFxuXG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSBzYy50YWJsZWBcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG5gO1xuXG5leHBvcnQgY29uc3QgVGggPSBzYy50aGBcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRyID0gc2MudHJgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuXG4gICY6bnRoLWNoaWxkKDJuICsgMSkge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbmA7IiwiZXhwb3J0IGNvbnN0IFdPUkRTX1JFUVVFU1QgPSAnV09SRFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgV09SRFNfU1VDQ0VTUyA9ICdXT1JEU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBXT1JEU19GQUlMVVJFID0gJ1dPUkRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19SRVFVRVNUID0gJ0lORk9fV09SRFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19TVUNDRVNTID0gJ0lORk9fV09SRFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19GQUlMVVJFID0gJ0lORk9fV09SRFNfRkFJTFVSRSc7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gc3lzdGVtXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IHsgZmV0Y2hXb3JkcywgZmV0Y2hJbmZvIH0gZnJvbSAnLi9zYWdhJztcbmltcG9ydCB7IHNlbGVjdFdvcmRzLCBzZWxlY3RDb3VudFdvcmRzIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2VsZWN0V29yZHNQZXJQYWdlIH0gZnJvbSAncGFnZXMvU2V0dGluZ3Mvc2VsZWN0b3JzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3dpZGdldHMvUGFnaW5hdGlvbic7XG5cbi8vIGFzc2V0c1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUaXRsZSwgVGFibGUsIFRoLCBUciB9IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbmludGVyZmFjZSBXb3Jkc1Byb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3b3JkczogQXJyYXk8e2VuOiBzdHJpbmc7IHJ1OiBzdHJpbmd9PjtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG4gIGNvdW50V29yZHM6IG51bWJlcjtcbiAgZGlzcGF0Y2g6IGFueTtcbiAgbWF0Y2g6IG1hdGNoPHtpZDogc3RyaW5nO30+O1xuICBoaXN0b3J5OiBIaXN0b3J5O1xuICBsb2NhdGlvbjogTG9jYXRpb247XG59O1xuXG5jbGFzcyBXb3JkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxXb3Jkc1Byb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgaGlzdG9yeSwgbG9jYXRpb24sIG1hdGNoOiB7IHBhcmFtczogeyBpZCB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgXG4gICAgaWYgKCFpZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKGxvY2F0aW9uLnBhdGhuYW1lICsgMSk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZmV0Y2hJbmZvKGRpc3BhdGNoKTtcbiAgICBmZXRjaFdvcmRzKGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIHBhcnNlSW50KGlkKSAqIHdvcmRzUGVyUGFnZSk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gcHJldlByb3BzO1xuXG4gICAgaWYgKGlkICE9PSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgZmV0Y2hXb3JkcyhkaXNwYXRjaCwgd29yZHNQZXJQYWdlLCBpZCAqIHdvcmRzUGVyUGFnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgd29yZHMgPSBbXSwgd29yZHNQZXJQYWdlLCBjb3VudFdvcmRzLCBtYXRjaDogeyBwYXJhbXM6IHsgaWQgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIHJldHVybiB3b3Jkcy5sZW5ndGggPyAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPFRpdGxlPldvcmRzIHBsYXllcjwvVGl0bGU+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgIDxUaD5FTjwvVGg+XG4gICAgICAgICAgICAgIDxUaD5SVTwvVGg+XG4gICAgICAgICAgICAgIDxUaD5Lbm93PC9UaD5cbiAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh7ZW4sIHJ1fSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8VHIga2V5PXtlbiArIHJ1ICsgaX0+XG4gICAgICAgICAgICAgICAgPHRkPntlbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cnV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17TWF0aC5jZWlsKGNvdW50V29yZHMgLyB3b3Jkc1BlclBhZ2UpfSBnZXRUbz17Ym9vay53b3Jkcy5yb290fSBjdXJyZW50PXtwYXJzZUludChpZCl9Lz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioe1xuICB3b3Jkczogc2VsZWN0V29yZHMsXG4gIHdvcmRzUGVyUGFnZTogc2VsZWN0V29yZHNQZXJQYWdlLFxuICBjb3VudFdvcmRzOiBzZWxlY3RDb3VudFdvcmRzLFxufSkpKFdvcmRzKTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7XG4gIFdPUkRTX1JFUVVFU1QsXG4gIFdPUkRTX1NVQ0NFU1MsXG4gIFdPUkRTX0ZBSUxVUkUsXG5cbiAgSU5GT19XT1JEU19SRVFVRVNULFxuICBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gIElORk9fV09SRFNfRkFJTFVSRVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBXT1JEU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cbiAgICB9XG5cbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cblxuICAgIGNhc2UgSU5GT19XT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgY291bnRXb3JkczogYWN0aW9uLnBheWxvYWQuY291bnRXb3Jkc31cbiAgICB9XG5cbiAgICBjYXNlIElORk9fV09SRFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgKiBhcyBiYWNrZW5kIGZyb20gJ21vZGVsL3dvcmRzJztcblxuaW1wb3J0IHtcbiAgZ2V0V29yZHMsXG4gIHJlY2VpdmVXb3JkcyxcbiAgZmFpbFdvcmRzLFxuICBnZXRJbmZvLFxuICByZWNlaXZlSW5mbyxcbiAgZmFpbEluZm9cbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGZldGNoV29yZHMgPSBhc3luYyAoZGlzcGF0Y2g6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRXb3JkcygpKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZXMgPSBhd2FpdCBiYWNrZW5kLmdldFRyYW5zbGF0ZXMobGltaXQsIG9mZnNldCk7XG5cbiAgICBkaXNwYXRjaChyZWNlaXZlV29yZHModHJhbnNsYXRlcykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2goZmFpbFdvcmRzKGUpKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRJbmZvKCkpO1xuXG4gICAgY29uc3QgZGF0YToge1xuICAgICAgY291bnRXb3JkczogbnVtYmVyO1xuICAgIH0gPSBhd2FpdCBiYWNrZW5kLmdldEluZm8oKTtcblxuICAgIGRpc3BhdGNoKHJlY2VpdmVJbmZvKGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKGZhaWxJbmZvKGUpKVxuICB9XG59OyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgd29yZHNTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS53b3JkcztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFdvcmRzID0gY3JlYXRlU2VsZWN0b3IoXG4gIHdvcmRzU2VsZWN0b3IsXG4gIHdvcmRzID0+IHdvcmRzLndvcmRzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnRXb3JkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICB3b3Jkc1NlbGVjdG9yLFxuICB3b3JkcyA9PiB3b3Jkcy5jb3VudFdvcmRzXG4pOyIsImludGVyZmFjZSB3b3Jkc1N0YXRlIHtcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG59O1xuXG5jb25zdCB3b3Jkc1N0YXRlOiB3b3Jkc1N0YXRlID0ge1xuICB3b3JkczogW10sXG4gIGNvdW50V29yZHM6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3Jkc1N0YXRlOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBjbGllbnQgZnJvbSAnY2xpZW50JzsgLy8gd2lsbCBjaGFuZ2VkIHRvIHJlcXVpcmUoJy4vc3RhdGljL2NsaWVudC5qcycpIGluIHByb2RcblxubGV0IGNsaWVudE5hbWU6IHN0cmluZywgYXNzZXRVcmw6IHN0cmluZztcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgYXNzZXRVcmwgPSBgaHR0cDovLyR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9IT1NUfToke3Byb2Nlc3MuZW52LkhNUl9TRVJWRVJfUE9SVH0vYDtcbiAgY2xpZW50TmFtZSA9IGBjbGllbnQuanNgO1xufSBlbHNlIHsgLy8gaWYgcHJvZCB3aWxsIGJlIHJlcXVpcmUgZnJvbSBjbGllbnQgYnVuZGxlXG4gIGFzc2V0VXJsID0gJy8nO1xuICBjbGllbnROYW1lID0gYGNsaWVudC0ke19fd2VicGFja19oYXNoX199LmpzYDtcbn0gXG5cbmNvbnN0IFNlcnZlciA9IGV4cHJlc3MoKTtcbmNvbnN0IFJlYWN0QXBwID0gY2xpZW50LkFwcDtcbmxldCBbc3RvcmVdID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKCk7XG5cblxuU2VydmVyLnVzZShgL3N0YXRpY2AsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIGAvc3RhdGljL2ApKSk7XG5TZXJ2ZXIudXNlKGAvc3RhdGljLyR7Y2xpZW50TmFtZX1gLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBgL3N0YXRpYy9jbGllbnQuanNgKSkpO1xuU2VydmVyLnBvc3QoYC9VUERBVEVfU1RPUkVgLCBib2R5UGFyc2VyLmpzb24oKSwgKHJlcSwgcmVzKSA9PiB7XG4gIFtzdG9yZV0gPSBjbGllbnQuY29uZmlndXJlU3RvcmUocmVxLmJvZHkuUkVEVVhfU1RBVEUpOyAvLyBBREQgQ0hFQ0sgXG4gIHJlcy5yZWRpcmVjdCgzMDIsICdiYWNrJyk7XG59KTtcblNlcnZlci51c2UoZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgbGV0IGNvbnRleHQgPSB7fTtcbiAgXG4gIGxldCBzZXJ2ZXJQcm92aWRlciA9IChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICA8UmVhY3RBcHAgLz5cbiAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+KTtcblxudHJ5IHtcbiAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuICBjb25zdCBjc3MgPSBzaGVldC5nZXRTdHlsZVRhZ3MoKTtcbiAgY29uc3QgaHRtbCA9IFJlYWN0RG9tLnJlbmRlclRvU3RyaW5nKHNlcnZlclByb3ZpZGVyKTtcbiAgcmV0dXJuIHJlcy5lbmQocmVuZGVySFRNTChodG1sLCBjc3MpKTtcbn0gY2F0Y2goZSkge1xuICByZXR1cm4gcmVzLmVuZChyZW5kZXJIVE1MKCdTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBzZXJ2ZXIhPGJyIC8+JyArIGUubWVzc2FnZSkpO1xufVxuXG59KTtcblNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQsICgpPT5jb25zb2xlLmxvZygnU2VydmVyIGlzIHJ1bmluZyEnKSk7XG5cbmZ1bmN0aW9uIHJlbmRlckhUTUwoYXBwQ29udGVudDogYW55LCBjc3MgPSAnJykge1xuICByZXR1cm4gYFxuICA8IURPQ1RZUEUgaHRtbD5cbiAgPGh0bWwgbGFuZz1cImVuXCI+IFxuICAgIDxoZWFkPiBcbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCI+XG4gICAgICA8dGl0bGU+V0hFTiBJIERPIExFQVJOIFJFQUNUIEkgQ1JBWlpZPC90aXRsZT5cbiAgICAgICR7Y3NzfVxuICAgICAgPHNjcmlwdD53aW5kb3cuUkVEVVhfU1RBVEUgPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpfTwvc2NyaXB0PlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIDxkaXYgaWQ9XCJhcHAtcm9vdFwiPiR7YXBwQ29udGVudH08L2Rpdj5cbiAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiBzcmM9XCIke2Fzc2V0VXJsfXN0YXRpYy8ke2NsaWVudE5hbWV9XCI+PC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG4gIGA7XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBSZWR1Y2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBhcHBTdGF0ZSBmcm9tICdBcHAvc3RhdGUnO1xuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnQXBwL3JlZHVjZXInO1xuaW1wb3J0IHNldHRpbmdzU3RhdGUgZnJvbSAncGFnZXMvU2V0dGluZ3Mvc3RhdGUnO1xuaW1wb3J0IHNldHRpbmdzUmVkdWNlciBmcm9tICdwYWdlcy9TZXR0aW5ncy9yZWR1Y2VyJztcbmltcG9ydCB3b3Jkc1N0YXRlIGZyb20gJ3BhZ2VzL1dvcmRzL3N0YXRlJztcbmltcG9ydCB3b3Jkc1JlZHVjZXIgZnJvbSAncGFnZXMvV29yZHMvcmVkdWNlcic7XG5cblxuZXhwb3J0IHR5cGUgYWN0aW9uID0geyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ/OiBhbnk7IH07XG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAhKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICByb3V0ZXI6IHt9LFxuICBhcHA6IGFwcFN0YXRlLFxuICBzZXR0aW5nczogc2V0dGluZ3NTdGF0ZSxcbiAgd29yZHM6IHdvcmRzU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgdXJsID0gJy8nKTogW1N0b3JlLCBIaXN0b3J5XSB7XG4gIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAhaXNTZXJ2ZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogY29tcG9zZTtcbiAgY29uc3QgaGlzdG9yeSA9ICFpc1NlcnZlciA/IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICBpbml0aWFsRW50cmllczogW3VybF1cbiAgfSk7XG4gIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUocm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSkpO1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vyczx0eXBlb2YgaW5pdGlhbFN0YXRlPih7XG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpIGFzIGFueSxcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgc2V0dGluZ3M6IHNldHRpbmdzUmVkdWNlcixcbiAgICB3b3Jkczogd29yZHNSZWR1Y2VyXG4gIH0pO1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlPHR5cGVvZiBpbml0aWFsU3RhdGUsIGFjdGlvbiwgYW55LCBhbnk+KHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAvcmVkdWNlcicsICgpID0+IHtcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGFwcFJlZHVjZXIpXG4gICAgfSk7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdCgncGFnZXMvU2V0dGluZ3MvcmVkdWNlcicsICgpID0+IHtcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHNldHRpbmdzUmVkdWNlcilcbiAgICB9KTtcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdwYWdlcy9Xb3Jkcy9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIod29yZHNSZWR1Y2VyKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFtzdG9yZSwgaGlzdG9yeV07XG59XG4iLCJjb25zdCBib29rID0ge1xuICBob21lOiB7XG4gICAgcm9vdDogKCkgPT4gJy8nXG4gIH0sXG4gIHNldHRpbmdzOiB7XG4gICAgcm9vdDogKCkgPT4gJy9zZXR0aW5ncycsXG4gICAgdXNlcjogKCkgPT4gJy9zZXR0aW5ncy91c2VyJyxcbiAgICBhdXRoOiAoKSA9PiAnL3NldHRpbmdzL3VzZXIvYXV0aCdcbiAgfSxcbiAgd29yZHM6IHtcbiAgICByb290OiAoaWQ6IGFueSA9ICc6aWQ/JykgPT4gJy93b3Jkcy8nICsgaWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBib29rOyIsImltcG9ydCBzYyBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHNjLmRpdmBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvclRpdGxlID0gc2MuaDFgXG5cbmA7XG5cbmV4cG9ydCBjb25zdCBFcnJvckRlc2MgPSBzYy5wYFxuXG5gOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gYXNzZXRzXG5pbXBvcnQge1xuICBFcnJvcixcbiAgRXJyb3JUaXRsZSxcbiAgRXJyb3JEZXNjXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XG5cbmV4cG9ydCB0eXBlIEhhc0Vycm9yUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbn07XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xufVxuXG5jbGFzcyBIYXNFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIYXNFcnJvclByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBoYXNFcnJvcjogZmFsc2VcbiAgfTtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbCA9IG51bGw7XG4gIGluZm86IFJlYWN0LkVycm9ySW5mbyB8IG51bGwgPSBudWxsO1xuXG4gIC8vIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IGFueSwgZXJyb3JJbmZvOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmRpcignZXJycnJvcnJyJywgZXJyb3IpO1xuICAvLyAgIGNvbnNvbGUuZGlyKCdlcnJycm9ycnInLCBlcnJvckluZm8pO1xuICAvLyAgIHJldHVybiB7ZXJyb3I6ICdlcnJvckluZm8nfTtcbiAgLy8gfVxuICBcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBpbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcbiAgICAvLyBsb2dnZXIuaW5mbygnY29tcG9uZW50IGRpZCBjYXRjaCcpO1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB0aGlzLmluZm8gPSBpbmZvO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYXNFcnJvcjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gbG9nZ2VyLmluZm8oaW5mbyk7XG5cbiAgICAvLyBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoYXNFcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICByZXR1cm4gaGFzRXJyb3IgPyAoXG4gICAgICA8RXJyb3IgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RXJyb3JUaXRsZT5Tb21ldGhpbmcgYmFkIGhhcHBlbnM8L0Vycm9yVGl0bGU+XG4gICAgICAgIDxFcnJvckRlc2M+e3RoaXMuZXJyb3IgJiYgdGhpcy5lcnJvci5tZXNzYWdlfTwvRXJyb3JEZXNjPlxuICAgICAgICA8RXJyb3JEZXNjPlxuICAgICAgICAgIHt0aGlzLmluZm8gJiYgdGhpcy5pbmZvLmNvbXBvbmVudFN0YWNrXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKHRyYWNlID0+ICEhdHJhY2UpXG4gICAgICAgICAgICAubWFwKCh0cmFjZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2luZGV4ICsgMX0ge3RyYWNlfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9FcnJvckRlc2M+XG4gICAgICA8L0Vycm9yPlxuICAgICkgOiBjaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNFcnJvcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIHJyZCBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgZmxleDogMSAxIDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG4gIFxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkKHJyZC5OYXZMaW5rKTx7c2l6ZT86IG51bWJlcn0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICR7KHtzaXplID0gNDB9KSA9PiBzaXplIH1weDtcbiAgaGVpZ2h0OiAkeyh7c2l6ZSA9IDQwfSkgPT4gc2l6ZSB9cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjYWFhO1xuICBjb2xvcjogI2UxZTFlMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgJi5hY3RpdmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYTAwMDA7XG4gICAgY29sb3I6ICNhYTAwMDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFbXB0eSA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZChycmQuTGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZmxleDogMSAxIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhc3NldHNcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTGlzdCxcbiAgSXRlbSxcbiAgQXJyb3csXG4gIExpbmssXG4gIEVtcHR5LFxufSBmcm9tICcuL2Fzc2V0cy9zdHlsZXMnO1xuXG50eXBlIFBhZ2luYXRpb25Qcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBjdXJyZW50OiBudW1iZXI7XG4gIGdldFRvOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xufTtcblxudHlwZSBQYWdlcyA9IEFycmF5PChudW1iZXIgfCBudWxsKT47XG50eXBlIFN0YXRlID0ge1xuICBwYWdlczogUGFnZXM7XG59O1xuXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBhZ2luYXRpb25Qcm9wcywgU3RhdGU+IHtcbiAgY29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxVTGlzdEVsZW1lbnQ+KCk7XG4gIHN0YXRlID0ge1xuICAgIHBhZ2VzOiBbXSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNhbGNQYWdlcygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY1BhZ2VzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGNQYWdlcyk7XG4gIH1cblxuICBjYWxjUGFnZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnZXM6IHRoaXMuZ2V0UGFnZXNUZW1wbGF0ZSgpfSk7XG4gIH1cblxuICBnZXRQYWdlc1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IHsgY291bnQsIGN1cnJlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWF4Q291bnQgPSB0aGlzLmdldE1heENvdW50T2ZQYWdlcygpO1xuICAgIFxuICAgIGlmIChjb3VudCA8PSBtYXhDb3VudCkge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgnJykubWFwKCh2LCBpKSA9PiBpICsgMSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRlbXBsYXRlOiBQYWdlcyA9IG5ldyBBcnJheShtYXhDb3VudCkuZmlsbCgnJykubWFwKCh2LCBpKSA9PiBpICsgMSk7XG4gICAgY29uc3QgbWlkZGxlID0gTWF0aC5mbG9vcihtYXhDb3VudCAvIDIpO1xuICAgIGNvbnN0IHJpZ2h0Q291bnQgPSBjb3VudCAtIGN1cnJlbnQ7XG4gICAgY29uc3QgbGVmdENvdW50ID0gY3VycmVudDtcbiAgICBjb25zdCB0b0NvbGxhcHNlTGVmdCA9IGxlZnRDb3VudCAtIDEgPiBtaWRkbGU7XG4gICAgY29uc3QgdG9Db2xsYXBzZVJpZ2h0ID0gcmlnaHRDb3VudCAtIDEgPiBtaWRkbGU7XG4gICAgY29uc3QgcG9zID0gKCF0b0NvbGxhcHNlUmlnaHQgPyBtYXhDb3VudCAtIChjb3VudCAtIGN1cnJlbnQpIDogXG4gICAgICAgICAgICAgICAgIXRvQ29sbGFwc2VMZWZ0ID8gY3VycmVudCAtIDEgOiBtaWRkbGUpO1xuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IG1heENvdW50ICsgMSAtIHBvczsgaSsrKSB7XG4gICAgICB0ZW1wbGF0ZVttYXhDb3VudCAtIGldID0gY291bnQgLSBpO1xuICAgIH1cblxuICAgIGlmICh0b0NvbGxhcHNlTGVmdCkge1xuICAgICAgdGVtcGxhdGVbcG9zIC0gMV0gPSBjdXJyZW50IC0gMTtcblxuICAgICAgaWYgKG1heENvdW50ID4gcG9zICsgMykge1xuICAgICAgICB0ZW1wbGF0ZVtwb3MgLSAyXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZVtwb3MgLSAxXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQ29sbGFwc2VSaWdodCkge1xuICAgICAgdGVtcGxhdGVbcG9zICsgMV0gPSBjdXJyZW50ICsgMTtcbiAgICAgIFxuICAgICAgaWYgKG1heENvdW50ID4gcG9zICsgMykge1xuICAgICAgICB0ZW1wbGF0ZVtwb3MgKyAyXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wbGF0ZVtwb3MgKyAxXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRlbXBsYXRlW3Bvc10gPSBjdXJyZW50O1xuICAgIFxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldE1heENvdW50T2ZQYWdlcygpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuY29udGFpbmVyO1xuXG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgIFxuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iod2lkdGggLyA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvKHRvOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGNvdW50LCBnZXRUbyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0byA+IGNvdW50IHx8IHRvIDwgMSkge1xuICAgICAgdGhyb3cgUmFuZ2VFcnJvcihgT3V0IG9mIHJhbmdlIHZhbHVlLiAwIDwgJHt0b30gPiAke2NvdW50fWApXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBnZXRUbyh0byk7XG4gIH1cblxuICBiYWNrKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdGhpcy5nZXRUbyhjdXJyZW50IC0gMSk7XG4gIH1cblxuICBmb3J2YXJkKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdGhpcy5nZXRUbyhjdXJyZW50ICsgMSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjdXJyZW50LCBjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gcCAgICAgICAgICAgICAgIHwxfCwgMiwgMyAgICAgICAgICAgICAgICBuXG4gICAgLy8gcCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgfDl8LCAxMCwgMTEgICBuXG4gICAgLy8gcCwgMSwgMiwgMywgfDR8LCA1IC4uLiA3LCA4LCA5LCAxMCwgMTIgICBuXG4gICAgLy8gcCwgMSwgMiwgMywgNSwgNiwgNywgOCAuLi4gMTAsIHwxMXwsIDEyICBuXG4gICAgLy8gcCwgMSwgMiAuLi4gMTEsIHwxMnwsIDEzLCAuLi4gNDMsIDQ0LCA0NSBuXG4gICAgLy8gcCwgMSAuLi4gMTEsIHwxMnwsIDEzIC4uLiA0NSBuXG5cbiAgICByZXR1cm4gY291bnQgPiAxICYmIChcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y3VycmVudCA+IDEgJiYgKFxuICAgICAgICAgIDxBcnJvdyB0bz17dGhpcy5iYWNrKCl9ID5cbiAgICAgICAgICAgIFByZXZcbiAgICAgICAgICA8L0Fycm93PlxuICAgICAgICApfSBcblxuICAgICAgICA8TGlzdCByZWY9e3RoaXMuY29udGFpbmVyfT5cbiAgICAgICAgICB7cGFnZXMubWFwKChudW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8SXRlbSBrZXk9eydlbXB0eV8nICsgaW5kZXh9PlxuICAgICAgICAgICAgICB7bnVtID8gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt0aGlzLmdldFRvKG51bSl9IGV4YWN0PXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgIHtudW19XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxFbXB0eT4uLi48L0VtcHR5PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAge2N1cnJlbnQgPCBjb3VudCAmJiAoXG4gICAgICAgICAgPEFycm93IHRvPXt0aGlzLmZvcnZhcmQoKX0+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBVUE7QUFUQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUlBO0FBU0E7QUFJQTtBQU9BO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUF1QkE7QUF0QkE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFBQTtBQUFBOztBQWlCQTtBQWhCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQSxpQkFJQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQVNBO0FBUkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBV0E7QUFWQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBVUE7QUFUQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUVBO0FBS0E7QUFJQTtBQUtBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBRUE7QUFBQTtBQUFBOztBQXNEQTtBQXJEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBRUE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUVBO0FBU0E7Ozs7OztBQUVBO0FBRUE7O0FBQUE7QUFFQTs7OztBQUVBOzs7OztBQUVBO0FBRUE7Ozs7OztBQUVBO0FBSUE7O0FBRkE7QUFJQTs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsT0FHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlCQVlBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE0Q0E7QUExQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUVBO0FBTUE7QUFXQTtBQU1BO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBZUE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBRUE7QUFDQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBOztBQXlIQTtBQXJJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBY0E7QUFPQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
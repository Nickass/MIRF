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
/******/ 	__webpack_require__.h = "2bc8a93029f122c1e1b1";
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
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/Header/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var className = this.props.className;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", { className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'Header') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Hi! I am main header!"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/translator/1" }, "go to translator")));
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./App/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./App/Footer/index.tsx");
/* harmony import */ var _pages_Translator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Translator */ "./App/pages/Translator/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "App__header" }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/translator/:id", component: _pages_Translator__WEBPACK_IMPORTED_MODULE_4__["default"] })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "App__footer" })));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


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

/***/ "./App/pages/Translator/actions.tsx":
/*!******************************************!*\
  !*** ./App/pages/Translator/actions.tsx ***!
  \******************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./App/pages/Translator/constants.tsx");

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

/***/ "./App/pages/Translator/assets/styles.scss":
/*!*************************************************!*\
  !*** ./App/pages/Translator/assets/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./App/pages/Translator/index.tsx":
/*!****************************************!*\
  !*** ./App/pages/Translator/index.tsx ***!
  \****************************************/
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
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ "./App/pages/Translator/saga.tsx");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./App/pages/Translator/selectors.tsx");
/* harmony import */ var App_pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/pages/Settings/selectors */ "./App/pages/Settings/selectors.tsx");
/* harmony import */ var App_widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/widgets/Pagination */ "./App/widgets/Pagination/index.tsx");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles.scss */ "./App/pages/Translator/assets/styles.scss");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
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
var Translator = /** @class */ (function (_super) {
    __extends(Translator, _super);
    function Translator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Translator.prototype.componentDidMount = function () {
        var _a = this.props, dispatch = _a.dispatch, wordsPerPage = _a.wordsPerPage, id = _a.match.params.id;
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchInfo"])(dispatch);
    };
    Translator.prototype.componentDidUpdate = function (prevProps) {
        var dispatch = prevProps.dispatch, wordsPerPage = prevProps.wordsPerPage, id = prevProps.match.params.id;
        if (id !== this.props.match.params.id) {
            Object(_saga__WEBPACK_IMPORTED_MODULE_4__["fetchWords"])(dispatch, wordsPerPage, id * wordsPerPage);
        }
    };
    Translator.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.words, words = _b === void 0 ? [] : _b, countWords = _a.countWords;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3__(className, 'Translator') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", { className: "Translator__title" }, "Translator player"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "Translator__table" },
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App_widgets_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "Translator__pagination", count: countWords, path: "/translator" })));
    };
    return Translator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({
    words: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectWords"],
    wordsPerPage: App_pages_Settings_selectors__WEBPACK_IMPORTED_MODULE_6__["selectWordsPerPage"],
    countWords: _selectors__WEBPACK_IMPORTED_MODULE_5__["selectCountWords"],
}))(Translator));


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

/***/ "./App/pages/Translator/saga.tsx":
/*!***************************************!*\
  !*** ./App/pages/Translator/saga.tsx ***!
  \***************************************/
/*! exports provided: fetchWords, fetchInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWords", function() { return fetchWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInfo", function() { return fetchInfo; });
/* harmony import */ var model_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model/words */ "./model/words/index.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./App/pages/Translator/actions.tsx");
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

/***/ "./App/pages/Translator/selectors.tsx":
/*!********************************************!*\
  !*** ./App/pages/Translator/selectors.tsx ***!
  \********************************************/
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
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pagination" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, 'pagination') }, (new Array(count)).fill('').map(function (v, num) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "pagination__item", key: (num + 1) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "pagination__link", activeClassName: "pagination__link--active", to: path + '/' + (num + 1), exact: true }, (num + 1)))); }))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store */ "./store/index.tsx");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! normalize.css/normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/base */ "./assets/base.scss");
/* harmony import */ var assets_base__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_base__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! App */ "./App/index.tsx");
/* harmony import */ var assets_atomic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/atomic */ "./assets/atomic.scss");
/* harmony import */ var assets_atomic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_atomic__WEBPACK_IMPORTED_MODULE_10__);
// modules







// assets


// custom

// assets

var _a = Object(store__WEBPACK_IMPORTED_MODULE_6__["default"])(), store = _a[0], history = _a[1];
function main(Root) {
    if (Root === void 0) { Root = App__WEBPACK_IMPORTED_MODULE_9__["default"]; }
    var root = document.getElementById('app-root');
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: store },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](connected_react_router__WEBPACK_IMPORTED_MODULE_4__["ConnectedRouter"], { history: history },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], { path: "/", component: Root }))))), root);
}
if (!store__WEBPACK_IMPORTED_MODULE_6__["isServer"]) {
    if (false) {}
    main(App__WEBPACK_IMPORTED_MODULE_9__["default"]);
}
/* harmony default export */ __webpack_exports__["default"] = ({ App: App__WEBPACK_IMPORTED_MODULE_9__["default"], configureStore: store__WEBPACK_IMPORTED_MODULE_6__["default"] });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL0FwcC9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL0FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL2NvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1NldHRpbmdzL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9wYWdlcy9TZXR0aW5ncy9zZWxlY3RvcnMudHN4Iiwid2VicGFjazovLy8uL0FwcC9wYWdlcy9TZXR0aW5ncy9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1RyYW5zbGF0b3IvYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1RyYW5zbGF0b3IvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvVHJhbnNsYXRvci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1RyYW5zbGF0b3IvcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1RyYW5zbGF0b3Ivc2FnYS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3BhZ2VzL1RyYW5zbGF0b3Ivc2VsZWN0b3JzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcGFnZXMvVHJhbnNsYXRvci9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3dpZGdldHMvUGFnaW5hdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2RlbC93b3Jkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC1sb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gXCIyYmM4YTkzMDI5ZjEyMmMxZTFiMVwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfY2h1bmtuYW1lX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uY24gPSBcIm1haW5cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5pbnRlcmZhY2UgRm9vdGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBhbnk7XG59O1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9vdGVyUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnRm9vdGVyJyl9PlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IE5pa29sYXkgTmF6YXJpc2hpbi4gMjAxOTwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGN1c3RvbVxuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBhbnk7XG59O1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SGVhZGVyUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnSGVhZGVyJyl9PlxuICAgICAgICA8aDE+SGkhIEkgYW0gbWFpbiBoZWFkZXIhPC9oMT5cbiAgICAgICAgPExpbmsgdG89XCIvdHJhbnNsYXRvci8xXCI+Z28gdG8gdHJhbnNsYXRvcjwvTGluaz5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiZXhwb3J0IGNvbnN0IEFQUF9JTklURUQgPSAnQVBQX0lOSVRFRCc7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tICcuL3BhZ2VzL1RyYW5zbGF0b3InO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcFByb3BzPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiQXBwX19oZWFkZXJcIiAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3RyYW5zbGF0b3IvOmlkXCIgY29tcG9uZW50PXtUcmFuc2xhdG9yfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgey8qIDxUcmFuc2xhdG9yIGNsYXNzTmFtZT1cIkFwcF9fY2VudGVyXCIgLz4gKi99XG4gICAgICAgIDxGb290ZXIgY2xhc3NOYW1lPVwiQXBwX19mb290ZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJleHBvcnQgY29uc3QgU0VUVElOR1NfUkVRVUVTVCA9ICdTRVRUSU5HU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19VUERBVEUgID0gJ1NFVFRJTkdTX1VQREFURSc7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfU1VDQ0VTUyA9ICdTRVRUSU5HU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19GQUlMVVJFID0gJ1NFVFRJTkdTX0ZBSUxVUkUnO1xuIiwiLy8gbW9kdWxlc1xuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcblxuLy8gY3VzdG9tXG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XG5pbXBvcnQgeyBTRVRUSU5HU19SRVFVRVNULCBTRVRUSU5HU19VUERBVEUsIFNFVFRJTkdTX1NVQ0NFU1MsIFNFVFRJTkdTX0ZBSUxVUkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8aW5pdGFsU3RhdGUsIGFjdGlvbj47XG5cbmNvbnN0IHJlZHVjZXI6IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUVElOR1NfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgIH1cblxuICAgIGNhc2UgU0VUVElOR1NfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzZXR0aW5nczogYWN0aW9uLnBheWxvYWR9XG4gICAgfVxuXG4gICAgY2FzZSBTRVRUSU5HU19VUERBVEU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICB9XG5cbiAgICBjYXNlIFNFVFRJTkdTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1NlbGVjdG9yID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNldHRpbmdzO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0V29yZHNQZXJQYWdlID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNldHRpbmdzU2VsZWN0b3IsXG4gIHNldHRpbmdzID0+IHNldHRpbmdzLndvcmRzUGVyUGFnZVxuKTsiLCJpbnRlcmZhY2UgaW5pdGlhbFN0YXRlIHtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSA9IHtcbiAgd29yZHNQZXJQYWdlOiAxMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZTsiLCJpbXBvcnQge1xuICBXT1JEU19SRVFVRVNULFxuICBXT1JEU19TVUNDRVNTLFxuICBXT1JEU19GQUlMVVJFLFxuXG4gIElORk9fV09SRFNfUkVRVUVTVCxcbiAgSU5GT19XT1JEU19TVUNDRVNTLFxuICBJTkZPX1dPUkRTX0ZBSUxVUkVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0V29yZHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfUkVRVUVTVFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZVdvcmRzID0gKHdvcmRzOiBBcnJheTx7IGVuOiBzdHJpbmc7IHJ1OiBzdHJpbmc7IH0+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB3b3Jkc1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmFpbFdvcmRzID0gKGVycjogYW55KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSU5GT19XT1JEU19SRVFVRVNUXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlSW5mbyA9IChpbmZvOiB7IGNvdW50V29yZHM6IG51bWJlcjsgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiBpbmZvXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmYWlsSW5mbyA9IChlcnI6IGFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElORk9fV09SRFNfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBXT1JEU19SRVFVRVNUID0gJ1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFdPUkRTX1NVQ0NFU1MgPSAnV09SRFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgV09SRFNfRkFJTFVSRSA9ICdXT1JEU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfUkVRVUVTVCA9ICdJTkZPX1dPUkRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfU1VDQ0VTUyA9ICdJTkZPX1dPUkRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfRkFJTFVSRSA9ICdJTkZPX1dPUkRTX0ZBSUxVUkUnOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgKiBhcyBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gY3VzdG9tXG5pbXBvcnQgeyBmZXRjaFdvcmRzLCBmZXRjaEluZm8gfSBmcm9tICcuL3NhZ2EnO1xuaW1wb3J0IHsgc2VsZWN0V29yZHMsIHNlbGVjdENvdW50V29yZHMgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZWxlY3RXb3Jkc1BlclBhZ2UgfSBmcm9tICdBcHAvcGFnZXMvU2V0dGluZ3Mvc2VsZWN0b3JzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ0FwcC93aWRnZXRzL1BhZ2luYXRpb24nO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzLnNjc3MnO1xuXG5pbnRlcmZhY2UgVHJhbnNsYXRvclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB3b3JkczogQXJyYXk8e2VuOiBzdHJpbmc7IHJ1OiBzdHJpbmd9PjtcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XG4gIGNvdW50V29yZHM6IG51bWJlcjtcbiAgZGlzcGF0Y2g6IGFueTtcbiAgbWF0Y2g6IGFueTtcbn07XG5cbmNsYXNzIFRyYW5zbGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VHJhbnNsYXRvclByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBcbiAgICBmZXRjaFdvcmRzKGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIGlkICogd29yZHNQZXJQYWdlKTtcbiAgICBmZXRjaEluZm8oZGlzcGF0Y2gpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBhbnkpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCB3b3Jkc1BlclBhZ2UsIG1hdGNoOiB7IHBhcmFtczogeyBpZCB9IH0gfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChpZCAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIGZldGNoV29yZHMoZGlzcGF0Y2gsIHdvcmRzUGVyUGFnZSwgaWQgKiB3b3Jkc1BlclBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHdvcmRzID0gW10sIGNvdW50V29yZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjbGFzc05hbWUsICdUcmFuc2xhdG9yJyl9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiVHJhbnNsYXRvcl9fdGl0bGVcIj5UcmFuc2xhdG9yIHBsYXllcjwvaDI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJUcmFuc2xhdG9yX190YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkVOPC90aD5cbiAgICAgICAgICAgICAgPHRoPlJVPC90aD5cbiAgICAgICAgICAgICAgPHRoPktub3c8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt3b3Jkcy5tYXAoKHtlbiwgcnV9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2VuICsgcnUgKyBpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2VufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntydX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxQYWdpbmF0aW9uIGNsYXNzTmFtZT1cIlRyYW5zbGF0b3JfX3BhZ2luYXRpb25cIiBjb3VudD17Y291bnRXb3Jkc30gcGF0aD1cIi90cmFuc2xhdG9yXCIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgd29yZHM6IHNlbGVjdFdvcmRzLFxuICB3b3Jkc1BlclBhZ2U6IHNlbGVjdFdvcmRzUGVyUGFnZSxcbiAgY291bnRXb3Jkczogc2VsZWN0Q291bnRXb3Jkcyxcbn0pKShUcmFuc2xhdG9yKTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCB7XG4gIFdPUkRTX1JFUVVFU1QsXG4gIFdPUkRTX1NVQ0NFU1MsXG4gIFdPUkRTX0ZBSUxVUkUsXG5cbiAgSU5GT19XT1JEU19SRVFVRVNULFxuICBJTkZPX1dPUkRTX1NVQ0NFU1MsXG4gIElORk9fV09SRFNfRkFJTFVSRVxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcblxuY29uc3QgcmVkdWNlcjogcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBXT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBXT1JEU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cbiAgICB9XG5cbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG5cblxuICAgIGNhc2UgSU5GT19XT1JEU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgfVxuXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgY291bnRXb3JkczogYWN0aW9uLnBheWxvYWQuY291bnRXb3Jkc31cbiAgICB9XG5cbiAgICBjYXNlIElORk9fV09SRFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgKiBhcyBiYWNrZW5kIGZyb20gJ21vZGVsL3dvcmRzJztcblxuaW1wb3J0IHtcbiAgZ2V0V29yZHMsXG4gIHJlY2VpdmVXb3JkcyxcbiAgZmFpbFdvcmRzLFxuICBnZXRJbmZvLFxuICByZWNlaXZlSW5mbyxcbiAgZmFpbEluZm9cbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGZldGNoV29yZHMgPSBhc3luYyAoZGlzcGF0Y2g6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRXb3JkcygpKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZXMgPSBhd2FpdCBiYWNrZW5kLmdldFRyYW5zbGF0ZXMobGltaXQsIG9mZnNldCk7XG5cbiAgICBkaXNwYXRjaChyZWNlaXZlV29yZHModHJhbnNsYXRlcykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2goZmFpbFdvcmRzKGUpKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbmZvID0gYXN5bmMgKGRpc3BhdGNoOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaChnZXRJbmZvKCkpO1xuXG4gICAgY29uc3QgZGF0YToge1xuICAgICAgY291bnRXb3JkczogbnVtYmVyO1xuICAgIH0gPSBhd2FpdCBiYWNrZW5kLmdldEluZm8oKTtcblxuICAgIGRpc3BhdGNoKHJlY2VpdmVJbmZvKGRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGRpc3BhdGNoKGZhaWxJbmZvKGUpKVxuICB9XG59OyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3Qgd29yZHNTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZS50cmFuc2xhdG9yO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0V29yZHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgd29yZHNTZWxlY3RvcixcbiAgdHJhbnNsYXRvciA9PiB0cmFuc2xhdG9yLndvcmRzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q291bnRXb3JkcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICB3b3Jkc1NlbGVjdG9yLFxuICB0cmFuc2xhdG9yID0+IHRyYW5zbGF0b3IuY291bnRXb3Jkc1xuKTsiLCJpbnRlcmZhY2UgdHJhbnNsYXRvclN0YXRlIHtcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xuICBjb3VudFdvcmRzOiBudW1iZXI7XG59O1xuXG5jb25zdCB0cmFuc2xhdG9yU3RhdGU6IHRyYW5zbGF0b3JTdGF0ZSA9IHtcbiAgd29yZHM6IFtcbiAgICB7XG4gICAgICBlbjogJ25vdGhpbmdhJyxcbiAgICAgIHJ1OiAn0L3QuNGH0LXQs9C+J1xuICAgIH1cbiAgXSxcbiAgY291bnRXb3JkczogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0b3JTdGF0ZTsiLCIvLyBtb2R1bGVzXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xuXG4vLyBjdXN0b21cbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcbmltcG9ydCBpbml0YWxTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFQUF9JTklURUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8dHlwZW9mIGluaXRhbFN0YXRlLCBhY3Rpb24+O1xuXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFQUF9JTklURUQ6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbml0ZWQ6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiY29uc3QgYXBwU3RhdGUgPSB7XG4gIGFwcEluaXRlZDogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwU3RhdGU7IiwiLy8gbW9kdWxlc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayBhcyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgKiBhcyBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gYXNzZXRzXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIFBhZ2luYXRpb25Qcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xufTtcblxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQYWdpbmF0aW9uUHJvcHM+IHtcbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgeyBjbGFzc05hbWUsIHBhdGgsIGNvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvdW50ID0gY291bnQgPiAxMCA/IDEwIDogY291bnQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NuKGNsYXNzTmFtZSwgJ3BhZ2luYXRpb24nKX0+XG4gICAgICAgICAgeyhuZXcgQXJyYXkoY291bnQpKS5maWxsKCcnKS5tYXAoKHYsIG51bSkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2l0ZW1cIiBrZXk9eyhudW0gKyAxKX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fbGlua1wiXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fbGluay0tYWN0aXZlXCJcbiAgICAgICAgICAgICAgICB0bz17cGF0aCArICcvJyArIChudW0gKyAxKX1cbiAgICAgICAgICAgICAgICBleGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsobnVtICsgMSl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsIi8vIG1vZHVsZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHsgaXNTZXJ2ZXIgfSBmcm9tICdzdG9yZSc7XG5cbi8vIGFzc2V0c1xuaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICdhc3NldHMvYmFzZSc7XG5cbi8vIGN1c3RvbVxuaW1wb3J0IEFwcCBmcm9tICdBcHAnO1xuXG4vLyBhc3NldHNcbmltcG9ydCAnYXNzZXRzL2F0b21pYyc7XG5cblxuY29uc3QgW3N0b3JlLCBoaXN0b3J5XSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbmZ1bmN0aW9uIG1haW4oUm9vdCA9IEFwcCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1yb290Jyk7XG5cbiAgcmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtSb290fSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9BcHBDb250YWluZXI+LFxuICAgIHJvb3RcbiAgKTtcbn1cblxuaWYgKCFpc1NlcnZlcikge1xuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCdBcHAnLCAoKSA9PiB7XG4gICAgICBtYWluKHJlcXVpcmUoJ0FwcCcpLmRlZmF1bHQpXG4gICAgfSk7XG4gIH1cblxuICBtYWluKEFwcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgQXBwLCBjb25maWd1cmVTdG9yZSB9OyIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNsYXRlcyA9IGFzeW5jIChsaW1pdCA9IDE1LCBvZmZzZXQgPSAwKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvZW4udHh0Jyk7XG4gIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJ1xcbicpLm1hcChwYWlyID0+IHBhaXIuc3BsaXQoJyAnKVswXSk7XG4gIGNvbnN0IHBhcnRPZldvcmRzID0gd29yZHMuc2xpY2Uob2Zmc2V0LCAgb2Zmc2V0ICsgbGltaXQpO1xuICBjb25zdCB0cmFuc2xhdGVzID0gcGFydE9mV29yZHMubWFwKHdvcmQgPT4gKHtlbjogd29yZCwgcnU6ICcnfSkpO1xuXG4gIHJldHVybiB0cmFuc2xhdGVzO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SW5mbyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9lbi50eHQnKTtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnXFxuJykubWFwKHBhaXIgPT4gcGFpci5zcGxpdCgnICcpWzBdKTtcbiAgXG4gIHJldHVybiB7XG4gICAgY291bnRXb3Jkczogd29yZHMubGVuZ3RoXG4gIH07XG59IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIFJlYWN0ICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNsaWVudCBmcm9tICdjbGllbnQnOyAvLyB3aWxsIGNoYW5nZWQgdG8gcmVxdWlyZSgnLi9zdGF0aWMvY2xpZW50LmpzJykgaW4gcHJvZFxuXG5sZXQgY2xpZW50TmFtZTogc3RyaW5nLCBhc3NldFVybDogc3RyaW5nO1xuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBhc3NldFVybCA9IGBodHRwOi8vJHtwcm9jZXNzLmVudi5ITVJfU0VSVkVSX0hPU1R9OiR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9QT1JUfS9gO1xuICBjbGllbnROYW1lID0gYGNsaWVudC5qc2A7XG59IGVsc2UgeyAvLyBpZiBwcm9kIHdpbGwgYmUgcmVxdWlyZSBmcm9tIGNsaWVudCBidW5kbGVcbiAgYXNzZXRVcmwgPSAnLyc7XG4gIGNsaWVudE5hbWUgPSBgY2xpZW50LSR7X193ZWJwYWNrX2hhc2hfX30uanNgO1xufSBcblxuY29uc3QgU2VydmVyID0gZXhwcmVzcygpO1xuY29uc3QgUmVhY3RBcHAgPSBjbGllbnQuQXBwO1xubGV0IFtzdG9yZV0gPSBjbGllbnQuY29uZmlndXJlU3RvcmUoKTtcblxuXG5TZXJ2ZXIudXNlKGAvc3RhdGljYCwgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgYC9zdGF0aWMvYCkpKTtcblNlcnZlci51c2UoYC9zdGF0aWMvJHtjbGllbnROYW1lfWAsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIGAvc3RhdGljL2NsaWVudC5qc2ApKSk7XG5TZXJ2ZXIucG9zdChgL1VQREFURV9TVE9SRWAsIGJvZHlQYXJzZXIuanNvbigpLCAocmVxLCByZXMpID0+IHtcbiAgW3N0b3JlXSA9IGNsaWVudC5jb25maWd1cmVTdG9yZShyZXEuYm9keS5SRURVWF9TVEFURSk7IC8vIEFERCBDSEVDSyBcbiAgcmVzLnJlZGlyZWN0KDMwMiwgJ2JhY2snKTtcbn0pO1xuU2VydmVyLnVzZShmdW5jdGlvbihyZXEsIHJlcykge1xuICBsZXQgY29udGV4dCA9IHt9O1xuXG4gIGxldCBzZXJ2ZXJQcm92aWRlciA9IChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxuICAgICAgICA8UmVhY3RBcHAgLz5cbiAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+KTtcblxuICByZXR1cm4gcmVzLmVuZChyZW5kZXJIVE1MKFJlYWN0RG9tLnJlbmRlclRvU3RyaW5nKHNlcnZlclByb3ZpZGVyKSkpO1xufSk7XG5TZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULCAoKT0+Y29uc29sZS5sb2coJ1NlcnZlciBpcyBydW5pbmchJykpO1xuXG5jb25zb2xlLmxvZygncHJvY2Vzcy5lbnYuUE9SVCcsIHByb2Nlc3MuZW52LlNFUlZFUl9QT1JUKVxuZnVuY3Rpb24gcmVuZGVySFRNTChhcHBDb250ZW50OiBhbnkpIHtcbiAgcmV0dXJuIGBcbiAgPCFET0NUWVBFIGh0bWw+XG4gIDxodG1sIGxhbmc9XCJlblwiPiBcbiAgICA8aGVhZD4gXG4gICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiPlxuICAgICAgPHRpdGxlPldIRU4gSSBETyBMRUFSTiBSRUFDVCBJIENSQVpaWTwvdGl0bGU+XG4gICAgICA8c2NyaXB0PndpbmRvdy5SRURVWF9TVEFURSA9ICR7SlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSl9PC9zY3JpcHQ+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgPGRpdiBpZD1cImFwcC1yb290XCI+JHthcHBDb250ZW50fTwvZGl2PlxuICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIHNyYz1cIiR7YXNzZXRVcmx9c3RhdGljLyR7Y2xpZW50TmFtZX1cIj48L3NjcmlwdD5cbiAgICA8L2JvZHk+XG4gIDwvaHRtbD5cbiAgYDtcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIFJlZHVjZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IGNvbm5lY3RSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IGFwcFN0YXRlIGZyb20gJ0FwcC9zdGF0ZSc7XG5pbXBvcnQgYXBwUmVkdWNlciBmcm9tICdBcHAvcmVkdWNlcic7XG5pbXBvcnQgc2V0dGluZ3NTdGF0ZSBmcm9tICdBcHAvcGFnZXMvU2V0dGluZ3Mvc3RhdGUnO1xuaW1wb3J0IHNldHRpbmdzUmVkdWNlciBmcm9tICdBcHAvcGFnZXMvU2V0dGluZ3MvcmVkdWNlcic7XG5pbXBvcnQgdHJhbnNsYXRvclN0YXRlIGZyb20gJ0FwcC9wYWdlcy9UcmFuc2xhdG9yL3N0YXRlJztcbmltcG9ydCB0cmFuc2xhdG9yUmVkdWNlciBmcm9tICdBcHAvcGFnZXMvVHJhbnNsYXRvci9yZWR1Y2VyJztcblxuXG5leHBvcnQgdHlwZSBhY3Rpb24gPSB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueTsgfTtcbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9ICEoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHJvdXRlcjoge30sXG4gIGFwcDogYXBwU3RhdGUsXG4gIHNldHRpbmdzOiBzZXR0aW5nc1N0YXRlLFxuICB0cmFuc2xhdG9yOiB0cmFuc2xhdG9yU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgdXJsID0gJy8nKTogW1N0b3JlLCBIaXN0b3J5XSB7XG4gIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSAhaXNTZXJ2ZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogY29tcG9zZTtcbiAgY29uc3QgaGlzdG9yeSA9ICFpc1NlcnZlciA/IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICBpbml0aWFsRW50cmllczogWycvJ11cbiAgfSk7XG4gIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUocm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSkpO1xuICBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vyczx0eXBlb2YgaW5pdGlhbFN0YXRlPih7XG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpIGFzIGFueSxcbiAgICBhcHA6IGFwcFJlZHVjZXIsXG4gICAgc2V0dGluZ3M6IHNldHRpbmdzUmVkdWNlcixcbiAgICB0cmFuc2xhdG9yOiB0cmFuc2xhdG9yUmVkdWNlclxuICB9KTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZTx0eXBlb2YgaW5pdGlhbFN0YXRlLCBhY3Rpb24sIGFueSwgYW55Pihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cbiAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnQXBwL3JlZHVjZXInLCAoKSA9PiB7XG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihhcHBSZWR1Y2VyKVxuICAgIH0pO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcC9wYWdlcy9TZXR0aW5ncy9yZWR1Y2VyJywgKCkgPT4ge1xuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoc2V0dGluZ3NSZWR1Y2VyKVxuICAgIH0pO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcC9wYWdlcy9UcmFuc2xhdG9yL3JlZHVjZXInLCAoKSA9PiB7XG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcih0cmFuc2xhdG9yUmVkdWNlcilcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbc3RvcmUsIGhpc3RvcnldO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFVQTtBQVRBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFXQTtBQVZBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7O0FBYUE7QUFaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFFQTtBQUFBO0FBQUE7O0FBOENBO0FBN0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBRUE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUVBO0FBU0E7Ozs7OztBQUVBO0FBRUE7O0FBQUE7QUFFQTs7OztBQUVBOzs7OztBQUVBO0FBRUE7Ozs7OztBQUVBO0FBSUE7O0FBRkE7QUFJQTs7OztBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFBQTtBQUFBOztBQXlCQTtBQXhCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFjQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBLGlCQUlBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFFQTtBQUFBO0FBQUE7Ozs7O0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTs7OztBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLE9BR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBZUE7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUJBWUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
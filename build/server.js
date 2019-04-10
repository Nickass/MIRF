/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = "595f08f100811ac28534";
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

/***/ "../node_modules/exenv/index.js":
/*!**************************************!*\
  !*** ../node_modules/exenv/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-helmet/lib/Helmet.js":
/*!**************************************************!*\
  !*** ../node_modules/react-helmet/lib/Helmet.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "../node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(/*! deep-equal */ "deep-equal");

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "../node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "../node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "../node_modules/react-helmet/lib/HelmetConstants.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-helmet/lib/HelmetConstants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "../node_modules/react-helmet/lib/HelmetUtils.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-helmet/lib/HelmetUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "../node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;

/***/ }),

/***/ "../node_modules/react-side-effect/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/react-side-effect/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(/*! exenv */ "../node_modules/exenv/index.js"));
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "shallowequal"));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


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
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // modules



 // custom
// assets


;

var Footer =
/** @class */
function (_super) {
  __extends(Footer, _super);

  function Footer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Footer.prototype.render = function () {
    var className = this.props.className;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, 'Footer')
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Created by Nikolay Nazarishin. 2019"));
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

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
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // modules


 // system

 // custom
// assets


var nav = [{
  to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].words.root(''),
  name: 'Words'
}, {
  to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].settings.root(),
  name: 'Settings'
}];
;

var default_1 =
/** @class */
function (_super) {
  __extends(default_1, _super);

  function default_1() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  default_1.prototype.render = function () {
    var className = this.props.className;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
      to: system_book__WEBPACK_IMPORTED_MODULE_1__["default"].home.root()
    }, "Hi! Welcome to english cards!1vv"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavList"], null, nav.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        key: item.name
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        to: item.to
      }, item.name));
    }))));
  };

  return default_1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (default_1);

/***/ }),

/***/ "./App/assets/styles.tsx":
/*!*******************************!*\
  !*** ./App/assets/styles.tsx ***!
  \*******************************/
/*! exports provided: Container, Header, centerStyle, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerStyle", function() { return centerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./App/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./App/Footer/index.tsx");
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};




var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  text-align: center;\n"])));
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 50px 0;\n  background: #eaeaea;\n"], ["\n  padding: 50px 0;\n  background: #eaeaea;\n"])));
var centerStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 900px;\n  margin: auto;\n"], ["\n  width: 100%;\n  max-width: 900px;\n  margin: auto;\n"])));
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
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var system_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! system/book */ "./system/book.tsx");
/* harmony import */ var widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! widgets/ErrorBoundary */ "./widgets/ErrorBoundary/index.tsx");
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles */ "./App/assets/styles.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // modules





 // system

 // custom

var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  chunkName() {
    return "pages-Home";
  },

  isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },

  requireAsync: function () {
    return __webpack_require__.e(/*! import() | pages-Home */ "pages-Home").then(__webpack_require__.bind(null, /*! pages/Home */ "./pages/Home/index.tsx"));
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! pages/Home */ "./pages/Home/index.tsx");
    }

    return __webpack_require__(/*! path */ "path").resolve(__dirname, "pages/Home");
  }

});
var Settings = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  chunkName() {
    return "pages-Settings";
  },

  isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },

  requireAsync: function () {
    return __webpack_require__.e(/*! import() | pages-Settings */ "pages-Settings").then(__webpack_require__.bind(null, /*! pages/Settings */ "./pages/Settings/index.tsx"));
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! pages/Settings */ "./pages/Settings/index.tsx");
    }

    return __webpack_require__(/*! path */ "path").resolve(__dirname, "pages/Settings");
  }

});
var Words = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  chunkName() {
    return "pages-Words";
  },

  isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },

  requireAsync: function () {
    return __webpack_require__.e(/*! import() | pages-Words */ "pages-Words").then(__webpack_require__.bind(null, /*! pages/Words */ "./pages/Words/index.tsx"));
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! pages/Words */ "./pages/Words/index.tsx");
    }

    return __webpack_require__(/*! path */ "path").resolve(__dirname, "pages/Words");
  }

});
var NotFound = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({
  chunkName() {
    return "pages-NotFound";
  },

  isReady(props) {
    if (true) {
      return !!__webpack_require__.m[this.resolve(props)];
    }

    return false;
  },

  requireAsync: function () {
    return __webpack_require__.e(/*! import() | pages-NotFound */ "pages-NotFound").then(__webpack_require__.bind(null, /*! pages/NotFound */ "./pages/NotFound/index.tsx"));
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! pages/NotFound */ "./pages/NotFound/index.tsx");
    }

    return __webpack_require__(/*! path */ "path").resolve(__dirname, "pages/NotFound");
  }

});
 // assets



var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
      titleTemplate: "MySite.com - %s"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("html", {
      lang: "en"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Hello!")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_6__["Header"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](widgets_ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      from: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].words.root(''),
      to: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].words.root(1),
      exact: true
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].home.root(),
      component: Home,
      exact: true
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].words.root(),
      component: Words
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: system_book__WEBPACK_IMPORTED_MODULE_4__["default"].settings.root(),
      component: Settings
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      component: NotFound
    }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_6__["Footer"], null));
  };

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var reducer = function (state, action) {
  if (state === void 0) {
    state = _state__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["APP_INITED"]:
      {
        return __assign({}, state, {
          inited: action.payload
        });
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



function main(Root) {
  if (Root === void 0) {
    Root = App__WEBPACK_IMPORTED_MODULE_8__["default"];
  }

  var store = Object(store__WEBPACK_IMPORTED_MODULE_5__["default"])(window.REDUX_STATE);
  var root = document.getElementById('app-root');
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](connected_react_router__WEBPACK_IMPORTED_MODULE_4__["ConnectedRouter"], {
    history: store__WEBPACK_IMPORTED_MODULE_5__["history"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, null)))), root);
}

if (!store__WEBPACK_IMPORTED_MODULE_5__["isServer"]) {
  if (false) {}

  main(App__WEBPACK_IMPORTED_MODULE_8__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  App: App__WEBPACK_IMPORTED_MODULE_8__["default"],
  configureStore: store__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./model/words/back.tsx":
/*!******************************!*\
  !*** ./model/words/back.tsx ***!
  \******************************/
/*! exports provided: getTranslates, getInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslates", function() { return getTranslates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = undefined;


var getTranslates = function (limit, offset) {
  if (limit === void 0) {
    limit = 15;
  }

  if (offset === void 0) {
    offset = 0;
  }

  return __awaiter(_this, void 0, void 0, function () {
    var res, text, words, partOfWords, translates, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fs_extra__WEBPACK_IMPORTED_MODULE_0__["readFile"]("./public/en.txt")];

        case 1:
          res = _a.sent();
          return [4
          /*yield*/
          , res.toString()];

        case 2:
          text = _a.sent();
          words = text.split('\n').map(function (pair) {
            return pair.split(' ')[0];
          });
          partOfWords = words.slice(offset, offset + limit);
          translates = partOfWords.map(function (word) {
            return {
              en: word,
              ru: ''
            };
          });
          return [2
          /*return*/
          , translates];

        case 3:
          e_1 = _a.sent();
          console.error(e_1);
          return [2
          /*return*/
          , []];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};
var getInfo = function () {
  return __awaiter(_this, void 0, void 0, function () {
    var res, text, words, e_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fs_extra__WEBPACK_IMPORTED_MODULE_0__["readFile"]("./public/en.txt")];

        case 1:
          res = _a.sent();
          return [4
          /*yield*/
          , res.toString()];

        case 2:
          text = _a.sent();
          words = text.split('\n').map(function (pair) {
            return pair.split(' ')[0];
          });
          return [2
          /*return*/
          , {
            countWords: words.length
          }];

        case 3:
          e_2 = _a.sent();
          console.error(e_2);
          return [2
          /*return*/
          , {
            countWords: 0
          }];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
}; // custom





var reducer = function (state, action) {
  if (state === void 0) {
    state = _state__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_REQUEST"]:
      {
        return __assign({}, state, {
          loading: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_SUCCESS"]:
      {
        return __assign({}, state, {
          loading: false,
          settings: action.payload
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_UPDATE"]:
      {
        return __assign({}, state, {
          loading: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_FAILURE"]:
      {
        return __assign({}, state, {
          loading: false,
          error: action.payload
        });
      }
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
  wordsPerPage: 10
};
/* harmony default export */ __webpack_exports__["default"] = (initialState);

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
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
}; // custom





var reducer = function (state, action) {
  if (state === void 0) {
    state = _state__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_REQUEST"]:
      {
        return __assign({}, state, {
          loading: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_SUCCESS"]:
      {
        return __assign({}, state, {
          loading: false,
          words: action.payload
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["WORDS_FAILURE"]:
      {
        return __assign({}, state, {
          loading: false,
          error: action.payload
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_REQUEST"]:
      {
        return __assign({}, state, {
          loading: true
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_SUCCESS"]:
      {
        return __assign({}, state, {
          loading: false,
          countWords: action.payload.countWords
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["INFO_WORDS_FAILURE"]:
      {
        return __assign({}, state, {
          loading: false,
          error: action.payload
        });
      }
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
  countWords: 0
};
/* harmony default export */ __webpack_exports__["default"] = (wordsState);

/***/ }),

/***/ "./routing/back.tsx":
/*!**************************!*\
  !*** ./routing/back.tsx ***!
  \**************************/
/*! exports provided: words, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "words", function() { return words; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var model_words_back__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/words/back */ "./model/words/back.tsx");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




var words = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])().get('/words/', function (req, res, next) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      res.redirect('/words/1');
      next();
      return [2
      /*return*/
      ];
    });
  });
}).get('/words/:id?', function (req, res, next) {
  return __awaiter(this, void 0, void 0, function () {
    var id, _a, _b, _c, _d, _e, _f;

    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          id = req.params.id;
          _b = (_a = req._reduxStore).dispatch;
          _c = {
            type: 'WORDS_SUCCESS'
          };
          return [4
          /*yield*/
          , Object(model_words_back__WEBPACK_IMPORTED_MODULE_1__["getTranslates"])(10, id * 10)];

        case 1:
          _b.apply(_a, [(_c.payload = _g.sent(), _c)]);

          _e = (_d = req._reduxStore).dispatch;
          _f = {
            type: 'INFO_WORDS_SUCCESS'
          };
          return [4
          /*yield*/
          , Object(model_words_back__WEBPACK_IMPORTED_MODULE_1__["getInfo"])()];

        case 2:
          _e.apply(_d, [(_f.payload = _g.sent(), _f)]);

          next();
          return [2
          /*return*/
          ];
      }
    });
  });
}).post('/words/*', body_parser__WEBPACK_IMPORTED_MODULE_2__["json"]()).post('/words/getTranslates', function (req, res, next) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _b = (_a = res).json;
          return [4
          /*yield*/
          , Object(model_words_back__WEBPACK_IMPORTED_MODULE_1__["getTranslates"])(req.body['limit'], req.body['offset'])];

        case 1:
          _b.apply(_a, [_c.sent()]);

          next();
          return [2
          /*return*/
          ];
      }
    });
  });
}).post('/words/getInfo', function (req, res, next) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _b = (_a = res).json;
          return [4
          /*yield*/
          , Object(model_words_back__WEBPACK_IMPORTED_MODULE_1__["getInfo"])()];

        case 1:
          _b.apply(_a, [_c.sent()]);

          next();
          return [2
          /*return*/
          ];
      }
    });
  });
});
/* harmony default export */ __webpack_exports__["default"] = ([words]);

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
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client */ "./client.tsx");
/* harmony import */ var routing_back__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! routing/back */ "./routing/back.tsx");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = undefined;











 // will changed to require('./public/client.js') in prod


var statsFile = path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, '../build/loadable-stats.json');
var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_7__["ChunkExtractor"]({
  statsFile: statsFile
});
var clientName, assetUrl, staticPath;

if (true) {
  staticPath = path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "../public/");
  assetUrl = "http://" + "localhost" + ":" + "8080" + "/";
  clientName = "client.js";
} else {}

var Server = express__WEBPACK_IMPORTED_MODULE_0__();
var ReactApp = client__WEBPACK_IMPORTED_MODULE_10__["default"].App;
Server.use("/favicon.ico", express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](staticPath, 'favicon.ico')));
Server.use("/public", express__WEBPACK_IMPORTED_MODULE_0__["static"](staticPath));
Server.use("/public/" + clientName, express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["join"](__dirname, "/public/client.js")));
Server.post("/UPDATE_STORE", body_parser__WEBPACK_IMPORTED_MODULE_4__["json"](), function (req, res) {
  // const store = client.configureStore(req.body.REDUX_STATE); // ADD CHECK 
  res.redirect(302, 'back');
});
Server.get('*', function (req, res, next) {
  return __awaiter(_this, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
      store = client__WEBPACK_IMPORTED_MODULE_10__["default"].configureStore();
      req._reduxStore = store;
      next();
      return [2
      /*return*/
      ];
    });
  });
});

for (var _i = 0, Routes_1 = routing_back__WEBPACK_IMPORTED_MODULE_11__["default"]; _i < Routes_1.length; _i++) {
  var Route = Routes_1[_i];
  Server.use(Route);
}

Server.get('*', function (req, res) {
  var store = req._reduxStore;
  var context = {};
  var serverProvider = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ReactApp, null)));

  try {
    var jsx = extractor.collectChunks(serverProvider);
    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__["ServerStyleSheet"]();
    var css = sheet.getStyleTags();
    var html = react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"](jsx);
    return res.end(renderHTML(html, css, store.getState()));
  } catch (e) {
    return res.end(renderHTML('Something went wrong on the server!<br />' + e.message));
  }
});
Server.listen("3000", function () {
  return console.log('Server is runing!');
});

function renderHTML(appContent, css, state) {
  if (css === void 0) {
    css = '';
  }

  if (state === void 0) {
    state = {};
  }

  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a.renderStatic();
  return "\n  <!DOCTYPE html>\n  <html " + helmet.htmlAttributes.toString() + "> \n    <head> \n      " + helmet.title.toString() + "\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width\" />\n      " + helmet.meta.toString() + "\n      " + helmet.link.toString() + "\n      " + css + "\n      <script>window.REDUX_STATE = " + JSON.stringify(state) + "</script>\n    </head>\n    <body " + helmet.bodyAttributes.toString() + ">\n      <div id=\"app-root\">" + appContent + "</div>\n      <script type=\"application/javascript\" src=\"" + assetUrl + "public/" + clientName + "\"></script>\n    </body>\n  </html>\n  ";
}

/***/ }),

/***/ "./store/index.tsx":
/*!*************************!*\
  !*** ./store/index.tsx ***!
  \*************************/
/*! exports provided: isServer, defaultState, history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
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









var isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var defaultState = {
  router: {},
  app: App_state__WEBPACK_IMPORTED_MODULE_3__["default"],
  settings: pages_Settings_state__WEBPACK_IMPORTED_MODULE_5__["default"],
  words: pages_Words_state__WEBPACK_IMPORTED_MODULE_7__["default"]
};
var history = !isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])() : Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  if (initialState === void 0) {
    initialState = defaultState;
  }

  var composeEnhancers = !isServer && "development" === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  var enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)));
  var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history),
    app: App_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
    settings: pages_Settings_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
    words: pages_Words_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, enhancer);

  if (false) {}

  return store;
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
    root: function () {
      return '/';
    }
  },
  settings: {
    root: function () {
      return '/settings';
    },
    user: function () {
      return '/settings/user';
    },
    auth: function () {
      return '/settings/user/auth';
    }
  },
  words: {
    root: function (id) {
      if (id === void 0) {
        id = ':id';
      }

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
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

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
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}(); // modules


 // assets



var HasError =
/** @class */
function (_super) {
  __extends(HasError, _super);

  function HasError() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      hasError: false
    };
    _this.error = null;
    _this.info = null;
    return _this;
  } // static getDerivedStateFromError(error: any, errorInfo: any) {
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
    }); // logger.info(info);
    // logger.error(error);
  };

  HasError.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        children = _a.children;
    var hasError = this.state.hasError;
    return hasError ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["Error"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorTitle"], null, "Something bad happens"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorDesc"], null, this.error && this.error.message), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_assets_styles__WEBPACK_IMPORTED_MODULE_1__["ErrorDesc"], null, this.info && this.info.componentStack.split('\n').filter(function (trace) {
      return !!trace;
    }).map(function (trace, index) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        key: index
      }, index + 1, " ", trace, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null));
    }))) : children;
  };

  return HasError;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HasError);

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

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

/***/ "deep-equal":
/*!*****************************!*\
  !*** external "deep-equal" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deep-equal");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "shallowequal":
/*!*******************************!*\
  !*** external "shallowequal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shallowequal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0Q29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpZGUtZWZmZWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BcHAvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvSGVhZGVyL2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9hc3NldHMvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL0FwcC9yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvc3RhdGUudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvd29yZHMvYmFjay50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2V0dGluZ3MvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9TZXR0aW5ncy9yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9TZXR0aW5ncy9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV29yZHMvY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3Jkcy9yZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3Jkcy9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGluZy9iYWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zeXN0ZW0vYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vd2lkZ2V0cy9FcnJvckJvdW5kYXJ5L2Fzc2V0cy9zdHlsZXMudHN4Iiwid2VicGFjazovLy8uL3dpZGdldHMvRXJyb3JCb3VuZGFyeS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBsb2FkYWJsZS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcC1lcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpc3RvcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob3QtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNoYWxsb3dlcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIGNodW5rSWQgKyBcIi5zZXJ2ZXIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gXCI1OTVmMDhmMTAwODExYWMyODUzNFwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfY2h1bmtuYW1lX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uY24gPSBcIm1haW5cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIudHN4XCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhlbG1ldCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RTaWRlRWZmZWN0ID0gcmVxdWlyZShcInJlYWN0LXNpZGUtZWZmZWN0XCIpO1xuXG52YXIgX3JlYWN0U2lkZUVmZmVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFNpZGVFZmZlY3QpO1xuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoXCJkZWVwLWVxdWFsXCIpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX0hlbG1ldFV0aWxzID0gcmVxdWlyZShcIi4vSGVsbWV0VXRpbHMuanNcIik7XG5cbnZhciBfSGVsbWV0Q29uc3RhbnRzID0gcmVxdWlyZShcIi4vSGVsbWV0Q29uc3RhbnRzLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEhlbG1ldCA9IGZ1bmN0aW9uIEhlbG1ldChDb21wb25lbnQpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhIZWxtZXRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBIZWxtZXRXcmFwcGVyKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlbG1ldFdyYXBwZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9kZWVwRXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzID0gZnVuY3Rpb24gbWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKCFuZXN0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVDpcbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQ6IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIjxcIiArIGNoaWxkLnR5cGUgKyBcIiAvPiBlbGVtZW50cyBhcmUgc2VsZi1jbG9zaW5nIGFuZCBjYW4gbm90IGNvbnRhaW4gY2hpbGRyZW4uIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLmZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbihfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfcmVmLmNoaWxkLFxuICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuID0gX3JlZi5hcnJheVR5cGVDaGlsZHJlbixcbiAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzID0gX3JlZi5uZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX3JlZi5uZXN0ZWRDaGlsZHJlbjtcblxuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcnJheVR5cGVDaGlsZHJlbiwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY2hpbGQudHlwZV0gPSBbXS5jb25jYXQoYXJyYXlUeXBlQ2hpbGRyZW5bY2hpbGQudHlwZV0gfHwgW10sIFtfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcywgdGhpcy5tYXBOZXN0ZWRDaGlsZHJlblRvUHJvcHMoY2hpbGQsIG5lc3RlZENoaWxkcmVuKSldKSwgX2V4dGVuZHMyKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwT2JqZWN0VHlwZUNoaWxkcmVuID0gZnVuY3Rpb24gbWFwT2JqZWN0VHlwZUNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgX2V4dGVuZHMzLCBfZXh0ZW5kczQ7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZCA9IF9yZWYyLmNoaWxkLFxuICAgICAgICAgICAgICAgIG5ld1Byb3BzID0gX3JlZjIubmV3UHJvcHMsXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IF9yZWYyLm5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW4gPSBfcmVmMi5uZXN0ZWRDaGlsZHJlbjtcblxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXdQcm9wcywgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbY2hpbGQudHlwZV0gPSBuZXN0ZWRDaGlsZHJlbiwgX2V4dGVuZHMzLnRpdGxlQXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKSwgX2V4dGVuZHMzKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJPRFk6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhUTUw6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W2NoaWxkLnR5cGVdID0gX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpLCBfZXh0ZW5kczQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMgPSBmdW5jdGlvbiBtYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMoYXJyYXlUeXBlQ2hpbGRyZW4sIG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgbmV3RmxhdHRlbmVkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcnJheVR5cGVDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXlDaGlsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgICAgICAgICAgICAgbmV3RmxhdHRlbmVkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3RmxhdHRlbmVkUHJvcHMsIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W2FycmF5Q2hpbGROYW1lXSA9IGFycmF5VHlwZUNoaWxkcmVuW2FycmF5Q2hpbGROYW1lXSwgX2V4dGVuZHM1KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZsYXR0ZW5lZFByb3BzO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLndhcm5PbkludmFsaWRDaGlsZHJlbiA9IGZ1bmN0aW9uIHdhcm5PbkludmFsaWRDaGlsZHJlbihjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9IZWxtZXRDb25zdGFudHMuVkFMSURfVEFHX05BTUVTLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09IG5hbWU7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX0hlbG1ldFV0aWxzLndhcm4pKFwiWW91IG1heSBiZSBhdHRlbXB0aW5nIHRvIG5lc3QgPEhlbG1ldD4gY29tcG9uZW50cyB3aXRoaW4gZWFjaCBvdGhlciwgd2hpY2ggaXMgbm90IGFsbG93ZWQuIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfSGVsbWV0VXRpbHMud2FybikoXCJPbmx5IGVsZW1lbnRzIHR5cGVzIFwiICsgX0hlbG1ldENvbnN0YW50cy5WQUxJRF9UQUdfTkFNRVMuam9pbihcIiwgXCIpICsgXCIgYXJlIGFsbG93ZWQuIEhlbG1ldCBkb2VzIG5vdCBzdXBwb3J0IHJlbmRlcmluZyA8XCIgKyBjaGlsZC50eXBlICsgXCI+IGVsZW1lbnRzLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmVzdGVkQ2hpbGRyZW4gJiYgdHlwZW9mIG5lc3RlZENoaWxkcmVuICE9PSBcInN0cmluZ1wiICYmICghQXJyYXkuaXNBcnJheShuZXN0ZWRDaGlsZHJlbikgfHwgbmVzdGVkQ2hpbGRyZW4uc29tZShmdW5jdGlvbiAobmVzdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXN0ZWRDaGlsZCAhPT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVsbWV0IGV4cGVjdHMgYSBzdHJpbmcgYXMgYSBjaGlsZCBvZiA8XCIgKyBjaGlsZC50eXBlICsgXCI+LiBEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgY2hpbGRyZW4gaW4gYnJhY2VzPyAoIDxcIiArIGNoaWxkLnR5cGUgKyBcIj57YGB9PC9cIiArIGNoaWxkLnR5cGUgKyBcIj4gKSBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcENoaWxkcmVuVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgYXJyYXlUeXBlQ2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX2NoaWxkJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jaGlsZCRwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSAoMCwgX0hlbG1ldFV0aWxzLmNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcykoY2hpbGRQcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczIud2Fybk9uSW52YWxpZENoaWxkcmVuKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEE6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUeXBlQ2hpbGRyZW4gPSBfdGhpczIuZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUeXBlQ2hpbGRyZW46IGFycmF5VHlwZUNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHM6IG5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW46IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IF90aGlzMi5tYXBPYmplY3RUeXBlQ2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkOiBjaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wczogbmV3UHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wczogbmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbjogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1Byb3BzID0gdGhpcy5tYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMoYXJyYXlUeXBlQ2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9wcztcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBuZXdQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEhlbG1ldFdyYXBwZXIsIG51bGwsIFt7XG4gICAgICAgICAgICBrZXk6IFwiY2FuVXNlRE9NXCIsXG5cblxuICAgICAgICAgICAgLy8gQ29tcG9uZW50LnBlZWsgY29tZXMgZnJvbSByZWFjdC1zaWRlLWVmZmVjdDpcbiAgICAgICAgICAgIC8vIEZvciB0ZXN0aW5nLCB5b3UgbWF5IHVzZSBhIHN0YXRpYyBwZWVrKCkgbWV0aG9kIGF2YWlsYWJsZSBvbiB0aGUgcmV0dXJuZWQgY29tcG9uZW50LlxuICAgICAgICAgICAgLy8gSXQgbGV0cyB5b3UgZ2V0IHRoZSBjdXJyZW50IHN0YXRlIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBtb3VudGVkIGluc3RhbmNlIHN0YWNrLlxuICAgICAgICAgICAgLy8gRG9u4oCZdCB1c2UgaXQgZm9yIGFueXRoaW5nIG90aGVyIHRoYW4gdGVzdGluZy5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBiYXNlOiB7XCJ0YXJnZXRcIjogXCJfYmxhbmtcIiwgXCJocmVmXCI6IFwiaHR0cDovL215c2l0ZS5jb20vXCJ9XG4gICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5QXR0cmlidXRlczoge1wiY2xhc3NOYW1lXCI6IFwicm9vdFwifVxuICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFRpdGxlOiBcIkRlZmF1bHQgVGl0bGVcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmVyOiB0cnVlXG4gICAgICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWVcbiAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGh0bWxBdHRyaWJ1dGVzOiB7XCJsYW5nXCI6IFwiZW5cIiwgXCJhbXBcIjogdW5kZWZpbmVkfVxuICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBsaW5rOiBbe1wicmVsXCI6IFwiY2Fub25pY2FsXCIsIFwiaHJlZlwiOiBcImh0dHA6Ly9teXNpdGUuY29tL2V4YW1wbGVcIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1ldGE6IFt7XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIiwgXCJjb250ZW50XCI6IFwiVGVzdCBkZXNjcmlwdGlvblwifV1cbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbm9zY3JpcHQ6IFt7XCJpbm5lckhUTUxcIjogXCI8aW1nIHNyYz0naHR0cDovL215c2l0ZS5jb20vanMvdGVzdC5qcydcIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2hhbmdlQ2xpZW50U3RhdGU6IFwiKG5ld1N0YXRlKSA9PiBjb25zb2xlLmxvZyhuZXdTdGF0ZSlcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzY3JpcHQ6IFt7XCJ0eXBlXCI6IFwidGV4dC9qYXZhc2NyaXB0XCIsIFwic3JjXCI6IFwiaHR0cDovL215c2l0ZS5jb20vanMvdGVzdC5qc1wifV1cbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gc3R5bGU6IFt7XCJ0eXBlXCI6IFwidGV4dC9jc3NcIiwgXCJjc3NUZXh0XCI6IFwiZGl2IHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiBibHVlOyB9XCJ9XVxuICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IFwiVGl0bGVcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdGl0bGVBdHRyaWJ1dGVzOiB7XCJpdGVtcHJvcFwiOiBcIm5hbWVcIn1cbiAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlVGVtcGxhdGU6IFwiTXlTaXRlLmNvbSAtICVzXCJcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChjYW5Vc2VET00pIHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQuY2FuVXNlRE9NID0gY2FuVXNlRE9NO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEhlbG1ldFdyYXBwZXI7XG4gICAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICAgICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlKSwgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG4gICAgICAgIGRlZmF1bHRUaXRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgICAgIGRlZmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgbGluazogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbWV0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbm9zY3JpcHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgc2NyaXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICAgIH0sIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZVxuICAgIH0sIF9jbGFzcy5wZWVrID0gQ29tcG9uZW50LnBlZWssIF9jbGFzcy5yZXdpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYXBwZWRTdGF0ZSA9IENvbXBvbmVudC5yZXdpbmQoKTtcbiAgICAgICAgaWYgKCFtYXBwZWRTdGF0ZSkge1xuICAgICAgICAgICAgLy8gcHJvdmlkZSBmYWxsYmFjayBpZiBtYXBwZWRTdGF0ZSBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgIG1hcHBlZFN0YXRlID0gKDAsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKSh7XG4gICAgICAgICAgICAgICAgYmFzZVRhZzogW10sXG4gICAgICAgICAgICAgICAgYm9keUF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgICAgICBsaW5rVGFnczogW10sXG4gICAgICAgICAgICAgICAgbWV0YVRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIG5vc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc3R5bGVUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWRTdGF0ZTtcbiAgICB9LCBfdGVtcDtcbn07XG5cbnZhciBOdWxsQ29tcG9uZW50ID0gZnVuY3Rpb24gTnVsbENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBIZWxtZXRTaWRlRWZmZWN0cyA9ICgwLCBfcmVhY3RTaWRlRWZmZWN0Mi5kZWZhdWx0KShfSGVsbWV0VXRpbHMucmVkdWNlUHJvcHNUb1N0YXRlLCBfSGVsbWV0VXRpbHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKShOdWxsQ29tcG9uZW50KTtcblxudmFyIEhlbG1ldEV4cG9ydCA9IEhlbG1ldChIZWxtZXRTaWRlRWZmZWN0cyk7XG5IZWxtZXRFeHBvcnQucmVuZGVyU3RhdGljID0gSGVsbWV0RXhwb3J0LnJld2luZDtcblxuZXhwb3J0cy5IZWxtZXQgPSBIZWxtZXRFeHBvcnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBIZWxtZXRFeHBvcnQ7IiwiZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBBVFRSSUJVVEVfTkFNRVMgPSBleHBvcnRzLkFUVFJJQlVURV9OQU1FUyA9IHtcbiAgICBCT0RZOiBcImJvZHlBdHRyaWJ1dGVzXCIsXG4gICAgSFRNTDogXCJodG1sQXR0cmlidXRlc1wiLFxuICAgIFRJVExFOiBcInRpdGxlQXR0cmlidXRlc1wiXG59O1xuXG52YXIgVEFHX05BTUVTID0gZXhwb3J0cy5UQUdfTkFNRVMgPSB7XG4gICAgQkFTRTogXCJiYXNlXCIsXG4gICAgQk9EWTogXCJib2R5XCIsXG4gICAgSEVBRDogXCJoZWFkXCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgTElOSzogXCJsaW5rXCIsXG4gICAgTUVUQTogXCJtZXRhXCIsXG4gICAgTk9TQ1JJUFQ6IFwibm9zY3JpcHRcIixcbiAgICBTQ1JJUFQ6IFwic2NyaXB0XCIsXG4gICAgU1RZTEU6IFwic3R5bGVcIixcbiAgICBUSVRMRTogXCJ0aXRsZVwiXG59O1xuXG52YXIgVkFMSURfVEFHX05BTUVTID0gZXhwb3J0cy5WQUxJRF9UQUdfTkFNRVMgPSBPYmplY3Qua2V5cyhUQUdfTkFNRVMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBUQUdfTkFNRVNbbmFtZV07XG59KTtcblxudmFyIFRBR19QUk9QRVJUSUVTID0gZXhwb3J0cy5UQUdfUFJPUEVSVElFUyA9IHtcbiAgICBDSEFSU0VUOiBcImNoYXJzZXRcIixcbiAgICBDU1NfVEVYVDogXCJjc3NUZXh0XCIsXG4gICAgSFJFRjogXCJocmVmXCIsXG4gICAgSFRUUEVRVUlWOiBcImh0dHAtZXF1aXZcIixcbiAgICBJTk5FUl9IVE1MOiBcImlubmVySFRNTFwiLFxuICAgIElURU1fUFJPUDogXCJpdGVtcHJvcFwiLFxuICAgIE5BTUU6IFwibmFtZVwiLFxuICAgIFBST1BFUlRZOiBcInByb3BlcnR5XCIsXG4gICAgUkVMOiBcInJlbFwiLFxuICAgIFNSQzogXCJzcmNcIlxufTtcblxudmFyIFJFQUNUX1RBR19NQVAgPSBleHBvcnRzLlJFQUNUX1RBR19NQVAgPSB7XG4gICAgYWNjZXNza2V5OiBcImFjY2Vzc0tleVwiLFxuICAgIGNoYXJzZXQ6IFwiY2hhclNldFwiLFxuICAgIGNsYXNzOiBcImNsYXNzTmFtZVwiLFxuICAgIGNvbnRlbnRlZGl0YWJsZTogXCJjb250ZW50RWRpdGFibGVcIixcbiAgICBjb250ZXh0bWVudTogXCJjb250ZXh0TWVudVwiLFxuICAgIFwiaHR0cC1lcXVpdlwiOiBcImh0dHBFcXVpdlwiLFxuICAgIGl0ZW1wcm9wOiBcIml0ZW1Qcm9wXCIsXG4gICAgdGFiaW5kZXg6IFwidGFiSW5kZXhcIlxufTtcblxudmFyIEhFTE1FVF9QUk9QUyA9IGV4cG9ydHMuSEVMTUVUX1BST1BTID0ge1xuICAgIERFRkFVTFRfVElUTEU6IFwiZGVmYXVsdFRpdGxlXCIsXG4gICAgREVGRVI6IFwiZGVmZXJcIixcbiAgICBFTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTOiBcImVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzXCIsXG4gICAgT05fQ0hBTkdFX0NMSUVOVF9TVEFURTogXCJvbkNoYW5nZUNsaWVudFN0YXRlXCIsXG4gICAgVElUTEVfVEVNUExBVEU6IFwidGl0bGVUZW1wbGF0ZVwiXG59O1xuXG52YXIgSFRNTF9UQUdfTUFQID0gZXhwb3J0cy5IVE1MX1RBR19NQVAgPSBPYmplY3Qua2V5cyhSRUFDVF9UQUdfTUFQKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgb2JqW1JFQUNUX1RBR19NQVBba2V5XV0gPSBrZXk7XG4gICAgcmV0dXJuIG9iajtcbn0sIHt9KTtcblxudmFyIFNFTEZfQ0xPU0lOR19UQUdTID0gZXhwb3J0cy5TRUxGX0NMT1NJTkdfVEFHUyA9IFtUQUdfTkFNRVMuTk9TQ1JJUFQsIFRBR19OQU1FUy5TQ1JJUFQsIFRBR19OQU1FUy5TVFlMRV07XG5cbnZhciBIRUxNRVRfQVRUUklCVVRFID0gZXhwb3J0cy5IRUxNRVRfQVRUUklCVVRFID0gXCJkYXRhLXJlYWN0LWhlbG1ldFwiOyIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndhcm4gPSBleHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGV4cG9ydHMucmVkdWNlUHJvcHNUb1N0YXRlID0gZXhwb3J0cy5tYXBTdGF0ZU9uU2VydmVyID0gZXhwb3J0cy5oYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSA9IGV4cG9ydHMuY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX0hlbG1ldENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL0hlbG1ldENvbnN0YW50cy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzID0gZnVuY3Rpb24gZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoc3RyKSB7XG4gICAgdmFyIGVuY29kZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICAgIGlmIChlbmNvZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpLnJlcGxhY2UoLycvZywgXCImI3gyNztcIik7XG59O1xuXG52YXIgZ2V0VGl0bGVGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0VGl0bGVGcm9tUHJvcHNMaXN0KHByb3BzTGlzdCkge1xuICAgIHZhciBpbm5lcm1vc3RUaXRsZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUpO1xuICAgIHZhciBpbm5lcm1vc3RUZW1wbGF0ZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuVElUTEVfVEVNUExBVEUpO1xuXG4gICAgaWYgKGlubmVybW9zdFRlbXBsYXRlICYmIGlubmVybW9zdFRpdGxlKSB7XG4gICAgICAgIC8vIHVzZSBmdW5jdGlvbiBhcmcgdG8gYXZvaWQgbmVlZCB0byBlc2NhcGUgJCBjaGFyYWN0ZXJzXG4gICAgICAgIHJldHVybiBpbm5lcm1vc3RUZW1wbGF0ZS5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5uZXJtb3N0VGl0bGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpbm5lcm1vc3REZWZhdWx0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLkRFRkFVTFRfVElUTEUpO1xuXG4gICAgcmV0dXJuIGlubmVybW9zdFRpdGxlIHx8IGlubmVybW9zdERlZmF1bHRUaXRsZSB8fCB1bmRlZmluZWQ7XG59O1xuXG52YXIgZ2V0T25DaGFuZ2VDbGllbnRTdGF0ZSA9IGZ1bmN0aW9uIGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUocHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuT05fQ0hBTkdFX0NMSUVOVF9TVEFURSkgfHwgZnVuY3Rpb24gKCkge307XG59O1xuXG52YXIgZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdCh0YWdUeXBlLCBwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm9wc1t0YWdUeXBlXSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1t0YWdUeXBlXTtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHRhZ0F0dHJzLCBjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGFnQXR0cnMsIGN1cnJlbnQpO1xuICAgIH0sIHt9KTtcbn07XG5cbnZhciBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldEJhc2VUYWdGcm9tUHJvcHNMaXN0KHByaW1hcnlBdHRyaWJ1dGVzLCBwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm9wc1tfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFXSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1tfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFXTtcbiAgICB9KS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChpbm5lcm1vc3RCYXNlVGFnLCB0YWcpIHtcbiAgICAgICAgaWYgKCFpbm5lcm1vc3RCYXNlVGFnLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YWcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihsb3dlckNhc2VBdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZy5jb25jYXQodGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZztcbiAgICB9LCBbXSk7XG59O1xuXG52YXIgZ2V0VGFnc0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRUYWdzRnJvbVByb3BzTGlzdCh0YWdOYW1lLCBwcmltYXJ5QXR0cmlidXRlcywgcHJvcHNMaXN0KSB7XG4gICAgLy8gQ2FsY3VsYXRlIGxpc3Qgb2YgdGFncywgZ2l2aW5nIHByaW9yaXR5IGlubmVybW9zdCBjb21wb25lbnQgKGVuZCBvZiB0aGUgcHJvcHNsaXN0KVxuICAgIHZhciBhcHByb3ZlZFNlZW5UYWdzID0ge307XG5cbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHNbdGFnTmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByb3BzW3RhZ05hbWVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB3YXJuKFwiSGVsbWV0OiBcIiArIHRhZ05hbWUgKyBcIiBzaG91bGQgYmUgb2YgdHlwZSBcXFwiQXJyYXlcXFwiLiBJbnN0ZWFkIGZvdW5kIHR5cGUgXFxcIlwiICsgX3R5cGVvZihwcm9wc1t0YWdOYW1lXSkgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzW3RhZ05hbWVdO1xuICAgIH0pLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGFwcHJvdmVkVGFncywgaW5zdGFuY2VUYWdzKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZVNlZW5UYWdzID0ge307XG5cbiAgICAgICAgaW5zdGFuY2VUYWdzLmZpbHRlcihmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICB2YXIgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgcnVsZSB3aXRoIGxpbmsgdGFncywgc2luY2UgcmVsIGFuZCBocmVmIGFyZSBib3RoIHByaW1hcnkgdGFncywgcmVsIHRha2VzIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YobG93ZXJDYXNlQXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgIShwcmltYXJ5QXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlJFTCAmJiB0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKSA9PT0gXCJjYW5vbmljYWxcIikgJiYgIShsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUkVMICYmIHRhZ1tsb3dlckNhc2VBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QXR0cmlidXRlS2V5ID0gbG93ZXJDYXNlQXR0cmlidXRlS2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGlubmVySFRNTCB3aGljaCBkb2Vzbid0IHdvcmsgbG93ZXJjYXNlZFxuICAgICAgICAgICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZUtleSkgIT09IC0xICYmIChhdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCB8fCBhdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQgfHwgYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklURU1fUFJPUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IGF0dHJpYnV0ZUtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcHJpbWFyeUF0dHJpYnV0ZUtleSB8fCAhdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKCFhcHByb3ZlZFNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldW3ZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgcmV0dXJuIGFwcHJvdmVkVGFncy5wdXNoKHRhZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBzZWVuIHRhZ3Mgd2l0aCB0YWdzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlU2VlblRhZ3MpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHRhZ1VuaW9uID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBhcHByb3ZlZFNlZW5UYWdzW2F0dHJpYnV0ZUtleV0sIGluc3RhbmNlU2VlblRhZ3NbYXR0cmlidXRlS2V5XSk7XG5cbiAgICAgICAgICAgIGFwcHJvdmVkU2VlblRhZ3NbYXR0cmlidXRlS2V5XSA9IHRhZ1VuaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcHJvdmVkVGFncztcbiAgICB9LCBbXSkucmV2ZXJzZSgpO1xufTtcblxudmFyIGdldElubmVybW9zdFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBwcm9wZXJ0eSkge1xuICAgIGZvciAodmFyIGkgPSBwcm9wc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHByb3BzID0gcHJvcHNMaXN0W2ldO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciByZWR1Y2VQcm9wc1RvU3RhdGUgPSBmdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZVRhZzogZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QoW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFJFRl0sIHByb3BzTGlzdCksXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5CT0RZLCBwcm9wc0xpc3QpLFxuICAgICAgICBkZWZlcjogZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5ERUZFUiksXG4gICAgICAgIGVuY29kZTogZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5FTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTKSxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUwsIHByb3BzTGlzdCksXG4gICAgICAgIGxpbmtUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5SRUwsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFJFRl0sIHByb3BzTGlzdCksXG4gICAgICAgIG1ldGFUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5OQU1FLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNIQVJTRVQsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFRUUEVRVUlWLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlBST1BFUlRZLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklURU1fUFJPUF0sIHByb3BzTGlzdCksXG4gICAgICAgIG5vc2NyaXB0VGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUxdLCBwcm9wc0xpc3QpLFxuICAgICAgICBvbkNoYW5nZUNsaWVudFN0YXRlOiBnZXRPbkNoYW5nZUNsaWVudFN0YXRlKHByb3BzTGlzdCksXG4gICAgICAgIHNjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVCwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuU1JDLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUxdLCBwcm9wc0xpc3QpLFxuICAgICAgICBzdHlsZVRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVF0sIHByb3BzTGlzdCksXG4gICAgICAgIHRpdGxlOiBnZXRUaXRsZUZyb21Qcm9wc0xpc3QocHJvcHNMaXN0KSxcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5USVRMRSwgcHJvcHNMaXN0KVxuICAgIH07XG59O1xuXG52YXIgcmFmUG9seWZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsb2NrID0gRGF0ZS5ub3coKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBjbG9jayA+IDE2KSB7XG4gICAgICAgICAgICBjbG9jayA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgY2FsbGJhY2soY3VycmVudFRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmFmUG9seWZpbGwoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG52YXIgY2FmUG9seWZpbGwgPSBmdW5jdGlvbiBjYWZQb2x5ZmlsbChpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByYWZQb2x5ZmlsbCA6IGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmFmUG9seWZpbGw7XG5cbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBjYWZQb2x5ZmlsbCA6IGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBjYWZQb2x5ZmlsbDtcblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIHJldHVybiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLndhcm4gPT09IFwiZnVuY3Rpb25cIiAmJiBjb25zb2xlLndhcm4obXNnKTtcbn07XG5cbnZhciBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuXG52YXIgaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDbGllbnRTdGF0ZUNoYW5nZShuZXdTdGF0ZSkge1xuICAgIGlmIChfaGVsbWV0Q2FsbGJhY2spIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoX2hlbG1ldENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUuZGVmZXIpIHtcbiAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUpO1xuICAgICAgICBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbn07XG5cbnZhciBjb21taXRUYWdDaGFuZ2VzID0gZnVuY3Rpb24gY29tbWl0VGFnQ2hhbmdlcyhuZXdTdGF0ZSwgY2IpIHtcbiAgICB2YXIgYmFzZVRhZyA9IG5ld1N0YXRlLmJhc2VUYWcsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzID0gbmV3U3RhdGUuYm9keUF0dHJpYnV0ZXMsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzID0gbmV3U3RhdGUuaHRtbEF0dHJpYnV0ZXMsXG4gICAgICAgIGxpbmtUYWdzID0gbmV3U3RhdGUubGlua1RhZ3MsXG4gICAgICAgIG1ldGFUYWdzID0gbmV3U3RhdGUubWV0YVRhZ3MsXG4gICAgICAgIG5vc2NyaXB0VGFncyA9IG5ld1N0YXRlLm5vc2NyaXB0VGFncyxcbiAgICAgICAgb25DaGFuZ2VDbGllbnRTdGF0ZSA9IG5ld1N0YXRlLm9uQ2hhbmdlQ2xpZW50U3RhdGUsXG4gICAgICAgIHNjcmlwdFRhZ3MgPSBuZXdTdGF0ZS5zY3JpcHRUYWdzLFxuICAgICAgICBzdHlsZVRhZ3MgPSBuZXdTdGF0ZS5zdHlsZVRhZ3MsXG4gICAgICAgIHRpdGxlID0gbmV3U3RhdGUudGl0bGUsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlcyA9IG5ld1N0YXRlLnRpdGxlQXR0cmlidXRlcztcblxuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQk9EWSwgYm9keUF0dHJpYnV0ZXMpO1xuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuSFRNTCwgaHRtbEF0dHJpYnV0ZXMpO1xuXG4gICAgdXBkYXRlVGl0bGUodGl0bGUsIHRpdGxlQXR0cmlidXRlcyk7XG5cbiAgICB2YXIgdGFnVXBkYXRlcyA9IHtcbiAgICAgICAgYmFzZVRhZzogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFLCBiYXNlVGFnKSxcbiAgICAgICAgbGlua1RhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSywgbGlua1RhZ3MpLFxuICAgICAgICBtZXRhVGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBtZXRhVGFncyksXG4gICAgICAgIG5vc2NyaXB0VGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVCwgbm9zY3JpcHRUYWdzKSxcbiAgICAgICAgc2NyaXB0VGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQsIHNjcmlwdFRhZ3MpLFxuICAgICAgICBzdHlsZVRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEUsIHN0eWxlVGFncylcbiAgICB9O1xuXG4gICAgdmFyIGFkZGVkVGFncyA9IHt9O1xuICAgIHZhciByZW1vdmVkVGFncyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGFnVXBkYXRlcykuZm9yRWFjaChmdW5jdGlvbiAodGFnVHlwZSkge1xuICAgICAgICB2YXIgX3RhZ1VwZGF0ZXMkdGFnVHlwZSA9IHRhZ1VwZGF0ZXNbdGFnVHlwZV0sXG4gICAgICAgICAgICBuZXdUYWdzID0gX3RhZ1VwZGF0ZXMkdGFnVHlwZS5uZXdUYWdzLFxuICAgICAgICAgICAgb2xkVGFncyA9IF90YWdVcGRhdGVzJHRhZ1R5cGUub2xkVGFncztcblxuXG4gICAgICAgIGlmIChuZXdUYWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkZWRUYWdzW3RhZ1R5cGVdID0gbmV3VGFncztcbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkVGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlbW92ZWRUYWdzW3RhZ1R5cGVdID0gdGFnVXBkYXRlc1t0YWdUeXBlXS5vbGRUYWdzO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjYiAmJiBjYigpO1xuXG4gICAgb25DaGFuZ2VDbGllbnRTdGF0ZShuZXdTdGF0ZSwgYWRkZWRUYWdzLCByZW1vdmVkVGFncyk7XG59O1xuXG52YXIgZmxhdHRlbkFycmF5ID0gZnVuY3Rpb24gZmxhdHRlbkFycmF5KHBvc3NpYmxlQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwb3NzaWJsZUFycmF5KSA/IHBvc3NpYmxlQXJyYXkuam9pbihcIlwiKSA6IHBvc3NpYmxlQXJyYXk7XG59O1xuXG52YXIgdXBkYXRlVGl0bGUgPSBmdW5jdGlvbiB1cGRhdGVUaXRsZSh0aXRsZSwgYXR0cmlidXRlcykge1xuICAgIGlmICh0eXBlb2YgdGl0bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQudGl0bGUgIT09IHRpdGxlKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gZmxhdHRlbkFycmF5KHRpdGxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFLCBhdHRyaWJ1dGVzKTtcbn07XG5cbnZhciB1cGRhdGVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlcyh0YWdOYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGVsZW1lbnRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKVswXTtcblxuICAgIGlmICghZWxlbWVudFRhZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhlbG1ldEF0dHJpYnV0ZVN0cmluZyA9IGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSk7XG4gICAgdmFyIGhlbG1ldEF0dHJpYnV0ZXMgPSBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcgPyBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcuc3BsaXQoXCIsXCIpIDogW107XG4gICAgdmFyIGF0dHJpYnV0ZXNUb1JlbW92ZSA9IFtdLmNvbmNhdChoZWxtZXRBdHRyaWJ1dGVzKTtcbiAgICB2YXIgYXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVLZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gfHwgXCJcIjtcblxuICAgICAgICBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID09PSAtMSkge1xuICAgICAgICAgICAgaGVsbWV0QXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZXhUb1NhdmUgPSBhdHRyaWJ1dGVzVG9SZW1vdmUuaW5kZXhPZihhdHRyaWJ1dGUpO1xuICAgICAgICBpZiAoaW5kZXhUb1NhdmUgIT09IC0xKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzVG9SZW1vdmUuc3BsaWNlKGluZGV4VG9TYXZlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gYXR0cmlidXRlc1RvUmVtb3ZlLmxlbmd0aCAtIDE7IF9pID49IDA7IF9pLS0pIHtcbiAgICAgICAgZWxlbWVudFRhZy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlc1RvUmVtb3ZlW19pXSk7XG4gICAgfVxuXG4gICAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMubGVuZ3RoID09PSBhdHRyaWJ1dGVzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRUYWcucmVtb3ZlQXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpICE9PSBhdHRyaWJ1dGVLZXlzLmpvaW4oXCIsXCIpKSB7XG4gICAgICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSwgYXR0cmlidXRlS2V5cy5qb2luKFwiLFwiKSk7XG4gICAgfVxufTtcblxudmFyIHVwZGF0ZVRhZ3MgPSBmdW5jdGlvbiB1cGRhdGVUYWdzKHR5cGUsIHRhZ3MpIHtcbiAgICB2YXIgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuSEVBRCk7XG4gICAgdmFyIHRhZ05vZGVzID0gaGVhZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0eXBlICsgXCJbXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIl1cIik7XG4gICAgdmFyIG9sZFRhZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YWdOb2Rlcyk7XG4gICAgdmFyIG5ld1RhZ3MgPSBbXTtcbiAgICB2YXIgaW5kZXhUb0RlbGV0ZSA9IHZvaWQgMDtcblxuICAgIGlmICh0YWdzICYmIHRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiB0YWcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFnLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IHRhZy5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3RWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSB0YWcuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcuY3NzVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHRhZ1thdHRyaWJ1dGVdID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHRhZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYSBkdXBsaWNhdGUgdGFnIGZyb20gZG9tVGFnc3RvUmVtb3ZlLCBzbyBpdCBpc24ndCBjbGVhcmVkLlxuICAgICAgICAgICAgaWYgKG9sZFRhZ3Muc29tZShmdW5jdGlvbiAoZXhpc3RpbmdUYWcsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaW5kZXhUb0RlbGV0ZSA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdFbGVtZW50LmlzRXF1YWxOb2RlKGV4aXN0aW5nVGFnKTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFncy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1RhZ3MucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2xkVGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgbmV3VGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKHRhZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbGRUYWdzOiBvbGRUYWdzLFxuICAgICAgICBuZXdUYWdzOiBuZXdUYWdzXG4gICAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcgPSBmdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcoYXR0cmlidXRlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwga2V5KSB7XG4gICAgICAgIHZhciBhdHRyID0gdHlwZW9mIGF0dHJpYnV0ZXNba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiA/IGtleSArIFwiPVxcXCJcIiArIGF0dHJpYnV0ZXNba2V5XSArIFwiXFxcIlwiIDogXCJcIiArIGtleTtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ciArIFwiIFwiICsgYXR0ciA6IGF0dHI7XG4gICAgfSwgXCJcIik7XG59O1xuXG52YXIgZ2VuZXJhdGVUaXRsZUFzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUFzU3RyaW5nKHR5cGUsIHRpdGxlLCBhdHRyaWJ1dGVzLCBlbmNvZGUpIHtcbiAgICB2YXIgYXR0cmlidXRlU3RyaW5nID0gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKGF0dHJpYnV0ZXMpO1xuICAgIHZhciBmbGF0dGVuZWRUaXRsZSA9IGZsYXR0ZW5BcnJheSh0aXRsZSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVN0cmluZyA/IFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiIFwiICsgYXR0cmlidXRlU3RyaW5nICsgXCI+XCIgKyBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyhmbGF0dGVuZWRUaXRsZSwgZW5jb2RlKSArIFwiPC9cIiArIHR5cGUgKyBcIj5cIiA6IFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiPlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoZmxhdHRlbmVkVGl0bGUsIGVuY29kZSkgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCI7XG59O1xuXG52YXIgZ2VuZXJhdGVUYWdzQXNTdHJpbmcgPSBmdW5jdGlvbiBnZW5lcmF0ZVRhZ3NBc1N0cmluZyh0eXBlLCB0YWdzLCBlbmNvZGUpIHtcbiAgICByZXR1cm4gdGFncy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgdGFnKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVIdG1sID0gT2JqZWN0LmtleXModGFnKS5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICEoYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwgfHwgYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChzdHJpbmcsIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB0eXBlb2YgdGFnW2F0dHJpYnV0ZV0gPT09IFwidW5kZWZpbmVkXCIgPyBhdHRyaWJ1dGUgOiBhdHRyaWJ1dGUgKyBcIj1cXFwiXCIgKyBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyh0YWdbYXR0cmlidXRlXSwgZW5jb2RlKSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IHN0cmluZyArIFwiIFwiICsgYXR0ciA6IGF0dHI7XG4gICAgICAgIH0sIFwiXCIpO1xuXG4gICAgICAgIHZhciB0YWdDb250ZW50ID0gdGFnLmlubmVySFRNTCB8fCB0YWcuY3NzVGV4dCB8fCBcIlwiO1xuXG4gICAgICAgIHZhciBpc1NlbGZDbG9zaW5nID0gX0hlbG1ldENvbnN0YW50cy5TRUxGX0NMT1NJTkdfVEFHUy5pbmRleE9mKHR5cGUpID09PSAtMTtcblxuICAgICAgICByZXR1cm4gc3RyICsgXCI8XCIgKyB0eXBlICsgXCIgXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIj1cXFwidHJ1ZVxcXCIgXCIgKyBhdHRyaWJ1dGVIdG1sICsgKGlzU2VsZkNsb3NpbmcgPyBcIi8+XCIgOiBcIj5cIiArIHRhZ0NvbnRlbnQgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCIpO1xuICAgIH0sIFwiXCIpO1xufTtcblxudmFyIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyA9IGZ1bmN0aW9uIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyhhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGluaXRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICBvYmpbX0hlbG1ldENvbnN0YW50cy5SRUFDVF9UQUdfTUFQW2tleV0gfHwga2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCBpbml0UHJvcHMpO1xufTtcblxudmFyIGNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyA9IGZ1bmN0aW9uIGNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyhwcm9wcykge1xuICAgIHZhciBpbml0QXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgb2JqW19IZWxtZXRDb25zdGFudHMuSFRNTF9UQUdfTUFQW2tleV0gfHwga2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgaW5pdEF0dHJpYnV0ZXMpO1xufTtcblxudmFyIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50ID0gZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQodHlwZSwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgX2luaXRQcm9wcztcblxuICAgIC8vIGFzc2lnbmluZyBpbnRvIGFuIGFycmF5IHRvIGRlZmluZSB0b1N0cmluZyBmdW5jdGlvbiBvbiBpdFxuICAgIHZhciBpbml0UHJvcHMgPSAoX2luaXRQcm9wcyA9IHtcbiAgICAgICAga2V5OiB0aXRsZVxuICAgIH0sIF9pbml0UHJvcHNbX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFXSA9IHRydWUsIF9pbml0UHJvcHMpO1xuICAgIHZhciBwcm9wcyA9IGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyhhdHRyaWJ1dGVzLCBpbml0UHJvcHMpO1xuXG4gICAgcmV0dXJuIFtfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgcHJvcHMsIHRpdGxlKV07XG59O1xuXG52YXIgZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncykge1xuICAgIHJldHVybiB0YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICAgIHZhciBfbWFwcGVkVGFnO1xuXG4gICAgICAgIHZhciBtYXBwZWRUYWcgPSAoX21hcHBlZFRhZyA9IHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICB9LCBfbWFwcGVkVGFnW19IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURV0gPSB0cnVlLCBfbWFwcGVkVGFnKTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0YWcpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIG1hcHBlZEF0dHJpYnV0ZSA9IF9IZWxtZXRDb25zdGFudHMuUkVBQ1RfVEFHX01BUFthdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcblxuICAgICAgICAgICAgaWYgKG1hcHBlZEF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MIHx8IG1hcHBlZEF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFnLmlubmVySFRNTCB8fCB0YWcuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICBtYXBwZWRUYWcuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7IF9faHRtbDogY29udGVudCB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXBwZWRUYWdbbWFwcGVkQXR0cmlidXRlXSA9IHRhZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodHlwZSwgbWFwcGVkVGFnKTtcbiAgICB9KTtcbn07XG5cbnZhciBnZXRNZXRob2RzRm9yVGFnID0gZnVuY3Rpb24gZ2V0TWV0aG9kc0ZvclRhZyh0eXBlLCB0YWdzLCBlbmNvZGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9Db21wb25lbnQ6IGZ1bmN0aW9uIHRvQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncy50aXRsZSwgdGFncy50aXRsZUF0dHJpYnV0ZXMsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRpdGxlQXNTdHJpbmcodHlwZSwgdGFncy50aXRsZSwgdGFncy50aXRsZUF0dHJpYnV0ZXMsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5CT0RZOlxuICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvQ29tcG9uZW50OiBmdW5jdGlvbiB0b0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyh0YWdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyh0YWdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b0NvbXBvbmVudDogZnVuY3Rpb24gdG9Db21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUYWdzQXNTdHJpbmcodHlwZSwgdGFncywgZW5jb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5cbnZhciBtYXBTdGF0ZU9uU2VydmVyID0gZnVuY3Rpb24gbWFwU3RhdGVPblNlcnZlcihfcmVmKSB7XG4gICAgdmFyIGJhc2VUYWcgPSBfcmVmLmJhc2VUYWcsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzID0gX3JlZi5ib2R5QXR0cmlidXRlcyxcbiAgICAgICAgZW5jb2RlID0gX3JlZi5lbmNvZGUsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzID0gX3JlZi5odG1sQXR0cmlidXRlcyxcbiAgICAgICAgbGlua1RhZ3MgPSBfcmVmLmxpbmtUYWdzLFxuICAgICAgICBtZXRhVGFncyA9IF9yZWYubWV0YVRhZ3MsXG4gICAgICAgIG5vc2NyaXB0VGFncyA9IF9yZWYubm9zY3JpcHRUYWdzLFxuICAgICAgICBzY3JpcHRUYWdzID0gX3JlZi5zY3JpcHRUYWdzLFxuICAgICAgICBzdHlsZVRhZ3MgPSBfcmVmLnN0eWxlVGFncyxcbiAgICAgICAgX3JlZiR0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICAgIHRpdGxlID0gX3JlZiR0aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IF9yZWYkdGl0bGUsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlcyA9IF9yZWYudGl0bGVBdHRyaWJ1dGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRSwgYmFzZVRhZywgZW5jb2RlKSxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXM6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWSwgYm9keUF0dHJpYnV0ZXMsIGVuY29kZSksXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUwsIGh0bWxBdHRyaWJ1dGVzLCBlbmNvZGUpLFxuICAgICAgICBsaW5rOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTkssIGxpbmtUYWdzLCBlbmNvZGUpLFxuICAgICAgICBtZXRhOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEEsIG1ldGFUYWdzLCBlbmNvZGUpLFxuICAgICAgICBub3NjcmlwdDogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVCwgbm9zY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgICAgICBzY3JpcHQ6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBULCBzY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgICAgICBzdHlsZTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRSwgc3R5bGVUYWdzLCBlbmNvZGUpLFxuICAgICAgICB0aXRsZTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgeyB0aXRsZTogdGl0bGUsIHRpdGxlQXR0cmlidXRlczogdGl0bGVBdHRyaWJ1dGVzIH0sIGVuY29kZSlcbiAgICB9O1xufTtcblxuZXhwb3J0cy5jb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMgPSBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXM7XG5leHBvcnRzLmhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlID0gaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2U7XG5leHBvcnRzLm1hcFN0YXRlT25TZXJ2ZXIgPSBtYXBTdGF0ZU9uU2VydmVyO1xuZXhwb3J0cy5yZWR1Y2VQcm9wc1RvU3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGU7XG5leHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbmV4cG9ydHMud2FybiA9IHdhcm47IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnZXhlbnYnKSk7XG52YXIgc2hhbGxvd0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQsIG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZWR1Y2VQcm9wc1RvU3RhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG4gIGlmICh0eXBlb2YgbWFwU3RhdGVPblNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG1hcFN0YXRlT25TZXJ2ZXIgdG8gZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgV3JhcHBlZENvbXBvbmVudCB0byBiZSBhIFJlYWN0IGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgIHZhciBzdGF0ZSA9IHZvaWQgMDtcblxuICAgIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgICBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShtb3VudGVkSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzO1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAoU2lkZUVmZmVjdC5jYW5Vc2VET00pIHtcbiAgICAgICAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChzdGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgICAgICAgc3RhdGUgPSBtYXBTdGF0ZU9uU2VydmVyKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU2lkZUVmZmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNpZGVFZmZlY3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaWRlRWZmZWN0KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgLy8gRXhwb3NlIGNhblVzZURPTSBzbyB0ZXN0cyBjYW4gbW9ua2V5cGF0Y2ggaXRcblxuXG4gICAgICBTaWRlRWZmZWN0LnJld2luZCA9IGZ1bmN0aW9uIHJld2luZCgpIHtcbiAgICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG9ubHkgY2FsbCByZXdpbmQoKSBvbiB0aGUgc2VydmVyLiBDYWxsIHBlZWsoKSB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlY29yZGVkU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIHJlY29yZGVkU3RhdGU7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBTaWRlRWZmZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBtb3VudGVkSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIFNpZGVFZmZlY3QuZGlzcGxheU5hbWUgPSAnU2lkZUVmZmVjdCgnICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gICAgU2lkZUVmZmVjdC5jYW5Vc2VET00gPSBFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET007XG5cblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTaWRlRWZmZWN0O1xuIiwiLy8gbW9kdWxlc1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gY3VzdG9tXHJcblxyXG4vLyBhc3NldHNcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRm9vdGVyUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IGFueTtcclxufTtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxGb290ZXJQcm9wcz4ge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y24oY2xhc3NOYW1lLCAnRm9vdGVyJyl9PlxyXG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgTmlrb2xheSBOYXphcmlzaGluLiAyMDE5PC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgc2MgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIGFzIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzYy5oZWFkZXJgXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzYyhMaW5rKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDFlbTtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSBzYy5uYXZgXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkxpc3QgPSBzYy51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzYy5saWBcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc2MoTGluaylgXHJcbiAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEocGluaywgLjYpO1xyXG4gIHRyYW5zaXRpb246IDQwMG1zO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjYTExO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICYuYWN0aXZlLFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYDsiLCIvLyBtb2R1bGVzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIHN5c3RlbVxyXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XHJcblxyXG4vLyBjdXN0b21cclxuXHJcbi8vIGFzc2V0c1xyXG5pbXBvcnQge1xyXG4gIEhlYWRlcixcclxuICBMb2dvLFxyXG4gIE5hdixcclxuICBOYXZMaXN0LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGlua1xyXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XHJcblxyXG5jb25zdCBuYXYgPSBbXHJcbiAge1xyXG4gICAgdG86IGJvb2sud29yZHMucm9vdCgnJyksXHJcbiAgICBuYW1lOiAnV29yZHMnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0bzogYm9vay5zZXR0aW5ncy5yb290KCksXHJcbiAgICBuYW1lOiAnU2V0dGluZ3MnXHJcbiAgfVxyXG5dXHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IGFueTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEhlYWRlclByb3BzPiB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgIDxMb2dvIHRvPXtib29rLmhvbWUucm9vdCgpfT5cclxuICAgICAgICAgIEhpISBXZWxjb21lIHRvIGVuZ2xpc2ggY2FyZHMhMXZ2XHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgIDxOYXY+XHJcbiAgICAgICAgICA8TmF2TGlzdD5cclxuICAgICAgICAgICAge25hdi5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2l0ZW0udG99ID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9OYXZMaXN0PlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgc2MsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc2MuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHNjKGhlYWRlcilgXHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgY2VudGVyU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc2MoZm9vdGVyKWBcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5gOyIsImV4cG9ydCBjb25zdCBBUFBfSU5JVEVEID0gJ0FQUF9JTklURUQnOyIsIi8vIG1vZHVsZXNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbi8vIHN5c3RlbVxyXG5pbXBvcnQgYm9vayBmcm9tICdzeXN0ZW0vYm9vayc7XHJcblxyXG4vLyBjdXN0b21cclxuY29uc3QgSG9tZSA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgncGFnZXMvSG9tZScpKTtcclxuY29uc3QgU2V0dGluZ3MgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJ3BhZ2VzL1NldHRpbmdzJykpO1xyXG5jb25zdCBXb3JkcyA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgncGFnZXMvV29yZHMnKSk7XHJcbmNvbnN0IE5vdEZvdW5kID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCdwYWdlcy9Ob3RGb3VuZCcpKTtcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnd2lkZ2V0cy9FcnJvckJvdW5kYXJ5JztcclxuXHJcbi8vIGFzc2V0c1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBjZW50ZXJTdHlsZSxcclxuICBIZWFkZXIsXHJcbiAgRm9vdGVyXHJcbn0gZnJvbSAnLi9hc3NldHMvc3R5bGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG50eXBlIEFwcFByb3BzID0ge1xyXG4gIFxyXG59O1xyXG50eXBlIFN0YXRlID0ge1xyXG5cclxufTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBcHBQcm9wcywgU3RhdGU+IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVsbWV0IHRpdGxlVGVtcGxhdGU9XCJNeVNpdGUuY29tIC0gJXNcIj5cclxuICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XHJcbiAgICAgICAgICA8dGl0bGU+SGVsbG8hPC90aXRsZT5cclxuICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8UmVkaXJlY3QgZnJvbT17Ym9vay53b3Jkcy5yb290KCcnKX0gdG89e2Jvb2sud29yZHMucm9vdCgxKX0gZXhhY3QvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay5ob21lLnJvb3QoKX0gY29tcG9uZW50PXtIb21lfSBleGFjdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Jvb2sud29yZHMucm9vdCgpfSBjb21wb25lbnQ9e1dvcmRzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17Ym9vay5zZXR0aW5ncy5yb290KCl9IGNvbXBvbmVudD17U2V0dGluZ3N9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gbW9kdWxlc1xyXG5pbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8gY3VzdG9tXHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcclxuaW1wb3J0IGluaXRhbFN0YXRlIGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVEVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjx0eXBlb2YgaW5pdGFsU3RhdGUsIGFjdGlvbj47XHJcblxyXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBUFBfSU5JVEVEOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbml0ZWQ6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJjb25zdCBhcHBTdGF0ZSA9IHtcclxuICBhcHBJbml0ZWQ6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFN0YXRlOyIsIi8vIG1vZHVsZXNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBBcHBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHsgaGlzdG9yeSwgaXNTZXJ2ZXIgfSBmcm9tICdzdG9yZSc7XHJcblxyXG4vLyBhc3NldHNcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJ2Fzc2V0cy9iYXNlJztcclxuXHJcbi8vIGN1c3RvbVxyXG5pbXBvcnQgQXBwIGZyb20gJ0FwcCc7XHJcblxyXG4vLyBhc3NldHNcclxuaW1wb3J0ICdhc3NldHMvYXRvbWljJztcclxuXHJcbmZ1bmN0aW9uIG1haW4oUm9vdCA9IEFwcCkge1xyXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUod2luZG93LlJFRFVYX1NUQVRFKTtcclxuICBcclxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1yb290Jyk7XHJcbiAgcmVuZGVyKFxyXG4gICAgPEFwcENvbnRhaW5lcj5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgIDxSb290IC8+XHJcbiAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L0FwcENvbnRhaW5lcj5cclxuICAgICwgcm9vdFxyXG4gICk7XHJcbn1cclxuXHJcbmlmICghaXNTZXJ2ZXIpIHtcclxuICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ0FwcCcsICgpID0+IHtcclxuICAgICAgbWFpbihyZXF1aXJlKCdBcHAnKS5kZWZhdWx0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtYWluKEFwcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgQXBwLCBjb25maWd1cmVTdG9yZSB9OyIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUcmFuc2xhdGVzID0gYXN5bmMgKGxpbWl0ID0gMTUsIG9mZnNldCA9IDApID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZnMucmVhZEZpbGUoYC4vcHVibGljL2VuLnR4dGApO1xyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50b1N0cmluZygpO1xyXG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYXJ0T2ZXb3JkcyA9IHdvcmRzLnNsaWNlKG9mZnNldCwgIG9mZnNldCArIGxpbWl0KTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZXMgPSBwYXJ0T2ZXb3Jkcy5tYXAod29yZCA9PiAoe2VuOiB3b3JkLCBydTogJyd9KSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0cmFuc2xhdGVzO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5mbyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZnMucmVhZEZpbGUoYC4vcHVibGljL2VuLnR4dGApO1xyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50b1N0cmluZygpO1xyXG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KCcgJylbMF0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvdW50V29yZHM6IHdvcmRzLmxlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4geyBjb3VudFdvcmRzOiAwIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgU0VUVElOR1NfUkVRVUVTVCA9ICdTRVRUSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1VQREFURSAgPSAnU0VUVElOR1NfVVBEQVRFJztcclxuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1NVQ0NFU1MgPSAnU0VUVElOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRVRUSU5HU19GQUlMVVJFID0gJ1NFVFRJTkdTX0ZBSUxVUkUnO1xyXG4iLCIvLyBtb2R1bGVzXHJcbmltcG9ydCB7IFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLyBjdXN0b21cclxuaW1wb3J0IGluaXRhbFN0YXRlIGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdzdG9yZSc7XHJcbmltcG9ydCB7IFNFVFRJTkdTX1JFUVVFU1QsIFNFVFRJTkdTX1VQREFURSwgU0VUVElOR1NfU1VDQ0VTUywgU0VUVElOR1NfRkFJTFVSRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbnR5cGUgcmVkdWNlciA9IFJlZHVjZXI8aW5pdGFsU3RhdGUsIGFjdGlvbj47XHJcblxyXG5jb25zdCByZWR1Y2VyOiByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRUSU5HU19SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFNFVFRJTkdTX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBzZXR0aW5nczogYWN0aW9uLnBheWxvYWR9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBTRVRUSU5HU19VUERBVEU6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgU0VUVElOR1NfRkFJTFVSRToge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW50ZXJmYWNlIGluaXRpYWxTdGF0ZSB7XHJcbiAgd29yZHNQZXJQYWdlOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSA9IHtcclxuICB3b3Jkc1BlclBhZ2U6IDEwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlOyIsImV4cG9ydCBjb25zdCBXT1JEU19SRVFVRVNUID0gJ1dPUkRTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgV09SRFNfU1VDQ0VTUyA9ICdXT1JEU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFdPUkRTX0ZBSUxVUkUgPSAnV09SRFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5GT19XT1JEU19SRVFVRVNUID0gJ0lORk9fV09SRFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBJTkZPX1dPUkRTX1NVQ0NFU1MgPSAnSU5GT19XT1JEU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IElORk9fV09SRFNfRkFJTFVSRSA9ICdJTkZPX1dPUkRTX0ZBSUxVUkUnOyIsIi8vIG1vZHVsZXNcclxuaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vIGN1c3RvbVxyXG5pbXBvcnQgaW5pdGFsU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3N0b3JlJztcclxuaW1wb3J0IHtcclxuICBXT1JEU19SRVFVRVNULFxyXG4gIFdPUkRTX1NVQ0NFU1MsXHJcbiAgV09SRFNfRkFJTFVSRSxcclxuXHJcbiAgSU5GT19XT1JEU19SRVFVRVNULFxyXG4gIElORk9fV09SRFNfU1VDQ0VTUyxcclxuICBJTkZPX1dPUkRTX0ZBSUxVUkVcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5cclxudHlwZSByZWR1Y2VyID0gUmVkdWNlcjxpbml0YWxTdGF0ZSwgYWN0aW9uPjtcclxuXHJcbmNvbnN0IHJlZHVjZXI6IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFdPUkRTX1JFUVVFU1Q6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgV09SRFNfU1VDQ0VTUzoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHdvcmRzOiBhY3Rpb24ucGF5bG9hZH1cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFdPUkRTX0ZBSUxVUkU6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYXNlIElORk9fV09SRFNfUkVRVUVTVDoge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBJTkZPX1dPUkRTX1NVQ0NFU1M6IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBjb3VudFdvcmRzOiBhY3Rpb24ucGF5bG9hZC5jb3VudFdvcmRzfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgSU5GT19XT1JEU19GQUlMVVJFOiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbnRlcmZhY2Ugd29yZHNTdGF0ZSB7XHJcbiAgd29yZHM6IEFycmF5PHtlbjogc3RyaW5nOyBydTogc3RyaW5nO30+O1xyXG4gIGNvdW50V29yZHM6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IHdvcmRzU3RhdGU6IHdvcmRzU3RhdGUgPSB7XHJcbiAgd29yZHM6IFtdLFxyXG4gIGNvdW50V29yZHM6IDAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3b3Jkc1N0YXRlOyIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGVzLCBnZXRJbmZvIH0gZnJvbSAnbW9kZWwvd29yZHMvYmFjayc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvcmRzID0gUm91dGVyKClcclxuICAuZ2V0KCcvd29yZHMvJywgYXN5bmMgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcclxuICAgIHJlcy5yZWRpcmVjdCgnL3dvcmRzLzEnKTtcclxuICAgIFxyXG4gICAgbmV4dCgpO1xyXG4gIH0pXHJcbiAgLmdldCgnL3dvcmRzLzppZD8nLCBhc3luYyBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuXHJcbiAgICByZXEuX3JlZHV4U3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnV09SRFNfU1VDQ0VTUycsXHJcbiAgICAgIHBheWxvYWQ6IGF3YWl0IGdldFRyYW5zbGF0ZXMoMTAsIGlkICogMTApXHJcbiAgICB9KTtcclxuICAgIHJlcS5fcmVkdXhTdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdJTkZPX1dPUkRTX1NVQ0NFU1MnLFxyXG4gICAgICBwYXlsb2FkOiBhd2FpdCBnZXRJbmZvKClcclxuICAgIH0pO1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9KVxyXG4gIC5wb3N0KCcvd29yZHMvKicsIGJvZHlQYXJzZXIuanNvbigpKVxyXG4gIC5wb3N0KCcvd29yZHMvZ2V0VHJhbnNsYXRlcycsIGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICByZXMuanNvbihhd2FpdCBnZXRUcmFuc2xhdGVzKHJlcS5ib2R5WydsaW1pdCddLCByZXEuYm9keVsnb2Zmc2V0J10pKTtcclxuICAgIG5leHQoKTtcclxuICB9KVxyXG4gIC5wb3N0KCcvd29yZHMvZ2V0SW5mbycsIGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICByZXMuanNvbihhd2FpdCBnZXRJbmZvKCkpO1xyXG4gICAgbmV4dCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFt3b3Jkc107XHJcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0ICAgIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IENodW5rRXh0cmFjdG9yIH0gZnJvbSAnQGxvYWRhYmxlL3NlcnZlcic7XHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlbG1ldCwgeyBIZWxtZXREYXRhIH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbmltcG9ydCBjbGllbnQgZnJvbSAnY2xpZW50JzsgLy8gd2lsbCBjaGFuZ2VkIHRvIHJlcXVpcmUoJy4vcHVibGljL2NsaWVudC5qcycpIGluIHByb2RcclxuaW1wb3J0IFJvdXRlcyBmcm9tICdyb3V0aW5nL2JhY2snO1xyXG5cclxuY29uc3Qgc3RhdHNGaWxlID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2J1aWxkL2xvYWRhYmxlLXN0YXRzLmpzb24nKTtcclxuXHJcbmNvbnN0IGV4dHJhY3RvciA9IG5ldyBDaHVua0V4dHJhY3Rvcih7IHN0YXRzRmlsZSB9KVxyXG5cclxubGV0IGNsaWVudE5hbWU6IHN0cmluZywgYXNzZXRVcmw6IHN0cmluZywgc3RhdGljUGF0aDogc3RyaW5nO1xyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBzdGF0aWNQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgYC4uL3B1YmxpYy9gKTtcclxuICBhc3NldFVybCA9IGBodHRwOi8vJHtwcm9jZXNzLmVudi5ITVJfU0VSVkVSX0hPU1R9OiR7cHJvY2Vzcy5lbnYuSE1SX1NFUlZFUl9QT1JUfS9gO1xyXG4gIGNsaWVudE5hbWUgPSBgY2xpZW50LmpzYDtcclxufSBlbHNlIHsgLy8gaWYgcHJvZCB3aWxsIGJlIHJlcXVpcmUgZnJvbSBjbGllbnQgYnVuZGxlXHJcbiAgc3RhdGljUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGAuL3B1YmxpYy9gKTtcclxuICBhc3NldFVybCA9ICcvJztcclxuICBjbGllbnROYW1lID0gYGNsaWVudC0ke19fd2VicGFja19oYXNoX199LmpzYDtcclxufSBcclxuXHJcbmNvbnN0IFNlcnZlciA9IGV4cHJlc3MoKTtcclxuY29uc3QgUmVhY3RBcHAgPSBjbGllbnQuQXBwO1xyXG5cclxuU2VydmVyLnVzZShgL2Zhdmljb24uaWNvYCwgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKHN0YXRpY1BhdGgsICdmYXZpY29uLmljbycpKSk7XHJcblNlcnZlci51c2UoYC9wdWJsaWNgLCBleHByZXNzLnN0YXRpYyhzdGF0aWNQYXRoKSk7XHJcblNlcnZlci51c2UoYC9wdWJsaWMvJHtjbGllbnROYW1lfWAsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIGAvcHVibGljL2NsaWVudC5qc2ApKSk7XHJcblNlcnZlci5wb3N0KGAvVVBEQVRFX1NUT1JFYCwgYm9keVBhcnNlci5qc29uKCksIChyZXEsIHJlcykgPT4ge1xyXG4gIC8vIGNvbnN0IHN0b3JlID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKHJlcS5ib2R5LlJFRFVYX1NUQVRFKTsgLy8gQUREIENIRUNLIFxyXG4gIHJlcy5yZWRpcmVjdCgzMDIsICdiYWNrJyk7XHJcbn0pO1xyXG5cclxuU2VydmVyLmdldCgnKicsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY2xpZW50LmNvbmZpZ3VyZVN0b3JlKCk7XHJcbiAgcmVxLl9yZWR1eFN0b3JlID0gc3RvcmU7XHJcbiAgbmV4dCgpO1xyXG59KTtcclxuXHJcbmZvciAobGV0IFJvdXRlIG9mIFJvdXRlcykge1xyXG4gIFNlcnZlci51c2UoUm91dGUpO1xyXG59XHJcblxyXG5TZXJ2ZXIuZ2V0KCcqJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICBjb25zdCBzdG9yZSA9IHJlcS5fcmVkdXhTdG9yZTtcclxuICBjb25zdCBjb250ZXh0ID0ge307XHJcblxyXG4gIGNvbnN0IHNlcnZlclByb3ZpZGVyID0gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9IGNvbnRleHQ9e2NvbnRleHR9PlxyXG4gICAgICAgIDxSZWFjdEFwcCAvPlxyXG4gICAgICA8L1N0YXRpY1JvdXRlcj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxuICBcclxuICB0cnkge1xyXG4gICAgY29uc3QganN4ID0gZXh0cmFjdG9yLmNvbGxlY3RDaHVua3Moc2VydmVyUHJvdmlkZXIpO1xyXG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xyXG4gICAgY29uc3QgY3NzID0gc2hlZXQuZ2V0U3R5bGVUYWdzKCk7XHJcbiAgICBjb25zdCBodG1sID0gUmVhY3REb20ucmVuZGVyVG9TdHJpbmcoanN4KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmVuZChyZW5kZXJIVE1MKGh0bWwsIGNzcywgc3RvcmUuZ2V0U3RhdGUoKSkpO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgcmV0dXJuIHJlcy5lbmQocmVuZGVySFRNTCgnU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gdGhlIHNlcnZlciE8YnIgLz4nICsgZS5tZXNzYWdlKSk7XHJcbiAgfVxyXG59KTtcclxuU2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5TRVJWRVJfUE9SVCwgKCkgPT4gY29uc29sZS5sb2coJ1NlcnZlciBpcyBydW5pbmchJykpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySFRNTChhcHBDb250ZW50OiBhbnksIGNzcyA9ICcnLCBzdGF0ZSA9IHt9KSB7XHJcbiAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xyXG5cclxuICByZXR1cm4gYFxyXG4gIDwhRE9DVFlQRSBodG1sPlxyXG4gIDxodG1sICR7aGVsbWV0Lmh0bWxBdHRyaWJ1dGVzLnRvU3RyaW5nKCl9PiBcclxuICAgIDxoZWFkPiBcclxuICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cclxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICR7aGVsbWV0Lm1ldGEudG9TdHJpbmcoKX1cclxuICAgICAgJHtoZWxtZXQubGluay50b1N0cmluZygpfVxyXG4gICAgICAke2Nzc31cclxuICAgICAgPHNjcmlwdD53aW5kb3cuUkVEVVhfU1RBVEUgPSAke0pTT04uc3RyaW5naWZ5KHN0YXRlKX08L3NjcmlwdD5cclxuICAgIDwvaGVhZD5cclxuICAgIDxib2R5ICR7aGVsbWV0LmJvZHlBdHRyaWJ1dGVzLnRvU3RyaW5nKCl9PlxyXG4gICAgICA8ZGl2IGlkPVwiYXBwLXJvb3RcIj4ke2FwcENvbnRlbnR9PC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiBzcmM9XCIke2Fzc2V0VXJsfXB1YmxpYy8ke2NsaWVudE5hbWV9XCI+PC9zY3JpcHQ+XHJcbiAgICA8L2JvZHk+XHJcbiAgPC9odG1sPlxyXG4gIGA7XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIFJlZHVjZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgYXBwU3RhdGUgZnJvbSAnQXBwL3N0YXRlJztcclxuaW1wb3J0IGFwcFJlZHVjZXIgZnJvbSAnQXBwL3JlZHVjZXInO1xyXG5pbXBvcnQgc2V0dGluZ3NTdGF0ZSBmcm9tICdwYWdlcy9TZXR0aW5ncy9zdGF0ZSc7XHJcbmltcG9ydCBzZXR0aW5nc1JlZHVjZXIgZnJvbSAncGFnZXMvU2V0dGluZ3MvcmVkdWNlcic7XHJcbmltcG9ydCB3b3Jkc1N0YXRlIGZyb20gJ3BhZ2VzL1dvcmRzL3N0YXRlJztcclxuaW1wb3J0IHdvcmRzUmVkdWNlciBmcm9tICdwYWdlcy9Xb3Jkcy9yZWR1Y2VyJztcclxuXHJcblxyXG5leHBvcnQgdHlwZSBhY3Rpb24gPSB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZD86IGFueTsgfTtcclxuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gIShcclxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxyXG4gIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XHJcbik7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgcm91dGVyOiB7fSxcclxuICBhcHA6IGFwcFN0YXRlLFxyXG4gIHNldHRpbmdzOiBzZXR0aW5nc1N0YXRlLFxyXG4gIHdvcmRzOiB3b3Jkc1N0YXRlXHJcbn07XHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gIWlzU2VydmVyID8gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSA6IGNyZWF0ZU1lbW9yeUhpc3RvcnkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZSA9IGRlZmF1bHRTdGF0ZSk6IFN0b3JlIHtcclxuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gIWlzU2VydmVyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGNvbXBvc2U7XHJcbiAgXHJcbiAgY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSk7XHJcbiAgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8dHlwZW9mIGluaXRpYWxTdGF0ZT4oe1xyXG4gICAgcm91dGVyOiBjb25uZWN0Um91dGVyKGhpc3RvcnkpIGFzIGFueSxcclxuICAgIGFwcDogYXBwUmVkdWNlcixcclxuICAgIHNldHRpbmdzOiBzZXR0aW5nc1JlZHVjZXIsXHJcbiAgICB3b3Jkczogd29yZHNSZWR1Y2VyXHJcbiAgfSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZTx0eXBlb2YgaW5pdGlhbFN0YXRlLCBhY3Rpb24sIGFueSwgYW55Pihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XHJcblxyXG4gIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnQXBwL3JlZHVjZXInLCAoKSA9PiB7XHJcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGFwcFJlZHVjZXIpXHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgncGFnZXMvU2V0dGluZ3MvcmVkdWNlcicsICgpID0+IHtcclxuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoc2V0dGluZ3NSZWR1Y2VyKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJ3BhZ2VzL1dvcmRzL3JlZHVjZXInLCAoKSA9PiB7XHJcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHdvcmRzUmVkdWNlcilcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiIsImNvbnN0IGJvb2sgPSB7XHJcbiAgaG9tZToge1xyXG4gICAgcm9vdDogKCkgPT4gJy8nXHJcbiAgfSxcclxuICBzZXR0aW5nczoge1xyXG4gICAgcm9vdDogKCkgPT4gJy9zZXR0aW5ncycsXHJcbiAgICB1c2VyOiAoKSA9PiAnL3NldHRpbmdzL3VzZXInLFxyXG4gICAgYXV0aDogKCkgPT4gJy9zZXR0aW5ncy91c2VyL2F1dGgnXHJcbiAgfSxcclxuICB3b3Jkczoge1xyXG4gICAgcm9vdDogKGlkOiBhbnkgPSAnOmlkJykgPT4gJy93b3Jkcy8nICsgaWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2s7IiwiaW1wb3J0IHNjIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvciA9IHNjLmRpdmBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yVGl0bGUgPSBzYy5oMWBcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JEZXNjID0gc2MucGBcclxuXHJcbmA7IiwiLy8gbW9kdWxlc1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBhc3NldHNcclxuaW1wb3J0IHtcclxuICBFcnJvcixcclxuICBFcnJvclRpdGxlLFxyXG4gIEVycm9yRGVzY1xyXG59IGZyb20gJy4vYXNzZXRzL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBIYXNFcnJvclByb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjaGlsZHJlbjogYW55O1xyXG59O1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBoYXNFcnJvcjogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgSGFzRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SGFzRXJyb3JQcm9wcywgU3RhdGU+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGhhc0Vycm9yOiBmYWxzZVxyXG4gIH07XHJcbiAgZXJyb3I6IEVycm9yIHwgbnVsbCA9IG51bGw7XHJcbiAgaW5mbzogUmVhY3QuRXJyb3JJbmZvIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IGFueSwgZXJyb3JJbmZvOiBhbnkpIHtcclxuICAvLyAgIGNvbnNvbGUuZGlyKCdlcnJycm9ycnInLCBlcnJvcik7XHJcbiAgLy8gICBjb25zb2xlLmRpcignZXJycnJvcnJyJywgZXJyb3JJbmZvKTtcclxuICAvLyAgIHJldHVybiB7ZXJyb3I6ICdlcnJvckluZm8nfTtcclxuICAvLyB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBpbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcclxuICAgIC8vIGxvZ2dlci5pbmZvKCdjb21wb25lbnQgZGlkIGNhdGNoJyk7XHJcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB0aGlzLmluZm8gPSBpbmZvO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBoYXNFcnJvcjogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbG9nZ2VyLmluZm8oaW5mbyk7XHJcblxyXG4gICAgLy8gbG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGhhc0Vycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaGFzRXJyb3IgPyAoXHJcbiAgICAgIDxFcnJvciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgPEVycm9yVGl0bGU+U29tZXRoaW5nIGJhZCBoYXBwZW5zPC9FcnJvclRpdGxlPlxyXG4gICAgICAgIDxFcnJvckRlc2M+e3RoaXMuZXJyb3IgJiYgdGhpcy5lcnJvci5tZXNzYWdlfTwvRXJyb3JEZXNjPlxyXG4gICAgICAgIDxFcnJvckRlc2M+XHJcbiAgICAgICAgICB7dGhpcy5pbmZvICYmIHRoaXMuaW5mby5jb21wb25lbnRTdGFja1xyXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXHJcbiAgICAgICAgICAgIC5maWx0ZXIodHJhY2UgPT4gISF0cmFjZSlcclxuICAgICAgICAgICAgLm1hcCgodHJhY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfSB7dHJhY2V9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRXJyb3JEZXNjPlxyXG4gICAgICA8L0Vycm9yPlxyXG4gICAgKSA6IGNoaWxkcmVuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFzRXJyb3I7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbG9hZGFibGUvc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwLWVxdWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNoYWxsb3dlcXVhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDblNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQVVBO0FBQ0E7QUFWQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFJQTtBQVNBO0FBSUE7QUFPQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQVNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUF1QkE7QUFDQTtBQXZCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBR0E7QUFRQTtBQUtBO0FBTUE7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFzQkE7QUFDQTtBQXRCQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0EsZUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7O0FBVkE7QUFXQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF4QkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFFQTs7Ozs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUVBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBO0FBQ0E7QUFHQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTtBQUNBO0FBSUE7Ozs7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTtBQUFBOzs7Ozs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFBQTs7Ozs7OztBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQSxlQVlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBVEE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBNENBO0FBekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0RUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
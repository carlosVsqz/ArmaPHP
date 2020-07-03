/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../coreui/src/App.vue":
/*!*****************************!*\
  !*** ../coreui/src/App.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2756f7c8& */ "../coreui/src/App.vue?vue&type=template&id=2756f7c8&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "../coreui/src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "../coreui/src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/App.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ../coreui/src/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../laravel/node_modules/babel-loader/lib??ref--4-0!../../laravel/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/App.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************!*\
  !*** ../coreui/src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../laravel/node_modules/style-loader!../../laravel/node_modules/css-loader!../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../laravel/node_modules/postcss-loader/src??ref--7-2!../../laravel/node_modules/sass-loader/dist/cjs.js??ref--7-3!../../laravel/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_7_2_laravel_node_modules_sass_loader_dist_cjs_js_ref_7_3_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../coreui/src/App.vue?vue&type=template&id=2756f7c8&":
/*!************************************************************!*\
  !*** ../coreui/src/App.vue?vue&type=template&id=2756f7c8& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../laravel/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2756f7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=template&id=2756f7c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2756f7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../coreui/src/assets/icons/icons.js":
/*!*******************************************!*\
  !*** ../coreui/src/assets/icons/icons.js ***!
  \*******************************************/
/*! exports provided: iconsSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconsSet", function() { return iconsSet; });
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "../coreui/src/assets/icons/logo.js");




var iconsSet = Object.assign({}, {
  logo: _logo__WEBPACK_IMPORTED_MODULE_1__["logo"]
}, {
  cilArrowRight: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilBan: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilBasket: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilBell: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCalculator: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCalendar: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCloudDownload: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilChartPie: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCheck: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilChevronBottom: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilChevronTop: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCheckCircle: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCommentSquare: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilCursor: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilDrop: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilDollar: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilEnvelopeClosed: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilEnvelopeOpen: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilEuro: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilGlobeAlt: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilGrid: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilFile: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilJustifyCenter: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilLaptop: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilLayers: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilLightbulb: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilList: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilLocationPin: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilLockLocked: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilMagnifyingGlass: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilMoon: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilOptions: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilPencil: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilPeople: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilPuzzle: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilSettings: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilShieldAlt: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilSpeech: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilSpeedometer: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilStar: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilTask: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilUser: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilUserFemale: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilUserFollow: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cilXCircle: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  cifUs: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cifBr: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cifIn: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cifFr: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cifEs: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cifPl: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  cibFacebook: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibTwitter: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibLinkedin: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibFlickr: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibTumblr: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibXing: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibGithub: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibStackOverflow: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibYoutube: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibDribbble: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibInstagram: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibPinterest: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibVk: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibYahoo: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibBehance: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibReddit: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibVimeo: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibCcMastercard: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibCcVisa: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibStripe: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibPaypal: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibGooglePay: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  cibCcAmex: !(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});

/***/ }),

/***/ "../coreui/src/assets/icons/logo.js":
/*!******************************************!*\
  !*** ../coreui/src/assets/icons/logo.js ***!
  \******************************************/
/*! exports provided: logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return logo; });
var logo = ['556 134', '<g><g style="fill:#1bbd93;"><path d="M347.9818,90.0869l-11.84-43.52-.0644-.1924q0-.5112.6406-.5117h1.2793a.66.66,0,0,1,.7051.5762l10.623,39.68c.042.0859.0859.1279.1289.1279.041,0,.084-.042.127-.1279l10.625-39.68a.657.657,0,0,1,.7031-.5762h1.2168a.54.54,0,0,1,.5762.7041l-11.9043,43.52a.6584.6584,0,0,1-.7041.5761h-1.4082A.6577.6577,0,0,1,347.9818,90.0869Z"/><path d="M382.2786,89.5751a10.9023,10.9023,0,0,1-4.3515-4.5439,14.4586,14.4586,0,0,1-1.5362-6.7842V46.5029a.5656.5656,0,0,1,.64-.64h1.2168a.5659.5659,0,0,1,.64.64v32a10.5488,10.5488,0,0,0,2.72,7.5527,10.36,10.36,0,0,0,14.3359,0,10.5493,10.5493,0,0,0,2.7207-7.5527v-32a.5655.5655,0,0,1,.64-.64h1.2159a.5666.5666,0,0,1,.6406.64V78.247a13.01,13.01,0,0,1-3.3926,9.376,11.8974,11.8974,0,0,1-9.0234,3.5527A12.8481,12.8481,0,0,1,382.2786,89.5751Z"/><path d="M439.5843,48.1035H419.5521a.2263.2263,0,0,0-.2559.2558V66.8554a.2259.2259,0,0,0,.2559.2559h13.8242a.5665.5665,0,0,1,.6406.64v.96a.5665.5665,0,0,1-.6406.6406H419.5521a.2263.2263,0,0,0-.2559.2559v18.56a.2259.2259,0,0,0,.2559.2559h20.0322a.5665.5665,0,0,1,.64.6406v.96a.5655.5655,0,0,1-.64.64H417.4407a.5654.5654,0,0,1-.6406-.64v-43.52a.5658.5658,0,0,1,.6406-.64h22.1436a.5659.5659,0,0,1,.64.64v.96A.5658.5658,0,0,1,439.5843,48.1035Z"/><path d="M454.5921,89.5117a2.8385,2.8385,0,0,1-.8-2.0489,2.9193,2.9193,0,0,1,.8-2.1113,2.7518,2.7518,0,0,1,2.0791-.832,2.8465,2.8465,0,0,1,2.9443,2.9433,2.7561,2.7561,0,0,1-.832,2.08,2.9208,2.9208,0,0,1-2.1123.8008A2.7521,2.7521,0,0,1,454.5921,89.5117Z"/><path d="M474.931,88.0078a11.3087,11.3087,0,0,1-3.2-8.4161v-5.44a.5655.5655,0,0,1,.64-.64h1.2158a.5662.5662,0,0,1,.6407.64v5.5039a9.1421,9.1421,0,0,0,2.5283,6.72,8.9734,8.9734,0,0,0,6.6875,2.5606,8.7916,8.7916,0,0,0,9.28-9.28V46.5029a.5655.5655,0,0,1,.64-.64h1.2158a.5656.5656,0,0,1,.64.64V79.5917a11.2541,11.2541,0,0,1-3.2315,8.4161,13.0621,13.0621,0,0,1-17.0556,0Z"/><path d="M512.8753,88.1035a10.4847,10.4847,0,0,1-3.36-8.128v-1.792a.5665.5665,0,0,1,.6406-.6406h1.0879a.5666.5666,0,0,1,.64.6406v1.6a8.5461,8.5461,0,0,0,2.752,6.6563,10.5361,10.5361,0,0,0,7.36,2.4961,9.8741,9.8741,0,0,0,6.9766-2.3682,8.2188,8.2188,0,0,0,2.56-6.3359,8.3952,8.3952,0,0,0-1.12-4.416,11.3752,11.3752,0,0,0-3.3281-3.3926,71.6866,71.6866,0,0,0-6.1758-3.7119,71.0151,71.0151,0,0,1-6.24-3.84,12.1824,12.1824,0,0,1-3.4238-3.68,10.2659,10.2659,0,0,1-1.28-5.3437,9.86,9.86,0,0,1,3.0723-7.7441,12.0126,12.0126,0,0,1,8.3193-2.752q5.6969,0,8.9609,3.1035a10.8247,10.8247,0,0,1,3.2637,8.2246v1.6a.5658.5658,0,0,1-.6406.64h-1.1514a.5651.5651,0,0,1-.64-.64V56.8076a8.8643,8.8643,0,0,0-2.6241-6.6885,9.9936,9.9936,0,0,0-7.2324-2.5274,9.37,9.37,0,0,0-6.5283,2.1436,7.8253,7.8253,0,0,0-2.3672,6.1123,7.8088,7.8088,0,0,0,1.0235,4.16,10.3978,10.3978,0,0,0,3.0078,3.039,63.0249,63.0249,0,0,0,5.9521,3.4883,70.7955,70.7955,0,0,1,6.72,4.2559,13.4613,13.4613,0,0,1,3.6485,3.9365,10.044,10.044,0,0,1,1.28,5.1836,10.7185,10.7185,0,0,1-3.2647,8.1924q-3.2637,3.0717-8.832,3.0722Q516.2342,91.1757,512.8753,88.1035Z"/></g><g style="fill:currentColor;"><g><path d="M99.367,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0337,12.0337,0,0,0-6,10.3924V91.4833a12.0331,12.0331,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0333,12.0333,0,0,0,6-10.3923V46.45A12.0336,12.0336,0,0,0,99.367,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/><path d="M77.3886,82.0046h-2.866a4.0007,4.0007,0,0,0-1.9247.4934L55.3172,91.9833,35.367,80.4648V57.4872l19.95-11.5185L72.606,55.4236a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.16,38.9521a8.0389,8.0389,0,0,0-7.8427.09L31.3665,50.56a8.0245,8.0245,0,0,0-3.9995,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0427,8.0427,0,0,0,7.8432.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.3886,82.0046Z"/></g><g><path d="M172.1117,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0167,15.0167,0,0,0,172.1117,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/><path d="M135.4458,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9892.9892,0,0,0,.9842.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7161-13.8837A15.2881,15.2881,0,0,0,121.367,60.7968V77.2037A15.288,15.288,0,0,0,135.6112,92.62a15.0182,15.0182,0,0,0,15.7161-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9892.9892,0,0,0-.9842.865,7.0106,7.0106,0,0,1-7.868,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.4458,53.4211Z"/><path d="M218.2891,72.9277a12.1584,12.1584,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.324,46H196.367a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6215l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5912a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.3245,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/><path d="M260.367,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.367,46Z"/><path d="M298.367,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.367,46Z"/><rect x="307.367" y="46" width="8" height="38" rx="1"/></g></g></g>'];
/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 556 134">
  <g>
    <g style="fill:#1bbd93;">
      <path d="M347.9818,90.0869l-11.84-43.52-.0644-.1924q0-.5112.6406-.5117h1.2793a.66.66,0,0,1,.7051.5762l10.623,39.68c.042.0859.0859.1279.1289.1279.041,0,.084-.042.127-.1279l10.625-39.68a.657.657,0,0,1,.7031-.5762h1.2168a.54.54,0,0,1,.5762.7041l-11.9043,43.52a.6584.6584,0,0,1-.7041.5761h-1.4082A.6577.6577,0,0,1,347.9818,90.0869Z"/>
      <path d="M382.2786,89.5751a10.9023,10.9023,0,0,1-4.3515-4.5439,14.4586,14.4586,0,0,1-1.5362-6.7842V46.5029a.5656.5656,0,0,1,.64-.64h1.2168a.5659.5659,0,0,1,.64.64v32a10.5488,10.5488,0,0,0,2.72,7.5527,10.36,10.36,0,0,0,14.3359,0,10.5493,10.5493,0,0,0,2.7207-7.5527v-32a.5655.5655,0,0,1,.64-.64h1.2159a.5666.5666,0,0,1,.6406.64V78.247a13.01,13.01,0,0,1-3.3926,9.376,11.8974,11.8974,0,0,1-9.0234,3.5527A12.8481,12.8481,0,0,1,382.2786,89.5751Z"/>
      <path d="M439.5843,48.1035H419.5521a.2263.2263,0,0,0-.2559.2558V66.8554a.2259.2259,0,0,0,.2559.2559h13.8242a.5665.5665,0,0,1,.6406.64v.96a.5665.5665,0,0,1-.6406.6406H419.5521a.2263.2263,0,0,0-.2559.2559v18.56a.2259.2259,0,0,0,.2559.2559h20.0322a.5665.5665,0,0,1,.64.6406v.96a.5655.5655,0,0,1-.64.64H417.4407a.5654.5654,0,0,1-.6406-.64v-43.52a.5658.5658,0,0,1,.6406-.64h22.1436a.5659.5659,0,0,1,.64.64v.96A.5658.5658,0,0,1,439.5843,48.1035Z"/>
      <path d="M454.5921,89.5117a2.8385,2.8385,0,0,1-.8-2.0489,2.9193,2.9193,0,0,1,.8-2.1113,2.7518,2.7518,0,0,1,2.0791-.832,2.8465,2.8465,0,0,1,2.9443,2.9433,2.7561,2.7561,0,0,1-.832,2.08,2.9208,2.9208,0,0,1-2.1123.8008A2.7521,2.7521,0,0,1,454.5921,89.5117Z"/>
      <path d="M474.931,88.0078a11.3087,11.3087,0,0,1-3.2-8.4161v-5.44a.5655.5655,0,0,1,.64-.64h1.2158a.5662.5662,0,0,1,.6407.64v5.5039a9.1421,9.1421,0,0,0,2.5283,6.72,8.9734,8.9734,0,0,0,6.6875,2.5606,8.7916,8.7916,0,0,0,9.28-9.28V46.5029a.5655.5655,0,0,1,.64-.64h1.2158a.5656.5656,0,0,1,.64.64V79.5917a11.2541,11.2541,0,0,1-3.2315,8.4161,13.0621,13.0621,0,0,1-17.0556,0Z"/>
      <path d="M512.8753,88.1035a10.4847,10.4847,0,0,1-3.36-8.128v-1.792a.5665.5665,0,0,1,.6406-.6406h1.0879a.5666.5666,0,0,1,.64.6406v1.6a8.5461,8.5461,0,0,0,2.752,6.6563,10.5361,10.5361,0,0,0,7.36,2.4961,9.8741,9.8741,0,0,0,6.9766-2.3682,8.2188,8.2188,0,0,0,2.56-6.3359,8.3952,8.3952,0,0,0-1.12-4.416,11.3752,11.3752,0,0,0-3.3281-3.3926,71.6866,71.6866,0,0,0-6.1758-3.7119,71.0151,71.0151,0,0,1-6.24-3.84,12.1824,12.1824,0,0,1-3.4238-3.68,10.2659,10.2659,0,0,1-1.28-5.3437,9.86,9.86,0,0,1,3.0723-7.7441,12.0126,12.0126,0,0,1,8.3193-2.752q5.6969,0,8.9609,3.1035a10.8247,10.8247,0,0,1,3.2637,8.2246v1.6a.5658.5658,0,0,1-.6406.64h-1.1514a.5651.5651,0,0,1-.64-.64V56.8076a8.8643,8.8643,0,0,0-2.6241-6.6885,9.9936,9.9936,0,0,0-7.2324-2.5274,9.37,9.37,0,0,0-6.5283,2.1436,7.8253,7.8253,0,0,0-2.3672,6.1123,7.8088,7.8088,0,0,0,1.0235,4.16,10.3978,10.3978,0,0,0,3.0078,3.039,63.0249,63.0249,0,0,0,5.9521,3.4883,70.7955,70.7955,0,0,1,6.72,4.2559,13.4613,13.4613,0,0,1,3.6485,3.9365,10.044,10.044,0,0,1,1.28,5.1836,10.7185,10.7185,0,0,1-3.2647,8.1924q-3.2637,3.0717-8.832,3.0722Q516.2342,91.1757,512.8753,88.1035Z"/>
    </g>
    <g style="fill:currentColor;">
      <g>
        <path d="M99.367,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0337,12.0337,0,0,0-6,10.3924V91.4833a12.0331,12.0331,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0333,12.0333,0,0,0,6-10.3923V46.45A12.0336,12.0336,0,0,0,99.367,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>
        <path d="M77.3886,82.0046h-2.866a4.0007,4.0007,0,0,0-1.9247.4934L55.3172,91.9833,35.367,80.4648V57.4872l19.95-11.5185L72.606,55.4236a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.16,38.9521a8.0389,8.0389,0,0,0-7.8427.09L31.3665,50.56a8.0245,8.0245,0,0,0-3.9995,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0427,8.0427,0,0,0,7.8432.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.3886,82.0046Z"/>
      </g>
      <g>
        <path d="M172.1117,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0167,15.0167,0,0,0,172.1117,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>
        <path d="M135.4458,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9892.9892,0,0,0,.9842.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7161-13.8837A15.2881,15.2881,0,0,0,121.367,60.7968V77.2037A15.288,15.288,0,0,0,135.6112,92.62a15.0182,15.0182,0,0,0,15.7161-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9892.9892,0,0,0-.9842.865,7.0106,7.0106,0,0,1-7.868,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.4458,53.4211Z"/>
        <path d="M218.2891,72.9277a12.1584,12.1584,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.324,46H196.367a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6215l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5912a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.3245,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>
        <path d="M260.367,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.367,46Z"/>
        <path d="M298.367,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.367,46Z"/>
        <rect x="307.367" y="46" width="8" height="38" rx="1"/>
      </g>
    </g>
  </g>
</svg> */

/***/ }),

/***/ "../coreui/src/main.js":
/*!*****************************!*\
  !*** ../coreui/src/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/stable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "../coreui/src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../coreui/src/router/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/icons.js */ "../coreui/src/assets/icons/icons.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "../coreui/src/store.js");







!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).config.performance = true;
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use(!(function webpackMissingModule() { var e = new Error("Cannot find module '@coreui/vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
new !(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  icons: _assets_icons_icons_js__WEBPACK_IMPORTED_MODULE_3__["iconsSet"],
  template: '<App/>',
  components: {
    App: _App__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "../coreui/src/router/index.js":
/*!*************************************!*\
  !*** ../coreui/src/router/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

 // Containers

var TheContainer = function TheContainer() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/containers/TheContainer */ "../coreui/src/containers/TheContainer.vue"));
}; // Views


var Dashboard = function Dashboard() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! @/views/Dashboard */ "../coreui/src/views/Dashboard.vue"));
};

var Colors = function Colors() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @/views/theme/Colors */ "../coreui/src/views/theme/Colors.vue"));
};

var Typography = function Typography() {
  return __webpack_require__.e(/*! import() */ 69).then(__webpack_require__.bind(null, /*! @/views/theme/Typography */ "../coreui/src/views/theme/Typography.vue"));
};

var Charts = function Charts() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! @/views/charts/Charts */ "../coreui/src/views/charts/Charts.vue"));
};

var Widgets = function Widgets() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! @/views/widgets/Widgets */ "../coreui/src/views/widgets/Widgets.vue"));
}; // Views - Components


var Cards = function Cards() {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! @/views/base/Cards */ "../coreui/src/views/base/Cards.vue"));
};

var Forms = function Forms() {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! @/views/base/Forms */ "../coreui/src/views/base/Forms.vue"));
};

var Switches = function Switches() {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! @/views/base/Switches */ "../coreui/src/views/base/Switches.vue"));
};

var Tables = function Tables() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/views/base/Tables */ "../coreui/src/views/base/Tables.vue"));
};

var Tabs = function Tabs() {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! @/views/base/Tabs */ "../coreui/src/views/base/Tabs.vue"));
};

var Breadcrumbs = function Breadcrumbs() {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! @/views/base/Breadcrumbs */ "../coreui/src/views/base/Breadcrumbs.vue"));
};

var Carousels = function Carousels() {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! @/views/base/Carousels */ "../coreui/src/views/base/Carousels.vue"));
};

var Collapses = function Collapses() {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! @/views/base/Collapses */ "../coreui/src/views/base/Collapses.vue"));
};

var Jumbotrons = function Jumbotrons() {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! @/views/base/Jumbotrons */ "../coreui/src/views/base/Jumbotrons.vue"));
};

var ListGroups = function ListGroups() {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! @/views/base/ListGroups */ "../coreui/src/views/base/ListGroups.vue"));
};

var Navs = function Navs() {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! @/views/base/Navs */ "../coreui/src/views/base/Navs.vue"));
};

var Navbars = function Navbars() {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! @/views/base/Navbars */ "../coreui/src/views/base/Navbars.vue"));
};

var Paginations = function Paginations() {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! @/views/base/Paginations */ "../coreui/src/views/base/Paginations.vue"));
};

var Popovers = function Popovers() {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! @/views/base/Popovers */ "../coreui/src/views/base/Popovers.vue"));
};

var ProgressBars = function ProgressBars() {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! @/views/base/ProgressBars */ "../coreui/src/views/base/ProgressBars.vue"));
};

var Tooltips = function Tooltips() {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! @/views/base/Tooltips */ "../coreui/src/views/base/Tooltips.vue"));
}; // Views - Buttons


var StandardButtons = function StandardButtons() {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! @/views/buttons/StandardButtons */ "../coreui/src/views/buttons/StandardButtons.vue"));
};

var ButtonGroups = function ButtonGroups() {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! @/views/buttons/ButtonGroups */ "../coreui/src/views/buttons/ButtonGroups.vue"));
};

var Dropdowns = function Dropdowns() {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! @/views/buttons/Dropdowns */ "../coreui/src/views/buttons/Dropdowns.vue"));
};

var BrandButtons = function BrandButtons() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/views/buttons/BrandButtons */ "../coreui/src/views/buttons/BrandButtons.vue"));
}; // Views - Icons


var CoreUIIcons = function CoreUIIcons() {
  return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! @/views/icons/CoreUIIcons */ "../coreui/src/views/icons/CoreUIIcons.vue"));
};

var Brands = function Brands() {
  return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! @/views/icons/Brands */ "../coreui/src/views/icons/Brands.vue"));
};

var Flags = function Flags() {
  return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! @/views/icons/Flags */ "../coreui/src/views/icons/Flags.vue"));
}; // Views - Notifications


var Alerts = function Alerts() {
  return __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! @/views/notifications/Alerts */ "../coreui/src/views/notifications/Alerts.vue"));
};

var Badges = function Badges() {
  return __webpack_require__.e(/*! import() */ 59).then(__webpack_require__.bind(null, /*! @/views/notifications/Badges */ "../coreui/src/views/notifications/Badges.vue"));
};

var Modals = function Modals() {
  return __webpack_require__.e(/*! import() */ 60).then(__webpack_require__.bind(null, /*! @/views/notifications/Modals */ "../coreui/src/views/notifications/Modals.vue"));
}; // Views - Pages


var Page404 = function Page404() {
  return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! @/views/pages/Page404 */ "../coreui/src/views/pages/Page404.vue"));
};

var Page500 = function Page500() {
  return __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! @/views/pages/Page500 */ "../coreui/src/views/pages/Page500.vue"));
};

var Login = function Login() {
  return __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! @/views/pages/Login */ "../coreui/src/views/pages/Login.vue"));
};

var Register = function Register() {
  return __webpack_require__.e(/*! import() */ 64).then(__webpack_require__.bind(null, /*! @/views/pages/Register */ "../coreui/src/views/pages/Register.vue"));
}; // Users


var Users = function Users() {
  return __webpack_require__.e(/*! import() */ 72).then(__webpack_require__.bind(null, /*! @/views/users/Users */ "../coreui/src/views/users/Users.vue"));
};

var User = function User() {
  return __webpack_require__.e(/*! import() */ 71).then(__webpack_require__.bind(null, /*! @/views/users/User */ "../coreui/src/views/users/User.vue"));
};

var EditUser = function EditUser() {
  return __webpack_require__.e(/*! import() */ 70).then(__webpack_require__.bind(null, /*! @/views/users/EditUser */ "../coreui/src/views/users/EditUser.vue"));
}; //Notes


var Notes = function Notes() {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! @/views/notes/Notes */ "../coreui/src/views/notes/Notes.vue"));
};

var Note = function Note() {
  return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! @/views/notes/Note */ "../coreui/src/views/notes/Note.vue"));
};

var EditNote = function EditNote() {
  return __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! @/views/notes/EditNote */ "../coreui/src/views/notes/EditNote.vue"));
};

var CreateNote = function CreateNote() {
  return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! @/views/notes/CreateNote */ "../coreui/src/views/notes/CreateNote.vue"));
}; //Roles


var Roles = function Roles() {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! @/views/roles/Roles */ "../coreui/src/views/roles/Roles.vue"));
};

var Role = function Role() {
  return __webpack_require__.e(/*! import() */ 68).then(__webpack_require__.bind(null, /*! @/views/roles/Role */ "../coreui/src/views/roles/Role.vue"));
};

var EditRole = function EditRole() {
  return __webpack_require__.e(/*! import() */ 67).then(__webpack_require__.bind(null, /*! @/views/roles/EditRole */ "../coreui/src/views/roles/EditRole.vue"));
};

var CreateRole = function CreateRole() {
  return __webpack_require__.e(/*! import() */ 66).then(__webpack_require__.bind(null, /*! @/views/roles/CreateRole */ "../coreui/src/views/roles/CreateRole.vue"));
}; //Bread


var Breads = function Breads() {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @/views/bread/Breads */ "../coreui/src/views/bread/Breads.vue"));
};

var Bread = function Bread() {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @/views/bread/Bread */ "../coreui/src/views/bread/Bread.vue"));
};

var EditBread = function EditBread() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @/views/bread/EditBread */ "../coreui/src/views/bread/EditBread.vue"));
};

var CreateBread = function CreateBread() {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/views/bread/CreateBread */ "../coreui/src/views/bread/CreateBread.vue"));
};

var DeleteBread = function DeleteBread() {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! @/views/bread/DeleteBread */ "../coreui/src/views/bread/DeleteBread.vue"));
}; //Resources


var Resources = function Resources() {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! @/views/resources/Resources */ "../coreui/src/views/resources/Resources.vue"));
};

var CreateResource = function CreateResource() {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @/views/resources/CreateResources */ "../coreui/src/views/resources/CreateResources.vue"));
};

var Resource = function Resource() {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! @/views/resources/Resource */ "../coreui/src/views/resources/Resource.vue"));
};

var EditResource = function EditResource() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! @/views/resources/EditResource */ "../coreui/src/views/resources/EditResource.vue"));
};

var DeleteResource = function DeleteResource() {
  return __webpack_require__.e(/*! import() */ 65).then(__webpack_require__.bind(null, /*! @/views/resources/DeleteResource */ "../coreui/src/views/resources/DeleteResource.vue"));
}; //Email


var Emails = function Emails() {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @/views/email/Emails */ "../coreui/src/views/email/Emails.vue"));
};

var CreateEmail = function CreateEmail() {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! @/views/email/CreateEmail */ "../coreui/src/views/email/CreateEmail.vue"));
};

var EditEmail = function EditEmail() {
  return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! @/views/email/EditEmail */ "../coreui/src/views/email/EditEmail.vue"));
};

var ShowEmail = function ShowEmail() {
  return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! @/views/email/ShowEmail */ "../coreui/src/views/email/ShowEmail.vue"));
};

var SendEmail = function SendEmail() {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! @/views/email/SendEmail */ "../coreui/src/views/email/SendEmail.vue"));
};

var Menus = function Menus() {
  return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! @/views/menu/MenuIndex */ "../coreui/src/views/menu/MenuIndex.vue"));
};

var CreateMenu = function CreateMenu() {
  return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! @/views/menu/CreateMenu */ "../coreui/src/views/menu/CreateMenu.vue"));
};

var EditMenu = function EditMenu() {
  return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! @/views/menu/EditMenu */ "../coreui/src/views/menu/EditMenu.vue"));
};

var DeleteMenu = function DeleteMenu() {
  return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! @/views/menu/DeleteMenu */ "../coreui/src/views/menu/DeleteMenu.vue"));
};

var MenuElements = function MenuElements() {
  return __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! @/views/menuElements/ElementsIndex */ "../coreui/src/views/menuElements/ElementsIndex.vue"));
};

var CreateMenuElement = function CreateMenuElement() {
  return __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! @/views/menuElements/CreateMenuElement */ "../coreui/src/views/menuElements/CreateMenuElement.vue"));
};

var EditMenuElement = function EditMenuElement() {
  return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! @/views/menuElements/EditMenuElement */ "../coreui/src/views/menuElements/EditMenuElement.vue"));
};

var ShowMenuElement = function ShowMenuElement() {
  return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! @/views/menuElements/ShowMenuElement */ "../coreui/src/views/menuElements/ShowMenuElement.vue"));
};

var DeleteMenuElement = function DeleteMenuElement() {
  return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! @/views/menuElements/DeleteMenuElement */ "../coreui/src/views/menuElements/DeleteMenuElement.vue"));
};

var Media = function Media() {
  return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! @/views/media/Media */ "../coreui/src/views/media/Media.vue"));
};

!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/* harmony default export */ __webpack_exports__["default"] = (new !(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  mode: 'hash',
  // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: function scrollBehavior() {
    return {
      y: 0
    };
  },
  routes: configRoutes()
}));

function configRoutes() {
  return [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: TheContainer,
    children: [{
      path: 'media',
      name: 'Media',
      component: Media
    }, {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: 'colors',
      name: 'Colors',
      component: Colors
    }, {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }, {
      path: 'charts',
      name: 'Charts',
      component: Charts
    }, {
      path: 'widgets',
      name: 'Widgets',
      component: Widgets
    }, {
      path: 'menu',
      meta: {
        label: 'Menu'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Menus
      }, {
        path: 'create',
        meta: {
          label: 'Create Menu'
        },
        name: 'CreateMenu',
        component: CreateMenu
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit Menu'
        },
        name: 'EditMenu',
        component: EditMenu
      }, {
        path: ':id/delete',
        meta: {
          label: 'Delete Menu'
        },
        name: 'DeleteMenu',
        component: DeleteMenu
      }]
    }, {
      path: 'menuelement',
      meta: {
        label: 'MenuElement'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: ':menu/menuelement',
        component: MenuElements
      }, {
        path: ':menu/menuelement/create',
        meta: {
          label: 'Create Menu Element'
        },
        name: 'Create Menu Element',
        component: CreateMenuElement
      }, {
        path: ':menu/menuelement/:id',
        meta: {
          label: 'Menu Element Details'
        },
        name: 'Menu Element',
        component: ShowMenuElement
      }, {
        path: ':menu/menuelement/:id/edit',
        meta: {
          label: 'Edit Menu Element'
        },
        name: 'Edit Menu Element',
        component: EditMenuElement
      }, {
        path: ':menu/menuelement/:id/delete',
        meta: {
          label: 'Delete Menu Element'
        },
        name: 'Delete Menu Element',
        component: DeleteMenuElement
      }]
    }, {
      path: 'users',
      meta: {
        label: 'Users'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Users
      }, {
        path: ':id',
        meta: {
          label: 'User Details'
        },
        name: 'User',
        component: User
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit User'
        },
        name: 'Edit User',
        component: EditUser
      }]
    }, {
      path: 'notes',
      meta: {
        label: 'Notes'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Notes
      }, {
        path: 'create',
        meta: {
          label: 'Create Note'
        },
        name: 'Create Note',
        component: CreateNote
      }, {
        path: ':id',
        meta: {
          label: 'Note Details'
        },
        name: 'Note',
        component: Note
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit Note'
        },
        name: 'Edit Note',
        component: EditNote
      }]
    }, {
      path: 'roles',
      meta: {
        label: 'Roles'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Roles
      }, {
        path: 'create',
        meta: {
          label: 'Create Role'
        },
        name: 'Create Role',
        component: CreateRole
      }, {
        path: ':id',
        meta: {
          label: 'Role Details'
        },
        name: 'Role',
        component: Role
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit Role'
        },
        name: 'Edit Role',
        component: EditRole
      }]
    }, {
      path: 'bread',
      meta: {
        label: 'Bread'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Breads
      }, {
        path: 'create',
        meta: {
          label: 'Create Bread'
        },
        name: 'CreateBread',
        component: CreateBread
      }, {
        path: ':id',
        meta: {
          label: 'Bread Details'
        },
        name: 'Bread',
        component: Bread
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit Bread'
        },
        name: 'Edit Bread',
        component: EditBread
      }, {
        path: ':id/delete',
        meta: {
          label: 'Delete Bread'
        },
        name: 'Delete Bread',
        component: DeleteBread
      }]
    }, {
      path: 'email',
      meta: {
        label: 'Emails'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: '',
        component: Emails
      }, {
        path: 'create',
        meta: {
          label: 'Create Email Template'
        },
        name: 'Create Email Template',
        component: CreateEmail
      }, {
        path: ':id',
        meta: {
          label: 'Show Email Template'
        },
        name: 'Show Email Tempalte',
        component: ShowEmail
      }, {
        path: ':id/edit',
        meta: {
          label: 'Edit Email Tempalate'
        },
        name: 'Edit Email Template',
        component: EditEmail
      }, {
        path: ':id/sendEmail',
        meta: {
          label: 'Send Email'
        },
        name: 'Send Email',
        component: SendEmail
      }]
    }, {
      path: 'resource',
      meta: {
        label: 'Resources'
      },
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: ':bread/resource',
        component: Resources
      }, {
        path: ':bread/resource/create',
        meta: {
          label: 'Create Resource'
        },
        name: 'CreateResource',
        component: CreateResource
      }, {
        path: ':bread/resource/:id',
        meta: {
          label: 'Resource Details'
        },
        name: 'Resource',
        component: Resource
      }, {
        path: ':bread/resource/:id/edit',
        meta: {
          label: 'Edit Resource'
        },
        name: 'Edit Resource',
        component: EditResource
      }, {
        path: ':bread/resource/:id/delete',
        meta: {
          label: 'Delete Resource'
        },
        name: 'Delete Resource',
        component: DeleteResource
      }]
    }, {
      path: 'base',
      redirect: '/base/cards',
      name: 'Base',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: 'cards',
        name: 'Cards',
        component: Cards
      }, {
        path: 'forms',
        name: 'Forms',
        component: Forms
      }, {
        path: 'switches',
        name: 'Switches',
        component: Switches
      }, {
        path: 'tables',
        name: 'Tables',
        component: Tables
      }, {
        path: 'tabs',
        name: 'Tabs',
        component: Tabs
      }, {
        path: 'breadcrumb',
        name: 'Breadcrumb',
        component: Breadcrumbs
      }, {
        path: 'carousel',
        name: 'Carousel',
        component: Carousels
      }, {
        path: 'collapse',
        name: 'Collapse',
        component: Collapses
      }, {
        path: 'jumbotron',
        name: 'Jumbotron',
        component: Jumbotrons
      }, {
        path: 'list-group',
        name: 'List Group',
        component: ListGroups
      }, {
        path: 'navs',
        name: 'Navs',
        component: Navs
      }, {
        path: 'navbars',
        name: 'Navbars',
        component: Navbars
      }, {
        path: 'pagination',
        name: 'Pagination',
        component: Paginations
      }, {
        path: 'popovers',
        name: 'Popovers',
        component: Popovers
      }, {
        path: 'progress',
        name: 'Progress',
        component: ProgressBars
      }, {
        path: 'tooltips',
        name: 'Tooltips',
        component: Tooltips
      }]
    }, {
      path: 'buttons',
      redirect: '/buttons/standard-buttons',
      name: 'Buttons',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: 'buttons',
        name: 'Standard Buttons',
        component: StandardButtons
      }, {
        path: 'button-group',
        name: 'Button Group',
        component: ButtonGroups
      }, {
        path: 'dropdowns',
        name: 'Dropdowns',
        component: Dropdowns
      }, {
        path: 'brand-buttons',
        name: 'Brand Buttons',
        component: BrandButtons
      }]
    }, {
      path: 'icon',
      redirect: '/icons/coreui-icons',
      name: 'CoreUI Icons',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: 'coreui-icons',
        name: 'Icons library',
        component: CoreUIIcons
      }, {
        path: 'brands',
        name: 'Brands',
        component: Brands
      }, {
        path: 'flags',
        name: 'Flags',
        component: Flags
      }]
    }, {
      path: 'notifications',
      redirect: '/notifications/alerts',
      name: 'Notifications',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: [{
        path: 'alerts',
        name: 'Alerts',
        component: Alerts
      }, {
        path: 'badge',
        name: 'Badge',
        component: Badges
      }, {
        path: 'modals',
        name: 'Modals',
        component: Modals
      }]
    }]
  }, {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render: function render(c) {
        return c('router-view');
      }
    },
    children: [{
      path: '404',
      name: 'Page404',
      component: Page404
    }, {
      path: '500',
      name: 'Page500',
      component: Page500
    }]
  }, {
    path: '/',
    redirect: '/login',
    name: 'Auth',
    component: {
      render: function render(c) {
        return c('router-view');
      }
    },
    children: [{
      path: 'login',
      name: 'Login',
      component: Login
    }, {
      path: 'register',
      name: 'Register',
      component: Register
    }]
  }, {
    path: '*',
    name: '404',
    component: Page404
  }];
}

/***/ }),

/***/ "../coreui/src/store.js":
/*!******************************!*\
  !*** ../coreui/src/store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
};
var mutations = {
  toggleSidebarDesktop: function toggleSidebarDesktop(state) {
    var sidebarOpened = [true, 'responsive'].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : 'responsive';
  },
  toggleSidebarMobile: function toggleSidebarMobile(state) {
    var sidebarClosed = [false, 'responsive'].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : 'responsive';
  },
  set: function set(state, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        variable = _ref2[0],
        value = _ref2[1];

    state[variable] = value;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (new !(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Store({
  state: state,
  mutations: mutations
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App'
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\n@import \"~@coreui/coreui/scss/coreui\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n4 │ @import \"~@coreui/coreui/scss/coreui\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  ../coreui/src/assets/scss/style.scss 4:9  @import\n  stdin 13:9                                root stylesheet\n      in /home/admin_x/IdeaProjects/ESCod/ArmaPHP/coreui/src/assets/scss/style.scss (line 4, column 9)");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../laravel/node_modules/css-loader!../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../laravel/node_modules/postcss-loader/src??ref--7-2!../../laravel/node_modules/sass-loader/dist/cjs.js??ref--7-3!../../laravel/node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../laravel/node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/App.vue?vue&type=template&id=2756f7c8&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/App.vue?vue&type=template&id=2756f7c8& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
//require('./bootstrap');
//window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*
const app = new Vue({
   el: '#app',
});
*/
__webpack_require__(/*! ../../../coreui/src/main.js */ "../coreui/src/main.js");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\n@import \"~@coreui/coreui/scss/coreui\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n4 │ @import \"~@coreui/coreui/scss/coreui\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  ../coreui/src/assets/scss/style.scss 4:9  @import\n  stdin 15:9                                root stylesheet\n      in /home/admin_x/IdeaProjects/ESCod/ArmaPHP/coreui/src/assets/scss/style.scss (line 4, column 9)\n    at runLoaders (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass-loader/dist/index.js:89:7)\n    at Function.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:88152:16)\n    at _render_closure1.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:77577:12)\n    at _RootZone.runBinary$3$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26142:18)\n    at _RootZone.runBinary$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26146:19)\n    at _FutureListener.handleError$1 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24590:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24887:40)\n    at Object._Future__propagateToListeners (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24715:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24107:12)\n    at Object._asyncRethrow (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4065:17)\n    at /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:14085:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24128:12)\n    at _awaitOnObject_closure0.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24120:25)\n    at _RootZone.runBinary$3$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26142:18)\n    at _RootZone.runBinary$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26146:19)\n    at _FutureListener.handleError$1 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24590:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24887:40)\n    at Object._Future__propagateToListeners (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24715:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24107:12)\n    at Object._asyncRethrow (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4065:17)\n    at /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:16668:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24128:12)\n    at _awaitOnObject_closure0.call$2 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24120:25)\n    at _RootZone.runBinary$3$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26142:18)\n    at _RootZone.runBinary$3 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:26146:19)\n    at _FutureListener.handleError$1 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24590:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:24887:40)\n    at Object._Future__propagateToListeners (/home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/node_modules/sass/sass.dart.js:4311:88)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/admin_x/IdeaProjects/ESCod/ArmaPHP/laravel/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
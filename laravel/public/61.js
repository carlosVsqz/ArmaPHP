(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "../view/src/views/email/ShowEmail.vue":
/*!*********************************************!*\
  !*** ../view/src/views/email/ShowEmail.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowEmail.vue?vue&type=template&id=c725c938& */ "../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938&");
/* harmony import */ var _ShowEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowEmail.vue?vue&type=script&lang=js& */ "../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "view/src/views/email/ShowEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ShowEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938&":
/*!****************************************************************************!*\
  !*** ../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./ShowEmail.vue?vue&type=template&id=c725c938& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowEmail_vue_vue_type_template_id_c725c938___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../view/src/views/email/ShowEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../view/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'User',
  data: function data() {
    return {
      template: []
    };
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1); // this.$router.replace({path: '/users'})
    }
  },
  mounted: function mounted() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/mail/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token")).then(function (response) {
      self.template = response.data.template;
    })["catch"](function (error) {
      console.log(error);
      self.$router.push({
        path: '/login'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../view/src/views/email/ShowEmail.vue?vue&type=template&id=c725c938& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", lg: "6" } },
        [
          _c(
            "CCard",
            { attrs: { "no-header": "" } },
            [
              _c(
                "CCardBody",
                [
                  _c("h3", [_vm._v("Show Email Template")]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Name:")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.template.name))]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Subject:")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.template.subject))]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Content:")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.template.content))]),
                  _vm._v(" "),
                  _c(
                    "CButton",
                    { attrs: { color: "primary" }, on: { click: _vm.goBack } },
                    [_vm._v("Back")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
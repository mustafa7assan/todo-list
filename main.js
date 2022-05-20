/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-main-bg: #e9ecef;\n  --color-seconday: #2a9d8f;\n  --color-secondary-bg: #e76f51;\n  --color-teritary-bg: #264653;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-main-bg);\n  color: white;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Poppins', sans-serif;\n}\n\n.nav {\n  background-color: var(--color-secondary-bg);\n  position: fixed;\n  top: 0;\n  padding: 15px 30px;\n  width: 100%;\n  z-index: 2;\n}\n.nav__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.main {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  padding-top: 65px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.main > .left {\n  background-color: var(--color-teritary-bg);\n  padding: 20px 30px;\n}\n.main > .left .top {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.today {\n  font-size: 18px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border-radius: 5px;\n  padding: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.today:hover {\n  background-color: #e76f51;\n}\n.project-name {\n  text-transform: uppercase;\n}\n.projects-list__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-list__header h3 {\n  font-weight: 300;\n}\n.projects-list__header .left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 5px;\n}\n.projects__icon,\n.today__icon {\n  cursor: pointer;\n  font-size: 17px;\n}\n.main > .projects {\n  color: #444;\n  padding: 20px 30px;\n}\n.btn {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn--add-todo {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n.btn--add-todo:hover {\n  color: var(--color-seconday);\n}\n.project-name {\n  margin-bottom: 10px;\n}\n.add-todo-form {\n  width: 400px;\n  margin: auto;\n}\n.edit-todo-form {\n  width: 600px;\n}\n.add-todo-form label,\n.edit-todo-form label {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 5px;\n  color: rgb(22, 22, 22);\n}\n.add-todo-form input,\n.add-todo-form textarea,\n.two-input select,\n.edit-todo-form input,\n.edit-todo-form textarea,\n.edit-input select {\n  width: 100%;\n  padding: 10px 20px;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid var(--color-teritary-bg);\n  border-radius: 5px;\n  font-family: inherit;\n  font-size: 16px;\n}\n.add-todo-form textarea,\n.edit-todo-form textarea {\n  resize: none;\n}\n.add-todo-form ul,\n.edit-todo-form ul {\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.add-todo-form .two-input,\n.edit-todo-form .two-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.add-todo-form input::placeholder,\n.add-todo-form textarea::placeholder {\n  color: rgb(92, 92, 92);\n}\n.form__btn-add,\n.form__btn-cancle,\n.form__btn-save {\n  padding: 7px 10px;\n  color: white;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.form__btn-add,\n.form__btn-save {\n  background-color: var(--color-seconday);\n}\n.form__btn-cancle {\n  background-color: var(--color-secondary-bg);\n}\n.projects__list {\n  list-style: none;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n.projects__list li {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  text-transform: capitalize;\n}\n\n.btn-delete-project {\n  display: inline-block;\n  margin-left: auto;\n}\n.projects__list li:hover {\n  background-color: #e76f51;\n}\n.project__icon {\n  cursor: pointer;\n}\n.todo-container {\n  border: 1px solid rgba(192, 192, 192, 0.836);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n}\n.todo__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.todo__controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.projects-list__container {\n  width: 100%;\n}\n.done-icon,\n.edit-icon,\n.details-icon,\n.date-icon {\n  cursor: pointer;\n}\n.add-project-form {\n  gap: 5px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  margin-top: 8px;\n}\n.add-project-form input {\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #eee;\n  color: white;\n  background-color: transparent;\n  padding: 5px 10px;\n  font-family: inherit;\n}\n.add-project-form input::placeholder {\n  color: rgb(185, 185, 185);\n}\n.btn-add-project {\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #2a9d8f;\n}\n\n.modal {\n  width: 450px;\n  background-color: #e9ecef;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px 0;\n  border-radius: 5px;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.overlay {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.664);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n}\n.todo__description {\n  margin-bottom: 10px;\n}\n.todo__description + div {\n  display: flex;\n  gap: 50%;\n}\n.todo__details,\n.todo__edit {\n  margin-top: 10px;\n}\n\n.priority-1 {\n  border-left: 5px solid #f73232;\n}\n.priority-2 {\n  border-left: 5px solid #facc15;\n}\n.priority-3 {\n  border-left: 5px solid #22c55e;\n}\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --color-main-bg: #e9ecef;\n  --color-seconday: #2a9d8f;\n  --color-secondary-bg: #e76f51;\n  --color-teritary-bg: #264653;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-main-bg);\n  color: white;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Poppins', sans-serif;\n}\n\n.nav {\n  background-color: var(--color-secondary-bg);\n  position: fixed;\n  top: 0;\n  padding: 15px 30px;\n  width: 100%;\n  z-index: 2;\n}\n.nav__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.main {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  padding-top: 65px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.main > .left {\n  background-color: var(--color-teritary-bg);\n  padding: 20px 30px;\n}\n.main > .left .top {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.today {\n  font-size: 18px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border-radius: 5px;\n  padding: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.today:hover {\n  background-color: #e76f51;\n}\n.project-name {\n  text-transform: uppercase;\n}\n.projects-list__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-list__header h3 {\n  font-weight: 300;\n}\n.projects-list__header .left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 5px;\n}\n.projects__icon,\n.today__icon {\n  cursor: pointer;\n  font-size: 17px;\n}\n.main > .projects {\n  color: #444;\n  padding: 20px 30px;\n}\n.btn {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn--add-todo {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n.btn--add-todo:hover {\n  color: var(--color-seconday);\n}\n.project-name {\n  margin-bottom: 10px;\n}\n.add-todo-form {\n  width: 400px;\n  margin: auto;\n}\n.edit-todo-form {\n  width: 600px;\n}\n.add-todo-form label,\n.edit-todo-form label {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 5px;\n  color: rgb(22, 22, 22);\n}\n.add-todo-form input,\n.add-todo-form textarea,\n.two-input select,\n.edit-todo-form input,\n.edit-todo-form textarea,\n.edit-input select {\n  width: 100%;\n  padding: 10px 20px;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid var(--color-teritary-bg);\n  border-radius: 5px;\n  font-family: inherit;\n  font-size: 16px;\n}\n.add-todo-form textarea,\n.edit-todo-form textarea {\n  resize: none;\n}\n.add-todo-form ul,\n.edit-todo-form ul {\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.add-todo-form .two-input,\n.edit-todo-form .two-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.add-todo-form input::placeholder,\n.add-todo-form textarea::placeholder {\n  color: rgb(92, 92, 92);\n}\n.form__btn-add,\n.form__btn-cancle,\n.form__btn-save {\n  padding: 7px 10px;\n  color: white;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.form__btn-add,\n.form__btn-save {\n  background-color: var(--color-seconday);\n}\n.form__btn-cancle {\n  background-color: var(--color-secondary-bg);\n}\n.projects__list {\n  list-style: none;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n.projects__list li {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  text-transform: capitalize;\n}\n\n.btn-delete-project {\n  display: inline-block;\n  margin-left: auto;\n}\n.projects__list li:hover {\n  background-color: #e76f51;\n}\n.project__icon {\n  cursor: pointer;\n}\n.todo-container {\n  border: 1px solid rgba(192, 192, 192, 0.836);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n}\n.todo__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.todo__controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.projects-list__container {\n  width: 100%;\n}\n.done-icon,\n.edit-icon,\n.details-icon,\n.date-icon {\n  cursor: pointer;\n}\n.add-project-form {\n  gap: 5px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  margin-top: 8px;\n}\n.add-project-form input {\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #eee;\n  color: white;\n  background-color: transparent;\n  padding: 5px 10px;\n  font-family: inherit;\n}\n.add-project-form input::placeholder {\n  color: rgb(185, 185, 185);\n}\n.btn-add-project {\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #2a9d8f;\n}\n\n.modal {\n  width: 450px;\n  background-color: #e9ecef;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px 0;\n  border-radius: 5px;\n  z-index: 3;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.overlay {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.664);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n}\n.todo__description {\n  margin-bottom: 10px;\n}\n.todo__description + div {\n  display: flex;\n  gap: 50%;\n}\n.todo__details,\n.todo__edit {\n  margin-top: 10px;\n}\n\n.priority-1 {\n  border-left: 5px solid #f73232;\n}\n.priority-2 {\n  border-left: 5px solid #facc15;\n}\n.priority-3 {\n  border-left: 5px solid #22c55e;\n}\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });

function Project(name) {
  this.name = name;
  this.todos = [];
}



/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });


const Storage = (() => {
  const saveTodo = (projectName, todo) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos')) || {};
    if (!projectTodos[projectName]) {
      projectTodos[projectName] = [];
    }
    projectTodos[projectName].push(todo);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
  };
  const deleteTodo = (projectName, index) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos'));
    projectTodos[projectName].splice(index, 1);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
    return {};
  };
  const retriveTodos = projectName => {
    const pTodos = JSON.parse(localStorage.getItem('projectTodos'));
    return pTodos[projectName];
  };

  const saveProject = project => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    if (!projects.some(p => p.name === project.name)) {
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  };
  const deleteProject = index => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const retriveProjects = () => {
    return JSON.parse(localStorage.getItem('projects'));
  };
  return {
    saveTodo,
    retriveTodos,
    deleteTodo,
    saveProject,
    retriveProjects,
    deleteProject,
  };
})();




/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });


function Todo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}




/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



const todoList = (() => {
  const addProject = project => {
    _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.saveProject(project);
  };
  const getProject = name => {
    const projects = _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.retriveProjects();
    return projects.find(project => project.name === name);
  };

  const removeProject = index => {
    _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.deleteProject(index);
  };

  const getProjects = () => {
    return _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.retriveProjects();
  };
  return { addProject, getProject, getProjects, removeProject };
})();




/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");







const today = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project('today');
_TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.addProject(today);

let currentProject = today;

const UI = (() => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  // Buttons
  const btnAddTodo = document.querySelector('.btn--add-todo');
  const btnCancle = document.querySelector('.form__btn-cancle');
  const btnAddProject = document.querySelector('.btn--add-project');
  const btnProjectsExpand = document.querySelector('.btn--expand');
  // Lables
  const projectNameEl = document.querySelector('.project-name');
  const todayEl = document.querySelector('.today');
  // Form
  const formAddTodo = document.querySelector('.add-todo-form');
  const fromAddProject = document.querySelector('.add-project-form');
  // Inputs
  const inputTodoTitle = document.querySelector('#todo-title');
  const inputTodoDescription = document.querySelector('#todo-description');
  const inputTodoDate = document.querySelector('#todo-date');
  const inputTodoPriority = document.querySelector('#todo-priority');
  const inputProjectName = document.querySelector('#project__name');
  // Containers
  const projectsTodos = document.querySelector('.projects-todos');
  const projectListContainer = document.querySelector('.projects__list');
  const init = () => {
    projectNameEl.textContent = currentProject.name;
    // Event Listeners
    btnAddTodo.addEventListener('click', showModal);
    btnCancle.addEventListener('click', hideModal);
    btnAddProject.addEventListener('click', () => {
      fromAddProject.classList.toggle('hidden');
    });
    btnProjectsExpand.addEventListener('click', () => {
      projectListContainer.classList.toggle('hidden');
    });
    fromAddProject.addEventListener('submit', addNewProject);
    todayEl.addEventListener('click', () => {
      currentProject = _TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.getProject('today');
      ShowTodos(currentProject);
    });
    formAddTodo.addEventListener('submit', addNewTodo);
    showProjects();
    ShowTodos(today);
  };

  const showModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  const hideModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  // Add New Todo
  const addNewTodo = e => {
    e.preventDefault();
    const todoTitle = inputTodoTitle.value;
    const todoDescription = inputTodoDescription.value;
    const todoDate = inputTodoDate.value.split('-').reverse().join('/');
    const todoPriority = inputTodoPriority.value;
    hideModal();
    formAddTodo.reset();
    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.Todo(todoTitle, todoDescription, todoDate, todoPriority);
    // currentProject.todos.push(
    //   new Todo(todoTitle, todoDescription, todoDate, todoPriority)
    // );

    // local Stroage
    _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveTodo(currentProject.name, todo);
    // Save new Todo to local Storage
    ShowTodos(currentProject);
  };

  // Edit Todo function
  const editTodo = e => {
    e.preventDefault();
    const todoTitle = document.getElementById('todo-title-ed').value;
    const todoDescription = document.getElementById(
      'todo-description-ed'
    ).value;
    const todoDate = document
      .getElementById('todo-date-ed')
      .value.split('-')
      .reverse()
      .join('/');
    const todoPriority = document.getElementById('todo-priority-ed').value;
    const index = e.target.parentElement.dataset.index;
    // Delete todo from local Stroage
    const todo = _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.deleteTodo(currentProject.name, +index);
    deleteTodoFromUI(index);
    todo.title = todoTitle;
    todo.description = todoDescription;
    todo.dueDate = todoDate;
    todo.priority = todoPriority;
    // Add todo to local Storage
    _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveTodo(currentProject.name, todo);
    e.target.parentElement.classList.toggle('hidden');
    ShowTodos(currentProject);
  };

  // Disaply All Dodos for a Project
  const ShowTodos = project => {
    projectNameEl.textContent = project.name;
    // Get all Todos from this projects
    const todos = _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.retriveTodos(project.name) || [];
    projectsTodos.innerHTML = '';
    for (const [index, todo] of todos.entries()) {
      const html = `<div class="todo-container priority-${
        todo.priority
      }" data-id="${index}">
      <div class="todo">
        <div class="todo__title">
          <i class="fa-regular fa-circle-check done-icon" data-done=${index} title="Done" ></i>
          <span class="todo__text">${todo.title}</span>
        </div>
        <div class="todo__controls">
          <i class="fa-regular fa-pen-to-square edit-icon"  data-edit="${index}" title="Edit Task"></i>
          <i class="fa-solid fa-circle-info details-icon" data-details="${index}" title="Task Details" ></i>
        </div>
      </div>
      <div class="todo__details hidden" data-index="${index}">
        <div class="todo__description">
          <h4>Description</h4>
          <p>
           ${todo.description}
          </p>
        </div>
        <div>
          <div class="todo__date">
            <h4>Date</h4>
            <p>${todo.dueDate}</p>
          </div>
          <div class="todo__priority">
            <h4>Priority</h4>
            <p>Level ${todo.priority}</p>
          </div>
        </div>
      </div>
      <div class="todo__edit hidden" data-index="${index}">
              <form class="edit-todo-form">
                <ul>
                  <li>
                    <label for="todo-title-ed">Task Title</label>
                    <input type="text" id="todo-title-ed"  value="${
                      todo.title
                    }" required />
                  </li>
                  <li>
                    <label for="todo-decription-ed">Task Description</label>
                    <textarea
                      name=""
                      id="todo-description-ed"
                      cols="30"
                      rows="5"
                      required
                    > ${todo.description}</textarea>
                  </li>
                  <li class="two-input">
                    <div>
                      <label for="todo-date-ed">Task Date</label>
                      <input type="date"  id="todo-date-ed" value="${todo.dueDate
                        .split('/')
                        .reverse()
                        .join('-')}" required />
                    </div>
                    <div>
                      <label for="todo-priority-ed">Task Priority</label>
                      <select name="" id="todo-priority-ed" required>
                        <option value="${todo.priority}"  disabled selected>
                        Pirority${todo.priority}                 </option>
                        <option value="1">Pirority 1</option>
                        <option value="2">Pirority 2</option>
                        <option value="3">Pirority 3</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <button class="btn form__btn-save" type="submit">Save</button>
              </form>
            </div>
    </div>`;
      projectsTodos.insertAdjacentHTML('afterbegin', html);
    }
    // Deatils Buttons
    projectsTodos.querySelectorAll('.details-icon').forEach(detailsIcon => {
      detailsIcon.addEventListener('click', e => {
        const index = e.target.dataset.details;
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        // hide && show todo details
        todoDeatils.classList.toggle('hidden');
        // hide && show todo Edit
        todoEdit.classList.add('hidden');
      });
    });
    // Done Button
    projectsTodos.querySelectorAll('.done-icon').forEach(doneIcon => {
      doneIcon.addEventListener('click', e => {
        const index = e.target.dataset.done;
        // remove todo from current project
        //currentProject.todos.splice(index, 1);
        _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.deleteTodo(currentProject.name, +index);
        deleteTodoFromUI(index);
      });
    });
    // Edit Button
    projectsTodos.querySelectorAll('.edit-icon').forEach(editIcon => {
      editIcon.addEventListener('click', e => {
        const index = e.target.dataset.edit;
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        // hide && show todo details
        todoEdit.classList.toggle('hidden');
        // hide && show todo details
        todoDeatils.classList.add('hidden');
      });
    });
    // Edit Form
    projectsTodos.querySelectorAll('.edit-todo-form').forEach(editForm => {
      editForm.addEventListener('submit', editTodo);
    });
  };

  const deleteTodoFromUI = index => {
    const todoContainer = [
      ...projectsTodos.querySelectorAll('.todo-container'),
    ].find(tc => tc.dataset.id === index);
    // remove todo from current project ui
    projectsTodos.removeChild(todoContainer);
  };

  // Add New Project
  const addNewProject = e => {
    e.preventDefault();
    const projectName = inputProjectName.value.toLowerCase();
    if (projectName !== ' ') {
      fromAddProject.classList.toggle('hidden');
      // Create New Project
      const project = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
      _TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.addProject(project);
      showProjects();
      e.target.reset();
    }
  };
  // Display All Projects
  const showProjects = () => {
    // Get all Projects From local Storage
    const projects = _TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.getProjects() || [];
    projectListContainer.innerHTML = '';
    for (const [index, project] of projects.entries()) {
      if (project.name === 'today') continue;
      const li = `<li><i class="fa-solid fa-list-check"></i>${project.name}<i class="fa-solid fa-trash btn-delete-project" title="Delete" data-index="${index}"></i></li>`;
      projectListContainer.insertAdjacentHTML('afterbegin', li);
    }
    // showing Project's todo
    document.querySelectorAll('.projects__list li').forEach(li => {
      li.addEventListener('click', () => {
        const projectName = li.textContent.toLowerCase();
        currentProject = _TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.getProject(projectName) || today;
        ShowTodos(currentProject);
      });
    });
    // Delete proejct
    document.querySelectorAll('.btn-delete-project').forEach(delteButton => {
      delteButton.addEventListener('click', e => {
        const index = e.target.dataset.index;
        _TodoList__WEBPACK_IMPORTED_MODULE_2__.todoList.removeProject(+index);
        showProjects();
      });
    });
  };

  return { init };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");





_modules_UI__WEBPACK_IMPORTED_MODULE_1__.UI.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDZCQUE2Qiw4QkFBOEIsa0NBQWtDLGlDQUFpQyxHQUFHLE9BQU8sZUFBZSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsMkNBQTJDLGlCQUFpQixrQkFBa0IsaUJBQWlCLHVDQUF1QyxHQUFHLFVBQVUsZ0RBQWdELG9CQUFvQixXQUFXLHVCQUF1QixnQkFBZ0IsZUFBZSxHQUFHLGVBQWUsa0JBQWtCLGNBQWMsd0JBQXdCLEdBQUcsU0FBUyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxHQUFHLGlCQUFpQiwrQ0FBK0MsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0IsR0FBRyxVQUFVLG9CQUFvQixrQkFBa0IsY0FBYyx3QkFBd0IsdUJBQXVCLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsZ0JBQWdCLDhCQUE4QixHQUFHLGlCQUFpQiw4QkFBOEIsR0FBRywwQkFBMEIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsZ0NBQWdDLGtCQUFrQixjQUFjLHdCQUF3QixpQkFBaUIsR0FBRyxrQ0FBa0Msb0JBQW9CLG9CQUFvQixHQUFHLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEdBQUcsUUFBUSxrQ0FBa0Msa0JBQWtCLGlCQUFpQix5QkFBeUIsb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0Isa0JBQWtCLHdCQUF3QixhQUFhLHFCQUFxQixxQkFBcUIsR0FBRyx3QkFBd0IsaUNBQWlDLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQixpQkFBaUIsaUJBQWlCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLGdEQUFnRCxxQkFBcUIsbUJBQW1CLHVCQUF1QiwyQkFBMkIsR0FBRyw4SUFBOEksZ0JBQWdCLHVCQUF1QixrQ0FBa0Msa0JBQWtCLCtDQUErQyx1QkFBdUIseUJBQXlCLG9CQUFvQixHQUFHLHNEQUFzRCxpQkFBaUIsR0FBRywwQ0FBMEMscUJBQXFCLGtCQUFrQixjQUFjLDJCQUEyQixHQUFHLDBEQUEwRCxrQkFBa0IsbUNBQW1DLGNBQWMsR0FBRyw0RUFBNEUsMkJBQTJCLEdBQUcsd0RBQXdELHNCQUFzQixpQkFBaUIsdUJBQXVCLHFCQUFxQixHQUFHLG9DQUFvQyw0Q0FBNEMsR0FBRyxxQkFBcUIsZ0RBQWdELEdBQUcsbUJBQW1CLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQixjQUFjLHFCQUFxQixHQUFHLHNCQUFzQix1QkFBdUIsaUJBQWlCLG9CQUFvQixrQkFBa0IsY0FBYyx3QkFBd0IsK0JBQStCLEdBQUcseUJBQXlCLDBCQUEwQixzQkFBc0IsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLG1CQUFtQixpREFBaUQsd0RBQXdELGtCQUFrQix3QkFBd0IsR0FBRyxXQUFXLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsY0FBYyx3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcsNkJBQTZCLGdCQUFnQixHQUFHLHdEQUF3RCxvQkFBb0IsR0FBRyxxQkFBcUIsYUFBYSxnQkFBZ0Isa0JBQWtCLG1DQUFtQyxvQkFBb0IsR0FBRywyQkFBMkIsdUJBQXVCLGdCQUFnQixrQkFBa0IsMkJBQTJCLGlCQUFpQixrQ0FBa0Msc0JBQXNCLHlCQUF5QixHQUFHLHdDQUF3Qyw4QkFBOEIsR0FBRyxvQkFBb0IsaUJBQWlCLGlCQUFpQix1QkFBdUIsOEJBQThCLEdBQUcsWUFBWSxpQkFBaUIsOEJBQThCLG9CQUFvQixjQUFjLGFBQWEscUNBQXFDLG9CQUFvQix1QkFBdUIsZUFBZSxpREFBaUQsR0FBRyxjQUFjLG9CQUFvQiwyQ0FBMkMsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IsZUFBZSxHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyw0QkFBNEIsa0JBQWtCLGFBQWEsR0FBRyxnQ0FBZ0MscUJBQXFCLEdBQUcsaUJBQWlCLG1DQUFtQyxHQUFHLGVBQWUsbUNBQW1DLEdBQUcsZUFBZSxtQ0FBbUMsR0FBRyxXQUFXLGtCQUFrQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLFFBQVEsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxnQ0FBZ0MsNkJBQTZCLDhCQUE4QixrQ0FBa0MsaUNBQWlDLEdBQUcsT0FBTyxlQUFlLGNBQWMsMkJBQTJCLEdBQUcsVUFBVSwyQ0FBMkMsaUJBQWlCLGtCQUFrQixpQkFBaUIsdUNBQXVDLEdBQUcsVUFBVSxnREFBZ0Qsb0JBQW9CLFdBQVcsdUJBQXVCLGdCQUFnQixlQUFlLEdBQUcsZUFBZSxrQkFBa0IsY0FBYyx3QkFBd0IsR0FBRyxTQUFTLHVCQUF1QixrQkFBa0IsaUJBQWlCLHNCQUFzQixrQkFBa0IsbUNBQW1DLEdBQUcsaUJBQWlCLCtDQUErQyx1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3QixHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQixjQUFjLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHFCQUFxQixvQkFBb0IsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLDBCQUEwQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLGNBQWMsd0JBQXdCLGlCQUFpQixHQUFHLGtDQUFrQyxvQkFBb0Isb0JBQW9CLEdBQUcscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyxRQUFRLGtDQUFrQyxrQkFBa0IsaUJBQWlCLHlCQUF5QixvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0Isd0JBQXdCLGFBQWEscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsZ0RBQWdELHFCQUFxQixtQkFBbUIsdUJBQXVCLDJCQUEyQixHQUFHLDhJQUE4SSxnQkFBZ0IsdUJBQXVCLGtDQUFrQyxrQkFBa0IsK0NBQStDLHVCQUF1Qix5QkFBeUIsb0JBQW9CLEdBQUcsc0RBQXNELGlCQUFpQixHQUFHLDBDQUEwQyxxQkFBcUIsa0JBQWtCLGNBQWMsMkJBQTJCLEdBQUcsMERBQTBELGtCQUFrQixtQ0FBbUMsY0FBYyxHQUFHLDRFQUE0RSwyQkFBMkIsR0FBRyx3REFBd0Qsc0JBQXNCLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsb0NBQW9DLDRDQUE0QyxHQUFHLHFCQUFxQixnREFBZ0QsR0FBRyxtQkFBbUIscUJBQXFCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGNBQWMscUJBQXFCLEdBQUcsc0JBQXNCLHVCQUF1QixpQkFBaUIsb0JBQW9CLGtCQUFrQixjQUFjLHdCQUF3QiwrQkFBK0IsR0FBRyx5QkFBeUIsMEJBQTBCLHNCQUFzQixHQUFHLDRCQUE0Qiw4QkFBOEIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsbUJBQW1CLGlEQUFpRCx3REFBd0Qsa0JBQWtCLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLG1DQUFtQyx3QkFBd0Isb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcsd0RBQXdELG9CQUFvQixHQUFHLHFCQUFxQixhQUFhLGdCQUFnQixrQkFBa0IsbUNBQW1DLG9CQUFvQixHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtDQUFrQyxzQkFBc0IseUJBQXlCLEdBQUcsd0NBQXdDLDhCQUE4QixHQUFHLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsR0FBRyxZQUFZLGlCQUFpQiw4QkFBOEIsb0JBQW9CLGNBQWMsYUFBYSxxQ0FBcUMsb0JBQW9CLHVCQUF1QixlQUFlLGlEQUFpRCxHQUFHLGNBQWMsb0JBQW9CLDJDQUEyQyxXQUFXLFlBQVksaUJBQWlCLGtCQUFrQixlQUFlLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDRCQUE0QixrQkFBa0IsYUFBYSxHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRyxpQkFBaUIsbUNBQW1DLEdBQUcsZUFBZSxtQ0FBbUMsR0FBRyxlQUFlLG1DQUFtQyxHQUFHLFdBQVcsa0JBQWtCLEdBQUcscUJBQXFCO0FBQ2xuYjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDbUI7Ozs7Ozs7Ozs7Ozs7OztBQ0xOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0NOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUSDtBQUN1Qjs7QUFFcEM7QUFDQTtBQUNBLElBQUkseURBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJEQUFxQjtBQUN6Qjs7QUFFQTtBQUNBLFdBQVcsNkRBQXVCO0FBQ2xDO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJQOztBQUV1QjtBQUNOO0FBQ1E7QUFDRjs7QUFFcEMsa0JBQWtCLDZDQUFPO0FBQ3pCLDBEQUFtQjs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QiwwREFBbUI7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwREFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGFBQWEsTUFBTTtBQUMxQjtBQUNBO0FBQ0Esc0VBQXNFLE9BQU87QUFDN0UscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBLHlFQUF5RSxNQUFNO0FBQy9FLDBFQUEwRSxNQUFNO0FBQ2hGO0FBQ0E7QUFDQSxzREFBc0QsTUFBTTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxNQUFNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBTztBQUNqQyxNQUFNLDBEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsOERBQThELGFBQWEsNkVBQTZFLE1BQU07QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBEQUFtQjtBQUM1QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFzQjtBQUM5QjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWE7Ozs7Ozs7VUN4U2Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFUTtBQUNhOztBQUVsQyxnREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLW1haW4tYmc6ICNlOWVjZWY7XFxuICAtLWNvbG9yLXNlY29uZGF5OiAjMmE5ZDhmO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICNlNzZmNTE7XFxuICAtLWNvbG9yLXRlcml0YXJ5LWJnOiAjMjY0NjUzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG59XFxuLm5hdl9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwYWRkaW5nLXRvcDogNjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5tYWluID4gLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG4ubWFpbiA+IC5sZWZ0IC50b3Age1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50b2RheSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RheTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdC1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5wcm9qZWN0cy1saXN0X19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1saXN0X19oZWFkZXIgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLnByb2plY3RzLWxpc3RfX2hlYWRlciAubGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnByb2plY3RzX19pY29uLFxcbi50b2RheV9faWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5tYWluID4gLnByb2plY3RzIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmJ0bi0tYWRkLXRvZG8ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uYnRuLS1hZGQtdG9kbzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXkpO1xcbn1cXG4ucHJvamVjdC1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLmVkaXQtdG9kby1mb3JtIHtcXG4gIHdpZHRoOiA2MDBweDtcXG59XFxuLmFkZC10b2RvLWZvcm0gbGFiZWwsXFxuLmVkaXQtdG9kby1mb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0LFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi50d28taW5wdXQgc2VsZWN0LFxcbi5lZGl0LXRvZG8tZm9ybSBpbnB1dCxcXG4uZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEsXFxuLmVkaXQtaW5wdXQgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi5lZGl0LXRvZG8tZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5hZGQtdG9kby1mb3JtIHVsLFxcbi5lZGl0LXRvZG8tZm9ybSB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZGQtdG9kby1mb3JtIC50d28taW5wdXQsXFxuLmVkaXQtdG9kby1mb3JtIC50d28taW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmFkZC10b2RvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbn1cXG4uZm9ybV9fYnRuLWFkZCxcXG4uZm9ybV9fYnRuLWNhbmNsZSxcXG4uZm9ybV9fYnRuLXNhdmUge1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybV9fYnRuLWFkZCxcXG4uZm9ybV9fYnRuLXNhdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXkpO1xcbn1cXG4uZm9ybV9fYnRuLWNhbmNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcbn1cXG4ucHJvamVjdHNfX2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnByb2plY3RzX19saXN0IGxpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5idG4tZGVsZXRlLXByb2plY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5wcm9qZWN0c19fbGlzdCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdF9faWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuODM2KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnRvZG9fX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb19fY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0cy1saXN0X19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5kb25lLWljb24sXFxuLmVkaXQtaWNvbixcXG4uZGV0YWlscy1pY29uLFxcbi5kYXRlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxufVxcbi5idG4tYWRkLXByb2plY3Qge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMjtcXG59XFxuLnRvZG9fX2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi50b2RvX19kZXNjcmlwdGlvbiArIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MCU7XFxufVxcbi50b2RvX19kZXRhaWxzLFxcbi50b2RvX19lZGl0IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y3MzIzMjtcXG59XFxuLnByaW9yaXR5LTIge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmFjYzE1O1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyMmM1NWU7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBOzs7Ozs7RUFNRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYO0FBQ0E7O0VBRUUsc0JBQXNCO0FBQ3hCO0FBQ0E7OztFQUdFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBOzs7O0VBSUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jb2xvci1tYWluLWJnOiAjZTllY2VmO1xcbiAgLS1jb2xvci1zZWNvbmRheTogIzJhOWQ4ZjtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5LWJnOiAjZTc2ZjUxO1xcbiAgLS1jb2xvci10ZXJpdGFyeS1iZzogIzI2NDY1MztcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJnKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5uYXZfX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZy10b3A6IDY1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG4ubWFpbiA+IC5sZWZ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcml0YXJ5LWJnKTtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLm1haW4gPiAubGVmdCAudG9wIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG4udG9kYXkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9kYXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG59XFxuLnByb2plY3QtbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0cy1saXN0X19oZWFkZXIgLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wcm9qZWN0c19faWNvbixcXG4udG9kYXlfX2ljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubWFpbiA+IC5wcm9qZWN0cyB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5idG4tLWFkZC10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmJ0bi0tYWRkLXRvZG86aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGF5KTtcXG59XFxuLnByb2plY3QtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5lZGl0LXRvZG8tZm9ybSB7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIGxhYmVsLFxcbi5lZGl0LXRvZG8tZm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xcbn1cXG4uYWRkLXRvZG8tZm9ybSBpbnB1dCxcXG4uYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG4udHdvLWlucHV0IHNlbGVjdCxcXG4uZWRpdC10b2RvLWZvcm0gaW5wdXQsXFxuLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi5lZGl0LWlucHV0IHNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcml0YXJ5LWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG4uZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uYWRkLXRvZG8tZm9ybSB1bCxcXG4uZWRpdC10b2RvLWZvcm0gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRkLXRvZG8tZm9ybSAudHdvLWlucHV0LFxcbi5lZGl0LXRvZG8tZm9ybSAudHdvLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG59XFxuLmZvcm1fX2J0bi1hZGQsXFxuLmZvcm1fX2J0bi1jYW5jbGUsXFxuLmZvcm1fX2J0bi1zYXZlIHtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmZvcm1fX2J0bi1hZGQsXFxuLmZvcm1fX2J0bi1zYXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGF5KTtcXG59XFxuLmZvcm1fX2J0bi1jYW5jbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG59XFxuLnByb2plY3RzX19saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wcm9qZWN0c19fbGlzdCBsaSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZS1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJvamVjdHNfX2xpc3QgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG59XFxuLnByb2plY3RfX2ljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9kby1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjgzNik7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi50b2RvX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvZG9fX2NvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucHJvamVjdHMtbGlzdF9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZG9uZS1pY29uLFxcbi5lZGl0LWljb24sXFxuLmRldGFpbHMtaWNvbixcXG4uZGF0ZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgZ2FwOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcbn1cXG4uYnRuLWFkZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbi5tb2RhbCB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDM7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2NCk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi50b2RvX19kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4udG9kb19fZGVzY3JpcHRpb24gKyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTAlO1xcbn1cXG4udG9kb19fZGV0YWlscyxcXG4udG9kb19fZWRpdCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmNzMyMzI7XFxufVxcbi5wcmlvcml0eS0yIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZhY2MxNTtcXG59XFxuLnByaW9yaXR5LTMge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjJjNTVlO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gUHJvamVjdChuYW1lKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMudG9kb3MgPSBbXTtcbn1cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNhdmVUb2RvID0gKHByb2plY3ROYW1lLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFRvZG9zJykpIHx8IHt9O1xuICAgIGlmICghcHJvamVjdFRvZG9zW3Byb2plY3ROYW1lXSkge1xuICAgICAgcHJvamVjdFRvZG9zW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwcm9qZWN0VG9kb3NbcHJvamVjdE5hbWVdLnB1c2godG9kbyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RUb2RvcycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb2RvcykpO1xuICB9O1xuICBjb25zdCBkZWxldGVUb2RvID0gKHByb2plY3ROYW1lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RUb2RvcycpKTtcbiAgICBwcm9qZWN0VG9kb3NbcHJvamVjdE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RUb2RvcycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb2RvcykpO1xuICAgIHJldHVybiB7fTtcbiAgfTtcbiAgY29uc3QgcmV0cml2ZVRvZG9zID0gcHJvamVjdE5hbWUgPT4ge1xuICAgIGNvbnN0IHBUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RUb2RvcycpKTtcbiAgICByZXR1cm4gcFRvZG9zW3Byb2plY3ROYW1lXTtcbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG4gICAgaWYgKCFwcm9qZWN0cy5zb21lKHAgPT4gcC5uYW1lID09PSBwcm9qZWN0Lm5hbWUpKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBpbmRleCA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH07XG4gIGNvbnN0IHJldHJpdmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG8sXG4gICAgcmV0cml2ZVRvZG9zLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgc2F2ZVByb2plY3QsXG4gICAgcmV0cml2ZVByb2plY3RzLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBTdG9yYWdlIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5leHBvcnQgeyBUb2RvIH07XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcblxuY29uc3QgdG9kb0xpc3QgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiB7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdChwcm9qZWN0KTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdCA9IG5hbWUgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5yZXRyaXZlUHJvamVjdHMoKTtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGluZGV4ID0+IHtcbiAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBTdG9yYWdlLnJldHJpdmVQcm9qZWN0cygpO1xuICB9O1xuICByZXR1cm4geyBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cywgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdG9kb0xpc3QgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi9Ub2RvTGlzdCc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9TdG9yYWdlJztcblxuY29uc3QgdG9kYXkgPSBuZXcgUHJvamVjdCgndG9kYXknKTtcbnRvZG9MaXN0LmFkZFByb2plY3QodG9kYXkpO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSB0b2RheTtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgLy8gQnV0dG9uc1xuICBjb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYWRkLXRvZG8nKTtcbiAgY29uc3QgYnRuQ2FuY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J0bi1jYW5jbGUnKTtcbiAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWFkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IGJ0blByb2plY3RzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tZXhwYW5kJyk7XG4gIC8vIExhYmxlc1xuICBjb25zdCBwcm9qZWN0TmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICBjb25zdCB0b2RheUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIC8vIEZvcm1cbiAgY29uc3QgZm9ybUFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpO1xuICBjb25zdCBmcm9tQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJyk7XG4gIC8vIElucHV0c1xuICBjb25zdCBpbnB1dFRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG4gIGNvbnN0IGlucHV0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgaW5wdXRUb2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKTtcbiAgY29uc3QgaW5wdXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuICBjb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RfX25hbWUnKTtcbiAgLy8gQ29udGFpbmVyc1xuICBjb25zdCBwcm9qZWN0c1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXRvZG9zJyk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0Jyk7XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XG4gICAgLy8gRXZlbnQgTGlzdGVuZXJzXG4gICAgYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XG4gICAgYnRuQ2FuY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZnJvbUFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgYnRuUHJvamVjdHNFeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBmcm9tQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROZXdQcm9qZWN0KTtcbiAgICB0b2RheUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KCd0b2RheScpO1xuICAgICAgU2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcbiAgICBmb3JtQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROZXdUb2RvKTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgICBTaG93VG9kb3ModG9kYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIC8vIEFkZCBOZXcgVG9kb1xuICBjb25zdCBhZGROZXdUb2RvID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGlucHV0VG9kb1RpdGxlLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGlucHV0VG9kb0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EYXRlID0gaW5wdXRUb2RvRGF0ZS52YWx1ZS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcvJyk7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gaW5wdXRUb2RvUHJpb3JpdHkudmFsdWU7XG4gICAgaGlkZU1vZGFsKCk7XG4gICAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpO1xuICAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9zLnB1c2goXG4gICAgLy8gICBuZXcgVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSlcbiAgICAvLyApO1xuXG4gICAgLy8gbG9jYWwgU3Ryb2FnZVxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG8oY3VycmVudFByb2plY3QubmFtZSwgdG9kbyk7XG4gICAgLy8gU2F2ZSBuZXcgVG9kbyB0byBsb2NhbCBTdG9yYWdlXG4gICAgU2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfTtcblxuICAvLyBFZGl0IFRvZG8gZnVuY3Rpb25cbiAgY29uc3QgZWRpdFRvZG8gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtZWQnKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICd0b2RvLWRlc2NyaXB0aW9uLWVkJ1xuICAgICkudmFsdWU7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCd0b2RvLWRhdGUtZWQnKVxuICAgICAgLnZhbHVlLnNwbGl0KCctJylcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5qb2luKCcvJyk7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktZWQnKS52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAvLyBEZWxldGUgdG9kbyBmcm9tIGxvY2FsIFN0cm9hZ2VcbiAgICBjb25zdCB0b2RvID0gU3RvcmFnZS5kZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0Lm5hbWUsICtpbmRleCk7XG4gICAgZGVsZXRlVG9kb0Zyb21VSShpbmRleCk7XG4gICAgdG9kby50aXRsZSA9IHRvZG9UaXRsZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRvZG8uZHVlRGF0ZSA9IHRvZG9EYXRlO1xuICAgIHRvZG8ucHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XG4gICAgLy8gQWRkIHRvZG8gdG8gbG9jYWwgU3RvcmFnZVxuICAgIFN0b3JhZ2Uuc2F2ZVRvZG8oY3VycmVudFByb2plY3QubmFtZSwgdG9kbyk7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBTaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9O1xuXG4gIC8vIERpc2FwbHkgQWxsIERvZG9zIGZvciBhIFByb2plY3RcbiAgY29uc3QgU2hvd1RvZG9zID0gcHJvamVjdCA9PiB7XG4gICAgcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAvLyBHZXQgYWxsIFRvZG9zIGZyb20gdGhpcyBwcm9qZWN0c1xuICAgIGNvbnN0IHRvZG9zID0gU3RvcmFnZS5yZXRyaXZlVG9kb3MocHJvamVjdC5uYW1lKSB8fCBbXTtcbiAgICBwcm9qZWN0c1RvZG9zLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgW2luZGV4LCB0b2RvXSBvZiB0b2Rvcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInRvZG8tY29udGFpbmVyIHByaW9yaXR5LSR7XG4gICAgICAgIHRvZG8ucHJpb3JpdHlcbiAgICAgIH1cIiBkYXRhLWlkPVwiJHtpbmRleH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX190aXRsZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtY2hlY2sgZG9uZS1pY29uXCIgZGF0YS1kb25lPSR7aW5kZXh9IHRpdGxlPVwiRG9uZVwiID48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvX190ZXh0XCI+JHt0b2RvLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19jb250cm9sc1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlIGVkaXQtaWNvblwiICBkYXRhLWVkaXQ9XCIke2luZGV4fVwiIHRpdGxlPVwiRWRpdCBUYXNrXCI+PC9pPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gZGV0YWlscy1pY29uXCIgZGF0YS1kZXRhaWxzPVwiJHtpbmRleH1cIiB0aXRsZT1cIlRhc2sgRGV0YWlsc1wiID48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb19fZGV0YWlscyBoaWRkZW5cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgJHt0b2RvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX2RhdGVcIj5cbiAgICAgICAgICAgIDxoND5EYXRlPC9oND5cbiAgICAgICAgICAgIDxwPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb19fcHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxoND5Qcmlvcml0eTwvaDQ+XG4gICAgICAgICAgICA8cD5MZXZlbCAke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX2VkaXQgaGlkZGVuXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC10b2RvLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXRpdGxlLWVkXCI+VGFzayBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kby10aXRsZS1lZFwiICB2YWx1ZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgdG9kby50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRlY3JpcHRpb24tZWRcIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2RvLWRlc2NyaXB0aW9uLWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+ICR7dG9kby5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInR3by1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRhdGUtZWRcIj5UYXNrIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiICBpZD1cInRvZG8tZGF0ZS1lZFwiIHZhbHVlPVwiJHt0b2RvLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLScpfVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXByaW9yaXR5LWVkXCI+VGFzayBQcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJ0b2RvLXByaW9yaXR5LWVkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJHt0b2RvLnByaW9yaXR5fVwiICBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpcm9yaXR5JHt0b2RvLnByaW9yaXR5fSAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlBpcm9yaXR5IDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UGlyb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5QaXJvcml0eSAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZm9ybV9fYnRuLXNhdmVcIiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgICAgcHJvamVjdHNUb2Rvcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcbiAgICB9XG4gICAgLy8gRGVhdGlscyBCdXR0b25zXG4gICAgcHJvamVjdHNUb2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcuZGV0YWlscy1pY29uJykuZm9yRWFjaChkZXRhaWxzSWNvbiA9PiB7XG4gICAgICBkZXRhaWxzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuZGV0YWlscztcbiAgICAgICAgY29uc3QgdG9kb0RlYXRpbHMgPSBbXG4gICAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9fX2RldGFpbHMnKSxcbiAgICAgICAgXS5maW5kKHRvZG9EZWF0aWxzID0+IHRvZG9EZWF0aWxzLmRhdGFzZXQuaW5kZXggPT09IGluZGV4KTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9fX2VkaXQnKV0uZmluZChcbiAgICAgICAgICB0b2RvRWRpdCA9PiB0b2RvRWRpdC5kYXRhc2V0LmluZGV4ID09PSBpbmRleFxuICAgICAgICApO1xuICAgICAgICAvLyBoaWRlICYmIHNob3cgdG9kbyBkZXRhaWxzXG4gICAgICAgIHRvZG9EZWF0aWxzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAvLyBoaWRlICYmIHNob3cgdG9kbyBFZGl0XG4gICAgICAgIHRvZG9FZGl0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gRG9uZSBCdXR0b25cbiAgICBwcm9qZWN0c1RvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25lLWljb24nKS5mb3JFYWNoKGRvbmVJY29uID0+IHtcbiAgICAgIGRvbmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5kb25lO1xuICAgICAgICAvLyByZW1vdmUgdG9kbyBmcm9tIGN1cnJlbnQgcHJvamVjdFxuICAgICAgICAvL2N1cnJlbnRQcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlVG9kbyhjdXJyZW50UHJvamVjdC5uYW1lLCAraW5kZXgpO1xuICAgICAgICBkZWxldGVUb2RvRnJvbVVJKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEVkaXQgQnV0dG9uXG4gICAgcHJvamVjdHNUb2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pY29uJykuZm9yRWFjaChlZGl0SWNvbiA9PiB7XG4gICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuZWRpdDtcbiAgICAgICAgY29uc3QgdG9kb0VkaXQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG9fX2VkaXQnKV0uZmluZChcbiAgICAgICAgICB0b2RvRWRpdCA9PiB0b2RvRWRpdC5kYXRhc2V0LmluZGV4ID09PSBpbmRleFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b2RvRGVhdGlscyA9IFtcbiAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19fZGV0YWlscycpLFxuICAgICAgICBdLmZpbmQodG9kb0RlYXRpbHMgPT4gdG9kb0RlYXRpbHMuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICAvLyBoaWRlICYmIHNob3cgdG9kbyBkZXRhaWxzXG4gICAgICAgIHRvZG9FZGl0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAvLyBoaWRlICYmIHNob3cgdG9kbyBkZXRhaWxzXG4gICAgICAgIHRvZG9EZWF0aWxzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gRWRpdCBGb3JtXG4gICAgcHJvamVjdHNUb2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvLWZvcm0nKS5mb3JFYWNoKGVkaXRGb3JtID0+IHtcbiAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGVkaXRUb2RvKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvRnJvbVVJID0gaW5kZXggPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBbXG4gICAgICAuLi5wcm9qZWN0c1RvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpLFxuICAgIF0uZmluZCh0YyA9PiB0Yy5kYXRhc2V0LmlkID09PSBpbmRleCk7XG4gICAgLy8gcmVtb3ZlIHRvZG8gZnJvbSBjdXJyZW50IHByb2plY3QgdWlcbiAgICBwcm9qZWN0c1RvZG9zLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIpO1xuICB9O1xuXG4gIC8vIEFkZCBOZXcgUHJvamVjdFxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gJyAnKSB7XG4gICAgICBmcm9tQWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgIC8vIENyZWF0ZSBOZXcgUHJvamVjdFxuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgfVxuICB9O1xuICAvLyBEaXNwbGF5IEFsbCBQcm9qZWN0c1xuICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgLy8gR2V0IGFsbCBQcm9qZWN0cyBGcm9tIGxvY2FsIFN0b3JhZ2VcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRvZG9MaXN0LmdldFByb2plY3RzKCkgfHwgW107XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHByb2plY3RdIG9mIHByb2plY3RzLmVudHJpZXMoKSkge1xuICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gJ3RvZGF5JykgY29udGludWU7XG4gICAgICBjb25zdCBsaSA9IGA8bGk+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiR7cHJvamVjdC5uYW1lfTxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggYnRuLWRlbGV0ZS1wcm9qZWN0XCIgdGl0bGU9XCJEZWxldGVcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj48L2k+PC9saT5gO1xuICAgICAgcHJvamVjdExpc3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbGkpO1xuICAgIH1cbiAgICAvLyBzaG93aW5nIFByb2plY3QncyB0b2RvXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzX19saXN0IGxpJykuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBsaS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpIHx8IHRvZGF5O1xuICAgICAgICBTaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gRGVsZXRlIHByb2VqY3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWRlbGV0ZS1wcm9qZWN0JykuZm9yRWFjaChkZWx0ZUJ1dHRvbiA9PiB7XG4gICAgICBkZWx0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHRvZG9MaXN0LnJlbW92ZVByb2plY3QoK2luZGV4KTtcbiAgICAgICAgc2hvd1Byb2plY3RzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuVUkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
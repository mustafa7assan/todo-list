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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-main-bg: #e9ecef;\n  --color-seconday: #2a9d8f;\n  --color-secondary-bg: #e76f51;\n  --color-teritary-bg: #264653;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-main-bg);\n  color: white;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Poppins', sans-serif;\n}\n\n.nav {\n  background-color: var(--color-secondary-bg);\n  position: fixed;\n  top: 0;\n  padding: 15px 30px;\n  width: 100%;\n}\n.nav__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-top: 65px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.main > .left {\n  background-color: var(--color-teritary-bg);\n  padding: 20px 30px;\n}\n.main > .left .top {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.today {\n  font-size: 18px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border-radius: 5px;\n  padding: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.today:hover {\n  background-color: #e76f51;\n}\n.projects-list__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-list__header h3 {\n  font-weight: 300;\n}\n.projects-list__header .left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 5px;\n}\n.projects__icon,\n.today__icon {\n  cursor: pointer;\n  font-size: 17px;\n}\n.main > .projects {\n  color: #444;\n  padding: 20px 30px;\n}\n.btn {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn--add-todo {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n.btn--add-todo:hover {\n  color: var(--color-seconday);\n}\n.project-name {\n  margin-bottom: 10px;\n}\n.add-todo-form {\n  width: 400px;\n  margin: auto;\n}\n.add-todo-form label {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 5px;\n  color: rgb(22, 22, 22);\n}\n.add-todo-form input,\n.add-todo-form textarea,\n.two-input select {\n  width: 100%;\n  padding: 10px 20px;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid var(--color-teritary-bg);\n  border-radius: 5px;\n  font-family: inherit;\n  font-size: 16px;\n}\n.add-todo-form textarea {\n  resize: none;\n}\n.add-todo-form ul {\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.add-todo-form .two-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.add-todo-form input::placeholder,\n.add-todo-form textarea::placeholder {\n  color: rgb(92, 92, 92);\n}\n.form__btn-add,\n.form__btn-cancle {\n  padding: 7px 10px;\n  color: white;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.form__btn-add {\n  background-color: var(--color-seconday);\n}\n.form__btn-cancle {\n  background-color: var(--color-secondary-bg);\n}\n.projects__list {\n  list-style: none;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n.projects__list li {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.projects__list li:hover {\n  background-color: #e76f51;\n}\n.project__icon {\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  padding: 10px;\n  border: 1px solid rgba(192, 192, 192, 0.836);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  margin-bottom: 10px;\n}\n.todo__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.todo__controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.projects-list__container {\n  width: 100%;\n}\n.done-icon,\n.edit-icon,\n.comment-icon,\n.date-icon {\n  cursor: pointer;\n}\n.add-project-form {\n  gap: 5px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  margin-top: 8px;\n}\n.add-project-form input {\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #eee;\n  color: white;\n  background-color: transparent;\n  padding: 5px 10px;\n  font-family: inherit;\n}\n.add-project-form input::placeholder {\n  color: rgb(185, 185, 185);\n}\n.btn-add-project {\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #2a9d8f;\n}\n\n.modal {\n  width: 450px;\n  background-color: #e9ecef;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px 0;\n  border-radius: 5px;\n  z-index: 2;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.overlay {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.664);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n.priority-1 {\n  border-left: 5px solid #f73232;\n}\n.priority-2 {\n  border-left: 5px solid #facc15;\n}\n.priority-3 {\n  border-left: 5px solid #22c55e;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,MAAM;EACN,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;AACA;;EAEE,eAAe;EACf,eAAe;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,sBAAsB;AACxB;AACA;;;EAGE,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;AACA;;EAEE,sBAAsB;AACxB;AACA;;EAEE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,uCAAuC;AACzC;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,4CAA4C;EAC5C,mDAAmD;EACnD,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;;;;EAIE,eAAe;AACjB;AACA;EACE,QAAQ;EACR,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;AACf;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC","sourcesContent":[":root {\n  --color-main-bg: #e9ecef;\n  --color-seconday: #2a9d8f;\n  --color-secondary-bg: #e76f51;\n  --color-teritary-bg: #264653;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-main-bg);\n  color: white;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Poppins', sans-serif;\n}\n\n.nav {\n  background-color: var(--color-secondary-bg);\n  position: fixed;\n  top: 0;\n  padding: 15px 30px;\n  width: 100%;\n}\n.nav__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.main {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-top: 65px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.main > .left {\n  background-color: var(--color-teritary-bg);\n  padding: 20px 30px;\n}\n.main > .left .top {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.today {\n  font-size: 18px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border-radius: 5px;\n  padding: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.today:hover {\n  background-color: #e76f51;\n}\n.projects-list__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-list__header h3 {\n  font-weight: 300;\n}\n.projects-list__header .left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 5px;\n}\n.projects__icon,\n.today__icon {\n  cursor: pointer;\n  font-size: 17px;\n}\n.main > .projects {\n  color: #444;\n  padding: 20px 30px;\n}\n.btn {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn--add-todo {\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n.btn--add-todo:hover {\n  color: var(--color-seconday);\n}\n.project-name {\n  margin-bottom: 10px;\n}\n.add-todo-form {\n  width: 400px;\n  margin: auto;\n}\n.add-todo-form label {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 5px;\n  color: rgb(22, 22, 22);\n}\n.add-todo-form input,\n.add-todo-form textarea,\n.two-input select {\n  width: 100%;\n  padding: 10px 20px;\n  background-color: transparent;\n  outline: none;\n  border: 1px solid var(--color-teritary-bg);\n  border-radius: 5px;\n  font-family: inherit;\n  font-size: 16px;\n}\n.add-todo-form textarea {\n  resize: none;\n}\n.add-todo-form ul {\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.add-todo-form .two-input {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.add-todo-form input::placeholder,\n.add-todo-form textarea::placeholder {\n  color: rgb(92, 92, 92);\n}\n.form__btn-add,\n.form__btn-cancle {\n  padding: 7px 10px;\n  color: white;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.form__btn-add {\n  background-color: var(--color-seconday);\n}\n.form__btn-cancle {\n  background-color: var(--color-secondary-bg);\n}\n.projects__list {\n  list-style: none;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n}\n.projects__list li {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.projects__list li:hover {\n  background-color: #e76f51;\n}\n.project__icon {\n  cursor: pointer;\n}\n\n.todo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n  padding: 10px;\n  border: 1px solid rgba(192, 192, 192, 0.836);\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  margin-bottom: 10px;\n}\n.todo__title {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.todo__controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.projects-list__container {\n  width: 100%;\n}\n.done-icon,\n.edit-icon,\n.comment-icon,\n.date-icon {\n  cursor: pointer;\n}\n.add-project-form {\n  gap: 5px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  margin-top: 8px;\n}\n.add-project-form input {\n  border-radius: 5px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #eee;\n  color: white;\n  background-color: transparent;\n  padding: 5px 10px;\n  font-family: inherit;\n}\n.add-project-form input::placeholder {\n  color: rgb(185, 185, 185);\n}\n.btn-add-project {\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: #2a9d8f;\n}\n\n.modal {\n  width: 450px;\n  background-color: #e9ecef;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 30px 0;\n  border-radius: 5px;\n  z-index: 2;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.overlay {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.664);\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n.priority-1 {\n  border-left: 5px solid #f73232;\n}\n.priority-2 {\n  border-left: 5px solid #facc15;\n}\n.priority-3 {\n  border-left: 5px solid #22c55e;\n}\n"],"sourceRoot":""}]);
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


class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  get getName() {
    return this.name;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  getAllTodos() {
    return this.todos;
  }
}




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


class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate - dueDate;
    this.priority = priority;
  }

  // Getter
  get getTitle() {
    return this.title;
  }
  get getDescription() {
    return this.description;
  }
  get getPriority() {
    return this.priority;
  }
  get getDueDate() {
    return this.dueDate;
  }
  // Setter
  set setTitle(value) {
    this.title = value;
  }
  set setDescription(value) {
    this.description = value;
  }
  set setPriority(value) {
    this.priority = value;
  }
  set setDueDate(value) {
    this.dueDate = value;
  }
}




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





const today = new _Project__WEBPACK_IMPORTED_MODULE_0__.Project('Homework');

const UI = (() => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  // Buttons
  const btnAddTodo = document.querySelector('.btn--add-todo');
  const btnCancle = document.querySelector('.form__btn-cancle');
  const btnAddProject = document.querySelector('.btn--add-project');
  // Lables
  const projectName = document.querySelector('.project-name');
  const projectList = document.querySelectorAll('.projects__list li');
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
    projectName.textContent = today.getName;
    btnAddTodo.addEventListener('click', showModal);
    btnCancle.addEventListener('click', hideModal);
    formAddTodo.addEventListener('submit', e => {
      e.preventDefault();
      const value = document.activeElement.value;
      addNewTodo(value);
    });
    projectList.forEach(projectTitle => {
      projectTitle.addEventListener('click', () => {
        console.log(projectTitle.textContent);
      });
    });
    btnAddProject.addEventListener('click', () => {
      fromAddProject.classList.toggle('hidden');
    });
    fromAddProject.addEventListener('submit', addNewProject);
  };

  const showModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  const hideModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  const addNewTodo = value => {
    if (value === 'add') {
      const todoTitle = inputTodoTitle.value;
      const todoDescription = inputTodoDescription.value;
      const todoDate = inputTodoDate.value;
      const todoPriority = inputTodoPriority.value;
      console.log({ todoTitle, todoDescription, todoDate, todoPriority });
      hideModal();
      formAddTodo.reset();
      today.addTodo(
        new _Todo__WEBPACK_IMPORTED_MODULE_1__.Todo(todoTitle, todoDescription, todoDate, todoPriority)
      );
      ShowTodos(today);
    }
  };

  const addNewProject = e => {
    e.preventDefault();
    fromAddProject.classList.toggle('hidden');
    const projectName = inputProjectName.value;
    const li = `<li><i class="fa-solid fa-list-check"></i>${projectName}</li>`;
    projectListContainer.insertAdjacentHTML('afterbegin', li);
  };

  const ShowTodos = project => {
    const todos = project.getAllTodos();
    projectsTodos.innerHTML = '';
    for (const todo of todos) {
      const html = ` <div class="todo priority-${todo.getPriority}">
      <div class="todo__title">
        <i class="fa-regular fa-circle-check done-icon"></i>
        <span class="todo__text">${todo.getTitle}</span>
      </div>
      <div class="todo__controls">
        <i class="fa-regular fa-pen-to-square edit-icon"></i>
        <i class="fa-regular fa-calendar date-icon"></i>
        <i class="fa-regular fa-message comment-icon"></i>
      </div>
    </div>`;
      projectsTodos.insertAdjacentHTML('afterbegin', html);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFV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QTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FhOztBQUVRO0FBQ2E7O0FBRWxDLGdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLW1haW4tYmc6ICNlOWVjZWY7XFxuICAtLWNvbG9yLXNlY29uZGF5OiAjMmE5ZDhmO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICNlNzZmNTE7XFxuICAtLWNvbG9yLXRlcml0YXJ5LWJnOiAjMjY0NjUzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2X190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5tYWluID4gLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG4ubWFpbiA+IC5sZWZ0IC50b3Age1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50b2RheSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RheTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0cy1saXN0X19oZWFkZXIgLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wcm9qZWN0c19faWNvbixcXG4udG9kYXlfX2ljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubWFpbiA+IC5wcm9qZWN0cyB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5idG4tLWFkZC10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmJ0bi0tYWRkLXRvZG86aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGF5KTtcXG59XFxuLnByb2plY3QtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtdG9kby1mb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0LFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi50d28taW5wdXQgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmFkZC10b2RvLWZvcm0gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRkLXRvZG8tZm9ybSAudHdvLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG59XFxuLmZvcm1fX2J0bi1hZGQsXFxuLmZvcm1fX2J0bi1jYW5jbGUge1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybV9fYnRuLWFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRheSk7XFxufVxcbi5mb3JtX19idG4tY2FuY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxufVxcbi5wcm9qZWN0c19fbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucHJvamVjdHNfX2xpc3QgbGkge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0c19fbGlzdCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdF9faWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC44MzYpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRvZG9fX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb19fY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0cy1saXN0X19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5kb25lLWljb24sXFxuLmVkaXQtaWNvbixcXG4uY29tbWVudC1pY29uLFxcbi5kYXRlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxufVxcbi5idG4tYWRkLXByb2plY3Qge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmlvcml0eS0xIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y3MzIzMjtcXG59XFxuLnByaW9yaXR5LTIge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmFjYzE1O1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyMmM1NWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7Ozs7RUFJRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLW1haW4tYmc6ICNlOWVjZWY7XFxuICAtLWNvbG9yLXNlY29uZGF5OiAjMmE5ZDhmO1xcbiAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICNlNzZmNTE7XFxuICAtLWNvbG9yLXRlcml0YXJ5LWJnOiAjMjY0NjUzO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2X190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcbi5tYWluID4gLmxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG4ubWFpbiA+IC5sZWZ0IC50b3Age1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi50b2RheSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RheTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtbGlzdF9faGVhZGVyIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0cy1saXN0X19oZWFkZXIgLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wcm9qZWN0c19faWNvbixcXG4udG9kYXlfX2ljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4ubWFpbiA+IC5wcm9qZWN0cyB7XFxuICBjb2xvcjogIzQ0NDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5idG4tLWFkZC10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmJ0bi0tYWRkLXRvZG86aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGF5KTtcXG59XFxuLnByb2plY3QtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5hZGQtdG9kby1mb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0LFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi50d28taW5wdXQgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmFkZC10b2RvLWZvcm0gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRkLXRvZG8tZm9ybSAudHdvLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5hZGQtdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcXG59XFxuLmZvcm1fX2J0bi1hZGQsXFxuLmZvcm1fX2J0bi1jYW5jbGUge1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybV9fYnRuLWFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRheSk7XFxufVxcbi5mb3JtX19idG4tY2FuY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxufVxcbi5wcm9qZWN0c19fbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucHJvamVjdHNfX2xpc3QgbGkge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0c19fbGlzdCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc2ZjUxO1xcbn1cXG4ucHJvamVjdF9faWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC44MzYpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRvZG9fX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kb19fY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0cy1saXN0X19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5kb25lLWljb24sXFxuLmVkaXQtaWNvbixcXG4uY29tbWVudC1pY29uLFxcbi5kYXRlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxufVxcbi5idG4tYWRkLXByb2plY3Qge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcmlvcml0eS0xIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y3MzIzMjtcXG59XFxuLnByaW9yaXR5LTIge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmFjYzE1O1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyMmM1NWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgZ2V0IGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxuICBnZXRBbGxUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSAtIGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgLy8gR2V0dGVyXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cbiAgLy8gU2V0dGVyXG4gIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICB9XG4gIHNldCBzZXREdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8nO1xuXG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdIb21ld29yaycpO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAvLyBCdXR0b25zXG4gIGNvbnN0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1hZGQtdG9kbycpO1xuICBjb25zdCBidG5DYW5jbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnRuLWNhbmNsZScpO1xuICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYWRkLXByb2plY3QnKTtcbiAgLy8gTGFibGVzXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0c19fbGlzdCBsaScpO1xuICAvLyBGb3JtXG4gIGNvbnN0IGZvcm1BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWZvcm0nKTtcbiAgY29uc3QgZnJvbUFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuICAvLyBJbnB1dHNcbiAgY29uc3QgaW5wdXRUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuICBjb25zdCBpbnB1dFRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGlucHV0VG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG4gIGNvbnN0IGlucHV0VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcbiAgY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X19uYW1lJyk7XG4gIC8vIENvbnRhaW5lcnNcbiAgY29uc3QgcHJvamVjdHNUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy10b2RvcycpO1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbGlzdCcpO1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdG9kYXkuZ2V0TmFtZTtcbiAgICBidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcbiAgICBidG5DYW5jbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWwpO1xuICAgIGZvcm1BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgYWRkTmV3VG9kbyh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0VGl0bGUgPT4ge1xuICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZyb21BZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIGZyb21BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZE5ld1Byb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1RvZG8gPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAnYWRkJykge1xuICAgICAgY29uc3QgdG9kb1RpdGxlID0gaW5wdXRUb2RvVGl0bGUudmFsdWU7XG4gICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBpbnB1dFRvZG9EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIGNvbnN0IHRvZG9EYXRlID0gaW5wdXRUb2RvRGF0ZS52YWx1ZTtcbiAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGlucHV0VG9kb1ByaW9yaXR5LnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coeyB0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSB9KTtcbiAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcbiAgICAgIHRvZGF5LmFkZFRvZG8oXG4gICAgICAgIG5ldyBUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KVxuICAgICAgKTtcbiAgICAgIFNob3dUb2Rvcyh0b2RheSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZnJvbUFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dFByb2plY3ROYW1lLnZhbHVlO1xuICAgIGNvbnN0IGxpID0gYDxsaT48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+JHtwcm9qZWN0TmFtZX08L2xpPmA7XG4gICAgcHJvamVjdExpc3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbGkpO1xuICB9O1xuXG4gIGNvbnN0IFNob3dUb2RvcyA9IHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC5nZXRBbGxUb2RvcygpO1xuICAgIHByb2plY3RzVG9kb3MuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICBjb25zdCBodG1sID0gYCA8ZGl2IGNsYXNzPVwidG9kbyBwcmlvcml0eS0ke3RvZG8uZ2V0UHJpb3JpdHl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb19fdGl0bGVcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkb25lLWljb25cIj48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9kb19fdGV4dFwiPiR7dG9kby5nZXRUaXRsZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19jb250cm9sc1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSBlZGl0LWljb25cIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jYWxlbmRhciBkYXRlLWljb25cIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1tZXNzYWdlIGNvbW1lbnQtaWNvblwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgICBwcm9qZWN0c1RvZG9zLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuVUkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
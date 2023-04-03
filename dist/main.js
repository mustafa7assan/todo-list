/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #eee;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 60px 1px #d64bee;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wCAAwC;AAC1C;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,aAAa;AACf;;AAEA;;;EAGE,qBAAqB;EACrB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;EACd,OAAO;EACP,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,cAAc;EACd,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;;EAEE,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;AACjB;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,iDAAiD;AACnD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;EAEE,0BAA0B;AAC5B;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,kBAAkB;IAClB,MAAM;IACN,kBAAkB;IAClB,aAAa;IACb,oCAAoC;EACtC;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #eee;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 60px 1px #d64bee;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager */ "./src/components/TaskManager.js");

class Project {
  constructor(title) {
    this.title = title;
    this.tm = new _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"](this.title);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }
  done() {
    this.complete = !this.complete;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/components/TaskManager.js":
/*!***************************************!*\
  !*** ./src/components/TaskManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/components/Task.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCard */ "./src/components/taskCard.js");
/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentProject */ "./src/components/currentProject.js");



class taskManager {
  constructor(projectName) {
    this.tasks = [];
    this.projectName = projectName;
  }

  getTaskFromStorage = () => {
    const tasks = localStorage.getItem(this.projectName);
    return JSON.parse(tasks);
  };

  setTasksToStorage = (tasks) => {
    localStorage.setItem(this.projectName, JSON.stringify(tasks));
  };

  getTask(index) {
    const tasks = this.getTaskFromStorage();
    return tasks[index];
  }

  addTask(obj) {
    const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    this.tasks.push(task);
    this.setTasksToStorage(this.tasks);
    this.showTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.setTasksToStorage(this.tasks);
    this.showTasks();
  }

  editTask(index, data) {
    const tasks = this.getTaskFromStorage();
    const task = tasks[index];
    task.title = data.title;
    task.description = data.description;
    task.dueDate = data.dueDate;
    this.setTasksToStorage(tasks);
    this.showTasks();
  }
  updateTask(index) {
    const tasks = this.getTaskFromStorage();
    const task = tasks[index];
    task.complete = !task.complete;
    this.setTasksToStorage(tasks);
    this.showTasks();
  }

  showTasks() {
    const title = document.querySelector(".title");
    title.textContent = _currentProject__WEBPACK_IMPORTED_MODULE_2__["default"].project.title;
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    const tasks = this.getTaskFromStorage() || [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.complete) {
        dones.appendChild((0,_taskCard__WEBPACK_IMPORTED_MODULE_1__["default"])(task, i));
      } else {
        tasksContainer.appendChild((0,_taskCard__WEBPACK_IMPORTED_MODULE_1__["default"])(task, i));
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskManager);


/***/ }),

/***/ "./src/components/aside.js":
/*!*********************************!*\
  !*** ./src/components/aside.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ "./src/components/projectForm.js");
/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentProject */ "./src/components/currentProject.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/components/projectManager.js");
/* harmony import */ var _img_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/today.svg */ "./src/img/today.svg");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/plus.svg */ "./src/img/plus.svg");





const aside = () => {
  const aside = document.createElement("aside");
  const projectsContainer = document.createElement("ul");
  projectsContainer.classList.add("projects");
  const html = `<div class="project today">
  <img src="${_img_today_svg__WEBPACK_IMPORTED_MODULE_3__}" class="icon" alt="" />
  <p class="project-name">Today</p>
</div>
<div class="projects-container">
  <div class="header">
    Projects
    <img src="${_img_plus_svg__WEBPACK_IMPORTED_MODULE_4__}" class="icon add-project" alt="" />
  </div>`;
  aside.insertAdjacentHTML("afterbegin", html);
  aside.appendChild((0,_projectForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
  aside.appendChild(projectsContainer);
  // Today Project

  const today = aside.querySelector(".today");
  today.addEventListener("click", () => {
    const project = _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProject("today");
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project = project;
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project.tm.showTasks();
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  // New Project Form
  const addProjectButton = aside.querySelector(".add-project");
  addProjectButton.addEventListener("click", () => {
    const form = aside.querySelector("form");
    form.classList.toggle("hidden");
  });

  return aside;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aside);


/***/ }),

/***/ "./src/components/currentProject.js":
/*!******************************************!*\
  !*** ./src/components/currentProject.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let currentProject = {
  project: "",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentProject);


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_list_box_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/list-box.svg */ "./src/img/list-box.svg");
/* harmony import */ var _img_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/menu.svg */ "./src/img/menu.svg");


const header = () => {
  const header = document.createElement("header");
  const html = `
  <nav>
    <div class="logo">
      <img src="${_img_list_box_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="" class="icon" />
      <h1>Todo List</h1>
    </div>
    <img src="${_img_menu_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="" class="icon burger-menu" />
  </nav>
`;
  header.insertAdjacentHTML("afterbegin", html);
  const burgerMenu = header.querySelector(".burger-menu");
  burgerMenu.addEventListener("click", () => {
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm */ "./src/components/taskForm.js");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/plus.svg */ "./src/img/plus.svg");


const addTaskButton = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("add-task-btn");
  const img = `<img src="${_img_plus_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="" class="icon" /> Add task`;
  button.insertAdjacentHTML("afterbegin", img);
  button.addEventListener("click", () => {
    const form = document.querySelector(".add-task-form");
    form.classList.toggle("hidden");
  });
  return button;
};

const main = () => {
  // Creating Elements
  const main = document.createElement("main");
  const container = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.classList.add("title");
  container.classList.add("container");
  const tasks = document.createElement("div");
  const dones = document.createElement("div");
  tasks.classList.add("tasks-container");
  dones.classList.add("dones-container");
  // Append child
  container.appendChild(h3);
  container.appendChild(addTaskButton());
  container.appendChild((0,_taskForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild(tasks);
  container.appendChild(dones);
  main.appendChild(container);

  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/components/projectCard.js":
/*!***************************************!*\
  !*** ./src/components/projectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/components/projectManager.js");
/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentProject */ "./src/components/currentProject.js");
/* harmony import */ var _img_dots_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/dots.svg */ "./src/img/dots.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/delete.svg */ "./src/img/delete.svg");





const projectCard = (project, index) => {
  const card = document.createElement("li");
  card.classList.add("project");
  const html = `
  <p class="project-name">${project.title}</p>
  <img src="${_img_dots_svg__WEBPACK_IMPORTED_MODULE_2__}" class="icon dots" alt="" />
  <div class="project-pop hidden">
    <div class="project-edit">
      <img src="${_img_edit_svg__WEBPACK_IMPORTED_MODULE_3__}" class="icon" alt="" /> Edit
      project
    </div>
    <div class="project-delete">
      <img src="${_img_delete_svg__WEBPACK_IMPORTED_MODULE_4__}" class="icon" alt="" />Delete
      project
    </div>
  </div>`;

  card.insertAdjacentHTML("afterbegin", html);
  // Show projects tasks
  card.addEventListener("click", () => {
    const title = card
      .querySelector(".project-name")
      .textContent.trim()
      .toLowerCase();
    const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(title);
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project = project;
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project.tm.showTasks();
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  // Dots Menu Button
  const menuButton = card.querySelector(".dots");
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
  });
  // delete button project
  const deleteButton = card.querySelector(".project-delete");
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(index);
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
    // After Project is deleted
    const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProject("today");
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project = project;
    _currentProject__WEBPACK_IMPORTED_MODULE_1__["default"].project.tm.showTasks();
    const aside = document.querySelector("aside");
    aside.classList.toggle("show");
  });
  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectCard);


/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/components/projectManager.js");

const projectForm = () => {
  const form = document.createElement("form");
  form.classList.add("hidden");
  form.classList.add("project-form");
  const html = `<input type="text" required placeholder="Project title" id="project-title"/>
  <button class="btn" type="submit">Add</button>`;
  form.insertAdjacentHTML("afterbegin", html);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = form.querySelector("#project-title");
    _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(title.value.trim().toLowerCase());
    form.reset();
    form.classList.toggle("hidden");
  });
  return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);


/***/ }),

/***/ "./src/components/projectManager.js":
/*!******************************************!*\
  !*** ./src/components/projectManager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCard */ "./src/components/projectCard.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");


const projectManager = (() => {
  const projects = JSON.parse(localStorage.getItem("PS")) || [];
  const addProject = (title) => {
    const project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
    projects.push(project);
    setProjects();
    showProjects();
  };
  const deleteProject = (index) => {
    projects.splice(index, 1);
    setProjects();
    showProjects();
  };

  const setProjects = () => {
    localStorage.setItem("PS", JSON.stringify(projects));
  };
  const getProjects = () => {
    return JSON.parse(localStorage.getItem("PS"));
  };
  const getProject = (title) => {
    const project = projects.find((p) => p.title === title);
    const p = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](project.title);
    return p;
  };
  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.innerHTML = "";
    const projects = getProjects() || [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.title === "today") continue;
      projectsContainer.appendChild((0,_projectCard__WEBPACK_IMPORTED_MODULE_0__["default"])(project, i));
    }
  };
  return { addProject, deleteProject, showProjects, getProject };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);


/***/ }),

/***/ "./src/components/taskCard.js":
/*!************************************!*\
  !*** ./src/components/taskCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentProject */ "./src/components/currentProject.js");
/* harmony import */ var _img_t_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/t.svg */ "./src/img/t.svg");
/* harmony import */ var _img_f_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/f.svg */ "./src/img/f.svg");
/* harmony import */ var _img_date_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/date.svg */ "./src/img/date.svg");
/* harmony import */ var _img_dots_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/dots.svg */ "./src/img/dots.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/edit.svg */ "./src/img/edit.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/delete.svg */ "./src/img/delete.svg");







const taskCard = (task, index) => {
  const card = document.createElement("div");
  card.classList.add("task-card");
  card.classList.add(task.priority);
  const html = `
    <div class="task-done">
      <img src="${task.complete ? _img_t_svg__WEBPACK_IMPORTED_MODULE_1__ : _img_f_svg__WEBPACK_IMPORTED_MODULE_2__}" class="icon" alt="" />
    </div>
    <div class="task-content">
      <h3 class="task-title">${task.title}</h3>
      <p class="task-description">
        ${task.description}
      </p>
      <div class="task-duedate-container" >
      <img src="${_img_date_svg__WEBPACK_IMPORTED_MODULE_3__}" class="icon" alt="" />
      <p class="task-duedate"> ${task.dueDate} </p>
      <button class="btn hidden save">Save</button>
      </div>
    </div>
    <div class="task-menu">
      <img src="${_img_dots_svg__WEBPACK_IMPORTED_MODULE_4__}" class="icon" alt="" />
    </div>
    <div class="task-pop hidden">
      <div class="task-edit">
        <img src="${_img_edit_svg__WEBPACK_IMPORTED_MODULE_5__}" class="icon" alt="" /> Edit task
      </div>
      <div class="task-delete">
        <img src="${_img_delete_svg__WEBPACK_IMPORTED_MODULE_6__}" class="icon" alt="" />Delete
        task
      </div>
    </div>
`;
  card.insertAdjacentHTML("afterbegin", html);
  // Save Button
  const saveButton = card.querySelector(".save");
  saveButton.addEventListener("click", () => {
    const taskTitleElement = card.querySelector(".task-title");
    const taskDescriptionElement = card.querySelector(".task-description");
    const taskDueDateElement = card.querySelector(".task-duedate");
    makeUnEditable(
      taskDueDateElement,
      taskDescriptionElement,
      taskTitleElement
    );
    const task = {};
    task.title = taskTitleElement.textContent;
    task.description = taskDescriptionElement.textContent;
    task.dueDate = taskDueDateElement.textContent;
    _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.editTask(index, task);
    saveButton.classList.toggle("hidden");
  });
  // Menu Button
  const cardMenu = card.querySelector(".task-menu");
  cardMenu.addEventListener("click", () => {
    const popper = card.querySelector(".task-pop");
    popper.classList.toggle("hidden");
  });
  // Done Button
  const doneButton = card.querySelector(".task-done");
  doneButton.addEventListener("click", () => {
    // const task = currentProject.project.tm.getTask(index);
    _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.updateTask(index);
    // currentProject.project.tm.showTasks();
  });
  // Delete Button
  const deleteButton = card.querySelector(".task-delete");
  deleteButton.addEventListener("click", () => {
    const popper = deleteButton.parentElement;
    _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.deleteTask(index);
    popper.classList.toggle("hidden");
  });
  // Edit Button
  const editButton = card.querySelector(".task-edit");
  editButton.addEventListener("click", () => {
    saveButton.classList.toggle("hidden");
    const taskTitleElement = card.querySelector(".task-title");
    const taskDescriptionElement = card.querySelector(".task-description");
    const taskDueDateElement = card.querySelector(".task-duedate");
    makeEditable(taskDueDateElement, taskDescriptionElement, taskTitleElement);
    taskTitleElement.focus();
    const popper = deleteButton.parentElement;
    popper.classList.toggle("hidden");
  });
  return card;
};

const makeEditable = (...elements) => {
  for (const element of elements) {
    element.contentEditable = true;
  }
};

const makeUnEditable = (...elements) => {
  for (const element of elements) {
    element.contentEditable = false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCard);


/***/ }),

/***/ "./src/components/taskForm.js":
/*!************************************!*\
  !*** ./src/components/taskForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentProject */ "./src/components/currentProject.js");

const taskForm = () => {
  const form = document.createElement("form");
  form.classList.add("add-task-form");
  form.classList.add("hidden");
  const html = `
  <div class="form-row">
    <input type="text" name="title" id="title" placeholder="Title" required/>
  </div>
  <div class="form-row">
    <textarea name="description" id="description"  placeholder="Description" required></textarea>
  </div>
  <div class="form-row">
    <input type="date" name="duedate" id="duedate" required/>
  </div>
  <div class="form-row">
    <select name="priority" id="priority" required>
    <option value="" disabled selected>Priority</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  </div>
  <div class="form-row">
    <div class="buttons">
      <button class="btn cancel" type="button">Cancel</button>
      <button class="btn" type="submit">Add task</button>
    </div>
  </div>
  `;
  form.insertAdjacentHTML("afterbegin", html);
  // Submit add form
  form.addEventListener("submit", getTaskData);
  // Cancel task adding
  const cancelButton = form.querySelector(".cancel");
  cancelButton.addEventListener("click", hideForm);
  return form;
};

const hideForm = () => {
  const form = document.querySelector(".add-task-form");
  form.reset();
  form.classList.add("hidden");
};

const getTaskData = (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.querySelector("#title").value;
  const description = form.querySelector("#description").value;
  const dueDate = form.querySelector("#duedate").value;
  const priority = form.querySelector("#priority").value;
  _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.addTask({ title, description, dueDate, priority });
  hideForm();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);


/***/ }),

/***/ "./src/img/date.svg":
/*!**************************!*\
  !*** ./src/img/date.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb590d1753de741ad14f.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f8c5296c1f3e0c801f9.svg";

/***/ }),

/***/ "./src/img/dots.svg":
/*!**************************!*\
  !*** ./src/img/dots.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "424cb1bfc357b817efe3.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50bf806195fdb2486ffb.svg";

/***/ }),

/***/ "./src/img/f.svg":
/*!***********************!*\
  !*** ./src/img/f.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "813f860cf80293f4ac5e.svg";

/***/ }),

/***/ "./src/img/list-box.svg":
/*!******************************!*\
  !*** ./src/img/list-box.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9031c919f637a0d8925b.svg";

/***/ }),

/***/ "./src/img/menu.svg":
/*!**************************!*\
  !*** ./src/img/menu.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4566b4cb4d60ae577178.svg";

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b3f4b5f1181fc4946d6.svg";

/***/ }),

/***/ "./src/img/t.svg":
/*!***********************!*\
  !*** ./src/img/t.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6cbef3d4a6005435067.svg";

/***/ }),

/***/ "./src/img/today.svg":
/*!***************************!*\
  !*** ./src/img/today.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d431d0b292bba924ab79.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aside */ "./src/components/aside.js");
/* harmony import */ var _components_currentProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/currentProject */ "./src/components/currentProject.js");
/* harmony import */ var _components_projectManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projectManager */ "./src/components/projectManager.js");







const app = document.querySelector(".app");
app.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
app.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_2__["default"])());
app.appendChild((0,_components_aside__WEBPACK_IMPORTED_MODULE_4__["default"])());
_components_projectManager__WEBPACK_IMPORTED_MODULE_6__["default"].addProject("today");
const today = _components_projectManager__WEBPACK_IMPORTED_MODULE_6__["default"].getProject("today");
_components_currentProject__WEBPACK_IMPORTED_MODULE_5__["default"].project = today;
_components_currentProject__WEBPACK_IMPORTED_MODULE_5__["default"].project.tm.showTasks();

window.addEventListener("click", (e) => {
  const aside = document.querySelector("aside");
  if (!e.target.closest("aside") && !e.target.matches(".burger-menu")) {
    aside.classList.remove("show");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gIC0tbWFpbi1iZy1jb2xvcjogIzljMjdiMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5uYXYge1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbn1cXG4ubG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uYWRkLXRhc2stYnRuIC5pY29uIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5mb3JtLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgaW5wdXQsXFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IHRleHRhcmVhLFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyBzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYTY4Yzg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNiYTY4Yzg7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRvbmVzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG59XFxuLmRvbmVzLWNvbnRhaW5lciA+IGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZG9uZXMtY29udGFpbmVyIC50YXNrLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLnRhc2stY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U5MWU2MztcXG59XFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNWU5M2Y7XFxufVxcbi5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMDBkMWZmO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKixcXG4udGFzay1kdWVkYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqOmZvY3VzLFxcbi50YXNrLWR1ZWRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZsZXg6IDI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3Age1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTVweDtcXG4gIHRvcDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgLmljb24sXFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCBkaXY6aG92ZXIsXFxuLnByb2plY3QtcG9wIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG4udGFzay1tZW51LFxcbi50YXNrLWRvbmUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciAuaWNvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnByb2plY3QgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XFxufVxcbi5wcm9qZWN0LXBvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IC00NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnByb2plY3QtcG9wID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50b2RheSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50aXRsZSxcXG4ucHJvamVjdC1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBhc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAxcHggI2Q2NGJlZTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FB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Q2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9DQUFvQztFQUN0QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gIC0tbWFpbi1iZy1jb2xvcjogIzljMjdiMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5uYXYge1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbn1cXG4ubG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uYWRkLXRhc2stYnRuIC5pY29uIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5mb3JtLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgaW5wdXQsXFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IHRleHRhcmVhLFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyBzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYTY4Yzg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNiYTY4Yzg7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRvbmVzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG59XFxuLmRvbmVzLWNvbnRhaW5lciA+IGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZG9uZXMtY29udGFpbmVyIC50YXNrLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLnRhc2stY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U5MWU2MztcXG59XFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNWU5M2Y7XFxufVxcbi5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMDBkMWZmO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKixcXG4udGFzay1kdWVkYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqOmZvY3VzLFxcbi50YXNrLWR1ZWRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZsZXg6IDI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3Age1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTVweDtcXG4gIHRvcDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgLmljb24sXFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCBkaXY6aG92ZXIsXFxuLnByb2plY3QtcG9wIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG4udGFzay1tZW51LFxcbi50YXNrLWRvbmUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciAuaWNvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnByb2plY3QgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XFxufVxcbi5wcm9qZWN0LXBvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IC00NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnByb2plY3QtcG9wID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50b2RheSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50aXRsZSxcXG4ucHJvamVjdC1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBhc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAxcHggI2Q2NGJlZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrTWFuYWdlciBmcm9tIFwiLi9UYXNrTWFuYWdlclwiO1xuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudG0gPSBuZXcgdGFza01hbmFnZXIodGhpcy50aXRsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cbiAgZG9uZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB0YXNrQ2FyZCBmcm9tIFwiLi90YXNrQ2FyZFwiO1xuaW1wb3J0IGN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2N1cnJlbnRQcm9qZWN0XCI7XG5jbGFzcyB0YXNrTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGdldFRhc2tGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRhc2tzKTtcbiAgfTtcblxuICBzZXRUYXNrc1RvU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH07XG5cbiAgZ2V0VGFzayhpbmRleCkge1xuICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrRnJvbVN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdGFza3NbaW5kZXhdO1xuICB9XG5cbiAgYWRkVGFzayhvYmopIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICBvYmoudGl0bGUsXG4gICAgICBvYmouZGVzY3JpcHRpb24sXG4gICAgICBvYmouZHVlRGF0ZSxcbiAgICAgIG9iai5wcmlvcml0eVxuICAgICk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2V0VGFza3NUb1N0b3JhZ2UodGhpcy50YXNrcyk7XG4gICAgdGhpcy5zaG93VGFza3MoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zZXRUYXNrc1RvU3RvcmFnZSh0aGlzLnRhc2tzKTtcbiAgICB0aGlzLnNob3dUYXNrcygpO1xuICB9XG5cbiAgZWRpdFRhc2soaW5kZXgsIGRhdGEpIHtcbiAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza0Zyb21TdG9yYWdlKCk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzW2luZGV4XTtcbiAgICB0YXNrLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSBkYXRhLmR1ZURhdGU7XG4gICAgdGhpcy5zZXRUYXNrc1RvU3RvcmFnZSh0YXNrcyk7XG4gICAgdGhpcy5zaG93VGFza3MoKTtcbiAgfVxuICB1cGRhdGVUYXNrKGluZGV4KSB7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpbmRleF07XG4gICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlO1xuICAgIHRoaXMuc2V0VGFza3NUb1N0b3JhZ2UodGFza3MpO1xuICAgIHRoaXMuc2hvd1Rhc2tzKCk7XG4gIH1cblxuICBzaG93VGFza3MoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QucHJvamVjdC50aXRsZTtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRvbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb25lcy1jb250YWluZXJcIik7XG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb25lcy5pbm5lckhUTUwgPSBcIjxoMz5DT01QTEVURUQgVEFTS1M8L2gzPlwiO1xuICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrRnJvbVN0b3JhZ2UoKSB8fCBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICBkb25lcy5hcHBlbmRDaGlsZCh0YXNrQ2FyZCh0YXNrLCBpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCh0YXNrLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNYW5hZ2VyO1xuIiwiaW1wb3J0IHByb2plY3RGb3JtIGZyb20gXCIuL3Byb2plY3RGb3JtXCI7XG5pbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSBcIi4vY3VycmVudFByb2plY3RcIjtcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy90b2RheS5zdmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvcGx1cy5zdmdcIjtcbmNvbnN0IGFzaWRlID0gKCkgPT4ge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwicHJvamVjdCB0b2RheVwiPlxuICA8aW1nIHNyYz1cIiR7aW1nMX1cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPlxuICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPlRvZGF5PC9wPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICBQcm9qZWN0c1xuICAgIDxpbWcgc3JjPVwiJHtpbWcyfVwiIGNsYXNzPVwiaWNvbiBhZGQtcHJvamVjdFwiIGFsdD1cIlwiIC8+XG4gIDwvZGl2PmA7XG4gIGFzaWRlLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKCkpO1xuICBhc2lkZS5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIC8vIFRvZGF5IFByb2plY3RcblxuICBjb25zdCB0b2RheSA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG4gIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoXCJ0b2RheVwiKTtcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLnNob3dUYXNrcygpO1xuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICB9KTtcbiAgLy8gTmV3IFByb2plY3QgRm9ybVxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gYXNpZGUucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIHJldHVybiBhc2lkZTtcbn07XG5leHBvcnQgZGVmYXVsdCBhc2lkZTtcbiIsImxldCBjdXJyZW50UHJvamVjdCA9IHtcbiAgcHJvamVjdDogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRQcm9qZWN0O1xuIiwiaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9saXN0LWJveC5zdmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvbWVudS5zdmdcIjtcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPG5hdj5cbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgPGltZyBzcmM9XCIke2ltZzF9XCIgYWx0PVwiXCIgY2xhc3M9XCJpY29uXCIgLz5cbiAgICAgIDxoMT5Ub2RvIExpc3Q8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgc3JjPVwiJHtpbWcyfVwiIGFsdD1cIlwiIGNsYXNzPVwiaWNvbiBidXJnZXItbWVudVwiIC8+XG4gIDwvbmF2PlxuYDtcbiAgaGVhZGVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcIi5idXJnZXItbWVudVwiKTtcbiAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICB9KTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsImltcG9ydCB0YXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybVwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9wbHVzLnN2Z1wiO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICBjb25zdCBpbWcgPSBgPGltZyBzcmM9XCIke2ltZzF9XCIgYWx0PVwiXCIgY2xhc3M9XCJpY29uXCIgLz4gQWRkIHRhc2tgO1xuICBidXR0b24uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBpbWcpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAvLyBDcmVhdGluZyBFbGVtZW50c1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRvbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzLWNvbnRhaW5lclwiKTtcbiAgZG9uZXMuY2xhc3NMaXN0LmFkZChcImRvbmVzLWNvbnRhaW5lclwiKTtcbiAgLy8gQXBwZW5kIGNoaWxkXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lcyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9kb3RzLnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9kZWxldGUuc3ZnXCI7XG5jb25zdCBwcm9qZWN0Q2FyZCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC50aXRsZX08L3A+XG4gIDxpbWcgc3JjPVwiJHtpbWcxfVwiIGNsYXNzPVwiaWNvbiBkb3RzXCIgYWx0PVwiXCIgLz5cbiAgPGRpdiBjbGFzcz1cInByb2plY3QtcG9wIGhpZGRlblwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXRcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWcyfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+IEVkaXRcbiAgICAgIHByb2plY3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZWxldGVcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWczfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+RGVsZXRlXG4gICAgICBwcm9qZWN0XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICAvLyBTaG93IHByb2plY3RzIHRhc2tzXG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNhcmRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKVxuICAgICAgLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QodGl0bGUpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICAvLyBEb3RzIE1lbnUgQnV0dG9uXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIGRlbGV0ZSBidXR0b24gcHJvamVjdFxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAvLyBBZnRlciBQcm9qZWN0IGlzIGRlbGV0ZWRcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChcInRvZGF5XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDYXJkO1xuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5jb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbiAgY29uc3QgaHRtbCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlByb2plY3QgdGl0bGVcIiBpZD1cInByb2plY3QtdGl0bGVcIi8+XG4gIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+YDtcbiAgZm9ybS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHRpdGxlLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Rm9ybTtcbiIsImltcG9ydCBwcm9qZWN0Q2FyZCBmcm9tIFwiLi9wcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQU1wiKSkgfHwgW107XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgc2V0UHJvamVjdHMoKTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0UHJvamVjdHMoKTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBTXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUFNcIikpO1xuICB9O1xuICBjb25zdCBnZXRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHApID0+IHAudGl0bGUgPT09IHRpdGxlKTtcbiAgICBjb25zdCBwID0gbmV3IFByb2plY3QocHJvamVjdC50aXRsZSk7XG4gICAgcmV0dXJuIHA7XG4gIH07XG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCkgfHwgW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgaWYgKHByb2plY3QudGl0bGUgPT09IFwidG9kYXlcIikgY29udGludWU7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZChwcm9qZWN0LCBpKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBzaG93UHJvamVjdHMsIGdldFByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IGN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgdCBmcm9tIFwiLi4vaW1nL3Quc3ZnXCI7XG5pbXBvcnQgZiBmcm9tIFwiLi4vaW1nL2Yuc3ZnXCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL2RhdGUuc3ZnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2RvdHMuc3ZnXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vaW1nL2VkaXQuc3ZnXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vaW1nL2RlbGV0ZS5zdmdcIjtcbmNvbnN0IHRhc2tDYXJkID0gKHRhc2ssIGluZGV4KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhcmRcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5KTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kb25lXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7dGFzay5jb21wbGV0ZSA/IHQgOiBmfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgICAgPGgzIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L2gzPlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICR7dGFzay5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZWRhdGUtY29udGFpbmVyXCIgPlxuICAgICAgPGltZyBzcmM9XCIke2ltZzF9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxwIGNsYXNzPVwidGFzay1kdWVkYXRlXCI+ICR7dGFzay5kdWVEYXRlfSA8L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGhpZGRlbiBzYXZlXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stbWVudVwiPlxuICAgICAgPGltZyBzcmM9XCIke2ltZzJ9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1wb3AgaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1lZGl0XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWczfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+IEVkaXQgdGFza1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kZWxldGVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltZzR9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5EZWxldGVcbiAgICAgICAgdGFza1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICBjYXJkLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIC8vIFNhdmUgQnV0dG9uXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZVwiKTtcbiAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgdGFza0R1ZURhdGVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlZGF0ZVwiKTtcbiAgICBtYWtlVW5FZGl0YWJsZShcbiAgICAgIHRhc2tEdWVEYXRlRWxlbWVudCxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgICB0YXNrVGl0bGVFbGVtZW50XG4gICAgKTtcbiAgICBjb25zdCB0YXNrID0ge307XG4gICAgdGFzay50aXRsZSA9IHRhc2tUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uZWRpdFRhc2soaW5kZXgsIHRhc2spO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIE1lbnUgQnV0dG9uXG4gIGNvbnN0IGNhcmRNZW51ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbWVudVwiKTtcbiAgY2FyZE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb3BwZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wb3BcIik7XG4gICAgcG9wcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICAvLyBEb25lIEJ1dHRvblxuICBjb25zdCBkb25lQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZG9uZVwiKTtcbiAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHRhc2sgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLmdldFRhc2soaW5kZXgpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0udXBkYXRlVGFzayhpbmRleCk7XG4gICAgLy8gY3VycmVudFByb2plY3QucHJvamVjdC50bS5zaG93VGFza3MoKTtcbiAgfSk7XG4gIC8vIERlbGV0ZSBCdXR0b25cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb3BwZXIgPSBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLmRlbGV0ZVRhc2soaW5kZXgpO1xuICAgIHBvcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgLy8gRWRpdCBCdXR0b25cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXRcIik7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgdGFza1RpdGxlRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVkYXRlXCIpO1xuICAgIG1ha2VFZGl0YWJsZSh0YXNrRHVlRGF0ZUVsZW1lbnQsIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQsIHRhc2tUaXRsZUVsZW1lbnQpO1xuICAgIHRhc2tUaXRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICBjb25zdCBwb3BwZXIgPSBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgbWFrZUVkaXRhYmxlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgbWFrZVVuRWRpdGFibGUgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0NhcmQ7XG4iLCJpbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSBcIi4vY3VycmVudFByb2plY3RcIjtcbmNvbnN0IHRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZXF1aXJlZC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCIgaWQ9XCJkdWVkYXRlXCIgcmVxdWlyZWQvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlByaW9yaXR5PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNhbmNlbFwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+QWRkIHRhc2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gIGZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgLy8gU3VibWl0IGFkZCBmb3JtXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRUYXNrRGF0YSk7XG4gIC8vIENhbmNlbCB0YXNrIGFkZGluZ1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBnZXRUYXNrRGF0YSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uYWRkVGFzayh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSk7XG4gIGhpZGVGb3JtKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrRm9ybTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdFwiO1xuaW1wb3J0IGFzaWRlIGZyb20gXCIuL2NvbXBvbmVudHMvYXNpZGVcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlclwiO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYXBwLmFwcGVuZENoaWxkKG1haW4oKSk7XG5hcHAuYXBwZW5kQ2hpbGQoYXNpZGUoKSk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KFwidG9kYXlcIik7XG5jb25zdCB0b2RheSA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoXCJ0b2RheVwiKTtcbmN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSB0b2RheTtcbmN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGlmICghZS50YXJnZXQuY2xvc2VzdChcImFzaWRlXCIpICYmICFlLnRhcmdldC5tYXRjaGVzKFwiLmJ1cmdlci1tZW51XCIpKSB7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
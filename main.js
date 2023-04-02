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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #eee;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 50px 5px #d64bee;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wCAAwC;AAC1C;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,aAAa;AACf;;AAEA;;;EAGE,qBAAqB;EACrB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;EACd,OAAO;EACP,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,cAAc;EACd,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;;EAEE,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;AACjB;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,iDAAiD;AACnD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;EAEE,0BAA0B;AAC5B;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,kBAAkB;IAClB,MAAM;IACN,kBAAkB;IAClB,aAAa;IACb,oCAAoC;EACtC;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #eee;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 50px 5px #d64bee;\n  }\n}\n"],"sourceRoot":""}]);
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
    this.tm = new _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
  constructor() {
    this.tasks = [];
  }

  getTask(index) {
    return this.tasks[index];
  }

  addTask(obj) {
    const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    this.tasks.push(task);
    this.showTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.showTasks();
  }

  showTasks() {
    const title = document.querySelector(".title");
    title.textContent = _currentProject__WEBPACK_IMPORTED_MODULE_2__["default"].project.title;
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
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
  const projects = [];
  const addProject = (title) => {
    const project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
    projects.push(project);
    showProjects();
  };
  const deleteProject = (index) => {
    projects.splice(index, 1);
    showProjects();
  };

  const getProject = (title) => {
    const project = projects.find((p) => p.title === title);
    return project;
  };
  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.innerHTML = "";
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
    const task = _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.getTask(index);
    task.title = taskTitleElement.textContent;
    task.description = taskDescriptionElement.textContent;
    task.dueDate = taskDueDateElement.textContent;
    _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.showTasks();
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
    const task = _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.getTask(index);
    task.done();
    _currentProject__WEBPACK_IMPORTED_MODULE_0__["default"].project.tm.showTasks();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxh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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDZ0I7QUFDSjtBQUNNO0FBQ0o7QUFDa0I7QUFDQTtBQUN6RDtBQUNBLGdCQUFnQiw4REFBTTtBQUN0QixnQkFBZ0IsNERBQUk7QUFDcEIsZ0JBQWdCLDZEQUFLO0FBQ3JCLDZFQUF5QjtBQUN6QixjQUFjLDZFQUF5QjtBQUN2QywwRUFBc0I7QUFDdEIsdUZBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2N1cnJlbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY29sb3I6ICM5YzI3YjA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxubmF2IHtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuLmxvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmFkZC10YXNrLWJ0biAuaWNvbiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGlucHV0LFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSxcXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmE2OGM4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYmE2OGM4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kb25lcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5kb25lcy1jb250YWluZXIgPiBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmRvbmVzLWNvbnRhaW5lciAudGFzay1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcbi50YXNrLWNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4udGFzay1jYXJkIC5pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uaGlnaCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNlOTFlNjM7XFxufVxcbi5tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZjVlOTNmO1xcbn1cXG4ubG93IHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzAwZDFmZjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IHtcXG4gIGZsZXg6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCA+ICosXFxuLnRhc2stZHVlZGF0ZSB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKjpmb2N1cyxcXG4udGFzay1kdWVkYXRlOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmbGV4OiAyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZS1jb250YWluZXIgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTE1cHg7XFxuICB0b3A6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIC5pY29uLFxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlIC5pY29uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgZGl2OmhvdmVyLFxcbi5wcm9qZWN0LXBvcCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuLnRhc2stbWVudSxcXG4udGFzay1kb25lIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIC5oZWFkZXIgLmljb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ucHJvamVjdHMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5wcm9qZWN0IC5pY29uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlM2UzO1xcbn1cXG4ucHJvamVjdC1wb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAtNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5wcm9qZWN0LXBvcCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udG9kYXkge1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICB3aWR0aDogNzUlO1xcbn1cXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAzcHggN3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGl0bGUsXFxuLnByb2plY3QtbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgYXNpZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggNXB4ICNkNjRiZWU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsV0FBVztFQUNYLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsT0FBTztFQUNQLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlEQUFpRDtBQUNuRDtBQUNBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY29sb3I6ICM5YzI3YjA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxubmF2IHtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuLmxvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmFkZC10YXNrLWJ0biAuaWNvbiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGlucHV0LFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSxcXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmE2OGM4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYmE2OGM4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kb25lcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5kb25lcy1jb250YWluZXIgPiBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmRvbmVzLWNvbnRhaW5lciAudGFzay1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcbi50YXNrLWNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4udGFzay1jYXJkIC5pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uaGlnaCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNlOTFlNjM7XFxufVxcbi5tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZjVlOTNmO1xcbn1cXG4ubG93IHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzAwZDFmZjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IHtcXG4gIGZsZXg6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCA+ICosXFxuLnRhc2stZHVlZGF0ZSB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKjpmb2N1cyxcXG4udGFzay1kdWVkYXRlOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmbGV4OiAyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZS1jb250YWluZXIgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTE1cHg7XFxuICB0b3A6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIC5pY29uLFxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlIC5pY29uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgZGl2OmhvdmVyLFxcbi5wcm9qZWN0LXBvcCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuLnRhc2stbWVudSxcXG4udGFzay1kb25lIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciAuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIC5oZWFkZXIgLmljb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ucHJvamVjdHMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5wcm9qZWN0IC5pY29uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlM2UzO1xcbn1cXG4ucHJvamVjdC1wb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAtNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi5wcm9qZWN0LXBvcCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udG9kYXkge1xcbiAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICB3aWR0aDogNzUlO1xcbn1cXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAzcHggN3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGl0bGUsXFxuLnByb2plY3QtbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgYXNpZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggNXB4ICNkNjRiZWU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFza01hbmFnZXIgZnJvbSBcIi4vVGFza01hbmFnZXJcIjtcbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRtID0gbmV3IHRhc2tNYW5hZ2VyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cbiAgZG9uZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB0YXNrQ2FyZCBmcm9tIFwiLi90YXNrQ2FyZFwiO1xuaW1wb3J0IGN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2N1cnJlbnRQcm9qZWN0XCI7XG5jbGFzcyB0YXNrTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuXG4gIGdldFRhc2soaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc1tpbmRleF07XG4gIH1cblxuICBhZGRUYXNrKG9iaikge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgIG9iai50aXRsZSxcbiAgICAgIG9iai5kZXNjcmlwdGlvbixcbiAgICAgIG9iai5kdWVEYXRlLFxuICAgICAgb2JqLnByaW9yaXR5XG4gICAgKTtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgdGhpcy5zaG93VGFza3MoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zaG93VGFza3MoKTtcbiAgfVxuXG4gIHNob3dUYXNrcygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRpdGxlO1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgY29uc3QgZG9uZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmVzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRvbmVzLmlubmVySFRNTCA9IFwiPGgzPkNPTVBMRVRFRCBUQVNLUzwvaDM+XCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrc1tpXTtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgIGRvbmVzLmFwcGVuZENoaWxkKHRhc2tDYXJkKHRhc2ssIGkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKHRhc2ssIGkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza01hbmFnZXI7XG4iLCJpbXBvcnQgcHJvamVjdEZvcm0gZnJvbSBcIi4vcHJvamVjdEZvcm1cIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL3RvZGF5LnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9wbHVzLnN2Z1wiO1xuY29uc3QgYXNpZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0IHRvZGF5XCI+XG4gIDxpbWcgc3JjPVwiJHtpbWcxfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+VG9kYXk8L3A+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgIFByb2plY3RzXG4gICAgPGltZyBzcmM9XCIke2ltZzJ9XCIgY2xhc3M9XCJpY29uIGFkZC1wcm9qZWN0XCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+YDtcbiAgYXNpZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcbiAgLy8gVG9kYXkgUHJvamVjdFxuXG4gIGNvbnN0IHRvZGF5ID0gYXNpZGUucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcbiAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChcInRvZGF5XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICAvLyBOZXcgUHJvamVjdCBGb3JtXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBhc2lkZS5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzaWRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFzaWRlO1xuIiwibGV0IGN1cnJlbnRQcm9qZWN0ID0ge1xuICBwcm9qZWN0OiBcIlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVudFByb2plY3Q7XG4iLCJpbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL2xpc3QtYm94LnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9tZW51LnN2Z1wiO1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7aW1nMX1cIiBhbHQ9XCJcIiBjbGFzcz1cImljb25cIiAvPlxuICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGltZyBzcmM9XCIke2ltZzJ9XCIgYWx0PVwiXCIgY2xhc3M9XCJpY29uIGJ1cmdlci1tZW51XCIgLz5cbiAgPC9uYXY+XG5gO1xuICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1tZW51XCIpO1xuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IHRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL3BsdXMuc3ZnXCI7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gIGNvbnN0IGltZyA9IGA8aW1nIHNyYz1cIiR7aW1nMX1cIiBhbHQ9XCJcIiBjbGFzcz1cImljb25cIiAvPiBBZGQgdGFza2A7XG4gIGJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGltZyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIC8vIENyZWF0aW5nIEVsZW1lbnRzXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZG9uZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICBkb25lcy5jbGFzc0xpc3QuYWRkKFwiZG9uZXMtY29udGFpbmVyXCIpO1xuICAvLyBBcHBlbmQgY2hpbGRcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSgpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9kb3RzLnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9kZWxldGUuc3ZnXCI7XG5jb25zdCBwcm9qZWN0Q2FyZCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8cCBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC50aXRsZX08L3A+XG4gIDxpbWcgc3JjPVwiJHtpbWcxfVwiIGNsYXNzPVwiaWNvbiBkb3RzXCIgYWx0PVwiXCIgLz5cbiAgPGRpdiBjbGFzcz1cInByb2plY3QtcG9wIGhpZGRlblwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWVkaXRcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWcyfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+IEVkaXRcbiAgICAgIHByb2plY3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZWxldGVcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWczfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+RGVsZXRlXG4gICAgICBwcm9qZWN0XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICAvLyBTaG93IHByb2plY3RzIHRhc2tzXG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGNhcmRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKVxuICAgICAgLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QodGl0bGUpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICAvLyBEb3RzIE1lbnUgQnV0dG9uXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIGRlbGV0ZSBidXR0b24gcHJvamVjdFxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAvLyBBZnRlciBQcm9qZWN0IGlzIGRlbGV0ZWRcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChcInRvZGF5XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RDYXJkO1xuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5jb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKTtcbiAgY29uc3QgaHRtbCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlByb2plY3QgdGl0bGVcIiBpZD1cInByb2plY3QtdGl0bGVcIi8+XG4gIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+YDtcbiAgZm9ybS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHRpdGxlLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0Rm9ybTtcbiIsImltcG9ydCBwcm9qZWN0Q2FyZCBmcm9tIFwiLi9wcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHNob3dQcm9qZWN0cygpO1xuICB9O1xuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHApID0+IHAudGl0bGUgPT09IHRpdGxlKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSBcInRvZGF5XCIpIGNvbnRpbnVlO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQocHJvamVjdCwgaSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgc2hvd1Byb2plY3RzLCBnZXRQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjtcbiIsImltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IHQgZnJvbSBcIi4uL2ltZy90LnN2Z1wiO1xuaW1wb3J0IGYgZnJvbSBcIi4uL2ltZy9mLnN2Z1wiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9kYXRlLnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9kb3RzLnN2Z1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL2ltZy9kZWxldGUuc3ZnXCI7XG5jb25zdCB0YXNrQ2FyZCA9ICh0YXNrLCBpbmRleCkgPT4ge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkXCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2stZG9uZVwiPlxuICAgICAgPGltZyBzcmM9XCIke3Rhc2suY29tcGxldGUgPyB0IDogZn1cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cbiAgICAgIDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvblwiPlxuICAgICAgICAke3Rhc2suZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWVkYXRlLWNvbnRhaW5lclwiID5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWcxfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgICA8cCBjbGFzcz1cInRhc2stZHVlZGF0ZVwiPiAke3Rhc2suZHVlRGF0ZX0gPC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBoaWRkZW4gc2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW1lbnVcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWcyfVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stcG9wIGhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdFwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1nM31cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPiBFZGl0IHRhc2tcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVsZXRlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWc0fVwiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+RGVsZXRlXG4gICAgICAgIHRhc2tcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICAvLyBTYXZlIEJ1dHRvblxuICBjb25zdCBzYXZlQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnNhdmVcIik7XG4gIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0YXNrVGl0bGVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWR1ZWRhdGVcIik7XG4gICAgbWFrZVVuRWRpdGFibGUoXG4gICAgICB0YXNrRHVlRGF0ZUVsZW1lbnQsXG4gICAgICB0YXNrRGVzY3JpcHRpb25FbGVtZW50LFxuICAgICAgdGFza1RpdGxlRWxlbWVudFxuICAgICk7XG4gICAgY29uc3QgdGFzayA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uZ2V0VGFzayhpbmRleCk7XG4gICAgdGFzay50aXRsZSA9IHRhc2tUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgLy8gTWVudSBCdXR0b25cbiAgY29uc3QgY2FyZE1lbnUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tZW51XCIpO1xuICBjYXJkTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIERvbmUgQnV0dG9uXG4gIGNvbnN0IGRvbmVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kb25lXCIpO1xuICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uZ2V0VGFzayhpbmRleCk7XG4gICAgdGFzay5kb25lKCk7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5zaG93VGFza3MoKTtcbiAgfSk7XG4gIC8vIERlbGV0ZSBCdXR0b25cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb3BwZXIgPSBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLmRlbGV0ZVRhc2soaW5kZXgpO1xuICAgIHBvcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgLy8gRWRpdCBCdXR0b25cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXRcIik7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgdGFza1RpdGxlRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVkYXRlXCIpO1xuICAgIG1ha2VFZGl0YWJsZSh0YXNrRHVlRGF0ZUVsZW1lbnQsIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQsIHRhc2tUaXRsZUVsZW1lbnQpO1xuICAgIHRhc2tUaXRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICBjb25zdCBwb3BwZXIgPSBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgbWFrZUVkaXRhYmxlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgbWFrZVVuRWRpdGFibGUgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0NhcmQ7XG4iLCJpbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSBcIi4vY3VycmVudFByb2plY3RcIjtcbmNvbnN0IHRhc2tGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZXF1aXJlZC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVkYXRlXCIgaWQ9XCJkdWVkYXRlXCIgcmVxdWlyZWQvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlByaW9yaXR5PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGNhbmNlbFwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+QWRkIHRhc2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG4gIGZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgLy8gU3VibWl0IGFkZCBmb3JtXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRUYXNrRGF0YSk7XG4gIC8vIENhbmNlbCB0YXNrIGFkZGluZ1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVGb3JtKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCBoaWRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBnZXRUYXNrRGF0YSA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uYWRkVGFzayh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSk7XG4gIGhpZGVGb3JtKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrRm9ybTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdFwiO1xuaW1wb3J0IGFzaWRlIGZyb20gXCIuL2NvbXBvbmVudHMvYXNpZGVcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlclwiO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYXBwLmFwcGVuZENoaWxkKG1haW4oKSk7XG5hcHAuYXBwZW5kQ2hpbGQoYXNpZGUoKSk7XG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KFwidG9kYXlcIik7XG5jb25zdCB0b2RheSA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoXCJ0b2RheVwiKTtcbmN1cnJlbnRQcm9qZWN0LnByb2plY3QgPSB0b2RheTtcbmN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uc2hvd1Rhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
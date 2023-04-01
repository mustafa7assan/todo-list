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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 80%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n  aside {\n    display: none;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,UAAU;AACZ;AACA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wCAAwC;AAC1C;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,aAAa;AACf;;AAEA;;;EAGE,qBAAqB;EACrB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,cAAc;EACd,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;;EAEE,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;AACjB;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,iDAAiD;AACnD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h3 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 8px solid #e91e63;\n}\n.medium {\n  border-left: 8px solid #f5e93f;\n}\n.low {\n  border-left: 8px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 80%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n@media screen and (max-width: 480px) {\n  aside {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
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
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
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


const taskManager = (() => {
  const tasks = [
    new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      "Task Onw",
      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "high"
    ),
    new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      "Task Two",
      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "medium"
    ),

    new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      "Task Three",

      "if you have multiple cards with buttons and events that are associated with those buttons, you will need to ensure that the event works for the correct card when the button is clicked",
      "24/2/2022",
      "low"
    ),
  ];

  const getTask = (index) => tasks[index];

  const addTask = (obj) => {
    const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority
    );
    tasks.push(task);
    showTasks();
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    showTasks();
  };

  const showTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    const dones = document.querySelector(".dones-container");
    tasksContainer.innerHTML = "";
    dones.innerHTML = "<h3>COMPLETED TASKS</h3>";
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.complete) {
        dones.appendChild((0,_taskCard__WEBPACK_IMPORTED_MODULE_1__["default"])(task, i));
      } else {
        tasksContainer.appendChild((0,_taskCard__WEBPACK_IMPORTED_MODULE_1__["default"])(task, i));
      }
    }
  };

  return { addTask, showTasks, deleteTask, getTask };
})();

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

const aside = () => {
  const aside = document.createElement("aside");
  const projectsContainer = document.createElement("ul");
  projectsContainer.classList.add("projects");
  const html = `<div class="project today">
  <img src="../src/img/today.svg" class="icon" alt="" />
  <p class="project-name">Today</p>
</div>
<div class="projects-container">
  <div class="header">
    Projects
    <img src="../src/img/plus.svg" class="icon add-project" alt="" />
  </div>`;
  aside.insertAdjacentHTML("afterbegin", html);
  aside.appendChild((0,_projectForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
  aside.appendChild(projectsContainer);
  const addProjectButton = aside.querySelector(".add-project");
  addProjectButton.addEventListener("click", () => {
    const form = aside.querySelector("form");
    form.classList.toggle("hidden");
  });
  return aside;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aside);


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
  const html = `<div class="container">
  <nav>
    <div class="logo">
      <img src="${_img_list_box_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="" class="icon" />
      <h1>Todo List</h1>
    </div>
    <img src="${_img_menu_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="" class="icon" />
  </nav>
</div>`;
  header.insertAdjacentHTML("afterbegin", html);
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
/* harmony import */ var _TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager */ "./src/components/TaskManager.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm */ "./src/components/taskForm.js");


const addTaskButton = () => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("add-task-btn");
  const img = `<img src="../src/img/plus.svg" alt="" class="icon" /> Add task`;
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
  container.classList.add("container");
  const tasks = document.createElement("div");
  const dones = document.createElement("div");
  tasks.classList.add("tasks-container");
  dones.classList.add("dones-container");
  // Append child
  container.appendChild(addTaskButton());
  container.appendChild((0,_taskForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
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

const projectCard = (project, index) => {
  const card = document.createElement("li");
  card.classList.add("project");
  const html = `
  <p class="project-name">${project.title}</p>
  <img src="../src/img/dots.svg" class="icon dots" alt="" />
  <div class="project-pop hidden">
    <div class="project-edit">
      <img src="../src/img/edit.svg" class="icon" alt="" /> Edit
      project
    </div>
    <div class="project-delete">
      <img src="../src/img/delete.svg" class="icon" alt="" />Delete
      project
    </div>
  </div>`;

  card.insertAdjacentHTML("afterbegin", html);
  // Dots Menu Button
  const menuButton = card.querySelector(".dots");
  menuButton.addEventListener("click", () => {
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
  });
  // delete button project
  const deleteButton = card.querySelector(".project-delete");
  deleteButton.addEventListener("click", () => {
    _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(index);
    const popper = card.querySelector(".project-pop");
    popper.classList.toggle("hidden");
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
    _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(title.value);
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
  const showProjects = () => {
    const projectsContainer = document.querySelector(".projects");
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      projectsContainer.appendChild((0,_projectCard__WEBPACK_IMPORTED_MODULE_0__["default"])(project, i));
    }
  };
  return { addProject, deleteProject, showProjects };
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
/* harmony import */ var _TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager */ "./src/components/TaskManager.js");


const taskCard = (task, index) => {
  const card = document.createElement("div");
  card.classList.add("task-card");
  card.classList.add(task.priority);
  const html = `
    <div class="task-done">
      <img src="../src/img/${task.complete}.svg" class="icon" alt="" />
    </div>
    <div class="task-content">
      <h3 class="task-title">${task.title}</h3>
      <p class="task-description">
        ${task.description}
      </p>
      <div class="task-duedate-container" >
      <img src="../src/img/date.svg" class="icon" alt="" />
      <p class="task-duedate"> ${task.dueDate} </p>
      <button class="btn hidden save">Save</button>
      </div>
    </div>
    <div class="task-menu">
      <img src="../src/img/dots.svg" class="icon" alt="" />
    </div>
    <div class="task-pop hidden">
      <div class="task-edit">
        <img src="../src/img/edit.svg" class="icon" alt="" /> Edit task
      </div>
      <div class="task-delete">
        <img src="../src/img/delete.svg" class="icon" alt="" />Delete
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
    const task = _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].getTask(index);
    task.title = taskTitleElement.textContent;
    task.description = taskDescriptionElement.textContent;
    task.dueDate = taskDueDateElement.textContent;
    _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks();
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
    const task = _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].getTask(index);
    task.done();
    _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks();
  });
  // Delete Button
  const deleteButton = card.querySelector(".task-delete");
  deleteButton.addEventListener("click", () => {
    const popper = deleteButton.parentElement;
    _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(index);
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
/* harmony import */ var _TaskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager */ "./src/components/TaskManager.js");

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
  _TaskManager__WEBPACK_IMPORTED_MODULE_0__["default"].addTask({ title, description, dueDate, priority });
  hideForm();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);


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
/* harmony import */ var _components_TaskManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TaskManager */ "./src/components/TaskManager.js");
/* harmony import */ var _components_projectManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projectManager */ "./src/components/projectManager.js");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aside */ "./src/components/aside.js");






const app = document.querySelector(".app");
app.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
app.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_2__["default"])());
app.appendChild((0,_components_aside__WEBPACK_IMPORTED_MODULE_5__["default"])());
_components_TaskManager__WEBPACK_IMPORTED_MODULE_3__["default"].showTasks();
_components_projectManager__WEBPACK_IMPORTED_MODULE_4__["default"].showProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZ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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeER4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDZ0I7QUFDSjtBQUNjO0FBQ007QUFDbEI7QUFDdkM7QUFDQSxnQkFBZ0IsOERBQU07QUFDdEIsZ0JBQWdCLDREQUFJO0FBQ3BCLGdCQUFnQiw2REFBSztBQUNyQix5RUFBcUI7QUFDckIsK0VBQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FzaWRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY29sb3I6ICM5YzI3YjA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxubmF2IHtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuLmxvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmFkZC10YXNrLWJ0biAuaWNvbiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGlucHV0LFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSxcXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmE2OGM4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYmE2OGM4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kb25lcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5kb25lcy1jb250YWluZXIgPiBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRhc2stY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U5MWU2MztcXG59XFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNWU5M2Y7XFxufVxcbi5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMDBkMWZmO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKixcXG4udGFzay1kdWVkYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqOmZvY3VzLFxcbi50YXNrLWR1ZWRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xNXB4O1xcbiAgdG9wOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCAuaWNvbixcXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZSAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdjpob3ZlcixcXG4ucHJvamVjdC1wb3AgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcbi50YXNrLW1lbnUsXFxuLnRhc2stZG9uZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciAuaGVhZGVyIC5pY29uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4ucHJvamVjdCAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTNlMztcXG59XFxuLnByb2plY3QtcG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogLTQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ucHJvamVjdC1wb3AgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRvZGF5IHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogM3B4IDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7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O0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY29sb3I6ICM5YzI3YjA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxubmF2IHtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuLmxvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmFkZC10YXNrLWJ0biAuaWNvbiB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uZm9ybS1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGlucHV0LFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSxcXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmE2OGM4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjYmE2OGM4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIDpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kb25lcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5kb25lcy1jb250YWluZXIgPiBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnRhc2stY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2U5MWU2MztcXG59XFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNWU5M2Y7XFxufVxcbi5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjMDBkMWZmO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKixcXG4udGFzay1kdWVkYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqOmZvY3VzLFxcbi50YXNrLWR1ZWRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xNXB4O1xcbiAgdG9wOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCAuaWNvbixcXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZSAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdjpob3ZlcixcXG4ucHJvamVjdC1wb3AgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcbi50YXNrLW1lbnUsXFxuLnRhc2stZG9uZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciAuaGVhZGVyIC5pY29uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4ucHJvamVjdCAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTNlMztcXG59XFxuLnByb2plY3QtcG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogLTQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ucHJvamVjdC1wb3AgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRvZGF5IHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogM3B4IDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cbiAgZG9uZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB0YXNrQ2FyZCBmcm9tIFwiLi90YXNrQ2FyZFwiO1xuY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtcbiAgICBuZXcgVGFzayhcbiAgICAgIFwiVGFzayBPbndcIixcbiAgICAgIFwiaWYgeW91IGhhdmUgbXVsdGlwbGUgY2FyZHMgd2l0aCBidXR0b25zIGFuZCBldmVudHMgdGhhdCBhcmUgYXNzb2NpYXRlZCB3aXRoIHRob3NlIGJ1dHRvbnMsIHlvdSB3aWxsIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGV2ZW50IHdvcmtzIGZvciB0aGUgY29ycmVjdCBjYXJkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXCIsXG4gICAgICBcIjI0LzIvMjAyMlwiLFxuICAgICAgXCJoaWdoXCJcbiAgICApLFxuICAgIG5ldyBUYXNrKFxuICAgICAgXCJUYXNrIFR3b1wiLFxuICAgICAgXCJpZiB5b3UgaGF2ZSBtdWx0aXBsZSBjYXJkcyB3aXRoIGJ1dHRvbnMgYW5kIGV2ZW50cyB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggdGhvc2UgYnV0dG9ucywgeW91IHdpbGwgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGUgZXZlbnQgd29ya3MgZm9yIHRoZSBjb3JyZWN0IGNhcmQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcIixcbiAgICAgIFwiMjQvMi8yMDIyXCIsXG4gICAgICBcIm1lZGl1bVwiXG4gICAgKSxcblxuICAgIG5ldyBUYXNrKFxuICAgICAgXCJUYXNrIFRocmVlXCIsXG5cbiAgICAgIFwiaWYgeW91IGhhdmUgbXVsdGlwbGUgY2FyZHMgd2l0aCBidXR0b25zIGFuZCBldmVudHMgdGhhdCBhcmUgYXNzb2NpYXRlZCB3aXRoIHRob3NlIGJ1dHRvbnMsIHlvdSB3aWxsIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIGV2ZW50IHdvcmtzIGZvciB0aGUgY29ycmVjdCBjYXJkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXCIsXG4gICAgICBcIjI0LzIvMjAyMlwiLFxuICAgICAgXCJsb3dcIlxuICAgICksXG4gIF07XG5cbiAgY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4gdGFza3NbaW5kZXhdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgb2JqLnRpdGxlLFxuICAgICAgb2JqLmRlc2NyaXB0aW9uLFxuICAgICAgb2JqLmR1ZURhdGUsXG4gICAgICBvYmoucHJpb3JpdHlcbiAgICApO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgc2hvd1Rhc2tzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2hvd1Rhc2tzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgY29uc3QgZG9uZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmVzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRvbmVzLmlubmVySFRNTCA9IFwiPGgzPkNPTVBMRVRFRCBUQVNLUzwvaDM+XCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgICAgZG9uZXMuYXBwZW5kQ2hpbGQodGFza0NhcmQodGFzaywgaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQodGFzaywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhZGRUYXNrLCBzaG93VGFza3MsIGRlbGV0ZVRhc2ssIGdldFRhc2sgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNYW5hZ2VyO1xuIiwiaW1wb3J0IHByb2plY3RGb3JtIGZyb20gXCIuL3Byb2plY3RGb3JtXCI7XG5jb25zdCBhc2lkZSA9ICgpID0+IHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInByb2plY3QgdG9kYXlcIj5cbiAgPGltZyBzcmM9XCIuLi9zcmMvaW1nL3RvZGF5LnN2Z1wiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+VG9kYXk8L3A+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgIFByb2plY3RzXG4gICAgPGltZyBzcmM9XCIuLi9zcmMvaW1nL3BsdXMuc3ZnXCIgY2xhc3M9XCJpY29uIGFkZC1wcm9qZWN0XCIgYWx0PVwiXCIgLz5cbiAgPC9kaXY+YDtcbiAgYXNpZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0oKSk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gYXNpZGUucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGFzaWRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFzaWRlO1xuIiwiaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9saXN0LWJveC5zdmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvbWVudS5zdmdcIjtcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbWcxfVwiIGFsdD1cIlwiIGNsYXNzPVwiaWNvblwiIC8+XG4gICAgICA8aDE+VG9kbyBMaXN0PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIHNyYz1cIiR7aW1nMn1cIiBhbHQ9XCJcIiBjbGFzcz1cImljb25cIiAvPlxuICA8L25hdj5cbjwvZGl2PmA7XG4gIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IHRhc2tNYW5hZ2VyIGZyb20gXCIuL1Rhc2tNYW5hZ2VyXCI7XG5pbXBvcnQgdGFza0Zvcm0gZnJvbSBcIi4vdGFza0Zvcm1cIjtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcbiAgY29uc3QgaW1nID0gYDxpbWcgc3JjPVwiLi4vc3JjL2ltZy9wbHVzLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiaWNvblwiIC8+IEFkZCB0YXNrYDtcbiAgYnV0dG9uLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaW1nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgLy8gQ3JlYXRpbmcgRWxlbWVudHNcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkb25lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1jb250YWluZXJcIik7XG4gIGRvbmVzLmNsYXNzTGlzdC5hZGQoXCJkb25lcy1jb250YWluZXJcIik7XG4gIC8vIEFwcGVuZCBjaGlsZFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3MpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZXMpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuY29uc3QgcHJvamVjdENhcmQgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QudGl0bGV9PC9wPlxuICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZG90cy5zdmdcIiBjbGFzcz1cImljb24gZG90c1wiIGFsdD1cIlwiIC8+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXBvcCBoaWRkZW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1lZGl0XCI+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZWRpdC5zdmdcIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPiBFZGl0XG4gICAgICBwcm9qZWN0XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGVsZXRlXCI+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZGVsZXRlLnN2Z1wiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+RGVsZXRlXG4gICAgICBwcm9qZWN0XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgY2FyZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICAvLyBEb3RzIE1lbnUgQnV0dG9uXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZG90c1wiKTtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIGRlbGV0ZSBidXR0b24gcHJvamVjdFxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENhcmQ7XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBodG1sID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiUHJvamVjdCB0aXRsZVwiIGlkPVwicHJvamVjdC10aXRsZVwiLz5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5gO1xuICBmb3JtLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QodGl0bGUudmFsdWUpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtO1xuIiwiaW1wb3J0IHByb2plY3RDYXJkIGZyb20gXCIuL3Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgc2hvd1Byb2plY3RzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2hvd1Byb2plY3RzKCk7XG4gIH07XG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZChwcm9qZWN0LCBpKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBzaG93UHJvamVjdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IHRhc2tNYW5hZ2VyIGZyb20gXCIuL1Rhc2tNYW5hZ2VyXCI7XG5cbmNvbnN0IHRhc2tDYXJkID0gKHRhc2ssIGluZGV4KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhcmRcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5KTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kb25lXCI+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvJHt0YXNrLmNvbXBsZXRlfS5zdmdcIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cbiAgICAgIDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMz5cbiAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvblwiPlxuICAgICAgICAke3Rhc2suZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWVkYXRlLWNvbnRhaW5lclwiID5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZy9kYXRlLnN2Z1wiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgICA8cCBjbGFzcz1cInRhc2stZHVlZGF0ZVwiPiAke3Rhc2suZHVlRGF0ZX0gPC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBoaWRkZW4gc2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW1lbnVcIj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZy9kb3RzLnN2Z1wiIGNsYXNzPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stcG9wIGhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZWRpdFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZWRpdC5zdmdcIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPiBFZGl0IHRhc2tcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVsZXRlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZy9kZWxldGUuc3ZnXCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5EZWxldGVcbiAgICAgICAgdGFza1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICBjYXJkLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIC8vIFNhdmUgQnV0dG9uXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZVwiKTtcbiAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgdGFza0R1ZURhdGVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlZGF0ZVwiKTtcbiAgICBtYWtlVW5FZGl0YWJsZShcbiAgICAgIHRhc2tEdWVEYXRlRWxlbWVudCxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgICB0YXNrVGl0bGVFbGVtZW50XG4gICAgKTtcbiAgICBjb25zdCB0YXNrID0gdGFza01hbmFnZXIuZ2V0VGFzayhpbmRleCk7XG4gICAgdGFzay50aXRsZSA9IHRhc2tUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdGFzay5kdWVEYXRlID0gdGFza0R1ZURhdGVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIHRhc2tNYW5hZ2VyLnNob3dUYXNrcygpO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIE1lbnUgQnV0dG9uXG4gIGNvbnN0IGNhcmRNZW51ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbWVudVwiKTtcbiAgY2FyZE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb3BwZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wb3BcIik7XG4gICAgcG9wcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICAvLyBEb25lIEJ1dHRvblxuICBjb25zdCBkb25lQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZG9uZVwiKTtcbiAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrTWFuYWdlci5nZXRUYXNrKGluZGV4KTtcbiAgICB0YXNrLmRvbmUoKTtcbiAgICB0YXNrTWFuYWdlci5zaG93VGFza3MoKTtcbiAgfSk7XG4gIC8vIERlbGV0ZSBCdXR0b25cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwb3BwZXIgPSBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudDtcbiAgICB0YXNrTWFuYWdlci5kZWxldGVUYXNrKGluZGV4KTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIEVkaXQgQnV0dG9uXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1lZGl0XCIpO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGNvbnN0IHRhc2tUaXRsZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgdGFza0R1ZURhdGVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlZGF0ZVwiKTtcbiAgICBtYWtlRWRpdGFibGUodGFza0R1ZURhdGVFbGVtZW50LCB0YXNrRGVzY3JpcHRpb25FbGVtZW50LCB0YXNrVGl0bGVFbGVtZW50KTtcbiAgICB0YXNrVGl0bGVFbGVtZW50LmZvY3VzKCk7XG4gICAgY29uc3QgcG9wcGVyID0gZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4gICAgcG9wcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICByZXR1cm4gY2FyZDtcbn07XG5cbmNvbnN0IG1ha2VFZGl0YWJsZSA9ICguLi5lbGVtZW50cykgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IG1ha2VVbkVkaXRhYmxlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tDYXJkO1xuIiwiaW1wb3J0IHRhc2tNYW5hZ2VyIGZyb20gXCIuL1Rhc2tNYW5hZ2VyXCI7XG5jb25zdCB0YXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1mb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVxdWlyZWQvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlZGF0ZVwiIGlkPVwiZHVlZGF0ZVwiIHJlcXVpcmVkLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5Qcmlvcml0eTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjYW5jZWxcIiB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkFkZCB0YXNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuICBmb3JtLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIC8vIFN1Ym1pdCBhZGQgZm9ybVxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0VGFza0RhdGEpO1xuICAvLyBDYW5jZWwgdGFzayBhZGRpbmdcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRm9ybSk7XG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgaGlkZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gIGZvcm0ucmVzZXQoKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3QgZ2V0VGFza0RhdGEgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICB0YXNrTWFuYWdlci5hZGRUYXNrKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9KTtcbiAgaGlkZUZvcm0oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGb3JtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBtYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IHRhc2tNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvVGFza01hbmFnZXJcIjtcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQgYXNpZGUgZnJvbSBcIi4vY29tcG9uZW50cy9hc2lkZVwiO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYXBwLmFwcGVuZENoaWxkKG1haW4oKSk7XG5hcHAuYXBwZW5kQ2hpbGQoYXNpZGUoKSk7XG50YXNrTWFuYWdlci5zaG93VGFza3MoKTtcbnByb2plY3RNYW5hZ2VyLnNob3dQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n  position: relative;\n  min-height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n  padding-bottom: 50px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h4 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #ccc;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 5px solid #e91e63;\n}\n.medium {\n  border-left: 5px solid #f5e93f;\n}\n.low {\n  border-left: 5px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\nfooter {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  background-color: var(--main-bg-color);\n}\nfooter a {\n  text-decoration: none;\n  font-family: inherit;\n  color: #fff;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\nfooter a .icon {\n  height: 20px;\n  width: 20px;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 60px 1px #d64bee;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wCAAwC;AAC1C;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,aAAa;AACf;;AAEA;;;EAGE,qBAAqB;EACrB,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,8BAA8B;AAChC;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,YAAY;EACZ,6BAA6B;AAC/B;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;EACd,OAAO;EACP,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,cAAc;EACd,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,iDAAiD;AACnD;AACA;;EAEE,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;AACjB;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,iDAAiD;AACnD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;;EAEE,0BAA0B;AAC5B;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,sCAAsC;AACxC;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE;IACE,kBAAkB;IAClB,MAAM;IACN,kBAAkB;IAClB,aAAa;IACb,oCAAoC;EACtC;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --main-bg-color: #9c27b0;\n}\nbody {\n  background-color: #fff;\n  color: #333;\n  font-family: \"Inter\", sans-serif;\n  position: relative;\n  min-height: 100vh;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  max-width: 600px;\n}\n\nheader {\n  background-color: var(--main-bg-color);\n  color: white;\n  z-index: 1;\n}\nnav {\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n.logo h1 {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.icon {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\nmain {\n  margin-top: 30px;\n  padding-bottom: 50px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.add-task-btn {\n  font-size: 14px;\n  background-color: unset;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.add-task-btn .icon {\n  height: 24px;\n  width: 24px;\n}\n\n.add-task-form {\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n}\n.form-row {\n  margin-bottom: 15px;\n}\n.add-task-form .form-row input,\n.add-task-form .form-row textarea,\n.add-task-form .form-row select {\n  width: 100%;\n  max-width: 100%;\n  border: 1px solid #ccc;\n  background-color: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 12px;\n  font-family: inherit;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #ba68c8;\n  box-shadow: 0 0 5px #ba68c8;\n}\n.add-task-form .form-row textarea {\n  resize: none;\n  height: 150px;\n}\n.add-task-form .form-row label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  display: none;\n}\n.add-task-form .form-row .buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-task-form .form-row .buttons button {\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n.add-task-form .form-row .buttons :last-child {\n  background-color: var(--main-bg-color);\n  color: white;\n}\n\n.tasks-container {\n  margin-top: 10px;\n}\n\n.dones-container {\n  margin-top: 50px;\n  padding-top: 30px;\n  border-top: 1px solid #ccc;\n}\n.dones-container > h4 {\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n.dones-container .task-card {\n  background-color: #ccc;\n}\n.task-card {\n  border: 1px solid #ccc;\n  display: flex;\n  align-items: flex-start;\n  padding: 5px;\n  gap: 10px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  position: relative;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .icon {\n  width: 20px;\n  height: 20px;\n}\n.high {\n  border-left: 5px solid #e91e63;\n}\n.medium {\n  border-left: 5px solid #f5e93f;\n}\n.low {\n  border-left: 5px solid #00d1ff;\n}\n.task-card .task-content {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n.task-card .task-content > *,\n.task-duedate {\n  padding: 4px;\n  border: 1px solid transparent;\n}\n.task-card .task-content > *:focus,\n.task-duedate:focus {\n  border-color: #ccc;\n  outline: none;\n  border-radius: 5px;\n}\n.task-card .task-content .task-title {\n  font-size: 16px;\n  font-weight: 500;\n}\n.task-card .task-content .task-description {\n  font-size: 14px;\n  color: #444444;\n  flex: 2;\n  max-width: 100%;\n}\n.task-card .task-content .task-duedate-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #444444;\n  font-size: 14px;\n}\n.task-card .task-content .task-duedate-container button {\n  margin-left: auto;\n  padding: 5px 10px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n.task-card .task-pop {\n  padding-top: 5px;\n  position: absolute;\n  right: -15px;\n  top: 30px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.task-card .task-pop .icon,\n.task-card .task-content .task-duedate .icon {\n  height: 20px;\n  width: 20px;\n}\n.task-card .task-pop div {\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.task-card .task-pop div:hover,\n.project-pop div:hover {\n  background-color: #fafafa;\n}\n.task-menu,\n.task-done {\n  padding-top: 5px;\n}\n\naside {\n  background-color: #eee;\n  width: 250px;\n  height: 100%;\n  padding-top: 30px;\n  position: absolute;\n  top: 60px;\n  padding-left: 20px;\n  padding-right: 10px;\n}\n.projects-container {\n  margin-top: 30px;\n}\n.projects-container .header {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projects-container .header .icon {\n  padding: 0;\n  margin: 0;\n  width: 20px;\n  height: 20px;\n}\n.projects {\n  margin-top: 5px;\n  padding-left: 10px;\n  list-style: none;\n}\n.project {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.project .icon {\n  height: 20px;\n  width: 20px;\n}\n.project:hover {\n  background-color: #e6e3e3;\n}\n.project-pop {\n  position: absolute;\n  z-index: 2;\n  top: 25px;\n  right: -45px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.project-pop > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.today {\n  justify-content: initial;\n  gap: 10px;\n}\n.project-form {\n  margin-top: 10px;\n}\n.project-form input {\n  outline: none;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 3px 5px;\n  font-family: inherit;\n  width: 75%;\n}\n.project-form button {\n  padding: 3px 7px;\n  color: white;\n  font-weight: 600;\n  background-color: var(--main-bg-color);\n  border-radius: 5px;\n}\n\n.title,\n.project-name {\n  text-transform: capitalize;\n}\n.show {\n  display: block;\n}\nfooter {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  background-color: var(--main-bg-color);\n}\nfooter a {\n  text-decoration: none;\n  font-family: inherit;\n  color: #fff;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\nfooter a .icon {\n  height: 20px;\n  width: 20px;\n}\n@media screen and (max-width: 1200px) {\n  aside {\n    position: absolute;\n    top: 0;\n    padding-top: 100px;\n    display: none;\n    box-shadow: 0px 0px 60px 1px #d64bee;\n  }\n}\n"],"sourceRoot":""}]);
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
    dones.innerHTML = "<h4>Completed Tasks</h4>";
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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/github.svg */ "./src/img/github.svg");

const footer = () => {
  const footer = document.createElement("footer");
  const html = `
  <a href="https://github.com/mustafa7assan">
    <img src="${_img_github_svg__WEBPACK_IMPORTED_MODULE_0__}" class="icon" alt="" />
    Mustafa Hassan</a
  >`;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


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

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c195d37bdbf84cf51c2.svg";

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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aside */ "./src/components/aside.js");
/* harmony import */ var _components_currentProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/currentProject */ "./src/components/currentProject.js");
/* harmony import */ var _components_projectManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projectManager */ "./src/components/projectManager.js");







const app = document.querySelector(".app");
app.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
app.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_2__["default"])());
app.appendChild((0,_components_aside__WEBPACK_IMPORTED_MODULE_4__["default"])());
app.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FB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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDZ0I7QUFDSjtBQUNJO0FBQ0Y7QUFDa0I7QUFDQTtBQUN6RDtBQUNBLGdCQUFnQiw4REFBTTtBQUN0QixnQkFBZ0IsNERBQUk7QUFDcEIsZ0JBQWdCLDZEQUFLO0FBQ3JCLGdCQUFnQiw4REFBTTtBQUN0Qiw2RUFBeUI7QUFDekIsY0FBYyw2RUFBeUI7QUFDdkMsMEVBQXNCO0FBQ3RCLHVGQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFza01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLW1haW4tYmctY29sb3I6ICM5YzI3YjA7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5uYXYge1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbn1cXG4ubG9nbyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaWNvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5hZGQtdGFzay1idG4gLmljb24ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmZvcm0tcm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyBpbnB1dCxcXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgdGV4dGFyZWEsXFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IHNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2JhNjhjODtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2JhNjhjODtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyA6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZG9uZXMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG4uZG9uZXMtY29udGFpbmVyID4gaDQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5kb25lcy1jb250YWluZXIgLnRhc2stY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4udGFzay1jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnRhc2stY2FyZCAuaWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmhpZ2gge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTkxZTYzO1xcbn1cXG4ubWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y1ZTkzZjtcXG59XFxuLmxvdyB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMGQxZmY7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqLFxcbi50YXNrLWR1ZWRhdGUge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCA+ICo6Zm9jdXMsXFxuLnRhc2stZHVlZGF0ZTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNjY2M7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNDQ0NDQ0O1xcbiAgZmxleDogMjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xNXB4O1xcbiAgdG9wOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCAuaWNvbixcXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgLnRhc2stZHVlZGF0ZSAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdjpob3ZlcixcXG4ucHJvamVjdC1wb3AgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcbi50YXNrLW1lbnUsXFxuLnRhc2stZG9uZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciAuaGVhZGVyIC5pY29uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4ucHJvamVjdCAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTNlMztcXG59XFxuLnByb2plY3QtcG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogLTQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbn1cXG4ucHJvamVjdC1wb3AgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRvZGF5IHtcXG4gIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1mb3JtIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuLnByb2plY3QtZm9ybSBidXR0b24ge1xcbiAgcGFkZGluZzogM3B4IDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRpdGxlLFxcbi5wcm9qZWN0LW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5mb290ZXIgYSAuaWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICBhc2lkZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAxcHggI2Q2NGJlZTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtF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bEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjOWMyN2IwO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxubmF2IHtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuLmxvZ28gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uYWRkLXRhc2stYnRuIC5pY29uIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5mb3JtLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgaW5wdXQsXFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IHRleHRhcmVhLFxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyBzZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYTY4Yzg7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNiYTY4Yzg7XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFkZC10YXNrLWZvcm0gLmZvcm0tcm93IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hZGQtdGFzay1mb3JtIC5mb3JtLXJvdyAuYnV0dG9ucyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYWRkLXRhc2stZm9ybSAuZm9ybS1yb3cgLmJ1dHRvbnMgOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmRvbmVzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcXG59XFxuLmRvbmVzLWNvbnRhaW5lciA+IGg0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZG9uZXMtY29udGFpbmVyIC50YXNrLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLnRhc2stY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxufVxcbi50YXNrLWNhcmQgLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U5MWU2MztcXG59XFxuLm1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmNWU5M2Y7XFxufVxcbi5sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDBkMWZmO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50ID4gKixcXG4udGFzay1kdWVkYXRlIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jYXJkIC50YXNrLWNvbnRlbnQgPiAqOmZvY3VzLFxcbi50YXNrLWR1ZWRhdGU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQ0NDQ0NDtcXG4gIGZsZXg6IDI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY29sb3I6ICM0NDQ0NDQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stY29udGVudCAudGFzay1kdWVkYXRlLWNvbnRhaW5lciBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3Age1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTVweDtcXG4gIHRvcDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnRhc2stY2FyZCAudGFzay1wb3AgLmljb24sXFxuLnRhc2stY2FyZCAudGFzay1jb250ZW50IC50YXNrLWR1ZWRhdGUgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi50YXNrLWNhcmQgLnRhc2stcG9wIGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jYXJkIC50YXNrLXBvcCBkaXY6aG92ZXIsXFxuLnByb2plY3QtcG9wIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG4udGFzay1tZW51LFxcbi50YXNrLWRvbmUge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyIC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM0NDQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgLmhlYWRlciAuaWNvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnByb2plY3QgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmUzZTM7XFxufVxcbi5wcm9qZWN0LXBvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IC00NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG59XFxuLnByb2plY3QtcG9wID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50b2RheSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnByb2plY3QtZm9ybSBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDNweCA3cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50aXRsZSxcXG4ucHJvamVjdC1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG59XFxuZm9vdGVyIGEgLmljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgYXNpZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMXB4ICNkNjRiZWU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFza01hbmFnZXIgZnJvbSBcIi4vVGFza01hbmFnZXJcIjtcbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRtID0gbmV3IHRhc2tNYW5hZ2VyKHRoaXMudGl0bGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG4gIGRvbmUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgdGFza0NhcmQgZnJvbSBcIi4vdGFza0NhcmRcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuY2xhc3MgdGFza01hbmFnZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gIH1cblxuICBnZXRUYXNrRnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByb2plY3ROYW1lKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0YXNrcyk7XG4gIH07XG5cbiAgc2V0VGFza3NUb1N0b3JhZ2UgPSAodGFza3MpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9O1xuXG4gIGdldFRhc2soaW5kZXgpIHtcbiAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza0Zyb21TdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRhc2tzW2luZGV4XTtcbiAgfVxuXG4gIGFkZFRhc2sob2JqKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgb2JqLnRpdGxlLFxuICAgICAgb2JqLmRlc2NyaXB0aW9uLFxuICAgICAgb2JqLmR1ZURhdGUsXG4gICAgICBvYmoucHJpb3JpdHlcbiAgICApO1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnNldFRhc2tzVG9TdG9yYWdlKHRoaXMudGFza3MpO1xuICAgIHRoaXMuc2hvd1Rhc2tzKCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2V0VGFza3NUb1N0b3JhZ2UodGhpcy50YXNrcyk7XG4gICAgdGhpcy5zaG93VGFza3MoKTtcbiAgfVxuXG4gIGVkaXRUYXNrKGluZGV4LCBkYXRhKSB7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpbmRleF07XG4gICAgdGFzay50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgdGFzay5kdWVEYXRlID0gZGF0YS5kdWVEYXRlO1xuICAgIHRoaXMuc2V0VGFza3NUb1N0b3JhZ2UodGFza3MpO1xuICAgIHRoaXMuc2hvd1Rhc2tzKCk7XG4gIH1cbiAgdXBkYXRlVGFzayhpbmRleCkge1xuICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrRnJvbVN0b3JhZ2UoKTtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXhdO1xuICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcbiAgICB0aGlzLnNldFRhc2tzVG9TdG9yYWdlKHRhc2tzKTtcbiAgICB0aGlzLnNob3dUYXNrcygpO1xuICB9XG5cbiAgc2hvd1Rhc2tzKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3QudGl0bGU7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkb25lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9uZXMtY29udGFpbmVyXCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9uZXMuaW5uZXJIVE1MID0gXCI8aDQ+Q29tcGxldGVkIFRhc2tzPC9oND5cIjtcbiAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza0Zyb21TdG9yYWdlKCkgfHwgW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgICAgZG9uZXMuYXBwZW5kQ2hpbGQodGFza0NhcmQodGFzaywgaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQodGFzaywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTWFuYWdlcjtcbiIsImltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tIFwiLi9wcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IGN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCBpbWcxIGZyb20gXCIuLi9pbWcvdG9kYXkuc3ZnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL3BsdXMuc3ZnXCI7XG5jb25zdCBhc2lkZSA9ICgpID0+IHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInByb2plY3QgdG9kYXlcIj5cbiAgPGltZyBzcmM9XCIke2ltZzF9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5cbiAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj5Ub2RheTwvcD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgUHJvamVjdHNcbiAgICA8aW1nIHNyYz1cIiR7aW1nMn1cIiBjbGFzcz1cImljb24gYWRkLXByb2plY3RcIiBhbHQ9XCJcIiAvPlxuICA8L2Rpdj5gO1xuICBhc2lkZS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICBhc2lkZS5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSgpKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuICAvLyBUb2RheSBQcm9qZWN0XG5cbiAgY29uc3QgdG9kYXkgPSBhc2lkZS5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KFwidG9kYXlcIik7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdCA9IHByb2plY3Q7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5zaG93VGFza3MoKTtcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKTtcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfSk7XG4gIC8vIE5ldyBQcm9qZWN0IEZvcm1cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGFzaWRlLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gYXNpZGUucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICByZXR1cm4gYXNpZGU7XG59O1xuZXhwb3J0IGRlZmF1bHQgYXNpZGU7XG4iLCJsZXQgY3VycmVudFByb2plY3QgPSB7XG4gIHByb2plY3Q6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50UHJvamVjdDtcbiIsImltcG9ydCBpbWcgZnJvbSBcIi4uL2ltZy9naXRodWIuc3ZnXCI7XG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbXVzdGFmYTdhc3NhblwiPlxuICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5cbiAgICBNdXN0YWZhIEhhc3NhbjwvYVxuICA+YDtcbiAgZm9vdGVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL2xpc3QtYm94LnN2Z1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9tZW51LnN2Z1wiO1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8bmF2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7aW1nMX1cIiBhbHQ9XCJcIiBjbGFzcz1cImljb25cIiAvPlxuICAgICAgPGgxPlRvZG8gTGlzdDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGltZyBzcmM9XCIke2ltZzJ9XCIgYWx0PVwiXCIgY2xhc3M9XCJpY29uIGJ1cmdlci1tZW51XCIgLz5cbiAgPC9uYXY+XG5gO1xuICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgY29uc3QgYnVyZ2VyTWVudSA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1tZW51XCIpO1xuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIH0pO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IHRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL3BsdXMuc3ZnXCI7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gIGNvbnN0IGltZyA9IGA8aW1nIHNyYz1cIiR7aW1nMX1cIiBhbHQ9XCJcIiBjbGFzcz1cImljb25cIiAvPiBBZGQgdGFza2A7XG4gIGJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGltZyk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIC8vIENyZWF0aW5nIEVsZW1lbnRzXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZG9uZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICBkb25lcy5jbGFzc0xpc3QuYWRkKFwiZG9uZXMtY29udGFpbmVyXCIpO1xuICAvLyBBcHBlbmQgY2hpbGRcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSgpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVzKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IGN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL2RvdHMuc3ZnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2VkaXQuc3ZnXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vaW1nL2RlbGV0ZS5zdmdcIjtcbmNvbnN0IHByb2plY3RDYXJkID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0LnRpdGxlfTwvcD5cbiAgPGltZyBzcmM9XCIke2ltZzF9XCIgY2xhc3M9XCJpY29uIGRvdHNcIiBhbHQ9XCJcIiAvPlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1wb3AgaGlkZGVuXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZWRpdFwiPlxuICAgICAgPGltZyBzcmM9XCIke2ltZzJ9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz4gRWRpdFxuICAgICAgcHJvamVjdFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlbGV0ZVwiPlxuICAgICAgPGltZyBzcmM9XCIke2ltZzN9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5EZWxldGVcbiAgICAgIHByb2plY3RcbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcblxuICBjYXJkLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIC8vIFNob3cgcHJvamVjdHMgdGFza3NcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gY2FyZFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpXG4gICAgICAudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdCh0aXRsZSk7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdCA9IHByb2plY3Q7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5zaG93VGFza3MoKTtcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKTtcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfSk7XG4gIC8vIERvdHMgTWVudSBCdXR0b25cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5kb3RzXCIpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcG9wcGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wXCIpO1xuICAgIHBvcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgLy8gZGVsZXRlIGJ1dHRvbiBwcm9qZWN0XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRlbGV0ZVwiKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgY29uc3QgcG9wcGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcG9wXCIpO1xuICAgIHBvcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIC8vIEFmdGVyIFByb2plY3QgaXMgZGVsZXRlZFxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KFwidG9kYXlcIik7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdCA9IHByb2plY3Q7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5zaG93VGFza3MoKTtcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKTtcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENhcmQ7XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmNvbnN0IHByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBodG1sID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiUHJvamVjdCB0aXRsZVwiIGlkPVwicHJvamVjdC10aXRsZVwiLz5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5gO1xuICBmb3JtLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QodGl0bGUudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RGb3JtO1xuIiwiaW1wb3J0IHByb2plY3RDYXJkIGZyb20gXCIuL3Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5jb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBTXCIpKSB8fCBbXTtcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzZXRQcm9qZWN0cygpO1xuICAgIHNob3dQcm9qZWN0cygpO1xuICB9O1xuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRQcm9qZWN0cygpO1xuICAgIHNob3dQcm9qZWN0cygpO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3RzID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUFNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQU1wiKSk7XG4gIH07XG4gIGNvbnN0IGdldFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocCkgPT4gcC50aXRsZSA9PT0gdGl0bGUpO1xuICAgIGNvbnN0IHAgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgICByZXR1cm4gcDtcbiAgfTtcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKSB8fCBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaV07XG4gICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gXCJ0b2RheVwiKSBjb250aW51ZTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKHByb2plY3QsIGkpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHNob3dQcm9qZWN0cywgZ2V0UHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCJpbXBvcnQgY3VycmVudFByb2plY3QgZnJvbSBcIi4vY3VycmVudFByb2plY3RcIjtcbmltcG9ydCB0IGZyb20gXCIuLi9pbWcvdC5zdmdcIjtcbmltcG9ydCBmIGZyb20gXCIuLi9pbWcvZi5zdmdcIjtcbmltcG9ydCBpbWcxIGZyb20gXCIuLi9pbWcvZGF0ZS5zdmdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvZG90cy5zdmdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9pbWcvZWRpdC5zdmdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuLi9pbWcvZGVsZXRlLnN2Z1wiO1xuY29uc3QgdGFza0NhcmQgPSAodGFzaywgaW5kZXgpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZFwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRvbmVcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHt0YXNrLmNvbXBsZXRlID8gdCA6IGZ9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250ZW50XCI+XG4gICAgICA8aDMgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvaDM+XG4gICAgICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj5cbiAgICAgICAgJHt0YXNrLmRlc2NyaXB0aW9ufVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlZGF0ZS1jb250YWluZXJcIiA+XG4gICAgICA8aW1nIHNyYz1cIiR7aW1nMX1cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPlxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLWR1ZWRhdGVcIj4gJHt0YXNrLmR1ZURhdGV9IDwvcD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gaGlkZGVuIHNhdmVcIj5TYXZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1tZW51XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7aW1nMn1cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXBvcCBoaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWVkaXRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltZzN9XCIgY2xhc3M9XCJpY29uXCIgYWx0PVwiXCIgLz4gRWRpdCB0YXNrXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRlbGV0ZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1nNH1cIiBjbGFzcz1cImljb25cIiBhbHQ9XCJcIiAvPkRlbGV0ZVxuICAgICAgICB0YXNrXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIGNhcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgLy8gU2F2ZSBCdXR0b25cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5zYXZlXCIpO1xuICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGFza1RpdGxlRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUVsZW1lbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVkYXRlXCIpO1xuICAgIG1ha2VVbkVkaXRhYmxlKFxuICAgICAgdGFza0R1ZURhdGVFbGVtZW50LFxuICAgICAgdGFza0Rlc2NyaXB0aW9uRWxlbWVudCxcbiAgICAgIHRhc2tUaXRsZUVsZW1lbnRcbiAgICApO1xuICAgIGNvbnN0IHRhc2sgPSB7fTtcbiAgICB0YXNrLnRpdGxlID0gdGFza1RpdGxlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5lZGl0VGFzayhpbmRleCwgdGFzayk7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgLy8gTWVudSBCdXR0b25cbiAgY29uc3QgY2FyZE1lbnUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tZW51XCIpO1xuICBjYXJkTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHBvcHBlciA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLXBvcFwiKTtcbiAgICBwb3BwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIC8vIERvbmUgQnV0dG9uXG4gIGNvbnN0IGRvbmVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kb25lXCIpO1xuICBkb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gY29uc3QgdGFzayA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uZ2V0VGFzayhpbmRleCk7XG4gICAgY3VycmVudFByb2plY3QucHJvamVjdC50bS51cGRhdGVUYXNrKGluZGV4KTtcbiAgICAvLyBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLnNob3dUYXNrcygpO1xuICB9KTtcbiAgLy8gRGVsZXRlIEJ1dHRvblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHBvcHBlciA9IGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG0uZGVsZXRlVGFzayhpbmRleCk7XG4gICAgcG9wcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuICAvLyBFZGl0IEJ1dHRvblxuICBjb25zdCBlZGl0QnV0dG9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZWRpdFwiKTtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjb25zdCB0YXNrVGl0bGVFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlRWxlbWVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWR1ZWRhdGVcIik7XG4gICAgbWFrZUVkaXRhYmxlKHRhc2tEdWVEYXRlRWxlbWVudCwgdGFza0Rlc2NyaXB0aW9uRWxlbWVudCwgdGFza1RpdGxlRWxlbWVudCk7XG4gICAgdGFza1RpdGxlRWxlbWVudC5mb2N1cygpO1xuICAgIGNvbnN0IHBvcHBlciA9IGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgIHBvcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBtYWtlRWRpdGFibGUgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBtYWtlVW5FZGl0YWJsZSA9ICguLi5lbGVtZW50cykgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ2FyZDtcbiIsImltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jdXJyZW50UHJvamVjdFwiO1xuY29uc3QgdGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlcXVpcmVkLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIiBpZD1cImR1ZWRhdGVcIiByZXF1aXJlZC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIiByZXF1aXJlZD5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+UHJpb3JpdHk8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gY2FuY2VsXCIgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj5BZGQgdGFzazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbiAgZm9ybS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICAvLyBTdWJtaXQgYWRkIGZvcm1cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldFRhc2tEYXRhKTtcbiAgLy8gQ2FuY2VsIHRhc2sgYWRkaW5nXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUZvcm0pO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmNvbnN0IGhpZGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xuICBmb3JtLnJlc2V0KCk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGdldFRhc2tEYXRhID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgY3VycmVudFByb2plY3QucHJvamVjdC50bS5hZGRUYXNrKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9KTtcbiAgaGlkZUZvcm0oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGb3JtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBtYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IGFzaWRlIGZyb20gXCIuL2NvbXBvbmVudHMvYXNpZGVcIjtcbmltcG9ydCBjdXJyZW50UHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL2N1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0TWFuYWdlclwiO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYXBwLmFwcGVuZENoaWxkKG1haW4oKSk7XG5hcHAuYXBwZW5kQ2hpbGQoYXNpZGUoKSk7XG5hcHAuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChcInRvZGF5XCIpO1xuY29uc3QgdG9kYXkgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KFwidG9kYXlcIik7XG5jdXJyZW50UHJvamVjdC5wcm9qZWN0ID0gdG9kYXk7XG5jdXJyZW50UHJvamVjdC5wcm9qZWN0LnRtLnNob3dUYXNrcygpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xuICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCJhc2lkZVwiKSAmJiAhZS50YXJnZXQubWF0Y2hlcyhcIi5idXJnZXItbWVudVwiKSkge1xuICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
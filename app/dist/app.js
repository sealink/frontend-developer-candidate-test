/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sealink-frontend-dev-test/./src/scss/app.scss?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n\n\n\n\n//# sourceURL=webpack://sealink-frontend-dev-test/./src/entry.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClick */ \"./src/js/handleClick.js\");\n/* harmony import */ var _clearActiveAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearActiveAccordion */ \"./src/js/clearActiveAccordion.js\");\n// Add your custom JavaScript here\n\n\n\n\nconst image = document.getElementById(\"eventImage\");\nconst allEvents = document.querySelectorAll(\".accordion-item\");\n\nconsole.log(\"number1\", allEvents);\n\n// add event listener that gives the accordion its functionality\nallEvents.forEach((element) => {\n\tconsole.log(\"The eventListener Obj:\", element);\n\telement.addEventListener(\"click\", (e) => {\n\t\t(0,_clearActiveAccordion__WEBPACK_IMPORTED_MODULE_1__.default)(allEvents);\n\t\t(0,_handleClick__WEBPACK_IMPORTED_MODULE_0__.default)(image, e);\n\t});\n});\n\n\n//# sourceURL=webpack://sealink-frontend-dev-test/./src/js/app.js?");

/***/ }),

/***/ "./src/js/clearActiveAccordion.js":
/*!****************************************!*\
  !*** ./src/js/clearActiveAccordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearActiveAccordion = (allItems) => {\n\t/*\n        The purpose of this function is to remove all active accordion-items \n        so that when a user clicks on a different accordion item, only that \n        description will appear \n\n        It takes a nodeList of DOM elements(allItems) which are modified by \n        this function\n    */\n\tallItems.forEach((element) => {\n\t\telement.childNodes[1].classList.remove(\"bold-header\");\n\t\telement.childNodes[3].classList.remove(\"show\");\n\t});\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearActiveAccordion);\n\n\n//# sourceURL=webpack://sealink-frontend-dev-test/./src/js/clearActiveAccordion.js?");

/***/ }),

/***/ "./src/js/handleClick.js":
/*!*******************************!*\
  !*** ./src/js/handleClick.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleClick = (image, event) => {\n\t/*\n\t\tThe purpose of this function is to change the image and styling of a \n\t\taccordion item once the user clicks on it. \n\t\tThis is done and adding the class .show and depending\n\t\ton which event is clicked as well as changing the \n        image path and alt-text\n\n        This function takes a DOM element containing an image, and a DOM element \n        that is a member of an accordion\n\n\t*/\n\n\tconsole.log(\"The event clicked:\", event.path);\n\n\t//now we add the class .show that expands the accordion item\n\tlet relevantChild;\n\t//turney operator used so if user clicks on the title of the event\n\t// no error will occur\n\tevent.path[0].classList.contains(\"accordion-header\")\n\t\t? (relevantChild = event.path[1].childNodes[3])\n\t\t: (relevantChild = event.path[0].childNodes[3]);\n\n\trelevantChild.classList.add(\"show\");\n\n\tlet header;\n\n\t//turney operator used so if user clicks on the title of the event\n\t// no error will occur\n\tevent.path[0].classList.contains(\"accordion-header\")\n\t\t? (header = event.path[0])\n\t\t: (header = event.path[0].childNodes[1]);\n\n\t//to bold the header when active\n\theader.classList.add(\"bold-header\");\n\n\t// change the image depending on the event\n\tif (header.id === \"heading-Sydney\") {\n\t\timage.src = \"./images/vivid-sydney.jpg\";\n\t\timage.alt = \"Sydney opera house at night\";\n\t} else if (header.id === \"heading-Queens-bday\") {\n\t\timage.src = \"./images/queens-birthday-celebrations.jpg\";\n\t\timage.alt = \"Close-up of sparklers\";\n\t} else if (header.id === \"heading-Fathers-day\") {\n\t\timage.src = \"./images/fathers-day-dining.jpg\";\n\t\timage.alt = \"Close-up of clam chowder\";\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClick);\n\n\n//# sourceURL=webpack://sealink-frontend-dev-test/./src/js/handleClick.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry.js");
/******/ 	
/******/ })()
;
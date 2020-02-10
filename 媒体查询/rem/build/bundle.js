/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
//获取屏幕宽度(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; 
//获取html的dom
let htmlDom = document.getElementsByTagName('html')[0];
//设置html的fontsize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';
window.addEventListener('resize', (e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth; 
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "html {\n  background-color: #8f8f8f; }\n\n.header {\n  height: 1.06667rem;\n  width: 100%;\n  background-color: red;\n  padding-left: 0.61333rem; }\n  .header .header-item {\n    float: left;\n    font-size: 0.42667rem;\n    color: #ffcdce;\n    margin-right: 0.53333rem;\n    line-height: 1.06667rem; }\n    .header .header-item:nth-child(2) {\n      color: #fff;\n      font-size: 0.45333rem; }\n\n.banner-content {\n  position: relative; }\n  .banner-content .banner {\n    display: block;\n    width: 100%;\n    height: 5.06667rem; }\n  .banner-content .banner-title {\n    position: absolute;\n    left: 0.4rem;\n    bottom: 0.4rem;\n    font-size: 0.42667rem;\n    color: #fff; }\n\n.news-content .news-item {\n  width: 100%;\n  height: 2.4rem;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem;\n  box-sizing: border-box; }\n\n.news-content .item-inner {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  border-bottom: 0.02667rem solid #e5e5e5; }\n\n.news-content .news-img {\n  float: left;\n  display: block;\n  margin-top: 0.26667rem;\n  width: 2.53333rem;\n  height: 1.86667rem;\n  margin-right: 0.4rem; }\n\n.news-content .news-title {\n  font-size: 0.45333rem;\n  color: #440044;\n  margin-top: 0.42667rem;\n  line-height: 0.53333rem; }\n\n.news-content .time {\n  position: absolute;\n  left: 2.93333rem;\n  bottom: 0.45333rem;\n  color: #888;\n  font-size: 0.32rem; }\n\n.news-content .num {\n  position: absolute;\n  right: 0.10667rem;\n  bottom: 0.45333rem;\n  color: #888;\n  font-size: 0.32rem; }\n  .news-content .num::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -0.10667rem;\n    left: -0.61333rem;\n    width: 0.56rem;\n    height: 0.53333rem;\n    background-size: contain;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVQ4je2TsQ2DQBRDPQIjMAojsEFuBDYIne3q2IQRWCEjMAIbJM1dFH0BoY5iyc29/61f+AAAJJPt+6dJdigi2UVu+1ZhkvQgOQavkiZJE8k18rKTUB8QlHNuJG2StpxzE/l77ygAAOoFe+xSwCX2D/iZgK9l2VGp+AiSben9M3iRNBcvkZf/0e6FAwBs93XYdn84eCbbg+3hbOYFCJL8fjqq1EcAAAAASUVORK5CYII=); }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\demo\\媒体查询\\rem\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\demo\\媒体查询\\rem\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ })
/******/ ]);
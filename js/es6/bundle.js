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

"use strict";


var nameBuilder = function nameBuilder() {
    var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Lori2';
    var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Zhang";

    console.log(firstName + " " + lastName);
    console.log("Hello: " + firstName + " " + lastName + "!");
};
nameBuilder();

function addBoxes() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 45;

    var _loop = function _loop(i) {
        div = document.createElement('div');

        div.onclick = function () {
            alert("you are click on box: " + i);
        };
        result = document.getElementsByTagName("section")[0].appendChild(div);

        result.innerText = i;
    };

    for (var i = 0; i < num; i++) {
        var div;
        var result;

        _loop(i);
    }
};

var obj = {
    name: 'Lori',
    say: function say(msg) {
        console.log(name + " says: " + msg + "!");
    }
};

addBoxes(5);

console.log('test object');
console.log("test object: " + obj.name);
obj.say("Hello");

/***/ })
/******/ ]);
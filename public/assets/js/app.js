console.warn("This script is development version.");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @constructor
 */
var App = exports.App = function App(val) {
  _classCallCheck(this, App);

  this.val = val;
};

var m = new App('main');
if (true) {
  console.debug('main value:', m.val);
}

$(function () {
  // graphic
  function graphicAnimation() {
    new Vivus('graphic01', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('graphic02', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function () {
    $("#graphic01,#graphic02,#graphic03").fadeIn();
    graphicAnimation();
  }, 400);

  // art
  function artAnimation() {
    new Vivus('art01', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('art02', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function () {
    $("#art01,#art02,#art03").fadeIn();
    artAnimation();
  }, 800);

  // product
  function productAnimation() {
    new Vivus('product03', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('product04', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function () {
    $("#product01, #product02, #product03, #product04").fadeIn();
    productAnimation();
  }, 1100);

  // program
  function programAnimation() {
    new Vivus('program02', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('program03', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function () {
    $("#program01,#program02,#program03,#program04,#program05").fadeIn();
    programAnimation();
  }, 1400);

  // furniture

  function furnitureAnimation() {
    new Vivus('furniture01', {
      type: 'delayed',
      duration: 70
    });

    new Vivus('furniture02', {
      type: 'delayed',
      duration: 70
    });

    new Vivus('furniture03', {
      type: 'delayed',
      duration: 70
    }, animationEnd);

    new Vivus('furniture04', {
      type: 'delayed',
      duration: 70
    });
  }

  setTimeout(function () {
    $("#furniture01 ,#furniture02, #furniture03, #furniture04").fadeIn();
    furnitureAnimation();
  }, 1400);

  var $mvDetail = $('.mv-title, .mv-detail');
  function animationEnd() {
    $('.cls-2, .cls-11, .cls-12, .cls-13, .cls-14').css({ opacity: '0.0' }).animate({ opacity: '1' }, 400);

    $('.mv-logo').css({ opacity: '0.0' }).animate({ opacity: '1' }, 400);

    if ($(window).width() > 768) {
      $mvDetail.css({ opacity: '0.0' }).animate({ opacity: '1' }, 400);
    }

    if ($(window).width() < 768) {
      $('.sp-mv-title').css({ opacity: '0.0' }).animate({ opacity: '1' }, 400);
    }

    $('.cls-34').css({
      fill: '#9ed8f5',
      transition: "8.0s"
    });

    $('.cls-35, .cls-56, .cls-53').css({
      fill: '#fff',
      transition: "8.0s"
    });
    $('.cls-20, .cls-4, .cls-47').css({
      fill: '#2ca6e0',
      transition: "8.0s"
    });
    $('.cls-23, .cls-27').css({
      fill: '#f39800',
      transition: "8.0s"
    });
  }
});

/***/ }
/******/ ]);
//# sourceMappingURL=maps/app.map
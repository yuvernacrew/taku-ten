!function(e){function __webpack_require__(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,i){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/assets/js/",__webpack_require__(__webpack_require__.s=0)}([function(e,t,i){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=t.App=function App(e){_classCallCheck(this,App),this.val=e};new n("main");$(function(){function graphicAnimation(){new Vivus("graphic01",{type:"delayed",duration:80}),new Vivus("graphic02",{type:"delayed",duration:80})}function artAnimation(){new Vivus("art01",{type:"delayed",duration:80}),new Vivus("art02",{type:"delayed",duration:80})}function productAnimation(){new Vivus("product03",{type:"delayed",duration:80}),new Vivus("product04",{type:"delayed",duration:80})}function programAnimation(){new Vivus("program02",{type:"delayed",duration:80}),new Vivus("program03",{type:"delayed",duration:80})}function furnitureAnimation(){new Vivus("furniture01",{type:"delayed",duration:70}),new Vivus("furniture02",{type:"delayed",duration:70}),new Vivus("furniture03",{type:"delayed",duration:70},animationEnd),new Vivus("furniture04",{type:"delayed",duration:70})}function animationEnd(){$(".cls-2, .cls-11, .cls-12, .cls-13, .cls-14").css({opacity:"0.0"}).animate({opacity:"1"},400),$(".mv-logo").css({opacity:"0.0"}).animate({opacity:"1"},400),$(window).width()>768&&e.css({opacity:"0.0"}).animate({opacity:"1"},400),$(window).width()<768&&$(".sp-mv-title").css({opacity:"0.0"}).animate({opacity:"1"},400),$(".cls-34").css({fill:"#9ed8f5",transition:"8.0s"}),$(".cls-35, .cls-56, .cls-53").css({fill:"#fff",transition:"8.0s"}),$(".cls-20, .cls-4, .cls-47").css({fill:"#2ca6e0",transition:"8.0s"}),$(".cls-23, .cls-27").css({fill:"#f39800",transition:"8.0s"})}setTimeout(function(){$("#graphic01,#graphic02,#graphic03").fadeIn(),graphicAnimation()},400),setTimeout(function(){$("#art01,#art02,#art03").fadeIn(),artAnimation()},800),setTimeout(function(){$("#product01, #product02, #product03, #product04").fadeIn(),productAnimation()},1100),setTimeout(function(){$("#program01,#program02,#program03,#program04,#program05").fadeIn(),programAnimation()},1400),setTimeout(function(){$("#furniture01 ,#furniture02, #furniture03, #furniture04").fadeIn(),furnitureAnimation()},1400);var e=$(".mv-title, .mv-detail");$(".project-photo").slick({infinite:!0,autoplay:!0,autoplaySpeed:3e3})})}]);
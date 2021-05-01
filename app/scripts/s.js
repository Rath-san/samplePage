// // app
// __webpack_require__.r(__webpack_exports__);
// /* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./scripts/header.js");
// /* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./scripts/slider.js");



// (() => {
//   window.addEventListener('load', event => {
//     console.log(event);
//     Object(_header__WEBPACK_IMPORTED_MODULE_0__["header"])();
//     Object(_slider__WEBPACK_IMPORTED_MODULE_1__["slider"])();
//   });
// })();

// // header
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
// /* harmony import */ var _scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroller */ "./scripts/scroller.js");

// const header = () => {
//   console.log("this is header!");
//   Object(_scroller__WEBPACK_IMPORTED_MODULE_0__["scroller"])();
// };

// // scroller
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */
// __webpack_require__.d(__webpack_exports__, "scroller", function() {
//     return scroller;
// });
// const scroller = ()=>{}
// ;

// // slider
// __webpack_require__.r(__webpack_exports__);
// /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
// /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
// /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// /* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-slider */ "../node_modules/slick-slider/slick/slick.js");
// /* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_1__);
// // import {}


// const slider = () => {
//   // console.log(`this is slider!`)
//   const sliderContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider');
//   sliderContainer.slick({
//     // normal options...
//     infinite: false,
//     slidesToShow: 2,
//     centerMode: true // the magic
//     // responsive: [
//     // {
//     //   breakpoint: 1024,
//     //   settings: {
//     //     slidesToShow: 2,
//     //     infinite: false
//     //   }
//     // }
//     // {
//     //   breakpoint: 600,
//     //   settings: {
//     //     slidesToShow: 2,
//     //     dots: true
//     //   }
//     // },
//     // {
//     //   breakpoint: 300,
//     //   settings: 'unslick' // destroys slick
//     // }
//     // ]

//   });
//   const infoWrapperInteractiveClass = 'interactive';
//   const infoWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.info__wrapper');
//   sliderContainer.on('dragstart', () => {
//     infoWrapper.removeClass(infoWrapperInteractiveClass);
//   });
//   sliderContainer.on('touchstart', () => {
//     infoWrapper.removeClass(infoWrapperInteractiveClass);
//   });
//   sliderContainer.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
//     if (nextSlide > 0) {
//       infoWrapper.removeClass(infoWrapperInteractiveClass);
//     }
//   });
//   sliderContainer.on('afterChange', (event, slick, currentSlide) => {
//     if (currentSlide < 1) {
//       infoWrapper.addClass(infoWrapperInteractiveClass);
//     }
//   });
// };

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recently_viewed"],{

/***/ "../../src/mvfx_frontend/public/recently_viewed/index.js":
/*!*******************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/recently_viewed/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./recently_viewed */ \"../../src/mvfx_frontend/public/recently_viewed/recently_viewed.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/recently_viewed/index.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/recently_viewed/recently_viewed.js":
/*!*****************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/recently_viewed/recently_viewed.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.RecentlyViewed = RecentlyViewed;\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _infinite_scroll = __webpack_require__(/*! ../shared/infinite_scroll/infinite_scroll */ \"../../src/mvfx_frontend/public/shared/infinite_scroll/infinite_scroll.js\");\n\nvar _infinite_scroll_bootstrap_fix = __webpack_require__(/*! ../shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix */ \"../../src/mvfx_frontend/public/shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix.js\");\n\nvar _mark_favorite = __webpack_require__(/*! ../shared/mark_favorite/mark_favorite */ \"../../src/mvfx_frontend/public/shared/mark_favorite/mark_favorite.js\");\n\nvar _page_scroll_spy = __webpack_require__(/*! ../shared/page_scroll_spy/page_scroll_spy */ \"../../src/mvfx_frontend/public/shared/page_scroll_spy/page_scroll_spy.js\");\n\nvar _product_grid_video_previews = __webpack_require__(/*! ../shared/product_grid_video_previews/product_grid_video_previews */ \"../../src/mvfx_frontend/public/shared/product_grid_video_previews/product_grid_video_previews.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * RECENTLY VIEWED\n * ===============\n * Lists products recently viewed by the user.\n */\n\n/* istanbul ignore next */\n(0, _jquery2.default)(document).ready(function () {\n    RecentlyViewed();\n});\n\nfunction RecentlyViewed() {\n    var $productList = (0, _jquery2.default)('#productList');\n\n    if ($productList.length === 0) {\n        return;\n    } // Product list is empty no need to init anything.\n\n    (0, _mark_favorite.markAsFavoriteInit)();\n    (0, _product_grid_video_previews.ProductGridVideoPreviews)('#productsContainer');\n    (0, _infinite_scroll.InfiniteScroll)({ container: '.product-list-infinite-scroll', pageFetchedCallback: onPageFetched, pageRenderedCallback: onPageRendered });\n    (0, _page_scroll_spy.pageScrollSpyInit)($productList.offset().top);\n\n    /**\n     * Infinite scroll callback for when page was fetched from API but not yet rendered.\n     * @param {Object} $page - fetched page html wrapped in jQuery.\n     */\n    function onPageFetched($page) {\n        // Do a series of actions when the first page is lazy loaded. \n        if ($page.closest('[data-page-number]').data('pageNumber') === 1) {\n            (0, _jquery2.default)('#backToTopBtn').data('pageReload', false); // Inform back to top button that full page reload is not needed.      \n            (0, _jquery2.default)('.hide-infinite-scroll-header').removeClass('hide-infinite-scroll-header'); // Show page header.\n        }\n    }\n\n    /**\n     * Infinite scroll callback for when page was fetched from API and rendered.\n     * @param {Object} $page - fetched page html wrapped in jQuery. \n     * @param {String} containerArea - in what part of the container did the page was added: top or bottom.\n     */\n    function onPageRendered($page, containerArea) {\n        (0, _infinite_scroll_bootstrap_fix.infiniteScrollBootstrapFix)($page, containerArea); // Fix for screens where 3 products are fitted in one row.\n    }\n}\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/recently_viewed/recently_viewed.js?");

/***/ })

},[["../../src/mvfx_frontend/public/recently_viewed/index.js","runtime","commons"]]]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discounted_products_list"],{

/***/ "../../src/mvfx_frontend/public/discounted_products_list/discounted_products_list.js":
/*!***********************************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/discounted_products_list/discounted_products_list.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.DiscountedProductsList = DiscountedProductsList;\n\nvar _product_grid_video_previews = __webpack_require__(/*! ../shared/product_grid_video_previews/product_grid_video_previews */ \"../../src/mvfx_frontend/public/shared/product_grid_video_previews/product_grid_video_previews.js\");\n\nvar _mark_favorite = __webpack_require__(/*! ../shared/mark_favorite/mark_favorite */ \"../../src/mvfx_frontend/public/shared/mark_favorite/mark_favorite.js\");\n\nvar _infinite_scroll = __webpack_require__(/*! ../shared/infinite_scroll/infinite_scroll */ \"../../src/mvfx_frontend/public/shared/infinite_scroll/infinite_scroll.js\");\n\nvar _infinite_scroll_bootstrap_fix = __webpack_require__(/*! ../shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix */ \"../../src/mvfx_frontend/public/shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix.js\");\n\nvar _focus_on_product = __webpack_require__(/*! ../shared/focus_on_product/focus_on_product */ \"../../src/mvfx_frontend/public/shared/focus_on_product/focus_on_product.js\");\n\nvar _page_scroll_spy = __webpack_require__(/*! ../shared/page_scroll_spy/page_scroll_spy */ \"../../src/mvfx_frontend/public/shared/page_scroll_spy/page_scroll_spy.js\");\n\n/**\n * DISCOUNTED PRODUCTS LIST\n * ========================\n * Managest grid of select discounted products.\n */\n\n/* istanbul ignore next */\n$(document).ready(function () {\n    DiscountedProductsList();\n});\n\nfunction DiscountedProductsList() {\n    (0, _product_grid_video_previews.ProductGridVideoPreviews)('#productsContainer');\n    (0, _mark_favorite.markAsFavoriteInit)();\n    (0, _focus_on_product.focusOnProduct)($('.site-content').offset().top);\n    (0, _infinite_scroll.InfiniteScroll)({ container: '.product-list-infinite-scroll', pageRenderedCallback: onPageRendered });\n    (0, _page_scroll_spy.pageScrollSpyInit)($('.site-content').offset().top);\n\n    /**\n     * Infinite scroll callback for when page was fetched from API and rendered.\n     * @param {Object} $page - fetched page html wrapped in jQuery. \n     * @param {String} containerArea - in what part of the container did the page was added: top or bottom.\n     */\n    function onPageRendered($page, containerArea) {\n        (0, _infinite_scroll_bootstrap_fix.infiniteScrollBootstrapFix)($page, containerArea); // Fix for screens where 3 products are fitted in one row.\n    }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\")))\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/discounted_products_list/discounted_products_list.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/discounted_products_list/index.js":
/*!****************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/discounted_products_list/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./discounted_products_list */ \"../../src/mvfx_frontend/public/discounted_products_list/discounted_products_list.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/discounted_products_list/index.js?");

/***/ })

},[["../../src/mvfx_frontend/public/discounted_products_list/index.js","runtime","commons"]]]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq_user_products"],{

/***/ "../../src/mvfx_frontend/public/faq_user_products/faq_user_products.js":
/*!*********************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/faq_user_products/faq_user_products.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.FAQUserProducts = FAQUserProducts;\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _infinite_scroll = __webpack_require__(/*! ../shared/infinite_scroll/infinite_scroll */ \"../../src/mvfx_frontend/public/shared/infinite_scroll/infinite_scroll.js\");\n\nvar _infinite_scroll_bootstrap_fix = __webpack_require__(/*! ../shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix */ \"../../src/mvfx_frontend/public/shared/infinite_scroll_bootstrap_fix/infinite_scroll_bootstrap_fix.js\");\n\nvar _focus_on_product = __webpack_require__(/*! ../shared/focus_on_product/focus_on_product */ \"../../src/mvfx_frontend/public/shared/focus_on_product/focus_on_product.js\");\n\nvar _page_scroll_spy = __webpack_require__(/*! ../shared/page_scroll_spy/page_scroll_spy */ \"../../src/mvfx_frontend/public/shared/page_scroll_spy/page_scroll_spy.js\");\n\nvar _product_grid_video_previews = __webpack_require__(/*! ../shared/product_grid_video_previews/product_grid_video_previews */ \"../../src/mvfx_frontend/public/shared/product_grid_video_previews/product_grid_video_previews.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * FAQ USER PRODUCTS\n * =================\n * Manages grid of user products located in FAQ section.\n */\n\n/* istanbul ignore next */\n(0, _jquery2.default)(document).ready(function () {\n    FAQUserProducts();\n});\n\nfunction FAQUserProducts() {\n    (0, _focus_on_product.focusOnProduct)((0, _jquery2.default)('#productList').offset().top);\n    (0, _infinite_scroll.InfiniteScroll)({ container: '.product-list-infinite-scroll', pageFetchedCallback: onPageFetched, pageRenderedCallback: onPageRendered });\n    (0, _page_scroll_spy.pageScrollSpyInit)((0, _jquery2.default)('#productList').offset().top);\n    (0, _product_grid_video_previews.ProductGridVideoPreviews)('#productsContainer');\n\n    /**\n     * Infinite scroll callback for when page was fetched from API but not yet rendered.\n     * @param {Object} $page - fetched page html wrapped in jQuery.\n     */\n    function onPageFetched($page) {\n        // Do a series of actions when the first page is lazy loaded. \n        if ($page.closest('[data-page-number]').data('pageNumber') === 1) {\n            (0, _jquery2.default)('#backToTopBtn').data('pageReload', false); // Inform back to top button that full page reload is not needed.                  \n            (0, _jquery2.default)('.hide-infinite-scroll-header').removeClass('hide-infinite-scroll-header'); // Show page header.\n        }\n    }\n\n    /**\n     * Infinite scroll callback for when page was fetched from API and rendered.\n     * @param {Object} $page - fetched page html wrapped in jQuery. \n     * @param {String} containerArea - in what part of the container did the page was added: top or bottom.\n     */\n    function onPageRendered($page, containerArea) {\n        (0, _infinite_scroll_bootstrap_fix.infiniteScrollBootstrapFix)($page, containerArea); // Fix for screens where 3 products are fitted in one row.\n    }\n}\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/faq_user_products/faq_user_products.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/faq_user_products/index.js":
/*!*********************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/faq_user_products/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./faq_user_products */ \"../../src/mvfx_frontend/public/faq_user_products/faq_user_products.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/faq_user_products/index.js?");

/***/ })

},[["../../src/mvfx_frontend/public/faq_user_products/index.js","runtime","commons"]]]);
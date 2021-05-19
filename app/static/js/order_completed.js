(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order_completed"],{

/***/ "../../src/mvfx_frontend/public/order_completed/index.js":
/*!*******************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/order_completed/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./order_completed */ \"../../src/mvfx_frontend/public/order_completed/order_completed.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/order_completed/index.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/order_completed/order_completed.js":
/*!*****************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/order_completed/order_completed.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.OrderCompleted = OrderCompleted;\n/**\n * PRODUCT ORDER COMPLETED STEP\n * ============================\n * Confirmation step of product ordering process.\n */\n\n$(document).ready(function () {\n    OrderCompleted();\n});\n\nfunction OrderCompleted() {\n    var $dlInfoForMac = $('#dlInfoForMac'); // Download info for iOS systems.\n    var $dlInfoForOtherSystems = $('#dlInfoForOtherSystems'); // Download info for systems other than iOS.\n    var $deviceImgContainer = $('#deviceImgContainer'); // Container for either Mac or PC image.\n    var $installerExists = $('#openInstaller').attr('data-installer'); // Check if installer is installed\n\n    // Check what device the products has been ordered from and display appropriate download instructions and device image.\n    if (navigator.platform.indexOf('Mac') > -1) {\n        $dlInfoForMac.removeClass('d-none');\n\n        // srcset are used for responsive images.\n        $deviceImgContainer.append('<img class=\"img-fluid\" \\n                srcset=\"/static/images/checkout-success-mac-md.png 1310w, \\n                        /static/images/checkout-success-mac.png 2620w\"\\n                sizes=\"(max-width: 1600px) 1310px,\\n                        2620px\"                  \\n            >');\n\n        // mInstaller action for desktop application only if exists\n        if ($installerExists == 'True') {\n            window.location.href = 'minstaller://action=push';\n        }\n    } else {\n        $dlInfoForOtherSystems.removeClass('d-none');\n\n        // srcsets are used for responsive images.\n        $deviceImgContainer.append('<img class=\"img-fluid\"         \\n                srcset=\"/static/images/checkout-success-windows-md.png 1310w, \\n                        /static/images/checkout-success-windows.png 2620w\"\\n                sizes=\"(max-width: 1600px) 1310px,\\n                        2620px\"                                  \\n            >');\n    }\n\n    $('.cover').removeClass('d-none'); // Display the page contents after the layout was prepared for the appropriate device.\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\")))\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/order_completed/order_completed.js?");

/***/ })

},[["../../src/mvfx_frontend/public/order_completed/index.js","runtime","commons"]]]);
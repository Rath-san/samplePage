(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request_activation_email"],{

/***/ "../../src/mvfx_frontend/public/request_activation_email/index.js":
/*!****************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/request_activation_email/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./request_activation_email */ \"../../src/mvfx_frontend/public/request_activation_email/request_activation_email.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/request_activation_email/index.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/request_activation_email/request_activation_email.js":
/*!***********************************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/request_activation_email/request_activation_email.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.RequestActivationEmail = RequestActivationEmail;\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * REQUEST ACCOUNT ACTIVATION EMAIL\n * ================================\n * Handles request to send again a new account activation email.\n */\n\n/* istanbul ignore next */\n(0, _jquery2.default)(document).ready(function () {\n    RequestActivationEmail();\n});\n\nfunction RequestActivationEmail() {\n\n    (0, _jquery2.default)('#resendActivationMail').on('click', function () {\n        return sendRequest();\n    }); // Request button click handler.\n\n    /**\n     * Sends request to API and displays confirmation modal on success.\n     */\n    function sendRequest() {\n        _jquery2.default.get('/send-activation-email').done(function (data) {\n            if (data.mail_sent) {\n                (0, _jquery2.default)('#mailSentConfirm').modal('show'); // Display confirmation.\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/request_activation_email/request_activation_email.js?");

/***/ })

},[["../../src/mvfx_frontend/public/request_activation_email/index.js","runtime","commons"]]]);
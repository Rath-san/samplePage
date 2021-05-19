(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq_question_details"],{

/***/ "../../src/mvfx_frontend/public/faq_question_details/faq_question_details.js":
/*!***************************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/faq_question_details/faq_question_details.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.faqQuestionDetailsInit = faqQuestionDetailsInit;\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js-exposed\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _helper_utils = __webpack_require__(/*! ../../shared/helper_utils/helper_utils */ \"../../src/mvfx_frontend/shared/helper_utils/helper_utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * FAQ QUESTION DETAILS\n * ====================\n * Question details view actions scripts.\n */\n\n/* istanbul ignore next */\n(0, _jquery2.default)(document).ready(function () {\n    faqQuestionDetailsInit();\n});\n\nvar $answerHelpedBtn = void 0;\nvar blockerInstance = void 0;\nvar csrfToken = (0, _helper_utils.getCookie)('csrftoken');\n\nfunction faqQuestionDetailsInit() {\n    $answerHelpedBtn = (0, _jquery2.default)('#answerHelpedBtn');\n    blockerInstance = (0, _jquery2.default)('body').data('motionvfx.uiBlocker');\n\n    (0, _jquery2.default)('#answerHelpedBtn').on('click', function () {\n        return answerHelpedRequest();\n    });\n}\n\n/////////////////// Private Functions ////////////////////\n\n/**\n * Sends request to API informing that the answer to user's question was helpful.\n */\nfunction answerHelpedRequest() {\n    blockerInstance.start();\n\n    _jquery2.default.post('', { score: 1, csrfmiddlewaretoken: csrfToken }).done(function () {\n        (0, _jquery2.default)('#answerHelpedModal').modal('show'); // Show confirmation modal.\n        $answerHelpedBtn.addClass('disabled'); // User can mark an answer as helpful only one time.\n    }).fail(function () {\n        return (0, _jquery2.default)('#somethingWentWrongModal').modal('show');\n    }) // Show error msg modal.\n    .always(function () {\n        return blockerInstance.stop();\n    });\n}\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/faq_question_details/faq_question_details.js?");

/***/ }),

/***/ "../../src/mvfx_frontend/public/faq_question_details/index.js":
/*!************************************************************************!*\
  !*** /opt/mvfx/src/mvfx_frontend/public/faq_question_details/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../faq_question_details/faq_question_details */ \"../../src/mvfx_frontend/public/faq_question_details/faq_question_details.js\");\n\n//# sourceURL=webpack:////opt/mvfx/src/mvfx_frontend/public/faq_question_details/index.js?");

/***/ })

},[["../../src/mvfx_frontend/public/faq_question_details/index.js","runtime","commons"]]]);
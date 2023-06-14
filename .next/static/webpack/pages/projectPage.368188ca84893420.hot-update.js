"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projectPage",{

/***/ "./components/projectmodal.js":
/*!************************************!*\
  !*** ./components/projectmodal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst MotionModal = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal);\n_c = MotionModal;\nconst MotionModalContent = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent);\n_c1 = MotionModalContent;\nconst ProjectModal = (param)=>{\n    let { isOpen , onClose , project  } = param;\n    const { name , description , projectBg  } = project;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionModal, {\n        isOpen: isOpen,\n        onClose: onClose,\n        size: \"full\",\n        initial: {\n            opacity: 0,\n            scale: 0.8\n        },\n        animate: {\n            opacity: 1,\n            scale: 1\n        },\n        exit: {\n            opacity: 0,\n            scale: 0.8\n        },\n        transition: {\n            duration: 0.4\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionModalContent, {\n                initial: {\n                    y: -20,\n                    opacity: 0\n                },\n                animate: {\n                    y: 0,\n                    opacity: 1\n                },\n                exit: {\n                    y: -20,\n                    opacity: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    delay: 0.1\n                },\n                textAlign: \"center\",\n                fontSize: \"2rem\",\n                background: \"black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                        sx: {\n                            fontFamily: \"Ailerons\",\n                            fontSize: \"9rem\",\n                            textAlign: \"center\"\n                        },\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            sx: {\n                                backgroundImage: \"url(\".concat(projectBg, \")\"),\n                                backgroundSize: \"cover\",\n                                backgroundRepeat: \"no-repeat\",\n                                backgroundPosition: \"center\",\n                                height: \"45vh\",\n                                width: \"45vw\",\n                                mb: \"5rem\",\n                                borderRadius: \"2rem\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = ProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectModal);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionModal\");\n$RefreshReg$(_c1, \"MotionModalContent\");\n$RefreshReg$(_c2, \"ProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3Rtb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFReUI7QUFDYTtBQUV0QyxNQUFNUSxjQUFjRCxxREFBTUEsQ0FBQ1AsbURBQUtBO0tBQTFCUTtBQUNOLE1BQU1DLHFCQUFxQkYscURBQU1BLENBQUNOLDBEQUFZQTtNQUF4Q1E7QUFFTixNQUFNQyxlQUFlO1FBQUMsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRTtJQUNoRCxNQUFNLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxVQUFTLEVBQUUsR0FBR0g7SUFFekMscUJBQ0UsOERBQUNMO1FBQ0NHLFFBQVFBO1FBQ1JDLFNBQVNBO1FBQ1RLLE1BQUs7UUFDTEMsU0FBUztZQUFFQyxTQUFTO1lBQUdDLE9BQU87UUFBSTtRQUNsQ0MsU0FBUztZQUFFRixTQUFTO1lBQUdDLE9BQU87UUFBRTtRQUNoQ0UsTUFBTTtZQUFFSCxTQUFTO1lBQUdDLE9BQU87UUFBSTtRQUMvQkcsWUFBWTtZQUFFQyxVQUFVO1FBQUk7OzBCQUU1Qiw4REFBQ2xCLDBEQUFZQTs7Ozs7MEJBQ2IsOERBQUNHO2dCQUNDUyxTQUFTO29CQUFFTyxHQUFHLENBQUM7b0JBQUlOLFNBQVM7Z0JBQUU7Z0JBQzlCRSxTQUFTO29CQUFFSSxHQUFHO29CQUFHTixTQUFTO2dCQUFFO2dCQUM1QkcsTUFBTTtvQkFBRUcsR0FBRyxDQUFDO29CQUFJTixTQUFTO2dCQUFFO2dCQUMzQkksWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0UsT0FBTztnQkFBSTtnQkFDeENDLFdBQVU7Z0JBQ1ZDLFVBQVM7Z0JBQ1RDLFlBQVc7O2tDQUVYLDhEQUFDM0IseURBQVdBO3dCQUNWNEIsSUFBSTs0QkFDRkMsWUFBWTs0QkFDWkgsVUFBVTs0QkFDVkQsV0FBVzt3QkFDYjtrQ0FFQ2I7Ozs7OztrQ0FFSCw4REFBQ1YsOERBQWdCQTs7Ozs7a0NBQ2pCLDhEQUFDQyx1REFBU0E7a0NBQUVVOzs7Ozs7a0NBRVosOERBQUNaLGlEQUFHQTt3QkFDRjZCLFNBQVE7d0JBQ1JDLGdCQUFlO2tDQUVmLDRFQUFDOUIsaURBQUdBOzRCQUNGMkIsSUFBSTtnQ0FDRkksaUJBQWlCLE9BQWlCLE9BQVZsQixXQUFVO2dDQUNsQ21CLGdCQUFnQjtnQ0FDaEJDLGtCQUFrQjtnQ0FDbEJDLG9CQUFvQjtnQ0FDcEJDLFFBQVE7Z0NBQ1JDLE9BQU87Z0NBQ1BDLElBQUk7Z0NBQ0pDLGNBQWM7NEJBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWQ7TUF2RE0vQjtBQXlETiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3Rtb2RhbC5qcz9iMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBCb3gsXG4gIE1vZGFsQ2xvc2VCdXR0b24sXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxPdmVybGF5XG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBNb3Rpb25Nb2RhbCA9IG1vdGlvbihNb2RhbClcbmNvbnN0IE1vdGlvbk1vZGFsQ29udGVudCA9IG1vdGlvbihNb2RhbENvbnRlbnQpXG5cbmNvbnN0IFByb2plY3RNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgcHJvamVjdCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3RCZyB9ID0gcHJvamVjdFxuXG4gIHJldHVybiAoXG4gICAgPE1vdGlvbk1vZGFsXG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICBzaXplPVwiZnVsbFwiXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40IH19XG4gICAgPlxuICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgPE1vdGlvbk1vZGFsQ29udGVudFxuICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogMC4xIH19XG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGZvbnRTaXplPVwiMnJlbVwiXG4gICAgICAgIGJhY2tncm91bmQ9XCJibGFja1wiXG4gICAgICA+XG4gICAgICAgIDxNb2RhbEhlYWRlclxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQWlsZXJvbnMnLFxuICAgICAgICAgICAgZm9udFNpemU6ICc5cmVtJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XG4gICAgICAgIDxNb2RhbEJvZHk+e2Rlc2NyaXB0aW9ufTwvTW9kYWxCb2R5PlxuXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvamVjdEJnfSlgLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGhlaWdodDogJzQ1dmgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzQ1dncnLFxuICAgICAgICAgICAgICBtYjogJzVyZW0nLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycmVtJywgLy8gbm90IHN1cmUgdG8ga2VlcCA/XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L01vdGlvbk1vZGFsQ29udGVudD5cbiAgICA8L01vdGlvbk1vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2RhbFxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJCb3giLCJNb2RhbENsb3NlQnV0dG9uIiwiTW9kYWxCb2R5IiwiTW9kYWxPdmVybGF5IiwibW90aW9uIiwiTW90aW9uTW9kYWwiLCJNb3Rpb25Nb2RhbENvbnRlbnQiLCJQcm9qZWN0TW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwicHJvamVjdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RCZyIsInNpemUiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ5IiwiZGVsYXkiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImJhY2tncm91bmQiLCJzeCIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1iIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projectmodal.js\n"));

/***/ })

});
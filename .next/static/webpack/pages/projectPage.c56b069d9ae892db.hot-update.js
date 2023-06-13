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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n// import { projects} from '../utilities/projects.js'\nconst MotionModal = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal);\n_c = MotionModal;\nconst MotionModalContent = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent);\n_c1 = MotionModalContent;\nconst ProjectModal = (param)=>{\n    let { isOpen , onClose , project  } = param;\n    const { name , description , projectBg  } = project;\n    console.log(projectBg);\n    // // Find the project in the projects array\n    // const selectedProject = projects.find((proj) => proj.name === name);\n    // const backgroundImage = require(`../asset/background${selectedProject.projectBg}`).default;  \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionModal, {\n        isOpen: isOpen,\n        onClose: onClose,\n        size: \"full\",\n        initial: {\n            opacity: 0,\n            scale: 0.8\n        },\n        animate: {\n            opacity: 1,\n            scale: 1\n        },\n        exit: {\n            opacity: 0,\n            scale: 0.8\n        },\n        transition: {\n            duration: 0.4\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionModalContent, {\n            initial: {\n                y: -20,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: -20,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.3,\n                delay: 0.1\n            },\n            textAlign: \"center\",\n            fontSize: \"2rem\",\n            backgroundImage: projectBg,\n            style: {\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {\n                    sx: {\n                        fontFamily: \"Ailerons\",\n                        fontSize: \"9rem\",\n                        textAlign: \"center\"\n                    },\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/components/projectmodal.js\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, undefined);\n};\n_c2 = ProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectModal);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionModal\");\n$RefreshReg$(_c1, \"MotionModalContent\");\n$RefreshReg$(_c2, \"ProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3Rtb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0c7QUFDL0Q7QUFDdkMscURBQXFEO0FBRXJELE1BQU1PLGNBQWNELHFEQUFNQSxDQUFDTixtREFBS0E7S0FBMUJPO0FBQ04sTUFBTUMscUJBQXFCRixxREFBTUEsQ0FBQ0wsMERBQVlBO01BQXhDTztBQUVOLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFO0lBQ2hELE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLFVBQVMsRUFBRSxHQUFHSDtJQUN6Q0ksUUFBUUMsSUFBSUY7SUFDViw0Q0FBNEM7SUFDNUMsdUVBQXVFO0lBQ3ZFLGdHQUFnRztJQUNoRyxxQkFDRSw4REFBQ1I7UUFDQ0csUUFBUUE7UUFDUkMsU0FBU0E7UUFDVE8sTUFBSztRQUNMQyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsT0FBTztRQUFJO1FBQ2xDQyxTQUFTO1lBQUVGLFNBQVM7WUFBR0MsT0FBTztRQUFFO1FBQ2hDRSxNQUFNO1lBQUVILFNBQVM7WUFBR0MsT0FBTztRQUFJO1FBQy9CRyxZQUFZO1lBQUVDLFVBQVU7UUFBSTtrQkFFOUIsNEVBQUNqQjtZQUNDVyxTQUFTO2dCQUFFTyxHQUFHLENBQUM7Z0JBQUlOLFNBQVM7WUFBRTtZQUM5QkUsU0FBUztnQkFBRUksR0FBRztnQkFBR04sU0FBUztZQUFFO1lBQzVCRyxNQUFNO2dCQUFFRyxHQUFHLENBQUM7Z0JBQUlOLFNBQVM7WUFBRTtZQUMzQkksWUFBWTtnQkFBRUMsVUFBVTtnQkFBS0UsT0FBTztZQUFJO1lBQ3hDQyxXQUFVO1lBQ1ZDLFVBQVM7WUFDVEMsaUJBQWlCZjtZQUNqQmdCLE9BQU87Z0JBQ0xDLGdCQUFnQjtnQkFDaEJDLG9CQUFvQjtZQUN0Qjs7OEJBRUEsOERBQUMvQix5REFBV0E7b0JBQ1ZnQyxJQUFJO3dCQUNGQyxZQUFZO3dCQUNaTixVQUFVO3dCQUNWRCxXQUFXO29CQUNiOzhCQUVDZjs7Ozs7OzhCQUVILDhEQUFDVCw4REFBZ0JBOzs7Ozs4QkFDakIsOERBQUNDLHVEQUFTQTs4QkFBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO01BNUNNTDtBQThDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3Rtb2RhbC5qcz9iMmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsLCBNb2RhbENvbnRlbnQsIE1vZGFsSGVhZGVyLCBCb3gsIE1vZGFsQ2xvc2VCdXR0b24sIE1vZGFsQm9keSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG4vLyBpbXBvcnQgeyBwcm9qZWN0c30gZnJvbSAnLi4vdXRpbGl0aWVzL3Byb2plY3RzLmpzJ1xuXG5jb25zdCBNb3Rpb25Nb2RhbCA9IG1vdGlvbihNb2RhbCk7XG5jb25zdCBNb3Rpb25Nb2RhbENvbnRlbnQgPSBtb3Rpb24oTW9kYWxDb250ZW50KTtcblxuY29uc3QgUHJvamVjdE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdEJnIH0gPSBwcm9qZWN0O1xuICBjb25zb2xlLmxvZyhwcm9qZWN0QmcpXG4gICAgLy8gLy8gRmluZCB0aGUgcHJvamVjdCBpbiB0aGUgcHJvamVjdHMgYXJyYXlcbiAgICAvLyBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLm5hbWUgPT09IG5hbWUpO1xuICAgIC8vIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IHJlcXVpcmUoYC4uL2Fzc2V0L2JhY2tncm91bmQke3NlbGVjdGVkUHJvamVjdC5wcm9qZWN0Qmd9YCkuZGVmYXVsdDsgIFxuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uTW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIHNpemU9XCJmdWxsXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC44IH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCB9fVxuICAgICAgPlxuICAgICAgPE1vdGlvbk1vZGFsQ29udGVudFxuICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyB5OiAtMjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogMC4xIH19XG4gICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGZvbnRTaXplPVwiMnJlbVwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZT17cHJvamVjdEJnfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsIC8vIEFkanVzdCB0aGUgYmFja2dyb3VuZCBzaXplIGhlcmVcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsIC8vIEFkanVzdCB0aGUgYmFja2dyb3VuZCBwb3NpdGlvbiBpZiBuZWVkZWRcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBaWxlcm9ucycsXG4gICAgICAgICAgICBmb250U2l6ZTogJzlyZW0nLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICA8TW9kYWxCb2R5PntkZXNjcmlwdGlvbn08L01vZGFsQm9keT5cbiAgICAgIFxuICAgICAgPC9Nb3Rpb25Nb2RhbENvbnRlbnQ+XG4gICAgPC9Nb3Rpb25Nb2RhbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNb2RhbDtcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiQm94IiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIm1vdGlvbiIsIk1vdGlvbk1vZGFsIiwiTW90aW9uTW9kYWxDb250ZW50IiwiUHJvamVjdE1vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsInByb2plY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0QmciLCJjb25zb2xlIiwibG9nIiwic2l6ZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInkiLCJkZWxheSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInN4IiwiZm9udEZhbWlseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projectmodal.js\n"));

/***/ })

});
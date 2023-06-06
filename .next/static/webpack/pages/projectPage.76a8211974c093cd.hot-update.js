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

/***/ "./pages/projectPage.js":
/*!******************************!*\
  !*** ./pages/projectPage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getCategoryBackgroundImage = (category)=>{\n        // Define the background image URLs for each category\n        const backgroundImageUrls = {\n            WEB: \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\",\n            \"C++\": \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\",\n            PYTHON: \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpgg')\",\n            FULLSTACK: \"url('https://example.com/fullstack-background.jpg')\"\n        };\n        // Return the background image URL for the selected category\n        return backgroundImageUrls[category];\n    };\n    const backgroundStyle = {\n        backgroundImage: getCategoryBackgroundImage(selectedCategory),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        justifyContent: \"flex-end\",\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    selectedCategory: selectedCategory,\n                    onCategoryClick: handleCategoryClick\n                }, void 0, false, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                textAlign: \"right\",\n                children: [\n                    \" \",\n                    filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"projectNames\",\n                                href: project.href,\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"Q/zkyWiyOoDAuX7FR9Z4NQOSGlE=\");\n_c = ProjectPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDSjtBQUNtQjtBQUVqRCxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxzQkFBc0IsQ0FBQ0M7UUFDM0JGLG9CQUFvQkU7SUFDdEI7SUFFQSxNQUFNQyxtQkFBbUJULGdFQUFlVSxDQUN0QyxDQUFDQyxVQUFZQSxRQUFRSCxhQUFhSDtJQUdwQyxNQUFNTyw2QkFBNkIsQ0FBQ0o7UUFDbEMscURBQXFEO1FBQ3JELE1BQU1LLHNCQUFzQjtZQUMxQkMsS0FBSztZQUNMLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxXQUFXO1FBQ2I7UUFFQSw0REFBNEQ7UUFDNUQsT0FBT0gsbUJBQW1CLENBQUNMLFNBQVM7SUFDdEM7SUFFQSxNQUFNUyxrQkFBa0I7UUFDdEJDLGlCQUFpQk4sMkJBQTJCUDtRQUM1Q2MsZ0JBQWdCO1FBQ2hCQyxvQkFBb0I7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ25CLGtEQUFJQTtRQUFDb0IsZ0JBQWU7UUFBV0MsT0FBT0w7OzBCQUNyQyw4REFBQ2YsaURBQUdBOzBCQUNGLDRFQUFDQyxxRUFBaUJBO29CQUNoQkUsa0JBQWtCQTtvQkFDbEJrQixpQkFBaUJoQjs7Ozs7Ozs7Ozs7MEJBR3JCLDhEQUFDTCxpREFBR0E7Z0JBQUNzQixXQUFVOztvQkFBUTtvQkFDcEJmLGlCQUFpQmdCLElBQUksQ0FBQ2QsU0FBU2Usc0JBQzlCLDhEQUFDeEIsaURBQUdBO3NDQUNGLDRFQUFDeUI7Z0NBQUVDLFdBQVU7Z0NBQWVDLE1BQU1sQixRQUFRa0I7MENBQ3ZDbEIsUUFBUW1COzs7Ozs7MkJBRkhKOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQjtHQWpEd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0UGFnZS5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXRlZ29yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RDYXRlZ29yaWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIldFQlwiKTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICApO1xuXG4gIGNvbnN0IGdldENhdGVnb3J5QmFja2dyb3VuZEltYWdlID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgLy8gRGVmaW5lIHRoZSBiYWNrZ3JvdW5kIGltYWdlIFVSTHMgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VVcmxzID0ge1xuICAgICAgV0VCOiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzkwLzA5L2VjLzkwMDllY2M3OWU5MmI4YmEyMDdiNDNjN2U1NmJmYjQxLmdpZicpXCIsXG4gICAgICBcIkMrK1wiOiBcInVybCgnaHR0cHM6Ly9yYXJlLWdhbGxlcnkuY29tL21vY2FoYmlnLzQzNDA1MS1yb2FkLW1pc3QtZGFyay1uaWdodC1yYWluLW5hdHVyZS5qcGcnKVwiLFxuICAgICAgUFlUSE9OOiBcInVybCgnaHR0cHM6Ly9yYXJlLWdhbGxlcnkuY29tL21vY2FoYmlnLzQzNDA1MS1yb2FkLW1pc3QtZGFyay1uaWdodC1yYWluLW5hdHVyZS5qcGdnJylcIixcbiAgICAgIEZVTExTVEFDSzogXCJ1cmwoJ2h0dHBzOi8vZXhhbXBsZS5jb20vZnVsbHN0YWNrLWJhY2tncm91bmQuanBnJylcIixcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJuIHRoZSBiYWNrZ3JvdW5kIGltYWdlIFVSTCBmb3IgdGhlIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgcmV0dXJuIGJhY2tncm91bmRJbWFnZVVybHNbY2F0ZWdvcnldO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGdldENhdGVnb3J5QmFja2dyb3VuZEltYWdlKHNlbGVjdGVkQ2F0ZWdvcnkpLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9PlxuICAgICAgPEJveD5cbiAgICAgICAgPFByb2plY3RDYXRlZ29yaWVzXG4gICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggdGV4dEFsaWduPVwicmlnaHRcIj4gey8qIEFsaWduIHByb2plY3QgbmFtZXMgdG8gdGhlIHJpZ2h0ICovfVxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2plY3ROYW1lc1wiIGhyZWY9e3Byb2plY3QuaHJlZn0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsIkZsZXgiLCJCb3giLCJQcm9qZWN0Q2F0ZWdvcmllcyIsIlByb2plY3RQYWdlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImdldENhdGVnb3J5QmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZEltYWdlVXJscyIsIldFQiIsIlBZVEhPTiIsIkZVTExTVEFDSyIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsIm9uQ2F0ZWdvcnlDbGljayIsInRleHRBbGlnbiIsIm1hcCIsImluZGV4IiwiYSIsImNsYXNzTmFtZSIsImhyZWYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
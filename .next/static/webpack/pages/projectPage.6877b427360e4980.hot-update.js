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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://example.com/python-bg.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://example.com/fullstack-bg.jpg')\";\n            default:\n                return \"\";\n        }\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100%\",\n        position: \"absolute\",\n        top: 0,\n        left: 0\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"projectPageContainer\",\n        style: backgroundStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            justifyContent: \"flex-end\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        selectedCategory: selectedCategory,\n                        onCategoryClick: handleCategoryClick\n                    }, void 0, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    textAlign: \"right\",\n                    children: [\n                        \" \",\n                        filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"projectNames\",\n                                    href: project.href,\n                                    children: project.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"Q/zkyWiyOoDAuX7FR9Z4NQOSGlE=\");\n_c = ProjectPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDSjtBQUNtQjtBQUVqRCxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUSxzQkFBc0IsQ0FBQ0M7UUFDM0JGLG9CQUFvQkU7SUFDdEI7SUFFQSxNQUFNQyxtQkFBbUJULGdFQUFlVSxDQUN0QyxDQUFDQyxVQUFZQSxRQUFRSCxhQUFhSDtJQUdwQyxNQUFNTyxxQkFBcUI7UUFDekIsT0FBUVA7WUFDTixLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVDtnQkFDRSxPQUFPO1FBQ1g7SUFDRjtJQUVBLE1BQU1RLGtCQUFrQjtRQUN0QkMsaUJBQWlCRjtRQUNqQkcsZ0JBQWdCO1FBQ2hCQyxvQkFBb0I7UUFDcEJDLFdBQVc7UUFDWEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7UUFBdUJDLE9BQU9YO2tCQUMzQyw0RUFBQ1osa0RBQUlBO1lBQUN3QixnQkFBZTs7OEJBQ25CLDhEQUFDdkIsaURBQUdBOzhCQUNGLDRFQUFDQyxxRUFBaUJBO3dCQUNoQkUsa0JBQWtCQTt3QkFDbEJxQixpQkFBaUJuQjs7Ozs7Ozs7Ozs7OEJBR3JCLDhEQUFDTCxpREFBR0E7b0JBQUN5QixXQUFVOzt3QkFBUTt3QkFDcEJsQixpQkFBaUJtQixJQUFJLENBQUNqQixTQUFTa0Isc0JBQzlCLDhEQUFDM0IsaURBQUdBOzBDQUNGLDRFQUFDNEI7b0NBQUVQLFdBQVU7b0NBQWVRLE1BQU1wQixRQUFRb0I7OENBQ3ZDcEIsUUFBUXFCOzs7Ozs7K0JBRkhIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXRCO0dBMUR3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RQYWdlLmpzP2UwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdENhdGVnb3JpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiV0VCXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5XG4gICk7XG5cbiAgY29uc3QgZ2V0QmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgY2FzZSBcIldFQlwiOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy85MC8wOS9lYy85MDA5ZWNjNzllOTJiOGJhMjA3YjQzYzdlNTZiZmI0MS5naWYnKVwiO1xuICAgICAgY2FzZSBcIkMrK1wiOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vcmFyZS1nYWxsZXJ5LmNvbS9tb2NhaGJpZy80MzQwNTEtcm9hZC1taXN0LWRhcmstbmlnaHQtcmFpbi1uYXR1cmUuanBnJylcIjtcbiAgICAgIGNhc2UgXCJQWVRIT05cIjpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2V4YW1wbGUuY29tL3B5dGhvbi1iZy5qcGcnKVwiO1xuICAgICAgY2FzZSBcIkZVTExTVEFDS1wiOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vZXhhbXBsZS5jb20vZnVsbHN0YWNrLWJnLmpwZycpXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogZ2V0QmFja2dyb3VuZEltYWdlKCksXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsIC8vIFNldCB0aGUgbWluaW11bSBoZWlnaHQgdG8gb2NjdXB5IHRoZSBlbnRpcmUgcGFnZVxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0UGFnZUNvbnRhaW5lclwiIHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9PlxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgICAgIG9uQ2F0ZWdvcnlDbGljaz17aGFuZGxlQ2F0ZWdvcnlDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJyaWdodFwiPiB7LyogQWxpZ24gcHJvamVjdCBuYW1lcyB0byB0aGUgcmlnaHQgKi99XG4gICAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvamVjdE5hbWVzXCIgaHJlZj17cHJvamVjdC5ocmVmfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2plY3RzIiwiRmxleCIsIkJveCIsIlByb2plY3RDYXRlZ29yaWVzIiwiUHJvamVjdFBhZ2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJvbkNhdGVnb3J5Q2xpY2siLCJ0ZXh0QWxpZ24iLCJtYXAiLCJpbmRleCIsImEiLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
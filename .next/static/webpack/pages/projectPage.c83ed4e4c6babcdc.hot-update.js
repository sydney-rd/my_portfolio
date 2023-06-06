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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color\n    });\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: \"rgba(255, 0, 0, 0.5)\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        mb: \"1rem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"projectNames\",\n                            href: project.href,\n                            children: project.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, this);\n}\n_s(ProjectPage, \"rpx1LH6O+vJXbJriwN19JiNPAYg=\");\n_c = ProjectPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDSTtBQUNXO0FBRWpELFNBQVNPOztJQUN0QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztRQUFDVztJQUFLO0lBRXZDLE1BQU1DLHNCQUFzQixDQUFDQztRQUMzQkwsb0JBQW9CSztJQUN0QjtJQUVBLE1BQU1DLG1CQUFtQmIsZ0VBQWVjLENBQ3RDLENBQUNDLFVBQVlBLFFBQVFILGFBQWFOO0lBR3BDLE1BQU1VLHFCQUFxQjtRQUN6QixPQUFRVjtZQUNOLEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNULEtBQUs7Z0JBQ0gsT0FBTztZQUNUO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBSUEsTUFBTVcsa0JBQWtCO1FBQ3RCQyxpQkFBaUJGO1FBQ2pCRyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ3JCLGtEQUFJQTtRQUFDc0IsT0FBT047OzBCQUNYLDhEQUFDZixpREFBR0E7Z0JBQUNzQixHQUFFO2dCQUFRQyxHQUFFO2dCQUFRQyxVQUFTO2dCQUFXQyxRQUFPO2dCQUFJQyxJQUFHOzs7Ozs7MEJBR3pELDhEQUFDeEIscUVBQWlCQTtnQkFDaEJFLGtCQUFrQkE7Z0JBQ2xCdUIsaUJBQWlCbEI7Ozs7OzswQkFFckIsOERBQUNSLG9EQUFNQTtnQkFDTDJCLE9BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLElBQUc7Z0JBQ0hDLElBQUc7Z0JBQ0hOLFFBQU87MEJBRU5kLGlCQUFpQnFCLElBQUksQ0FBQ25CLFNBQVNvQixzQkFDOUIsOERBQUNqQyxpREFBR0E7d0JBQWFrQyxJQUFHO2tDQUNsQiw0RUFBQ0M7NEJBQUVDLFdBQVU7NEJBQWVDLE1BQU14QixRQUFRd0I7c0NBQ3ZDeEIsUUFBUXlCOzs7Ozs7dUJBRkhMOzs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBL0R3QjlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RQYWdlLmpzP2UwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IEZsZXgsIEJveCwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0Q2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2F0ZWdvcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJXRUJcIik7XG4gIGNvbnN0IFt0aW50LCBzZXRUaW50XSA9IHVzZVN0YXRlKHtjb2xvcn0pXG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgKTtcblxuICBjb25zdCBnZXRCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjYXNlIFwiV0VCXCI6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzkwLzA5L2VjLzkwMDllY2M3OWU5MmI4YmEyMDdiNDNjN2U1NmJmYjQxLmdpZicpXCI7XG4gICAgICBjYXNlIFwiQysrXCI6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9yYXJlLWdhbGxlcnkuY29tL21vY2FoYmlnLzQzNDA1MS1yb2FkLW1pc3QtZGFyay1uaWdodC1yYWluLW5hdHVyZS5qcGcnKVwiO1xuICAgICAgY2FzZSBcIlBZVEhPTlwiOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzQ3NHgvNWIvZGYvOTMvNWJkZjkzN2ZiYzkxNzQzNDFjZTU5YzcyYmU0MjBkYjYuanBnJylcIjtcbiAgICAgIGNhc2UgXCJGVUxMU1RBQ0tcIjpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2ltYWdlcy13aXhtcC1lZDMwYTg2YjhjNGNhODg3NzczNTk0YzIud2l4bXAuY29tL2YvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlL2RkOWh4dWYtZWEyNzU1OTEtZDMyOC00MzAyLWJjNzQtNTQxNTFjZGUwY2Q0LnBuZy92MS9maWxsL3dfMTYwMCxoXzY4NixxXzgwLHN0cnAvdGhlX2FjYWRlbXlfX19yb29mdG9wX19fYmxhY2tvdXRfYnlfdGFtYWdvY2hpa3VuX2RkOWh4dWYtZnVsbHZpZXcuanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbWhsYVdkb2RDSTZJanc5TmpnMklpd2ljR0YwYUNJNklsd3ZabHd2TkRCallXSTRORFV0T0Rjek9DMDBPV015TFdGbFpqZ3RNalUzTnpCbE5EQTFaV0ZsWEM5a1pEbG9lSFZtTFdWaE1qYzFOVGt4TFdRek1qZ3RORE13TWkxaVl6YzBMVFUwTVRVeFkyUmxNR05rTkM1d2JtY2lMQ0ozYVdSMGFDSTZJanc5TVRZd01DSjlYVjBzSW1GMVpDSTZXeUoxY200NmMyVnlkbWxqWlRwcGJXRm5aUzV2Y0dWeVlYUnBiMjV6SWwxOS5STjJHa2JOcjhqVXhLSmtpTWlaWW9kWXRVbnJtMGRXOXhIaS1BNk5aZldrJylcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogZ2V0QmFja2dyb3VuZEltYWdlKCksXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPEZsZXggc3R5bGU9e2JhY2tncm91bmRTdHlsZX0+XG4gICAgICAgIDxCb3ggdz1cIjEwMHZ3XCIgaD1cIjEwMHZoXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIHpJbmRleD1cIjFcIiBiZz1cInJnYmEoMjU1LCAwLCAwLCAwLjUpXCI+XG4gICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFByb2plY3RDYXRlZ29yaWVzXG4gICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICAgICAgb25DYXRlZ29yeUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxWU3RhY2tcbiAgICAgICAgICBhbGlnbj1cImZsZXgtZW5kXCJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICBwdD1cIjVyZW1cIlxuICAgICAgICAgIHByPVwiOHJlbVwiXG4gICAgICAgICAgekluZGV4PVwiMlwiXG4gICAgICAgID5cbiAgICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IG1iPVwiMXJlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9qZWN0TmFtZXNcIiBocmVmPXtwcm9qZWN0LmhyZWZ9PlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJGbGV4IiwiQm94IiwiVlN0YWNrIiwiUHJvamVjdENhdGVnb3JpZXMiLCJQcm9qZWN0UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwidGludCIsInNldFRpbnQiLCJjb2xvciIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwidyIsImgiLCJwb3NpdGlvbiIsInpJbmRleCIsImJnIiwib25DYXRlZ29yeUNsaWNrIiwiYWxpZ24iLCJmbGV4R3JvdyIsInB0IiwicHIiLCJtYXAiLCJpbmRleCIsIm1iIiwiYSIsImNsYXNzTmFtZSIsImhyZWYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
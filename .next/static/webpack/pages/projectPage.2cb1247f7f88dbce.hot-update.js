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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        setTint({\n            color,\n            opacity: \"0.2\"\n        });\n    };\n    const hoverLeave = ()=>{\n        setTint({\n            color: \"\",\n            opacity: \"0\"\n        });\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 0.7s ease\",\n                brightness: \"80%\",\n                boxShadow: \"xl\",\n                rounded: \"md\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        mb: \"1rem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"projectNames\",\n                            href: project.href,\n                            onPointerEnter: ()=>hover(project.color),\n                            onPointerLeave: hoverLeave,\n                            children: project.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"pC4Wy1Q8Tiz+iJKHmAVdz+Ni/ps=\");\n_c = ProjectPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0UGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDSTtBQUNXO0FBRWpELFNBQVNPOztJQUN0QixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztRQUFFVyxPQUFPO1FBQUlDLFNBQVM7SUFBSTtJQUUzRCxNQUFNQyxzQkFBc0IsQ0FBQ0M7UUFDM0JOLG9CQUFvQk07SUFDdEI7SUFFQSxNQUFNQyxtQkFBbUJkLGdFQUFlZSxDQUN0QyxDQUFDQyxVQUFZQSxRQUFRSCxhQUFhUDtJQUdwQyxNQUFNVyxxQkFBcUI7UUFDekIsT0FBUVg7WUFDTixLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVCxLQUFLO2dCQUNILE9BQU87WUFDVDtnQkFDRSxPQUFPO1FBQ1g7SUFDRjtJQUVBLE1BQU1ZLFFBQVEsQ0FBQ1I7UUFDYkQsUUFBUTtZQUFFQztZQUFPQyxTQUFTO1FBQU07SUFDbEM7SUFFQSxNQUFNUSxhQUFhO1FBQ2pCVixRQUFRO1lBQUNDLE9BQU87WUFBSUMsU0FBUztRQUFHO0lBQ2xDO0lBQ0EsTUFBTVMsa0JBQWtCO1FBQ3RCQyxpQkFBaUJKO1FBQ2pCSyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ3hCLGtEQUFJQTtRQUFDeUIsT0FBT047OzBCQUNYLDhEQUFDbEIsaURBQUdBO2dCQUNGeUIsR0FBRTtnQkFDRkMsR0FBRTtnQkFDRkMsVUFBUztnQkFDVEMsUUFBTztnQkFDUEMsSUFBSXZCLEtBQUtFO2dCQUNUQyxTQUFTSCxLQUFLRztnQkFDZHFCLFlBQVc7Z0JBQ1hDLFlBQVc7Z0JBQ1hDLFdBQVU7Z0JBQ1ZDLFNBQVE7Ozs7OzswQkFJViw4REFBQy9CLHFFQUFpQkE7Z0JBQ2hCRSxrQkFBa0JBO2dCQUNsQjhCLGlCQUFpQnhCOzs7Ozs7MEJBRW5CLDhEQUFDVCxvREFBTUE7Z0JBQUNrQyxPQUFNO2dCQUFXQyxVQUFVO2dCQUFHQyxJQUFHO2dCQUFPQyxJQUFHO2dCQUFPVixRQUFPOzBCQUM5RGhCLGlCQUFpQjJCLElBQUksQ0FBQ3pCLFNBQVMwQixzQkFDOUIsOERBQUN4QyxpREFBR0E7d0JBQWF5QyxJQUFHO2tDQUNsQiw0RUFBQ0M7NEJBQ0NDLFdBQVU7NEJBQ1ZDLE1BQU05QixRQUFROEI7NEJBQ2RDLGdCQUFnQixJQUFNN0IsTUFBTUYsUUFBUU47NEJBQ3BDc0MsZ0JBQWdCN0I7c0NBRWZILFFBQVFpQzs7Ozs7O3VCQVBIUDs7Ozs7Ozs7Ozs7Ozs7OztBQWNwQjtHQTlFd0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0UGFnZS5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBGbGV4LCBCb3gsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdENhdGVnb3JpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiV0VCXCIpO1xuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiBcIlwiLCBvcGFjaXR5OiBcIjBcIiB9KTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICApO1xuXG4gIGNvbnN0IGdldEJhY2tncm91bmRJbWFnZSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgXCJXRUJcIjpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTAvMDkvZWMvOTAwOWVjYzc5ZTkyYjhiYTIwN2I0M2M3ZTU2YmZiNDEuZ2lmJylcIjtcbiAgICAgIGNhc2UgXCJDKytcIjpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL3JhcmUtZ2FsbGVyeS5jb20vbW9jYWhiaWcvNDM0MDUxLXJvYWQtbWlzdC1kYXJrLW5pZ2h0LXJhaW4tbmF0dXJlLmpwZycpXCI7XG4gICAgICBjYXNlIFwiUFlUSE9OXCI6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNDc0eC81Yi9kZi85My81YmRmOTM3ZmJjOTE3NDM0MWNlNTljNzJiZTQyMGRiNi5qcGcnKVwiO1xuICAgICAgY2FzZSBcIkZVTExTVEFDS1wiOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi80MGNhYjg0NS04NzM4LTQ5YzItYWVmOC0yNTc3MGU0MDVlYWUvZGQ5aHh1Zi1lYTI3NTU5MS1kMzI4LTQzMDItYmM3NC01NDE1MWNkZTBjZDQucG5nL3YxL2ZpbGwvd18xNjAwLGhfNjg2LHFfODAsc3RycC90aGVfYWNhZGVteV9fX3Jvb2Z0b3BfX19ibGFja291dF9ieV90YW1hZ29jaGlrdW5fZGQ5aHh1Zi1mdWxsdmlldy5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0ltaGxhV2RvZENJNklqdzlOamcySWl3aWNHRjBhQ0k2SWx3dlpsd3ZOREJqWVdJNE5EVXRPRGN6T0MwME9XTXlMV0ZsWmpndE1qVTNOekJsTkRBMVpXRmxYQzlrWkRsb2VIVm1MV1ZoTWpjMU5Ua3hMV1F6TWpndE5ETXdNaTFpWXpjMExUVTBNVFV4WTJSbE1HTmtOQzV3Ym1jaUxDSjNhV1IwYUNJNklqdzlNVFl3TUNKOVhWMHNJbUYxWkNJNld5SjFjbTQ2YzJWeWRtbGpaVHBwYldGblpTNXZjR1Z5WVhScGIyNXpJbDE5LlJOMkdrYk5yOGpVeEtKa2lNaVpZb2RZdFVucm0wZFc5eEhpLUE2TlpmV2snKVwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhvdmVyID0gKGNvbG9yKSA9PiB7XG4gICAgc2V0VGludCh7IGNvbG9yLCBvcGFjaXR5OiBcIjAuMlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhvdmVyTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0VGludCh7Y29sb3I6IFwiXCIsIG9wYWNpdHk6IFwiMFwifSlcbiAgfVxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB3aWR0aDogXCIxMDB2d1wiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggc3R5bGU9e2JhY2tncm91bmRTdHlsZX0+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIxMDB2d1wiXG4gICAgICAgIGg9XCIxMDB2aFwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB6SW5kZXg9XCIxXCJcbiAgICAgICAgYmc9e3RpbnQuY29sb3J9XG4gICAgICAgIG9wYWNpdHk9e3RpbnQub3BhY2l0eX1cbiAgICAgICAgdHJhbnNpdGlvbj1cIm9wYWNpdHkgMC43cyBlYXNlXCJcbiAgICAgICAgYnJpZ2h0bmVzcz1cIjgwJVwiXG4gICAgICAgIGJveFNoYWRvdz1cInhsXCJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcblxuXG4gICAgICA+PC9Cb3g+XG4gICAgICA8UHJvamVjdENhdGVnb3JpZXNcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgb25DYXRlZ29yeUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfVxuICAgICAgLz5cbiAgICAgIDxWU3RhY2sgYWxpZ249XCJmbGV4LWVuZFwiIGZsZXhHcm93PXsxfSBwdD1cIjVyZW1cIiBwcj1cIjhyZW1cIiB6SW5kZXg9XCIyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IG1iPVwiMXJlbVwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdE5hbWVzXCJcbiAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5ocmVmfVxuICAgICAgICAgICAgICBvblBvaW50ZXJFbnRlcj17KCkgPT4gaG92ZXIocHJvamVjdC5jb2xvcil9XG4gICAgICAgICAgICAgIG9uUG9pbnRlckxlYXZlPXtob3ZlckxlYXZlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJGbGV4IiwiQm94IiwiVlN0YWNrIiwiUHJvamVjdENhdGVnb3JpZXMiLCJQcm9qZWN0UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwidGludCIsInNldFRpbnQiLCJjb2xvciIsIm9wYWNpdHkiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImdldEJhY2tncm91bmRJbWFnZSIsImhvdmVyIiwiaG92ZXJMZWF2ZSIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsInciLCJoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiZyIsInRyYW5zaXRpb24iLCJicmlnaHRuZXNzIiwiYm94U2hhZG93Iiwicm91bmRlZCIsIm9uQ2F0ZWdvcnlDbGljayIsImFsaWduIiwiZmxleEdyb3ciLCJwdCIsInByIiwibWFwIiwiaW5kZXgiLCJtYiIsImEiLCJjbGFzc05hbWUiLCJocmVmIiwib25Qb2ludGVyRW50ZXIiLCJvblBvaW50ZXJMZWF2ZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_ProjectModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectModal */ \"./components/ProjectModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedProject, setSelectedProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure)();\n    const handleHover = (color, text)=>{\n        setTint({\n            color,\n            opacity: \"0.4\"\n        });\n        setHoveredItem(text);\n    };\n    const handleHoverLeave = ()=>{\n        setTint({\n            opacity: \"0\",\n            color: \"\"\n        });\n        setHoveredItem(\"\");\n    };\n    const handleClick = (project)=>{\n        setSelectedProject(project);\n        onOpen();\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\",\n        transition: \"opacity 0.7s\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 0.7s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: setSelectedCategory,\n                position: \"fixed\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"3rem\",\n                pr: \"8rem\",\n                zIndex: \"1\",\n                overflowY: \"scroll\",\n                spacing: -1,\n                style: {\n                    scrollBehavior: \"smooth\"\n                },\n                maxH: \"100vh\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n                        onMouseEnter: ()=>handleHover(project.color, project.name),\n                        onMouseLeave: handleHoverLeave,\n                        sx: {\n                            opacity: \"1\",\n                            fontFamily: \"Ailerons\",\n                            fontSize: \"9rem\",\n                            whiteSpace: \"nowrap\",\n                            textAlign: \"right\",\n                            transition: \"none\",\n                            filter: \"brightness(150%)\",\n                            color: hoveredItem === project.name ? project.color : \"transparent\",\n                            WebkitTextStroke: \"2px\",\n                            WebkitTextStrokeColor: project.color,\n                            _hover: {\n                                color: project.color,\n                                textShadow: \"0px 0px 8px \".concat(project.color)\n                            }\n                        },\n                        onClick: ()=>handleClick(project),\n                        children: project.name\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isOpen,\n                onClose: onClose,\n                project: selectedProject\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"iZoozp/keXA5zJrEoVDCIO+YEnQ=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure\n    ];\n});\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRK0I7dUJBdEJKRjs7Ozs7Ozs7OztZQTBCVjFDLGlDQUNDLDhEQUFDUCxnRUFBWUE7Z0JBQ1hhLFFBQVFBO2dCQUNSRSxTQUFTQTtnQkFDVEssU0FBU2I7Ozs7Ozs7Ozs7OztBQUtuQjtHQXJId0JMOztRQU1jUiwyREFBYUE7OztNQU4zQlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdFBhZ2UuanM/ZTBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3Byb2plY3RzJ1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQm94LFxuICB1c2VEaXNjbG9zdXJlLFxuICBWU3RhY2ssXG4gIExpbmsgYXMgQ2hha3JhTGlua1xufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBQcm9qZWN0Q2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RDYXRlZ29yaWVzJ1xuaW1wb3J0IFByb2plY3RNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RNb2RhbCdcblxuY29uc3QgTW90aW9uQ2hha3JhTGluayA9IG1vdGlvbihDaGFrcmFMaW5rKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ1dFQicpXG4gIGNvbnN0IFtob3ZlcmVkSXRlbSwgc2V0SG92ZXJlZEl0ZW1dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiAnJywgb3BhY2l0eTogJzAnIH0pXG5cbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpXG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAoY29sb3IsIHRleHQpID0+IHtcbiAgICBzZXRUaW50KHsgY29sb3IsIG9wYWNpdHk6ICcwLjQnIH0pXG4gICAgc2V0SG92ZXJlZEl0ZW0odGV4dClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUhvdmVyTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0VGludCh7IG9wYWNpdHk6ICcwJywgY29sb3I6ICcnIH0pXG4gICAgc2V0SG92ZXJlZEl0ZW0oJycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IHByb2plY3QgPT4ge1xuICAgIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KVxuICAgIG9uT3BlbigpXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgIHByb2plY3QgPT4gcHJvamVjdC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICApXG5cbiAgY29uc3QgZ2V0QmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgY2FzZSAnV0VCJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTAvMDkvZWMvOTAwOWVjYzc5ZTkyYjhiYTIwN2I0M2M3ZTU2YmZiNDEuZ2lmJylcIlxuICAgICAgY2FzZSAnQysrJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL3JhcmUtZ2FsbGVyeS5jb20vbW9jYWhiaWcvNDM0MDUxLXJvYWQtbWlzdC1kYXJrLW5pZ2h0LXJhaW4tbmF0dXJlLmpwZycpXCJcbiAgICAgIGNhc2UgJ1BZVEhPTic6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNDc0eC81Yi9kZi85My81YmRmOTM3ZmJjOTE3NDM0MWNlNTljNzJiZTQyMGRiNi5qcGcnKVwiXG4gICAgICBjYXNlICdGVUxMU1RBQ0snOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi80MGNhYjg0NS04NzM4LTQ5YzItYWVmOC0yNTc3MGU0MDVlYWUvZGQ5aHh1Zi1lYTI3NTU5MS1kMzI4LTQzMDItYmM3NC01NDE1MWNkZTBjZDQucG5nL3YxL2ZpbGwvd18xNjAwLGhfNjg2LHFfODAsc3RycC90aGVfYWNhZGVteV9fX3Jvb2Z0b3BfX19ibGFja291dF9ieV90YW1hZ29jaGlrdW5fZGQ5aHh1Zi1mdWxsdmlldy5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0ltaGxhV2RvZENJNklqdzlOamcySWl3aWNHRjBhQ0k2SWx3dlpsd3ZOREJqWVdJNE5EVXRPRGN6T0MwME9XTXlMV0ZsWmpndE1qVTNOekJsTkRBMVpXRmxYQzlrWkRsb2VIVm1MV1ZoTWpjMU5Ua3hMV1F6TWpndE5ETXdNaTFpWXpjMExUVTBNVFV4WTJSbE1HTmtOQzV3Ym1jaUxDSjNhV1IwYUNJNklqdzlNVFl3TUNKOVhWMHNJbUYxWkNJNld5SjFjbTQ2YzJWeWRtbGpaVHBwYldGblpTNXZjR1Z5WVhScGIyNXpJbDE5LlJOMkdrYk5yOGpVeEtKa2lNaVpZb2RZdFVucm0wZFc5eEhpLUE2TlpmV2snKVwiXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjdzJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD1cIjFcIlxuICAgICAgICBiZz17dGludC5jb2xvcn1cbiAgICAgICAgb3BhY2l0eT17dGludC5vcGFjaXR5fVxuICAgICAgICB0cmFuc2l0aW9uPVwib3BhY2l0eSAwLjdzXCJcbiAgICAgICAgYnJpZ2h0bmVzcz1cIjEwMCVcIlxuICAgICAgICBmaWx0ZXI9XCJhdXRvXCJcbiAgICAgID48L0JveD5cbiAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgLz5cbiAgICAgIDxWU3RhY2tcbiAgICAgICAgYWxpZ249XCJmbGV4LWVuZFwiXG4gICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICBwdD1cIjNyZW1cIlxuICAgICAgICBwcj1cIjhyZW1cIlxuICAgICAgICB6SW5kZXg9XCIxXCJcbiAgICAgICAgb3ZlcmZsb3dZPVwic2Nyb2xsXCJcbiAgICAgICAgc3BhY2luZz17LTF9XG4gICAgICAgIHN0eWxlPXt7IHNjcm9sbEJlaGF2aW9yOiAnc21vb3RoJyB9fVxuICAgICAgICBtYXhIPVwiMTAwdmhcIlxuICAgICAgPlxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE1vdGlvbkNoYWtyYUxpbmtcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKHByb2plY3QuY29sb3IsIHByb2plY3QubmFtZSl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZUhvdmVyTGVhdmV9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBaWxlcm9ucycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnOXJlbScsXG4gICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxNTAlKScsXG4gICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgIGhvdmVyZWRJdGVtID09PSBwcm9qZWN0Lm5hbWUgPyBwcm9qZWN0LmNvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgV2Via2l0VGV4dFN0cm9rZTogJzJweCcsXG4gICAgICAgICAgICAgIFdlYmtpdFRleHRTdHJva2VDb2xvcjogcHJvamVjdC5jb2xvcixcbiAgICAgICAgICAgICAgX2hvdmVyOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHByb2plY3QuY29sb3IsXG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogYDBweCAwcHggOHB4ICR7cHJvamVjdC5jb2xvcn1gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwcm9qZWN0KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxuICAgICAgICAgIDwvTW90aW9uQ2hha3JhTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgKFxuICAgICAgICA8UHJvamVjdE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICBwcm9qZWN0PXtzZWxlY3RlZFByb2plY3R9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvRmxleD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsIkZsZXgiLCJCb3giLCJ1c2VEaXNjbG9zdXJlIiwiVlN0YWNrIiwiTGluayIsIkNoYWtyYUxpbmsiLCJtb3Rpb24iLCJQcm9qZWN0Q2F0ZWdvcmllcyIsIlByb2plY3RNb2RhbCIsIk1vdGlvbkNoYWtyYUxpbmsiLCJQcm9qZWN0UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiaG92ZXJlZEl0ZW0iLCJzZXRIb3ZlcmVkSXRlbSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInRpbnQiLCJzZXRUaW50IiwiY29sb3IiLCJvcGFjaXR5IiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsImhhbmRsZUhvdmVyIiwidGV4dCIsImhhbmRsZUhvdmVyTGVhdmUiLCJoYW5kbGVDbGljayIsInByb2plY3QiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwiY2F0ZWdvcnkiLCJnZXRCYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsIndpZHRoIiwidHJhbnNpdGlvbiIsInN0eWxlIiwidyIsImgiLCJwb3NpdGlvbiIsInpJbmRleCIsImJnIiwiYnJpZ2h0bmVzcyIsIm9uQ2F0ZWdvcnlDbGljayIsImFsaWduIiwiZmxleEdyb3ciLCJwdCIsInByIiwib3ZlcmZsb3dZIiwic3BhY2luZyIsInNjcm9sbEJlaGF2aW9yIiwibWF4SCIsIm1hcCIsImluZGV4Iiwib25Nb3VzZUVudGVyIiwibmFtZSIsIm9uTW91c2VMZWF2ZSIsInN4IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRleHRBbGlnbiIsIldlYmtpdFRleHRTdHJva2UiLCJXZWJraXRUZXh0U3Ryb2tlQ29sb3IiLCJfaG92ZXIiLCJ0ZXh0U2hhZG93Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
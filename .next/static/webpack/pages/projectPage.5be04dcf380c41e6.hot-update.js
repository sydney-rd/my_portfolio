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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link);\n_c = MotionChakraLink;\nconst linkVariants = {\n    hover: {\n        scale: 1.1,\n        textShadow: \"0px 0px 10px white\"\n    }\n};\nconst LinkItem = (param)=>{\n    let { path , target , href , text , ...props } = param;\n    const active = path === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        href: href,\n        target: target,\n        whileHover: \"hover\",\n        variants: linkVariants,\n        ...props,\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = LinkItem;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        if (color) {\n            setTimeout(()=>{\n                setTint({\n                    color,\n                    opacity: \"0.4\"\n                });\n            }, 500);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint((prevTint)=>({\n                ...prevTint,\n                opacity: \"0\",\n                color: \"\"\n            }));\n    };\n    const projectStyle = {\n        color: tint.color,\n        fontFamily: \"Ailerons\",\n        fontSize: \"9rem\",\n        whiteSpace: \"nowrap\",\n        textAlign: \"right\",\n        WebkitTextStroke: \"2px \".concat(tint.color),\n        transition: \"color 0.7s\",\n        textShadow: \"0px 0px 8px \".concat(tint.color),\n        transitionDuration: \"0.7s\",\n        transitionDelay: \"0.7s\",\n        filter: \"brightness(150%)\"\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 1s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tintColor: tint.color\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"ygH92H9S7c+vsarhTg9olR0R6Og=\");\n_c2 = ProjectPage;\n{\n/* <Box key={index} mb=\"1rem\">\n<Link\n  href={project.href}\n  onMouseEnter={() => hover(project.color)}\n  onMouseLeave={hoverLeave}\n  style={projectStyle}\n>\n  {project.name}\n</Link>\n</Box> */ }var _c, _c1, _c2;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"LinkItem\");\n$RefreshReg$(_c2, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsUUFBUW1DO3VCQUFXRDs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRTtHQTFGd0I3QztNQUFBQTtBQTRGeEI7QUFDRTs7Ozs7Ozs7O09BU0ssR0FDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0UGFnZS5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi91dGlsaXRpZXMvcHJvamVjdHMnXG5pbXBvcnQgeyBGbGV4LCBCb3gsIFZTdGFjaywgTGluayBhcyBDaGFrcmFMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2F0ZWdvcmllcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5cbmNvbnN0IE1vdGlvbkNoYWtyYUxpbmsgPSBtb3Rpb24oQ2hha3JhTGluaylcblxuY29uc3QgbGlua1ZhcmlhbnRzID0ge1xuICBob3Zlcjoge1xuICAgIHNjYWxlOiAxLjEsXG4gICAgdGV4dFNoYWRvdzogJzBweCAwcHggMTBweCB3aGl0ZSdcbiAgfSxcbn1cbmNvbnN0IExpbmtJdGVtID0gKHsgcGF0aCwgdGFyZ2V0LCBocmVmLCB0ZXh0LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcblxuICByZXR1cm4gKFxuICAgIDxNb3Rpb25DaGFrcmFMaW5rXG4gICAgICBhcz17TGlua31cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgIHdoaWxlSG92ZXI9XCJob3ZlclwiXG4gICAgICB2YXJpYW50cz17bGlua1ZhcmlhbnRzfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvTW90aW9uQ2hha3JhTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ1dFQicpXG4gIGNvbnN0IFt0aW50LCBzZXRUaW50XSA9IHVzZVN0YXRlKHsgY29sb3I6ICcnLCBvcGFjaXR5OiAnMCcgfSlcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gY2F0ZWdvcnkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgIHByb2plY3QgPT4gcHJvamVjdC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICApXG5cbiAgY29uc3QgZ2V0QmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgY2FzZSAnV0VCJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTAvMDkvZWMvOTAwOWVjYzc5ZTkyYjhiYTIwN2I0M2M3ZTU2YmZiNDEuZ2lmJylcIlxuICAgICAgY2FzZSAnQysrJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL3JhcmUtZ2FsbGVyeS5jb20vbW9jYWhiaWcvNDM0MDUxLXJvYWQtbWlzdC1kYXJrLW5pZ2h0LXJhaW4tbmF0dXJlLmpwZycpXCJcbiAgICAgIGNhc2UgJ1BZVEhPTic6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNDc0eC81Yi9kZi85My81YmRmOTM3ZmJjOTE3NDM0MWNlNTljNzJiZTQyMGRiNi5qcGcnKVwiXG4gICAgICBjYXNlICdGVUxMU1RBQ0snOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi80MGNhYjg0NS04NzM4LTQ5YzItYWVmOC0yNTc3MGU0MDVlYWUvZGQ5aHh1Zi1lYTI3NTU5MS1kMzI4LTQzMDItYmM3NC01NDE1MWNkZTBjZDQucG5nL3YxL2ZpbGwvd18xNjAwLGhfNjg2LHFfODAsc3RycC90aGVfYWNhZGVteV9fX3Jvb2Z0b3BfX19ibGFja291dF9ieV90YW1hZ29jaGlrdW5fZGQ5aHh1Zi1mdWxsdmlldy5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0ltaGxhV2RvZENJNklqdzlOamcySWl3aWNHRjBhQ0k2SWx3dlpsd3ZOREJqWVdJNE5EVXRPRGN6T0MwME9XTXlMV0ZsWmpndE1qVTNOekJsTkRBMVpXRmxYQzlrWkRsb2VIVm1MV1ZoTWpjMU5Ua3hMV1F6TWpndE5ETXdNaTFpWXpjMExUVTBNVFV4WTJSbE1HTmtOQzV3Ym1jaUxDSjNhV1IwYUNJNklqdzlNVFl3TUNKOVhWMHNJbUYxWkNJNld5SjFjbTQ2YzJWeWRtbGpaVHBwYldGblpTNXZjR1Z5WVhScGIyNXpJbDE5LlJOMkdrYk5yOGpVeEtKa2lNaVpZb2RZdFVucm0wZFc5eEhpLUE2TlpmV2snKVwiXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cblxuICBjb25zdCBob3ZlciA9IGNvbG9yID0+IHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW50KHsgY29sb3IsIG9wYWNpdHk6ICcwLjQnIH0pXG4gICAgICB9LCA1MDApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaG92ZXJMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRUaW50KHByZXZUaW50ID0+ICh7XG4gICAgICAuLi5wcmV2VGludCxcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIGNvbG9yOiAnJ1xuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgcHJvamVjdFN0eWxlID0ge1xuICAgIGNvbG9yOiB0aW50LmNvbG9yLFxuICAgIGZvbnRGYW1pbHk6ICdBaWxlcm9ucycsXG4gICAgZm9udFNpemU6ICc5cmVtJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgV2Via2l0VGV4dFN0cm9rZTogYDJweCAke3RpbnQuY29sb3J9YCxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC43cycsXG4gICAgdGV4dFNoYWRvdzogYDBweCAwcHggOHB4ICR7dGludC5jb2xvcn1gLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuN3MnLFxuICAgIHRyYW5zaXRpb25EZWxheTogJzAuN3MnLFxuICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoMTUwJSknXG4gIH1cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD1cIjFcIlxuICAgICAgICBiZz17dGludC5jb2xvcn1cbiAgICAgICAgb3BhY2l0eT17dGludC5vcGFjaXR5fVxuICAgICAgICB0cmFuc2l0aW9uPVwib3BhY2l0eSAxc1wiXG4gICAgICAgIGJyaWdodG5lc3M9XCIxMDAlXCJcbiAgICAgICAgZmlsdGVyPVwiYXV0b1wiXG4gICAgICA+PC9Cb3g+XG4gICAgICA8TmF2YmFyIHRpbnRDb2xvcj17dGludC5jb2xvcn0gLz5cbiAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9XG4gICAgICAvPlxuICAgICAgPFZTdGFjayBhbGlnbj1cImZsZXgtZW5kXCIgZmxleEdyb3c9ezF9IHB0PVwiNXJlbVwiIHByPVwiOHJlbVwiIHpJbmRleD1cIjJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPXtwcm9qZWN0LmhyZWZ9IHRleHQ9e3Byb2plY3QubmFtZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gIClcbn1cblxue1xuICAvKiA8Qm94IGtleT17aW5kZXh9IG1iPVwiMXJlbVwiPlxuPExpbmtcbiAgaHJlZj17cHJvamVjdC5ocmVmfVxuICBvbk1vdXNlRW50ZXI9eygpID0+IGhvdmVyKHByb2plY3QuY29sb3IpfVxuICBvbk1vdXNlTGVhdmU9e2hvdmVyTGVhdmV9XG4gIHN0eWxlPXtwcm9qZWN0U3R5bGV9XG4+XG4gIHtwcm9qZWN0Lm5hbWV9XG48L0xpbms+XG48L0JveD4gKi9cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJGbGV4IiwiQm94IiwiVlN0YWNrIiwiTGluayIsIkNoYWtyYUxpbmsiLCJtb3Rpb24iLCJQcm9qZWN0Q2F0ZWdvcmllcyIsIk5hdmJhciIsIk1vdGlvbkNoYWtyYUxpbmsiLCJsaW5rVmFyaWFudHMiLCJob3ZlciIsInNjYWxlIiwidGV4dFNoYWRvdyIsIkxpbmtJdGVtIiwicGF0aCIsInRhcmdldCIsImhyZWYiLCJ0ZXh0IiwicHJvcHMiLCJhY3RpdmUiLCJhcyIsIndoaWxlSG92ZXIiLCJ2YXJpYW50cyIsIlByb2plY3RQYWdlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJ0aW50Iiwic2V0VGludCIsImNvbG9yIiwib3BhY2l0eSIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwic2V0VGltZW91dCIsImhvdmVyTGVhdmUiLCJwcmV2VGludCIsInByb2plY3RTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIndoaXRlU3BhY2UiLCJ0ZXh0QWxpZ24iLCJXZWJraXRUZXh0U3Ryb2tlIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsInciLCJoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiZyIsImJyaWdodG5lc3MiLCJ0aW50Q29sb3IiLCJvbkNhdGVnb3J5Q2xpY2siLCJhbGlnbiIsImZsZXhHcm93IiwicHQiLCJwciIsIm1hcCIsImluZGV4IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
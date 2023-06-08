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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const projectStyle = {\n        opacity: \"1\",\n        fontFamily: \"Ailerons\",\n        fontSize: \"9rem\",\n        whiteSpace: \"nowrap\",\n        textAlign: \"right\",\n        WebkitTextStroke: \"2px\",\n        WebkitTextStrokeColor: \"red\",\n        transition: \"color 0.7s\",\n        // textShadow: `0px 0px 8px ${tint.color}`,\n        transitionDuration: \"0.7s\",\n        transitionDelay: \"0.7s\",\n        filter: \"brightness(150%)\"\n    };\n    const linkVariants = {\n        hover: {\n            color: tint.color\n        }\n    };\n    const LinkItem = (param)=>{\n        let { path , target , href , color , text , ...props } = param;\n        const active = path === href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            href: href,\n            target: target,\n            whileHover: \"hover\",\n            variants: linkVariants,\n            _hover: {\n                color: color || undefined\n            },\n            sx: {\n                WebkitTextStroke: \"1px\",\n                WebkitTextFillColor: \"red\",\n                WebkitTextStrokeColor: color || undefined\n            },\n            style: projectStyle,\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        if (color) {\n            setTimeout(()=>{\n                setTint({\n                    color,\n                    opacity: \"0.4\"\n                });\n            }, 500);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint((prevTint)=>({\n                ...prevTint,\n                opacity: \"0\",\n                color: \"\"\n            }));\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 1s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tintColor: tint.color\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name,\n                        color: project.color\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"ygH92H9S7c+vsarhTg9olR0R6Og=\");\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFHO2dCQUFPUixRQUFPOzBCQUM5RGYsaUJBQWlCd0IsSUFBSSxDQUFDdkIsU0FBU3dCLHNCQUM5Qiw4REFBQzFDO3dCQUFTRyxNQUFNZSxRQUFRZjt3QkFBTUMsTUFBTWMsUUFBUXlCO3dCQUFrQjFELE9BQU9pQyxRQUFRakM7dUJBQXRCeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakU7R0FwSHdCOUQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdFBhZ2UuanM/ZTBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3Byb2plY3RzJ1xuaW1wb3J0IHsgRmxleCwgQm94LCBWU3RhY2ssIExpbmsgYXMgQ2hha3JhTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFByb2plY3RDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdENhdGVnb3JpZXMnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuXG5jb25zdCBNb3Rpb25DaGFrcmFMaW5rID0gbW90aW9uKENoYWtyYUxpbmspXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnV0VCJylcbiAgY29uc3QgW3RpbnQsIHNldFRpbnRdID0gdXNlU3RhdGUoeyBjb2xvcjogJycsIG9wYWNpdHk6ICcwJyB9KVxuXG4gIGNvbnN0IHByb2plY3RTdHlsZSA9IHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZm9udEZhbWlseTogJ0FpbGVyb25zJyxcbiAgICBmb250U2l6ZTogJzlyZW0nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICBXZWJraXRUZXh0U3Ryb2tlOiBgMnB4YCxcbiAgICBXZWJraXRUZXh0U3Ryb2tlQ29sb3I6IGByZWRgLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjdzJyxcbiAgICAvLyB0ZXh0U2hhZG93OiBgMHB4IDBweCA4cHggJHt0aW50LmNvbG9yfWAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC43cycsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMC43cycsXG4gICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxNTAlKSdcbiAgfVxuXG4gIGNvbnN0IGxpbmtWYXJpYW50cyA9IHtcbiAgICBob3Zlcjoge1xuICAgICAgY29sb3I6IHRpbnQuY29sb3JcbiAgICB9XG4gIH1cbiAgY29uc3QgTGlua0l0ZW0gPSAoeyBwYXRoLCB0YXJnZXQsIGhyZWYsIGNvbG9yLCB0ZXh0LCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb3Rpb25DaGFrcmFMaW5rXG4gICAgICAgIGFzPXtMaW5rfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgdmFyaWFudHM9e2xpbmtWYXJpYW50c31cbiAgICAgICAgX2hvdmVyPXt7Y29sb3I6IGNvbG9yIHx8IHVuZGVmaW5lZH19XG4gICAgICAgIHN4PXt7V2Via2l0VGV4dFN0cm9rZTpcIjFweFwiLCBXZWJraXRUZXh0RmlsbENvbG9yOlwicmVkXCIsIFdlYmtpdFRleHRTdHJva2VDb2xvcjogY29sb3IgfHwgdW5kZWZpbmVkfX1cbiAgICAgICAgc3R5bGU9e3Byb2plY3RTdHlsZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvTW90aW9uQ2hha3JhTGluaz5cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNsaWNrID0gY2F0ZWdvcnkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgIHByb2plY3QgPT4gcHJvamVjdC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICApXG5cbiAgY29uc3QgZ2V0QmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgY2FzZSAnV0VCJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvOTAvMDkvZWMvOTAwOWVjYzc5ZTkyYjhiYTIwN2I0M2M3ZTU2YmZiNDEuZ2lmJylcIlxuICAgICAgY2FzZSAnQysrJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL3JhcmUtZ2FsbGVyeS5jb20vbW9jYWhiaWcvNDM0MDUxLXJvYWQtbWlzdC1kYXJrLW5pZ2h0LXJhaW4tbmF0dXJlLmpwZycpXCJcbiAgICAgIGNhc2UgJ1BZVEhPTic6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNDc0eC81Yi9kZi85My81YmRmOTM3ZmJjOTE3NDM0MWNlNTljNzJiZTQyMGRiNi5qcGcnKVwiXG4gICAgICBjYXNlICdGVUxMU1RBQ0snOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi80MGNhYjg0NS04NzM4LTQ5YzItYWVmOC0yNTc3MGU0MDVlYWUvZGQ5aHh1Zi1lYTI3NTU5MS1kMzI4LTQzMDItYmM3NC01NDE1MWNkZTBjZDQucG5nL3YxL2ZpbGwvd18xNjAwLGhfNjg2LHFfODAsc3RycC90aGVfYWNhZGVteV9fX3Jvb2Z0b3BfX19ibGFja291dF9ieV90YW1hZ29jaGlrdW5fZGQ5aHh1Zi1mdWxsdmlldy5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2pkbE1HUXhPRGc1T0RJeU5qUXpOek5oTldZd1pEUXhOV1ZoTUdReU5tVXdJaXdpYVhOeklqb2lkWEp1T21Gd2NEbzNaVEJrTVRnNE9UZ3lNalkwTXpjellUVm1NR1EwTVRWbFlUQmtNalpsTUNJc0ltOWlhaUk2VzF0N0ltaGxhV2RvZENJNklqdzlOamcySWl3aWNHRjBhQ0k2SWx3dlpsd3ZOREJqWVdJNE5EVXRPRGN6T0MwME9XTXlMV0ZsWmpndE1qVTNOekJsTkRBMVpXRmxYQzlrWkRsb2VIVm1MV1ZoTWpjMU5Ua3hMV1F6TWpndE5ETXdNaTFpWXpjMExUVTBNVFV4WTJSbE1HTmtOQzV3Ym1jaUxDSjNhV1IwYUNJNklqdzlNVFl3TUNKOVhWMHNJbUYxWkNJNld5SjFjbTQ2YzJWeWRtbGpaVHBwYldGblpTNXZjR1Z5WVhScGIyNXpJbDE5LlJOMkdrYk5yOGpVeEtKa2lNaVpZb2RZdFVucm0wZFc5eEhpLUE2TlpmV2snKVwiXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cblxuICBjb25zdCBob3ZlciA9IGNvbG9yID0+IHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUaW50KHsgY29sb3IsIG9wYWNpdHk6ICcwLjQnIH0pXG4gICAgICB9LCA1MDApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaG92ZXJMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRUaW50KHByZXZUaW50ID0+ICh7XG4gICAgICAuLi5wcmV2VGludCxcbiAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgIGNvbG9yOiAnJ1xuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogZ2V0QmFja2dyb3VuZEltYWdlKCksXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZsZXggc3R5bGU9e2JhY2tncm91bmRTdHlsZX0+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIxMDB2d1wiXG4gICAgICAgIGg9XCIxMDB2aFwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB6SW5kZXg9XCIxXCJcbiAgICAgICAgYmc9e3RpbnQuY29sb3J9XG4gICAgICAgIG9wYWNpdHk9e3RpbnQub3BhY2l0eX1cbiAgICAgICAgdHJhbnNpdGlvbj1cIm9wYWNpdHkgMXNcIlxuICAgICAgICBicmlnaHRuZXNzPVwiMTAwJVwiXG4gICAgICAgIGZpbHRlcj1cImF1dG9cIlxuICAgICAgPjwvQm94PlxuICAgICAgPE5hdmJhciB0aW50Q29sb3I9e3RpbnQuY29sb3J9IC8+XG4gICAgICA8UHJvamVjdENhdGVnb3JpZXNcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgb25DYXRlZ29yeUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfVxuICAgICAgLz5cbiAgICAgIDxWU3RhY2sgYWxpZ249XCJmbGV4LWVuZFwiIGZsZXhHcm93PXsxfSBwdD1cIjVyZW1cIiBwcj1cIjhyZW1cIiB6SW5kZXg9XCIyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj17cHJvamVjdC5ocmVmfSB0ZXh0PXtwcm9qZWN0Lm5hbWV9IGtleT17aW5kZXh9IGNvbG9yPXtwcm9qZWN0LmNvbG9yfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRmxleD5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2plY3RzIiwiRmxleCIsIkJveCIsIlZTdGFjayIsIkxpbmsiLCJDaGFrcmFMaW5rIiwibW90aW9uIiwiUHJvamVjdENhdGVnb3JpZXMiLCJOYXZiYXIiLCJNb3Rpb25DaGFrcmFMaW5rIiwiUHJvamVjdFBhZ2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInRpbnQiLCJzZXRUaW50IiwiY29sb3IiLCJvcGFjaXR5IiwicHJvamVjdFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRleHRBbGlnbiIsIldlYmtpdFRleHRTdHJva2UiLCJXZWJraXRUZXh0U3Ryb2tlQ29sb3IiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmlsdGVyIiwibGlua1ZhcmlhbnRzIiwiaG92ZXIiLCJMaW5rSXRlbSIsInBhdGgiLCJ0YXJnZXQiLCJocmVmIiwidGV4dCIsInByb3BzIiwiYWN0aXZlIiwiYXMiLCJ3aGlsZUhvdmVyIiwidmFyaWFudHMiLCJfaG92ZXIiLCJ1bmRlZmluZWQiLCJzeCIsIldlYmtpdFRleHRGaWxsQ29sb3IiLCJzdHlsZSIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwic2V0VGltZW91dCIsImhvdmVyTGVhdmUiLCJwcmV2VGludCIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJ3IiwiaCIsInBvc2l0aW9uIiwiekluZGV4IiwiYmciLCJicmlnaHRuZXNzIiwidGludENvbG9yIiwib25DYXRlZ29yeUNsaWNrIiwiYWxpZ24iLCJmbGV4R3JvdyIsInB0IiwicHIiLCJtYXAiLCJpbmRleCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
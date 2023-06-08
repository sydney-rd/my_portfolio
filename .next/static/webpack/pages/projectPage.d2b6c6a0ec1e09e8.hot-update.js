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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const projectStyle = {\n        fontFamily: \"Ailerons\",\n        fontSize: \"9rem\",\n        whiteSpace: \"nowrap\",\n        textAlign: \"right\",\n        // WebkitTextStroke: `2px ${tint.color}`,\n        transition: \"color 0.7s\",\n        // textShadow: `0px 0px 8px ${tint.color}`,\n        transitionDuration: \"0.7s\",\n        transitionDelay: \"0.7s\",\n        filter: \"brightness(150%)\"\n    };\n    const linkVariants = {\n        hover: {\n            color: tint.color\n        }\n    };\n    const LinkItem = (param)=>{\n        let { path , target , href , text , ...props } = param;\n        const active = path === href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            href: href,\n            target: target,\n            whileHover: \"hover\",\n            variants: linkVariants,\n            style: projectStyle,\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        if (color) {\n            setTimeout(()=>{\n                setTint({\n                    color,\n                    opacity: \"0.4\"\n                });\n            }, 500);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint((prevTint)=>({\n                ...prevTint,\n                opacity: \"0\",\n                color: \"\"\n            }));\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 1s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tintColor: tint.color\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"ygH92H9S7c+vsarhTg9olR0R6Og=\");\n_c1 = ProjectPage;\n{\n/* <Box key={index} mb=\"1rem\">\n<Link\n  href={project.href}\n  onMouseEnter={() => hover(project.color)}\n  onMouseLeave={hoverLeave}\n  style={projectStyle}\n>\n  {project.name}\n</Link>\n</Box> */ }var _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQWtIeEI7QUFDRTs7Ozs7Ozs7O09BU0ssR0FDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0UGFnZS5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi91dGlsaXRpZXMvcHJvamVjdHMnXG5pbXBvcnQgeyBGbGV4LCBCb3gsIFZTdGFjaywgTGluayBhcyBDaGFrcmFMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2F0ZWdvcmllcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5cbmNvbnN0IE1vdGlvbkNoYWtyYUxpbmsgPSBtb3Rpb24oQ2hha3JhTGluaylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdXRUInKVxuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiAnJywgb3BhY2l0eTogJzAnIH0pXG5cbiAgY29uc3QgcHJvamVjdFN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdBaWxlcm9ucycsXG4gICAgZm9udFNpemU6ICc5cmVtJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgLy8gV2Via2l0VGV4dFN0cm9rZTogYDJweCAke3RpbnQuY29sb3J9YCxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC43cycsXG4gICAgLy8gdGV4dFNoYWRvdzogYDBweCAwcHggOHB4ICR7dGludC5jb2xvcn1gLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuN3MnLFxuICAgIHRyYW5zaXRpb25EZWxheTogJzAuN3MnLFxuICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoMTUwJSknXG4gIH1cblxuICBjb25zdCBsaW5rVmFyaWFudHMgPSB7XG4gICAgaG92ZXI6IHtcbiAgICAgIGNvbG9yOiB0aW50LmNvbG9yXG4gICAgfVxuICB9XG4gIGNvbnN0IExpbmtJdGVtID0gKHsgcGF0aCwgdGFyZ2V0LCBocmVmLCB0ZXh0LCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb3Rpb25DaGFrcmFMaW5rXG4gICAgICAgIGFzPXtMaW5rfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgdmFyaWFudHM9e2xpbmtWYXJpYW50c31cbiAgICAgICAgc3R5bGU9e3Byb2plY3RTdHlsZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvTW90aW9uQ2hha3JhTGluaz5cbiAgICApXG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSBjYXRlZ29yeSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSlcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgcHJvamVjdCA9PiBwcm9qZWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5XG4gIClcblxuICBjb25zdCBnZXRCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjYXNlICdXRUInOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy85MC8wOS9lYy85MDA5ZWNjNzllOTJiOGJhMjA3YjQzYzdlNTZiZmI0MS5naWYnKVwiXG4gICAgICBjYXNlICdDKysnOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vcmFyZS1nYWxsZXJ5LmNvbS9tb2NhaGJpZy80MzQwNTEtcm9hZC1taXN0LWRhcmstbmlnaHQtcmFpbi1uYXR1cmUuanBnJylcIlxuICAgICAgY2FzZSAnUFlUSE9OJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS80NzR4LzViL2RmLzkzLzViZGY5MzdmYmM5MTc0MzQxY2U1OWM3MmJlNDIwZGI2LmpwZycpXCJcbiAgICAgIGNhc2UgJ0ZVTExTVEFDSyc6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mLzQwY2FiODQ1LTg3MzgtNDljMi1hZWY4LTI1NzcwZTQwNWVhZS9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmcvdjEvZmlsbC93XzE2MDAsaF82ODYscV84MCxzdHJwL3RoZV9hY2FkZW15X19fcm9vZnRvcF9fX2JsYWNrb3V0X2J5X3RhbWFnb2NoaWt1bl9kZDloeHVmLWZ1bGx2aWV3LmpwZz90b2tlbj1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUoxY200NllYQndPamRsTUdReE9EZzVPREl5TmpRek56TmhOV1l3WkRReE5XVmhNR1F5Tm1Vd0lpd2lhWE56SWpvaWRYSnVPbUZ3Y0RvM1pUQmtNVGc0T1RneU1qWTBNemN6WVRWbU1HUTBNVFZsWVRCa01qWmxNQ0lzSW05aWFpSTZXMXQ3SW1obGFXZG9kQ0k2SWp3OU5qZzJJaXdpY0dGMGFDSTZJbHd2Wmx3dk5EQmpZV0k0TkRVdE9EY3pPQzAwT1dNeUxXRmxaamd0TWpVM056QmxOREExWldGbFhDOWtaRGxvZUhWbUxXVmhNamMxTlRreExXUXpNamd0TkRNd01pMWlZemMwTFRVME1UVXhZMlJsTUdOa05DNXdibWNpTENKM2FXUjBhQ0k2SWp3OU1UWXdNQ0o5WFYwc0ltRjFaQ0k2V3lKMWNtNDZjMlZ5ZG1salpUcHBiV0ZuWlM1dmNHVnlZWFJwYjI1eklsMTkuUk4yR2tiTnI4alV4S0praU1pWllvZFl0VW5ybTBkVzl4SGktQTZOWmZXaycpXCJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhvdmVyID0gY29sb3IgPT4ge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbnQoeyBjb2xvciwgb3BhY2l0eTogJzAuNCcgfSlcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICBjb25zdCBob3ZlckxlYXZlID0gKCkgPT4ge1xuICAgIHNldFRpbnQocHJldlRpbnQgPT4gKHtcbiAgICAgIC4uLnByZXZUaW50LFxuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgY29sb3I6ICcnXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD1cIjFcIlxuICAgICAgICBiZz17dGludC5jb2xvcn1cbiAgICAgICAgb3BhY2l0eT17dGludC5vcGFjaXR5fVxuICAgICAgICB0cmFuc2l0aW9uPVwib3BhY2l0eSAxc1wiXG4gICAgICAgIGJyaWdodG5lc3M9XCIxMDAlXCJcbiAgICAgICAgZmlsdGVyPVwiYXV0b1wiXG4gICAgICA+PC9Cb3g+XG4gICAgICA8TmF2YmFyIHRpbnRDb2xvcj17dGludC5jb2xvcn0gLz5cbiAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9XG4gICAgICAvPlxuICAgICAgPFZTdGFjayBhbGlnbj1cImZsZXgtZW5kXCIgZmxleEdyb3c9ezF9IHB0PVwiNXJlbVwiIHByPVwiOHJlbVwiIHpJbmRleD1cIjJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPXtwcm9qZWN0LmhyZWZ9IHRleHQ9e3Byb2plY3QubmFtZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0ZsZXg+XG4gIClcbn1cblxue1xuICAvKiA8Qm94IGtleT17aW5kZXh9IG1iPVwiMXJlbVwiPlxuPExpbmtcbiAgaHJlZj17cHJvamVjdC5ocmVmfVxuICBvbk1vdXNlRW50ZXI9eygpID0+IGhvdmVyKHByb2plY3QuY29sb3IpfVxuICBvbk1vdXNlTGVhdmU9e2hvdmVyTGVhdmV9XG4gIHN0eWxlPXtwcm9qZWN0U3R5bGV9XG4+XG4gIHtwcm9qZWN0Lm5hbWV9XG48L0xpbms+XG48L0JveD4gKi9cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJGbGV4IiwiQm94IiwiVlN0YWNrIiwiTGluayIsIkNoYWtyYUxpbmsiLCJtb3Rpb24iLCJQcm9qZWN0Q2F0ZWdvcmllcyIsIk5hdmJhciIsIk1vdGlvbkNoYWtyYUxpbmsiLCJQcm9qZWN0UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwidGludCIsInNldFRpbnQiLCJjb2xvciIsIm9wYWNpdHkiLCJwcm9qZWN0U3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJ3aGl0ZVNwYWNlIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZpbHRlciIsImxpbmtWYXJpYW50cyIsImhvdmVyIiwiTGlua0l0ZW0iLCJwYXRoIiwidGFyZ2V0IiwiaHJlZiIsInRleHQiLCJwcm9wcyIsImFjdGl2ZSIsImFzIiwid2hpbGVIb3ZlciIsInZhcmlhbnRzIiwic3R5bGUiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsImdldEJhY2tncm91bmRJbWFnZSIsInNldFRpbWVvdXQiLCJob3ZlckxlYXZlIiwicHJldlRpbnQiLCJiYWNrZ3JvdW5kU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsIndpZHRoIiwidyIsImgiLCJwb3NpdGlvbiIsInpJbmRleCIsImJnIiwiYnJpZ2h0bmVzcyIsInRpbnRDb2xvciIsIm9uQ2F0ZWdvcnlDbGljayIsImFsaWduIiwiZmxleEdyb3ciLCJwdCIsInByIiwibWFwIiwiaW5kZXgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
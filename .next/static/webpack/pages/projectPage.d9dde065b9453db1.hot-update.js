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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const projectStyle = {\n        opacity: \"1\",\n        fontFamily: \"Ailerons\",\n        fontSize: \"9rem\",\n        whiteSpace: \"nowrap\",\n        textAlign: \"right\",\n        transition: \"color 0.7s\",\n        // textShadow: `0px 0px 8px ${tint.color}`,\n        transitionDuration: \"0.7s\",\n        transitionDelay: \"0.7s\",\n        filter: \"brightness(150%)\"\n    };\n    const linkVariants = {\n        hover: {\n            WebkitTextFillColor: tint.color\n        }\n    };\n    const LinkItem = (param)=>{\n        let { path , target , href , color , text , ...props } = param;\n        const active = path === href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            href: href,\n            target: target,\n            whileHover: \"hover\",\n            variants: linkVariants,\n            _hover: {\n                color: color || undefined\n            },\n            sx: {\n                WebkitTextStroke: \"2px\",\n                WebkitTextStrokeColor: color || undefined\n            },\n            style: projectStyle,\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        if (color) {\n            setTimeout(()=>{\n                setTint({\n                    color,\n                    opacity: \"0.4\"\n                });\n            }, 500);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint((prevTint)=>({\n                ...prevTint,\n                opacity: \"0\",\n                color: \"\"\n            }));\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 1s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tintColor: tint.color\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name,\n                        color: project.color\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n} // ebkitTextFillColor:\"transparent\",\n_s(ProjectPage, \"ygH92H9S7c+vsarhTg9olR0R6Og=\");\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3ZCLFNBQVN3QixzQkFDOUIsOERBQUMzQzt3QkFBU0csTUFBTWdCLFFBQVFoQjt3QkFBTUMsTUFBTWUsUUFBUXlCO3dCQUFrQjFELE9BQU9pQyxRQUFRakM7dUJBQXRCeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakUsRUFHQSxvQ0FBb0M7R0F0SFo5RDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0UGFnZS5qcz9lMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi91dGlsaXRpZXMvcHJvamVjdHMnXG5pbXBvcnQgeyBGbGV4LCBCb3gsIFZTdGFjaywgTGluayBhcyBDaGFrcmFMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2F0ZWdvcmllcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5cbmNvbnN0IE1vdGlvbkNoYWtyYUxpbmsgPSBtb3Rpb24oQ2hha3JhTGluaylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdXRUInKVxuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiAnJywgb3BhY2l0eTogJzAnIH0pXG5cbiAgY29uc3QgcHJvamVjdFN0eWxlID0ge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgICBmb250RmFtaWx5OiAnQWlsZXJvbnMnLFxuICAgIGZvbnRTaXplOiAnOXJlbScsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjdzJyxcbiAgICAvLyB0ZXh0U2hhZG93OiBgMHB4IDBweCA4cHggJHt0aW50LmNvbG9yfWAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC43cycsXG4gICAgdHJhbnNpdGlvbkRlbGF5OiAnMC43cycsXG4gICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxNTAlKSdcbiAgfVxuXG4gIGNvbnN0IGxpbmtWYXJpYW50cyA9IHtcbiAgICBob3Zlcjoge1xuICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogdGludC5jb2xvcixcbiAgICAgIC8vIGNvbG9yOiB0aW50LmNvbG9yXG4gICAgfVxuICB9XG4gIGNvbnN0IExpbmtJdGVtID0gKHsgcGF0aCwgdGFyZ2V0LCBocmVmLCBjb2xvciwgdGV4dCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcblxuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uQ2hha3JhTGlua1xuICAgICAgICBhcz17TGlua31cbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICAgIHdoaWxlSG92ZXI9XCJob3ZlclwiXG4gICAgICAgIHZhcmlhbnRzPXtsaW5rVmFyaWFudHN9XG4gICAgICAgIF9ob3Zlcj17e2NvbG9yOiBjb2xvciB8fCB1bmRlZmluZWR9fVxuICAgICAgICBzeD17e1dlYmtpdFRleHRTdHJva2U6XCIycHhcIiwgV2Via2l0VGV4dFN0cm9rZUNvbG9yOiBjb2xvciB8fCB1bmRlZmluZWR9fVxuICAgICAgICBzdHlsZT17cHJvamVjdFN0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9Nb3Rpb25DaGFrcmFMaW5rPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSBjYXRlZ29yeSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSlcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgcHJvamVjdCA9PiBwcm9qZWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5XG4gIClcblxuICBjb25zdCBnZXRCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjYXNlICdXRUInOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy85MC8wOS9lYy85MDA5ZWNjNzllOTJiOGJhMjA3YjQzYzdlNTZiZmI0MS5naWYnKVwiXG4gICAgICBjYXNlICdDKysnOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vcmFyZS1nYWxsZXJ5LmNvbS9tb2NhaGJpZy80MzQwNTEtcm9hZC1taXN0LWRhcmstbmlnaHQtcmFpbi1uYXR1cmUuanBnJylcIlxuICAgICAgY2FzZSAnUFlUSE9OJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2kucGluaW1nLmNvbS80NzR4LzViL2RmLzkzLzViZGY5MzdmYmM5MTc0MzQxY2U1OWM3MmJlNDIwZGI2LmpwZycpXCJcbiAgICAgIGNhc2UgJ0ZVTExTVEFDSyc6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mLzQwY2FiODQ1LTg3MzgtNDljMi1hZWY4LTI1NzcwZTQwNWVhZS9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmcvdjEvZmlsbC93XzE2MDAsaF82ODYscV84MCxzdHJwL3RoZV9hY2FkZW15X19fcm9vZnRvcF9fX2JsYWNrb3V0X2J5X3RhbWFnb2NoaWt1bl9kZDloeHVmLWZ1bGx2aWV3LmpwZz90b2tlbj1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUoxY200NllYQndPamRsTUdReE9EZzVPREl5TmpRek56TmhOV1l3WkRReE5XVmhNR1F5Tm1Vd0lpd2lhWE56SWpvaWRYSnVPbUZ3Y0RvM1pUQmtNVGc0T1RneU1qWTBNemN6WVRWbU1HUTBNVFZsWVRCa01qWmxNQ0lzSW05aWFpSTZXMXQ3SW1obGFXZG9kQ0k2SWp3OU5qZzJJaXdpY0dGMGFDSTZJbHd2Wmx3dk5EQmpZV0k0TkRVdE9EY3pPQzAwT1dNeUxXRmxaamd0TWpVM056QmxOREExWldGbFhDOWtaRGxvZUhWbUxXVmhNamMxTlRreExXUXpNamd0TkRNd01pMWlZemMwTFRVME1UVXhZMlJsTUdOa05DNXdibWNpTENKM2FXUjBhQ0k2SWp3OU1UWXdNQ0o5WFYwc0ltRjFaQ0k2V3lKMWNtNDZjMlZ5ZG1salpUcHBiV0ZuWlM1dmNHVnlZWFJwYjI1eklsMTkuUk4yR2tiTnI4alV4S0praU1pWllvZFl0VW5ybTBkVzl4SGktQTZOWmZXaycpXCJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhvdmVyID0gY29sb3IgPT4ge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbnQoeyBjb2xvciwgb3BhY2l0eTogJzAuNCcgfSlcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICBjb25zdCBob3ZlckxlYXZlID0gKCkgPT4ge1xuICAgIHNldFRpbnQocHJldlRpbnQgPT4gKHtcbiAgICAgIC4uLnByZXZUaW50LFxuICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgY29sb3I6ICcnXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD1cIjFcIlxuICAgICAgICBiZz17dGludC5jb2xvcn1cbiAgICAgICAgb3BhY2l0eT17dGludC5vcGFjaXR5fVxuICAgICAgICB0cmFuc2l0aW9uPVwib3BhY2l0eSAxc1wiXG4gICAgICAgIGJyaWdodG5lc3M9XCIxMDAlXCJcbiAgICAgICAgZmlsdGVyPVwiYXV0b1wiXG4gICAgICA+PC9Cb3g+XG4gICAgICA8TmF2YmFyIHRpbnRDb2xvcj17dGludC5jb2xvcn0gLz5cbiAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9XG4gICAgICAvPlxuICAgICAgPFZTdGFjayBhbGlnbj1cImZsZXgtZW5kXCIgZmxleEdyb3c9ezF9IHB0PVwiNXJlbVwiIHByPVwiOHJlbVwiIHpJbmRleD1cIjJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPXtwcm9qZWN0LmhyZWZ9IHRleHQ9e3Byb2plY3QubmFtZX0ga2V5PXtpbmRleH0gY29sb3I9e3Byb2plY3QuY29sb3J9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApXG59XG5cblxuLy8gZWJraXRUZXh0RmlsbENvbG9yOlwidHJhbnNwYXJlbnRcIiwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2plY3RzIiwiRmxleCIsIkJveCIsIlZTdGFjayIsIkxpbmsiLCJDaGFrcmFMaW5rIiwibW90aW9uIiwiUHJvamVjdENhdGVnb3JpZXMiLCJOYXZiYXIiLCJNb3Rpb25DaGFrcmFMaW5rIiwiUHJvamVjdFBhZ2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInRpbnQiLCJzZXRUaW50IiwiY29sb3IiLCJvcGFjaXR5IiwicHJvamVjdFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRleHRBbGlnbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmaWx0ZXIiLCJsaW5rVmFyaWFudHMiLCJob3ZlciIsIldlYmtpdFRleHRGaWxsQ29sb3IiLCJMaW5rSXRlbSIsInBhdGgiLCJ0YXJnZXQiLCJocmVmIiwidGV4dCIsInByb3BzIiwiYWN0aXZlIiwiYXMiLCJ3aGlsZUhvdmVyIiwidmFyaWFudHMiLCJfaG92ZXIiLCJ1bmRlZmluZWQiLCJzeCIsIldlYmtpdFRleHRTdHJva2UiLCJXZWJraXRUZXh0U3Ryb2tlQ29sb3IiLCJzdHlsZSIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwic2V0VGltZW91dCIsImhvdmVyTGVhdmUiLCJwcmV2VGludCIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJ3IiwiaCIsInBvc2l0aW9uIiwiekluZGV4IiwiYmciLCJicmlnaHRuZXNzIiwidGludENvbG9yIiwib25DYXRlZ29yeUNsaWNrIiwiYWxpZ24iLCJmbGV4R3JvdyIsInB0IiwicHIiLCJtYXAiLCJpbmRleCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
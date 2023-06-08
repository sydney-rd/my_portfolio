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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        active: false\n    });\n    const LinkItem = (param)=>{\n        let { path , target , href , onHover , onHoverLeave , color , text , ...props } = param;\n        const isHovered = hoveredItem === text;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            onMouseEnter: ()=>onHover(color, text),\n            onMouseLeave: onHoverLeave,\n            href: href,\n            target: target,\n            sx: {\n                opacity: \"1\",\n                fontFamily: \"Ailerons\",\n                fontSize: \"9rem\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"right\",\n                transition: \"none\",\n                filter: \"brightness(150%)\",\n                color: isHovered ? color : \"transparent\",\n                WebkitTextStroke: \"2px\",\n                WebkitTextStrokeColor: color,\n                _hover: {\n                    color: color,\n                    textShadow: \"0px 0px 8px \".concat(color)\n                }\n            },\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color, text)=>{\n        if (color) {\n            setTint({\n                color,\n                active: true\n            });\n            setHoveredItem(text);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint({\n            color: \"\",\n            active: false\n        });\n        setHoveredItem(\"\");\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\",\n        transition: \"opacity 0.7s\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.active ? \"0.4\" : \"0\",\n                transition: \"opacity 0.7s\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name,\n                        color: project.color,\n                        onHover: hover,\n                        onHoverLeave: hoverLeave\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"hJxnsXOKHRt8B5+tOZL8UhJ1qnA=\");\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCw4REFBQzNELHFFQUFpQkE7Z0JBQ2hCRyxrQkFBa0JBO2dCQUNsQjBELGlCQUFpQjFCOzs7Ozs7Ozs7Ozs7QUFJekI7R0FySHdCakM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdFBhZ2UuanM/ZTBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uL3V0aWxpdGllcy9wcm9qZWN0cyc7XG5pbXBvcnQgeyBGbGV4LCBCb3gsIFZTdGFjaywgTGluayBhcyBDaGFrcmFMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUHJvamVjdENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2F0ZWdvcmllcyc7XG5cbmNvbnN0IE1vdGlvbkNoYWtyYUxpbmsgPSBtb3Rpb24oQ2hha3JhTGluayk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnV0VCJyk7XG4gIGNvbnN0IFtob3ZlcmVkSXRlbSwgc2V0SG92ZXJlZEl0ZW1dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiAnJywgYWN0aXZlOiBmYWxzZSB9KTtcblxuICBjb25zdCBMaW5rSXRlbSA9ICh7XG4gICAgcGF0aCxcbiAgICB0YXJnZXQsXG4gICAgaHJlZixcbiAgICBvbkhvdmVyLFxuICAgIG9uSG92ZXJMZWF2ZSxcbiAgICBjb2xvcixcbiAgICB0ZXh0LFxuICAgIC4uLnByb3BzXG4gIH0pID0+IHtcbiAgICBjb25zdCBpc0hvdmVyZWQgPSBob3ZlcmVkSXRlbSA9PT0gdGV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uQ2hha3JhTGlua1xuICAgICAgICBhcz17TGlua31cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBvbkhvdmVyKGNvbG9yLCB0ZXh0KX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbkhvdmVyTGVhdmV9XG4gICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICBmb250RmFtaWx5OiAnQWlsZXJvbnMnLFxuICAgICAgICAgIGZvbnRTaXplOiAnOXJlbScsXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJyxcbiAgICAgICAgICBmaWx0ZXI6ICdicmlnaHRuZXNzKDE1MCUpJyxcbiAgICAgICAgICBjb2xvcjogaXNIb3ZlcmVkID8gY29sb3IgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIFdlYmtpdFRleHRTdHJva2U6ICcycHgnLFxuICAgICAgICAgIFdlYmtpdFRleHRTdHJva2VDb2xvcjogY29sb3IsXG4gICAgICAgICAgX2hvdmVyOiB7IGNvbG9yOiBjb2xvciwgdGV4dFNoYWRvdzogYDBweCAwcHggOHB4ICR7Y29sb3J9YCB9LFxuICAgICAgICB9fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9Nb3Rpb25DaGFrcmFMaW5rPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgKTtcblxuICBjb25zdCBnZXRCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjYXNlICdXRUInOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy85MC8wOS9lYy85MDA5ZWNjNzllOTJiOGJhMjA3YjQzYzdlNTZiZmI0MS5naWYnKVwiO1xuICAgICAgY2FzZSAnQysrJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL3JhcmUtZ2FsbGVyeS5jb20vbW9jYWhiaWcvNDM0MDUxLXJvYWQtbWlzdC1kYXJrLW5pZ2h0LXJhaW4tbmF0dXJlLmpwZycpXCI7XG4gICAgICBjYXNlICdQWVRIT04nOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzQ3NHgvNWIvZGYvOTMvNWJkZjkzN2ZiYzkxNzQzNDFjZTU5YzcyYmU0MjBkYjYuanBnJylcIjtcbiAgICAgIGNhc2UgJ0ZVTExTVEFDSyc6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mLzQwY2FiODQ1LTg3MzgtNDljMi1hZWY4LTI1NzcwZTQwNWVhZS9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmcvdjEvZmlsbC93XzE2MDAsaF82ODYscV84MCxzdHJwL3RoZV9hY2FkZW15X19fcm9vZnRvcF9fX2JsYWNrb3V0X2J5X3RhbWFnb2NoaWt1bl9kZDloeHVmLWZ1bGx2aWV3LmpwZz90b2tlbj1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUoxY200NllYQndPamRsTUdReE9EZzVPREl5TmpRek56TmhOV1l3WkRReE5XVmhNR1F5Tm1Vd0lpd2lhWE56SWpvaWRYSnVPbUZ3Y0RvM1pUQmtNVGc0T1RneU1qWTBNemN6WVRWbU1HUTBNVFZsWVRCa01qWmxNQ0lzSW05aWFpSTZXMXQ3SW1obGFXZG9kQ0k2SWp3OU5qZzJJaXdpY0dGMGFDSTZJbHd2Wmx3dk5EQmpZV0k0TkRVdE9EY3pPQzAwT1dNeUxXRmxaamd0TWpVM056QmxOREExWldGbFhDOWtaRGxvZUhWbUxXVmhNamMxTlRreExXUXpNamd0TkRNd01pMWlZemMwTFRVME1UVXhZMlJsTUdOa05DNXdibWNpTENKM2FXUjBhQ0k2SWp3OU1UWXdNQ0o5WFYwc0ltRjFaQ0k2V3lKMWNtNDZjMlZ5ZG1salpUcHBiV0ZuWlM1dmNHVnlZWFJwYjI1eklsMTkuUk4yR2tiTnI4alV4S0praU1pWllvZFl0VW5ybTBkVzl4SGktQTZOWmZXaycpXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhvdmVyID0gKGNvbG9yLCB0ZXh0KSA9PiB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBzZXRUaW50KHsgY29sb3IsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgIHNldEhvdmVyZWRJdGVtKHRleHQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBob3ZlckxlYXZlID0gKCkgPT4ge1xuICAgIHNldFRpbnQoeyBjb2xvcjogJycsIGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgc2V0SG92ZXJlZEl0ZW0oJycpO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGdldEJhY2tncm91bmRJbWFnZSgpLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuN3MnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggc3R5bGU9e2JhY2tncm91bmRTdHlsZX0+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCIxMDB2d1wiXG4gICAgICAgIGg9XCIxMDB2aFwiXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB6SW5kZXg9XCIxXCJcbiAgICAgICAgYmc9e3RpbnQuY29sb3J9XG4gICAgICAgIG9wYWNpdHk9e3RpbnQuYWN0aXZlID8gJzAuNCcgOiAnMCd9XG4gICAgICAgIHRyYW5zaXRpb249XCJvcGFjaXR5IDAuN3NcIlxuICAgICAgPjwvQm94PlxuICAgICAgPFZTdGFjayBhbGlnbj1cImZsZXgtZW5kXCIgZmxleEdyb3c9ezF9IHB0PVwiNXJlbVwiIHByPVwiOHJlbVwiIHpJbmRleD1cIjJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgaHJlZj17cHJvamVjdC5ocmVmfVxuICAgICAgICAgICAgdGV4dD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNvbG9yPXtwcm9qZWN0LmNvbG9yfVxuICAgICAgICAgICAgb25Ib3Zlcj17aG92ZXJ9XG4gICAgICAgICAgICBvbkhvdmVyTGVhdmU9e2hvdmVyTGVhdmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICAgIDxQcm9qZWN0Q2F0ZWdvcmllc1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5PXtzZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICBvbkNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9XG4gICAgICAvPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJGbGV4IiwiQm94IiwiVlN0YWNrIiwiTGluayIsIkNoYWtyYUxpbmsiLCJtb3Rpb24iLCJQcm9qZWN0Q2F0ZWdvcmllcyIsIk1vdGlvbkNoYWtyYUxpbmsiLCJQcm9qZWN0UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiaG92ZXJlZEl0ZW0iLCJzZXRIb3ZlcmVkSXRlbSIsInRpbnQiLCJzZXRUaW50IiwiY29sb3IiLCJhY3RpdmUiLCJMaW5rSXRlbSIsInBhdGgiLCJ0YXJnZXQiLCJocmVmIiwib25Ib3ZlciIsIm9uSG92ZXJMZWF2ZSIsInRleHQiLCJwcm9wcyIsImlzSG92ZXJlZCIsImFzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3giLCJvcGFjaXR5IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRleHRBbGlnbiIsInRyYW5zaXRpb24iLCJmaWx0ZXIiLCJXZWJraXRUZXh0U3Ryb2tlIiwiV2Via2l0VGV4dFN0cm9rZUNvbG9yIiwiX2hvdmVyIiwidGV4dFNoYWRvdyIsImhhbmRsZUNhdGVnb3J5Q2xpY2siLCJjYXRlZ29yeSIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0IiwiZ2V0QmFja2dyb3VuZEltYWdlIiwiaG92ZXIiLCJob3ZlckxlYXZlIiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwidyIsImgiLCJwb3NpdGlvbiIsInpJbmRleCIsImJnIiwiYWxpZ24iLCJmbGV4R3JvdyIsInB0IiwicHIiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJvbkNhdGVnb3J5Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
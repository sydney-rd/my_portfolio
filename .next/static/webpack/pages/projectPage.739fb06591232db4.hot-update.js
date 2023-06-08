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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        active: false\n    });\n    const LinkItem = (param)=>{\n        let { path , target , href , onHover , onHoverLeave , color , text , ...props } = param;\n        const isHovered = hoveredItem === text;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            onMouseEnter: ()=>onHover(color, text),\n            onMouseLeave: onHoverLeave,\n            href: href,\n            target: target,\n            sx: {\n                opacity: \"1\",\n                fontFamily: \"Ailerons\",\n                fontSize: \"9rem\",\n                whiteSpace: \"nowrap\",\n                textAlign: \"right\",\n                transition: \"none\",\n                filter: \"brightness(150%)\",\n                color: isHovered ? color : \"transparent\",\n                WebkitTextStroke: \"2px\",\n                WebkitTextStrokeColor: color,\n                _hover: {\n                    color: color,\n                    textShadow: \"0px 0px 8px \".concat(color)\n                }\n            },\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color, text)=>{\n        if (color) {\n            setTint({\n                color,\n                opacity: \"0.4\"\n            });\n            setHoveredItem(text);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint({\n            color: \"\",\n            active: false\n        });\n        setHoveredItem(\"\");\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\",\n        transition: \"opacity 0.7s\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.active ? \"0.4\" : \"0\",\n                transition: \"opacity 0.7s\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name,\n                        color: project.color,\n                        onHover: hover,\n                        onHoverLeave: hoverLeave\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"hJxnsXOKHRt8B5+tOZL8UhJ1qnA=\");\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU82QixRQUFRN0I7d0JBQ2ZNLFNBQVN5Qjt3QkFDVHhCLGNBQWN5Qjt1QkFIVG1COzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBdEh3QjFEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RQYWdlLmpzP2UwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL3Byb2plY3RzJ1xuaW1wb3J0IHsgRmxleCwgQm94LCBWU3RhY2ssIExpbmsgYXMgQ2hha3JhTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFByb2plY3RDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdENhdGVnb3JpZXMnXG5cbmNvbnN0IE1vdGlvbkNoYWtyYUxpbmsgPSBtb3Rpb24oQ2hha3JhTGluaylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCdXRUInKVxuICBjb25zdCBbaG92ZXJlZEl0ZW0sIHNldEhvdmVyZWRJdGVtXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdGludCwgc2V0VGludF0gPSB1c2VTdGF0ZSh7IGNvbG9yOiAnJywgYWN0aXZlOiBmYWxzZSB9KVxuXG4gIGNvbnN0IExpbmtJdGVtID0gKHtcbiAgICBwYXRoLFxuICAgIHRhcmdldCxcbiAgICBocmVmLFxuICAgIG9uSG92ZXIsXG4gICAgb25Ib3ZlckxlYXZlLFxuICAgIGNvbG9yLFxuICAgIHRleHQsXG4gICAgLi4ucHJvcHNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlzSG92ZXJlZCA9IGhvdmVyZWRJdGVtID09PSB0ZXh0XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vdGlvbkNoYWtyYUxpbmtcbiAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gb25Ib3Zlcihjb2xvciwgdGV4dCl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25Ib3ZlckxlYXZlfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgZm9udEZhbWlseTogJ0FpbGVyb25zJyxcbiAgICAgICAgICBmb250U2l6ZTogJzlyZW0nLFxuICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZScsXG4gICAgICAgICAgZmlsdGVyOiAnYnJpZ2h0bmVzcygxNTAlKScsXG4gICAgICAgICAgY29sb3I6IGlzSG92ZXJlZCA/IGNvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBXZWJraXRUZXh0U3Ryb2tlOiAnMnB4JyxcbiAgICAgICAgICBXZWJraXRUZXh0U3Ryb2tlQ29sb3I6IGNvbG9yLFxuICAgICAgICAgIF9ob3ZlcjogeyBjb2xvcjogY29sb3IsIHRleHRTaGFkb3c6IGAwcHggMHB4IDhweCAke2NvbG9yfWAgfVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9Nb3Rpb25DaGFrcmFMaW5rPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSBjYXRlZ29yeSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSlcbiAgfVxuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgKVxuXG4gIGNvbnN0IGdldEJhY2tncm91bmRJbWFnZSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgJ1dFQic6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzkwLzA5L2VjLzkwMDllY2M3OWU5MmI4YmEyMDdiNDNjN2U1NmJmYjQxLmdpZicpXCJcbiAgICAgIGNhc2UgJ0MrKyc6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9yYXJlLWdhbGxlcnkuY29tL21vY2FoYmlnLzQzNDA1MS1yb2FkLW1pc3QtZGFyay1uaWdodC1yYWluLW5hdHVyZS5qcGcnKVwiXG4gICAgICBjYXNlICdQWVRIT04nOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzQ3NHgvNWIvZGYvOTMvNWJkZjkzN2ZiYzkxNzQzNDFjZTU5YzcyYmU0MjBkYjYuanBnJylcIlxuICAgICAgY2FzZSAnRlVMTFNUQUNLJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2ltYWdlcy13aXhtcC1lZDMwYTg2YjhjNGNhODg3NzczNTk0YzIud2l4bXAuY29tL2YvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlL2RkOWh4dWYtZWEyNzU1OTEtZDMyOC00MzAyLWJjNzQtNTQxNTFjZGUwY2Q0LnBuZy92MS9maWxsL3dfMTYwMCxoXzY4NixxXzgwLHN0cnAvdGhlX2FjYWRlbXlfX19yb29mdG9wX19fYmxhY2tvdXRfYnlfdGFtYWdvY2hpa3VuX2RkOWh4dWYtZnVsbHZpZXcuanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbWhsYVdkb2RDSTZJanc5TmpnMklpd2ljR0YwYUNJNklsd3ZabHd2TkRCallXSTRORFV0T0Rjek9DMDBPV015TFdGbFpqZ3RNalUzTnpCbE5EQTFaV0ZsWEM5a1pEbG9lSFZtTFdWaE1qYzFOVGt4TFdRek1qZ3RORE13TWkxaVl6YzBMVFUwTVRVeFkyUmxNR05rTkM1d2JtY2lMQ0ozYVdSMGFDSTZJanc5TVRZd01DSjlYVjBzSW1GMVpDSTZXeUoxY200NmMyVnlkbWxqWlRwcGJXRm5aUzV2Y0dWeVlYUnBiMjV6SWwxOS5STjJHa2JOcjhqVXhLSmtpTWlaWW9kWXRVbnJtMGRXOXhIaS1BNk5aZldrJylcIlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaG92ZXIgPSAoY29sb3IsIHRleHQpID0+IHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHNldFRpbnQoeyBjb2xvciwgb3BhY2l0eTogJzAuNCcgfSlcbiAgICAgIHNldEhvdmVyZWRJdGVtKHRleHQpXG4gICAgfVxuICB9XG4gIGNvbnN0IGhvdmVyTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0VGludCh7IGNvbG9yOiAnJywgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICBzZXRIb3ZlcmVkSXRlbSgnJyk7XG4gIH07XG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogZ2V0QmFja2dyb3VuZEltYWdlKCksXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuN3NcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cbiAgICAgIDxCb3hcbiAgICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD1cIjFcIlxuICAgICAgICBiZz17dGludC5jb2xvcn1cbiAgICAgICAgb3BhY2l0eT17dGludC5hY3RpdmUgPyAnMC40JyA6ICcwJ31cbiAgICAgICAgdHJhbnNpdGlvbj1cIm9wYWNpdHkgMC43c1wiXG4gICAgICAgIC8vIGJyaWdodG5lc3M9XCIxMDAlXCJcbiAgICAgICAgLy8gZmlsdGVyPVwiYXV0b1wiXG4gICAgICA+PC9Cb3g+XG4gICAgICA8UHJvamVjdENhdGVnb3JpZXNcbiAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgb25DYXRlZ29yeUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfVxuICAgICAgLz5cbiAgICAgIDxWU3RhY2sgYWxpZ249XCJmbGV4LWVuZFwiIGZsZXhHcm93PXsxfSBwdD1cIjVyZW1cIiBwcj1cIjhyZW1cIiB6SW5kZXg9XCIyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlua0l0ZW1cbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuaHJlZn1cbiAgICAgICAgICAgIHRleHQ9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjb2xvcj17cHJvamVjdC5jb2xvcn1cbiAgICAgICAgICAgIG9uSG92ZXI9e2hvdmVyfVxuICAgICAgICAgICAgb25Ib3ZlckxlYXZlPXtob3ZlckxlYXZlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb2plY3RzIiwiRmxleCIsIkJveCIsIlZTdGFjayIsIkxpbmsiLCJDaGFrcmFMaW5rIiwibW90aW9uIiwiUHJvamVjdENhdGVnb3JpZXMiLCJNb3Rpb25DaGFrcmFMaW5rIiwiUHJvamVjdFBhZ2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsImhvdmVyZWRJdGVtIiwic2V0SG92ZXJlZEl0ZW0iLCJ0aW50Iiwic2V0VGludCIsImNvbG9yIiwiYWN0aXZlIiwiTGlua0l0ZW0iLCJwYXRoIiwidGFyZ2V0IiwiaHJlZiIsIm9uSG92ZXIiLCJvbkhvdmVyTGVhdmUiLCJ0ZXh0IiwicHJvcHMiLCJpc0hvdmVyZWQiLCJhcyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN4Iiwib3BhY2l0eSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIndoaXRlU3BhY2UiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwiZmlsdGVyIiwiV2Via2l0VGV4dFN0cm9rZSIsIldlYmtpdFRleHRTdHJva2VDb2xvciIsIl9ob3ZlciIsInRleHRTaGFkb3ciLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsImdldEJhY2tncm91bmRJbWFnZSIsImhvdmVyIiwiaG92ZXJMZWF2ZSIsImJhY2tncm91bmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsInciLCJoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiZyIsIm9uQ2F0ZWdvcnlDbGljayIsImFsaWduIiwiZmxleEdyb3ciLCJwdCIsInByIiwibWFwIiwiaW5kZXgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/projects */ \"./utilities/projects.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCategories */ \"./components/ProjectCategories.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MotionChakraLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link);\n_c = MotionChakraLink;\nfunction ProjectPage() {\n    _s();\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WEB\");\n    const [tint, setTint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        color: \"\",\n        opacity: \"0\"\n    });\n    const projectStyle = {\n        opacity: \"1\",\n        fontFamily: \"Ailerons\",\n        fontSize: \"9rem\",\n        whiteSpace: \"nowrap\",\n        textAlign: \"right\",\n        transition: \"color 0.7s\",\n        // textShadow: `0px 0px 8px ${tint.color}`,\n        transitionDuration: \"0.4s\",\n        transitionDelay: \"0.4s\",\n        filter: \"brightness(150%)\"\n    };\n    const linkVariants = {\n        hover: {\n            color: tint.color\n        }\n    };\n    const LinkItem = (param)=>{\n        let { path , target , href , onHover , onHoverLeave , color , text , ...props } = param;\n        const active = path === href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionChakraLink, {\n            as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n            onMouseEnter: ()=>onHover(color),\n            // onMouseLeave={onHoverLeave}\n            href: href,\n            target: target,\n            whileHover: \"hover\",\n            variants: linkVariants,\n            sx: {\n                color: \"transparent\",\n                WebkitTextStroke: \"2px\",\n                WebkitTextStrokeColor: color,\n                zIndex: 5\n            },\n            style: projectStyle,\n            ...props,\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    };\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    const filteredProjects = _utilities_projects__WEBPACK_IMPORTED_MODULE_2__.projects.filter((project)=>project.category === selectedCategory);\n    const getBackgroundImage = ()=>{\n        switch(selectedCategory){\n            case \"WEB\":\n                return \"url('https://i.pinimg.com/originals/90/09/ec/9009ecc79e92b8ba207b43c7e56bfb41.gif')\";\n            case \"C++\":\n                return \"url('https://rare-gallery.com/mocahbig/434051-road-mist-dark-night-rain-nature.jpg')\";\n            case \"PYTHON\":\n                return \"url('https://i.pinimg.com/474x/5b/df/93/5bdf937fbc9174341ce59c72be420db6.jpg')\";\n            case \"FULLSTACK\":\n                return \"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40cab845-8738-49c2-aef8-25770e405eae/dd9hxuf-ea275591-d328-4302-bc74-54151cde0cd4.png/v1/fill/w_1600,h_686,q_80,strp/the_academy___rooftop___blackout_by_tamagochikun_dd9hxuf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlXC9kZDloeHVmLWVhMjc1NTkxLWQzMjgtNDMwMi1iYzc0LTU0MTUxY2RlMGNkNC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RN2GkbNr8jUxKJkiMiZYodYtUnrm0dW9xHi-A6NZfWk')\";\n            default:\n                return \"\";\n        }\n    };\n    const hover = (color)=>{\n        if (color) {\n            setTimeout(()=>{\n                setTint({\n                    color,\n                    opacity: \"0.4\"\n                });\n            }, 500);\n        }\n    };\n    const hoverLeave = ()=>{\n        setTint((prevTint)=>({\n                ...prevTint,\n                opacity: \"0\",\n                color: \"\"\n            }));\n    };\n    const backgroundStyle = {\n        backgroundImage: getBackgroundImage(),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        minHeight: \"100vh\",\n        width: \"100vw\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                w: \"100vw\",\n                h: \"100vh\",\n                position: \"absolute\",\n                zIndex: \"1\",\n                bg: tint.color,\n                opacity: tint.opacity,\n                transition: \"opacity 1s\",\n                brightness: \"100%\",\n                filter: \"auto\"\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tintColor: tint.color\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCategories__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                selectedCategory: selectedCategory,\n                onCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                align: \"flex-end\",\n                flexGrow: 1,\n                pt: \"5rem\",\n                pr: \"8rem\",\n                zIndex: \"2\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                        href: project.href,\n                        text: project.name,\n                        color: project.color,\n                        onHover: hover,\n                        onHoverLeave: hoverLeave\n                    }, index, false, {\n                        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sydneydavid/Projects/my_portfolio/pages/projectPage.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectPage, \"W4Rit68T5d19Eb/lUTC7ivTia6o=\");\n_c1 = ProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"MotionChakraLink\");\n$RefreshReg$(_c1, \"ProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9DLElBQUc7Z0JBQU8xQixRQUFPOzBCQUM5REksaUJBQWlCdUIsSUFBSSxDQUFDdEIsU0FBU3VCLHNCQUM5Qiw4REFBQzVDO3dCQUNDRyxNQUFNa0IsUUFBUWxCO3dCQUNkRyxNQUFNZSxRQUFRd0I7d0JBRWQxRCxPQUFPa0MsUUFBUWxDO3dCQUNmaUIsU0FBU0w7d0JBQ1RNLGNBQWNtQjt1QkFIVG9COzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBaEl3QjlEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RQYWdlLmpzP2UwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uL3V0aWxpdGllcy9wcm9qZWN0cydcbmltcG9ydCB7IEZsZXgsIEJveCwgVlN0YWNrLCBMaW5rIGFzIENoYWtyYUxpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBQcm9qZWN0Q2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RDYXRlZ29yaWVzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcblxuY29uc3QgTW90aW9uQ2hha3JhTGluayA9IG1vdGlvbihDaGFrcmFMaW5rKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UGFnZSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJ1dFQicpXG4gIGNvbnN0IFt0aW50LCBzZXRUaW50XSA9IHVzZVN0YXRlKHsgY29sb3I6IFwiXCIsIG9wYWNpdHk6ICcwJyB9KVxuXG4gIGNvbnN0IHByb2plY3RTdHlsZSA9IHtcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZm9udEZhbWlseTogJ0FpbGVyb25zJyxcbiAgICBmb250U2l6ZTogJzlyZW0nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC43cycsXG4gICAgLy8gdGV4dFNoYWRvdzogYDBweCAwcHggOHB4ICR7dGludC5jb2xvcn1gLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICAgIHRyYW5zaXRpb25EZWxheTogJzAuNHMnLFxuICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoMTUwJSknLFxuICB9XG5cbiAgY29uc3QgbGlua1ZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7XG4gICAgICBjb2xvcjogdGludC5jb2xvclxuICAgIH1cbiAgfVxuICBjb25zdCBMaW5rSXRlbSA9ICh7IHBhdGgsIHRhcmdldCwgaHJlZiwgb25Ib3Zlciwgb25Ib3ZlckxlYXZlLCBjb2xvciwgdGV4dCwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcblxuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uQ2hha3JhTGlua1xuICAgICAgICBhcz17TGlua31cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBvbkhvdmVyKGNvbG9yKX1cbiAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXtvbkhvdmVyTGVhdmV9XG4gICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICB3aGlsZUhvdmVyPVwiaG92ZXJcIlxuICAgICAgICB2YXJpYW50cz17bGlua1ZhcmlhbnRzfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgV2Via2l0VGV4dFN0cm9rZTogJzJweCcsXG4gICAgICAgICAgV2Via2l0VGV4dFN0cm9rZUNvbG9yOiBjb2xvcixcbiAgICAgICAgICB6SW5kZXg6IDUsXG4gICAgICAgICAgLy8gX2hvdmVyOiB7IGNvbG9yOiBjb2xvciB9XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXtwcm9qZWN0U3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L01vdGlvbkNoYWtyYUxpbms+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDbGljayA9IGNhdGVnb3J5ID0+IHtcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KVxuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihcbiAgICBwcm9qZWN0ID0+IHByb2plY3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgKVxuXG4gIGNvbnN0IGdldEJhY2tncm91bmRJbWFnZSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgJ1dFQic6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzkwLzA5L2VjLzkwMDllY2M3OWU5MmI4YmEyMDdiNDNjN2U1NmJmYjQxLmdpZicpXCJcbiAgICAgIGNhc2UgJ0MrKyc6XG4gICAgICAgIHJldHVybiBcInVybCgnaHR0cHM6Ly9yYXJlLWdhbGxlcnkuY29tL21vY2FoYmlnLzQzNDA1MS1yb2FkLW1pc3QtZGFyay1uaWdodC1yYWluLW5hdHVyZS5qcGcnKVwiXG4gICAgICBjYXNlICdQWVRIT04nOlxuICAgICAgICByZXR1cm4gXCJ1cmwoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzQ3NHgvNWIvZGYvOTMvNWJkZjkzN2ZiYzkxNzQzNDFjZTU5YzcyYmU0MjBkYjYuanBnJylcIlxuICAgICAgY2FzZSAnRlVMTFNUQUNLJzpcbiAgICAgICAgcmV0dXJuIFwidXJsKCdodHRwczovL2ltYWdlcy13aXhtcC1lZDMwYTg2YjhjNGNhODg3NzczNTk0YzIud2l4bXAuY29tL2YvNDBjYWI4NDUtODczOC00OWMyLWFlZjgtMjU3NzBlNDA1ZWFlL2RkOWh4dWYtZWEyNzU1OTEtZDMyOC00MzAyLWJjNzQtNTQxNTFjZGUwY2Q0LnBuZy92MS9maWxsL3dfMTYwMCxoXzY4NixxXzgwLHN0cnAvdGhlX2FjYWRlbXlfX19yb29mdG9wX19fYmxhY2tvdXRfYnlfdGFtYWdvY2hpa3VuX2RkOWh4dWYtZnVsbHZpZXcuanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbWhsYVdkb2RDSTZJanc5TmpnMklpd2ljR0YwYUNJNklsd3ZabHd2TkRCallXSTRORFV0T0Rjek9DMDBPV015TFdGbFpqZ3RNalUzTnpCbE5EQTFaV0ZsWEM5a1pEbG9lSFZtTFdWaE1qYzFOVGt4TFdRek1qZ3RORE13TWkxaVl6YzBMVFUwTVRVeFkyUmxNR05rTkM1d2JtY2lMQ0ozYVdSMGFDSTZJanc5TVRZd01DSjlYVjBzSW1GMVpDSTZXeUoxY200NmMyVnlkbWxqWlRwcGJXRm5aUzV2Y0dWeVlYUnBiMjV6SWwxOS5STjJHa2JOcjhqVXhLSmtpTWlaWW9kWXRVbnJtMGRXOXhIaS1BNk5aZldrJylcIlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaG92ZXIgPSBjb2xvciA9PiB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VGludCh7IGNvbG9yLCBvcGFjaXR5OiAnMC40JyB9KVxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhvdmVyTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0VGludChwcmV2VGludCA9PiAoe1xuICAgICAgLi4ucHJldlRpbnQsXG4gICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICBjb2xvcjogJydcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGdldEJhY2tncm91bmRJbWFnZSgpLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIHdpZHRoOiAnMTAwdncnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4IHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9PlxuICAgICAgPEJveFxuICAgICAgICB3PVwiMTAwdndcIlxuICAgICAgICBoPVwiMTAwdmhcIlxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgekluZGV4PVwiMVwiXG4gICAgICAgIGJnPXt0aW50LmNvbG9yfVxuICAgICAgICBvcGFjaXR5PXt0aW50Lm9wYWNpdHl9XG4gICAgICAgIHRyYW5zaXRpb249XCJvcGFjaXR5IDFzXCJcbiAgICAgICAgYnJpZ2h0bmVzcz1cIjEwMCVcIlxuICAgICAgICBmaWx0ZXI9XCJhdXRvXCJcbiAgICAgID48L0JveD5cbiAgICAgIDxOYXZiYXIgdGludENvbG9yPXt0aW50LmNvbG9yfSAvPlxuICAgICAgPFByb2plY3RDYXRlZ29yaWVzXG4gICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk9e3NlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgIG9uQ2F0ZWdvcnlDbGljaz17aGFuZGxlQ2F0ZWdvcnlDbGlja31cbiAgICAgIC8+XG4gICAgICA8VlN0YWNrIGFsaWduPVwiZmxleC1lbmRcIiBmbGV4R3Jvdz17MX0gcHQ9XCI1cmVtXCIgcHI9XCI4cmVtXCIgekluZGV4PVwiMlwiPlxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICBocmVmPXtwcm9qZWN0LmhyZWZ9XG4gICAgICAgICAgICB0ZXh0PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY29sb3I9e3Byb2plY3QuY29sb3J9XG4gICAgICAgICAgICBvbkhvdmVyPXtob3Zlcn1cbiAgICAgICAgICAgIG9uSG92ZXJMZWF2ZT17aG92ZXJMZWF2ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvRmxleD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsIkZsZXgiLCJCb3giLCJWU3RhY2siLCJMaW5rIiwiQ2hha3JhTGluayIsIm1vdGlvbiIsIlByb2plY3RDYXRlZ29yaWVzIiwiTmF2YmFyIiwiTW90aW9uQ2hha3JhTGluayIsIlByb2plY3RQYWdlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJ0aW50Iiwic2V0VGludCIsImNvbG9yIiwib3BhY2l0eSIsInByb2plY3RTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIndoaXRlU3BhY2UiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmlsdGVyIiwibGlua1ZhcmlhbnRzIiwiaG92ZXIiLCJMaW5rSXRlbSIsInBhdGgiLCJ0YXJnZXQiLCJocmVmIiwib25Ib3ZlciIsIm9uSG92ZXJMZWF2ZSIsInRleHQiLCJwcm9wcyIsImFjdGl2ZSIsImFzIiwib25Nb3VzZUVudGVyIiwid2hpbGVIb3ZlciIsInZhcmlhbnRzIiwic3giLCJXZWJraXRUZXh0U3Ryb2tlIiwiV2Via2l0VGV4dFN0cm9rZUNvbG9yIiwiekluZGV4Iiwic3R5bGUiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiY2F0ZWdvcnkiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsImdldEJhY2tncm91bmRJbWFnZSIsInNldFRpbWVvdXQiLCJob3ZlckxlYXZlIiwicHJldlRpbnQiLCJiYWNrZ3JvdW5kU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsIndpZHRoIiwidyIsImgiLCJwb3NpdGlvbiIsImJnIiwiYnJpZ2h0bmVzcyIsInRpbnRDb2xvciIsIm9uQ2F0ZWdvcnlDbGljayIsImFsaWduIiwiZmxleEdyb3ciLCJwdCIsInByIiwibWFwIiwiaW5kZXgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projectPage.js\n"));

/***/ })

});
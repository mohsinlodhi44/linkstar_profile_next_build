exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 2587:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "ContentContainer_contentContainer__dETzV",
	"style_2": "ContentContainer_style_2__clS8N",
	"style_1": "ContentContainer_style_1__4R6vG"
};


/***/ }),

/***/ 6693:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionHead": "SectionHead_sectionHead__1jaML",
	"sectionName": "SectionHead_sectionName__F0Fd3",
	"sectionText": "SectionHead_sectionText__6Q9Xj",
	"btnActionBox": "SectionHead_btnActionBox__Abxmf",
	"btnAction": "SectionHead_btnAction__hfnr8",
	"controlBar": "SectionHead_controlBar__9jw07",
	"svgIcons": "SectionHead_svgIcons__uR_bT",
	"seperator": "SectionHead_seperator__jMasx",
	"addBtn_style": "SectionHead_addBtn_style__5rWLA",
	"manage-access-btn": "SectionHead_manage-access-btn__seJ_3",
	"manage-btn-float": "SectionHead_manage-btn-float__yRv8_"
};


/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContentContainer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2587);
/* harmony import */ var _ContentContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContentContainer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);





function ContentContainer(props) {
    const { children , className  } = props;
    const isVisible = props?.visible == 1;
    const themeName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.theme.style_class);
    // console.log(themeName, "theme name")
    let sty = {};
    if (!isVisible) sty = {
        backgroundColor: "lightgray"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: `${(_ContentContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentContainer)} ${themeName} ${(_ContentContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default())[props.variation]} ${className}`,
        style: sty,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentContainer);


/***/ }),

/***/ 2332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditText_EditText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8399);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3360);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5093);
/* harmony import */ var _SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6693);
/* harmony import */ var _SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditText_EditText__WEBPACK_IMPORTED_MODULE_2__]);
_EditText_EditText__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// import "./SectionHead.css"
function SectionHead({ mainTitle , sectionSlug , sectionName , sectionIcon , title , placeHolderTitle , draftText , characterLimit , id  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `section-head position-relative ${(_SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionHead)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        marginBottom: "0px"
                    },
                    className: "d-flex justify-content-between flex-nowrap",
                    children: sectionSlug != "custom" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: (_SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionName),
                        children: [
                            sectionIcon,
                            sectionName
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        tag: "h2",
                        text: mainTitle == "" ? "Custom" : mainTitle,
                        placeholderText: "Custom",
                        className: (_SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionName),
                        characterLimit: 24,
                        draftText: (eve)=>(0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, "custom_sections", "main_title", id)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    tag: "h4",
                    text: title,
                    placeholderText: placeHolderTitle,
                    className: (_SectionHead_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionText),
                    characterLimit: characterLimit,
                    draftText: (eve)=>(0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, draftText, "title", id)
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    deleteSection: _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__/* .deleteSection */ .F$,
    toggleSectionVisibility: _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__/* .toggleSectionVisibility */ .QV,
    cloneSection: _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__/* .cloneSection */ .kE,
    switchSectionPositions: _Redux_Actions__WEBPACK_IMPORTED_MODULE_5__/* .switchSectionPositions */ .hB
})(SectionHead));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
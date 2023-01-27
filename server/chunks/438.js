exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 468:
/***/ ((module) => {

// Exports
module.exports = {
	"cardFooter": "CouponFooter_cardFooter__Gw0ln",
	"btnPrimary": "CouponFooter_btnPrimary__taRBD"
};


/***/ }),

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3360);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Components_Sections_Coupon_Cards_CardFooter_CouponFooter_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(468);
/* harmony import */ var Components_Sections_Coupon_Cards_CardFooter_CouponFooter_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Components_Sections_Coupon_Cards_CardFooter_CouponFooter_module_css__WEBPACK_IMPORTED_MODULE_7__);



// import ReactHtmlParser from "react-html-parser";





function CouponFooter(props) {
    const copyToClipboard = ()=>{
        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .notifySuccess */ .t5)("Copied Promo Code");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {
            className: `${props.className} ${(Components_Sections_Coupon_Cards_CardFooter_CouponFooter_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardFooter)}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__.CopyToClipboard, {
                text: props.bodyTitle.replace(/<\/?[^>]+(>|$)/g, ""),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    className: `${(Components_Sections_Coupon_Cards_CardFooter_CouponFooter_module_css__WEBPACK_IMPORTED_MODULE_7___default().btnPrimary)} ${props.classNameButton}`,
                    onClick: ()=>{
                        copyToClipboard();
                        mixpanel_browser__WEBPACK_IMPORTED_MODULE_5___default().track(`Button Pressed - Promo Footer - Copy Code`);
                    },
                    variant: " ",
                    children: ReactHtmlParser(props.buttonTitle)
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponFooter);


/***/ })

};
;
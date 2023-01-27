"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 2188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5875);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2874);
/* harmony import */ var _CardFooter_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(795);
/* harmony import */ var _CardFooter_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CardFooter_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__]);
Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CardFooter(props) {
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [buttonTitle, setbuttonTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [buttonUrl, setbuttonUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // const [buttonVisibility, setbuttonVisibility] = useState(props?.buttonVisibility ?? 0);
    const [buttonVisible, setbuttonVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [button_title_input, setButtonTitleInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [button_url_input, setButtonUrlInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.root.subDomain);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.root.isMobile);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const handleUpdateBtn = ()=>{
        (0,Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_5__/* .updateBtn */ .L$)(id, button_title_input, button_url_input, props?.section, props?.reduxDispatch);
    };
    const handleToggleButton = ()=>{
        (0,Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_5__/* .toggleBtn */ .Y4)(id, props?.section, props?.reduxDispatch);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            setbuttonTitle(props?.item?.button_title ?? "");
            setbuttonUrl(props?.item?.button_url ?? "");
            setButtonTitleInput(props?.item?.button_title ?? "");
            setButtonUrlInput(props?.item?.button_url ?? "");
            setbuttonVisible(props?.item?.button_visible);
        }
    }, [
        props?.item
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            show && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__/* .ButtonLinkModal */ .RQ, {
                buttonVisible: buttonVisible,
                button_title_input: button_title_input,
                button_url_input: button_url_input,
                setButtonTitleInput: setButtonTitleInput,
                setButtonUrlInput: setButtonUrlInput,
                handleClose: handleClose,
                handleToggleButton: handleToggleButton,
                handleUpdateBtn: handleUpdateBtn
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Footer, {
                className: `${(_CardFooter_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardFooterArrow)} ${props.className}`,
                children: [
                    buttonVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__/* .ButtonClickableArrow */ .U7, {
                        button_url_input: button_url_input,
                        buttonTitle: buttonTitle,
                        section: props?.section
                    }) : null,
                    !subDomain ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_6__/* .ButtonToggleLink */ .z4, {
                        buttonVisible: buttonVisible,
                        handleShow: handleShow
                    }) : null
                ]
            })
        ]
    });
}
CardFooter.prototype = {
    text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
CardFooter.defaultProps = {
    text: "Join"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
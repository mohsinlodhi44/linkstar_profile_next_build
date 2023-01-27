"use strict";
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 7316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LabelInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var _assets_images_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import ReactHtmlParser from 'react-html-parser'


function LabelInput(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        className: `mb-3 ${props.classNameGroup}`,
        controlId: "formBasicEmail",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                className: `mb-2 ${props.classNameLabel}`,
                children: props.label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
                className: props.classNameGroup,
                hasValidation: true,
                children: [
                    props.autoComplete ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                        type: props.type,
                        placeholder: props.placeholder,
                        value: props.value,
                        name: props.name,
                        autoComplete: props?.autoComplete,
                        hidden: true,
                        className: props?.className
                    }) : null,
                    props.as ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                        placeholder: props.placeholder,
                        value: props.value,
                        name: props.name,
                        autoComplete: props?.autoComplete ?? "on",
                        onChange: props.onChange,
                        onKeyUp: props.onKeyUp,
                        onKeyPress: props.onKeyPress,
                        onBlur: props?.onBlur,
                        required: props.require,
                        isValid: props.isValid,
                        isInvalid: props.isInvalid,
                        className: props?.className,
                        as: props?.as
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                        type: props.type,
                        placeholder: props.placeholder,
                        value: props.value,
                        name: props.name,
                        autoComplete: props?.autoComplete ?? "on",
                        onChange: props.onChange,
                        onKeyUp: props.onKeyUp,
                        onKeyPress: props.onKeyPress,
                        onBlur: props?.onBlur,
                        required: props.require,
                        isValid: props.isValid,
                        isInvalid: props.isInvalid,
                        className: props?.className
                    }),
                    props?.hasGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.InputGroup.Text, {
                        className: props?.groupClassName,
                        id: "inputGroupPrepend",
                        children: props?.groupText
                    }),
                    props.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Text, {
                        className: "d-flex w-100 text-muted",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(_assets_images_index__WEBPACK_IMPORTED_MODULE_4__/* .iconCheckMarkCircle */ .Zn),
                                    alt: "icon"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "ps-1",
                                    children: props.message
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control.Feedback, {
                        type: "invalid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: props.errorMsg
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
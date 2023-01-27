"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 7189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3751);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5093);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3360);








// import "./card-edit-block.css";
function CardDeleteIconBlock(props) {
    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const deleteMe = ()=>{
        props?.deleteGenericItem({
            id: props?.id,
            section: props?.section
        }, dispatch, props?.fetchUserTheme).then((res)=>{
            if (res?.success) {
                // alert("item removed right");
                // dispatch({ type: "VIDEOS_SECTION_UPDATE" });
                dispatch({
                    type: props?.reduxDispatch
                });
            } else (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err?.message);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card-edit-block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "option-box edit-option",
            style: {
                cursor: "pointer"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrash,
                className: "text-danger",
                onClick: ()=>{
                    if (!disable) deleteMe();
                    setDisable(true);
                }
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(Constants_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapStateToProps */ .K, {
    deleteGenericItem: Redux_Actions__WEBPACK_IMPORTED_MODULE_3__/* .deleteGenericItem */ .DQ,
    fetchUserTheme: Redux_Actions__WEBPACK_IMPORTED_MODULE_3__/* .fetchUserTheme */ .W9
})(CardDeleteIconBlock));


/***/ })

};
;
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 4965:
/***/ ((module) => {

// Exports
module.exports = {
	"statsCard": "GenericCard_statsCard__BZ4Bt",
	"cardBody": "GenericCard_cardBody__MNGtu",
	"editable-content-box": "GenericCard_editable-content-box__3PEZO",
	"cardText": "GenericCard_cardText__BlIl9",
	"style_3": "GenericCard_style_3__tLXuK",
	"guideMsg": "GenericCard_guideMsg__huiNj",
	"cardTitle": "GenericCard_cardTitle__5Eu0p"
};


/***/ }),

/***/ 5579:
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3360);
/* harmony import */ var Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4965);
/* harmony import */ var Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7316);
/* harmony import */ var Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8399);
/* harmony import */ var Components_ThemeCard_Block_CardDeleteIconBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7189);
/* harmony import */ var Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1596);
/* harmony import */ var Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6860);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5875);
/* harmony import */ var Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_12__]);
([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function GenericCard(props) {
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const placeholdertitle = props.card_title;
    const placeholdervalue = props.card_value;
    const placeholderdetail = props.card_detail;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdervalue);
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const variation = props.variation ?? "style_1";
    const deleteMe = ()=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_11__/* .deleteItem */ .wz)(id, props?.section, props?.reduxDispatch);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            setTitle(props.item?.title ?? placeholdertitle);
            setValue(props.item?.value ?? placeholdervalue);
        }
    }, [
        props.item
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
            className: [
                (Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default())[variation],
                (Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default().statsCard)
            ],
            children: [
                !subDomain ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_10__/* .DeleteItemButton */ .dA, {
                        deleteMe: deleteMe
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                    className: [
                        "p-0",
                        (Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default().cardBody)
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            onBlur: (e)=>{
                                (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .contentUpdateHandler */ .tG)();
                            },
                            tag: "h4",
                            text: value,
                            placeholderText: placeholdervalue,
                            className: [
                                (Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default().cardTitle)
                            ],
                            characterLimit: 8,
                            draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, props.draft, "value", props?.data?.id)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            onBlur: (e)=>{
                                (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .contentUpdateHandler */ .tG)();
                            },
                            tag: "p",
                            text: title,
                            placeholderText: placeholdertitle,
                            className: [
                                (Components_Sections_Highlights_Cards_GenericCard_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_13___default().cardText)
                            ],
                            characterLimit: props.titleLimit ?? 48,
                            draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, props.draft, "title", props?.item?.id)
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3751);
/* harmony import */ var Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8951);
/* harmony import */ var Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6464);
/* harmony import */ var Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2332);
/* harmony import */ var Components_Container_SectionBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1054);
/* harmony import */ var Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5579);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5875);
/* harmony import */ var Constants_Sections_Api_Highlights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__, Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_11__]);
([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__, Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import "./HighlightsSection.css";


// import ReactHtmlParser from "react-html-parser";





// Cards




function HighlightsSection(props) {
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const placeholdertitle = subDomain ? "" : "Have some impressive numbers or achievements to showcase? Add them to your Highlights.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const styleClass = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.theme.style_class);
    const highlights_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.highlights_section_updated);
    const item_props = {
        // item: item, // will be passed separately
        card_title: "Projects",
        card_value: "100+",
        card_detail: "Write a short description/review about the book and let people know why they should give it a read",
        // key: item.id,// will be passed separately
        draft: "highlights_items",
        section: props?.slug,
        reduxDispatch: "HIGHLIGHTS_SECTION_UPDATE",
        buttonText: "Listen Now",
        titleLimit: 50,
        textLimit: 50
    };
    const STYLES = {
        "style_1": {
            component: Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            props: item_props
        },
        "style_2": {
            component: Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            props: item_props
        },
        "default": {
            component: Components_Sections_Highlights_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            props: item_props
        }
    };
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    // const highlights_data = props.section_data;
    const [highlightsData, setHighlightsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.section_data);
    const rowAddedClasses = variation === "style_3" && isMobile ? "flex-wrap" : items?.length > 1 ? "multi-child-card flex-nowrap w-100" : "";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setId(highlightsData?.id);
        setTitle(highlightsData?.title ?? placeholdertitle);
        setItems(highlightsData?.items);
        setVariation(highlightsData?.variation?.slug);
        isFirstRun.current = false;
    }, [
        highlights_section_updated
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        className: "theme-highlights-box",
        id: "highlights",
        style: {
            borderRadius: "20px"
        },
        visible: props?.section_data?.visible,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            display: "section"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    sectionName: "Highlights",
                    title: title,
                    placeHolderTitle: placeholdertitle,
                    draftText: "user_sections",
                    id: id,
                    addFunction: Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_12__/* .addItem */ .jX,
                    characterLimit: 120,
                    sectionSlug: props.slug,
                    dispatchType: "HIGHLIGHTS_SECTION_UPDATE",
                    visible: props?.section_data?.visible == 1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionBody__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    scrollerX: items?.length > 1 ? true : false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: `wrapper-box flex-nowrap ${variation} ${rowAddedClasses}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_11__/* .RenderItems */ .zp, {
                            items: items,
                            variation: variation,
                            STYLES: STYLES
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HighlightsSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export fetchHighlightsSection */
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5093);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3360);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3751);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__);





const dispatch = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.dispatch;
const globalState = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.getState();
const subDomain = globalState?.root?.subDomain;
const fetchHighlightsSection = (data)=>{
    // mixpanel.track(`API hit - fetchHighlightsSection`);
    const subDomain = store?.getState()?.root?.subDomain;
    return getRequest(subDomain ? endPoints?.getUserHighlightsSection : endPoints?.getHighlightsSection, data); //returns a promise
};


/***/ })

};
;
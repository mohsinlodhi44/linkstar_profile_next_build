"use strict";
exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 2439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var Components_Sections_Project_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8890);
/* harmony import */ var Components_Sections_Project_Cards_BasicLongCard_BasicLongCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4998);
/* harmony import */ var assets_images_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1562);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5875);
/* harmony import */ var Constants_Sections_Api_Education__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__, Components_Sections_Project_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Project_Cards_BasicLongCard_BasicLongCard__WEBPACK_IMPORTED_MODULE_11__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_13__]);
([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__, Components_Sections_Project_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Project_Cards_BasicLongCard_BasicLongCard__WEBPACK_IMPORTED_MODULE_11__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import "./EducationSection.css";


// import ReactHtmlParser from "react-html-parser";





// Cards






function ProjectSection(props) {
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const placeholdertitle = subDomain ? "" : "Share your favourite Project with your audience";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const styleClass = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.theme.style_class);
    const education_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.education_section_updated);
    const item_props = {
        // item: item, // will be passed separately
        card_title: "Education Title",
        card_detail: "Write a short description/review about the book and let people know why they should give it a read",
        // key: item.id,// will be passed separately
        draft: "education_items",
        section: props?.slug,
        reduxDispatch: "EDUCATION_SECTION_UPDATE",
        buttonText: "Listen Now",
        titleLimit: 50,
        textLimit: 50,
        defaultImg: assets_images_index__WEBPACK_IMPORTED_MODULE_12__/* .book */ .s9
    };
    const STYLES = {
        "style_1": {
            component: Components_Sections_Project_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            props: item_props
        },
        "style_2": {
            component: Components_Sections_Project_Cards_BasicLongCard_BasicLongCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
            props: item_props
        },
        "default": {
            component: Components_Sections_Project_Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            props: item_props
        }
    };
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    // const education_data = props.section_data;
    const [educationData, setEducationData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.section_data);
    const rowAddedClasses = variation === "style_3" && isMobile ? "flex-wrap" : items?.length > 1 ? "multi-child-card flex-nowrap w-100" : "";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (isFirstRun.current == true) {
        setId(educationData?.id);
        setTitle(educationData?.title ?? placeholdertitle);
        setItems(educationData?.items);
        setVariation(educationData?.variation?.slug);
        isFirstRun.current = false;
    // } else {
    //   setLoading(true);
    //   fetchEducationSection().then((res) => {
    //     setLoading(false);
    //     if (res?.data?.section) {
    //       let education_section = res?.data?.section;
    //       setEducationData(education_section);
    //       setId(education_section?.id);
    //       setTitle(education_section?.title ?? placeholdertitle);
    //       setItems(education_section?.items);
    //       setVariation(education_section?.variation?.slug);
    //     } else notifyError(res?.message)
    //   }).catch((err) => {
    //     return notifyError(err.message)
    //   });
    // }
    }, [
        education_section_updated
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        className: "freelancer-project-box theme-project-box",
        id: "education",
        style: {
            borderRadius: "20px"
        },
        visible: props?.section_data?.visible,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            display: "section"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    sectionName: "Education",
                    title: title,
                    placeHolderTitle: placeholdertitle,
                    draftText: "user_sections",
                    id: id,
                    addFunction: Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_14__/* .addItem */ .jX,
                    characterLimit: 120,
                    sectionSlug: props.slug,
                    dispatchType: "EDUCATION_SECTION_UPDATE",
                    visible: props?.section_data?.visible == 1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionBody__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    scrollerX: items?.length > 1 ? true : false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: `wrapper-box ${variation} ${rowAddedClasses}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_13__/* .RenderItems */ .zp, {
                            section_data: educationData,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export fetchEducationSection */
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5093);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3360);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3751);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__);





const dispatch = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.dispatch;
const globalState = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.getState();
const subDomain = globalState?.root?.subDomain;
const fetchEducationSection = (data)=>{
    // mixpanel.track(`API hit - fetchEducationSection`);
    const subDomain = store?.getState()?.root?.subDomain;
    return getRequest(subDomain ? endPoints?.getUserEducationSection : endPoints?.getEducationSection, data); //returns a promise
};


/***/ })

};
;
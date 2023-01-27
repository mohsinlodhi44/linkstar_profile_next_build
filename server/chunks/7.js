exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 6640:
/***/ ((module) => {

// Exports
module.exports = {
	"portfolioCard": "PortfolioCard_portfolioCard__P85Gz",
	"hasNoButton": "PortfolioCard_hasNoButton__Nn0cY",
	"emptyCardMsg": "PortfolioCard_emptyCardMsg__ZmlZZ",
	"textBox": "PortfolioCard_textBox__uCiuE",
	"text": "PortfolioCard_text__98CAy",
	"cardHeader": "PortfolioCard_cardHeader__0aPpk",
	"cardActionBox": "PortfolioCard_cardActionBox__D2wVR",
	"cardText": "PortfolioCard_cardText__vFrMs",
	"deleteIcon": "PortfolioCard_deleteIcon___TMbe",
	"img": "PortfolioCard_img__7Ktge",
	"cardBody": "PortfolioCard_cardBody__CEmzV",
	"iconBox": "PortfolioCard_iconBox__ZtguM"
};


/***/ }),

/***/ 364:
/***/ ((module) => {

// Exports
module.exports = {
	"addGoogleDriveModal": "AddGoogleDriveModal_addGoogleDriveModal__rJROj",
	"modalHeader": "AddGoogleDriveModal_modalHeader__sOgwN",
	"modalTitle": "AddGoogleDriveModal_modalTitle__815pj",
	"closeIcon": "AddGoogleDriveModal_closeIcon__zP9LZ",
	"modalBody": "AddGoogleDriveModal_modalBody__VszLO",
	"formGroup": "AddGoogleDriveModal_formGroup__Nh7J_",
	"formControl": "AddGoogleDriveModal_formControl__xjWrQ",
	"textBox": "AddGoogleDriveModal_textBox__4v1IP",
	"text": "AddGoogleDriveModal_text__RcXHE",
	"modalFooter": "AddGoogleDriveModal_modalFooter__UMRGr",
	"btnPrimary": "AddGoogleDriveModal_btnPrimary__E36Sj"
};


/***/ }),

/***/ 9050:
/***/ ((module) => {

// Exports
module.exports = {
	"cardImageLoaderBox": "CardImageLoader_cardImageLoaderBox__flZEo",
	"loaderBox": "CardImageLoader_loaderBox__AJHAo",
	"loaderImg": "CardImageLoader_loaderImg__KWr_k",
	"loading": "CardImageLoader_loading__6ZuRa",
	"spinner": "CardImageLoader_spinner__ms0Dn"
};


/***/ }),

/***/ 9018:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3360);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7316);
/* harmony import */ var assets_images_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1562);
/* harmony import */ var Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8399);
/* harmony import */ var Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1596);
/* harmony import */ var Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6860);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5875);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_9__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_12__]);
([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_9__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// import CardDeleteIconBlock from "Components/ThemeCard/Block/CardDeleteIconBlock";









function GenericCard(props) {
    const placeholdertitle = props.card_title;
    const placeholderdetail = props.card_detail;
    const [title, setTitle] = useState(placeholdertitle);
    const [detail, setDetail] = useState(placeholderdetail);
    const subDomain = useSelector((state)=>state.root.subDomain);
    const dispatch = useDispatch();
    const [id, setId] = useState(0);
    const [buttonTitle, setbuttonTitle] = useState("");
    const [buttonUrl, setbuttonUrl] = useState("");
    const [buttonVisible, setbuttonVisible] = useState(0);
    const [button_title_input, setButtonTitleInput] = useState("");
    const [button_url_input, setButtonUrlInput] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
    const [show, setShow] = useState(false);
    const [imageToCrop, setImageToCrop] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imageLoader, setImageLoader] = useState(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const handleCroppedImage = (e, croppedImage)=>{
        uploadCroppedImage(croppedImage, setModalOpen, setThumbnailUrl, setImageLoader, id, props?.section);
    };
    const handleUpdateBtn = ()=>{
        if (!validateUrl(button_url_input)) {
            return notifyError("Please Enter Valid Url");
        }
        updateBtn(id, button_title_input, button_url_input, props?.section, props?.reduxDispatch);
    };
    const handleToggleButton = ()=>{
        toggleBtn(id, props?.section, props?.reduxDispatch);
    };
    const handleImageChange = (event)=>{
        cardImageChange(event, setImageToCrop, setModalOpen);
    };
    const deleteMe = (e)=>{
        deleteItem(e, id, props?.section, props?.reduxDispatch);
    };
    useEffect(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            setThumbnailUrl(props?.item?.thumbnail_url ?? props?.imageFour);
            setTitle(props?.item.title ?? placeholdertitle);
            setbuttonTitle(props?.item?.button_title ?? "");
            setbuttonUrl(props?.item?.button_url ?? "");
            setButtonTitleInput(props?.item?.button_title ?? "");
            setButtonUrlInput(props?.item?.button_url ?? "");
            setbuttonVisible(props?.item?.button_visible);
            setDetail(props?.item.detail ?? placeholderdetail);
        }
    }, [
        props.item
    ]);
    const couponChange = (e)=>{
        let html = e.target.innerHTML;
        setTitle(html);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs(Card, {
                className: `${styles.themeGenericCard} ${props.className}`,
                children: [
                    !subDomain ? /*#__PURE__*/ _jsx(_Fragment, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: styles.cardActionBox,
                            children: [
                                /*#__PURE__*/ _jsx(UploadImageBtn, {
                                    classImageChangeIcon: styles.imageChangeIcon,
                                    item: props?.item,
                                    section: props?.section,
                                    imageLoader: imageLoader,
                                    onImageChange: handleImageChange
                                }),
                                /*#__PURE__*/ _jsx(DeleteItemButton, {
                                    classDeleteIcon: styles.deleteIcon,
                                    deleteMe: deleteMe
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ _jsxs(Card.Body, {
                        className: styles.cardBody,
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: styles.imgBox,
                                children: [
                                    imageLoader && /*#__PURE__*/ _jsx(CardImageLoader, {
                                        child: true
                                    }),
                                    /*#__PURE__*/ _jsx(Card.Img, {
                                        className: `img-fluid ${styles.imgCard}`,
                                        src: thumbnailUrl !== "" ? thumbnailUrl : book
                                    })
                                ]
                            }),
                            !subDomain ? /*#__PURE__*/ _jsx(UploadImageBtn, {
                                item: props?.item,
                                section: props?.section,
                                imageLoader: imageLoader,
                                onImageChange: handleImageChange
                            }) : null,
                            /*#__PURE__*/ _jsx(EditText, {
                                onBlur: (e)=>{
                                    couponChange(e);
                                    contentUpdateHandler();
                                },
                                tag: "h4",
                                text: title,
                                placeholderText: placeholdertitle,
                                className: "title card-title h5",
                                characterLimit: props.titleLimit ?? 48,
                                draftText: (eve)=>createDraft(eve, props.draft, "title", props?.item?.id)
                            }),
                            /*#__PURE__*/ _jsx(EditText, {
                                tag: "p",
                                text: detail,
                                placeholderText: placeholderdetail,
                                className: "card-text",
                                characterLimit: props.textLimit ?? 128,
                                draftText: (eve)=>{
                                    createDraft(eve, props.draft, "detail", props?.item?.id);
                                    contentUpdateHandler();
                                }
                            })
                        ]
                    }),
                    show && /*#__PURE__*/ _jsx(ButtonLinkModal, {
                        buttonVisible: buttonVisible,
                        button_title_input: button_title_input,
                        button_url_input: button_url_input,
                        setButtonTitleInput: setButtonTitleInput,
                        setButtonUrlInput: setButtonUrlInput,
                        handleClose: handleClose,
                        handleToggleButton: handleToggleButton,
                        handleUpdateBtn: handleUpdateBtn
                    }),
                    /*#__PURE__*/ _jsxs(Card.Footer, {
                        children: [
                            buttonVisible ? /*#__PURE__*/ _jsx(ButtonClickable, {
                                button_url_input: button_url_input,
                                buttonTitle: buttonTitle,
                                section: props?.section
                            }) : null,
                            !subDomain ? /*#__PURE__*/ _jsx(ButtonToggleLink, {
                                buttonVisible: buttonVisible,
                                handleShow: handleShow
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(CropperModal, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen,
                uploadApi: handleCroppedImage,
                imageToCrop: imageToCrop,
                aspectRatio: 16 / 9,
                section: props?.section,
                circular: props.circular
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GenericCard)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function PortfolioAddCard(props) {
    const cardText = "Add a document by copying the link from your drive folder";
    return /*#__PURE__*/ _jsx("div", {
        className: styles.portfolioAddCard,
        onClick: props.onClick,
        children: cardText
    });
}


/***/ }),

/***/ 3210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PortfolioCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6640);
/* harmony import */ var _PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5875);
/* harmony import */ var Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8399);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3360);
/* harmony import */ var _Modal_AddGoogleDriveModal_AddGoogleDriveModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2160);
/* harmony import */ var _assets_images_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_7__, _Modal_AddGoogleDriveModal_AddGoogleDriveModal__WEBPACK_IMPORTED_MODULE_9__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_2__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_7__, _Modal_AddGoogleDriveModal_AddGoogleDriveModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function PortfolioCard(props) {
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.root.subDomain);
    const sections = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.root.user_theme.sections);
    const defaultImg = props.defaultImg;
    const placeholdertitle = props.card_title;
    const placeholderbuttonurl = props.card_button_url;
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    // const [detail, setDetail] = useState(placeholderdetail);
    const [buttonUrl, setbuttonUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderbuttonurl);
    // const dispatch = useDispatch();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const iconDrive = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7636_43867)"><path d="M14.666 15H19.999L14.666 5H9.33203L14.666 15Z" fill="#FFC107"/><path d="M8.95297 15L6.66797 19H17.501L20.001 15H8.95297Z" fill="#2196F3"/><path d="M9.333 5L4 14.333L6.667 19L11.908 9.828L9.333 5Z" fill="#4CAF50"/></g><defs><clipPath id="clip0_7636_43867"><rect width="16" height="16" fill="white" transform="translate(4 4)"/></clipPath></defs></svg>`;
    const cardText = "Linkstar Page content writing example";
    const deleteMe = (e)=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .deleteItem */ .wz)(e, id, props?.section, props?.reduxDispatch);
    };
    const [addDriveLink, setAddDriveLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handleAddDriveLink(eve) {
        setAddDriveLink(true);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            // setThumbnailUrl(props?.item?.thumbnail_url ?? props?.imageFour);
            setTitle(props?.item.title ?? placeholdertitle);
            // setDetail(props?.item.detail ?? placeholderdetail);
            // setbuttonTitle(props?.item?.button_title ?? "");
            setbuttonUrl(props?.item?.button_url ?? placeholderbuttonurl);
        // setButtonTitleInput(props?.item?.button_title ?? "");
        // setButtonUrlInput(props?.item?.button_url ?? "");
        // setbuttonVisible(props?.item?.button_visible);
        }
    }, [
        props.item
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: `${(_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().portfolioCard)} ${buttonUrl ? "hasButon" : (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().hasNoButton)}`,
                    onClick: (e)=>{
                        window.open(buttonUrl, "_blank");
                    },
                    children: buttonUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Header), {
                                className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardHeader),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().img),
                                        src: buttonUrl && (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_8__/* .getGoogleDriveThumbnail */ .pw)(null, buttonUrl),
                                        alt: "title",
                                        onError: (e)=>e.target.src = _assets_images_index__WEBPACK_IMPORTED_MODULE_10__/* .googleDrivePlaceholder */ .io
                                    }),
                                    !subDomain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardActionBox),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__/* .DeleteItemButton */ .dA, {
                                                classDeleteIcon: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().deleteIcon),
                                                deleteMe: deleteMe
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                                className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardBody),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().iconBox),
                                        onClick: (e)=>handleAddDriveLink(e),
                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(iconDrive)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                tag: "h4",
                                                text: title,
                                                placeholderText: placeholdertitle,
                                                className: `card-title ${(_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardTitle)}`,
                                                characterLimit: props.titleLimit ?? 48,
                                                draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_8__/* .createDraft */ .P2)(eve, props.draft, "title", props?.item?.id)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                tag: "p",
                                                text: buttonUrl,
                                                placeholderText: placeholderbuttonurl,
                                                className: `card-text ${(_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardText)}`,
                                                characterLimit: props.textLimit ?? 128,
                                                draftText: (eve)=>{
                                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_8__/* .createDraft */ .P2)(eve, props.draft, "button_url", props?.item?.id);
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                !subDomain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardActionBox),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__/* .DeleteItemButton */ .dA, {
                                            classDeleteIcon: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().deleteIcon),
                                            deleteMe: deleteMe
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_PortfolioCard_module_css__WEBPACK_IMPORTED_MODULE_11___default().emptyCardMsg),
                                    onClick: (e)=>handleAddDriveLink(e),
                                    children: "Add a document by copying the link from your drive folder"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_AddGoogleDriveModal_AddGoogleDriveModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                cardData: props,
                show: addDriveLink,
                setShow: setAddDriveLink,
                setTitle: setTitle,
                setbuttonUrl: setbuttonUrl,
                createDraft: Constants_Functions__WEBPACK_IMPORTED_MODULE_8__/* .createDraft */ .P2
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6006);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4232);
/* harmony import */ var _Modal_DriveVerificationSuccessModal_DriveVerificationSuccessModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal_DriveVerificationSuccessModal_DriveVerificationSuccessModal__WEBPACK_IMPORTED_MODULE_4__]);
_Modal_DriveVerificationSuccessModal_DriveVerificationSuccessModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function GoogleConnect(props) {
    const { addGoogleDrive  } = props;
    const [verificationSuccess, setVerificationSuccess] = useState(false);
    console.log(verificationSuccess, "modal show google connect");
    const hasLocalGoogleToken = localStorage.getItem("googleToken");
    useLayoutEffect(()=>{
        if (hasLocalGoogleToken) store.dispatch({
            type: "SET_GOOGLE_USER",
            payload: {
                token: hasLocalGoogleToken
            }
        });
    }, []);
    const responseSuccessGoogle = (response)=>{
        console.log(response.accessToken, "google login access token");
        if (response.accessToken) {
            addGoogleDrive(response.accessToken);
            localStorage.setItem("googleToken", response.accessToken);
            setVerificationSuccess(true);
            store.dispatch({
                type: "SET_GOOGLE_USER",
                payload: {
                    token: response.accessToken,
                    info: response.pv
                }
            });
        }
    // console.log(verificationSuccess, "modal show 1")
    };
    const responseFailGoogle = (response)=>{
        console.log(response.accessToken, "google login access token");
        localStorage.removeItem("googleToken");
        // store.dispatch({ type: 'SET_GOOGLE_USER', payload: { token: null, info: null } });
        setVerificationSuccess(false);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.loginBtnWrapper,
                children: /*#__PURE__*/ _jsx(GoogleLogin, {
                    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                    buttonText: "Connect Your Google Drive",
                    onSuccess: responseSuccessGoogle,
                    onFailure: responseFailGoogle,
                    cookiePolicy: "single_host_origin",
                    className: `${props.className} ${styles.googleLoginBtn}`
                })
            }),
            /*#__PURE__*/ _jsx(DriveVerificationSuccessModal, {
                show: verificationSuccess,
                setShow: setVerificationSuccess
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddGoogleDriveModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3262);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var _AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(364);
/* harmony import */ var _AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Constants_Sections_Api_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2300);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_5__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function AddGoogleDriveModal(props) {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { show , setShow , setTitle , setbuttonUrl , cardData  } = props;
    const handleClose = ()=>setShow(false);
    const iconClose = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16.536" height="16.536" viewBox="0 0 16.536 16.536"><g id="Group_1589" data-name="Group 1589" transform="translate(1.768 1.768)">  <line id="Line_46" data-name="Line 46" x2="13" y2="13" fill="none" stroke="#312638" stroke-linecap="round" stroke-width="2.5"/>  <line id="Line_47" data-name="Line 47" x1="13" y2="13" fill="none" stroke="#312638" stroke-linecap="round" stroke-width="2.5"/></g></svg>`;
    const getLinkData = async (eve)=>{
        let title = await (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .getUrlData */ .Gh)(inputRef.current.value);
        if (!(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .isValidUrl */ .jv)(inputRef.current.value, [
            "drive.google.com",
            "docs.google.com"
        ])) {
            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)("Please enter correct link");
            return;
        }
        await setbuttonUrl(inputRef.current.value);
        setTitle(title);
        let button_url = inputRef.current.value;
        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .createDraft */ .P2)(button_url, cardData.draft, "button_url", cardData?.item?.id, true);
        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .createDraft */ .P2)(title, cardData.draft, "title", cardData?.item?.id, true);
        setShow(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
            size: "lg",
            show: show,
            onHide: handleClose,
            className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().addGoogleDriveModal),
            contentClassName: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalContent),
            dialogClassName: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalDialog),
            centered: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                    className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalHeader),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                            className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalTitle),
                            children: "Add Google Drive Document"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                            variant: " ",
                            className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().closeIcon),
                            onClick: handleClose,
                            children: [
                                " ",
                                (0,html_react_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(iconClose),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                    className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalBody),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {
                            className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().formGroup),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {
                                ref: inputRef,
                                type: "text",
                                placeholder: "Add google drive document link",
                                className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().formControl)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().textBox),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().text),
                                children: "Ensure the shared link privacy is set to “Anyone with the link”"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Footer), {
                    className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalFooter),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "primary",
                        onClick: (eve)=>getLinkData(eve),
                        className: (_AddGoogleDriveModal_module_css__WEBPACK_IMPORTED_MODULE_8___default().btnPrimary),
                        children: "Add Document"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3262);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_4__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function DriveVerificationSuccessModal(props) {
    const { show , setShow  } = {
        ...props
    };
    console.log(show, "drive verification modal show");
    const handleClose = ()=>setShow(false);
    const iconDrive = HTMLReactParser(`<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_7636_43867)">
    <path d="M14.666 15H19.999L14.666 5H9.33203L14.666 15Z" fill="#FFC107"/>
    <path d="M8.95297 15L6.66797 19H17.501L20.001 15H8.95297Z" fill="#2196F3"/>
    <path d="M9.333 5L4 14.333L6.667 19L11.908 9.828L9.333 5Z" fill="#4CAF50"/>
    </g>
    <defs>
    <clipPath id="clip0_7636_43867">
    <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
    </clipPath>
    </defs>
    </svg>
    `);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Modal, {
            show: show,
            onHide: handleClose,
            className: styles.driveVerificationSuccessModal,
            contentClassName: styles.modalContent,
            dialogClassName: styles.modalDialog,
            centered: true,
            children: [
                /*#__PURE__*/ _jsxs(Modal.Body, {
                    className: styles.modalBody,
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.iconBox,
                            children: iconDrive
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.titleBox,
                            children: /*#__PURE__*/ _jsxs("h4", {
                                className: styles.title,
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: styles.gradient,
                                        children: "Verification successful!"
                                    }),
                                    " ",
                                    /*#__PURE__*/ _jsx("br", {}),
                                    "Your Instagram is now integrated"
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: styles.textBox,
                            children: /*#__PURE__*/ _jsx("p", {
                                className: styles.text,
                                children: "Share up to 6 posts on your Linkstar now by either selecting custom posts or recently uploaded live posts from Instagram."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(Modal.Footer, {
                    className: styles.modalFooter,
                    children: [
                        /*#__PURE__*/ _jsx(Button, {
                            variant: " ",
                            onClick: handleClose,
                            className: `${styles.btn} ${styles.btnOutline}`,
                            children: "Share Custom Feed"
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            variant: " ",
                            onClick: handleClose,
                            className: `${styles.btn} ${styles.btnGradient}`,
                            children: "Share Live Feed"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2332);
/* harmony import */ var Components_Container_SectionBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1054);
/* harmony import */ var Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6464);
/* harmony import */ var Constants_Sections_Api_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2300);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5875);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2905);
/* harmony import */ var _Cards_PortfolioAddCard_PortfolioAddCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1487);
/* harmony import */ var _Cards_PortfolioCard_PortfolioCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3210);
/* harmony import */ var _Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9018);
/* harmony import */ var Redux_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4232);
/* harmony import */ var Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8951);
/* harmony import */ var _GoogleDrivePicker_GoogleConnect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(751);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_4__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_8__, html_react_parser__WEBPACK_IMPORTED_MODULE_10__, _Cards_PortfolioCard_PortfolioCard__WEBPACK_IMPORTED_MODULE_12__, _Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_13__, _GoogleDrivePicker_GoogleConnect__WEBPACK_IMPORTED_MODULE_16__]);
([Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_4__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_8__, html_react_parser__WEBPACK_IMPORTED_MODULE_10__, _Cards_PortfolioCard_PortfolioCard__WEBPACK_IMPORTED_MODULE_12__, _Cards_GenericCard_GenericCard__WEBPACK_IMPORTED_MODULE_13__, _GoogleDrivePicker_GoogleConnect__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















// import GoogleDrivePicker from './GoogleDrivePicker/GoogleDrivePicker'

// import AddGoogleDriveModal from './Modal/AddGoogleDriveModal/AddGoogleDriveModal'
// import DriveVerificationSuccessModal from './Modal/DriveVerificationSuccessModal/DriveVerificationSuccessModal'
// import { addGoogleDrive, getGoogleDrive } from 'Constants/ApiGoogleDrive'


function PortfolioSection(props) {
    const sections = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme?.sections);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const isTablet = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isTablet);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const styleClass = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root?.user_theme?.theme?.style_class);
    const placeholdertitle = subDomain ? "" : "Directly link your portfolio via Google Drive.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const portfolio_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.portfolio_section_updated);
    const googleUserExist = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root?.configurations?.is_drive_exist);
    // console.log(variation, "portfolio variation");
    const item_props = {
        // item: item, // will be passed separately
        card_title: "Portfolio Title",
        card_detail: "Write a brief description of the blog here",
        card_button_url: null,
        // key: item.id,// will be passed separately
        draft: "portfolio_items",
        section: props?.slug,
        reduxDispatch: "PORTFOLIO_SECTION_UPDATE",
        buttonText: "Listen Now",
        titleLimit: 50,
        textLimit: 130
    };
    const STYLES = {
        "default": {
            component: _Cards_PortfolioCard_PortfolioCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            props: item_props
        },
        "style_1": {
            component: _Cards_PortfolioCard_PortfolioCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            props: item_props
        }
    };
    // console.log("sections", sections)
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    // console.log(isFirstRun, "first run");
    // const experience_data = props.section_data;
    const iconDrive = (0,html_react_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(`<svg width="24" height="24" style="height: 50px; width: 50px;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7636_43867)"><path d="M14.666 15H19.999L14.666 5H9.33203L14.666 15Z" fill="#FFC107"></path><path d="M8.95297 15L6.66797 19H17.501L20.001 15H8.95297Z" fill="#2196F3"></path><path d="M9.333 5L4 14.333L6.667 19L11.908 9.828L9.333 5Z" fill="#4CAF50"></path></g><defs><clipPath id="clip0_7636_43867"><rect width="16" height="16" fill="white" transform="translate(4 4)"></rect></clipPath></defs></svg>`);
    const [portfolioData, setPortfolioData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props?.section_data);
    // console.log(portfolioData, "section name", props?.section_data)
    const rowAddedClasses = items?.length > 1 ? "multi-child-card flex-nowrap w-100" : "";
    const emptyItem = items?.length === 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (isFirstRun.current == true) {
        setId(portfolioData?.id);
        setTitle(portfolioData?.title ?? placeholdertitle);
        setItems(portfolioData?.items);
        setVariation(portfolioData?.variation?.slug);
        isFirstRun.current = false;
    // console.log(isFirstRun, "first run effect");
    // }
    // else {
    //     setLoading(true);
    //     fetchPortfolioSection().then((res) => {
    //         setLoading(false);
    //         if (res?.data?.section) {
    //             let portfolio_section = res?.data?.section;
    //             // console.log(portfolio_section, "portfolio data")
    //             setPortfolioData(portfolio_section);
    //             setId(portfolio_section?.id);
    //             setTitle(portfolio_section?.title ?? placeholdertitle);
    //             setItems(portfolio_section?.items);
    //             setVariation(portfolio_section?.variation?.slug);
    //         } else notifyError(res?.message)
    //     }).catch((err) => {
    //         return notifyError(err.message)
    //     });
    // }
    }, [
        portfolio_section_updated
    ]);
    // useLayoutEffect(() => { getGoogleDrive() }, [])
    // useEffect(() => { addGoogleDrive(googleUserExist?.token) }, [googleUserExist?.token])
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: "theme-portfolio-box",
        id: "portfolio",
        style: {
            borderRadius: "20px"
        },
        visible: props?.section_data?.visible,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            display: "section"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sectionName: "Google Drive",
                    title: title,
                    sectionIcon: iconDrive,
                    placeHolderTitle: placeholdertitle,
                    draftText: "user_sections",
                    id: id,
                    addFunction: Constants_Sections_Api__WEBPACK_IMPORTED_MODULE_9__/* .addItem */ .jX,
                    sectionSlug: props.slug,
                    dispatchType: "PORTFOLIO_SECTION_UPDATE",
                    visible: props?.section_data?.visible == 1,
                    dataIndex: props?.dataIndex
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionBody__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    scrollerX: items?.length > 1 ? true : false,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: rowAddedClasses,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_8__/* .RenderItems */ .zp, {
                            section_data: portfolioData,
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardImageLoader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/Components/assets/images/loader1.gif
/* harmony default export */ const loader1 = ({"src":"/_next/static/media/loader1.59c03c38.gif","height":640,"width":640});
// EXTERNAL MODULE: ./src/Components/Components/ThemeCard/Block/CardImageLoader/CardImageLoader.module.css
var CardImageLoader_module = __webpack_require__(9050);
var CardImageLoader_module_default = /*#__PURE__*/__webpack_require__.n(CardImageLoader_module);
;// CONCATENATED MODULE: ./src/Components/Components/ThemeCard/Block/CardImageLoader/CardImageLoader.js




function CardImageLoader(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (CardImageLoader_module_default()).loading
    });
}


/***/ }),

/***/ 2300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export fetchPortfolioSection */
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5093);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3360);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3751);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__);





const dispatch = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.dispatch;
const globalState = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.getState();
const subDomain = globalState?.root?.subDomain;
const fetchPortfolioSection = (data)=>{
    // mixpanel.track(`API hit - fetchBookSection`);
    const subDomain = store?.getState()?.root?.subDomain;
    return getRequest(subDomain ? endPoints?.getUserPortfolioSection : endPoints?.getPortfolioSection, data); //returns a promise
};


/***/ })

};
;
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 5734:
/***/ ((module) => {

// Exports
module.exports = {
	"themeGenericCard": "GenericCard_themeGenericCard__NKOay",
	"cardActionBox": "GenericCard_cardActionBox__7Ci6_",
	"deleteIcon": "GenericCard_deleteIcon__WTrZQ",
	"imageChangeIcon": "GenericCard_imageChangeIcon__XYOX5",
	"imgBox": "GenericCard_imgBox__B3LKN",
	"cardBody": "GenericCard_cardBody__lNvHZ",
	"imgCard": "GenericCard_imgCard__HK2vp",
	"cardTitle": "GenericCard_cardTitle__QWysU",
	"cardText": "GenericCard_cardText__8z8C3",
	"cardFooter": "GenericCard_cardFooter___4cDX"
};


/***/ }),

/***/ 8637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Music_380_by_380.dd190993.jpg","height":380,"width":380,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAJF8/8QAGRAAAgMBAAAAAAAAAAAAAAAAAhIAATED/9oACAEBAAE/ADHnbKK4tbP/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8AUP/EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwBqf//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4998:
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
/* harmony import */ var assets_images_Music_380_by_380_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8637);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5875);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3360);
/* harmony import */ var Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1596);
/* harmony import */ var Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6860);
/* harmony import */ var Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8399);
/* harmony import */ var Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__]);
([Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__, Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_10__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import "./BasicLongCard.css";









function BorderlessCard(props) {
    const placeholdertitle = props.card_title;
    const placeholderdetail = props.card_detail;
    const defaultImg = props?.defaultImg;
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [detail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderdetail);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [buttonTitle, setbuttonTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [buttonUrl, setbuttonUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [buttonVisible, setbuttonVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [button_title_input, setButtonTitleInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [button_url_input, setButtonUrlInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [thumbnailUrl, setThumbnailUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imageToCrop, setImageToCrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imageLoader, setImageLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const handleCroppedImage = (e, croppedImage)=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .uploadCroppedImage */ .N4)(croppedImage, setModalOpen, setThumbnailUrl, setImageLoader, id, props?.section);
    };
    const handleUpdateBtn = ()=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .updateBtn */ .L$)(id, button_title_input, button_url_input, props?.section, props?.reduxDispatch);
    };
    const handleToggleButton = ()=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .toggleBtn */ .Y4)(id, props?.section, props?.reduxDispatch);
    };
    const handleImageChange = (event)=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .cardImageChange */ .hS)(event, setImageToCrop, setModalOpen);
    };
    const deleteMe = ()=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_6__/* .deleteItem */ .wz)(id, props?.section, props?.reduxDispatch);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            setThumbnailUrl(props?.item?.thumbnail_url ?? defaultImg);
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
            className: `borderless-card ${props.className}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "basicVariantBody_loader",
                        children: imageLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            child: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
                        className: "book-cover-img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: thumbnailUrl ? thumbnailUrl : props?.image ?? defaultImg,
                            className: "img-fluid img",
                            onChange: handleImageChange,
                            onError: (e)=>e.target.src = defaultImg
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                        className: `${subDomain ? buttonVisible ? "" : "border-radius-inherit" : null} book-sec-body`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                modalOpen: modalOpen,
                                setModalOpen: setModalOpen,
                                uploadApi: handleCroppedImage,
                                imageToCrop: imageToCrop,
                                aspectRatio: 16 / 9,
                                section: props?.section,
                                circular: props.circular
                            }),
                            !subDomain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__/* .UploadImageBtn */ .GH, {
                                        item: props?.item,
                                        section: props?.section,
                                        imageLoader: imageLoader,
                                        onImageChange: handleImageChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_5__/* .DeleteItemButton */ .dA, {
                                        deleteMe: deleteMe
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                tag: "h4",
                                text: title,
                                placeholderText: placeholdertitle,
                                className: "card-title",
                                characterLimit: 48,
                                draftText: (eve)=>{
                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .createDraft */ .P2)(eve, props.draft, "title", props?.item?.id);
                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .contentUpdateHandler */ .tG)();
                                },
                                onBlur: (e)=>{
                                    let html = e.target.innerHTML;
                                    setTitle(html);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                tag: "p",
                                text: detail,
                                placeholderText: props?.card_detail_placeholder,
                                className: "card-text",
                                characterLimit: props.textLimit ?? 128,
                                draftText: (eve)=>{
                                    {
                                        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .createDraft */ .P2)(eve, props.draft, "detail", props?.item?.id);
                                        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .contentUpdateHandler */ .tG)();
                                    }
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        name: "Read more",
                        item: props?.item,
                        section: props?.section,
                        reduxDispatch: props?.reduxDispatch,
                        draft: props?.draft
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderlessCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8890:
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
/* harmony import */ var assets_images_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1562);
/* harmony import */ var Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8399);
/* harmony import */ var Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1596);
/* harmony import */ var Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6860);
/* harmony import */ var Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2874);
/* harmony import */ var Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5875);
/* harmony import */ var Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5734);
/* harmony import */ var _GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_9__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__]);
([Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__, Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_9__, Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import CardDeleteIconBlock from "Components/ThemeCard/Block/CardDeleteIconBlock";






// styles

function GenericCard(props) {
    const placeholdertitle = props.card_title;
    const placeholderdetail = props.card_detail;
    const defaultImg = props?.defaultImg;
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [detail, setDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderdetail);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [buttonTitle, setbuttonTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [buttonUrl, setbuttonUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [buttonVisible, setbuttonVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [button_title_input, setButtonTitleInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [button_url_input, setButtonUrlInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [thumbnailUrl, setThumbnailUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imageToCrop, setImageToCrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imageLoader, setImageLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCroppedImage = (e, croppedImage)=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_10__/* .uploadCroppedImage */ .N4)(croppedImage, setModalOpen, setThumbnailUrl, setImageLoader, id, props?.section);
    };
    const handleImageChange = (event)=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_10__/* .cardImageChange */ .hS)(event, setImageToCrop, setModalOpen);
    };
    const deleteMe = ()=>{
        (0,Constants_Sections_Api_index__WEBPACK_IMPORTED_MODULE_10__/* .deleteItem */ .wz)(id, props?.section, props?.reduxDispatch);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.item) {
            setId(props?.item?.id ?? 0);
            setThumbnailUrl(props?.item?.thumbnail_url ?? defaultImg);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                className: `${(_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().themeGenericCard)} ${props.className}`,
                children: [
                    !subDomain ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardActionBox),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_9__/* .UploadImageBtn */ .GH, {
                                    classImageChangeIcon: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().imageChangeIcon),
                                    item: props?.item,
                                    section: props?.section,
                                    imageLoader: imageLoader,
                                    onImageChange: handleImageChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_HelperComponents__WEBPACK_IMPORTED_MODULE_9__/* .DeleteItemButton */ .dA, {
                                    classDeleteIcon: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().deleteIcon),
                                    deleteMe: deleteMe
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                        className: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardBody),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().imgBox),
                                children: [
                                    imageLoader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_ThemeCard_Block_CardImageLoader_CardImageLoader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        child: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                                        className: `img-fluid ${(_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().imgCard)}`,
                                        src: thumbnailUrl !== "" ? thumbnailUrl : defaultImg,
                                        onError: (e)=>e.target.src = defaultImg
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                onBlur: (e)=>{
                                    couponChange(e);
                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .contentUpdateHandler */ .tG)();
                                },
                                tag: "h4",
                                text: title,
                                placeholderText: placeholdertitle,
                                className: `card-title ${(_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardTitle)}`,
                                characterLimit: props.titleLimit ?? 48,
                                draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, props.draft, "title", props?.item?.id)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                tag: "p",
                                text: detail,
                                placeholderText: placeholderdetail,
                                className: `card-text ${(_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardText)}`,
                                characterLimit: props.textLimit ?? 128,
                                draftText: (eve)=>{
                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .createDraft */ .P2)(eve, props.draft, "detail", props?.item?.id);
                                    (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .contentUpdateHandler */ .tG)();
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Sections_Book_Cards_CardFooter_CardFooter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        name: "Read more",
                        item: props?.item,
                        section: props?.section,
                        reduxDispatch: props?.reduxDispatch,
                        draft: props?.draft,
                        className: (_GenericCard_module_css__WEBPACK_IMPORTED_MODULE_12___default().cardFooter)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Modal_CropperModal_CropperModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
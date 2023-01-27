exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 1001:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionBody": "SectionBody_sectionBody__Asiw_",
	"scrollX": "SectionBody_scrollX__PZl1b"
};


/***/ }),

/***/ 3448:
/***/ ((module) => {

// Exports
module.exports = {
	"guideMsg": "CardDeleteBlock_guideMsg__oHH3a"
};


/***/ }),

/***/ 9037:
/***/ ((module) => {

// Exports
module.exports = {
	"thumbnail": "VideoSliderBlock_thumbnail__Pr_Aa",
	"videoSliderList": "VideoSliderBlock_videoSliderList__ijpmN"
};


/***/ }),

/***/ 1054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionBody_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1001);
/* harmony import */ var _SectionBody_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SectionBody_module_css__WEBPACK_IMPORTED_MODULE_2__);



function SectionBody({ children , scrollerX  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-body ${(_SectionBody_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionBody)} ${scrollerX ? (_SectionBody_module_css__WEBPACK_IMPORTED_MODULE_2___default().scrollX) : ""}`,
        children: children
    });
}


/***/ }),

/***/ 7650:
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
/* harmony import */ var _Constants_Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3360);
/* harmony import */ var Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6464);
/* harmony import */ var Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8951);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5093);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3751);
/* harmony import */ var Components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4064);
/* harmony import */ var Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7316);
/* harmony import */ var assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1037);
/* harmony import */ var assets_images_icons_social_icons_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6853);
/* harmony import */ var _variants_VariantOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1264);
/* harmony import */ var _variants_VariantThree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4547);
/* harmony import */ var Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_10__, Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_15__]);
([Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_10__, Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import ReactHtmlParser from "react-html-parser";

// import ReactPlayer from "react-player";
// import SectionBody from "Components/Container/SectionBody";
// import "./video-section.css";



// import SingleVideoCard from "./SingleVideoCard";
// import VideoSlider from "./VideoSlider";

// import EditText from "Components/EditText/EditText";




function VideoSection(props) {
    const placeholdertitle = "Link any videos hosted on platforms such as Youtube, Vimeo etc";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [inputVideoUrl, setInputVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const selected_video = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.selected_video);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const styleClass = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.theme.style_class);
    const video_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.video_section_updated);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [urlInValid, setUrlInvalid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const addVideo = ()=>{
        if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(inputVideoUrl)) {
            alert("Invalid url");
        }
        setModalOpen(false);
        setLoading(true);
        props?.addVideoItem({
            url: inputVideoUrl
        }).then((res)=>{
            setLoading(false);
            if (res?.success) {
                dispatch({
                    type: "VIDEOS_SECTION_UPDATE"
                });
                setInputVideoUrl("");
            } else (0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            (0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_4__/* .notifyError */ .cB)(err?.message);
        });
    };
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const video_data = props.section_data;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (isFirstRun.current == true) {
        setId(video_data?.id);
        setTitle(video_data?.title ?? placeholdertitle);
        setItems(video_data?.items);
        isFirstRun.current = false;
        setVariation(video_data?.variation?.slug);
        if (video_data?.items && video_data?.items.length) {
            dispatch({
                type: "SET_SELECTED_VIDEO",
                payload: video_data.items[0].url
            });
        }
    // } else {
    //   setLoading(true);
    //   props?.fetchVideoSection().then((res) => {
    //     setLoading(false);
    //     if (res?.success) {
    //       if (res?.data?.section) {
    //         let section = res?.data?.section;
    //         setTitle(section?.title ?? placeholdertitle);
    //         setItems(section?.items);
    //         setVariation(video_data?.variation?.slug)
    //         setId(section?.id);
    //         if (section.items && section.items.length) {
    //           dispatch({
    //             type: "SET_SELECTED_VIDEO",
    //             payload: section.items[0].url,
    //           });
    //         }
    //       }
    //     } else notifyError(res?.message)
    //   }).catch((err) => {
    //     notifyError(err?.message)
    //   });
    // }
    }, [
        video_section_updated
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Components_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                style: {
                    position: "fixed",
                    zIndex: 9999
                },
                show: modalOpen,
                onHide: ()=>{
                    setModalOpen(false);
                },
                className: "video-add-modal",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
                        closeButton: true,
                        className: "border-bottom-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "modal-title",
                                children: "Add link from the following social platforms"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "video-icon-sec",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "img-fluid icon",
                                            src: assets_images_icons_social_icons_index__WEBPACK_IMPORTED_MODULE_12__/* .youtubeSolid */ .ak,
                                            alt: "youtube icon"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "img-fluid icon",
                                            src: assets_images_icons_social_icons_index__WEBPACK_IMPORTED_MODULE_12__/* .twitchSolid */ .ev,
                                            alt: "twitch icon"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "icon-box",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "img-fluid icon",
                                            src: assets_images_icons_social_icons_index__WEBPACK_IMPORTED_MODULE_12__/* .vimeoSolid */ .xO,
                                            alt: "vimeo icon"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Form_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    label: "What's the video web address (URL)?",
                                    placeholder: "Enter Video URL",
                                    name: "text",
                                    value: inputVideoUrl,
                                    onChange: (e)=>{
                                        setUrlInvalid(false);
                                        setInputVideoUrl(e.target.value);
                                    },
                                    isInvalid: urlInValid,
                                    errorMsg: "Please Enter the correct URL",
                                    classNameLabel: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "primary-theme",
                                    onClick: addVideo,
                                    className: "rounded-pill px-4",
                                    children: "Add"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                visible: props?.section_data?.visible,
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    display: "section"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-head position-relative ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Container_SectionHead__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                sectionName: "Video",
                                title: title,
                                placeHolderTitle: placeholdertitle,
                                draftText: "Video_sections",
                                id: props.section_data.id,
                                addFunction: ()=>setModalOpen(true),
                                characterLimit: 120,
                                sectionSlug: props.slug,
                                visible: props?.section_data?.visible == 1
                            })
                        }),
                        variation == "style_1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variants_VariantOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            items: items,
                            isMobile: isMobile,
                            selected_video: selected_video,
                            setVideoUrl: setVideoUrl,
                            DefaultImage: assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                        }) : variation == "style_2" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variants_VariantOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            items: items,
                            isMobile: isMobile,
                            selected_video: selected_video,
                            setVideoUrl: setVideoUrl,
                            DefaultImage: assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                        }) : variation == "style_3" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variants_VariantThree__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            items: items,
                            isMobile: isMobile,
                            selected_video: selected_video,
                            setVideoUrl: setVideoUrl,
                            DefaultImage: assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                            classNameWrapper: `${variation} ${props.slug}`,
                            variation: variation
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variants_VariantOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            items: items,
                            isMobile: isMobile,
                            selected_video: selected_video,
                            setVideoUrl: setVideoUrl,
                            DefaultImage: assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(Constants_utils__WEBPACK_IMPORTED_MODULE_8__/* .mapStateToProps */ .K, {
    fetchVideoSection: _Redux_Actions__WEBPACK_IMPORTED_MODULE_7__/* .fetchVideoSection */ .BG,
    addGenericItem: _Redux_Actions__WEBPACK_IMPORTED_MODULE_7__/* .addGenericItem */ .mv,
    addVideoItem: _Redux_Actions__WEBPACK_IMPORTED_MODULE_7__/* .addVideoItem */ .R
})(VideoSection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariantOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container_SectionBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1054);
/* harmony import */ var _SingleVideoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8040);
/* harmony import */ var _VideoSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7558);







function VariantOne(props) {
    const items = props.items;
    const isMobile = props.isMobile;
    const selected_video = props.selected_video;
    const DefaultImage = props.DefaultImage;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items && items.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container_SectionBody__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            scrollerX: false,
            children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
                items: items,
                video_url: selected_video,
                setVideoUrl: props.setVideoUrl
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    className: `wrapper-box video-player-box`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 8,
                            className: "px-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                className: "theme-video-player px-0",
                                children: selected_video ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    className: "user-video",
                                    height: "100%",
                                    url: selected_video,
                                    controls: true,
                                    muted: true
                                }, selected_video) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                                    className: "img-fluid img-Card",
                                    src: DefaultImage
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 4,
                            style: {
                                height: "450px",
                                overflowY: "scroll"
                            },
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                className: "",
                                children: items.length && items.map((item, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleVideoCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: item.id,
                                        reduxDispatch: "VIDEOS_SECTION_UPDATE",
                                        section: "video",
                                        url: item.metadata?.url,
                                        title: item.metadata?.title,
                                        description: item.metadata?.description,
                                        image: item.metadata && item.metadata["image:secure_url"] ? item.metadata["image:secure_url"] : item.metadata?.image ?? DefaultImage,
                                        setVideoUrl: props.setVideoUrl
                                    }, index);
                                })
                            })
                        })
                    ]
                })
            })
        }) : null
    });
}


/***/ }),

/***/ 4547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ VariantThree)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
// EXTERNAL MODULE: ./src/Components/Components/Container/SectionBody.js
var SectionBody = __webpack_require__(1054);
// EXTERNAL MODULE: ./src/Components/Components/Sections/Video/VideoSlider.js
var VideoSlider = __webpack_require__(7558);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: ./src/Redux/Actions.js
var Actions = __webpack_require__(5093);
// EXTERNAL MODULE: ./src/Constants/Functions.js + 6 modules
var Functions = __webpack_require__(3360);
// EXTERNAL MODULE: ./src/Constants/utils.js
var utils = __webpack_require__(3751);
// EXTERNAL MODULE: ./src/Components/Components/ThemeCard/Block/DeleteBlock/CardDeleteBlock.module.css
var CardDeleteBlock_module = __webpack_require__(3448);
var CardDeleteBlock_module_default = /*#__PURE__*/__webpack_require__.n(CardDeleteBlock_module);
;// CONCATENATED MODULE: ./src/Components/Components/ThemeCard/Block/DeleteBlock/CardDeleteBlock.js









// import "./CardDeleteBlock.css"
function CardDeleteBlock(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const deleteMe = ()=>{
        props?.deleteGenericItem({
            id: props?.item?.id,
            section: props?.section
        }, dispatch, props?.fetchUserTheme).then((res)=>{
            if (res?.success) {
                // alert('item removed');
                dispatch({
                    type: props?.reduxDispatch
                });
            } else (0,Functions/* notifyError */.cB)(res?.message);
        }).catch((err)=>{
            return (0,Functions/* notifyError */.cB)(err.message);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: `guide-msg ${(CardDeleteBlock_module_default()).guideMsg} ${props.className}`,
        onClick: deleteMe,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                className: "text-danger",
                icon: free_solid_svg_icons_.faTrash
            }),
            " click to delete"
        ]
    });
}
/* harmony default export */ const DeleteBlock_CardDeleteBlock = ((0,external_react_redux_.connect)(utils/* mapStateToProps */.K, {
    deleteGenericItem: Actions/* deleteGenericItem */.DQ,
    fetchUserTheme: Actions/* fetchUserTheme */.W9
})(CardDeleteBlock));

// EXTERNAL MODULE: ./src/Components/Components/ThemeCard/Block/CardDeleteIconBlock.js
var CardDeleteIconBlock = __webpack_require__(7189);
// EXTERNAL MODULE: ./src/Components/Components/ThemeCard/Block/VideoSliderBlock/VideoSliderBlock.module.css
var VideoSliderBlock_module = __webpack_require__(9037);
var VideoSliderBlock_module_default = /*#__PURE__*/__webpack_require__.n(VideoSliderBlock_module);
;// CONCATENATED MODULE: ./src/Components/Components/ThemeCard/Block/VideoSliderBlock/VideoSliderBlock.js











function SampleNextArrow(props) {
    const { className , style , onClick  } = props;
    return(// <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-arrow",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faArrowRight,
            className: "card-back-arrow"
        })
    }));
}
function VideoSliderBlock(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const subDomain = (0,external_react_redux_.useSelector)((state)=>state.root.subDomain);
    const videoItems = props.items;
    const defaultImage = props.DefaultImage;
    const videoItemLength = 5;
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: videoItems.length <= videoItemLength ? videoItems.length : videoItemLength,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        variableWidth: true,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SampleNextArrow, {}),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
        ...settings,
        className: (VideoSliderBlock_module_default()).videoSliderList,
        children: videoItems.length && videoItems.map((video, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>dispatch({
                            type: "SET_SELECTED_VIDEO",
                            payload: video.metadata?.url
                        }),
                    style: {
                        cursor: "pointer"
                    },
                    className: "d-flex flex-column video-thumbnail-sec justify-content-around my-2",
                    children: [
                        !subDomain && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CardDeleteIconBlock/* default */.Z, {
                                id: video.id,
                                reduxDispatch: "VIDEOS_SECTION_UPDATE",
                                section: "video"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: video.metadata && video.metadata["image:secure_url"] ? video.metadata["image:secure_url"] : video.metadata?.image ?? defaultImage,
                                className: "video-thumbnail-img mx-0 rounded-3 video-slider"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `video-thumbail-desc d-flex flex-column px-0 mt-2`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "video-thumbnail-slider-title",
                                children: video.metadata?.title == null ? null : video.metadata?.title.length > 30 ? `${video.metadata?.title.substring(0, 30)}...` : video.metadata?.title
                            })
                        })
                    ]
                })
            }, index);
        })
    });
}

;// CONCATENATED MODULE: ./src/Components/Components/Sections/Video/variants/VariantThree.js








function VariantThree(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const items = props.items;
    const isMobile = props.isMobile;
    const selected_video = props.selected_video;
    const DefaultImage = props.DefaultImage;
    const subDomain = (0,external_react_redux_.useSelector)((state)=>state.root.subDomain);
    // useEffect(){
    //     selected_video
    // [video_section_updated]}
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items && items.length ? /*#__PURE__*/ jsx_runtime_.jsx(SectionBody/* default */.Z, {
            scrollerX: false,
            children: isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(VideoSlider["default"], {
                items: items,
                video_url: selected_video,
                setVideoUrl: props.setVideoUrl,
                variation: props.variation
            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                    className: `wrapper-box video-slider-player-box`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: 12,
                            className: `px-0 rounded-circle`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                className: `theme-video-player px-0 ${props.classNameWrapper}`,
                                children: selected_video ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                                    className: "user-video",
                                    height: "100%",
                                    url: selected_video,
                                    controls: true,
                                    muted: true,
                                    showPreview: true
                                }, selected_video) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Ratio, {
                                    aspectRatio: "16x9",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Img, {
                                        className: "img-fluid img-Card",
                                        src: DefaultImage
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            md: 12,
                            style: {
                                height: "100%"
                            },
                            className: `theme-thumbnail-section mt-4 px-0 ${props.classNameWrapper}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                                className: "theme-video-thumbnail px-2 w-95 mx-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(VideoSliderBlock, {
                                    items: items,
                                    DefaultImage: DefaultImage,
                                    setVideoUrl: props.setVideoUrl
                                })
                            })
                        })
                    ]
                })
            })
        }) : null
    });
}


/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;
"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 1037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Videos.4161bc3e.jpg","height":305,"width":305,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAKcVj//EABsQAAEEAwAAAAAAAAAAAAAAABEABBITFEGB/9oACAEBAAE/AJucnVA6V//EABcRAAMBAAAAAAAAAAAAAAAAAAARIQH/2gAIAQIBAT8A2qI//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Ar//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3751);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5093);
/* harmony import */ var _Constants_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3360);
/* harmony import */ var _ThemeCard_Block_CardDeleteIconBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7189);







// import "./single-video-card.css";


function SingleVideoCard(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const video_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.video_section_updated);
    const deleteMe = ()=>{
        props?.deleteGenericItem({
            id: props?.id,
            section: props?.section
        }, dispatch, props?.fetchUserTheme).then((res)=>{
            if (res?.success) {
                // alert("item removed right");
                dispatch({
                    type: "VIDEO_SECTION_UPDATE"
                });
                dispatch({
                    type: props?.reduxDispatch
                });
            } else (0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            (0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err?.message);
        });
    };
    const { setVideoUrl , data , url , title , description , image , id  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                paddingRight: "4px"
            },
            onClick: ()=>{
                dispatch({
                    type: "SET_SELECTED_VIDEO",
                    payload: url
                });
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slick-slider-thumbnail-parent",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: image,
                        className: "img-fluid slick-slider-thumbnail",
                        style: {
                            width: "100%",
                            objectFit: "cover",
                            border: "0.5px solid #999"
                        }
                    }),
                    !subDomain ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeCard_Block_CardDeleteIconBlock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        id: props?.id,
                        reduxDispatch: "VIDEOS_SECTION_UPDATE",
                        section: props?.section
                    }) : null
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: ()=>dispatch({
                    type: "SET_SELECTED_VIDEO",
                    payload: url
                }),
            style: {
                cursor: "pointer"
            },
            className: "d-flex flex-row video-thumbnail-sec justify-content-around my-2",
            children: [
                !subDomain ? // <span className="guide-msg" onClick={deleteMe}>
                //   <FontAwesomeIcon className="text-danger" icon={faTrash} /> click
                //   to delete
                // </span>
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeCard_Block_CardDeleteIconBlock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    id: props?.id,
                    reduxDispatch: "VIDEOS_SECTION_UPDATE",
                    section: props?.section
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: image,
                        className: "video-thumbnail-img"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " video-thumbail-desc d-flex flex-column px-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "video-thumbnail-title",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "video-thumbnail-info",
                            children: description
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(_Constants_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapStateToProps */ .K, {
    deleteGenericItem: _Redux_Actions__WEBPACK_IMPORTED_MODULE_6__/* .deleteGenericItem */ .DQ,
    fetchUserTheme: _Redux_Actions__WEBPACK_IMPORTED_MODULE_6__/* .fetchUserTheme */ .W9
})(SingleVideoCard));


/***/ }),

/***/ 7558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3751);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3360);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5093);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SingleVideoCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8040);
/* harmony import */ var assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1037);










// import ContentContainer from "../../Container/ContentContainer";


class AsNavFor extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            selectedSlideImage: null,
            items: props.items,
            video_url: props.video_url,
            allowDelete: true,
            variation: props.variation
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    deleteMe = ()=>{
        if (!this.state.allowDelete) return;
        this.setState({
            allowDelete: false
        });
        this?.props?.deleteGenericItem({
            id: this.state?.selectedSlideImage?.id
        }).then((res)=>{
            this.setState({
                allowDelete: true
            });
            if (res?.success) {
                // alert('item removed');
                this.forceUpdate();
            } else (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_7__/* .notifyError */ .cB)(err?.message);
            this.setState({
                allowDelete: true
            });
        });
    };
    render() {
        var { items , video_url =""  } = this.state;
        var settingsMain = {
            dots: false,
            infinite: true,
            arrows: false,
            accessibility: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            nextArrow: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "slider-icon right",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronRight
                    })
                ]
            }),
            prevArrow: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "slider-icon left",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronLeft
                    })
                ]
            }),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
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
        var settingsthumb = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: false,
            prevArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 923,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 12,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: items?.length > 4,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        nextArrow: false,
                        prevArrow: false,
                        swipeToSlide: true
                    }
                }
            ]
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                position: "relative"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "theme-video-box freelancer-video",
                id: "video",
                children: [
                    !this?.props?.myState?.root?.subDomain && this?.state?.selectedSlideImage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "guide-msg-slider-section",
                        onClick: this.deleteMe,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                className: "text-danger",
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrash
                            }),
                            " click to delete"
                        ]
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...settingsMain,
                        asNavFor: this.state.nav2,
                        ref: (slider)=>this.slider1 = slider,
                        className: "gallery-main-slider",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_player__WEBPACK_IMPORTED_MODULE_9___default()), {
                            className: "mobile-responsive-video",
                            width: 350,
                            height: 210,
                            url: this?.props.video_url,
                            playing: false,
                            controls: true,
                            muted: false,
                            volume: null
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...settingsthumb,
                        asNavFor: this.state.nav1,
                        ref: (slider)=>this.slider2 = slider,
                        swipeToSlide: true,
                        focusOnSelect: true,
                        className: "gallery-items-slider",
                        children: items.length && items.map((i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleVideoCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    url: i.metadata?.url,
                                    title: i.metadata?.title,
                                    description: i.metadata?.description,
                                    image: i.metadata && i.metadata["image:secure_url"] ? i.metadata["image:secure_url"] : i.metadata?.image ?? assets_images_Videos_jpg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                    setVideoUrl: this.props.setVideoUrl,
                                    id: i.id,
                                    section: this.props.section
                                })
                            });
                        })
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(Constants_utils__WEBPACK_IMPORTED_MODULE_6__/* .mapStateToProps */ .K, {
    deleteGenericItem: Redux_Actions__WEBPACK_IMPORTED_MODULE_8__/* .deleteGenericItem */ .DQ
})(AsNavFor));


/***/ })

};
;
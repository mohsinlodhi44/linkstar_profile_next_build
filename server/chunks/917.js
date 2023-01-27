exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 1001:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionBody": "SectionBody_sectionBody__Asiw_",
	"scrollX": "SectionBody_scrollX__PZl1b"
};


/***/ }),

/***/ 6781:
/***/ ((module) => {

// Exports
module.exports = {
	"imgDeleteBlock": "HelperComponents_imgDeleteBlock___XirE",
	"iconBox": "HelperComponents_iconBox___K01Q",
	"imgChangeBlock": "HelperComponents_imgChangeBlock__7HFdb",
	"linkbtnBox": "HelperComponents_linkbtnBox__NlFsa",
	"link": "HelperComponents_link__TZeeH",
	"btnThemePrimary": "HelperComponents_btnThemePrimary__mXwZK",
	"arrowBtnPrimary": "HelperComponents_arrowBtnPrimary__sdnNb",
	"icon": "HelperComponents_icon__kEF1F"
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

/***/ 4000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LabelInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



function LabelInput(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        className: "mb-3",
        controlId: "formBasicEmail",
        hasValidation: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                children: props.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                type: props.type,
                placeholder: props.placeholder,
                value: props.value,
                name: props.name,
                onChange: props.onChange,
                onBlur: props?.onBlur,
                required: props.require,
                isValid: props.isValid,
                isInvalid: props.isInvalid
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Text, {
                className: "text-muted",
                children: props.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control.Feedback, {
                type: "invalid",
                children: props.errorMsg
            })
        ]
    });
}


/***/ }),

/***/ 2874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DU": () => (/* binding */ PricingBykeaModal),
/* harmony export */   "GH": () => (/* binding */ UploadImageBtn),
/* harmony export */   "RQ": () => (/* binding */ ButtonLinkModal),
/* harmony export */   "U7": () => (/* binding */ ButtonClickableArrow),
/* harmony export */   "dA": () => (/* binding */ DeleteItemButton),
/* harmony export */   "fh": () => (/* binding */ ButtonClickable),
/* harmony export */   "z4": () => (/* binding */ ButtonToggleLink),
/* harmony export */   "zp": () => (/* binding */ RenderItems)
/* harmony export */ });
/* unused harmony exports ButtonEditModal, ButtonEnableModal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4232);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3360);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Components_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4000);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2905);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9925);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6781);
/* harmony import */ var _HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_8__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// import 'Components/ThemeCard/Block/card-edit-block.css';



const globalState = Redux_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z?.getState();
const subDomain = globalState?.root?.subDomain;
const RenderItems = ({ items , variation , STYLES , className , sectionId , section_data , hasChildren  })=>{
    hasChildren = hasChildren == null ? true : hasChildren;
    // const isPro = useSelector((state) => state.root.user_theme?.tier) == 1;
    const isPro = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.root.configurations?.tier) == 1;
    let limit;
    if (isPro == false) limit = 4; //4 cards limit for free users
    if (!items) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    let currentTier = Redux_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z?.getState()?.root?.configurations?.tier;
    let sectionWithVariation = Redux_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z?.getState()?.root?.section_variations?.find((s)=>s.id == section_data?.section_id);
    let secVar = sectionWithVariation?.theme_variations?.find((v)=>v.id == section_data?.variation?.id);
    let locked = secVar?.tiers === "" ? false : !secVar?.tiers?.includes(currentTier);
    // if (!(variation in STYLES) || section_data?.variation?.locked==true) {
    if (!(variation in STYLES) || locked) {
        variation = "default";
    }
    // TEMP Cols settings
    let classColLg, classColMd;
    if ((sectionId == "experience" || sectionId == "services") && variation == "style_4" || sectionId == "services" && variation == "style_5") {
        classColLg = 6;
        classColMd = 6;
    }
    if (!hasChildren) {
        let ItemComponent = STYLES[variation]?.component;
        let componentProps = STYLES[variation]?.props;
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ItemComponent, {
            ...componentProps,
            item: items,
            key: items?.id
        });
    }
    return items?.slice(0, limit).map((item, index)=>{
        let ItemComponent = STYLES[variation]?.component;
        let componentProps = STYLES[variation]?.props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
            lg: classColLg || 4,
            md: classColMd || 6,
            className: `card-wrapper ${className == undefined ? " " : className}`,
            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ItemComponent, {
                ...componentProps,
                item: item,
                key: item?.id,
                index: index
            })
        }, index);
    });
};
const UploadImageBtn = ({ imageLoader , section , item , onImageChange , classImageChangeIcon , callback , dataImageType  })=>{
    if (callback) {
        callback();
    }
    let randomId = (Math.random() * 1e32).toString(15);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().imgChangeBlock)} ${classImageChangeIcon} ${imageLoader == true && "disabledEdit"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            style: {
                color: "white"
            },
            class: (_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().iconBox),
            htmlFor: `upload_generic_thumbnail-${section}-${item?.id}__${randomId}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "file",
                    className: "upload-generic-card-image-input",
                    id: `upload_generic_thumbnail-${section}-${item?.id}__${randomId}`,
                    accept: "image/*",
                    onClick: (event)=>{
                        event.target.value = null;
                    },
                    onChange: onImageChange,
                    "data-imagetype": dataImageType
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPencilAlt,
                    style: {
                        cursor: "pointer"
                    }
                })
            ]
        })
    });
};
const DeleteItemButton = ({ deleteMe , classDeleteIcon  })=>{
    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().imgDeleteBlock)} ${classDeleteIcon}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().iconBox),
            style: {
                cursor: "pointer"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrash,
                className: "text-danger",
                onClick: ()=>{
                    if (!disable) deleteMe();
                    setDisable(true);
                }
            })
        })
    });
};
const ButtonEditModal = (props)=>{
    const { updateBtn , toggleBtn  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                variant: "primary",
                className: "rounded-pill m-1 w-100 btn-action save-btn",
                onClick: updateBtn,
                children: "Save"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                variant: "primary",
                className: "rounded-pill m-1 w-100 btn-action disable-btn",
                onClick: toggleBtn,
                children: "Disable"
            })
        ]
    });
};
const ButtonEnableModal = (props)=>{
    const { button_url_input , button_title_input , updateBtn  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
        xs: 12,
        className: "mx-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "btn-box mb-3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                variant: "outline-primary btn-action",
                className: "rounded-pill mx-auto w-100 enable-btn-card",
                disabled: button_url_input !== "" && button_title_input !== "" ? false : true,
                onClick: ()=>{
                    updateBtn();
                },
                children: "Enable"
            })
        })
    });
};
const ButtonToggleLink = ({ buttonVisible , handleShow  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkbtnBox),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: (_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().link),
            onClick: handleShow,
            children: [
                "Click to ",
                buttonVisible ? "edit" : "add",
                " button"
            ]
        })
    });
};
const ButtonClickable = ({ button_url_input , buttonTitle , section , classNameButton  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: " ",
        className: `${(_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().btnThemePrimary)} ${classNameButton}`,
        onClick: ()=>{
            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_3__/* .redirectTo */ .gB)(button_url_input, "_blank", subDomain, section);
        },
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(buttonTitle)
    });
};
const ButtonClickableArrow = ({ button_url_input , buttonTitle , section , classNameButton  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: " ",
        className: `${(_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().arrowBtnPrimary)} ${classNameButton}`,
        onClick: ()=>{
            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_3__/* .redirectTo */ .gB)(button_url_input, "_blank", subDomain, section);
        },
        children: [
            (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(buttonTitle),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowRight,
                className: (_HelperComponents_module_css__WEBPACK_IMPORTED_MODULE_11___default().icon)
            })
        ]
    });
};
// Section Modals
const ButtonLinkModal = ({ buttonVisible , button_title_input , button_url_input , setButtonTitleInput , setButtonUrlInput , handleClose , handleToggleButton , handleUpdateBtn  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {
            className: `btn-edit-generic pb-0 `,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-start additional-data-box",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-end icon-box",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimes,
                            onClick: handleClose,
                            style: {
                                color: "#323232 !important"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        value: button_title_input,
                        onChange: (e)=>{
                            setButtonTitleInput(e?.target?.value);
                        },
                        type: "text",
                        label: "Change Button Title",
                        classNameLabel: "font-medium font-weight-bold text-start",
                        placeholder: "Add button Title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        value: button_url_input,
                        onChange: (e)=>{
                            setButtonUrlInput(e?.target?.value);
                        },
                        type: "url",
                        label: "Link to Button",
                        classNameLabel: "font-medium font-weight-bold",
                        placeholder: "Add your link here"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                        className: "d-flex justify-content-center",
                        children: [
                            !buttonVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonEnableModal, {
                                button_title_input: button_title_input,
                                button_url_input: button_url_input,
                                updateBtn: handleUpdateBtn
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                xs: 12,
                                className: "mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "d-flex flex-row justify-content-between",
                                    children: buttonVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonEditModal, {
                                        toggleBtn: handleToggleButton,
                                        updateBtn: handleUpdateBtn
                                    }) : null
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const PricingBykeaModal = ({ handleClose , setButtonTitleInput , handleUpdateBtn , handleToggleButton , bykeaExists , button_title_input , buttonVisible  })=>{
    const history = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-start additional-data-box",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimes,
                    onClick: handleClose
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: "content-title",
                children: "Get Payment Through Bykea"
            }),
            bykeaExists ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        value: button_title_input,
                        onChange: (e)=>{
                            setButtonTitleInput(e?.target?.value);
                        },
                        type: "text",
                        label: "Edit Button Text",
                        classNameLabel: "font-medium font-weight-bold text-start",
                        placeholder: "Add button Title"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                        className: "d-flex justify-content-center",
                        children: [
                            !buttonVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                xs: 12,
                                className: "mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "btn-box mb-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        variant: "outline-primary btn-action",
                                        className: "rounded-pill mx-auto w-100",
                                        onClick: handleUpdateBtn,
                                        children: "Enable"
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                xs: 12,
                                className: "mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "btn-box",
                                    children: buttonVisible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                variant: "primary",
                                                className: "rounded-pill w-100 btn-action",
                                                onClick: handleUpdateBtn,
                                                children: "Update"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                variant: "primary",
                                                className: "my-2 rounded-pill w-100 btn-action",
                                                onClick: handleToggleButton,
                                                children: "Disable"
                                            })
                                        ]
                                    }) : null
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        variant: "primary",
                        className: "rounded-pill w-100 btn-action",
                        onClick: ()=>{
                            history.push("dashboard/payment-integration");
                        },
                        children: "Register Bykea Account"
                    })
                })
            })
        ]
    });
} // !!!! Section Modals !!!!!!!
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L$": () => (/* binding */ updateBtn),
/* harmony export */   "N4": () => (/* binding */ uploadCroppedImage),
/* harmony export */   "Y4": () => (/* binding */ toggleBtn),
/* harmony export */   "hS": () => (/* binding */ cardImageChange),
/* harmony export */   "jX": () => (/* binding */ addItem),
/* harmony export */   "wz": () => (/* binding */ deleteItem)
/* harmony export */ });
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4232);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5093);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3360);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3751);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ApiFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1219);






const dispatch = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.dispatch;
const globalState = _Redux_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.getState();
// Items Api Functiuns
const addItem = (slug, dispatchType)=>{
    // mixpanel.track(`API hit - addGenericItem`);
    console.log("dispatchType: ", dispatchType);
    // props?.addGenericItem({ section: "books" }).then((res) => {
    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j0)(_utils__WEBPACK_IMPORTED_MODULE_3__/* .endPoints.addGenericItem */ .zH.addGenericItem, {
        section: slug
    }).then((res)=>{
        if (res?.success) {
            dispatch({
                type: dispatchType
            });
        } else (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(res?.message);
    }).catch((err)=>{
        return (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(err.message);
    });
};
const uploadCroppedImage = (croppedImage, setModalOpen, setThumbnailUrl, setImageLoader, itemId, section, columns = null)=>{
    setModalOpen(false);
    setThumbnailUrl(URL.createObjectURL(croppedImage));
    let fd = new FormData();
    fd.append("file", croppedImage);
    fd.append("id", itemId);
    fd.append("section", section);
    if (columns) {
        for(let key in columns){
            // fd.append("column_name", "mini_image");
            fd.append(key, columns[key]);
        }
    }
    setImageLoader(true);
    // props?.uploadGenericCardThumbnail(fd).then((res) => {
    // mixpanel.track(`API hit - uploadGenericCardThumbnail`);
    let url = _utils__WEBPACK_IMPORTED_MODULE_3__/* .endPoints */ .zH?.uploadGenericCardThumbnail;
    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j0)(url, fd, false).then((res)=>{
        if (res.success) {
            setImageLoader(false);
        } else (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(res?.message);
    }).catch((err)=>{
        return (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(err.message);
    });
};
const toggleBtn = (id, section, reduxDispatch)=>{
    // mixpanel.track(`API hit - toggleButtonGenericItem`);
    let url = _utils__WEBPACK_IMPORTED_MODULE_3__/* .endPoints */ .zH?.toggleButtonGenericSection;
    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j0)(url, {
        id: id,
        section: section
    }).then((res)=>{
        if (res?.success) {
            dispatch({
                type: reduxDispatch
            });
        } else (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(res?.message);
    }).catch((err)=>{
        return (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(err.message);
    });
};
const updateBtn = (id, button_title_input, button_url_input, section, reduxDispatch)=>{
    if (button_title_input?.length > 20) {
        return (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyInfo */ .QD)("Button title should be of 20 characters");
    }
    let url = _utils__WEBPACK_IMPORTED_MODULE_3__/* .endPoints */ .zH?.updateButtonGenericSection;
    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j0)(url, {
        id: id,
        button_title: button_title_input,
        button_url: button_url_input,
        section: section
    }).then((res)=>{
        if (res?.success) {
            dispatch({
                type: reduxDispatch
            });
        } else (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(res?.message);
    }).catch((err)=>{
        return (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(err.message);
    });
};
const deleteItem = (id, section, reduxDispatch)=>{
    let url = _utils__WEBPACK_IMPORTED_MODULE_3__/* .endPoints */ .zH?.deleteGenericItem;
    (0,_Redux_Actions__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j0)(url, {
        id: id,
        section: section
    }).then((res)=>{
        if (res?.success) {
            dispatch({
                type: reduxDispatch
            });
        } else (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(res?.message);
        const size = res?.data?.items?.length;
        const section_name = res?.data?.parent_section?.table_title;
        if (!size) {
            (0,_ApiFunctions__WEBPACK_IMPORTED_MODULE_5__/* .fetchUserTheme */ .W9)();
        // fetchUserTheme()?.then((res) => {
        //   if (res.success) {
        //     let user_theme = res?.data?.user_theme;
        //     if (user_theme) {
        //       dispatch({ type: "SET_USER_THEME", payload: user_theme });
        //       const section_variations = globalState?.root?.section_variations;
        //       section_variations.map(
        //         (item) => (
        //           item["name"] === section_name, (item["visible"] = 0)
        //         )
        //       );
        //     }
        //   }
        // });
        }
    }).catch((err)=>{
        (0,_Functions__WEBPACK_IMPORTED_MODULE_2__/* .notifyError */ .cB)(err?.message);
    });
};
const cardImageChange = (event, setImageToCrop, setModalOpen)=>{
    if (event.target.files && event.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            let image = reader.result;
            setImageToCrop(image);
            setModalOpen(true);
        });
        reader.readAsDataURL(event.target.files[0]);
        document.getElementById(event.target.id).value = null;
    }
} // !!!!!!!!!!!!!!! Items Api Functiuns End !!!!!!!!!!!!!!!
;


/***/ })

};
;
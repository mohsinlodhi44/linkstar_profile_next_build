"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var _Element_ContactInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8482);
/* harmony import */ var react_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8123);
/* harmony import */ var react_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_9__);










function ContactDetail(props) {
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Add your contact details so your audience can reach you at your preferred communication channel.");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("+92 313 000000");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Contact@gmail.com");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("100B, Karachi, Pakistan");
    const [formEmail, setFormEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formName, setFormName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formSubject, setFormSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formMessage, setFormMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    let recaptchaInstance;
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    const form_submit = ()=>{
        if (!subDomain) return;
        let user_id = 1;
        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .redirectTo */ .gB)(false, "_blank", subDomain, props?.section);
        props?.contact_form({
            name: formName,
            email: formEmail,
            subject: formSubject,
            message: formMessage,
            user_name: subDomain
        }).then((res)=>{
            if (res.success) {
                (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifySuccess */ .t5)("Thank you for contacting with us");
                setFormEmail("");
                setFormName("");
                setFormSubject("");
                setFormMessage("");
            } else (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            return (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifyError */ .cB)(err.message);
        });
    };
    const handleVerify = (event)=>{
        console.log("event------------------------->", event);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                    className: "header-card-title",
                    children: "Get in Touch"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contact-field-box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-field-group mb-3 mt-4",
                        controlId: "formPlaintextEmail",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                column: true,
                                xs: "4",
                                className: "form-label",
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                xs: "8",
                                md: "8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "text",
                                    placeholder: "",
                                    value: formName,
                                    onChange: (e)=>setFormName(e.target.value),
                                    className: "text-input",
                                    disabled: !subDomain
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-field-group mb-3 mt-3",
                        controlId: "formPlaintextEmail",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                column: true,
                                xs: "4",
                                className: "form-label",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                xs: "8",
                                md: "8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "email",
                                    placeholder: "",
                                    value: formEmail,
                                    onChange: (e)=>setFormEmail(e.target.value),
                                    className: "text-input",
                                    disabled: !subDomain
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-field-group mb-3 mt-3",
                        controlId: "formPlaintextEmail",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                column: true,
                                xs: "4",
                                className: "form-label",
                                children: "Subject"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                xs: "8",
                                md: "8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "text",
                                    value: formSubject,
                                    onChange: (e)=>setFormSubject(e.target.value),
                                    placeholder: "",
                                    className: "text-input",
                                    disabled: !subDomain
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-field-group mb-3 mt-3",
                        controlId: "formPlaintextEmail",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                column: true,
                                xs: "4",
                                className: "form-label",
                                children: "Message"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                xs: "8",
                                md: "8",
                                className: "text-area-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                        as: "textarea",
                                        rows: 3,
                                        placeholder: "",
                                        value: formMessage,
                                        onChange: (e)=>setFormMessage(e.target.value),
                                        className: "text-input-area",
                                        disabled: !subDomain
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        className: "submit-btn py-0",
                                        onClick: ()=>{
                                            form_submit();
                                        },
                                        children: "Submit "
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "d-flex justify-content-center mt-4"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm,
    contact_form: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .contact_form */ .Js
})(ContactDetail));


/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var _Element_ContactInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8482);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);








// import '../../../../Pages/ContactUs.js/contact.css'
function ContactDetailMaterial(props) {
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Add your contact details so your audience can reach you at your preferred communication channel.");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("+92 313 000000");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Contact@gmail.com");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("100B, Karachi, Pakistan");
    const [formEmail, setFormEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formName, setFormName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formSubject, setFormSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [formMessage, setFormMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isMobile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.isMobile);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    let recaptchaInstance;
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    const form_submit = ()=>{
        if (!subDomain) return;
        let user_id = 1;
        (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .redirectTo */ .gB)(false, "_blank", subDomain, props?.section);
        props?.contact_form({
            name: formName,
            email: formEmail,
            subject: formSubject,
            message: formMessage,
            user_name: subDomain
        }).then((res)=>{
            if (res.success) {
                (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifySuccess */ .t5)("Thank you for contacting with us");
                setFormEmail("");
                setFormName("");
                setFormSubject("");
                setFormMessage("");
            } else (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            return (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .notifyError */ .cB)(err.message);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                    className: "header-card-title",
                    children: "Get in Touch"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contact-field-box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex contact-field-section flex-row justify-content-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col,
                                className: "contact-input-group material-input-group",
                                controlId: "first_name",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    md: 11,
                                    className: "material-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                            type: "text",
                                            placeholder: "First Name",
                                            value: formName,
                                            onChange: (e)=>setFormName(e.target.value),
                                            className: "contact-text-input",
                                            id: "first_name",
                                            disabled: !subDomain
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                            column: true,
                                            className: "contact-form-label",
                                            children: "First Name"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col,
                                className: "contact-input-group material-input-group",
                                controlId: "user_email",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    md: 11,
                                    className: "material-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                            type: "email",
                                            placeholder: "Email",
                                            value: formEmail,
                                            onChange: (e)=>setFormEmail(e.target.value),
                                            className: "contact-text-input",
                                            id: "user_email",
                                            disabled: !subDomain
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                            column: true,
                                            xs: "6",
                                            className: "contact-form-label",
                                            children: "Email"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-input-group material-input-group",
                        controlId: "contact_subject",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 12,
                            className: "material-input",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "text",
                                    value: formSubject,
                                    onChange: (e)=>setFormSubject(e.target.value),
                                    placeholder: "Subject",
                                    className: "contact-text-input",
                                    id: "contact_subject",
                                    disabled: !subDomain
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                    column: true,
                                    xs: "4",
                                    className: "contact-form-label",
                                    children: "Subject"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row,
                        className: "contact-input-group material-input-group ",
                        controlId: "contact_message",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 12,
                            className: "text-message-container material-input",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    as: "textarea",
                                    rows: 3,
                                    placeholder: "Message",
                                    value: formMessage,
                                    onChange: (e)=>setFormMessage(e.target.value),
                                    className: "message-input-area contact-text-input",
                                    id: "contact_message",
                                    disabled: !subDomain
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                    column: true,
                                    xs: "4",
                                    className: "contact-form-label",
                                    children: "Message"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                        className: "form-submit-section text-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            className: "contact-submit-btn mt-4 w-auto rounded-pill px-4",
                            onClick: ()=>{
                                form_submit();
                            },
                            children: "Send Message "
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm,
    contact_form: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .contact_form */ .Js
})(ContactDetailMaterial));


/***/ }),

/***/ 3666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1562);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5093);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3751);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3360);










function ContactHeader(props) {
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.root.subDomain);
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.root.contact_section_updated);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // setLoading(true);
        props?.fetchContactSection().then((res)=>{
            // setLoading(false);
            if (res?.data?.section) {
                let contact_section = res?.data?.section;
                setPhone(contact_section.phone);
            } else (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_9__/* .notifyError */ .cB)(res?.message);
        }).catch((err)=>{
            return (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_9__/* .notifyError */ .cB)(err.message);
        });
    }, [
        contact_section_updated
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
            className: "p-0 card-header-contact",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Img, {
                    className: "img-fluid contact-img",
                    src: assets_images_index__WEBPACK_IMPORTED_MODULE_3__/* .contact_us */ .md?.src
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "btn-box",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary-theme",
                        className: "rounded-pill",
                        onClick: ()=>{
                            // window.open("tel://" + phone, "_blank");
                            (0,Constants_Functions__WEBPACK_IMPORTED_MODULE_9__/* .redirectTo */ .gB)("tel://" + phone, "_blank", subDomain, props?.section);
                        },
                        children: [
                            "Call now",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-box ms-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    className: "icon",
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPhone
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(Constants_utils__WEBPACK_IMPORTED_MODULE_7__/* .mapStateToProps */ .K, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_6__/* .fetchContactSection */ .qm
})(ContactHeader));


/***/ }),

/***/ 6907:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var _EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8399);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__]);
_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import ReactHtmlParser from "react-html-parser";

function ContactInfo(props) {
    let placeholderNumber = "03001234567";
    let placeholderEmail = "Contact@gmail.com";
    let placeholderTitle = "Add your contact details so your audience can reach you at your preferred communication channel.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderTitle);
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderNumber);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderEmail);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    // const contact_data = props.section_data;
    const contact_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.sections.find((c)=>c.section.slug == "contact"));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setId(contact_data?.id);
        setTitle(props.item?.title ?? contact_data?.title ?? placeholderTitle);
        setPhone(props.item?.phone ?? contact_data?.phone ?? placeholderNumber);
        setEmail(props.item?.email ?? contact_data?.email ?? placeholderEmail);
    }, [
        contact_section_updated
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                    className: "header-card-title",
                    children: "Personal Details"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 card-display-contact",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                        className: "card-sub-header",
                        children: "Email"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        tag: "h5",
                        text: email,
                        placeholderText: placeholderEmail,
                        className: "card-text-input",
                        characterLimit: 70,
                        draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "email", id)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-3 card-display-contact",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                        className: "card-sub-header",
                        children: subDomain && !phone?.trim() ? "" : "Phone"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        tag: "h5",
                        text: phone,
                        placeholderText: placeholderNumber,
                        className: "card-text-input",
                        characterLimit: 30,
                        draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "phone", id),
                        numberOnly: true
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm
})(ContactInfo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7810:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var _EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8399);
/* harmony import */ var assets_images_icons_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__]);
_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import ReactHtmlParser from "react-html-parser";


function ContactInfo(props) {
    let placeholderNumber = "03001234567";
    let placeholderEmail = "Contact@gmail.com";
    let placeholderTitle = "Add your contact details so your audience can reach you at your preferred communication channel.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderTitle);
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderNumber);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderEmail);
    const [numberInput, setNumberInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    // const contact_data = props.section_data;
    const contact_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.sections.find((c)=>c.section.slug == "contact"));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setId(contact_data?.id);
        setTitle(props.item?.title ?? contact_data?.title ?? placeholderTitle);
        setPhone(props.item?.phone ?? contact_data?.phone ?? placeholderNumber);
        setEmail(props.item?.email ?? contact_data?.email ?? placeholderEmail);
    }, [
        contact_section_updated
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "img-fluid",
                    src: assets_images_icons_index__WEBPACK_IMPORTED_MODULE_7__/* .msgIconMd */ .cw
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-4 card-display-contact",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                        className: "card-sub-header",
                        children: "Email"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        tag: "h5",
                        text: email,
                        placeholderText: placeholderEmail,
                        className: "card-text-input",
                        characterLimit: 70,
                        draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "email", id)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-3 card-display-contact",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                        className: "card-sub-header",
                        children: subDomain && !phone?.trim() ? "" : "Phone"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        tag: "h5",
                        text: phone,
                        placeholderText: placeholderNumber,
                        className: "card-text-input",
                        characterLimit: 30,
                        draftText: (eve)=>(0,Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "phone", id),
                        numberOnly: true
                    })
                ]
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm
})(ContactInfo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4522:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var _Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var _EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8399);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_icons_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5924);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__]);
_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import ReactHtmlParser from "react-html-parser";




// import "./contactinfotwo.css"
function ContactInfo(props) {
    let placeholderNumber = "03001234567";
    let placeholderEmail = "Contact@gmail.com";
    let placeholderTitle = "Add your contact details so your audience can reach you at your preferred communication channel.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderTitle);
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderNumber);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholderEmail);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    // const contact_data = props.section_data;
    const contact_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.user_theme.sections.find((c)=>c.section.slug == "contact"));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setId(contact_data?.id);
        setTitle(props.item?.title ?? contact_data?.title ?? placeholderTitle);
        setPhone(props.item?.phone ?? contact_data?.phone ?? placeholderNumber);
        setEmail(props.item?.email ?? contact_data?.email ?? placeholderEmail);
    }, [
        contact_section_updated
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "detail-section",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "img-fluid",
                        src: assets_images_icons_index__WEBPACK_IMPORTED_MODULE_8__/* .msgIconMd */ .cw
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-3 card-display-contact phoneContactDiv",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPhone,
                            className: "icon phoneIconContact"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            tag: "h5",
                            text: phone,
                            placeholderText: placeholderNumber,
                            className: "card-text-input phoneNumber",
                            characterLimit: 30,
                            draftText: (eve)=>(0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "phone", id),
                            numberOnly: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "emailCard card-display-contact emailInfoTwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEnvelope,
                            className: "icon"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditText_EditText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            tag: "h5",
                            text: email,
                            placeholderText: placeholderEmail,
                            className: "card-text-input",
                            characterLimit: 70,
                            draftText: (eve)=>(0,_Constants_Functions__WEBPACK_IMPORTED_MODULE_5__/* .createDraft */ .P2)(eve, "contact_sections", "email", id)
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
    fetchContactSection: _Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm
})(ContactInfo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5943:
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
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3751);
/* harmony import */ var Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8951);
/* harmony import */ var _Container_ContentContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6464);
/* harmony import */ var _Variations_VariantOne__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8893);
/* harmony import */ var _Variations_VariantTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8378);
/* harmony import */ var _Variations_VariantThree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4818);
/* harmony import */ var _Variations_VariantFour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1377);
/* harmony import */ var _EditText_EditText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8399);
/* harmony import */ var _Container_SectionHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Variations_VariantOne__WEBPACK_IMPORTED_MODULE_9__, _Variations_VariantTwo__WEBPACK_IMPORTED_MODULE_10__, _Variations_VariantThree__WEBPACK_IMPORTED_MODULE_11__, _Variations_VariantFour__WEBPACK_IMPORTED_MODULE_12__, _EditText_EditText__WEBPACK_IMPORTED_MODULE_13__, _Container_SectionHead__WEBPACK_IMPORTED_MODULE_14__]);
([_Variations_VariantOne__WEBPACK_IMPORTED_MODULE_9__, _Variations_VariantTwo__WEBPACK_IMPORTED_MODULE_10__, _Variations_VariantThree__WEBPACK_IMPORTED_MODULE_11__, _Variations_VariantFour__WEBPACK_IMPORTED_MODULE_12__, _EditText_EditText__WEBPACK_IMPORTED_MODULE_13__, _Container_SectionHead__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import ReactHtmlParser from "react-html-parser";






// import "./contact-section.css";

function ContactSection(props) {
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.subDomain);
    const placeholdertitle = subDomain ? "" : "Add your contact details so your audience can reach you at your preferred communication channel.";
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placeholdertitle);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [variation, setVariation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const contact_section = props?.section_data;
    const contact_section_updated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.root.contact_section_updated);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (isFirstRun.current == true) {
        setId(contact_section?.id);
        setTitle(contact_section?.title ?? placeholdertitle);
        setVariation(contact_section?.variation?.slug);
        setItems(contact_section);
        isFirstRun.current = false;
    // } else {
    //   setLoading(true);
    //   props?.fetchContactSection().then((res) => {
    //     setLoading(false);
    //     if (res?.data?.section) {
    //       let contact_section = res?.data?.section;
    //       setId(contact_section?.id);
    //       setItems(contact_section);
    //       setTitle(contact_section?.title ?? placeholdertitle);
    //       setVariation(contact_section?.variation?.slug);
    //     } else notifyError(res?.message)
    //   }).catch((err) => {
    //     return notifyError(err.message)
    //   });
    // }
    }, [
        contact_section_updated
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container_ContentContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        visible: props?.section_data?.visible,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "theme-contact-box",
            id: "contact",
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Components_Loader_LoadingComponent_LoadingComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                display: "section"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container_SectionHead__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        sectionName: "Contact Me",
                        title: title,
                        placeHolderTitle: placeholdertitle,
                        draftText: "contact_sections",
                        id: props.section_data.id,
                        // addFunction={addContca}
                        characterLimit: 120,
                        sectionSlug: props.slug,
                        visible: props?.section_data?.visible == 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "section-body",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
                            className: `contact-card flex-column flex-sm-row  flex-lg-row flex-md-column ${variation}`,
                            children: variation == "style_1" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Variations_VariantOne__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                item: items,
                                section: props?.slug
                            }) : variation == "style_2" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Variations_VariantTwo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                item: items,
                                section: props?.slug
                            }) : variation == "style_3" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Variations_VariantThree__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                item: items,
                                section: props?.slug
                            }) : variation == "style_4" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Variations_VariantFour__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                item: items,
                                section: props?.slug
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Variations_VariantOne__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                item: items,
                                section: props?.slug
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(Constants_utils__WEBPACK_IMPORTED_MODULE_6__/* .mapStateToProps */ .K, {
    fetchContactSection: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .fetchContactSection */ .qm,
    contact_form: Redux_Actions__WEBPACK_IMPORTED_MODULE_4__/* .contact_form */ .Js
})(ContactSection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Redux_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5093);
/* harmony import */ var Constants_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3360);
/* harmony import */ var Constants_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3751);







function ContactInput(props) {
    const [formName, setFormName] = useState("");
    const [formSubject, setFormSubject] = useState("");
    const subDomain = useSelector((state)=>state.root.subDomain);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs(Form.Group, {
            as: Row,
            className: "contact-field-group mb-3 mt-4",
            controlId: "formPlaintextEmail",
            children: [
                /*#__PURE__*/ _jsx(Form.Label, {
                    column: true,
                    xs: "4",
                    className: "form-label",
                    children: props.label
                }),
                /*#__PURE__*/ _jsx(Col, {
                    xs: "8",
                    children: /*#__PURE__*/ _jsx(Form.Control, {
                        type: props.inputType,
                        placeholder: props.placeholder,
                        value: formName,
                        onChange: (e)=>setFormName(e.target.value),
                        className: `text-input ${props.className ? props.className : ""}`,
                        disabled: !subDomain
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariantFour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block_ContactInfoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7810);
/* harmony import */ var _Block_ContactInfoTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4522);
/* harmony import */ var _Block_ContactDetailMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _Block_ContactHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3666);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Block_ContactInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _Block_ContactInfoTwo__WEBPACK_IMPORTED_MODULE_4__]);
([_Block_ContactInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _Block_ContactInfoTwo__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function VariantFour(props) {
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.root.subDomain);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
            className: "contact-det-card",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "contact-info-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 4,
                        md: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactInfoTwo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            section: props?.section,
                            item: props.item
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 8,
                        md: 11,
                        className: "px-4 form-input-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactDetailMaterial__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            section: props?.section
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariantOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6907);
/* harmony import */ var _Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4720);
/* harmony import */ var _Block_ContactHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3666);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__]);
_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function VariantOne(props) {
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props?.item?.phone);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPhone(props?.item?.phone);
    }, [
        props?.item
    ]);
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.root.subDomain);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            subDomain && phone?.trim() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                section: props?.section,
                phone: phone
            }),
            !subDomain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                section: props?.section,
                phone: phone
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                className: "contact-det-card",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    className: "contact-info-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            lg: 4,
                            md: 6,
                            className: "detail-section",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                item: props.item
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            lg: 8,
                            md: 11,
                            className: "px-4 form-input-section",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                item: props.item,
                                section: props?.section
                            })
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariantThree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6907);
/* harmony import */ var _Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4720);
/* harmony import */ var _Block_ContactHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3666);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__]);
_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function VariantThree(props) {
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const subDomain = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.root.subDomain);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
            className: "contact-det-card",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "contact-info-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 4,
                        md: 6,
                        className: "detail-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            item: props.item
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 8,
                        md: 11,
                        className: "px-4 form-input-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            section: props?.section
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariantOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6907);
/* harmony import */ var _Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__]);
_Block_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function VariantOne(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
            className: "contact-det-card",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "contact-info-section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                    md: 12,
                    className: "px-4 form-input-section",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Block_ContactDetail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        section: props?.section
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
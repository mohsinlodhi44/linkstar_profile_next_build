"use strict";
(() => {
var exports = {};
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 3476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4232);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants_ApiFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1219);
/* harmony import */ var _Constants_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3751);
/* harmony import */ var _Components_Components_FontLoad_FontLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5492);
/* harmony import */ var _Config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Theme_Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Theme_Theme__WEBPACK_IMPORTED_MODULE_7__]);
_Components_Theme_Theme__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const redirectToLinkstar = {
    redirect: {
        permanent: false,
        destination: "https://linkst.ar"
    }
};
function Main(props) {
    const { config , subdomain , metadata  } = props;
    // Dispatching user data
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        _Redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?.dispatch({
            type: "SET_SUBDOMAIN",
            payload: subdomain
        });
        _Redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?.dispatch({
            type: "SET_CONFIGURATIONS",
            payload: config
        });
        // FontLoad( ['MarkPro','MarkPro-Medium'], ()=>setLoading(false) )
        (0,_Components_Components_FontLoad_FontLoad__WEBPACK_IMPORTED_MODULE_8__/* .FontLoad */ .Y)([
            "MarkPro",
            "MarkPro-Medium"
        ], ()=>1);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: metadata.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: metadata.icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: metadata.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: metadata.og_url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: metadata.og_type
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: metadata.og_title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: metadata.og_description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: metadata.og_image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: metadata.apple_icon
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Theme_Theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
}
async function getServerSideProps(context) {
    const { req  } = context;
    const host = req.headers.host;
    let config, metadata, sub;
    if (!(host.includes("linkst.ar") || host.includes("sav-vy.com") || host.includes("linkst.local") || host.includes("localhost"))) {
        const response = await handleCustomDomain(host);
        if (!response) return redirectToLinkstar;
        config = response.config;
        metadata = response.metadata;
        sub = response.sub;
    } else {
        // sub= host.split('.')[0] <=== uncomment
        sub = "mohsinlodhi4"; // test  <=========== REMOVE
        [config, metadata] = await Promise.all([
            (0,_Constants_ApiFunctions__WEBPACK_IMPORTED_MODULE_3__/* .getUserConfiguraions */ .Yo)(sub),
            getSubdomainMetaData(sub)
        ]);
        if (!config) {
            return redirectToLinkstar;
        }
        config = config.info;
    }
    return {
        props: {
            subdomain: sub,
            config,
            metadata
        }
    };
}
const handleCustomDomain = async (host)=>{
    host = host.replace("www.", "");
    host = host.replace(":3009", "");
    let user = await (0,_Constants_ApiFunctions__WEBPACK_IMPORTED_MODULE_3__/* .userFromDomain */ .rf)(host, false);
    if (!user) {
        return false;
    }
    let name = user?.fullname;
    let icon = user?.icon || _Config_index__WEBPACK_IMPORTED_MODULE_5__/* .MetaDataConfig.icon */ .v9.icon;
    let { info  } = await (0,_Constants_ApiFunctions__WEBPACK_IMPORTED_MODULE_3__/* .getUserConfiguraions */ .Yo)(user?.username);
    return {
        sub: user?.username,
        conifg: info,
        metadata: {
            ..._Config_index__WEBPACK_IMPORTED_MODULE_5__/* .MetaDataConfig */ .v9,
            "title": name + " - Linkstar",
            "og_title": name + " - Linkstar",
            "og_image": icon,
            "fetched": true
        }
    };
};
const getSubdomainMetaData = async (sub)=>{
    let res = await fetch(_Constants_utils__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .FH + "/get_fullname", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: sub
        })
    });
    let body = await res.json();
    if (!body.success) return false;
    let name = body.data?.fullname;
    let icon = body.data?.icon || _Config_index__WEBPACK_IMPORTED_MODULE_5__/* .MetaDataConfig.icon */ .v9.icon;
    return {
        ..._Config_index__WEBPACK_IMPORTED_MODULE_5__/* .MetaDataConfig */ .v9,
        "title": name + " - Linkstar",
        "og_title": name + " - Linkstar",
        "og_image": icon,
        "og_url": "https://" + sub + ".linkst.ar"
    };
//
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3195:
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5804:
/***/ ((module) => {

module.exports = require("mixpanel-browser");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9925:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 3262:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 6006:
/***/ ((module) => {

module.exports = require("react-google-login");

/***/ }),

/***/ 1704:
/***/ ((module) => {

module.exports = require("react-google-recaptcha-v3");

/***/ }),

/***/ 4842:
/***/ ((module) => {

module.exports = require("react-h5-audio-player");

/***/ }),

/***/ 5935:
/***/ ((module) => {

module.exports = require("react-html-parser");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("react-recaptcha");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [232,929], () => (__webpack_exec__(3476)));
module.exports = __webpack_exports__;

})();
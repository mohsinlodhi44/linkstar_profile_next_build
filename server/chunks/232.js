"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Redux_store)
});

;// CONCATENATED MODULE: ./src/Redux/Reducer/AuthReducer.js
const initialState = {
    user: null
};
function initialStateFunc(state = initialState, action) {
    const { type , payload  } = action;
    switch(type){
        case "USER_LOGIN":
            return {
                ...state,
                user: payload
            };
        case "USER_GUIDE":
            return {
                ...state,
                user: {
                    ...state.user,
                    guide: payload
                }
            };
        case "SET_USER":
            return {
                ...state,
                user: payload
            };
        case "SET_GOOGLE_USER":
            return {
                ...state,
                googleUser: payload
            };
        case "UPDATE_AVATAR":
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar_url: payload
                }
            };
        // case "USER_GUIDE":
        //   return {
        //     ...state,
        //     user:{...state.user,guide:payload}
        //   }
        case "TOGGLE_LINKS_HIDE_STATUS":
            return {
                ...state,
                user: {
                    ...state.user,
                    hideLink: action.payload
                }
            };
        case "LOGOUT":
            return {
                ...initialState
            };
        default:
    }
    return state;
}

;// CONCATENATED MODULE: ./src/Redux/Reducer/MainReducer.js
const MainReducer_initialState = {
    mode: "",
    user_theme: null,
    configurations: null,
    user_menu: [],
    style_class: "basic",
    section_variations: null,
    social_section_updated: null,
    price_section_updated: null,
    service_section_updated: null,
    book_section_updated: null,
    coupon_section_updated: null,
    blog_section_updated: null,
    video_section_updated: null,
    gallery_section_updated: null,
    custom_section_updated: null,
    upload_generic_card_thumbnail: null,
    nav_section_updated: null,
    banner_section_updated: null,
    stat_section_updated: null,
    contact_section_updated: null,
    experience_section_updated: null,
    music_section_updated: null,
    collab_section_updated: null,
    education_section_updated: null,
    internship_section_updated: null,
    project_section_updated: null,
    isLoading: false,
    drafts: null,
    showSidebar: false,
    subDomain: null,
    role: null,
    zoomed: true,
    invertedBanner: false,
    mirror_x: true,
    mirror_y: true,
    addStats: false,
    addGallery: false,
    addContact: false,
    addServices: false,
    addPricing: false,
    firstTimer: false,
    tier: 0,
    headerActiveTab: "themes",
    bottomSelectedSection: "",
    tabOpen: false,
    isMobile: /iPhone|iPod|Android/i.test(typeof navigator == "object" ? navigator.userAgent : process.platform),
    isTablet: /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(typeof navigator == "object" ? navigator.userAgent : process.platform),
    manageThemeData: null,
    readMessage: false,
    sliderData: null,
    showBottomTab: true,
    selected_video: "",
    remCard: null,
    avatar: null,
    toolbarSelected: null,
    packageAlreadySelected: null,
    fetchUserMenu: 0,
    profileCheckList: {
        dashboardFirstTimer: false,
        // Step 1.0
        profileImageUploaded: false,
        heroBannerUploadBtnX: 220,
        heroBannerUploadBtnY: 400,
        // Step 1.1
        socialNavClicked: false,
        socialIconClicked: false,
        socialLinkPrefix: null,
        socialLinkAdded: false,
        navBarItem_linkX: 55,
        navBarItem_linkY: 186,
        socialSelectContainerX: 220,
        socialSelectContainerY: 170,
        socialMediaInputContainerX: 146,
        socialMediaInputContainerY: 540,
        // Step 2.0
        addSectionNavClicked: false,
        selectSectionClicked: false,
        // selectStyleClicked: false,//will be updated using API // TEMP Not in used Changed with `sectionAdded`
        // selectStyleClicked1: false,
        navBarItem_plusX: 55,
        navBarItem_plusY: 102,
        sectionSelectionWrapperX: 200,
        sectionSelectionWrapperY: 120,
        styleSectionWrapperX: 380,
        styleSectionWrapperY: 140,
        selectedSection: "",
        isSelectedSectionX: 424,
        isSelectedSectionY: 220,
        cardTitleAdded: false,
        cardTitleX: 240,
        cardTitleY: 240,
        sectionAdded: false,
        sectionEdited: false,
        sections: {},
        // Step 3.0
        publishBtnClicked: false,
        publishBtnX: 1420,
        publishBtnY: 40,
        sharedLinkClicked: false,
        shareLinkX: 746,
        shareLinkY: 580
    }
};
function MainReducer_initialStateFunc(state = MainReducer_initialState, action) {
    switch(action.type){
        case "SET_TIER":
            return {
                ...state,
                tier: action.payload
            };
        case "UPDATE_AVATAR":
            return {
                ...state,
                avatar: action.payload
            };
        case "SET_CONFIGURATIONS":
            return {
                ...state,
                configurations: action.payload
            };
        case "SLIDER_SECTION_DATA":
            return {
                ...state,
                sliderData: action?.payload
            };
        case "SET_HEADER_ACTIVE_TAB":
            return {
                ...state,
                headerActiveTab: action.payload
            };
        case "SET_SECTION_VARIATIONS":
            return {
                ...state,
                section_variations: action.payload
            };
        case "FIRST_TIMER":
            return {
                ...state,
                firstTimer: action.payload
            };
        case "TOGGLE_ZOOM":
            return {
                ...state,
                zoomed: !state.zoomed
            };
        case "TOGGLE_BANNER_INVERSION":
            return {
                ...state,
                invertedBanner: !state.invertedBanner
            };
        case "USER_SELECTED_ROLE":
            return {
                ...state,
                role: action?.payload
            };
        case "BANNER_FLIP_X":
            return {
                ...state
            };
        //  return { ...state, mirror_x: !state.mirror_x };
        case "BANNER_FLIP_Y":
            return {
                ...state
            };
        //  return { ...state, mirror_y: !state.mirror_y };
        case "CHANGE_BANNER_INVERSION":
            return {
                ...state,
                invertedBanner: action.payload
            };
        case "NAV_SECTION_UPDATE":
            return {
                ...state,
                nav_section_updated: new Date()
            };
        case "BANNER_SECTION_UPDATE":
            return {
                ...state,
                banner_section_updated: new Date()
            };
        case "CONTACT_SECTION_UPDATE":
            return {
                ...state,
                contact_section_updated: new Date()
            };
        case "PROJECT_SECTION_UPDATE":
            return {
                ...state,
                project_section_updated: new Date()
            };
        case "STAT_SECTION_UPDATE":
            return {
                ...state,
                stat_section_updated: new Date()
            };
        case "HIGHLIGHTS_SECTION_UPDATE":
            return {
                ...state,
                stat_section_updated: new Date()
            };
        case "PRICING_SECTION_UPDATE":
            return {
                ...state,
                price_section_updated: new Date()
            };
        case "SERVICES_SECTION_UPDATE":
            return {
                ...state,
                service_section_updated: new Date()
            };
        case "BOOKS_SECTION_UPDATE":
            return {
                ...state,
                book_section_updated: new Date()
            };
        case "EDUCATION_SECTION_UPDATE":
            return {
                ...state,
                education_section_updated: new Date()
            };
        case "INTERNSHIP_SECTION_UPDATE":
            return {
                ...state,
                internship_section_updated: new Date()
            };
        case "BLOGS_SECTION_UPDATE":
            return {
                ...state,
                blog_section_updated: new Date()
            };
        case "COUPON_SECTION_UPDATE":
            return {
                ...state,
                coupon_section_updated: new Date()
            };
        case "COLLAB_SECTION_UPDATE":
            return {
                ...state,
                collab_section_updated: new Date()
            };
        case "VIDEOS_SECTION_UPDATE":
            return {
                ...state,
                video_section_updated: new Date()
            };
        case "EXPERIENCE_SECTION_UPDATE":
            return {
                ...state,
                experience_section_updated: new Date()
            };
        case "MUSIC_SECTION_UPDATE":
            return {
                ...state,
                music_section_updated: new Date()
            };
        case "CUSTOM_SECTION_UPDATE":
            return {
                ...state,
                custom_section_updated: new Date()
            };
        case "GALLERY_SECTION_UPDATE":
            return {
                ...state,
                gallery_section_updated: new Date()
            };
        case "UPLOAD_GENERIC_CARD_THUMBNAIL":
            return {
                ...state,
                upload_generic_card_thumbnail: new Date()
            };
        case "SET_SUBDOMAIN":
            return {
                ...state,
                subDomain: action.payload
            };
        case "SOCIAL_SECTION_UPDATE":
            return {
                ...state,
                social_section_updated: new Date()
            };
        case "GALLERY_SECTION":
            return {
                ...state,
                addGallery: action.payload
            };
        case "STAT_SECTION":
            return {
                ...state,
                addStats: action.payload
            };
        case "READ_MESSAGE":
            return {
                ...state,
                addStats: action.payload
            };
        case "DELETE_USER_MESSAGE":
            return {
                ...state,
                addStats: action.payload
            };
        case "CONTACT_SECTION":
            return {
                ...state,
                addContact: action.payload
            };
        case "SERVICE_SECTION":
            return {
                ...state,
                addServices: action.payload
            };
        case "PRICING_SECTION":
            return {
                ...state,
                addPricing: action.payload
            };
        case "SET_FETCH_USER_MENU":
            return {
                ...state,
                fetchUserMenu: action.payload
            };
        case "SET_USER_MENU":
            return {
                ...state,
                user_menu: action.payload
            };
        case "SET_USER_THEME":
            return {
                ...state,
                user_theme: action.payload,
                style_class: action.payload.theme?.style_class
            };
        case "SET_DRAFTS":
            return {
                ...state,
                drafts: action.payload
            };
        case "LOADING_TRUE":
            return {
                ...state,
                isLoading: true
            };
        case "LOADING_FALSE":
            return {
                ...state,
                isLoading: false
            };
        case "OPEN_SIDEBAR":
            return {
                ...state,
                showSidebar: true
            };
        case "CLOSE_SIDEBAR":
            return {
                ...state,
                showSidebar: false,
                toolbarSelected: null
            };
        case "BOTTOM_TAB_OPEN":
            return {
                ...state,
                tabOpen: true,
                bottomSelectedSection: action.payload
            };
        case "BOTTOM_TAB_CLOSE":
            return {
                ...state,
                tabOpen: false,
                toolbarSelected: null
            };
        case "SHOW_BOTTOM_TAB":
            return {
                ...state,
                showBottomTab: true
            };
        case "HIDE_BOTTOM_TAB":
            return {
                ...state,
                showBottomTab: false
            };
        case "LOGOUT":
            return {
                ...MainReducer_initialState
            };
        case "SET_SELECTED_VIDEO":
            return {
                ...state,
                selected_video: action.payload
            };
        case "REMOVE_EMPTY_CART":
            {
                return {
                    ...state,
                    remCard: action.payload
                };
            }
        case "SET_UNREAD_MESSAGES":
            return {
                ...state,
                unreadMessages: action.payload
            };
        case "SET_COLOR_ID":
            return {
                ...state,
                user_theme: {
                    ...state.user_theme,
                    theme_color: {
                        ...state.user_theme.theme_color,
                        id: action.payload
                    },
                    color_id: action.payload
                }
            };
        case "SET_TOOLBAR_SELECTED":
            return {
                ...state,
                toolbarSelected: action.payload
            };
        case "SET_USER_THEME_SECTIONS":
            return {
                ...state,
                user_theme: {
                    ...state.user_theme,
                    sections: action.payload
                }
            };
        case "SET_PACKAGE_ALREADY_SELECTED":
            return {
                ...state,
                packageAlreadySelected: action.payload
            };
        case "SET_PROFILE_CHECK_LIST":
            return {
                ...state,
                profileCheckList: {
                    ...state.profileCheckList,
                    [action.key]: action.payload
                }
            };
        case "RESET_SOCIAL_LINK_STEP":
            return {
                ...state,
                profileCheckList: {
                    ...state.profileCheckList,
                    socialNavClicked: false,
                    socialIconClicked: false,
                    socialLinkPrefix: false,
                    socialLinkAdded: false
                }
            };
        default:
            return state;
    }
}

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./src/Redux/Reducer/index.js



/* harmony default export */ const Reducer = ((0,external_redux_.combineReducers)({
    root: MainReducer_initialStateFunc,
    auth: initialStateFunc
}));

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./src/Redux/store.js



const composeEnhancers =  false ? 0 : external_redux_.compose;
// const composeEnhancers = compose;
const store = (0,external_redux_.createStore)(Reducer, composeEnhancers((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));
/* harmony default export */ const Redux_store = (store);


/***/ })

};
;
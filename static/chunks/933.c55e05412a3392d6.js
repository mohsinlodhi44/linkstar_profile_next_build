(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{5627:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return S}});var i,l=t(5893),o=t(7294),r=t(4051),d=t(2664),s=t(3360),n=t(8951),c=t(6464),u=t(1054),A=t(8182),m=t(7139);t(8594),t(4064);var v=t(8351),g=t(1596),x=t(5093),_=t(6860);(0,d.$j)(null,{uploadGenericCardThumbnail:x.Ku,deleteGenericItem:x.DQ})(function(e){var a;let t=e.card_title,i=e.card_detail,[r,n]=(0,o.useState)(t),[c,u]=(0,o.useState)(i),x=(0,d.v9)(e=>e.root.subDomain),p=(0,d.I0)(),[f,h]=(0,o.useState)(0),[b,C]=(0,o.useState)(null),[j,B]=(0,o.useState)(void 0),[E,L]=(0,o.useState)(!1),[I,y]=(0,o.useState)(!1),Z=()=>{p({type:"SET_PROFILE_CHECK_LIST",payload:!0,key:"sectionEdited"})},N=e=>{if(e.target.files[0].size<5e6){if(e.target.files&&e.target.files.length>0){let a=new FileReader;a.addEventListener("load",()=>{let e=a.result;B(e),L(!0)}),a.readAsDataURL(e.target.files[0])}}else(0,s.cB)("Image file size should be less than 5 MB")},S=(a,t)=>{L(!1),C(URL.createObjectURL(t));let i=new FormData;i.append("file",t),i.append("id",f),i.append("section",null==e?void 0:e.section),y(!0),(null==e?void 0:e.section)==="collab"&&i.append("column_name","mini_image"),null==e||e.uploadGenericCardThumbnail(i).then(e=>{e.success?y(!1):(0,s.cB)(null==e?void 0:e.message)}).catch(e=>(y(!1),(0,s.cB)(e.message)))};return(0,o.useEffect)(()=>{if(e.item){var a,l,o,r,d,s;h(null!==(r=null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.id)&&void 0!==r?r:0),C((null===(l=e.item)||void 0===l?void 0:l.mini_image_url)?null===(o=e.item)||void 0===o?void 0:o.mini_image_url:null==e?void 0:e.image),n(null!==(d=null==e?void 0:e.item.title)&&void 0!==d?d:t),u(null!==(s=null==e?void 0:e.item.detail)&&void 0!==s?s:i)}},[e.item]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(A.Z.Body,{className:"portfolio-card-body",children:[(0,l.jsx)(_.Z,{modalOpen:E,setModalOpen:L,uploadApi:S,imageToCrop:j,aspectRatio:16/9,section:null==e?void 0:e.section,circular:e.circular}),(0,l.jsxs)("div",{className:"user-info-box",children:[(0,l.jsxs)("div",{className:"user-img-box",children:[!x&&(0,l.jsx)(v.Z,{pen:(null==e?void 0:e.section)+(null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.id),showDeleteIcon:!1,onImageChange:N}),I&&(0,l.jsx)(g.Z,{child:!0}),(0,l.jsx)("img",{className:"user-img img-fluid",src:b||(null==e?void 0:e.image),alt:""})]}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{tag:"div",text:r,placeholderText:t,className:"card-title",characterLimit:24,draftText:a=>{var t;(0,s.P2)(a,e.draft,"title",null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id),Z()}})})]}),(0,l.jsx)(m.Z,{tag:"p",text:c,placeholderText:i,className:"card-text",characterLimit:128,draftText:a=>{var t;return(0,s.P2)(a,e.draft,"detail",null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)}})]})})});var p={src:"/_next/static/media/Collab_85_by_85.893f05ba.jpg",height:85,width:85,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqYX/xAAcEAABAwUAAAAAAAAAAAAAAAACAAERBRIVJKH/2gAIAQEAAT8ADJDUTYm1ZkSu5C//xAAXEQADAQAAAAAAAAAAAAAAAAABESEA/9oACAECAQE/ACogpv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwBdv//Z",blurWidth:8,blurHeight:8};t(8891);var f=t(4843),h=t(5875),b=t(5697),C=t.n(b);function j(e){let[a,t]=(0,o.useState)(0),[i,r]=(0,o.useState)(""),[s,n]=(0,o.useState)(""),[c,u]=(0,o.useState)(0),[m,v]=(0,o.useState)(""),[g,x]=(0,o.useState)(""),[_,p]=(0,o.useState)(!1),b=(0,d.v9)(e=>e.root.subDomain);(0,d.v9)(e=>e.root.isMobile),(0,d.I0)();let C=()=>p(!1),j=()=>p(!0),B=()=>{(0,h.L$)(a,m,g,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)},E=()=>{(0,h.Y4)(a,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,o.useEffect)(()=>{if(e.item){var a,i,l,o,d,s,c,A,m,g,_;t(null!==(c=null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.id)&&void 0!==c?c:0),r(null!==(A=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_title)&&void 0!==A?A:""),n(null!==(m=null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.button_url)&&void 0!==m?m:""),v(null!==(g=null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.button_title)&&void 0!==g?g:""),x(null!==(_=null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_url)&&void 0!==_?_:""),u(null==e?void 0:null===(s=e.item)||void 0===s?void 0:s.button_visible)}},[null==e?void 0:e.item]),(0,l.jsxs)(l.Fragment,{children:[_&&(0,l.jsx)(f.RQ,{buttonVisible:c,button_title_input:m,button_url_input:g,setButtonTitleInput:v,setButtonUrlInput:x,handleClose:C,handleToggleButton:E,handleUpdateBtn:B}),(0,l.jsxs)(A.Z.Footer,{children:[c?(0,l.jsx)(f.fh,{button_url_input:g,buttonTitle:i,section:null==e?void 0:e.section}):null,b?null:(0,l.jsx)(f.z4,{buttonVisible:c,handleShow:j})]})]})}j.prototype={text:C().string},j.defaultProps={text:"Join"};var B=t(2862),E=t.n(B),L=function(e){var a,t;let i=e.card_title,r=e.card_detail,[n,c]=(0,o.useState)(!1),[u,v]=(0,o.useState)(!1),[x,b]=(0,o.useState)(null),[C,B]=(0,o.useState)(null),[L,I]=(0,o.useState)(!1),[y,Z]=(0,o.useState)(!1),N=(0,d.v9)(e=>e.root.subDomain),[S,w]=(0,o.useState)(i),[T,Q]=(0,o.useState)(r),[F,D]=(0,o.useState)(0),[R,k]=(0,o.useState)(!1);(0,d.I0)();let P=(a,t)=>R?(0,h.N4)(t,c,B,Z,F,null==e?void 0:e.section,{column_name:"mini_image"}):(0,h.N4)(t,c,b,I,F,null==e?void 0:e.section),M=e=>{"mini"===e.target.getAttribute("data-imagetype")?k(!0):k(!1),(0,h.hS)(e,v,c)},U=()=>{(0,h.wz)(F,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,o.useEffect)(()=>{if(e.item){var a,t,l,o,d,s,n,c;D(null!==(s=null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.id)&&void 0!==s?s:0),b((null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.thumbnail)?null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url:null==e?void 0:e.image),B((null===(o=e.item)||void 0===o?void 0:o.mini_image_url)?null===(d=e.item)||void 0===d?void 0:d.mini_image_url:p),w(null!==(n=null==e?void 0:e.item.title)&&void 0!==n?n:i),Q(null!==(c=null==e?void 0:e.item.detail)&&void 0!==c?c:r)}},[e.item]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(A.Z,{className:"basic-long-card ".concat(E().basicLongCard),children:[!N&&(0,l.jsxs)("div",{className:"cardActions",children:[(0,l.jsx)(f.GH,{pen:(null==e?void 0:e.section)+(null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.id)+"_nhkb",item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:L,onImageChange:M,dataImageType:"large"}),(0,l.jsx)(f.dA,{deleteMe:U})]}),(0,l.jsx)(A.Z.Header,{className:E().cardHeader,style:{backgroundImage:x&&"url(".concat(x,"), linear-gradient( ","180deg"," , rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)")},children:L&&(0,l.jsx)(g.Z,{child:!0})}),(0,l.jsxs)(A.Z.Body,{children:[(0,l.jsxs)("div",{className:"user-info-box ".concat(E().userInfoBox),children:[(0,l.jsxs)("div",{className:"user-img-box ".concat(E().userImgBox),children:[!N&&(0,l.jsx)("div",{className:"cardActions ImageUpload",children:(0,l.jsx)(f.GH,{pen:(null==e?void 0:e.section)+(null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id),item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:y,onImageChange:M,dataImageType:"mini"})}),y&&(0,l.jsx)(g.Z,{child:!0}),(0,l.jsx)("img",{className:"user-img img-fluid ".concat(E().userImg),src:C,alt:"user avatar"})]}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{tag:"h4",text:S,placeholderText:i,className:"card-title ".concat(E().cardTitle),characterLimit:24,draftText:a=>{var t;(0,s.P2)(a,e.draft,"title",null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id),(0,s.tG)()}})})]}),(0,l.jsx)(m.Z,{tag:"p",text:T,placeholderText:r,className:"card-text ".concat(E().cardText),characterLimit:128,draftText:a=>{var t;return(0,s.P2)(a,e.draft,"detail",null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)}})]}),(0,l.jsx)(j,{name:"Join Now",item:null==e?void 0:e.item,section:null==e?void 0:e.section,reduxDispatch:null==e?void 0:e.reduxDispatch,draft:null==e?void 0:e.draft})]}),(0,l.jsx)(_.Z,{modalOpen:n,setModalOpen:c,uploadApi:P,imageToCrop:u,aspectRatio:1,section:null==e?void 0:e.section,circular:e.circular})]})},I={src:"/_next/static/media/Collab.2fc70653.jpg",height:305,width:305,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAALguH//EABoQAQABBQAAAAAAAAAAAAAAAAEDAAIRIWH/2gAIAQEAAT8Ajsj0ZDq1/8QAHBEAAQMFAAAAAAAAAAAAAAAAAQACIQMREjFx/9oACAECAQE/AKd8ZcTJ31f/xAAZEQABBQAAAAAAAAAAAAAAAAARAAECITH/2gAIAQMBAT8AmDgpl//Z",blurWidth:8,blurHeight:8},y=t(2332),Z=t(9541);t(3751),null===Z.Z||void 0===Z.Z||Z.Z.dispatch;let N=null===Z.Z||void 0===Z.Z?void 0:Z.Z.getState();null==N||null===(i=N.root)||void 0===i||i.subDomain;var S=function(e){var a,t;let i=(0,d.v9)(e=>e.root.subDomain),s=i?"":"Share your favorite brand collaborations here",[A,m]=(0,o.useState)(s),[v,g]=(0,o.useState)([]);(0,d.v9)(e=>e.root.isMobile);let[x,_]=(0,o.useState)(""),p=(0,d.v9)(e=>e.root.collab_section_updated),b={card_title:"Collab",card_detail:"Share your favorite brand collaborations here",detailPlaceholder:"Briefly share your experience here",draft:"collab_items",section:null==e?void 0:e.slug,reduxDispatch:"COLLAB_SECTION_UPDATE",buttonText:"Check Now",image:I,titleLimit:50,textLimit:150},[C,j]=(0,o.useState)(0),[B,E]=(0,o.useState)(!1),Z=(0,o.useRef)(!0),[N,S]=(0,o.useState)(e.section_data);return(0,o.useEffect)(()=>{var e,a;j(null==N?void 0:N.id),m(null!==(a=null==N?void 0:N.title)&&void 0!==a?a:s),g(null==N?void 0:N.items),_(null==N?void 0:null===(e=N.variation)||void 0===e?void 0:e.slug),Z.current=!1},[p]),(0,l.jsx)(c.Z,{className:"freelancer-service-box theme-service-box",id:"services",style:{borderRadius:"20px"},visible:null==e?void 0:null===(a=e.section_data)||void 0===a?void 0:a.visible,children:B?(0,l.jsx)(n.Z,{display:"section"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Z,{sectionName:"Collaboration",title:A,placeHolderTitle:s,draftText:"collab_sections",id:e.section_data.id,addFunction:h.jX,characterLimit:120,sectionSlug:e.slug,dispatchType:"COLLAB_SECTION_UPDATE",visible:(null==e?void 0:null===(t=e.section_data)||void 0===t?void 0:t.visible)==1}),(0,l.jsx)(u.Z,{scrollerX:(null==v?void 0:v.length)>1,children:(0,l.jsx)(r.Z,{className:"wrapper-box ".concat((null==v?void 0:v.length)>1?"multi-child-card flex-nowrap w-100":""),children:(0,l.jsx)(f.zp,{section_data:N,items:v,variation:x,STYLES:{style_1:{component:L,props:b},default:{component:L,props:b}}})})})]})})}},1596:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var i=t(5893);t(7294);var l=t(760),o=t.n(l);function r(e){return(0,i.jsx)("div",{className:o().loading})}},2862:function(e){e.exports={basicLongCard:"BasicLongCard_basicLongCard__NS33L",cardHeader:"BasicLongCard_cardHeader__W9W5c",img_wrapper_box:"BasicLongCard_img_wrapper_box__gt5Lp",img_wrapper_box_loader:"BasicLongCard_img_wrapper_box_loader__AjkBQ",cardTitle:"BasicLongCard_cardTitle__q2_Xp",cardText:"BasicLongCard_cardText__GEn55","basic-long-card":"BasicLongCard_basic-long-card__7xMUE","card-body":"BasicLongCard_card-body__zwWPS","portfolio-card-body":"BasicLongCard_portfolio-card-body__96_0t",userInfoBox:"BasicLongCard_userInfoBox__c7ggh",userImgBox:"BasicLongCard_userImgBox__9eLsg",userImg:"BasicLongCard_userImg__lUylP","card-title":"BasicLongCard_card-title__PBL0W","card-text":"BasicLongCard_card-text__5oygu",collab:"BasicLongCard_collab__WRV4d",style_3:"BasicLongCard_style_3__tVmWz","card-header":"BasicLongCard_card-header__E4Lvm","user-img-box":"BasicLongCard_user-img-box__QTYXC","user-img":"BasicLongCard_user-img__5rCQV",imageLoaderCard:"BasicLongCard_imageLoaderCard__C7TkN","user-info-box":"BasicLongCard_user-info-box__Ium_N","card-edit-block":"BasicLongCard_card-edit-block__OKMNL"}},760:function(e){e.exports={cardImageLoaderBox:"CardImageLoader_cardImageLoaderBox__flZEo",loaderBox:"CardImageLoader_loaderBox__AJHAo",loaderImg:"CardImageLoader_loaderImg__KWr_k",loading:"CardImageLoader_loading__6ZuRa",spinner:"CardImageLoader_spinner__ms0Dn"}},8182:function(e,a,t){"use strict";t.d(a,{Z:function(){return j}});var i=t(4184),l=t.n(i),o=t(7294),r=t(6792),d=t(6611),s=t(9602),n=t(5893);let c=o.forwardRef(({bsPrefix:e,className:a,variant:t,as:i="img",...o},d)=>{let s=(0,r.vE)(e,"card-img");return(0,n.jsx)(i,{ref:d,className:l()(t?`${s}-${t}`:s,a),...o})});c.displayName="CardImg";var u=t(9059);let A=o.forwardRef(({bsPrefix:e,className:a,as:t="div",...i},d)=>{let s=(0,r.vE)(e,"card-header"),c=(0,o.useMemo)(()=>({cardHeaderBsPrefix:s}),[s]);return(0,n.jsx)(u.Z.Provider,{value:c,children:(0,n.jsx)(t,{ref:d,...i,className:l()(a,s)})})});A.displayName="CardHeader";let m=(0,s.Z)("h5"),v=(0,s.Z)("h6"),g=(0,d.Z)("card-body"),x=(0,d.Z)("card-title",{Component:m}),_=(0,d.Z)("card-subtitle",{Component:v}),p=(0,d.Z)("card-link",{Component:"a"}),f=(0,d.Z)("card-text",{Component:"p"}),h=(0,d.Z)("card-footer"),b=(0,d.Z)("card-img-overlay"),C=o.forwardRef(({bsPrefix:e,className:a,bg:t,text:i,border:o,body:d,children:s,as:c="div",...u},A)=>{let m=(0,r.vE)(e,"card");return(0,n.jsx)(c,{ref:A,...u,className:l()(a,m,t&&`bg-${t}`,i&&`text-${i}`,o&&`border-${o}`),children:d?(0,n.jsx)(g,{children:s}):s})});C.displayName="Card",C.defaultProps={body:!1};var j=Object.assign(C,{Img:c,Title:x,Subtitle:_,Body:g,Link:p,Text:f,Header:A,Footer:h,ImgOverlay:b})},9301:function(e,a,t){"use strict";t.d(a,{Z:function(){return S}});var i=t(4184),l=t.n(i),o=t(5697),r=t.n(o),d=t(7294),s=t(5893);let n={type:r().string,tooltip:r().bool,as:r().elementType},c=d.forwardRef(({as:e="div",className:a,type:t="valid",tooltip:i=!1,...o},r)=>(0,s.jsx)(e,{...o,ref:r,className:l()(a,`${t}-${i?"tooltip":"feedback"}`)}));c.displayName="Feedback",c.propTypes=n;var u=t(6558),A=t(1377),m=t(6792);let v=d.forwardRef(({bsPrefix:e,className:a,htmlFor:t,...i},o)=>{let{controlId:r}=(0,d.useContext)(A.Z);return e=(0,m.vE)(e,"form-check-label"),(0,s.jsx)("label",{...i,ref:o,htmlFor:t||r,className:l()(a,e)})});v.displayName="FormCheckLabel";let g=d.forwardRef(({id:e,bsPrefix:a,bsSwitchPrefix:t,inline:i=!1,reverse:o=!1,disabled:r=!1,isValid:n=!1,isInvalid:g=!1,feedbackTooltip:x=!1,feedback:_,feedbackType:p,className:f,style:h,title:b="",type:C="checkbox",label:j,children:B,as:E="input",...L},I)=>{a=(0,m.vE)(a,"form-check"),t=(0,m.vE)(t,"form-switch");let{controlId:y}=(0,d.useContext)(A.Z),Z=(0,d.useMemo)(()=>({controlId:e||y}),[y,e]),N=!B&&null!=j&&!1!==j||d.Children.toArray(B).some(e=>d.isValidElement(e)&&e.type===v),S=(0,s.jsx)(u.Z,{...L,type:"switch"===C?"checkbox":C,ref:I,isValid:n,isInvalid:g,disabled:r,as:E});return(0,s.jsx)(A.Z.Provider,{value:Z,children:(0,s.jsx)("div",{style:h,className:l()(f,N&&a,i&&`${a}-inline`,o&&`${a}-reverse`,"switch"===C&&t),children:B||(0,s.jsxs)(s.Fragment,{children:[S,N&&(0,s.jsx)(v,{title:b,children:j}),_&&(0,s.jsx)(c,{type:p,tooltip:x,children:_})]})})})});g.displayName="FormCheck";var x=Object.assign(g,{Input:u.Z,Label:v});t(2473);let _=d.forwardRef(({bsPrefix:e,type:a,size:t,htmlSize:i,id:o,className:r,isValid:n=!1,isInvalid:c=!1,plaintext:u,readOnly:v,as:g="input",...x},_)=>{let p;let{controlId:f}=(0,d.useContext)(A.Z);return e=(0,m.vE)(e,"form-control"),p=u?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${t}`]:t},(0,s.jsx)(g,{...x,type:a,size:i,ref:_,readOnly:v,id:o||f,className:l()(r,p,n&&"is-valid",c&&"is-invalid","color"===a&&`${e}-color`)})});_.displayName="FormControl";var p=Object.assign(_,{Feedback:c}),f=(0,t(6611).Z)("form-floating");let h=d.forwardRef(({controlId:e,as:a="div",...t},i)=>{let l=(0,d.useMemo)(()=>({controlId:e}),[e]);return(0,s.jsx)(A.Z.Provider,{value:l,children:(0,s.jsx)(a,{...t,ref:i})})});h.displayName="FormGroup";var b=t(1555);let C=d.forwardRef(({as:e="label",bsPrefix:a,column:t,visuallyHidden:i,className:o,htmlFor:r,...n},c)=>{let{controlId:u}=(0,d.useContext)(A.Z);a=(0,m.vE)(a,"form-label");let v="col-form-label";"string"==typeof t&&(v=`${v} ${v}-${t}`);let g=l()(o,a,i&&"visually-hidden",t&&v);return(r=r||u,t)?(0,s.jsx)(b.Z,{ref:c,as:"label",className:g,htmlFor:r,...n}):(0,s.jsx)(e,{ref:c,className:g,htmlFor:r,...n})});C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};let j=d.forwardRef(({bsPrefix:e,className:a,id:t,...i},o)=>{let{controlId:r}=(0,d.useContext)(A.Z);return e=(0,m.vE)(e,"form-range"),(0,s.jsx)("input",{...i,type:"range",ref:o,className:l()(a,e),id:t||r})});j.displayName="FormRange";let B=d.forwardRef(({bsPrefix:e,size:a,htmlSize:t,className:i,isValid:o=!1,isInvalid:r=!1,id:n,...c},u)=>{let{controlId:v}=(0,d.useContext)(A.Z);return e=(0,m.vE)(e,"form-select"),(0,s.jsx)("select",{...c,size:t,ref:u,className:l()(i,e,a&&`${e}-${a}`,o&&"is-valid",r&&"is-invalid"),id:n||v})});B.displayName="FormSelect";let E=d.forwardRef(({bsPrefix:e,className:a,as:t="small",muted:i,...o},r)=>(e=(0,m.vE)(e,"form-text"),(0,s.jsx)(t,{...o,ref:r,className:l()(a,e,i&&"text-muted")})));E.displayName="FormText";let L=d.forwardRef((e,a)=>(0,s.jsx)(x,{...e,ref:a,type:"switch"}));L.displayName="Switch";var I=Object.assign(L,{Input:x.Input,Label:x.Label});let y=d.forwardRef(({bsPrefix:e,className:a,children:t,controlId:i,label:o,...r},d)=>(e=(0,m.vE)(e,"form-floating"),(0,s.jsxs)(h,{ref:d,className:l()(a,e),controlId:i,...r,children:[t,(0,s.jsx)("label",{htmlFor:i,children:o})]})));y.displayName="FloatingLabel";let Z={_ref:r().any,validated:r().bool,as:r().elementType},N=d.forwardRef(({className:e,validated:a,as:t="form",...i},o)=>(0,s.jsx)(t,{...i,ref:o,className:l()(e,a&&"was-validated")}));N.displayName="Form",N.propTypes=Z;var S=Object.assign(N,{Group:h,Control:p,Floating:f,Check:x,Switch:I,Label:C,Text:E,Range:j,Select:B,FloatingLabel:y})},6558:function(e,a,t){"use strict";var i=t(4184),l=t.n(i),o=t(7294),r=t(1377),d=t(6792),s=t(5893);let n=o.forwardRef(({id:e,bsPrefix:a,className:t,type:i="checkbox",isValid:n=!1,isInvalid:c=!1,as:u="input",...A},m)=>{let{controlId:v}=(0,o.useContext)(r.Z);return a=(0,d.vE)(a,"form-check-input"),(0,s.jsx)(u,{...A,ref:m,type:i,id:e||v,className:l()(t,a,n&&"is-valid",c&&"is-invalid")})});n.displayName="FormCheckInput",a.Z=n},1377:function(e,a,t){"use strict";var i=t(7294);let l=i.createContext({});a.Z=l}}]);
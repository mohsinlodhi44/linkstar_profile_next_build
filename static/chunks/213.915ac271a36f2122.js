(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{640:function(e,t,l){"use strict";var o=l(1742),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var l,n,a,r,d,c,u,s,v=!1;t||(t={}),a=t.debug||!1;try{if(d=o(),c=document.createRange(),u=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(l){if(l.stopPropagation(),t.format){if(l.preventDefault(),void 0===l.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e)}t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(s),c.selectNodeContents(s),u.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");v=!0}catch(A){a&&console.error("unable to copy using execCommand: ",A),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),v=!0}catch(m){a&&console.error("unable to copy using clipboardData: ",m),a&&console.error("falling back to prompt"),l="message"in t?t.message:"Copy to clipboard: #{key}, Enter",n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",r=l.replace(/#{\s*key\s*}/g,n),window.prompt(r,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),s&&document.body.removeChild(s),d()}return v}},3521:function(e,t){"use strict";t.Z={src:"/_next/static/media/Blog_400_by_400.2651507f.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQb/2gAMAwEAAhADEAAAAKhTH//EAB0QAAEDBQEAAAAAAAAAAAAAAAECBREAAwQSEzL/2gAIAQEAAT8AVaaC168wjOj0AuAZr//EABoRAAICAwAAAAAAAAAAAAAAAAERAiEAEiL/2gAIAQIBAT8AhHR9Esu7z//EABYRAAMAAAAAAAAAAAAAAAAAAAABcf/aAAgBAwEBPwBw/9k=",blurWidth:8,blurHeight:8}},7316:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var o=l(5893);l(7294);var i=l(9301),n=l(2318),a=l(5935),r=l(1562);function d(e){var t,l;return(0,o.jsxs)(i.Z.Group,{className:"mb-3 ".concat(e.classNameGroup),controlId:"formBasicEmail",children:[(0,o.jsx)(i.Z.Label,{className:"mb-2 ".concat(e.classNameLabel),children:e.label}),(0,o.jsxs)(n.Z,{className:e.classNameGroup,hasValidation:!0,children:[e.autoComplete?(0,o.jsx)(i.Z.Control,{type:e.type,placeholder:e.placeholder,value:e.value,name:e.name,autoComplete:null==e?void 0:e.autoComplete,hidden:!0,className:null==e?void 0:e.className}):null,e.as?(0,o.jsx)(i.Z.Control,{placeholder:e.placeholder,value:e.value,name:e.name,autoComplete:null!==(t=null==e?void 0:e.autoComplete)&&void 0!==t?t:"on",onChange:e.onChange,onKeyUp:e.onKeyUp,onKeyPress:e.onKeyPress,onBlur:null==e?void 0:e.onBlur,required:e.require,isValid:e.isValid,isInvalid:e.isInvalid,className:null==e?void 0:e.className,as:null==e?void 0:e.as}):(0,o.jsx)(i.Z.Control,{type:e.type,placeholder:e.placeholder,value:e.value,name:e.name,autoComplete:null!==(l=null==e?void 0:e.autoComplete)&&void 0!==l?l:"on",onChange:e.onChange,onKeyUp:e.onKeyUp,onKeyPress:e.onKeyPress,onBlur:null==e?void 0:e.onBlur,required:e.require,isValid:e.isValid,isInvalid:e.isInvalid,className:null==e?void 0:e.className}),(null==e?void 0:e.hasGroup)&&(0,o.jsx)(n.Z.Text,{className:null==e?void 0:e.groupClassName,id:"inputGroupPrepend",children:null==e?void 0:e.groupText}),e.message&&(0,o.jsx)(i.Z.Text,{className:"d-flex w-100 text-muted",children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:(0,a.ZP)(r.Zn),alt:"icon"}),(0,o.jsx)("span",{className:"ps-1",children:e.message})]})}),(0,o.jsx)(i.Z.Control.Feedback,{type:"invalid",children:(0,o.jsx)("span",{children:e.errorMsg})})]})]})}},15:function(e,t,l){"use strict";var o=l(5893),i=l(7294),n=l(8182),a=l(5697),r=l.n(a),d=l(2664),c=l(5875),u=l(4843),s=l(9865),v=l.n(s);function m(e){let[t,l]=(0,i.useState)(0),[a,r]=(0,i.useState)(""),[s,m]=(0,i.useState)(""),[A,p]=(0,i.useState)(0),[_,x]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),[h,C]=(0,i.useState)(!1),b=(0,d.v9)(e=>e.root.subDomain);(0,d.v9)(e=>e.root.isMobile),(0,d.I0)();let y=()=>C(!1),j=()=>C(!0),S=()=>{(0,c.L$)(t,_,g,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)},B=()=>{(0,c.Y4)(t,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,i.useEffect)(()=>{if(e.item){var t,o,i,n,a,d,c,u,s,v,A;l(null!==(c=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==c?c:0),r(null!==(u=null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.button_title)&&void 0!==u?u:""),m(null!==(s=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_url)&&void 0!==s?s:""),x(null!==(v=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_title)&&void 0!==v?v:""),f(null!==(A=null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.button_url)&&void 0!==A?A:""),p(null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_visible)}},[null==e?void 0:e.item]),(0,o.jsxs)(o.Fragment,{children:[h&&(0,o.jsx)(u.RQ,{buttonVisible:A,button_title_input:_,button_url_input:g,setButtonTitleInput:x,setButtonUrlInput:f,handleClose:y,handleToggleButton:B,handleUpdateBtn:S}),(0,o.jsxs)(n.Z.Footer,{className:"".concat(v().cardFooter," ").concat(e.className),children:[A?(0,o.jsx)(u.fh,{classNameButton:e.classNameButton,button_url_input:g,buttonTitle:a,section:null==e?void 0:e.section}):null,b?null:(0,o.jsx)(u.z4,{buttonVisible:A,handleShow:j})]})]})}m.prototype={text:r().string},m.defaultProps={text:"Join"},t.Z=m},7438:function(e,t,l){"use strict";var o=l(5893);l(7294);var i=l(8182),n=l(5005);l(2664);var a=l(3360),r=l(8891),d=l.n(r),c=l(4855),u=l(1477),s=l.n(u);t.Z=function(e){let t=()=>{(0,a.t5)("Copied Promo Code")};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z.Footer,{className:"".concat(e.className," ").concat(s().cardFooter),children:(0,o.jsx)(c.CopyToClipboard,{text:e.bodyTitle.replace(/<\/?[^>]+(>|$)/g,""),children:(0,o.jsx)(n.Z,{className:"".concat(s().btnPrimary," ").concat(e.classNameButton),onClick:()=>{t(),d().track("Button Pressed - Promo Footer - Copy Code")},variant:" ",children:ReactHtmlParser(e.buttonTitle)})})})})}},5736:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return z}});var o,i=l(5893),n=l(7294),a=l(4051),r=l(2664),d=l(3360);l(653),l(3751);var c=l(8951),u=l(6464),s=l(2332),v=l(1054),m=l(8182),A=l(7814);l(7316),l(1562);var p=l(7139),_=l(1596),x=l(6860),g=l(4843),f=l(5875),h=l(15),C=l(5866),b=l.n(C),y=function(e){var t,l;let o=e.card_title,a=e.card_detail,c=null==e?void 0:e.defaultImg,[u,s]=(0,n.useState)(o),[v,A]=(0,n.useState)(a),C=(0,r.v9)(e=>e.root.subDomain);(0,r.I0)();let[y,j]=(0,n.useState)(0),[S,B]=(0,n.useState)(""),[I,T]=(0,n.useState)(""),[N,F]=(0,n.useState)(0),[w,E]=(0,n.useState)(""),[D,Z]=(0,n.useState)(""),[P,L]=(0,n.useState)(null),[O,R]=(0,n.useState)(!1),[G,k]=(0,n.useState)(null),[Q,M]=(0,n.useState)(!1),[z,U]=(0,n.useState)(!1),H=(t,l)=>{(0,f.N4)(l,M,L,U,y,null==e?void 0:e.section)},K=e=>{(0,f.hS)(e,k,M)},V=()=>{(0,f.wz)(y,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};(0,n.useEffect)(()=>{if(e.item){var t,l,i,n,r,d,u,v,m,p,_,x,g,f,h;j(null!==(v=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==v?v:0),L(null!==(m=null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url)&&void 0!==m?m:c),s(null!==(p=null==e?void 0:e.item.title)&&void 0!==p?p:o),B(null!==(_=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_title)&&void 0!==_?_:""),T(null!==(x=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_url)&&void 0!==x?x:""),E(null!==(g=null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.button_title)&&void 0!==g?g:""),Z(null!==(f=null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_url)&&void 0!==f?f:""),F(null==e?void 0:null===(u=e.item)||void 0===u?void 0:u.button_visible),A(null!==(h=null==e?void 0:e.item.detail)&&void 0!==h?h:a)}},[e.item]);let Y=e=>{s(e.target.innerHTML)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.Z,{className:"".concat(b().themeGenericCard," ").concat(e.className),children:[C?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:b().cardActionBox,children:[(0,i.jsx)(g.GH,{classImageChangeIcon:b().imageChangeIcon,item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:z,onImageChange:K}),(0,i.jsx)(g.dA,{classDeleteIcon:b().deleteIcon,deleteMe:V})]})}),(0,i.jsxs)(m.Z.Body,{className:b().cardBody,children:[(0,i.jsxs)("div",{className:b().imgBox,children:[z&&(0,i.jsx)(_.Z,{child:!0}),(0,i.jsx)(m.Z.Img,{className:"img-fluid ".concat(b().imgCard),src:""!==P?P:c,onError:e=>e.target.src=c})]}),(0,i.jsx)(p.Z,{onBlur:e=>{Y(e),(0,d.tG)()},tag:"h4",text:u,placeholderText:o,className:"card-title ".concat(b().cardTitle),characterLimit:null!==(t=e.titleLimit)&&void 0!==t?t:48,draftText:t=>{var l;return(0,d.P2)(t,e.draft,"title",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id)}}),(0,i.jsx)(p.Z,{tag:"p",text:v,placeholderText:a,className:"card-text ".concat(b().cardText),characterLimit:null!==(l=e.textLimit)&&void 0!==l?l:128,draftText:t=>{var l;(0,d.P2)(t,e.draft,"detail",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}})]}),(0,i.jsx)(h.Z,{name:"Read more",item:null==e?void 0:e.item,section:null==e?void 0:e.section,reduxDispatch:null==e?void 0:e.reduxDispatch,draft:null==e?void 0:e.draft,className:b().cardFooter})]}),(0,i.jsx)(x.Z,{modalOpen:Q,setModalOpen:M,uploadApi:H,imageToCrop:G,aspectRatio:16/9,section:null==e?void 0:e.section,circular:e.circular})]})},j=l(5418),S=l.n(j),B=l(5697),I=l.n(B);function T(e){let[t,l]=(0,n.useState)(0),[o,a]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[u,s]=(0,n.useState)(0),[v,A]=(0,n.useState)(""),[p,_]=(0,n.useState)(""),[x,h]=(0,n.useState)(!1),C=(0,r.v9)(e=>e.root.subDomain);(0,r.v9)(e=>e.root.isMobile),(0,r.I0)();let b=()=>h(!1),y=()=>h(!0),j=()=>{(0,f.L$)(t,v,p,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)},S=()=>{(0,f.Y4)(t,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,n.useEffect)(()=>{if(e.item){var t,o,i,n,r,d,u,v,m,p,x;l(null!==(u=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==u?u:0),a(null!==(v=null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.button_title)&&void 0!==v?v:""),c(null!==(m=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_url)&&void 0!==m?m:""),A(null!==(p=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_title)&&void 0!==p?p:""),_(null!==(x=null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.button_url)&&void 0!==x?x:""),s(null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_visible)}},[null==e?void 0:e.item]),(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(g.RQ,{buttonVisible:u,button_title_input:v,button_url_input:p,setButtonTitleInput:A,setButtonUrlInput:_,handleClose:b,handleToggleButton:S,handleUpdateBtn:j}),(0,i.jsxs)(m.Z.Footer,{className:e.className,children:[u?(0,i.jsx)(g.U7,{classNameButton:e.classNameButton,button_url_input:p,buttonTitle:o,section:null==e?void 0:e.section}):null,C?null:(0,i.jsx)(g.z4,{classNameButtonLink:e.classNameButtonLink,buttonVisible:u,handleShow:y})]})]})}T.prototype={text:I().string},T.defaultProps={text:"Join"};var N=function(e){var t,l;let o=e.card_title,a=e.card_detail,c=null==e?void 0:e.defaultImg,[u,s]=(0,n.useState)(o),[v,A]=(0,n.useState)(a),h=(0,r.v9)(e=>e.root.subDomain);(0,r.I0)();let[C,b]=(0,n.useState)(0),[y,j]=(0,n.useState)(""),[B,I]=(0,n.useState)(""),[N,F]=(0,n.useState)(0),[w,E]=(0,n.useState)(""),[D,Z]=(0,n.useState)(""),[P,L]=(0,n.useState)(null),[O,R]=(0,n.useState)(!1),[G,k]=(0,n.useState)(null),[Q,M]=(0,n.useState)(!1),[z,U]=(0,n.useState)(!1),H=(t,l)=>{(0,f.N4)(l,M,L,U,C,null==e?void 0:e.section)},K=e=>{(0,f.hS)(e,k,M)},V=()=>{(0,f.wz)(C,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,n.useEffect)(()=>{if(e.item){var t,l,i,n,r,d,u,v,m,p,_,x,g,f,h;b(null!==(v=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==v?v:0),L(null!==(m=null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url)&&void 0!==m?m:c),s(null!==(p=null==e?void 0:e.item.title)&&void 0!==p?p:o),j(null!==(_=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_title)&&void 0!==_?_:""),I(null!==(x=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_url)&&void 0!==x?x:""),E(null!==(g=null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.button_title)&&void 0!==g?g:""),Z(null!==(f=null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_url)&&void 0!==f?f:""),F(null==e?void 0:null===(u=e.item)||void 0===u?void 0:u.button_visible),A(null!==(h=null==e?void 0:e.item.detail)&&void 0!==h?h:a)}},[e.item]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(m.Z,{className:"".concat(S().horizontalCard," ").concat(e.className),children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.Z.Body,{className:"".concat(S().cardBody),children:[(0,i.jsx)(x.Z,{modalOpen:Q,setModalOpen:M,uploadApi:H,imageToCrop:G,aspectRatio:16/9,section:null==e?void 0:e.section,circular:e.circular}),!h&&(0,i.jsx)("div",{className:"cardActions",children:(0,i.jsx)(g.dA,{deleteMe:V})}),(0,i.jsxs)("div",{className:"".concat(S().imgBox),children:[(0,i.jsx)("div",{className:"cardActions",children:(0,i.jsx)(g.GH,{item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:z,onImageChange:K})}),(0,i.jsx)("img",{src:P||(null!==(t=null==e?void 0:e.image)&&void 0!==t?t:c),className:"img-fluid img",onChange:K,onError:e=>e.target.src=c}),(0,i.jsx)("div",{className:"basicVariantBody_loader",children:z&&(0,i.jsx)(_.Z,{child:!0})})]}),(0,i.jsxs)("div",{className:"contentBox",children:[(0,i.jsx)(p.Z,{tag:"h4",text:u,placeholderText:o,className:"card-title ".concat(S().cardTitle),characterLimit:48,draftText:t=>{var l;(0,d.P2)(t,e.draft,"title",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()},onBlur:e=>{s(e.target.innerHTML)}}),(0,i.jsx)(p.Z,{tag:"p",text:v,placeholderText:null==e?void 0:e.card_detail_placeholder,className:"card-text ".concat(S().cardText),characterLimit:null!==(l=e.textLimit)&&void 0!==l?l:128,draftText:t=>{var l;(0,d.P2)(t,e.draft,"detail",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}})]})]}),(0,i.jsx)(T,{name:"Read more",item:null==e?void 0:e.item,section:null==e?void 0:e.section,reduxDispatch:null==e?void 0:e.reduxDispatch,draft:null==e?void 0:e.draft,className:S().cardFooter,classNameButton:S().button,classNameButtonLink:S().link})]})})})};l(3521);var F=l(6462),w=l.n(F),E=function(e){var t,l;let o=e.card_title,a=e.card_detail,c=null==e?void 0:e.defaultImg,[u,s]=(0,n.useState)(o),[v,A]=(0,n.useState)(a),_=(0,r.v9)(e=>e.root.subDomain);(0,r.I0)();let[h,C]=(0,n.useState)(0),[b,y]=(0,n.useState)(""),[j,S]=(0,n.useState)(""),[B,I]=(0,n.useState)(0),[T,N]=(0,n.useState)(""),[F,E]=(0,n.useState)(""),[D,Z]=(0,n.useState)(null),[P,L]=(0,n.useState)(!1),[O,R]=(0,n.useState)(null),[G,k]=(0,n.useState)(!1),[Q,M]=(0,n.useState)(!1),z=()=>L(!1),U=()=>L(!0),H=(t,l)=>{(0,f.N4)(l,k,Z,M,h,null==e?void 0:e.section)},K=()=>{(0,f.L$)(h,T,F,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)},V=()=>{(0,f.Y4)(h,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)},Y=e=>{(0,f.hS)(e,R,k)},J=()=>{(0,f.wz)(h,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};(0,n.useEffect)(()=>{if(e.item){var t,l,i,n,r,d,u,v,m,p,_,x,g,f,h;C(null!==(v=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==v?v:0),Z(null!==(m=null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url)&&void 0!==m?m:c),s(null!==(p=null==e?void 0:e.item.title)&&void 0!==p?p:o),y(null!==(_=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_title)&&void 0!==_?_:""),S(null!==(x=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_url)&&void 0!==x?x:""),N(null!==(g=null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.button_title)&&void 0!==g?g:""),E(null!==(f=null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.button_url)&&void 0!==f?f:""),I(null==e?void 0:null===(u=e.item)||void 0===u?void 0:u.button_visible),A(null!==(h=null==e?void 0:e.item.detail)&&void 0!==h?h:a)}},[e.item]);let X=e=>{s(e.target.innerHTML)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m.Z,{className:"".concat(w().semiFullImgCard," ").concat(e.className),children:[_?null:(0,i.jsx)(n.Fragment,{children:(0,i.jsxs)("div",{className:"".concat(w().cardActions),children:[(0,i.jsx)(g.GH,{item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:Q,onImageChange:Y}),(0,i.jsx)(g.dA,{deleteMe:J})]})}),(0,i.jsxs)(m.Z.Body,{className:"".concat(w().cardBody),style:{backgroundImage:"linear-gradient(rgba(19, 19, 19, 0) 0%, rgb(19, 19, 19) 100%), url( ".concat(""!==D?D:c," )")},children:[(0,i.jsx)(p.Z,{onBlur:e=>{X(e),(0,d.tG)()},tag:"h4",text:u,placeholderText:o,className:"title card-title h5 ".concat(w().cardTitle," "),characterLimit:null!==(t=e.titleLimit)&&void 0!==t?t:48,draftText:t=>{var l;return(0,d.P2)(t,e.draft,"title",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id)}}),(0,i.jsx)(p.Z,{tag:"p",text:v,placeholderText:a,className:"card-text ".concat(w().cardText),characterLimit:null!==(l=e.textLimit)&&void 0!==l?l:128,draftText:t=>{var l;(0,d.P2)(t,e.draft,"detail",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}})]}),P&&(0,i.jsx)(g.RQ,{buttonVisible:B,button_title_input:T,button_url_input:F,setButtonTitleInput:N,setButtonUrlInput:E,handleClose:z,handleToggleButton:V,handleUpdateBtn:K}),(0,i.jsxs)(m.Z.Footer,{className:"".concat(w().cardFooter),children:[B?(0,i.jsx)(g.fh,{button_url_input:F,buttonTitle:b,section:null==e?void 0:e.section}):null,_?null:(0,i.jsx)(g.z4,{buttonVisible:B,handleShow:U})]})]}),(0,i.jsx)(x.Z,{modalOpen:G,setModalOpen:k,uploadApi:H,imageToCrop:O,aspectRatio:16/9,section:null==e?void 0:e.section,circular:e.circular})]})};l(7438);var D=l(6096),Z=l.n(D),P=(0,r.$j)()(function(e){var t,l,o;let a=null==e?void 0:e.card_title,c=null==e?void 0:e.card_detail,u=null==e?void 0:e.defaultImg,{item:s={}}=e,v=(0,r.v9)(e=>e.root.subDomain),[A,h]=(0,n.useState)(a),[C,b]=(0,n.useState)(c),[y,j]=(0,n.useState)(null),[S,B]=(0,n.useState)(0),[I,N]=(0,n.useState)(null),[F,w]=(0,n.useState)(!1),[E,D]=(0,n.useState)(!1),P=(t,l)=>{(0,f.N4)(l,w,j,D,S,null==e?void 0:e.section)},L=e=>{(0,f.hS)(e,N,w)},O=()=>{(0,f.wz)(S,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,n.useEffect)(()=>{if(e.item){var t,l,o,i,n,a,r,d,c,s,v;h(null!==(i=null==e?void 0:e.item.title)&&void 0!==i?i:e.card_title),j((null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.thumbnail)?null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url:null!==(c=null!==(d=null!==(r=null!==(a=null!==(n=null!=u?u:null==e?void 0:e.image)&&void 0!==n?n:e.default_img)&&void 0!==a?a:e.image)&&void 0!==r?r:e.image)&&void 0!==d?d:e.defaultImgPromo)&&void 0!==c?c:e.imageBook),B(null!==(s=null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.id)&&void 0!==s?s:0),b(null!==(v=null==e?void 0:e.item.detail)&&void 0!==v?v:C)}},[e.item]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{className:"".concat(Z().circleImageCard," ").concat(e.className),children:[(0,i.jsxs)(m.Z.Body,{className:Z().cardBody,children:[(0,i.jsxs)("div",{className:Z().imgBox,children:[E&&(0,i.jsx)(_.Z,{className:Z().imgLoader,child:!0}),(0,i.jsx)(m.Z.Img,{className:"img-fluid ".concat(Z().imgCard),src:y||(null!==(t=null==e?void 0:e.defaultImage)&&void 0!==t?t:u),onError:e=>e.target.src=u})]}),(0,i.jsx)(x.Z,{modalOpen:F,setModalOpen:w,uploadApi:P,imageToCrop:I,aspectRatio:1,section:null==e?void 0:e.section,circular:e.circular}),!v&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:Z().cardActionBox,children:[(0,i.jsx)(g.GH,{classImageChangeIcon:Z().imageChangeIcon,item:null==e?void 0:e.item,section:null==e?void 0:e.section,imageLoader:E,onImageChange:L}),(0,i.jsx)(g.dA,{classDeleteIcon:Z().deleteIcon,deleteMe:O})]})}),(0,i.jsx)(p.Z,{tag:"h4",text:A,placeholderText:null==e?void 0:e.card_title_placeholder,className:"card-title ".concat(Z().cardTitle),characterLimit:null!==(l=e.titleLimit)&&void 0!==l?l:48,draftText:t=>{var l;(0,d.P2)(t,e.draft,"title",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}}),(0,i.jsx)(p.Z,{tag:"p",text:C,placeholderText:null==e?void 0:e.card_detail_placeholder,className:"card-text ".concat(Z().cardText),characterLimit:null!==(o=e.textLimit)&&void 0!==o?o:128,draftText:t=>{var l;(0,d.P2)(t,e.draft,"detail",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}})]}),(0,i.jsx)(T,{name:"Read more",item:null==e?void 0:e.item,section:null==e?void 0:e.section,reduxDispatch:null==e?void 0:e.reduxDispatch,draft:null==e?void 0:e.draft,className:Z().cardFooter,classNameButton:Z().button})]})})}),L=l(9398),O=l(3782),R=l.n(O),G=function(e){var t,l;let[o,a]=(0,n.useState)(!1),[c,u]=(0,n.useState)(0),[s,v]=(0,n.useState)(0),_=null==e?void 0:e.card_title,x=null==e?void 0:e.card_detail,C=null==e?void 0:e.defaultImg,[b,y]=(0,n.useState)(_),[j,S]=(0,n.useState)(x),B=(0,r.v9)(e=>e.root.subDomain);(0,r.I0)();let[I,T]=(0,n.useState)(""),[N,F]=(0,n.useState)(""),[w,E]=(0,n.useState)(0),[D,Z]=(0,n.useState)(""),[P,O]=(0,n.useState)(""),[G,k]=(0,n.useState)(null),[Q,M]=(0,n.useState)(null),[z,U]=(0,n.useState)(!1),[H,K]=(0,n.useState)(!1),V=()=>{(0,f.wz)(c,null==e?void 0:e.section,null==e?void 0:e.reduxDispatch)};return(0,n.useEffect)(()=>{if(null==e?void 0:e.item){var t,l,o,i,n,a,r,d,c,s,m,A,p,g,f;u(null!==(d=null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)&&void 0!==d?d:0),v((null==e?void 0:e.index)+1),k(null!==(c=null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.thumbnail_url)&&void 0!==c?c:C),y(null!==(s=null==e?void 0:e.item.title)&&void 0!==s?s:_),T(null!==(m=null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.button_title)&&void 0!==m?m:""),F(null!==(A=null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.button_url)&&void 0!==A?A:""),Z(null!==(p=null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.button_title)&&void 0!==p?p:""),O(null!==(g=null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.button_url)&&void 0!==g?g:""),E(null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.button_visible),S(null!==(f=null==e?void 0:e.item.detail)&&void 0!==f?f:x)}},[null==e?void 0:e.item]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Z,{className:"".concat(R().flipCard," ").concat(e.classNameWrapper," ").concat(o?"".concat(R().flip," ").concat(R().flipback):""),children:[(0,i.jsxs)(m.Z.Body,{className:"".concat(R().cardBody," ").concat(R().frontCard," "),children:[B?null:(0,i.jsx)("div",{className:R().cardActionBox,children:(0,i.jsx)(g.dA,{classDeleteIcon:R().deleteIcon,deleteMe:V})}),(0,i.jsx)("h4",{className:R().counterText,children:s}),(0,i.jsx)(p.Z,{tag:"h4",text:b,placeholderText:_,className:"".concat(e.cardTitleClassName," ").concat(R().cardTitle," card-title"),characterLimit:null!==(t=e.titleLimit)&&void 0!==t?t:48,draftText:t=>{var l;(0,d.P2)(t,e.draft,"title",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()}}),(0,i.jsx)("hr",{className:R().lineBar}),(0,i.jsx)("div",{className:R().arrowIconBox,onClick:()=>a(!o),children:(0,i.jsx)(A.G,{icon:L.eFW,className:R().iconRight})})]}),(0,i.jsxs)(m.Z.Body,{className:"".concat(R().cardBody," ").concat(R().backCard),children:[B?null:(0,i.jsx)("div",{className:R().cardActionBox,children:(0,i.jsx)(g.dA,{classDeleteIcon:R().deleteIcon,deleteMe:V})}),(0,i.jsx)("div",{className:"".concat(R().iconBoxLeft),children:(0,i.jsx)(A.G,{icon:L.NBC,className:R().iconLeft,onClick:()=>a(!o)})}),(0,i.jsx)(p.Z,{tag:"p",text:j,placeholderText:x,className:"".concat(e.cardDescClassName," ").concat(R().cardText," card-text"),characterLimit:null!==(l=e.textLimit)&&void 0!==l?l:128,draftText:t=>{var l;(0,d.P2)(t,e.draft,"detail",null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id),(0,d.tG)()},onBlur:t=>{let l=t.target.innerHTML;e.setDetail(l)}}),(0,i.jsx)(h.Z,{name:"Read more",item:null==e?void 0:e.item,section:null==e?void 0:e.section,reduxDispatch:null==e?void 0:e.reduxDispatch,draft:null==e?void 0:e.draft,className:R().cardFooter,classNameButton:R().button})]})]})})},k={src:"/_next/static/media/Services_380_by_380.eafa0091.jpg",height:380,width:380,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAQb/2gAMAwEAAhADEAAAAIFYf//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQSAAVR0f/aAAgBAQABPwAozDuqNKgMwXurYh8z/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACAyL/2gAIAQIBAT8AzxqllbPTP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},Q=l(9541);l(5093),l(8891),null===Q.Z||void 0===Q.Z||Q.Z.dispatch;let M=null===Q.Z||void 0===Q.Z?void 0:Q.Z.getState();null==M||null===(o=M.root)||void 0===o||o.subDomain;var z=function(e){var t,l;let o=(0,r.v9)(e=>e.root.subDomain),d=o?"":"Share your favourite Service with your audience",[m,A]=(0,n.useState)(d),[p,_]=(0,n.useState)([]);(0,r.v9)(e=>e.root.isMobile);let[x,h]=(0,n.useState)("");(0,r.v9)(e=>e.root.user_theme.theme.style_class);let C=(0,r.v9)(e=>e.root.service_section_updated),b={card_title:"Service Title",card_detail:"Write a short description/review about the book and let people know why they should give it a read",draft:"service_items",section:null==e?void 0:e.slug,reduxDispatch:"SERVICES_SECTION_UPDATE",buttonText:"Listen Now",titleLimit:50,textLimit:50,defaultImg:k},[j,S]=(0,n.useState)(0),[B,I]=(0,n.useState)(!1),T=(0,n.useRef)(!0),[F,w]=(0,n.useState)(e.section_data),D="style_4"===x?"flex-wrap":(null==p?void 0:p.length)>1?"multi-child-card flex-nowrap w-100":"";return(0,n.useEffect)(()=>{var e,t;S(null==F?void 0:F.id),A(null!==(t=null==F?void 0:F.title)&&void 0!==t?t:d),_(null==F?void 0:F.items),h(null==F?void 0:null===(e=F.variation)||void 0===e?void 0:e.slug),T.current=!1},[C]),(0,i.jsx)(u.Z,{className:"freelancer-service-box theme-service-box",id:"services",style:{borderRadius:"20px"},visible:null==e?void 0:null===(t=e.section_data)||void 0===t?void 0:t.visible,children:B?(0,i.jsx)(c.Z,{display:"section"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{sectionName:"Service",title:m,placeHolderTitle:d,draftText:"user_sections",id:j,addFunction:f.jX,characterLimit:120,sectionSlug:e.slug,dispatchType:"SERVICES_SECTION_UPDATE",visible:(null==e?void 0:null===(l=e.section_data)||void 0===l?void 0:l.visible)==1}),(0,i.jsx)(v.Z,{scrollerX:"style_4"==x||(null==p?void 0:p.length)>1,children:(0,i.jsx)(a.Z,{className:"wrapper-box ".concat("style_4"==x?"flex-nowrap w-100":""," ").concat(x," ").concat(D),children:(0,i.jsx)(g.zp,{section_data:F,items:p,variation:x,STYLES:{style_1:{component:y,props:b},style_2:{component:E,props:b},style_3:{component:P,props:b},style_4:{component:N,props:b},style_5:{component:G,props:b},default:{component:y,props:b}},sectionId:"services"})})})]})})}},1596:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var o=l(5893);l(7294);var i=l(760),n=l.n(i);function a(e){return(0,o.jsx)("div",{className:n().loading})}},9865:function(e){e.exports={cardFooter:"CardFooter_cardFooter__BAzjy",cardFooterArrow:"CardFooter_cardFooterArrow__MGOJj"}},1477:function(e){e.exports={cardFooter:"CouponFooter_cardFooter__Gw0ln",btnPrimary:"CouponFooter_btnPrimary__taRBD"}},6096:function(e){e.exports={circleImageCard:"CircleImageCard_circleImageCard__wpVu6",cardBody:"CircleImageCard_cardBody__Y0_W6",cardActionBox:"CircleImageCard_cardActionBox__zRHxN",deleteIcon:"CircleImageCard_deleteIcon__F7ZKJ",imageChangeIcon:"CircleImageCard_imageChangeIcon__J1GT7",imgBox:"CircleImageCard_imgBox__uwcQr",imgCard:"CircleImageCard_imgCard__s3Hes",cardTitle:"CircleImageCard_cardTitle__89V1k",cardText:"CircleImageCard_cardText__RQlP6",cardFooter:"CircleImageCard_cardFooter__5jW55",button:"CircleImageCard_button__hr6rE","img-Card":"CircleImageCard_img-Card__21yJU"}},3782:function(e){e.exports={flipCard:"FlipCard_flipCard__tIG64",cardActionBox:"FlipCard_cardActionBox__gFb_R",deleteIcon:"FlipCard_deleteIcon__riDpJ",flip:"FlipCard_flip__T6h8O",cardBody:"FlipCard_cardBody__anVmt",frontCard:"FlipCard_frontCard__6tB17",counterText:"FlipCard_counterText__CKzGU",cardTitle:"FlipCard_cardTitle__VApCi",cardText:"FlipCard_cardText__FpB2a",lineBar:"FlipCard_lineBar__BxNXX",arrowIconBox:"FlipCard_arrowIconBox__ddYUC",iconRight:"FlipCard_iconRight__JaCdf",backCard:"FlipCard_backCard__62sNR",iconBoxLeft:"FlipCard_iconBoxLeft__bLBRd",iconLeft:"FlipCard_iconLeft__JdXgA",cardFooter:"FlipCard_cardFooter__1HPgH",button:"FlipCard_button__8_Uij"}},5866:function(e){e.exports={themeGenericCard:"GenericCard_themeGenericCard__WaIUQ",cardActionBox:"GenericCard_cardActionBox__GeQ32",deleteIcon:"GenericCard_deleteIcon__u80BX",imageChangeIcon:"GenericCard_imageChangeIcon__140QK",imgBox:"GenericCard_imgBox__b2TXx",cardBody:"GenericCard_cardBody__7XALE",imgCard:"GenericCard_imgCard__8zpfg",cardTitle:"GenericCard_cardTitle__Xm9p8",cardText:"GenericCard_cardText__M5ERk",cardFooter:"GenericCard_cardFooter__hgHns"}},5418:function(e){e.exports={horizontalCard:"HorizontalCard_horizontalCard__wvWxx",cardActions:"HorizontalCard_cardActions__dlOoY",imgBox:"HorizontalCard_imgBox__c8InL",cardBody:"HorizontalCard_cardBody__ySTmF",cardTitle:"HorizontalCard_cardTitle__CidPY",cardText:"HorizontalCard_cardText__UxgTY",cardFooter:"HorizontalCard_cardFooter__kvjcq",button:"HorizontalCard_button__XOzY4",link:"HorizontalCard_link__K1lR1"}},6462:function(e){e.exports={cardActions:"SemiFullImageCard_cardActions__hH0cw",semiFullImgCard:"SemiFullImageCard_semiFullImgCard__h96h7",cardBody:"SemiFullImageCard_cardBody__9cYsn",cardTitle:"SemiFullImageCard_cardTitle__VK7EC",cardText:"SemiFullImageCard_cardText__c_FWl",cardFooter:"SemiFullImageCard_cardFooter__JoEzn","btn-outline-primary":"SemiFullImageCard_btn-outline-primary__voKza","btn-check":"SemiFullImageCard_btn-check__2t6sO",active:"SemiFullImageCard_active__GoPya","dropdown-toggle":"SemiFullImageCard_dropdown-toggle__nLGPp",show:"SemiFullImageCard_show__PTxEZ"}},760:function(e){e.exports={cardImageLoaderBox:"CardImageLoader_cardImageLoaderBox__flZEo",loaderBox:"CardImageLoader_loaderBox__AJHAo",loaderImg:"CardImageLoader_loaderImg__KWr_k",loading:"CardImageLoader_loading__6ZuRa",spinner:"CardImageLoader_spinner__ms0Dn"}},4300:function(e,t,l){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var i=r(l(7294)),n=r(l(640)),a=["text","onCopy","options","children"];function r(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,o)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?d(Object(l),!0).forEach(function(t){A(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function u(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(p,e);var t,l,r,d=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,l=m(p);if(t){var i=m(this).constructor;e=Reflect.construct(l,arguments,i)}else e=l.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,l=Array(t),o=0;o<t;o++)l[o]=arguments[o];return A(v(e=d.call.apply(d,[this].concat(l))),"onClick",function(t){var l=e.props,o=l.text,a=l.onCopy,r=l.children,d=l.options,c=i.default.Children.only(r),u=(0,n.default)(o,d);a&&a(o,u),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)}),e}return l=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),l=function(e,t){if(null==e)return{};var l,o,i=function(e,t){if(null==e)return{};var l,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)l=n[o],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}(e,a),o=i.default.Children.only(t);return i.default.cloneElement(o,c(c({},l),{},{onClick:this.onClick}))}}],u(p.prototype,l),r&&u(p,r),Object.defineProperty(p,"prototype",{writable:!1}),p}(i.default.PureComponent);t.CopyToClipboard=p,A(p,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,l){"use strict";var o=l(4300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,l=[],o=0;o<e.rangeCount;o++)l.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||l.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},9557:function(){}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{640:function(e,t,r){"use strict";var o=r(1742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,l,i,c,s,u,f,p=!1;t||(t={}),l=t.debug||!1;try{if(c=o(),s=document.createRange(),u=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(f),s.selectNodeContents(f),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(y){l&&console.error("unable to copy using execCommand: ",y),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(d){l&&console.error("unable to copy using clipboardData: ",d),l&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=r.replace(/#{\s*key\s*}/g,a),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),f&&document.body.removeChild(f),c()}return p}},8182:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var o=r(4184),n=r.n(o),a=r(7294),l=r(6792),i=r(6611),c=r(9602),s=r(5893);let u=a.forwardRef(({bsPrefix:e,className:t,variant:r,as:o="img",...a},i)=>{let c=(0,l.vE)(e,"card-img");return(0,s.jsx)(o,{ref:i,className:n()(r?`${c}-${r}`:c,t),...a})});u.displayName="CardImg";var f=r(9059);let p=a.forwardRef(({bsPrefix:e,className:t,as:r="div",...o},i)=>{let c=(0,l.vE)(e,"card-header"),u=(0,a.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,s.jsx)(f.Z.Provider,{value:u,children:(0,s.jsx)(r,{ref:i,...o,className:n()(t,c)})})});p.displayName="CardHeader";let d=(0,c.Z)("h5"),y=(0,c.Z)("h6"),m=(0,i.Z)("card-body"),b=(0,i.Z)("card-title",{Component:d}),v=(0,i.Z)("card-subtitle",{Component:y}),h=(0,i.Z)("card-link",{Component:"a"}),g=(0,i.Z)("card-text",{Component:"p"}),x=(0,i.Z)("card-footer"),C=(0,i.Z)("card-img-overlay"),w=a.forwardRef(({bsPrefix:e,className:t,bg:r,text:o,border:a,body:i,children:c,as:u="div",...f},p)=>{let d=(0,l.vE)(e,"card");return(0,s.jsx)(u,{ref:p,...f,className:n()(t,d,r&&`bg-${r}`,o&&`text-${o}`,a&&`border-${a}`),children:i?(0,s.jsx)(m,{children:c}):c})});w.displayName="Card",w.defaultProps={body:!1};var j=Object.assign(w,{Img:u,Title:b,Subtitle:v,Body:m,Link:h,Text:g,Header:p,Footer:x,ImgOverlay:C})},9301:function(e,t,r){"use strict";r.d(t,{Z:function(){return D}});var o=r(4184),n=r.n(o),a=r(5697),l=r.n(a),i=r(7294),c=r(5893);let s={type:l().string,tooltip:l().bool,as:l().elementType},u=i.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:o=!1,...a},l)=>(0,c.jsx)(e,{...a,ref:l,className:n()(t,`${r}-${o?"tooltip":"feedback"}`)}));u.displayName="Feedback",u.propTypes=s;var f=r(6558),p=r(1377),d=r(6792);let y=i.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...o},a)=>{let{controlId:l}=(0,i.useContext)(p.Z);return e=(0,d.vE)(e,"form-check-label"),(0,c.jsx)("label",{...o,ref:a,htmlFor:r||l,className:n()(t,e)})});y.displayName="FormCheckLabel";let m=i.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:o=!1,reverse:a=!1,disabled:l=!1,isValid:s=!1,isInvalid:m=!1,feedbackTooltip:b=!1,feedback:v,feedbackType:h,className:g,style:x,title:C="",type:w="checkbox",label:j,children:O,as:N="input",...E},R)=>{t=(0,d.vE)(t,"form-check"),r=(0,d.vE)(r,"form-switch");let{controlId:k}=(0,i.useContext)(p.Z),P=(0,i.useMemo)(()=>({controlId:e||k}),[k,e]),Z=!O&&null!=j&&!1!==j||i.Children.toArray(O).some(e=>i.isValidElement(e)&&e.type===y),D=(0,c.jsx)(f.Z,{...E,type:"switch"===w?"checkbox":w,ref:R,isValid:s,isInvalid:m,disabled:l,as:N});return(0,c.jsx)(p.Z.Provider,{value:P,children:(0,c.jsx)("div",{style:x,className:n()(g,Z&&t,o&&`${t}-inline`,a&&`${t}-reverse`,"switch"===w&&r),children:O||(0,c.jsxs)(c.Fragment,{children:[D,Z&&(0,c.jsx)(y,{title:C,children:j}),v&&(0,c.jsx)(u,{type:h,tooltip:b,children:v})]})})})});m.displayName="FormCheck";var b=Object.assign(m,{Input:f.Z,Label:y});r(2473);let v=i.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:o,id:a,className:l,isValid:s=!1,isInvalid:u=!1,plaintext:f,readOnly:y,as:m="input",...b},v)=>{let h;let{controlId:g}=(0,i.useContext)(p.Z);return e=(0,d.vE)(e,"form-control"),h=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,c.jsx)(m,{...b,type:t,size:o,ref:v,readOnly:y,id:a||g,className:n()(l,h,s&&"is-valid",u&&"is-invalid","color"===t&&`${e}-color`)})});v.displayName="FormControl";var h=Object.assign(v,{Feedback:u}),g=(0,r(6611).Z)("form-floating");let x=i.forwardRef(({controlId:e,as:t="div",...r},o)=>{let n=(0,i.useMemo)(()=>({controlId:e}),[e]);return(0,c.jsx)(p.Z.Provider,{value:n,children:(0,c.jsx)(t,{...r,ref:o})})});x.displayName="FormGroup";var C=r(1555);let w=i.forwardRef(({as:e="label",bsPrefix:t,column:r,visuallyHidden:o,className:a,htmlFor:l,...s},u)=>{let{controlId:f}=(0,i.useContext)(p.Z);t=(0,d.vE)(t,"form-label");let y="col-form-label";"string"==typeof r&&(y=`${y} ${y}-${r}`);let m=n()(a,t,o&&"visually-hidden",r&&y);return(l=l||f,r)?(0,c.jsx)(C.Z,{ref:u,as:"label",className:m,htmlFor:l,...s}):(0,c.jsx)(e,{ref:u,className:m,htmlFor:l,...s})});w.displayName="FormLabel",w.defaultProps={column:!1,visuallyHidden:!1};let j=i.forwardRef(({bsPrefix:e,className:t,id:r,...o},a)=>{let{controlId:l}=(0,i.useContext)(p.Z);return e=(0,d.vE)(e,"form-range"),(0,c.jsx)("input",{...o,type:"range",ref:a,className:n()(t,e),id:r||l})});j.displayName="FormRange";let O=i.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:o,isValid:a=!1,isInvalid:l=!1,id:s,...u},f)=>{let{controlId:y}=(0,i.useContext)(p.Z);return e=(0,d.vE)(e,"form-select"),(0,c.jsx)("select",{...u,size:r,ref:f,className:n()(o,e,t&&`${e}-${t}`,a&&"is-valid",l&&"is-invalid"),id:s||y})});O.displayName="FormSelect";let N=i.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:o,...a},l)=>(e=(0,d.vE)(e,"form-text"),(0,c.jsx)(r,{...a,ref:l,className:n()(t,e,o&&"text-muted")})));N.displayName="FormText";let E=i.forwardRef((e,t)=>(0,c.jsx)(b,{...e,ref:t,type:"switch"}));E.displayName="Switch";var R=Object.assign(E,{Input:b.Input,Label:b.Label});let k=i.forwardRef(({bsPrefix:e,className:t,children:r,controlId:o,label:a,...l},i)=>(e=(0,d.vE)(e,"form-floating"),(0,c.jsxs)(x,{ref:i,className:n()(t,e),controlId:o,...l,children:[r,(0,c.jsx)("label",{htmlFor:o,children:a})]})));k.displayName="FloatingLabel";let P={_ref:l().any,validated:l().bool,as:l().elementType},Z=i.forwardRef(({className:e,validated:t,as:r="form",...o},a)=>(0,c.jsx)(r,{...o,ref:a,className:n()(e,t&&"was-validated")}));Z.displayName="Form",Z.propTypes=P;var D=Object.assign(Z,{Group:x,Control:h,Floating:g,Check:b,Switch:R,Label:w,Text:N,Range:j,Select:O,FloatingLabel:k})},6558:function(e,t,r){"use strict";var o=r(4184),n=r.n(o),a=r(7294),l=r(1377),i=r(6792),c=r(5893);let s=a.forwardRef(({id:e,bsPrefix:t,className:r,type:o="checkbox",isValid:s=!1,isInvalid:u=!1,as:f="input",...p},d)=>{let{controlId:y}=(0,a.useContext)(l.Z);return t=(0,i.vE)(t,"form-check-input"),(0,c.jsx)(f,{...p,ref:d,type:o,id:e||y,className:n()(r,t,s&&"is-valid",u&&"is-invalid")})});s.displayName="FormCheckInput",t.Z=s},1377:function(e,t,r){"use strict";var o=r(7294);let n=o.createContext({});t.Z=n},4300:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(r(7294)),a=i(r(640)),l=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(m,e);var t,r,i,c=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d(m);if(t){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function m(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,m);for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return y(p(e=c.call.apply(c,[this].concat(r))),"onClick",function(t){var r=e.props,o=r.text,l=r.onCopy,i=r.children,c=r.options,s=n.default.Children.only(i),u=(0,a.default)(o,c);l&&l(o,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,l),o=n.default.Children.only(t);return n.default.cloneElement(o,s(s({},r),{},{onClick:this.onClick}))}}],u(m.prototype,r),i&&u(m,i),Object.defineProperty(m,"prototype",{writable:!1}),m}(n.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},4855:function(e,t,r){"use strict";var o=r(4300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{1037:function(e,i){i.Z={src:"/_next/static/media/Videos.4161bc3e.jpg",height:305,width:305,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAKcVj//EABsQAAEEAwAAAAAAAAAAAAAAABEABBITFEGB/9oACAEBAAE/AJucnVA6V//EABcRAAMBAAAAAAAAAAAAAAAAAAARIQH/2gAIAQIBAT8A2qI//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Ar//Z",blurWidth:8,blurHeight:8}},8040:function(e,i,s){var l=s(5893);s(7294);var t=s(3751),o=s(2664);s(7814);var n=s(5093);s(3360);var d=s(7189);i.Z=(0,o.$j)(t.K,{deleteGenericItem:n.DQ,fetchUserTheme:n.W9})(function(e){let i=(0,o.I0)(),s=(0,o.v9)(e=>e.root.isMobile),t=(0,o.v9)(e=>e.root.subDomain);(0,o.v9)(e=>e.root.video_section_updated);let{setVideoUrl:n,data:a,url:r,title:A,description:c,image:h,id:u}=e;return(0,l.jsx)(l.Fragment,{children:s?(0,l.jsx)("div",{style:{paddingRight:"4px"},onClick:()=>{i({type:"SET_SELECTED_VIDEO",payload:r})},children:(0,l.jsxs)("div",{className:"slick-slider-thumbnail-parent",children:[(0,l.jsx)("img",{src:h,className:"img-fluid slick-slider-thumbnail",style:{width:"100%",objectFit:"cover",border:"0.5px solid #999"}}),t?null:(0,l.jsx)(d.Z,{id:null==e?void 0:e.id,reduxDispatch:"VIDEOS_SECTION_UPDATE",section:null==e?void 0:e.section})]})}):(0,l.jsxs)("div",{onClick:()=>i({type:"SET_SELECTED_VIDEO",payload:r}),style:{cursor:"pointer"},className:"d-flex flex-row video-thumbnail-sec justify-content-around my-2",children:[t?null:(0,l.jsx)(d.Z,{id:null==e?void 0:e.id,reduxDispatch:"VIDEOS_SECTION_UPDATE",section:null==e?void 0:e.section}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:h,className:"video-thumbnail-img"})}),(0,l.jsxs)("div",{className:" video-thumbail-desc d-flex flex-column px-2",children:[(0,l.jsx)("h5",{className:"video-thumbnail-title",children:A}),(0,l.jsx)("h6",{className:"video-thumbnail-info",children:c})]})]})})})},7558:function(e,i,s){s.r(i);var l=s(4924),t=s(5893),o=s(7294),n=s(6066),d=s(7814),a=s(9398),r=s(2664),A=s(3751),c=s(3360),h=s(5093),u=s(2004),v=s(8040),m=s(1037);class p extends o.Component{componentDidMount(){this.setState({nav1:this.slider1,nav2:this.slider2})}render(){var e,i,s,l,{items:o,video_url:r=""}=this.state,A={dots:!1,infinite:!0,arrows:!1,accessibility:!0,speed:500,slidesToShow:2,slidesToScroll:2,initialSlide:1,nextArrow:(0,t.jsxs)("span",{className:"slider-icon right",children:[" ",(0,t.jsx)(d.G,{icon:a._tD})]}),prevArrow:(0,t.jsxs)("span",{className:"slider-icon left",children:[" ",(0,t.jsx)(d.G,{icon:a.A35})]}),responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},c={dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,nextArrow:!1,prevArrow:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:1,infinite:!0}},{breakpoint:923,settings:{slidesToShow:5,slidesToScroll:1,initialSlide:0,infinite:!0}},{breakpoint:600,settings:{slidesToShow:12,slidesToScroll:1,initialSlide:1,infinite:!1}},{breakpoint:480,settings:{infinite:(null==o?void 0:o.length)>4,slidesToShow:4,slidesToScroll:1,arrows:!1,nextArrow:!1,prevArrow:!1,swipeToSlide:!0}}]};return(0,t.jsx)("div",{style:{position:"relative"},children:(0,t.jsxs)("div",{className:"theme-video-box freelancer-video",id:"video",children:[(null===this||void 0===this?void 0:null===(e=this.props)||void 0===e?void 0:null===(i=e.myState)||void 0===i?void 0:null===(s=i.root)||void 0===s?void 0:s.subDomain)||null===this||void 0===this||null===(l=this.state)||void 0===l||!l.selectedSlideImage?null:(0,t.jsxs)("span",{className:"guide-msg-slider-section",onClick:this.deleteMe,children:[(0,t.jsx)(d.G,{className:"text-danger",icon:a.$aW})," click to delete"]}),(0,t.jsx)(n.Z,{...A,asNavFor:this.state.nav2,ref:e=>this.slider1=e,className:"gallery-main-slider",children:(0,t.jsx)(u.Z,{className:"mobile-responsive-video",width:350,height:210,url:null===this||void 0===this?void 0:this.props.video_url,playing:!1,controls:!0,muted:!1,volume:null})}),(0,t.jsx)(n.Z,{...c,asNavFor:this.state.nav1,ref:e=>this.slider2=e,swipeToSlide:!0,focusOnSelect:!0,className:"gallery-items-slider",children:o.length&&o.map(e=>{var i,s,l,o,n;return(0,t.jsx)("div",{children:(0,t.jsx)(v.Z,{url:null===(i=e.metadata)||void 0===i?void 0:i.url,title:null===(s=e.metadata)||void 0===s?void 0:s.title,description:null===(l=e.metadata)||void 0===l?void 0:l.description,image:e.metadata&&e.metadata["image:secure_url"]?e.metadata["image:secure_url"]:null!==(n=null===(o=e.metadata)||void 0===o?void 0:o.image)&&void 0!==n?n:m.Z,setVideoUrl:this.props.setVideoUrl,id:e.id,section:this.props.section})})})})]})})}constructor(e){super(e),(0,l.Z)(this,"deleteMe",()=>{var e,i,s;this.state.allowDelete&&(this.setState({allowDelete:!1}),null===this||void 0===this||null===(e=this.props)||void 0===e||e.deleteGenericItem({id:null===(i=this.state)||void 0===i?void 0:null===(s=i.selectedSlideImage)||void 0===s?void 0:s.id}).then(e=>{this.setState({allowDelete:!0}),(null==e?void 0:e.success)?this.forceUpdate():(0,c.cB)(null==e?void 0:e.message)}).catch(e=>{(0,c.cB)(null==e?void 0:e.message),this.setState({allowDelete:!0})}))}),this.state={nav1:null,nav2:null,selectedSlideImage:null,items:e.items,video_url:e.video_url,allowDelete:!0,variation:e.variation}}}i.default=(0,r.$j)(A.K,{deleteGenericItem:h.DQ})(p)},7189:function(e,i,s){var l=s(5893),t=s(7294),o=s(3751),n=s(5093),d=s(2664),a=s(9398),r=s(7814),A=s(3360);i.Z=(0,d.$j)(o.K,{deleteGenericItem:n.DQ,fetchUserTheme:n.W9})(function(e){let[i,s]=(0,t.useState)(!1),o=(0,d.I0)(),n=()=>{null==e||e.deleteGenericItem({id:null==e?void 0:e.id,section:null==e?void 0:e.section},o,null==e?void 0:e.fetchUserTheme).then(i=>{(null==i?void 0:i.success)?o({type:null==e?void 0:e.reduxDispatch}):(0,A.cB)(null==i?void 0:i.message)}).catch(e=>{(0,A.cB)(null==e?void 0:e.message)})};return(0,l.jsx)("div",{className:"card-edit-block",children:(0,l.jsx)("span",{className:"option-box edit-option",style:{cursor:"pointer"},children:(0,l.jsx)(r.G,{icon:a.$aW,className:"text-danger",onClick:()=>{i||n(),s(!0)}})})})})}}]);
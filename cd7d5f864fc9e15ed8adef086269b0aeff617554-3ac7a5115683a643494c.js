(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(e,t,a){(function(a){var r,o;o=void 0!==a?a:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),r=a.length,o=-1,i="",n=a.charCodeAt(0);++o<r;){if(0===(t=a.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===n?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(o):"\\"+a.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,a))},n=function(t,a,r,o){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(l,s){var c,d,u,f,h={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||n("scrollCancel",c)},animateScroll:function(r,l,s){h.cancelScroll();var d=a(c||t,s||{}),m="[object Number]"===Object.prototype.toString.call(r),p=m||!r.tagName?null:r;if(m||p){var g=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var v,y,b,S,w,E,I,L,O=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),x=m?r:function(t,a,r,i){var n=0;if(t.offsetParent)for(;n+=t.offsetTop,t=t.offsetParent;);return n=Math.max(n-a-r,0),i&&(n=Math.min(n,o()-e.innerHeight)),n}(p,O,parseInt("function"==typeof d.offset?d.offset(r,l):d.offset,10),d.clip),R=x-g,T=o(),z=0,C=(v=R,b=(y=d).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),I=r,L=d,m||history.pushState&&L.updateURL&&history.pushState({smoothScroll:JSON.stringify(L),anchor:I.id},document.title,I===document.documentElement?"#top":"#"+I.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(r,Math.floor(x),!1):(n("scrollStart",d,r,l),h.cancelScroll(!0),e.requestAnimationFrame((function t(a){var o,s,c;S||(S=a),z+=a-S,E=g+R*(s=w=1<(w=0===C?0:z/C)?1:w,"easeInQuad"===(o=d).easing&&(c=s*s),"easeOutQuad"===o.easing&&(c=s*(2-s)),"easeInOutQuad"===o.easing&&(c=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===o.easing&&(c=s*s*s),"easeOutCubic"===o.easing&&(c=--s*s*s+1),"easeInOutCubic"===o.easing&&(c=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===o.easing&&(c=s*s*s*s),"easeOutQuart"===o.easing&&(c=1- --s*s*s*s),"easeInOutQuart"===o.easing&&(c=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===o.easing&&(c=s*s*s*s*s),"easeOutQuint"===o.easing&&(c=1+--s*s*s*s*s),"easeInOutQuint"===o.easing&&(c=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),o.customEasing&&(c=o.customEasing(s)),c||s),e.scrollTo(0,Math.floor(E)),function(t,a){var o=e.pageYOffset;if(t==a||o==a||(g<a&&e.innerHeight+o)>=T)return h.cancelScroll(!0),i(r,a,m),n("scrollStop",d,r,l),!(f=S=null)}(E,x)||(f=e.requestAnimationFrame(t),S=a)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(l))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var a,o;try{a=r(decodeURIComponent(d.hash))}catch(t){a=r(d.hash)}if("#"===a){if(!c.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(a);(o=o||"#top"!==a?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(c),h.animateScroll(o,d))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};return h.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),h.cancelScroll(),f=u=d=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),c=a(t,s||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",p,!1)}(),h}}(o)}.apply(t,[]))||(e.exports=r)}).call(this,a("yLpj"))},"9H8W":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var o,i=r(a("PJYZ")),n=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,o=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),o&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=h(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,o=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:o,srcSet:r,sizes:i}),c.default.createElement("source",{media:o,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,o=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(o?'media="'+o+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),o);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+n+l+a+r+t+i+o+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,o=e.generateSources,i=e.spreadProps,n=e.ariaHidden,l=c.default.createElement(z,(0,s.default)({ref:t,src:a},i,{ariaHidden:n}));return r.length>1?c.default.createElement("picture",null,o(r),l):l})),z=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,o=e.src,i=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":h,sizes:a,srcSet:r,src:o},m,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=h(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,o=e.style,i=void 0===o?{}:o,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,h=e.placeholderClassName,p=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,E=e.loading,O=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,s.default)({opacity:x?1:0,transition:C?"opacity "+y+"ms":"none"},l),N="boolean"==typeof v?"lightgray":v,k={transitionDelay:y+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&k,l,f),V={title:t,alt:this.state.isVisible?"":a,style:M,className:h,itemProp:S};if(p){var q=p,j=m(p);return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&k)}),j.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:V,imageVariants:q,generateSources:L}),j.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:V,imageVariants:q,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,w(q),c.default.createElement(z,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:E},j,{imageVariants:q}))}}))}if(g){var A=g,P=m(g),W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},N&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&k)}),P.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:A,generateSources:L}),P.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:A,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,w(A),c.default.createElement(z,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:E},P,{imageVariants:A}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function k(e){return function(t,a,r){var o;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((o={})[a]=e,o),t,"prop",r)}}C.propTypes={resolutions:H,sizes:N,fixed:k(d.default.oneOfType([H,d.default.arrayOf(H)])),fluid:k(d.default.oneOfType([N,d.default.arrayOf(N)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var M=C;t.default=M},"E5+3":function(e,t,a){},EXIE:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var r,o=a("1jzt"),i=a.n(o),n=a("dwco"),l=a.n(n);function s(){return l.a.polyfill(),r=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function d(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||l,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,n=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=f(this),r=a.getBoundingClientRect(),i=this.getBoundingClientRect();a!==t.body?(m.call(this,a,a.scrollLeft+i.left-r.left,a.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+n<e.scrollHeight:"X"===t?e.clientWidth+n<e.scrollWidth:void 0}function d(t,a){var r=e.getComputedStyle(t,null)["overflow"+a];return"auto"===r||"scroll"===r}function u(e){var t=c(e,"Y")&&d(e,"Y"),a=c(e,"X")&&d(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function h(t){var a,r,o,n,l=(i()-t.startTime)/468;n=l=l>1?1:l,a=.5*(1-Math.cos(Math.PI*n)),r=t.startX+(t.x-t.startX)*a,o=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(h.bind(e,t))}function m(a,r,n){var s,c,d,u,f=i();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=o.scroll):(s=a,c=a.scrollLeft,d=a.scrollTop,u=l),h({scrollable:s,method:u,startTime:f,startX:c,startY:d,x:r,y:n})}}}}()},kCVJ:function(e,t,a){},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("q1tI"),o=a.n(r),i=a("Wbzz"),n=a("9eSz"),l=a.n(n),s=(a("rWA+"),function(){return o.a.createElement("a",{href:"https://github.com/alymbektech",className:"github","aria-label":"GitHub"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),c=(a("kCVJ"),function(){return o.a.createElement("a",{href:"https://www.linkedin.com/in/alymbekdamiruulu/",className:"linkedin","aria-label":"LinkedIn"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})))}),d=(a("E5+3"),function(){return o.a.createElement("a",{href:"https://www.instagram.com/alym_du/",className:"instagram","aria-label":"Instagram"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})))}),u=(a("9H8W"),function(){return o.a.createElement(i.StaticQuery,{query:f,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social,n=t.introduction,u=t.hiring;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(l.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"Here is my"),o.a.createElement(i.Link,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"resume")),o.a.createElement("div",{className:"author-introduction"},n),o.a.createElement("div",{className:"author-introduction"},u),o.a.createElement(s,null),o.a.createElement(c,null),o.a.createElement(d,null),o.a.createElement("p",{className:"author-socials"},r.github&&o.a.createElement("a",{href:"https://github.com/"+r.github},"GitHub"),r.linkedin&&o.a.createElement("a",{href:"https://www.linkedin.com/in/"+r.linkedin+"/"},"LinkedIn"),r.instagram&&o.a.createElement("a",{href:"https://instagram.com/"+r.instagram},"Instagram"),r.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"))))))}})}),f="2661579815"},"rWA+":function(e,t,a){}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-3ac7a5115683a643494c.js.map
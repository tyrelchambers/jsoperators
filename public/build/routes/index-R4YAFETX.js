import{a as p1}from"/build/_shared/chunk-I4DBOIGY.js";import{a as D2,b as T,c as h1,e as M1,m as Q}from"/build/_shared/chunk-MYU76JSC.js";var L4=D2((j6,u4)=>{"use strict";var M6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";u4.exports=M6});var S4=D2((X6,x4)=>{"use strict";var p6=L4();function d4(){}function g4(){}g4.resetWarningCache=d4;x4.exports=function(){function c(e,r,i,f,n,l){if(l!==p6){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}c.isRequired=c;function a(){return c}var s={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:g4,resetWarningCache:d4};return s.PropTypes=s,s}});var b4=D2((Q6,N4)=>{N4.exports=S4()();var Y6,$6});var U4={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},C1=U4;function u1(c,a){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),s.push.apply(s,e)}return s}function m(c){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?u1(Object(s),!0).forEach(function(e){x(c,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):u1(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})}return c}function b2(c){return b2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b2(c)}function O4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function L1(c,a){for(var s=0;s<a.length;s++){var e=a[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function q4(c,a,s){return a&&L1(c.prototype,a),s&&L1(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,s){return a in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c}function Z2(c,a){return W4(c)||_4(c,a)||j1(c,a)||X4()}function H2(c){return I4(c)||G4(c)||j1(c)||j4()}function I4(c){if(Array.isArray(c))return I2(c)}function W4(c){if(Array.isArray(c))return c}function G4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function _4(c,a){var s=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var e=[],r=!0,i=!1,f,n;try{for(s=s.call(c);!(r=(f=s.next()).done)&&(e.push(f.value),!(a&&e.length===a));r=!0);}catch(l){i=!0,n=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(i)throw n}}return e}}function j1(c,a){if(!!c){if(typeof c=="string")return I2(c,a);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return I2(c,a)}}function I2(c,a){(a==null||a>c.length)&&(a=c.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=c[s];return e}function j4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d1=function(){},c1={},X1={},Y1=null,$1={mark:d1,measure:d1};try{typeof window<"u"&&(c1=window),typeof document<"u"&&(X1=document),typeof MutationObserver<"u"&&(Y1=MutationObserver),typeof performance<"u"&&($1=performance)}catch{}var Y4=c1.navigator||{},g1=Y4.userAgent,x1=g1===void 0?"":g1,O=c1,p=X1,S1=Y1,h2=$1,F6=!!O.document,D=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Q1=~x1.indexOf("MSIE")||~x1.indexOf("Trident/"),M2,p2,C2,u2,L2,B="___FONT_AWESOME___",W2=16,K1="fa",J1="svg-inline--fa",Y="data-fa-i2svg",G2="data-fa-pseudo-element",$4="data-fa-pseudo-element-pending",a1="data-prefix",s1="data-icon",N1="fontawesome-i2svg",Q4="async",K4=["HTML","HEAD","STYLE","SCRIPT"],Z1=function(){try{return!0}catch{return!1}}(),M="classic",C="sharp",e1=[M,C];function z2(c){return new Proxy(c,{get:function(s,e){return e in s?s[e]:s[M]}})}var n2=z2((M2={},x(M2,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(M2,C,{fa:"solid",fass:"solid","fa-solid":"solid"}),M2)),l2=z2((p2={},x(p2,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(p2,C,{solid:"fass"}),p2)),o2=z2((C2={},x(C2,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(C2,C,{fass:"fa-solid"}),C2)),J4=z2((u2={},x(u2,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(u2,C,{"fa-solid":"fass"}),u2)),Z4=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,c4="fa-layers-text",c3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,a3=z2((L2={},x(L2,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(L2,C,{900:"fass"}),L2)),a4=[1,2,3,4,5,6,7,8,9,10],s3=a4.concat([11,12,13,14,15,16,17,18,19,20]),e3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t2=new Set;Object.keys(l2[M]).map(t2.add.bind(t2));Object.keys(l2[C]).map(t2.add.bind(t2));var r3=[].concat(e1,H2(t2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(a4.map(function(c){return"".concat(c,"x")})).concat(s3.map(function(c){return"w-".concat(c)})),i2=O.FontAwesomeConfig||{};function i3(c){var a=p.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function f3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&(b1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],b1.forEach(function(c){var a=Z2(c,2),s=a[0],e=a[1],r=f3(i3(s));r!=null&&(i2[e]=r)}));var b1,s4={styleDefault:"solid",familyDefault:"classic",cssPrefix:K1,replacementClass:J1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i2.familyPrefix&&(i2.cssPrefix=i2.familyPrefix);var c2=m(m({},s4),i2);c2.autoReplaceSvg||(c2.observeMutations=!1);var z={};Object.keys(s4).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(s){c2[c]=s,f2.forEach(function(e){return e(z)})},get:function(){return c2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){c2.cssPrefix=a,f2.forEach(function(s){return s(z)})},get:function(){return c2.cssPrefix}});O.FontAwesomeConfig=z;var f2=[];function n3(c){return f2.push(c),function(){f2.splice(f2.indexOf(c),1)}}var U=W2,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l3(c){if(!(!c||!D)){var a=p.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var s=p.head.childNodes,e=null,r=s.length-1;r>-1;r--){var i=s[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=i)}return p.head.insertBefore(a,e),c}}var o3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m2(){for(var c=12,a="";c-- >0;)a+=o3[Math.random()*62|0];return a}function a2(c){for(var a=[],s=(c||[]).length>>>0;s--;)a[s]=c[s];return a}function r1(c){return c.classList?a2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function e4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t3(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,'="').concat(e4(c[s]),'" ')},"").trim()}function y2(c){return Object.keys(c||{}).reduce(function(a,s){return a+"".concat(s,": ").concat(c[s].trim(),";")},"")}function i1(c){return c.size!==P.size||c.x!==P.x||c.y!==P.y||c.rotate!==P.rotate||c.flipX||c.flipY}function m3(c){var a=c.transform,s=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(s/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},o={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:o}}function H3(c){var a=c.transform,s=c.width,e=s===void 0?W2:s,r=c.height,i=r===void 0?W2:r,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&Q1?l+="translate(".concat(a.x/U-e/2,"em, ").concat(a.y/U-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/U,"em), calc(-50% + ").concat(a.y/U,"em)) "):l+="translate(".concat(a.x/U,"em, ").concat(a.y/U,"em) "),l+="scale(".concat(a.size/U*(a.flipX?-1:1),", ").concat(a.size/U*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var z3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function r4(){var c=K1,a=J1,s=z.cssPrefix,e=z.replacementClass,r=z3;if(s!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(s,"-")).replace(f,"--".concat(s,"-")).replace(n,".".concat(e))}return r}var w1=!1;function E2(){z.autoAddCss&&!w1&&(l3(r4()),w1=!0)}var v3={mixout:function(){return{dom:{css:r4,insertCss:E2}}},hooks:function(){return{beforeDOMElementCreation:function(){E2()},beforeI2svg:function(){E2()}}}},F=O||{};F[B]||(F[B]={});F[B].styles||(F[B].styles={});F[B].hooks||(F[B].hooks={});F[B].shims||(F[B].shims=[]);var A=F[B],i4=[],V3=function c(){p.removeEventListener("DOMContentLoaded",c),w2=1,i4.map(function(a){return a()})},w2=!1;D&&(w2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),w2||p.addEventListener("DOMContentLoaded",V3));function h3(c){!D||(w2?setTimeout(c,0):i4.push(c))}function v2(c){var a=c.tag,s=c.attributes,e=s===void 0?{}:s,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?e4(c):"<".concat(a," ").concat(t3(e),">").concat(i.map(v2).join(""),"</").concat(a,">")}function k1(c,a,s){if(c&&c[a]&&c[a][s])return{prefix:a,iconName:s,icon:c[a][s]}}var M3=function(a,s){return function(e,r,i,f){return a.call(s,e,r,i,f)}},U2=function(a,s,e,r){var i=Object.keys(a),f=i.length,n=r!==void 0?M3(s,r):s,l,o,t;for(e===void 0?(l=1,t=a[i[0]]):(l=0,t=e);l<f;l++)o=i[l],t=n(t,a[o],o,a);return t};function p3(c){for(var a=[],s=0,e=c.length;s<e;){var r=c.charCodeAt(s++);if(r>=55296&&r<=56319&&s<e){var i=c.charCodeAt(s++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),s--)}else a.push(r)}return a}function _2(c){var a=p3(c);return a.length===1?a[0].toString(16):null}function C3(c,a){var s=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&s>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function y1(c){return Object.keys(c).reduce(function(a,s){var e=c[s],r=!!e.icon;return r?a[e.iconName]=e.icon:a[s]=e,a},{})}function j2(c,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=s.skipHooks,r=e===void 0?!1:e,i=y1(a);typeof A.hooks.addPack=="function"&&!r?A.hooks.addPack(c,y1(a)):A.styles[c]=m(m({},A.styles[c]||{}),i),c==="fas"&&j2("fa",a)}var d2,g2,x2,K=A.styles,u3=A.shims,L3=(d2={},x(d2,M,Object.values(o2[M])),x(d2,C,Object.values(o2[C])),d2),f1=null,f4={},n4={},l4={},o4={},t4={},d3=(g2={},x(g2,M,Object.keys(n2[M])),x(g2,C,Object.keys(n2[C])),g2);function g3(c){return~r3.indexOf(c)}function x3(c,a){var s=a.split("-"),e=s[0],r=s.slice(1).join("-");return e===c&&r!==""&&!g3(r)?r:null}var m4=function(){var a=function(i){return U2(K,function(f,n,l){return f[l]=U2(n,i,{}),f},{})};f4=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){r[l.toString(16)]=f})}return r}),n4=a(function(r,i,f){if(r[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){r[l]=f})}return r}),t4=a(function(r,i,f){var n=i[2];return r[f]=f,n.forEach(function(l){r[l]=f}),r});var s="far"in K||z.autoFetchSvg,e=U2(u3,function(r,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!s&&(n="fas"),typeof f=="string"&&(r.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:n,iconName:l}),r},{names:{},unicodes:{}});l4=e.names,o4=e.unicodes,f1=A2(z.styleDefault,{family:z.familyDefault})};n3(function(c){f1=A2(c.styleDefault,{family:z.familyDefault})});m4();function n1(c,a){return(f4[c]||{})[a]}function S3(c,a){return(n4[c]||{})[a]}function X(c,a){return(t4[c]||{})[a]}function H4(c){return l4[c]||{prefix:null,iconName:null}}function N3(c){var a=o4[c],s=n1("fas",c);return a||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function q(){return f1}var l1=function(){return{prefix:null,iconName:null,rest:[]}};function A2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.family,e=s===void 0?M:s,r=n2[e][c],i=l2[e][c]||l2[e][r],f=c in A.styles?c:null;return i||f||null}var A1=(x2={},x(x2,M,Object.keys(o2[M])),x(x2,C,Object.keys(o2[C])),x2);function P2(c){var a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.skipLookups,r=e===void 0?!1:e,i=(a={},x(a,M,"".concat(z.cssPrefix,"-").concat(M)),x(a,C,"".concat(z.cssPrefix,"-").concat(C)),a),f=null,n=M;(c.includes(i[M])||c.some(function(o){return A1[M].includes(o)}))&&(n=M),(c.includes(i[C])||c.some(function(o){return A1[C].includes(o)}))&&(n=C);var l=c.reduce(function(o,t){var H=x3(z.cssPrefix,t);if(K[t]?(t=L3[n].includes(t)?J4[n][t]:t,f=t,o.prefix=t):d3[n].indexOf(t)>-1?(f=t,o.prefix=A2(t,{family:n})):H?o.iconName=H:t!==z.replacementClass&&t!==i[M]&&t!==i[C]&&o.rest.push(t),!r&&o.prefix&&o.iconName){var v=f==="fa"?H4(o.iconName):{},h=X(o.prefix,o.iconName);v.prefix&&(f=null),o.iconName=v.iconName||h||o.iconName,o.prefix=v.prefix||o.prefix,o.prefix==="far"&&!K.far&&K.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},l1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===C&&(K.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=X(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=q()||"fas"),l}var b3=function(){function c(){O4(this,c),this.definitions={}}return q4(c,[{key:"add",value:function(){for(var s=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){s.definitions[n]=m(m({},s.definitions[n]||{}),f[n]),j2(n,f[n]);var l=o2[M][n];l&&j2(l,f[n]),m4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var f=r[i],n=f.prefix,l=f.iconName,o=f.icon,t=o[2];s[n]||(s[n]={}),t.length>0&&t.forEach(function(H){typeof H=="string"&&(s[n][H]=o)}),s[n][l]=o}),s}}]),c}(),P1=[],J={},Z={},w3=Object.keys(Z);function k3(c,a){var s=a.mixoutsTo;return P1=c,J={},Object.keys(Z).forEach(function(e){w3.indexOf(e)===-1&&delete Z[e]}),P1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(s[f]=r[f]),b2(r[f])==="object"&&Object.keys(r[f]).forEach(function(n){s[f]||(s[f]={}),s[f][n]=r[f][n]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(f){J[f]||(J[f]=[]),J[f].push(i[f])})}e.provides&&e.provides(Z)}),s}function X2(c,a){for(var s=arguments.length,e=new Array(s>2?s-2:0),r=2;r<s;r++)e[r-2]=arguments[r];var i=J[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(e))}),a}function $(c){for(var a=arguments.length,s=new Array(a>1?a-1:0),e=1;e<a;e++)s[e-1]=arguments[e];var r=J[c]||[];r.forEach(function(i){i.apply(null,s)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z[c]?Z[c].apply(null,a):void 0}function Y2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,s=c.prefix||q();if(!!a)return a=X(s,a)||a,k1(z4.definitions,s,a)||k1(A.styles,s,a)}var z4=new b3,y3=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,$("noAuto")},A3={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?($("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,h3(function(){T3({autoReplaceSvgRoot:s}),$("watch",a)})}},P3={icon:function(a){if(a===null)return null;if(b2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:X(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var s=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=A2(a[0]);return{prefix:e,iconName:X(e,s)||s}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(Z4))){var r=P2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=q();return{prefix:i,iconName:X(i,a)||a}}}},y={noAuto:y3,config:z,dom:A3,parse:P3,library:z4,findIconDefinition:Y2,toHtml:v2},T3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=a.autoReplaceSvgRoot,e=s===void 0?p:s;(Object.keys(A.styles).length>0||z.autoFetchSvg)&&D&&z.autoReplaceSvg&&y.dom.i2svg({node:e})};function T2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return v2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(!!D){var e=p.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function B3(c){var a=c.children,s=c.main,e=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(i1(f)&&s.found&&!e.found){var n=s.width,l=s.height,o={x:n/l/2,y:.5};r.style=y2(m(m({},i),{},{"transform-origin":"".concat(o.x+f.x/16,"em ").concat(o.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function F3(c){var a=c.prefix,s=c.iconName,e=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(s):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:f}),children:e}]}]}function o1(c){var a=c.icons,s=a.main,e=a.mask,r=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,o=c.maskId,t=c.titleId,H=c.extra,v=c.watchable,h=v===void 0?!1:v,d=e.found?e:s,b=d.width,u=d.height,w=r==="fak",L=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(E){return H.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(H.classes).join(" "),g={children:[],attributes:m(m({},H.attributes),{},{"data-prefix":r,"data-icon":i,class:L,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(u)})},k=w&&!~H.classes.indexOf("fa-fw")?{width:"".concat(b/u*16*.0625,"em")}:{};h&&(g.attributes[Y]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(t||m2())},children:[l]}),delete g.attributes.title);var N=m(m({},g),{},{prefix:r,iconName:i,main:s,mask:e,maskId:o,transform:f,symbol:n,styles:m(m({},k),H.styles)}),G=e.found&&s.found?R("generateAbstractMask",N)||{children:[],attributes:{}}:R("generateAbstractIcon",N)||{children:[],attributes:{}},_=G.children,R2=G.attributes;return N.children=_,N.attributes=R2,n?F3(N):B3(N)}function T1(c){var a=c.content,s=c.width,e=c.height,r=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,o=m(m(m({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(o[Y]="");var t=m({},f.styles);i1(r)&&(t.transform=H3({transform:r,startCentered:!0,width:s,height:e}),t["-webkit-transform"]=t.transform);var H=y2(t);H.length>0&&(o.style=H);var v=[];return v.push({tag:"span",attributes:o,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function R3(c){var a=c.content,s=c.title,e=c.extra,r=m(m(m({},e.attributes),s?{title:s}:{}),{},{class:e.classes.join(" ")}),i=y2(e.styles);i.length>0&&(r.style=i);var f=[];return f.push({tag:"span",attributes:r,children:[a]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}var O2=A.styles;function $2(c){var a=c[0],s=c[1],e=c.slice(4),r=Z2(e,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:s,icon:f}}var D3={found:!1,width:512,height:512};function E3(c,a){!Z1&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Q2(c,a){var s=a;return a==="fa"&&z.styleDefault!==null&&(a=q()),new Promise(function(e,r){var i={found:!1,width:512,height:512,icon:R("missingIconAbstract")||{}};if(s==="fa"){var f=H4(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&O2[a]&&O2[a][c]){var n=O2[a][c];return e($2(n))}E3(c,a),e(m(m({},D3),{},{icon:z.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var B1=function(){},K2=z.measurePerformance&&h2&&h2.mark&&h2.measure?h2:{mark:B1,measure:B1},r2='FA "6.2.0"',U3=function(a){return K2.mark("".concat(r2," ").concat(a," begins")),function(){return v4(a)}},v4=function(a){K2.mark("".concat(r2," ").concat(a," ends")),K2.measure("".concat(r2," ").concat(a),"".concat(r2," ").concat(a," begins"),"".concat(r2," ").concat(a," ends"))},t1={begin:U3,end:v4},S2=function(){};function F1(c){var a=c.getAttribute?c.getAttribute(Y):null;return typeof a=="string"}function O3(c){var a=c.getAttribute?c.getAttribute(a1):null,s=c.getAttribute?c.getAttribute(s1):null;return a&&s}function q3(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function I3(){if(z.autoReplaceSvg===!0)return N2.replace;var c=N2[z.autoReplaceSvg];return c||N2.replace}function W3(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function G3(c){return p.createElement(c)}function V4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.ceFn,e=s===void 0?c.tag==="svg"?W3:G3:s;if(typeof c=="string")return p.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(V4(f,{ceFn:e}))}),r}function _3(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var N2={replace:function(a){var s=a[0];if(s.parentNode)if(a[1].forEach(function(r){s.parentNode.insertBefore(V4(r),s)}),s.getAttribute(Y)===null&&z.keepOriginalSource){var e=p.createComment(_3(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(a){var s=a[0],e=a[1];if(~r1(s).indexOf(z.replacementClass))return N2.replace(a);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(n,l){return l===z.replacementClass||l.match(r)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",i.toNode.join(" "))}var f=e.map(function(n){return v2(n)}).join(`
`);s.setAttribute(Y,""),s.innerHTML=f}};function R1(c){c()}function h4(c,a){var s=typeof a=="function"?a:S2;if(c.length===0)s();else{var e=R1;z.mutateApproach===Q4&&(e=O.requestAnimationFrame||R1),e(function(){var r=I3(),i=t1.begin("mutate");c.map(r),i(),s()})}}var m1=!1;function M4(){m1=!0}function J2(){m1=!1}var k2=null;function D1(c){if(!!S1&&!!z.observeMutations){var a=c.treeCallback,s=a===void 0?S2:a,e=c.nodeCallback,r=e===void 0?S2:e,i=c.pseudoElementsCallback,f=i===void 0?S2:i,n=c.observeMutationsRoot,l=n===void 0?p:n;k2=new S1(function(o){if(!m1){var t=q();a2(o).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!F1(H.addedNodes[0])&&(z.searchPseudoElements&&f(H.target),s(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&F1(H.target)&&~e3.indexOf(H.attributeName))if(H.attributeName==="class"&&O3(H.target)){var v=P2(r1(H.target)),h=v.prefix,d=v.iconName;H.target.setAttribute(a1,h||t),d&&H.target.setAttribute(s1,d)}else q3(H.target)&&r(H.target)})}}),D&&k2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function j3(){!k2||k2.disconnect()}function X3(c){var a=c.getAttribute("style"),s=[];return a&&(s=a.split(";").reduce(function(e,r){var i=r.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(e[f]=n.join(":").trim()),e},{})),s}function Y3(c){var a=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=P2(r1(c));return r.prefix||(r.prefix=q()),a&&s&&(r.prefix=a,r.iconName=s),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=S3(r.prefix,c.innerText)||n1(r.prefix,_2(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function $3(c){var a=a2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return z.autoA11y&&(s?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||m2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Q3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=Y3(c),e=s.iconName,r=s.prefix,i=s.rest,f=$3(c),n=X2("parseNodeAttributes",{},c),l=a.styleParser?X3(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var K3=A.styles;function p4(c){var a=z.autoReplaceSvg==="nest"?E1(c,{styleParser:!1}):E1(c);return~a.extra.classes.indexOf(c4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}var I=new Set;e1.map(function(c){I.add("fa-".concat(c))});Object.keys(n2[M]).map(I.add.bind(I));Object.keys(n2[C]).map(I.add.bind(I));I=H2(I);function U1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var s=p.documentElement.classList,e=function(H){return s.add("".concat(N1,"-").concat(H))},r=function(H){return s.remove("".concat(N1,"-").concat(H))},i=z.autoFetchSvg?I:e1.map(function(t){return"fa-".concat(t)}).concat(Object.keys(K3));i.includes("fa")||i.push("fa");var f=[".".concat(c4,":not([").concat(Y,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(Y,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=a2(c.querySelectorAll(f))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var l=t1.begin("onTree"),o=n.reduce(function(t,H){try{var v=p4(H);v&&t.push(v)}catch(h){Z1||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,H){Promise.all(o).then(function(v){h4(v,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),l(),t()})}).catch(function(v){l(),H(v)})})}function J3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;p4(c).then(function(s){s&&h4([s],a)})}function Z3(c){return function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Y2(a||{}),r=s.mask;return r&&(r=(r||{}).icon?r:Y2(r||{})),c(e,m(m({},s),{},{mask:r}))}}var c6=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=s.transform,r=e===void 0?P:e,i=s.symbol,f=i===void 0?!1:i,n=s.mask,l=n===void 0?null:n,o=s.maskId,t=o===void 0?null:o,H=s.title,v=H===void 0?null:H,h=s.titleId,d=h===void 0?null:h,b=s.classes,u=b===void 0?[]:b,w=s.attributes,L=w===void 0?{}:w,g=s.styles,k=g===void 0?{}:g;if(!!a){var N=a.prefix,G=a.iconName,_=a.icon;return T2(m({type:"icon"},a),function(){return $("beforeDOMElementCreation",{iconDefinition:a,params:s}),z.autoA11y&&(v?L["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(d||m2()):(L["aria-hidden"]="true",L.focusable="false")),o1({icons:{main:$2(_),mask:l?$2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:G,transform:m(m({},P),r),symbol:f,title:v,maskId:t,titleId:d,extra:{attributes:L,styles:k,classes:u}})})}},a6={mixout:function(){return{icon:Z3(c6)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=U1,s.nodeCallback=J3,s}}},provides:function(a){a.i2svg=function(s){var e=s.node,r=e===void 0?p:e,i=s.callback,f=i===void 0?function(){}:i;return U1(r,f)},a.generateSvgReplacementMutation=function(s,e){var r=e.iconName,i=e.title,f=e.titleId,n=e.prefix,l=e.transform,o=e.symbol,t=e.mask,H=e.maskId,v=e.extra;return new Promise(function(h,d){Promise.all([Q2(r,n),t.iconName?Q2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var u=Z2(b,2),w=u[0],L=u[1];h([s,o1({icons:{main:w,mask:L},prefix:n,iconName:r,transform:l,symbol:o,maskId:H,title:i,titleId:f,extra:v,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(s){var e=s.children,r=s.attributes,i=s.main,f=s.transform,n=s.styles,l=y2(n);l.length>0&&(r.style=l);var o;return i1(f)&&(o=R("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),e.push(o||i.icon),{children:e,attributes:r}}}},s6={mixout:function(){return{layer:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return T2({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:s,params:e});var f=[];return s(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(H2(i)).join(" ")},children:f}]})}}}},e6={mixout:function(){return{counter:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,f=e.classes,n=f===void 0?[]:f,l=e.attributes,o=l===void 0?{}:l,t=e.styles,H=t===void 0?{}:t;return T2({type:"counter",content:s},function(){return $("beforeDOMElementCreation",{content:s,params:e}),R3({content:s.toString(),title:i,extra:{attributes:o,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(H2(n))}})})}}}},r6={mixout:function(){return{text:function(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?P:r,f=e.title,n=f===void 0?null:f,l=e.classes,o=l===void 0?[]:l,t=e.attributes,H=t===void 0?{}:t,v=e.styles,h=v===void 0?{}:v;return T2({type:"text",content:s},function(){return $("beforeDOMElementCreation",{content:s,params:e}),T1({content:s,transform:m(m({},P),i),title:n,extra:{attributes:H,styles:h,classes:["".concat(z.cssPrefix,"-layers-text")].concat(H2(o))}})})}}},provides:function(a){a.generateLayersText=function(s,e){var r=e.title,i=e.transform,f=e.extra,n=null,l=null;if(Q1){var o=parseInt(getComputedStyle(s).fontSize,10),t=s.getBoundingClientRect();n=t.width/o,l=t.height/o}return z.autoA11y&&!r&&(f.attributes["aria-hidden"]="true"),Promise.resolve([s,T1({content:s.innerHTML,width:n,height:l,transform:i,title:r,extra:f,watchable:!0})])}}},i6=new RegExp('"',"ug"),O1=[1105920,1112319];function f6(c){var a=c.replace(i6,""),s=C3(a,0),e=s>=O1[0]&&s<=O1[1],r=a.length===2?a[0]===a[1]:!1;return{value:_2(r?a[0]:a),isSecondary:e||r}}function q1(c,a){var s="".concat($4).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(s)!==null)return e();var i=a2(c.children),f=i.filter(function(_){return _.getAttribute(G2)===a})[0],n=O.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(c3),o=n.getPropertyValue("font-weight"),t=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),e();if(l&&t!=="none"&&t!==""){var H=n.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?C:M,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?l2[v][l[2].toLowerCase()]:a3[v][o],d=f6(H),b=d.value,u=d.isSecondary,w=l[0].startsWith("FontAwesome"),L=n1(h,b),g=L;if(w){var k=N3(b);k.iconName&&k.prefix&&(L=k.iconName,h=k.prefix)}if(L&&!u&&(!f||f.getAttribute(a1)!==h||f.getAttribute(s1)!==g)){c.setAttribute(s,g),f&&c.removeChild(f);var N=Q3(),G=N.extra;G.attributes[G2]=a,Q2(L,h).then(function(_){var R2=o1(m(m({},N),{},{icons:{main:_,mask:l1()},prefix:h,iconName:g,extra:G,watchable:!0})),E=p.createElement("svg");a==="::before"?c.insertBefore(E,c.firstChild):c.appendChild(E),E.outerHTML=R2.map(function(E4){return v2(E4)}).join(`
`),c.removeAttribute(s),e()}).catch(r)}else e()}else e()})}function n6(c){return Promise.all([q1(c,"::before"),q1(c,"::after")])}function l6(c){return c.parentNode!==document.head&&!~K4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(G2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function I1(c){if(!!D)return new Promise(function(a,s){var e=a2(c.querySelectorAll("*")).filter(l6).map(n6),r=t1.begin("searchPseudoElements");M4(),Promise.all(e).then(function(){r(),J2(),a()}).catch(function(){r(),J2(),s()})})}var o6={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=I1,s}}},provides:function(a){a.pseudoElements2svg=function(s){var e=s.node,r=e===void 0?p:e;z.searchPseudoElements&&I1(r)}}},W1=!1,t6={mixout:function(){return{dom:{unwatch:function(){M4(),W1=!0}}}},hooks:function(){return{bootstrap:function(){D1(X2("mutationObserverCallbacks",{}))},noAuto:function(){j3()},watch:function(s){var e=s.observeMutationsRoot;W1?J2():D1(X2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},G1=function(a){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),f=i[0],n=i.slice(1).join("-");if(f&&n==="h")return e.flipX=!0,e;if(f&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(f){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},s)},m6={mixout:function(){return{parse:{transform:function(s){return G1(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-transform");return r&&(s.transform=G1(r)),s}}},provides:function(a){a.generateAbstractTransformGrouping=function(s){var e=s.main,r=s.transform,i=s.containerWidth,f=s.iconWidth,n={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),t="rotate(".concat(r.rotate," 0 0)"),H={transform:"".concat(l," ").concat(o," ").concat(t)},v={transform:"translate(".concat(f/2*-1," -256)")},h={outer:n,inner:H,path:v};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),h.path)}]}]}}}},q2={x:0,y:0,width:"100%",height:"100%"};function _1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function H6(c){return c.tag==="g"?c.children:[c]}var z6={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-mask"),i=r?P2(r.split(" ").map(function(f){return f.trim()})):l1();return i.prefix||(i.prefix=q()),s.mask=i,s.maskId=e.getAttribute("data-fa-mask-id"),s}}},provides:function(a){a.generateAbstractMask=function(s){var e=s.children,r=s.attributes,i=s.main,f=s.mask,n=s.maskId,l=s.transform,o=i.width,t=i.icon,H=f.width,v=f.icon,h=m3({transform:l,containerWidth:H,iconWidth:o}),d={tag:"rect",attributes:m(m({},q2),{},{fill:"white"})},b=t.children?{children:t.children.map(_1)}:{},u={tag:"g",attributes:m({},h.inner),children:[_1(m({tag:t.tag,attributes:m(m({},t.attributes),h.path)},b))]},w={tag:"g",attributes:m({},h.outer),children:[u]},L="mask-".concat(n||m2()),g="clip-".concat(n||m2()),k={tag:"mask",attributes:m(m({},q2),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,w]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:H6(v)},k]};return e.push(N,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(L,")")},q2)}),{children:e,attributes:r}}}},v6={provides:function(a){var s=!1;O.matchMedia&&(s=O.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=m(m({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||n.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},f),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:m(m({},f),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},V6={hooks:function(){return{parseNodeAttributes:function(s,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return s.symbol=i,s}}}},h6=[v3,a6,s6,e6,r6,o6,t6,m6,z6,v6,V6];k3(h6,{mixoutsTo:y});var R6=y.noAuto,D6=y.config,E6=y.library,U6=y.dom,B2=y.parse,O6=y.findIconDefinition,q6=y.toHtml,C4=y.icon,I6=y.layer,W6=y.text,G6=y.counter;var V=T(b4()),V1=T(h1());function w4(c,a){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),s.push.apply(s,e)}return s}function W(c){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?w4(Object(s),!0).forEach(function(e){s2(c,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):w4(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})}return c}function F2(c){return F2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F2(c)}function s2(c,a,s){return a in c?Object.defineProperty(c,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[a]=s,c}function C6(c,a){if(c==null)return{};var s={},e=Object.keys(c),r,i;for(i=0;i<e.length;i++)r=e[i],!(a.indexOf(r)>=0)&&(s[r]=c[r]);return s}function u6(c,a){if(c==null)return{};var s=C6(c,a),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)e=i[r],!(a.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,e)||(s[e]=c[e]))}return s}function z1(c){return L6(c)||d6(c)||g6(c)||x6()}function L6(c){if(Array.isArray(c))return v1(c)}function d6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function g6(c,a){if(!!c){if(typeof c=="string")return v1(c,a);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v1(c,a)}}function v1(c,a){(a==null||a>c.length)&&(a=c.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=c[s];return e}function x6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S6(c){var a,s=c.beat,e=c.fade,r=c.beatFade,i=c.bounce,f=c.shake,n=c.flash,l=c.spin,o=c.spinPulse,t=c.spinReverse,H=c.pulse,v=c.fixedWidth,h=c.inverse,d=c.border,b=c.listItem,u=c.flip,w=c.size,L=c.rotation,g=c.pull,k=(a={"fa-beat":s,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":f,"fa-flash":n,"fa-spin":l,"fa-spin-reverse":t,"fa-spin-pulse":o,"fa-pulse":H,"fa-fw":v,"fa-inverse":h,"fa-border":d,"fa-li":b,"fa-flip":u===!0,"fa-flip-horizontal":u==="horizontal"||u==="both","fa-flip-vertical":u==="vertical"||u==="both"},s2(a,"fa-".concat(w),typeof w<"u"&&w!==null),s2(a,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),s2(a,"fa-pull-".concat(g),typeof g<"u"&&g!==null),s2(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(k).map(function(N){return k[N]?N:null}).filter(function(N){return N})}function N6(c){return c=c-0,c===c}function y4(c){return N6(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,s){return s?s.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}var b6=["style"];function w6(c){return c.charAt(0).toUpperCase()+c.slice(1)}function k6(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,s){var e=s.indexOf(":"),r=y4(s.slice(0,e)),i=s.slice(e+1).trim();return r.startsWith("webkit")?a[w6(r)]=i:a[r]=i,a},{})}function A4(c,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var e=(a.children||[]).map(function(l){return A4(c,l)}),r=Object.keys(a.attributes||{}).reduce(function(l,o){var t=a.attributes[o];switch(o){case"class":l.attrs.className=t,delete a.attributes.class;break;case"style":l.attrs.style=k6(t);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?l.attrs[o.toLowerCase()]=t:l.attrs[y4(o)]=t}return l},{attrs:{}}),i=s.style,f=i===void 0?{}:i,n=u6(s,b6);return r.attrs.style=W(W({},r.attrs.style),f),c.apply(void 0,[a.tag,W(W({},r.attrs),n)].concat(z1(e)))}var P4=!1;try{P4=!0}catch{}function y6(){if(!P4&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function k4(c){if(c&&F2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(B2.icon)return B2.icon(c);if(c===null)return null;if(c&&F2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}function H1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?s2({},c,a):{}}var e2=V1.default.forwardRef(function(c,a){var s=c.icon,e=c.mask,r=c.symbol,i=c.className,f=c.title,n=c.titleId,l=c.maskId,o=k4(s),t=H1("classes",[].concat(z1(S6(c)),z1(i.split(" ")))),H=H1("transform",typeof c.transform=="string"?B2.transform(c.transform):c.transform),v=H1("mask",k4(e)),h=C4(o,W(W(W(W({},t),H),v),{},{symbol:r,title:f,titleId:n,maskId:l}));if(!h)return y6("Could not find icon",o),null;var d=h.abstract,b={ref:a};return Object.keys(c).forEach(function(u){e2.defaultProps.hasOwnProperty(u)||(b[u]=c[u])}),A6(d[0],b)});e2.displayName="FontAwesomeIcon";e2.propTypes={beat:V.default.bool,border:V.default.bool,beatFade:V.default.bool,bounce:V.default.bool,className:V.default.string,fade:V.default.bool,flash:V.default.bool,mask:V.default.oneOfType([V.default.object,V.default.array,V.default.string]),maskId:V.default.string,fixedWidth:V.default.bool,inverse:V.default.bool,flip:V.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.default.oneOfType([V.default.object,V.default.array,V.default.string]),listItem:V.default.bool,pull:V.default.oneOf(["right","left"]),pulse:V.default.bool,rotation:V.default.oneOf([0,90,180,270]),shake:V.default.bool,size:V.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.default.bool,spinPulse:V.default.bool,spinReverse:V.default.bool,symbol:V.default.oneOfType([V.default.bool,V.default.string]),title:V.default.string,titleId:V.default.string,transform:V.default.oneOfType([V.default.string,V.default.object]),swapOpacity:V.default.bool};e2.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var A6=A4.bind(null,V1.default.createElement);var R4=T(h1());var V2=T(Q()),P6=({operator:c})=>(0,V2.jsx)(M1,{to:`/operator/${c.filename}`,children:(0,V2.jsxs)("div",{className:"flex flex-col items-start bg-white p-4 rounded-lg w-full gap-2 border-2 hover:border-indigo-300 transition-all hover:shadow-lg ",children:[(0,V2.jsx)("p",{className:"text-indigo-500 text-xl font-bold",children:c.icon}),(0,V2.jsx)("h2",{className:"text-lg font-bold text-gray-700 text-left",children:c.name})]})}),T4=P6;var B4=T(Q()),T6=({operators:c,search:a})=>(0,B4.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-8 items-start p-4",children:c.filter(s=>a?s.name.toLowerCase().includes(a.toLowerCase())||s.icon.includes(a):!0).sort((s,e)=>s.name.localeCompare(e.name)).map(s=>(0,B4.jsx)(T4,{operator:s},s.name))}),F4=T6;var S=T(Q());function D4(){let[c,a]=(0,R4.useState)("");return(0,S.jsxs)("div",{className:"w-screen min-h-screen h-full bg-gray-50 relative p-4",children:[(0,S.jsxs)("main",{className:"relative top-10 ml-auto mr-auto w-full z-10",children:[(0,S.jsxs)("div",{className:"w-full max-w-screen-lg ml-auto mr-auto overflow-hidden",children:[(0,S.jsx)("h1",{className:"text-center md:text-4xl text-xl font-bold text-gray-800",children:"Javascript Operators"}),(0,S.jsx)("p",{className:"text-center ml-auto mr-auto text-gray-600 mt-6 text-lg md:text-2xl",children:"Quick Javascript operator lookup"})]}),(0,S.jsxs)("section",{className:"mt-10 max-w-screen-lg ml-auto mr-auto relative",children:[(0,S.jsxs)("div",{className:"flex items-center bg-gray-800 shadow-lg px-4 rounded-full w-full sticky top-10 ",children:[(0,S.jsx)(e2,{icon:C1,className:"text-gray-300 pr-2",style:{width:"30px"}}),(0,S.jsx)("input",{type:"search",placeholder:"Search by name...",className:"bg-transparent w-full outline-none  p-4 text-white ",onInput:s=>a(s.currentTarget.value),value:c,name:"search"})]}),(0,S.jsx)(F4,{operators:p1,search:c})]})]}),(0,S.jsx)("div",{className:"bg absolute top-0 w-full",children:(0,S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"560",preserveAspectRatio:"none",viewBox:"0 0 1440 560",children:[(0,S.jsxs)("g",{mask:'url("#SvgjsMask1036")',fill:"none",children:[(0,S.jsx)("rect",{width:"1440",height:"560",x:"0",y:"0",fill:"rgba(255, 255, 255, 1)"}),(0,S.jsx)("path",{d:"M 0,271 C 96,318.6 288,512 480,509 C 672,506 768,254.4 960,256 C 1152,257.6 1344,464.8 1440,517L1440 560L0 560z",fill:"rgba(249, 250, 251, 1)"})]}),(0,S.jsx)("defs",{children:(0,S.jsx)("mask",{id:"SvgjsMask1036",children:(0,S.jsx)("rect",{width:"1440",height:"560",fill:"#ffffff"})})})]})})]})}export{D4 as default};

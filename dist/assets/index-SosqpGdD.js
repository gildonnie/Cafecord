function Xk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Q1={exports:{}},Hc={},Y1={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),Jk=Symbol.for("react.portal"),Zk=Symbol.for("react.fragment"),eR=Symbol.for("react.strict_mode"),tR=Symbol.for("react.profiler"),nR=Symbol.for("react.provider"),rR=Symbol.for("react.context"),iR=Symbol.for("react.forward_ref"),sR=Symbol.for("react.suspense"),oR=Symbol.for("react.memo"),aR=Symbol.for("react.lazy"),Qv=Symbol.iterator;function lR(t){return t===null||typeof t!="object"?null:(t=Qv&&t[Qv]||t["@@iterator"],typeof t=="function"?t:null)}var X1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J1=Object.assign,Z1={};function qs(t,e,n){this.props=t,this.context=e,this.refs=Z1,this.updater=n||X1}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ew(){}ew.prototype=qs.prototype;function lm(t,e,n){this.props=t,this.context=e,this.refs=Z1,this.updater=n||X1}var um=lm.prototype=new ew;um.constructor=lm;J1(um,qs.prototype);um.isPureReactComponent=!0;var Yv=Array.isArray,tw=Object.prototype.hasOwnProperty,cm={current:null},nw={key:!0,ref:!0,__self:!0,__source:!0};function rw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tw.call(e,r)&&!nw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ja,type:t,key:s,ref:o,props:i,_owner:cm.current}}function uR(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function cR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xv=/\/+/g;function tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cR(""+t.key):e.toString(36)}function _u(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ja:case Jk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tf(o,0):r,Yv(i)?(n="",t!=null&&(n=t.replace(Xv,"$&/")+"/"),_u(i,e,n,"",function(u){return u})):i!=null&&(dm(i)&&(i=uR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+tf(s,a);o+=_u(s,e,n,l,i)}else if(l=lR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+tf(s,a++),o+=_u(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return _u(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},wu={transition:null},fR={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:wu,ReactCurrentOwner:cm};X.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=qs;X.Fragment=Zk;X.Profiler=tR;X.PureComponent=lm;X.StrictMode=eR;X.Suspense=sR;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fR;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=J1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tw.call(e,l)&&!nw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ja,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:rR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nR,_context:t},t.Consumer=t};X.createElement=rw;X.createFactory=function(t){var e=rw.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:iR,render:t}};X.isValidElement=dm;X.lazy=function(t){return{$$typeof:aR,_payload:{_status:-1,_result:t},_init:dR}};X.memo=function(t,e){return{$$typeof:oR,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=wu.transition;wu.transition={};try{t()}finally{wu.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return yt.current.useCallback(t,e)};X.useContext=function(t){return yt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};X.useEffect=function(t,e){return yt.current.useEffect(t,e)};X.useId=function(){return yt.current.useId()};X.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return yt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};X.useRef=function(t){return yt.current.useRef(t)};X.useState=function(t){return yt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return yt.current.useTransition()};X.version="18.2.0";Y1.exports=X;var y=Y1.exports;const Me=Xa(y),hR=Xk({__proto__:null,default:Me},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pR=y,mR=Symbol.for("react.element"),gR=Symbol.for("react.fragment"),vR=Object.prototype.hasOwnProperty,yR=pR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_R={key:!0,ref:!0,__self:!0,__source:!0};function iw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vR.call(e,r)&&!_R.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mR,type:t,key:s,ref:o,props:i,_owner:yR.current}}Hc.Fragment=gR;Hc.jsx=iw;Hc.jsxs=iw;Q1.exports=Hc;var p=Q1.exports,ah={},sw={exports:{}},Ot={},ow={exports:{}},aw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,W){var G=x.length;x.push(W);e:for(;0<G;){var ie=G-1>>>1,ce=x[ie];if(0<i(ce,W))x[ie]=W,x[G]=ce,G=ie;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var W=x[0],G=x.pop();if(G!==W){x[0]=G;e:for(var ie=0,ce=x.length,pt=ce>>>1;ie<pt;){var rt=2*(ie+1)-1,Cn=x[rt],Gt=rt+1,An=x[Gt];if(0>i(Cn,G))Gt<ce&&0>i(An,Cn)?(x[ie]=An,x[Gt]=G,ie=Gt):(x[ie]=Cn,x[rt]=G,ie=rt);else if(Gt<ce&&0>i(An,G))x[ie]=An,x[Gt]=G,ie=Gt;else break e}}return W}function i(x,W){var G=x.sortIndex-W.sortIndex;return G!==0?G:x.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,_=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(x){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=x)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function T(x){if(w=!1,g(x),!_)if(n(l)!==null)_=!0,Mt(I);else{var W=n(u);W!==null&&on(T,W.startTime-x)}}function I(x,W){_=!1,w&&(w=!1,v(O),O=-1),h=!0;var G=f;try{for(g(W),d=n(l);d!==null&&(!(d.expirationTime>W)||x&&!F());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var ce=ie(d.expirationTime<=W);W=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&r(l),g(W)}else r(l);d=n(l)}if(d!==null)var pt=!0;else{var rt=n(u);rt!==null&&on(T,rt.startTime-W),pt=!1}return pt}finally{d=null,f=G,h=!1}}var A=!1,P=null,O=-1,D=5,R=-1;function F(){return!(t.unstable_now()-R<D)}function ae(){if(P!==null){var x=t.unstable_now();R=x;var W=!0;try{W=P(!0,x)}finally{W?He():(A=!1,P=null)}}else A=!1}var He;if(typeof m=="function")He=function(){m(ae)};else if(typeof MessageChannel<"u"){var Kr=new MessageChannel,po=Kr.port2;Kr.port1.onmessage=ae,He=function(){po.postMessage(null)}}else He=function(){E(ae,0)};function Mt(x){P=x,A||(A=!0,He())}function on(x,W){O=E(function(){x(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){_||h||(_=!0,Mt(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var G=f;f=W;try{return x()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,W){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var G=f;f=x;try{return W()}finally{f=G}},t.unstable_scheduleCallback=function(x,W,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,x){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=G+ce,x={id:c++,callback:W,priorityLevel:x,startTime:G,expirationTime:ce,sortIndex:-1},G>ie?(x.sortIndex=G,e(u,x),n(l)===null&&x===n(u)&&(w?(v(O),O=-1):w=!0,on(T,G-ie))):(x.sortIndex=ce,e(l,x),_||h||(_=!0,Mt(I))),x},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(x){var W=f;return function(){var G=f;f=W;try{return x.apply(this,arguments)}finally{f=G}}}})(aw);ow.exports=aw;var wR=ow.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lw=y,bt=wR;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uw=new Set,aa={};function Ni(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(aa[t]=e,t=0;t<e.length;t++)uw.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,ER=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jv={},Zv={};function TR(t){return lh.call(Zv,t)?!0:lh.call(Jv,t)?!1:ER.test(t)?Zv[t]=!0:(Jv[t]=!0,!1)}function IR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SR(t,e,n,r){if(e===null||typeof e>"u"||IR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var fm=/[\-:]([a-z])/g;function hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fm,hm);tt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fm,hm);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fm,hm);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function pm(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SR(e,n,i,r)&&(n=null),r||i===null?TR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),cw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),vm=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),fw=Symbol.for("react.offscreen"),ey=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=ey&&t[ey]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,nf;function xo(t){if(nf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nf=e&&e[1]||""}return`
`+nf+t}var rf=!1;function sf(t,e){if(!t||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xo(t):""}function CR(t){switch(t.tag){case 5:return xo(t.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return t=sf(t.type,!1),t;case 11:return t=sf(t.type.render,!1),t;case 1:return t=sf(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Xi:return"Portal";case uh:return"Profiler";case mm:return"StrictMode";case ch:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dw:return(t.displayName||"Context")+".Consumer";case cw:return(t._context.displayName||"Context")+".Provider";case gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vm:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function AR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kR(t){var e=hw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=kR(t))}function pw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ty(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mw(t,e){e=e.checked,e!=null&&pm(t,"checked",e,!1)}function ph(t,e){mw(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ny(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||Uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ry(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(bo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function gw(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function iy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,yw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RR=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){RR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function _w(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function ww(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_w(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PR=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yh(t,e){if(e){if(PR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function ym(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,ms=null,gs=null;function sy(t){if(t=tl(t)){if(typeof Eh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Yc(e),Eh(t.stateNode,t.type,e))}}function Ew(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Tw(){if(ms){var t=ms,e=gs;if(gs=ms=null,sy(t),e)for(t=0;t<e.length;t++)sy(e[t])}}function Iw(t,e){return t(e)}function Sw(){}var of=!1;function Cw(t,e,n){if(of)return t(e,n);of=!0;try{return Iw(t,e,n)}finally{of=!1,(ms!==null||gs!==null)&&(Sw(),Tw())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var r=Yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Th=!1;if($n)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Th=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Th=!1}function xR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wo=!1,Bu=null,zu=!1,Ih=null,bR={onError:function(t){Wo=!0,Bu=t}};function NR(t,e,n,r,i,s,o,a,l){Wo=!1,Bu=null,xR.apply(bR,arguments)}function OR(t,e,n,r,i,s,o,a,l){if(NR.apply(this,arguments),Wo){if(Wo){var u=Bu;Wo=!1,Bu=null}else throw Error(k(198));zu||(zu=!0,Ih=u)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Aw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oy(t){if(Oi(t)!==t)throw Error(k(188))}function DR(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return oy(i),t;if(s===r)return oy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function kw(t){return t=DR(t),t!==null?Rw(t):null}function Rw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rw(t);if(e!==null)return e;t=t.sibling}return null}var Pw=bt.unstable_scheduleCallback,ay=bt.unstable_cancelCallback,LR=bt.unstable_shouldYield,MR=bt.unstable_requestPaint,Re=bt.unstable_now,VR=bt.unstable_getCurrentPriorityLevel,_m=bt.unstable_ImmediatePriority,xw=bt.unstable_UserBlockingPriority,Wu=bt.unstable_NormalPriority,$R=bt.unstable_LowPriority,bw=bt.unstable_IdlePriority,qc=null,gn=null;function jR(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:BR,FR=Math.log,UR=Math.LN2;function BR(t){return t>>>=0,t===0?32:31-(FR(t)/UR|0)|0}var Vl=64,$l=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=No(a):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function zR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nw(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function HR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function Ow(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dw,Em,Lw,Mw,Vw,Ch=!1,jl=[],yr=null,_r=null,wr=null,ca=new Map,da=new Map,lr=[],qR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ly(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=tl(e),e!==null&&Em(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GR(t,e,n,r,i){switch(e){case"focusin":return yr=wo(yr,t,e,n,r,i),!0;case"dragenter":return _r=wo(_r,t,e,n,r,i),!0;case"mouseover":return wr=wo(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ca.set(s,wo(ca.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,da.set(s,wo(da.get(s)||null,t,e,n,r,i)),!0}return!1}function $w(t){var e=ri(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=Aw(n),e!==null){t.blockedOn=e,Vw(t.priority,function(){Lw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=tl(n),e!==null&&Em(e),t.blockedOn=n,!1;e.shift()}return!0}function uy(t,e,n){Eu(t)&&n.delete(e)}function KR(){Ch=!1,yr!==null&&Eu(yr)&&(yr=null),_r!==null&&Eu(_r)&&(_r=null),wr!==null&&Eu(wr)&&(wr=null),ca.forEach(uy),da.forEach(uy)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ch||(Ch=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,KR)))}function fa(t){function e(i){return Eo(i,t)}if(0<jl.length){Eo(jl[0],t);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Eo(yr,t),_r!==null&&Eo(_r,t),wr!==null&&Eo(wr,t),ca.forEach(e),da.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)$w(n),n.blockedOn===null&&lr.shift()}var vs=Qn.ReactCurrentBatchConfig,qu=!0;function QR(t,e,n,r){var i=se,s=vs.transition;vs.transition=null;try{se=1,Tm(t,e,n,r)}finally{se=i,vs.transition=s}}function YR(t,e,n,r){var i=se,s=vs.transition;vs.transition=null;try{se=4,Tm(t,e,n,r)}finally{se=i,vs.transition=s}}function Tm(t,e,n,r){if(qu){var i=Ah(t,e,n,r);if(i===null)vf(t,e,r,Gu,n),ly(t,r);else if(GR(i,t,e,n,r))r.stopPropagation();else if(ly(t,r),e&4&&-1<qR.indexOf(t)){for(;i!==null;){var s=tl(i);if(s!==null&&Dw(s),s=Ah(t,e,n,r),s===null&&vf(t,e,r,Gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vf(t,e,r,null,n)}}var Gu=null;function Ah(t,e,n,r){if(Gu=null,t=ym(r),t=ri(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Aw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gu=t,null}function jw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VR()){case _m:return 1;case xw:return 4;case Wu:case $R:return 16;case bw:return 536870912;default:return 16}default:return 16}}var hr=null,Im=null,Tu=null;function Fw(){if(Tu)return Tu;var t,e=Im,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tu=i.slice(t,1<r?1-r:void 0)}function Iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function cy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fl:cy,this.isPropagationStopped=cy,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sm=Dt(Gs),el=Ie({},Gs,{view:0,detail:0}),XR=Dt(el),lf,uf,To,Gc=Ie({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(lf=t.screenX-To.screenX,uf=t.screenY-To.screenY):uf=lf=0,To=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:uf}}),dy=Dt(Gc),JR=Ie({},Gc,{dataTransfer:0}),ZR=Dt(JR),eP=Ie({},el,{relatedTarget:0}),cf=Dt(eP),tP=Ie({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),nP=Dt(tP),rP=Ie({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iP=Dt(rP),sP=Ie({},Gs,{data:0}),fy=Dt(sP),oP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lP[t])?!!e[t]:!1}function Cm(){return uP}var cP=Ie({},el,{key:function(t){if(t.key){var e=oP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cm,charCode:function(t){return t.type==="keypress"?Iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dP=Dt(cP),fP=Ie({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hy=Dt(fP),hP=Ie({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cm}),pP=Dt(hP),mP=Ie({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gP=Dt(mP),vP=Ie({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yP=Dt(vP),_P=[9,13,27,32],Am=$n&&"CompositionEvent"in window,Ho=null;$n&&"documentMode"in document&&(Ho=document.documentMode);var wP=$n&&"TextEvent"in window&&!Ho,Uw=$n&&(!Am||Ho&&8<Ho&&11>=Ho),py=" ",my=!1;function Bw(t,e){switch(t){case"keyup":return _P.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function EP(t,e){switch(t){case"compositionend":return zw(e);case"keypress":return e.which!==32?null:(my=!0,py);case"textInput":return t=e.data,t===py&&my?null:t;default:return null}}function TP(t,e){if(Zi)return t==="compositionend"||!Am&&Bw(t,e)?(t=Fw(),Tu=Im=hr=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uw&&e.locale!=="ko"?null:e.data;default:return null}}var IP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IP[t.type]:e==="textarea"}function Ww(t,e,n,r){Ew(r),e=Ku(e,"onChange"),0<e.length&&(n=new Sm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,ha=null;function SP(t){tE(t,0)}function Kc(t){var e=ns(t);if(pw(e))return t}function CP(t,e){if(t==="change")return e}var Hw=!1;if($n){var df;if($n){var ff="oninput"in document;if(!ff){var vy=document.createElement("div");vy.setAttribute("oninput","return;"),ff=typeof vy.oninput=="function"}df=ff}else df=!1;Hw=df&&(!document.documentMode||9<document.documentMode)}function yy(){qo&&(qo.detachEvent("onpropertychange",qw),ha=qo=null)}function qw(t){if(t.propertyName==="value"&&Kc(ha)){var e=[];Ww(e,ha,t,ym(t)),Cw(SP,e)}}function AP(t,e,n){t==="focusin"?(yy(),qo=e,ha=n,qo.attachEvent("onpropertychange",qw)):t==="focusout"&&yy()}function kP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ha)}function RP(t,e){if(t==="click")return Kc(e)}function PP(t,e){if(t==="input"||t==="change")return Kc(e)}function xP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:xP;function pa(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function _y(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wy(t,e){var n=_y(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_y(n)}}function Gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kw(){for(var t=window,e=Uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uu(t.document)}return e}function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bP(t){var e=Kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gw(n.ownerDocument.documentElement,n)){if(r!==null&&km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wy(n,s);var o=wy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NP=$n&&"documentMode"in document&&11>=document.documentMode,es=null,kh=null,Go=null,Rh=!1;function Ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||es==null||es!==Uu(r)||(r=es,"selectionStart"in r&&km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&pa(Go,r)||(Go=r,r=Ku(kh,"onSelect"),0<r.length&&(e=new Sm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function Ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},hf={},Qw={};$n&&(Qw=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Qc(t){if(hf[t])return hf[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qw)return hf[t]=e[n];return t}var Yw=Qc("animationend"),Xw=Qc("animationiteration"),Jw=Qc("animationstart"),Zw=Qc("transitionend"),eE=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){eE.set(t,e),Ni(e,[t])}for(var pf=0;pf<Ty.length;pf++){var mf=Ty[pf],OP=mf.toLowerCase(),DP=mf[0].toUpperCase()+mf.slice(1);Fr(OP,"on"+DP)}Fr(Yw,"onAnimationEnd");Fr(Xw,"onAnimationIteration");Fr(Jw,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(Zw,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OR(r,e,void 0,t),t.currentTarget=null}function tE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Iy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Iy(i,a,u),s=l}}}if(zu)throw t=Ih,zu=!1,Ih=null,t}function de(t,e){var n=e[Oh];n===void 0&&(n=e[Oh]=new Set);var r=t+"__bubble";n.has(r)||(nE(e,t,2,!1),n.add(r))}function gf(t,e,n){var r=0;e&&(r|=4),nE(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[Bl]){t[Bl]=!0,uw.forEach(function(n){n!=="selectionchange"&&(LP.has(n)||gf(n,!1,t),gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,gf("selectionchange",!1,e))}}function nE(t,e,n,r){switch(jw(e)){case 1:var i=QR;break;case 4:i=YR;break;default:i=Tm}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cw(function(){var u=s,c=ym(n),d=[];e:{var f=eE.get(t);if(f!==void 0){var h=Sm,_=t;switch(t){case"keypress":if(Iu(n)===0)break e;case"keydown":case"keyup":h=dP;break;case"focusin":_="focus",h=cf;break;case"focusout":_="blur",h=cf;break;case"beforeblur":case"afterblur":h=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=dy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ZR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=pP;break;case Yw:case Xw:case Jw:h=nP;break;case Zw:h=gP;break;case"scroll":h=XR;break;case"wheel":h=yP;break;case"copy":case"cut":case"paste":h=iP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=hy}var w=(e&4)!==0,E=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,g;m!==null;){g=m;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,v!==null&&(T=ua(m,v),T!=null&&w.push(ga(m,T,g)))),E)break;m=m.return}0<w.length&&(f=new h(f,_,null,n,c),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==wh&&(_=n.relatedTarget||n.fromElement)&&(ri(_)||_[jn]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=u,_=_?ri(_):null,_!==null&&(E=Oi(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(h=null,_=u),h!==_)){if(w=dy,T="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=hy,T="onPointerLeave",v="onPointerEnter",m="pointer"),E=h==null?f:ns(h),g=_==null?f:ns(_),f=new w(T,m+"leave",h,n,c),f.target=E,f.relatedTarget=g,T=null,ri(c)===u&&(w=new w(v,m+"enter",_,n,c),w.target=g,w.relatedTarget=E,T=w),E=T,h&&_)t:{for(w=h,v=_,m=0,g=w;g;g=zi(g))m++;for(g=0,T=v;T;T=zi(T))g++;for(;0<m-g;)w=zi(w),m--;for(;0<g-m;)v=zi(v),g--;for(;m--;){if(w===v||v!==null&&w===v.alternate)break t;w=zi(w),v=zi(v)}w=null}else w=null;h!==null&&Sy(d,f,h,w,!1),_!==null&&E!==null&&Sy(d,E,_,w,!0)}}e:{if(f=u?ns(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var I=CP;else if(gy(f))if(Hw)I=PP;else{I=kP;var A=AP}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=RP);if(I&&(I=I(t,u))){Ww(d,I,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&mh(f,"number",f.value)}switch(A=u?ns(u):window,t){case"focusin":(gy(A)||A.contentEditable==="true")&&(es=A,kh=u,Go=null);break;case"focusout":Go=kh=es=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,Ey(d,n,c);break;case"selectionchange":if(NP)break;case"keydown":case"keyup":Ey(d,n,c)}var P;if(Am)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Zi?Bw(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Uw&&n.locale!=="ko"&&(Zi||O!=="onCompositionStart"?O==="onCompositionEnd"&&Zi&&(P=Fw()):(hr=c,Im="value"in hr?hr.value:hr.textContent,Zi=!0)),A=Ku(u,O),0<A.length&&(O=new fy(O,t,null,n,c),d.push({event:O,listeners:A}),P?O.data=P:(P=zw(n),P!==null&&(O.data=P)))),(P=wP?EP(t,n):TP(t,n))&&(u=Ku(u,"onBeforeInput"),0<u.length&&(c=new fy("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}tE(d,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ua(t,n),s!=null&&r.unshift(ga(t,s,i)),s=ua(t,e),s!=null&&r.push(ga(t,s,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ua(n,s),l!=null&&o.unshift(ga(n,l,a))):i||(l=ua(n,s),l!=null&&o.push(ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MP=/\r\n?/g,VP=/\u0000|\uFFFD/g;function Cy(t){return(typeof t=="string"?t:""+t).replace(MP,`
`).replace(VP,"")}function zl(t,e,n){if(e=Cy(e),Cy(t)!==e&&n)throw Error(k(425))}function Qu(){}var Ph=null,xh=null;function bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,$P=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,jP=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(t){return Ay.resolve(null).then(t).catch(FP)}:Nh;function FP(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fa(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ky(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),un="__reactFiber$"+Ks,va="__reactProps$"+Ks,jn="__reactContainer$"+Ks,Oh="__reactEvents$"+Ks,UP="__reactListeners$"+Ks,BP="__reactHandles$"+Ks;function ri(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ky(t);t!==null;){if(n=t[un])return n;t=ky(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[un]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Yc(t){return t[va]||null}var Dh=[],rs=-1;function Ur(t){return{current:t}}function ve(t){0>rs||(t.current=Dh[rs],Dh[rs]=null,rs--)}function le(t,e){rs++,Dh[rs]=t.current,t.current=e}var Or={},ft=Ur(Or),St=Ur(!1),yi=Or;function ks(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Yu(){ve(St),ve(ft)}function Ry(t,e,n){if(ft.current!==Or)throw Error(k(168));le(ft,e),le(St,n)}function rE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,AR(t)||"Unknown",i));return Ie({},n,r)}function Xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,yi=ft.current,le(ft,t),le(St,St.current),!0}function Py(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=rE(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,ve(St),ve(ft),le(ft,t)):ve(St),le(St,n)}var Rn=null,Xc=!1,_f=!1;function iE(t){Rn===null?Rn=[t]:Rn.push(t)}function zP(t){Xc=!0,iE(t)}function Br(){if(!_f&&Rn!==null){_f=!0;var t=0,e=se;try{var n=Rn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Xc=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),Pw(_m,Br),i}finally{se=e,_f=!1}}return null}var is=[],ss=0,Ju=null,Zu=0,$t=[],jt=0,_i=null,xn=1,bn="";function Qr(t,e){is[ss++]=Zu,is[ss++]=Ju,Ju=t,Zu=e}function sE(t,e,n){$t[jt++]=xn,$t[jt++]=bn,$t[jt++]=_i,_i=t;var r=xn;t=bn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-en(e)+i|n<<i|r,bn=s+t}else xn=1<<s|n<<i|r,bn=t}function Rm(t){t.return!==null&&(Qr(t,1),sE(t,1,0))}function Pm(t){for(;t===Ju;)Ju=is[--ss],is[ss]=null,Zu=is[--ss],is[ss]=null;for(;t===_i;)_i=$t[--jt],$t[jt]=null,bn=$t[--jt],$t[jt]=null,xn=$t[--jt],$t[jt]=null}var Pt=null,Rt=null,we=!1,Xt=null;function oE(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_i!==null?{id:xn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function Lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mh(t){if(we){var e=Rt;if(e){var n=e;if(!xy(t,e)){if(Lh(t))throw Error(k(418));e=Er(n.nextSibling);var r=Pt;e&&xy(t,e)?oE(r,n):(t.flags=t.flags&-4097|2,we=!1,Pt=t)}}else{if(Lh(t))throw Error(k(418));t.flags=t.flags&-4097|2,we=!1,Pt=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Wl(t){if(t!==Pt)return!1;if(!we)return by(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bh(t.type,t.memoizedProps)),e&&(e=Rt)){if(Lh(t))throw aE(),Error(k(418));for(;e;)oE(t,e),e=Er(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?Er(t.stateNode.nextSibling):null;return!0}function aE(){for(var t=Rt;t;)t=Er(t.nextSibling)}function Rs(){Rt=Pt=null,we=!1}function xm(t){Xt===null?Xt=[t]:Xt.push(t)}var WP=Qn.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ec=Ur(null),tc=null,os=null,bm=null;function Nm(){bm=os=tc=null}function Om(t){var e=ec.current;ve(ec),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){tc=t,bm=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(bm!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(tc===null)throw Error(k(308));os=t,tc.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var ii=null;function Dm(t){ii===null?ii=[t]:ii.push(t)}function lE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Lm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Dm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wm(t,n)}}function Ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(f=e,h=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(h,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,f=typeof _=="function"?_.call(h,d,f):_,f==null)break e;d=Ie({},d,f);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=o,t.lanes=o,t.memoizedState=d}}function Oy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var cE=new lw.Component().refs;function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(tn(e,t,i,r),Su(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),i=Sr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(tn(e,t,i,r),Su(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=Sr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(tn(e,t,r,n),Su(e,t,r))}};function Dy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(n,r)||!pa(i,s):!0}function dE(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=Ct(e)?yi:ft.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=cE,Lm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=Ct(e)?yi:ft.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jc.enqueueReplaceState(i,i.state,null),nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===cE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function My(t){var e=t._init;return e(t._payload)}function fE(t){function e(v,m){if(t){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=Cr(v,m),v.index=0,v.sibling=null,v}function s(v,m,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,m,g,T){return m===null||m.tag!==6?(m=Af(g,v.mode,T),m.return=v,m):(m=i(m,g),m.return=v,m)}function l(v,m,g,T){var I=g.type;return I===Ji?c(v,m,g.props.children,T,g.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sr&&My(I)===m.type)?(T=i(m,g.props),T.ref=Io(v,m,g),T.return=v,T):(T=xu(g.type,g.key,g.props,null,v.mode,T),T.ref=Io(v,m,g),T.return=v,T)}function u(v,m,g,T){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=kf(g,v.mode,T),m.return=v,m):(m=i(m,g.children||[]),m.return=v,m)}function c(v,m,g,T,I){return m===null||m.tag!==7?(m=pi(g,v.mode,T,I),m.return=v,m):(m=i(m,g),m.return=v,m)}function d(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Af(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Dl:return g=xu(m.type,m.key,m.props,null,v.mode,g),g.ref=Io(v,null,m),g.return=v,g;case Xi:return m=kf(m,v.mode,g),m.return=v,m;case sr:var T=m._init;return d(v,T(m._payload),g)}if(bo(m)||yo(m))return m=pi(m,v.mode,g,null),m.return=v,m;Hl(v,m)}return null}function f(v,m,g,T){var I=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(v,m,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:return g.key===I?l(v,m,g,T):null;case Xi:return g.key===I?u(v,m,g,T):null;case sr:return I=g._init,f(v,m,I(g._payload),T)}if(bo(g)||yo(g))return I!==null?null:c(v,m,g,T,null);Hl(v,g)}return null}function h(v,m,g,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(g)||null,a(m,v,""+T,I);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Dl:return v=v.get(T.key===null?g:T.key)||null,l(m,v,T,I);case Xi:return v=v.get(T.key===null?g:T.key)||null,u(m,v,T,I);case sr:var A=T._init;return h(v,m,g,A(T._payload),I)}if(bo(T)||yo(T))return v=v.get(g)||null,c(m,v,T,I,null);Hl(m,T)}return null}function _(v,m,g,T){for(var I=null,A=null,P=m,O=m=0,D=null;P!==null&&O<g.length;O++){P.index>O?(D=P,P=null):D=P.sibling;var R=f(v,P,g[O],T);if(R===null){P===null&&(P=D);break}t&&P&&R.alternate===null&&e(v,P),m=s(R,m,O),A===null?I=R:A.sibling=R,A=R,P=D}if(O===g.length)return n(v,P),we&&Qr(v,O),I;if(P===null){for(;O<g.length;O++)P=d(v,g[O],T),P!==null&&(m=s(P,m,O),A===null?I=P:A.sibling=P,A=P);return we&&Qr(v,O),I}for(P=r(v,P);O<g.length;O++)D=h(P,v,O,g[O],T),D!==null&&(t&&D.alternate!==null&&P.delete(D.key===null?O:D.key),m=s(D,m,O),A===null?I=D:A.sibling=D,A=D);return t&&P.forEach(function(F){return e(v,F)}),we&&Qr(v,O),I}function w(v,m,g,T){var I=yo(g);if(typeof I!="function")throw Error(k(150));if(g=I.call(g),g==null)throw Error(k(151));for(var A=I=null,P=m,O=m=0,D=null,R=g.next();P!==null&&!R.done;O++,R=g.next()){P.index>O?(D=P,P=null):D=P.sibling;var F=f(v,P,R.value,T);if(F===null){P===null&&(P=D);break}t&&P&&F.alternate===null&&e(v,P),m=s(F,m,O),A===null?I=F:A.sibling=F,A=F,P=D}if(R.done)return n(v,P),we&&Qr(v,O),I;if(P===null){for(;!R.done;O++,R=g.next())R=d(v,R.value,T),R!==null&&(m=s(R,m,O),A===null?I=R:A.sibling=R,A=R);return we&&Qr(v,O),I}for(P=r(v,P);!R.done;O++,R=g.next())R=h(P,v,O,R.value,T),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?O:R.key),m=s(R,m,O),A===null?I=R:A.sibling=R,A=R);return t&&P.forEach(function(ae){return e(v,ae)}),we&&Qr(v,O),I}function E(v,m,g,T){if(typeof g=="object"&&g!==null&&g.type===Ji&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:e:{for(var I=g.key,A=m;A!==null;){if(A.key===I){if(I=g.type,I===Ji){if(A.tag===7){n(v,A.sibling),m=i(A,g.props.children),m.return=v,v=m;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sr&&My(I)===A.type){n(v,A.sibling),m=i(A,g.props),m.ref=Io(v,A,g),m.return=v,v=m;break e}n(v,A);break}else e(v,A);A=A.sibling}g.type===Ji?(m=pi(g.props.children,v.mode,T,g.key),m.return=v,v=m):(T=xu(g.type,g.key,g.props,null,v.mode,T),T.ref=Io(v,m,g),T.return=v,v=T)}return o(v);case Xi:e:{for(A=g.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=i(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else e(v,m);m=m.sibling}m=kf(g,v.mode,T),m.return=v,v=m}return o(v);case sr:return A=g._init,E(v,m,A(g._payload),T)}if(bo(g))return _(v,m,g,T);if(yo(g))return w(v,m,g,T);Hl(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,g),m.return=v,v=m):(n(v,m),m=Af(g,v.mode,T),m.return=v,v=m),o(v)):n(v,m)}return E}var Ps=fE(!0),hE=fE(!1),nl={},vn=Ur(nl),ya=Ur(nl),_a=Ur(nl);function si(t){if(t===nl)throw Error(k(174));return t}function Mm(t,e){switch(le(_a,e),le(ya,t),le(vn,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}ve(vn),le(vn,e)}function xs(){ve(vn),ve(ya),ve(_a)}function pE(t){si(_a.current);var e=si(vn.current),n=vh(e,t.type);e!==n&&(le(ya,t),le(vn,n))}function Vm(t){ya.current===t&&(ve(vn),ve(ya))}var Ee=Ur(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wf=[];function $m(){for(var t=0;t<wf.length;t++)wf[t]._workInProgressVersionPrimary=null;wf.length=0}var Cu=Qn.ReactCurrentDispatcher,Ef=Qn.ReactCurrentBatchConfig,wi=0,Te=null,Le=null,Ue=null,ic=!1,Ko=!1,wa=0,HP=0;function it(){throw Error(k(321))}function jm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Fm(t,e,n,r,i,s){if(wi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=t===null||t.memoizedState===null?QP:YP,t=n(r,i),Ko){s=0;do{if(Ko=!1,wa=0,25<=s)throw Error(k(301));s+=1,Ue=Le=null,e.updateQueue=null,Cu.current=XP,t=n(r,i)}while(Ko)}if(Cu.current=sc,e=Le!==null&&Le.next!==null,wi=0,Ue=Le=Te=null,ic=!1,e)throw Error(k(300));return t}function Um(){var t=wa!==0;return wa=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ht(){if(Le===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Ue===null?Te.memoizedState:Ue.next;if(e!==null)Ue=e,Le=t;else{if(t===null)throw Error(k(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Ea(t,e){return typeof e=="function"?e(t):e}function Tf(t){var e=Ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Te.lanes|=c,Ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function If(t){var e=Ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function mE(){}function gE(t,e){var n=Te,r=Ht(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,Bm(_E.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ta(9,yE.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(k(349));wi&30||vE(n,e,i)}return i}function vE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yE(t,e,n,r){e.value=n,e.getSnapshot=r,wE(e)&&EE(t)}function _E(t,e,n){return n(function(){wE(e)&&EE(t)})}function wE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function EE(t){var e=Fn(t,1);e!==null&&tn(e,t,1,-1)}function Vy(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=KP.bind(null,Te,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TE(){return Ht().memoizedState}function Au(t,e,n,r){var i=ln();Te.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function Zc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&jm(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function $y(t,e){return Au(8390656,8,t,e)}function Bm(t,e){return Zc(2048,8,t,e)}function IE(t,e){return Zc(4,2,t,e)}function SE(t,e){return Zc(4,4,t,e)}function CE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AE(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,CE.bind(null,e,t),n)}function zm(){}function kE(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function RE(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function PE(t,e,n){return wi&21?(nn(n,e)||(n=Nw(),Te.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function qP(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=Ef.transition;Ef.transition={};try{t(!1),e()}finally{se=n,Ef.transition=r}}function xE(){return Ht().memoizedState}function GP(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bE(t))NE(e,n);else if(n=lE(t,e,n,r),n!==null){var i=vt();tn(n,t,r,i),OE(n,e,r)}}function KP(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bE(t))NE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,Dm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=lE(t,e,i,r),n!==null&&(i=vt(),tn(n,t,r,i),OE(n,e,r))}}function bE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function NE(t,e){Ko=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wm(t,n)}}var sc={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},QP={readContext:Wt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:$y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Au(4194308,4,CE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Au(4194308,4,t,e)},useInsertionEffect:function(t,e){return Au(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GP.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Vy,useDebugValue:zm,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Vy(!1),e=t[0];return t=qP.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=ln();if(we){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Be===null)throw Error(k(349));wi&30||vE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$y(_E.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,yE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Be.identifierPrefix;if(we){var n=bn,r=xn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YP={readContext:Wt,useCallback:kE,useContext:Wt,useEffect:Bm,useImperativeHandle:AE,useInsertionEffect:IE,useLayoutEffect:SE,useMemo:RE,useReducer:Tf,useRef:TE,useState:function(){return Tf(Ea)},useDebugValue:zm,useDeferredValue:function(t){var e=Ht();return PE(e,Le.memoizedState,t)},useTransition:function(){var t=Tf(Ea)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:mE,useSyncExternalStore:gE,useId:xE,unstable_isNewReconciler:!1},XP={readContext:Wt,useCallback:kE,useContext:Wt,useEffect:Bm,useImperativeHandle:AE,useInsertionEffect:IE,useLayoutEffect:SE,useMemo:RE,useReducer:If,useRef:TE,useState:function(){return If(Ea)},useDebugValue:zm,useDeferredValue:function(t){var e=Ht();return Le===null?e.memoizedState=t:PE(e,Le.memoizedState,t)},useTransition:function(){var t=If(Ea)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:mE,useSyncExternalStore:gE,useId:xE,unstable_isNewReconciler:!1};function bs(t,e){try{var n="",r=e;do n+=CR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JP=typeof WeakMap=="function"?WeakMap:Map;function DE(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,Yh=r),Fh(t,e)},n}function LE(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fh(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fx.bind(null,t,e,n),e.then(t,t))}function Fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var ZP=Qn.ReactCurrentOwner,It=!1;function mt(t,e,n,r){e.child=t===null?hE(e,null,n,r):Ps(e,t.child,n,r)}function By(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=Fm(t,e,n,r,s,i),n=Um(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(we&&n&&Rm(e),e.flags|=1,mt(t,e,r,i),e.child)}function zy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ME(t,e,s,r,i)):(t=xu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ME(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(pa(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Un(t,e,i)}return Uh(t,e,n,r,i)}function VE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(ls,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(ls,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(ls,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(ls,kt),kt|=r;return mt(t,e,i,n),e.child}function $E(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,r,i){var s=Ct(n)?yi:ft.current;return s=ks(e,s),ys(e,i),n=Fm(t,e,n,r,s,i),r=Um(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(we&&r&&Rm(e),e.flags|=1,mt(t,e,n,i),e.child)}function Wy(t,e,n,r,i){if(Ct(n)){var s=!0;Xu(e)}else s=!1;if(ys(e,i),e.stateNode===null)ku(t,e),dE(e,n,r),jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=Ct(n)?yi:ft.current,u=ks(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ly(e,o,r,u),or=!1;var f=e.memoizedState;o.state=f,nc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||St.current||or?(typeof c=="function"&&($h(e,n,c,r),l=e.memoizedState),(a=or||Dy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wt(l):(l=Ct(n)?yi:ft.current,l=ks(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ly(e,o,r,l),or=!1,f=e.memoizedState,o.state=f,nc(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||St.current||or?(typeof h=="function"&&($h(e,n,h,r),_=e.memoizedState),(u=or||Dy(e,n,u,r,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){$E(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Py(e,n,!1),Un(t,e,s);r=e.stateNode,ZP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&Py(e,n,!0),e.child}function jE(t){var e=t.stateNode;e.pendingContext?Ry(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ry(t,e.context,!1),Mm(t,e.containerInfo)}function Hy(t,e,n,r,i){return Rs(),xm(i),e.flags|=256,mt(t,e,n,r),e.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function FE(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(Ee,i&1),t===null)return Mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wh(n),e.memoizedState=zh,t):Wm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ex(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zh,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wm(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&xm(r),Ps(e,t.child,null,n),t=Wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ex(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sf(Error(k(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=Wh(o),e.memoizedState=zh,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Sf(s,r,void 0),ql(t,e,o,r)}if(a=(o&t.childLanes)!==0,It||a){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),tn(r,t,i,-1))}return Ym(),r=Sf(Error(k(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=Er(i.nextSibling),Pt=e,we=!0,Xt=null,t!==null&&($t[jt++]=xn,$t[jt++]=bn,$t[jt++]=_i,xn=t.id,bn=t.overflow,_i=e),e=Wm(e,r.children),e.flags|=4096,e)}function qy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vh(t.return,e,n)}function Cf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function UE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qy(t,n,e);else if(t.tag===19)qy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cf(e,!0,n,null,s);break;case"together":Cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tx(t,e,n){switch(e.tag){case 3:jE(e),Rs();break;case 5:pE(e);break;case 1:Ct(e.type)&&Xu(e);break;case 4:Mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?FE(t,e,n):(le(Ee,Ee.current&1),t=Un(t,e,n),t!==null?t.sibling:null);le(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return UE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,VE(t,e,n)}return Un(t,e,n)}var BE,Hh,zE,WE;BE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};zE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(vn.current);var s=null;switch(n){case"input":i=hh(t,i),r=hh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=gh(t,i),r=gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}yh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};WE=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nx(t,e,n){var r=e.pendingProps;switch(Pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&Yu(),st(e),null;case 3:return r=e.stateNode,xs(),ve(St),ve(ft),$m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Zh(Xt),Xt=null))),Hh(t,e),st(e),null;case 5:Vm(e);var i=si(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)zE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return st(e),null}if(t=si(vn.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[va]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Oo.length;i++)de(Oo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":ty(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":ry(r,s),de("invalid",r)}yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ll(r),ny(r,s,!0);break;case"textarea":Ll(r),iy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[va]=r,BE(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oo.length;i++)de(Oo[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":ty(t,r),i=hh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),de("invalid",t);break;case"textarea":ry(t,r),i=gh(t,r),de("invalid",t);break;default:i=r}yh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ww(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&pm(t,s,l,o))}switch(n){case"input":Ll(t),ny(t,r,!1);break;case"textarea":Ll(t),iy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)WE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=si(_a.current),si(vn.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return st(e),null;case 13:if(ve(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Rt!==null&&e.mode&1&&!(e.flags&128))aE(),Rs(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[un]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Xt!==null&&(Zh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ve===0&&(Ve=3):Ym())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return xs(),Hh(t,e),t===null&&ma(e.stateNode.containerInfo),st(e),null;case 10:return Om(e.type._context),st(e),null;case 17:return Ct(e.type)&&Yu(),st(e),null;case 19:if(ve(Ee),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Ns&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*Re()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Ee.current,le(Ee,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function rx(t,e){switch(Pm(e),e.tag){case 1:return Ct(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),ve(St),ve(ft),$m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vm(e),null;case 13:if(ve(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ee),null;case 4:return xs(),null;case 10:return Om(e.type._context),null;case 22:case 23:return Qm(),null;case 24:return null;default:return null}}var Gl=!1,lt=!1,ix=typeof WeakSet=="function"?WeakSet:Set,V=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function qh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Gy=!1;function sx(t,e){if(Ph=qu,t=Kw(),km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},qu=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,E=_.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:Qt(e.type,w),E);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(T){Ce(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return _=Gy,Gy=!1,_}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qh(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function HE(t){var e=t.alternate;e!==null&&(t.alternate=null,HE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[va],delete e[Oh],delete e[UP],delete e[BP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qE(t){return t.tag===5||t.tag===3||t.tag===4}function Ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var Ke=null,Yt=!1;function tr(t,e,n){for(n=n.child;n!==null;)GE(t,e,n),n=n.sibling}function GE(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:lt||as(n,e);case 6:var r=Ke,i=Yt;Ke=null,tr(t,e,n),Ke=r,Yt=i,Ke!==null&&(Yt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Yt?(t=Ke,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),fa(t)):yf(Ke,n.stateNode));break;case 4:r=Ke,i=Yt,Ke=n.stateNode.containerInfo,Yt=!0,tr(t,e,n),Ke=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!lt&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,tr(t,e,n),lt=r):tr(t,e,n);break;default:tr(t,e,n)}}function Qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ix),e.forEach(function(r){var i=px.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Yt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Yt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Ke===null)throw Error(k(160));GE(s,o,i),Ke=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)KE(e,t),e=e.sibling}function KE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),an(t),r&4){try{Qo(3,t,t.return),ed(3,t)}catch(w){Ce(t,t.return,w)}try{Qo(5,t,t.return)}catch(w){Ce(t,t.return,w)}}break;case 1:Kt(e,t),an(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(Kt(e,t),an(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{la(i,"")}catch(w){Ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mw(i,s),_h(a,o);var u=_h(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ww(i,d):c==="dangerouslySetInnerHTML"?yw(i,d):c==="children"?la(i,d):pm(i,c,d,u)}switch(a){case"input":ph(i,s);break;case"textarea":gw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ps(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[va]=s}catch(w){Ce(t,t.return,w)}}break;case 6:if(Kt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ce(t,t.return,w)}}break;case 3:if(Kt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(w){Ce(t,t.return,w)}break;case 4:Kt(e,t),an(t);break;case 13:Kt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gm=Re())),r&4&&Qy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,Kt(e,t),lt=u):Kt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(d=V=c;V!==null;){switch(f=V,h=f.child,f.tag){case 0:case 11:case 14:case 15:Qo(4,f,f.return);break;case 1:as(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Ce(r,n,w)}}break;case 5:as(f,f.return);break;case 22:if(f.memoizedState!==null){Xy(d);continue}}h!==null?(h.return=f,V=h):Xy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_w("display",o))}catch(w){Ce(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ce(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(e,t),an(t),r&4&&Qy(t);break;case 21:break;default:Kt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(la(i,""),r.flags&=-33);var s=Ky(t);Qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ky(t);Kh(t,a,o);break;default:throw Error(k(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ox(t,e,n){V=t,QE(t)}function QE(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Gl;var u=lt;if(Gl=o,(lt=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Jy(i):l!==null?(l.return=o,V=l):Jy(i);for(;s!==null;)V=s,QE(s),s=s.sibling;V=i,Gl=a,lt=u}Yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):Yy(t)}}function Yy(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}lt||e.flags&512&&Gh(e)}catch(f){Ce(e,e.return,f)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function Xy(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Jy(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{Gh(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{Gh(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var ax=Math.ceil,oc=Qn.ReactCurrentDispatcher,Hm=Qn.ReactCurrentOwner,zt=Qn.ReactCurrentBatchConfig,ee=0,Be=null,be=null,Je=0,kt=0,ls=Ur(0),Ve=0,Ia=null,Ei=0,td=0,qm=0,Yo=null,Et=null,Gm=0,Ns=1/0,kn=null,ac=!1,Yh=null,Ir=null,Kl=!1,pr=null,lc=0,Xo=0,Xh=null,Ru=-1,Pu=0;function vt(){return ee&6?Re():Ru!==-1?Ru:Ru=Re()}function Sr(t){return t.mode&1?ee&2&&Je!==0?Je&-Je:WP.transition!==null?(Pu===0&&(Pu=Nw()),Pu):(t=se,t!==0||(t=window.event,t=t===void 0?16:jw(t.type)),t):1}function tn(t,e,n,r){if(50<Xo)throw Xo=0,Xh=null,Error(k(185));Za(t,n,r),(!(ee&2)||t!==Be)&&(t===Be&&(!(ee&2)&&(td|=n),Ve===4&&ur(t,Je)),At(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ns=Re()+500,Xc&&Br()))}function At(t,e){var n=t.callbackNode;WR(t,e);var r=Hu(t,t===Be?Je:0);if(r===0)n!==null&&ay(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ay(n),e===1)t.tag===0?zP(Zy.bind(null,t)):iE(Zy.bind(null,t)),jP(function(){!(ee&6)&&Br()}),n=null;else{switch(Ow(r)){case 1:n=_m;break;case 4:n=xw;break;case 16:n=Wu;break;case 536870912:n=bw;break;default:n=Wu}n=rT(n,YE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YE(t,e){if(Ru=-1,Pu=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Hu(t,t===Be?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=ee;ee|=2;var s=JE();(Be!==t||Je!==e)&&(kn=null,Ns=Re()+500,hi(t,e));do try{cx();break}catch(a){XE(t,a)}while(!0);Nm(),oc.current=s,ee=i,be!==null?e=0:(Be=null,Je=0,e=Ve)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Jh(t,i))),e===1)throw n=Ia,hi(t,0),ur(t,r),At(t,Re()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!lx(i)&&(e=uc(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Jh(t,s))),e===1))throw n=Ia,hi(t,0),ur(t,r),At(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Yr(t,Et,kn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Gm+500-Re(),10<e)){if(Hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nh(Yr.bind(null,t,Et,kn),e);break}Yr(t,Et,kn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ax(r/1960))-r,10<r){t.timeoutHandle=Nh(Yr.bind(null,t,Et,kn),r);break}Yr(t,Et,kn);break;case 5:Yr(t,Et,kn);break;default:throw Error(k(329))}}}return At(t,Re()),t.callbackNode===n?YE.bind(null,t):null}function Jh(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=uc(t,e),t!==2&&(e=Et,Et=n,e!==null&&Zh(e)),t}function Zh(t){Et===null?Et=t:Et.push.apply(Et,t)}function lx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~qm,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Zy(t){if(ee&6)throw Error(k(327));_s();var e=Hu(t,0);if(!(e&1))return At(t,Re()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=Ia,hi(t,0),ur(t,e),At(t,Re()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,Et,kn),At(t,Re()),null}function Km(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ns=Re()+500,Xc&&Br())}}function Ti(t){pr!==null&&pr.tag===0&&!(ee&6)&&_s();var e=ee;ee|=1;var n=zt.transition,r=se;try{if(zt.transition=null,se=1,t)return t()}finally{se=r,zt.transition=n,ee=e,!(ee&6)&&Br()}}function Qm(){kt=ls.current,ve(ls)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$P(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Pm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:xs(),ve(St),ve(ft),$m();break;case 5:Vm(r);break;case 4:xs();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:Om(r.type._context);break;case 22:case 23:Qm()}n=n.return}if(Be=t,be=t=Cr(t.current,null),Je=kt=e,Ve=0,Ia=null,qm=td=Ei=0,Et=Yo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function XE(t,e){do{var n=be;try{if(Nm(),Cu.current=sc,ic){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ic=!1}if(wi=0,Ue=Le=Te=null,Ko=!1,wa=0,Hm.current=null,n===null||n.return===null){Ve=1,Ia=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Fy(o);if(h!==null){h.flags&=-257,Uy(h,o,a,s,e),h.mode&1&&jy(s,u,e),e=h,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){jy(s,u,e),Ym();break e}l=Error(k(426))}}else if(we&&a.mode&1){var E=Fy(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Uy(E,o,a,s,e),xm(bs(l,a));break e}}s=l=bs(l,a),Ve!==4&&(Ve=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=DE(s,l,e);Ny(s,v);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ir===null||!Ir.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=LE(s,a,e);Ny(s,T);break e}}s=s.return}while(s!==null)}eT(n)}catch(I){e=I,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function JE(){var t=oc.current;return oc.current=sc,t===null?sc:t}function Ym(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Be===null||!(Ei&268435455)&&!(td&268435455)||ur(Be,Je)}function uc(t,e){var n=ee;ee|=2;var r=JE();(Be!==t||Je!==e)&&(kn=null,hi(t,e));do try{ux();break}catch(i){XE(t,i)}while(!0);if(Nm(),ee=n,oc.current=r,be!==null)throw Error(k(261));return Be=null,Je=0,Ve}function ux(){for(;be!==null;)ZE(be)}function cx(){for(;be!==null&&!LR();)ZE(be)}function ZE(t){var e=nT(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?eT(t):be=e,Hm.current=null}function eT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rx(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,be=null;return}}else if(n=nx(n,e,kt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Ve===0&&(Ve=5)}function Yr(t,e,n){var r=se,i=zt.transition;try{zt.transition=null,se=1,dx(t,e,n,r)}finally{zt.transition=i,se=r}return null}function dx(t,e,n,r){do _s();while(pr!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HR(t,s),t===Be&&(be=Be=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,rT(Wu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=se;se=1;var a=ee;ee|=4,Hm.current=null,sx(t,n),KE(n,t),bP(xh),qu=!!Ph,xh=Ph=null,t.current=n,ox(n),MR(),ee=a,se=o,zt.transition=s}else t.current=n;if(Kl&&(Kl=!1,pr=t,lc=i),s=t.pendingLanes,s===0&&(Ir=null),jR(n.stateNode),At(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ac)throw ac=!1,t=Yh,Yh=null,t;return lc&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Xh?Xo++:(Xo=0,Xh=t):Xo=0,Br(),null}function _s(){if(pr!==null){var t=Ow(lc),e=zt.transition,n=se;try{if(zt.transition=null,se=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,lc=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Qo(8,c,s)}var d=c.child;if(d!==null)d.return=c,V=d;else for(;V!==null;){c=V;var f=c.sibling,h=c.return;if(HE(c),c===u){V=null;break}if(f!==null){f.return=h,V=f;break}V=h}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,V=v;break e}V=s.return}}var m=t.current;for(V=m;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=m;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ed(9,a)}}catch(I){Ce(a,a.return,I)}if(a===o){V=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,V=T;break e}V=a.return}}if(ee=i,Br(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(qc,t)}catch{}r=!0}return r}finally{se=n,zt.transition=e}}return!1}function e_(t,e,n){e=bs(n,e),e=DE(t,e,1),t=Tr(t,e,1),e=vt(),t!==null&&(Za(t,1,e),At(t,e))}function Ce(t,e,n){if(t.tag===3)e_(t,t,n);else for(;e!==null;){if(e.tag===3){e_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=bs(n,t),t=LE(e,t,1),e=Tr(e,t,1),t=vt(),e!==null&&(Za(e,1,t),At(e,t));break}}e=e.return}}function fx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Je&n)===n&&(Ve===4||Ve===3&&(Je&130023424)===Je&&500>Re()-Gm?hi(t,0):qm|=n),At(t,e)}function tT(t,e){e===0&&(t.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var n=vt();t=Fn(t,e),t!==null&&(Za(t,e,n),At(t,n))}function hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tT(t,n)}function px(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),tT(t,n)}var nT;nT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,tx(t,e,n);It=!!(t.flags&131072)}else It=!1,we&&e.flags&1048576&&sE(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ku(t,e),t=e.pendingProps;var i=ks(e,ft.current);ys(e,n),i=Fm(null,e,r,t,i,n);var s=Um();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lm(e),i.updater=Jc,e.stateNode=i,i._reactInternals=e,jh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Rm(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gx(r),t=Qt(r,t),i){case 0:e=Uh(null,e,r,t,n);break e;case 1:e=Wy(null,e,r,t,n);break e;case 11:e=By(null,e,r,t,n);break e;case 14:e=zy(null,e,r,Qt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Wy(t,e,r,i,n);case 3:e:{if(jE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,uE(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bs(Error(k(423)),e),e=Hy(t,e,r,n,i);break e}else if(r!==i){i=bs(Error(k(424)),e),e=Hy(t,e,r,n,i);break e}else for(Rt=Er(e.stateNode.containerInfo.firstChild),Pt=e,we=!0,Xt=null,n=hE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=Un(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return pE(e),t===null&&Mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bh(r,i)?o=null:s!==null&&bh(r,s)&&(e.flags|=32),$E(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Mh(e),null;case 13:return FE(t,e,n);case 4:return Mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ps(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),By(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(ec,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!St.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=Wt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),zy(t,e,r,i,n);case 15:return ME(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ku(t,e),e.tag=1,Ct(r)?(t=!0,Xu(e)):t=!1,ys(e,n),dE(e,r,i),jh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return UE(t,e,n);case 22:return VE(t,e,n)}throw Error(k(156,e.tag))};function rT(t,e){return Pw(t,e)}function mx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new mx(t,e,n,r)}function Xm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gx(t){if(typeof t=="function")return Xm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gm)return 11;if(t===vm)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ji:return pi(n.children,i,s,e);case mm:o=8,i|=8;break;case uh:return t=Bt(12,n,e,i|2),t.elementType=uh,t.lanes=s,t;case ch:return t=Bt(13,n,e,i),t.elementType=ch,t.lanes=s,t;case dh:return t=Bt(19,n,e,i),t.elementType=dh,t.lanes=s,t;case fw:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cw:o=10;break e;case dw:o=9;break e;case gm:o=11;break e;case vm:o=14;break e;case sr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pi(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=fw,t.lanes=n,t.stateNode={isHidden:!1},t}function Af(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function kf(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jm(t,e,n,r,i,s,o,a,l){return t=new vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lm(s),t}function yx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iT(t){if(!t)return Or;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ct(n))return rE(t,n,e)}return e}function sT(t,e,n,r,i,s,o,a,l){return t=Jm(n,r,!0,t,i,s,o,a,l),t.context=iT(null),n=t.current,r=vt(),i=Sr(n),s=Ln(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Za(t,i,r),At(t,r),t}function rd(t,e,n,r){var i=e.current,s=vt(),o=Sr(i);return n=iT(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(tn(t,i,o,s),Su(t,i,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zm(t,e){t_(t,e),(t=t.alternate)&&t_(t,e)}function _x(){return null}var oT=typeof reportError=="function"?reportError:function(t){console.error(t)};function eg(t){this._internalRoot=t}id.prototype.render=eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));rd(t,e,null,null)};id.prototype.unmount=eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){rd(null,t,null,null)}),e[jn]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&$w(t)}};function tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n_(){}function wx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cc(o);s.call(u)}}var o=sT(e,r,t,0,null,!1,!1,"",n_);return t._reactRootContainer=o,t[jn]=o.current,ma(t.nodeType===8?t.parentNode:t),Ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cc(l);a.call(u)}}var l=Jm(t,0,!1,null,null,!1,!1,"",n_);return t._reactRootContainer=l,t[jn]=l.current,ma(t.nodeType===8?t.parentNode:t),Ti(function(){rd(e,l,n,r)}),l}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cc(o);a.call(l)}}rd(e,o,t,i)}else o=wx(n,e,t,i,r);return cc(o)}Dw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(wm(e,n|1),At(e,Re()),!(ee&6)&&(Ns=Re()+500,Br()))}break;case 13:Ti(function(){var r=Fn(t,1);if(r!==null){var i=vt();tn(r,t,1,i)}}),Zm(t,1)}};Em=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=vt();tn(e,t,134217728,n)}Zm(t,134217728)}};Lw=function(t){if(t.tag===13){var e=Sr(t),n=Fn(t,e);if(n!==null){var r=vt();tn(n,t,e,r)}Zm(t,e)}};Mw=function(){return se};Vw=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Eh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yc(r);if(!i)throw Error(k(90));pw(r),ph(r,i)}}}break;case"textarea":gw(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Iw=Km;Sw=Ti;var Ex={usingClientEntryPoint:!1,Events:[tl,ns,Yc,Ew,Tw,Km]},Co={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tx={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kw(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{qc=Ql.inject(Tx),gn=Ql}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(k(200));return yx(t,e,null,n)};Ot.createRoot=function(t,e){if(!tg(t))throw Error(k(299));var n=!1,r="",i=oT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jm(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,ma(t.nodeType===8?t.parentNode:t),new eg(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=kw(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return Ti(t)};Ot.hydrate=function(t,e,n){if(!sd(e))throw Error(k(200));return od(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!tg(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sT(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,ma(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};Ot.render=function(t,e,n){if(!sd(e))throw Error(k(200));return od(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!sd(t))throw Error(k(40));return t._reactRootContainer?(Ti(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Km;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return od(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function aT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aT)}catch(t){console.error(t)}}aT(),sw.exports=Ot;var lT=sw.exports;const us=Xa(lT);var r_=lT;ah.createRoot=r_.createRoot,ah.hydrateRoot=r_.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sa.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const i_="popstate";function Ix(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ep("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dc(i)}return Cx(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ng(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sx(){return Math.random().toString(36).substr(2,8)}function s_(t,e){return{usr:t.state,key:t.key,idx:e}}function ep(t,e,n,r){return n===void 0&&(n=null),Sa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||r||Sx()})}function dc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Cx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Sa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=mr.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:v})}function f(E,v){a=mr.Push;let m=ep(w.location,E,v);n&&n(m,E),u=c()+1;let g=s_(m,u),T=w.createHref(m);try{o.pushState(g,"",T)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(T)}s&&l&&l({action:a,location:w.location,delta:1})}function h(E,v){a=mr.Replace;let m=ep(w.location,E,v);n&&n(m,E),u=c();let g=s_(m,u),T=w.createHref(m);o.replaceState(g,"",T),s&&l&&l({action:a,location:w.location,delta:0})}function _(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof E=="string"?E:dc(E);return Oe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(i_,d),l=E,()=>{i.removeEventListener(i_,d),l=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let v=_(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:h,go(E){return o.go(E)}};return w}var o_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(o_||(o_={}));function Ax(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qs(e):e,i=rg(r.pathname||"/",n);if(i==null)return null;let s=uT(t);kx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Mx(s[a],jx(i));return o}function uT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Dx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of cT(s.path))i(s,o,l)}),e}function cT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function kx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Lx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rx=/^:[\w-]+$/,Px=3,xx=2,bx=1,Nx=10,Ox=-2,a_=t=>t==="*";function Dx(t,e){let n=t.split("/"),r=n.length;return n.some(a_)&&(r+=Ox),e&&(r+=xx),n.filter(i=>!a_(i)).reduce((i,s)=>i+(Rx.test(s)?Px:s===""?bx:Nx),r)}function Lx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Mx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Vx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ar([i,c.pathname]),pathnameBase:Wx(Ar([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ar([i,c.pathnameBase]))}return s}function Vx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$x(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:h}=c;if(f==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const _=a[d];return h&&!_?u[f]=void 0:u[f]=Fx(_||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $x(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ng(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jx(t){try{return decodeURI(t)}catch(e){return ng(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fx(t,e){try{return decodeURIComponent(t)}catch(n){return ng(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function rg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ux(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qs(t):t;return{pathname:n?n.startsWith("/")?n:Bx(n,e):e,search:Hx(r),hash:qx(i)}}function Bx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dT(t,e){let n=zx(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qs(t):(i=Sa({},t),Oe(!i.pathname||!i.pathname.includes("?"),Rf("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Rf("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Ux(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),Wx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hT=["post","put","patch","delete"];new Set(hT);const Kx=["get",...hT];new Set(Kx);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ca.apply(this,arguments)}const ig=y.createContext(null),Qx=y.createContext(null),Di=y.createContext(null),ad=y.createContext(null),Li=y.createContext({outlet:null,matches:[],isDataRoute:!1}),pT=y.createContext(null);function Yx(t,e){let{relative:n}=e===void 0?{}:e;rl()||Oe(!1);let{basename:r,navigator:i}=y.useContext(Di),{hash:s,pathname:o,search:a}=gT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function rl(){return y.useContext(ad)!=null}function il(){return rl()||Oe(!1),y.useContext(ad).location}function mT(t){y.useContext(Di).static||y.useLayoutEffect(t)}function sl(){let{isDataRoute:t}=y.useContext(Li);return t?ub():Xx()}function Xx(){rl()||Oe(!1);let t=y.useContext(ig),{basename:e,future:n,navigator:r}=y.useContext(Di),{matches:i}=y.useContext(Li),{pathname:s}=il(),o=JSON.stringify(dT(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return mT(()=>{a.current=!0}),y.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=fT(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ar([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function gT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=y.useContext(Di),{matches:i}=y.useContext(Li),{pathname:s}=il(),o=JSON.stringify(dT(i,r.v7_relativeSplatPath));return y.useMemo(()=>fT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Jx(t,e){return Zx(t,e)}function Zx(t,e,n,r){rl()||Oe(!1);let{navigator:i}=y.useContext(Di),{matches:s}=y.useContext(Li),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=il(),c;if(e){var d;let E=typeof e=="string"?Qs(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||Oe(!1),c=E}else c=u;let f=c.pathname||"/",h=l==="/"?f:f.slice(l.length)||"/",_=Ax(t,{pathname:h}),w=ib(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Ar([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Ar([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&w?y.createElement(ad.Provider,{value:{location:Ca({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:mr.Pop}},w):w}function eb(){let t=lb(),e=Gx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,null)}const tb=y.createElement(eb,null);class nb extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?y.createElement(Li.Provider,{value:this.props.routeContext},y.createElement(pT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rb(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(ig);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Li.Provider,{value:e},r)}function ib(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||Oe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:h}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let h,_=!1,w=null,E=null;n&&(h=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||tb,l&&(u<0&&f===0?(cb("route-fallback",!1),_=!0,E=null):u===f&&(_=!0,E=d.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),m=()=>{let g;return h?g=w:_?g=E:d.route.Component?g=y.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,y.createElement(rb,{match:d,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?y.createElement(nb,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var vT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(vT||{}),fc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fc||{});function sb(t){let e=y.useContext(ig);return e||Oe(!1),e}function ob(t){let e=y.useContext(Qx);return e||Oe(!1),e}function ab(t){let e=y.useContext(Li);return e||Oe(!1),e}function yT(t){let e=ab(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function lb(){var t;let e=y.useContext(pT),n=ob(fc.UseRouteError),r=yT(fc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ub(){let{router:t}=sb(vT.UseNavigateStable),e=yT(fc.UseNavigateStable),n=y.useRef(!1);return mT(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ca({fromRouteId:e},s)))},[t,e])}const l_={};function cb(t,e,n){!e&&!l_[t]&&(l_[t]=!0)}function ir(t){Oe(!1)}function db(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:a}=t;rl()&&Oe(!1);let l=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:l,navigator:s,static:o,future:Ca({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Qs(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:_="default"}=r,w=y.useMemo(()=>{let E=rg(c,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:h,key:_},navigationType:i}},[l,c,d,f,h,_,i]);return w==null?null:y.createElement(Di.Provider,{value:u},y.createElement(ad.Provider,{children:n,value:w}))}function fb(t){let{children:e,location:n}=t;return Jx(tp(e),n)}new Promise(()=>{});function tp(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let s=[...e,i];if(r.type===y.Fragment){n.push.apply(n,tp(r.props.children,s));return}r.type!==ir&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function np(){return np=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},np.apply(this,arguments)}function hb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mb(t,e){return t.button===0&&(!e||e==="_self")&&!pb(t)}const gb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vb="startTransition",u_=hR[vb];function yb(t){let{basename:e,children:n,future:r,window:i}=t,s=y.useRef();s.current==null&&(s.current=Ix({window:i,v5Compat:!0}));let o=s.current,[a,l]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=y.useCallback(d=>{u&&u_?u_(()=>l(d)):l(d)},[l,u]);return y.useLayoutEffect(()=>o.listen(c),[o,c]),y.createElement(db,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const _b=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Aa=y.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=hb(e,gb),{basename:h}=y.useContext(Di),_,w=!1;if(typeof u=="string"&&wb.test(u)&&(_=u,_b))try{let g=new URL(window.location.href),T=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=rg(T.pathname,h);T.origin===g.origin&&I!=null?u=I+T.search+T.hash:w=!0}catch{}let E=Yx(u,{relative:i}),v=Eb(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(g){r&&r(g),g.defaultPrevented||v(g)}return y.createElement("a",np({},f,{href:_||E,onClick:w||s?r:m,ref:n,target:l}))});var c_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(c_||(c_={}));var d_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(d_||(d_={}));function Eb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=sl(),u=il(),c=gT(t,{relative:o});return y.useCallback(d=>{if(mb(d,n)){d.preventDefault();let f=r!==void 0?r:dc(u)===dc(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var f_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_T(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Ib;const f=s<<2|a>>4;if(r.push(f),u!==64){const h=a<<4&240|u>>2;if(r.push(h),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sb=function(t){const e=_T(t);return wT.encodeByteArray(e,!0)},hc=function(t){return Sb(t).replace(/\./g,"")},ET=function(t){try{return wT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=()=>Cb().__FIREBASE_DEFAULTS__,kb=()=>{if(typeof process>"u"||typeof f_>"u")return;const t=f_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ET(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return Ab()||kb()||Rb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TT=t=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pb=t=>{const e=TT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IT=()=>{var t;return(t=ld())===null||t===void 0?void 0:t.config},ST=t=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hc(JSON.stringify(n)),hc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Ob(){var t;const e=(t=ld())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Db(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mb(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vb(){return!Ob()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CT(){try{return typeof indexedDB=="object"}catch{return!1}}function $b(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jb,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ol.prototype.create)}}class ol{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,a,r)}}function Fb(t,e){return t.replace(Ub,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ub=/\{\$([^}]+)}/g;function Bb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(h_(s)&&h_(o)){if(!pc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function h_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Do(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zb(t,e){const n=new Wb(t,e);return n.subscribe.bind(n)}class Wb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pf),i.error===void 0&&(i.error=Pf),i.complete===void 0&&(i.complete=Pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kb(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(t){return t===Xr?void 0:t}function Kb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Yb={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Xb=J.INFO,Jb={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Zb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sg{constructor(e){this.name=e,this._logLevel=Xb,this._logHandler=Zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const e2=(t,e)=>e.some(n=>t instanceof n);let p_,m_;function t2(){return p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n2(){return m_||(m_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AT=new WeakMap,rp=new WeakMap,kT=new WeakMap,xf=new WeakMap,og=new WeakMap;function r2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AT.set(n,t)}).catch(()=>{}),og.set(e,t),e}function i2(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function s2(t){ip=t(ip)}function o2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bf(this),e,...n);return kT.set(r,e.sort?e.sort():[e]),kr(r)}:n2().includes(t)?function(...e){return t.apply(bf(this),e),kr(AT.get(this))}:function(...e){return kr(t.apply(bf(this),e))}}function a2(t){return typeof t=="function"?o2(t):(t instanceof IDBTransaction&&i2(t),e2(t,t2())?new Proxy(t,ip):t)}function kr(t){if(t instanceof IDBRequest)return r2(t);if(xf.has(t))return xf.get(t);const e=a2(t);return e!==t&&(xf.set(t,e),og.set(e,t)),e}const bf=t=>og.get(t);function l2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const u2=["get","getKey","getAll","getAllKeys","count"],c2=["put","add","delete","clear"],Nf=new Map;function g_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nf.get(e))return Nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=c2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||u2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nf.set(e,s),s}s2(t=>({...t,get:(e,n,r)=>g_(e,n)||t.get(e,n,r),has:(e,n)=>!!g_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(f2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function f2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",v_="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new sg("@firebase/app"),h2="@firebase/app-compat",p2="@firebase/analytics-compat",m2="@firebase/analytics",g2="@firebase/app-check-compat",v2="@firebase/app-check",y2="@firebase/auth",_2="@firebase/auth-compat",w2="@firebase/database",E2="@firebase/database-compat",T2="@firebase/functions",I2="@firebase/functions-compat",S2="@firebase/installations",C2="@firebase/installations-compat",A2="@firebase/messaging",k2="@firebase/messaging-compat",R2="@firebase/performance",P2="@firebase/performance-compat",x2="@firebase/remote-config",b2="@firebase/remote-config-compat",N2="@firebase/storage",O2="@firebase/storage-compat",D2="@firebase/firestore",L2="@firebase/firestore-compat",M2="firebase",V2="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="[DEFAULT]",$2={[sp]:"fire-core",[h2]:"fire-core-compat",[m2]:"fire-analytics",[p2]:"fire-analytics-compat",[v2]:"fire-app-check",[g2]:"fire-app-check-compat",[y2]:"fire-auth",[_2]:"fire-auth-compat",[w2]:"fire-rtdb",[E2]:"fire-rtdb-compat",[T2]:"fire-fn",[I2]:"fire-fn-compat",[S2]:"fire-iid",[C2]:"fire-iid-compat",[A2]:"fire-fcm",[k2]:"fire-fcm-compat",[R2]:"fire-perf",[P2]:"fire-perf-compat",[x2]:"fire-rc",[b2]:"fire-rc-compat",[N2]:"fire-gcs",[O2]:"fire-gcs-compat",[D2]:"fire-fst",[L2]:"fire-fst-compat","fire-js":"fire-js",[M2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map,ap=new Map;function j2(t,e){try{t.container.addComponent(e)}catch(n){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(ap.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of mc.values())j2(n,t);return!0}function ag(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new ol("app","Firebase",F2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=V2;function RT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:op,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=IT()),!n)throw Rr.create("no-options");const s=mc.get(i);if(s){if(pc(n,s.options)&&pc(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new Qb(i);for(const l of ap.values())o.addComponent(l);const a=new U2(n,r,o);return mc.set(i,a),a}function PT(t=op){const e=mc.get(t);if(!e&&t===op&&IT())return RT();if(!e)throw Rr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let i=(r=$2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Os(new Ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2="firebase-heartbeat-database",z2=1,ka="firebase-heartbeat-store";let Of=null;function xT(){return Of||(Of=l2(B2,z2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Of}async function W2(t){try{return await(await xT()).transaction(ka).objectStore(ka).get(bT(t))}catch(e){if(e instanceof Yn)Si.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(n.message)}}}async function y_(t,e){try{const r=(await xT()).transaction(ka,"readwrite");await r.objectStore(ka).put(e,bT(t)),await r.done}catch(n){if(n instanceof Yn)Si.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function bT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=1024,q2=30*24*60*60*1e3;class G2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=__();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=q2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=__(),{heartbeatsToSend:r,unsentEntries:i}=K2(this._heartbeatsCache.heartbeats),s=hc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function __(){return new Date().toISOString().substring(0,10)}function K2(t,e=H2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),w_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),w_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CT()?$b().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return y_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return y_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function w_(t){return hc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){Os(new Ii("platform-logger",e=>new d2(e),"PRIVATE")),Os(new Ii("heartbeat",e=>new G2(e),"PRIVATE")),Pr(sp,v_,t),Pr(sp,v_,"esm2017"),Pr("fire-js","")}Y2("");var X2="firebase",J2="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(X2,J2,"app");function lg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z2=NT,OT=new ol("auth","Firebase",NT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new sg("@firebase/auth");function eN(t,...e){gc.logLevel<=J.WARN&&gc.warn(`Auth (${Ys}): ${t}`,...e)}function bu(t,...e){gc.logLevel<=J.ERROR&&gc.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw ug(t,...e)}function yn(t,...e){return ug(t,...e)}function DT(t,e,n){const r=Object.assign(Object.assign({},Z2()),{[e]:n});return new ol("auth","Firebase",r).create(e,{appName:t.name})}function tN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),DT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ug(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OT.create(t,...e)}function B(t,e,...n){if(!t)throw ug(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bu(e),new Error(e)}function Bn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nN(){return E_()==="http:"||E_()==="https:"}function E_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nN()||Db()||"connection"in navigator)?navigator.onLine:!0}function iN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Nb()||Lb()}get(){return rN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new ll(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return MT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=al(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LT.fetch()(VT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function MT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sN),e);try{const i=new lN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw DT(t,c,u);qt(t,c)}}catch(i){if(i instanceof Yn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function ul(t,e,n,r,i={}){const s=await Xn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cg(t.config,i):`${t.config.apiScheme}://${i}`}function aN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),oN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function T_(t){return t!==void 0&&t.enterprise!==void 0}class uN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cN(t,e){return Xn(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function fN(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hN(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=dg(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(Df(i.auth_time)),issuedAtTime:Jo(Df(i.iat)),expirationTime:Jo(Df(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Df(t){return Number(t)*1e3}function dg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bu("JWT malformed, contained fewer than 3 sections"),null;try{const i=ET(n);return i?JSON.parse(i):(bu("Failed to decode base64 JWT payload"),null)}catch(i){return bu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pN(t){const e=dg(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ds(t,fN(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_N(s.providerUserInfo):[],a=yN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $T(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function vN(t){const e=nt(t);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _N(t){return t.map(e=>{var{providerId:n}=e,r=lg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){const n=await MT(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function EN(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ra;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ra,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=lg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $T(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hN(this,e)}reload(){return vN(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ds(this,dN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:I,providerData:A,stsTokenManager:P}=n;B(g&&P,e,"internal-error");const O=Ra.fromJSON(this.name,P);B(typeof g=="string",e,"internal-error"),nr(d,e.name),nr(f,e.name),B(typeof T=="boolean",e,"internal-error"),B(typeof I=="boolean",e,"internal-error"),nr(h,e.name),nr(_,e.name),nr(w,e.name),nr(E,e.name),nr(v,e.name),nr(m,e.name);const D=new mi({uid:g,auth:e,email:f,emailVerified:T,displayName:d,isAnonymous:I,photoURL:_,phoneNumber:h,tenantId:w,stsTokenManager:O,createdAt:v,lastLoginAt:m});return A&&Array.isArray(A)&&(D.providerData=A.map(R=>Object.assign({},R))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ra;i.updateFromServerResponse(n);const s=new mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Map;function On(t){Bn(t instanceof Function,"Expected a class definition");let e=I_.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jT.type="NONE";const S_=jT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(On(S_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(S_);const o=Nu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=mi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ws(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WT(e))return"Blackberry";if(HT(e))return"Webos";if(fg(e))return"Safari";if((e.includes("chrome/")||UT(e))&&!e.includes("edge/"))return"Chrome";if(zT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FT(t=De()){return/firefox\//i.test(t)}function fg(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UT(t=De()){return/crios\//i.test(t)}function BT(t=De()){return/iemobile/i.test(t)}function zT(t=De()){return/android/i.test(t)}function WT(t=De()){return/blackberry/i.test(t)}function HT(t=De()){return/webos/i.test(t)}function ud(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TN(t=De()){var e;return ud(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IN(){return Mb()&&document.documentMode===10}function qT(t=De()){return ud(t)||zT(t)||HT(t)||WT(t)||/windows phone/i.test(t)||BT(t)}function SN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e=[]){let n;switch(t){case"Browser":n=C_(De());break;case"Worker":n=`${C_(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=6;class RN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A_(this),this.idTokenSubscription=new A_(this),this.beforeStateQueue=new CN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AN(this),n=new RN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ol("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await EN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wr(t){return nt(t)}class A_{constructor(e){this.auth=e,this.observer=null,this.addObserver=zb(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xN().appendChild(r)})}function bN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NN="https://www.google.com/recaptcha/enterprise.js?render=",ON="recaptcha-enterprise",DN="NO_RECAPTCHA";class LN{constructor(e){this.type=ON,this.auth=Wr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new uN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;T_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(DN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&T_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}KT(NN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function k_(t,e,n,r=!1){const i=new LN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function up(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await k_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await k_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e){const n=ag(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pc(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function VN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $N(t,e,n){const r=Wr(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=QT(e),{host:o,port:a}=jN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FN()}function QT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jN(t){const e=QT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:R_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:R_(o)}}}function R_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function UN(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function WN(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends hg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return up(e,n,"signInWithPassword",BN);case"emailLink":return zN(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return up(e,r,"signUpPassword",UN);case"emailLink":return WN(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="http://localhost";class Ci extends hg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=lg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:HN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GN(t){const e=Do(Lo(t)).link,n=e?Do(Lo(e)).deep_link_id:null,r=Do(Lo(t)).deep_link_id;return(r?Do(Lo(r)).link:null)||r||n||e||t}class pg{constructor(e){var n,r,i,s,o,a;const l=Do(Lo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=qN((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GN(e);try{return new pg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return Pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pg.parseLink(n);return B(r,"argument-error"),Pa._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends cl{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends cl{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends cl{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e){return ul(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mi._fromIdTokenResponse(e,r,i),o=P_(r);return new Ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=P_(r);return new Ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function P_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends Yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yc(e,n,r,i)}}function YT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yc._fromErrorAndOperation(t,s,e,r):s})}async function QN(t,e,n=!1){const r=await Ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ds(t,YT(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=dg(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e,n=!1){const r="signIn",i=await YT(t,r,e),s=await Ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XN(t,e){return XT(Wr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t){const e=Wr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JN(t,e,n){const r=Wr(t),o=await up(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JT(t),l}),a=await Ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ZN(t,e,n){return XN(nt(t),Xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ds(r,eO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tO(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function nO(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function cp(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function rO(t){return nt(t).signOut()}const _c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(){const t=De();return fg(t)||ud(t)}const sO=1e3,oO=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iO()&&SN(),this.fallbackToPolling=qT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const aO=tI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nI.type="SESSION";const rI=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function cO(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hO(){return iI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="firebaseLocalStorageDb",pO=1,wc="firebaseLocalStorage",oI="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dd(t,e){return t.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function mO(){const t=indexedDB.deleteDatabase(sI);return new dl(t).toPromise()}function dp(){const t=indexedDB.open(sI,pO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wc,{keyPath:oI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wc)?e(r):(r.close(),await mO(),e(await dp()))})})}async function x_(t,e,n){const r=dd(t,!0).put({[oI]:e,value:n});return new dl(r).toPromise()}async function gO(t,e){const n=dd(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function b_(t,e){const n=dd(t,!0).delete(e);return new dl(n).toPromise()}const vO=800,yO=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cd._getInstance(hO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await x_(e,_c,"1"),await b_(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>b_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dd(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const _O=aI;new ll(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e){return e?On(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends hg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return XT(t.auth,new vg(t),t.bypassAuthState)}function EO(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),YN(n,new vg(t),t.bypassAuthState)}async function TO(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),QN(n,new vg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return TO;case"reauthViaPopup":case"reauthViaRedirect":return EO;default:qt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new ll(2e3,1e4);async function cI(t,e,n){const r=Wr(t);tN(t,e,mg);const i=lI(r,n);return new oi(r,"signInViaPopup",e,i).executeNotNull()}class oi extends uI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=gg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IO.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="pendingRedirect",Ou=new Map;class CO extends uI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ou.get(this.auth._key());if(!e){try{const r=await AO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ou.set(this.auth._key(),e)}return this.bypassAuthState||Ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AO(t,e){const n=PO(e),r=RO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kO(t,e){Ou.set(t._key(),e)}function RO(t){return On(t._redirectPersistence)}function PO(t){return Nu(SO,t.config.apiKey,t.name)}async function xO(t,e,n=!1){const r=Wr(t),i=lI(r,e),o=await new CO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=10*60*1e3;class NO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bO&&this.cachedEventUids.clear(),this.cachedEventUids.has(N_(e))}saveEventToCache(e){this.cachedEventUids.add(N_(e)),this.lastProcessedEventTime=Date.now()}}function N_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MO=/^https?/;async function VO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DO(t);for(const n of e)try{if($O(n))return}catch{}qt(t,"unauthorized-domain")}function $O(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MO.test(n))return!1;if(LO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=new ll(3e4,6e4);function O_(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FO(t){return new Promise((e,n)=>{var r,i,s;function o(){O_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O_(),n(yn(t,"network-request-failed"))},timeout:jO.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=bN("iframefcb");return _n()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},KT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Du=null,e})}let Du=null;function UO(t){return Du=Du||FO(t),Du}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new ll(5e3,15e3),zO="__/auth/iframe",WO="emulator/auth/iframe",HO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GO(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cg(e,WO):`https://${t.config.authDomain}/${zO}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},i=qO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function KO(t){const e=await UO(t),n=_n().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:GO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},BO.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YO=500,XO=600,JO="_blank",ZO="http://localhost";class D_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eD(t,e,n,r=YO,i=XO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(a=UT(u)?JO:n),FT(u)&&(e=e||ZO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,_])=>`${f}${h}=${_},`,"");if(TN(u)&&a!=="_self")return tD(e||"",a),new D_(null);const d=window.open(e||"",a,c);B(d,t,"popup-blocked");try{d.focus()}catch{}return new D_(d)}function tD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="__/auth/handler",rD="emulator/auth/handler",iD=encodeURIComponent("fac");async function L_(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:i};if(e instanceof mg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof cl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iD}=${encodeURIComponent(l)}`:"";return`${sD(t)}?${al(a).slice(1)}${u}`}function sD({config:t}){return t.emulator?cg(t,rD):`https://${t.authDomain}/${nD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="webStorageSupport";class oD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=xO,this._overrideRedirectResult=kO}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await L_(e,n,r,lp(),i);return eD(e,o,gg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await L_(e,n,r,lp(),i);return cO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KO(e),r=new NO(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lf,{type:Lf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lf];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qT()||fg()||ud()}}const aD=oD;var M_="@firebase/auth",V_="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cD(t){Os(new Ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GT(t)},u=new PN(r,i,s,l);return VN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new Ii("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(r=>new lD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(M_,V_,uD(t)),Pr(M_,V_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=5*60,fD=ST("authIdTokenMaxAge")||dD;let $_=null;const hD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fD)return;const i=n==null?void 0:n.token;$_!==i&&($_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pD(t=PT()){const e=ag(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MN(t,{popupRedirectResolver:aD,persistence:[_O,aO,rI]}),r=ST("authTokenSyncURL");if(r){const s=hD(r);nO(n,s,()=>s(n.currentUser)),tO(n,o=>s(o))}const i=TT("auth");return i&&$N(n,`http://${i}`),n}cD("Browser");var mD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,yg=yg||{},H=mD||self;function fd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gD(t){return Object.prototype.hasOwnProperty.call(t,Mf)&&t[Mf]||(t[Mf]=++vD)}var Mf="closure_uid_"+(1e9*Math.random()>>>0),vD=0;function yD(t,e,n){return t.call.apply(t.bind,arguments)}function _D(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=yD:ct=_D,ct.apply(null,arguments)}function Xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Hr(){this.s=this.s,this.o=this.o}var wD=0;Hr.prototype.s=!1;Hr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wD!=0)&&gD(this)};Hr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _g(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function j_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var ED=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};H.addEventListener("test",n,e),H.removeEventListener("test",n,e)}catch{}return t}();function xa(t){return/^[\s\xa0]*$/.test(t)}function hd(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function cn(t){return hd().indexOf(t)!=-1}function wg(t){return wg[" "](t),t}wg[" "]=function(){};function TD(t,e){var n=pL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ID=cn("Opera"),Ls=cn("Trident")||cn("MSIE"),hI=cn("Edge"),fp=hI||Ls,pI=cn("Gecko")&&!(hd().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge"))&&!(cn("Trident")||cn("MSIE"))&&!cn("Edge"),SD=hd().toLowerCase().indexOf("webkit")!=-1&&!cn("Edge");function mI(){var t=H.document;return t?t.documentMode:void 0}var hp;e:{var Vf="",$f=function(){var t=hd();if(pI)return/rv:([^\);]+)(\)|;)/.exec(t);if(hI)return/Edge\/([\d\.]+)/.exec(t);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SD)return/WebKit\/(\S+)/.exec(t);if(ID)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($f&&(Vf=$f?$f[1]:""),Ls){var jf=mI();if(jf!=null&&jf>parseFloat(Vf)){hp=String(jf);break e}}hp=Vf}var pp;if(H.document&&Ls){var F_=mI();pp=F_||parseInt(hp,10)||void 0}else pp=void 0;var CD=pp;function ba(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pI){e:{try{wg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ba.$.h.call(this)}}We(ba,dt);var AD={2:"touch",3:"pen",4:"mouse"};ba.prototype.h=function(){ba.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hl="closure_listenable_"+(1e6*Math.random()|0),kD=0;function RD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kD,this.fa=this.ia=!1}function pd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Eg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gI(t){const e={};for(const n in t)e[n]=t[n];return e}const U_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<U_.length;s++)n=U_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function md(t){this.src=t,this.g={},this.h=0}md.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function mp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Tg="closure_lm_"+(1e6*Math.random()|0),Ff={};function yI(t,e,n,r,i){if(r&&r.once)return wI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yI(t,e[s],n,r,i);return null}return n=Cg(n),t&&t[hl]?t.O(e,n,fl(r)?!!r.capture:!!r,i):_I(t,e,n,!1,r,i)}function _I(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fl(i)?!!i.capture:!!i,a=Sg(t);if(a||(t[Tg]=a=new md(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ED||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(TI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xD(){function t(n){return e.call(t.src,t.listener,n)}const e=bD;return t}function wI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wI(t,e[s],n,r,i);return null}return n=Cg(n),t&&t[hl]?t.P(e,n,fl(r)?!!r.capture:!!r,i):_I(t,e,n,!0,r,i)}function EI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)EI(t,e[s],n,r,i);else r=fl(r)?!!r.capture:!!r,n=Cg(n),t&&t[hl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gp(s,n,r,i),-1<n&&(pd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gp(e,n,r,i)),(n=-1<t?e[t]:null)&&Ig(n))}function Ig(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[hl])mp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(TI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sg(e))?(mp(n,t),n.h==0&&(n.src=null,e[Tg]=null)):pd(t)}}}function TI(t){return t in Ff?Ff[t]:Ff[t]="on"+t}function bD(t,e){if(t.fa)t=!0;else{e=new ba(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ig(t),t=n.call(r,e)}return t}function Sg(t){return t=t[Tg],t instanceof md?t:null}var Uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cg(t){return typeof t=="function"?t:(t[Uf]||(t[Uf]=function(e){return t.handleEvent(e)}),t[Uf])}function ze(){Hr.call(this),this.i=new md(this),this.S=this,this.J=null}We(ze,Hr);ze.prototype[hl]=!0;ze.prototype.removeEventListener=function(t,e,n,r){EI(this,t,e,n,r)};function Ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),vI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Jl(o,r,!0,e)&&i}if(o=e.g=t,i=Jl(o,r,!0,e)&&i,i=Jl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Jl(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pd(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Jl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&mp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ag=H.JSON.stringify;class ND{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OD(){var t=kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DD{constructor(){this.h=this.g=null}add(e,n){const r=II.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var II=new ND(()=>new LD,t=>t.reset());class LD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VD(t){H.setTimeout(()=>{throw t},0)}let Na,Oa=!1,kg=new DD,SI=()=>{const t=H.Promise.resolve(void 0);Na=()=>{t.then($D)}};var $D=()=>{for(var t;t=OD();){try{t.h.call(t.g)}catch(n){VD(n)}var e=II;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oa=!1};function gd(t,e){ze.call(this),this.h=t||1,this.g=e||H,this.j=ct(this.qb,this),this.l=Date.now()}We(gd,ze);N=gd.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(Rg(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){gd.$.N.call(this),Rg(this),delete this.g};function Pg(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function CI(t){t.g=Pg(()=>{t.g=null,t.i&&(t.i=!1,CI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jD extends Hr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:CI(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Da(t){Hr.call(this),this.h=t,this.g={}}We(Da,Hr);var B_=[];function AI(t,e,n,r){Array.isArray(n)||(n&&(B_[0]=n.toString()),n=B_);for(var i=0;i<n.length;i++){var s=yI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kI(t){Eg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ig(e)},t),t.g={}}Da.prototype.N=function(){Da.$.N.call(this),kI(this)};Da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vd(){this.g=!0}vd.prototype.Ea=function(){this.g=!1};function FD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function UD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zD(t,n)+(r?" "+r:"")})}function BD(t,e){t.info(function(){return"TIMEOUT: "+e})}vd.prototype.info=function(){};function zD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ag(n)}catch{return e}}var Mi={},z_=null;function yd(){return z_=z_||new ze}Mi.Ta="serverreachability";function RI(t){dt.call(this,Mi.Ta,t)}We(RI,dt);function La(t){const e=yd();Ze(e,new RI(e))}Mi.STAT_EVENT="statevent";function PI(t,e){dt.call(this,Mi.STAT_EVENT,t),this.stat=e}We(PI,dt);function gt(t){const e=yd();Ze(e,new PI(e,t))}Mi.Ua="timingevent";function xI(t,e){dt.call(this,Mi.Ua,t),this.size=e}We(xI,dt);function pl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var _d={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xg(){}xg.prototype.h=null;function W_(t){return t.h||(t.h=t.i())}function NI(){}var ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bg(){dt.call(this,"d")}We(bg,dt);function Ng(){dt.call(this,"c")}We(Ng,dt);var vp;function wd(){}We(wd,xg);wd.prototype.g=function(){return new XMLHttpRequest};wd.prototype.i=function(){return{}};vp=new wd;function gl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Da(this),this.P=WD,t=fp?125:void 0,this.V=new gd(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new OI}function OI(){this.i=null,this.g="",this.h=!1}var WD=45e3,DI={},yp={};N=gl.prototype;N.setTimeout=function(t){this.P=t};function _p(t,e,n){t.L=1,t.A=Td(zn(e)),t.u=n,t.S=!0,LI(t,null)}function LI(t,e){t.G=Date.now(),vl(t),t.B=zn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),zI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new OI,t.g=cS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new jD(ct(t.Pa,t,t.g),t.O)),AI(t.U,t.g,"readystatechange",t.nb),e=t.I?gI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),La(),FD(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=hn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||fp||this.g&&(this.h.h||this.g.ja()||K_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?La(3):La(2)),Ed(this);var n=this.g.da();this.ca=n;t:if(MI(this)){var r=K_(this.g);t="";var i=r.length,s=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),Zo(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,UD(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xa(a)){var u=a;break t}}u=null}if(n=u)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wp(this,n);else{this.i=!1,this.s=3,gt(12),ai(this),Zo(this);break e}}this.S?(VI(this,c,o),fp&&this.i&&c==3&&(AI(this.U,this.V,"tick",this.mb),this.V.start())):(cs(this.j,this.m,o,null),wp(this,o)),c==4&&ai(this),this.i&&!this.J&&(c==4?oS(this.l,this):(this.i=!1,vl(this)))}else dL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ai(this),Zo(this)}}}catch{}finally{}};function MI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function VI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=HD(t,n),i==yp){e==4&&(t.s=4,gt(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==DI){t.s=4,gt(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),wp(t,i);MI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$g(e),e.M=!0,gt(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),ai(t),Zo(t))}N.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.o<e.length&&(Ed(this),VI(this,t,e),this.i&&t!=4&&vl(this))}};function HD(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?yp:(n=Number(e.substring(n,r)),isNaN(n)?DI:(r+=1,r+n>e.length?yp:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,ai(this)};function vl(t){t.Y=Date.now()+t.P,$I(t,t.P)}function $I(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=pl(ct(t.lb,t),e)}function Ed(t){t.C&&(H.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(BD(this.j,this.B),this.L!=2&&(La(),gt(17)),ai(this),this.s=2,Zo(this)):$I(this,this.Y-t)};function Zo(t){t.l.H==0||t.J||oS(t.l,t)}function ai(t){Ed(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Rg(t.V),kI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function wp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ep(n.i,t))){if(!t.K&&Ep(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ic(n),Ad(n);else break e;Vg(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=pl(ct(n.ib,n),6e3));if(1>=qI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else li(n,11)}else if((t.K||n.g==t)&&Ic(n),!xa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const _=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Og(s,s.h),s.h=null))}if(r.F){const w=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,me(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=uS(r,r.J?r.pa:null,r.Y),o.K){GI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ed(a),vl(a)),r.g=o}else iS(r);0<n.j.length&&kd(n)}else u[0]!="stop"&&u[0]!="close"||li(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?li(n,7):Mg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}La(4)}catch{}}function qD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function jI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GD(t),r=qD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var FI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gi){this.h=t.h,Ec(this,t.j),this.s=t.s,this.g=t.g,Tc(this,t.m),this.l=t.l;var e=t.i,n=new Ma;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),H_(this,n),this.o=t.o}else t&&(e=String(t).match(FI))?(this.h=!1,Ec(this,e[1]||"",!0),this.s=Mo(e[2]||""),this.g=Mo(e[3]||"",!0),Tc(this,e[4]),this.l=Mo(e[5]||"",!0),H_(this,e[6]||"",!0),this.o=Mo(e[7]||"")):(this.h=!1,this.i=new Ma(null,this.h))}gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vo(e,q_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vo(e,q_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vo(n,n.charAt(0)=="/"?XD:YD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vo(n,ZD)),t.join("")};function zn(t){return new gi(t)}function Ec(t,e,n){t.j=n?Mo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function H_(t,e,n){e instanceof Ma?(t.i=e,eL(t.i,t.h)):(n||(e=Vo(e,JD)),t.i=new Ma(e,t.h))}function me(t,e,n){t.i.set(e,n)}function Td(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Mo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var q_=/[#\/\?@]/g,YD=/[#\?:]/g,XD=/[#\?]/g,JD=/[#\?@]/g,ZD=/#/g;function Ma(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qr(t){t.g||(t.g=new Map,t.h=0,t.i&&KD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ma.prototype;N.add=function(t,e){qr(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UI(t,e){qr(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BI(t,e){return qr(t),e=Js(t,e),t.g.has(e)}N.forEach=function(t,e){qr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){qr(this);let e=[];if(typeof t=="string")BI(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return qr(this),this.i=null,t=Js(this,t),BI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zI(t,e,n){UI(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),_g(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eL(t,e){e&&!t.j&&(qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UI(this,r),zI(this,i,n))},t)),t.j=e}var tL=class{constructor(t,e){this.g=t,this.map=e}};function WI(t){this.l=t||nL,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nL=10;function HI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qI(t){return t.h?1:t.g?t.g.size:0}function Ep(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Og(t,e){t.g?t.g.add(e):t.h=e}function GI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WI.prototype.cancel=function(){if(this.i=KI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function KI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _g(t.i)}var rL=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function iL(){this.g=new rL}function sL(t,e,n){const r=n||"";try{jI(t,function(i,s){let o=i;fl(i)&&(o=Ag(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oL(t,e){const n=new vd;if(H.Image){const r=new Image;r.onload=Xl(Zl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xl(Zl,n,r,"TestLoadImage: error",!1,e),r.onabort=Xl(Zl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xl(Zl,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Id(t){this.l=t.ec||null,this.j=t.ob||!1}We(Id,xg);Id.prototype.g=function(){return new Sd(this.l,this.j)};Id.prototype.i=function(t){return function(){return t}}({});function Sd(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Sd,ze);var Dg=0;N=Sd.prototype;N.open=function(t,e){if(this.readyState!=Dg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Va(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yl(this)),this.readyState=Dg};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yl(this):Va(this),this.readyState==3&&QI(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,yl(this))};N.Ya=function(t){this.g&&(this.response=t,yl(this))};N.ka=function(){this.g&&yl(this)};function yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Va(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aL=H.JSON.parse;function ke(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YI,this.L=this.M=!1}We(ke,ze);var YI="",lL=/^https?$/i,uL=["POST","PUT"];N=ke.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vp.g(),this.C=this.u?W_(this.u):W_(vp),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){G_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=fI(uL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZI(this),0<this.B&&((this.L=cL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Pg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){G_(this,s)}};function cL(t){return Ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof yg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function G_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XI(t),Cd(t)}function XI(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Cd(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cd(this,!0)),ke.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?JI(this):this.kb())};N.kb=function(){JI(this)};function JI(t){if(t.h&&typeof yg<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)Pg(t.La,0,t);else if(Ze(t,"readystatechange"),hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(FI)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!lL.test(i?i.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var s=2<hn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",XI(t)}}finally{Cd(t)}}}}function Cd(t,e){if(t.g){ZI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function hn(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aL(e)}};function K_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function dL(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(xa(t[r]))continue;var n=MD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PD(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eS(t){let e="";return Eg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Ao(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tS(t){this.Ga=0,this.j=[],this.l=new vd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ao("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ao("baseRetryDelayMs",5e3,t),this.hb=Ao("retryDelaySeedMs",1e4,t),this.eb=Ao("forwardChannelMaxRetries",2,t),this.xa=Ao("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WI(t&&t.concurrentRequestLimit),this.Ja=new iL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=tS.prototype;N.ra=8;N.H=1;function Mg(t){if(nS(t),t.H==3){var e=t.W++,n=zn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),_l(t,n),e=new gl(t,t.l,e),e.L=2,e.A=Td(zn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.A,n=!0),n||(e.g=cS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),vl(e)}lS(t)}function Ad(t){t.g&&($g(t),t.g.cancel(),t.g=null)}function nS(t){Ad(t),t.u&&(H.clearTimeout(t.u),t.u=null),Ic(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function kd(t){if(!HI(t.i)&&!t.m){t.m=!0;var e=t.Na;Na||SI(),Oa||(Na(),Oa=!0),kg.add(e,t),t.C=0}}function fL(t,e){return qI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pl(ct(t.Na,t,e),aS(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new gl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=gI(s),vI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rS(this,i,e),n=zn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),_l(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(eS(s)))+"&"+e:this.o&&Lg(n,this.o,s)),Og(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,_p(i,n,null)):_p(i,n,e),this.H=2}}else this.H==3&&(t?Q_(this,t):this.j.length==0||HI(this.i)||Q_(this))};function Q_(t,e){var n;e?n=e.m:n=t.W++;const r=zn(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),_l(t,r),t.o&&t.s&&Lg(r,t.o,t.s),n=new gl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Og(t.i,n),_p(n,r,e)}function _l(t,e){t.na&&Eg(t.na,function(n,r){me(e,r,n)}),t.h&&jI({},function(n,r){me(e,r,n)})}function rS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function iS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Na||SI(),Oa||(Na(),Oa=!0),kg.add(e,t),t.A=0}}function Vg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pl(ct(t.Ma,t),aS(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,sS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=pl(ct(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Ad(this),sS(this))};function $g(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function sS(t){t.g=new gl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),_l(t,e),t.o&&t.s&&Lg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Td(zn(e)),n.u=null,n.S=!0,LI(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Ad(this),Vg(this),gt(19))};function Ic(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function oS(t,e){var n=null;if(t.g==e){Ic(t),$g(t),t.g=null;var r=2}else if(Ep(t.i,e))n=e.F,GI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=yd(),Ze(r,new xI(r,n)),kd(t)}else iS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&fL(t,e)||r==2&&Vg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function aS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function li(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new gi("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Ec(n,"https"),Td(n)),oL(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),lS(t),nS(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function lS(t){if(t.H=0,t.ma=[],t.h){const e=KI(t.i);(e.length!=0||t.j.length!=0)&&(j_(t.ma,e),j_(t.ma,t.j),t.i.i.length=0,_g(t.j),t.j.length=0),t.h.ya()}}function uS(t,e,n){var r=n instanceof gi?zn(n):new gi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Tc(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new gi(null);r&&Ec(s,r),e&&(s.g=e),i&&Tc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),_l(t,r),r}function cS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ke(new Id({ob:n})):new ke(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function dS(){}N=dS.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Sc(){if(Ls&&!(10<=Number(CD)))throw Error("Environmental error: no available transport.")}Sc.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){ze.call(this),this.g=new tS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}We(Nt,ze);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=uS(t,null,t.Y),kd(t)};Nt.prototype.close=function(){Mg(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ag(t),t=n);e.j.push(new tL(e.fb++,t)),e.H==3&&kd(e)};Nt.prototype.N=function(){this.g.h=null,delete this.j,Mg(this.g),delete this.g,Nt.$.N.call(this)};function fS(t){bg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(fS,bg);function hS(){Ng.call(this),this.status=1}We(hS,Ng);function Zs(t){this.g=t}We(Zs,dS);Zs.prototype.Ba=function(){Ze(this.g,"a")};Zs.prototype.Aa=function(t){Ze(this.g,new fS(t))};Zs.prototype.za=function(t){Ze(this.g,new hS)};Zs.prototype.ya=function(){Ze(this.g,"b")};function hL(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(rn,hL);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Bf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Bf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Bf(this,r),i=0;break}}this.h=i,this.i+=e};rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pL={};function jg(t){return-128<=t&&128>t?TD(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return Ts;if(0>t)return Ye(pn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tp;return new oe(e,0)}function pS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ye(pS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),r=Ts,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=pn(Math.pow(e,s)),r=r.R(s).add(pn(o))):(r=r.R(n),r=r.add(pn(o)))}return r}var Tp=4294967296,Ts=jg(0),Ip=jg(1),Y_=jg(16777216);N=oe.prototype;N.ea=function(){if(Ft(this))return-Ye(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tp+r)*e,e*=Tp}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(Ft(this))return"-"+Ye(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,r="";;){var i=Ac(n,e).g;n=Cc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}N.X=function(t){return t=Cc(this,t),Ft(t)?-1:Dn(t)?0:1};function Ye(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(Ip)}N.abs=function(){return Ft(this)?Ye(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function Cc(t,e){return t.add(Ye(e))}N.R=function(t){if(Dn(this)||Dn(t))return Ts;if(Ft(this))return Ft(t)?Ye(this).R(Ye(t)):Ye(Ye(this).R(t));if(Ft(t))return Ye(this.R(Ye(t)));if(0>this.X(Y_)&&0>t.X(Y_))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,eu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,eu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,eu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,eu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function eu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ko(t,e){this.g=t,this.h=e}function Ac(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new ko(Ts,Ts);if(Ft(t))return e=Ac(Ye(t),e),new ko(Ye(e.g),Ye(e.h));if(Ft(e))return e=Ac(t,Ye(e)),new ko(Ye(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ip,r=e;0>=r.X(t);)n=X_(n),r=X_(r);var i=Wi(n,1),s=Wi(r,1);for(r=Wi(r,2),n=Wi(n,2);!Dn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Wi(r,1),n=Wi(n,1)}return e=Cc(t,i.R(e)),new ko(i,e)}for(i=Ts;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pn(n),o=s.R(e);Ft(o)||0<o.X(t);)n-=r,s=pn(n),o=s.R(e);Dn(s)&&(s=Ip),i=i.add(s),t=Cc(t,o)}return new ko(i,t)}N.gb=function(t){return Ac(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function X_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function Wi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}Sc.prototype.createWebChannel=Sc.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;_d.NO_ERROR=0;_d.TIMEOUT=8;_d.HTTP_ERROR=6;bI.COMPLETE="complete";NI.EventType=ml;ml.OPEN="a";ml.CLOSE="b";ml.ERROR="c";ml.MESSAGE="d";ze.prototype.listen=ze.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=pn;oe.fromString=pS;var mL=function(){return new Sc},gL=function(){return yd()},zf=_d,vL=bI,yL=Mi,J_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},tu=NI,_L=ke,wL=rn,Is=oe;const Z_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new sg("@firebase/firestore");function Ro(){return ki.logLevel}function b(t,...e){if(ki.logLevel<=J.DEBUG){const n=e.map(Fg);ki.debug(`Firestore (${eo}): ${t}`,...n)}}function In(t,...e){if(ki.logLevel<=J.ERROR){const n=e.map(Fg);ki.error(`Firestore (${eo}): ${t}`,...n)}}function Ms(t,...e){if(ki.logLevel<=J.WARN){const n=e.map(Fg);ki.warn(`Firestore (${eo}): ${t}`,...n)}}function Fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function ue(t,e){t||z()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class TL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IL{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new mS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new at(e)}}class SL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new AL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new $e(0,0))}static max(){return new q(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends $a{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const PL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends $a{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return PL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ge.fromString(e))}static fromName(e){return new j(ge.fromString(e).popFirst(5))}static empty(){return new j(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ge(e.slice()))}}function xL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Dr(i,j.empty(),e)}function bL(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(q.min(),j.empty(),-1)}static max(){return new Dr(q.max(),j.empty(),-1)}}function NL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==OL)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Mn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ea(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Bg(r.target.error);this.V.reject(new ea(e,i))}}static open(e,n,r,i){try{return new Ug(n,e.transaction(i,r))}catch(s){throw new ea(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new ML(n)}}class ui{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ui.S(De())===12.2&&In("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),ti(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!CT())return!1;if(ui.C())return!0;const e=De(),n=ui.S(e),r=0<n&&n<10,i=ui.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new L(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ea(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Ug.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),C.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class LL{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ti(this.k.delete())}}class ea extends L{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function El(t){return t.name==="IndexedDbTransactionError"}class ML{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ti(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),ti(this.store.add(e))}get(e){return ti(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),ti(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),ti(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new C((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new C((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new C((r,i)=>{n.onerror=s=>{const o=Bg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new C((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new LL(a),u=n(a.primaryKey,a.value,l);if(u instanceof C){const c=u.catch(d=>(l.done(),C.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>C.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ti(t){return new C((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Bg(r.target.error);n(i)}})}let e0=!1;function Bg(t){const e=ui.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return e0||(e0=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}zg._e=-1;function Rd(t){return t==null}function kc(t){return t===0&&1/t==-1/0}function VL(t){return typeof t=="number"&&Number.isInteger(t)&&!kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function to(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n0(this.data.getIterator())}getIteratorFrom(e){return new n0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class n0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new et(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yS("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const $L=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=$L.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ri(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hg(t){const e=t.mapValue.fields.__previous_value__;return Wg(e)?Hg(e):e}function ja(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Fa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wg(t)?4:FL(t)?9007199254740991:10:z()}function Sn(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ja(t).isEqual(ja(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),a=Lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ri(i.bytesValue).isEqual(Ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),a=xe(s.doubleValue);return o===a?kc(o)===kc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(t0(o)!==t0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Sn(o[l],a[l])))return!1;return!0}(t,e);default:return z()}}function Ua(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=xe(s.integerValue||s.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return r0(t.timestampValue,e.timestampValue);case 4:return r0(ja(t),ja(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ri(s),l=Ri(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ne(a[u],l[u]);if(c!==0)return c}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(xe(s.latitude),xe(o.latitude));return a!==0?a:ne(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=$s(a[u],l[u]);if(c)return c}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ru.mapValue&&o===ru.mapValue)return 0;if(s===ru.mapValue)return 1;if(o===ru.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=ne(l[d],c[d]);if(f!==0)return f;const h=$s(a[l[d]],u[c[d]]);if(h!==0)return h}return ne(l.length,c.length)}(t.mapValue,e.mapValue);default:throw z()}}function r0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Lr(t),r=Lr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function js(t){return Sp(t)}function Sp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sp(n.fields[o])}`;return i+"}"}(t.mapValue):z()}function i0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cp(t){return!!t&&"integerValue"in t}function qg(t){return!!t&&"arrayValue"in t}function s0(t){return!!t&&"nullValue"in t}function o0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lu(t){return!!t&&"mapValue"in t}function ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return to(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ta(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){to(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(ta(this.value))}}function _S(t){const e=[];return to(t.fields,(n,r)=>{const i=new Xe([n]);if(Lu(r)){const s=_S(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,q.min(),q.min(),q.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,q.min(),q.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,q.min(),q.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function a0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function UL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{}class Ne extends wS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zL(e,n,r):n==="array-contains"?new qL(e,r):n==="in"?new GL(e,r):n==="not-in"?new KL(e,r):n==="array-contains-any"?new QL(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WL(e,r):new HL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new sn(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function TS(t){return BL(t)&&ES(t)}function BL(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Ap(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+js(t.value);if(TS(t))return t.filters.map(e=>Ap(e)).join(",");{const e=t.filters.map(n=>Ap(n)).join(",");return`${t.op}(${e})`}}function IS(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IS(o,i.filters[a]),!0):!1}(t,e):void z()}function SS(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(SS).join(" ,")+"}"}(t):"Filter"}class zL extends Ne{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class WL extends Ne{constructor(e,n){super(e,"in",n),this.keys=CS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HL extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=CS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class qL extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qg(n)&&Ua(n.arrayValue,this.value)}}class GL extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class KL extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class QL extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function u0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YL(t,e,n,r,i,s,o)}function Gg(t){const e=K(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.ce=n}return e.ce}function Kg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l0(t.startAt,e.startAt)&&l0(t.endAt,e.endAt)}function kp(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function XL(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function Qg(t){return new no(t)}function c0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AS(t){return t.collectionGroup!==null}function na(t){const e=K(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Ba(s,r))}),n.has(Xe.keyField().canonicalString())||e.le.push(new Ba(Xe.keyField(),r))}return e.le}function wn(t){const e=K(t);return e.he||(e.he=JL(e,na(t))),e.he}function JL(t,e){if(t.limitType==="F")return u0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ba(i.field,s)});const n=t.endAt?new Rc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rc(t.startAt.position,t.startAt.inclusive):null;return u0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rp(t,e){const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pp(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pd(t,e){return Kg(wn(t),wn(e))&&t.limitType===e.limitType}function kS(t){return`${Gg(wn(t))}|lt:${t.limitType}`}function Ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>SS(i)).join(", ")}]`),Rd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>js(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function xd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of na(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=a0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,na(r),i)||r.endAt&&!function(o,a,l){const u=a0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,na(r),i))}(t,e)}function ZL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RS(t){return(e,n)=>{let r=!1;for(const i of na(t)){const s=eM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eM(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?$s(l,u):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){to(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new Se(j.comparator);function Wn(){return tM}const PS=new Se(j.comparator);function $o(...t){let e=PS;for(const n of t)e=e.insert(n.key,n);return e}function xS(t){let e=PS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return ra()}function bS(){return ra()}function ra(){return new ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const nM=new Se(j.comparator),rM=new et(j.comparator);function Y(...t){let e=rM;for(const n of t)e=e.add(n);return e}const iM=new et(ne);function sM(){return iM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function OS(t){return{integerValue:""+t}}function oM(t,e){return VL(e)?OS(e):NS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this._=void 0}}function aM(t,e,n){return t instanceof za?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wg(s)&&(s=Hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Wa?LS(t,e):t instanceof Ha?MS(t,e):function(i,s){const o=DS(i,s),a=d0(o)+d0(i.Ie);return Cp(o)&&Cp(i.Ie)?OS(a):NS(i.serializer,a)}(t,e)}function lM(t,e,n){return t instanceof Wa?LS(t,e):t instanceof Ha?MS(t,e):n}function DS(t,e){return t instanceof Pc?function(r){return Cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class za extends bd{}class Wa extends bd{constructor(e){super(),this.elements=e}}function LS(t,e){const n=VS(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ha extends bd{constructor(e){super(),this.elements=e}}function MS(t,e){let n=VS(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class Pc extends bd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function d0(t){return xe(t.integerValue||t.doubleValue)}function VS(t){return qg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n){this.field=e,this.transform=n}}function cM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Wa&&i instanceof Wa||r instanceof Ha&&i instanceof Ha?Vs(r.elements,i.elements,Sn):r instanceof Pc&&i instanceof Pc?Sn(r.Ie,i.Ie):r instanceof za&&i instanceof za}(t.transform,e.transform)}class dM{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nd{}function $S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,En.none()):new Tl(t.key,t.data,En.none());{const n=t.data,r=Ut.empty();let i=new et(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vi(t.key,r,new Jt(i.toArray()),En.none())}}function fM(t,e,n){t instanceof Tl?function(i,s,o){const a=i.value.clone(),l=h0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(i,s,o){if(!Mu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=h0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof Tl?function(s,o,a,l){if(!Mu(s.precondition,o))return a;const u=s.value.clone(),c=p0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vi?function(s,o,a,l){if(!Mu(s.precondition,o))return a;const u=p0(s.fieldTransforms,l,o),c=o.data;return c.setAll(jS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Mu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function hM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function f0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vs(r,i,(s,o)=>cM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends Nd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vi extends Nd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h0(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lM(o,a,n[i]))}return r}function p0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aM(s,o,e))}return r}class Yg extends Nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pM extends Nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$S(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>f0(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>f0(n,r))}}class Xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return nM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,Z;function yM(t){switch(t){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function FS(t){if(t===void 0)return In("GRPC error has no .code"),S.UNKNOWN;switch(t){case Pe.OK:return S.OK;case Pe.CANCELLED:return S.CANCELLED;case Pe.UNKNOWN:return S.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return S.INTERNAL;case Pe.UNAVAILABLE:return S.UNAVAILABLE;case Pe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Pe.NOT_FOUND:return S.NOT_FOUND;case Pe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Pe.ABORTED:return S.ABORTED;case Pe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Pe.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(Z=Pe||(Pe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=new Is([4294967295,4294967295],0);function m0(t){const e=_M().encode(t),n=new wL;return n.update(e),new Uint8Array(n.digest())}function g0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Is([n,r],0),new Is([i,s],0)]}class Jg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Is.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Is.fromNumber(r)));return i.compare(wM)===1&&(i=new Is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=m0(e),[r,i]=g0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=m0(e),[r,i]=g0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Od(q.min(),i,new Se(ne),Wn(),Y())}}class Il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class US{constructor(e,n){this.targetId=e,this.fe=n}}class BS{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class v0{constructor(){this.ge=0,this.pe=_0(),this.ye=ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Y(),n=Y(),r=Y();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Il(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_0()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ue(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class EM{constructor(e){this.Le=e,this.ke=new Map,this.qe=Wn(),this.Qe=y0(),this.Ke=new Se(ne)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(kp(s))if(r===0){const o=new j(s.path);this.We(n,o,ut.newNoDocument(o,q.min()))}else ue(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ri(r).toUint8Array()}catch(l){if(l instanceof yS)return Ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Jg(o,i,s)}catch(l){return Ms(l instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&kp(a.target)){const l=new j(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ut.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Y();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Od(e,n,this.Ke,this.qe,r);return this.qe=Wn(),this.Qe=y0(),this.Ke=new Se(ne),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new v0,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new et(ne),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new v0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function y0(){return new Se(j.comparator)}function _0(){return new Se(j.comparator)}const TM={asc:"ASCENDING",desc:"DESCENDING"},IM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SM={and:"AND",or:"OR"};class CM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||Rd(e)?e:{value:e}}function xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AM(t,e){return xc(t,e.toTimestamp())}function Tn(t){return ue(!!t),q.fromTimestamp(function(n){const r=Lr(n);return new $e(r.seconds,r.nanos)}(t))}function Zg(t,e){return bp(t,e).canonicalString()}function bp(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WS(t){const e=ge.fromString(t);return ue(QS(e)),e}function Np(t,e){return Zg(t.databaseId,e.path)}function Wf(t,e){const n=WS(e);if(n.get(1)!==t.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(qS(n))}function HS(t,e){return Zg(t.databaseId,e)}function kM(t){const e=WS(t);return e.length===4?ge.emptyPath():qS(e)}function Op(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qS(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function w0(t,e,n){return{name:Np(t,e),fields:n.value.mapValue.fields}}function RM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ue(c===void 0||typeof c=="string"),ht.fromBase64String(c||"")):(ue(c===void 0||c instanceof Uint8Array),ht.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:FS(u.code);return new L(c,u.message||"")}(o);n=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wf(t,r.document.name),s=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):q.min(),a=new Ut({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Vu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wf(t,r.document),s=r.readTime?Tn(r.readTime):q.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wf(t,r.document),s=r.removedTargetIds||[];n=new Vu([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vM(i,s),a=r.targetId;n=new US(a,o)}}return n}function PM(t,e){let n;if(e instanceof Tl)n={update:w0(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Np(t,e.key)};else if(e instanceof Vi)n={update:w0(t,e.key,e.data),updateMask:$M(e.fieldMask)};else{if(!(e instanceof pM))return z();n={verify:Np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(t,e.precondition)),n}function xM(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tn(i.updateTime):Tn(s);return o.isEqual(q.min())&&(o=Tn(s)),new dM(o,i.transformResults||[])}(n,e))):[]}function bM(t,e){return{documents:[HS(t,e.path)]}}function NM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HS(t,i);const s=function(u){if(u.length!==0)return KS(sn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(f){return{field:Qi(f.field),direction:LM(f.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=xp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function OM(t){let e=kM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=GS(d);return f instanceof sn&&TS(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(_){return new Ba(Yi(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Rd(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,h=d.values||[];return new Rc(h,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,h=d.values||[];return new Rc(h,f)}(n.endAt)),XL(e,i,o,s,a,"F",l,u)}function DM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>GS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function LM(t){return TM[t]}function MM(t){return IM[t]}function VM(t){return SM[t]}function Qi(t){return{fieldPath:t.canonicalString()}}function Yi(t){return Xe.fromServerFormat(t.fieldPath)}function KS(t){return t instanceof Ne?function(n){if(n.op==="=="){if(o0(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NAN"}};if(s0(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o0(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NAN"}};if(s0(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(n.field),op:MM(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>KS(i));return r.length===1?r[0]:{compositeFilter:{op:VM(n.op),filters:r}}}(t):z()}function $M(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.ct=e}}function FM(t){const e=OM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this._n=new BM}addToCollectionParentIndex(e,n){return this._n.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Dr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class BM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Fs(0)}static Bn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.changes=new ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ia(r.mutation,i,Jt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=$o();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wn();const o=ra(),a=function(){return ra()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ia(c.mutation,u,c.mutation.getFieldMask(),$e.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new WM(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ra();let i=new Se((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Jt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=bS();c.forEach(f=>{if(!s.has(f)){const h=$S(n.get(f),r.get(f));h!==null&&d.set(f,h),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(ci());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:xS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=$o();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=$o();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(d,f){return new no(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ut.newInvalidDocument(c)))});let a=$o();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ia(c.mutation,u,Jt.empty(),$e.now()),xd(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return C.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tn(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:FM(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.overlays=new Se(j.comparator),this.hr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ci(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ci(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gM(n,r));let s=this.hr.get(n);s===void 0&&(s=Y(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.Pr=new et(Fe.Ir),this.Tr=new et(Fe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Fe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new j(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new j(new ge([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=Y();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return j.comparator(e.key,n.key)||ne(e.pr,n.pr)}static Er(e,n){return ne(e.pr,n.pr)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new et(Fe.Ir)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new j(s),0);let a=new et(ne);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),C.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Fe(n,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.vr=e,this.docs=function(){return new Se(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NL(bL(c),r)<=0||(i.has(c.key)||xd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){z()}Fr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YM(this)}getSize(e){return C.resolve(this.size)}}class YM extends zM{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.persistence=e,this.Mr=new ro(n=>Gg(n),Kg),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ev,this.targetCount=0,this.Br=Fs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),C.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.qn(n),C.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.Lr={},this.overlays={},this.kr=new zg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new XM(this),this.indexManager=new UM,this.remoteDocumentCache=function(i){return new QM(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jM(n),this.$r=new qM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new KM(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new ZM(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class ZM extends DL{constructor(e){super(),this.currentSequenceNumber=e}}class tv{constructor(e){this.persistence=e,this.zr=new ev,this.jr=null}static Hr(e){return new tv(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=j.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return C.or([()=>C.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Vb()?8:ui.v(De())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ro()<=J.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(Ro()<=J.DEBUG&&b("QueryEngine","Query:",Ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ro()<=J.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):C.resolve())}ji(e,n){if(c0(n))return C.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pp(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Pp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return c0(n)||i.isEqual(q.min())?C.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?C.resolve(null):(Ro()<=J.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ki(n)),this.es(e,o,n,xL(i,-1)).next(a=>a))})}Zi(e,n){let r=new et(RS(e));return n.forEach((i,s)=>{xd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ro()<=J.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Ki(n)),this.zi.getDocumentsMatchingQuery(e,n,Dr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Se(ne),this.rs=new ro(s=>Gg(s),Kg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function rV(t,e,n,r){return new nV(t,e,n,r)}async function YS(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function iV(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let h=C.resolve();return f.forEach(_=>{h=h.next(()=>c.getEntry(l,_)).next(w=>{const E=u.docVersions.get(_);ue(E!==null),w.version.compareTo(E)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XS(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function sV(t,e){const n=K(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let h=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?h=h.withResumeToken(ht.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(c.resumeToken,r)),i=i.insert(d,h),function(w,E,v){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,h,c)&&a.push(n.Qr.updateTargetData(s,h))});let l=Wn(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(oV(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(q.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function oV(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function aV(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lV(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Dp(t,e,n){const r=K(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!El(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function E0(t,e,n){const r=K(t);let i=q.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=K(l),f=d.rs.get(c);return f!==void 0?C.resolve(d.ns.get(f)):d.Qr.getTargetData(u,c)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Y())).next(a=>(uV(r,ZL(e),a),{documents:a,hs:s})))}function uV(t,e,n){let r=t.ss.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class T0{constructor(){this.activeTargetIds=sM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cV{constructor(){this.no=new T0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new T0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu=null;function Hf(){return iu===null?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class pV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Hf(),l=this.bo(n,r.toUriEncodedString());b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(b("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ms("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=fV[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Hf();return new Promise((o,a)=>{const l=new _L;l.setWithCredentials(!0),l.listenOnce(vL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zf.NO_ERROR:const c=l.getResponseJson();b(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case zf.TIMEOUT:b(ot,`RPC '${e}' ${s} timed out`),a(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case zf.HTTP_ERROR:const d=l.getStatus();if(b(ot,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const h=f==null?void 0:f.error;if(h&&h.status&&h.message){const _=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(v)>=0?v:S.UNKNOWN}(h.status);a(new L(_,h.message))}else a(new L(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{b(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Hf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mL(),a=gL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,h=!1;const _=new hV({lo:E=>{h?b(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(b(ot,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),b(ot,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},ho:()=>d.close()}),w=(E,v,m)=>{E.listen(v,g=>{try{m(g)}catch(T){setTimeout(()=>{throw T},0)}})};return w(d,tu.EventType.OPEN,()=>{h||b(ot,`RPC '${e}' stream ${i} transport opened.`)}),w(d,tu.EventType.CLOSE,()=>{h||(h=!0,b(ot,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),w(d,tu.EventType.ERROR,E=>{h||(h=!0,Ms(ot,`RPC '${e}' stream ${i} transport errored:`,E),_.Vo(new L(S.UNAVAILABLE,"The operation could not be completed")))}),w(d,tu.EventType.MESSAGE,E=>{var v;if(!h){const m=E.data[0];ue(!!m);const g=m,T=g.error||((v=g[0])===null||v===void 0?void 0:v.error);if(T){b(ot,`RPC '${e}' stream ${i} received error:`,T);const I=T.status;let A=function(D){const R=Pe[D];if(R!==void 0)return FS(R)}(I),P=T.message;A===void 0&&(A=S.INTERNAL,P="Unknown error status: "+I+" with message "+T.message),h=!0,_.Vo(new L(A,P)),d.close()}else b(ot,`RPC '${e}' stream ${i} received:`,m),_.mo(m)}}),w(a,yL.STAT_EVENT,E=>{E.stat===J_.PROXY?b(ot,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===J_.NOPROXY&&b(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function qf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){return new CM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new JS(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new L(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mV extends ZS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=RM(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Tn(o.readTime):q.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Op(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kp(l)?{documents:bM(s,l)}:{query:NM(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zS(s,o.resumeToken);const u=xp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=xc(s,o.snapshotVersion.toTimestamp());const u=xp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=DM(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Op(this.serializer),n.removeTarget=e,this.t_(n)}}class gV extends ZS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=xM(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.T_(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Op(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PM(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,bp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(S.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,bp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(S.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class yV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(In(n),this.g_=!1):b("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{$i(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.v_.add(4),await Sl(u),u.x_.set("Unknown"),u.v_.delete(4),await Ld(u)}(this))})}),this.x_=new yV(r,i)}}async function Ld(t){if($i(t))for(const e of t.F_)await e(!0)}async function Sl(t){for(const e of t.F_)await e(!1)}function eC(t,e){const n=K(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),sv(n)?iv(n):io(n).Jo()&&rv(n,e))}function tC(t,e){const n=K(t),r=io(n);n.C_.delete(e),r.Jo()&&nC(n,e),n.C_.size===0&&(r.Jo()?r.Xo():$i(n)&&n.x_.set("Unknown"))}function rv(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).c_(e)}function nC(t,e){t.O_.Oe(e),io(t).l_(e)}function iv(t){t.O_=new EM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),io(t).start(),t.x_.p_()}function sv(t){return $i(t)&&!io(t).Ho()&&t.C_.size>0}function $i(t){return K(t).v_.size===0}function rC(t){t.O_=void 0}async function wV(t){t.C_.forEach((e,n)=>{rv(t,e)})}async function EV(t,e){rC(t),sv(t)?(t.x_.S_(e),iv(t)):t.x_.set("Unknown")}async function TV(t,e,n){if(t.x_.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bc(t,r)}else if(e instanceof Vu?t.O_.$e(e):e instanceof US?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(q.min()))try{const r=await XS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),nC(s,l);const d=new gr(c.target,l,u,c.sequenceNumber);rv(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await bc(t,r)}}async function bc(t,e,n){if(!El(e))throw e;t.v_.add(1),await Sl(t),t.x_.set("Offline"),n||(n=()=>XS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ld(t)})}function iC(t,e){return e().catch(n=>bc(t,n,e))}async function Md(t){const e=K(t),n=Mr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;IV(e);)try{const i=await aV(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,SV(e,i)}catch(i){await bc(e,i)}sC(e)&&oC(e)}function IV(t){return $i(t)&&t.D_.length<10}function SV(t,e){t.D_.push(e);const n=Mr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function sC(t){return $i(t)&&!Mr(t).Ho()&&t.D_.length>0}function oC(t){Mr(t).start()}async function CV(t){Mr(t).d_()}async function AV(t){const e=Mr(t);for(const n of t.D_)e.I_(n.mutations)}async function kV(t,e,n){const r=t.D_.shift(),i=Xg.from(r,e,n);await iC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Md(t)}async function RV(t,e){e&&Mr(t).P_&&await async function(r,i){if(function(o){return yM(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();Mr(r).Zo(),await iC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Md(r)}}(t,e),sC(t)&&oC(t)}async function S0(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.v_.add(3),await Sl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ld(n)}async function PV(t,e){const n=K(t);e?(n.v_.delete(2),await Ld(n)):e||(n.v_.add(2),await Sl(n),n.x_.set("Unknown"))}function io(t){return t.N_||(t.N_=function(n,r,i){const s=K(n);return s.R_(),new mV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:wV.bind(null,t),To:EV.bind(null,t),u_:TV.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),sv(t)?iv(t):t.x_.set("Unknown")):(await t.N_.stop(),rC(t))})),t.N_}function Mr(t){return t.B_||(t.B_=function(n,r,i){const s=K(n);return s.R_(),new gV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:CV.bind(null,t),To:RV.bind(null,t),E_:AV.bind(null,t),T_:kV.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Md(t)):(await t.B_.stop(),t.D_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ov(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function av(t,e){if(In("AsyncQueue",`${e}: ${t}`),El(t))return new L(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=$o(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.L_=new Se(j.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):z():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Us(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(){this.q_=void 0,this.Q_=[]}}class bV{constructor(){this.queries=new ro(e=>kS(e),Pd),this.onlineState="Unknown",this.K_=new Set}}async function aC(t,e){const n=K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xV),i)try{s.q_=await n.onListen(r)}catch(o){const a=av(o,`Initialization of query '${Ki(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&lv(n)}async function lC(t,e){const n=K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NV(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&lv(n)}function OV(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function lv(t){t.K_.forEach(e=>{e.next()})}class uC{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.key=e}}class dC{constructor(e){this.key=e}}class DV{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Y(),this.mutatedKeys=Y(),this.ua=RS(e),this.ca=new Ss(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new C0,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),h=xd(this.query,d)?d:null,_=!!f&&this.mutatedKeys.has(f.key),w=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let E=!1;f&&h?f.data.isEqual(h.data)?_!==w&&(r.track({type:3,doc:h}),E=!0):this.Ia(f,h)||(r.track({type:2,doc:h}),E=!0,(l&&this.ua(h,l)>0||u&&this.ua(h,u)<0)&&(a=!0)):!f&&h?(r.track({type:0,doc:h}),E=!0):f&&!h&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(h?(o=o.add(h),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(h,_){const w=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return w(h)-w(_)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Us(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new C0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Y(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new dC(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new cC(r))}),n}Ra(e){this.oa=e.hs,this.aa=Y();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Us.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class LV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MV{constructor(e){this.key=e,this.ma=!1}}class VV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ro(a=>kS(a),Pd),this.pa=new Map,this.ya=new Set,this.wa=new Se(j.comparator),this.Sa=new Map,this.ba=new ev,this.Da={},this.Ca=new Map,this.va=Fs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function $V(t,e){const n=KV(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await lV(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&eC(n.remoteStore,o)}return i}async function jV(t,e,n,r,i){t.Ma=(d,f,h)=>async function(w,E,v,m){let g=E.view.ha(v);g.Xi&&(g=await E0(w.localStore,E.query,!1).then(({documents:P})=>E.view.ha(P,g)));const T=m&&m.targetChanges.get(E.targetId),I=m&&m.targetMismatches.get(E.targetId)!=null,A=E.view.applyChanges(g,w.isPrimaryClient,T,I);return k0(w,E.targetId,A.da),A.snapshot}(t,d,f,h);const s=await E0(t.localStore,e,!0),o=new DV(e,s.hs),a=o.ha(s.documents),l=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);k0(t,n,u.da);const c=new LV(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function FV(t,e){const n=K(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Pd(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),tC(n.remoteStore,r.targetId),Lp(n,r.targetId)}).catch(wl)):(Lp(n,r.targetId),await Dp(n.localStore,r.targetId,!0))}async function UV(t,e,n){const r=QV(t);try{const i=await function(o,a){const l=K(o),u=$e.now(),c=a.reduce((h,_)=>h.add(_.key),Y());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",h=>{let _=Wn(),w=Y();return l.os.getEntries(h,c).next(E=>{_=E,_.forEach((v,m)=>{m.isValidDocument()||(w=w.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(h,_)).next(E=>{d=E;const v=[];for(const m of a){const g=hM(m,d.get(m.key).overlayedDocument);g!=null&&v.push(new Vi(m.key,g,_S(g.value.mapValue),En.exists(!0)))}return l.mutationQueue.addMutationBatch(h,u,v,a)}).next(E=>{f=E;const v=E.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(h,E.batchId,v)})}).then(()=>({batchId:f.batchId,changes:xS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Se(ne)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Cl(r,i.changes),await Md(r.remoteStore)}catch(i){const s=av(i,"Failed to persist write");n.reject(s)}}async function fC(t,e){const n=K(t);try{const r=await sV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?ue(o.ma):i.removedDocuments.size>0&&(ue(o.ma),o.ma=!1))}),await Cl(n,r,e)}catch(r){await wl(r)}}function A0(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.Q_)f.U_(a)&&(u=!0)}),u&&lv(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BV(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Se(j.comparator);o=o.insert(s,ut.newNoDocument(s,q.min()));const a=Y().add(s),l=new Od(q.min(),new Map,new Se(ne),o,a);await fC(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),uv(r)}else await Dp(r.localStore,e,!1).then(()=>Lp(r,e,n)).catch(wl)}async function zV(t,e){const n=K(t),r=e.batch.batchId;try{const i=await iV(n.localStore,e);pC(n,r,null),hC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,i)}catch(i){await wl(i)}}async function WV(t,e,n){const r=K(t);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ue(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);pC(r,e,n),hC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,i)}catch(i){await wl(i)}}function hC(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function pC(t,e,n){const r=K(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||mC(t,r)})}function mC(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(tC(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),uv(t))}function k0(t,e,n){for(const r of n)r instanceof cC?(t.ba.addReference(r.key,e),HV(t,r)):r instanceof dC?(b("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||mC(t,r.key)):z()}function HV(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(b("SyncEngine","New document in limbo: "+n),t.ya.add(r),uv(t))}function uv(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new j(ge.fromString(e)),r=t.va.next();t.Sa.set(r,new MV(n)),t.wa=t.wa.insert(n,r),eC(t.remoteStore,new gr(wn(Qg(n.path)),r,"TargetPurposeLimboResolution",zg._e))}}async function Cl(t,e,n){const r=K(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=nv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=K(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>C.forEach(u,f=>C.forEach(f.qi,h=>c.persistence.referenceDelegate.addReference(d,f.targetId,h)).next(()=>C.forEach(f.Qi,h=>c.persistence.referenceDelegate.removeReference(d,f.targetId,h)))))}catch(d){if(!El(d))throw d;b("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const h=c.ns.get(f),_=h.snapshotVersion,w=h.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(f,w)}}}(r.localStore,s))}async function qV(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await YS(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new L(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cl(n,r.us)}}function GV(t,e){const n=K(t),r=n.Sa.get(e);if(r&&r.ma)return Y().add(r.key);{let i=Y();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function KV(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BV.bind(null,e),e.fa.u_=NV.bind(null,e.eventManager),e.fa.xa=OV.bind(null,e.eventManager),e}function QV(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WV.bind(null,e),e}class R0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rV(this.persistence,new tV,e.initialUser,this.serializer)}createPersistence(e){return new JM(tv.Hr,this.serializer)}createSharedClientState(e){return new cV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qV.bind(null,this.syncEngine),await PV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bV}()}createDatastore(e){const n=Dd(e.databaseInfo.databaseId),r=function(s){return new pV(s)}(e.databaseInfo);return function(s,o,a,l){return new vV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _V(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A0(this.syncEngine,n,0),function(){return I0.D()?new I0:new dV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new VV(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=K(r);b("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Sl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=gS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=av(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gf(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZV(t);b("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S0(e.remoteStore,i)),t._onlineComponents=e}function JV(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JV(n))throw n;Ms("Error using user provided cache. Falling back to memory cache: "+n),await Gf(t,new R0)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Gf(t,new R0);return t._offlineComponents}async function vC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await P0(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await P0(t,new YV))),t._onlineComponents}function e4(t){return vC(t).then(e=>e.syncEngine)}async function Mp(t){const e=await vC(t),n=e.eventManager;return n.onListen=$V.bind(null,e.syncEngine),n.onUnlisten=FV.bind(null,e.syncEngine),n}function t4(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new gC({next:f=>{o.enqueueAndForget(()=>lC(s,d)),f.fromCache&&l.source==="server"?u.reject(new L(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new uC(a,c,{includeMetadataChanges:!0,Z_:!0});return aC(s,d)}(await Mp(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e,n){if(!n)throw new L(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n4(t,e,n,r){if(e===!0&&r===!0)throw new L(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function b0(t){if(!j.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function N0(t){if(j.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function xr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vd(t);throw new L(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $d{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EL;switch(r.type){case"firstParty":return new CL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=x0.get(n);r&&(b("ComponentProvider","Removing Datastore"),x0.delete(n),r.terminate())}(this),Promise.resolve()}}function r4(t,e,n,r={}){var i;const s=(t=xr(t,$d))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=bb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new TL(new mS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class br extends Gr{constructor(e,n,r){super(e,n,Qg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new j(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function Nc(t,e,...n){if(t=nt(t),_C("collection","path",e),t instanceof $d){const r=ge.fromString(e,...n);return N0(r),new br(t,null,r)}{if(!(t instanceof xt||t instanceof br))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return N0(r),new br(t.firestore,null,r)}}function cv(t,e,...n){if(t=nt(t),arguments.length===1&&(e=gS.newId()),_C("doc","path",e),t instanceof $d){const r=ge.fromString(e,...n);return b0(r),new xt(t,null,new j(r))}{if(!(t instanceof xt||t instanceof br))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return b0(r),new xt(t.firestore,t instanceof br?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new JS(this,"async_queue_retry"),this._u=()=>{const n=qf();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=qf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=qf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Mn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!El(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw In("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=ov.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&z()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function D0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Bs extends $d{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new i4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wC(this),this._firestoreClient.terminate()}}function s4(t,e){const n=typeof t=="object"?t:PT(),r=typeof t=="string"?t:e||"(default)",i=ag(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Pb("firestore");s&&r4(i,...s)}return i}function dv(t){return t._firestoreClient||wC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new jL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,yC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(ht.fromBase64String(e))}catch(n){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=/^__.*__$/;class a4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}function EC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class mv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new mv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Oc(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(EC(this.du)&&o4.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class l4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dd(e)}Su(e,n,r,i=!1){return new mv({du:e,methodName:n,wu:r,path:Xe.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TC(t){const e=t._freezeSettings(),n=Dd(t._databaseId);return new l4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function u4(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);CC("Data must be an object, but it was:",o,r);const a=IC(r,o);let l,u;if(s.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=d4(e,d,n);if(!o.contains(f))throw new L(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);h4(c,f)||c.push(f)}l=new Jt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new a4(new Ut(a),l,u)}class gv extends hv{_toFieldTransform(e){return new uM(e.path,new za)}isEqual(e){return e instanceof gv}}function c4(t,e,n,r=!1){return vv(n,t.Su(r?4:3,e))}function vv(t,e){if(SC(t=nt(t)))return CC("Unsupported field value:",e,t),IC(t,e);if(t instanceof hv)return function(r,i){if(!EC(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=vv(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:xc(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xc(i.serializer,s)}}if(r instanceof pv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zs)return{bytesValue:zS(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Vd(r)}`)}(t,e)}function IC(t,e){const n={};return vS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):to(t,(r,i)=>{const s=vv(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function SC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof pv||t instanceof zs||t instanceof xt||t instanceof hv)}function CC(t,e,n){if(!SC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vd(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function d4(t,e,n){if((e=nt(e))instanceof fv)return e._internalPath;if(typeof e=="string")return AC(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const f4=new RegExp("[~\\*/\\[\\]]");function AC(t,e,n){if(e.search(f4)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fv(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(S.INVALID_ARGUMENT,a+t+l)}function h4(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p4 extends kC{data(){return super.data()}}function jd(t,e){return typeof e=="string"?AC(t,e):e instanceof fv?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yv{}class PC extends yv{}function _v(t,e,...n){let r=[];e instanceof yv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof wv).length,a=s.filter(l=>l instanceof Fd).length;if(o>1||o>0&&a>0)throw new L(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Fd extends PC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fd(e,n,r)}_apply(e){const n=this._parse(e);return NC(e._query,n),new Gr(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=TC(e.firestore);return function(s,o,a,l,u,c,d){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new L(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){M0(d,c);const h=[];for(const _ of d)h.push(L0(l,s,_));f={arrayValue:{values:h}}}else f=L0(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||M0(d,c),f=c4(a,o,d,c==="in"||c==="not-in");return Ne.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xC(t,e,n){const r=e,i=jd("where",t);return Fd._create(i,r,n)}class wv extends yv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)NC(o,l),o=Rp(o,l)}(e._query,n),new Gr(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ev extends PC{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ev(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ba(s,o)}(e._query,this._field,this._direction);return new Gr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new no(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function bC(t,e="asc"){const n=e,r=jd("orderBy",t);return Ev._create(r,n)}function L0(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new L(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!AS(e)&&n.indexOf("/")!==-1)throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!j.isDocumentKey(r))throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i0(t,new j(r))}if(n instanceof xt)return i0(t,n._key);throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vd(n)}.`)}function M0(t,e){if(!Array.isArray(t)||t.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class m4{convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return to(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new pv(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(QS(r));const i=new Fa(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||In(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OC extends kC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $u extends OC{data(e={}){return super.data(e)}}class DC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $u(this._firestore,this._userDataWriter,r.key,r,new Fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new $u(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new $u(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:v4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class Tv extends m4{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function y4(t){t=xr(t,Gr);const e=xr(t.firestore,Bs),n=dv(e),r=new Tv(e);return RC(t._query),t4(n,t._query).then(i=>new DC(e,r,t,i))}function LC(t){return $C(xr(t.firestore,Bs),[new Yg(t._key,En.none())])}function MC(t,e){const n=xr(t.firestore,Bs),r=cv(t),i=g4(t.converter,e);return $C(n,[u4(TC(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function VC(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||D0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(D0(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof xt)u=xr(t.firestore,Bs),c=Qg(t._key.path),l={next:d=>{e[o]&&e[o](_4(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=xr(t,Gr);u=xr(d.firestore,Bs),c=d._query;const f=new Tv(u);l={next:h=>{e[o]&&e[o](new DC(u,f,d,h))},error:e[o+1],complete:e[o+2]},RC(t._query)}return function(f,h,_,w){const E=new gC(w),v=new uC(h,E,_);return f.asyncQueue.enqueueAndForget(async()=>aC(await Mp(f),v)),()=>{E.La(),f.asyncQueue.enqueueAndForget(async()=>lC(await Mp(f),v))}}(dv(u),c,a,l)}function $C(t,e){return function(r,i){const s=new Mn;return r.asyncQueue.enqueueAndForget(async()=>UV(await e4(r),i,s)),s.promise}(dv(t),e)}function _4(t,e,n){const r=n.docs.get(e._key),i=new Tv(t);return new OC(t,i,e._key,r,new Fo(n.hasPendingWrites,n.fromCache),e.converter)}function jC(){return new gv("serverTimestamp")}(function(e,n=!0){(function(i){eo=i})(Ys),Os(new Ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Bs(new IL(r.getProvider("auth-internal")),new kL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Pr(Z_,"4.4.1",e),Pr(Z_,"4.4.1","esm2017")})();const w4={apiKey:"AIzaSyCGBBUYYf3wPE5wUVXS67QxtZXBlQw3Ztg",authDomain:"cafecord-660a6.firebaseapp.com",projectId:"cafecord-660a6",storageBucket:"cafecord-660a6.appspot.com",messagingSenderId:"774016383268",appId:"1:774016383268:web:ddcdae2d8b0b025c155bb1",measurementId:"G-0TK65HP520"},FC=RT(w4),Tt=pD(FC),UC=new Pn,Ws=s4(FC),E4="/assets/loginimg-CYB21IrP.png",V0=()=>{const[t,e]=y.useState({email:"",password:""}),n=sl(),r=o=>{const{name:a,value:l}=o.target;e({...t,[a]:l}),console.log(t)},i=async o=>{o.preventDefault();try{await ZN(Tt,t.email,t.password),n("/Chat")}catch(a){console.error("Login fail",a)}},s=async()=>{try{await cI(Tt,UC),n("/Chat")}catch(o){console.error(o.message)}};return p.jsx("div",{className:"login-box-container",children:p.jsx("div",{className:"container mt-5",children:p.jsxs("div",{className:"row",children:[p.jsx("div",{className:"col-md-6 nopadding",children:p.jsx("img",{src:E4,alt:"coffee mugs",className:"img-fluid rounded"})}),p.jsx("div",{className:"col-md-6 nopadding",children:p.jsxs("div",{className:"p-4 rounded shadow login-container",children:[p.jsx("h2",{className:"text mb-5",children:"Welcome to Cafecord!"}),p.jsxs("form",{onSubmit:i,children:[["Email","Password"].map(o=>p.jsx("div",{className:"mb-3 form-group",children:p.jsx("input",{type:o==="Password"?"password":"text",className:"form-control input",placeholder:` ${o.toLowerCase()}`,name:o.toLowerCase(),value:t[o.toLowerCase()],onChange:r})},o)),p.jsx("button",{type:"submit",className:"button",children:"Login"}),p.jsx("button",{onClick:s,className:"button",children:"Login with Google"})]}),p.jsxs("p",{className:"mt-3 accounttext",children:["Don't have an account? ",p.jsx(Aa,{to:"./Signup",children:"Sign up"}),"."]})]})})]})})})};function T4(){this.__data__=[],this.size=0}var I4=T4;function S4(t,e){return t===e||t!==t&&e!==e}var BC=S4,C4=BC;function A4(t,e){for(var n=t.length;n--;)if(C4(t[n][0],e))return n;return-1}var Ud=A4,k4=Ud,R4=Array.prototype,P4=R4.splice;function x4(t){var e=this.__data__,n=k4(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():P4.call(e,n,1),--this.size,!0}var b4=x4,N4=Ud;function O4(t){var e=this.__data__,n=N4(e,t);return n<0?void 0:e[n][1]}var D4=O4,L4=Ud;function M4(t){return L4(this.__data__,t)>-1}var V4=M4,$4=Ud;function j4(t,e){var n=this.__data__,r=$4(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var F4=j4,U4=I4,B4=b4,z4=D4,W4=V4,H4=F4;function so(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}so.prototype.clear=U4;so.prototype.delete=B4;so.prototype.get=z4;so.prototype.has=W4;so.prototype.set=H4;var Bd=so,q4=Bd;function G4(){this.__data__=new q4,this.size=0}var K4=G4;function Q4(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var Y4=Q4;function X4(t){return this.__data__.get(t)}var J4=X4;function Z4(t){return this.__data__.has(t)}var e$=Z4,t$=typeof Nl=="object"&&Nl&&Nl.Object===Object&&Nl,zC=t$,n$=zC,r$=typeof self=="object"&&self&&self.Object===Object&&self,i$=n$||r$||Function("return this")(),Jn=i$,s$=Jn,o$=s$.Symbol,Iv=o$,$0=Iv,WC=Object.prototype,a$=WC.hasOwnProperty,l$=WC.toString,Po=$0?$0.toStringTag:void 0;function u$(t){var e=a$.call(t,Po),n=t[Po];try{t[Po]=void 0;var r=!0}catch{}var i=l$.call(t);return r&&(e?t[Po]=n:delete t[Po]),i}var c$=u$,d$=Object.prototype,f$=d$.toString;function h$(t){return f$.call(t)}var p$=h$,j0=Iv,m$=c$,g$=p$,v$="[object Null]",y$="[object Undefined]",F0=j0?j0.toStringTag:void 0;function _$(t){return t==null?t===void 0?y$:v$:F0&&F0 in Object(t)?m$(t):g$(t)}var zd=_$;function w$(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var HC=w$,E$=zd,T$=HC,I$="[object AsyncFunction]",S$="[object Function]",C$="[object GeneratorFunction]",A$="[object Proxy]";function k$(t){if(!T$(t))return!1;var e=E$(t);return e==S$||e==C$||e==I$||e==A$}var qC=k$,R$=Jn,P$=R$["__core-js_shared__"],x$=P$,Kf=x$,U0=function(){var t=/[^.]+$/.exec(Kf&&Kf.keys&&Kf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function b$(t){return!!U0&&U0 in t}var N$=b$,O$=Function.prototype,D$=O$.toString;function L$(t){if(t!=null){try{return D$.call(t)}catch{}try{return t+""}catch{}}return""}var GC=L$,M$=qC,V$=N$,$$=HC,j$=GC,F$=/[\\^$.*+?()[\]{}|]/g,U$=/^\[object .+?Constructor\]$/,B$=Function.prototype,z$=Object.prototype,W$=B$.toString,H$=z$.hasOwnProperty,q$=RegExp("^"+W$.call(H$).replace(F$,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function G$(t){if(!$$(t)||V$(t))return!1;var e=M$(t)?q$:U$;return e.test(j$(t))}var K$=G$;function Q$(t,e){return t==null?void 0:t[e]}var Y$=Q$,X$=K$,J$=Y$;function Z$(t,e){var n=J$(t,e);return X$(n)?n:void 0}var oo=Z$,ej=oo,tj=Jn,nj=ej(tj,"Map"),Sv=nj,rj=oo,ij=rj(Object,"create"),Wd=ij,B0=Wd;function sj(){this.__data__=B0?B0(null):{},this.size=0}var oj=sj;function aj(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var lj=aj,uj=Wd,cj="__lodash_hash_undefined__",dj=Object.prototype,fj=dj.hasOwnProperty;function hj(t){var e=this.__data__;if(uj){var n=e[t];return n===cj?void 0:n}return fj.call(e,t)?e[t]:void 0}var pj=hj,mj=Wd,gj=Object.prototype,vj=gj.hasOwnProperty;function yj(t){var e=this.__data__;return mj?e[t]!==void 0:vj.call(e,t)}var _j=yj,wj=Wd,Ej="__lodash_hash_undefined__";function Tj(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=wj&&e===void 0?Ej:e,this}var Ij=Tj,Sj=oj,Cj=lj,Aj=pj,kj=_j,Rj=Ij;function ao(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ao.prototype.clear=Sj;ao.prototype.delete=Cj;ao.prototype.get=Aj;ao.prototype.has=kj;ao.prototype.set=Rj;var Pj=ao,z0=Pj,xj=Bd,bj=Sv;function Nj(){this.size=0,this.__data__={hash:new z0,map:new(bj||xj),string:new z0}}var Oj=Nj;function Dj(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Lj=Dj,Mj=Lj;function Vj(t,e){var n=t.__data__;return Mj(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Hd=Vj,$j=Hd;function jj(t){var e=$j(this,t).delete(t);return this.size-=e?1:0,e}var Fj=jj,Uj=Hd;function Bj(t){return Uj(this,t).get(t)}var zj=Bj,Wj=Hd;function Hj(t){return Wj(this,t).has(t)}var qj=Hj,Gj=Hd;function Kj(t,e){var n=Gj(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Qj=Kj,Yj=Oj,Xj=Fj,Jj=zj,Zj=qj,eF=Qj;function lo(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}lo.prototype.clear=Yj;lo.prototype.delete=Xj;lo.prototype.get=Jj;lo.prototype.has=Zj;lo.prototype.set=eF;var KC=lo,tF=Bd,nF=Sv,rF=KC,iF=200;function sF(t,e){var n=this.__data__;if(n instanceof tF){var r=n.__data__;if(!nF||r.length<iF-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new rF(r)}return n.set(t,e),this.size=n.size,this}var oF=sF,aF=Bd,lF=K4,uF=Y4,cF=J4,dF=e$,fF=oF;function uo(t){var e=this.__data__=new aF(t);this.size=e.size}uo.prototype.clear=lF;uo.prototype.delete=uF;uo.prototype.get=cF;uo.prototype.has=dF;uo.prototype.set=fF;var hF=uo,pF="__lodash_hash_undefined__";function mF(t){return this.__data__.set(t,pF),this}var gF=mF;function vF(t){return this.__data__.has(t)}var yF=vF,_F=KC,wF=gF,EF=yF;function Dc(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new _F;++e<n;)this.add(t[e])}Dc.prototype.add=Dc.prototype.push=wF;Dc.prototype.has=EF;var TF=Dc;function IF(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var SF=IF;function CF(t,e){return t.has(e)}var AF=CF,kF=TF,RF=SF,PF=AF,xF=1,bF=2;function NF(t,e,n,r,i,s){var o=n&xF,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var u=s.get(t),c=s.get(e);if(u&&c)return u==e&&c==t;var d=-1,f=!0,h=n&bF?new kF:void 0;for(s.set(t,e),s.set(e,t);++d<a;){var _=t[d],w=e[d];if(r)var E=o?r(w,_,d,e,t,s):r(_,w,d,t,e,s);if(E!==void 0){if(E)continue;f=!1;break}if(h){if(!RF(e,function(v,m){if(!PF(h,m)&&(_===v||i(_,v,n,r,s)))return h.push(m)})){f=!1;break}}else if(!(_===w||i(_,w,n,r,s))){f=!1;break}}return s.delete(t),s.delete(e),f}var QC=NF,OF=Jn,DF=OF.Uint8Array,LF=DF;function MF(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}var VF=MF;function $F(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var jF=$F,W0=Iv,H0=LF,FF=BC,UF=QC,BF=VF,zF=jF,WF=1,HF=2,qF="[object Boolean]",GF="[object Date]",KF="[object Error]",QF="[object Map]",YF="[object Number]",XF="[object RegExp]",JF="[object Set]",ZF="[object String]",e3="[object Symbol]",t3="[object ArrayBuffer]",n3="[object DataView]",q0=W0?W0.prototype:void 0,Qf=q0?q0.valueOf:void 0;function r3(t,e,n,r,i,s,o){switch(n){case n3:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case t3:return!(t.byteLength!=e.byteLength||!s(new H0(t),new H0(e)));case qF:case GF:case YF:return FF(+t,+e);case KF:return t.name==e.name&&t.message==e.message;case XF:case ZF:return t==e+"";case QF:var a=BF;case JF:var l=r&WF;if(a||(a=zF),t.size!=e.size&&!l)return!1;var u=o.get(t);if(u)return u==e;r|=HF,o.set(t,e);var c=UF(a(t),a(e),r,i,s,o);return o.delete(t),c;case e3:if(Qf)return Qf.call(t)==Qf.call(e)}return!1}var i3=r3;function s3(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var o3=s3,a3=Array.isArray,Cv=a3,l3=o3,u3=Cv;function c3(t,e,n){var r=e(t);return u3(t)?r:l3(r,n(t))}var d3=c3;function f3(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}var h3=f3;function p3(){return[]}var m3=p3,g3=h3,v3=m3,y3=Object.prototype,_3=y3.propertyIsEnumerable,G0=Object.getOwnPropertySymbols,w3=G0?function(t){return t==null?[]:(t=Object(t),g3(G0(t),function(e){return _3.call(t,e)}))}:v3,E3=w3;function T3(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var I3=T3;function S3(t){return t!=null&&typeof t=="object"}var qd=S3,C3=zd,A3=qd,k3="[object Arguments]";function R3(t){return A3(t)&&C3(t)==k3}var P3=R3,K0=P3,x3=qd,YC=Object.prototype,b3=YC.hasOwnProperty,N3=YC.propertyIsEnumerable,O3=K0(function(){return arguments}())?K0:function(t){return x3(t)&&b3.call(t,"callee")&&!N3.call(t,"callee")},D3=O3,Lc={exports:{}};function L3(){return!1}var M3=L3;Lc.exports;(function(t,e){var n=Jn,r=M3,i=e&&!e.nodeType&&e,s=i&&!0&&t&&!t.nodeType&&t,o=s&&s.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;t.exports=u})(Lc,Lc.exports);var XC=Lc.exports,V3=9007199254740991,$3=/^(?:0|[1-9]\d*)$/;function j3(t,e){var n=typeof t;return e=e??V3,!!e&&(n=="number"||n!="symbol"&&$3.test(t))&&t>-1&&t%1==0&&t<e}var F3=j3,U3=9007199254740991;function B3(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=U3}var JC=B3,z3=zd,W3=JC,H3=qd,q3="[object Arguments]",G3="[object Array]",K3="[object Boolean]",Q3="[object Date]",Y3="[object Error]",X3="[object Function]",J3="[object Map]",Z3="[object Number]",e9="[object Object]",t9="[object RegExp]",n9="[object Set]",r9="[object String]",i9="[object WeakMap]",s9="[object ArrayBuffer]",o9="[object DataView]",a9="[object Float32Array]",l9="[object Float64Array]",u9="[object Int8Array]",c9="[object Int16Array]",d9="[object Int32Array]",f9="[object Uint8Array]",h9="[object Uint8ClampedArray]",p9="[object Uint16Array]",m9="[object Uint32Array]",fe={};fe[a9]=fe[l9]=fe[u9]=fe[c9]=fe[d9]=fe[f9]=fe[h9]=fe[p9]=fe[m9]=!0;fe[q3]=fe[G3]=fe[s9]=fe[K3]=fe[o9]=fe[Q3]=fe[Y3]=fe[X3]=fe[J3]=fe[Z3]=fe[e9]=fe[t9]=fe[n9]=fe[r9]=fe[i9]=!1;function g9(t){return H3(t)&&W3(t.length)&&!!fe[z3(t)]}var v9=g9;function y9(t){return function(e){return t(e)}}var _9=y9,Mc={exports:{}};Mc.exports;(function(t,e){var n=zC,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,s=i&&i.exports===r,o=s&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(Mc,Mc.exports);var w9=Mc.exports,E9=v9,T9=_9,Q0=w9,Y0=Q0&&Q0.isTypedArray,I9=Y0?T9(Y0):E9,ZC=I9,S9=I3,C9=D3,A9=Cv,k9=XC,R9=F3,P9=ZC,x9=Object.prototype,b9=x9.hasOwnProperty;function N9(t,e){var n=A9(t),r=!n&&C9(t),i=!n&&!r&&k9(t),s=!n&&!r&&!i&&P9(t),o=n||r||i||s,a=o?S9(t.length,String):[],l=a.length;for(var u in t)(e||b9.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||R9(u,l)))&&a.push(u);return a}var O9=N9,D9=Object.prototype;function L9(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||D9;return t===n}var M9=L9;function V9(t,e){return function(n){return t(e(n))}}var $9=V9,j9=$9,F9=j9(Object.keys,Object),U9=F9,B9=M9,z9=U9,W9=Object.prototype,H9=W9.hasOwnProperty;function q9(t){if(!B9(t))return z9(t);var e=[];for(var n in Object(t))H9.call(t,n)&&n!="constructor"&&e.push(n);return e}var G9=q9,K9=qC,Q9=JC;function Y9(t){return t!=null&&Q9(t.length)&&!K9(t)}var X9=Y9,J9=O9,Z9=G9,e6=X9;function t6(t){return e6(t)?J9(t):Z9(t)}var n6=t6,r6=d3,i6=E3,s6=n6;function o6(t){return r6(t,s6,i6)}var a6=o6,X0=a6,l6=1,u6=Object.prototype,c6=u6.hasOwnProperty;function d6(t,e,n,r,i,s){var o=n&l6,a=X0(t),l=a.length,u=X0(e),c=u.length;if(l!=c&&!o)return!1;for(var d=l;d--;){var f=a[d];if(!(o?f in e:c6.call(e,f)))return!1}var h=s.get(t),_=s.get(e);if(h&&_)return h==e&&_==t;var w=!0;s.set(t,e),s.set(e,t);for(var E=o;++d<l;){f=a[d];var v=t[f],m=e[f];if(r)var g=o?r(m,v,f,e,t,s):r(v,m,f,t,e,s);if(!(g===void 0?v===m||i(v,m,n,r,s):g)){w=!1;break}E||(E=f=="constructor")}if(w&&!E){var T=t.constructor,I=e.constructor;T!=I&&"constructor"in t&&"constructor"in e&&!(typeof T=="function"&&T instanceof T&&typeof I=="function"&&I instanceof I)&&(w=!1)}return s.delete(t),s.delete(e),w}var f6=d6,h6=oo,p6=Jn,m6=h6(p6,"DataView"),g6=m6,v6=oo,y6=Jn,_6=v6(y6,"Promise"),w6=_6,E6=oo,T6=Jn,I6=E6(T6,"Set"),S6=I6,C6=oo,A6=Jn,k6=C6(A6,"WeakMap"),R6=k6,Vp=g6,$p=Sv,jp=w6,Fp=S6,Up=R6,eA=zd,co=GC,J0="[object Map]",P6="[object Object]",Z0="[object Promise]",e1="[object Set]",t1="[object WeakMap]",n1="[object DataView]",x6=co(Vp),b6=co($p),N6=co(jp),O6=co(Fp),D6=co(Up),Jr=eA;(Vp&&Jr(new Vp(new ArrayBuffer(1)))!=n1||$p&&Jr(new $p)!=J0||jp&&Jr(jp.resolve())!=Z0||Fp&&Jr(new Fp)!=e1||Up&&Jr(new Up)!=t1)&&(Jr=function(t){var e=eA(t),n=e==P6?t.constructor:void 0,r=n?co(n):"";if(r)switch(r){case x6:return n1;case b6:return J0;case N6:return Z0;case O6:return e1;case D6:return t1}return e});var L6=Jr,Yf=hF,M6=QC,V6=i3,$6=f6,r1=L6,i1=Cv,s1=XC,j6=ZC,F6=1,o1="[object Arguments]",a1="[object Array]",su="[object Object]",U6=Object.prototype,l1=U6.hasOwnProperty;function B6(t,e,n,r,i,s){var o=i1(t),a=i1(e),l=o?a1:r1(t),u=a?a1:r1(e);l=l==o1?su:l,u=u==o1?su:u;var c=l==su,d=u==su,f=l==u;if(f&&s1(t)){if(!s1(e))return!1;o=!0,c=!1}if(f&&!c)return s||(s=new Yf),o||j6(t)?M6(t,e,n,r,i,s):V6(t,e,l,n,r,i,s);if(!(n&F6)){var h=c&&l1.call(t,"__wrapped__"),_=d&&l1.call(e,"__wrapped__");if(h||_){var w=h?t.value():t,E=_?e.value():e;return s||(s=new Yf),i(w,E,n,r,s)}}return f?(s||(s=new Yf),$6(t,e,n,r,i,s)):!1}var z6=B6,W6=z6,u1=qd;function tA(t,e,n,r,i){return t===e?!0:t==null||e==null||!u1(t)&&!u1(e)?t!==t&&e!==e:W6(t,e,n,r,tA,i)}var H6=tA,q6=H6;function G6(t,e){return q6(t,e)}var K6=G6;const nA=Xa(K6);function c1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c1(Object(n),!0).forEach(function(r){je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vc(t){"@babel/helpers - typeof";return Vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vc(t)}function Q6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Y6(t,e,n){return e&&d1(t.prototype,e),n&&d1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Av(t,e){return J6(t)||eU(t,e)||rA(t,e)||nU()}function Al(t){return X6(t)||Z6(t)||rA(t)||tU()}function X6(t){if(Array.isArray(t))return Bp(t)}function J6(t){if(Array.isArray(t))return t}function Z6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function rA(t,e){if(t){if(typeof t=="string")return Bp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bp(t,e)}}function Bp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f1=function(){},kv={},iA={},sA=null,oA={mark:f1,measure:f1};try{typeof window<"u"&&(kv=window),typeof document<"u"&&(iA=document),typeof MutationObserver<"u"&&(sA=MutationObserver),typeof performance<"u"&&(oA=performance)}catch{}var rU=kv.navigator||{},h1=rU.userAgent,p1=h1===void 0?"":h1,Vr=kv,ye=iA,m1=sA,ou=oA;Vr.document;var Zn=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",aA=~p1.indexOf("MSIE")||~p1.indexOf("Trident/"),au,lu,uu,cu,du,Hn="___FONT_AWESOME___",zp=16,lA="fa",uA="svg-inline--fa",xi="data-fa-i2svg",Wp="data-fa-pseudo-element",iU="data-fa-pseudo-element-pending",Rv="data-prefix",Pv="data-icon",g1="fontawesome-i2svg",sU="async",oU=["HTML","HEAD","STYLE","SCRIPT"],cA=function(){try{return!0}catch{return!1}}(),pe="classic",Ae="sharp",xv=[pe,Ae];function kl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[pe]}})}var qa=kl((au={},je(au,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),je(au,Ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),au)),Ga=kl((lu={},je(lu,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),je(lu,Ae,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),lu)),Ka=kl((uu={},je(uu,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),je(uu,Ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),uu)),aU=kl((cu={},je(cu,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),je(cu,Ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),cu)),lU=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,dA="fa-layers-text",uU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cU=kl((du={},je(du,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),je(du,Ae,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),du)),fA=[1,2,3,4,5,6,7,8,9,10],dU=fA.concat([11,12,13,14,15,16,17,18,19,20]),fU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],di={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qa=new Set;Object.keys(Ga[pe]).map(Qa.add.bind(Qa));Object.keys(Ga[Ae]).map(Qa.add.bind(Qa));var hU=[].concat(xv,Al(Qa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",di.GROUP,di.SWAP_OPACITY,di.PRIMARY,di.SECONDARY]).concat(fA.map(function(t){return"".concat(t,"x")})).concat(dU.map(function(t){return"w-".concat(t)})),sa=Vr.FontAwesomeConfig||{};function pU(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function mU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ye&&typeof ye.querySelector=="function"){var gU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gU.forEach(function(t){var e=Av(t,2),n=e[0],r=e[1],i=mU(pU(n));i!=null&&(sa[r]=i)})}var hA={styleDefault:"solid",familyDefault:"classic",cssPrefix:lA,replacementClass:uA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sa.familyPrefix&&(sa.cssPrefix=sa.familyPrefix);var Hs=M(M({},hA),sa);Hs.autoReplaceSvg||(Hs.observeMutations=!1);var $={};Object.keys(hA).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Hs[t]=n,oa.forEach(function(r){return r($)})},get:function(){return Hs[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){Hs.cssPrefix=e,oa.forEach(function(n){return n($)})},get:function(){return Hs.cssPrefix}});Vr.FontAwesomeConfig=$;var oa=[];function vU(t){return oa.push(t),function(){oa.splice(oa.indexOf(t),1)}}var rr=zp,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yU(t){if(!(!t||!Zn)){var e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}}var _U="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ya(){for(var t=12,e="";t-- >0;)e+=_U[Math.random()*62|0];return e}function fo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bv(t){return t.classList?fo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(pA(t[n]),'" ')},"").trim()}function Gd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Nv(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function EU(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function TU(t){var e=t.transform,n=t.width,r=n===void 0?zp:n,i=t.height,s=i===void 0?zp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&aA?l+="translate(".concat(e.x/rr-r/2,"em, ").concat(e.y/rr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/rr,"em), calc(-50% + ").concat(e.y/rr,"em)) "):l+="translate(".concat(e.x/rr,"em, ").concat(e.y/rr,"em) "),l+="scale(".concat(e.size/rr*(e.flipX?-1:1),", ").concat(e.size/rr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var IU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function mA(){var t=lA,e=uA,n=$.cssPrefix,r=$.replacementClass,i=IU;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var v1=!1;function Xf(){$.autoAddCss&&!v1&&(yU(mA()),v1=!0)}var SU={mixout:function(){return{dom:{css:mA,insertCss:Xf}}},hooks:function(){return{beforeDOMElementCreation:function(){Xf()},beforeI2svg:function(){Xf()}}}},qn=Vr||{};qn[Hn]||(qn[Hn]={});qn[Hn].styles||(qn[Hn].styles={});qn[Hn].hooks||(qn[Hn].hooks={});qn[Hn].shims||(qn[Hn].shims=[]);var Zt=qn[Hn],gA=[],CU=function t(){ye.removeEventListener("DOMContentLoaded",t),$c=1,gA.map(function(e){return e()})},$c=!1;Zn&&($c=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),$c||ye.addEventListener("DOMContentLoaded",CU));function AU(t){Zn&&($c?setTimeout(t,0):gA.push(t))}function Rl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?pA(t):"<".concat(e," ").concat(wU(r),">").concat(s.map(Rl).join(""),"</").concat(e,">")}function y1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var kU=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Jf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?kU(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function RU(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hp(t){var e=RU(t);return e.length===1?e[0].toString(16):null}function PU(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function _1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function qp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=_1(e);typeof Zt.hooks.addPack=="function"&&!i?Zt.hooks.addPack(t,_1(e)):Zt.styles[t]=M(M({},Zt.styles[t]||{}),s),t==="fas"&&qp("fa",e)}var fu,hu,pu,ds=Zt.styles,xU=Zt.shims,bU=(fu={},je(fu,pe,Object.values(Ka[pe])),je(fu,Ae,Object.values(Ka[Ae])),fu),Ov=null,vA={},yA={},_A={},wA={},EA={},NU=(hu={},je(hu,pe,Object.keys(qa[pe])),je(hu,Ae,Object.keys(qa[Ae])),hu);function OU(t){return~hU.indexOf(t)}function DU(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!OU(i)?i:null}var TA=function(){var e=function(s){return Jf(ds,function(o,a,l){return o[l]=Jf(a,s,{}),o},{})};vA=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),yA=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),EA=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ds||$.autoFetchSvg,r=Jf(xU,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});_A=r.names,wA=r.unicodes,Ov=Kd($.styleDefault,{family:$.familyDefault})};vU(function(t){Ov=Kd(t.styleDefault,{family:$.familyDefault})});TA();function Dv(t,e){return(vA[t]||{})[e]}function LU(t,e){return(yA[t]||{})[e]}function fi(t,e){return(EA[t]||{})[e]}function IA(t){return _A[t]||{prefix:null,iconName:null}}function MU(t){var e=wA[t],n=Dv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $r(){return Ov}var Lv=function(){return{prefix:null,iconName:null,rest:[]}};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?pe:n,i=qa[r][t],s=Ga[r][t]||Ga[r][i],o=t in Zt.styles?t:null;return s||o||null}var w1=(pu={},je(pu,pe,Object.keys(Ka[pe])),je(pu,Ae,Object.keys(Ka[Ae])),pu);function Qd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},je(e,pe,"".concat($.cssPrefix,"-").concat(pe)),je(e,Ae,"".concat($.cssPrefix,"-").concat(Ae)),e),o=null,a=pe;(t.includes(s[pe])||t.some(function(u){return w1[pe].includes(u)}))&&(a=pe),(t.includes(s[Ae])||t.some(function(u){return w1[Ae].includes(u)}))&&(a=Ae);var l=t.reduce(function(u,c){var d=DU($.cssPrefix,c);if(ds[c]?(c=bU[a].includes(c)?aU[a][c]:c,o=c,u.prefix=c):NU[a].indexOf(c)>-1?(o=c,u.prefix=Kd(c,{family:a})):d?u.iconName=d:c!==$.replacementClass&&c!==s[pe]&&c!==s[Ae]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?IA(u.iconName):{},h=fi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||h||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ds.far&&ds.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},Lv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ae&&(ds.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=fi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=$r()||"fas"),l}var VU=function(){function t(){Q6(this,t),this.definitions={}}return Y6(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),qp(a,o[a]);var l=Ka[pe][a];l&&qp(l,o[a]),TA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),E1=[],fs={},Cs={},$U=Object.keys(Cs);function jU(t,e){var n=e.mixoutsTo;return E1=t,fs={},Object.keys(Cs).forEach(function(r){$U.indexOf(r)===-1&&delete Cs[r]}),E1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Vc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){fs[o]||(fs[o]=[]),fs[o].push(s[o])})}r.provides&&r.provides(Cs)}),n}function Gp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=fs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function bi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fs[t]||[];i.forEach(function(s){s.apply(null,n)})}function Gn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Cs[t]?Cs[t].apply(null,e):void 0}function Kp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||$r();if(e)return e=fi(n,e)||e,y1(SA.definitions,n,e)||y1(Zt.styles,n,e)}var SA=new VU,FU=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,bi("noAuto")},UU={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(bi("beforeI2svg",e),Gn("pseudoElements2svg",e),Gn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,AU(function(){zU({autoReplaceSvgRoot:n}),bi("watch",e)})}},BU={icon:function(e){if(e===null)return null;if(Vc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kd(e[0]);return{prefix:r,iconName:fi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(lU))){var i=Qd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||$r(),iconName:fi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=$r();return{prefix:s,iconName:fi(s,e)||e}}}},Lt={noAuto:FU,config:$,dom:UU,parse:BU,library:SA,findIconDefinition:Kp,toHtml:Rl},zU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(Zt.styles).length>0||$.autoFetchSvg)&&Zn&&$.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function Yd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Rl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var r=ye.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function WU(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Nv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Gd(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function HU(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Mv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,h=f===void 0?!1:f,_=r.found?r:n,w=_.width,E=_.height,v=i==="fak",m=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),g={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},T=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};h&&(g.attributes[xi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Ya())},children:[l]}),delete g.attributes.title);var I=M(M({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},T),d.styles)}),A=r.found&&n.found?Gn("generateAbstractMask",I)||{children:[],attributes:{}}:Gn("generateAbstractIcon",I)||{children:[],attributes:{}},P=A.children,O=A.attributes;return I.children=P,I.attributes=O,a?HU(I):WU(I)}function T1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[xi]="");var c=M({},o.styles);Nv(i)&&(c.transform=TU({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Gd(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function qU(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zf=Zt.styles;function Qp(t){var e=t[0],n=t[1],r=t.slice(4),i=Av(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(di.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(di.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(di.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var GU={found:!1,width:512,height:512};function KU(t,e){!cA&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yp(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=$r()),new Promise(function(r,i){if(Gn("missingIconAbstract"),n==="fa"){var s=IA(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Zf[e]&&Zf[e][t]){var o=Zf[e][t];return r(Qp(o))}KU(t,e),r(M(M({},GU),{},{icon:$.showMissingIcons&&t?Gn("missingIconAbstract")||{}:{}}))})}var I1=function(){},Xp=$.measurePerformance&&ou&&ou.mark&&ou.measure?ou:{mark:I1,measure:I1},Uo='FA "6.5.1"',QU=function(e){return Xp.mark("".concat(Uo," ").concat(e," begins")),function(){return CA(e)}},CA=function(e){Xp.mark("".concat(Uo," ").concat(e," ends")),Xp.measure("".concat(Uo," ").concat(e),"".concat(Uo," ").concat(e," begins"),"".concat(Uo," ").concat(e," ends"))},Vv={begin:QU,end:CA},ju=function(){};function S1(t){var e=t.getAttribute?t.getAttribute(xi):null;return typeof e=="string"}function YU(t){var e=t.getAttribute?t.getAttribute(Rv):null,n=t.getAttribute?t.getAttribute(Pv):null;return e&&n}function XU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function JU(){if($.autoReplaceSvg===!0)return Fu.replace;var t=Fu[$.autoReplaceSvg];return t||Fu.replace}function ZU(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function e5(t){return ye.createElement(t)}function AA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ZU:e5:n;if(typeof t=="string")return ye.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(AA(o,{ceFn:r}))}),i}function t5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Fu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(AA(i),n)}),n.getAttribute(xi)===null&&$.keepOriginalSource){var r=ye.createComment(t5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bv(n).indexOf($.replacementClass))return Fu.replace(e);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Rl(a)}).join(`
`);n.setAttribute(xi,""),n.innerHTML=o}};function C1(t){t()}function kA(t,e){var n=typeof e=="function"?e:ju;if(t.length===0)n();else{var r=C1;$.mutateApproach===sU&&(r=Vr.requestAnimationFrame||C1),r(function(){var i=JU(),s=Vv.begin("mutate");t.map(i),s(),n()})}}var $v=!1;function RA(){$v=!0}function Jp(){$v=!1}var jc=null;function A1(t){if(m1&&$.observeMutations){var e=t.treeCallback,n=e===void 0?ju:e,r=t.nodeCallback,i=r===void 0?ju:r,s=t.pseudoElementsCallback,o=s===void 0?ju:s,a=t.observeMutationsRoot,l=a===void 0?ye:a;jc=new m1(function(u){if(!$v){var c=$r();fo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!S1(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&S1(d.target)&&~fU.indexOf(d.attributeName))if(d.attributeName==="class"&&YU(d.target)){var f=Qd(bv(d.target)),h=f.prefix,_=f.iconName;d.target.setAttribute(Rv,h||c),_&&d.target.setAttribute(Pv,_)}else XU(d.target)&&i(d.target)})}}),Zn&&jc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function n5(){jc&&jc.disconnect()}function r5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function i5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Qd(bv(t));return i.prefix||(i.prefix=$r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=LU(i.prefix,t.innerText)||Dv(i.prefix,Hp(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function s5(t){var e=fo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Ya()):(e["aria-hidden"]="true",e.focusable="false")),e}function o5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=i5(t),r=n.iconName,i=n.prefix,s=n.rest,o=s5(t),a=Gp("parseNodeAttributes",{},t),l=e.styleParser?r5(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var a5=Zt.styles;function PA(t){var e=$.autoReplaceSvg==="nest"?k1(t,{styleParser:!1}):k1(t);return~e.extra.classes.indexOf(dA)?Gn("generateLayersText",t,e):Gn("generateSvgReplacementMutation",t,e)}var jr=new Set;xv.map(function(t){jr.add("fa-".concat(t))});Object.keys(qa[pe]).map(jr.add.bind(jr));Object.keys(qa[Ae]).map(jr.add.bind(jr));jr=Al(jr);function R1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=ye.documentElement.classList,r=function(d){return n.add("".concat(g1,"-").concat(d))},i=function(d){return n.remove("".concat(g1,"-").concat(d))},s=$.autoFetchSvg?jr:xv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(a5));s.includes("fa")||s.push("fa");var o=[".".concat(dA,":not([").concat(xi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(xi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Vv.begin("onTree"),u=a.reduce(function(c,d){try{var f=PA(d);f&&c.push(f)}catch(h){cA||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){kA(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function l5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PA(t).then(function(n){n&&kA([n],e)})}function u5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Kp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Kp(i||{})),t(r,M(M({},n),{},{mask:i}))}}var c5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,h=n.titleId,_=h===void 0?null:h,w=n.classes,E=w===void 0?[]:w,v=n.attributes,m=v===void 0?{}:v,g=n.styles,T=g===void 0?{}:g;if(e){var I=e.prefix,A=e.iconName,P=e.icon;return Yd(M({type:"icon"},e),function(){return bi("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(f?m["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(_||Ya()):(m["aria-hidden"]="true",m.focusable="false")),Mv({icons:{main:Qp(P),mask:l?Qp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:A,transform:M(M({},mn),i),symbol:o,title:f,maskId:c,titleId:_,extra:{attributes:m,styles:T,classes:E}})})}},d5={mixout:function(){return{icon:u5(c5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=R1,n.nodeCallback=l5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,o=s===void 0?function(){}:s;return R1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(h,_){Promise.all([Yp(i,a),c.iconName?Yp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=Av(w,2),v=E[0],m=E[1];h([n,Mv({icons:{main:v,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gd(a);l.length>0&&(i.style=l);var u;return Nv(o)&&(u=Gn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},f5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Yd({type:"layer"},function(){bi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Al(s)).join(" ")},children:o}]})}}}},h5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Yd({type:"counter",content:n},function(){return bi("beforeDOMElementCreation",{content:n,params:r}),qU({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Al(a))}})})}}}},p5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return Yd({type:"text",content:n},function(){return bi("beforeDOMElementCreation",{content:n,params:r}),T1({content:n,transform:M(M({},mn),s),title:a,extra:{attributes:d,styles:h,classes:["".concat($.cssPrefix,"-layers-text")].concat(Al(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(aA){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,T1({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},m5=new RegExp('"',"ug"),P1=[1105920,1112319];function g5(t){var e=t.replace(m5,""),n=PU(e,0),r=n>=P1[0]&&n<=P1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hp(i?e[0]:e),isSecondary:r||i}}function x1(t,e){var n="".concat(iU).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fo(t.children),o=s.filter(function(P){return P.getAttribute(Wp)===e})[0],a=Vr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(uU),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ae:pe,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ga[f][l[2].toLowerCase()]:cU[f][u],_=g5(d),w=_.value,E=_.isSecondary,v=l[0].startsWith("FontAwesome"),m=Dv(h,w),g=m;if(v){var T=MU(w);T.iconName&&T.prefix&&(m=T.iconName,h=T.prefix)}if(m&&!E&&(!o||o.getAttribute(Rv)!==h||o.getAttribute(Pv)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var I=o5(),A=I.extra;A.attributes[Wp]=e,Yp(m,h).then(function(P){var O=Mv(M(M({},I),{},{icons:{main:P,mask:Lv()},prefix:h,iconName:g,extra:A,watchable:!0})),D=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=O.map(function(R){return Rl(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function v5(t){return Promise.all([x1(t,"::before"),x1(t,"::after")])}function y5(t){return t.parentNode!==document.head&&!~oU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function b1(t){if(Zn)return new Promise(function(e,n){var r=fo(t.querySelectorAll("*")).filter(y5).map(v5),i=Vv.begin("searchPseudoElements");RA(),Promise.all(r).then(function(){i(),Jp(),e()}).catch(function(){i(),Jp(),n()})})}var _5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=b1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;$.searchPseudoElements&&b1(i)}}},N1=!1,w5={mixout:function(){return{dom:{unwatch:function(){RA(),N1=!0}}}},hooks:function(){return{bootstrap:function(){A1(Gp("mutationObserverCallbacks",{}))},noAuto:function(){n5()},watch:function(n){var r=n.observeMutationsRoot;N1?Jp():A1(Gp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},O1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},E5={mixout:function(){return{parse:{transform:function(n){return O1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=O1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:M({},h.outer),children:[{tag:"g",attributes:M({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),h.path)}]}]}}}},eh={x:0,y:0,width:"100%",height:"100%"};function D1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function T5(t){return t.tag==="g"?t.children:[t]}var I5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Qd(i.split(" ").map(function(o){return o.trim()})):Lv();return s.prefix||(s.prefix=$r()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,h=EU({transform:l,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:M(M({},eh),{},{fill:"white"})},w=c.children?{children:c.children.map(D1)}:{},E={tag:"g",attributes:M({},h.inner),children:[D1(M({tag:c.tag,attributes:M(M({},c.attributes),h.path)},w))]},v={tag:"g",attributes:M({},h.outer),children:[E]},m="mask-".concat(a||Ya()),g="clip-".concat(a||Ya()),T={tag:"mask",attributes:M(M({},eh),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:T5(f)},T]};return r.push(I,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(m,")")},eh)}),{children:r,attributes:i}}}},S5={provides:function(e){var n=!1;Vr.matchMedia&&(n=Vr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},C5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},A5=[SU,d5,f5,h5,p5,_5,w5,E5,I5,S5,C5];jU(A5,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Zp=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var k5=Lt.icon;Lt.layer;Lt.text;Lt.counter;var xA={exports:{}},R5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",P5=R5,x5=P5;function bA(){}function NA(){}NA.resetWarningCache=bA;var b5=function(){function t(r,i,s,o,a,l){if(l!==x5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:NA,resetWarningCache:bA};return n.PropTypes=n,n};xA.exports=b5();var N5=xA.exports;const U=Xa(N5);function L1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L1(Object(n),!0).forEach(function(r){hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fc(t){"@babel/helpers - typeof";return Fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fc(t)}function hs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function D5(t,e){if(t==null)return{};var n=O5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function em(t){return L5(t)||M5(t)||V5(t)||$5()}function L5(t){if(Array.isArray(t))return tm(t)}function M5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function V5(t,e){if(t){if(typeof t=="string")return tm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tm(t,e)}}function tm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,h=t.inverse,_=t.border,w=t.listItem,E=t.flip,v=t.size,m=t.rotation,g=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":_,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},hs(e,"fa-".concat(v),typeof v<"u"&&v!==null),hs(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),hs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),hs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(I){return T[I]?I:null}).filter(function(I){return I})}function F5(t){return t=t-0,t===t}function OA(t){return F5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var U5=["style"];function B5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function z5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=OA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[B5(i)]=s:e[i]=s,e},{})}function DA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return DA(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=z5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[OA(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=D5(n,U5);return i.attrs.style=vr(vr({},i.attrs.style),o),t.apply(void 0,[e.tag,vr(vr({},i.attrs),a)].concat(em(r)))}var LA=!1;try{LA=!0}catch{}function W5(){if(!LA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function M1(t){if(t&&Fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zp.icon)return Zp.icon(t);if(t===null)return null;if(t&&Fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function th(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?hs({},t,e):{}}var Pl=Me.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=M1(n),c=th("classes",[].concat(em(j5(t)),em(s.split(" ")))),d=th("transform",typeof t.transform=="string"?Zp.transform(t.transform):t.transform),f=th("mask",M1(r)),h=k5(u,vr(vr(vr(vr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return W5("Could not find icon",u),null;var _=h.abstract,w={ref:e};return Object.keys(t).forEach(function(E){Pl.defaultProps.hasOwnProperty(E)||(w[E]=t[E])}),H5(_[0],w)});Pl.displayName="FontAwesomeIcon";Pl.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};Pl.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var H5=DA.bind(null,Me.createElement),q5={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},G5=q5,MA={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(MA);var K5=MA.exports;const Q=Xa(K5),Q5=["as","disabled"];function Y5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function X5(t){return!t||t.trim()==="#"}function VA({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=f=>{if((e||t==="a"&&X5(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},d=f=>{f.key===" "&&(f.preventDefault(),c(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:d},u]}const J5=y.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=Y5(t,Q5);const[s,{tagName:o}]=VA(Object.assign({tagName:n,disabled:r},i));return p.jsx(o,Object.assign({},i,s,{ref:e}))});J5.displayName="Button";const $A=["xxl","xl","lg","md","sm","xs"],jA="xs",Xd=y.createContext({prefixes:{},breakpoints:$A,minBreakpoint:jA});function te(t,e){const{prefixes:n}=y.useContext(Xd);return t||n[e]||e}function jv(){const{breakpoints:t}=y.useContext(Xd);return t}function Fv(){const{minBreakpoint:t}=y.useContext(Xd);return t}function Z5(){const{dir:t}=y.useContext(Xd);return t==="rtl"}const FA=y.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...a},l)=>{const u=te(e,"btn"),[c,{tagName:d}]=VA({tagName:t,disabled:s,...a}),f=d;return p.jsx(f,{...c,...a,ref:l,disabled:s,className:Q(o,u,i&&"active",n&&`${u}-${n}`,r&&`${u}-${r}`,a.href&&s&&"disabled")})});FA.displayName="Button";const Vn=FA,eB="/assets/cafeLogo2-KXV22KX-.jpg";function tB(t){const[e,n]=y.useState(""),[r,i]=y.useState([]),s=y.useRef(null),o=Nc(Ws,"messages"),{channel:a,description:l}=t,u=async h=>{if(h.preventDefault(),e!=="")try{await MC(o,{text:e,time:jC(),user:Tt.currentUser.displayName,profileImg:Tt.currentUser.photoURL,channel:a}),n("")}catch(_){console.error(_)}};y.useEffect(()=>{console.log("Effect is running");const h=_v(o,xC("channel","==",a),bC("time","asc")),_=VC(h,w=>{let E=[];w.forEach(v=>{E.push({...v.data(),id:v.id})}),nA(E,r)||(console.log("Updating state with new messages"),i(E))},w=>{console.error("Error fetching messages:",w)});return()=>_()},[a,r]);async function c(h){if(confirm("Are you sure you want to delete this message?"))try{const _=cv(Ws,"messages",h);await LC(_)}catch(_){console.error(_)}}const d=h=>{n(h.target.value)};function f(h){console.log("handleKeyPress called"),h&&h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),u(h))}return y.useEffect(()=>{var h;(h=s.current)==null||h.scrollIntoView({behavior:"smooth"})},[r]),p.jsx("div",{className:"chatBackground",children:p.jsxs("div",{className:"ChatMainBody",children:[p.jsxs("div",{className:"chat-title",children:[p.jsx("img",{className:"chatLogo",src:eB}),p.jsx("h1",{children:"Cafecord"})]}),p.jsx("div",{children:p.jsx("p",{className:"description",children:l})}),r.map(h=>{if(!h||!h.time)return null;const _=h.time.seconds*1e3+h.time.nanoseconds/1e6,E=new Date(_).toLocaleString();return p.jsxs("div",{className:"messages sent",children:[p.jsxs("div",{className:"message-info",children:[p.jsx(Vn,{className:"mobile-deleteBtn",type:"Button",onClick:()=>c(h.id),children:"x"}),p.jsx("img",{src:h.profileImg,alt:"User Avatar"})," ",p.jsxs("div",{className:"message-structure",children:[p.jsxs("div",{className:"message-details",children:[p.jsx("p",{children:h.user})," ",p.jsxs("p",{className:"timestamp",children:["Sent ",E]}),p.jsx(Vn,{className:"deleteBtn",type:"Button",onClick:()=>c(h.id),children:"X"})]}),p.jsx("p",{children:h.text})]})]}),p.jsx("div",{ref:s})," "]},h.id)}),a?p.jsxs(p.Fragment,{children:[p.jsx("textarea",{className:"text-input",type:"text",placeholder:"Enter Message",onKeyDown:f,onChange:d,value:e}),p.jsx("button",{className:"sendBtn",onClick:u,children:"Send"})]}):"Click a channel"]})})}const nB={type:U.string,tooltip:U.bool,as:U.elementType},Uv=y.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>p.jsx(t,{...i,ref:s,className:Q(e,`${n}-${r?"tooltip":"feedback"}`)}));Uv.displayName="Feedback";Uv.propTypes=nB;const UA=Uv,rB=y.createContext({}),Kn=rB,BA=y.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=y.useContext(Kn);return e=te(e,"form-check-input"),p.jsx(o,{...a,ref:l,type:r,id:t||u,className:Q(n,e,i&&"is-valid",s&&"is-invalid")})});BA.displayName="FormCheckInput";const zA=BA,WA=y.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.useContext(Kn);return t=te(t,"form-check-label"),p.jsx("label",{...r,ref:i,htmlFor:n||s,className:Q(e,t)})});WA.displayName="FormCheckLabel";const nm=WA;function iB(t,e){return y.Children.toArray(t).some(n=>y.isValidElement(n)&&n.type===e)}const HA=y.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:d,style:f,title:h="",type:_="checkbox",label:w,children:E,as:v="input",...m},g)=>{e=te(e,"form-check"),n=te(n,"form-switch");const{controlId:T}=y.useContext(Kn),I=y.useMemo(()=>({controlId:t||T}),[T,t]),A=!E&&w!=null&&w!==!1||iB(E,nm),P=p.jsx(zA,{...m,type:_==="switch"?"checkbox":_,ref:g,isValid:o,isInvalid:a,disabled:s,as:v});return p.jsx(Kn.Provider,{value:I,children:p.jsx("div",{style:f,className:Q(d,A&&e,r&&`${e}-inline`,i&&`${e}-reverse`,_==="switch"&&n),children:E||p.jsxs(p.Fragment,{children:[P,A&&p.jsx(nm,{title:h,children:w}),u&&p.jsx(UA,{type:c,tooltip:l,children:u})]})})})});HA.displayName="FormCheck";const Uc=Object.assign(HA,{Input:zA,Label:nm}),qA=y.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...d},f)=>{const{controlId:h}=y.useContext(Kn);return t=te(t,"form-control"),p.jsx(c,{...d,type:e,size:r,ref:f,readOnly:u,id:i||h,className:Q(s,l?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,o&&"is-valid",a&&"is-invalid")})});qA.displayName="FormControl";const sB=Object.assign(qA,{Feedback:UA}),GA=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"form-floating"),p.jsx(n,{ref:i,className:Q(t,e),...r})));GA.displayName="FormFloating";const oB=GA,KA=y.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.useMemo(()=>({controlId:t}),[t]);return p.jsx(Kn.Provider,{value:i,children:p.jsx(e,{...n,ref:r})})});KA.displayName="FormGroup";const QA=KA;function aB({as:t,bsPrefix:e,className:n,...r}){e=te(e,"col");const i=jv(),s=Fv(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,d,f;typeof u=="object"&&u!=null?{span:c,offset:d,order:f}=u:c=u;const h=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${h}`:`${e}${h}-${c}`),f!=null&&a.push(`order${h}-${f}`),d!=null&&a.push(`offset${h}-${d}`)}),[{...r,className:Q(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const YA=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=aB(t);return p.jsx(i,{...r,ref:e,className:Q(n,!o.length&&s)})});YA.displayName="Col";const Vt=YA,XA=y.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:r=!1,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=y.useContext(Kn);e=te(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=Q(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?p.jsx(Vt,{ref:a,as:"label",className:c,htmlFor:s,...o}):p.jsx(t,{ref:a,className:c,htmlFor:s,...o})});XA.displayName="FormLabel";const lB=XA,JA=y.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.useContext(Kn);return t=te(t,"form-range"),p.jsx("input",{...r,type:"range",ref:i,className:Q(e,t),id:n||s})});JA.displayName="FormRange";const uB=JA,ZA=y.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=y.useContext(Kn);return t=te(t,"form-select"),p.jsx("select",{...a,size:n,ref:l,className:Q(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});ZA.displayName="FormSelect";const cB=ZA,ek=y.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=te(t,"form-text"),p.jsx(n,{...i,ref:s,className:Q(e,t,r&&"text-muted")})));ek.displayName="FormText";const dB=ek,tk=y.forwardRef((t,e)=>p.jsx(Uc,{...t,ref:e,type:"switch"}));tk.displayName="Switch";const fB=Object.assign(tk,{Input:Uc.Input,Label:Uc.Label}),nk=y.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=te(t,"form-floating"),p.jsxs(QA,{ref:o,className:Q(e,t),controlId:r,...s,children:[n,p.jsx("label",{htmlFor:r,children:i})]})));nk.displayName="FloatingLabel";const hB=nk,pB={_ref:U.any,validated:U.bool,as:U.elementType},Bv=y.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>p.jsx(n,{...r,ref:i,className:Q(t,e&&"was-validated")}));Bv.displayName="Form";Bv.propTypes=pB;const he=Object.assign(Bv,{Group:QA,Control:sB,Floating:oB,Check:Uc,Switch:fB,Label:lB,Text:dB,Range:uB,Select:cB,FloatingLabel:hB}),ho=!!(typeof window<"u"&&window.document&&window.document.createElement);var rm=!1,im=!1;try{var nh={get passive(){return rm=!0},get once(){return im=rm=!0}};ho&&(window.addEventListener("test",nh,nh),window.removeEventListener("test",nh,!0))}catch{}function rk(t,e,n,r){if(r&&typeof r!="boolean"&&!im){var i=r.once,s=r.capture,o=n;!im&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,rm?r:s)}t.addEventListener(e,n,r)}function Jd(t){return t&&t.ownerDocument||document}function sm(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}var mu;function V1(t){if((!mu&&mu!==0||t)&&ho){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),mu=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return mu}function mB(){return y.useState(null)}function gB(t){const e=y.useRef(t);return y.useEffect(()=>{e.current=t},[t]),e}function dn(t){const e=gB(t);return y.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const $1=t=>!t||typeof t=="function"?t:e=>{t.current=e};function vB(t,e){const n=$1(t),r=$1(e);return i=>{n&&n(i),r&&r(i)}}function Zd(t,e){return y.useMemo(()=>vB(t,e),[t,e])}function yB(t){const e=y.useRef(t);return e.current=t,e}function ik(t){const e=yB(t);y.useEffect(()=>()=>e.current(),[])}function _B(t){var e=Jd(t);return e&&e.defaultView||window}function wB(t,e){return _B(t).getComputedStyle(t,e)}var EB=/([A-Z])/g;function TB(t){return t.replace(EB,"-$1").toLowerCase()}var IB=/^ms-/;function gu(t){return TB(t).replace(IB,"-ms-")}var SB=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function CB(t){return!!(t&&SB.test(t))}function vi(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(gu(e))||wB(t).getPropertyValue(gu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(gu(i)):CB(i)?r+=i+"("+s+") ":n+=gu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}function Bc(t,e,n,r){return rk(t,e,n,r),function(){sm(t,e,n,r)}}function AB(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function kB(t){var e=vi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function RB(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||AB(t,"transitionend",!0)},e+n),s=Bc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function sk(t,e,n,r){n==null&&(n=kB(t)||0);var i=RB(t,n,r),s=Bc(t,"transitionend",e);return function(){i(),s()}}function rh(t){t===void 0&&(t=Jd());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function j1(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function PB(){const t=y.useRef(!0),e=y.useRef(()=>t.current);return y.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function xB(t){const e=y.useRef(null);return y.useEffect(()=>{e.current=t}),e.current}const bB="data-rr-ui-";function NB(t){return`${bB}${t}`}function OB(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const F1=NB("modal-open");class DB{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return OB(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(vi(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(F1,""),vi(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(F1),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const zv=DB,ok=y.createContext(ho?window:void 0);ok.Provider;function Wv(){return y.useContext(ok)}const ih=(t,e)=>ho?t==null?(e||Jd()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function LB(t,e){const n=Wv(),[r,i]=y.useState(()=>ih(t,n==null?void 0:n.document));if(!r){const s=ih(t);s&&i(s)}return y.useEffect(()=>{e&&r&&e(r)},[e,r]),y.useEffect(()=>{const s=ih(t);s!==r&&i(s)},[t,r]),r}const MB=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",VB=typeof document<"u",U1=VB||MB?y.useLayoutEffect:y.useEffect;function $B({children:t,in:e,onExited:n,mountOnEnter:r,unmountOnExit:i}){const s=y.useRef(null),o=y.useRef(e),a=dn(n);y.useEffect(()=>{e?o.current=!0:a(s.current)},[e,a]);const l=Zd(s,t.ref),u=y.cloneElement(t,{ref:l});return e?u:i||!o.current&&r?null:u}function jB({in:t,onTransition:e}){const n=y.useRef(null),r=y.useRef(!0),i=dn(e);return U1(()=>{if(!n.current)return;let s=!1;return i({in:t,element:n.current,initial:r.current,isStale:()=>s}),()=>{s=!0}},[t,i]),U1(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function FB({children:t,in:e,onExited:n,onEntered:r,transition:i}){const[s,o]=y.useState(!e);e&&s&&o(!1);const a=jB({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?r==null||r(u.element,u.initial):(o(!0),n==null||n(u.element)))};Promise.resolve(i(u)).then(c,d=>{throw u.in||o(!0),d})}}),l=Zd(a,t.ref);return s&&!e?null:y.cloneElement(t,{ref:l})}function B1(t,e,n){return t?p.jsx(t,Object.assign({},n)):e?p.jsx(FB,Object.assign({},n,{transition:e})):p.jsx($B,Object.assign({},n))}function UB(t){return t.code==="Escape"||t.keyCode===27}const BB=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function zB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let sh;function WB(t){return sh||(sh=new zv({ownerDocument:t==null?void 0:t.document})),sh}function HB(t){const e=Wv(),n=t||WB(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const ak=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,runTransition:f,backdropTransition:h,runBackdropTransition:_,autoFocus:w=!0,enforceFocus:E=!0,restoreFocus:v=!0,restoreFocusOptions:m,renderDialog:g,renderBackdrop:T=_e=>p.jsx("div",Object.assign({},_e)),manager:I,container:A,onShow:P,onHide:O=()=>{},onExit:D,onExited:R,onExiting:F,onEnter:ae,onEntering:He,onEntered:Kr}=t,po=zB(t,BB);const Mt=Wv(),on=LB(A),x=HB(I),W=PB(),G=xB(n),[ie,ce]=y.useState(!n),pt=y.useRef(null);y.useImperativeHandle(e,()=>x,[x]),ho&&!G&&n&&(pt.current=rh(Mt==null?void 0:Mt.document)),n&&ie&&ce(!1);const rt=dn(()=>{if(x.add(),ji.current=Bc(document,"keydown",ef),mo.current=Bc(document,"focus",()=>setTimeout(Gt),!0),P&&P(),w){var _e,bl;const vo=rh((_e=(bl=x.dialog)==null?void 0:bl.ownerDocument)!=null?_e:Mt==null?void 0:Mt.document);x.dialog&&vo&&!j1(x.dialog,vo)&&(pt.current=vo,x.dialog.focus())}}),Cn=dn(()=>{if(x.remove(),ji.current==null||ji.current(),mo.current==null||mo.current(),v){var _e;(_e=pt.current)==null||_e.focus==null||_e.focus(m),pt.current=null}});y.useEffect(()=>{!n||!on||rt()},[n,on,rt]),y.useEffect(()=>{ie&&Cn()},[ie,Cn]),ik(()=>{Cn()});const Gt=dn(()=>{if(!E||!W()||!x.isTopModal())return;const _e=rh(Mt==null?void 0:Mt.document);x.dialog&&_e&&!j1(x.dialog,_e)&&x.dialog.focus()}),An=dn(_e=>{_e.target===_e.currentTarget&&(u==null||u(_e),a===!0&&O())}),ef=dn(_e=>{l&&UB(_e)&&x.isTopModal()&&(c==null||c(_e),_e.defaultPrevented||O())}),mo=y.useRef(),ji=y.useRef(),xl=(..._e)=>{ce(!0),R==null||R(..._e)};if(!on)return null;const Fi=Object.assign({role:r,ref:x.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},po,{style:s,className:i,tabIndex:-1});let go=g?g(Fi):p.jsx("div",Object.assign({},Fi,{children:y.cloneElement(o,{role:"document"})}));go=B1(d,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:D,onExiting:F,onExited:xl,onEnter:ae,onEntering:He,onEntered:Kr,children:go});let Ui=null;return a&&(Ui=T({ref:x.setBackdropRef,onClick:An}),Ui=B1(h,_,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ui})),p.jsx(p.Fragment,{children:us.createPortal(p.jsxs(p.Fragment,{children:[Ui,go]}),on)})});ak.displayName="Modal";const qB=Object.assign(ak,{Manager:zv});function GB(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function KB(t,e){t.classList?t.classList.add(e):GB(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var QB=Function.prototype.bind.call(Function.prototype.call,[].slice);function Hi(t,e){return QB(t.querySelectorAll(e))}function z1(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function YB(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=z1(t.className,e):t.setAttribute("class",z1(t.className&&t.className.baseVal||"",e))}const qi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class XB extends zv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,vi(n,{[e]:`${parseFloat(vi(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],vi(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(KB(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Hi(n,qi.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Hi(n,qi.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Hi(n,qi.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();YB(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Hi(n,qi.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Hi(n,qi.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Hi(n,qi.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let oh;function JB(t){return oh||(oh=new XB(t)),oh}function ZB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function om(t,e){return om=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},om(t,e)}function ez(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,om(t,e)}const W1={disabled:!1},lk=Me.createContext(null);var tz=function(e){return e.scrollTop},Bo="unmounted",Zr="exited",ar="entering",ni="entered",am="exiting",er=function(t){ez(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Zr,s.appearStatus=ar):l=ni:r.unmountOnExit||r.mountOnEnter?l=Bo:l=Zr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Bo?{status:Zr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ar&&o!==ni&&(s=ar):(o===ar||o===ni)&&(s=am)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ar){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:us.findDOMNode(this);o&&tz(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Zr&&this.setState({status:Bo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[us.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!o||W1.disabled){this.safeSetState({status:ni},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:ar},function(){s.props.onEntering(u,c),s.onTransitionEnd(f,function(){s.safeSetState({status:ni},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:us.findDOMNode(this);if(!s||W1.disabled){this.safeSetState({status:Zr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:am},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Zr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:us.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Bo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=ZB(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Me.createElement(lk.Provider,{value:null},typeof o=="function"?o(i,a):Me.cloneElement(Me.Children.only(o),a))},e}(Me.Component);er.contextType=lk;er.propTypes={};function Gi(){}er.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Gi,onEntering:Gi,onEntered:Gi,onExit:Gi,onExiting:Gi,onExited:Gi};er.UNMOUNTED=Bo;er.EXITED=Zr;er.ENTERING=ar;er.ENTERED=ni;er.EXITING=am;const nz=er;function H1(t,e){const n=vi(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function rz(t,e){const n=H1(t,"transitionDuration"),r=H1(t,"transitionDelay"),i=sk(t,s=>{s.target===t&&(i(),e(s))},n+r)}function iz(t){t.offsetHeight}function sz(t){return t&&"setState"in t?us.findDOMNode(t):t??null}const oz=Me.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const d=y.useRef(null),f=Zd(d,l),h=A=>{f(sz(A))},_=A=>P=>{A&&d.current&&A(d.current,P)},w=y.useCallback(_(t),[t]),E=y.useCallback(_(e),[e]),v=y.useCallback(_(n),[n]),m=y.useCallback(_(r),[r]),g=y.useCallback(_(i),[i]),T=y.useCallback(_(s),[s]),I=y.useCallback(_(o),[o]);return p.jsx(nz,{ref:c,...u,onEnter:w,onEntered:v,onEntering:E,onExit:m,onExited:T,onExiting:g,addEndListener:I,nodeRef:d,children:typeof a=="function"?(A,P)=>a(A,{...P,ref:h}):Me.cloneElement(a,{ref:h})})}),az=oz,lz={[ar]:"show",[ni]:"show"},uk=y.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:r,...i},s)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},a=y.useCallback((l,u)=>{iz(l),r==null||r(l,u)},[r]);return p.jsx(az,{ref:s,addEndListener:rz,...o,onEnter:a,childRef:e.ref,children:(l,u)=>y.cloneElement(e,{...u,className:Q("fade",t,e.props.className,lz[l],n[l])})})});uk.displayName="Fade";const ck=uk,dk=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"modal-body"),p.jsx(n,{ref:i,className:Q(t,e),...r})));dk.displayName="ModalBody";const uz=dk,cz=y.createContext({onHide(){}}),fk=cz,hk=y.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},u)=>{t=te(t,"modal");const c=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return p.jsx("div",{...l,ref:u,className:Q(c,e,i&&`${t}-${i}`,r&&`${c}-centered`,a&&`${c}-scrollable`,s&&d),children:p.jsx("div",{className:Q(`${t}-content`,n),children:o})})});hk.displayName="ModalDialog";const pk=hk,mk=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"modal-footer"),p.jsx(n,{ref:i,className:Q(t,e),...r})));mk.displayName="ModalFooter";const dz=mk,fz={"aria-label":U.string,onClick:U.func,variant:U.oneOf(["white"])},Hv=y.forwardRef(({className:t,variant:e,"aria-label":n="Close",...r},i)=>p.jsx("button",{ref:i,type:"button",className:Q("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...r}));Hv.displayName="CloseButton";Hv.propTypes=fz;const hz=Hv,pz=y.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:r,children:i,...s},o)=>{const a=y.useContext(fk),l=dn(()=>{a==null||a.onHide(),r==null||r()});return p.jsxs("div",{ref:o,...s,children:[i,n&&p.jsx(hz,{"aria-label":t,variant:e,onClick:l})]})}),mz=pz,gk=y.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:r=!1,...i},s)=>(t=te(t,"modal-header"),p.jsx(mz,{ref:s,...i,className:Q(e,t),closeLabel:n,closeButton:r})));gk.displayName="ModalHeader";const gz=gk,qv=t=>y.forwardRef((e,n)=>p.jsx("div",{...e,ref:n,className:Q(e.className,t)})),vz=qv("h4"),vk=y.forwardRef(({className:t,bsPrefix:e,as:n=vz,...r},i)=>(e=te(e,"modal-title"),p.jsx(n,{ref:i,className:Q(t,e),...r})));vk.displayName="ModalTitle";const yz=vk;function _z(t){return p.jsx(ck,{...t,timeout:null})}function wz(t){return p.jsx(ck,{...t,timeout:null})}const yk=y.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o=pk,"data-bs-theme":a,"aria-labelledby":l,"aria-describedby":u,"aria-label":c,show:d=!1,animation:f=!0,backdrop:h=!0,keyboard:_=!0,onEscapeKeyDown:w,onShow:E,onHide:v,container:m,autoFocus:g=!0,enforceFocus:T=!0,restoreFocus:I=!0,restoreFocusOptions:A,onEntered:P,onExit:O,onExiting:D,onEnter:R,onEntering:F,onExited:ae,backdropClassName:He,manager:Kr,...po},Mt)=>{const[on,x]=y.useState({}),[W,G]=y.useState(!1),ie=y.useRef(!1),ce=y.useRef(!1),pt=y.useRef(null),[rt,Cn]=mB(),Gt=Zd(Mt,Cn),An=dn(v),ef=Z5();t=te(t,"modal");const mo=y.useMemo(()=>({onHide:An}),[An]);function ji(){return Kr||JB({isRTL:ef})}function xl(re){if(!ho)return;const Bi=ji().getScrollbarWidth()>0,Kv=re.scrollHeight>Jd(re).documentElement.clientHeight;x({paddingRight:Bi&&!Kv?V1():void 0,paddingLeft:!Bi&&Kv?V1():void 0})}const Fi=dn(()=>{rt&&xl(rt.dialog)});ik(()=>{sm(window,"resize",Fi),pt.current==null||pt.current()});const go=()=>{ie.current=!0},Ui=re=>{ie.current&&rt&&re.target===rt.dialog&&(ce.current=!0),ie.current=!1},_e=()=>{G(!0),pt.current=sk(rt.dialog,()=>{G(!1)})},bl=re=>{re.target===re.currentTarget&&_e()},vo=re=>{if(h==="static"){bl(re);return}if(ce.current||re.target!==re.currentTarget){ce.current=!1;return}v==null||v()},Wk=re=>{_?w==null||w(re):(re.preventDefault(),h==="static"&&_e())},Hk=(re,Bi)=>{re&&xl(re),R==null||R(re,Bi)},qk=re=>{pt.current==null||pt.current(),O==null||O(re)},Gk=(re,Bi)=>{F==null||F(re,Bi),rk(window,"resize",Fi)},Kk=re=>{re&&(re.style.display=""),ae==null||ae(re),sm(window,"resize",Fi)},Qk=y.useCallback(re=>p.jsx("div",{...re,className:Q(`${t}-backdrop`,He,!f&&"show")}),[f,He,t]),Gv={...n,...on};Gv.display="block";const Yk=re=>p.jsx("div",{role:"dialog",...re,style:Gv,className:Q(e,t,W&&`${t}-static`,!f&&"show"),onClick:h?vo:void 0,onMouseUp:Ui,"data-bs-theme":a,"aria-label":c,"aria-labelledby":l,"aria-describedby":u,children:p.jsx(o,{...po,onMouseDown:go,className:r,contentClassName:i,children:s})});return p.jsx(fk.Provider,{value:mo,children:p.jsx(qB,{show:d,ref:Gt,backdrop:h,container:m,keyboard:!0,autoFocus:g,enforceFocus:T,restoreFocus:I,restoreFocusOptions:A,onEscapeKeyDown:Wk,onShow:E,onHide:v,onEnter:Hk,onEntering:Gk,onEntered:P,onExit:qk,onExiting:D,onExited:Kk,manager:ji(),transition:f?_z:void 0,backdropTransition:f?wz:void 0,renderBackdrop:Qk,renderDialog:Yk})})});yk.displayName="Modal";const fn=Object.assign(yk,{Body:uz,Header:gz,Title:yz,Footer:dz,Dialog:pk,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),_k="/assets/Beeo-o-bxXijwan.jpg",wk="/assets/cafeart-7qRcN7ds.jpg",Ek="/assets/cafeart2-QIUO_SWr.jpg",Tk="/assets/computerDog-zlXkdYZZ.jpg",Ik="/assets/coffeeMaker2-mU4K85EC.jpg",Sk="/assets/coffeeBrewers2-PiTbJ3pu.jpg",Ez=()=>{const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(),[o,a]=y.useState(!1),[l,u]=y.useState(""),[c,d]=y.useState(""),[f,h]=y.useState(null),[_,w]=y.useState({avatar:"",userName:""}),E=sl(),v=Nc(Ws,"channels");y.useEffect(()=>{cp(Tt,D=>{console.log(D||"not logged in")})},[]);const m=()=>{a(!1),d(""),u("")},g=()=>a(!0),T=[{url:_k,alt:"social-media-cafe"},{url:wk,alt:"two-cafe-friends"},{url:Ek,alt:"lady-holding-coffee"},{url:Tk,alt:"coding-dog"},{url:Ik,alt:"pink-cafe-girl"},{url:Sk,alt:"boy-walking-with-coffee"}],I=async()=>{await ZT(Tt.currentUser,{displayName:l,photoURL:c}),w({..._,userName:l,avatar:c}),console.log("Name",Tt.currentUser.displayName),console.log("avatar: ",Tt.currentUser.photoURL),a(!1),d(""),u("")};y.useEffect(()=>{console.log("triggered");const D=_v(v,bC("time","asc")),R=VC(D,F=>{let ae=[];F.forEach(He=>{ae.push({...He.data(),id:He.id}),ae.length>0&&(r(ae[0]),h(ae[0].id),e(ae[0].description))}),nA(ae,i)||s(ae)},F=>{console.error("Error fetching messages:",F)});return cp(Tt,F=>{F?(console.log(F),w({avatar:F.photoURL,userName:F.displayName})):console.error("error")}),()=>R()},[i]);const A=D=>{console.log(D),r(D.id),h(D.id),e(D.description)},P=async D=>{if(confirm("Are you sure you want to delete this message?"))try{const R=cv(Ws,"channels",D);await LC(R),window.location.reload()}catch(R){console.error(R)}},O=async()=>{await rO(Tt),E("/")};return p.jsxs("div",{className:"smBackground",children:[p.jsxs("div",{className:"side-menu",children:[p.jsxs("div",{className:"avatar-container",children:[p.jsx("div",{className:"avatar",children:p.jsx("img",{src:_.avatar,alt:"User Avatar"})}),p.jsx("p",{className:"username",children:_.userName})]}),p.jsxs("ul",{className:"channel-list",children:[p.jsx("li",{className:"channel-heading",children:"Channel"}),i?i.map(D=>p.jsxs("li",{onClick:()=>A(D),className:D.id===f?"active-channel":"",id:"channels",children:[D.title,p.jsx(Pl,{className:"trashIcon",icon:G5,onClick:()=>P(D.id)})]},D.id)):p.jsx("li",{children:"No Channels"}),p.jsx("hr",{}),p.jsx("li",{className:"createGroup",children:p.jsx(Aa,{to:"/newgroup",children:"Create Group"})}),p.jsx("li",{children:p.jsx(Aa,{to:"/Products",children:"Products"})}),p.jsxs("li",{children:[p.jsx("button",{className:"editBtn",onClick:g,children:"Edit Profile"}),p.jsxs(fn,{show:o,onHide:m,children:[p.jsx(fn.Header,{closeButton:!0,children:p.jsx(fn.Title,{className:"modal-title",children:"Edit Profile"})}),p.jsx(fn.Body,{className:"formBackground",children:p.jsxs(he,{children:[p.jsxs(he.Group,{className:"mb-3",controlId:"userForm.ControlInput1",children:[p.jsx(he.Label,{className:"formLabel",children:"Change Username"}),p.jsx(he.Control,{type:"text",placeholder:"New username...",autoFocus:!0,onChange:D=>u(D.target.value)})]}),p.jsx("p",{className:"selectionTitle",children:"Select Avatar"}),p.jsx("div",{className:"avatar-form",children:p.jsx("div",{className:"mb-3 formBody",children:T.map((D,R)=>p.jsx(he.Check,{id:`inline-radio-${R+1}`,type:"radio",name:"group1",inline:!0,value:D.url,label:p.jsx("img",{src:D.url,alt:D.alt,className:"avatar-option"}),onClick:()=>d(D.url)},D.url))},"default-radio")})]})}),p.jsxs(fn.Footer,{className:"modalFooter",children:[p.jsx(Vn,{variant:"avatar-close",onClick:m,children:"Close"}),p.jsx(Vn,{variant:"avatar-save",onClick:I,children:"Save Changes"})]})]})]}),p.jsx("li",{onClick:O,children:"Log Out"})]})]}),p.jsx(tB,{channel:n,description:t,className:"smChat"})]})};function Tz(){const[t,e]=y.useState(!1),n=()=>e(!1),r=()=>e(!0);return p.jsxs("div",{className:"calChatBody",children:[p.jsx("div",{children:p.jsx(Aa,{to:"/Chat",children:p.jsx(Vn,{children:"Chat"})})}),p.jsx("h3",{children:"Chat area"}),p.jsx(Vn,{variant:"open-modal",onClick:r,children:"Edit Profile"}),p.jsxs(fn,{show:t,onHide:n,children:[p.jsx(fn.Header,{closeButton:!0,children:p.jsx(fn.Title,{className:"modal-title",children:"Edit Profile"})}),p.jsx(fn.Body,{className:"formBackground",children:p.jsxs(he,{children:[p.jsxs(he.Group,{className:"mb-3",controlId:"userForm.ControlInput1",children:[p.jsx(he.Label,{className:"formLabel",children:"Change Username"}),p.jsx(he.Control,{type:"text",placeholder:"New username...",autoFocus:!0})]}),p.jsx("p",{className:"selectionTitle",children:"Select Avatar"}),p.jsx("div",{className:"avatar-form",children:["radio"].map(i=>p.jsxs("div",{className:"mb-3 formBody",children:[p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:_k,alt:"social-media-cafe",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-1`,onClick:s=>{console.log(s.target.checked)}}),p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:wk,alt:"two-cafe-friends",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-2`}),p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:Ek,alt:"lady-holding-coffee",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-3`}),p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:Tk,alt:"coding-dog",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-4`}),p.jsx("label",{children:p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:Ik,alt:"pink-cafe-girl",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-7`})}),p.jsx(he.Check,{inline:!0,label:p.jsx("img",{src:Sk,alt:"boy-walking-with-coffee",className:"avatar-option"}),name:"group1",type:i,id:`inline-${i}-8`})]},`inline-${i}`))})]})}),p.jsx(fn.Footer,{className:"modalFooter",children:p.jsx(Vn,{variant:"avatar-close",onClick:n,children:"Close"})})]})]})}const Iz="_img_wc1bq_2",Sz="_rightContainer_wc1bq_9",Cz="_rightInnerContainer_wc1bq_15",Az="_emailInput_wc1bq_23",kz="_passwordInput_wc1bq_37",Rz="_passwordVisibility_wc1bq_50",Pz="_loginBtn_wc1bq_58",xz="_disabledLoginBtn_wc1bq_77",bz="_divider_wc1bq_85",Nz="_googleBtn_wc1bq_118",Oz="_noAccountText_wc1bq_140",Dz="_signupAnchor_wc1bq_145",wt={img:Iz,rightContainer:Sz,rightInnerContainer:Cz,emailInput:Az,passwordInput:kz,passwordVisibility:Rz,loginBtn:Pz,disabledLoginBtn:xz,divider:bz,googleBtn:Nz,noAccountText:Oz,signupAnchor:Dz},Ck=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"card-body"),p.jsx(n,{ref:i,className:Q(t,e),...r})));Ck.displayName="CardBody";const Ak=Ck,kk=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"card-footer"),p.jsx(n,{ref:i,className:Q(t,e),...r})));kk.displayName="CardFooter";const Lz=kk,Rk=y.createContext(null);Rk.displayName="CardHeaderContext";const Mz=Rk,Pk=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=te(t,"card-header"),o=y.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return p.jsx(Mz.Provider,{value:o,children:p.jsx(n,{ref:i,...r,className:Q(e,s)})})});Pk.displayName="CardHeader";const Vz=Pk,xk=y.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=te(t,"card-img");return p.jsx(r,{ref:s,className:Q(n?`${o}-${n}`:o,e),...i})});xk.displayName="CardImg";const $z=xk,bk=y.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=te(e,"card-img-overlay"),p.jsx(n,{ref:i,className:Q(t,e),...r})));bk.displayName="CardImgOverlay";const jz=bk,Nk=y.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=te(e,"card-link"),p.jsx(n,{ref:i,className:Q(t,e),...r})));Nk.displayName="CardLink";const Fz=Nk,Uz=qv("h6"),Ok=y.forwardRef(({className:t,bsPrefix:e,as:n=Uz,...r},i)=>(e=te(e,"card-subtitle"),p.jsx(n,{ref:i,className:Q(t,e),...r})));Ok.displayName="CardSubtitle";const Bz=Ok,Dk=y.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=te(e,"card-text"),p.jsx(n,{ref:i,className:Q(t,e),...r})));Dk.displayName="CardText";const zz=Dk,Wz=qv("h5"),Lk=y.forwardRef(({className:t,bsPrefix:e,as:n=Wz,...r},i)=>(e=te(e,"card-title"),p.jsx(n,{ref:i,className:Q(t,e),...r})));Lk.displayName="CardTitle";const Hz=Lk,Mk=y.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:o,as:a="div",...l},u)=>{const c=te(t,"card");return p.jsx(a,{ref:u,...l,className:Q(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?p.jsx(Ak,{children:o}):o})});Mk.displayName="Card";const qz=Object.assign(Mk,{Img:$z,Title:Hz,Subtitle:Bz,Body:Ak,Link:Fz,Text:zz,Header:Vz,Footer:Lz,ImgOverlay:jz}),Vk=y.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const o=te(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return p.jsx(n,{ref:s,...i,className:Q(r,e?`${o}${a}`:o)})});Vk.displayName="Container";const $k=Vk,jk=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=te(t,"row"),o=jv(),a=Fv(),l=`${s}-cols`,u=[];return o.forEach(c=>{const d=r[c];delete r[c];let f;d!=null&&typeof d=="object"?{cols:f}=d:f=d;const h=c!==a?`-${c}`:"";f!=null&&u.push(`${l}${h}-${f}`)}),p.jsx(n,{ref:i,...r,className:Q(e,s,...u)})});jk.displayName="Row";const ei=jk;function Gz(t,e=$A,n=jA){const r=[];return Object.entries(t).forEach(([i,s])=>{s!=null&&(typeof s=="object"?e.forEach(o=>{const a=s[o];if(a!=null){const l=o!==n?`-${o}`:"";r.push(`${i}${l}-${a}`)}}):r.push(`${i}-${s}`))}),r}const Fk=y.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:r,gap:i,...s},o)=>{e=te(e,r==="horizontal"?"hstack":"vstack");const a=jv(),l=Fv();return p.jsx(t,{...s,ref:o,className:Q(n,e,...Gz({gap:i},a,l))})});Fk.displayName="Stack";const Kz=Fk,Qz="/assets/profile-image-qx_a29Js.png";function Yz(){const[t,e]=y.useState(""),[n,r]=y.useState(""),[i,s]=y.useState(""),[o,a]=y.useState(!1),[l,u]=y.useState(!1),[c,d]=y.useState(!1),[f,h]=y.useState(!1),[_,w]=y.useState([]),E=sl(),v=async R=>{if(R.preventDefault(),w([]),t.length>0&&!c&&w(F=>[...F,"Email is invalid"]),t===""&&w(F=>[...F,"Email can't be blank"]),(n===""||i==="")&&w(F=>[...F,"Password can't be blank"]),n!==i&&w(F=>[...F,"Passwords don't match"]),t.length>0&&n.length>0&&i.length>0&&c&&n===i)try{h(!0);const ae=(await JN(Tt,t,n)).user,He=D();await ZT(Tt.currentUser,{displayName:He,photoURL:Qz}),E("/Chat")}catch(F){switch(console.error(F),F.code){case"auth/email-already-in-use":w(ae=>[...ae,"Email already in use."]);break;case"auth/weak-password":w(ae=>[...ae,"Password is too weak. Choose a stronger password."]);break;default:w(ae=>[...ae,"Something went wrong. Try again."])}}finally{h(!1)}},m=async()=>{try{await cI(Tt,UC),E("/chat")}catch(R){console.error(R.message),w(F=>[...F,"Something went wrong. Try again."])}};function g(R){var F=/\S+@\S+\.\S+/;return F.test(R)}function T(R){R.length>0?g(R)?d(!0):d(!1):d(!0),e(R)}function I(R){r(R)}function A(R){s(R)}const P=()=>{a(!o)},O=()=>{u(!l)};function D(){const R="0123456789abcdefghijklmnopqrstuvwxyz";let F="Cafevibes#";for(let ae=0;ae<4;ae++){const He=Math.floor(Math.random()*R.length);F+=R[He]}return F}return y.useEffect(()=>{cp(Tt,R=>{R?(console.log(R),E("/chat")):console.log("No user signed in")})},[]),p.jsx($k,{className:"h-screen",fluid:!0,children:p.jsxs(ei,{className:"h-100",children:[p.jsx(Vt,{xs:12,md:6,className:`${wt.img} h-100`}),p.jsx(Vt,{md:6,className:wt.rightContainer,children:p.jsxs(Vt,{className:wt.rightInnerContainer,children:[p.jsx("h1",{className:"mb-4",children:"Let's get started,"}),_.length>0&&p.jsx("ul",{children:_.map((R,F)=>p.jsx("li",{className:"text-danger my-1",children:R},F))}),p.jsx("label",{htmlFor:"signupEmail"}),p.jsx("input",{id:"signupEmail",className:wt.emailInput,onChange:R=>{T(R.target.value)},type:"text",name:"signupEmail",placeholder:"email",required:!0}),p.jsxs("div",{className:"mb-3 position-relative",children:[p.jsx("label",{htmlFor:"signupPassword"}),p.jsx("input",{id:"signupPassword",className:`${wt.passwordInput} position-relative`,onChange:R=>{I(R.target.value)},type:o?"text":"password",name:"signupPassword",placeholder:"password",required:!0}),p.jsx("span",{className:`${wt.passwordVisibility}`,onClick:P,children:o?p.jsx("i",{className:"bi bi-eye-fill"}):p.jsx("i",{className:"bi bi-eye-slash"})})]}),p.jsxs("div",{className:"mb-3 position-relative",children:[p.jsx("label",{htmlFor:"confirmSignupPassword"}),p.jsx("input",{id:"confirmSignupPassword",className:`${wt.passwordInput} position-relative`,onChange:R=>{A(R.target.value)},type:l?"text":"password",name:"signupConfirmPassword",placeholder:"confirm password",required:!0}),p.jsx("span",{className:`${wt.passwordVisibility}`,onClick:O,children:l?p.jsx("i",{className:"bi bi-eye-fill"}):p.jsx("i",{className:"bi bi-eye-slash"})})]}),p.jsx("button",{className:`${wt.loginBtn} 
                ${f?wt.disabledLoginBtn:""} w-100`,onClick:v,disabled:f,children:f?p.jsx("div",{className:"spinner-border",style:{width:"1rem",height:"1rem",borderWidth:".2em"},role:"status",children:p.jsx("span",{className:"visually-hidden",children:"Loading..."})}):"Create Account"}),p.jsx("p",{className:`${wt.divider}`,children:"or continue with"}),p.jsxs("button",{type:"button",className:`${wt.googleBtn} d-flex justify-content-center gap-2 align-items-center`,onClick:m,children:[p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",role:"img",children:[p.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.64 9.20419C17.64 8.56601 17.5827 7.95237 17.4764 7.36328H9V10.8446H13.8436C13.635 11.9696 13.0009 12.9228 12.0477 13.561V15.8192H14.9564C16.6582 14.2524 17.64 11.9451 17.64 9.20419Z",fill:"#4285F4"}),p.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z",fill:"#34A853"}),p.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40664 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z",fill:"#FBBC05"}),p.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z",fill:"#EA4335"})]}),"Google"]}),p.jsxs("p",{className:`${wt.noAccountText} text-center`,children:["Already have an account?"," ",p.jsxs("a",{href:"/",className:`${wt.signupAnchor}`,children:[" ","Login"]})]})]})})]})})}const Xz="_body_d8bld_5",Jz="_container_d8bld_18",Zz="_imageContainer_d8bld_27",e8="_formContainer_d8bld_42",t8="_heading_d8bld_50",n8="_srOnly_d8bld_61",r8="_form_d8bld_42",i8="_inputEl_d8bld_71",s8="_inputBlur_d8bld_85",o8="_usernameInput_d8bld_88",a8="_groupMembersContainer_d8bld_113",l8="_profileImgContainer_d8bld_126",u8="_profileImage_d8bld_133",c8="_deleteIcon_d8bld_138",d8="_addIcon_d8bld_158",qe={body:Xz,container:Jz,imageContainer:Zz,formContainer:e8,heading:t8,srOnly:n8,form:r8,inputEl:i8,inputBlur:s8,usernameInput:o8,groupMembersContainer:a8,profileImgContainer:l8,profileImage:u8,deleteIcon:c8,addIcon:d8},f8="/assets/beautiful-coffee-image-QAa1FeWG.png";let vu;const h8=new Uint8Array(16);function p8(){if(!vu&&(vu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vu(h8)}const Ge=[];for(let t=0;t<256;++t)Ge.push((t+256).toString(16).slice(1));function m8(t,e=0){return Ge[t[e+0]]+Ge[t[e+1]]+Ge[t[e+2]]+Ge[t[e+3]]+"-"+Ge[t[e+4]]+Ge[t[e+5]]+"-"+Ge[t[e+6]]+Ge[t[e+7]]+"-"+Ge[t[e+8]]+Ge[t[e+9]]+"-"+Ge[t[e+10]]+Ge[t[e+11]]+Ge[t[e+12]]+Ge[t[e+13]]+Ge[t[e+14]]+Ge[t[e+15]]}const g8=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),q1={randomUUID:g8};function yu(t,e,n){if(q1.randomUUID&&!e&&!t)return q1.randomUUID();t=t||{};const r=t.random||(t.rng||p8)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return m8(r)}var Uk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G1=Me.createContext&&Me.createContext(Uk),v8=["attr","size","title"];function y8(t,e){if(t==null)return{};var n=_8(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _8(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zc.apply(this,arguments)}function K1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Wc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K1(Object(n),!0).forEach(function(r){w8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function w8(t,e,n){return e=E8(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E8(t){var e=T8(t,"string");return typeof e=="symbol"?e:String(e)}function T8(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Bk(t){return t&&t.map((e,n)=>Me.createElement(e.tag,Wc({key:n},e.attr),Bk(e.child)))}function zk(t){return e=>Me.createElement(I8,zc({attr:Wc({},t.attr)},e),Bk(t.child))}function I8(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=y8(t,v8),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Me.createElement("svg",zc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Wc(Wc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Me.createElement("title",null,s),t.children)};return G1!==void 0?Me.createElement(G1.Consumer,null,n=>e(n)):e(Uk)}function S8(t){return zk({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"},child:[]}]})(t)}function C8(t){return zk({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"},child:[]}]})(t)}const A8=()=>{const[t,e]=y.useState({groupName:"",description:"",members:[]}),[n,r]=y.useState(null),i=sl(),s=g=>{let{name:T,value:I}=g.target;e(A=>({...A,[T]:I}))},o=y.useRef(null),a=y.useRef(null),l=y.useRef(null),u=y.useRef(null),c=y.useRef(null),d=async g=>{var T;if(g!=="")try{if((T=t==null?void 0:t.members)==null?void 0:T.some(R=>R.username===g))return alert(`Duplicate username! ${g} is already a member`),"duplicate";const A=Nc(Ws,"users"),P=_v(A,xC("username","==",g)),O=await y4(P);let D;return O.forEach(R=>{console.log(R.id," => ",R.data()),R.data(),D=R.data()}),D}catch(I){console.log("Error getting documents: ",I),r(I.message)}},f=async()=>{let g=o.current.value;if(!g)return;g=g[0].toUpperCase()+g.substr(1),o.current.value="";const T=await d(g);if(T!=="duplicate")if(T)e(I=>({...I,members:[...I.members,T]}));else{console.error("Username not found!"),alert("Unauthenticated user!");return}},h=async g=>{const T=Nc(Ws,"channels");if(g.groupName==="")return;const I=g.members.map(A=>A.id);try{await MC(T,{title:g.groupName,description:g.description,time:jC(),members:I})}catch(A){console.error(A),r(A.message)}},_=g=>{if(g.preventDefault(),!/\S+/.test(g.currentTarget.name.value)){g.stopPropagation(),alert("Group name is required!");return}const I={id:yu(),...t};h(I),i("/Chat")},w=g=>{const T=t.members.filter(I=>I.id!==g);e(I=>({...I,members:T}))},E=()=>t.members.map(g=>p.jsxs("div",{children:[p.jsxs("div",{className:qe.profileImgContainer,onClick:()=>w(g.id),children:[p.jsx("img",{className:qe.profileImage,src:g.imageUrl,alt:"profile image",width:"65px",height:"65px"}),p.jsx(S8,{className:qe.deleteIcon,size:34})]}),p.jsx("div",{className:"fw-bold",children:g.username})]},g.id)),v=g=>{if(g.keyCode==13){if(g.preventDefault(),g.target.name==="groupName"&&g.target.value)l.current.focus();else if(g.target.name==="description")o.current.focus();else if(g.target.name==="username")u.current.focus();else if(g.target.id==="add-member")f(),c.current.focus();else if(g.target.id==="new-group")return _(g),!0}else return!0},m=g=>{g.target.classList.add("input-blur")};return p.jsx($k,{fluid:!0,className:qe.body,children:n?p.jsx("h2",{children:n}):p.jsxs(ei,{className:qe.container+" m-0",children:[p.jsxs(Vt,{className:qe.formContainer,sm:12,md:6,lg:6,children:[p.jsx("h2",{className:qe.heading,children:"Create a Group"}),p.jsxs(he,{id:"new-group",className:"d-md-flex flex-md-column justify-content-md-center mx-2 "+qe.form,onSubmit:_,onKeyDown:g=>v(g),children:[p.jsx(ei,{className:"mx-0",children:p.jsx(Vt,{className:"px-0",children:p.jsxs(he.Group,{controlId:yu()+"-groupName",children:[p.jsx(he.Label,{className:qe.srOnly,children:"Group Name"}),p.jsx(he.Control,{className:qe.inputEl,required:!0,type:"text",placeholder:"Group Name",name:"groupName",value:t.groupName,onChange:s,ref:a,autoFocus:!0,onBlur:m})]})})}),p.jsx(ei,{className:"mx-0",children:p.jsx(Vt,{className:"px-0",children:p.jsxs(he.Group,{controlId:yu()+"-description",children:[p.jsx(he.Label,{className:qe.srOnly,children:"Group Description"}),p.jsx(he.Control,{className:qe.inputEl,type:"text",placeholder:"Group Description",name:"description",value:t.description,onChange:s,ref:l})]})})}),p.jsxs(ei,{className:qe.usernameInput+" mx-0",children:[p.jsx(Vt,{className:"px-0",xs:8,children:p.jsxs(he.Group,{controlId:yu()+"-username",children:[p.jsx(he.Label,{className:qe.srOnly,children:"Username"}),p.jsx(he.Control,{className:qe.inputEl,type:"text",placeholder:"Username",name:"username",autoComplete:"true",ref:o})]})}),p.jsx(Vt,{className:"px-0 ms-1 ",children:p.jsx(Vn,{ref:u,type:"button",id:"add-member",variant:"warning",onClick:f,children:p.jsx(C8,{size:25})})})]}),p.jsx(ei,{children:p.jsx(Vt,{children:p.jsx(qz,{className:qe.groupMembersContainer,children:p.jsx(Kz,{direction:"horizontal",gap:3,className:"w-100 d-flex",children:E()})})})}),p.jsx(ei,{children:p.jsx(Vt,{xs:{span:10,offset:1},children:p.jsx(Vn,{ref:c,className:"my-4",type:"submit",variant:"warning",id:"new-group",children:"Create Group"})})})]})]}),p.jsx(Vt,{sm:12,md:{span:6,order:"first"},lg:{span:6,order:"first"},className:qe.imageContainer+" px-0",children:p.jsx("img",{src:f8,alt:"image showing varieties of coffee"})})]})})},k8=Me.createContext(),R8="/assets/Cafecord-product-AVfywhQ-.png",P8="/assets/Cafecord-product2-_IEE9gQu.png",x8="/assets/Cafecord-product3-Tw5S6Arf.png",b8="/assets/toGoPacks-HIdF2cSx.png";function N8(){return p.jsxs("div",{className:"prodBackground",children:[p.jsx("div",{className:"productsTitle",children:p.jsx("h1",{children:"Try some coffee from our Sponsors!"})}),p.jsxs("div",{className:"products",children:[p.jsx("img",{src:R8}),p.jsx("h2",{children:"Up Coffee"}),p.jsx("p",{children:"Made from a small batch roaster, Up coffee will be sure to put a pep to your step!"}),p.jsx("p",{children:"$25 USD"}),p.jsx("img",{src:P8}),p.jsx("h2",{children:"COFFEE"}),p.jsx("p",{children:"From the makers of Up coffee, its COFFEE coffee, with subtle notes of coffee, COFFEE will satisfy any coffee lover!"}),p.jsx("p",{children:"$25 USD"}),p.jsx("img",{src:x8}),p.jsx("h2",{children:"Limited Edition: Azul Seca coffee"}),p.jsx("p",{children:"Hidden high in the Azul mountains this coffee is grown, and roasted to perfection! The taste alone will transport you to the peak of coffee eurphoria!"}),p.jsx("p",{children:"$30 USD"}),p.jsx("img",{src:b8}),p.jsx("h2",{children:"COFFEE To Go"}),p.jsx("p",{children:"The masses asked for it and we delivered! COFFEE to go packets are here! Now you can have the incredibly satisfying COFFEE wherever you are!"}),p.jsx("p",{children:"$40 USD pack of 24"})]}),p.jsx("div",{className:"productsLinkDecor",children:p.jsx("h2",{children:p.jsx(Aa,{to:"/Chat",className:"productsLink",children:"Back to Chat"})})})]})}function O8(){const t=il(),[e,n]=y.useState(()=>localStorage.getItem("selectedAvatar")||"/Avatars/Beeo-o.jpg");return p.jsx(k8.Provider,{value:{selectedAvatar:e,setSelectedAvatar:n},children:p.jsxs(fb,{location:t,children:[p.jsx(ir,{index:!0,element:p.jsx(V0,{})}),p.jsx(ir,{path:"/Login",element:p.jsx(V0,{})}),p.jsx(ir,{path:"/signup",element:p.jsx(Yz,{})}),p.jsx(ir,{path:"/Chat",element:p.jsx(Ez,{})}),p.jsx(ir,{path:"/EditProfile",element:p.jsx(Tz,{})}),p.jsx(ir,{path:"/newgroup",element:p.jsx(A8,{})}),p.jsx(ir,{path:"/Products",element:p.jsx(N8,{})})]},t.pathname)})}ah.createRoot(document.getElementById("root")).render(p.jsx(Me.StrictMode,{children:p.jsx(yb,{children:p.jsx(O8,{})})}));

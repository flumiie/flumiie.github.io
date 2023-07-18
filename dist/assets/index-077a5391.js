(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function fy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vv={exports:{}},Mu={},_v={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),dy=Symbol.for("react.portal"),hy=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),my=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),vy=Symbol.for("react.context"),_y=Symbol.for("react.forward_ref"),xy=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),Sy=Symbol.for("react.lazy"),Kh=Symbol.iterator;function My(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yv=Object.assign,Sv={};function es(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||xv}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=es.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=Sv,this.updater=n||xv}var Td=Ed.prototype=new Mv;Td.constructor=Ed;yv(Td,es.prototype);Td.isPureReactComponent=!0;var Zh=Array.isArray,Ev=Object.prototype.hasOwnProperty,wd={current:null},Tv={key:!0,ref:!0,__self:!0,__source:!0};function wv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ev.call(e,i)&&!Tv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:o,ref:s,props:r,_owner:wd.current}}function Ey(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function Ty(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qh=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ty(""+t.key):e.toString(36)}function vl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case _a:case dy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ju(s,0):i,Zh(r)?(n="",t!=null&&(n=t.replace(Qh,"$&/")+"/"),vl(r,e,n,"",function(u){return u})):r!=null&&(Ad(r)&&(r=Ey(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Qh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Zh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ju(o,a);s+=vl(o,e,n,l,r)}else if(l=My(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ju(o,a++),s+=vl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Pa(t,e,n){if(t==null)return t;var i=[],r=0;return vl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},_l={transition:null},Ay={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:wd};Ve.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=es;Ve.Fragment=hy;Ve.Profiler=my;Ve.PureComponent=Ed;Ve.StrictMode=py;Ve.Suspense=xy;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ev.call(e,l)&&!Tv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:o,props:i,_owner:s}};Ve.createContext=function(t){return t={$$typeof:vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gy,_context:t},t.Consumer=t};Ve.createElement=wv;Ve.createFactory=function(t){var e=wv.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:_y,render:t}};Ve.isValidElement=Ad;Ve.lazy=function(t){return{$$typeof:Sy,_payload:{_status:-1,_result:t},_init:wy}};Ve.memo=function(t,e){return{$$typeof:yy,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ve.useContext=function(t){return Jt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ve.useId=function(){return Jt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Jt.current.useRef(t)};Ve.useState=function(t){return Jt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Jt.current.useTransition()};Ve.version="18.2.0";_v.exports=Ve;var $r=_v.exports;const Cy=fy($r);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=$r,Py=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,Dy=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uy={key:!0,ref:!0,__self:!0,__source:!0};function Av(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)by.call(e,i)&&!Uy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Py,type:t,key:o,ref:s,props:r,_owner:Dy.current}}Mu.Fragment=Ly;Mu.jsx=Av;Mu.jsxs=Av;vv.exports=Mu;var Fe=vv.exports,ff={},Cv={exports:{}},bn={},Rv={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var z=L.length;L.push(H);e:for(;0<z;){var I=z-1>>>1,k=L[I];if(0<r(k,H))L[I]=H,L[z]=k,z=I;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var H=L[0],z=L.pop();if(z!==H){L[0]=z;e:for(var I=0,k=L.length,re=k>>>1;I<re;){var ne=2*(I+1)-1,ce=L[ne],ge=ne+1,Te=L[ge];if(0>r(ce,z))ge<k&&0>r(Te,ce)?(L[I]=Te,L[ge]=z,I=ge):(L[I]=ce,L[ne]=z,I=ne);else if(ge<k&&0>r(Te,z))L[I]=Te,L[ge]=z,I=ge;else break e}}return H}function r(L,H){var z=L.sortIndex-H.sortIndex;return z!==0?z:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=L)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function y(L){if(x=!1,g(L),!_)if(n(l)!==null)_=!0,K(E);else{var H=n(u);H!==null&&j(y,H.startTime-L)}}function E(L,H){_=!1,x&&(x=!1,f(b),b=-1),p=!0;var z=h;try{for(g(H),d=n(l);d!==null&&(!(d.expirationTime>H)||L&&!Y());){var I=d.callback;if(typeof I=="function"){d.callback=null,h=d.priorityLevel;var k=I(d.expirationTime<=H);H=t.unstable_now(),typeof k=="function"?d.callback=k:d===n(l)&&i(l),g(H)}else i(l);d=n(l)}if(d!==null)var re=!0;else{var ne=n(u);ne!==null&&j(y,ne.startTime-H),re=!1}return re}finally{d=null,h=z,p=!1}}var R=!1,C=null,b=-1,S=5,w=-1;function Y(){return!(t.unstable_now()-w<S)}function Q(){if(C!==null){var L=t.unstable_now();w=L;var H=!0;try{H=C(!0,L)}finally{H?O():(R=!1,C=null)}}else R=!1}var O;if(typeof v=="function")O=function(){v(Q)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,W=V.port2;V.port1.onmessage=Q,O=function(){W.postMessage(null)}}else O=function(){m(Q,0)};function K(L){C=L,R||(R=!0,O())}function j(L,H){b=m(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var z=h;h=H;try{return L()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return H()}finally{h=z}},t.unstable_scheduleCallback=function(L,H,z){var I=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,L){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=z+k,L={id:c++,callback:H,priorityLevel:L,startTime:z,expirationTime:k,sortIndex:-1},z>I?(L.sortIndex=z,e(u,L),n(l)===null&&L===n(u)&&(x?(f(b),b=-1):x=!0,j(y,z-I))):(L.sortIndex=k,e(l,L),_||p||(_=!0,K(E))),L},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(L){var H=h;return function(){var z=h;h=H;try{return L.apply(this,arguments)}finally{h=z}}}})(Pv);Rv.exports=Pv;var Iy=Rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=$r,Ln=Iy;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bv=new Set,js={};function Jr(t,e){Go(t,e),Go(t+"Capture",e)}function Go(t,e){for(js[t]=e,t=0;t<e.length;t++)bv.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,Ny=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jh={},ep={};function Fy(t){return df.call(ep,t)?!0:df.call(Jh,t)?!1:Ny.test(t)?ep[t]=!0:(Jh[t]=!0,!1)}function ky(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Oy(t,e,n,i){if(e===null||typeof e>"u"||ky(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);It[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);It[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Rd);It[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Oy(e,n,r,i)&&(n=null),i||r===null?Fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Eo=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),tp=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,ec;function Es(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function zy(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Eo:return"Fragment";case Mo:return"Portal";case hf:return"Profiler";case Ld:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uv:return(t.displayName||"Context")+".Consumer";case Dv:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function By(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hy(t){var e=Nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=Hy(t))}function Fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Nv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kv(t,e){e=e.checked,e!=null&&Pd(t,"checked",e,!1)}function _f(t,e){kv(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function No(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Ts(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Ov(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,Bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){Vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function Hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function Vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gy=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(Gy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,Fo=null,ko=null;function sp(t){if(t=Sa(t)){if(typeof wf!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Cu(e),wf(t.stateNode,t.type,e))}}function Gv(t){Fo?ko?ko.push(t):ko=[t]:Fo=t}function Wv(){if(Fo){var t=Fo,e=ko;if(ko=Fo=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function $v(t,e){return t(e)}function Xv(){}var ic=!1;function jv(t,e,n){if(ic)return t(e,n);ic=!0;try{return $v(t,e,n)}finally{ic=!1,(Fo!==null||ko!==null)&&(Xv(),Wv())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var i=Cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Af=!1;if(Ui)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Af=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Af=!1}function Wy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Is=!1,Hl=null,Vl=!1,Cf=null,$y={onError:function(t){Is=!0,Hl=t}};function Xy(t,e,n,i,r,o,s,a,l){Is=!1,Hl=null,Wy.apply($y,arguments)}function jy(t,e,n,i,r,o,s,a,l){if(Xy.apply(this,arguments),Is){if(Is){var u=Hl;Is=!1,Hl=null}else throw Error(Z(198));Vl||(Vl=!0,Cf=u)}}function eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ap(t){if(eo(t)!==t)throw Error(Z(188))}function qy(t){var e=t.alternate;if(!e){if(e=eo(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return ap(r),t;if(o===i)return ap(r),e;o=o.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function Yv(t){return t=qy(t),t!==null?Kv(t):null}function Kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kv(t);if(e!==null)return e;t=t.sibling}return null}var Zv=Ln.unstable_scheduleCallback,lp=Ln.unstable_cancelCallback,Yy=Ln.unstable_shouldYield,Ky=Ln.unstable_requestPaint,gt=Ln.unstable_now,Zy=Ln.unstable_getCurrentPriorityLevel,Id=Ln.unstable_ImmediatePriority,Qv=Ln.unstable_UserBlockingPriority,Gl=Ln.unstable_NormalPriority,Qy=Ln.unstable_LowPriority,Jv=Ln.unstable_IdlePriority,Eu=null,hi=null;function Jy(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:nS,eS=Math.log,tS=Math.LN2;function nS(t){return t>>>=0,t===0?32:31-(eS(t)/tS|0)|0}var Ua=64,Ia=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ws(a):(o&=s,o!==0&&(i=ws(o)))}else s=n&~r,s!==0?i=ws(s):o!==0&&(i=ws(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function iS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ei(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=iS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function oS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,Fd,i0,r0,o0,Pf=!1,Na=[],rr=null,or=null,sr=null,Ks=new Map,Zs=new Map,Ki=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function fs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function aS(t,e,n,i,r){switch(e){case"focusin":return rr=fs(rr,t,e,n,i,r),!0;case"dragenter":return or=fs(or,t,e,n,i,r),!0;case"mouseover":return sr=fs(sr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ks.set(o,fs(Ks.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Zs.set(o,fs(Zs.get(o)||null,t,e,n,i,r)),!0}return!1}function s0(t){var e=Ir(t.target);if(e!==null){var n=eo(e);if(n!==null){if(e=n.tag,e===13){if(e=qv(n),e!==null){t.blockedOn=e,o0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tf=i,n.target.dispatchEvent(i),Tf=null}else return e=Sa(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){xl(t)&&n.delete(e)}function lS(){Pf=!1,rr!==null&&xl(rr)&&(rr=null),or!==null&&xl(or)&&(or=null),sr!==null&&xl(sr)&&(sr=null),Ks.forEach(cp),Zs.forEach(cp)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,lS)))}function Qs(t){function e(r){return ds(r,t)}if(0<Na.length){ds(Na[0],t);for(var n=1;n<Na.length;n++){var i=Na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ds(rr,t),or!==null&&ds(or,t),sr!==null&&ds(sr,t),Ks.forEach(e),Zs.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&Ki.shift()}var Oo=zi.ReactCurrentBatchConfig,$l=!0;function uS(t,e,n,i){var r=Ye,o=Oo.transition;Oo.transition=null;try{Ye=1,kd(t,e,n,i)}finally{Ye=r,Oo.transition=o}}function cS(t,e,n,i){var r=Ye,o=Oo.transition;Oo.transition=null;try{Ye=4,kd(t,e,n,i)}finally{Ye=r,Oo.transition=o}}function kd(t,e,n,i){if($l){var r=Lf(t,e,n,i);if(r===null)pc(t,e,i,Xl,n),up(t,i);else if(aS(r,t,e,n,i))i.stopPropagation();else if(up(t,i),e&4&&-1<sS.indexOf(t)){for(;r!==null;){var o=Sa(r);if(o!==null&&n0(o),o=Lf(t,e,n,i),o===null&&pc(t,e,i,Xl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var Xl=null;function Lf(t,e,n,i){if(Xl=null,t=Ud(i),t=Ir(t),t!==null)if(e=eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zy()){case Id:return 1;case Qv:return 4;case Gl:case Qy:return 16;case Jv:return 536870912;default:return 16}default:return 16}}var Qi=null,Od=null,yl=null;function l0(){if(yl)return yl;var t,e=Od,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return yl=r.slice(t,1<i?1-i:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function fp(){return!1}function Dn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fa:fp,this.isPropagationStopped=fp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=Dn(ts),ya=ft({},ts,{view:0,detail:0}),fS=Dn(ya),oc,sc,hs,Tu=ft({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(oc=t.screenX-hs.screenX,sc=t.screenY-hs.screenY):sc=oc=0,hs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),dp=Dn(Tu),dS=ft({},Tu,{dataTransfer:0}),hS=Dn(dS),pS=ft({},ya,{relatedTarget:0}),ac=Dn(pS),mS=ft({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=Dn(mS),vS=ft({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=Dn(vS),xS=ft({},ts,{data:0}),hp=Dn(xS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MS[t])?!!e[t]:!1}function Bd(){return ES}var TS=ft({},ya,{key:function(t){if(t.key){var e=yS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wS=Dn(TS),AS=ft({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Dn(AS),CS=ft({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),RS=Dn(CS),PS=ft({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Dn(PS),bS=ft({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=Dn(bS),US=[9,13,27,32],Hd=Ui&&"CompositionEvent"in window,Ns=null;Ui&&"documentMode"in document&&(Ns=document.documentMode);var IS=Ui&&"TextEvent"in window&&!Ns,u0=Ui&&(!Hd||Ns&&8<Ns&&11>=Ns),mp=String.fromCharCode(32),gp=!1;function c0(t,e){switch(t){case"keyup":return US.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function NS(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function FS(t,e){if(To)return t==="compositionend"||!Hd&&c0(t,e)?(t=l0(),yl=Od=Qi=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kS[t.type]:e==="textarea"}function d0(t,e,n,i){Gv(i),e=jl(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fs=null,Js=null;function OS(t){E0(t,0)}function wu(t){var e=Co(t);if(Fv(e))return t}function zS(t,e){if(t==="change")return e}var h0=!1;if(Ui){var lc;if(Ui){var uc="oninput"in document;if(!uc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),uc=typeof _p.oninput=="function"}lc=uc}else lc=!1;h0=lc&&(!document.documentMode||9<document.documentMode)}function xp(){Fs&&(Fs.detachEvent("onpropertychange",p0),Js=Fs=null)}function p0(t){if(t.propertyName==="value"&&wu(Js)){var e=[];d0(e,Js,t,Ud(t)),jv(OS,e)}}function BS(t,e,n){t==="focusin"?(xp(),Fs=e,Js=n,Fs.attachEvent("onpropertychange",p0)):t==="focusout"&&xp()}function HS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(Js)}function VS(t,e){if(t==="click")return wu(e)}function GS(t,e){if(t==="input"||t==="change")return wu(e)}function WS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:WS;function ea(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!df.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $S(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&Vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Sp(n,o);var s=Sp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XS=Ui&&"documentMode"in document&&11>=document.documentMode,wo=null,bf=null,ks=null,Df=!1;function Mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||wo==null||wo!==Bl(i)||(i=wo,"selectionStart"in i&&Vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ks&&ea(ks,i)||(ks=i,i=jl(bf,"onSelect"),0<i.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=wo)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ao={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},cc={},v0={};Ui&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function Au(t){if(cc[t])return cc[t];if(!Ao[t])return t;var e=Ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return cc[t]=e[n];return t}var _0=Au("animationend"),x0=Au("animationiteration"),y0=Au("animationstart"),S0=Au("transitionend"),M0=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){M0.set(t,e),Jr(e,[t])}for(var fc=0;fc<Ep.length;fc++){var dc=Ep[fc],jS=dc.toLowerCase(),qS=dc[0].toUpperCase()+dc.slice(1);vr(jS,"on"+qS)}vr(_0,"onAnimationEnd");vr(x0,"onAnimationIteration");vr(y0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(S0,"onTransitionEnd");Go("onMouseEnter",["mouseout","mouseover"]);Go("onMouseLeave",["mouseout","mouseover"]);Go("onPointerEnter",["pointerout","pointerover"]);Go("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function Tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jy(i,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Tp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Tp(r,a,u),o=l}}}if(Vl)throw t=Cf,Vl=!1,Cf=null,t}function nt(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var i=t+"__bubble";n.has(i)||(T0(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),T0(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Oa]){t[Oa]=!0,bv.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,hc("selectionchange",!1,e))}}function T0(t,e,n,i){switch(a0(e)){case 1:var r=uS;break;case 4:r=cS;break;default:r=kd}n=r.bind(null,e,n,t),r=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Ir(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}jv(function(){var u=o,c=Ud(n),d=[];e:{var h=M0.get(t);if(h!==void 0){var p=zd,_=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":p=wS;break;case"focusin":_="focus",p=ac;break;case"focusout":_="blur",p=ac;break;case"beforeblur":case"afterblur":p=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RS;break;case _0:case x0:case y0:p=gS;break;case S0:p=LS;break;case"scroll":p=fS;break;case"wheel":p=DS;break;case"copy":case"cut":case"paste":p=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pp}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=Ys(v,f),y!=null&&x.push(na(v,y,g)))),m)break;v=v.return}0<x.length&&(h=new p(h,_,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Tf&&(_=n.relatedTarget||n.fromElement)&&(Ir(_)||_[Ii]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Ir(_):null,_!==null&&(m=eo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=dp,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=pp,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:Co(p),g=_==null?h:Co(_),h=new x(y,v+"leave",p,n,c),h.target=m,h.relatedTarget=g,y=null,Ir(c)===u&&(x=new x(f,v+"enter",_,n,c),x.target=g,x.relatedTarget=m,y=x),m=y,p&&_)t:{for(x=p,f=_,v=0,g=x;g;g=no(g))v++;for(g=0,y=f;y;y=no(y))g++;for(;0<v-g;)x=no(x),v--;for(;0<g-v;)f=no(f),g--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=no(x),f=no(f)}x=null}else x=null;p!==null&&wp(d,h,p,x,!1),_!==null&&m!==null&&wp(d,m,_,x,!0)}}e:{if(h=u?Co(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=zS;else if(vp(h))if(h0)E=GS;else{E=HS;var R=BS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=VS);if(E&&(E=E(t,u))){d0(d,E,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&xf(h,"number",h.value)}switch(R=u?Co(u):window,t){case"focusin":(vp(R)||R.contentEditable==="true")&&(wo=R,bf=u,ks=null);break;case"focusout":ks=bf=wo=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Mp(d,n,c);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Mp(d,n,c)}var C;if(Hd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else To?c0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(u0&&n.locale!=="ko"&&(To||b!=="onCompositionStart"?b==="onCompositionEnd"&&To&&(C=l0()):(Qi=c,Od="value"in Qi?Qi.value:Qi.textContent,To=!0)),R=jl(u,b),0<R.length&&(b=new hp(b,t,null,n,c),d.push({event:b,listeners:R}),C?b.data=C:(C=f0(n),C!==null&&(b.data=C)))),(C=IS?NS(t,n):FS(t,n))&&(u=jl(u,"onBeforeInput"),0<u.length&&(c=new hp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}E0(d,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ys(t,n),o!=null&&i.unshift(na(t,o,r)),o=Ys(t,e),o!=null&&i.push(na(t,o,r))),t=t.return}return i}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ys(n,o),l!=null&&s.unshift(na(n,l,a))):r||(l=Ys(n,o),l!=null&&s.push(na(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var KS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(ZS,"")}function za(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(Z(425))}function ql(){}var Uf=null,If=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(eM)}:Ff;function eM(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qs(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),fi="__reactFiber$"+ns,ia="__reactProps$"+ns,Ii="__reactContainer$"+ns,kf="__reactEvents$"+ns,tM="__reactListeners$"+ns,nM="__reactHandles$"+ns;function Ir(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rp(t);t!==null;){if(n=t[fi])return n;t=Rp(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[fi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Cu(t){return t[ia]||null}var Of=[],Ro=-1;function _r(t){return{current:t}}function rt(t){0>Ro||(t.current=Of[Ro],Of[Ro]=null,Ro--)}function tt(t,e){Ro++,Of[Ro]=t.current,t.current=e}var mr={},$t=_r(mr),cn=_r(!1),Xr=mr;function Wo(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Yl(){rt(cn),rt($t)}function Pp(t,e,n){if($t.current!==mr)throw Error(Z(168));tt($t,e),tt(cn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,By(t)||"Unknown",r));return ft({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Xr=$t.current,tt($t,t),tt(cn,cn.current),!0}function Lp(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=w0(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,rt(cn),rt($t),tt($t,t)):rt(cn),tt(cn,n)}var Ci=null,Ru=!1,gc=!1;function A0(t){Ci===null?Ci=[t]:Ci.push(t)}function iM(t){Ru=!0,A0(t)}function xr(){if(!gc&&Ci!==null){gc=!0;var t=0,e=Ye;try{var n=Ci;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,Ru=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),Zv(Id,xr),r}finally{Ye=e,gc=!1}}return null}var Po=[],Lo=0,Zl=null,Ql=0,In=[],Nn=0,jr=null,Ri=1,Pi="";function Ar(t,e){Po[Lo++]=Ql,Po[Lo++]=Zl,Zl=t,Ql=e}function C0(t,e,n){In[Nn++]=Ri,In[Nn++]=Pi,In[Nn++]=jr,jr=t;var i=Ri;t=Pi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var o=32-ei(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ri=1<<32-ei(e)+r|n<<r|i,Pi=o+t}else Ri=1<<o|n<<r|i,Pi=t}function Gd(t){t.return!==null&&(Ar(t,1),C0(t,1,0))}function Wd(t){for(;t===Zl;)Zl=Po[--Lo],Po[Lo]=null,Ql=Po[--Lo],Po[Lo]=null;for(;t===jr;)jr=In[--Nn],In[Nn]=null,Pi=In[--Nn],In[Nn]=null,Ri=In[--Nn],In[Nn]=null}var Rn=null,Cn=null,ot=!1,Kn=null;function R0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(ot){var e=Cn;if(e){var n=e;if(!bp(t,e)){if(zf(t))throw Error(Z(418));e=ar(n.nextSibling);var i=Rn;e&&bp(t,e)?R0(i,n):(t.flags=t.flags&-4097|2,ot=!1,Rn=t)}}else{if(zf(t))throw Error(Z(418));t.flags=t.flags&-4097|2,ot=!1,Rn=t}}}function Dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ba(t){if(t!==Rn)return!1;if(!ot)return Dp(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=Cn)){if(zf(t))throw P0(),Error(Z(418));for(;e;)R0(t,e),e=ar(e.nextSibling)}if(Dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?ar(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=Cn;t;)t=ar(t.nextSibling)}function $o(){Cn=Rn=null,ot=!1}function $d(t){Kn===null?Kn=[t]:Kn.push(t)}var rM=zi.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jl=_r(null),eu=null,bo=null,Xd=null;function jd(){Xd=bo=eu=null}function qd(t){var e=Jl.current;rt(Jl),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zo(t,e){eu=t,Xd=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if(eu===null)throw Error(Z(308));bo=t,eu.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var Nr=null;function Yd(t){Nr===null?Nr=[t]:Nr.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}function Up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,i){var r=t.updateQueue;Yi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=ft({},d,h);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Yr|=s,t.lanes=s,t.memoizedState=d}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var D0=new Lv.Component().refs;function Vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=cr(t),o=bi(i,r);o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ti(e,t,r,i),Ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=cr(t),o=bi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ti(e,t,r,i),Ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=cr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ti(e,t,i,n),Ml(e,t,i))}};function Np(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,o):!0}function U0(t,e,n){var i=!1,r=mr,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(r=fn(e)?Xr:$t.current,i=e.contextTypes,o=(i=i!=null)?Wo(t,r):mr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=D0,Kd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Bn(o):(o=fn(e)?Xr:$t.current,r.context=Wo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Vf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pu.enqueueReplaceState(r,r.state,null),tu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===D0&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kp(t){var e=t._init;return e(t._payload)}function I0(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=fr(f,v),f.index=0,f.sibling=null,f}function o(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,y){return v===null||v.tag!==6?(v=Ec(g,f.mode,y),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,y){var E=g.type;return E===Eo?c(f,v,g.props.children,y,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qi&&kp(E)===v.type)?(y=r(v,g.props),y.ref=ps(f,v,g),y.return=f,y):(y=Rl(g.type,g.key,g.props,null,f.mode,y),y.ref=ps(f,v,g),y.return=f,y)}function u(f,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Tc(g,f.mode,y),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,y,E){return v===null||v.tag!==7?(v=Br(g,f.mode,y,E),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ec(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case La:return g=Rl(v.type,v.key,v.props,null,f.mode,g),g.ref=ps(f,null,v),g.return=f,g;case Mo:return v=Tc(v,f.mode,g),v.return=f,v;case qi:var y=v._init;return d(f,y(v._payload),g)}if(Ts(v)||us(v))return v=Br(v,f.mode,g,null),v.return=f,v;Ha(f,v)}return null}function h(f,v,g,y){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(f,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case La:return g.key===E?l(f,v,g,y):null;case Mo:return g.key===E?u(f,v,g,y):null;case qi:return E=g._init,h(f,v,E(g._payload),y)}if(Ts(g)||us(g))return E!==null?null:c(f,v,g,y,null);Ha(f,g)}return null}function p(f,v,g,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(v,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case La:return f=f.get(y.key===null?g:y.key)||null,l(v,f,y,E);case Mo:return f=f.get(y.key===null?g:y.key)||null,u(v,f,y,E);case qi:var R=y._init;return p(f,v,g,R(y._payload),E)}if(Ts(y)||us(y))return f=f.get(g)||null,c(v,f,y,E,null);Ha(v,y)}return null}function _(f,v,g,y){for(var E=null,R=null,C=v,b=v=0,S=null;C!==null&&b<g.length;b++){C.index>b?(S=C,C=null):S=C.sibling;var w=h(f,C,g[b],y);if(w===null){C===null&&(C=S);break}t&&C&&w.alternate===null&&e(f,C),v=o(w,v,b),R===null?E=w:R.sibling=w,R=w,C=S}if(b===g.length)return n(f,C),ot&&Ar(f,b),E;if(C===null){for(;b<g.length;b++)C=d(f,g[b],y),C!==null&&(v=o(C,v,b),R===null?E=C:R.sibling=C,R=C);return ot&&Ar(f,b),E}for(C=i(f,C);b<g.length;b++)S=p(C,f,b,g[b],y),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?b:S.key),v=o(S,v,b),R===null?E=S:R.sibling=S,R=S);return t&&C.forEach(function(Y){return e(f,Y)}),ot&&Ar(f,b),E}function x(f,v,g,y){var E=us(g);if(typeof E!="function")throw Error(Z(150));if(g=E.call(g),g==null)throw Error(Z(151));for(var R=E=null,C=v,b=v=0,S=null,w=g.next();C!==null&&!w.done;b++,w=g.next()){C.index>b?(S=C,C=null):S=C.sibling;var Y=h(f,C,w.value,y);if(Y===null){C===null&&(C=S);break}t&&C&&Y.alternate===null&&e(f,C),v=o(Y,v,b),R===null?E=Y:R.sibling=Y,R=Y,C=S}if(w.done)return n(f,C),ot&&Ar(f,b),E;if(C===null){for(;!w.done;b++,w=g.next())w=d(f,w.value,y),w!==null&&(v=o(w,v,b),R===null?E=w:R.sibling=w,R=w);return ot&&Ar(f,b),E}for(C=i(f,C);!w.done;b++,w=g.next())w=p(C,f,b,w.value,y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?b:w.key),v=o(w,v,b),R===null?E=w:R.sibling=w,R=w);return t&&C.forEach(function(Q){return e(f,Q)}),ot&&Ar(f,b),E}function m(f,v,g,y){if(typeof g=="object"&&g!==null&&g.type===Eo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case La:e:{for(var E=g.key,R=v;R!==null;){if(R.key===E){if(E=g.type,E===Eo){if(R.tag===7){n(f,R.sibling),v=r(R,g.props.children),v.return=f,f=v;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qi&&kp(E)===R.type){n(f,R.sibling),v=r(R,g.props),v.ref=ps(f,R,g),v.return=f,f=v;break e}n(f,R);break}else e(f,R);R=R.sibling}g.type===Eo?(v=Br(g.props.children,f.mode,y,g.key),v.return=f,f=v):(y=Rl(g.type,g.key,g.props,null,f.mode,y),y.ref=ps(f,v,g),y.return=f,f=y)}return s(f);case Mo:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Tc(g,f.mode,y),v.return=f,f=v}return s(f);case qi:return R=g._init,m(f,v,R(g._payload),y)}if(Ts(g))return _(f,v,g,y);if(us(g))return x(f,v,g,y);Ha(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=Ec(g,f.mode,y),v.return=f,f=v),s(f)):n(f,v)}return m}var Xo=I0(!0),N0=I0(!1),Ma={},pi=_r(Ma),ra=_r(Ma),oa=_r(Ma);function Fr(t){if(t===Ma)throw Error(Z(174));return t}function Zd(t,e){switch(tt(oa,e),tt(ra,t),tt(pi,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}rt(pi),tt(pi,e)}function jo(){rt(pi),rt(ra),rt(oa)}function F0(t){Fr(oa.current);var e=Fr(pi.current),n=Sf(e,t.type);e!==n&&(tt(ra,t),tt(pi,n))}function Qd(t){ra.current===t&&(rt(pi),rt(ra))}var ut=_r(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Jd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var El=zi.ReactCurrentDispatcher,_c=zi.ReactCurrentBatchConfig,qr=0,ct=null,St=null,Rt=null,iu=!1,Os=!1,sa=0,oM=0;function zt(){throw Error(Z(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,o){if(qr=o,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?uM:cM,t=n(i,r),Os){o=0;do{if(Os=!1,sa=0,25<=o)throw Error(Z(301));o+=1,Rt=St=null,e.updateQueue=null,El.current=fM,t=n(i,r)}while(Os)}if(El.current=ru,e=St!==null&&St.next!==null,qr=0,Rt=St=ct=null,iu=!1,e)throw Error(Z(300));return t}function nh(){var t=sa!==0;return sa=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Hn(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(Z(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function aa(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ct.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ni(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ct.lanes|=o,Yr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ni(o,e.memoizedState)||(un=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function k0(){}function O0(t,e){var n=ct,i=Hn(),r=e(),o=!ni(i.memoizedState,r);if(o&&(i.memoizedState=r,un=!0),i=i.queue,ih(H0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,la(9,B0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(Z(349));qr&30||z0(n,e,r)}return r}function z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,i){e.value=n,e.getSnapshot=i,V0(e)&&G0(t)}function H0(t,e,n){return n(function(){V0(e)&&G0(t)})}function V0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function G0(t){var e=Ni(t,1);e!==null&&ti(e,t,1,-1)}function Op(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=lM.bind(null,ct,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function W0(){return Hn().memoizedState}function Tl(t,e,n,i){var r=ui();ct.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Lu(t,e,n,i){var r=Hn();i=i===void 0?null:i;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,i!==null&&eh(i,s.deps)){r.memoizedState=la(e,n,o,i);return}}ct.flags|=t,r.memoizedState=la(1|e,n,o,i)}function zp(t,e){return Tl(8390656,8,t,e)}function ih(t,e){return Lu(2048,8,t,e)}function $0(t,e){return Lu(4,2,t,e)}function X0(t,e){return Lu(4,4,t,e)}function j0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q0(t,e,n){return n=n!=null?n.concat([t]):null,Lu(4,4,j0.bind(null,e,t),n)}function rh(){}function Y0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function K0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Z0(t,e,n){return qr&21?(ni(n,e)||(n=e0(),ct.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function sM(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{Ye=n,_c.transition=i}}function Q0(){return Hn().memoizedState}function aM(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},J0(t))e_(e,n);else if(n=L0(t,e,n,i),n!==null){var r=Qt();ti(n,t,i,r),t_(n,e,i)}}function lM(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(J0(t))e_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,s)){var l=e.interleaved;l===null?(r.next=r,Yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=Qt(),ti(n,t,i,r),t_(n,e,i))}}function J0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function e_(t,e){Os=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}var ru={readContext:Bn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},uM={readContext:Bn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,j0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aM.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:rh,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=sM.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=ui();if(ot){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Pt===null)throw Error(Z(349));qr&30||z0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,zp(H0.bind(null,i,o,t),[t]),i.flags|=2048,la(9,B0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ui(),e=Pt.identifierPrefix;if(ot){var n=Pi,i=Ri;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cM={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:ih,useImperativeHandle:q0,useInsertionEffect:$0,useLayoutEffect:X0,useMemo:K0,useReducer:xc,useRef:W0,useState:function(){return xc(aa)},useDebugValue:rh,useDeferredValue:function(t){var e=Hn();return Z0(e,St.memoizedState,t)},useTransition:function(){var t=xc(aa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:k0,useSyncExternalStore:O0,useId:Q0,unstable_isNewReconciler:!1},fM={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:ih,useImperativeHandle:q0,useInsertionEffect:$0,useLayoutEffect:X0,useMemo:K0,useReducer:yc,useRef:W0,useState:function(){return yc(aa)},useDebugValue:rh,useDeferredValue:function(t){var e=Hn();return St===null?e.memoizedState=t:Z0(e,St.memoizedState,t)},useTransition:function(){var t=yc(aa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:k0,useSyncExternalStore:O0,useId:Q0,unstable_isNewReconciler:!1};function qo(t,e){try{var n="",i=e;do n+=zy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dM=typeof WeakMap=="function"?WeakMap:Map;function n_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){su||(su=!0,ed=i),Wf(t,e)},n}function i_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wf(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AM.bind(null,t,e,n),e.then(t,t))}function Hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var hM=zi.ReactCurrentOwner,un=!1;function Yt(t,e,n,i){e.child=t===null?N0(e,null,n,i):Xo(e,t.child,n,i)}function Gp(t,e,n,i,r){n=n.render;var o=e.ref;return zo(e,r),i=th(t,e,n,i,o,r),n=nh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ot&&n&&Gd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Wp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!dh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,r_(t,e,o,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(s,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ea(o,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return $f(t,e,n,i,r)}function o_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Uo,Sn),Sn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Uo,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,tt(Uo,Sn),Sn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,tt(Uo,Sn),Sn|=i;return Yt(t,e,r,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $f(t,e,n,i,r){var o=fn(n)?Xr:$t.current;return o=Wo(e,o),zo(e,r),n=th(t,e,n,i,o,r),i=nh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ot&&i&&Gd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function $p(t,e,n,i,r){if(fn(n)){var o=!0;Kl(e)}else o=!1;if(zo(e,r),e.stateNode===null)wl(t,e),U0(e,n,i),Gf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=fn(n)?Xr:$t.current,u=Wo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Fp(e,s,i,u),Yi=!1;var h=e.memoizedState;s.state=h,tu(e,i,s,r),l=e.memoizedState,a!==i||h!==l||cn.current||Yi?(typeof c=="function"&&(Vf(e,n,c,i),l=e.memoizedState),(a=Yi||Np(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,b0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=fn(n)?Xr:$t.current,l=Wo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Fp(e,s,i,l),Yi=!1,h=e.memoizedState,s.state=h,tu(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||cn.current||Yi?(typeof p=="function"&&(Vf(e,n,p,i),_=e.memoizedState),(u=Yi||Np(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Xf(t,e,n,i,o,r)}function Xf(t,e,n,i,r,o){s_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Lp(e,n,!1),Fi(t,e,o);i=e.stateNode,hM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Xo(e,t.child,null,o),e.child=Xo(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&Lp(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),Zd(t,e.containerInfo)}function Xp(t,e,n,i,r){return $o(),$d(r),e.flags|=256,Yt(t,e,n,i),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function l_(t,e,n){var i=e.pendingProps,r=ut.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ut,r&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uu(s,i,0,null),t=Br(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qf(n),e.memoizedState=jf,t):oh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=Br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?qf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=jf,i}return o=t.child,t=o.sibling,i=fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function oh(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&$d(i),Xo(e,t.child,null,n),t=oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(Z(422))),Va(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Uu({mode:"visible",children:i.children},r,0,null),o=Br(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Xo(e,t.child,null,s),e.child.memoizedState=qf(s),e.memoizedState=jf,o);if(!(e.mode&1))return Va(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Z(419)),i=Sc(o,i,void 0),Va(t,e,s,i)}if(a=(s&t.childLanes)!==0,un||a){if(i=Pt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ni(t,r),ti(i,t,r,-1))}return fh(),i=Sc(Error(Z(421))),Va(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=CM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Cn=ar(r.nextSibling),Rn=e,ot=!0,Kn=null,t!==null&&(In[Nn++]=Ri,In[Nn++]=Pi,In[Nn++]=jr,Ri=t.id,Pi=t.overflow,jr=e),e=oh(e,i.children),e.flags|=4096,e)}function jp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hf(t.return,e,n)}function Mc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function u_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jp(t,n,e);else if(t.tag===19)jp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mc(e,!0,n,null,o);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mM(t,e,n){switch(e.tag){case 3:a_(e),$o();break;case 5:F0(e);break;case 1:fn(e.type)&&Kl(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?l_(t,e,n):(tt(ut,ut.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return u_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,o_(t,e,n)}return Fi(t,e,n)}var c_,Yf,f_,d_;c_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};f_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(pi.current);var o=null;switch(n){case"input":r=vf(t,r),i=vf(t,i),o=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),o=[];break;case"textarea":r=yf(t,r),i=yf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ql)}Mf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(js.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};d_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ms(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gM(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return fn(e.type)&&Yl(),Bt(e),null;case 3:return i=e.stateNode,jo(),rt(cn),rt($t),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(id(Kn),Kn=null))),Yf(t,e),Bt(e),null;case 5:Qd(e);var r=Fr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)f_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Bt(e),null}if(t=Fr(pi.current),Ba(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[fi]=e,i[ia]=o,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<As.length;r++)nt(As[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":np(i,o),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},nt("invalid",i);break;case"textarea":rp(i,o),nt("invalid",i)}Mf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):js.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":ba(i),ip(i,o,!0);break;case"textarea":ba(i),op(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[fi]=e,t[ia]=i,c_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ef(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<As.length;r++)nt(As[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":np(t,i),r=vf(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),nt("invalid",t);break;case"textarea":rp(t,i),r=yf(t,i),nt("invalid",t);break;default:r=i}Mf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Vv(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(t,l):typeof l=="number"&&qs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(js.hasOwnProperty(o)?l!=null&&o==="onScroll"&&nt("scroll",t):l!=null&&Pd(t,o,l,s))}switch(n){case"input":ba(t),ip(t,i,!1);break;case"textarea":ba(t),op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?No(t,!!i.multiple,o,!1):i.defaultValue!=null&&No(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)d_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Fr(oa.current),Fr(pi.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(o=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return Bt(e),null;case 13:if(rt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&Cn!==null&&e.mode&1&&!(e.flags&128))P0(),$o(),e.flags|=98560,o=!1;else if(o=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[fi]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Kn!==null&&(id(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):fh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return jo(),Yf(t,e),t===null&&ta(e.stateNode.containerInfo),Bt(e),null;case 10:return qd(e.type._context),Bt(e),null;case 17:return fn(e.type)&&Yl(),Bt(e),null;case 19:if(rt(ut),o=e.memoizedState,o===null)return Bt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ms(o,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=nu(t),s!==null){for(e.flags|=128,ms(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}o.tail!==null&&gt()>Yo&&(e.flags|=128,i=!0,ms(o,!1),e.lanes=4194304)}else{if(!i)if(t=nu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ms(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ot)return Bt(e),null}else 2*gt()-o.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,i=!0,ms(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=gt(),e.sibling=null,n=ut.current,tt(ut,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function vM(t,e){switch(Wd(e),e.tag){case 1:return fn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),rt(cn),rt($t),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(rt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ut),null;case 4:return jo(),null;case 10:return qd(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ga=!1,Wt=!1,_M=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Kf(t,e,n){try{n()}catch(i){pt(t,e,i)}}var qp=!1;function xM(t,e){if(Uf=$l,t=g0(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},$l=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(y){pt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=qp,qp=!1,_}function zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Kf(e,n,o)}r=r.next}while(r!==i)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[ia],delete e[kf],delete e[tM],delete e[nM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var bt=null,Yn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)m_(t,e,n),n=n.sibling}function m_(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:Wt||Do(n,e);case 6:var i=bt,r=Yn;bt=null,Hi(t,e,n),bt=i,Yn=r,bt!==null&&(Yn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Yn?(t=bt,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),Qs(t)):mc(bt,n.stateNode));break;case 4:i=bt,r=Yn,bt=n.stateNode.containerInfo,Yn=!0,Hi(t,e,n),bt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Kf(n,e,s),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Wt&&(Do(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Hi(t,e,n),Wt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _M),e.forEach(function(i){var r=RM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Yn=!1;break e;case 3:bt=a.stateNode.containerInfo,Yn=!0;break e;case 4:bt=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(bt===null)throw Error(Z(160));m_(o,s,r),bt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g_(e,t),e=e.sibling}function g_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),oi(t),i&4){try{zs(3,t,t.return),bu(3,t)}catch(x){pt(t,t.return,x)}try{zs(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:Gn(e,t),oi(t),i&512&&n!==null&&Do(n,n.return);break;case 5:if(Gn(e,t),oi(t),i&512&&n!==null&&Do(n,n.return),t.flags&32){var r=t.stateNode;try{qs(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kv(r,o),Ef(a,s);var u=Ef(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Vv(r,d):c==="dangerouslySetInnerHTML"?Bv(r,d):c==="children"?qs(r,d):Pd(r,c,d,u)}switch(a){case"input":_f(r,o);break;case"textarea":Ov(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?No(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?No(r,!!o.multiple,o.defaultValue,!0):No(r,!!o.multiple,o.multiple?[]:"",!1))}r[ia]=o}catch(x){pt(t,t.return,x)}}break;case 6:if(Gn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){pt(t,t.return,x)}}break;case 3:if(Gn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:Gn(e,t),oi(t);break;case 13:Gn(e,t),oi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=gt())),i&4&&Kp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,Gn(e,t),Wt=u):Gn(e,t),oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:zs(4,h,h.return);break;case 1:Do(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:Do(h,h.return);break;case 22:if(h.memoizedState!==null){Qp(d);continue}}p!==null?(p.return=h,fe=p):Qp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hv("display",s))}catch(x){pt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){pt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gn(e,t),oi(t),i&4&&Kp(t);break;case 21:break;default:Gn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qs(r,""),i.flags&=-33);var o=Yp(t);Jf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Yp(t);Qf(t,a,s);break;default:throw Error(Z(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yM(t,e,n){fe=t,v_(t)}function v_(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ga;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ga;var u=Wt;if(Ga=s,(Wt=l)&&!u)for(fe=r;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?Jp(r):l!==null?(l.return=s,fe=l):Jp(r);for(;o!==null;)fe=o,v_(o),o=o.sibling;fe=r,Ga=a,Wt=u}Zp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,fe=o):Zp(t)}}function Zp(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||bu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ip(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Wt||e.flags&512&&Zf(e)}catch(h){pt(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Qp(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Jp(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var o=e.return;try{Zf(e)}catch(l){pt(e,o,l)}break;case 5:var s=e.return;try{Zf(e)}catch(l){pt(e,s,l)}}}catch(l){pt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var SM=Math.ceil,ou=zi.ReactCurrentDispatcher,sh=zi.ReactCurrentOwner,zn=zi.ReactCurrentBatchConfig,$e=0,Pt=null,xt=null,Ut=0,Sn=0,Uo=_r(0),Mt=0,ua=null,Yr=0,Du=0,ah=0,Bs=null,ln=null,lh=0,Yo=1/0,Ai=null,su=!1,ed=null,ur=null,Wa=!1,Ji=null,au=0,Hs=0,td=null,Al=-1,Cl=0;function Qt(){return $e&6?gt():Al!==-1?Al:Al=gt()}function cr(t){return t.mode&1?$e&2&&Ut!==0?Ut&-Ut:rM.transition!==null?(Cl===0&&(Cl=e0()),Cl):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function ti(t,e,n,i){if(50<Hs)throw Hs=0,td=null,Error(Z(185));xa(t,n,i),(!($e&2)||t!==Pt)&&(t===Pt&&(!($e&2)&&(Du|=n),Mt===4&&Zi(t,Ut)),dn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Yo=gt()+500,Ru&&xr()))}function dn(t,e){var n=t.callbackNode;rS(t,e);var i=Wl(t,t===Pt?Ut:0);if(i===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?iM(em.bind(null,t)):A0(em.bind(null,t)),JS(function(){!($e&6)&&xr()}),n=null;else{switch(t0(i)){case 1:n=Id;break;case 4:n=Qv;break;case 16:n=Gl;break;case 536870912:n=Jv;break;default:n=Gl}n=w_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(Al=-1,Cl=0,$e&6)throw Error(Z(327));var n=t.callbackNode;if(Bo()&&t.callbackNode!==n)return null;var i=Wl(t,t===Pt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lu(t,i);else{e=i;var r=$e;$e|=2;var o=y_();(Pt!==t||Ut!==e)&&(Ai=null,Yo=gt()+500,zr(t,e));do try{TM();break}catch(a){x_(t,a)}while(1);jd(),ou.current=o,$e=r,xt!==null?e=0:(Pt=null,Ut=0,e=Mt)}if(e!==0){if(e===2&&(r=Rf(t),r!==0&&(i=r,e=nd(t,r))),e===1)throw n=ua,zr(t,0),Zi(t,i),dn(t,gt()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!MM(r)&&(e=lu(t,i),e===2&&(o=Rf(t),o!==0&&(i=o,e=nd(t,o))),e===1))throw n=ua,zr(t,0),Zi(t,i),dn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Cr(t,ln,Ai);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=lh+500-gt(),10<e)){if(Wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ff(Cr.bind(null,t,ln,Ai),e);break}Cr(t,ln,Ai);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ei(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SM(i/1960))-i,10<i){t.timeoutHandle=Ff(Cr.bind(null,t,ln,Ai),i);break}Cr(t,ln,Ai);break;case 5:Cr(t,ln,Ai);break;default:throw Error(Z(329))}}}return dn(t,gt()),t.callbackNode===n?__.bind(null,t):null}function nd(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=lu(t,e),t!==2&&(e=ln,ln=n,e!==null&&id(e)),t}function id(t){ln===null?ln=t:ln.push.apply(ln,t)}function MM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ni(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~ah,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if($e&6)throw Error(Z(327));Bo();var e=Wl(t,0);if(!(e&1))return dn(t,gt()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var i=Rf(t);i!==0&&(e=i,n=nd(t,i))}if(n===1)throw n=ua,zr(t,0),Zi(t,e),dn(t,gt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,ln,Ai),dn(t,gt()),null}function uh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Yo=gt()+500,Ru&&xr())}}function Kr(t){Ji!==null&&Ji.tag===0&&!($e&6)&&Bo();var e=$e;$e|=1;var n=zn.transition,i=Ye;try{if(zn.transition=null,Ye=1,t)return t()}finally{Ye=i,zn.transition=n,$e=e,!($e&6)&&xr()}}function ch(){Sn=Uo.current,rt(Uo)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QS(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:jo(),rt(cn),rt($t),Jd();break;case 5:Qd(i);break;case 4:jo();break;case 13:rt(ut);break;case 19:rt(ut);break;case 10:qd(i.type._context);break;case 22:case 23:ch()}n=n.return}if(Pt=t,xt=t=fr(t.current,null),Ut=Sn=e,Mt=0,ua=null,ah=Du=Yr=0,ln=Bs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Nr=null}return t}function x_(t,e){do{var n=xt;try{if(jd(),El.current=ru,iu){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(qr=0,Rt=St=ct=null,Os=!1,sa=0,sh.current=null,n===null||n.return===null){Mt=1,ua=e,xt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Hp(s);if(p!==null){p.flags&=-257,Vp(p,s,a,o,e),p.mode&1&&Bp(o,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Bp(o,u,e),fh();break e}l=Error(Z(426))}}else if(ot&&a.mode&1){var m=Hp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vp(m,s,a,o,e),$d(qo(l,a));break e}}o=l=qo(l,a),Mt!==4&&(Mt=2),Bs===null?Bs=[o]:Bs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=n_(o,l,e);Up(o,f);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ur===null||!ur.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=i_(o,a,e);Up(o,y);break e}}o=o.return}while(o!==null)}M_(n)}catch(E){e=E,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(1)}function y_(){var t=ou.current;return ou.current=ru,t===null?ru:t}function fh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Pt===null||!(Yr&268435455)&&!(Du&268435455)||Zi(Pt,Ut)}function lu(t,e){var n=$e;$e|=2;var i=y_();(Pt!==t||Ut!==e)&&(Ai=null,zr(t,e));do try{EM();break}catch(r){x_(t,r)}while(1);if(jd(),$e=n,ou.current=i,xt!==null)throw Error(Z(261));return Pt=null,Ut=0,Mt}function EM(){for(;xt!==null;)S_(xt)}function TM(){for(;xt!==null&&!Yy();)S_(xt)}function S_(t){var e=T_(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?M_(t):xt=e,sh.current=null}function M_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vM(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,xt=null;return}}else if(n=gM(n,e,Sn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Mt===0&&(Mt=5)}function Cr(t,e,n){var i=Ye,r=zn.transition;try{zn.transition=null,Ye=1,wM(t,e,n,i)}finally{zn.transition=r,Ye=i}return null}function wM(t,e,n,i){do Bo();while(Ji!==null);if($e&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(oS(t,o),t===Pt&&(xt=Pt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,w_(Gl,function(){return Bo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var s=Ye;Ye=1;var a=$e;$e|=4,sh.current=null,xM(t,n),g_(n,t),$S(If),$l=!!Uf,If=Uf=null,t.current=n,yM(n),Ky(),$e=a,Ye=s,zn.transition=o}else t.current=n;if(Wa&&(Wa=!1,Ji=t,au=r),o=t.pendingLanes,o===0&&(ur=null),Jy(n.stateNode),dn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(su)throw su=!1,t=ed,ed=null,t;return au&1&&t.tag!==0&&Bo(),o=t.pendingLanes,o&1?t===td?Hs++:(Hs=0,td=t):Hs=0,xr(),null}function Bo(){if(Ji!==null){var t=t0(au),e=zn.transition,n=Ye;try{if(zn.transition=null,Ye=16>t?16:t,Ji===null)var i=!1;else{if(t=Ji,Ji=null,au=0,$e&6)throw Error(Z(331));var r=$e;for($e|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:zs(8,c,o)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(h_(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,fe=f;break e}fe=o.return}}var v=t.current;for(fe=v;fe!==null;){s=fe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,fe=g;else e:for(s=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bu(9,a)}}catch(E){pt(a,a.return,E)}if(a===s){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if($e=r,xr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Eu,t)}catch{}i=!0}return i}finally{Ye=n,zn.transition=e}}return!1}function tm(t,e,n){e=qo(n,e),e=n_(t,e,1),t=lr(t,e,1),e=Qt(),t!==null&&(xa(t,1,e),dn(t,e))}function pt(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=qo(n,t),t=i_(e,t,1),e=lr(e,t,1),t=Qt(),e!==null&&(xa(e,1,t),dn(e,t));break}}e=e.return}}function AM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Ut&n)===n&&(Mt===4||Mt===3&&(Ut&130023424)===Ut&&500>gt()-lh?zr(t,0):ah|=n),dn(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=Qt();t=Ni(t,e),t!==null&&(xa(t,e,n),dn(t,n))}function CM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function RM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),E_(t,n)}var T_;T_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,mM(t,e,n);un=!!(t.flags&131072)}else un=!1,ot&&e.flags&1048576&&C0(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Wo(e,$t.current);zo(e,n),r=th(null,e,i,t,r,n);var o=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(o=!0,Kl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=Pu,e.stateNode=r,r._reactInternals=e,Gf(e,i,t,n),e=Xf(null,e,i,!0,o,n)):(e.tag=0,ot&&o&&Gd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=LM(i),t=qn(i,t),r){case 0:e=$f(null,e,i,t,n);break e;case 1:e=$p(null,e,i,t,n);break e;case 11:e=Gp(null,e,i,t,n);break e;case 14:e=Wp(null,e,i,qn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),$f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),$p(t,e,i,r,n);case 3:e:{if(a_(e),t===null)throw Error(Z(387));i=e.pendingProps,o=e.memoizedState,r=o.element,b0(t,e),tu(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=qo(Error(Z(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=qo(Error(Z(424)),e),e=Xp(t,e,i,n,r);break e}else for(Cn=ar(e.stateNode.containerInfo.firstChild),Rn=e,ot=!0,Kn=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),i===r){e=Fi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return F0(e),t===null&&Bf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Nf(i,r)?s=null:o!==null&&Nf(i,o)&&(e.flags|=32),s_(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return l_(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xo(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Gp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,tt(Jl,i._currentValue),i._currentValue=s,o!==null)if(ni(o.value,s)){if(o.children===r.children&&!cn.current){e=Fi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=bi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Hf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zo(e,n),r=Bn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Wp(t,e,i,r,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),wl(t,e),e.tag=1,fn(i)?(t=!0,Kl(e)):t=!1,zo(e,n),U0(e,i,r),Gf(e,i,r,n),Xf(null,e,i,!0,t,n);case 19:return u_(t,e,n);case 22:return o_(t,e,n)}throw Error(Z(156,e.tag))};function w_(t,e){return Zv(t,e)}function PM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new PM(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LM(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Dd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")dh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Eo:return Br(n.children,r,o,e);case Ld:s=8,r|=8;break;case hf:return t=kn(12,n,e,r|2),t.elementType=hf,t.lanes=o,t;case pf:return t=kn(13,n,e,r),t.elementType=pf,t.lanes=o,t;case mf:return t=kn(19,n,e,r),t.elementType=mf,t.lanes=o,t;case Iv:return Uu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dv:s=10;break e;case Uv:s=9;break e;case bd:s=11;break e;case Dd:s=14;break e;case qi:s=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=kn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Br(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Uu(t,e,n,i){return t=kn(22,t,i,e),t.elementType=Iv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,o,s,a,l){return t=new bM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=kn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(o),t}function DM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return mr;t=t._reactInternals;e:{if(eo(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(fn(n))return w0(t,n,e)}return e}function C_(t,e,n,i,r,o,s,a,l){return t=hh(n,i,!0,t,r,o,s,a,l),t.context=A_(null),n=t.current,i=Qt(),r=cr(n),o=bi(i,r),o.callback=e??null,lr(n,o,r),t.current.lanes=r,xa(t,r,i),dn(t,i),t}function Iu(t,e,n,i){var r=e.current,o=Qt(),s=cr(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,s),t!==null&&(ti(t,r,s,o),Ml(t,r,s)),s}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function UM(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}Nu.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Iu(t,e,null,null)};Nu.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Iu(null,t,null,null)}),e[Ii]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&s0(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function IM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=uu(s);o.call(u)}}var s=C_(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=s,t[Ii]=s.current,ta(t.nodeType===8?t.parentNode:t),Kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=uu(l);a.call(u)}}var l=hh(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=l,t[Ii]=l.current,ta(t.nodeType===8?t.parentNode:t),Kr(function(){Iu(e,l,n,i)}),l}function ku(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=uu(s);a.call(l)}}Iu(e,s,t,r)}else s=IM(n,e,t,r,i);return uu(s)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(Nd(e,n|1),dn(e,gt()),!($e&6)&&(Yo=gt()+500,xr()))}break;case 13:Kr(function(){var i=Ni(t,1);if(i!==null){var r=Qt();ti(i,t,1,r)}}),ph(t,1)}};Fd=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=Qt();ti(e,t,134217728,n)}ph(t,134217728)}};i0=function(t){if(t.tag===13){var e=cr(t),n=Ni(t,e);if(n!==null){var i=Qt();ti(n,t,e,i)}ph(t,e)}};r0=function(){return Ye};o0=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};wf=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cu(i);if(!r)throw Error(Z(90));Fv(i),_f(i,r)}}}break;case"textarea":Ov(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};$v=uh;Xv=Kr;var NM={usingClientEntryPoint:!1,Events:[Sa,Co,Cu,Gv,Wv,uh]},gs={findFiberByHostInstance:Ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FM={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yv(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||UM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Eu=$a.inject(FM),hi=$a}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NM;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(Z(200));return DM(t,e,null,n)};bn.createRoot=function(t,e){if(!gh(t))throw Error(Z(299));var n=!1,i="",r=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,ta(t.nodeType===8?t.parentNode:t),new mh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=Yv(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Kr(t)};bn.hydrate=function(t,e,n){if(!Fu(e))throw Error(Z(200));return ku(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=R_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=C_(e,null,t,1,n??null,r,!1,o,s),t[Ii]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nu(e)};bn.render=function(t,e,n){if(!Fu(e))throw Error(Z(200));return ku(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(Z(40));return t._reactRootContainer?(Kr(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};bn.unstable_batchedUpdates=uh;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fu(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return ku(t,e,n,!1,i)};bn.version="18.2.0-next-9e3b772b8-20220608";function P_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P_)}catch(t){console.error(t)}}P_(),Cv.exports=bn;var kM=Cv.exports,rm=kM;ff.createRoot=rm.createRoot,ff.hydrateRoot=rm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="154",OM=0,om=1,zM=2,L_=1,BM=2,wi=3,gr=0,hn=1,di=2,dr=0,Ho=1,sm=2,am=3,lm=4,HM=5,yo=100,VM=101,GM=102,um=103,cm=104,WM=200,$M=201,XM=202,jM=203,b_=204,D_=205,qM=206,YM=207,KM=208,ZM=209,QM=210,JM=0,eE=1,tE=2,rd=3,nE=4,iE=5,rE=6,oE=7,U_=0,sE=1,aE=2,Di=0,lE=1,uE=2,cE=3,fE=4,dE=5,I_=300,Ko=301,Zo=302,od=303,sd=304,Ou=306,ad=1e3,Qn=1001,ld=1002,Gt=1003,fm=1004,wc=1005,Fn=1006,hE=1007,ca=1008,hr=1009,pE=1010,mE=1011,_h=1012,N_=1013,er=1014,tr=1015,fa=1016,F_=1017,k_=1018,Hr=1020,gE=1021,Jn=1023,vE=1024,_E=1025,Vr=1026,Qo=1027,xE=1028,O_=1029,yE=1030,z_=1031,B_=1033,Ac=33776,Cc=33777,Rc=33778,Pc=33779,dm=35840,hm=35841,pm=35842,mm=35843,SE=36196,gm=37492,vm=37496,_m=37808,xm=37809,ym=37810,Sm=37811,Mm=37812,Em=37813,Tm=37814,wm=37815,Am=37816,Cm=37817,Rm=37818,Pm=37819,Lm=37820,bm=37821,Lc=36492,ME=36283,Dm=36284,Um=36285,Im=36286,H_=3e3,Gr=3001,EE=3200,TE=3201,V_=0,wE=1,Wr="",Ue="srgb",gi="srgb-linear",G_="display-p3",bc=7680,AE=519,CE=512,RE=513,PE=514,LE=515,bE=516,DE=517,UE=518,IE=519,Nm=35044,Fm="300 es",ud=1035,Li=2e3,cu=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let km=1234567;const Vs=Math.PI/180,da=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function xh(t,e){return(t%e+e)%e}function NE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function FE(t,e,n){return t!==e?(n-t)/(e-t):0}function Gs(t,e,n){return(1-n)*t+n*e}function kE(t,e,n,i){return Gs(t,e,1-Math.exp(-n*i))}function OE(t,e=1){return e-Math.abs(xh(t,e*2)-e)}function zE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function BE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function HE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function VE(t,e){return t+Math.random()*(e-t)}function GE(t){return t*(.5-Math.random())}function WE(t){t!==void 0&&(km=t);let e=km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $E(t){return t*Vs}function XE(t){return t*da}function cd(t){return(t&t-1)===0&&t!==0}function jE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qE(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),p=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const YE={DEG2RAD:Vs,RAD2DEG:da,generateUUID:rs,clamp:Kt,euclideanModulo:xh,mapLinear:NE,inverseLerp:FE,lerp:Gs,damp:kE,pingpong:OE,smoothstep:zE,smootherstep:BE,randInt:HE,randFloat:VE,randFloatSpread:GE,seededRandom:WE,degToRad:$E,radToDeg:XE,isPowerOfTwo:cd,ceilPowerOfTwo:jE,floorPowerOfTwo:fu,setQuaternionFromProperEuler:qE,normalize:on,denormalize:Cs};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,s,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],f=r[6],v=r[1],g=r[4],y=r[7],E=r[2],R=r[5],C=r[8];return o[0]=s*x+a*v+l*E,o[3]=s*m+a*g+l*R,o[6]=s*f+a*y+l*C,o[1]=u*x+c*v+d*E,o[4]=u*m+c*g+d*R,o[7]=u*f+c*y+d*C,o[2]=h*x+p*v+_*E,o[5]=h*m+p*g+_*R,o[8]=h*f+p*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,p=u*o-s*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new ke;function W_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Om={};function Ws(t){t in Om||(Om[t]=!0,console.warn(t))}function Vo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const KE=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ZE=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function QE(t){return t.convertSRGBToLinear().applyMatrix3(ZE)}function JE(t){return t.applyMatrix3(KE).convertLinearToSRGB()}const e1={[gi]:t=>t,[Ue]:t=>t.convertSRGBToLinear(),[G_]:QE},t1={[gi]:t=>t,[Ue]:t=>t.convertLinearToSRGB(),[G_]:JE},Wn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return gi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=e1[e],r=t1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let io;class $_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=ha("canvas")),io.width=e.width,io.height=e.height;const i=io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=io}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Vo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vo(n[i]/255)*255):n[i]=Vo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n1=0;class X_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ic(r[s].image)):o.push(Ic(r[s]))}else o=Ic(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Ic(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i1=0;class pn extends is{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Qn,r=Qn,o=Fn,s=ca,a=Jn,l=hr,u=pn.DEFAULT_ANISOTROPY,c=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=rs(),this.name="",this.source=new X_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Gr?Ue:Wr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Gr:H_}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gr?Ue:Wr}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=I_;pn.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,E=(f+1)/2,R=(c+h)/4,C=(d+x)/4,b=(_+m)/4;return g>y&&g>E?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=R/i,o=C/i):y>E?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=R/r,o=b/r):E<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),i=C/o,r=b/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zr extends is{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gr?Ue:Wr),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Fn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new X_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class j_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==p||c!==_){let m=1-a;const f=l*h+u*p+c*_+d*x,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const E=Math.sqrt(g),R=Math.atan2(E,f*v);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,d=d*m+x*y,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],p=o[s+2],_=o[s+3];return e[n]=a*_+c*d+l*p-u*h,e[n+1]=l*_+c*h+u*d-a*p,e[n+2]=u*_+c*p+a*h-l*d,e[n+3]=c*_-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"YXZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"ZXY":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"ZYX":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"YZX":this._x=h*c*d+u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d-h*p*_;break;case"XZY":this._x=h*c*d-u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,c=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+c*-a-d*-s,this.y=c*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-c*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new U,zm=new Ea;class Ta{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox),ro.applyMatrix4(e.matrixWorld),this.union(ro);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)xi.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(xi)}else r.boundingBox===null&&r.computeBoundingBox(),ro.copy(r.boundingBox),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Xa.subVectors(this.max,vs),oo.subVectors(e.a,vs),so.subVectors(e.b,vs),ao.subVectors(e.c,vs),Vi.subVectors(so,oo),Gi.subVectors(ao,so),Mr.subVectors(oo,ao);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Mr.z,Mr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Mr.z,0,-Mr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Mr.y,Mr.x,0];return!Fc(n,oo,so,ao,Xa)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,oo,so,ao,Xa))?!1:(ja.crossVectors(Vi,Gi),n=[ja.x,ja.y,ja.z],Fc(n,oo,so,ao,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new U,new U,new U,new U,new U,new U,new U,new U],xi=new U,ro=new Ta,oo=new U,so=new U,ao=new U,Vi=new U,Gi=new U,Mr=new U,vs=new U,Xa=new U,ja=new U,Er=new U;function Fc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Er.fromArray(t,o);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),u=n.dot(Er),c=i.dot(Er);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const o1=new Ta,_s=new U,kc=new U;class yh{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const n=_s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(kc)),this.expandByPoint(_s.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new U,Oc=new U,qa=new U,Wi=new U,zc=new U,Ya=new U,Bc=new U;class s1{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(qa),a=Wi.dot(this.direction),l=-Wi.dot(qa),u=Wi.lengthSq(),c=Math.abs(1-s*s);let d,h,p,_;if(c>0)if(d=s*l-a,h=s*a-l,_=o*c,d>=0)if(h>=-_)if(h<=_){const x=1/c;d*=x,h*=x,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Oc).addScaledVector(qa,h),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,o){zc.subVectors(n,e),Ya.subVectors(i,e),Bc.crossVectors(zc,Ya);let s=this.direction.dot(Bc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Wi,Ya));if(l<0)return null;const u=a*this.direction.dot(zc.cross(Wi));if(u<0||l+u>s)return null;const c=-a*Wi.dot(Bc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,m)}set(e,n,i,r,o,s,a,l,u,c,d,h,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lo.setFromMatrixColumn(e,0).length(),o=1/lo.setFromMatrixColumn(e,1).length(),s=1/lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,p=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,_=u*c,x=u*d;n[0]=h+x*a,n[4]=_*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,_=u*c,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,p=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=_*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=_*d+p,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,p=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=s*c,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,l1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),$i.crossVectors(i,vn),$i.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),$i.crossVectors(i,vn)),$i.normalize(),Ka.crossVectors(vn,$i),r[0]=$i.x,r[4]=Ka.x,r[8]=vn.x,r[1]=$i.y,r[5]=Ka.y,r[9]=vn.y,r[2]=$i.z,r[6]=Ka.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],v=i[3],g=i[7],y=i[11],E=i[15],R=r[0],C=r[4],b=r[8],S=r[12],w=r[1],Y=r[5],Q=r[9],O=r[13],V=r[2],W=r[6],K=r[10],j=r[14],L=r[3],H=r[7],z=r[11],I=r[15];return o[0]=s*R+a*w+l*V+u*L,o[4]=s*C+a*Y+l*W+u*H,o[8]=s*b+a*Q+l*K+u*z,o[12]=s*S+a*O+l*j+u*I,o[1]=c*R+d*w+h*V+p*L,o[5]=c*C+d*Y+h*W+p*H,o[9]=c*b+d*Q+h*K+p*z,o[13]=c*S+d*O+h*j+p*I,o[2]=_*R+x*w+m*V+f*L,o[6]=_*C+x*Y+m*W+f*H,o[10]=_*b+x*Q+m*K+f*z,o[14]=_*S+x*O+m*j+f*I,o[3]=v*R+g*w+y*V+E*L,o[7]=v*C+g*Y+y*W+E*H,o[11]=v*b+g*Q+y*K+E*z,o[15]=v*S+g*O+y*j+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*c-o*l*c)+m*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],v=d*m*u-x*h*u+x*l*p-a*m*p-d*l*f+a*h*f,g=_*h*u-c*m*u-_*l*p+s*m*p+c*l*f-s*h*f,y=c*x*u-_*d*u+_*a*p-s*x*p-c*a*f+s*d*f,E=_*d*l-c*x*l-_*a*h+s*x*h+c*a*m-s*d*m,R=n*v+i*g+r*y+o*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=v*C,e[1]=(x*h*o-d*m*o-x*r*p+i*m*p+d*r*f-i*h*f)*C,e[2]=(a*m*o-x*l*o+x*r*u-i*m*u-a*r*f+i*l*f)*C,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=g*C,e[5]=(c*m*o-_*h*o+_*r*p-n*m*p-c*r*f+n*h*f)*C,e[6]=(_*l*o-s*m*o-_*r*u+n*m*u+s*r*f-n*l*f)*C,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*p+n*l*p)*C,e[8]=y*C,e[9]=(_*d*o-c*x*o-_*i*p+n*x*p+c*i*f-n*d*f)*C,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*f+n*a*f)*C,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*p-n*a*p)*C,e[12]=E*C,e[13]=(c*x*r-_*d*r+_*i*h-n*x*h-c*i*m+n*d*m)*C,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*m-n*a*m)*C,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,p=o*c,_=o*d,x=s*c,m=s*d,f=a*d,v=l*u,g=l*c,y=l*d,E=i.x,R=i.y,C=i.z;return r[0]=(1-(x+f))*E,r[1]=(p+y)*E,r[2]=(_-g)*E,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+f))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+g)*C,r[9]=(m-v)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=lo.set(r[0],r[1],r[2]).length();const s=lo.set(r[4],r[5],r[6]).length(),a=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/o,c=1/s,d=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=c,$n.elements[5]*=c,$n.elements[6]*=c,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Li){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Li)p=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===cu)p=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Li){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,p=(i+r)*c;let _,x;if(a===Li)_=(s+o)*d,x=-2*d;else if(a===cu)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lo=new U,$n=new yt,a1=new U(0,0,0),l1=new U(1,1,1),$i=new U,Ka=new U,vn=new U,Bm=new yt,Hm=new Ea;class zu{constructor(e=0,n=0,i=0,r=zu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zu.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u1=0;const Vm=new U,uo=new Ea,Si=new yt,Za=new U,xs=new U,c1=new U,f1=new Ea,Gm=new U(1,0,0),Wm=new U(0,1,0),$m=new U(0,0,1),d1={type:"added"},Xm={type:"removed"};class mn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new U,n=new zu,i=new Ea,r=new U(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,n){return uo.setFromAxisAngle(e,n),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,n){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(xs,Za,this.up):Si.lookAt(Za,xs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),uo.setFromRotationMatrix(Si),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Xm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Xm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,c1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,f1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new U(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,Mi=new U,Hc=new U,Ei=new U,co=new U,fo=new U,jm=new U,Vc=new U,Gc=new U,Wc=new U;let Qa=!1;class Zn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Xn.subVectors(r,n),Mi.subVectors(i,n),Hc.subVectors(e,n);const s=Xn.dot(Xn),a=Xn.dot(Mi),l=Xn.dot(Hc),u=Mi.dot(Mi),c=Mi.dot(Hc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,n,i,r,o,s,a,l){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ei),l.setScalar(0),l.addScaledVector(o,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(a,Ei.z),l}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Mi.subVectors(e,n),Xn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Xn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;co.subVectors(r,i),fo.subVectors(o,i),Vc.subVectors(e,i);const l=co.dot(Vc),u=fo.dot(Vc);if(l<=0&&u<=0)return n.copy(i);Gc.subVectors(e,r);const c=co.dot(Gc),d=fo.dot(Gc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(co,s);Wc.subVectors(e,o);const p=co.dot(Wc),_=fo.dot(Wc);if(_>=0&&p<=_)return n.copy(o);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(fo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return jm.subVectors(o,r),a=(d-c)/(d-c+(p-_)),n.copy(r).addScaledVector(jm,a);const f=1/(m+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(co,s).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let h1=0;class wa extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ho,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=b_,this.blendDst=D_,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bc,this.stencilZFail=bc,this.stencilZPass=bc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Wn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Wn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Wn.workingColorSpace){if(e=xh(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=$c(s,o,e+1/3),this.g=$c(s,o,e),this.b=$c(s,o,e-1/3)}return Wn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ue){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ue){const i=Y_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Wn.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Kt(Vt.r*255,0,255))*65536+Math.round(Kt(Vt.g*255,0,255))*256+Math.round(Kt(Vt.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Wn.workingColorSpace){Wn.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,o=Vt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Wn.workingColorSpace){return Wn.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ue){Wn.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Ue?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(jn),jn.h+=e,jn.s+=n,jn.l+=i,this.setHSL(jn.h,jn.s,jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(jn),e.getHSL(Ja);const i=Gs(jn.h,Ja.h,n),r=Gs(jn.s,Ja.s,n),o=Gs(jn.l,Ja.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ke;Ke.NAMES=Y_;class Sh extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new U,el=new je;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nm,this.updateRange={offset:0,count:-1},this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Cs(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Cs(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Cs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Cs(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),o=on(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class K_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pn extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let p1=0;const Un=new yt,Xc=new mn,ho=new U,_n=new Ta,ys=new Ta,Ct=new U;class Bi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?Z_:K_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Pn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(_n.min,ys.min),_n.expandByPoint(Ct),Ct.addVectors(_n.max,ys.max),_n.expandByPoint(Ct)):(_n.expandByPoint(ys.min),_n.expandByPoint(ys.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ct.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(ho.fromBufferAttribute(e,u),Ct.add(ho)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new U,c[w]=new U;const d=new U,h=new U,p=new U,_=new je,x=new je,m=new je,f=new U,v=new U;function g(w,Y,Q){d.fromArray(r,w*3),h.fromArray(r,Y*3),p.fromArray(r,Q*3),_.fromArray(s,w*2),x.fromArray(s,Y*2),m.fromArray(s,Q*2),h.sub(d),p.sub(d),x.sub(_),m.sub(_);const O=1/(x.x*m.y-m.x*x.y);isFinite(O)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(O),v.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(O),u[w].add(f),u[Y].add(f),u[Q].add(f),c[w].add(v),c[Y].add(v),c[Q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,Y=y.length;w<Y;++w){const Q=y[w],O=Q.start,V=Q.count;for(let W=O,K=O+V;W<K;W+=3)g(i[W+0],i[W+1],i[W+2])}const E=new U,R=new U,C=new U,b=new U;function S(w){C.fromArray(o,w*3),b.copy(C);const Y=u[w];E.copy(Y),E.sub(C.multiplyScalar(C.dot(Y))).normalize(),R.crossVectors(b,Y);const O=R.dot(c[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=O}for(let w=0,Y=y.length;w<Y;++w){const Q=y[w],O=Q.start,V=Q.count;for(let W=O,K=O+V;W<K;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,o=new U,s=new U,a=new U,l=new U,u=new U,c=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)h[_++]=u[p++]}return new mi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qm=new yt,Tr=new s1,tl=new yh,Ym=new U,po=new U,mo=new U,go=new U,jc=new U,nl=new U,il=new je,rl=new je,ol=new je,Km=new U,Zm=new U,Qm=new U,sl=new U,al=new U;class On extends mn{constructor(e=new Bi,n=new Sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){nl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(jc.fromBufferAttribute(d,e),s?nl.addScaledVector(jc,c):nl.addScaledVector(jc.sub(n),c))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(o),Tr.copy(e.ray).recast(e.near),!(tl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(tl,Ym)===null||Tr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(qm.copy(o).invert(),Tr.copy(e.ray).applyMatrix4(qm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],f=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=g;y<E;y+=3){const R=a.getX(y),C=a.getX(y+1),b=a.getX(y+2);r=ll(this,f,e,i,u,c,d,R,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=ll(this,s,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],f=s[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=g;y<E;y+=3){const R=y,C=y+1,b=y+2;r=ll(this,f,e,i,u,c,d,R,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const v=m,g=m+1,y=m+2;r=ll(this,s,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function m1(t,e,n,i,r,o,s,a){let l;if(e.side===hn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===gr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(al);return u<n.near||u>n.far?null:{distance:u,point:al.clone(),object:t}}function ll(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,po),t.getVertexPosition(l,mo),t.getVertexPosition(u,go);const c=m1(t,e,n,i,po,mo,go,sl);if(c){r&&(il.fromBufferAttribute(r,a),rl.fromBufferAttribute(r,l),ol.fromBufferAttribute(r,u),c.uv=Zn.getInterpolation(sl,po,mo,go,il,rl,ol,new je)),o&&(il.fromBufferAttribute(o,a),rl.fromBufferAttribute(o,l),ol.fromBufferAttribute(o,u),c.uv1=Zn.getInterpolation(sl,po,mo,go,il,rl,ol,new je),c.uv2=c.uv1),s&&(Km.fromBufferAttribute(s,a),Zm.fromBufferAttribute(s,l),Qm.fromBufferAttribute(s,u),c.normal=Zn.getInterpolation(sl,po,mo,go,Km,Zm,Qm,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new U,materialIndex:0};Zn.getNormal(po,mo,go,d.normal),c.face=d}return c}class Aa extends Bi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Pn(u,3)),this.setAttribute("normal",new Pn(c,3)),this.setAttribute("uv",new Pn(d,2));function _(x,m,f,v,g,y,E,R,C,b,S){const w=y/C,Y=E/b,Q=y/2,O=E/2,V=R/2,W=C+1,K=b+1;let j=0,L=0;const H=new U;for(let z=0;z<K;z++){const I=z*Y-O;for(let k=0;k<W;k++){const re=k*w-Q;H[x]=re*v,H[m]=I*g,H[f]=V,u.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[f]=R>0?1:-1,c.push(H.x,H.y,H.z),d.push(k/C),d.push(1-z/b),j+=1}}for(let z=0;z<b;z++)for(let I=0;I<C;I++){const k=h+I+W*z,re=h+I+W*(z+1),ne=h+(I+1)+W*(z+1),ce=h+(I+1)+W*z;l.push(k,re,ce),l.push(re,ne,ce),L+=6}a.addGroup(p,L,S),p+=L,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Jo(t[n]);for(const r in i)e[r]=i[r]}return e}function g1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q_(t){return t.getRenderTarget()===null?t.outputColorSpace:gi}const v1={clone:Jo,merge:qt};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=x1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=g1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let J_=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class An extends J_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vo=-90,_o=1;class y1 extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new An(vo,_o,e,n);r.layers=this.layers,this.add(r);const o=new An(vo,_o,e,n);o.layers=this.layers,this.add(o);const s=new An(vo,_o,e,n);s.layers=this.layers,this.add(s);const a=new An(vo,_o,e,n);a.layers=this.layers,this.add(a);const l=new An(vo,_o,e,n);l.layers=this.layers,this.add(l);const u=new An(vo,_o,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class ex extends pn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ko,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S1 extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gr?Ue:Wr),this.texture=new ex(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),o=new Qr({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:dr});o.uniforms.tEquirect.value=n;const s=new On(r,o),a=n.minFilter;return n.minFilter===ca&&(n.minFilter=Fn),new y1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const qc=new U,M1=new U,E1=new ke;class Rr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(M1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||E1.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new yh,ul=new U;class Mh{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,o=new Rr,s=new Rr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],f=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,m-p,y-f).normalize(),i[1].setComponents(l+o,h+u,m+p,y+f).normalize(),i[2].setComponents(l+s,h+c,m+_,y+v).normalize(),i[3].setComponents(l-s,h-c,m-_,y-v).normalize(),i[4].setComponents(l-a,h-d,m-x,y-g).normalize(),n===Li)i[5].setComponents(l+a,h+d,m+x,y+g).normalize();else if(n===cu)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function T1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,d){const h=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(o(d.buffer,u,c),d.version=u.version)}return{get:s,remove:a,update:l}}class Bu extends Bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let f=0;f<c;f++){const v=f*h-s;for(let g=0;g<u;g++){const y=g*d-o;_.push(y,-v,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+u*f,y=v+u*(f+1),E=v+1+u*(f+1),R=v+1+u*f;p.push(g,y,R),p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new Pn(_,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var w1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ET=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,bT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,OT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ww=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:w1,alphahash_pars_fragment:A1,alphamap_fragment:C1,alphamap_pars_fragment:R1,alphatest_fragment:P1,alphatest_pars_fragment:L1,aomap_fragment:b1,aomap_pars_fragment:D1,begin_vertex:U1,beginnormal_vertex:I1,bsdfs:N1,iridescence_fragment:F1,bumpmap_pars_fragment:k1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:H1,color_fragment:V1,color_pars_fragment:G1,color_pars_vertex:W1,color_vertex:$1,common:X1,cube_uv_reflection_fragment:j1,defaultnormal_vertex:q1,displacementmap_pars_vertex:Y1,displacementmap_vertex:K1,emissivemap_fragment:Z1,emissivemap_pars_fragment:Q1,colorspace_fragment:J1,colorspace_pars_fragment:eT,envmap_fragment:tT,envmap_common_pars_fragment:nT,envmap_pars_fragment:iT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:gT,envmap_vertex:oT,fog_vertex:sT,fog_pars_vertex:aT,fog_fragment:lT,fog_pars_fragment:uT,gradientmap_pars_fragment:cT,lightmap_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:vT,lights_toon_pars_fragment:_T,lights_phong_fragment:xT,lights_phong_pars_fragment:yT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:TT,lights_fragment_end:wT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:PT,map_fragment:LT,map_pars_fragment:bT,map_particle_fragment:DT,map_particle_pars_fragment:UT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:NT,morphcolor_vertex:FT,morphnormal_vertex:kT,morphtarget_pars_vertex:OT,morphtarget_vertex:zT,normal_fragment_begin:BT,normal_fragment_maps:HT,normal_pars_fragment:VT,normal_pars_vertex:GT,normal_vertex:WT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:XT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:qT,iridescence_pars_fragment:YT,opaque_fragment:KT,packing:ZT,premultiplied_alpha_fragment:QT,project_vertex:JT,dithering_fragment:ew,dithering_pars_fragment:tw,roughnessmap_fragment:nw,roughnessmap_pars_fragment:iw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:ow,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:lw,skinning_pars_vertex:uw,skinning_vertex:cw,skinnormal_vertex:fw,specularmap_fragment:dw,specularmap_pars_fragment:hw,tonemapping_fragment:pw,tonemapping_pars_fragment:mw,transmission_fragment:gw,transmission_pars_fragment:vw,uv_pars_fragment:_w,uv_pars_vertex:xw,uv_vertex:yw,worldpos_vertex:Sw,background_vert:Mw,background_frag:Ew,backgroundCube_vert:Tw,backgroundCube_frag:ww,cube_vert:Aw,cube_frag:Cw,depth_vert:Rw,depth_frag:Pw,distanceRGBA_vert:Lw,distanceRGBA_frag:bw,equirect_vert:Dw,equirect_frag:Uw,linedashed_vert:Iw,linedashed_frag:Nw,meshbasic_vert:Fw,meshbasic_frag:kw,meshlambert_vert:Ow,meshlambert_frag:zw,meshmatcap_vert:Bw,meshmatcap_frag:Hw,meshnormal_vert:Vw,meshnormal_frag:Gw,meshphong_vert:Ww,meshphong_frag:$w,meshphysical_vert:Xw,meshphysical_frag:jw,meshtoon_vert:qw,meshtoon_frag:Yw,points_vert:Kw,points_frag:Zw,shadow_vert:Qw,shadow_frag:Jw,sprite_vert:eA,sprite_frag:tA},ie={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ci={basic:{uniforms:qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:qt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:qt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ke(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:qt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:qt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:qt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:qt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:qt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:qt([ie.lights,ie.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ci.physical={uniforms:qt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const cl={r:0,b:0,g:0};function nA(t,e,n,i,r,o,s){const a=new Ke(0);let l=o===!0?0:1,u,c,d=null,h=0,p=null;function _(m,f){let v=!1,g=f.isScene===!0?f.background:null;switch(g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ou)?(c===void 0&&(c=new On(new Aa(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:Jo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ue,(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new On(new Bu(2,2),new Qr({name:"BackgroundMaterial",uniforms:Jo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ue,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,f){m.getRGB(cl,Q_(t)),i.buffers.color.setClear(cl.r,cl.g,cl.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function iA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let u=l,c=!1;function d(V,W,K,j,L){let H=!1;if(s){const z=x(j,K,W);u!==z&&(u=z,p(u.object)),H=f(V,j,K,L),H&&v(V,j,K,L)}else{const z=W.wireframe===!0;(u.geometry!==j.id||u.program!==K.id||u.wireframe!==z)&&(u.geometry=j.id,u.program=K.id,u.wireframe=z,H=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(H||c)&&(c=!1,b(V,W,K,j),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(V){return i.isWebGL2?t.bindVertexArray(V):o.bindVertexArrayOES(V)}function _(V){return i.isWebGL2?t.deleteVertexArray(V):o.deleteVertexArrayOES(V)}function x(V,W,K){const j=K.wireframe===!0;let L=a[V.id];L===void 0&&(L={},a[V.id]=L);let H=L[W.id];H===void 0&&(H={},L[W.id]=H);let z=H[j];return z===void 0&&(z=m(h()),H[j]=z),z}function m(V){const W=[],K=[],j=[];for(let L=0;L<r;L++)W[L]=0,K[L]=0,j[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:j,object:V,attributes:{},index:null}}function f(V,W,K,j){const L=u.attributes,H=W.attributes;let z=0;const I=K.getAttributes();for(const k in I)if(I[k].location>=0){const ne=L[k];let ce=H[k];if(ce===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;z++}return u.attributesNum!==z||u.index!==j}function v(V,W,K,j){const L={},H=W.attributes;let z=0;const I=K.getAttributes();for(const k in I)if(I[k].location>=0){let ne=H[k];ne===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(ne=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(ne=V.instanceColor));const ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),L[k]=ce,z++}u.attributes=L,u.attributesNum=z,u.index=j}function g(){const V=u.newAttributes;for(let W=0,K=V.length;W<K;W++)V[W]=0}function y(V){E(V,0)}function E(V,W){const K=u.newAttributes,j=u.enabledAttributes,L=u.attributeDivisors;K[V]=1,j[V]===0&&(t.enableVertexAttribArray(V),j[V]=1),L[V]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),L[V]=W)}function R(){const V=u.newAttributes,W=u.enabledAttributes;for(let K=0,j=W.length;K<j;K++)W[K]!==V[K]&&(t.disableVertexAttribArray(K),W[K]=0)}function C(V,W,K,j,L,H,z){z===!0?t.vertexAttribIPointer(V,W,K,L,H):t.vertexAttribPointer(V,W,K,j,L,H)}function b(V,W,K,j){if(i.isWebGL2===!1&&(V.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const L=j.attributes,H=K.getAttributes(),z=W.defaultAttributeValues;for(const I in H){const k=H[I];if(k.location>=0){let re=L[I];if(re===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(re=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(re=V.instanceColor)),re!==void 0){const ne=re.normalized,ce=re.itemSize,ge=n.get(re);if(ge===void 0)continue;const Te=ge.buffer,Me=ge.type,qe=ge.bytesPerElement,rn=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||re.gpuType===N_);if(re.isInterleavedBufferAttribute){const He=re.data,N=He.stride,kt=re.offset;if(He.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)E(k.location+Ee,He.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)y(k.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Ee=0;Ee<k.locationSize;Ee++)C(k.location+Ee,ce/k.locationSize,Me,ne,N*qe,(kt+ce/k.locationSize*Ee)*qe,rn)}else{if(re.isInstancedBufferAttribute){for(let He=0;He<k.locationSize;He++)E(k.location+He,re.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let He=0;He<k.locationSize;He++)y(k.location+He);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let He=0;He<k.locationSize;He++)C(k.location+He,ce/k.locationSize,Me,ne,ce*qe,ce/k.locationSize*He*qe,rn)}}else if(z!==void 0){const ne=z[I];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(k.location,ne);break;case 3:t.vertexAttrib3fv(k.location,ne);break;case 4:t.vertexAttrib4fv(k.location,ne);break;default:t.vertexAttrib1fv(k.location,ne)}}}}R()}function S(){Q();for(const V in a){const W=a[V];for(const K in W){const j=W[K];for(const L in j)_(j[L].object),delete j[L];delete W[K]}delete a[V]}}function w(V){if(a[V.id]===void 0)return;const W=a[V.id];for(const K in W){const j=W[K];for(const L in j)_(j[L].object),delete j[L];delete W[K]}delete a[V.id]}function Y(V){for(const W in a){const K=a[W];if(K[V.id]===void 0)continue;const j=K[V.id];for(const L in j)_(j[L].object),delete j[L];delete K[V.id]}}function Q(){O(),c=!0,u!==l&&(u=l,p(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function rA(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,u,c,d),n.update(c,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function oA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=s||e.has("OES_texture_float"),E=g&&y,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:R}}function sA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Rr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!m)o?c(null):u();else{const v=o?0:i,g=v*4;let y=f.clippingState||null;l.value=y,y=c(_,h,g,p);for(let E=0;E!==g;++E)y[E]=n[E];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)s.copy(d[g]).applyMatrix4(v,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aA(t){let e=new WeakMap;function n(s,a){return a===od?s.mapping=Ko:a===sd&&(s.mapping=Zo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===od||a===sd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new S1(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class lA extends J_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Io=4,Jm=[.125,.215,.35,.446,.526,.582],Lr=20,Yc=new lA,eg=new Ke;let Kc=null;const Pr=(1+Math.sqrt(5))/2,xo=1/Pr,tg=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Pr,xo),new U(0,Pr,-xo),new U(xo,0,Pr),new U(-xo,0,Pr),new U(Pr,xo,0),new U(-Pr,xo,0)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:fa,format:Jn,colorSpace:gi,depthBuffer:!1},r=ig(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uA(o)),this._blurMaterial=cA(o,e,n)}return r}_compileMaterial(e){const n=new On(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(eg),c.toneMapping=Di,c.autoClear=!1;const p=new Sh({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new On(new Aa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(eg),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;fl(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new On(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=tg[(r-1)%tg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new On(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),x=o/_,m=isFinite(o)?1+Math.floor(c*x):Lr;m>Lr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const f=[];let v=0;for(let C=0;C<Lr;++C){const b=C/x,S=Math.exp(-b*b/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const y=this._sizeLods[r],E=3*y*(r>g-Io?r-g+Io:0),R=4*(this._cubeSize-y);fl(n,E,R,3*y,2*y),l.setRenderTarget(n),l.render(d,Yc)}}function uA(t){const e=[],n=[],i=[];let r=t;const o=t-Io+1+Jm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Io?l=Jm[s-t+Io-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,x=3,m=2,f=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,b=R>2?0:-1,S=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];v.set(S,x*_*R),g.set(h,m*_*R);const w=[R,R,R,R,R,R];y.set(w,f*_*R)}const E=new Bi;E.setAttribute("position",new mi(v,x)),E.setAttribute("uv",new mi(g,m)),E.setAttribute("faceIndex",new mi(y,f)),e.push(E),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ig(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cA(t,e,n){const i=new Float32Array(Lr),r=new U(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function rg(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function og(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===od||l===sd,c=l===Ko||l===Zo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new ng(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new ng(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function dA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hA(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,y=v.length;g<y;g+=3){const E=v[g+0],R=v[g+1],C=v[g+2];h.push(E,R,R,C,C,E)}}else{const v=_.array;x=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const E=g+0,R=g+1,C=g+2;h.push(E,R,R,C,C,E)}}const m=new(W_(h)?Z_:K_)(h,1);m.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function c(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function pA(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(o,p,a,h*l),n.update(p,o,1)}function d(h,p,_){if(_===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](o,p,a,h*l,_),n.update(p,o,_)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d}function mA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gA(t,e){return t[0]-e[0]}function vA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _A(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let m=o.get(c);if(m===void 0||m.count!==x){let W=function(){O.dispose(),o.delete(c),c.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let w=c.attributes.position.count*S,Y=1;w>e.maxTextureSize&&(Y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Q=new Float32Array(w*Y*4*x),O=new j_(Q,w,Y,x);O.type=tr,O.needsUpdate=!0;const V=S*4;for(let K=0;K<x;K++){const j=R[K],L=C[K],H=b[K],z=w*Y*4*K;for(let I=0;I<j.count;I++){const k=I*V;g===!0&&(s.fromBufferAttribute(j,I),Q[z+k+0]=s.x,Q[z+k+1]=s.y,Q[z+k+2]=s.z,Q[z+k+3]=0),y===!0&&(s.fromBufferAttribute(L,I),Q[z+k+4]=s.x,Q[z+k+5]=s.y,Q[z+k+6]=s.z,Q[z+k+7]=0),E===!0&&(s.fromBufferAttribute(H,I),Q[z+k+8]=s.x,Q[z+k+9]=s.y,Q[z+k+10]=s.z,Q[z+k+11]=H.itemSize===4?s.w:1)}}m={count:x,texture:O,size:new je(w,Y)},o.set(c,m),c.addEventListener("dispose",W)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<_;y++){const E=x[y];E[0]=y,E[1]=h[y]}x.sort(vA);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(gA);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=a[y],R=E[0],C=E[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&c.getAttribute("morphTarget"+y)!==m[R]&&c.setAttribute("morphTarget"+y,m[R]),f&&c.getAttribute("morphNormal"+y)!==f[R]&&c.setAttribute("morphNormal"+y,f[R]),r[y]=C,v+=C):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function xA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const nx=new pn,ix=new j_,rx=new r1,ox=new ex,sg=[],ag=[],lg=new Float32Array(16),ug=new Float32Array(9),cg=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=sg[r];if(o===void 0&&(o=new Float32Array(r),sg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=ag[e];n===void 0&&(n=new Int32Array(e),ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function TA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),Tt(n,i)}}function wA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),Tt(n,i)}}function AA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Et(n,i))return;lg.set(i),t.uniformMatrix4fv(this.addr,!1,lg),Tt(n,i)}}function CA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function NA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||nx,r)}function FA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rx,r)}function kA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ox,r)}function OA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ix,r)}function zA(t){switch(t){case 5126:return yA;case 35664:return SA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return wA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return bA;case 36294:return DA;case 36295:return UA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return OA}}function BA(t,e){t.uniform1fv(this.addr,e)}function HA(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function VA(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function GA(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function WA(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $A(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XA(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jA(t,e){t.uniform1iv(this.addr,e)}function qA(t,e){t.uniform2iv(this.addr,e)}function YA(t,e){t.uniform3iv(this.addr,e)}function KA(t,e){t.uniform4iv(this.addr,e)}function ZA(t,e){t.uniform1uiv(this.addr,e)}function QA(t,e){t.uniform2uiv(this.addr,e)}function JA(t,e){t.uniform3uiv(this.addr,e)}function eC(t,e){t.uniform4uiv(this.addr,e)}function tC(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Et(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||nx,o[s])}function nC(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Et(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||rx,o[s])}function iC(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Et(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||ox,o[s])}function rC(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Et(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ix,o[s])}function oC(t){switch(t){case 5126:return BA;case 35664:return HA;case 35665:return VA;case 35666:return GA;case 35674:return WA;case 35675:return $A;case 35676:return XA;case 5124:case 35670:return jA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return KA;case 5125:return ZA;case 36294:return QA;case 36295:return JA;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return rC}}class sC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=zA(n.type)}}class aC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=oC(n.type)}}class lC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function fg(t,e){t.seq.push(e),t.map[e.id]=e}function uC(t,e,n){const i=t.name,r=i.length;for(Zc.lastIndex=0;;){const o=Zc.exec(i),s=Zc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){fg(n,u===void 0?new sC(a,t,e):new aC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lC(a),fg(n,d)),n=d}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);uC(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let cC=0;function fC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function dC(t){switch(t){case gi:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+fC(t.getShaderSource(e),s)}else return r}function hC(t,e){const n=dC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function pC(t,e){let n;switch(e){case lE:n="Linear";break;case uE:n="Reinhard";break;case cE:n="OptimizedCineon";break;case fE:n="ACESFilmic";break;case dE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mC(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function gC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Rs(t){return t!==""}function pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _C=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(t){return t.replace(_C,yC)}const xC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yC(t,e){let n=De[e];if(n===void 0){const i=xC.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fd(n)}const SC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(t){return t.replace(SC,MC)}function MC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function vg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===BM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function TC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function AC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case U_:e="ENVMAP_BLENDING_MULTIPLY";break;case sE:e="ENVMAP_BLENDING_MIX";break;case aE:e="ENVMAP_BLENDING_ADD";break}return e}function CC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RC(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=EC(n),u=TC(n),c=wC(n),d=AC(n),h=CC(n),p=n.isWebGL2?"":mC(n),_=gC(o),x=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(m=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[p,vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?De.tonemapping_pars_fragment:"",n.toneMapping!==Di?pC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,hC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),s=fd(s),s=pg(s,n),s=mg(s,n),a=fd(a),a=pg(a,n),a=mg(a,n),s=gg(s),a=gg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+m+s,y=v+f+a,E=dg(r,r.VERTEX_SHADER,g),R=dg(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,E),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),w=r.getShaderInfoLog(E).trim(),Y=r.getShaderInfoLog(R).trim();let Q=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,R);else{const V=hg(r,E,"vertex"),W=hg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+V+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:w,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(E),r.deleteShader(R);let C;this.getUniforms=function(){return C===void 0&&(C=new Pl(r,x)),C};let b;return this.getAttributes=function(){return b===void 0&&(b=vC(r,x)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=R,this}let PC=0;class LC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bC(e),n.set(e,i)),i}}class bC{constructor(e){this.id=PC++,this.code=e,this.usedTimes=0}}function DC(t,e,n,i,r,o,s){const a=new q_,l=new LC,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,w,Y,Q,O){const V=Q.fog,W=O.geometry,K=S.isMeshStandardMaterial?Q.environment:null,j=(S.isMeshStandardMaterial?n:e).get(S.envMap||K),L=j&&j.mapping===Ou?j.image.height:null,H=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,I=z!==void 0?z.length:0;let k=0;W.morphAttributes.position!==void 0&&(k=1),W.morphAttributes.normal!==void 0&&(k=2),W.morphAttributes.color!==void 0&&(k=3);let re,ne,ce,ge;if(H){const ii=ci[H];re=ii.vertexShader,ne=ii.fragmentShader}else re=S.vertexShader,ne=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Te=t.getRenderTarget(),Me=O.isInstancedMesh===!0,qe=!!S.map,rn=!!S.matcap,He=!!j,N=!!S.aoMap,kt=!!S.lightMap,Ee=!!S.bumpMap,Le=!!S.normalMap,Ce=!!S.displacementMap,at=!!S.emissiveMap,Ge=!!S.metalnessMap,Ne=!!S.roughnessMap,Ze=S.anisotropy>0,Lt=S.clearcoat>0,Ot=S.iridescence>0,A=S.sheen>0,M=S.transmission>0,$=Ze&&!!S.anisotropyMap,J=Lt&&!!S.clearcoatMap,ee=Lt&&!!S.clearcoatNormalMap,ae=Lt&&!!S.clearcoatRoughnessMap,ve=Ot&&!!S.iridescenceMap,le=Ot&&!!S.iridescenceThicknessMap,q=A&&!!S.sheenColorMap,_e=A&&!!S.sheenRoughnessMap,xe=!!S.specularMap,Se=!!S.specularColorMap,he=!!S.specularIntensityMap,pe=M&&!!S.transmissionMap,ze=M&&!!S.thicknessMap,Qe=!!S.gradientMap,P=!!S.alphaMap,oe=S.alphaTest>0,B=!!S.alphaHash,te=!!S.extensions,ue=!!W.attributes.uv1,Xe=!!W.attributes.uv2,lt=!!W.attributes.uv3;return{isWebGL2:c,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:ne,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Me,instancingColor:Me&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:gi,map:qe,matcap:rn,envMap:He,envMapMode:He&&j.mapping,envMapCubeUVHeight:L,aoMap:N,lightMap:kt,bumpMap:Ee,normalMap:Le,displacementMap:h&&Ce,emissiveMap:at,normalMapObjectSpace:Le&&S.normalMapType===wE,normalMapTangentSpace:Le&&S.normalMapType===V_,metalnessMap:Ge,roughnessMap:Ne,anisotropy:Ze,anisotropyMap:$,clearcoat:Lt,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,iridescence:Ot,iridescenceMap:ve,iridescenceThicknessMap:le,sheen:A,sheenColorMap:q,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:Se,specularIntensityMap:he,transmission:M,transmissionMap:pe,thicknessMap:ze,gradientMap:Qe,opaque:S.transparent===!1&&S.blending===Ho,alphaMap:P,alphaTest:oe,alphaHash:B,combine:S.combine,mapUv:qe&&x(S.map.channel),aoMapUv:N&&x(S.aoMap.channel),lightMapUv:kt&&x(S.lightMap.channel),bumpMapUv:Ee&&x(S.bumpMap.channel),normalMapUv:Le&&x(S.normalMap.channel),displacementMapUv:Ce&&x(S.displacementMap.channel),emissiveMapUv:at&&x(S.emissiveMap.channel),metalnessMapUv:Ge&&x(S.metalnessMap.channel),roughnessMapUv:Ne&&x(S.roughnessMap.channel),anisotropyMapUv:$&&x(S.anisotropyMap.channel),clearcoatMapUv:J&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(S.sheenRoughnessMap.channel),specularMapUv:xe&&x(S.specularMap.channel),specularColorMapUv:Se&&x(S.specularColorMap.channel),specularIntensityMapUv:he&&x(S.specularIntensityMap.channel),transmissionMapUv:pe&&x(S.transmissionMap.channel),thicknessMapUv:ze&&x(S.thicknessMap.channel),alphaMapUv:P&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Le||Ze),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Xe,vertexUv3s:lt,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(qe||P),fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Di,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:te&&S.extensions.derivatives===!0,extensionFragDepth:te&&S.extensions.fragDepth===!0,extensionDrawBuffers:te&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)w.push(Y),w.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(v(w,S),g(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function g(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function y(S){const w=_[S.type];let Y;if(w){const Q=ci[w];Y=v1.clone(Q.uniforms)}else Y=S.uniforms;return Y}function E(S,w){let Y;for(let Q=0,O=u.length;Q<O;Q++){const V=u[Q];if(V.cacheKey===w){Y=V,++Y.usedTimes;break}}return Y===void 0&&(Y=new RC(t,w,S,o),u.push(Y)),Y}function R(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:b}}function UC(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function IC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,_,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,_,x,m){const f=s(d,h,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,_,x,m){const f=s(d,h,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||IC),i.length>1&&i.sort(h||_g),r.length>1&&r.sort(h||_g)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function NC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new xg,t.set(i,[s])):r>=o.length?(s=new xg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function FC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ke};break;case"SpotLight":n={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function kC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OC=0;function zC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BC(t,e){const n=new FC,i=kC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new U);const o=new U,s=new yt,a=new yt;function l(c,d){let h=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,f=0,v=0,g=0,y=0,E=0,R=0,C=0,b=0;c.sort(zC);const S=d===!0?Math.PI:1;for(let Y=0,Q=c.length;Y<Q;Y++){const O=c[Y],V=O.color,W=O.intensity,K=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=V.r*W*S,p+=V.g*W*S,_+=V.b*W*S;else if(O.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(O.sh.coefficients[L],W);else if(O.isDirectionalLight){const L=n.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const H=O.shadow,z=i.get(O);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,r.directionalShadow[x]=z,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=O.shadow.matrix,y++}r.directional[x]=L,x++}else if(O.isSpotLight){const L=n.get(O);L.position.setFromMatrixPosition(O.matrixWorld),L.color.copy(V).multiplyScalar(W*S),L.distance=K,L.coneCos=Math.cos(O.angle),L.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),L.decay=O.decay,r.spot[f]=L;const H=O.shadow;if(O.map&&(r.spotLightMap[C]=O.map,C++,H.updateMatrices(O),O.castShadow&&b++),r.spotLightMatrix[f]=H.matrix,O.castShadow){const z=i.get(O);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,r.spotShadow[f]=z,r.spotShadowMap[f]=j,R++}f++}else if(O.isRectAreaLight){const L=n.get(O);L.color.copy(V).multiplyScalar(W),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=L,v++}else if(O.isPointLight){const L=n.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),L.distance=O.distance,L.decay=O.decay,O.castShadow){const H=O.shadow,z=i.get(O);z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,r.pointShadow[m]=z,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=O.shadow.matrix,E++}r.point[m]=L,m++}else if(O.isHemisphereLight){const L=n.get(O);L.skyColor.copy(O.color).multiplyScalar(W*S),L.groundColor.copy(O.groundColor).multiplyScalar(W*S),r.hemi[g]=L,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==x||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==v||w.hemiLength!==g||w.numDirectionalShadows!==y||w.numPointShadows!==E||w.numSpotShadows!==R||w.numSpotMaps!==C)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=R+C-b,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=b,w.directionalLength=x,w.pointLength=m,w.spotLength=f,w.rectAreaLength=v,w.hemiLength=g,w.numDirectionalShadows=y,w.numPointShadows=E,w.numSpotShadows=R,w.numSpotMaps=C,r.version=OC++)}function u(c,d){let h=0,p=0,_=0,x=0,m=0;const f=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const y=c[v];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const E=r.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function yg(t,e){const n=new BC(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function HC(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new yg(t,e),n.set(o,[l])):s>=a.length?(l=new yg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VC extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GC extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$C=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XC(t,e,n){let i=new Mh;const r=new je,o=new je,s=new st,a=new VC({depthPacking:TE}),l=new GC,u={},c=n.maxTextureSize,d={[gr]:hn,[hn]:gr,[di]:di},h=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:WC,fragmentShader:$C}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bi;_.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new On(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let f=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(dr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=f!==wi&&this.type===wi,O=f===wi&&this.type!==wi;for(let V=0,W=E.length;V<W;V++){const K=E[V],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const L=j.getFrameExtents();if(r.multiply(L),o.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/L.x),r.x=o.x*L.x,j.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/L.y),r.y=o.y*L.y,j.mapSize.y=o.y)),j.map===null||Q===!0||O===!0){const z=this.type!==wi?{minFilter:Gt,magFilter:Gt}:{};j.map!==null&&j.map.dispose(),j.map=new Zr(r.x,r.y,z),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const H=j.getViewportCount();for(let z=0;z<H;z++){const I=j.getViewport(z);s.set(o.x*I.x,o.y*I.y,o.x*I.z,o.y*I.w),Y.viewport(s),j.updateMatrices(K,z),i=j.getFrustum(),y(R,C,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===wi&&v(j,C),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(b,S,w)};function v(E,R){const C=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(R,null,C,h,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(R,null,C,p,x,null)}function g(E,R,C,b){let S=null;const w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=S.uuid,Q=R.uuid;let O=u[Y];O===void 0&&(O={},u[Y]=O);let V=O[Q];V===void 0&&(V=S.clone(),O[Q]=V),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,b===wi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=t.properties.get(S);Y.light=C}return S}function y(E,R,C,b,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===wi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),O=E.material;if(Array.isArray(O)){const V=Q.groups;for(let W=0,K=V.length;W<K;W++){const j=V[W],L=O[j.materialIndex];if(L&&L.visible){const H=g(E,L,b,S);t.renderBufferDirect(C,null,Q,H,E,j)}}}else if(O.visible){const V=g(E,O,b,S);t.renderBufferDirect(C,null,Q,V,E,null)}}const Y=E.children;for(let Q=0,O=Y.length;Q<O;Q++)y(Y[Q],R,C,b,S)}}function jC(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const oe=new st;let B=null;const te=new st(0,0,0,0);return{setMask:function(ue){B!==ue&&!P&&(t.colorMask(ue,ue,ue,ue),B=ue)},setLocked:function(ue){P=ue},setClear:function(ue,Xe,lt,wt,ii){ii===!0&&(ue*=wt,Xe*=wt,lt*=wt),oe.set(ue,Xe,lt,wt),te.equals(oe)===!1&&(t.clearColor(ue,Xe,lt,wt),te.copy(oe))},reset:function(){P=!1,B=null,te.set(-1,0,0,0)}}}function o(){let P=!1,oe=null,B=null,te=null;return{setTest:function(ue){ue?Te(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!P&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(B!==ue){switch(ue){case JM:t.depthFunc(t.NEVER);break;case eE:t.depthFunc(t.ALWAYS);break;case tE:t.depthFunc(t.LESS);break;case rd:t.depthFunc(t.LEQUAL);break;case nE:t.depthFunc(t.EQUAL);break;case iE:t.depthFunc(t.GEQUAL);break;case rE:t.depthFunc(t.GREATER);break;case oE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=ue}},setLocked:function(ue){P=ue},setClear:function(ue){te!==ue&&(t.clearDepth(ue),te=ue)},reset:function(){P=!1,oe=null,B=null,te=null}}}function s(){let P=!1,oe=null,B=null,te=null,ue=null,Xe=null,lt=null,wt=null,ii=null;return{setTest:function(dt){P||(dt?Te(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(dt){oe!==dt&&!P&&(t.stencilMask(dt),oe=dt)},setFunc:function(dt,ri,Xt){(B!==dt||te!==ri||ue!==Xt)&&(t.stencilFunc(dt,ri,Xt),B=dt,te=ri,ue=Xt)},setOp:function(dt,ri,Xt){(Xe!==dt||lt!==ri||wt!==Xt)&&(t.stencilOp(dt,ri,Xt),Xe=dt,lt=ri,wt=Xt)},setLocked:function(dt){P=dt},setClear:function(dt){ii!==dt&&(t.clearStencil(dt),ii=dt)},reset:function(){P=!1,oe=null,B=null,te=null,ue=null,Xe=null,lt=null,wt=null,ii=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,x=[],m=null,f=!1,v=null,g=null,y=null,E=null,R=null,C=null,b=null,S=!1,w=null,Y=null,Q=null,O=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(L)[1]),K=j>=1):L.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),K=j>=2);let H=null,z={};const I=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),re=new st().fromArray(I),ne=new st().fromArray(k);function ce(P,oe,B,te){const ue=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(P,Xe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let lt=0;lt<B;lt++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+lt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Xe}const ge={};ge[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(t.DEPTH_TEST),l.setFunc(rd),Ce(!1),at(om),Te(t.CULL_FACE),Ee(dr);function Te(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Me(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function qe(P,oe){return p[P]!==oe?(t.bindFramebuffer(P,oe),p[P]=oe,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function rn(P,oe){let B=x,te=!1;if(P)if(B=_.get(oe),B===void 0&&(B=[],_.set(oe,B)),P.isWebGLMultipleRenderTargets){const ue=P.texture;if(B.length!==ue.length||B[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,lt=ue.length;Xe<lt;Xe++)B[Xe]=t.COLOR_ATTACHMENT0+Xe;B.length=ue.length,te=!0}}else B[0]!==t.COLOR_ATTACHMENT0&&(B[0]=t.COLOR_ATTACHMENT0,te=!0);else B[0]!==t.BACK&&(B[0]=t.BACK,te=!0);te&&(n.isWebGL2?t.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function He(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const N={[yo]:t.FUNC_ADD,[VM]:t.FUNC_SUBTRACT,[GM]:t.FUNC_REVERSE_SUBTRACT};if(i)N[um]=t.MIN,N[cm]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(N[um]=P.MIN_EXT,N[cm]=P.MAX_EXT)}const kt={[WM]:t.ZERO,[$M]:t.ONE,[XM]:t.SRC_COLOR,[b_]:t.SRC_ALPHA,[QM]:t.SRC_ALPHA_SATURATE,[KM]:t.DST_COLOR,[qM]:t.DST_ALPHA,[jM]:t.ONE_MINUS_SRC_COLOR,[D_]:t.ONE_MINUS_SRC_ALPHA,[ZM]:t.ONE_MINUS_DST_COLOR,[YM]:t.ONE_MINUS_DST_ALPHA};function Ee(P,oe,B,te,ue,Xe,lt,wt){if(P===dr){f===!0&&(Me(t.BLEND),f=!1);return}if(f===!1&&(Te(t.BLEND),f=!0),P!==HM){if(P!==v||wt!==S){if((g!==yo||R!==yo)&&(t.blendEquation(t.FUNC_ADD),g=yo,R=yo),wt)switch(P){case Ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,E=null,C=null,b=null,v=P,S=wt}return}ue=ue||oe,Xe=Xe||B,lt=lt||te,(oe!==g||ue!==R)&&(t.blendEquationSeparate(N[oe],N[ue]),g=oe,R=ue),(B!==y||te!==E||Xe!==C||lt!==b)&&(t.blendFuncSeparate(kt[B],kt[te],kt[Xe],kt[lt]),y=B,E=te,C=Xe,b=lt),v=P,S=!1}function Le(P,oe){P.side===di?Me(t.CULL_FACE):Te(t.CULL_FACE);let B=P.side===hn;oe&&(B=!B),Ce(B),P.blending===Ho&&P.transparent===!1?Ee(dr):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const te=P.stencilWrite;u.setTest(te),te&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function at(P){P!==OM?(Te(t.CULL_FACE),P!==Y&&(P===om?t.cullFace(t.BACK):P===zM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),Y=P}function Ge(P){P!==Q&&(K&&t.lineWidth(P),Q=P)}function Ne(P,oe,B){P?(Te(t.POLYGON_OFFSET_FILL),(O!==oe||V!==B)&&(t.polygonOffset(oe,B),O=oe,V=B)):Me(t.POLYGON_OFFSET_FILL)}function Ze(P){P?Te(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function Lt(P){P===void 0&&(P=t.TEXTURE0+W-1),H!==P&&(t.activeTexture(P),H=P)}function Ot(P,oe,B){B===void 0&&(H===null?B=t.TEXTURE0+W-1:B=H);let te=z[B];te===void 0&&(te={type:void 0,texture:void 0},z[B]=te),(te.type!==P||te.texture!==oe)&&(H!==B&&(t.activeTexture(B),H=B),t.bindTexture(P,oe||ge[P]),te.type=P,te.texture=oe)}function A(){const P=z[H];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(P){re.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function he(P){ne.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function pe(P,oe){let B=d.get(oe);B===void 0&&(B=new WeakMap,d.set(oe,B));let te=B.get(P);te===void 0&&(te=t.getUniformBlockIndex(oe,P.name),B.set(P,te))}function ze(P,oe){const te=d.get(oe).get(P);c.get(oe)!==te&&(t.uniformBlockBinding(oe,te,P.__bindingPointIndex),c.set(oe,te))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},H=null,z={},p={},_=new WeakMap,x=[],m=null,f=!1,v=null,g=null,y=null,E=null,R=null,C=null,b=null,S=!1,w=null,Y=null,Q=null,O=null,V=null,re.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:Me,bindFramebuffer:qe,drawBuffers:rn,useProgram:He,setBlending:Ee,setMaterial:Le,setFlipSided:Ce,setCullFace:at,setLineWidth:Ge,setPolygonOffset:Ne,setScissorTest:Ze,activeTexture:Lt,bindTexture:Ot,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:_e,texImage3D:xe,updateUBOMapping:pe,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:q,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:ve,scissor:Se,viewport:he,reset:Qe}}function qC(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return f?new OffscreenCanvas(A,M):ha("canvas")}function g(A,M,$,J){let ee=1;if((A.width>J||A.height>J)&&(ee=J/Math.max(A.width,A.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=M?fu:Math.floor,ve=ae(ee*A.width),le=ae(ee*A.height);x===void 0&&(x=v(ve,le));const q=$?v(ve,le):x;return q.width=ve,q.height=le,q.getContext("2d").drawImage(A,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+le+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return cd(A.width)&&cd(A.height)}function E(A){return a?!1:A.wrapS!==Qn||A.wrapT!==Qn||A.minFilter!==Gt&&A.minFilter!==Fn}function R(A,M){return A.generateMipmaps&&M&&A.minFilter!==Gt&&A.minFilter!==Fn}function C(A){t.generateMipmap(A)}function b(A,M,$,J,ee=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=M;return M===t.RED&&($===t.FLOAT&&(ae=t.R32F),$===t.HALF_FLOAT&&(ae=t.R16F),$===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RG&&($===t.FLOAT&&(ae=t.RG32F),$===t.HALF_FLOAT&&(ae=t.RG16F),$===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RGBA&&($===t.FLOAT&&(ae=t.RGBA32F),$===t.HALF_FLOAT&&(ae=t.RGBA16F),$===t.UNSIGNED_BYTE&&(ae=J===Ue&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(A,M,$){return R(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===Gt||A===fm||A===wc?t.NEAREST:t.LINEAR}function Y(A){const M=A.target;M.removeEventListener("dispose",Y),O(M),M.isVideoTexture&&_.delete(M)}function Q(A){const M=A.target;M.removeEventListener("dispose",Q),W(M)}function O(A){const M=i.get(A);if(M.__webglInit===void 0)return;const $=A.source,J=m.get($);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&V(A),Object.keys(J).length===0&&m.delete($)}i.remove(A)}function V(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const $=A.source,J=m.get($);delete J[M.__cacheKey],s.memory.textures--}function W(A){const M=A.texture,$=i.get(A),J=i.get(M);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer($.__webglFramebuffer[ee]),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ee=0;ee<$.__webglColorRenderbuffer.length;ee++)$.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[ee]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ae=M.length;ee<ae;ee++){const ve=i.get(M[ee]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(A)}let K=0;function j(){K=0}function L(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const $=i.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe($,A,M);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+M)}function I(A,M){const $=i.get(A);if(A.version>0&&$.__version!==A.version){qe($,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+M)}function k(A,M){const $=i.get(A);if(A.version>0&&$.__version!==A.version){qe($,A,M);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+M)}function re(A,M){const $=i.get(A);if(A.version>0&&$.__version!==A.version){rn($,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+M)}const ne={[ad]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[ld]:t.MIRRORED_REPEAT},ce={[Gt]:t.NEAREST,[fm]:t.NEAREST_MIPMAP_NEAREST,[wc]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[hE]:t.LINEAR_MIPMAP_NEAREST,[ca]:t.LINEAR_MIPMAP_LINEAR},ge={[CE]:t.NEVER,[IE]:t.ALWAYS,[RE]:t.LESS,[LE]:t.LEQUAL,[PE]:t.EQUAL,[UE]:t.GEQUAL,[bE]:t.GREATER,[DE]:t.NOTEQUAL};function Te(A,M,$){if($?(t.texParameteri(A,t.TEXTURE_WRAP_S,ne[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ne[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ne[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Qn||M.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Gt&&M.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Gt||M.minFilter!==wc&&M.minFilter!==ca||M.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Me(A,M){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Y));const J=M.source;let ee=m.get(J);ee===void 0&&(ee={},m.set(J,ee));const ae=H(M);if(ae!==A.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ee[ae].usedTimes++;const ve=ee[A.__cacheKey];ve!==void 0&&(ee[A.__cacheKey].usedTimes--,ve.usedTimes===0&&V(M)),A.__cacheKey=ae,A.__webglTexture=ee[ae].texture}return $}function qe(A,M,$){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ee=Me(A,M),ae=M.source;n.bindTexture(J,A.__webglTexture,t.TEXTURE0+$);const ve=i.get(ae);if(ae.version!==ve.__version||ee===!0){n.activeTexture(t.TEXTURE0+$),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const le=E(M)&&y(M.image)===!1;let q=g(M.image,le,!1,c);q=Ot(M,q);const _e=y(q)||a,xe=o.convert(M.format,M.colorSpace);let Se=o.convert(M.type),he=b(M.internalFormat,xe,Se,M.colorSpace);Te(J,M,_e);let pe;const ze=M.mipmaps,Qe=a&&M.isVideoTexture!==!0,P=ve.__version===void 0||ee===!0,oe=S(M,q,_e);if(M.isDepthTexture)he=t.DEPTH_COMPONENT,a?M.type===tr?he=t.DEPTH_COMPONENT32F:M.type===er?he=t.DEPTH_COMPONENT24:M.type===Hr?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:M.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Vr&&he===t.DEPTH_COMPONENT&&M.type!==_h&&M.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=er,Se=o.convert(M.type)),M.format===Qo&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,M.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Hr,Se=o.convert(M.type))),P&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,he,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,he,q.width,q.height,0,xe,Se,null));else if(M.isDataTexture)if(ze.length>0&&_e){Qe&&P&&n.texStorage2D(t.TEXTURE_2D,oe,he,ze[0].width,ze[0].height);for(let B=0,te=ze.length;B<te;B++)pe=ze[B],Qe?n.texSubImage2D(t.TEXTURE_2D,B,0,0,pe.width,pe.height,xe,Se,pe.data):n.texImage2D(t.TEXTURE_2D,B,he,pe.width,pe.height,0,xe,Se,pe.data);M.generateMipmaps=!1}else Qe?(P&&n.texStorage2D(t.TEXTURE_2D,oe,he,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,q.width,q.height,xe,Se,q.data)):n.texImage2D(t.TEXTURE_2D,0,he,q.width,q.height,0,xe,Se,q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,ze[0].width,ze[0].height,q.depth);for(let B=0,te=ze.length;B<te;B++)pe=ze[B],M.format!==Jn?xe!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,pe.width,pe.height,q.depth,xe,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,he,pe.width,pe.height,q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,pe.width,pe.height,q.depth,xe,Se,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,he,pe.width,pe.height,q.depth,0,xe,Se,pe.data)}else{Qe&&P&&n.texStorage2D(t.TEXTURE_2D,oe,he,ze[0].width,ze[0].height);for(let B=0,te=ze.length;B<te;B++)pe=ze[B],M.format!==Jn?xe!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,pe.width,pe.height,xe,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,B,he,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,B,0,0,pe.width,pe.height,xe,Se,pe.data):n.texImage2D(t.TEXTURE_2D,B,he,pe.width,pe.height,0,xe,Se,pe.data)}else if(M.isDataArrayTexture)Qe?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,he,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,xe,Se,q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,q.width,q.height,q.depth,0,xe,Se,q.data);else if(M.isData3DTexture)Qe?(P&&n.texStorage3D(t.TEXTURE_3D,oe,he,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,xe,Se,q.data)):n.texImage3D(t.TEXTURE_3D,0,he,q.width,q.height,q.depth,0,xe,Se,q.data);else if(M.isFramebufferTexture){if(P)if(Qe)n.texStorage2D(t.TEXTURE_2D,oe,he,q.width,q.height);else{let B=q.width,te=q.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,he,B,te,0,xe,Se,null),B>>=1,te>>=1}}else if(ze.length>0&&_e){Qe&&P&&n.texStorage2D(t.TEXTURE_2D,oe,he,ze[0].width,ze[0].height);for(let B=0,te=ze.length;B<te;B++)pe=ze[B],Qe?n.texSubImage2D(t.TEXTURE_2D,B,0,0,xe,Se,pe):n.texImage2D(t.TEXTURE_2D,B,he,xe,Se,pe);M.generateMipmaps=!1}else Qe?(P&&n.texStorage2D(t.TEXTURE_2D,oe,he,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Se,q)):n.texImage2D(t.TEXTURE_2D,0,he,xe,Se,q);R(M,_e)&&C(J),ve.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function rn(A,M,$){if(M.image.length!==6)return;const J=Me(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+$);const ae=i.get(ee);if(ee.version!==ae.__version||J===!0){n.activeTexture(t.TEXTURE0+$),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,q=[];for(let B=0;B<6;B++)!ve&&!le?q[B]=g(M.image[B],!1,!0,u):q[B]=le?M.image[B].image:M.image[B],q[B]=Ot(M,q[B]);const _e=q[0],xe=y(_e)||a,Se=o.convert(M.format,M.colorSpace),he=o.convert(M.type),pe=b(M.internalFormat,Se,he,M.colorSpace),ze=a&&M.isVideoTexture!==!0,Qe=ae.__version===void 0||J===!0;let P=S(M,_e,xe);Te(t.TEXTURE_CUBE_MAP,M,xe);let oe;if(ve){ze&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,pe,_e.width,_e.height);for(let B=0;B<6;B++){oe=q[B].mipmaps;for(let te=0;te<oe.length;te++){const ue=oe[te];M.format!==Jn?Se!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te,0,0,ue.width,ue.height,Se,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te,0,0,ue.width,ue.height,Se,he,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te,pe,ue.width,ue.height,0,Se,he,ue.data)}}}else{oe=M.mipmaps,ze&&Qe&&(oe.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,pe,q[0].width,q[0].height));for(let B=0;B<6;B++)if(le){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,q[B].width,q[B].height,Se,he,q[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,pe,q[B].width,q[B].height,0,Se,he,q[B].data);for(let te=0;te<oe.length;te++){const Xe=oe[te].image[B].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te+1,0,0,Xe.width,Xe.height,Se,he,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te+1,pe,Xe.width,Xe.height,0,Se,he,Xe.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Se,he,q[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,pe,Se,he,q[B]);for(let te=0;te<oe.length;te++){const ue=oe[te];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te+1,0,0,Se,he,ue.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,te+1,pe,Se,he,ue.image[B])}}}R(M,xe)&&C(t.TEXTURE_CUBE_MAP),ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function He(A,M,$,J,ee){const ae=o.convert($.format,$.colorSpace),ve=o.convert($.type),le=b($.internalFormat,ae,ve,$.colorSpace);i.get(M).__hasExternalTextures||(ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,le,M.width,M.height,M.depth,0,ae,ve,null):n.texImage2D(ee,0,le,M.width,M.height,0,ae,ve,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Ze(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,i.get($).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,i.get($).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(A,M,$){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let J=t.DEPTH_COMPONENT16;if($||Ze(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===tr?J=t.DEPTH_COMPONENT32F:ee.type===er&&(J=t.DEPTH_COMPONENT24));const ae=Ne(M);Ze(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,J,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,J,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ne(M);$&&Ze(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):Ze(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<J.length;ee++){const ae=J[ee],ve=o.convert(ae.format,ae.colorSpace),le=o.convert(ae.type),q=b(ae.internalFormat,ve,le,ae.colorSpace),_e=Ne(M);$&&Ze(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,q,M.width,M.height):Ze(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function kt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===Vr)Ze(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===Qo)Ze(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const M=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");kt(M.__webglFramebuffer,A)}else if($){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=t.createRenderbuffer(),N(M.__webglDepthbuffer[J],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),N(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,M,$){const J=i.get(A);M!==void 0&&He(J.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),$!==void 0&&Ee(A)}function Ce(A){const M=A.texture,$=i.get(A),J=i.get(M);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,s.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,ve=y(A)||a;if(ee){$.__webglFramebuffer=[];for(let le=0;le<6;le++)$.__webglFramebuffer[le]=t.createFramebuffer()}else{if($.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const le=A.texture;for(let q=0,_e=le.length;q<_e;q++){const xe=i.get(le[q]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ze(A)===!1){const le=ae?M:[M];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let q=0;q<le.length;q++){const _e=le[q];$.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[q]);const xe=o.convert(_e.format,_e.colorSpace),Se=o.convert(_e.type),he=b(_e.internalFormat,xe,Se,_e.colorSpace,A.isXRRenderTarget===!0),pe=Ne(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,$.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),N($.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M,ve);for(let le=0;le<6;le++)He($.__webglFramebuffer[le],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le);R(M,ve)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const le=A.texture;for(let q=0,_e=le.length;q<_e;q++){const xe=le[q],Se=i.get(xe);n.bindTexture(t.TEXTURE_2D,Se.__webglTexture),Te(t.TEXTURE_2D,xe,ve),He($.__webglFramebuffer,A,xe,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D),R(xe,ve)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,J.__webglTexture),Te(le,M,ve),He($.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,le),R(M,ve)&&C(le),n.unbindTexture()}A.depthBuffer&&Ee(A)}function at(A){const M=y(A)||a,$=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,ee=$.length;J<ee;J++){const ae=$[J];if(R(ae,M)){const ve=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ae).__webglTexture;n.bindTexture(ve,le),C(ve),n.unbindTexture()}}}function Ge(A){if(a&&A.samples>0&&Ze(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],$=A.width,J=A.height;let ee=t.COLOR_BUFFER_BIT;const ae=[],ve=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){ae.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&ae.push(ve);const xe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(xe===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),q&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),q){const Se=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,$,J,0,0,$,J,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const xe=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ne(A){return Math.min(d,A.samples)}function Ze(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(A){const M=s.render.frame;_.get(A)!==M&&(_.set(A,M),A.update())}function Ot(A,M){const $=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.format===ud||$!==gi&&$!==Wr&&($===Ue?a===!1?e.has("EXT_sRGB")===!0&&J===Jn?(A.format=ud,A.minFilter=Fn,A.generateMipmaps=!1):M=$_.sRGBToLinear(M):(J!==Jn||ee!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=re,this.rebindTextures=Le,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Ze}function YC(t,e,n){const i=n.isWebGL2;function r(o,s=Wr){let a;if(o===hr)return t.UNSIGNED_BYTE;if(o===F_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===k_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===pE)return t.BYTE;if(o===mE)return t.SHORT;if(o===_h)return t.UNSIGNED_SHORT;if(o===N_)return t.INT;if(o===er)return t.UNSIGNED_INT;if(o===tr)return t.FLOAT;if(o===fa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===gE)return t.ALPHA;if(o===Jn)return t.RGBA;if(o===vE)return t.LUMINANCE;if(o===_E)return t.LUMINANCE_ALPHA;if(o===Vr)return t.DEPTH_COMPONENT;if(o===Qo)return t.DEPTH_STENCIL;if(o===ud)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===xE)return t.RED;if(o===O_)return t.RED_INTEGER;if(o===yE)return t.RG;if(o===z_)return t.RG_INTEGER;if(o===B_)return t.RGBA_INTEGER;if(o===Ac||o===Cc||o===Rc||o===Pc)if(s===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===dm||o===hm||o===pm||o===mm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===dm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===hm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===mm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===SE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===gm||o===vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===gm)return s===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===vm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===_m||o===xm||o===ym||o===Sm||o===Mm||o===Em||o===Tm||o===wm||o===Am||o===Cm||o===Rm||o===Pm||o===Lm||o===bm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===_m)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===xm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===ym)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Sm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Mm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Em)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Tm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===wm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Am)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Cm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Rm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Pm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Lm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===bm)return s===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Lc)return s===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===ME||o===Dm||o===Um||o===Im)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Lc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Dm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Um)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Im)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Hr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class KC extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZC={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(u,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class QC extends pn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Vr,c!==Vr&&c!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Vr&&(i=er),i===void 0&&c===Qo&&(i=Hr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JC extends is{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,_=null;const x=n.getContextAttributes();let m=null,f=null;const v=[],g=[],y=new An;y.layers.enable(1),y.viewport=new st;const E=new An;E.layers.enable(2),E.viewport=new st;const R=[y,E],C=new KC;C.layers.enable(1),C.layers.enable(2);let b=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=v[I];return k===void 0&&(k=new Qc,v[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=v[I];return k===void 0&&(k=new Qc,v[I]=k),k.getGripSpace()},this.getHand=function(I){let k=v[I];return k===void 0&&(k=new Qc,v[I]=k),k.getHandSpace()};function w(I){const k=g.indexOf(I.inputSource);if(k===-1)return;const re=v[k];re!==void 0&&(re.update(I.inputSource,I.frame,u||s),re.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Q);for(let I=0;I<v.length;I++){const k=g[I];k!==null&&(g[I]=null,v[I].disconnect(k))}b=null,S=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:p}),f=new Zr(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let k=null,re=null,ne=null;x.depth&&(ne=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,k=x.stencil?Qo:Vr,re=x.stencil?Hr:er);const ce={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),f=new Zr(h.textureWidth,h.textureHeight,{format:Jn,type:hr,depthTexture:new QC(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ge=e.properties.get(f);ge.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(I){for(let k=0;k<I.removed.length;k++){const re=I.removed[k],ne=g.indexOf(re);ne>=0&&(g[ne]=null,v[ne].disconnect(re))}for(let k=0;k<I.added.length;k++){const re=I.added[k];let ne=g.indexOf(re);if(ne===-1){for(let ge=0;ge<v.length;ge++)if(ge>=g.length){g.push(re),ne=ge;break}else if(g[ge]===null){g[ge]=re,ne=ge;break}if(ne===-1)break}const ce=v[ne];ce&&ce.connect(re)}}const O=new U,V=new U;function W(I,k,re){O.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(re.matrixWorld);const ne=O.distanceTo(V),ce=k.projectionMatrix.elements,ge=re.projectionMatrix.elements,Te=ce[14]/(ce[10]-1),Me=ce[14]/(ce[10]+1),qe=(ce[9]+1)/ce[5],rn=(ce[9]-1)/ce[5],He=(ce[8]-1)/ce[0],N=(ge[8]+1)/ge[0],kt=Te*He,Ee=Te*N,Le=ne/(-He+N),Ce=Le*-He;k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ce),I.translateZ(Le),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const at=Te+Le,Ge=Me+Le,Ne=kt-Ce,Ze=Ee+(ne-Ce),Lt=qe*Me/Ge*at,Ot=rn*Me/Ge*at;I.projectionMatrix.makePerspective(Ne,Ze,Lt,Ot,at,Ge),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function K(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;C.near=E.near=y.near=I.near,C.far=E.far=y.far=I.far,(b!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),b=C.near,S=C.far);const k=I.parent,re=C.cameras;K(C,k);for(let ne=0;ne<re.length;ne++)K(re[ne],k);re.length===2?W(C,y,E):C.projectionMatrix.copy(y.projectionMatrix),j(I,C,k)};function j(I,k,re){re===null?I.matrix.copy(k.matrixWorld):(I.matrix.copy(re.matrixWorld),I.matrix.invert(),I.matrix.multiply(k.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const ne=I.children;for(let ce=0,ge=ne.length;ce<ge;ce++)ne[ce].updateMatrixWorld(!0);I.projectionMatrix.copy(k.projectionMatrix),I.projectionMatrixInverse.copy(k.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=da*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let L=null;function H(I,k){if(c=k.getViewerPose(u||s),_=k,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ne=!1;re.length!==C.cameras.length&&(C.cameras.length=0,ne=!0);for(let ce=0;ce<re.length;ce++){const ge=re[ce];let Te=null;if(p!==null)Te=p.getViewport(ge);else{const qe=d.getViewSubImage(h,ge);Te=qe.viewport,ce===0&&(e.setRenderTargetTextures(f,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(f))}let Me=R[ce];Me===void 0&&(Me=new An,Me.layers.enable(ce),Me.viewport=new st,R[ce]=Me),Me.matrix.fromArray(ge.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ge.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Te.x,Te.y,Te.width,Te.height),ce===0&&(C.matrix.copy(Me.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ne===!0&&C.cameras.push(Me)}}for(let re=0;re<v.length;re++){const ne=g[re],ce=v[re];ne!==null&&ce!==void 0&&ce.update(ne,k,u||s)}L&&L(I,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const z=new tx;z.setAnimationLoop(H),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}}function eR(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Q_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),c(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),_(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function u(v,g){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(v,E);const R=e.render.frame;o[v.id]!==R&&(h(v),o[v.id]=R)}function c(v){const g=d();v.__bindingPointIndex=g;const y=t.createBuffer(),E=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,C=y.length;R<C;R++){const b=y[R];if(p(b,R,E)===!0){const S=b.__offset,w=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let Q=0;Q<w.length;Q++){const O=w[Q],V=x(O);typeof O=="number"?(b.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,S+Y,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=O.elements[0],b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=O.elements[0],b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=O.elements[0]):(O.toArray(b.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,y){const E=v.value;if(y[g]===void 0){if(typeof E=="number")y[g]=E;else{const R=Array.isArray(E)?E:[E],C=[];for(let b=0;b<R.length;b++)C.push(R[b].clone());y[g]=C}return!0}else if(typeof E=="number"){if(y[g]!==E)return y[g]=E,!0}else{const R=Array.isArray(y[g])?y[g]:[y[g]],C=Array.isArray(E)?E:[E];for(let b=0;b<R.length;b++){const S=R[b];if(S.equals(C[b])===!1)return S.copy(C[b]),!0}}return!1}function _(v){const g=v.uniforms;let y=0;const E=16;let R=0;for(let C=0,b=g.length;C<b;C++){const S=g[C],w={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,O=Y.length;Q<O;Q++){const V=Y[Q],W=x(V);w.boundary+=W.boundary,w.storage+=W.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,C>0){R=y%E;const Q=E-R;R!==0&&Q-w.boundary<0&&(y+=E-R,S.__offset=y)}y+=w.storage}return R=y%E,R>0&&(y+=E-R),v.__size=y,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const y=s.indexOf(g.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}function nR(){const t=ha("canvas");return t.style.display="block",t}class sx{constructor(e={}){const{canvas:n=nR(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this.useLegacyLights=!0,this.toneMapping=Di,this.toneMappingExposure=1;const g=this;let y=!1,E=0,R=0,C=null,b=-1,S=null;const w=new st,Y=new st;let Q=null;const O=new Ke(0);let V=0,W=n.width,K=n.height,j=1,L=null,H=null;const z=new st(0,0,W,K),I=new st(0,0,W,K);let k=!1;const re=new Mh;let ne=!1,ce=!1,ge=null;const Te=new yt,Me=new je,qe=new U,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return C===null?j:1}let N=i;function kt(T,F){for(let G=0;G<T.length;G++){const D=T[G],X=n.getContext(D,F);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vh}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",B,!1),n.addEventListener("webglcontextcreationerror",te,!1),N===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),N=kt(F,T),N===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,Le,Ce,at,Ge,Ne,Ze,Lt,Ot,A,M,$,J,ee,ae,ve,le,q,_e,xe,Se,he,pe,ze;function Qe(){Ee=new dA(N),Le=new oA(N,Ee,e),Ee.init(Le),he=new YC(N,Ee,Le),Ce=new jC(N,Ee,Le),at=new mA(N),Ge=new UC,Ne=new qC(N,Ee,Ce,Ge,Le,he,at),Ze=new aA(g),Lt=new fA(g),Ot=new T1(N,Le),pe=new iA(N,Ee,Ot,Le),A=new hA(N,Ot,at,pe),M=new xA(N,A,Ot,at),_e=new _A(N,Le,Ne),ve=new sA(Ge),$=new DC(g,Ze,Lt,Ee,Le,pe,ve),J=new eR(g,Ge),ee=new NC,ae=new HC(Ee,Le),q=new nA(g,Ze,Lt,Ce,M,h,l),le=new XC(g,M,Le),ze=new tR(N,at,Le,Ce),xe=new rA(N,Ee,at,Le),Se=new pA(N,Ee,at,Le),at.programs=$.programs,g.capabilities=Le,g.extensions=Ee,g.properties=Ge,g.renderLists=ee,g.shadowMap=le,g.state=Ce,g.info=at}Qe();const P=new JC(g,N);this.xr=P,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(W,K,!1))},this.getSize=function(T){return T.set(W,K)},this.setSize=function(T,F,G=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,K=F,n.width=Math.floor(T*j),n.height=Math.floor(F*j),G===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(W*j,K*j).floor()},this.setDrawingBufferSize=function(T,F,G){W=T,K=F,j=G,n.width=Math.floor(T*G),n.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,F,G,D){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,F,G,D),Ce.viewport(w.copy(z).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(I)},this.setScissor=function(T,F,G,D){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,F,G,D),Ce.scissor(Y.copy(I).multiplyScalar(j).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(T){Ce.setScissorTest(k=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(T=!0,F=!0,G=!0){let D=0;if(T){let X=!1;if(C!==null){const de=C.texture.format;X=de===B_||de===z_||de===O_}if(X){const de=C.texture.type,ye=de===hr||de===er||de===_h||de===Hr||de===F_||de===k_,we=q.getClearColor(),Ae=q.getClearAlpha(),Be=we.r,Re=we.g,be=we.b;ye?(p[0]=Be,p[1]=Re,p[2]=be,p[3]=Ae,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Be,_[1]=Re,_[2]=be,_[3]=Ae,N.clearBufferiv(N.COLOR,0,_))}else D|=N.COLOR_BUFFER_BIT}F&&(D|=N.DEPTH_BUFFER_BIT),G&&(D|=N.STENCIL_BUFFER_BIT),N.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",B,!1),n.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),ae.dispose(),Ge.dispose(),Ze.dispose(),Lt.dispose(),M.dispose(),pe.dispose(),ze.dispose(),$.dispose(),P.dispose(),P.removeEventListener("sessionstart",dt),P.removeEventListener("sessionend",ri),ge&&(ge.dispose(),ge=null),Xt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=at.autoReset,F=le.enabled,G=le.autoUpdate,D=le.needsUpdate,X=le.type;Qe(),at.autoReset=T,le.enabled=F,le.autoUpdate=G,le.needsUpdate=D,le.type=X}function te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const F=T.target;F.removeEventListener("dispose",ue),Xe(F)}function Xe(T){lt(T),Ge.remove(T)}function lt(T){const F=Ge.get(T).programs;F!==void 0&&(F.forEach(function(G){$.releaseProgram(G)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,D,X,de){F===null&&(F=rn);const ye=X.isMesh&&X.matrixWorld.determinant()<0,we=ay(T,F,G,D,X);Ce.setMaterial(D,ye);let Ae=G.index,Be=1;D.wireframe===!0&&(Ae=A.getWireframeAttribute(G),Be=2);const Re=G.drawRange,be=G.attributes.position;let ht=Re.start*Be,mt=(Re.start+Re.count)*Be;de!==null&&(ht=Math.max(ht,de.start*Be),mt=Math.min(mt,(de.start+de.count)*Be)),Ae!==null?(ht=Math.max(ht,0),mt=Math.min(mt,Ae.count)):be!=null&&(ht=Math.max(ht,0),mt=Math.min(mt,be.count));const Vn=mt-ht;if(Vn<0||Vn===1/0)return;pe.setup(X,D,we,G,Ae);let vi,vt=xe;if(Ae!==null&&(vi=Ot.get(Ae),vt=Se,vt.setIndex(vi)),X.isMesh)D.wireframe===!0?(Ce.setLineWidth(D.wireframeLinewidth*He()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(X.isLine){let We=D.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*He()),X.isLineSegments?vt.setMode(N.LINES):X.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else X.isPoints?vt.setMode(N.POINTS):X.isSprite&&vt.setMode(N.TRIANGLES);if(X.isInstancedMesh)vt.renderInstances(ht,Vn,X.count);else if(G.isInstancedBufferGeometry){const We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yu=Math.min(G.instanceCount,We);vt.renderInstances(ht,Vn,Yu)}else vt.render(ht,Vn)},this.compile=function(T,F){function G(D,X,de){D.transparent===!0&&D.side===di&&D.forceSinglePass===!1?(D.side=hn,D.needsUpdate=!0,Ra(D,X,de),D.side=gr,D.needsUpdate=!0,Ra(D,X,de),D.side=di):Ra(D,X,de)}m=ae.get(T),m.init(),v.push(m),T.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(g.useLegacyLights),T.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let de=0;de<X.length;de++){const ye=X[de];G(ye,T,D)}else G(X,T,D)}),v.pop(),m=null};let wt=null;function ii(T){wt&&wt(T)}function dt(){Xt.stop()}function ri(){Xt.start()}const Xt=new tx;Xt.setAnimationLoop(ii),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(T){wt=T,P.setAnimationLoop(T),T===null?Xt.stop():Xt.start()},P.addEventListener("sessionstart",dt),P.addEventListener("sessionend",ri),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(F),F=P.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,F,C),m=ae.get(T,v.length),m.init(),v.push(m),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,ce),x=ee.get(T,f.length),x.init(),f.push(x),Wh(T,F,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(L,H),this.info.render.frame++,ne===!0&&ve.beginShadows();const G=m.state.shadowsArray;if(le.render(G,T,F),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(x,T),m.setupLights(g.useLegacyLights),F.isArrayCamera){const D=F.cameras;for(let X=0,de=D.length;X<de;X++){const ye=D[X];$h(x,T,ye,ye.viewport)}}else $h(x,T,F);C!==null&&(Ne.updateMultisampleRenderTarget(C),Ne.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(g,T,F),pe.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Wh(T,F,G,D){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){D&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const ye=M.update(T),we=T.material;we.visible&&x.push(T,ye,we,G,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||re.intersectsObject(T))){const ye=M.update(T),we=T.material;if(D&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),qe.copy(ye.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(we)){const Ae=ye.groups;for(let Be=0,Re=Ae.length;Be<Re;Be++){const be=Ae[Be],ht=we[be.materialIndex];ht&&ht.visible&&x.push(T,ye,ht,G,qe.z,be)}}else we.visible&&x.push(T,ye,we,G,qe.z,null)}}const de=T.children;for(let ye=0,we=de.length;ye<we;ye++)Wh(de[ye],F,G,D)}function $h(T,F,G,D){const X=T.opaque,de=T.transmissive,ye=T.transparent;m.setupLightsView(G),ne===!0&&ve.setGlobalState(g.clippingPlanes,G),de.length>0&&sy(X,de,F,G),D&&Ce.viewport(w.copy(D)),X.length>0&&Ca(X,F,G),de.length>0&&Ca(de,F,G),ye.length>0&&Ca(ye,F,G),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function sy(T,F,G,D){const X=Le.isWebGL2;ge===null&&(ge=new Zr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?fa:hr,minFilter:ca,samples:X?4:0})),g.getDrawingBufferSize(Me),X?ge.setSize(Me.x,Me.y):ge.setSize(fu(Me.x),fu(Me.y));const de=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(O),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear();const ye=g.toneMapping;g.toneMapping=Di,Ca(T,G,D),Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge);let we=!1;for(let Ae=0,Be=F.length;Ae<Be;Ae++){const Re=F[Ae],be=Re.object,ht=Re.geometry,mt=Re.material,Vn=Re.group;if(mt.side===di&&be.layers.test(D.layers)){const vi=mt.side;mt.side=hn,mt.needsUpdate=!0,Xh(be,G,D,ht,mt,Vn),mt.side=vi,mt.needsUpdate=!0,we=!0}}we===!0&&(Ne.updateMultisampleRenderTarget(ge),Ne.updateRenderTargetMipmap(ge)),g.setRenderTarget(de),g.setClearColor(O,V),g.toneMapping=ye}function Ca(T,F,G){const D=F.isScene===!0?F.overrideMaterial:null;for(let X=0,de=T.length;X<de;X++){const ye=T[X],we=ye.object,Ae=ye.geometry,Be=D===null?ye.material:D,Re=ye.group;we.layers.test(G.layers)&&Xh(we,F,G,Ae,Be,Re)}}function Xh(T,F,G,D,X,de){T.onBeforeRender(g,F,G,D,X,de),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(g,F,G,D,T,de),X.transparent===!0&&X.side===di&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,g.renderBufferDirect(G,F,D,X,T,de),X.side=gr,X.needsUpdate=!0,g.renderBufferDirect(G,F,D,X,T,de),X.side=di):g.renderBufferDirect(G,F,D,X,T,de),T.onAfterRender(g,F,G,D,X,de)}function Ra(T,F,G){F.isScene!==!0&&(F=rn);const D=Ge.get(T),X=m.state.lights,de=m.state.shadowsArray,ye=X.state.version,we=$.getParameters(T,X.state,de,F,G),Ae=$.getProgramCacheKey(we);let Be=D.programs;D.environment=T.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(T.isMeshStandardMaterial?Lt:Ze).get(T.envMap||D.environment),Be===void 0&&(T.addEventListener("dispose",ue),Be=new Map,D.programs=Be);let Re=Be.get(Ae);if(Re!==void 0){if(D.currentProgram===Re&&D.lightsStateVersion===ye)return jh(T,we),Re}else we.uniforms=$.getUniforms(T),T.onBuild(G,we,g),T.onBeforeCompile(we,g),Re=$.acquireProgram(we,Ae),Be.set(Ae,Re),D.uniforms=we.uniforms;const be=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ve.uniform),jh(T,we),D.needsLights=uy(T),D.lightsStateVersion=ye,D.needsLights&&(be.ambientLightColor.value=X.state.ambient,be.lightProbe.value=X.state.probe,be.directionalLights.value=X.state.directional,be.directionalLightShadows.value=X.state.directionalShadow,be.spotLights.value=X.state.spot,be.spotLightShadows.value=X.state.spotShadow,be.rectAreaLights.value=X.state.rectArea,be.ltc_1.value=X.state.rectAreaLTC1,be.ltc_2.value=X.state.rectAreaLTC2,be.pointLights.value=X.state.point,be.pointLightShadows.value=X.state.pointShadow,be.hemisphereLights.value=X.state.hemi,be.directionalShadowMap.value=X.state.directionalShadowMap,be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,be.spotShadowMap.value=X.state.spotShadowMap,be.spotLightMatrix.value=X.state.spotLightMatrix,be.spotLightMap.value=X.state.spotLightMap,be.pointShadowMap.value=X.state.pointShadowMap,be.pointShadowMatrix.value=X.state.pointShadowMatrix);const ht=Re.getUniforms(),mt=Pl.seqWithValue(ht.seq,be);return D.currentProgram=Re,D.uniformsList=mt,Re}function jh(T,F){const G=Ge.get(T);G.outputColorSpace=F.outputColorSpace,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ay(T,F,G,D,X){F.isScene!==!0&&(F=rn),Ne.resetTextureUnits();const de=F.fog,ye=D.isMeshStandardMaterial?F.environment:null,we=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gi,Ae=(D.isMeshStandardMaterial?Lt:Ze).get(D.envMap||ye),Be=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),be=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color,Vn=D.toneMapped?g.toneMapping:Di,vi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,vt=vi!==void 0?vi.length:0,We=Ge.get(D),Yu=m.state.lights;if(ne===!0&&(ce===!0||T!==S)){const gn=T===S&&D.id===b;ve.setState(D,T,gn)}let At=!1;D.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yu.state.version||We.outputColorSpace!==we||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ae||D.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ve.numPlanes||We.numIntersection!==ve.numIntersection)||We.vertexAlphas!==Be||We.vertexTangents!==Re||We.morphTargets!==be||We.morphNormals!==ht||We.morphColors!==mt||We.toneMapping!==Vn||Le.isWebGL2===!0&&We.morphTargetsCount!==vt)&&(At=!0):(At=!0,We.__version=D.version);let yr=We.currentProgram;At===!0&&(yr=Ra(D,F,X));let qh=!1,ls=!1,Ku=!1;const jt=yr.getUniforms(),Sr=We.uniforms;if(Ce.useProgram(yr.program)&&(qh=!0,ls=!0,Ku=!0),D.id!==b&&(b=D.id,ls=!0),qh||S!==T){if(jt.setValue(N,"projectionMatrix",T.projectionMatrix),Le.logarithmicDepthBuffer&&jt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,ls=!0,Ku=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const gn=jt.map.cameraPosition;gn!==void 0&&gn.setValue(N,qe.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&jt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&jt.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){jt.setOptional(N,X,"bindMatrix"),jt.setOptional(N,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(Le.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),jt.setValue(N,"boneTexture",gn.boneTexture,Ne),jt.setValue(N,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zu=G.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&Le.isWebGL2===!0)&&_e.update(X,G,yr),(ls||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,jt.setValue(N,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Sr.envMap.value=Ae,Sr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ls&&(jt.setValue(N,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&ly(Sr,Ku),de&&D.fog===!0&&J.refreshFogUniforms(Sr,de),J.refreshMaterialUniforms(Sr,D,j,K,ge),Pl.upload(N,We.uniformsList,Sr,Ne)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Pl.upload(N,We.uniformsList,Sr,Ne),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&jt.setValue(N,"center",X.center),jt.setValue(N,"modelViewMatrix",X.modelViewMatrix),jt.setValue(N,"normalMatrix",X.normalMatrix),jt.setValue(N,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const gn=D.uniformsGroups;for(let Qu=0,cy=gn.length;Qu<cy;Qu++)if(Le.isWebGL2){const Yh=gn[Qu];ze.update(Yh,yr),ze.bind(Yh,yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yr}function ly(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function uy(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,G){Ge.get(T.texture).__webglTexture=F,Ge.get(T.depthTexture).__webglTexture=G;const D=Ge.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const G=Ge.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){C=T,E=F,R=G;let D=!0,X=null,de=!1,ye=!1;if(T){const Ae=Ge.get(T);Ae.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(N.FRAMEBUFFER,null),D=!1):Ae.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):Ae.__hasExternalTextures&&Ne.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const Re=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Re[F],de=!0):Le.isWebGL2&&T.samples>0&&Ne.useMultisampledRTT(T)===!1?X=Ge.get(T).__webglMultisampledFramebuffer:X=Re,w.copy(T.viewport),Y.copy(T.scissor),Q=T.scissorTest}else w.copy(z).multiplyScalar(j).floor(),Y.copy(I).multiplyScalar(j).floor(),Q=k;if(Ce.bindFramebuffer(N.FRAMEBUFFER,X)&&Le.drawBuffers&&D&&Ce.drawBuffers(T,X),Ce.viewport(w),Ce.scissor(Y),Ce.setScissorTest(Q),de){const Ae=Ge.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,G)}else if(ye){const Ae=Ge.get(T.texture),Be=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Be)}b=-1},this.readRenderTargetPixels=function(T,F,G,D,X,de,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Ce.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ae=T.texture,Be=Ae.format,Re=Ae.type;if(Be!==Jn&&he.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Re===fa&&(Ee.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Re!==hr&&he.convert(Re)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===tr&&(Le.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-D&&G>=0&&G<=T.height-X&&N.readPixels(F,G,D,X,he.convert(Be),he.convert(Re),de)}finally{const Ae=C!==null?Ge.get(C).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,F,G=0){const D=Math.pow(2,-G),X=Math.floor(F.image.width*D),de=Math.floor(F.image.height*D);Ne.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,T.x,T.y,X,de),Ce.unbindTexture()},this.copyTextureToTexture=function(T,F,G,D=0){const X=F.image.width,de=F.image.height,ye=he.convert(G.format),we=he.convert(G.type);Ne.setTexture2D(G,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,T.x,T.y,X,de,ye,we,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,D,T.x,T.y,ye,we,F.image),D===0&&G.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G,D,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Ae=he.convert(D.format),Be=he.convert(D.type);let Re;if(D.isData3DTexture)Ne.setTexture3D(D,0),Re=N.TEXTURE_3D;else if(D.isDataArrayTexture)Ne.setTexture2DArray(D,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const be=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mt=N.getParameter(N.UNPACK_SKIP_PIXELS),Vn=N.getParameter(N.UNPACK_SKIP_ROWS),vi=N.getParameter(N.UNPACK_SKIP_IMAGES),vt=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(Re,X,F.x,F.y,F.z,de,ye,we,Ae,Be,vt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Re,X,F.x,F.y,F.z,de,ye,we,Ae,vt.data)):N.texSubImage3D(Re,X,F.x,F.y,F.z,de,ye,we,Ae,Be,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,be),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,vi),X===0&&D.generateMipmaps&&N.generateMipmap(Re),Ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,Ce.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Gr:H_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gr?Ue:gi}}class iR extends sx{}iR.prototype.isWebGL1Renderer=!0;class rR extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Vu extends Bi{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],d=new U,h=new U,p=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let y=0;f===0&&s===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const R=E/n;d.x=-e*Math.cos(r+R*o)*Math.sin(s+g*a),d.y=e*Math.cos(s+g*a),d.z=e*Math.sin(r+R*o)*Math.sin(s+g*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(R+y,1-g),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const g=c[f][v+1],y=c[f][v],E=c[f+1][v],R=c[f+1][v+1];(f!==0||s>0)&&p.push(g,y,R),(f!==i-1||l<Math.PI)&&p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new Pn(_,3)),this.setAttribute("normal",new Pn(x,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Th extends Bi{constructor(e=1,n=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const s=[],a=[],l=[],u=[],c=new U,d=new U,h=new U;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*o,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),h.subVectors(d,c).normalize(),l.push(h.x,h.y,h.z),u.push(_/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,f=(r+1)*(p-1)+_,v=(r+1)*p+_;s.push(x,m,v),s.push(m,f,v)}this.setIndex(s),this.setAttribute("position",new Pn(a,3)),this.setAttribute("normal",new Pn(l,3)),this.setAttribute("uv",new Pn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dd extends wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Sg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};let ax=class{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}};const oR=new ax;class wh{constructor(e){this.manager=e!==void 0?e:oR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wh.DEFAULT_MATERIAL_NAME="__DEFAULT";class sR extends wh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Sg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ha("img");function l(){c(),Sg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Ss extends wh{constructor(e){super(e)}load(e,n,i,r){const o=new pn,s=new sR(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class lx extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Jc=new yt,Mg=new U,Eg=new U;class aR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Eg),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tg=new yt,Ms=new U,ef=new U;class lR extends aR{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ms.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ms),ef.copy(i.position),ef.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ef),i.updateMatrixWorld(),r.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Tg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tg)}}class uR extends lx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cR extends lx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function fR(){return Fe.jsxs(Fe.Fragment,{children:[Fe.jsxs("header",{children:[Fe.jsx("h1",{children:"Ferick Andrew"}),Fe.jsx("p",{children:"🚀 Welcome to my website!"})]}),Fe.jsx("section",{children:Fe.jsx("blockquote",{children:Fe.jsx("p",{children:"I like making stuff and putting it on the internet"})})}),Fe.jsxs("section",{children:[Fe.jsx("h2",{children:"📜 Manifesto"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Fe.jsxs("section",{className:"light",children:[Fe.jsx("h2",{children:"👩🏽‍🚀 Projects"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Fe.jsx("h2",{children:"🏆 Accomplishments"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Fe.jsx("section",{children:Fe.jsx("blockquote",{children:Fe.jsxs("p",{children:["The best way out is always through ",Fe.jsx("br",{}),Fe.jsx("span",{children:"-Robert Frost"})]})})}),Fe.jsxs("section",{className:"left",children:[Fe.jsx("h2",{children:"🌮 Work History"}),Fe.jsx("h3",{children:"McDonalds"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Fe.jsx("h3",{children:"Burger King"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Fe.jsx("h3",{children:"Taco Bell"}),Fe.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Fe.jsx("section",{children:Fe.jsx("blockquote",{children:Fe.jsx("p",{children:Fe.jsx("span",{children:"Thanks for watching!"})})})})]})}function dR(){const t=new An(75,window.innerWidth/window.innerHeight,3,1e3);return t.position.set(0,0,0),t}function hR(){const t=new cR(16777215,.9),e=new uR(16777215,.7);return e.position.set(5,5,5),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,{ambientLight:t,pointLight:e}}var to={},ss={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux=$r;function Pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sn=Object.prototype.hasOwnProperty,pR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wg={},Ag={};function cx(t){return sn.call(Ag,t)?!0:sn.call(wg,t)?!1:pR.test(t)?Ag[t]=!0:(wg[t]=!0,!1)}function tn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function Ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ah,Ch);Nt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ah,Ch);Nt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ah,Ch);Nt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});var Ll={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mR=["Webkit","ms","Moz","O"];Object.keys(Ll).forEach(function(t){mR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ll[e]=Ll[t]})});var gR=/["'&<>]/;function Zt(t){if(typeof t=="boolean"||typeof t=="number")return""+t;t=""+t;var e=gR.exec(t);if(e){var n="",i,r=0;for(i=e.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#x27;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}r!==i&&(n+=t.substring(r,i)),r=i+1,n+=e}t=r!==i?n+t.substring(r,i):n}return t}var vR=/([A-Z])/g,_R=/^ms-/,hd=Array.isArray;function Ti(t,e){return{insertionMode:t,selectedValue:e}}function xR(t,e,n){switch(e){case"select":return Ti(1,n.value!=null?n.value:n.defaultValue);case"svg":return Ti(2,null);case"math":return Ti(3,null);case"foreignObject":return Ti(1,null);case"table":return Ti(4,null);case"thead":case"tbody":case"tfoot":return Ti(5,null);case"colgroup":return Ti(7,null);case"tr":return Ti(6,null)}return 4<=t.insertionMode||t.insertionMode===0?Ti(1,null):t}var Cg=new Map;function fx(t,e,n){if(typeof n!="object")throw Error(Pe(62));e=!0;for(var i in n)if(sn.call(n,i)){var r=n[i];if(r!=null&&typeof r!="boolean"&&r!==""){if(i.indexOf("--")===0){var o=Zt(i);r=Zt((""+r).trim())}else{o=i;var s=Cg.get(o);s!==void 0||(s=Zt(o.replace(vR,"-$1").toLowerCase().replace(_R,"-ms-")),Cg.set(o,s)),o=s,r=typeof r=="number"?r===0||sn.call(Ll,i)?""+r:r+"px":Zt((""+r).trim())}e?(e=!1,t.push(' style="',o,":",r)):t.push(";",o,":",r)}}e||t.push('"')}function xn(t,e,n,i){switch(n){case"style":fx(t,e,i);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(e=Nt.hasOwnProperty(n)?Nt[n]:null,e!==null){switch(typeof i){case"function":case"symbol":return;case"boolean":if(!e.acceptsBooleans)return}switch(n=e.attributeName,e.type){case 3:i&&t.push(" ",n,'=""');break;case 4:i===!0?t.push(" ",n,'=""'):i!==!1&&t.push(" ",n,'="',Zt(i),'"');break;case 5:isNaN(i)||t.push(" ",n,'="',Zt(i),'"');break;case 6:!isNaN(i)&&1<=i&&t.push(" ",n,'="',Zt(i),'"');break;default:e.sanitizeURL&&(i=""+i),t.push(" ",n,'="',Zt(i),'"')}}else if(cx(n)){switch(typeof i){case"function":case"symbol":return;case"boolean":if(e=n.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-")return}t.push(" ",n,'="',Zt(i),'"')}}}function bl(t,e,n){if(e!=null){if(n!=null)throw Error(Pe(60));if(typeof e!="object"||!("__html"in e))throw Error(Pe(61));e=e.__html,e!=null&&t.push(""+e)}}function yR(t){var e="";return ux.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function tf(t,e,n,i){t.push(si(n));var r=n=null,o;for(o in e)if(sn.call(e,o)){var s=e[o];if(s!=null)switch(o){case"children":n=s;break;case"dangerouslySetInnerHTML":r=s;break;default:xn(t,i,o,s)}}return t.push(">"),bl(t,r,n),typeof n=="string"?(t.push(Zt(n)),null):n}var SR=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Rg=new Map;function si(t){var e=Rg.get(t);if(e===void 0){if(!SR.test(t))throw Error(Pe(65,t));e="<"+t,Rg.set(t,e)}return e}function MR(t,e,n,i,r){switch(e){case"select":t.push(si("select"));var o=null,s=null;for(c in n)if(sn.call(n,c)){var a=n[c];if(a!=null)switch(c){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;case"defaultValue":case"value":break;default:xn(t,i,c,a)}}return t.push(">"),bl(t,s,o),o;case"option":s=r.selectedValue,t.push(si("option"));var l=a=null,u=null,c=null;for(o in n)if(sn.call(n,o)){var d=n[o];if(d!=null)switch(o){case"children":a=d;break;case"selected":u=d;break;case"dangerouslySetInnerHTML":c=d;break;case"value":l=d;default:xn(t,i,o,d)}}if(s!=null)if(n=l!==null?""+l:yR(a),hd(s)){for(i=0;i<s.length;i++)if(""+s[i]===n){t.push(' selected=""');break}}else""+s===n&&t.push(' selected=""');else u&&t.push(' selected=""');return t.push(">"),bl(t,c,a),a;case"textarea":t.push(si("textarea")),c=s=o=null;for(a in n)if(sn.call(n,a)&&(l=n[a],l!=null))switch(a){case"children":c=l;break;case"value":o=l;break;case"defaultValue":s=l;break;case"dangerouslySetInnerHTML":throw Error(Pe(91));default:xn(t,i,a,l)}if(o===null&&s!==null&&(o=s),t.push(">"),c!=null){if(o!=null)throw Error(Pe(92));if(hd(c)&&1<c.length)throw Error(Pe(93));o=""+c}return typeof o=="string"&&o[0]===`
`&&t.push(`
`),o!==null&&t.push(Zt(""+o)),null;case"input":t.push(si("input")),l=c=a=o=null;for(s in n)if(sn.call(n,s)&&(u=n[s],u!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(Pe(399,"input"));case"defaultChecked":l=u;break;case"defaultValue":a=u;break;case"checked":c=u;break;case"value":o=u;break;default:xn(t,i,s,u)}return c!==null?xn(t,i,"checked",c):l!==null&&xn(t,i,"checked",l),o!==null?xn(t,i,"value",o):a!==null&&xn(t,i,"value",a),t.push("/>"),null;case"menuitem":t.push(si("menuitem"));for(var h in n)if(sn.call(n,h)&&(o=n[h],o!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(Pe(400));default:xn(t,i,h,o)}return t.push(">"),null;case"title":t.push(si("title")),o=null;for(d in n)if(sn.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":throw Error(Pe(434));default:xn(t,i,d,s)}return t.push(">"),o;case"listing":case"pre":t.push(si(e)),s=o=null;for(l in n)if(sn.call(n,l)&&(a=n[l],a!=null))switch(l){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;default:xn(t,i,l,a)}if(t.push(">"),s!=null){if(o!=null)throw Error(Pe(60));if(typeof s!="object"||!("__html"in s))throw Error(Pe(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?t.push(`
`,n):t.push(""+n))}return typeof o=="string"&&o[0]===`
`&&t.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":t.push(si(e));for(var p in n)if(sn.call(n,p)&&(o=n[p],o!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(Pe(399,e));default:xn(t,i,p,o)}return t.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return tf(t,n,e,i);case"html":return r.insertionMode===0&&t.push("<!DOCTYPE html>"),tf(t,n,e,i);default:if(e.indexOf("-")===-1&&typeof n.is!="string")return tf(t,n,e,i);t.push(si(e)),s=o=null;for(u in n)if(sn.call(n,u)&&(a=n[u],a!=null))switch(u){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;case"style":fx(t,i,a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:cx(u)&&typeof a!="function"&&typeof a!="symbol"&&t.push(" ",u,'="',Zt(a),'"')}return t.push(">"),bl(t,s,o),o}}function Pg(t,e,n){if(t.push('<!--$?--><template id="'),n===null)throw Error(Pe(395));return t.push(n),t.push('"></template>')}function ER(t,e,n,i){switch(n.insertionMode){case 0:case 1:return t.push('<div hidden id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 2:return t.push('<svg aria-hidden="true" style="display:none" id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 3:return t.push('<math aria-hidden="true" style="display:none" id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 4:return t.push('<table hidden id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 5:return t.push('<table hidden><tbody id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 6:return t.push('<table hidden><tr id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');case 7:return t.push('<table hidden><colgroup id="'),t.push(e.segmentPrefix),e=i.toString(16),t.push(e),t.push('">');default:throw Error(Pe(397))}}function TR(t,e){switch(e.insertionMode){case 0:case 1:return t.push("</div>");case 2:return t.push("</svg>");case 3:return t.push("</math>");case 4:return t.push("</table>");case 5:return t.push("</tbody></table>");case 6:return t.push("</tr></table>");case 7:return t.push("</colgroup></table>");default:throw Error(Pe(397))}}var wR=/[<\u2028\u2029]/g;function nf(t){return JSON.stringify(t).replace(wR,function(e){switch(e){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function AR(t,e){return e=e===void 0?"":e,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:e+"P:",segmentPrefix:e+"S:",boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:t}}function Lg(t,e,n,i){return n.generateStaticMarkup?(t.push(Zt(e)),!1):(e===""?t=i:(i&&t.push("<!-- -->"),t.push(Zt(e)),t=!0),t)}var $s=Object.assign,CR=Symbol.for("react.element"),dx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),yx=Symbol.for("react.suspense_list"),Sx=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),RR=Symbol.for("react.scope"),PR=Symbol.for("react.debug_trace_mode"),LR=Symbol.for("react.legacy_hidden"),bR=Symbol.for("react.default_value"),bg=Symbol.iterator;function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hx:return"Fragment";case dx:return"Portal";case mx:return"Profiler";case px:return"StrictMode";case xx:return"Suspense";case yx:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vx:return(t.displayName||"Context")+".Consumer";case gx:return(t._context.displayName||"Context")+".Provider";case _x:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sx:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case Rh:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}var Mx={};function Dg(t,e){if(t=t.contextTypes,!t)return Mx;var n={},i;for(i in t)n[i]=e[i];return n}var kr=null;function Gu(t,e){if(t!==e){t.context._currentValue2=t.parentValue,t=t.parent;var n=e.parent;if(t===null){if(n!==null)throw Error(Pe(401))}else{if(n===null)throw Error(Pe(401));Gu(t,n)}e.context._currentValue2=e.value}}function Ex(t){t.context._currentValue2=t.parentValue,t=t.parent,t!==null&&Ex(t)}function Tx(t){var e=t.parent;e!==null&&Tx(e),t.context._currentValue2=t.value}function wx(t,e){if(t.context._currentValue2=t.parentValue,t=t.parent,t===null)throw Error(Pe(402));t.depth===e.depth?Gu(t,e):wx(t,e)}function Ax(t,e){var n=e.parent;if(n===null)throw Error(Pe(402));t.depth===n.depth?Gu(t,n):Ax(t,n),e.context._currentValue2=e.value}function du(t){var e=kr;e!==t&&(e===null?Tx(t):t===null?Ex(e):e.depth===t.depth?Gu(e,t):e.depth>t.depth?wx(e,t):Ax(e,t),kr=t)}var Ug={isMounted:function(){return!1},enqueueSetState:function(t,e){t=t._reactInternals,t.queue!==null&&t.queue.push(e)},enqueueReplaceState:function(t,e){t=t._reactInternals,t.replace=!0,t.queue=[e]},enqueueForceUpdate:function(){}};function Ig(t,e,n,i){var r=t.state!==void 0?t.state:null;t.updater=Ug,t.props=n,t.state=r;var o={queue:[],replace:!1};t._reactInternals=o;var s=e.contextType;if(t.context=typeof s=="object"&&s!==null?s._currentValue2:i,s=e.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,r),r=s==null?r:$s({},r,s),t.state=r),typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function"&&(typeof t.UNSAFE_componentWillMount=="function"||typeof t.componentWillMount=="function"))if(e=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),e!==t.state&&Ug.enqueueReplaceState(t,t.state,null),o.queue!==null&&0<o.queue.length)if(e=o.queue,s=o.replace,o.queue=null,o.replace=!1,s&&e.length===1)t.state=e[0];else{for(o=s?e[0]:t.state,r=!0,s=s?1:0;s<e.length;s++){var a=e[s];a=typeof a=="function"?a.call(t,o,n,i):a,a!=null&&(r?(r=!1,o=$s({},o,a)):$s(o,a))}t.state=o}else o.queue=null}var DR={id:1,overflow:""};function md(t,e,n){var i=t.id;t=t.overflow;var r=32-Dl(i)-1;i&=~(1<<r),n+=1;var o=32-Dl(e)+r;if(30<o){var s=r-r%5;return o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,{id:1<<32-Dl(e)+r|n<<r|i,overflow:o+t}}return{id:1<<o|n<<r|i,overflow:t}}var Dl=Math.clz32?Math.clz32:NR,UR=Math.log,IR=Math.LN2;function NR(t){return t>>>=0,t===0?32:31-(UR(t)/IR|0)|0}function FR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kR=typeof Object.is=="function"?Object.is:FR,ki=null,Ph=null,Ul=null,Je=null,Ps=!1,hu=!1,pa=0,nr=null,Wu=0;function br(){if(ki===null)throw Error(Pe(321));return ki}function Ng(){if(0<Wu)throw Error(Pe(312));return{memoizedState:null,queue:null,next:null}}function Lh(){return Je===null?Ul===null?(Ps=!1,Ul=Je=Ng()):(Ps=!0,Je=Ul):Je.next===null?(Ps=!1,Je=Je.next=Ng()):(Ps=!0,Je=Je.next),Je}function bh(){Ph=ki=null,hu=!1,Ul=null,Wu=0,Je=nr=null}function Cx(t,e){return typeof e=="function"?e(t):e}function Fg(t,e,n){if(ki=br(),Je=Lh(),Ps){var i=Je.queue;if(e=i.dispatch,nr!==null&&(n=nr.get(i),n!==void 0)){nr.delete(i),i=Je.memoizedState;do i=t(i,n.action),n=n.next;while(n!==null);return Je.memoizedState=i,[i,e]}return[Je.memoizedState,e]}return t=t===Cx?typeof e=="function"?e():e:n!==void 0?n(e):e,Je.memoizedState=t,t=Je.queue={last:null,dispatch:null},t=t.dispatch=OR.bind(null,ki,t),[Je.memoizedState,t]}function kg(t,e){if(ki=br(),Je=Lh(),e=e===void 0?null:e,Je!==null){var n=Je.memoizedState;if(n!==null&&e!==null){var i=n[1];e:if(i===null)i=!1;else{for(var r=0;r<i.length&&r<e.length;r++)if(!kR(e[r],i[r])){i=!1;break e}i=!0}if(i)return n[0]}}return t=t(),Je.memoizedState=[t,e],t}function OR(t,e,n){if(25<=Wu)throw Error(Pe(301));if(t===ki)if(hu=!0,t={action:n,next:null},nr===null&&(nr=new Map),n=nr.get(e),n===void 0)nr.set(e,t);else{for(e=n;e.next!==null;)e=e.next;e.next=t}}function zR(){throw Error(Pe(394))}function hl(){}var Og={readContext:function(t){return t._currentValue2},useContext:function(t){return br(),t._currentValue2},useMemo:kg,useReducer:Fg,useRef:function(t){ki=br(),Je=Lh();var e=Je.memoizedState;return e===null?(t={current:t},Je.memoizedState=t):e},useState:function(t){return Fg(Cx,t)},useInsertionEffect:hl,useLayoutEffect:function(){},useCallback:function(t,e){return kg(function(){return t},e)},useImperativeHandle:hl,useEffect:hl,useDebugValue:hl,useDeferredValue:function(t){return br(),t},useTransition:function(){return br(),[!1,zR]},useId:function(){var t=Ph.treeContext,e=t.overflow;t=t.id,t=(t&~(1<<32-Dl(t)-1)).toString(32)+e;var n=Il;if(n===null)throw Error(Pe(404));return e=pa++,t=":"+n.idPrefix+"R"+t,0<e&&(t+="H"+e.toString(32)),t+":"},useMutableSource:function(t,e){return br(),e(t._source)},useSyncExternalStore:function(t,e,n){if(n===void 0)throw Error(Pe(407));return n()}},Il=null,rf=ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function BR(t){return console.error(t),null}function Ls(){}function HR(t,e,n,i,r,o,s,a,l){var u=[],c=new Set;return e={destination:null,responseState:e,progressiveChunkSize:i===void 0?12800:i,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:r===void 0?BR:r,onAllReady:o===void 0?Ls:o,onShellReady:s===void 0?Ls:s,onShellError:a===void 0?Ls:a,onFatalError:l===void 0?Ls:l},n=pu(e,0,null,n,!1,!1),n.parentFlushed=!0,t=Dh(e,t,null,n,c,Mx,null,DR),u.push(t),e}function Dh(t,e,n,i,r,o,s,a){t.allPendingTasks++,n===null?t.pendingRootTasks++:n.pendingTasks++;var l={node:e,ping:function(){var u=t.pingedTasks;u.push(l),u.length===1&&Lx(t)},blockedBoundary:n,blockedSegment:i,abortSet:r,legacyContext:o,context:s,treeContext:a};return r.add(l),l}function pu(t,e,n,i,r,o){return{status:0,id:-1,index:e,parentFlushed:!1,chunks:[],children:[],formatContext:i,boundary:n,lastPushedText:r,textEmbedded:o}}function ma(t,e){if(t=t.onError(e),t!=null&&typeof t!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof t+'" instead');return t}function mu(t,e){var n=t.onShellError;n(e),n=t.onFatalError,n(e),t.destination!==null?(t.status=2,t.destination.destroy(e)):(t.status=1,t.fatalError=e)}function zg(t,e,n,i,r){for(ki={},Ph=e,pa=0,t=n(i,r);hu;)hu=!1,pa=0,Wu+=1,Je=null,t=n(i,r);return bh(),t}function Bg(t,e,n,i){var r=n.render(),o=i.childContextTypes;if(o!=null){var s=e.legacyContext;if(typeof n.getChildContext!="function")i=s;else{n=n.getChildContext();for(var a in n)if(!(a in o))throw Error(Pe(108,pd(i)||"Unknown",a));i=$s({},s,n)}e.legacyContext=i,Mn(t,e,r),e.legacyContext=s}else Mn(t,e,r)}function Hg(t,e){if(t&&t.defaultProps){e=$s({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gd(t,e,n,i,r){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){r=Dg(n,e.legacyContext);var o=n.contextType;o=new n(i,typeof o=="object"&&o!==null?o._currentValue2:r),Ig(o,n,i,r),Bg(t,e,o,n)}else{o=Dg(n,e.legacyContext),r=zg(t,e,n,i,o);var s=pa!==0;if(typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0)Ig(r,n,i,o),Bg(t,e,r,n);else if(s){i=e.treeContext,e.treeContext=md(i,1,0);try{Mn(t,e,r)}finally{e.treeContext=i}}else Mn(t,e,r)}else if(typeof n=="string"){switch(r=e.blockedSegment,o=MR(r.chunks,n,i,t.responseState,r.formatContext),r.lastPushedText=!1,s=r.formatContext,r.formatContext=xR(s,n,i),vd(t,e,o),r.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:r.chunks.push("</",n,">")}r.lastPushedText=!1}else{switch(n){case LR:case PR:case px:case mx:case hx:Mn(t,e,i.children);return;case yx:Mn(t,e,i.children);return;case RR:throw Error(Pe(343));case xx:e:{n=e.blockedBoundary,r=e.blockedSegment,o=i.fallback,i=i.children,s=new Set;var a={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},l=pu(t,r.chunks.length,a,r.formatContext,!1,!1);r.children.push(l),r.lastPushedText=!1;var u=pu(t,0,null,r.formatContext,!1,!1);u.parentFlushed=!0,e.blockedBoundary=a,e.blockedSegment=u;try{if(vd(t,e,i),t.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),u.status=1,gu(a,u),a.pendingTasks===0)break e}catch(c){u.status=4,a.forceClientRender=!0,a.errorDigest=ma(t,c)}finally{e.blockedBoundary=n,e.blockedSegment=r}e=Dh(t,o,n,l,s,e.legacyContext,e.context,e.treeContext),t.pingedTasks.push(e)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _x:if(i=zg(t,e,n.render,i,r),pa!==0){n=e.treeContext,e.treeContext=md(n,1,0);try{Mn(t,e,i)}finally{e.treeContext=n}}else Mn(t,e,i);return;case Sx:n=n.type,i=Hg(n,i),gd(t,e,n,i,r);return;case gx:if(r=i.children,n=n._context,i=i.value,o=n._currentValue2,n._currentValue2=i,s=kr,kr=i={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:o,value:i},e.context=i,Mn(t,e,r),t=kr,t===null)throw Error(Pe(403));i=t.parentValue,t.context._currentValue2=i===bR?t.context._defaultValue:i,t=kr=t.parent,e.context=t;return;case vx:i=i.children,i=i(n._currentValue2),Mn(t,e,i);return;case Rh:r=n._init,n=r(n._payload),i=Hg(n,i),gd(t,e,n,i,void 0);return}throw Error(Pe(130,n==null?n:typeof n,""))}}function Mn(t,e,n){if(e.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case CR:gd(t,e,n.type,n.props,n.ref);return;case dx:throw Error(Pe(257));case Rh:var i=n._init;n=i(n._payload),Mn(t,e,n);return}if(hd(n)){Vg(t,e,n);return}if(n===null||typeof n!="object"?i=null:(i=bg&&n[bg]||n["@@iterator"],i=typeof i=="function"?i:null),i&&(i=i.call(n))){if(n=i.next(),!n.done){var r=[];do r.push(n.value),n=i.next();while(!n.done);Vg(t,e,r)}return}throw t=Object.prototype.toString.call(n),Error(Pe(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}typeof n=="string"?(i=e.blockedSegment,i.lastPushedText=Lg(e.blockedSegment.chunks,n,t.responseState,i.lastPushedText)):typeof n=="number"&&(i=e.blockedSegment,i.lastPushedText=Lg(e.blockedSegment.chunks,""+n,t.responseState,i.lastPushedText))}function Vg(t,e,n){for(var i=n.length,r=0;r<i;r++){var o=e.treeContext;e.treeContext=md(o,i,r);try{vd(t,e,n[r])}finally{e.treeContext=o}}}function vd(t,e,n){var i=e.blockedSegment.formatContext,r=e.legacyContext,o=e.context;try{return Mn(t,e,n)}catch(l){if(bh(),typeof l=="object"&&l!==null&&typeof l.then=="function"){n=l;var s=e.blockedSegment,a=pu(t,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(a),s.lastPushedText=!1,t=Dh(t,e.node,e.blockedBoundary,a,e.abortSet,e.legacyContext,e.context,e.treeContext).ping,n.then(t,t),e.blockedSegment.formatContext=i,e.legacyContext=r,e.context=o,du(o)}else throw e.blockedSegment.formatContext=i,e.legacyContext=r,e.context=o,du(o),l}}function VR(t){var e=t.blockedBoundary;t=t.blockedSegment,t.status=3,Px(this,e,t)}function Rx(t,e,n){var i=t.blockedBoundary;t.blockedSegment.status=3,i===null?(e.allPendingTasks--,e.status!==2&&(e.status=2,e.destination!==null&&e.destination.push(null))):(i.pendingTasks--,i.forceClientRender||(i.forceClientRender=!0,t=n===void 0?Error(Pe(432)):n,i.errorDigest=e.onError(t),i.parentFlushed&&e.clientRenderedBoundaries.push(i)),i.fallbackAbortableTasks.forEach(function(r){return Rx(r,e,n)}),i.fallbackAbortableTasks.clear(),e.allPendingTasks--,e.allPendingTasks===0&&(i=e.onAllReady,i()))}function gu(t,e){if(e.chunks.length===0&&e.children.length===1&&e.children[0].boundary===null){var n=e.children[0];n.id=e.id,n.parentFlushed=!0,n.status===1&&gu(t,n)}else t.completedSegments.push(e)}function Px(t,e,n){if(e===null){if(n.parentFlushed){if(t.completedRootSegment!==null)throw Error(Pe(389));t.completedRootSegment=n}t.pendingRootTasks--,t.pendingRootTasks===0&&(t.onShellError=Ls,e=t.onShellReady,e())}else e.pendingTasks--,e.forceClientRender||(e.pendingTasks===0?(n.parentFlushed&&n.status===1&&gu(e,n),e.parentFlushed&&t.completedBoundaries.push(e),e.fallbackAbortableTasks.forEach(VR,t),e.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(gu(e,n),e.completedSegments.length===1&&e.parentFlushed&&t.partialBoundaries.push(e)));t.allPendingTasks--,t.allPendingTasks===0&&(t=t.onAllReady,t())}function Lx(t){if(t.status!==2){var e=kr,n=rf.current;rf.current=Og;var i=Il;Il=t.responseState;try{var r=t.pingedTasks,o;for(o=0;o<r.length;o++){var s=r[o],a=t,l=s.blockedSegment;if(l.status===0){du(s.context);try{Mn(a,s,s.node),a.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push("<!-- -->"),s.abortSet.delete(s),l.status=1,Px(a,s.blockedBoundary,l)}catch(_){if(bh(),typeof _=="object"&&_!==null&&typeof _.then=="function"){var u=s.ping;_.then(u,u)}else{s.abortSet.delete(s),l.status=4;var c=s.blockedBoundary,d=_,h=ma(a,d);if(c===null?mu(a,d):(c.pendingTasks--,c.forceClientRender||(c.forceClientRender=!0,c.errorDigest=h,c.parentFlushed&&a.clientRenderedBoundaries.push(c))),a.allPendingTasks--,a.allPendingTasks===0){var p=a.onAllReady;p()}}}finally{}}}r.splice(0,o),t.destination!==null&&Uh(t,t.destination)}catch(_){ma(t,_),mu(t,_)}finally{Il=i,rf.current=n,n===Og&&du(e)}}}function pl(t,e,n){switch(n.parentFlushed=!0,n.status){case 0:var i=n.id=t.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,t=t.responseState,e.push('<template id="'),e.push(t.placeholderPrefix),t=i.toString(16),e.push(t),e.push('"></template>');case 1:n.status=2;var r=!0;i=n.chunks;var o=0;n=n.children;for(var s=0;s<n.length;s++){for(r=n[s];o<r.index;o++)e.push(i[o]);r=$u(t,e,r)}for(;o<i.length-1;o++)e.push(i[o]);return o<i.length&&(r=e.push(i[o])),r;default:throw Error(Pe(390))}}function $u(t,e,n){var i=n.boundary;if(i===null)return pl(t,e,n);if(i.parentFlushed=!0,i.forceClientRender)return t.responseState.generateStaticMarkup||(i=i.errorDigest,e.push("<!--$!-->"),e.push("<template"),i&&(e.push(' data-dgst="'),i=Zt(i),e.push(i),e.push('"')),e.push("></template>")),pl(t,e,n),t=t.responseState.generateStaticMarkup?!0:e.push("<!--/$-->"),t;if(0<i.pendingTasks){i.rootSegmentID=t.nextSegmentId++,0<i.completedSegments.length&&t.partialBoundaries.push(i);var r=t.responseState,o=r.nextSuspenseID++;return r=r.boundaryPrefix+o.toString(16),i=i.id=r,Pg(e,t.responseState,i),pl(t,e,n),e.push("<!--/$-->")}if(i.byteSize>t.progressiveChunkSize)return i.rootSegmentID=t.nextSegmentId++,t.completedBoundaries.push(i),Pg(e,t.responseState,i.id),pl(t,e,n),e.push("<!--/$-->");if(t.responseState.generateStaticMarkup||e.push("<!--$-->"),n=i.completedSegments,n.length!==1)throw Error(Pe(391));return $u(t,e,n[0]),t=t.responseState.generateStaticMarkup?!0:e.push("<!--/$-->"),t}function Gg(t,e,n){return ER(e,t.responseState,n.formatContext,n.id),$u(t,e,n),TR(e,n.formatContext)}function Wg(t,e,n){for(var i=n.completedSegments,r=0;r<i.length;r++)bx(t,e,n,i[r]);if(i.length=0,t=t.responseState,i=n.id,n=n.rootSegmentID,e.push(t.startInlineScript),t.sentCompleteBoundaryFunction?e.push('$RC("'):(t.sentCompleteBoundaryFunction=!0,e.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),i===null)throw Error(Pe(395));return n=n.toString(16),e.push(i),e.push('","'),e.push(t.segmentPrefix),e.push(n),e.push('")<\/script>')}function bx(t,e,n,i){if(i.status===2)return!0;var r=i.id;if(r===-1){if((i.id=n.rootSegmentID)===-1)throw Error(Pe(392));return Gg(t,e,i)}return Gg(t,e,i),t=t.responseState,e.push(t.startInlineScript),t.sentCompleteSegmentFunction?e.push('$RS("'):(t.sentCompleteSegmentFunction=!0,e.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),e.push(t.segmentPrefix),r=r.toString(16),e.push(r),e.push('","'),e.push(t.placeholderPrefix),e.push(r),e.push('")<\/script>')}function Uh(t,e){try{var n=t.completedRootSegment;if(n!==null&&t.pendingRootTasks===0){$u(t,e,n),t.completedRootSegment=null;var i=t.responseState.bootstrapChunks;for(n=0;n<i.length-1;n++)e.push(i[n]);n<i.length&&e.push(i[n])}var r=t.clientRenderedBoundaries,o;for(o=0;o<r.length;o++){var s=r[o];i=e;var a=t.responseState,l=s.id,u=s.errorDigest,c=s.errorMessage,d=s.errorComponentStack;if(i.push(a.startInlineScript),a.sentClientRenderFunction?i.push('$RX("'):(a.sentClientRenderFunction=!0,i.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),l===null)throw Error(Pe(395));if(i.push(l),i.push('"'),u||c||d){i.push(",");var h=nf(u||"");i.push(h)}if(c||d){i.push(",");var p=nf(c||"");i.push(p)}if(d){i.push(",");var _=nf(d);i.push(_)}if(!i.push(")<\/script>")){t.destination=null,o++,r.splice(0,o);return}}r.splice(0,o);var x=t.completedBoundaries;for(o=0;o<x.length;o++)if(!Wg(t,e,x[o])){t.destination=null,o++,x.splice(0,o);return}x.splice(0,o);var m=t.partialBoundaries;for(o=0;o<m.length;o++){var f=m[o];e:{r=t,s=e;var v=f.completedSegments;for(a=0;a<v.length;a++)if(!bx(r,s,f,v[a])){a++,v.splice(0,a);var g=!1;break e}v.splice(0,a),g=!0}if(!g){t.destination=null,o++,m.splice(0,o);return}}m.splice(0,o);var y=t.completedBoundaries;for(o=0;o<y.length;o++)if(!Wg(t,e,y[o])){t.destination=null,o++,y.splice(0,o);return}y.splice(0,o)}finally{t.allPendingTasks===0&&t.pingedTasks.length===0&&t.clientRenderedBoundaries.length===0&&t.completedBoundaries.length===0&&e.push(null)}}function GR(t,e){try{var n=t.abortableTasks;n.forEach(function(i){return Rx(i,t,e)}),n.clear(),t.destination!==null&&Uh(t,t.destination)}catch(i){ma(t,i),mu(t,i)}}function WR(){}function Dx(t,e,n,i){var r=!1,o=null,s="",a={push:function(u){return u!==null&&(s+=u),!0},destroy:function(u){r=!0,o=u}},l=!1;if(t=HR(t,AR(n,e?e.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,WR,void 0,function(){l=!0},void 0,void 0),Lx(t),GR(t,i),t.status===1)t.status=2,a.destroy(t.fatalError);else if(t.status!==2&&t.destination===null){t.destination=a;try{Uh(t,a)}catch(u){ma(t,u),mu(t,u)}}if(r)throw o;if(!l)throw Error(Pe(426));return s}ss.renderToNodeStream=function(){throw Error(Pe(207))};ss.renderToStaticMarkup=function(t,e){return Dx(t,e,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};ss.renderToStaticNodeStream=function(){throw Error(Pe(208))};ss.renderToString=function(t,e){return Dx(t,e,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};ss.version="18.2.0";var Ih={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=$r;function Ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var En=null,Tn=0;function me(t,e){if(e.length!==0)if(512<e.length)0<Tn&&(t.enqueue(new Uint8Array(En.buffer,0,Tn)),En=new Uint8Array(512),Tn=0),t.enqueue(e);else{var n=En.length-Tn;n<e.length&&(n===0?t.enqueue(En):(En.set(e.subarray(0,n),Tn),t.enqueue(En),e=e.subarray(n)),En=new Uint8Array(512),Tn=0),En.set(e,Tn),Tn+=e.length}}function it(t,e){return me(t,e),!0}function $g(t){En&&0<Tn&&(t.enqueue(new Uint8Array(En.buffer,0,Tn)),En=null,Tn=0)}var Ix=new TextEncoder;function Oe(t){return Ix.encode(t)}function se(t){return Ix.encode(t)}function Nx(t,e){typeof t.error=="function"?t.error(e):t.close()}var an=Object.prototype.hasOwnProperty,$R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},jg={};function Fx(t){return an.call(jg,t)?!0:an.call(Xg,t)?!1:$R.test(t)?jg[t]=!0:(Xg[t]=!0,!1)}function nn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Fh);Ft[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Fh);Ft[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Fh);Ft[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XR=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(t){XR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Nl[e]=Nl[t]})});var jR=/["'&<>]/;function Dt(t){if(typeof t=="boolean"||typeof t=="number")return""+t;t=""+t;var e=jR.exec(t);if(e){var n="",i,r=0;for(i=e.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#x27;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}r!==i&&(n+=t.substring(r,i)),r=i+1,n+=e}t=r!==i?n+t.substring(r,i):n}return t}var qR=/([A-Z])/g,YR=/^ms-/,_d=Array.isArray,KR=se("<script>"),ZR=se("<\/script>"),QR=se('<script src="'),JR=se('<script type="module" src="'),qg=se('" async=""><\/script>'),e2=/(<\/|<)(s)(cript)/gi;function t2(t,e,n,i){return""+e+(n==="s"?"\\u0073":"\\u0053")+i}function n2(t,e,n,i,r){t=t===void 0?"":t,e=e===void 0?KR:se('<script nonce="'+Dt(e)+'">');var o=[];if(n!==void 0&&o.push(e,Oe((""+n).replace(e2,t2)),ZR),i!==void 0)for(n=0;n<i.length;n++)o.push(QR,Oe(Dt(i[n])),qg);if(r!==void 0)for(i=0;i<r.length;i++)o.push(JR,Oe(Dt(r[i])),qg);return{bootstrapChunks:o,startInlineScript:e,placeholderPrefix:se(t+"P:"),segmentPrefix:se(t+"S:"),boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function ai(t,e){return{insertionMode:t,selectedValue:e}}function i2(t){return ai(t==="http://www.w3.org/2000/svg"?2:t==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function r2(t,e,n){switch(e){case"select":return ai(1,n.value!=null?n.value:n.defaultValue);case"svg":return ai(2,null);case"math":return ai(3,null);case"foreignObject":return ai(1,null);case"table":return ai(4,null);case"thead":case"tbody":case"tfoot":return ai(5,null);case"colgroup":return ai(7,null);case"tr":return ai(6,null)}return 4<=t.insertionMode||t.insertionMode===0?ai(1,null):t}var kh=se("<!-- -->");function Yg(t,e,n,i){return e===""?i:(i&&t.push(kh),t.push(Oe(Dt(e))),!0)}var Kg=new Map,o2=se(' style="'),Zg=se(":"),s2=se(";");function kx(t,e,n){if(typeof n!="object")throw Error(Ie(62));e=!0;for(var i in n)if(an.call(n,i)){var r=n[i];if(r!=null&&typeof r!="boolean"&&r!==""){if(i.indexOf("--")===0){var o=Oe(Dt(i));r=Oe(Dt((""+r).trim()))}else{o=i;var s=Kg.get(o);s!==void 0||(s=se(Dt(o.replace(qR,"-$1").toLowerCase().replace(YR,"-ms-"))),Kg.set(o,s)),o=s,r=typeof r=="number"?r===0||an.call(Nl,i)?Oe(""+r):Oe(r+"px"):Oe(Dt((""+r).trim()))}e?(e=!1,t.push(o2,o,Zg,r)):t.push(s2,o,Zg,r)}}e||t.push(Dr)}var Xi=se(" "),So=se('="'),Dr=se('"'),Qg=se('=""');function yn(t,e,n,i){switch(n){case"style":kx(t,e,i);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(e=Ft.hasOwnProperty(n)?Ft[n]:null,e!==null){switch(typeof i){case"function":case"symbol":return;case"boolean":if(!e.acceptsBooleans)return}switch(n=Oe(e.attributeName),e.type){case 3:i&&t.push(Xi,n,Qg);break;case 4:i===!0?t.push(Xi,n,Qg):i!==!1&&t.push(Xi,n,So,Oe(Dt(i)),Dr);break;case 5:isNaN(i)||t.push(Xi,n,So,Oe(Dt(i)),Dr);break;case 6:!isNaN(i)&&1<=i&&t.push(Xi,n,So,Oe(Dt(i)),Dr);break;default:e.sanitizeURL&&(i=""+i),t.push(Xi,n,So,Oe(Dt(i)),Dr)}}else if(Fx(n)){switch(typeof i){case"function":case"symbol":return;case"boolean":if(e=n.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-")return}t.push(Xi,Oe(n),So,Oe(Dt(i)),Dr)}}}var ji=se(">"),Jg=se("/>");function Fl(t,e,n){if(e!=null){if(n!=null)throw Error(Ie(60));if(typeof e!="object"||!("__html"in e))throw Error(Ie(61));e=e.__html,e!=null&&t.push(Oe(""+e))}}function a2(t){var e="";return Ux.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}var of=se(' selected=""');function sf(t,e,n,i){t.push(li(n));var r=n=null,o;for(o in e)if(an.call(e,o)){var s=e[o];if(s!=null)switch(o){case"children":n=s;break;case"dangerouslySetInnerHTML":r=s;break;default:yn(t,i,o,s)}}return t.push(ji),Fl(t,r,n),typeof n=="string"?(t.push(Oe(Dt(n))),null):n}var af=se(`
`),l2=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ev=new Map;function li(t){var e=ev.get(t);if(e===void 0){if(!l2.test(t))throw Error(Ie(65,t));e=se("<"+t),ev.set(t,e)}return e}var u2=se("<!DOCTYPE html>");function c2(t,e,n,i,r){switch(e){case"select":t.push(li("select"));var o=null,s=null;for(c in n)if(an.call(n,c)){var a=n[c];if(a!=null)switch(c){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;case"defaultValue":case"value":break;default:yn(t,i,c,a)}}return t.push(ji),Fl(t,s,o),o;case"option":s=r.selectedValue,t.push(li("option"));var l=a=null,u=null,c=null;for(o in n)if(an.call(n,o)){var d=n[o];if(d!=null)switch(o){case"children":a=d;break;case"selected":u=d;break;case"dangerouslySetInnerHTML":c=d;break;case"value":l=d;default:yn(t,i,o,d)}}if(s!=null)if(n=l!==null?""+l:a2(a),_d(s)){for(i=0;i<s.length;i++)if(""+s[i]===n){t.push(of);break}}else""+s===n&&t.push(of);else u&&t.push(of);return t.push(ji),Fl(t,c,a),a;case"textarea":t.push(li("textarea")),c=s=o=null;for(a in n)if(an.call(n,a)&&(l=n[a],l!=null))switch(a){case"children":c=l;break;case"value":o=l;break;case"defaultValue":s=l;break;case"dangerouslySetInnerHTML":throw Error(Ie(91));default:yn(t,i,a,l)}if(o===null&&s!==null&&(o=s),t.push(ji),c!=null){if(o!=null)throw Error(Ie(92));if(_d(c)&&1<c.length)throw Error(Ie(93));o=""+c}return typeof o=="string"&&o[0]===`
`&&t.push(af),o!==null&&t.push(Oe(Dt(""+o))),null;case"input":t.push(li("input")),l=c=a=o=null;for(s in n)if(an.call(n,s)&&(u=n[s],u!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(Ie(399,"input"));case"defaultChecked":l=u;break;case"defaultValue":a=u;break;case"checked":c=u;break;case"value":o=u;break;default:yn(t,i,s,u)}return c!==null?yn(t,i,"checked",c):l!==null&&yn(t,i,"checked",l),o!==null?yn(t,i,"value",o):a!==null&&yn(t,i,"value",a),t.push(Jg),null;case"menuitem":t.push(li("menuitem"));for(var h in n)if(an.call(n,h)&&(o=n[h],o!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(Ie(400));default:yn(t,i,h,o)}return t.push(ji),null;case"title":t.push(li("title")),o=null;for(d in n)if(an.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":throw Error(Ie(434));default:yn(t,i,d,s)}return t.push(ji),o;case"listing":case"pre":t.push(li(e)),s=o=null;for(l in n)if(an.call(n,l)&&(a=n[l],a!=null))switch(l){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;default:yn(t,i,l,a)}if(t.push(ji),s!=null){if(o!=null)throw Error(Ie(60));if(typeof s!="object"||!("__html"in s))throw Error(Ie(61));n=s.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?t.push(af,Oe(n)):t.push(Oe(""+n)))}return typeof o=="string"&&o[0]===`
`&&t.push(af),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":t.push(li(e));for(var p in n)if(an.call(n,p)&&(o=n[p],o!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(Ie(399,e));default:yn(t,i,p,o)}return t.push(Jg),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return sf(t,n,e,i);case"html":return r.insertionMode===0&&t.push(u2),sf(t,n,e,i);default:if(e.indexOf("-")===-1&&typeof n.is!="string")return sf(t,n,e,i);t.push(li(e)),s=o=null;for(u in n)if(an.call(n,u)&&(a=n[u],a!=null))switch(u){case"children":o=a;break;case"dangerouslySetInnerHTML":s=a;break;case"style":kx(t,i,a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Fx(u)&&typeof a!="function"&&typeof a!="symbol"&&t.push(Xi,Oe(u),So,Oe(Dt(a)),Dr)}return t.push(ji),Fl(t,s,o),o}}var f2=se("</"),d2=se(">"),h2=se('<template id="'),p2=se('"></template>'),m2=se("<!--$-->"),g2=se('<!--$?--><template id="'),v2=se('"></template>'),_2=se("<!--$!-->"),x2=se("<!--/$-->"),y2=se("<template"),S2=se('"'),M2=se(' data-dgst="');se(' data-msg="');se(' data-stck="');var E2=se("></template>");function tv(t,e,n){if(me(t,g2),n===null)throw Error(Ie(395));return me(t,n),it(t,v2)}var T2=se('<div hidden id="'),w2=se('">'),A2=se("</div>"),C2=se('<svg aria-hidden="true" style="display:none" id="'),R2=se('">'),P2=se("</svg>"),L2=se('<math aria-hidden="true" style="display:none" id="'),b2=se('">'),D2=se("</math>"),U2=se('<table hidden id="'),I2=se('">'),N2=se("</table>"),F2=se('<table hidden><tbody id="'),k2=se('">'),O2=se("</tbody></table>"),z2=se('<table hidden><tr id="'),B2=se('">'),H2=se("</tr></table>"),V2=se('<table hidden><colgroup id="'),G2=se('">'),W2=se("</colgroup></table>");function $2(t,e,n,i){switch(n.insertionMode){case 0:case 1:return me(t,T2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,w2);case 2:return me(t,C2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,R2);case 3:return me(t,L2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,b2);case 4:return me(t,U2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,I2);case 5:return me(t,F2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,k2);case 6:return me(t,z2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,B2);case 7:return me(t,V2),me(t,e.segmentPrefix),me(t,Oe(i.toString(16))),it(t,G2);default:throw Error(Ie(397))}}function X2(t,e){switch(e.insertionMode){case 0:case 1:return it(t,A2);case 2:return it(t,P2);case 3:return it(t,D2);case 4:return it(t,N2);case 5:return it(t,O2);case 6:return it(t,H2);case 7:return it(t,W2);default:throw Error(Ie(397))}}var j2=se('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),q2=se('$RS("'),Y2=se('","'),K2=se('")<\/script>'),Z2=se('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Q2=se('$RC("'),J2=se('","'),eP=se('")<\/script>'),tP=se('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),nP=se('$RX("'),iP=se('"'),rP=se(")<\/script>"),lf=se(","),oP=/[<\u2028\u2029]/g;function uf(t){return JSON.stringify(t).replace(oP,function(e){switch(e){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Xs=Object.assign,sP=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),zx=Symbol.for("react.fragment"),Bx=Symbol.for("react.strict_mode"),Hx=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),$x=Symbol.for("react.suspense"),Xx=Symbol.for("react.suspense_list"),jx=Symbol.for("react.memo"),Oh=Symbol.for("react.lazy"),aP=Symbol.for("react.scope"),lP=Symbol.for("react.debug_trace_mode"),uP=Symbol.for("react.legacy_hidden"),cP=Symbol.for("react.default_value"),nv=Symbol.iterator;function xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zx:return"Fragment";case Ox:return"Portal";case Hx:return"Profiler";case Bx:return"StrictMode";case $x:return"Suspense";case Xx:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gx:return(t.displayName||"Context")+".Consumer";case Vx:return(t._context.displayName||"Context")+".Provider";case Wx:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jx:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case Oh:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}var qx={};function iv(t,e){if(t=t.contextTypes,!t)return qx;var n={},i;for(i in t)n[i]=e[i];return n}var Or=null;function Xu(t,e){if(t!==e){t.context._currentValue=t.parentValue,t=t.parent;var n=e.parent;if(t===null){if(n!==null)throw Error(Ie(401))}else{if(n===null)throw Error(Ie(401));Xu(t,n)}e.context._currentValue=e.value}}function Yx(t){t.context._currentValue=t.parentValue,t=t.parent,t!==null&&Yx(t)}function Kx(t){var e=t.parent;e!==null&&Kx(e),t.context._currentValue=t.value}function Zx(t,e){if(t.context._currentValue=t.parentValue,t=t.parent,t===null)throw Error(Ie(402));t.depth===e.depth?Xu(t,e):Zx(t,e)}function Qx(t,e){var n=e.parent;if(n===null)throw Error(Ie(402));t.depth===n.depth?Xu(t,n):Qx(t,n),e.context._currentValue=e.value}function vu(t){var e=Or;e!==t&&(e===null?Kx(t):t===null?Yx(e):e.depth===t.depth?Xu(e,t):e.depth>t.depth?Zx(e,t):Qx(e,t),Or=t)}var rv={isMounted:function(){return!1},enqueueSetState:function(t,e){t=t._reactInternals,t.queue!==null&&t.queue.push(e)},enqueueReplaceState:function(t,e){t=t._reactInternals,t.replace=!0,t.queue=[e]},enqueueForceUpdate:function(){}};function ov(t,e,n,i){var r=t.state!==void 0?t.state:null;t.updater=rv,t.props=n,t.state=r;var o={queue:[],replace:!1};t._reactInternals=o;var s=e.contextType;if(t.context=typeof s=="object"&&s!==null?s._currentValue:i,s=e.getDerivedStateFromProps,typeof s=="function"&&(s=s(n,r),r=s==null?r:Xs({},r,s),t.state=r),typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function"&&(typeof t.UNSAFE_componentWillMount=="function"||typeof t.componentWillMount=="function"))if(e=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),e!==t.state&&rv.enqueueReplaceState(t,t.state,null),o.queue!==null&&0<o.queue.length)if(e=o.queue,s=o.replace,o.queue=null,o.replace=!1,s&&e.length===1)t.state=e[0];else{for(o=s?e[0]:t.state,r=!0,s=s?1:0;s<e.length;s++){var a=e[s];a=typeof a=="function"?a.call(t,o,n,i):a,a!=null&&(r?(r=!1,o=Xs({},o,a)):Xs(o,a))}t.state=o}else o.queue=null}var fP={id:1,overflow:""};function yd(t,e,n){var i=t.id;t=t.overflow;var r=32-kl(i)-1;i&=~(1<<r),n+=1;var o=32-kl(e)+r;if(30<o){var s=r-r%5;return o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,{id:1<<32-kl(e)+r|n<<r|i,overflow:o+t}}return{id:1<<o|n<<r|i,overflow:t}}var kl=Math.clz32?Math.clz32:pP,dP=Math.log,hP=Math.LN2;function pP(t){return t>>>=0,t===0?32:31-(dP(t)/hP|0)|0}function mP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gP=typeof Object.is=="function"?Object.is:mP,Oi=null,zh=null,Ol=null,et=null,bs=!1,_u=!1,ga=0,ir=null,ju=0;function Ur(){if(Oi===null)throw Error(Ie(321));return Oi}function sv(){if(0<ju)throw Error(Ie(312));return{memoizedState:null,queue:null,next:null}}function Bh(){return et===null?Ol===null?(bs=!1,Ol=et=sv()):(bs=!0,et=Ol):et.next===null?(bs=!1,et=et.next=sv()):(bs=!0,et=et.next),et}function Hh(){zh=Oi=null,_u=!1,Ol=null,ju=0,et=ir=null}function Jx(t,e){return typeof e=="function"?e(t):e}function av(t,e,n){if(Oi=Ur(),et=Bh(),bs){var i=et.queue;if(e=i.dispatch,ir!==null&&(n=ir.get(i),n!==void 0)){ir.delete(i),i=et.memoizedState;do i=t(i,n.action),n=n.next;while(n!==null);return et.memoizedState=i,[i,e]}return[et.memoizedState,e]}return t=t===Jx?typeof e=="function"?e():e:n!==void 0?n(e):e,et.memoizedState=t,t=et.queue={last:null,dispatch:null},t=t.dispatch=vP.bind(null,Oi,t),[et.memoizedState,t]}function lv(t,e){if(Oi=Ur(),et=Bh(),e=e===void 0?null:e,et!==null){var n=et.memoizedState;if(n!==null&&e!==null){var i=n[1];e:if(i===null)i=!1;else{for(var r=0;r<i.length&&r<e.length;r++)if(!gP(e[r],i[r])){i=!1;break e}i=!0}if(i)return n[0]}}return t=t(),et.memoizedState=[t,e],t}function vP(t,e,n){if(25<=ju)throw Error(Ie(301));if(t===Oi)if(_u=!0,t={action:n,next:null},ir===null&&(ir=new Map),n=ir.get(e),n===void 0)ir.set(e,t);else{for(e=n;e.next!==null;)e=e.next;e.next=t}}function _P(){throw Error(Ie(394))}function ml(){}var uv={readContext:function(t){return t._currentValue},useContext:function(t){return Ur(),t._currentValue},useMemo:lv,useReducer:av,useRef:function(t){Oi=Ur(),et=Bh();var e=et.memoizedState;return e===null?(t={current:t},et.memoizedState=t):e},useState:function(t){return av(Jx,t)},useInsertionEffect:ml,useLayoutEffect:function(){},useCallback:function(t,e){return lv(function(){return t},e)},useImperativeHandle:ml,useEffect:ml,useDebugValue:ml,useDeferredValue:function(t){return Ur(),t},useTransition:function(){return Ur(),[!1,_P]},useId:function(){var t=zh.treeContext,e=t.overflow;t=t.id,t=(t&~(1<<32-kl(t)-1)).toString(32)+e;var n=zl;if(n===null)throw Error(Ie(404));return e=ga++,t=":"+n.idPrefix+"R"+t,0<e&&(t+="H"+e.toString(32)),t+":"},useMutableSource:function(t,e){return Ur(),e(t._source)},useSyncExternalStore:function(t,e,n){if(n===void 0)throw Error(Ie(407));return n()}},zl=null,cf=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function xP(t){return console.error(t),null}function Ds(){}function yP(t,e,n,i,r,o,s,a,l){var u=[],c=new Set;return e={destination:null,responseState:e,progressiveChunkSize:i===void 0?12800:i,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:r===void 0?xP:r,onAllReady:o===void 0?Ds:o,onShellReady:s===void 0?Ds:s,onShellError:a===void 0?Ds:a,onFatalError:l===void 0?Ds:l},n=xu(e,0,null,n,!1,!1),n.parentFlushed=!0,t=Vh(e,t,null,n,c,qx,null,fP),u.push(t),e}function Vh(t,e,n,i,r,o,s,a){t.allPendingTasks++,n===null?t.pendingRootTasks++:n.pendingTasks++;var l={node:e,ping:function(){var u=t.pingedTasks;u.push(l),u.length===1&&ny(t)},blockedBoundary:n,blockedSegment:i,abortSet:r,legacyContext:o,context:s,treeContext:a};return r.add(l),l}function xu(t,e,n,i,r,o){return{status:0,id:-1,index:e,parentFlushed:!1,chunks:[],children:[],formatContext:i,boundary:n,lastPushedText:r,textEmbedded:o}}function va(t,e){if(t=t.onError(e),t!=null&&typeof t!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof t+'" instead');return t}function yu(t,e){var n=t.onShellError;n(e),n=t.onFatalError,n(e),t.destination!==null?(t.status=2,Nx(t.destination,e)):(t.status=1,t.fatalError=e)}function cv(t,e,n,i,r){for(Oi={},zh=e,ga=0,t=n(i,r);_u;)_u=!1,ga=0,ju+=1,et=null,t=n(i,r);return Hh(),t}function fv(t,e,n,i){var r=n.render(),o=i.childContextTypes;if(o!=null){var s=e.legacyContext;if(typeof n.getChildContext!="function")i=s;else{n=n.getChildContext();for(var a in n)if(!(a in o))throw Error(Ie(108,xd(i)||"Unknown",a));i=Xs({},s,n)}e.legacyContext=i,wn(t,e,r),e.legacyContext=s}else wn(t,e,r)}function dv(t,e){if(t&&t.defaultProps){e=Xs({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i,r){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){r=iv(n,e.legacyContext);var o=n.contextType;o=new n(i,typeof o=="object"&&o!==null?o._currentValue:r),ov(o,n,i,r),fv(t,e,o,n)}else{o=iv(n,e.legacyContext),r=cv(t,e,n,i,o);var s=ga!==0;if(typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0)ov(r,n,i,o),fv(t,e,r,n);else if(s){i=e.treeContext,e.treeContext=yd(i,1,0);try{wn(t,e,r)}finally{e.treeContext=i}}else wn(t,e,r)}else if(typeof n=="string"){switch(r=e.blockedSegment,o=c2(r.chunks,n,i,t.responseState,r.formatContext),r.lastPushedText=!1,s=r.formatContext,r.formatContext=r2(s,n,i),Md(t,e,o),r.formatContext=s,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:r.chunks.push(f2,Oe(n),d2)}r.lastPushedText=!1}else{switch(n){case uP:case lP:case Bx:case Hx:case zx:wn(t,e,i.children);return;case Xx:wn(t,e,i.children);return;case aP:throw Error(Ie(343));case $x:e:{n=e.blockedBoundary,r=e.blockedSegment,o=i.fallback,i=i.children,s=new Set;var a={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:s,errorDigest:null},l=xu(t,r.chunks.length,a,r.formatContext,!1,!1);r.children.push(l),r.lastPushedText=!1;var u=xu(t,0,null,r.formatContext,!1,!1);u.parentFlushed=!0,e.blockedBoundary=a,e.blockedSegment=u;try{if(Md(t,e,i),u.lastPushedText&&u.textEmbedded&&u.chunks.push(kh),u.status=1,Su(a,u),a.pendingTasks===0)break e}catch(c){u.status=4,a.forceClientRender=!0,a.errorDigest=va(t,c)}finally{e.blockedBoundary=n,e.blockedSegment=r}e=Vh(t,o,n,l,s,e.legacyContext,e.context,e.treeContext),t.pingedTasks.push(e)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Wx:if(i=cv(t,e,n.render,i,r),ga!==0){n=e.treeContext,e.treeContext=yd(n,1,0);try{wn(t,e,i)}finally{e.treeContext=n}}else wn(t,e,i);return;case jx:n=n.type,i=dv(n,i),Sd(t,e,n,i,r);return;case Vx:if(r=i.children,n=n._context,i=i.value,o=n._currentValue,n._currentValue=i,s=Or,Or=i={parent:s,depth:s===null?0:s.depth+1,context:n,parentValue:o,value:i},e.context=i,wn(t,e,r),t=Or,t===null)throw Error(Ie(403));i=t.parentValue,t.context._currentValue=i===cP?t.context._defaultValue:i,t=Or=t.parent,e.context=t;return;case Gx:i=i.children,i=i(n._currentValue),wn(t,e,i);return;case Oh:r=n._init,n=r(n._payload),i=dv(n,i),Sd(t,e,n,i,void 0);return}throw Error(Ie(130,n==null?n:typeof n,""))}}function wn(t,e,n){if(e.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case sP:Sd(t,e,n.type,n.props,n.ref);return;case Ox:throw Error(Ie(257));case Oh:var i=n._init;n=i(n._payload),wn(t,e,n);return}if(_d(n)){hv(t,e,n);return}if(n===null||typeof n!="object"?i=null:(i=nv&&n[nv]||n["@@iterator"],i=typeof i=="function"?i:null),i&&(i=i.call(n))){if(n=i.next(),!n.done){var r=[];do r.push(n.value),n=i.next();while(!n.done);hv(t,e,r)}return}throw t=Object.prototype.toString.call(n),Error(Ie(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}typeof n=="string"?(i=e.blockedSegment,i.lastPushedText=Yg(e.blockedSegment.chunks,n,t.responseState,i.lastPushedText)):typeof n=="number"&&(i=e.blockedSegment,i.lastPushedText=Yg(e.blockedSegment.chunks,""+n,t.responseState,i.lastPushedText))}function hv(t,e,n){for(var i=n.length,r=0;r<i;r++){var o=e.treeContext;e.treeContext=yd(o,i,r);try{Md(t,e,n[r])}finally{e.treeContext=o}}}function Md(t,e,n){var i=e.blockedSegment.formatContext,r=e.legacyContext,o=e.context;try{return wn(t,e,n)}catch(l){if(Hh(),typeof l=="object"&&l!==null&&typeof l.then=="function"){n=l;var s=e.blockedSegment,a=xu(t,s.chunks.length,null,s.formatContext,s.lastPushedText,!0);s.children.push(a),s.lastPushedText=!1,t=Vh(t,e.node,e.blockedBoundary,a,e.abortSet,e.legacyContext,e.context,e.treeContext).ping,n.then(t,t),e.blockedSegment.formatContext=i,e.legacyContext=r,e.context=o,vu(o)}else throw e.blockedSegment.formatContext=i,e.legacyContext=r,e.context=o,vu(o),l}}function SP(t){var e=t.blockedBoundary;t=t.blockedSegment,t.status=3,ty(this,e,t)}function ey(t,e,n){var i=t.blockedBoundary;t.blockedSegment.status=3,i===null?(e.allPendingTasks--,e.status!==2&&(e.status=2,e.destination!==null&&e.destination.close())):(i.pendingTasks--,i.forceClientRender||(i.forceClientRender=!0,t=n===void 0?Error(Ie(432)):n,i.errorDigest=e.onError(t),i.parentFlushed&&e.clientRenderedBoundaries.push(i)),i.fallbackAbortableTasks.forEach(function(r){return ey(r,e,n)}),i.fallbackAbortableTasks.clear(),e.allPendingTasks--,e.allPendingTasks===0&&(i=e.onAllReady,i()))}function Su(t,e){if(e.chunks.length===0&&e.children.length===1&&e.children[0].boundary===null){var n=e.children[0];n.id=e.id,n.parentFlushed=!0,n.status===1&&Su(t,n)}else t.completedSegments.push(e)}function ty(t,e,n){if(e===null){if(n.parentFlushed){if(t.completedRootSegment!==null)throw Error(Ie(389));t.completedRootSegment=n}t.pendingRootTasks--,t.pendingRootTasks===0&&(t.onShellError=Ds,e=t.onShellReady,e())}else e.pendingTasks--,e.forceClientRender||(e.pendingTasks===0?(n.parentFlushed&&n.status===1&&Su(e,n),e.parentFlushed&&t.completedBoundaries.push(e),e.fallbackAbortableTasks.forEach(SP,t),e.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Su(e,n),e.completedSegments.length===1&&e.parentFlushed&&t.partialBoundaries.push(e)));t.allPendingTasks--,t.allPendingTasks===0&&(t=t.onAllReady,t())}function ny(t){if(t.status!==2){var e=Or,n=cf.current;cf.current=uv;var i=zl;zl=t.responseState;try{var r=t.pingedTasks,o;for(o=0;o<r.length;o++){var s=r[o],a=t,l=s.blockedSegment;if(l.status===0){vu(s.context);try{wn(a,s,s.node),l.lastPushedText&&l.textEmbedded&&l.chunks.push(kh),s.abortSet.delete(s),l.status=1,ty(a,s.blockedBoundary,l)}catch(_){if(Hh(),typeof _=="object"&&_!==null&&typeof _.then=="function"){var u=s.ping;_.then(u,u)}else{s.abortSet.delete(s),l.status=4;var c=s.blockedBoundary,d=_,h=va(a,d);if(c===null?yu(a,d):(c.pendingTasks--,c.forceClientRender||(c.forceClientRender=!0,c.errorDigest=h,c.parentFlushed&&a.clientRenderedBoundaries.push(c))),a.allPendingTasks--,a.allPendingTasks===0){var p=a.onAllReady;p()}}}finally{}}}r.splice(0,o),t.destination!==null&&Gh(t,t.destination)}catch(_){va(t,_),yu(t,_)}finally{zl=i,cf.current=n,n===uv&&vu(e)}}}function gl(t,e,n){switch(n.parentFlushed=!0,n.status){case 0:var i=n.id=t.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,t=t.responseState,me(e,h2),me(e,t.placeholderPrefix),t=Oe(i.toString(16)),me(e,t),it(e,p2);case 1:n.status=2;var r=!0;i=n.chunks;var o=0;n=n.children;for(var s=0;s<n.length;s++){for(r=n[s];o<r.index;o++)me(e,i[o]);r=qu(t,e,r)}for(;o<i.length-1;o++)me(e,i[o]);return o<i.length&&(r=it(e,i[o])),r;default:throw Error(Ie(390))}}function qu(t,e,n){var i=n.boundary;if(i===null)return gl(t,e,n);if(i.parentFlushed=!0,i.forceClientRender)i=i.errorDigest,it(e,_2),me(e,y2),i&&(me(e,M2),me(e,Oe(Dt(i))),me(e,S2)),it(e,E2),gl(t,e,n);else if(0<i.pendingTasks){i.rootSegmentID=t.nextSegmentId++,0<i.completedSegments.length&&t.partialBoundaries.push(i);var r=t.responseState,o=r.nextSuspenseID++;r=se(r.boundaryPrefix+o.toString(16)),i=i.id=r,tv(e,t.responseState,i),gl(t,e,n)}else if(i.byteSize>t.progressiveChunkSize)i.rootSegmentID=t.nextSegmentId++,t.completedBoundaries.push(i),tv(e,t.responseState,i.id),gl(t,e,n);else{if(it(e,m2),n=i.completedSegments,n.length!==1)throw Error(Ie(391));qu(t,e,n[0])}return it(e,x2)}function pv(t,e,n){return $2(e,t.responseState,n.formatContext,n.id),qu(t,e,n),X2(e,n.formatContext)}function mv(t,e,n){for(var i=n.completedSegments,r=0;r<i.length;r++)iy(t,e,n,i[r]);if(i.length=0,t=t.responseState,i=n.id,n=n.rootSegmentID,me(e,t.startInlineScript),t.sentCompleteBoundaryFunction?me(e,Q2):(t.sentCompleteBoundaryFunction=!0,me(e,Z2)),i===null)throw Error(Ie(395));return n=Oe(n.toString(16)),me(e,i),me(e,J2),me(e,t.segmentPrefix),me(e,n),it(e,eP)}function iy(t,e,n,i){if(i.status===2)return!0;var r=i.id;if(r===-1){if((i.id=n.rootSegmentID)===-1)throw Error(Ie(392));return pv(t,e,i)}return pv(t,e,i),t=t.responseState,me(e,t.startInlineScript),t.sentCompleteSegmentFunction?me(e,q2):(t.sentCompleteSegmentFunction=!0,me(e,j2)),me(e,t.segmentPrefix),r=Oe(r.toString(16)),me(e,r),me(e,Y2),me(e,t.placeholderPrefix),me(e,r),it(e,K2)}function Gh(t,e){En=new Uint8Array(512),Tn=0;try{var n=t.completedRootSegment;if(n!==null&&t.pendingRootTasks===0){qu(t,e,n),t.completedRootSegment=null;var i=t.responseState.bootstrapChunks;for(n=0;n<i.length-1;n++)me(e,i[n]);n<i.length&&it(e,i[n])}var r=t.clientRenderedBoundaries,o;for(o=0;o<r.length;o++){var s=r[o];i=e;var a=t.responseState,l=s.id,u=s.errorDigest,c=s.errorMessage,d=s.errorComponentStack;if(me(i,a.startInlineScript),a.sentClientRenderFunction?me(i,nP):(a.sentClientRenderFunction=!0,me(i,tP)),l===null)throw Error(Ie(395));me(i,l),me(i,iP),(u||c||d)&&(me(i,lf),me(i,Oe(uf(u||"")))),(c||d)&&(me(i,lf),me(i,Oe(uf(c||"")))),d&&(me(i,lf),me(i,Oe(uf(d)))),it(i,rP)}r.splice(0,o);var h=t.completedBoundaries;for(o=0;o<h.length;o++)mv(t,e,h[o]);h.splice(0,o),$g(e),En=new Uint8Array(512),Tn=0;var p=t.partialBoundaries;for(o=0;o<p.length;o++){var _=p[o];e:{r=t,s=e;var x=_.completedSegments;for(a=0;a<x.length;a++)if(!iy(r,s,_,x[a])){a++,x.splice(0,a);var m=!1;break e}x.splice(0,a),m=!0}if(!m){t.destination=null,o++,p.splice(0,o);return}}p.splice(0,o);var f=t.completedBoundaries;for(o=0;o<f.length;o++)mv(t,e,f[o]);f.splice(0,o)}finally{$g(e),t.allPendingTasks===0&&t.pingedTasks.length===0&&t.clientRenderedBoundaries.length===0&&t.completedBoundaries.length===0&&e.close()}}function gv(t,e){try{var n=t.abortableTasks;n.forEach(function(i){return ey(i,t,e)}),n.clear(),t.destination!==null&&Gh(t,t.destination)}catch(i){va(t,i),yu(t,i)}}Ih.renderToReadableStream=function(t,e){return new Promise(function(n,i){var r,o,s=new Promise(function(c,d){o=c,r=d}),a=yP(t,n2(e?e.identifierPrefix:void 0,e?e.nonce:void 0,e?e.bootstrapScriptContent:void 0,e?e.bootstrapScripts:void 0,e?e.bootstrapModules:void 0),i2(e?e.namespaceURI:void 0),e?e.progressiveChunkSize:void 0,e?e.onError:void 0,o,function(){var c=new ReadableStream({type:"bytes",pull:function(d){if(a.status===1)a.status=2,Nx(d,a.fatalError);else if(a.status!==2&&a.destination===null){a.destination=d;try{Gh(a,d)}catch(h){va(a,h),yu(a,h)}}},cancel:function(){gv(a)}},{highWaterMark:0});c.allReady=s,n(c)},function(c){s.catch(function(){}),i(c)},r);if(e&&e.signal){var l=e.signal,u=function(){gv(a,l.reason),l.removeEventListener("abort",u)};l.addEventListener("abort",u)}ny(a)})};Ih.version="18.2.0";var as,ry;as=ss,ry=Ih;to.version=as.version;to.renderToString=as.renderToString;to.renderToStaticMarkup=as.renderToStaticMarkup;to.renderToNodeStream=as.renderToNodeStream;to.renderToStaticNodeStream=as.renderToStaticNodeStream;to.renderToReadableStream=ry.renderToReadableStream;function MP(){const t=document.querySelector("main"),e=document.getElementById("loading-screen");return new ax(()=>{if(e==null||e.classList.add("fade-out"),t&&(e!=null&&e.classList.contains("fade-out"))){const i=to.renderToString(Fe.jsx(fR,{}));t.innerHTML=i,t.innerHTML.toString().length>100&&(t.style.animation="fade-in 1.2s ease 0s 1")}})}function EP(){const t=oy(),e={torus:new Th(10,2.5,16,100),avatar:new Bu(3,3),moon:new Vu(3,48,48)},n={torus:new dd({map:t.minecraft}),avatar:new Sh({map:t.avatar,side:di}),moon:new dd({map:t.moon.map,normalMap:t.moon.normal})},i={torus:new On(e.torus,n.torus),avatar:new On(e.avatar,n.avatar),moon:new On(e.moon,n.moon)};return i.moon.position.set(-10,0,30),i}function TP(t,e,n){const i=new sx({canvas:t});return i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.render(e,n),i}const wP="/assets/space-ca17ac07.jpg",AP="/assets/av-141f96eb.jpeg",CP="/assets/moon-b246064f.jpg",RP="/assets/normal-8e277ece.jpg",PP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURYyUnZKYoo6Vn36GkImRnIOLlgDe/5WbpJyhq4WNmH/4/3+HkYaOmXyDjqGnr52irKX8/+j+/6D8/4qSnIGJlHl/ipGXoZacpZmeqJSapIePmoCIk52jraestHqBjHuCjYKKlZOZo4uTnY+WoHd9iOf+/4SMl6KosO/8/5ugqn2Fj5+lrjRWI20AAAC/SURBVBjTFY9XbgNBDEM5s6qzvbn3xE67//0i/wgCSD6QAKOGAeq61xTP4mb9j1ne1gBcESoze+8dJlRYQBUJiTBUSrEuXJAyPI+qw2hBc2x0/piVbie019RA3/Q2UO5Q1eyGztkZUqkMEzcSiO0mJEy5OpRRuEI60P6L1HHH7Xe9NLAdtaWgTtb92R1nLDRGQOgcaeZdHMfwWuuGVxm/j5QQdaN9jJIrNblNMM2xznp8AkTv2XaJvrNm2Mke0H/3pAnMGVunewAAAABJRU5ErkJggg==";function oy(t){const e=new Ss(t).load(wP),n=new Ss(t).load(AP),i={map:new Ss(t).load(CP),normal:new Ss(t).load(RP)},r=new Ss(t).load(PP);return r.magFilter=Gt,r.generateMipmaps=!1,{background:e,avatar:n,moon:i,minecraft:r}}function LP(t,e,n,i){function r(){requestAnimationFrame(r),i.torus.rotation.x+=.001,i.torus.rotation.y+=.005,i.torus.rotation.z+=.001,t&&e&&n&&t.render(e,n)}r()}function bP(){const t=new Vu(.25,24,24),e=new dd({color:16777215}),n=new On(t,e),[i,r,o]=Array(3).fill(1).map(()=>YE.randFloatSpread(100));return n.position.set(i,r,o),n}function DP(t,e){const n=document.body.getBoundingClientRect().top;e.moon.rotation.x+=.025,e.moon.rotation.y+=.0375,e.moon.rotation.z+=.025,e.avatar.rotation.y+=.01,e.avatar.rotation.z+=.01,t.position.z=n*-.01,t.position.x=n*-.002,t.rotation.y=n*-2e-4}function UP(){const[t]=$r.useState(200),e=document.getElementById("root")??document.body,n=MP(),i=new rR,r=dR();i.add(r);const o=hR();i.add(o.ambientLight,o.pointLight);const s=oy(n);i.background=s.background;const a=EP();i.add(a.torus,a.avatar,a.moon),Array(t).fill(1).forEach(()=>{const c=bP();i.add(c)});const l=$r.useCallback(()=>{DP(r,a)},[r,a]);document.body.onscroll=l;const u=TP(e,i,r);return LP(u,i,r,a),null}ff.createRoot(document.getElementById("root")).render(Fe.jsx(Cy.StrictMode,{children:Fe.jsx(UP,{})}));

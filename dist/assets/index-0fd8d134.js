(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},_t=[],Ee=()=>{},lo=()=>!1,fo=/^on[^a-z]/,Yn=e=>fo.test(e),qr=e=>e.startsWith("onUpdate:"),ie=Object.assign,Vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},co=Object.prototype.hasOwnProperty,$=(e,t)=>co.call(e,t),M=Array.isArray,kt=e=>Kn(e)==="[object Map]",Fi=e=>Kn(e)==="[object Set]",j=e=>typeof e=="function",G=e=>typeof e=="string",Wn=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Li=e=>(V(e)||j(e))&&j(e.then)&&j(e.catch),ji=Object.prototype.toString,Kn=e=>ji.call(e),uo=e=>Kn(e).slice(8,-1),zi=e=>Kn(e)==="[object Object]",Jr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mo=/-(\w)/g,Re=Xn(e=>e.replace(mo,(t,n)=>n?n.toUpperCase():"")),po=/\B([A-Z])/g,Nt=Xn(e=>e.replace(po,"-$1").toLowerCase()),qn=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=Xn(e=>e?`on${qn(e)}`:""),mt=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ho=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const wr=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=G(r)?yo(r):Zr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(G(e)||V(e))return e}const go=/;(?![^(]*\))/g,vo=/:([^]+)/,bo=/\/\*[^]*?\*\//g;function yo(e){const t={};return e.replace(bo,"").split(go).forEach(n=>{if(n){const r=n.split(vo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pt(e){let t="";if(G(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Pt(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wo=Xr(xo);function Di(e){return!!e||e===""}const $i=e=>G(e)?e:e==null?"":M(e)||V(e)&&(e.toString===ji||!j(e.toString))?JSON.stringify(e,Hi,2):String(e),Hi=(e,t)=>t&&t.__v_isRef?Hi(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!M(t)&&!zi(t)?String(t):t;let xe;class _o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ko(e,t=xe){t&&t.active&&t.effects.push(e)}function Ao(){return xe}const Qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&Ze)>0,Bi=e=>(e.n&Ze)>0,Oo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Eo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Bi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},_r=new WeakMap;let $t=0,Ze=1;const kr=30;let _e;const ut=Symbol(""),Ar=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ko(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,qe=!0,Ze=1<<++$t,$t<=kr?Oo(this):Na(this),this.fn()}finally{$t<=kr&&Eo(this),Ze=1<<--$t,_e=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Yi=[];function Mt(){Yi.push(qe),qe=!1}function Rt(){const e=Yi.pop();qe=e===void 0?!0:e}function de(e,t,n){if(qe&&_e){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Qr()),Wi(a)}}function Wi(e,t){let n=!1;$t<=kr?Bi(e)||(e.n|=Ze,n=!Ui(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function De(e,t,n,r,a,i){const s=_r.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&M(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||!Wn(d)&&d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":M(e)?Jr(n)&&o.push(s.get("length")):(o.push(s.get(ut)),kt(e)&&o.push(s.get(Ar)));break;case"delete":M(e)||(o.push(s.get(ut)),kt(e)&&o.push(s.get(Ar)));break;case"set":kt(e)&&o.push(s.get(ut));break}if(o.length===1)o[0]&&Or(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Or(Qr(l))}}function Or(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Po=Xr("__proto__,__v_isRef,__isVue"),Ki=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wn)),Ra=Co();function Co(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,s=this.length;i<s;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=H(this)[t].apply(this,n);return Rt(),r}}),e}function So(e){const t=H(this);return de(t,"has",e),t.hasOwnProperty(e)}class Xi{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Uo:Zi:i?Ji:Vi).get(t))return t;const s=M(t);if(!a){if(s&&$(Ra,n))return Reflect.get(Ra,n,r);if(n==="hasOwnProperty")return So}const o=Reflect.get(t,n,r);return(Wn(n)?Ki.has(n):Po(n))||(a||de(t,"get",n),i)?o:oe(o)?s&&Jr(n)?o:o.value:V(o)?a?Qi(o):Jn(o):o}}class qi extends Xi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Ct(i)&&oe(i)&&!oe(r))return!1;if(!this._shallow&&(!Ln(r)&&!Ct(r)&&(i=H(i),r=H(r)),!M(t)&&oe(i)&&!oe(r)))return i.value=r,!0;const s=M(t)&&Jr(n)?Number(n)<t.length:$(t,n),o=Reflect.set(t,n,r,a);return t===H(a)&&(s?mt(r,i)&&De(t,"set",n,r):De(t,"add",n,r)),o}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&De(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Wn(n)||!Ki.has(n))&&de(t,"has",n),r}ownKeys(t){return de(t,"iterate",M(t)?"length":ut),Reflect.ownKeys(t)}}class Io extends Xi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const To=new qi,No=new Io,Mo=new qi(!0),ea=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(mt(t,i)&&de(a,"get",t),de(a,"get",i));const{has:s}=Vn(a),o=r?ea:n?ra:qt;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(mt(e,a)&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",ut),Reflect.get(e,"size",e)}function Fa(e){e=H(e);const t=H(this);return Vn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function La(e,t){t=H(t);const n=H(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?mt(t,s)&&De(n,"set",e,t):De(n,"add",e,t),this}function ja(e){const t=H(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function za(){const e=H(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=H(s),l=t?ea:e?ra:qt;return!e&&de(o,"iterate",ut),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),s=kt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?ea:t?ra:qt;return!t&&de(i,"iterate",l?Ar:ut),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:o?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ro(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:Fa,set:La,delete:ja,clear:za,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:Fa,set:La,delete:ja,clear:za,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[Fo,Lo,jo,zo]=Ro();function ta(e,t){const n=t?e?zo:jo:e?Lo:Fo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Do={get:ta(!1,!1)},$o={get:ta(!1,!0)},Ho={get:ta(!0,!1)},Vi=new WeakMap,Ji=new WeakMap,Zi=new WeakMap,Uo=new WeakMap;function Bo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yo(e){return e.__v_skip||!Object.isExtensible(e)?0:Bo(uo(e))}function Jn(e){return Ct(e)?e:na(e,!1,To,Do,Vi)}function Wo(e){return na(e,!1,Mo,$o,Ji)}function Qi(e){return na(e,!0,No,Ho,Zi)}function na(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Yo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function At(e){return Ct(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function Gi(e){return At(e)||Ct(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function es(e){return Fn(e,"__v_skip",!0),e}const qt=e=>V(e)?Jn(e):e,ra=e=>V(e)?Qi(e):e;function ts(e){qe&&_e&&(e=H(e),Wi(e.dep||(e.dep=Qr())))}function ns(e,t){e=H(e);const n=e.dep;n&&Or(n)}function oe(e){return!!(e&&e.__v_isRef===!0)}function Er(e){return Ko(e,!1)}function Ko(e,t){return oe(e)?e:new Xo(e,t)}class Xo{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:qt(t)}get value(){return ts(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Ct(t);t=n?t:H(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:qt(t),ns(this))}}function st(e){return oe(e)?e.value:e}const qo={get:(e,t,n)=>st(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function rs(e){return At(e)?e:new Proxy(e,qo)}class Vo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jo(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new Vo(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Zn(i,t,n)}return a}function Pe(e,t,n,r){if(j(e)){const i=Ve(e,t,n,r);return i&&Li(i)&&i.catch(s=>{Zn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Zn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,s,o]);return}}Zo(e,n,a,r)}function Zo(e,t,n,r=!0){console.error(e)}let Vt=!1,Pr=!1;const se=[];let Ne=0;const Ot=[];let je=null,ot=0;const as=Promise.resolve();let aa=null;function Qo(e){const t=aa||as;return e?t.then(this?e.bind(this):e):t}function Go(e){let t=Ne+1,n=se.length;for(;t<n;){const r=t+n>>>1,a=se[r],i=Jt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function ia(e){(!se.length||!se.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?se.push(e):se.splice(Go(e.id),0,e),is())}function is(){!Vt&&!Pr&&(Pr=!0,aa=as.then(os))}function el(e){const t=se.indexOf(e);t>Ne&&se.splice(t,1)}function tl(e){M(e)?Ot.push(...e):(!je||!je.includes(e,e.allowRecurse?ot+1:ot))&&Ot.push(e),is()}function Da(e,t=Vt?Ne+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function ss(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Jt(n)-Jt(r)),ot=0;ot<je.length;ot++)je[ot]();je=null,ot=0}}const Jt=e=>e.id==null?1/0:e.id,nl=(e,t)=>{const n=Jt(e)-Jt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function os(e){Pr=!1,Vt=!0,se.sort(nl);const t=Ee;try{for(Ne=0;Ne<se.length;Ne++){const n=se[Ne];n&&n.active!==!1&&Ve(n,null,14)}}finally{Ne=0,se.length=0,ss(),Vt=!1,aa=null,(se.length||Ot.length)&&os()}}function rl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:h}=r[d]||q;h&&(a=n.map(w=>G(w)?w.trim():w)),m&&(a=n.map(ho))}let o,l=r[o=fr(t)]||r[o=fr(Re(t))];!l&&i&&(l=r[o=fr(Nt(t))]),l&&Pe(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Pe(c,e,6,a)}}function ls(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!j(e)){const l=c=>{const d=ls(c,t,!0);d&&(o=!0,ie(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(V(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>s[l]=null):ie(s,i),V(e)&&r.set(e,s),s)}function Qn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Nt(t))||$(e,t))}let ke=null,fs=null;function jn(e){const t=ke;return ke=e,fs=e&&e.type.__scopeId||null,t}function al(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=jn(t);let s;try{s=e(...a)}finally{jn(i),r._d&&Ja(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:w,ctx:F,inheritAttrs:I}=e;let D,k;const A=jn(e);try{if(n.shapeFlag&4){const S=a||r,U=S;D=Te(d.call(U,S,m,i,w,h,F)),k=l}else{const S=t;D=Te(S.length>1?S(i,{attrs:l,slots:o,emit:c}):S(i,null)),k=t.props?l:il(l)}}catch(S){Yt.length=0,Zn(S,e,1),D=re(Zt)}let R=D;if(k&&I!==!1){const S=Object.keys(k),{shapeFlag:U}=R;S.length&&U&7&&(s&&S.some(qr)&&(k=sl(k,s)),R=St(R,k))}return n.dirs&&(R=St(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,jn(A),D}const il=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ol(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(s[h]!==r[h]&&!Qn(c,h))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?$a(r,s,c):!0:!!s;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Qn(n,i))return!0}return!1}function ll({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cs="components";function fl(e,t){return ul(cs,e,!0,t)||e}const cl=Symbol.for("v-ndc");function ul(e,t,n=!0,r=!1){const a=ke||ae;if(a){const i=a.type;if(e===cs){const o=rf(i,!1);if(o&&(o===t||o===Re(t)||o===qn(Re(t))))return i}const s=Ha(a[e]||i[e],t)||Ha(a.appContext[e],t);return!s&&r?i:s}}function Ha(e,t){return e&&(e[t]||e[Re(t)]||e[qn(Re(t))])}const dl=e=>e.__isSuspense;function ml(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):tl(e)}const bn={};function Sn(e,t,n){return us(e,t,n)}function us(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){var o;const l=Ao()===((o=ae)==null?void 0:o.scope)?ae:null;let c,d=!1,m=!1;if(oe(e)?(c=()=>e.value,d=Ln(e)):At(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(S=>At(S)||Ln(S)),c=()=>e.map(S=>{if(oe(S))return S.value;if(At(S))return yt(S);if(j(S))return Ve(S,l,2)})):j(e)?t?c=()=>Ve(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Pe(e,l,3,[w])}:c=Ee,t&&r){const S=c;c=()=>yt(S())}let h,w=S=>{h=A.onStop=()=>{Ve(S,l,4),h=A.onStop=void 0}},F;if(Gt)if(w=Ee,t?n&&Pe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const S=lf();F=S.__watcherHandles||(S.__watcherHandles=[])}else return Ee;let I=m?new Array(e.length).fill(bn):bn;const D=()=>{if(A.active)if(t){const S=A.run();(r||d||(m?S.some((U,te)=>mt(U,I[te])):mt(S,I)))&&(h&&h(),Pe(t,l,3,[S,I===bn?void 0:m&&I[0]===bn?[]:I,w]),I=S)}else A.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>ue(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>ia(D));const A=new Gr(c,k);t?n?D():I=A.run():a==="post"?ue(A.run.bind(A),l&&l.suspense):A.run();const R=()=>{A.stop(),l&&l.scope&&Vr(l.scope.effects,A)};return F&&F.push(R),R}function pl(e,t,n){const r=this.proxy,a=G(e)?e.includes(".")?ds(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const s=ae;It(this);const o=us(a,i.bind(r),n);return s?It(s):dt(),o}function ds(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))yt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Fi(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(zi(e))for(const n in e)yt(e[n],t);return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Mt(),Pe(l,n,8,[e.el,o,e,t]),Rt())}}/*! #__NO_SIDE_EFFECTS__ */function hl(e,t){return j(e)?(()=>ie({name:e.name},t,{setup:e}))():e}const In=e=>!!e.type.__asyncLoader,ms=e=>e.type.__isKeepAlive;function gl(e,t){ps(e,"a",t)}function vl(e,t){ps(e,"da",t)}function ps(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ms(a.parent.vnode)&&bl(r,t,n,a),a=a.parent}}function bl(e,t,n,r){const a=Gn(t,e,r,!0);gs(()=>{Vr(r[t],a)},n)}function Gn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Mt(),It(n);const o=Pe(t,n,e,s);return dt(),Rt(),o});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ae)=>(!Gt||e==="sp")&&Gn(e,(...r)=>t(...r),n),yl=Be("bm"),sa=Be("m"),xl=Be("bu"),hs=Be("u"),wl=Be("bum"),gs=Be("um"),_l=Be("sp"),kl=Be("rtg"),Al=Be("rtc");function Ol(e,t=ae){Gn("ec",e,t)}function vs(e,t,n,r){let a;const i=n&&n[r];if(M(e)||G(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Cr=e=>e?Cs(e)?ua(e)||e.proxy:Cr(e.parent):null,Bt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>pl.bind(e)}),dr=(e,t)=>e!==q&&!e.__isScriptSetup&&$(e,t),El={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(dr(r,t))return s[t]=1,r[t];if(a!==q&&$(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return s[t]=3,i[t];if(n!==q&&$(n,t))return s[t]=4,n[t];Sr&&(s[t]=0)}}const d=Bt[t];let m,h;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&$(n,t))return s[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return dr(a,t)?(a[t]=n,!0):r!==q&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&$(e,s)||dr(t,s)||(o=i[0])&&$(o,s)||$(r,s)||$(Bt,s)||$(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ua(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Sr=!0;function Pl(e){const t=oa(e),n=e.proxy,r=e.ctx;Sr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:w,updated:F,activated:I,deactivated:D,beforeDestroy:k,beforeUnmount:A,destroyed:R,unmounted:S,render:U,renderTracked:te,renderTriggered:ne,errorCaptured:ve,serverPrefetch:be,expose:Fe,inheritAttrs:Lt,components:fn,directives:cn,filters:sr}=t;if(c&&Cl(c,r,null),s)for(const J in s){const Y=s[J];j(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Jn(J))}if(Sr=!0,i)for(const J in i){const Y=i[J],tt=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Ee,un=!j(Y)&&j(Y.set)?Y.set.bind(n):Ee,nt=it({get:tt,set:un});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ce=>nt.value=Ce})}if(o)for(const J in o)bs(o[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Rl(Y,J[Y])})}d&&Ba(d,e,"c");function le(J,Y){M(Y)?Y.forEach(tt=>J(tt.bind(n))):Y&&J(Y.bind(n))}if(le(yl,m),le(sa,h),le(xl,w),le(hs,F),le(gl,I),le(vl,D),le(Ol,ve),le(Al,te),le(kl,ne),le(wl,A),le(gs,S),le(_l,be),M(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:tt=>n[Y]=tt})})}else e.exposed||(e.exposed={});U&&e.render===Ee&&(e.render=U),Lt!=null&&(e.inheritAttrs=Lt),fn&&(e.components=fn),cn&&(e.directives=cn)}function Cl(e,t,n=Ee){M(e)&&(e=Ir(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),oe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ba(e,t,n){Pe(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bs(e,t,n,r){const a=r.includes(".")?ds(n,r):()=>n[r];if(G(e)){const i=t[e];j(i)&&Sn(a,i)}else if(j(e))Sn(a,e.bind(n));else if(V(e))if(M(e))e.forEach(i=>bs(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Sn(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,s,!0)),zn(l,t,s)),V(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(s=>zn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Sl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Sl={data:Ya,props:Wa,emits:Wa,methods:Ht,computed:Ht,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ht,directives:Ht,watch:Tl,provide:Ya,inject:Il};function Ya(e,t){return t?e?function(){return ie(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Il(e,t){return Ht(Ir(e),Ir(t))}function Ir(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?ie(Object.create(null),e,t):t}function Wa(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ie(Object.create(null),Ua(e),Ua(t??{})):t}function Tl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function ys(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Ml(e,t){return function(r,a=null){j(r)||(r=ie({},r)),a!=null&&!V(a)&&(a=null);const i=ys(),s=new WeakSet;let o=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&j(c.install)?(s.add(c),c.install(l,...d)):j(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const h=re(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),o=!0,l._container=c,c.__vue_app__=l,ua(h.component)||h.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Dn=l;try{return c()}finally{Dn=null}}};return l}}let Dn=null;function Rl(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=ae||ke;if(r||Dn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Fl(e,t,n,r=!1){const a={},i={};Fn(i,tr,1),e.propsDefaults=Object.create(null),xs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Wo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ll(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=H(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Qn(e.emitsOptions,h))continue;const w=t[h];if(l)if($(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const F=Re(h);a[F]=Tr(l,o,F,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{xs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!$(t,m)&&((d=Nt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Tr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function xs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&$(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Qn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=H(n),c=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Tr(a,l,m,c[m],e,!$(c,m))}}return s}function Tr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),dt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function ws(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[h,w]=ws(m,t,!0);ie(s,h),w&&o.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,_t),_t;if(M(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Ka(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Re(d);if(Ka(m)){const h=i[d],w=s[m]=M(h)||j(h)?{type:h}:ie({},h);if(w){const F=Va(Boolean,w.type),I=Va(String,w.type);w[0]=F>-1,w[1]=I<0||F<I,(F>-1||$(w,"default"))&&o.push(m)}}}const c=[s,o];return V(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function qa(e,t){return Xa(e)===Xa(t)}function Va(e,t){return M(t)?t.findIndex(n=>qa(n,e)):j(t)&&qa(t,e)?0:-1}const _s=e=>e[0]==="_"||e==="$stable",la=e=>M(e)?e.map(Te):[Te(e)],jl=(e,t,n)=>{if(t._n)return t;const r=al((...a)=>la(t(...a)),n);return r._c=!1,r},ks=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_s(a))continue;const i=e[a];if(j(i))t[a]=jl(a,i,r);else if(i!=null){const s=la(i);t[a]=()=>s}}},As=(e,t)=>{const n=la(t);e.slots.default=()=>n},zl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Fn(t,"_",n)):ks(t,e.slots={})}else e.slots={},t&&As(e,t);Fn(e.slots,tr,1)},Dl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ie(a,t),!n&&o===1&&delete a._):(i=!t.$stable,ks(t,a)),s=t}else t&&(As(e,t),s={default:1});if(i)for(const o in a)!_s(o)&&s[o]==null&&delete a[o]};function Nr(e,t,n,r,a=!1){if(M(e)){e.forEach((h,w)=>Nr(h,t&&(M(t)?t[w]:t),n,r,a));return}if(In(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(G(c)?(d[c]=null,$(m,c)&&(m[c]=null)):oe(c)&&(c.value=null)),j(l))Ve(l,o,12,[s,d]);else{const h=G(l),w=oe(l);if(h||w){const F=()=>{if(e.f){const I=h?$(m,l)?m[l]:d[l]:l.value;a?M(I)&&Vr(I,i):M(I)?I.includes(i)||I.push(i):h?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=s,$(m,l)&&(m[l]=s)):w&&(l.value=s,e.k&&(d[e.k]=s))};s?(F.id=-1,ue(F,n)):F()}}}const ue=ml;function $l(e){return Hl(e)}function Hl(e,t){const n=wr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:w=Ee,insertStaticContent:F}=e,I=(f,u,p,g=null,v=null,x=null,O=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=dn(f),Ce(f,v,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case er:D(f,u,p,g);break;case Zt:k(f,u,p,g);break;case mr:f==null&&A(u,p,g,O);break;case we:fn(f,u,p,g,v,x,O,y,_);break;default:P&1?U(f,u,p,g,v,x,O,y,_):P&6?cn(f,u,p,g,v,x,O,y,_):(P&64||P&128)&&b.process(f,u,p,g,v,x,O,y,_,gt)}T!=null&&v&&Nr(T,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=o(u.children),p,g);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},A=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},R=({el:f,anchor:u},p,g)=>{let v;for(;f&&f!==u;)v=h(f),r(f,p,g),f=v;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},U=(f,u,p,g,v,x,O,y,_)=>{O=O||u.type==="svg",f==null?te(u,p,g,v,x,O,y,_):be(f,u,v,x,O,y,_)},te=(f,u,p,g,v,x,O,y)=>{let _,b;const{type:T,props:P,shapeFlag:N,transition:L,dirs:z}=f;if(_=f.el=s(f.type,x,P&&P.is,P),N&8?d(_,f.children):N&16&&ve(f.children,_,null,g,v,x&&T!=="foreignObject",O,y),z&&rt(f,null,g,"created"),ne(_,f,f.scopeId,O,g),P){for(const B in P)B!=="value"&&!Cn(B)&&i(_,B,null,P[B],x,f.children,g,v,Le);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ie(b,g,f)}z&&rt(f,null,g,"beforeMount");const W=Ul(v,L);W&&L.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||z)&&ue(()=>{b&&Ie(b,g,f),W&&L.enter(_),z&&rt(f,null,g,"mounted")},v)},ne=(f,u,p,g,v)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(v){let x=v.subTree;if(u===x){const O=v.vnode;ne(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},ve=(f,u,p,g,v,x,O,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?Xe(f[b]):Te(f[b]);I(null,T,u,p,g,v,x,O,y)}},be=(f,u,p,g,v,x,O)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=f.patchFlag&16;const P=f.props||q,N=u.props||q;let L;p&&at(p,!1),(L=N.onVnodeBeforeUpdate)&&Ie(L,p,u,f),T&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const z=v&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,g,z,x):O||Y(f,u,y,null,p,g,z,x,!1),_>0){if(_&16)Lt(y,u,P,N,p,g,v);else if(_&2&&P.class!==N.class&&i(y,"class",null,N.class,v),_&4&&i(y,"style",P.style,N.style,v),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Q=W[B],ye=P[Q],vt=N[Q];(vt!==ye||Q==="value")&&i(y,Q,ye,vt,v,f.children,p,g,Le)}}_&1&&f.children!==u.children&&d(y,u.children)}else!O&&b==null&&Lt(y,u,P,N,p,g,v);((L=N.onVnodeUpdated)||T)&&ue(()=>{L&&Ie(L,p,u,f),T&&rt(u,f,p,"updated")},g)},Fe=(f,u,p,g,v,x,O)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],T=_.el&&(_.type===we||!zt(_,b)||_.shapeFlag&70)?m(_.el):p;I(_,b,T,null,g,v,x,O,!0)}},Lt=(f,u,p,g,v,x,O)=>{if(p!==g){if(p!==q)for(const y in p)!Cn(y)&&!(y in g)&&i(f,y,p[y],null,O,u.children,v,x,Le);for(const y in g){if(Cn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,O,u.children,v,x,Le)}"value"in g&&i(f,"value",p.value,g.value)}},fn=(f,u,p,g,v,x,O,y,_)=>{const b=u.el=f?f.el:o(""),T=u.anchor=f?f.anchor:o("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:L}=u;L&&(y=y?y.concat(L):L),f==null?(r(b,p,g),r(T,p,g),ve(u.children,p,T,v,x,O,y,_)):P>0&&P&64&&N&&f.dynamicChildren?(Fe(f.dynamicChildren,N,p,v,x,O,y),(u.key!=null||v&&u===v.subTree)&&Os(f,u,!0)):Y(f,u,p,T,v,x,O,y,_)},cn=(f,u,p,g,v,x,O,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?v.ctx.activate(u,p,g,O,_):sr(u,p,g,v,x,O,_):Oa(f,u,_)},sr=(f,u,p,g,v,x,O)=>{const y=f.component=Ql(f,g,v);if(ms(f)&&(y.ctx.renderer=gt),Gl(y),y.asyncDep){if(v&&v.registerDep(y,le),!f.el){const _=y.subTree=re(Zt);k(null,_,u,p)}return}le(y,f,u,p,v,x,O)},Oa=(f,u,p)=>{const g=u.component=f.component;if(ol(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,el(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,v,x,O)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:N,parent:L,vnode:z}=f,W=T,B;at(f,!1),T?(T.el=z.el,J(f,T,O)):T=z,P&&cr(P),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Ie(B,L,T,z),at(f,!0);const Q=ur(f),ye=f.subTree;f.subTree=Q,I(ye,Q,m(ye.el),dn(ye),f,v,x),T.el=Q.el,W===null&&ll(f,Q.el),N&&ue(N,v),(B=T.props&&T.props.onVnodeUpdated)&&ue(()=>Ie(B,L,T,z),v)}else{let T;const{el:P,props:N}=u,{bm:L,m:z,parent:W}=f,B=In(u);if(at(f,!1),L&&cr(L),!B&&(T=N&&N.onVnodeBeforeMount)&&Ie(T,W,u),at(f,!0),P&&lr){const Q=()=>{f.subTree=ur(f),lr(P,f.subTree,f,v,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ur(f);I(null,Q,p,g,f,v,x),u.el=Q.el}if(z&&ue(z,v),!B&&(T=N&&N.onVnodeMounted)){const Q=u;ue(()=>Ie(T,W,Q),v)}(u.shapeFlag&256||W&&In(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,v),f.isMounted=!0,u=p=g=null}},_=f.effect=new Gr(y,()=>ia(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Ll(f,u.props,g,p),Dl(f,u.children,p),Mt(),Da(),Rt()},Y=(f,u,p,g,v,x,O,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){un(b,P,p,g,v,x,O,y,_);return}else if(N&256){tt(b,P,p,g,v,x,O,y,_);return}}L&8?(T&16&&Le(b,v,x),P!==b&&d(p,P)):T&16?L&16?un(b,P,p,g,v,x,O,y,_):Le(b,v,x,!0):(T&8&&d(p,""),L&16&&ve(P,p,g,v,x,O,y,_))},tt=(f,u,p,g,v,x,O,y,_)=>{f=f||_t,u=u||_t;const b=f.length,T=u.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const L=u[N]=_?Xe(u[N]):Te(u[N]);I(f[N],L,p,null,v,x,O,y,_)}b>T?Le(f,v,x,!0,!1,P):ve(u,p,g,v,x,O,y,_,P)},un=(f,u,p,g,v,x,O,y,_)=>{let b=0;const T=u.length;let P=f.length-1,N=T-1;for(;b<=P&&b<=N;){const L=f[b],z=u[b]=_?Xe(u[b]):Te(u[b]);if(zt(L,z))I(L,z,p,null,v,x,O,y,_);else break;b++}for(;b<=P&&b<=N;){const L=f[P],z=u[N]=_?Xe(u[N]):Te(u[N]);if(zt(L,z))I(L,z,p,null,v,x,O,y,_);else break;P--,N--}if(b>P){if(b<=N){const L=N+1,z=L<T?u[L].el:g;for(;b<=N;)I(null,u[b]=_?Xe(u[b]):Te(u[b]),p,z,v,x,O,y,_),b++}}else if(b>N)for(;b<=P;)Ce(f[b],v,x,!0),b++;else{const L=b,z=b,W=new Map;for(b=z;b<=N;b++){const me=u[b]=_?Xe(u[b]):Te(u[b]);me.key!=null&&W.set(me.key,b)}let B,Q=0;const ye=N-z+1;let vt=!1,Ca=0;const jt=new Array(ye);for(b=0;b<ye;b++)jt[b]=0;for(b=L;b<=P;b++){const me=f[b];if(Q>=ye){Ce(me,v,x,!0);continue}let Se;if(me.key!=null)Se=W.get(me.key);else for(B=z;B<=N;B++)if(jt[B-z]===0&&zt(me,u[B])){Se=B;break}Se===void 0?Ce(me,v,x,!0):(jt[Se-z]=b+1,Se>=Ca?Ca=Se:vt=!0,I(me,u[Se],p,null,v,x,O,y,_),Q++)}const Sa=vt?Bl(jt):_t;for(B=Sa.length-1,b=ye-1;b>=0;b--){const me=z+b,Se=u[me],Ia=me+1<T?u[me+1].el:g;jt[b]===0?I(null,Se,p,Ia,v,x,O,y,_):vt&&(B<0||b!==Sa[B]?nt(Se,p,Ia,2):B--)}}},nt=(f,u,p,g,v=null)=>{const{el:x,type:O,transition:y,children:_,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){O.move(f,u,p,gt);return}if(O===we){r(x,u,p);for(let P=0;P<_.length;P++)nt(_[P],u,p,g);r(f.anchor,u,p);return}if(O===mr){R(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),v);else{const{leave:P,delayLeave:N,afterLeave:L}=y,z=()=>r(x,u,p),W=()=>{P(x,()=>{z(),L&&L()})};N?N(x,z,W):W()}else r(x,u,p)},Ce=(f,u,p,g=!1,v=!1)=>{const{type:x,props:O,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=f;if(y!=null&&Nr(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const L=T&1&&N,z=!In(f);let W;if(z&&(W=O&&O.onVnodeBeforeUnmount)&&Ie(W,u,f),T&6)oo(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}L&&rt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,v,gt,g):b&&(x!==we||P>0&&P&64)?Le(b,u,p,!1,!0):(x===we&&P&384||!v&&T&16)&&Le(_,u,p),g&&Ea(f)}(z&&(W=O&&O.onVnodeUnmounted)||L)&&ue(()=>{W&&Ie(W,u,f),L&&rt(f,null,u,"unmounted")},p)},Ea=f=>{const{type:u,el:p,anchor:g,transition:v}=f;if(u===we){so(p,g);return}if(u===mr){S(f);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:y}=v,_=()=>O(p,x);y?y(f.el,x,_):_()}else x()},so=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},oo=(f,u,p)=>{const{bum:g,scope:v,update:x,subTree:O,um:y}=f;g&&cr(g),v.stop(),x&&(x.active=!1,Ce(O,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(f,u,p,g=!1,v=!1,x=0)=>{for(let O=x;O<f.length;O++)Ce(f[O],u,p,g,v)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):I(u._vnode||null,f,u,null,null,null,p),Da(),ss(),u._vnode=f},gt={p:I,um:Ce,m:nt,r:Ea,mt:sr,mc:ve,pc:Y,pbc:Fe,n:dn,o:e};let or,lr;return t&&([or,lr]=t(gt)),{render:Pa,hydrate:or,createApp:Ml(Pa,or)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ul(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Os(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Xe(a[i]),o.el=s.el),n||Os(s,o)),o.type===er&&(o.el=s.el)}}function Bl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Yl=e=>e.__isTeleport,we=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Yt=[];let Ae=null;function he(e=!1){Yt.push(Ae=e?null:[])}function Wl(){Yt.pop(),Ae=Yt[Yt.length-1]||null}let Qt=1;function Ja(e){Qt+=e}function Es(e){return e.dynamicChildren=Qt>0?Ae||_t:null,Wl(),Qt>0&&Ae&&Ae.push(e),e}function Je(e,t,n,r,a,i){return Es(pe(e,t,n,r,a,i,!0))}function Wt(e,t,n,r,a){return Es(re(e,t,n,r,a,!0))}function Mr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Ps=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||oe(e)||j(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,a=null,i=e===we?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ps(t),ref:t&&Nn(t),scopeId:fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ke};return o?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),Qt>0&&!s&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const re=Kl;function Kl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cl)&&(e=Zt),Mr(e)){const o=St(e,t,!0);return n&&fa(o,n),Qt>0&&!i&&Ae&&(o.shapeFlag&6?Ae[Ae.indexOf(e)]=o:Ae.push(o)),o.patchFlag|=-2,o}if(af(e)&&(e=e.__vccOpts),t){t=Xl(t);let{class:o,style:l}=t;o&&!G(o)&&(t.class=Pt(o)),V(l)&&(Gi(l)&&!M(l)&&(l=ie({},l)),t.style=Zr(l))}const s=G(e)?1:dl(e)?128:Yl(e)?64:V(e)?4:j(e)?2:0;return pe(e,t,n,r,a,s,i,!0)}function Xl(e){return e?Gi(e)||tr in e?ie({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ps(o),ref:t&&t.ref?n&&a?M(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ql(e=" ",t=0){return re(er,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?re(Zt):M(e)?re(we,null,e.slice()):typeof e=="object"?Xe(e):re(er,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[ql(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Pt([t.class,r.class]));else if(a==="style")t.style=Zr([t.style,r.style]);else if(Yn(a)){const i=t[a],s=r[a];s&&i!==s&&!(M(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Pe(e,t,7,[n,r])}const Jl=ys();let Zl=0;function Ql(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jl,i={uid:Zl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new _o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ws(r,a),emitsOptions:ls(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rl.bind(null,i),e.ce&&e.ce(i),i}let ae=null,ca,bt,Za="__VUE_INSTANCE_SETTERS__";(bt=wr()[Za])||(bt=wr()[Za]=[]),bt.push(e=>ae=e),ca=e=>{bt.length>1?bt.forEach(t=>t(e)):bt[0](e)};const It=e=>{ca(e),e.scope.on()},dt=()=>{ae&&ae.scope.off(),ca(null)};function Cs(e){return e.vnode.shapeFlag&4}let Gt=!1;function Gl(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Cs(e);Fl(e,n,a,t),zl(e,r);const i=a?ef(e,t):void 0;return Gt=!1,i}function ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=es(new Proxy(e.ctx,El));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?nf(e):null;It(e),Mt();const i=Ve(r,e,0,[e.props,a]);if(Rt(),dt(),Li(i)){if(i.then(dt,dt),t)return i.then(s=>{Qa(e,s,t)}).catch(s=>{Zn(s,e,0)});e.asyncDep=i}else Qa(e,i,t)}else Ss(e,t)}function Qa(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=rs(t)),Ss(e,n)}let Ga;function Ss(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ie(ie({isCustomElement:i,delimiters:o},s),l);r.render=Ga(a,c)}}e.render=r.render||Ee}{It(e),Mt();try{Pl(e)}finally{Rt(),dt()}}}function tf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}}))}function nf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return tf(e)},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rs(es(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}}))}function rf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function af(e){return j(e)&&"__vccOpts"in e}const it=(e,t)=>Jo(e,t,Gt);function sf(e,t,n){const r=arguments.length;return r===2?V(t)&&!M(t)?Mr(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),re(e,t,n))}const of=Symbol.for("v-scx"),lf=()=>Tn(of),ff="3.3.9",cf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ei=lt&&lt.createElement("template"),uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(cf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r?`<svg>${e}</svg>`:e;const o=ei.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},df=Symbol("_vtc");function mf(e,t,n){const r=e[df];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pf=Symbol("_vod");function hf(e,t,n){const r=e.style,a=G(n);if(n&&!a){if(t&&!G(t))for(const i in t)n[i]==null&&Rr(r,i,"");for(const i in n)Rr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),pf in e&&(r.display=i)}}const ti=/\s*!important$/;function Rr(e,t,n){if(M(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gf(e,t);ti.test(n)?e.setProperty(Nt(r),n.replace(ti,""),"important"):e[r]=n}}const ni=["Webkit","Moz","ms"],pr={};function gf(e,t){const n=pr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return pr[t]=r;r=qn(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in e)return pr[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n);else{const i=wo(t);n==null||i&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Di(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function yf(e,t,n,r){e.addEventListener(t,n,r)}function xf(e,t,n,r){e.removeEventListener(t,n,r)}const ai=Symbol("_vei");function wf(e,t,n,r,a=null){const i=e[ai]||(e[ai]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=_f(t);if(r){const c=i[t]=Of(r,a);yf(e,o,c,l)}else s&&(xf(e,o,s,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let hr=0;const kf=Promise.resolve(),Af=()=>hr||(kf.then(()=>hr=0),hr=Date.now());function Of(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Ef(r,n.value),t,5,[r])};return n.value=e,n.attached=Af(),n}function Ef(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?mf(e,r,a):t==="style"?hf(e,n,r):Yn(t)?qr(t)||wf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?bf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&G(n)?!1:t in e}const Sf=ie({patchProp:Pf},uf);let oi;function If(){return oi||(oi=$l(Sf))}const Tf=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Nf(e){return G(e)?document.querySelector(e):e}const Mf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rf={class:"bg-[#e1f1ff] rounded-3xl flex-ic-jc min-h-[40px] px-5 py-2"},Ff={key:0,class:"dot-typing"},Lf={key:1},jf={__name:"Message",props:{text:String},emits:["sended"],setup(e,{emit:t}){let n=Er(!0);const r=t;return sa(()=>{setTimeout(()=>{n.value=!1,r("sended")},1e3)}),(a,i)=>(he(),Je("div",Rf,[st(n)?(he(),Je("div",Ff)):(he(),Je("div",Lf,$i(e.text),1))]))}},zf=Mf(jf,[["__scopeId","data-v-bfe26b48"]]),Df={class:"w-9 h-9 shadow-10_30 rounded-full flex-ic-jc text-base mt-[1px]"},$f=pe("div",{class:"w-9"},null,-1),Hf={__name:"UsersMessages",props:{messages:Array,from:{type:String}},emits:["sended"],setup(e,{emit:t}){const n=t;return(r,a)=>{const i=fl("font-awesome-icon");return he(),Je("div",{class:Pt([e.from==="me"?"flex-row-reverse":"flex-row","flex gap-4"])},[pe("div",Df,[e.from==="bot"?(he(),Wt(i,{key:0,icon:["fas","robot"],color:"#4299e1"})):(he(),Wt(i,{key:1,icon:["fas","user"],color:"#4299e1"}))]),pe("div",{class:Pt([e.from==="me"?"items-end":"items-start","flex-vertical gap-3 flex-1"])},[(he(!0),Je(we,null,vs(e.messages,({id:s,text:o,answerTemplate:l})=>(he(),Wt(zf,{key:s,text:o,onSended:()=>n("sended",{answerTemplate:l,text:o,from:e.from})},null,8,["text","onSended"]))),128))],2),$f],2)}}},Uf=["disabled"],Dt={__name:"Action",props:{text:String,disabled:{default:!1,type:Boolean}},emits:["click"],setup(e,{emit:t}){const n=t;return(r,a)=>(he(),Je("button",{onClick:a[0]||(a[0]=i=>n("click",e.text)),class:Pt(["bg-blue-500 text-white px-4 py-1 rounded-full cursor-pointer",{"bg-gray-400 cursor-default":e.disabled}]),disabled:e.disabled},$i(e.text),11,Uf))}},Bf={class:"border-[#e2e8f0] border rounded-lg overflow-hidden w-[450px]"},Yf=pe("div",{class:"bg-[#4299e1] text-white p-4 text-center"},[pe("h4",{class:"text-lg font-semibold"},"Chat Bot")],-1),Wf={class:"flex-vertical gap-4"},Kf={id:"chat-input",class:"p-4 border-t border-[#e2e8f0]"},Xf={class:"flex-vertical gap-3"},qf={class:"flex-ic-ja"},Vf={class:"flex-ic-ja"},Jf={__name:"Chat",setup(e){const t=Er(null),n=()=>{t.value.scrollTop=t.value.scrollHeight},r={1:["Добро пожаловать!","Чем я могу вам помочь?"],2:["Хорошо!","В чем я могу вам помочь сегодня?"],3:["Будильник установлен на 7:00","Чем я ещё могу вам помочь?"],4:["-5°C. Облачно и слабый снег, ветер полный штиль, северо-западный 0.0 м/с ","Чем я ещё могу вам помочь?"],5:["21:34 Москва – 29 ноября, UTC +3 ","Чем я ещё могу вам помочь?"]},a=Jn([]),i=[];let s=Er(!1);const o=(d,m,h)=>{if(s.value)i.push({from:d,text:m,answerTemplate:h});else{const w=Date.now(),F={id:`message-${w}`,text:m,answerTemplate:h},I=a.length?a[a.length-1]:null;I&&I.from===d?a[a.length-1].messages.push(F):a.push({id:`userMessage-${w}`,from:d,messages:[F]}),s.value=!0}};hs(()=>{n()}),sa(()=>{o("bot","Добро пожаловать!"),o("bot","Чем я могу вам помочь?")});const l=({from:d,answerTemplate:m})=>{if(n(),!c()&&d!=="bot")for(const w of r[m])o("bot",w)},c=()=>{if(s.value=!1,i.length){const{text:d,from:m,answerTemplate:h}=i.shift();return o(m,d,h),!0}return!1};return(d,m)=>(he(),Je("div",Bf,[Yf,pe("div",{class:"p-6 h-80 overflow-y-auto",ref_key:"scrollContainer",ref:t},[pe("div",Wf,[(he(!0),Je(we,null,vs(a,({id:h,from:w,messages:F})=>(he(),Wt(Hf,{onSended:l,from:w,messages:F,key:h},null,8,["from","messages"]))),128))])],512),pe("div",Kf,[pe("div",Xf,[pe("div",qf,[re(Dt,{disabled:st(s),onClick:m[0]||(m[0]=h=>o("me",h,1)),text:"Привет"},null,8,["disabled"]),re(Dt,{disabled:st(s),onClick:m[1]||(m[1]=h=>o("me",h,2)),text:"Как дела?"},null,8,["disabled"]),re(Dt,{disabled:st(s),onClick:m[2]||(m[2]=h=>o("me",h,3)),text:"Установить будильник"},null,8,["disabled"])]),pe("div",Vf,[re(Dt,{disabled:st(s),onClick:m[3]||(m[3]=h=>o("me",h,4)),text:"Какая сегодня погода?"},null,8,["disabled"]),re(Dt,{disabled:st(s),onClick:m[4]||(m[4]=h=>o("me",h,5)),text:"Сколько время?"},null,8,["disabled"])])])])]))}},Zf={__name:"App",setup(e){return(t,n)=>(he(),Wt(Jf))}};function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function Qf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gf(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return tc(e)||rc(e,t)||Is(e,t)||ic()}function sn(e){return ec(e)||nc(e)||Is(e)||ac()}function ec(e){if(Array.isArray(e))return Fr(e)}function tc(e){if(Array.isArray(e))return e}function nc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Is(e,t){if(e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ac(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ic(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},Ts={},Ns=null,Ms={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Ts=document),typeof MutationObserver<"u"&&(Ns=MutationObserver),typeof performance<"u"&&(Ms=performance)}catch{}var sc=ma.navigator||{},ui=sc.userAgent,di=ui===void 0?"":ui,Qe=ma,X=Ts,mi=Ns,yn=Ms;Qe.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Rs=~di.indexOf("MSIE")||~di.indexOf("Trident/"),xn,wn,_n,kn,An,$e="___FONT_AWESOME___",Lr=16,Fs="fa",Ls="svg-inline--fa",pt="data-fa-i2svg",jr="data-fa-pseudo-element",oc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",pi="fontawesome-i2svg",lc="async",fc=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",ga=[K,Z];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var en=on((xn={},ee(xn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ee(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xn)),tn=on((wn={},ee(wn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(wn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wn)),nn=on((_n={},ee(_n,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(_n,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),cc=on((kn={},ee(kn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(kn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kn)),uc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zs="fa-layers-text",dc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mc=on((An={},ee(An,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(An,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),An)),Ds=[1,2,3,4,5,6,7,8,9,10],pc=Ds.concat([11,12,13,14,15,16,17,18,19,20]),hc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(tn[K]).map(rn.add.bind(rn));Object.keys(tn[Z]).map(rn.add.bind(rn));var gc=[].concat(ga,sn(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(pc.map(function(e){return"w-".concat(e)})),Kt=Qe.FontAwesomeConfig||{};function vc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var yc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yc.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=bc(vc(n));a!=null&&(Kt[r]=a)})}var $s={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fs,replacementClass:Ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var Tt=E(E({},$s),Kt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var C={};Object.keys($s).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Tt[e]=n,Xt.forEach(function(r){return r(C)})},get:function(){return Tt[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Xt.forEach(function(n){return n(C)})},get:function(){return Tt.cssPrefix}});Qe.FontAwesomeConfig=C;var Xt=[];function xc(e){return Xt.push(e),function(){Xt.splice(Xt.indexOf(e),1)}}var Ke=Lr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wc(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var _c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=_c[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hs(e[n]),'" ')},"").trim()}function nr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function Ac(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Oc(e){var t=e.transform,n=e.width,r=n===void 0?Lr:n,a=e.height,i=a===void 0?Lr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Rs?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ec=`:root, :host {
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
}`;function Us(){var e=Fs,t=Ls,n=C.cssPrefix,r=C.replacementClass,a=Ec;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var hi=!1;function gr(){C.autoAddCss&&!hi&&(wc(Us()),hi=!0)}var Pc={mixout:function(){return{dom:{css:Us,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},He=Qe||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var Oe=He[$e],Bs=[],Cc=function e(){X.removeEventListener("DOMContentLoaded",e),Hn=1,Bs.map(function(t){return t()})},Hn=!1;Ye&&(Hn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Hn||X.addEventListener("DOMContentLoaded",Cc));function Sc(e){Ye&&(Hn?setTimeout(e,0):Bs.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Hs(e):"<".concat(t," ").concat(kc(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ic=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},vr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Ic(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function Tc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zr(e){var t=Tc(e);return t.length===1?t[0].toString(16):null}function Nc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,vi(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var On,En,Pn,xt=Oe.styles,Mc=Oe.shims,Rc=(On={},ee(On,K,Object.values(nn[K])),ee(On,Z,Object.values(nn[Z])),On),ya=null,Ys={},Ws={},Ks={},Xs={},qs={},Fc=(En={},ee(En,K,Object.keys(en[K])),ee(En,Z,Object.keys(en[Z])),En);function Lc(e){return~gc.indexOf(e)}function jc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Lc(a)?a:null}var Vs=function(){var t=function(i){return vr(xt,function(s,o,l){return s[l]=vr(o,i,{}),s},{})};Ys=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Ws=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),qs=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in xt||C.autoFetchSvg,r=vr(Mc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ks=r.names,Xs=r.unicodes,ya=rr(C.styleDefault,{family:C.familyDefault})};xc(function(e){ya=rr(e.styleDefault,{family:C.familyDefault})});Vs();function xa(e,t){return(Ys[e]||{})[t]}function zc(e,t){return(Ws[e]||{})[t]}function ct(e,t){return(qs[e]||{})[t]}function Js(e){return Ks[e]||{prefix:null,iconName:null}}function Dc(e){var t=Xs[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ya}var wa=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=en[r][e],i=tn[r][e]||tn[r][a],s=e in Oe.styles?e:null;return i||s||null}var bi=(Pn={},ee(Pn,K,Object.keys(nn[K])),ee(Pn,Z,Object.keys(nn[Z])),Pn);function ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(C.cssPrefix,"-").concat(K)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),s=null,o=K;(e.includes(i[K])||e.some(function(c){return bi[K].includes(c)}))&&(o=K),(e.includes(i[Z])||e.some(function(c){return bi[Z].includes(c)}))&&(o=Z);var l=e.reduce(function(c,d){var m=jc(C.cssPrefix,d);if(xt[d]?(d=Rc[o].includes(d)?cc[o][d]:d,s=d,c.prefix=d):Fc[o].indexOf(d)>-1?(s=d,c.prefix=rr(d,{family:o})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var h=s==="fa"?Js(c.iconName):{},w=ct(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Z&&(xt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ge()||"fas"),l}var $c=function(){function e(){Qf(this,e),this.definitions={}}return Gf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Dr(o,s[o]);var l=nn[K][o];l&&Dr(l,s[o]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),yi=[],wt={},Et={},Hc=Object.keys(Et);function Uc(e,t){var n=t.mixoutsTo;return yi=e,wt={},Object.keys(Et).forEach(function(r){Hc.indexOf(r)===-1&&delete Et[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),$n(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){wt[s]||(wt[s]=[]),wt[s].push(i[s])})}r.provides&&r.provides(Et)}),n}function $r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=ct(n,t)||t,gi(Zs.definitions,n,t)||gi(Oe.styles,n,t)}var Zs=new $c,Bc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ht("noAuto")},Yc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(ht("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Sc(function(){Kc({autoReplaceSvgRoot:n}),ht("watch",t)})}},Wc={icon:function(t){if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(uc))){var a=ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:ct(i,t)||t}}}},ge={noAuto:Bc,config:C,dom:Yc,parse:Wc,library:Zs,findIconDefinition:Hr,toHtml:ln},Kc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||C.autoFetchSvg)&&Ye&&C.autoReplaceSvg&&ge.dom.i2svg({node:r})};function ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Xc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ba(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=nr(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function qc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,F=r.found?r:n,I=F.width,D=F.height,k=a==="fak",A=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/D*16*.0625,"em")}:{};w&&(R.attributes[pt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete R.attributes.title);var U=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},S),m.styles)}),te=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},ne=te.children,ve=te.attributes;return U.children=ne,U.attributes=ve,o?qc(U):Xc(U)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[pt]="");var d=E({},s.styles);ba(a)&&(d.transform=Oc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=nr(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Vc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var br=Oe.styles;function Ur(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Jc={found:!1,width:512,height:512};function Zc(e,t){!js&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Br(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&br[t]&&br[t][e]){var s=br[t][e];return r(Ur(s))}Zc(e,t),r(E(E({},Jc),{},{icon:C.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var wi=function(){},Yr=C.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:wi,measure:wi},Ut='FA "6.5.0"',Qc=function(t){return Yr.mark("".concat(Ut," ").concat(t," begins")),function(){return Qs(t)}},Qs=function(t){Yr.mark("".concat(Ut," ").concat(t," ends")),Yr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},ka={begin:Qc,end:Qs},Mn=function(){};function _i(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Gc(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function tu(){if(C.autoReplaceSvg===!0)return Rn.replace;var e=Rn[C.autoReplaceSvg];return e||Rn.replace}function nu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function ru(e){return X.createElement(e)}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nu:ru:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Gs(s,{ceFn:r}))}),a}function au(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gs(a),n)}),n.getAttribute(pt)===null&&C.keepOriginalSource){var r=X.createComment(au(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(C.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===C.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return ln(o)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=s}};function ki(e){e()}function eo(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=ki;C.mutateApproach===lc&&(r=Qe.requestAnimationFrame||ki),r(function(){var a=tu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function to(){Aa=!0}function Wr(){Aa=!1}var Un=null;function Ai(e){if(mi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,s=i===void 0?Mn:i,o=e.observeMutationsRoot,l=o===void 0?X:o;Un=new mi(function(c){if(!Aa){var d=Ge();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_i(m.addedNodes[0])&&(C.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&_i(m.target)&&~hc.indexOf(m.attributeName))if(m.attributeName==="class"&&Gc(m.target)){var h=ar(va(m.target)),w=h.prefix,F=h.iconName;m.target.setAttribute(pa,w||d),F&&m.target.setAttribute(ha,F)}else eu(m.target)&&a(m.target)})}}),Ye&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function iu(){Un&&Un.disconnect()}function su(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ar(va(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=zc(a.prefix,e.innerText)||xa(a.prefix,zr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function lu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function fu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),r=n.iconName,a=n.prefix,i=n.rest,s=lu(e),o=$r("parseNodeAttributes",{},e),l=t.styleParser?su(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var cu=Oe.styles;function no(e){var t=C.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(zs)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;ga.map(function(e){et.add("fa-".concat(e))});Object.keys(en[K]).map(et.add.bind(et));Object.keys(en[Z]).map(et.add.bind(et));et=sn(et);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?et:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(cu));i.includes("fa")||i.push("fa");var s=[".".concat(zs,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ft(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=o.reduce(function(d,m){try{var h=no(m);h&&d.push(h)}catch(w){js||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){eo(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function uu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;no(e).then(function(n){n&&eo([n],t)})}function du(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var mu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,F=w===void 0?null:w,I=n.classes,D=I===void 0?[]:I,k=n.attributes,A=k===void 0?{}:k,R=n.styles,S=R===void 0?{}:R;if(t){var U=t.prefix,te=t.iconName,ne=t.icon;return ir(E({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(h?A["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(F||an()):(A["aria-hidden"]="true",A.focusable="false")),_a({icons:{main:Ur(ne),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:te,transform:E(E({},Me),a),symbol:s,title:h,maskId:d,titleId:F,extra:{attributes:A,styles:S,classes:D}})})}},pu={mixout:function(){return{icon:du(mu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=uu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return Ei(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,F){Promise.all([Br(a,o),d.iconName?Br(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var D=da(I,2),k=D[0],A=D[1];w([n,_a({icons:{main:k,mask:A},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=nr(o);l.length>0&&(a.style=l);var c;return ba(s)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:s}]})}}}},gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ir({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Vc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(sn(o))}})})}}}},vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,w=h===void 0?{}:h;return ir({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},Me),i),title:o,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(sn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Rs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},bu=new RegExp('"',"ug"),Pi=[1105920,1112319];function yu(e){var t=e.replace(bu,""),n=Nc(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:zr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(oc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),s=i.filter(function(ne){return ne.getAttribute(jr)===t})[0],o=Qe.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(dc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Z:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tn[h][l[2].toLowerCase()]:mc[h][c],F=yu(m),I=F.value,D=F.isSecondary,k=l[0].startsWith("FontAwesome"),A=xa(w,I),R=A;if(k){var S=Dc(I);S.iconName&&S.prefix&&(A=S.iconName,w=S.prefix)}if(A&&!D&&(!s||s.getAttribute(pa)!==w||s.getAttribute(ha)!==R)){e.setAttribute(n,R),s&&e.removeChild(s);var U=fu(),te=U.extra;te.attributes[jr]=t,Br(A,w).then(function(ne){var ve=_a(E(E({},U),{},{icons:{main:ne,mask:wa()},prefix:w,iconName:R,extra:te,watchable:!0})),be=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ve.map(function(Fe){return ln(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xu(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function wu(e){return e.parentNode!==document.head&&!~fc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(jr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Si(e){if(Ye)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(wu).map(xu),a=ka.begin("searchPseudoElements");to(),Promise.all(r).then(function(){a(),Wr(),t()}).catch(function(){a(),Wr(),n()})})}var _u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Si(a)}}},Ii=!1,ku={mixout:function(){return{dom:{unwatch:function(){to(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai($r("mutationObserverCallbacks",{}))},noAuto:function(){iu()},watch:function(n){var r=n.observeMutationsRoot;Ii?Wr():Ai($r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Au={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(s/2*-1," -256)")},w={outer:o,inner:m,path:h};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ou(e){return e.tag==="g"?e.children:[e]}var Eu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(s){return s.trim()})):wa();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,h=s.icon,w=Ac({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:E(E({},yr),{},{fill:"white"})},I=d.children?{children:d.children.map(Ni)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ni(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},I))]},k={tag:"g",attributes:E({},w.outer),children:[D]},A="mask-".concat(o||an()),R="clip-".concat(o||an()),S={tag:"mask",attributes:E(E({},yr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,k]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Ou(h)},S]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(A,")")},yr)}),{children:r,attributes:a}}}},Pu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Su=[Pc,pu,hu,gu,vu,_u,ku,Au,Eu,Pu,Cu];Uc(Su,{mixoutsTo:ge});ge.noAuto;ge.config;var Iu=ge.library;ge.dom;var Kr=ge.parse;ge.findIconDefinition;ge.toHtml;var Tu=ge.icon;ge.layer;ge.text;ge.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function ce(e,t,n){return t=Fu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mu(e,t){if(e==null)return{};var n=Nu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ru(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fu(e){var t=Ru(e,"string");return typeof t=="symbol"?t:String(t)}var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ro={exports:{}};(function(e){(function(t){var n=function(k,A,R){if(!c(A)||m(A)||h(A)||w(A)||l(A))return A;var S,U=0,te=0;if(d(A))for(S=[],te=A.length;U<te;U++)S.push(n(k,A[U],R));else{S={};for(var ne in A)Object.prototype.hasOwnProperty.call(A,ne)&&(S[k(ne,R)]=n(k,A[ne],R))}return S},r=function(k,A){A=A||{};var R=A.separator||"_",S=A.split||/(?=[A-Z])/;return k.split(S).join(R)},a=function(k){return F(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(A,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var A=a(k);return A.substr(0,1).toUpperCase()+A.substr(1)},s=function(k,A){return r(k,A).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},h=function(k){return o.call(k)=="[object RegExp]"},w=function(k){return o.call(k)=="[object Boolean]"},F=function(k){return k=k-0,k===k},I=function(k,A){var R=A&&"process"in A?A.process:A;return typeof R!="function"?k:function(S,U){return R(S,k,U)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,A){return n(I(a,A),k)},decamelizeKeys:function(k,A){return n(I(s,A),k,A)},pascalizeKeys:function(k,A){return n(I(i,A),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Lu)})(ro);var ju=ro.exports,zu=["class","style"];function Du(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $u(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ao(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=$u(d);break;case"style":l.style=Du(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Mu(n,zu);return sf(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),s)},a.attrs),o),r)}var io=!1;try{io=!0}catch{}function Hu(){if(!io&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Uu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ri(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kr.icon)return Kr.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Bu=hl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=it(function(){return Ri(t.icon)}),i=it(function(){return xr("classes",Uu(t))}),s=it(function(){return xr("transform",typeof t.transform=="string"?Kr.transform(t.transform):t.transform)}),o=it(function(){return xr("mask",Ri(t.mask))}),l=it(function(){return Tu(a.value,ze(ze(ze(ze({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Sn(l,function(d){if(!d)return Hu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=it(function(){return l.value?ao(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Yu={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Wu={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"]};Iu.add(Yu,Wu);Tf(Zf).component("font-awesome-icon",Bu).mount("#app");

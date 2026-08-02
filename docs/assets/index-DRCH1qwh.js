(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ef(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const At={},yr=[],yi=()=>{},Om=()=>!1,bl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),El=n=>n.startsWith("onUpdate:"),sn=Object.assign,Tf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},V0=Object.prototype.hasOwnProperty,mt=(n,e)=>V0.call(n,e),$e=Array.isArray,br=n=>eo(n)==="[object Map]",Tl=n=>eo(n)==="[object Set]",Oh=n=>eo(n)==="[object Date]",Ye=n=>typeof n=="function",Ft=n=>typeof n=="string",Qn=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Um=n=>(St(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),Fm=Object.prototype.toString,eo=n=>Fm.call(n),H0=n=>eo(n).slice(8,-1),Bm=n=>eo(n)==="[object Object]",Af=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ba=Ef(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},G0=/-\w/g,Sn=Al(n=>n.replace(G0,e=>e.slice(1).toUpperCase())),z0=/\B([A-Z])/g,js=Al(n=>n.replace(z0,"-$1").toLowerCase()),Rl=Al(n=>n.charAt(0).toUpperCase()+n.slice(1)),jl=Al(n=>n?`on${Rl(n)}`:""),vi=(n,e)=>!Object.is(n,e),Xo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},km=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uh;const wl=()=>Uh||(Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?q0(i):Kr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||St(n))return n}const W0=/;(?![^(]*\))/g,X0=/:([^]+)/,$0=/\/\*[^]*?\*\//g;function q0(n){const e={};return n.replace($0,"").split(W0).forEach(t=>{if(t){const i=t.split(X0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kn(n){let e="";if(Ft(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Kn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const K0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y0=Ef(K0);function Vm(n){return!!n||n===""}function Z0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=to(n[i],e[i]);return t}function to(n,e){if(n===e)return!0;let t=Oh(n),i=Oh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Qn(n),i=Qn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?Z0(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!to(n[a],e[a]))return!1}}return String(n)===String(e)}function Hm(n,e){return n.findIndex(t=>to(t,e))}const Gm=n=>!!(n&&n.__v_isRef===!0),wi=n=>Ft(n)?n:n==null?"":$e(n)||St(n)&&(n.toString===Fm||!Ye(n.toString))?Gm(n)?wi(n.value):JSON.stringify(n,zm,2):String(n),zm=(n,e)=>Gm(e)?zm(n,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ql(i,r)+" =>"]=s,t),{})}:Tl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ql(t))}:Qn(e)?Ql(e):St(e)&&!$e(e)&&!Bm(e)?String(e):e,Ql=(n,e="")=>{var t;return Qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class Wm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Qt&&(Qt.active?(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){if(this._on>0&&--this._on===0){if(Qt===this)Qt=this.prevScope;else{let e=Qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function J0(n){return new Wm(n)}function j0(){return Qt}let Ct;const ec=new WeakSet;class Xm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&(Qt.active?Qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ec.has(this)&&(ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fh(this),Km(this);const e=Ct,t=Zn;Ct=this,Zn=!0;try{return this.fn()}finally{Ym(this),Ct=e,Zn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pf(e);this.deps=this.depsTail=void 0,Fh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){iu(this)&&this.run()}get dirty(){return iu(this)}}let $m=0,Ea,Ta;function qm(n,e=!1){if(n.flags|=8,e){n.next=Ta,Ta=n;return}n.next=Ea,Ea=n}function wf(){$m++}function Cf(){if(--$m>0)return;if(Ta){let e=Ta;for(Ta=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ea;){let e=Ea;for(Ea=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Km(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ym(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Pf(i),Q0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function iu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Zm(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Na)||(n.globalVersion=Na,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!iu(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=Zn;Ct=n,Zn=!0;try{Km(n);const s=n.fn(n._value);(e.version===0||vi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=t,Zn=i,Ym(n),n.flags&=-3}}function Pf(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Pf(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Q0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Zn=!0;const Jm=[];function ns(){Jm.push(Zn),Zn=!1}function is(){const n=Jm.pop();Zn=n===void 0?!0:n}function Fh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Na=0;class ev{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class If{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!Zn||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new ev(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,jm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,Na++,this.notify(e)}notify(e){wf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cf()}}}function jm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const su=new WeakMap,qs=Symbol(""),ru=Symbol(""),Da=Symbol("");function cn(n,e,t){if(Zn&&Ct){let i=su.get(n);i||su.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new If),s.map=i,s.key=t),s.track()}}function Xi(n,e,t,i,s,r){const a=su.get(n);if(!a){Na++;return}const o=l=>{l&&l.trigger()};if(wf(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&Af(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Da||!Qn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Da)),e){case"add":l?c&&o(a.get("length")):(o(a.get(qs)),br(n)&&o(a.get(ru)));break;case"delete":l||(o(a.get(qs)),br(n)&&o(a.get(ru)));break;case"set":br(n)&&o(a.get(qs));break}}Cf()}function nr(n){const e=pt(n);return e===n?e:(cn(e,"iterate",Da),Hn(n)?e:e.map(ei))}function Cl(n){return cn(n=pt(n),"iterate",Da),n}function mi(n,e){return ss(n)?Nr(Ks(n)?ei(e):e):ei(e)}const tv={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,n=>mi(this,n))},concat(...n){return nr(this).concat(...n.map(e=>$e(e)?nr(e):e))},entries(){return tc(this,"entries",n=>(n[1]=mi(this,n[1]),n))},every(n,e){return Di(this,"every",n,e,void 0,arguments)},filter(n,e){return Di(this,"filter",n,e,t=>t.map(i=>mi(this,i)),arguments)},find(n,e){return Di(this,"find",n,e,t=>mi(this,t),arguments)},findIndex(n,e){return Di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Di(this,"findLast",n,e,t=>mi(this,t),arguments)},findLastIndex(n,e){return Di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Di(this,"forEach",n,e,void 0,arguments)},includes(...n){return nc(this,"includes",n)},indexOf(...n){return nc(this,"indexOf",n)},join(n){return nr(this).join(n)},lastIndexOf(...n){return nc(this,"lastIndexOf",n)},map(n,e){return Di(this,"map",n,e,void 0,arguments)},pop(){return ea(this,"pop")},push(...n){return ea(this,"push",n)},reduce(n,...e){return Bh(this,"reduce",n,e)},reduceRight(n,...e){return Bh(this,"reduceRight",n,e)},shift(){return ea(this,"shift")},some(n,e){return Di(this,"some",n,e,void 0,arguments)},splice(...n){return ea(this,"splice",n)},toReversed(){return nr(this).toReversed()},toSorted(n){return nr(this).toSorted(n)},toSpliced(...n){return nr(this).toSpliced(...n)},unshift(...n){return ea(this,"unshift",n)},values(){return tc(this,"values",n=>mi(this,n))}};function tc(n,e,t){const i=Cl(n),s=i[e]();return i!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const nv=Array.prototype;function Di(n,e,t,i,s,r){const a=Cl(n),o=a!==n&&!Hn(n),l=a[e];if(l!==nv[e]){const f=l.apply(n,r);return o?ei(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,mi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Bh(n,e,t,i){const s=Cl(n),r=s!==n&&!Hn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=mi(n,c)),t.call(this,c,mi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=s[e](a,...i);return o?mi(n,l):l}function nc(n,e,t){const i=pt(n);cn(i,"iterate",Da);const s=i[e](...t);return(s===-1||s===!1)&&Df(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function ea(n,e,t=[]){ns(),wf();const i=pt(n)[e].apply(n,t);return Cf(),is(),i}const iv=Ef("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function sv(n){Qn(n)||(n=String(n));const e=pt(this);return cn(e,"has",n),e.hasOwnProperty(n)}class eg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?pv:sg:r?ig:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!s){let l;if(a&&(l=tv[t]))return l;if(t==="hasOwnProperty")return sv}const o=Reflect.get(e,t,nn(e)?e:i);if((Qn(t)?Qm.has(t):iv(t))||(s||cn(e,"get",t),r))return o;if(nn(o)){const l=a&&Af(t)?o:o.value;return s&&St(l)?ou(l):l}return St(o)?s?ou(o):Pl(o):o}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=$e(e)&&Af(t);if(!this._isShallow){const c=ss(r);if(!Hn(i)&&!ss(i)&&(r=pt(r),i=pt(i)),!a&&nn(r)&&!nn(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,nn(e)?e:s);return e===pt(s)&&l&&(o?vi(i,r)&&Xi(e,"set",t,i):Xi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Xi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Qn(t)||!Qm.has(t))&&cn(e,"has",t),i}ownKeys(e){return cn(e,"iterate",$e(e)?"length":qs),Reflect.ownKeys(e)}}class rv extends eg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const av=new tg,ov=new rv,lv=new tg(!0);const au=n=>n,uo=n=>Reflect.getPrototypeOf(n);function cv(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),a=br(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?au:e?Nr:ei;return!e&&cn(r,"iterate",l?ru:qs),sn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function fo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function uv(n,e){const t={get(s){const r=this.__v_raw,a=pt(r),o=pt(s);n||(vi(s,o)&&cn(a,"get",s),cn(a,"get",o));const{has:l}=uo(a),c=e?au:n?Nr:ei;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&cn(pt(s),"iterate",qs),s.size},has(s){const r=this.__v_raw,a=pt(r),o=pt(s);return n||(vi(s,o)&&cn(a,"has",s),cn(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=pt(o),c=e?au:n?Nr:ei;return!n&&cn(l,"iterate",qs),o.forEach((u,f)=>s.call(r,c(u),c(f),a))}};return sn(t,n?{add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear")}:{add(s){const r=pt(this),a=uo(r),o=pt(s),l=!e&&!Hn(s)&&!ss(s)?o:s;return a.has.call(r,l)||vi(s,l)&&a.has.call(r,s)||vi(o,l)&&a.has.call(r,o)||(r.add(l),Xi(r,"add",l,l)),this},set(s,r){!e&&!Hn(r)&&!ss(r)&&(r=pt(r));const a=pt(this),{has:o,get:l}=uo(a);let c=o.call(a,s);c||(s=pt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?vi(r,u)&&Xi(a,"set",s,r):Xi(a,"add",s,r),this},delete(s){const r=pt(this),{has:a,get:o}=uo(r);let l=a.call(r,s);l||(s=pt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Xi(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,a=s.clear();return r&&Xi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cv(s,n,e)}),t}function Lf(n,e){const t=uv(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const fv={get:Lf(!1,!1)},hv={get:Lf(!1,!0)},dv={get:Lf(!0,!1)};const ng=new WeakMap,ig=new WeakMap,sg=new WeakMap,pv=new WeakMap;function mv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pl(n){return ss(n)?n:Nf(n,!1,av,fv,ng)}function rg(n){return Nf(n,!1,lv,hv,ig)}function ou(n){return Nf(n,!0,ov,dv,sg)}function Nf(n,e,t,i,s){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=mv(H0(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Ks(n){return ss(n)?Ks(n.__v_raw):!!(n&&n.__v_isReactive)}function ss(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function Df(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function gv(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&km(n,"__v_skip",!0),n}const ei=n=>St(n)?Pl(n):n,Nr=n=>St(n)?ou(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function ag(n){return lg(n,!1)}function og(n){return lg(n,!0)}function lg(n,e){return nn(n)?n:new _v(n,e)}class _v{constructor(e,t){this.dep=new If,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:ei(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Hn(e)||ss(e);e=i?e:pt(e),vi(e,t)&&(this._rawValue=e,this._value=i?e:ei(e),this.dep.trigger())}}function Er(n){return nn(n)?n.value:n}const vv={get:(n,e,t)=>e==="__v_raw"?n:Er(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function cg(n){return Ks(n)?n:new Proxy(n,vv)}class xv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new If(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return qm(this,!0),!0}get value(){const e=this.dep.track();return Zm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sv(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new xv(i,s,t)}const ho={},nl=new WeakMap;let Bs;function Mv(n,e=!1,t=Bs){if(t){let i=nl.get(t);i||nl.set(t,i=[]),i.push(n)}}function yv(n,e,t=At){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=_=>s?_:Hn(_)||s===!1||s===0?$i(_,1):$i(_);let u,f,h,d,g=!1,x=!1;if(nn(n)?(f=()=>n.value,g=Hn(n)):Ks(n)?(f=()=>c(n),g=!0):$e(n)?(x=!0,g=n.some(_=>Ks(_)||Hn(_)),f=()=>n.map(_=>{if(nn(_))return _.value;if(Ks(_))return c(_);if(Ye(_))return l?l(_,2):_()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ns();try{h()}finally{is()}}const _=Bs;Bs=u;try{return l?l(n,3,[d]):n(d)}finally{Bs=_}}:f=yi,e&&s){const _=f,E=s===!0?1/0:s;f=()=>$i(_(),E)}const m=j0(),p=()=>{u.stop(),m&&m.active&&Tf(m.effects,u)};if(r&&e){const _=e;e=(...E)=>{const A=_(...E);return p(),A}}let M=x?new Array(n.length).fill(ho):ho;const y=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const E=u.run();if(_||s||g||(x?E.some((A,T)=>vi(A,M[T])):vi(E,M))){h&&h();const A=Bs;Bs=u;try{const T=[E,M===ho?void 0:x&&M[0]===ho?[]:M,d];M=E,l?l(e,3,T):e(...T)}finally{Bs=A}}}else u.run()};return o&&o(y),u=new Xm(f),u.scheduler=a?()=>a(y,!1):y,d=_=>Mv(_,!1,u),h=u.onStop=()=>{const _=nl.get(u);if(_){if(l)l(_,4);else for(const E of _)E();nl.delete(u)}},e?i?y(!0):M=u.run():a?a(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function $i(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))$i(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)$i(n[i],e,t);else if(Tl(n)||br(n))n.forEach(i=>{$i(i,e,t)});else if(Bm(n)){for(const i in n)$i(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$i(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(n,e,t,i){try{return i?n(...i):n()}catch(s){Il(s,e,t)}}function ti(n,e,t,i){if(Ye(n)){const s=no(n,e,t,i);return s&&Um(s)&&s.catch(r=>{Il(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ti(n[r],e,t,i));return s}}function Il(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||At;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(r){ns(),no(r,null,10,[n,l,c]),is();return}}bv(n,t,s,i,a)}function bv(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const vn=[];let di=-1;const Tr=[];let bs=null,xr=0;const ug=Promise.resolve();let il=null;function fg(n){const e=il||ug;return n?e.then(this?n.bind(this):n):e}function Ev(n){let e=di+1,t=vn.length;for(;e<t;){const i=e+t>>>1,s=vn[i],r=Oa(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Of(n){if(!(n.flags&1)){const e=Oa(n),t=vn[vn.length-1];!t||!(n.flags&2)&&e>=Oa(t)?vn.push(n):vn.splice(Ev(e),0,n),n.flags|=1,hg()}}function hg(){il||(il=ug.then(pg))}function Tv(n){$e(n)?Tr.push(...n):bs&&n.id===-1?bs.splice(xr+1,0,n):n.flags&1||(Tr.push(n),n.flags|=1),hg()}function kh(n,e,t=di+1){for(;t<vn.length;t++){const i=vn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;vn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dg(n){if(Tr.length){const e=[...new Set(Tr)].sort((t,i)=>Oa(t)-Oa(i));if(Tr.length=0,bs){bs.push(...e);return}for(bs=e,xr=0;xr<bs.length;xr++){const t=bs[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}bs=null,xr=0}}const Oa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pg(n){try{for(di=0;di<vn.length;di++){const e=vn[di];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;di<vn.length;di++){const e=vn[di];e&&(e.flags&=-2)}di=-1,vn.length=0,dg(),il=null,(vn.length||Tr.length)&&pg()}}let tn=null,mg=null;function sl(n){const e=tn;return tn=n,mg=n&&n.type.__scopeId||null,e}function Dr(n,e=tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ol(-1);const r=sl(e),a=Qi.length;let o;try{o=n(...s)}finally{for(let l=Qi.length;l>a;l--)Vf();sl(r),i._d&&ol(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ua(n,e){if(tn===null)return n;const t=Ol(tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=At]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&$i(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Is(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ns(),ti(l,t,8,[n.el,o,n,e]),is())}}function $o(n,e){if(fn){let t=fn.provides;const i=fn.parent&&fn.parent.provides;i===t&&(t=fn.provides=Object.create(i)),t[n]=e}}function bi(n,e,t=!1){const i=Fr();if(i||Rr){let s=Rr?Rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Av=Symbol.for("v-scx"),Rv=()=>bi(Av);function Ys(n,e,t){return gg(n,e,t)}function gg(n,e,t=At){const{immediate:i,deep:s,flush:r,once:a}=t,o=sn({},t),l=e&&i||!e&&r!=="post";let c;if(ka){if(r==="sync"){const d=Rv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=yi,d.resume=yi,d.pause=yi,d}}const u=fn;o.call=(d,g,x)=>ti(d,u,g,x);let f=!1;r==="post"?o.scheduler=d=>{bn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():Of(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=yv(n,e,o);return ka&&(c?c.push(h):l&&h()),h}function wv(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?_g(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const a=ro(this),o=gg(s,r.bind(i),t);return a(),o}function _g(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Cv=Symbol("_vte"),Pv=n=>n.__isTeleport,ic=Symbol("_leaveCb");function Uf(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Uf(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function io(n,e){return Ye(n)?sn({name:n.name},e,{setup:n}):n}function vg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Vh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const rl=new WeakMap;function Aa(n,e,t,i,s=!1){if($e(n)){n.forEach((x,m)=>Aa(x,e&&($e(e)?e[m]:e),t,i,s));return}if(Ar(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Aa(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ol(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===At?o.refs={}:o.refs,f=o.setupState,h=pt(f),d=f===At?Om:x=>Vh(u,x)?!1:mt(h,x),g=(x,m)=>!(m&&Vh(u,m));if(c!=null&&c!==l){if(Hh(e),Ft(c))u[c]=null,d(c)&&(f[c]=null);else if(nn(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Ye(l))no(l,o,12,[a,u]);else{const x=Ft(l),m=nn(l);if(x||m){const p=()=>{if(n.f){const M=x?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)$e(M)&&Tf(M,r);else if($e(M))M.includes(r)||M.push(r);else if(x)u[l]=[r],d(l)&&(f[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else x?(u[l]=a,d(l)&&(f[l]=a)):m&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const M=()=>{p(),rl.delete(n)};M.id=-1,rl.set(n,M),bn(M,t)}else Hh(n),p()}}}function Hh(n){const e=rl.get(n);e&&(e.flags|=8,rl.delete(n))}wl().requestIdleCallback;wl().cancelIdleCallback;const Ar=n=>!!n.type.__asyncLoader,xg=n=>n.type.__isKeepAlive;function Iv(n,e){Sg(n,"a",e)}function Lv(n,e){Sg(n,"da",e)}function Sg(n,e,t=fn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ll(e,i,t),t){let s=t.parent;for(;s&&s.parent;)xg(s.parent.vnode)&&Nv(i,e,t,s),s=s.parent}}function Nv(n,e,t,i){const s=Ll(e,n,i,!0);Ff(()=>{Tf(i[e],s)},t)}function Ll(n,e,t=fn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ns();const o=ro(t),l=ti(e,t,n,a);return o(),is(),l});return i?s.unshift(r):s.push(r),r}}const cs=n=>(e,t=fn)=>{(!ka||n==="sp")&&Ll(n,(...i)=>e(...i),t)},Dv=cs("bm"),Mg=cs("m"),Ov=cs("bu"),Uv=cs("u"),Fv=cs("bum"),Ff=cs("um"),Bv=cs("sp"),kv=cs("rtg"),Vv=cs("rtc");function Hv(n,e=fn){Ll("ec",n,e)}const yg="components",Gv="directives";function Ht(n,e){return bg(yg,n,!0,e)||n}const zv=Symbol.for("v-ndc");function Wv(n){return bg(Gv,n)}function bg(n,e,t=!0,i=!1){const s=tn||fn;if(s){const r=s.type;if(n===yg){const o=Cx(r,!1);if(o&&(o===e||o===Sn(e)||o===Rl(Sn(e))))return r}const a=Gh(s[n]||r[n],e)||Gh(s.appContext[n],e);return!a&&i?r:a}}function Gh(n,e){return n&&(n[e]||n[Sn(e)]||n[Rl(Sn(e))])}function Xv(n,e,t,i){let s;const r=t,a=$e(n);if(a||Ft(n)){const o=a&&Ks(n);let l=!1,c=!1;o&&(l=!Hn(n),c=ss(n),n=Cl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Nr(ei(n[u])):ei(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(St(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function $v(n,e,t={},i,s,r){if(tn.ce||tn.parent&&Ar(tn.parent)&&tn.parent.ce){const c=t,u=Object.keys(c).length>0;return It(),Or(xn,null,[lt("slot",c,i)],u?-2:64)}let a=n[e];a&&a._c&&(a._d=!1);const o=Qi.length;It();let l;try{const c=a&&Eg(a(t)),u=t.key||r||c&&c.key;l=Or(xn,{key:(u&&!Qn(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=Qi.length;u>o;u--)Vf();throw c}finally{a&&a._c&&(a._d=!0)}return l}function Eg(n){return n.some(e=>Ba(e)?!(e.type===rs||e.type===xn&&!Eg(e.children)):!0)?n:null}const lu=n=>n?Xg(n)?Ol(n):lu(n.parent):null,Ra=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>lu(n.parent),$root:n=>lu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ag(n),$forceUpdate:n=>n.f||(n.f=()=>{Of(n.update)}),$nextTick:n=>n.n||(n.n=fg.bind(n.proxy)),$watch:n=>wv.bind(n)}),sc=(n,e)=>n!==At&&!n.__isScriptSetup&&mt(n,e),qv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(sc(i,e))return a[e]=1,i[e];if(s!==At&&mt(s,e))return a[e]=2,s[e];if(mt(r,e))return a[e]=3,r[e];if(t!==At&&mt(t,e))return a[e]=4,t[e];cu&&(a[e]=0)}}const c=Ra[e];let u,f;if(c)return e==="$attrs"&&cn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==At&&mt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return sc(s,e)?(s[e]=t,!0):i!==At&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==At&&o[0]!=="$"&&mt(n,o)||sc(e,o)||mt(r,o)||mt(i,o)||mt(Ra,o)||mt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zh(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cu=!0;function Kv(n){const e=Ag(n),t=n.proxy,i=n.ctx;cu=!1,e.beforeCreate&&Wh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:_,render:E,renderTracked:A,renderTriggered:T,errorCaptured:S,serverPrefetch:I,expose:O,inheritAttrs:D,components:G,directives:ae,filters:he}=e;if(c&&Yv(c,i,null),a)for(const X in a){const ie=a[X];Ye(ie)&&(i[X]=ie.bind(t))}if(s){const X=s.call(t,t);St(X)&&(n.data=Pl(X))}if(cu=!0,r)for(const X in r){const ie=r[X],de=Ye(ie)?ie.bind(t,t):Ye(ie.get)?ie.get.bind(t,t):yi,Me=!Ye(ie)&&Ye(ie.set)?ie.set.bind(t):yi,ye=hn({get:de,set:Me});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ye.value,set:be=>ye.value=be})}if(o)for(const X in o)Tg(o[X],i,t,X);if(l){const X=Ye(l)?l.call(t):l;Reflect.ownKeys(X).forEach(ie=>{$o(ie,X[ie])})}u&&Wh(u,n,"c");function se(X,ie){$e(ie)?ie.forEach(de=>X(de.bind(t))):ie&&X(ie.bind(t))}if(se(Dv,f),se(Mg,h),se(Ov,d),se(Uv,g),se(Iv,x),se(Lv,m),se(Hv,S),se(Vv,A),se(kv,T),se(Fv,M),se(Ff,_),se(Bv,I),$e(O))if(O.length){const X=n.exposed||(n.exposed={});O.forEach(ie=>{Object.defineProperty(X,ie,{get:()=>t[ie],set:de=>t[ie]=de,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===yi&&(n.render=E),D!=null&&(n.inheritAttrs=D),G&&(n.components=G),ae&&(n.directives=ae),I&&vg(n)}function Yv(n,e,t=yi){$e(n)&&(n=uu(n));for(const i in n){const s=n[i];let r;St(s)?"default"in s?r=bi(s.from||i,s.default,!0):r=bi(s.from||i):r=bi(s),nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Wh(n,e,t){ti($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Tg(n,e,t,i){let s=i.includes(".")?_g(t,i):()=>t[i];if(Ft(n)){const r=e[n];Ye(r)&&Ys(s,r)}else if(Ye(n))Ys(s,n.bind(t));else if(St(n))if($e(n))n.forEach(r=>Tg(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Ys(s,r,n)}}function Ag(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>al(l,c,a,!0)),al(l,e,a)),St(e)&&r.set(e,l),l}function al(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&al(n,r,t,!0),s&&s.forEach(a=>al(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Zv[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Zv={data:Xh,props:$h,emits:$h,methods:va,computed:va,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:va,directives:va,watch:jv,provide:Xh,inject:Jv};function Xh(n,e){return e?n?function(){return sn(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Jv(n,e){return va(uu(n),uu(e))}function uu(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pn(n,e){return n?[...new Set([].concat(n,e))]:e}function va(n,e){return n?sn(Object.create(null),n,e):e}function $h(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:sn(Object.create(null),zh(n),zh(e??{})):e}function jv(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const i in e)t[i]=pn(n[i],e[i]);return t}function Rg(){return{app:null,config:{isNativeTag:Om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qv=0;function ex(n,e){return function(i,s=null){Ye(i)||(i=sn({},i)),s!=null&&!St(s)&&(s=null);const r=Rg(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Qv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ix,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ye(u.install)?(a.add(u),u.install(c,...f)):Ye(u)&&(a.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||lt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ol(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ti(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;const tx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Sn(e)}Modifiers`]||n[`${js(e)}Modifiers`];function nx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||At;let s=t;const r=e.startsWith("update:"),a=r&&tx(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),a.number&&(s=t.map(Rf)));let o,l=i[o=jl(e)]||i[o=jl(Sn(e))];!l&&r&&(l=i[o=jl(js(e))]),l&&ti(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ti(c,n,6,s)}}const ix=new WeakMap;function wg(n,e,t=!1){const i=t?ix:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ye(n)){const l=c=>{const u=wg(c,e,!0);u&&(o=!0,sn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(St(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):sn(a,r),St(n)&&i.set(n,a),a)}function Nl(n,e){return!n||!bl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,js(e))||mt(n,e))}function qh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:x}=n,m=sl(n);let p,M;try{if(t.shapeFlag&4){const _=s||i,E=_;p=gi(c.call(E,_,u,f,d,h,g)),M=o}else{const _=e;p=gi(_.length>1?_(f,{attrs:o,slots:a,emit:l}):_(f,null)),M=e.props?o:sx(o)}}catch(_){Qi.length=0,Il(_,n,1),p=lt(rs)}let y=p;if(M&&x!==!1){const _=Object.keys(M),{shapeFlag:E}=y;_.length&&E&7&&(r&&_.some(El)&&(M=rx(M,r)),y=Ur(y,M,!1,!0))}return t.dirs&&(y=Ur(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Uf(y,t.transition),p=y,sl(m),p}const sx=n=>{let e;for(const t in n)(t==="class"||t==="style"||bl(t))&&((e||(e={}))[t]=n[t]);return e},rx=(n,e)=>{const t={};for(const i in n)(!El(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ax(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Kh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Cg(a,i,h)&&!Nl(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Kh(i,a,c):!0:!!a;return!1}function Kh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Cg(e,n,r)&&!Nl(t,r))return!0}return!1}function Cg(n,e,t){const i=n[t],s=e[t];return t==="style"&&St(i)&&St(s)?!to(i,s):i!==s}function ox({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Pg={},Ig=()=>Object.create(Pg),Lg=n=>Object.getPrototypeOf(n)===Pg;function lx(n,e,t,i=!1){const s={},r=Ig();n.propsDefaults=Object.create(null),Ng(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:rg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function cx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=pt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Nl(n.emitsOptions,h))continue;const d=e[h];if(l)if(mt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=Sn(h);s[g]=fu(l,o,g,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Ng(n,e,s,r)&&(c=!0);let u;for(const f in o)(!e||!mt(e,f)&&((u=js(f))===f||!mt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=fu(l,o,f,void 0,n,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!mt(e,f))&&(delete r[f],c=!0)}c&&Xi(n.attrs,"set","")}function Ng(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ba(l))continue;const c=e[l];let u;s&&mt(s,u=Sn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Nl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=pt(t),c=o||At;for(let u=0;u<r.length;u++){const f=r[u];t[f]=fu(s,l,f,c[f],n,!mt(c,f))}}return a}function fu(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=mt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ro(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===js(t))&&(i=!0))}return i}const ux=new WeakMap;function Dg(n,e,t=!1){const i=t?ux:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,d]=Dg(f,e,!0);sn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return St(n)&&i.set(n,yr),yr;if($e(r))for(let u=0;u<r.length;u++){const f=Sn(r[u]);Yh(f)&&(a[f]=At)}else if(r)for(const u in r){const f=Sn(u);if(Yh(f)){const h=r[u],d=a[f]=$e(h)||Ye(h)?{type:h}:sn({},h),g=d.type;let x=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const M=g[p],y=Ye(M)&&M.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=Ye(g)&&g.name==="Boolean";d[0]=x,d[1]=m,(x||mt(d,"default"))&&o.push(f)}}const c=[a,o];return St(n)&&i.set(n,c),c}function Yh(n){return n[0]!=="$"&&!ba(n)}const Bf=n=>n==="_"||n==="_ctx"||n==="$stable",kf=n=>$e(n)?n.map(gi):[gi(n)],fx=(n,e,t)=>{if(e._n)return e;const i=Dr((...s)=>kf(e(...s)),t);return i._c=!1,i},Og=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Bf(s))continue;const r=n[s];if(Ye(r))e[s]=fx(s,r,i);else if(r!=null){const a=kf(r);e[s]=()=>a}}},Ug=(n,e)=>{const t=kf(e);n.slots.default=()=>t},Fg=(n,e,t)=>{for(const i in e)(t||!Bf(i))&&(n[i]=e[i])},hx=(n,e,t)=>{const i=n.slots=Ig();if(n.vnode.shapeFlag&32){const s=e._;s?(Fg(i,e,t),t&&km(i,"_",s,!0)):Og(e,i)}else e&&Ug(n,e)},dx=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=At;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Fg(s,e,t):(r=!e.$stable,Og(e,s)),a=e}else e&&(Ug(n,e),a={default:1});if(r)for(const o in s)!Bf(o)&&a[o]==null&&delete s[o]},bn=vx;function px(n){return mx(n)}function mx(n,e){const t=wl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=yi,insertStaticContent:g}=n,x=(L,N,F,j=null,te=null,re=null,w=void 0,P=null,B=!!N.dynamicChildren)=>{if(L===N)return;L&&!ta(L,N)&&(j=V(L),be(L,te,re,!0),L=null),N.patchFlag===-2&&(B=!1,N.dynamicChildren=null);const{type:$,ref:_e,shapeFlag:C}=N;switch($){case so:m(L,N,F,j);break;case rs:p(L,N,F,j);break;case ac:L==null&&M(N,F,j,w);break;case xn:G(L,N,F,j,te,re,w,P,B);break;default:C&1?E(L,N,F,j,te,re,w,P,B):C&6?ae(L,N,F,j,te,re,w,P,B):(C&64||C&128)&&$.process(L,N,F,j,te,re,w,P,B,me)}_e!=null&&te?Aa(_e,L&&L.ref,re,N||L,!N):_e==null&&L&&L.ref!=null&&Aa(L.ref,null,re,L,!0)},m=(L,N,F,j)=>{if(L==null)i(N.el=o(N.children),F,j);else{const te=N.el=L.el;N.children!==L.children&&c(te,N.children)}},p=(L,N,F,j)=>{L==null?i(N.el=l(N.children||""),F,j):N.el=L.el},M=(L,N,F,j)=>{[L.el,L.anchor]=g(L.children,N,F,j,L.el,L.anchor)},y=({el:L,anchor:N},F,j)=>{let te;for(;L&&L!==N;)te=h(L),i(L,F,j),L=te;i(N,F,j)},_=({el:L,anchor:N})=>{let F;for(;L&&L!==N;)F=h(L),s(L),L=F;s(N)},E=(L,N,F,j,te,re,w,P,B)=>{if(N.type==="svg"?w="svg":N.type==="math"&&(w="mathml"),L==null)A(N,F,j,te,re,w,P,B);else{const $=L.el&&L.el._isVueCE?L.el:null;try{$&&$._beginPatch(),I(L,N,te,re,w,P,B)}finally{$&&$._endPatch()}}},A=(L,N,F,j,te,re,w,P)=>{let B,$;const{props:_e,shapeFlag:C,transition:k,dirs:Y}=L;if(B=L.el=a(L.type,re,_e&&_e.is,_e),C&8?u(B,L.children):C&16&&S(L.children,B,null,j,te,rc(L,re),w,P),Y&&Is(L,null,j,"created"),T(B,L,L.scopeId,w,j),_e){for(const v in _e)v!=="value"&&!ba(v)&&r(B,v,null,_e[v],re,j);"value"in _e&&r(B,"value",null,_e.value,re),($=_e.onVnodeBeforeMount)&&li($,j,L)}Y&&Is(L,null,j,"beforeMount");const R=gx(te,k);R&&k.beforeEnter(B),i(B,N,F),(($=_e&&_e.onVnodeMounted)||R||Y)&&bn(()=>{try{$&&li($,j,L),R&&k.enter(B),Y&&Is(L,null,j,"mounted")}finally{}},te)},T=(L,N,F,j,te)=>{if(F&&d(L,F),j)for(let re=0;re<j.length;re++)d(L,j[re]);if(te){let re=te.subTree;if(N===re||Hg(re.type)&&(re.ssContent===N||re.ssFallback===N)){const w=te.vnode;T(L,w,w.scopeId,w.slotScopeIds,te.parent)}}},S=(L,N,F,j,te,re,w,P,B=0)=>{for(let $=B;$<L.length;$++){const _e=L[$]=P?Wi(L[$]):gi(L[$]);x(null,_e,N,F,j,te,re,w,P)}},I=(L,N,F,j,te,re,w)=>{const P=N.el=L.el;let{patchFlag:B,dynamicChildren:$,dirs:_e}=N;B|=L.patchFlag&16;const C=L.props||At,k=N.props||At;let Y;if(F&&Ls(F,!1),(Y=k.onVnodeBeforeUpdate)&&li(Y,F,N,L),_e&&Is(N,L,F,"beforeUpdate"),F&&Ls(F,!0),$&&(!L.dynamicChildren||L.dynamicChildren.length!==$.length)&&(B=0,w=!1,$=null),(C.innerHTML&&k.innerHTML==null||C.textContent&&k.textContent==null)&&u(P,""),$?O(L.dynamicChildren,$,P,F,j,rc(N,te),re):w||ie(L,N,P,null,F,j,rc(N,te),re,!1),B>0){if(B&16)D(P,C,k,F,te);else if(B&2&&C.class!==k.class&&r(P,"class",null,k.class,te),B&4&&r(P,"style",C.style,k.style,te),B&8){const R=N.dynamicProps;for(let v=0;v<R.length;v++){const U=R[v],q=C[U],Q=k[U];(Q!==q||U==="value")&&r(P,U,q,Q,te,F)}}B&1&&L.children!==N.children&&u(P,N.children)}else!w&&$==null&&D(P,C,k,F,te);((Y=k.onVnodeUpdated)||_e)&&bn(()=>{Y&&li(Y,F,N,L),_e&&Is(N,L,F,"updated")},j)},O=(L,N,F,j,te,re,w)=>{for(let P=0;P<N.length;P++){const B=L[P],$=N[P],_e=B.el&&(B.type===xn||!ta(B,$)||B.shapeFlag&198)?f(B.el):F;x(B,$,_e,null,j,te,re,w,!0)}},D=(L,N,F,j,te)=>{if(N!==F){if(N!==At)for(const re in N)!ba(re)&&!(re in F)&&r(L,re,N[re],null,te,j);for(const re in F){if(ba(re))continue;const w=F[re],P=N[re];w!==P&&re!=="value"&&r(L,re,P,w,te,j)}"value"in F&&r(L,"value",N.value,F.value,te)}},G=(L,N,F,j,te,re,w,P,B)=>{const $=N.el=L?L.el:o(""),_e=N.anchor=L?L.anchor:o("");let{patchFlag:C,dynamicChildren:k,slotScopeIds:Y}=N;Y&&(P=P?P.concat(Y):Y),L==null?(i($,F,j),i(_e,F,j),S(N.children||[],F,_e,te,re,w,P,B)):C>0&&C&64&&k&&L.dynamicChildren&&L.dynamicChildren.length===k.length?(O(L.dynamicChildren,k,F,te,re,w,P),(N.key!=null||te&&N===te.subTree)&&Bg(L,N,!0)):ie(L,N,F,_e,te,re,w,P,B)},ae=(L,N,F,j,te,re,w,P,B)=>{N.slotScopeIds=P,L==null?N.shapeFlag&512?te.ctx.activate(N,F,j,w,B):he(N,F,j,te,re,w,B):K(L,N,B)},he=(L,N,F,j,te,re,w)=>{const P=L.component=Ex(L,j,te);if(xg(L)&&(P.ctx.renderer=me),Tx(P,!1,w),P.asyncDep){if(te&&te.registerDep(P,se,w),!L.el){const B=P.subTree=lt(rs);p(null,B,N,F),L.placeholder=B.el}}else se(P,L,N,F,te,re,w)},K=(L,N,F)=>{const j=N.component=L.component;if(ax(L,N,F))if(j.asyncDep&&!j.asyncResolved){X(j,N,F);return}else j.next=N,j.update();else N.el=L.el,j.vnode=N},se=(L,N,F,j,te,re,w)=>{const P=()=>{if(L.isMounted){let{next:C,bu:k,u:Y,parent:R,vnode:v}=L;{const xe=kg(L);if(xe){C&&(C.el=v.el,X(L,C,w)),xe.asyncDep.then(()=>{bn(()=>{L.isUnmounted||$()},te)});return}}let U=C,q;Ls(L,!1),C?(C.el=v.el,X(L,C,w)):C=v,k&&Xo(k),(q=C.props&&C.props.onVnodeBeforeUpdate)&&li(q,R,C,v),Ls(L,!0);const Q=qh(L),ge=L.subTree;L.subTree=Q,x(ge,Q,f(ge.el),V(ge),L,te,re),C.el=Q.el,U===null&&ox(L,Q.el),Y&&bn(Y,te),(q=C.props&&C.props.onVnodeUpdated)&&bn(()=>li(q,R,C,v),te)}else{let C;const{el:k,props:Y}=N,{bm:R,m:v,parent:U,root:q,type:Q}=L,ge=Ar(N);Ls(L,!1),R&&Xo(R),!ge&&(C=Y&&Y.onVnodeBeforeMount)&&li(C,U,N),Ls(L,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(Q,L.parent?L.parent.type:void 0);const xe=L.subTree=qh(L);x(null,xe,F,j,L,te,re),N.el=xe.el}if(v&&bn(v,te),!ge&&(C=Y&&Y.onVnodeMounted)){const xe=N;bn(()=>li(C,U,xe),te)}(N.shapeFlag&256||U&&Ar(U.vnode)&&U.vnode.shapeFlag&256)&&L.a&&bn(L.a,te),L.isMounted=!0,N=F=j=null}};L.scope.on();const B=L.effect=new Xm(P);L.scope.off();const $=L.update=B.run.bind(B),_e=L.job=B.runIfDirty.bind(B);_e.i=L,_e.id=L.uid,B.scheduler=()=>Of(_e),Ls(L,!0),$()},X=(L,N,F)=>{N.component=L;const j=L.vnode.props;L.vnode=N,L.next=null,cx(L,N.props,j,F),dx(L,N.children,F),ns(),kh(L),is()},ie=(L,N,F,j,te,re,w,P,B=!1)=>{const $=L&&L.children,_e=L?L.shapeFlag:0,C=N.children,{patchFlag:k,shapeFlag:Y}=N;if(k>0){if(k&128){Me($,C,F,j,te,re,w,P,B);return}else if(k&256){de($,C,F,j,te,re,w,P,B);return}}Y&8?(_e&16&&le($,te,re),C!==$&&u(F,C)):_e&16?Y&16?Me($,C,F,j,te,re,w,P,B):le($,te,re,!0):(_e&8&&u(F,""),Y&16&&S(C,F,j,te,re,w,P,B))},de=(L,N,F,j,te,re,w,P,B)=>{L=L||yr,N=N||yr;const $=L.length,_e=N.length,C=Math.min($,_e);let k;for(k=0;k<C;k++){const Y=N[k]=B?Wi(N[k]):gi(N[k]);x(L[k],Y,F,null,te,re,w,P,B)}$>_e?le(L,te,re,!0,!1,C):S(N,F,j,te,re,w,P,B,C)},Me=(L,N,F,j,te,re,w,P,B)=>{let $=0;const _e=N.length;let C=L.length-1,k=_e-1;for(;$<=C&&$<=k;){const Y=L[$],R=N[$]=B?Wi(N[$]):gi(N[$]);if(ta(Y,R))x(Y,R,F,null,te,re,w,P,B);else break;$++}for(;$<=C&&$<=k;){const Y=L[C],R=N[k]=B?Wi(N[k]):gi(N[k]);if(ta(Y,R))x(Y,R,F,null,te,re,w,P,B);else break;C--,k--}if($>C){if($<=k){const Y=k+1,R=Y<_e?N[Y].el:j;for(;$<=k;)x(null,N[$]=B?Wi(N[$]):gi(N[$]),F,R,te,re,w,P,B),$++}}else if($>k)for(;$<=C;)be(L[$],te,re,!0),$++;else{const Y=$,R=$,v=new Map;for($=R;$<=k;$++){const ve=N[$]=B?Wi(N[$]):gi(N[$]);ve.key!=null&&v.set(ve.key,$)}let U,q=0;const Q=k-R+1;let ge=!1,xe=0;const oe=new Array(Q);for($=0;$<Q;$++)oe[$]=0;for($=Y;$<=C;$++){const ve=L[$];if(q>=Q){be(ve,te,re,!0);continue}let Ne;if(ve.key!=null)Ne=v.get(ve.key);else for(U=R;U<=k;U++)if(oe[U-R]===0&&ta(ve,N[U])){Ne=U;break}Ne===void 0?be(ve,te,re,!0):(oe[Ne-R]=$+1,Ne>=xe?xe=Ne:ge=!0,x(ve,N[Ne],F,null,te,re,w,P,B),q++)}const ue=ge?_x(oe):yr;for(U=ue.length-1,$=Q-1;$>=0;$--){const ve=R+$,Ne=N[ve],Ae=N[ve+1],Ee=ve+1<_e?Ae.el||Vg(Ae):j;oe[$]===0?x(null,Ne,F,Ee,te,re,w,P,B):ge&&(U<0||$!==ue[U]?ye(Ne,F,Ee,2):U--)}}},ye=(L,N,F,j,te=null)=>{const{el:re,type:w,transition:P,children:B,shapeFlag:$}=L;if($&6){ye(L.component.subTree,N,F,j);return}if($&128){L.suspense.move(N,F,j);return}if($&64){w.move(L,N,F,me);return}if(w===xn){i(re,N,F);for(let C=0;C<B.length;C++)ye(B[C],N,F,j);i(L.anchor,N,F);return}if(w===ac){y(L,N,F);return}if(j!==2&&$&1&&P)if(j===0)P.persisted&&!re[ic]?i(re,N,F):(P.beforeEnter(re),i(re,N,F),bn(()=>P.enter(re),te));else{const{leave:C,delayLeave:k,afterLeave:Y}=P,R=()=>{L.ctx.isUnmounted?s(re):i(re,N,F)},v=()=>{const U=re._isLeaving||!!re[ic];re._isLeaving&&re[ic](!0),P.persisted&&!U?R():C(re,()=>{R(),Y&&Y()})};k?k(re,R,v):v()}else i(re,N,F)},be=(L,N,F,j=!1,te=!1)=>{const{type:re,props:w,ref:P,children:B,dynamicChildren:$,shapeFlag:_e,patchFlag:C,dirs:k,cacheIndex:Y,memo:R}=L;if(C===-2&&(te=!1),P!=null&&(ns(),Aa(P,null,F,L,!0),is()),Y!=null&&(N.renderCache[Y]=void 0),_e&256){N.ctx.deactivate(L);return}const v=_e&1&&k,U=!Ar(L);let q;if(U&&(q=w&&w.onVnodeBeforeUnmount)&&li(q,N,L),_e&6)Je(L.component,F,j);else{if(_e&128){L.suspense.unmount(F,j);return}v&&Is(L,null,N,"beforeUnmount"),_e&64?L.type.remove(L,N,F,me,j):$&&!$.hasOnce&&(re!==xn||C>0&&C&64)?le($,N,F,!1,!0):(re===xn&&C&384||!te&&_e&16)&&le(B,N,F),j&&Ze(L)}const Q=R!=null&&Y==null;(U&&(q=w&&w.onVnodeUnmounted)||v||Q)&&bn(()=>{q&&li(q,N,L),v&&Is(L,null,N,"unmounted"),Q&&(L.el=null)},F)},Ze=L=>{const{type:N,el:F,anchor:j,transition:te}=L;if(N===xn){ct(F,j);return}if(N===ac){_(L);return}const re=()=>{s(F),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(L.shapeFlag&1&&te&&!te.persisted){const{leave:w,delayLeave:P}=te,B=()=>w(F,re);P?P(L.el,re,B):B()}else re()},ct=(L,N)=>{let F;for(;L!==N;)F=h(L),s(L),L=F;s(N)},Je=(L,N,F)=>{const{bum:j,scope:te,job:re,subTree:w,um:P,m:B,a:$}=L;Zh(B),Zh($),j&&Xo(j),te.stop(),re&&(re.flags|=8,be(w,L,N,F)),P&&bn(P,N),bn(()=>{L.isUnmounted=!0},N)},le=(L,N,F,j=!1,te=!1,re=0)=>{for(let w=re;w<L.length;w++)be(L[w],N,F,j,te)},V=L=>{if(L.shapeFlag&6)return V(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const N=h(L.anchor||L.el),F=N&&N[Cv];return F?h(F):N};let Z=!1;const ce=(L,N,F)=>{let j;L==null?N._vnode&&(be(N._vnode,null,null,!0),j=N._vnode.component):x(N._vnode||null,L,N,null,null,null,F),N._vnode=L,Z||(Z=!0,kh(j),dg(),Z=!1)},me={p:x,um:be,m:ye,r:Ze,mt:he,mc:S,pc:ie,pbc:O,n:V,o:n};return{render:ce,hydrate:void 0,createApp:ex(ce)}}function rc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ls({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function gx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bg(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Wi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Bg(a,o)),o.type===so&&(o.patchFlag===-1&&(o=s[r]=Wi(o)),o.el=a.el),o.type===rs&&!o.el&&(o.el=a.el)}}function _x(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function kg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kg(e)}function Zh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vg(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vg(e.subTree):null}const Hg=n=>n.__isSuspense;function vx(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Tv(n)}const xn=Symbol.for("v-fgt"),so=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),ac=Symbol.for("v-stc"),Qi=[];let Pn=null;function It(n=!1){Qi.push(Pn=n?null:[])}function Vf(){Qi.pop(),Pn=Qi[Qi.length-1]||null}let Fa=1;function ol(n,e=!1){Fa+=n,n<0&&Pn&&e&&(Pn.hasOnce=!0)}function Gg(n){return n.dynamicChildren=Fa>0?Pn||yr:null,Vf(),Fa>0&&Pn&&Pn.push(n),n}function Kt(n,e,t,i,s,r){return Gg(We(n,e,t,i,s,r,!0))}function Or(n,e,t,i,s){return Gg(lt(n,e,t,i,s,!0))}function Ba(n){return n?n.__v_isVNode===!0:!1}function ta(n,e){return n.type===e.type&&n.key===e.key}const zg=({key:n})=>n??null,qo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||nn(n)||Ye(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function We(n,e=null,t=null,i=0,s=null,r=n===xn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zg(e),ref:e&&qo(e),scopeId:mg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return o?(ll(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Fa>0&&!a&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const lt=xx;function xx(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===zv)&&(n=rs),Ba(n)){const o=Ur(n,e,!0);return t&&ll(o,t),Fa>0&&!r&&Pn&&(o.shapeFlag&6?Pn[Pn.indexOf(n)]=o:Pn.push(o)),o.patchFlag=-2,o}if(Px(n)&&(n=n.__vccOpts),e){e=Sx(e);let{class:o,style:l}=e;o&&!Ft(o)&&(e.class=Kn(o)),St(l)&&(Df(l)&&!$e(l)&&(l=sn({},l)),e.style=Kr(l))}const a=Ft(n)?1:Hg(n)?128:Pv(n)?64:St(n)?4:Ye(n)?2:0;return We(n,e,t,i,s,a,r,!0)}function Sx(n){return n?Df(n)||Lg(n)?sn({},n):n:null}function Ur(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Mx(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&zg(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(qo(e)):[r,qo(e)]:qo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ur(n.ssContent),ssFallback:n.ssFallback&&Ur(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Uf(u,l.clone(u)),u}function Wg(n=" ",e=0){return lt(so,null,n,e)}function Dl(n="",e=!1){return e?(It(),Or(rs,null,n)):lt(rs,null,n)}function gi(n){return n==null||typeof n=="boolean"?lt(rs):$e(n)?lt(xn,null,n.slice()):Ba(n)?Wi(n):lt(so,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ur(n)}function ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ll(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Lg(e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ye(e)){if(i&65){ll(n,{default:e});return}e={default:e,_ctx:tn},t=32}else e=String(e),i&64?(t=16,e=[Wg(e)]):t=8;n.children=e,n.shapeFlag|=t}function Mx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Kn([e.class,i.class]));else if(s==="style")e.style=Kr([e.style,i.style]);else if(bl(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!El(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function li(n,e,t,i=null){ti(n,e,7,[t,i])}const yx=Rg();let bx=0;function Ex(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||yx,r={uid:bx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dg(i,s),emitsOptions:wg(i,s),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nx.bind(null,r),n.ce&&n.ce(r),r}let fn=null;const Fr=()=>fn||tn;let cl,hu;{const n=wl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};cl=e("__VUE_INSTANCE_SETTERS__",t=>fn=t),hu=e("__VUE_SSR_SETTERS__",t=>ka=t)}const ro=n=>{const e=fn;return cl(n),n.scope.on(),()=>{n.scope.off(),cl(e)}},Jh=()=>{fn&&fn.scope.off(),cl(null)};function Xg(n){return n.vnode.shapeFlag&4}let ka=!1;function Tx(n,e=!1,t=!1){e&&hu(e);const{props:i,children:s}=n.vnode,r=Xg(n);lx(n,i,r,e),hx(n,s,t||e);const a=r?Ax(n,e):void 0;return e&&hu(!1),a}function Ax(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qv);const{setup:i}=t;if(i){ns();const s=n.setupContext=i.length>1?wx(n):null,r=ro(n),a=no(i,n,0,[n.props,s]),o=Um(a);if(is(),r(),(o||n.sp)&&!Ar(n)&&vg(n),o){if(a.then(Jh,Jh),e)return a.then(l=>{jh(n,l)}).catch(l=>{Il(l,n,0)});n.asyncDep=a}else jh(n,a)}else $g(n)}function jh(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=cg(e)),$g(n)}function $g(n,e,t){const i=n.type;n.render||(n.render=i.render||yi);{const s=ro(n);ns();try{Kv(n)}finally{is(),s()}}}const Rx={get(n,e){return cn(n,"get",""),n[e]}};function wx(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Rx),slots:n.slots,emit:n.emit,expose:e}}function Ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cg(gv(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ra)return Ra[t](n)},has(e,t){return t in e||t in Ra}})):n.proxy}function Cx(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function Px(n){return Ye(n)&&"__vccOpts"in n}const hn=(n,e)=>Sv(n,e,ka);function Ul(n,e,t){try{ol(-1);const i=arguments.length;return i===2?St(e)&&!$e(e)?Ba(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ba(t)&&(t=[t]),lt(n,e,t))}finally{ol(1)}}const Ix="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let du;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{du=Qh.createPolicy("vue",{createHTML:n=>n})}catch{}const qg=du?n=>du.createHTML(n):n=>n,Lx="http://www.w3.org/2000/svg",Nx="http://www.w3.org/1998/Math/MathML",zi=typeof document<"u"?document:null,ed=zi&&zi.createElement("template"),Dx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?zi.createElementNS(Lx,n):e==="mathml"?zi.createElementNS(Nx,n):t?zi.createElement(n,{is:t}):zi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ed.innerHTML=qg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=ed.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ox=Symbol("_vtc");function Ux(n,e,t){const i=n[Ox];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ul=Symbol("_vod"),Kg=Symbol("_vsh"),Fx={name:"show",beforeMount(n,{value:e},{transition:t}){n[ul]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):na(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),na(n,!0),i.enter(n)):i.leave(n,()=>{na(n,!1)}):na(n,e))},beforeUnmount(n,{value:e}){na(n,e)}};function na(n,e){n.style.display=e?n[ul]:"none",n[Kg]=!e}const Bx=Symbol(""),kx=/(?:^|;)\s*display\s*:/;function Vx(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&xa(i,o,"")}else for(const a in e)t[a]==null&&xa(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Gx(n,a,!Ft(e)&&e?e[a]:void 0,o)||xa(i,a,o):xa(i,a,"")}}else if(s){if(e!==t){const a=i[Bx];a&&(t+=";"+a),i.cssText=t,r=kx.test(t)}}else e&&n.removeAttribute("style");ul in n&&(n[ul]=r?i.display:"",n[Kg]&&(i.display="none"))}const td=/\s*!important$/;function xa(n,e,t){if($e(t))t.forEach(i=>xa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hx(n,e);td.test(t)?n.setProperty(js(i),t.replace(td,""),"important"):n[i]=t}}const nd=["Webkit","Moz","ms"],oc={};function Hx(n,e){const t=oc[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return oc[e]=i;i=Rl(i);for(let s=0;s<nd.length;s++){const r=nd[s]+i;if(r in n)return oc[e]=r}return e}function Gx(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ft(i)&&t===i}const id="http://www.w3.org/1999/xlink";function sd(n,e,t,i,s,r=Y0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(id,e.slice(6,e.length)):n.setAttributeNS(id,e,t):t==null||r&&!Vm(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Qn(t)?String(t):t)}function rd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?qg(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Vm(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Vs(n,e,t,i){n.addEventListener(e,t,i)}function zx(n,e,t,i){n.removeEventListener(e,t,i)}const ad=Symbol("_vei");function Wx(n,e,t,i,s=null){const r=n[ad]||(n[ad]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=qx(e);if(i){const c=r[e]=Zx(i,s);Vs(n,o,c,l)}else a&&(zx(n,o,a,l),r[e]=void 0)}}const Xx=/(Once|Passive|Capture)$/,$x=/^on:?(?:Once|Passive|Capture)$/;function qx(n){let e,t;for(;(t=n.match(Xx))&&!$x.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):js(n.slice(2)),e]}let lc=0;const Kx=Promise.resolve(),Yx=()=>lc||(Kx.then(()=>lc=0),lc=Date.now());function Zx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if($e(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&ti(c,e,5,o)}}else ti(s,e,5,[i])};return t.value=n,t.attached=Yx(),t}const od=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jx=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Ux(n,i,a):e==="style"?Vx(n,t,i):bl(e)?El(e)||Wx(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jx(n,e,i,a))?(rd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(n,e,i,a,r,e!=="value")):n._isVueCE&&(Qx(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?rd(n,Sn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),sd(n,e,i,a))};function jx(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&od(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return od(e)&&Ft(t)?!1:e in n}function Qx(n,e){const t=n._def.props;if(!t)return!1;const i=Sn(e);return Array.isArray(t)?t.some(s=>Sn(s)===i):Object.keys(t).some(s=>Sn(s)===i)}const fl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Xo(e,t):e};function eS(n){n.target.composing=!0}function ld(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wr=Symbol("_assign");function cd(n,e,t){return e&&(n=n.trim()),t&&(n=Rf(n)),n}const Yg={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[wr]=fl(s);const r=i||s.props&&s.props.type==="number";Vs(n,e?"change":"input",a=>{a.target.composing||n[wr](cd(n.value,t,r))}),(t||r)&&Vs(n,"change",()=>{n.value=cd(n.value,t,r)}),e||(Vs(n,"compositionstart",eS),Vs(n,"compositionend",ld),Vs(n,"change",ld))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[wr]=fl(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Rf(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},tS={deep:!0,created(n,e,t){n[wr]=fl(t),Vs(n,"change",()=>{const i=n._modelValue,s=nS(n),r=n.checked,a=n[wr];if($e(i)){const o=Hm(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Tl(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a(Zg(n,r))})},mounted:ud,beforeUpdate(n,e,t){n[wr]=fl(t),ud(n,e,t)}};function ud(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if($e(e))s=Hm(e,i.props.value)>-1;else if(Tl(e))s=e.has(i.props.value);else{if(e===t)return;s=to(e,Zg(n,!0))}n.checked!==s&&(n.checked=s)}function nS(n){return"_value"in n?n._value:n.value}function Zg(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const iS=sn({patchProp:Jx},Dx);let fd;function sS(){return fd||(fd=px(iS))}const rS=((...n)=>{const e=sS().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=oS(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,aS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function aS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function oS(n){return Ft(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Sr=typeof document<"u";function Jg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Jg(n.default)}const dt=Object.assign;function cc(n,e){const t={};for(const i in e){const s=e[i];t[i]=ni(s)?s.map(n):n(s)}return t}const wa=()=>{},ni=Array.isArray;function hd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const jg=/#/g,cS=/&/g,uS=/\//g,fS=/=/g,hS=/\?/g,Qg=/\+/g,dS=/%5B/g,pS=/%5D/g,e_=/%5E/g,mS=/%60/g,t_=/%7B/g,gS=/%7C/g,n_=/%7D/g,_S=/%20/g;function Hf(n){return n==null?"":encodeURI(""+n).replace(gS,"|").replace(dS,"[").replace(pS,"]")}function vS(n){return Hf(n).replace(t_,"{").replace(n_,"}").replace(e_,"^")}function pu(n){return Hf(n).replace(Qg,"%2B").replace(_S,"+").replace(jg,"%23").replace(cS,"%26").replace(mS,"`").replace(t_,"{").replace(n_,"}").replace(e_,"^")}function xS(n){return pu(n).replace(fS,"%3D")}function SS(n){return Hf(n).replace(jg,"%23").replace(hS,"%3F")}function MS(n){return SS(n).replace(uS,"%2F")}function Va(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const yS=/\/$/,bS=n=>n.replace(yS,"");function uc(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,o>0?o:e.length),s=n(r.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=RS(i??e,t),{fullPath:i+r+a,path:i,query:s,hash:Va(a)}}function ES(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function dd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function TS(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Br(e.matched[i],t.matched[s])&&i_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Br(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function i_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!AS(n[t],e[t]))return!1;return!0}function AS(n,e){return ni(n)?pd(n,e):ni(e)?pd(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function pd(n,e){return ni(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function RS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let mu=(function(n){return n.pop="pop",n.push="push",n})({}),fc=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function wS(n){if(!n)if(Sr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),bS(n)}const CS=/^[^#]+#/;function PS(n,e){return n.replace(CS,"#")+e}function IS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Fl=()=>({left:window.scrollX,top:window.scrollY});function LS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=IS(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function md(n,e){return(history.state?history.state.position-e:-1)+n}const gu=new Map;function NS(n,e){gu.set(n,e)}function DS(n){const e=gu.get(n);return gu.delete(n),e}function OS(n){return typeof n=="string"||n&&typeof n=="object"}function s_(n){return typeof n=="string"||typeof n=="symbol"}let Ot=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const r_=Symbol("");Ot.MATCHER_NOT_FOUND+"",Ot.NAVIGATION_GUARD_REDIRECT+"",Ot.NAVIGATION_ABORTED+"",Ot.NAVIGATION_CANCELLED+"",Ot.NAVIGATION_DUPLICATED+"";function kr(n,e){return dt(new Error,{type:n,[r_]:!0},e)}function Oi(n,e){return n instanceof Error&&r_ in n&&(e==null||!!(n.type&e))}const US=["params","query","hash"];function FS(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of US)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function BS(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(Qg," "),r=s.indexOf("="),a=Va(r<0?s:s.slice(0,r)),o=r<0?null:Va(s.slice(r+1));if(a in e){let l=e[a];ni(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function gd(n){let e="";for(let t in n){const i=n[t];if(t=xS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ni(i)?i.map(s=>s&&pu(s)):[i&&pu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function kS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ni(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const VS=Symbol(""),_d=Symbol(""),Gf=Symbol(""),a_=Symbol(""),_u=Symbol("");function ia(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Es(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(kr(Ot.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):OS(h)?l(kr(Ot.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[s]===a&&typeof h=="function"&&a.push(h),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function hc(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Jg(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Es(c,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=lS(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Es(h,t,i,a,o,s)()}))}}return r}function HS(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>Br(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Br(c,l))||s.push(l))}return[t,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let GS=()=>location.protocol+"//"+location.host;function o_(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,o=s.slice(a);return o[0]!=="/"&&(o="/"+o),dd(o,"")}return dd(t,n)+i+s}function zS(n,e,t,i){let s=[],r=[],a=null;const o=({state:h})=>{const d=o_(n,location),g=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,a&&a===g){a=null;return}m=x?h.position-x.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:mu.pop,direction:m?m>0?fc.forward:fc.back:fc.unknown})})};function l(){a=t.value}function c(h){s.push(h);const d=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(dt({},h.state,{scroll:Fl()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function vd(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Fl():null}}function WS(n){const{history:e,location:t}=window,i={value:o_(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:GS()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){r(l,dt({},e.state,vd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function o(l,c){const u=dt({},s.value,e.state,{forward:l,scroll:Fl()});r(u.current,u,!0),r(l,dt({},vd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function XS(n){n=wS(n);const e=WS(n),t=zS(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=dt({location:"",base:n,go:i,createHref:PS.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let zs=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Wt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Wt||{});const $S={type:zs.Static,value:""},qS=/[a-zA-Z0-9_]/;function KS(n){if(!n)return[[]];if(n==="/")return[[$S]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Wt.Static,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function f(){c&&(t===Wt.Static?r.push({type:zs.Static,value:c}):t===Wt.Param||t===Wt.ParamRegExp||t===Wt.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:zs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Wt.ParamRegExp){i=t,t=Wt.EscapeNext;continue}switch(t){case Wt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Wt.Param):h();break;case Wt.EscapeNext:h(),t=i;break;case Wt.Param:l==="("?t=Wt.ParamRegExp:qS.test(l)?h():(f(),t=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Wt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Wt.ParamRegExpEnd:u+=l;break;case Wt.ParamRegExpEnd:f(),t=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),s}const xd="[^/]+?",YS={sensitive:!1,strict:!1,start:!0,end:!0};var _n=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(_n||{});const ZS=/[.+*?^${}()[\]/\\]/g;function JS(n,e){const t=dt({},YS,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[_n.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=_n.Segment+(t.sensitive?_n.BonusCaseSensitive:0);if(h.type===zs.Static)f||(s+="/"),s+=h.value.replace(ZS,"\\$&"),d+=_n.Static;else if(h.type===zs.Param){const{value:g,repeatable:x,optional:m,regexp:p}=h;r.push({name:g,repeatable:x,optional:m});const M=p||xd;if(M!==xd){d+=_n.BonusCustomRegExp;try{`${M}`}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+_.message)}}let y=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),s+=y,d+=_n.Dynamic,m&&(d+=_n.BonusOptional),x&&(d+=_n.BonusRepeatable),M===".*"&&(d+=_n.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=_n.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===zs.Static)u+=d.value;else if(d.type===zs.Param){const{value:g,repeatable:x,optional:m}=d,p=g in c?c[g]:"";if(ni(p)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ni(p)?p.join("/"):p;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function jS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===_n.Static+_n.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===_n.Static+_n.Segment?1:-1:0}function l_(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=jS(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Sd(i))return 1;if(Sd(s))return-1}return s.length-i.length}function Sd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const QS={strict:!1,end:!0,sensitive:!1};function eM(n,e,t){const i=JS(KS(n.path),t),s=dt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tM(n,e){const t=[],i=new Map;e=hd(QS,e);function s(f){return i.get(f)}function r(f,h,d){const g=!d,x=yd(f);x.aliasOf=d&&d.record;const m=hd(e,f),p=[x];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of _)p.push(yd(dt({},x,{components:d?d.record.components:x.components,path:E,aliasOf:d?d.record:x})))}let M,y;for(const _ of p){const{path:E}=_;if(h&&E[0]!=="/"){const A=h.record.path,T=A[A.length-1]==="/"?"":"/";_.path=h.record.path+(E&&T+E)}if(M=eM(_,h,m),d?d.alias.push(M):(y=y||M,y!==M&&y.alias.push(M),g&&f.name&&!bd(M)&&a(f.name)),c_(M)&&l(M),x.children){const A=x.children;for(let T=0;T<A.length;T++)r(A[T],M,d&&d.children[T])}d=d||M}return y?()=>{a(y)}:wa}function a(f){if(s_(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=sM(f,t);t.splice(h,0,f),f.record.name&&!bd(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw kr(Ot.MATCHER_NOT_FOUND,{location:f});m=d.record.name,g=dt(Md(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Md(f.params,d.keys.map(y=>y.name))),x=d.stringify(g)}else if(f.path!=null)x=f.path,d=t.find(y=>y.re.test(x)),d&&(g=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw kr(Ot.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,g=dt({},h.params,f.params),x=d.stringify(g)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:x,params:g,matched:p,meta:iM(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Md(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function yd(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:nM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function bd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function iM(n){return n.reduce((e,t)=>dt(e,t.meta),{})}function sM(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;l_(n,e[r])<0?i=r:t=r+1}const s=rM(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function rM(n){let e=n;for(;e=e.parent;)if(c_(e)&&l_(n,e)===0)return e}function c_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ed(n){const e=bi(Gf),t=bi(a_),i=hn(()=>{const l=Er(n.to);return e.resolve(l)}),s=hn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Br.bind(null,u));if(h>-1)return h;const d=Td(l[c-2]);return c>1&&Td(u)===d&&f[f.length-1].path!==d?f.findIndex(Br.bind(null,l[c-2])):h}),r=hn(()=>s.value>-1&&uM(t.params,i.value.params)),a=hn(()=>s.value>-1&&s.value===t.matched.length-1&&i_(t.params,i.value.params));function o(l={}){if(cM(l)){const c=e[Er(n.replace)?"replace":"push"](Er(n.to)).catch(wa);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:hn(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function aM(n){return n.length===1?n[0]:n}const oM=io({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ed,setup(n,{slots:e}){const t=Pl(Ed(n)),{options:i}=bi(Gf),s=hn(()=>({[Ad(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Ad(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&aM(e.default(t));return n.custom?r:Ul("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),lM=oM;function cM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function uM(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ni(s)||s.length!==i.length||i.some((r,a)=>r.valueOf()!==s[a].valueOf()))return!1}return!0}function Td(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ad=(n,e,t)=>n??e??t,fM=io({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=bi(_u),s=hn(()=>n.route||i.value),r=bi(_d,0),a=hn(()=>{let c=Er(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=hn(()=>s.value.matched[a.value]);$o(_d,hn(()=>a.value+1)),$o(VS,o),$o(_u,s);const l=ag();return Ys(()=>[l.value,o.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Br(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Rd(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Ul(h,dt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Rd(t.default,{Component:m,route:c})||m}}});function Rd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const hM=fM;function dM(n){const e=tM(n.routes,n),t=n.parseQuery||BS,i=n.stringifyQuery||gd,s=n.history,r=ia(),a=ia(),o=ia(),l=og(ps);let c=ps;Sr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cc.bind(null,V=>""+V),f=cc.bind(null,MS),h=cc.bind(null,Va);function d(V,Z){let ce,me;return s_(V)?(ce=e.getRecordMatcher(V),me=Z):me=V,e.addRoute(me,ce)}function g(V){const Z=e.getRecordMatcher(V);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function p(V,Z){if(Z=dt({},Z||l.value),typeof V=="string"){const F=uc(t,V,Z.path),j=e.resolve({path:F.path},Z),te=s.createHref(F.fullPath);return dt(F,j,{params:h(j.params),hash:Va(F.hash),redirectedFrom:void 0,href:te})}let ce;if(V.path!=null)ce=dt({},V,{path:uc(t,V.path,Z.path).path});else{const F=dt({},V.params);for(const j in F)F[j]==null&&delete F[j];ce=dt({},V,{params:f(F)}),Z.params=f(Z.params)}const me=e.resolve(ce,Z),Se=V.hash||"";me.params=u(h(me.params));const L=ES(i,dt({},V,{hash:vS(Se),path:me.path})),N=s.createHref(L);return dt({fullPath:L,hash:Se,query:i===gd?kS(V.query):V.query||{}},me,{redirectedFrom:void 0,href:N})}function M(V){return typeof V=="string"?uc(t,V,l.value.path):dt({},V)}function y(V,Z){if(c!==V)return kr(Ot.NAVIGATION_CANCELLED,{from:Z,to:V})}function _(V){return T(V)}function E(V){return _(dt(M(V),{replace:!0}))}function A(V,Z){const ce=V.matched[V.matched.length-1];if(ce&&ce.redirect){const{redirect:me}=ce;let Se=typeof me=="function"?me(V,Z):me;return typeof Se=="string"&&(Se=Se.includes("?")||Se.includes("#")?Se=M(Se):{path:Se},Se.params={}),dt({query:V.query,hash:V.hash,params:Se.path!=null?{}:V.params},Se)}}function T(V,Z){const ce=c=p(V),me=l.value,Se=V.state,L=V.force,N=V.replace===!0,F=A(ce,me);if(F)return T(dt(M(F),{state:typeof F=="object"?dt({},Se,F.state):Se,force:L,replace:N}),Z||ce);const j=ce;j.redirectedFrom=Z;let te;return!L&&TS(i,me,ce)&&(te=kr(Ot.NAVIGATION_DUPLICATED,{to:j,from:me}),ye(me,me,!0,!1)),(te?Promise.resolve(te):O(j,me)).catch(re=>Oi(re)?Oi(re,Ot.NAVIGATION_GUARD_REDIRECT)?re:Me(re):ie(re,j,me)).then(re=>{if(re){if(Oi(re,Ot.NAVIGATION_GUARD_REDIRECT))return T(dt({replace:N},M(re.to),{state:typeof re.to=="object"?dt({},Se,re.to.state):Se,force:L}),Z||j)}else re=G(j,me,!0,N,Se);return D(j,me,re),re})}function S(V,Z){const ce=y(V,Z);return ce?Promise.reject(ce):Promise.resolve()}function I(V){const Z=ct.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(V):V()}function O(V,Z){let ce;const[me,Se,L]=HS(V,Z);ce=hc(me.reverse(),"beforeRouteLeave",V,Z);for(const F of me)F.leaveGuards.forEach(j=>{ce.push(Es(j,V,Z))});const N=S.bind(null,V,Z);return ce.push(N),le(ce).then(()=>{ce=[];for(const F of r.list())ce.push(Es(F,V,Z));return ce.push(N),le(ce)}).then(()=>{ce=hc(Se,"beforeRouteUpdate",V,Z);for(const F of Se)F.updateGuards.forEach(j=>{ce.push(Es(j,V,Z))});return ce.push(N),le(ce)}).then(()=>{ce=[];for(const F of L)if(F.beforeEnter)if(ni(F.beforeEnter))for(const j of F.beforeEnter)ce.push(Es(j,V,Z));else ce.push(Es(F.beforeEnter,V,Z));return ce.push(N),le(ce)}).then(()=>(V.matched.forEach(F=>F.enterCallbacks={}),ce=hc(L,"beforeRouteEnter",V,Z,I),ce.push(N),le(ce))).then(()=>{ce=[];for(const F of a.list())ce.push(Es(F,V,Z));return ce.push(N),le(ce)}).catch(F=>Oi(F,Ot.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function D(V,Z,ce){o.list().forEach(me=>I(()=>me(V,Z,ce)))}function G(V,Z,ce,me,Se){const L=y(V,Z);if(L)return L;const N=Z===ps,F=Sr?history.state:{};ce&&(me||N?s.replace(V.fullPath,dt({scroll:N&&F&&F.scroll},Se)):s.push(V.fullPath,Se)),l.value=V,ye(V,Z,ce,N),Me()}let ae;function he(){ae||(ae=s.listen((V,Z,ce)=>{if(!Je.listening)return;const me=p(V),Se=A(me,Je.currentRoute.value);if(Se){T(dt(Se,{replace:!0,force:!0}),me).catch(wa);return}c=me;const L=l.value;Sr&&NS(md(L.fullPath,ce.delta),Fl()),O(me,L).catch(N=>Oi(N,Ot.NAVIGATION_ABORTED|Ot.NAVIGATION_CANCELLED)?N:Oi(N,Ot.NAVIGATION_GUARD_REDIRECT)?(T(dt(M(N.to),{force:!0}),me).then(F=>{Oi(F,Ot.NAVIGATION_ABORTED|Ot.NAVIGATION_DUPLICATED)&&!ce.delta&&ce.type===mu.pop&&s.go(-1,!1)}).catch(wa),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),ie(N,me,L))).then(N=>{N=N||G(me,L,!1),N&&(ce.delta&&!Oi(N,Ot.NAVIGATION_CANCELLED)?s.go(-ce.delta,!1):ce.type===mu.pop&&Oi(N,Ot.NAVIGATION_ABORTED|Ot.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),D(me,L,N)}).catch(wa)}))}let K=ia(),se=ia(),X;function ie(V,Z,ce){Me(V);const me=se.list();return me.length?me.forEach(Se=>Se(V,Z,ce)):console.error(V),Promise.reject(V)}function de(){return X&&l.value!==ps?Promise.resolve():new Promise((V,Z)=>{K.add([V,Z])})}function Me(V){return X||(X=!V,he(),K.list().forEach(([Z,ce])=>V?ce(V):Z()),K.reset()),V}function ye(V,Z,ce,me){const{scrollBehavior:Se}=n;if(!Sr||!Se)return Promise.resolve();const L=!ce&&DS(md(V.fullPath,0))||(me||!ce)&&history.state&&history.state.scroll||null;return fg().then(()=>Se(V,Z,L)).then(N=>N&&LS(N)).catch(N=>ie(N,V,Z))}const be=V=>s.go(V);let Ze;const ct=new Set,Je={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:_,replace:E,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:se.add,isReady:de,install(V){V.component("RouterLink",lM),V.component("RouterView",hM),V.config.globalProperties.$router=Je,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Er(l)}),Sr&&!Ze&&l.value===ps&&(Ze=!0,_(s.location).catch(me=>{}));const Z={};for(const me in ps)Object.defineProperty(Z,me,{get:()=>l.value[me],enumerable:!0});V.provide(Gf,Je),V.provide(a_,rg(Z)),V.provide(_u,l);const ce=V.unmount;ct.add(V),V.unmount=function(){ct.delete(V),ct.size<1&&(c=ps,ae&&ae(),ae=null,l.value=ps,Ze=!1,X=!1),ce()}}};function le(V){return V.reduce((Z,ce)=>Z.then(()=>I(ce)),Promise.resolve())}return Je}const rn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},pM={props:{imgSrc:String,title:String,path:String,disabled:Boolean},data(){return{imageLoaded:!1,fontsLoaded:!1}},methods:{onFontsLoaded(){return n=>{setTimeout(()=>{this.fontsLoaded=!0},10)}}},mounted(){this.$props.disabled===!0&&this.$refs.card.classList.add("disabled"),document.fonts.ready.then(this.onFontsLoaded())}},mM={class:"card",ref:"card"},gM=["alt","src"];function _M(n,e,t,i,s,r){const a=Ht("router-link");return It(),Or(a,{class:"router-link-card",disabled:t.disabled==!0,to:t.path},{default:Dr(()=>[We("div",mM,[Ua(We("img",{onLoad:e[0]||(e[0]=o=>s.imageLoaded=!0),alt:t.title,src:`/images/${t.imgSrc}`},null,40,gM),[[Fx,s.imageLoaded]]),e[1]||(e[1]=We("hr",null,null,-1)),We("p",null,wi(t.title),1)],512)]),_:1},8,["disabled","to"])}const vM=rn(pM,[["render",_M],["__scopeId","data-v-2fd444b8"]]);function xM(n){return n[Math.round(qi(0,n.length-1))]}function qi(n,e){return Math.floor(Math.random()*(e-n+1)+n)}function SM(n){return n.sort(()=>Math.random()-.5)}/*!
  * shared v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function MM(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const hl=typeof window<"u",Rs=(n,e=!1)=>e?Symbol.for(n):Symbol(n),yM=(n,e,t)=>bM({l:n,k:e,s:t}),bM=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Vt=n=>typeof n=="number"&&isFinite(n),EM=n=>zf(n)==="[object Date]",Vr=n=>zf(n)==="[object RegExp]",Bl=n=>it(n)&&Object.keys(n).length===0,qt=Object.assign,TM=Object.create,bt=(n=null)=>TM(n);let wd;const Ws=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:bt());function Cd(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Pd(n){return n.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function AM(n){return n=n.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,s,r)=>`${s}="${Pd(r)}"`),n=n.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,s,r)=>`${s}='${Pd(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(n)&&(n=n.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{n=n.replace(i,"$1javascript&#58;")}),n}const RM=Object.prototype.hasOwnProperty;function Yn(n,e){return RM.call(n,e)}const Ut=Array.isArray,Pt=n=>typeof n=="function",Le=n=>typeof n=="string",ft=n=>typeof n=="boolean",ht=n=>n!==null&&typeof n=="object",wM=n=>ht(n)&&Pt(n.then)&&Pt(n.catch),u_=Object.prototype.toString,zf=n=>u_.call(n),it=n=>zf(n)==="[object Object]",CM=n=>n==null?"":Ut(n)||it(n)&&n.toString===u_?JSON.stringify(n,null,2):String(n);function Wf(n,e=""){return n.reduce((t,i,s)=>s===0?t+i:t+e+i,"")}const po=n=>!ht(n)||Ut(n);function Ko(n,e){if(po(n)||po(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:s}=t.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(ht(i[r])&&!ht(s[r])&&(s[r]=Array.isArray(i[r])?[]:bt()),po(s[r])||po(i[r])?s[r]=i[r]:t.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function PM(n,e,t){return{line:n,column:e,offset:t}}function vu(n,e,t){return{start:n,end:e}}const _t={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},IM=17;function kl(n,e,t={}){const{domain:i,messages:s,args:r}=t,a=n,o=new SyntaxError(String(a));return o.code=n,e&&(o.location=e),o.domain=i,o}function LM(n){throw n}const Ui=" ",NM="\r",gn=`
`,DM="\u2028",OM="\u2029";function UM(n){const e=n;let t=0,i=1,s=1,r=0;const a=T=>e[T]===NM&&e[T+1]===gn,o=T=>e[T]===gn,l=T=>e[T]===OM,c=T=>e[T]===DM,u=T=>a(T)||o(T)||l(T)||c(T),f=()=>t,h=()=>i,d=()=>s,g=()=>r,x=T=>a(T)||l(T)||c(T)?gn:e[T],m=()=>x(t),p=()=>x(t+r);function M(){return r=0,u(t)&&(i++,s=0),a(t)&&t++,t++,s++,e[t]}function y(){return a(t+r)&&r++,r++,e[t+r]}function _(){t=0,i=1,s=1,r=0}function E(T=0){r=T}function A(){const T=t+r;for(;T!==t;)M();r=0}return{index:f,line:h,column:d,peekOffset:g,charAt:x,currentChar:m,currentPeek:p,next:M,peek:y,reset:_,resetPeek:E,skipToPeek:A}}const ms=void 0,FM=".",Id="'",BM="tokenizer";function kM(n,e={}){const t=e.location!==!1,i=UM(n),s=()=>i.index(),r=()=>PM(i.line(),i.column(),i.index()),a=r(),o=s(),l={currentType:13,offset:o,startLoc:a,endLoc:a,lastType:13,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,P,B,...$){const _e=c();if(P.column+=B,P.offset+=B,u){const C=t?vu(_e.startLoc,P):null,k=kl(w,C,{domain:BM,args:$});u(k)}}function h(w,P,B){w.endLoc=r(),w.currentType=P;const $={type:P};return t&&($.loc=vu(w.startLoc,w.endLoc)),B!=null&&($.value=B),$}const d=w=>h(w,13);function g(w,P){return w.currentChar()===P?(w.next(),P):(f(_t.EXPECTED_TOKEN,r(),0,P),"")}function x(w){let P="";for(;w.currentPeek()===Ui||w.currentPeek()===gn;)P+=w.currentPeek(),w.peek();return P}function m(w){const P=x(w);return w.skipToPeek(),P}function p(w){if(w===ms)return!1;const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P===95}function M(w){if(w===ms)return!1;const P=w.charCodeAt(0);return P>=48&&P<=57}function y(w,P){const{currentType:B}=P;if(B!==2)return!1;x(w);const $=p(w.currentPeek());return w.resetPeek(),$}function _(w,P){const{currentType:B}=P;if(B!==2)return!1;x(w);const $=w.currentPeek()==="-"?w.peek():w.currentPeek(),_e=M($);return w.resetPeek(),_e}function E(w,P){const{currentType:B}=P;if(B!==2)return!1;x(w);const $=w.currentPeek()===Id;return w.resetPeek(),$}function A(w,P){const{currentType:B}=P;if(B!==7)return!1;x(w);const $=w.currentPeek()===".";return w.resetPeek(),$}function T(w,P){const{currentType:B}=P;if(B!==8)return!1;x(w);const $=p(w.currentPeek());return w.resetPeek(),$}function S(w,P){const{currentType:B}=P;if(!(B===7||B===11))return!1;x(w);const $=w.currentPeek()===":";return w.resetPeek(),$}function I(w,P){const{currentType:B}=P;if(B!==9)return!1;const $=()=>{const C=w.currentPeek();return C==="{"?p(w.peek()):C==="@"||C==="|"||C===":"||C==="."||C===Ui||!C?!1:C===gn?(w.peek(),$()):D(w,!1)},_e=$();return w.resetPeek(),_e}function O(w){x(w);const P=w.currentPeek()==="|";return w.resetPeek(),P}function D(w,P=!0){const B=(_e=!1,C="")=>{const k=w.currentPeek();return k==="{"||k==="@"||!k?_e:k==="|"?!(C===Ui||C===gn):k===Ui?(w.peek(),B(!0,Ui)):k===gn?(w.peek(),B(!0,gn)):!0},$=B();return P&&w.resetPeek(),$}function G(w,P){const B=w.currentChar();return B===ms?ms:P(B)?(w.next(),B):null}function ae(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36}function he(w){return G(w,ae)}function K(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36||P===45}function se(w){return G(w,K)}function X(w){const P=w.charCodeAt(0);return P>=48&&P<=57}function ie(w){return G(w,X)}function de(w){const P=w.charCodeAt(0);return P>=48&&P<=57||P>=65&&P<=70||P>=97&&P<=102}function Me(w){return G(w,de)}function ye(w){let P="",B="";for(;P=ie(w);)B+=P;return B}function be(w){let P="";for(;;){const B=w.currentChar();if(B==="{"||B==="}"||B==="@"||B==="|"||!B)break;if(B===Ui||B===gn)if(D(w))P+=B,w.next();else{if(O(w))break;P+=B,w.next()}else P+=B,w.next()}return P}function Ze(w){m(w);let P="",B="";for(;P=se(w);)B+=P;return w.currentChar()===ms&&f(_t.UNTERMINATED_CLOSING_BRACE,r(),0),B}function ct(w){m(w);let P="";return w.currentChar()==="-"?(w.next(),P+=`-${ye(w)}`):P+=ye(w),w.currentChar()===ms&&f(_t.UNTERMINATED_CLOSING_BRACE,r(),0),P}function Je(w){return w!==Id&&w!==gn}function le(w){m(w),g(w,"'");let P="",B="";for(;P=G(w,Je);)P==="\\"?B+=V(w):B+=P;const $=w.currentChar();return $===gn||$===ms?(f(_t.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),$===gn&&(w.next(),g(w,"'")),B):(g(w,"'"),B)}function V(w){const P=w.currentChar();switch(P){case"\\":case"'":return w.next(),`\\${P}`;case"u":return Z(w,P,4);case"U":return Z(w,P,6);default:return f(_t.UNKNOWN_ESCAPE_SEQUENCE,r(),0,P),""}}function Z(w,P,B){g(w,P);let $="";for(let _e=0;_e<B;_e++){const C=Me(w);if(!C){f(_t.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${P}${$}${w.currentChar()}`);break}$+=C}return`\\${P}${$}`}function ce(w){return w!=="{"&&w!=="}"&&w!==Ui&&w!==gn}function me(w){m(w);let P="",B="";for(;P=G(w,ce);)B+=P;return B}function Se(w){let P="",B="";for(;P=he(w);)B+=P;return B}function L(w){const P=B=>{const $=w.currentChar();return $==="{"||$==="@"||$==="|"||$==="("||$===")"||!$||$===Ui?B:(B+=$,w.next(),P(B))};return P("")}function N(w){m(w);const P=g(w,"|");return m(w),P}function F(w,P){let B=null;switch(w.currentChar()){case"{":return P.braceNest>=1&&f(_t.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),w.next(),B=h(P,2,"{"),m(w),P.braceNest++,B;case"}":return P.braceNest>0&&P.currentType===2&&f(_t.EMPTY_PLACEHOLDER,r(),0),w.next(),B=h(P,3,"}"),P.braceNest--,P.braceNest>0&&m(w),P.inLinked&&P.braceNest===0&&(P.inLinked=!1),B;case"@":return P.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,r(),0),B=j(w,P)||d(P),P.braceNest=0,B;default:{let _e=!0,C=!0,k=!0;if(O(w))return P.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,r(),0),B=h(P,1,N(w)),P.braceNest=0,P.inLinked=!1,B;if(P.braceNest>0&&(P.currentType===4||P.currentType===5||P.currentType===6))return f(_t.UNTERMINATED_CLOSING_BRACE,r(),0),P.braceNest=0,te(w,P);if(_e=y(w,P))return B=h(P,4,Ze(w)),m(w),B;if(C=_(w,P))return B=h(P,5,ct(w)),m(w),B;if(k=E(w,P))return B=h(P,6,le(w)),m(w),B;if(!_e&&!C&&!k)return B=h(P,12,me(w)),f(_t.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,B.value),m(w),B;break}}return B}function j(w,P){const{currentType:B}=P;let $=null;const _e=w.currentChar();switch((B===7||B===8||B===11||B===9)&&(_e===gn||_e===Ui)&&f(_t.INVALID_LINKED_FORMAT,r(),0),_e){case"@":return w.next(),$=h(P,7,"@"),P.inLinked=!0,$;case".":return m(w),w.next(),h(P,8,".");case":":return m(w),w.next(),h(P,9,":");default:return O(w)?($=h(P,1,N(w)),P.braceNest=0,P.inLinked=!1,$):A(w,P)||S(w,P)?(m(w),j(w,P)):T(w,P)?(m(w),h(P,11,Se(w))):I(w,P)?(m(w),_e==="{"?F(w,P)||$:h(P,10,L(w))):(B===7&&f(_t.INVALID_LINKED_FORMAT,r(),0),P.braceNest=0,P.inLinked=!1,te(w,P))}}function te(w,P){let B={type:13};if(P.braceNest>0)return F(w,P)||d(P);if(P.inLinked)return j(w,P)||d(P);switch(w.currentChar()){case"{":return F(w,P)||d(P);case"}":return f(_t.UNBALANCED_CLOSING_BRACE,r(),0),w.next(),h(P,3,"}");case"@":return j(w,P)||d(P);default:{if(O(w))return B=h(P,1,N(w)),P.braceNest=0,P.inLinked=!1,B;if(D(w))return h(P,0,be(w));break}}return B}function re(){const{currentType:w,offset:P,startLoc:B,endLoc:$}=l;return l.lastType=w,l.lastOffset=P,l.lastStartLoc=B,l.lastEndLoc=$,l.offset=s(),l.startLoc=r(),i.currentChar()===ms?h(l,13):te(i,l)}return{nextToken:re,currentOffset:s,currentPosition:r,context:c}}const VM="parser",HM=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function GM(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function zM(n={}){const e=n.location!==!1,{onError:t}=n;function i(p,M,y,_,...E){const A=p.currentPosition();if(A.offset+=_,A.column+=_,t){const T=e?vu(y,A):null,S=kl(M,T,{domain:VM,args:E});t(S)}}function s(p,M,y){const _={type:p};return e&&(_.start=M,_.end=M,_.loc={start:y,end:y}),_}function r(p,M,y,_){e&&(p.end=M,p.loc&&(p.loc.end=y))}function a(p,M){const y=p.context(),_=s(3,y.offset,y.startLoc);return _.value=M,r(_,p.currentOffset(),p.currentPosition()),_}function o(p,M){const y=p.context(),{lastOffset:_,lastStartLoc:E}=y,A=s(5,_,E);return A.index=parseInt(M,10),p.nextToken(),r(A,p.currentOffset(),p.currentPosition()),A}function l(p,M){const y=p.context(),{lastOffset:_,lastStartLoc:E}=y,A=s(4,_,E);return A.key=M,p.nextToken(),r(A,p.currentOffset(),p.currentPosition()),A}function c(p,M){const y=p.context(),{lastOffset:_,lastStartLoc:E}=y,A=s(9,_,E);return A.value=M.replace(HM,GM),p.nextToken(),r(A,p.currentOffset(),p.currentPosition()),A}function u(p){const M=p.nextToken(),y=p.context(),{lastOffset:_,lastStartLoc:E}=y,A=s(8,_,E);return M.type!==11?(i(p,_t.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),A.value="",r(A,_,E),{nextConsumeToken:M,node:A}):(M.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,ci(M)),A.value=M.value||"",r(A,p.currentOffset(),p.currentPosition()),{node:A})}function f(p,M){const y=p.context(),_=s(7,y.offset,y.startLoc);return _.value=M,r(_,p.currentOffset(),p.currentPosition()),_}function h(p){const M=p.context(),y=s(6,M.offset,M.startLoc);let _=p.nextToken();if(_.type===8){const E=u(p);y.modifier=E.node,_=E.nextConsumeToken||p.nextToken()}switch(_.type!==9&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(_)),_=p.nextToken(),_.type===2&&(_=p.nextToken()),_.type){case 10:_.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(_)),y.key=f(p,_.value||"");break;case 4:_.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(_)),y.key=l(p,_.value||"");break;case 5:_.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(_)),y.key=o(p,_.value||"");break;case 6:_.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(_)),y.key=c(p,_.value||"");break;default:{i(p,_t.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const E=p.context(),A=s(7,E.offset,E.startLoc);return A.value="",r(A,E.offset,E.startLoc),y.key=A,r(y,E.offset,E.startLoc),{nextConsumeToken:_,node:y}}}return r(y,p.currentOffset(),p.currentPosition()),{node:y}}function d(p){const M=p.context(),y=M.currentType===1?p.currentOffset():M.offset,_=M.currentType===1?M.endLoc:M.startLoc,E=s(2,y,_);E.items=[];let A=null;do{const I=A||p.nextToken();switch(A=null,I.type){case 0:I.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(I)),E.items.push(a(p,I.value||""));break;case 5:I.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(I)),E.items.push(o(p,I.value||""));break;case 4:I.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(I)),E.items.push(l(p,I.value||""));break;case 6:I.value==null&&i(p,_t.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,ci(I)),E.items.push(c(p,I.value||""));break;case 7:{const O=h(p);E.items.push(O.node),A=O.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const T=M.currentType===1?M.lastOffset:p.currentOffset(),S=M.currentType===1?M.lastEndLoc:p.currentPosition();return r(E,T,S),E}function g(p,M,y,_){const E=p.context();let A=_.items.length===0;const T=s(1,M,y);T.cases=[],T.cases.push(_);do{const S=d(p);A||(A=S.items.length===0),T.cases.push(S)}while(E.currentType!==13);return A&&i(p,_t.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),r(T,p.currentOffset(),p.currentPosition()),T}function x(p){const M=p.context(),{offset:y,startLoc:_}=M,E=d(p);return M.currentType===13?E:g(p,y,_,E)}function m(p){const M=kM(p,qt({},n)),y=M.context(),_=s(0,y.offset,y.startLoc);return e&&_.loc&&(_.loc.source=p),_.body=x(M),n.onCacheKey&&(_.cacheKey=n.onCacheKey(p)),y.currentType!==13&&i(M,_t.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,p[y.offset]||""),r(_,M.currentOffset(),M.currentPosition()),_}return{parse:m}}function ci(n){if(n.type===13)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function WM(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function Ld(n,e){for(let t=0;t<n.length;t++)Xf(n[t],e)}function Xf(n,e){switch(n.type){case 1:Ld(n.cases,e),e.helper("plural");break;case 2:Ld(n.items,e);break;case 6:{Xf(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function XM(n,e={}){const t=WM(n);t.helper("normalize"),n.body&&Xf(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function $M(n){const e=n.body;return e.type===2?Nd(e):e.cases.forEach(t=>Nd(t)),n}function Nd(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Wf(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}function Mr(n){switch(n.t=n.type,n.type){case 0:{const e=n;Mr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)Mr(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)Mr(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;Mr(e.key),e.k=e.key,delete e.key,e.modifier&&(Mr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}}delete n.type}function qM(n,e){const{filename:t,breakLineCode:i,needIndent:s}=e,r=e.location!==!1,a={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};r&&n.loc&&(a.source=n.loc.source);const o=()=>a;function l(x,m){a.code+=x}function c(x,m=!0){const p=m?i:"";l(s?p+"  ".repeat(x):p)}function u(x=!0){const m=++a.indentLevel;x&&c(m)}function f(x=!0){const m=--a.indentLevel;x&&c(m)}function h(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>a.needIndent}}function KM(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Hr(n,e.key),e.modifier?(n.push(", "),Hr(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function YM(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const s=e.items.length;for(let r=0;r<s&&(Hr(n,e.items[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}function ZM(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const s=e.cases.length;for(let r=0;r<s&&(Hr(n,e.cases[r]),r!==s-1);r++)n.push(", ");n.deindent(i()),n.push("])")}}function JM(n,e){e.body?Hr(n,e.body):n.push("null")}function Hr(n,e){const{helper:t}=n;switch(e.type){case 0:JM(n,e);break;case 1:ZM(n,e);break;case 2:YM(n,e);break;case 6:KM(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break}}const jM=(n,e={})=>{const t=Le(e.mode)?e.mode:"normal",i=Le(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,r=e.needIndent?e.needIndent:t!=="arrow",a=n.helpers||[],o=qM(n,{filename:i,breakLineCode:s,needIndent:r});o.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(r),a.length>0&&(o.push(`const { ${Wf(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),Hr(o,n),o.deindent(r),o.push("}"),delete n.helpers;const{code:l,map:c}=o.context();return{ast:n,code:l,map:c?c.toJSON():void 0}};function QM(n,e={}){const t=qt({},e),i=!!t.jit,s=!!t.minify,r=t.optimize==null?!0:t.optimize,o=zM(t).parse(n);return i?(r&&$M(o),s&&Mr(o),{ast:o,code:""}):(XM(o,t),jM(o,t))}/*!
  * core-base v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function ey(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ws().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ws().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ei(n){return ht(n)&&$f(n)===0&&(Yn(n,"b")||Yn(n,"body"))}const f_=["b","body"];function ty(n){return ws(n,f_)}const h_=["c","cases"];function ny(n){return ws(n,h_,[])}const d_=["s","static"];function iy(n){return ws(n,d_)}const p_=["i","items"];function sy(n){return ws(n,p_,[])}const m_=["t","type"];function $f(n){return ws(n,m_)}const g_=["v","value"];function mo(n,e){const t=ws(n,g_);if(t!=null)return t;throw Ha(e)}const __=["m","modifier"];function ry(n){return ws(n,__)}const v_=["k","key"];function ay(n){const e=ws(n,v_);if(e)return e;throw Ha(6)}function ws(n,e,t){for(let i=0;i<e.length;i++){const s=e[i];if(Yn(n,s)&&n[s]!=null)return n[s]}return t}const x_=[...f_,...h_,...d_,...p_,...v_,...__,...g_,...m_];function Ha(n){return new Error(`unhandled node type: ${n}`)}function dc(n){return t=>oy(t,n)}function oy(n,e){const t=ty(e);if(t==null)throw Ha(0);if($f(t)===1){const r=ny(t);return n.plural(r.reduce((a,o)=>[...a,Dd(n,o)],[]))}else return Dd(n,t)}function Dd(n,e){const t=iy(e);if(t!=null)return n.type==="text"?t:n.normalize([t]);{const i=sy(e).reduce((s,r)=>[...s,xu(n,r)],[]);return n.normalize(i)}}function xu(n,e){const t=$f(e);switch(t){case 3:return mo(e,t);case 9:return mo(e,t);case 4:{const i=e;if(Yn(i,"k")&&i.k)return n.interpolate(n.named(i.k));if(Yn(i,"key")&&i.key)return n.interpolate(n.named(i.key));throw Ha(t)}case 5:{const i=e;if(Yn(i,"i")&&Vt(i.i))return n.interpolate(n.list(i.i));if(Yn(i,"index")&&Vt(i.index))return n.interpolate(n.list(i.index));throw Ha(t)}case 6:{const i=e,s=ry(i),r=ay(i);return n.linked(xu(n,r),s?xu(n,s):void 0,n.type)}case 7:return mo(e,t);case 8:return mo(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const ly=n=>n;let go=bt();function cy(n,e={}){let t=!1;const i=e.onError||LM;return e.onError=s=>{t=!0,i(s)},{...QM(n,e),detectError:t}}function uy(n,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Le(n)){ft(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||ly)(n),s=go[i];if(s)return s;const{ast:r,detectError:a}=cy(n,{...e,location:!1,jit:!0}),o=dc(r);return a?o:go[i]=o}else{const t=n.cacheKey;if(t){const i=go[t];return i||(go[t]=dc(n))}else return dc(n)}}let Ga=null;function fy(n){Ga=n}function hy(n,e,t){Ga&&Ga.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const dy=py("function:translate");function py(n){return e=>Ga&&Ga.emit(n,e)}const Ki={INVALID_ARGUMENT:IM,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},my=24;function Yi(n){return kl(n,null,void 0)}function qf(n,e){return e.locale!=null?Od(e.locale):Od(n.locale)}let pc;function Od(n){if(Le(n))return n;if(Pt(n)){if(n.resolvedOnce&&pc!=null)return pc;if(n.constructor.name==="Function"){const e=n();if(wM(e))throw Yi(Ki.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return pc=e}else throw Yi(Ki.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Yi(Ki.NOT_SUPPORT_LOCALE_TYPE)}function gy(n,e,t){return[...new Set([t,...Ut(e)?e:ht(e)?Object.keys(e):Le(e)?[e]:[t]])]}function S_(n,e,t){const i=Le(t)?t:za,s=n;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let a=[t];for(;Ut(a);)a=Ud(r,a,e);const o=Ut(e)||!it(e)?e:e.default?e.default:null;a=Le(o)?[o]:o,Ut(a)&&Ud(r,a,!1),s.__localeChainCache.set(i,r)}return r}function Ud(n,e,t){let i=!0;for(let s=0;s<e.length&&ft(i);s++){const r=e[s];Le(r)&&(i=_y(n,e[s],t))}return i}function _y(n,e,t){let i;const s=e.split("-");do{const r=s.join("-");i=vy(n,r,t),s.splice(-1,1)}while(s.length&&i===!0);return i}function vy(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");n.push(s),(Ut(t)||it(t))&&t[s]&&(i=t[s])}return i}const Cs=[];Cs[0]={w:[0],i:[3,0],"[":[4],o:[7]};Cs[1]={w:[1],".":[2],"[":[4],o:[7]};Cs[2]={w:[2],i:[3,0],0:[3,0]};Cs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Cs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Cs[5]={"'":[4,0],o:8,l:[5,0]};Cs[6]={'"':[4,0],o:8,l:[6,0]};const xy=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Sy(n){return xy.test(n)}function My(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function yy(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function by(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:Sy(e)?My(e):"*"+e}function Ey(n){const e=[];let t=-1,i=0,s=0,r,a,o,l,c,u,f;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,i=4,h[0]();else{if(s=0,a===void 0||(a=by(a),a===!1))return!1;h[1]()}};function d(){const g=n[t+1];if(i===5&&g==="'"||i===6&&g==='"')return t++,o="\\"+g,h[0](),!0}for(;i!==null;)if(t++,r=n[t],!(r==="\\"&&d())){if(l=yy(r),f=Cs[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=r,u()===!1))))return;if(i===7)return e}}const Fd=new Map;function Ty(n,e){return ht(n)?n[e]:null}function Ay(n,e){if(!ht(n))return null;let t=Fd.get(e);if(t||(t=Ey(e),t&&Fd.set(e,t)),!t)return null;const i=t.length;let s=n,r=0;for(;r<i;){const a=t[r];if(x_.includes(a)&&Ei(s))return null;const o=s[a];if(o===void 0||Pt(s))return null;s=o,r++}return s}const Ry="10.0.8",Vl=-1,za="en-US",Bd="",kd=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function wy(){return{upper:(n,e)=>e==="text"&&Le(n)?n.toUpperCase():e==="vnode"&&ht(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&Le(n)?n.toLowerCase():e==="vnode"&&ht(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&Le(n)?kd(n):e==="vnode"&&ht(n)&&"__v_isVNode"in n?kd(n.children):n}}let M_;function Cy(n){M_=n}let y_;function Py(n){y_=n}let b_;function Iy(n){b_=n}let E_=null;const Ly=n=>{E_=n},Ny=()=>E_;let T_=null;const Vd=n=>{T_=n},Dy=()=>T_;let Hd=0;function Oy(n={}){const e=Pt(n.onWarn)?n.onWarn:MM,t=Le(n.version)?n.version:Ry,i=Le(n.locale)||Pt(n.locale)?n.locale:za,s=Pt(i)?za:i,r=Ut(n.fallbackLocale)||it(n.fallbackLocale)||Le(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:s,a=it(n.messages)?n.messages:mc(s),o=it(n.datetimeFormats)?n.datetimeFormats:mc(s),l=it(n.numberFormats)?n.numberFormats:mc(s),c=qt(bt(),n.modifiers,wy()),u=n.pluralRules||bt(),f=Pt(n.missing)?n.missing:null,h=ft(n.missingWarn)||Vr(n.missingWarn)?n.missingWarn:!0,d=ft(n.fallbackWarn)||Vr(n.fallbackWarn)?n.fallbackWarn:!0,g=!!n.fallbackFormat,x=!!n.unresolving,m=Pt(n.postTranslation)?n.postTranslation:null,p=it(n.processor)?n.processor:null,M=ft(n.warnHtmlMessage)?n.warnHtmlMessage:!0,y=!!n.escapeParameter,_=Pt(n.messageCompiler)?n.messageCompiler:M_,E=Pt(n.messageResolver)?n.messageResolver:y_||Ty,A=Pt(n.localeFallbacker)?n.localeFallbacker:b_||gy,T=ht(n.fallbackContext)?n.fallbackContext:void 0,S=n,I=ht(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,O=ht(S.__numberFormatters)?S.__numberFormatters:new Map,D=ht(S.__meta)?S.__meta:{};Hd++;const G={version:t,cid:Hd,locale:i,fallbackLocale:r,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:d,fallbackFormat:g,unresolving:x,postTranslation:m,processor:p,warnHtmlMessage:M,escapeParameter:y,messageCompiler:_,messageResolver:E,localeFallbacker:A,fallbackContext:T,onWarn:e,__meta:D};return G.datetimeFormats=o,G.numberFormats=l,G.__datetimeFormatters=I,G.__numberFormatters=O,__INTLIFY_PROD_DEVTOOLS__&&hy(G,t,D),G}const mc=n=>({[n]:bt()});function Kf(n,e,t,i,s){const{missing:r,onWarn:a}=n;if(r!==null){const o=r(n,t,e,s);return Le(o)?o:e}else return e}function sa(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function Uy(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function Fy(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(Uy(n,e[i]))return!0;return!1}function Gd(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=n,{__datetimeFormatters:o}=n,[l,c,u,f]=Su(...e),h=ft(u.missingWarn)?u.missingWarn:n.missingWarn;ft(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,g=qf(n,u),x=a(n,s,g);if(!Le(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},p,M=null;const y="datetime format";for(let A=0;A<x.length&&(p=x[A],m=t[p]||{},M=m[l],!it(M));A++)Kf(n,l,p,h,y);if(!it(M)||!Le(p))return i?Vl:l;let _=`${p}__${l}`;Bl(f)||(_=`${_}__${JSON.stringify(f)}`);let E=o.get(_);return E||(E=new Intl.DateTimeFormat(p,qt({},M,f)),o.set(_,E)),d?E.formatToParts(c):E.format(c)}const A_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Su(...n){const[e,t,i,s]=n,r=bt();let a=bt(),o;if(Le(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Yi(Ki.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Yi(Ki.INVALID_ISO_DATE_ARGUMENT)}}else if(EM(e)){if(isNaN(e.getTime()))throw Yi(Ki.INVALID_DATE_ARGUMENT);o=e}else if(Vt(e))o=e;else throw Yi(Ki.INVALID_ARGUMENT);return Le(t)?r.key=t:it(t)&&Object.keys(t).forEach(l=>{A_.includes(l)?a[l]=t[l]:r[l]=t[l]}),Le(i)?r.locale=i:it(i)&&(a=i),it(s)&&(a=s),[r.key||"",o,r,a]}function zd(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Wd(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:a}=n,{__numberFormatters:o}=n,[l,c,u,f]=Mu(...e),h=ft(u.missingWarn)?u.missingWarn:n.missingWarn;ft(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,g=qf(n,u),x=a(n,s,g);if(!Le(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},p,M=null;const y="number format";for(let A=0;A<x.length&&(p=x[A],m=t[p]||{},M=m[l],!it(M));A++)Kf(n,l,p,h,y);if(!it(M)||!Le(p))return i?Vl:l;let _=`${p}__${l}`;Bl(f)||(_=`${_}__${JSON.stringify(f)}`);let E=o.get(_);return E||(E=new Intl.NumberFormat(p,qt({},M,f)),o.set(_,E)),d?E.formatToParts(c):E.format(c)}const R_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Mu(...n){const[e,t,i,s]=n,r=bt();let a=bt();if(!Vt(e))throw Yi(Ki.INVALID_ARGUMENT);const o=e;return Le(t)?r.key=t:it(t)&&Object.keys(t).forEach(l=>{R_.includes(l)?a[l]=t[l]:r[l]=t[l]}),Le(i)?r.locale=i:it(i)&&(a=i),it(s)&&(a=s),[r.key||"",o,r,a]}function Xd(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}const By=n=>n,ky=n=>"",Vy="text",Hy=n=>n.length===0?"":Wf(n),Gy=CM;function $d(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function zy(n){const e=Vt(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(Vt(n.named.count)||Vt(n.named.n))?Vt(n.named.count)?n.named.count:Vt(n.named.n)?n.named.n:e:e}function Wy(n,e){e.count||(e.count=n),e.n||(e.n=n)}function Xy(n={}){const e=n.locale,t=zy(n),i=ht(n.pluralRules)&&Le(e)&&Pt(n.pluralRules[e])?n.pluralRules[e]:$d,s=ht(n.pluralRules)&&Le(e)&&Pt(n.pluralRules[e])?$d:void 0,r=p=>p[i(t,p.length,s)],a=n.list||[],o=p=>a[p],l=n.named||bt();Vt(n.pluralIndex)&&Wy(t,l);const c=p=>l[p];function u(p,M){const y=Pt(n.messages)?n.messages(p,!!M):ht(n.messages)?n.messages[p]:!1;return y||(n.parent?n.parent.message(p):ky)}const f=p=>n.modifiers?n.modifiers[p]:By,h=it(n.processor)&&Pt(n.processor.normalize)?n.processor.normalize:Hy,d=it(n.processor)&&Pt(n.processor.interpolate)?n.processor.interpolate:Gy,g=it(n.processor)&&Le(n.processor.type)?n.processor.type:Vy,m={list:o,named:c,plural:r,linked:(p,...M)=>{const[y,_]=M;let E="text",A="";M.length===1?ht(y)?(A=y.modifier||A,E=y.type||E):Le(y)&&(A=y||A):M.length===2&&(Le(y)&&(A=y||A),Le(_)&&(E=_||E));const T=u(p,!0)(m),S=E==="vnode"&&Ut(T)&&A?T[0]:T;return A?f(A)(S,E):S},message:u,type:g,interpolate:d,normalize:h,values:qt(bt(),a,l)};return m}const qd=()=>"",Fn=n=>Pt(n);function Kd(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:a,messages:o}=n,[l,c]=yu(...e),u=ft(c.missingWarn)?c.missingWarn:n.missingWarn,f=ft(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=ft(c.escapeParameter)?c.escapeParameter:n.escapeParameter,d=!!c.resolvedMessage,g=Le(c.default)||ft(c.default)?ft(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:null,x=t||g!=null&&(Le(g)||Pt(g)),m=qf(n,c);h&&$y(c);let[p,M,y]=d?[l,m,o[m]||bt()]:w_(n,l,m,a,f,u),_=p,E=l;if(!d&&!(Le(_)||Ei(_)||Fn(_))&&x&&(_=g,E=_),!d&&(!(Le(_)||Ei(_)||Fn(_))||!Le(M)))return s?Vl:l;let A=!1;const T=()=>{A=!0},S=Fn(_)?_:C_(n,l,M,_,E,T);if(A)return _;const I=Yy(n,M,y,c),O=Xy(I),D=qy(n,S,O);let G=i?i(D,l):D;if(h&&Le(G)&&(G=AM(G)),__INTLIFY_PROD_DEVTOOLS__){const ae={timestamp:Date.now(),key:Le(l)?l:Fn(_)?_.key:"",locale:M||(Fn(_)?_.locale:""),format:Le(_)?_:Fn(_)?_.source:"",message:G};ae.meta=qt({},n.__meta,Ny()||{}),dy(ae)}return G}function $y(n){Ut(n.list)?n.list=n.list.map(e=>Le(e)?Cd(e):e):ht(n.named)&&Object.keys(n.named).forEach(e=>{Le(n.named[e])&&(n.named[e]=Cd(n.named[e]))})}function w_(n,e,t,i,s,r){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f=bt(),h,d=null;const g="translate";for(let x=0;x<u.length&&(h=u[x],f=a[h]||bt(),(d=l(f,e))===null&&(d=f[e]),!(Le(d)||Ei(d)||Fn(d)));x++)if(!Fy(h,u)){const m=Kf(n,e,h,r,g);m!==e&&(d=m)}return[d,h,f]}function C_(n,e,t,i,s,r){const{messageCompiler:a,warnHtmlMessage:o}=n;if(Fn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(a==null){const c=(()=>i);return c.locale=t,c.key=e,c}const l=a(i,Ky(n,t,s,i,o,r));return l.locale=t,l.key=e,l.source=i,l}function qy(n,e,t){return e(t)}function yu(...n){const[e,t,i]=n,s=bt();if(!Le(e)&&!Vt(e)&&!Fn(e)&&!Ei(e))throw Yi(Ki.INVALID_ARGUMENT);const r=Vt(e)?String(e):(Fn(e),e);return Vt(t)?s.plural=t:Le(t)?s.default=t:it(t)&&!Bl(t)?s.named=t:Ut(t)&&(s.list=t),Vt(i)?s.plural=i:Le(i)?s.default=i:it(i)&&qt(s,i),[r,s]}function Ky(n,e,t,i,s,r){return{locale:e,key:t,warnHtmlMessage:s,onError:a=>{throw r&&r(a),a},onCacheKey:a=>yM(e,t,a)}}function Yy(n,e,t,i){const{modifiers:s,pluralRules:r,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:s,pluralRules:r,messages:(d,g)=>{let x=a(t,d);if(x==null&&(u||g)){const[,,m]=w_(u||n,d,e,o,l,c);x=a(m,d)}if(Le(x)||Ei(x)){let m=!1;const M=C_(n,d,e,x,d,()=>{m=!0});return m?qd:M}else return Fn(x)?x:qd}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Vt(i.plural)&&(h.pluralIndex=i.plural),h}ey();/*!
  * vue-i18n v10.0.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Zy="10.0.8";function Jy(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Ws().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Ws().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Ws().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ws().__INTLIFY_PROD_DEVTOOLS__=!1)}const yn={UNEXPECTED_RETURN_TYPE:my,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function Tn(n,...e){return kl(n,null,void 0)}const bu=Rs("__translateVNode"),Eu=Rs("__datetimeParts"),Tu=Rs("__numberParts"),P_=Rs("__setPluralRules"),I_=Rs("__injectWithOption"),Au=Rs("__dispose");function Wa(n){if(!ht(n)||Ei(n))return n;for(const e in n)if(Yn(n,e))if(!e.includes("."))ht(n[e])&&Wa(n[e]);else{const t=e.split("."),i=t.length-1;let s=n,r=!1;for(let a=0;a<i;a++){if(t[a]==="__proto__")throw new Error(`unsafe key: ${t[a]}`);if(t[a]in s||(s[t[a]]=bt()),!ht(s[t[a]])){r=!0;break}s=s[t[a]]}if(r||(Ei(s)?x_.includes(t[i])||delete n[e]:(s[t[i]]=n[e],delete n[e])),!Ei(s)){const a=s[t[i]];ht(a)&&Wa(a)}}return n}function Yf(n,e){const{messages:t,__i18n:i,messageResolver:s,flatJson:r}=e,a=it(t)?t:Ut(i)?bt():{[n]:bt()};if(Ut(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||bt(),Ko(c,a[l])):Ko(c,a)}else Le(o)&&Ko(JSON.parse(o),a)}),s==null&&r)for(const o in a)Yn(a,o)&&Wa(a[o]);return a}function L_(n){return n.type}function N_(n,e,t){let i=ht(e.messages)?e.messages:bt();"__i18nGlobal"in t&&(i=Yf(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{n.mergeLocaleMessage(r,i[r])});{if(ht(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(a=>{n.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(ht(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(a=>{n.mergeNumberFormat(a,e.numberFormats[a])})}}}function Yd(n){return lt(so,null,n,0)}const Zd="__INTLIFY_META__",Jd=()=>[],jy=()=>!1;let jd=0;function Qd(n){return((e,t,i,s)=>n(t,i,Fr()||void 0,s))}const Qy=()=>{const n=Fr();let e=null;return n&&(e=L_(n)[Zd])?{[Zd]:e}:null};function Zf(n={}){const{__root:e,__injectWithOption:t}=n,i=e===void 0,s=n.flatJson,r=hl?ag:og;let a=ft(n.inheritLocale)?n.inheritLocale:!0;const o=r(e&&a?e.locale.value:Le(n.locale)?n.locale:za),l=r(e&&a?e.fallbackLocale.value:Le(n.fallbackLocale)||Ut(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:o.value),c=r(Yf(o.value,n)),u=r(it(n.datetimeFormats)?n.datetimeFormats:{[o.value]:{}}),f=r(it(n.numberFormats)?n.numberFormats:{[o.value]:{}});let h=e?e.missingWarn:ft(n.missingWarn)||Vr(n.missingWarn)?n.missingWarn:!0,d=e?e.fallbackWarn:ft(n.fallbackWarn)||Vr(n.fallbackWarn)?n.fallbackWarn:!0,g=e?e.fallbackRoot:ft(n.fallbackRoot)?n.fallbackRoot:!0,x=!!n.fallbackFormat,m=Pt(n.missing)?n.missing:null,p=Pt(n.missing)?Qd(n.missing):null,M=Pt(n.postTranslation)?n.postTranslation:null,y=e?e.warnHtmlMessage:ft(n.warnHtmlMessage)?n.warnHtmlMessage:!0,_=!!n.escapeParameter;const E=e?e.modifiers:it(n.modifiers)?n.modifiers:{};let A=n.pluralRules||e&&e.pluralRules,T;T=(()=>{i&&Vd(null);const k={version:Zy,locale:o.value,fallbackLocale:l.value,messages:c.value,modifiers:E,pluralRules:A,missing:p===null?void 0:p,missingWarn:h,fallbackWarn:d,fallbackFormat:x,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:y,escapeParameter:_,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};k.datetimeFormats=u.value,k.numberFormats=f.value,k.__datetimeFormatters=it(T)?T.__datetimeFormatters:void 0,k.__numberFormatters=it(T)?T.__numberFormatters:void 0;const Y=Oy(k);return i&&Vd(Y),Y})(),sa(T,o.value,l.value);function I(){return[o.value,l.value,c.value,u.value,f.value]}const O=hn({get:()=>o.value,set:k=>{o.value=k,T.locale=o.value}}),D=hn({get:()=>l.value,set:k=>{l.value=k,T.fallbackLocale=l.value,sa(T,o.value,k)}}),G=hn(()=>c.value),ae=hn(()=>u.value),he=hn(()=>f.value);function K(){return Pt(M)?M:null}function se(k){M=k,T.postTranslation=k}function X(){return m}function ie(k){k!==null&&(p=Qd(k)),m=k,T.missing=p}const de=(k,Y,R,v,U,q)=>{I();let Q;try{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=e?Dy():void 0),Q=k(T)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(T.fallbackContext=void 0)}if(R!=="translate exists"&&Vt(Q)&&Q===Vl||R==="translate exists"&&!Q){const[ge,xe]=Y();return e&&g?v(e):U(ge)}else{if(q(Q))return Q;throw Tn(yn.UNEXPECTED_RETURN_TYPE)}};function Me(...k){return de(Y=>Reflect.apply(Kd,null,[Y,...k]),()=>yu(...k),"translate",Y=>Reflect.apply(Y.t,Y,[...k]),Y=>Y,Y=>Le(Y))}function ye(...k){const[Y,R,v]=k;if(v&&!ht(v))throw Tn(yn.INVALID_ARGUMENT);return Me(Y,R,qt({resolvedMessage:!0},v||{}))}function be(...k){return de(Y=>Reflect.apply(Gd,null,[Y,...k]),()=>Su(...k),"datetime format",Y=>Reflect.apply(Y.d,Y,[...k]),()=>Bd,Y=>Le(Y))}function Ze(...k){return de(Y=>Reflect.apply(Wd,null,[Y,...k]),()=>Mu(...k),"number format",Y=>Reflect.apply(Y.n,Y,[...k]),()=>Bd,Y=>Le(Y))}function ct(k){return k.map(Y=>Le(Y)||Vt(Y)||ft(Y)?Yd(String(Y)):Y)}const le={normalize:ct,interpolate:k=>k,type:"vnode"};function V(...k){return de(Y=>{let R;const v=Y;try{v.processor=le,R=Reflect.apply(Kd,null,[v,...k])}finally{v.processor=null}return R},()=>yu(...k),"translate",Y=>Y[bu](...k),Y=>[Yd(Y)],Y=>Ut(Y))}function Z(...k){return de(Y=>Reflect.apply(Wd,null,[Y,...k]),()=>Mu(...k),"number format",Y=>Y[Tu](...k),Jd,Y=>Le(Y)||Ut(Y))}function ce(...k){return de(Y=>Reflect.apply(Gd,null,[Y,...k]),()=>Su(...k),"datetime format",Y=>Y[Eu](...k),Jd,Y=>Le(Y)||Ut(Y))}function me(k){A=k,T.pluralRules=A}function Se(k,Y){return de(()=>{if(!k)return!1;const R=Le(Y)?Y:o.value,v=F(R),U=T.messageResolver(v,k);return Ei(U)||Fn(U)||Le(U)},()=>[k],"translate exists",R=>Reflect.apply(R.te,R,[k,Y]),jy,R=>ft(R))}function L(k){let Y=null;const R=S_(T,l.value,o.value);for(let v=0;v<R.length;v++){const U=c.value[R[v]]||{},q=T.messageResolver(U,k);if(q!=null){Y=q;break}}return Y}function N(k){const Y=L(k);return Y??(e?e.tm(k)||{}:{})}function F(k){return c.value[k]||{}}function j(k,Y){if(s){const R={[k]:Y};for(const v in R)Yn(R,v)&&Wa(R[v]);Y=R[k]}c.value[k]=Y,T.messages=c.value}function te(k,Y){c.value[k]=c.value[k]||{};const R={[k]:Y};if(s)for(const v in R)Yn(R,v)&&Wa(R[v]);Y=R[k],Ko(Y,c.value[k]),T.messages=c.value}function re(k){return u.value[k]||{}}function w(k,Y){u.value[k]=Y,T.datetimeFormats=u.value,zd(T,k,Y)}function P(k,Y){u.value[k]=qt(u.value[k]||{},Y),T.datetimeFormats=u.value,zd(T,k,Y)}function B(k){return f.value[k]||{}}function $(k,Y){f.value[k]=Y,T.numberFormats=f.value,Xd(T,k,Y)}function _e(k,Y){f.value[k]=qt(f.value[k]||{},Y),T.numberFormats=f.value,Xd(T,k,Y)}jd++,e&&hl&&(Ys(e.locale,k=>{a&&(o.value=k,T.locale=k,sa(T,o.value,l.value))}),Ys(e.fallbackLocale,k=>{a&&(l.value=k,T.fallbackLocale=k,sa(T,o.value,l.value))}));const C={id:jd,locale:O,fallbackLocale:D,get inheritLocale(){return a},set inheritLocale(k){a=k,k&&e&&(o.value=e.locale.value,l.value=e.fallbackLocale.value,sa(T,o.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:G,get modifiers(){return E},get pluralRules(){return A||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(k){h=k,T.missingWarn=h},get fallbackWarn(){return d},set fallbackWarn(k){d=k,T.fallbackWarn=d},get fallbackRoot(){return g},set fallbackRoot(k){g=k},get fallbackFormat(){return x},set fallbackFormat(k){x=k,T.fallbackFormat=x},get warnHtmlMessage(){return y},set warnHtmlMessage(k){y=k,T.warnHtmlMessage=k},get escapeParameter(){return _},set escapeParameter(k){_=k,T.escapeParameter=k},t:Me,getLocaleMessage:F,setLocaleMessage:j,mergeLocaleMessage:te,getPostTranslationHandler:K,setPostTranslationHandler:se,getMissingHandler:X,setMissingHandler:ie,[P_]:me};return C.datetimeFormats=ae,C.numberFormats=he,C.rt=ye,C.te=Se,C.tm=N,C.d=be,C.n=Ze,C.getDateTimeFormat=re,C.setDateTimeFormat=w,C.mergeDateTimeFormat=P,C.getNumberFormat=B,C.setNumberFormat=$,C.mergeNumberFormat=_e,C[I_]=t,C[bu]=V,C[Eu]=ce,C[Tu]=Z,C}function eb(n){const e=Le(n.locale)?n.locale:za,t=Le(n.fallbackLocale)||Ut(n.fallbackLocale)||it(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=Pt(n.missing)?n.missing:void 0,s=ft(n.silentTranslationWarn)||Vr(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,r=ft(n.silentFallbackWarn)||Vr(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,a=ft(n.fallbackRoot)?n.fallbackRoot:!0,o=!!n.formatFallbackMessages,l=it(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=Pt(n.postTranslation)?n.postTranslation:void 0,f=Le(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,d=ft(n.sync)?n.sync:!0;let g=n.messages;if(it(n.sharedMessages)){const E=n.sharedMessages;g=Object.keys(E).reduce((T,S)=>{const I=T[S]||(T[S]={});return qt(I,E[S]),T},g||{})}const{__i18n:x,__root:m,__injectWithOption:p}=n,M=n.datetimeFormats,y=n.numberFormats,_=n.flatJson;return{locale:e,fallbackLocale:t,messages:g,flatJson:_,datetimeFormats:M,numberFormats:y,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:d,__i18n:x,__root:m,__injectWithOption:p}}function Ru(n={}){const e=Zf(eb(n)),{__extender:t}=n,i={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return ft(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(s){e.missingWarn=ft(s)?!s:s},get silentFallbackWarn(){return ft(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(s){e.fallbackWarn=ft(s)?!s:s},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},tc(...s){const[r,a,o]=s,l={plural:1};let c=null,u=null;if(!Le(r))throw Tn(yn.INVALID_ARGUMENT);const f=r;return Le(a)?l.locale=a:Vt(a)?l.plural=a:Ut(a)?c=a:it(a)&&(u=a),Le(o)?l.locale=o:Ut(o)?c=o:it(o)&&(u=o),Reflect.apply(e.t,e,[f,c||u||{},l])},te(s,r){return e.te(s,r)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,r){e.setLocaleMessage(s,r)},mergeLocaleMessage(s,r){e.mergeLocaleMessage(s,r)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,r){e.setDateTimeFormat(s,r)},mergeDateTimeFormat(s,r){e.mergeDateTimeFormat(s,r)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,r){e.setNumberFormat(s,r)},mergeNumberFormat(s,r){e.mergeNumberFormat(s,r)}};return i.__extender=t,i}function tb(n,e,t){return{beforeCreate(){const i=Fr();if(!i)throw Tn(yn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=ep(n,r);else{r.__injectWithOption=!0,r.__extender=t.__vueI18nExtend,this.$i18n=Ru(r);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=ep(n,s);else{this.$i18n=Ru({__i18n:s.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=n;s.__i18nGlobal&&N_(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,a)=>this.$i18n.te(r,a),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Fr();if(!i)throw Tn(yn.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),t.__deleteInstance(i),delete this.$i18n}}}function ep(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[P_](e.pluralizationRules||n.pluralizationRules);const t=Yf(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const Jf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function nb({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,s)=>[...i,...s.type===xn?s.children:[s]],[]):e.reduce((t,i)=>{const s=n[i];return s&&(t[i]=s()),t},bt())}function D_(){return xn}const ib=io({name:"i18n-t",props:qt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>Vt(n)||!isNaN(n)}},Jf),setup(n,e){const{slots:t,attrs:i}=e,s=n.i18n||us({useScope:n.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f!=="_"),a=bt();n.locale&&(a.locale=n.locale),n.plural!==void 0&&(a.plural=Le(n.plural)?+n.plural:n.plural);const o=nb(e,r),l=s[bu](n.keypath,o,a),c=qt(bt(),i),u=Le(n.tag)||ht(n.tag)?n.tag:D_();return Ul(u,c,l)}}}),tp=ib;function sb(n){return Ut(n)&&!Le(n[0])}function O_(n,e,t,i){const{slots:s,attrs:r}=e;return()=>{const a={part:!0};let o=bt();n.locale&&(a.locale=n.locale),Le(n.format)?a.key=n.format:ht(n.format)&&(Le(n.format.key)&&(a.key=n.format.key),o=Object.keys(n.format).reduce((h,d)=>t.includes(d)?qt(bt(),h,{[d]:n.format[d]}):h,bt()));const l=i(n.value,a,o);let c=[a.key];Ut(l)?c=l.map((h,d)=>{const g=s[h.type],x=g?g({[h.type]:h.value,index:d,parts:l}):[h.value];return sb(x)&&(x[0].key=`${h.type}-${d}`),x}):Le(l)&&(c=[l]);const u=qt(bt(),r),f=Le(n.tag)||ht(n.tag)?n.tag:D_();return Ul(f,u,c)}}const rb=io({name:"i18n-n",props:qt({value:{type:Number,required:!0},format:{type:[String,Object]}},Jf),setup(n,e){const t=n.i18n||us({useScope:n.scope,__useComponent:!0});return O_(n,e,R_,(...i)=>t[Tu](...i))}}),np=rb,ab=io({name:"i18n-d",props:qt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Jf),setup(n,e){const t=n.i18n||us({useScope:n.scope,__useComponent:!0});return O_(n,e,A_,(...i)=>t[Eu](...i))}}),ip=ab;function ob(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function lb(n){const e=a=>{const{instance:o,value:l}=a;if(!o||!o.$)throw Tn(yn.UNEXPECTED_ERROR);const c=ob(n,o.$),u=sp(l);return[Reflect.apply(c.t,c,[...rp(u)]),c]};return{created:(a,o)=>{const[l,c]=e(o);hl&&n.global===c&&(a.__i18nWatcher=Ys(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{hl&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=sp(o);a.textContent=Reflect.apply(l.t,l,[...rp(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function sp(n){if(Le(n))return{path:n};if(it(n)){if(!("path"in n))throw Tn(yn.REQUIRED_VALUE,"path");return n}else throw Tn(yn.INVALID_VALUE)}function rp(n){const{path:e,locale:t,args:i,choice:s,plural:r}=n,a={},o=i||{};return Le(t)&&(a.locale=t),Vt(s)&&(a.plural=s),Vt(r)&&(a.plural=r),[e,o,a]}function cb(n,e,...t){const i=it(t[0])?t[0]:{};(ft(i.globalInstall)?i.globalInstall:!0)&&([tp.name,"I18nT"].forEach(r=>n.component(r,tp)),[np.name,"I18nN"].forEach(r=>n.component(r,np)),[ip.name,"I18nD"].forEach(r=>n.component(r,ip))),n.directive("t",lb(e))}const ub=Rs("global-vue-i18n");function fb(n={},e){const t=__VUE_I18N_LEGACY_API__&&ft(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,i=ft(n.globalInjection)?n.globalInjection:!0,s=new Map,[r,a]=hb(n,t),o=Rs("");function l(h){return s.get(h)||null}function c(h,d){s.set(h,d)}function u(h){s.delete(h)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},async install(h,...d){if(h.__VUE_I18N_SYMBOL__=o,h.provide(h.__VUE_I18N_SYMBOL__,f),it(d[0])){const m=d[0];f.__composerExtend=m.__composerExtend,f.__vueI18nExtend=m.__vueI18nExtend}let g=null;!t&&i&&(g=Sb(h,f.global)),__VUE_I18N_FULL_INSTALL__&&cb(h,f,...d),__VUE_I18N_LEGACY_API__&&t&&h.mixin(tb(a,a.__composer,f));const x=h.unmount;h.unmount=()=>{g&&g(),f.dispose(),x()}},get global(){return a},dispose(){r.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function us(n={}){const e=Fr();if(e==null)throw Tn(yn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Tn(yn.NOT_INSTALLED);const t=db(e),i=mb(t),s=L_(e),r=pb(n,s);if(r==="global")return N_(i,n,s),i;if(r==="parent"){let l=gb(t,e,n.__useComponent);return l==null&&(l=i),l}const a=t;let o=a.__getInstance(e);if(o==null){const l=qt({},n);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),o=Zf(l),a.__composerExtend&&(o[Au]=a.__composerExtend(o)),vb(a,e,o),a.__setInstance(e,o)}return o}function hb(n,e,t){const i=J0(),s=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Ru(n)):i.run(()=>Zf(n));if(s==null)throw Tn(yn.UNEXPECTED_ERROR);return[i,s]}function db(n){const e=bi(n.isCE?ub:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Tn(n.isCE?yn.NOT_INSTALLED_WITH_PROVIDE:yn.UNEXPECTED_ERROR);return e}function pb(n,e){return Bl(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function mb(n){return n.mode==="composition"?n.global:n.global.__composer}function gb(n,e,t=!1){let i=null;const s=e.root;let r=_b(e,t);for(;r!=null;){const a=n;if(n.mode==="composition")i=a.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(r);o!=null&&(i=o.__composer,t&&i&&!i[I_]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function _b(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function vb(n,e,t){Mg(()=>{},e),Ff(()=>{const i=t;n.__deleteInstance(e);const s=i[Au];s&&(s(),delete i[Au])},e)}const xb=["locale","fallbackLocale","availableLocales"],ap=["t","rt","d","n","tm","te"];function Sb(n,e){const t=Object.create(null);return xb.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw Tn(yn.UNEXPECTED_ERROR);const a=nn(r.value)?{get(){return r.value.value},set(o){r.value.value=o}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,s,a)}),n.config.globalProperties.$i18n=t,ap.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw Tn(yn.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${s}`,r)}),()=>{delete n.config.globalProperties.$i18n,ap.forEach(s=>{delete n.config.globalProperties[`$${s}`]})}}Jy();Cy(uy);Py(Ay);Iy(S_);if(__INTLIFY_PROD_DEVTOOLS__){const n=Ws();n.__INTLIFY__=!0,fy(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Mb="Home",yb="Wheel",bb="Dice",Eb="Coin",Tb="Spinner",Ab="Cards",Rb="Matches",wb="Slots",Cb="Heads",Pb="Tails",Ib="Lost!",Lb="Close",Nb="Short Matches",Db="Remove winner from list",Ob=[{text:"Chaos, when left alone, tends to multiply.",author:"Stephen Hawking"},{text:"In the midst of chaos, there is also opportunity.",author:"Sun Tzu"},{text:"All great changes are preceded by chaos.",author:"Deepak Chopra"},{text:"In all chaos there is a cosmos, in all disorder a secret order.",author:"Carl Jung"},{text:"randomness comes from atmospheric noise",author:"random.org"},{text:"Chance favors the prepared mind.",author:"Louis Pasteur"},{text:"If you flip a coin three times and it lands on heads each time, it's probably chance.",author:"T. Colin Campbell"},{text:"Random chance plays a huge part in everybody's life.",author:"Gary Gygax"}],Ub={Home:Mb,Wheel:yb,Dice:bb,Coin:Eb,Spinner:Tb,Cards:Ab,Matches:Rb,Slots:wb,Heads:Cb,Tails:Pb,LostMessage:Ib,Close:Lb,ShortMatches:Nb,RemoveWinner:Db,quotes:Ob},Fb="Startseite",Bb="Glücksrad",kb="Würfel",Vb="Münzwurf",Hb="Walze",Gb="Karten",zb="Streichhölzer",Wb="Slots",Xb="Kopf",$b="Zahl",qb="Verloren!",Kb="Schließen",Yb="Kurze Streichhölzer",Zb="Gewinner aus der Liste entfernen",Jb=[{text:"Chaos, wenn man es allein lässt, neigt dazu, sich zu vermehren.",author:"Stephen Hawking"},{text:"Mitten im Chaos gibt es auch Chancen.",author:"Sun Tzu"},{text:"Alle großen Veränderungen werden durch Chaos eingeleitet.",author:"Deepak Chopra"},{text:"In allem Chaos gibt es einen Kosmos, in aller Unordnung eine geheime Ordnung.",author:"Carl Jung"},{text:"Zufälligkeit kommt aus Rauschen der Atmosphäre",author:"random.org"},{text:"Der Zufall begünstigt den vorbereiteten Geist.",author:"Louis Pasteur"},{text:"Wenn du eine Münze dreimal wirfst und sie landet dreimal auf Kopf, ist es wahrscheinlich Zufall.",author:"T. Colin Campbell"},{text:"Zufälliger Zufall spielt eine große Rolle im Leben jedes Einzelnen.",author:"Gary Gygax"}],jb={Home:Fb,Wheel:Bb,Dice:kb,Coin:Vb,Spinner:Hb,Cards:Gb,Matches:zb,Slots:Wb,Heads:Xb,Tails:$b,LostMessage:qb,Close:Kb,ShortMatches:Yb,RemoveWinner:Zb,quotes:Jb},Qb="Inicio",eE="Ruleta",tE="Dados",nE="Moneda",iE="Rueda",sE="Cartas",rE="Cerillas",aE="Tragaperras",oE="Cara",lE="Cruz",cE="¡Perdiste!",uE="Cerrar",fE="Cerillas Cortas",hE="Eliminar ganador de la lista",dE=[{text:"El caos, cuando se deja solo, tiende a multiplicarse.",author:"Stephen Hawking"},{text:"En medio del caos, también hay oportunidad.",author:"Sun Tzu"},{text:"Todos los grandes cambios están precedidos por el caos.",author:"Deepak Chopra"},{text:"En todo caos hay un cosmos, en todo desorden un orden secreto.",author:"Carl Jung"},{text:"La aleatoriedad proviene del ruido atmosférico",author:"random.org"},{text:"El azar favorece a la mente preparada.",author:"Louis Pasteur"},{text:"Si lanzas una moneda tres veces y cae en cara las tres, probablemente sea azar.",author:"T. Colin Campbell"},{text:"El azar juega un papel enorme en la vida de todos.",author:"Gary Gygax"}],pE={Home:Qb,Wheel:eE,Dice:tE,Coin:nE,Spinner:iE,Cards:sE,Matches:rE,Slots:aE,Heads:oE,Tails:lE,LostMessage:cE,Close:uE,ShortMatches:fE,RemoveWinner:hE,quotes:dE},Hl=fb({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:Ub,de:jb,es:pE}});window.i18n=Hl;function mE(){const n=Hl.global.tm("quotes");return Array.isArray(n)?n.length:0}function gE(n){const e=Hl.global.tm("quotes");return!Array.isArray(e)||e.length===0?{text:"Random chance plays a role in life.",author:"Unknown"}:e[n%e.length]}function _E(){const n=mE();if(n===0)return 0;const e=localStorage.getItem("lastQuoteIndex");let t;if(e!==null){const i=parseInt(e,10),s=Array.from({length:n},(r,a)=>a).filter(r=>r!==i);t=s.length>0?s[qi(0,s.length-1)]:qi(0,n-1)}else t=qi(0,n-1);return localStorage.setItem("lastQuoteIndex",String(t)),t}const vE={name:"Home",components:{Card:vM},data(){return{quoteIndex:0}},computed:{quote(){return gE(this.quoteIndex)}},setup(){const{t:n}=us();return{t:n}},mounted(){this.quoteIndex=_E()}},xE={class:"home"},SE={class:"quote"},ME={class:"text"},yE={class:"author"},bE={class:"cards"};function EE(n,e,t,i,s,r){const a=Ht("Card");return It(),Kt("article",xE,[We("section",SE,[We("p",ME,wi(r.quote.text),1),We("p",yE,"~ "+wi(r.quote.author),1)]),We("section",bE,[lt(a,{title:i.t("Wheel"),imgSrc:"Wheel.png",path:"/wheel"},null,8,["title"]),lt(a,{title:i.t("Matches"),imgSrc:"Matches.png",path:"/matches"},null,8,["title"]),lt(a,{title:i.t("Coin"),imgSrc:"Coin.png",path:"/coin"},null,8,["title"]),lt(a,{title:i.t("Dice"),imgSrc:"Cubes.png",path:"/dice"},null,8,["title"])])])}const TE=rn(vE,[["render",EE],["__scopeId","data-v-ab8cf85a"]]),Bn=["FDDE3B","48B2ED","F5306B","AAE85D"];function op(n,e){let t=n%Bn.length;return n===e-1&&t===0&&(t+=1),Bn[t]}const AE={props:{iconClass:String,callback:Function,progress:{type:Number,default:0}},methods:{onClick(){this.$props.callback()}}};function RE(n,e,t,i,s,r){return It(),Kt("button",{class:"action-button",onClick:e[0]||(e[0]=(...a)=>r.onClick&&r.onClick(...a)),style:Kr({"--fill-percent":t.progress*100+"%"})},[e[1]||(e[1]=We("span",{class:"action-button-fill"},null,-1)),We("i",{class:Kn(["bi",t.iconClass].join(" "))},null,2)],4)}const Gl=rn(AE,[["render",RE],["__scopeId","data-v-50cfc083"]]),wE={props:{name:String,onConfigChanged:Function},data(){return{open:!0,moreOptionsVisible:!1}},methods:{showMoreOptions(){this.moreOptionsVisible=!this.moreOptionsVisible},openPane(){var n=document.getElementById("ConfigurationContentPane:"+this.$props.name);this.open?(n.classList.remove("pane-open"),n.classList.add("pane-closed"),document.getElementsByClassName("open-config-button")[0].classList.toggle("rotated")):(n.classList.add("pane-open"),n.classList.remove("pane-closed"),document.getElementsByClassName("open-config-button")[0].classList.toggle("rotated")),this.open=!this.open},store(){localStorage.setItem(this.$props.name,JSON.stringify(testObject))},load(){var n=localStorage.getItem(this.$props.name);n||(n=defaultConfiguration[this.$props.name])},onFormChange(n){this.$props.onConfigChanged()}}},CE={class:"config-pane"},PE={class:"button-wrapper"},IE=["id"],LE={class:"content-wrapper"};function NE(n,e,t,i,s,r){return It(),Kt("div",CE,[We("div",PE,[We("button",{id:"ConfigButton",class:"open-config-button",onClick:e[0]||(e[0]=(...a)=>r.openPane&&r.openPane(...a))},[...e[1]||(e[1]=[We("i",{class:"bi bi-arrow-right-circle"},null,-1)])])]),We("div",{class:"pane",id:"ConfigurationContentPane:"+t.name},[We("div",LE,[$v(n.$slots,"default",{},void 0)])],8,IE)])}const U_=rn(wE,[["render",NE],["__scopeId","data-v-e36c1af0"]]),Ca=Math.PI*2;function DE(n,e){let t=(e-n)%Ca;return t>Math.PI&&(t-=Ca),t<-Math.PI&&(t+=Ca),t}function OE(n,e){let t=(e-n)%Ca;return t<0&&(t+=Ca),t}function UE(n){var e=Math.PI;return n*(e/180)}function FE(n){var e=Math.PI;return n*(180/e)}function BE(n,{x:e,y:t}){return{x:Math.cos(n)*e-Math.sin(n)*t,y:Math.sin(n)*e+Math.cos(n)*t}}const F_=n=>Math.pow(n-1,2);function kE(n,e,t,i){return B_(n,e,t,F_,i)}function B_(n,e,t,i=r=>r,s){var r=0,a=setInterval(()=>{n(i(r*t/e)),r++},t),o=setTimeout(()=>{clearInterval(a),s&&typeof s=="function"&&s()},e);return{timeout:o,interval:a}}function VE({timeout:n,interval:e}){clearInterval(e),clearTimeout(n)}function HE(n,e,t,i){var s=0,r=function(a){s%i==0&&e(a.pageX,a.pageY),s++};n.addEventListener("mousedown",()=>{window.addEventListener("mousemove",r)}),n.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",r),t()}),n.addEventListener("mouseleave",()=>{window.removeEventListener("mousemove",r),t()}),"ontouchmove"in window&&n.addEventListener("ontouchmove",r)}const GE={props:{spinTime:Number,fadeOutTime:Number,config:Object,values:Array,onWon:Function},data(){return{displayedPicks:[],animations:[],progress:0,isSpinning:!1,valid:!0,errorMessage:"",angle:0,trackingStarted:!1,candidate:"",resizeObserver:null,themeObserver:null}},watch:{values:function(n,e){this.generateDisplayValues(),this.valid===!0&&this.drawWheel()}},methods:{checkSpinning(){return this.isSpinning},generateDisplayValues(){if(this.displayedPicks=[],!this.$props.values)return;let n=this.$props.values.filter(e=>!!e.name&&!!e.color);n&&(n.length<2&&(this.valid=!1,this.errorMessage="Please provide more options"),this.displayedPicks=n)},fitText(n,e,t,{x:i,y:s},r,a){const o="Ubuntu Mono";let f=30,h=0,d=0;for(;f>8;){n.font=`${f}px ${o}`,h=n.measureText(e).width,d=Math.max((r-10-h)/2,0);const m=2*d*Math.sin(a/2);if(h<=r-10&&f<=m)break;f-=1}const{x:g,y:x}=BE(-t,{x:i+d*Math.cos(t),y:s+d*Math.sin(t)});return{color:"black",fontSize:f+"px",fontFamily:o,x:g,y:x}},setupWheelTracking(n=10){if(console.log("tracking..."),this.trackingStarted)return;var e=document.getElementById("WheelCanvas"),t,i,s=[];const r=o=>(l,c)=>{const u=o.width/2,f={x:o.offsetLeft+o.width/2,y:o.offsetTop+o.height/2};this.stop();var h=(l-f.x)/u,d=(c-f.y)/u;i=Math.atan2(d,h),console.warn("center:",[f.x,f.y]),console.warn("mouse",[l,c]),console.log(h,d,FE(i)),s.length>10&&s.shift(),s.push((i-t)/n),!t&&t!=0&&(t=i),this.drawWheel(i),t=i},a=()=>{if(s.length!==0){var o=s.reduce((l,c)=>l+c)/s.length;o>0&&this.spin(i,this.$props.spinTime,this.$props.fadeOutTime,{stepTime:10,stepAngle:o*250}),s=[]}};HE(e,r(e),a,n),this.trackingStarted=!0},drawPin(n,e,t){const i=document.body.classList.contains("dark");n.save(),n.beginPath(),n.fillStyle=i?"#eee":"#333",n.strokeStyle=i?"#333":"#eee";const s=e.x,r=e.y-t+10;n.moveTo(s,r),n.lineTo(s-20,r-30),n.lineTo(s+20,r-30),n.lineTo(s,r),n.closePath(),n.stroke(),n.fill(),n.restore()},drawText(n,{x:e,y:t},i,s,{color:r,fontSize:a,fontFamily:o="Arial"}){n.save(),n.font=`${a} ${o}`,n.fillStyle=r,n.textBaseline="middle",n.rotate(s),n.fillText(i,e,t),n.restore()},drawSlice(n,{x:e,y:t},i,{start:s,end:r},{color:a,borderColor:o,borderWidth:l}){n.strokeStyle=o,n.lineWidth=l,n.fillStyle=a,n.beginPath(),n.moveTo(e,t),n.arc(e,t,i,s,r),n.closePath(),n.fill()},drawWheel(n=0){const e=document.getElementById("WheelCanvas"),t=window.innerWidth>768?Math.min(window.innerWidth*.3,window.innerHeight-200):Math.min(window.innerWidth,window.innerHeight);e.height=t||640,e.width=t||480,e.style.maxHeight=e.height+"px",e.style.maxWidth=e.height+"px";const i=e.getContext("2d");i.clearRect(0,0,e.width,e.height);const s={x:e.width/2,y:e.height/2},r=Math.min(s.x-10,s.y-10),a=2*Math.PI/this.displayedPicks.length,o=1.5*Math.PI;var l=Number.MAX_SAFE_INTEGER,c=null,u=n-a/2,f=n+a/2;this.displayedPicks.forEach((h,d)=>{this.drawSlice(i,s,r,{start:u,end:f},{color:`#${h.color}`,borderColor:"blue",borderWidth:5});var g=u+a/2;const x=Math.abs(g%(2*Math.PI)-o);l>x&&(l=x,c=h.name);const m=this.fitText(i,h.name,g,s,r,a);this.drawText(i,m,h.name,g,m),u+=a,f+=a}),this.candidate=c,this.drawPin(i,s,r)},spin(n=0,e=this.$props.spinTime||5e3,t=this.$props.fadeOutTime||3e3,{stepTime:i,stepAngle:s}={stepTime:50,stepAngle:8}){this.stop();let r=n;this.progress=0;const a=UE(s),o=Math.round(e/i),l=Math.round(t/i);let c=0;for(let m=0;m<l;m++)c+=F_(m/l);const u=a*(o+c);let f=0;var h=()=>{r+=a,f+=a,this.progress=Math.min(f/u,1),this.drawWheel(r)},d=B_(h,e,i);this.animations.push(d);var g=m=>{const p=a*m;r+=p,f+=p,this.progress=Math.min(f/u,1),this.drawWheel(r)},x=kE(g,t,i,()=>{var m,p;this.isSpinning=!1,this.progress=0,(p=(m=this.$props).onWon)==null||p.call(m,this.$data.candidate)});this.animations.push(x),this.isSpinning=!0},stop(){for(var n of this.animations)VE(n);this.animations=[],this.isSpinning=!1,this.progress=0}},mounted(){this.generateDisplayValues(),this.drawWheel();const n=document.getElementById("WheelCanvas");n.style.display="none",console.log(n),this.resizeObserver=new ResizeObserver(()=>{console.log("resized",n),this.drawWheel()}),this.resizeObserver.observe(document.getElementsByTagName("body")[0]),this.themeObserver=new MutationObserver(()=>{this.drawWheel()}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{this.drawWheel(),n.style.display="initial"},100),document.readyState==="complete"?this.setupWheelTracking():window.addEventListener("load",()=>{this.setupWheelTracking()})},beforeUnmount(){this.stop(),this.resizeObserver.disconnect(),this.themeObserver.disconnect()}},zE={ref:"wrapper",class:"wheel"},WE={key:0,class:"plaque"};function XE(n,e,t,i,s,r){return It(),Kt("div",zE,[s.valid?Dl("",!0):(It(),Kt("div",WE,[We("p",null,wi(s.errorMessage),1)])),e[0]||(e[0]=We("canvas",{id:"WheelCanvas",height:"640",width:"480"},null,-1))],512)}const $E=rn(GE,[["render",XE],["__scopeId","data-v-df0c39b2"]]),qE={props:{header:String,backgroundColor:{type:String,default:"eee"},color:{type:String,default:"333"}},data:()=>({opened:!1}),methods:{open(){this.opened=!0},close(){this.opened=!1}}};function KE(n,e,t,i,s,r){return n.opened?(It(),Kt("div",{key:0,class:"alert-box",ref:"alertBox",style:Kr({backgroundColor:`#${t.backgroundColor}`,color:`#${t.color}`})},[We("span",null,wi(t.header),1)],4)):Dl("",!0)}const zl=rn(qE,[["render",KE]]),YE={components:{Wheel:$E,ActionButton:Gl,ConfigurationPane:U_,AlertBox:zl},data(){return{maxTime:7e3,spinTime:2e3,fadeOutTime:1e4,currentWinner:"",currentWinnerColor:Bn[0],valuesString:"",removeWinner:!1,values:[{name:"Mango",color:Bn[0],instances:1},{name:"Vanilla",color:Bn[1],instances:1},{name:"Strawberry",color:Bn[2],instances:1},{name:"Lime",color:Bn[3],instances:1}],defaultValuesString:""}},setup(){const{t:n}=us();return{t:n}},methods:{onWheelWon(n){this.currentWinner=n;const e=this.values.find(t=>t.name===n);this.currentWinnerColor=e?e.color:Bn[0],this.$refs.alertBox.open(),this.removeWinner&&this.removeValue(n)},removeValue(n){const e=this.values.findIndex(i=>i.name===n);if(e===-1)return;const t=this.values.map(i=>i.name);t.splice(e,1),this.values=t.map((i,s)=>({name:i,color:op(s,t.length)})),this.valuesString=t.join(`
`)},spin(){this.$refs.wheel.isSpinning?this.$refs.wheel.stop():(this.$refs.alertBox.close(),this.$refs.wheel.spin())},duplicateValues(){const n=[];if(!this.$props.values)return;let e=this.values.filter(i=>!!i.name&&!!i.color);if(!e)return;let t=-1;switch(e.length){case 0:return;case 1:return;case 2:t=3;break;case 3:t=3;break;case 4:t=2;break;case 5:t=2;break;default:t=1;break}for(let i=0;i<t;i++)n.push(...e);return n},onFormChange(n){if(n.target.name==="values"){this.$refs.wheel.stop();const e=n.target.value.split(`
`).filter(Boolean);this.values=e.map((t,i)=>({name:t,color:op(i,e.length)}))}}},mounted(){this.defaultValuesString=this.values.map(n=>n.name).join(`
`),this.valuesString=this.defaultValuesString,this.$nextTick(()=>this.$forceUpdate())}},ZE={class:"wheel-view"},JE={class:"form-group"},jE={for:"removeWinner"};function QE(n,e,t,i,s,r){const a=Ht("AlertBox"),o=Ht("Wheel"),l=Ht("ActionButton"),c=Ht("ConfigurationPane");return It(),Kt("div",ZE,[lt(a,{header:s.currentWinner,"background-color":s.currentWinnerColor,color:"000",ref:"alertBox"},null,8,["header","background-color"]),lt(o,{ref:"wheel",class:"wheel",onWon:r.onWheelWon,values:s.values,maxTime:s.maxTime,fadeOutTime:s.fadeOutTime,spinTime:s.spinTime},null,8,["onWon","values","maxTime","fadeOutTime","spinTime"]),lt(l,{class:"spin-button",iconClass:"bi "+(n.$refs.wheel&&n.$refs.wheel.isSpinning?"bi-x":"bi-shuffle"),progress:n.$refs.wheel&&n.$refs.wheel.progress||0,callback:r.spin},null,8,["iconClass","progress","callback"]),lt(c,{name:"wheel"},{default:Dr(()=>[We("form",{onChange:e[3]||(e[3]=(...u)=>r.onFormChange&&r.onFormChange(...u))},[Ua(We("textarea",{placeholder:`Mango
Vanilla
Strawberry`,onInput:e[0]||(e[0]=(...u)=>r.onFormChange&&r.onFormChange(...u)),name:"values","onUpdate:modelValue":e[1]||(e[1]=u=>s.valuesString=u)},null,544),[[Yg,s.valuesString]]),We("div",JE,[Ua(We("input",{type:"checkbox",id:"removeWinner",name:"removeWinner","onUpdate:modelValue":e[2]||(e[2]=u=>s.removeWinner=u)},null,512),[[tS,s.removeWinner]]),We("label",jE,wi(i.t("RemoveWinner")),1)])],32)]),_:1})])}const eT=rn(YE,[["render",QE],["__scopeId","data-v-1f825287"]]),tT="/images/Hand.svg",k_=document.createElement("img");k_.src="/images/ShortMatch.png";const V_=document.createElement("img");V_.src="/images/LongMatch.png";const ra=20,aa=90,ui=14,nT={props:{numberOfMatches:Number,numberOfShorts:Number,onLost:Function},data(){return{matches:[],isAnimating:!1}},watch:{numberOfMatches(){this.reset()},numberOfShorts(){this.reset()}},computed:{canvasWidthPercent(){return Math.min(90,this.numberOfMatches*14)+"%"}},mounted(){this.reset(),document.readyState==="complete"?this.draw():window.addEventListener("load",()=>{this.draw()})},methods:{pickOne(n){this.matches.splice(n,1)[0].isShort&&this.$props.onLost(),this.matches.find(i=>i.isShort)?this.draw():this.reset()},hasNext(){return this.matches.length>0},pickNext(){this.pickOne(this.matches.length-1)},reset(){this.matches.length=0;let n=this.numberOfShorts;Array.from({length:this.numberOfMatches}).forEach((e,t)=>{this.matches.push({isShort:n!==0,index:t}),n&&n--}),this.matches=SM(this.matches).map((e,t)=>({...e,slot:t})),this.draw()},draw(n=null){const e=this.$refs.canvas;e.width=this.numberOfMatches*(ra+ui)+ui,e.height=aa+ui*2;const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),this.matches.forEach(i=>{const s=i.isShort?k_:V_,r=s.naturalWidth*(aa/s.naturalHeight),o=ui+i.slot*(ra+ui)+(ra-r)/2;let l=ui,c=1;n&&n.slot===i.slot&&(l-=n.offsetY,c=n.opacity),t.save(),t.globalAlpha=c,t.drawImage(s,o,l,r,aa),t.restore()})},animateAndPick(n){if(this.isAnimating)return;this.isAnimating=!0;const e=this.matches[n].slot,t=300,i=aa*.6,s=performance.now(),r=a=>{const o=Math.min((a-s)/t,1),l=1-Math.pow(1-o,2);this.draw({slot:e,offsetY:i*l,opacity:1-l}),o<1?requestAnimationFrame(r):(this.isAnimating=!1,this.pickOne(n))};requestAnimationFrame(r)},toCanvasCoords(n){const e=this.$refs.canvas,t=e.getBoundingClientRect(),i=e.width/t.width,s=e.height/t.height;return{x:(n.clientX-t.left)*i,y:(n.clientY-t.top)*s}},matchIndexAt(n,e){return this.matches.findIndex(t=>{const i=ui+t.slot*(ra+ui);return n>=i&&n<=i+ra&&e>=ui&&e<=ui+aa})},handleClick(n){if(this.isAnimating)return;const{x:e,y:t}=this.toCanvasCoords(n),i=this.matchIndexAt(e,t);i!==-1&&this.animateAndPick(i)},handleMouseMove(n){if(this.isAnimating)return;const{x:e,y:t}=this.toCanvasCoords(n),i=this.matchIndexAt(e,t);this.$refs.canvas.style.cursor=i!==-1?"pointer":"default"},handleMouseLeave(){this.$refs.canvas.style.cursor="default"}}},iT={class:"wrapper"},sT={class:"stage"},rT={ref:"handImage",class:"hand-image",src:tT,alt:"hand"};function aT(n,e,t,i,s,r){return It(),Kt("div",iT,[We("div",sT,[We("canvas",{onClick:e[0]||(e[0]=(...a)=>r.handleClick&&r.handleClick(...a)),onMousemove:e[1]||(e[1]=(...a)=>r.handleMouseMove&&r.handleMouseMove(...a)),onMouseleave:e[2]||(e[2]=(...a)=>r.handleMouseLeave&&r.handleMouseLeave(...a)),ref:"canvas",class:"matches-canvas",style:Kr({width:r.canvasWidthPercent})},null,36),We("img",rT,null,512)])])}const oT=rn(nT,[["render",aT]]),lT={components:{ConfigurationPane:U_,ActionButton:Gl,AlertBox:zl,Matches:oT},data(){return{numberOfMatches:3,numberOfShorts:1}},setup(){const{t:n}=us();return{t:n,MAX_NUMBER_OF_MATCHES:8,MIN_NUMBER_OF_MATCHES:2}},mounted(){this.$refs.matches.reset()},methods:{onValueChange(n){const e=Number(n.target.value);!Number.isNaN(e)&&e>=this.MIN_NUMBER_OF_MATCHES&&e<=this.MAX_NUMBER_OF_MATCHES&&(this.numberOfMatches=e,this.$refs.matches.reset())},pickNext(){this.$refs.matches.hasNext()&&(this.$refs.alertBox.close(),this.$refs.matches.pickNext())},onLost(){this.$refs.alertBox.open()}}},cT={class:"matches-view-content"},uT={class:"matches-form"},fT=["min","max","value"],hT=["max"];function dT(n,e,t,i,s,r){const a=Ht("AlertBox"),o=Ht("Matches"),l=Ht("ActionButton"),c=Ht("ConfigurationPane");return It(),Kt("div",null,[lt(a,{header:i.t("LostMessage"),"background-color":"F5306B",color:"000000",ref:"alertBox"},null,8,["header"]),We("div",cT,[lt(o,{ref:"matches",numberOfMatches:s.numberOfMatches,numberOfShorts:s.numberOfShorts,onLost:r.onLost},null,8,["numberOfMatches","numberOfShorts","onLost"]),lt(l,{class:"spin-button",iconClass:"bi bi-shuffle",callback:r.pickNext},null,8,["callback"])]),lt(c,{name:"matches"},{default:Dr(()=>[We("form",uT,[We("input",{min:i.MIN_NUMBER_OF_MATCHES,max:i.MAX_NUMBER_OF_MATCHES,type:"number",value:s.numberOfMatches,onInput:e[0]||(e[0]=(...u)=>r.onValueChange&&r.onValueChange(...u)),name:"numberOfMatches"},null,40,fT),We("label",null,wi(i.t("Matches")),1),Ua(We("input",{min:"1",max:s.numberOfMatches-1,type:"number","onUpdate:modelValue":e[1]||(e[1]=u=>s.numberOfShorts=u),name:"numberOfShorts"},null,8,hT),[[Yg,s.numberOfShorts]]),We("label",null,wi(i.t("ShortMatches")),1)])]),_:1})])}const pT=rn(lT,[["render",dT]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="185",mT=0,lp=1,gT=2,Yo=1,_T=2,Sa=3,as=0,En=1,xi=2,es=0,Cr=1,cp=2,up=3,fp=4,vT=5,Hs=100,xT=101,ST=102,MT=103,yT=104,bT=200,ET=201,TT=202,AT=203,wu=204,Cu=205,RT=206,wT=207,CT=208,PT=209,IT=210,LT=211,NT=212,DT=213,OT=214,Pu=0,Iu=1,Lu=2,Gr=3,Nu=4,Du=5,Ou=6,Uu=7,H_=0,UT=1,FT=2,Ti=0,G_=1,z_=2,W_=3,X_=4,$_=5,q_=6,K_=7,hp="attached",BT="detached",Y_=300,Zs=301,zr=302,gc=303,_c=304,Wl=306,Wr=1e3,Si=1001,dl=1002,Xt=1003,Z_=1004,Ma=1005,$t=1006,Zo=1007,Zi=1008,Cn=1009,J_=1010,j_=1011,Xa=1012,Qf=1013,Ci=1014,kn=1015,os=1016,eh=1017,th=1018,$a=1020,Q_=35902,e0=35899,t0=1021,n0=1022,Vn=1023,ls=1026,Xs=1027,nh=1028,ih=1029,Js=1030,sh=1031,rh=1033,Jo=33776,jo=33777,Qo=33778,el=33779,Fu=35840,Bu=35841,ku=35842,Vu=35843,Hu=36196,Gu=37492,zu=37496,Wu=37488,Xu=37489,pl=37490,$u=37491,qu=37808,Ku=37809,Yu=37810,Zu=37811,Ju=37812,ju=37813,Qu=37814,ef=37815,tf=37816,nf=37817,sf=37818,rf=37819,af=37820,of=37821,lf=36492,cf=36494,uf=36495,ff=36283,hf=36284,ml=36285,df=36286,qa=2300,Ka=2301,vc=2302,dp=2303,pp=2400,mp=2401,gp=2402,kT=2500,VT=0,i0=1,pf=2,HT=3200,mf=0,GT=1,Ts="",en="srgb",In="srgb-linear",gl="linear",gt="srgb",ir=7680,_p=519,zT=512,WT=513,XT=514,ah=515,$T=516,qT=517,oh=518,KT=519,gf=35044,vp="300 es",Mi=2e3,Ya=2001;function YT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ZT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JT(){const n=Za("canvas");return n.style.display="block",n}const xp={};function _l(...n){const e="THREE."+n.shift();console.log(e,...n)}function s0(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=s0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=s0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Pr(...n){const e=n.join(" ");e in xp||(xp[e]=!0,ke(...n))}function jT(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const QT={[Pu]:Iu,[Lu]:Ou,[Nu]:Uu,[Gr]:Du,[Iu]:Pu,[Ou]:Lu,[Uu]:Nu,[Du]:Gr};class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const Pa=Math.PI/180,Xr=180/Math.PI;function Jn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function lh(n,e){return(n%e+e)%e}function eA(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tA(n,e,t){return n!==e?(t-n)/(e-n):0}function Ia(n,e,t){return(1-t)*n+t*e}function nA(n,e,t,i){return Ia(n,e,1-Math.exp(-t*i))}function iA(n,e=1){return e-Math.abs(lh(n,e*2)-e)}function sA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function aA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function oA(n,e){return n+Math.random()*(e-n)}function lA(n){return n*(.5-Math.random())}function cA(n){n!==void 0&&(Sp=n);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uA(n){return n*Pa}function fA(n){return n*Xr}function hA(n){return(n&n-1)===0&&n!==0}function dA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mA(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gA={DEG2RAD:Pa,RAD2DEG:Xr,generateUUID:Jn,clamp:ot,euclideanModulo:lh,mapLinear:eA,inverseLerp:tA,lerp:Ia,damp:nA,pingpong:iA,smoothstep:sA,smootherstep:rA,randInt:aA,randFloat:oA,randFloatSpread:lA,seededRandom:cA,degToRad:uA,radToDeg:fA,isPowerOfTwo:hA,ceilPowerOfTwo:dA,floorPowerOfTwo:pA,setQuaternionFromProperEuler:mA,normalize:vt,denormalize:$n},Mh=class Mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;let st=Mh;class Ln{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+x*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yh=class yh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;let W=yh;const xc=new W,Mp=new Ln,bh=class bh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],y=s[4],_=s[7],E=s[2],A=s[5],T=s[8];return r[0]=a*x+o*M+l*E,r[3]=a*m+o*y+l*A,r[6]=a*p+o*_+l*T,r[1]=c*x+u*M+f*E,r[4]=c*m+u*y+f*A,r[7]=c*p+u*_+f*T,r[2]=h*x+d*M+g*E,r[5]=h*m+d*y+g*A,r[8]=h*p+d*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;let Ke=bh;const Sc=new Ke,yp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _A(){const n={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?gl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[In]:{primaries:e,whitePoint:i,transfer:gl,toXYZ:yp,fromXYZ:bp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:yp,fromXYZ:bp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const at=_A();function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class vA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Za("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xA=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let SA=0;const yc=new W;class jt extends Qs{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=Si,s=Si,r=$t,a=Zi,o=Vn,l=Cn,c=jt.DEFAULT_ANISOTROPY,u=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Jn(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Y_;jt.DEFAULT_ANISOTROPY=1;const Eh=class Eh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,E=(p+1)/2,A=(u+h)/4,T=(f+x)/4,S=(g+m)/4;return y>_&&y>E?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=T/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=S/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=T/r,s=S/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;let yt=Eh;class MA extends Qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new jt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ch(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends MA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class r0 extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yA extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yl=class yl{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bA,e,EA)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),gs.crossVectors(i,Rn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),gs.crossVectors(i,Rn)),gs.normalize(),_o.crossVectors(Rn,gs),s[0]=gs.x,s[4]=_o.x,s[8]=Rn.x,s[1]=gs.y,s[5]=_o.y,s[9]=Rn.y,s[2]=gs.z,s[6]=_o.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],_=i[11],E=i[15],A=s[0],T=s[4],S=s[8],I=s[12],O=s[1],D=s[5],G=s[9],ae=s[13],he=s[2],K=s[6],se=s[10],X=s[14],ie=s[3],de=s[7],Me=s[11],ye=s[15];return r[0]=a*A+o*O+l*he+c*ie,r[4]=a*T+o*D+l*K+c*de,r[8]=a*S+o*G+l*se+c*Me,r[12]=a*I+o*ae+l*X+c*ye,r[1]=u*A+f*O+h*he+d*ie,r[5]=u*T+f*D+h*K+d*de,r[9]=u*S+f*G+h*se+d*Me,r[13]=u*I+f*ae+h*X+d*ye,r[2]=g*A+x*O+m*he+p*ie,r[6]=g*T+x*D+m*K+p*de,r[10]=g*S+x*G+m*se+p*Me,r[14]=g*I+x*ae+m*X+p*ye,r[3]=M*A+y*O+_*he+E*ie,r[7]=M*T+y*D+_*K+E*de,r[11]=M*S+y*G+_*se+E*Me,r[15]=M*I+y*ae+_*X+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=l*d-c*h,y=o*d-c*f,_=o*h-l*f,E=a*d-c*u,A=a*h-l*u,T=a*f-o*u;return t*(x*M-m*y+p*_)-i*(g*M-m*E+p*A)+s*(g*y-x*E+p*T)-r*(g*_-x*A+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*o-i*a,y=t*l-s*a,_=t*c-r*a,E=i*l-s*o,A=i*c-r*o,T=s*c-r*l,S=u*x-f*g,I=u*m-h*g,O=u*p-d*g,D=f*m-h*x,G=f*p-d*x,ae=h*p-d*m,he=M*ae-y*G+_*D+E*O-A*I+T*S;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/he;return e[0]=(o*ae-l*G+c*D)*K,e[1]=(s*G-i*ae-r*D)*K,e[2]=(x*T-m*A+p*E)*K,e[3]=(h*A-f*T-d*E)*K,e[4]=(l*O-a*ae-c*I)*K,e[5]=(t*ae-s*O+r*I)*K,e[6]=(m*_-g*T-p*y)*K,e[7]=(u*T-h*_+d*y)*K,e[8]=(a*G-o*O+c*S)*K,e[9]=(i*O-t*G-r*S)*K,e[10]=(g*A-x*_+p*M)*K,e[11]=(f*_-u*A-d*M)*K,e[12]=(o*I-a*D-l*S)*K,e[13]=(t*D-i*I+s*S)*K,e[14]=(x*y-g*E-m*M)*K,e[15]=(u*E-f*y+h*M)*K,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,M=l*c,y=l*u,_=l*f,E=i.x,A=i.y,T=i.z;return s[0]=(1-(x+p))*E,s[1]=(d+_)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(h+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+y)*T,s[9]=(m-M)*T,s[10]=(1-(h+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(s[0],s[1],s[2]).length();const o=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);const c=1/a,u=1/o,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Mi,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Mi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ya)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Mi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Mi)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ya)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};yl.prototype.isMatrix4=!0;let et=yl;const rr=new W,zn=new et,bA=new W(0,0,0),EA=new W(1,1,1),gs=new W,_o=new W,Rn=new W,Ep=new et,Tp=new Ln;class Pi{constructor(e=0,t=0,i=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TA=0;const Ap=new W,ar=new Ln,Fi=new et,vo=new W,oa=new W,AA=new W,RA=new Ln,Rp=new W(1,0,0),wp=new W(0,1,0),Cp=new W(0,0,1),Pp={type:"added"},wA={type:"removed"},or={type:"childadded",child:null},bc={type:"childremoved",child:null};class Lt extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new W,t=new Pi,i=new Ln,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ke}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(oa,vo,this.up):Fi.lookAt(vo,oa,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Fi),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),or.child=e,this.dispatchEvent(or),or.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wA),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,AA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,RA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new W(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ji extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=lh(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Tc(a,r,e+1/3),this.g=Tc(a,r,e),this.b=Tc(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=a0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return at.workingToColorSpace(ln.copy(this),e),Math.round(ot(ln.r*255,0,255))*65536+Math.round(ot(ln.g*255,0,255))*256+Math.round(ot(ln.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=en){at.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(xo);const i=Ia(_s.h,xo.h,t),s=Ia(_s.s,xo.s,t),r=Ia(_s.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new qe;qe.NAMES=a0;class o0 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wn=new W,Bi=new W,Ac=new W,ki=new W,lr=new W,cr=new W,Ip=new W,Rc=new W,wc=new W,Cc=new W,Pc=new yt,Ic=new yt,Lc=new yt;class qn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),Bi.subVectors(i,t),Ac.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(Bi),l=Wn.dot(Ac),c=Bi.dot(Bi),u=Bi.dot(Ac),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pc,r.x),a.addScaledVector(Ic,r.y),a.addScaledVector(Lc,r.z),a}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),Bi.subVectors(e,t),Wn.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),Wn.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;lr.subVectors(s,i),cr.subVectors(r,i),Rc.subVectors(e,i);const l=lr.dot(Rc),c=cr.dot(Rc);if(l<=0&&c<=0)return t.copy(i);wc.subVectors(e,s);const u=lr.dot(wc),f=cr.dot(wc);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(lr,a);Cc.subVectors(e,r);const d=lr.dot(Cc),g=cr.dot(Cc);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(cr,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Ip.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Ip,o);const p=1/(m+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ii{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Mo.subVectors(this.max,la),ur.subVectors(e.a,la),fr.subVectors(e.b,la),hr.subVectors(e.c,la),vs.subVectors(fr,ur),xs.subVectors(hr,fr),Ns.subVectors(ur,hr);let t=[0,-vs.z,vs.y,0,-xs.z,xs.y,0,-Ns.z,Ns.y,vs.z,0,-vs.x,xs.z,0,-xs.x,Ns.z,0,-Ns.x,-vs.y,vs.x,0,-xs.y,xs.x,0,-Ns.y,Ns.x,0];return!Nc(t,ur,fr,hr,Mo)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,ur,fr,hr,Mo))?!1:(yo.crossVectors(vs,xs),t=[yo.x,yo.y,yo.z],Nc(t,ur,fr,hr,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,So=new ii,ur=new W,fr=new W,hr=new W,vs=new W,xs=new W,Ns=new W,la=new W,Mo=new W,yo=new W,Ds=new W;function Nc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);const o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=i.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zt=new W,bo=new st;let PA=0;class Mn extends Qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gf,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class l0 extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class c0 extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jn extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const IA=new ii,ca=new W,Dc=new W;class Li{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ca,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Dc)),this.expandByPoint(ca.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LA=0;const On=new et,Oc=new Lt,dr=new W,wn=new ii,ua=new ii,Jt=new W;class Gn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YT(e)?c0:l0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(wn.min,ua.min),wn.expandByPoint(Jt),Jt.addVectors(wn.max,ua.max),wn.expandByPoint(Jt)):(wn.expandByPoint(ua.min),wn.expandByPoint(ua.max))}wn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),Jt.add(dr)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new W,l[S]=new W;const c=new W,u=new W,f=new W,h=new st,d=new st,g=new st,x=new W,m=new W;function p(S,I,O){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,O),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,O),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[S].add(x),o[I].add(x),o[O].add(x),l[S].add(m),l[I].add(m),l[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let S=0,I=M.length;S<I;++S){const O=M[S],D=O.start,G=O.count;for(let ae=D,he=D+G;ae<he;ae+=3)p(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const y=new W,_=new W,E=new W,A=new W;function T(S){E.fromBufferAttribute(s,S),A.copy(E);const I=o[S];y.copy(I),y.sub(E.multiplyScalar(E.dot(I))).normalize(),_.crossVectors(A,I);const D=_.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,D)}for(let S=0,I=M.length;S<I;++S){const O=M[S],D=O.start,G=O.count;for(let ae=D,he=D+G;ae<he;ae+=3)T(e.getX(ae+0)),T(e.getX(ae+1)),T(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Mn(h,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class NA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gf,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new W;class fh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=$n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_l("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_l("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let DA=0;class Ri extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Cr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Cu,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Cu&&(i.blendDst=this.blendDst),this.blendEquation!==Hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new W,Uc=new W,Eo=new W,Ss=new W,Fc=new W,To=new W,Bc=new W;class ao{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uc.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(Uc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=Ss.dot(this.direction),l=-Ss.dot(Eo),c=Ss.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Uc).addScaledVector(Eo,h),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,s,r){Fc.subVectors(t,e),To.subVectors(i,e),Bc.crossVectors(Fc,To);let a=this.direction.dot(Bc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ss.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Ss,To));if(l<0)return null;const c=o*this.direction.dot(Fc.cross(Ss));if(c<0||l+c>a)return null;const u=-o*Ss.dot(Bc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $s extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lp=new et,Os=new ao,Ao=new Li,Np=new W,Ro=new W,wo=new W,Co=new W,kc=new W,Po=new W,Dp=new W,Io=new W;class Nn extends Lt{constructor(e=new Gn,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(kc.fromBufferAttribute(f,e),a?Po.addScaledVector(kc,u):Po.addScaledVector(kc.sub(t),u))}t.add(Po)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(Ao.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Ao,Np)===null||Os.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Lp.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=y;_<E;_+=3){const A=o.getX(_),T=o.getX(_+1),S=o.getX(_+2);s=Lo(this,p,e,i,c,u,f,A,T,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);s=Lo(this,a,e,i,c,u,f,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=y;_<E;_+=3){const A=_,T=_+1,S=_+2;s=Lo(this,p,e,i,c,u,f,A,T,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=m,y=m+1,_=m+2;s=Lo(this,a,e,i,c,u,f,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function OA(n,e,t,i,s,r,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===as,o),l===null)return null;Io.copy(o),Io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:n}}function Lo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ro),n.getVertexPosition(l,wo),n.getVertexPosition(c,Co);const u=OA(n,e,t,i,Ro,wo,Co,Dp);if(u){const f=new W;qn.getBarycoord(Dp,Ro,wo,Co,f),s&&(u.uv=qn.getInterpolatedAttribute(s,o,l,c,f,new st)),r&&(u.uv1=qn.getInterpolatedAttribute(r,o,l,c,f,new st)),a&&(u.normal=qn.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};qn.getNormal(Ro,wo,Co,h.normal),u.face=h,u.barycoord=f}return u}const fa=new yt,Op=new yt,Up=new yt,UA=new yt,Fp=new et,No=new W,Vc=new Li,Bp=new et,Hc=new ao;class FA extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hp,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(s),e.ray.intersectsSphere(Vc)!==!1&&(Bp.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Bp),!(this.boundingBox!==null&&Hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BT?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Op.fromBufferAttribute(s.attributes.skinIndex,e),Up.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fa.copy(t),t.set(0,0,0,0)):(fa.set(...t,1),t.set(0,0,0)),fa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Up.getComponent(r);if(a!==0){const o=Op.getComponent(r);Fp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(UA.copy(fa).applyMatrix4(Fp),a)}}return t.isVector4&&(t.w=fa.w),t.applyMatrix4(this.bindMatrixInverse)}}class u0 extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hh extends jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,u=Xt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kp=new et,BA=new et;class dh{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:BA;kp.multiplyMatrices(o,t[r]),kp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hh(t,e,e,Vn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new u0),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class _f extends Mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new et,Vp=new et,Do=[],Hp=new ii,kA=new et,ha=new Nn,da=new Li;class VA extends Nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _f(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),Hp.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),da.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Vp.multiplyMatrices(i,pr),ha.matrixWorld=Vp,ha.raycast(e,Do);for(let a=0,o=Do.length;a<o;a++){const l=Do[a];l.instanceId=r,l.object=this,t.push(l)}Do.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _f(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hh(new Float32Array(s*this.count),s,this.count,nh,kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gc=new W,HA=new W,GA=new Ke;class ks{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Gc.subVectors(i,t).cross(HA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Gc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GA.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Li,zA=new st(.5,.5),Oo=new W;class ph{constructor(e=new ks,t=new ks,i=new ks,s=new ks,r=new ks,a=new ks){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],y=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,p-g,E-M).normalize(),s[1].setComponents(c+a,d+u,p+g,E+M).normalize(),s[2].setComponents(c+o,d+f,p+x,E+y).normalize(),s[3].setComponents(c-o,d-f,p-x,E-y).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,p-m,E-_).normalize();else if(s[4].setComponents(c-l,d-h,p-m,E-_).normalize(),t===Mi)s[5].setComponents(c+l,d+h,p+m,E+_).normalize();else if(t===Ya)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);const t=zA.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f0 extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vl=new W,xl=new W,Gp=new et,pa=new ao,Uo=new Li,zc=new W,zp=new W;class mh extends Lt{constructor(e=new Gn,t=new f0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)vl.fromBufferAttribute(t,s-1),xl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=vl.distanceTo(xl);e.setAttribute("lineDistance",new jn(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Gp.copy(s).invert(),pa.copy(e.ray).applyMatrix4(Gp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),M=u.getX(x+1),y=Fo(this,e,pa,l,p,M,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Fo(this,e,pa,l,x,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){const p=Fo(this,e,pa,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Fo(this,e,pa,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fo(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(vl.fromBufferAttribute(o,s),xl.fromBufferAttribute(o,r),t.distanceSqToSegment(vl,xl,zc,zp)>i)return;zc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:zp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Wp=new W,Xp=new W;class WA extends mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wp.fromBufferAttribute(t,s),Xp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new jn(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XA extends mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class h0 extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $p=new et,vf=new ao,Bo=new Li,ko=new W;class $A extends Lt{constructor(e=new Gn,t=new h0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;$p.copy(s).invert(),vf.copy(e.ray).applyMatrix4($p);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,x=d;g<x;g++){const m=c.getX(g);ko.fromBufferAttribute(f,m),qp(ko,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,x=d;g<x;g++)ko.fromBufferAttribute(f,g),qp(ko,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qp(n,e,t,i,s,r,a){const o=vf.distanceSqToPoint(n);if(o<t){const l=new W;vf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class d0 extends jt{constructor(e=[],t=Zs,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $r extends jt{constructor(e,t,i=Ci,s,r,a,o=Xt,l=Xt,c,u=ls,f=1){if(u!==ls&&u!==Xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qA extends $r{constructor(e,t=Ci,i=Zs,s,r,a=Xt,o=Xt,l,c=ls){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class p0 extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oo extends Gn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(x,m,p,M,y,_,E,A,T,S,I){const O=_/T,D=E/S,G=_/2,ae=E/2,he=A/2,K=T+1,se=S+1;let X=0,ie=0;const de=new W;for(let Me=0;Me<se;Me++){const ye=Me*D-ae;for(let be=0;be<K;be++){const Ze=be*O-G;de[x]=Ze*M,de[m]=ye*y,de[p]=he,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=A>0?1:-1,u.push(de.x,de.y,de.z),f.push(be/T),f.push(1-Me/S),X+=1}}for(let Me=0;Me<S;Me++)for(let ye=0;ye<T;ye++){const be=h+ye+K*Me,Ze=h+ye+K*(Me+1),ct=h+(ye+1)+K*(Me+1),Je=h+(ye+1)+K*Me;l.push(be,Ze,Je),l.push(Ze,ct,Je),ie+=6}o.addGroup(d,ie,I),d+=ie,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xl extends Gn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let y=0;y<c;y++){const _=y*f-r;g.push(_,-M,0),x.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,_=M+c*(p+1),E=M+1+c*(p+1),A=M+1+c*p;d.push(y,_,A),d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}function qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Kp(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Kp(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=qr(n[t]);for(const s in i)e[s]=i[s]}return e}function Kp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function KA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function m0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const YA={clone:qr,merge:mn};var ZA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZA,this.fragmentShader=JA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=KA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new st().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jA extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gh extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ni extends gh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class QA extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eR extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tR(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Yp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function nR(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class Yr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class iR extends Yr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pp,endingEnd:pp}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mp:r=e,o=2*t-i;break;case gp:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case mp:a=e,l=2*i-t;break;case gp:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,M=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+M*a[c+E]+y*a[l+E]+_*a[f+E];return r}}class sR extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}}class rR extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class aR extends Yr{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){const g=(i-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}const h=o*2,d=e-1;for(let g=0;g!==o;++g){const x=a[c+g],m=a[l+g],p=d*h+g*2,M=f[p],y=f[p+1],_=e*h+g*2,E=u[_],A=u[_+1];let T=(i-t)/(s-t),S,I,O,D,G;for(let ae=0;ae<8;ae++){S=T*T,I=S*T,O=1-T,D=O*O,G=D*O;const K=G*t+3*D*T*M+3*O*S*E+I*s-i;if(Math.abs(K)<1e-10)break;const se=3*D*(M-t)+6*O*T*(E-M)+3*S*(s-E);if(Math.abs(se)<1e-10)break;T=T-K/se,T=Math.max(0,Math.min(1,T))}r[g]=G*x+3*D*T*y+3*O*S*A+I*m}return r}}class si{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new aR(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case dp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return dp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ZT(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const f=o*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const x=t[f+g];if(x!==t[h+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ka;class Zr extends si{constructor(e,t,i){super(e,t,i)}}Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=qa;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class g0 extends si{constructor(e,t,i,s){super(e,t,i,s)}}g0.prototype.ValueTypeName="color";class Ja extends si{constructor(e,t,i,s){super(e,t,i,s)}}Ja.prototype.ValueTypeName="number";class oR extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ja extends si{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new oR(this.times,this.values,this.getValueSize(),e)}}ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends si{constructor(e,t,i){super(e,t,i)}}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=qa;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sl extends si{constructor(e,t,i,s){super(e,t,i,s)}}Sl.prototype.ValueTypeName="vector";class lR{constructor(e="",t=-1,i=[],s=kT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(uR(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=tR(l);l=Yp(l,1,u),c=Yp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ja(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ja;case"vector":case"vector2":case"vector3":case"vector4":return Sl;case"color":return g0;case"quaternion":return ja;case"bool":case"boolean":return Zr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cR(n.type);if(n.times===void 0){const t=[],i=[];nR(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ji={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Zp(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Zp(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Zp(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fR{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hR=new fR;class jr{constructor(e){this.manager=e!==void 0?e:hR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class dR extends Error{constructor(e,t){super(e),this.response=t}}class _0 extends jr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:i,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,T=u.length;A<T;A++){const S=u[A];S.onProgress&&S.onProgress(E)}p.enqueue(_),M()}},y=>{p.error(y)})}}});return new Response(m)}else throw new dR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ji.add(`file:${e}`,c);const u=Gi[e];delete Gi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mr=new WeakMap;class pR extends jr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ji.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=mr.get(a);f===void 0&&(f=[],mr.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Za("img");function l(){u(),t&&t(this);const f=mr.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}mr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),ji.remove(`image:${e}`);const h=mr.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ji.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class mR extends jr{constructor(e){super(e)}load(e,t,i,s){const r=new jt,a=new pR(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class $l extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Wc=new et,Jp=new W,jp=new W;class _h{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ya||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ho=new W,Go=new Ln,fi=new W;class v0 extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ho,Go,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new W,Qp=new st,em=new st;class un extends v0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Qp,em),t.subVectors(em,Qp)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gR extends _h{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _R extends $l{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class vR extends _h{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class xR extends $l{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ql extends v0{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class SR extends _h{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qa extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new SR}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class x0 extends $l{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class La{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xc=new WeakMap;class MR extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ji.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Xc.has(a)===!0?(s&&s(Xc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){ji.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Xc.set(l,c),ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const gr=-90,_r=1;class yR extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(gr,_r,e,t);s.layers=this.layers,this.add(s);const r=new un(gr,_r,e,t);r.layers=this.layers,this.add(r);const a=new un(gr,_r,e,t);a.layers=this.layers,this.add(a);const o=new un(gr,_r,e,t);o.layers=this.layers,this.add(o);const l=new un(gr,_r,e,t);l.layers=this.layers,this.add(l);const c=new un(gr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bR extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vh="\\[\\]\\.:\\/",ER=new RegExp("["+vh+"]","g"),xh="[^"+vh+"]",TR="[^"+vh.replace("\\.","")+"]",AR=/((?:WC+[\/:])*)/.source.replace("WC",xh),RR=/(WCOD+)?/.source.replace("WCOD",TR),wR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),CR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),PR=new RegExp("^"+AR+RR+wR+CR+"$"),IR=["material","materials","bones","map"];class LR{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ER,"")}static parseTrackName(e){const t=PR.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);IR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=LR;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tm=new et;class S0{constructor(e,t,i=0,s=1/0){this.ray=new ao(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(e,t=!0,i=[]){return xf(e,this,i,t),i.sort(nm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xf(e[s],this,i,t);return i.sort(nm),i}}function nm(n,e){return n.distance-e.distance}function xf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)xf(r[a],e,t,!0)}}const Th=class Th{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Th.prototype.isMatrix2=!0;let im=Th;function sm(n,e,t,i){const s=NR(i);switch(t){case t0:return n*e;case nh:return n*e/s.components*s.byteLength;case ih:return n*e/s.components*s.byteLength;case Js:return n*e*2/s.components*s.byteLength;case sh:return n*e*2/s.components*s.byteLength;case n0:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case rh:return n*e*4/s.components*s.byteLength;case Jo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qo:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:case Vu:return Math.max(n,16)*Math.max(e,8)/4;case Fu:case ku:return Math.max(n,8)*Math.max(e,8)/2;case Hu:case Gu:case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zu:case pl:case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lf:case cf:case uf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ff:case hf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case df:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NR(n){switch(n){case Cn:case J_:return{byteLength:1,components:1};case Xa:case j_:case os:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Ci:case Qf:case kn:return{byteLength:4,components:1};case Q_:case e0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function DR(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var OR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UR=`#ifdef USE_ALPHAHASH
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
#endif`,FR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KR=`#ifdef USE_IRIDESCENCE
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
#endif`,YR=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sw=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,rw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,aw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fw="gl_FragColor = linearToOutputTexel( gl_FragColor );",hw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
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
}`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Aw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Rw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ww=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xw=`#if defined( USE_POINTS_UV )
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
#endif`,$w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sC=`#ifdef USE_NORMALMAP
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
#endif`,rC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_C=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,SC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EC=`#ifdef USE_SKINNING
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
#endif`,TC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wC=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PC=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,GC=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,WC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$C=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qC=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YC=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZC=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,JC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,QC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,e1=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,t1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,n1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,s1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,r1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,l1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,c1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,u1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,h1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,p1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,tt={alphahash_fragment:OR,alphahash_pars_fragment:UR,alphamap_fragment:FR,alphamap_pars_fragment:BR,alphatest_fragment:kR,alphatest_pars_fragment:VR,aomap_fragment:HR,aomap_pars_fragment:GR,batching_pars_vertex:zR,batching_vertex:WR,begin_vertex:XR,beginnormal_vertex:$R,bsdfs:qR,iridescence_fragment:KR,bumpmap_pars_fragment:YR,clipping_planes_fragment:ZR,clipping_planes_pars_fragment:JR,clipping_planes_pars_vertex:jR,clipping_planes_vertex:QR,color_fragment:ew,color_pars_fragment:tw,color_pars_vertex:nw,color_vertex:iw,common:sw,cube_uv_reflection_fragment:rw,defaultnormal_vertex:aw,displacementmap_pars_vertex:ow,displacementmap_vertex:lw,emissivemap_fragment:cw,emissivemap_pars_fragment:uw,colorspace_fragment:fw,colorspace_pars_fragment:hw,envmap_fragment:dw,envmap_common_pars_fragment:pw,envmap_pars_fragment:mw,envmap_pars_vertex:gw,envmap_physical_pars_fragment:Rw,envmap_vertex:_w,fog_vertex:vw,fog_pars_vertex:xw,fog_fragment:Sw,fog_pars_fragment:Mw,gradientmap_pars_fragment:yw,lightmap_pars_fragment:bw,lights_lambert_fragment:Ew,lights_lambert_pars_fragment:Tw,lights_pars_begin:Aw,lights_toon_fragment:ww,lights_toon_pars_fragment:Cw,lights_phong_fragment:Pw,lights_phong_pars_fragment:Iw,lights_physical_fragment:Lw,lights_physical_pars_fragment:Nw,lights_fragment_begin:Dw,lights_fragment_maps:Ow,lights_fragment_end:Uw,lightprobes_pars_fragment:Fw,logdepthbuf_fragment:Bw,logdepthbuf_pars_fragment:kw,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:Hw,map_fragment:Gw,map_pars_fragment:zw,map_particle_fragment:Ww,map_particle_pars_fragment:Xw,metalnessmap_fragment:$w,metalnessmap_pars_fragment:qw,morphinstance_vertex:Kw,morphcolor_vertex:Yw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Jw,morphtarget_vertex:jw,normal_fragment_begin:Qw,normal_fragment_maps:eC,normal_pars_fragment:tC,normal_pars_vertex:nC,normal_vertex:iC,normalmap_pars_fragment:sC,clearcoat_normal_fragment_begin:rC,clearcoat_normal_fragment_maps:aC,clearcoat_pars_fragment:oC,iridescence_pars_fragment:lC,opaque_fragment:cC,packing:uC,premultiplied_alpha_fragment:fC,project_vertex:hC,dithering_fragment:dC,dithering_pars_fragment:pC,roughnessmap_fragment:mC,roughnessmap_pars_fragment:gC,shadowmap_pars_fragment:_C,shadowmap_pars_vertex:vC,shadowmap_vertex:xC,shadowmask_pars_fragment:SC,skinbase_vertex:MC,skinning_pars_vertex:yC,skinning_vertex:bC,skinnormal_vertex:EC,specularmap_fragment:TC,specularmap_pars_fragment:AC,tonemapping_fragment:RC,tonemapping_pars_fragment:wC,transmission_fragment:CC,transmission_pars_fragment:PC,uv_pars_fragment:IC,uv_pars_vertex:LC,uv_vertex:NC,worldpos_vertex:DC,background_vert:OC,background_frag:UC,backgroundCube_vert:FC,backgroundCube_frag:BC,cube_vert:kC,cube_frag:VC,depth_vert:HC,depth_frag:GC,distance_vert:zC,distance_frag:WC,equirect_vert:XC,equirect_frag:$C,linedashed_vert:qC,linedashed_frag:KC,meshbasic_vert:YC,meshbasic_frag:ZC,meshlambert_vert:JC,meshlambert_frag:jC,meshmatcap_vert:QC,meshmatcap_frag:e1,meshnormal_vert:t1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:s1,meshphysical_vert:r1,meshphysical_frag:a1,meshtoon_vert:o1,meshtoon_frag:l1,points_vert:c1,points_frag:u1,shadow_vert:f1,shadow_frag:h1,sprite_vert:d1,sprite_frag:p1},we={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},_i={basic:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new qe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:mn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:mn([we.lights,we.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const zo={r:0,b:0,g:0},m1=new et,y0=new Ke;y0.set(-1,0,0,0,1,0,0,0,1);function g1(n,e,t,i,s,r){const a=new qe(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const _=M.backgroundBlurriness>0;y=e.get(y,_)}return y}function g(M){let y=!1;const _=d(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,y){const _=d(y);_&&(_.isCubeTexture||_.mapping===Wl)?(c===void 0&&(c=new Nn(new oo(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:qr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(y0),c.material.toneMapped=at.getTransfer(_.colorSpace)!==gt,(u!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Nn(new Xl(2,2),new Ii({name:"BackgroundMaterial",uniforms:qr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(zo,m0(n)),t.buffers.color.setClear(zo.r,zo.g,zo.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:p}}function _1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(D,G,ae,he,K){let se=!1;const X=f(D,he,ae,G);r!==X&&(r=X,c(r.object)),se=d(D,he,ae,K),se&&g(D,he,ae,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,_(D,G,ae,he),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,G,ae,he){const K=he.wireframe===!0;let se=i[G.id];se===void 0&&(se={},i[G.id]=se);const X=D.isInstancedMesh===!0?D.id:0;let ie=se[X];ie===void 0&&(ie={},se[X]=ie);let de=ie[ae.id];de===void 0&&(de={},ie[ae.id]=de);let Me=de[K];return Me===void 0&&(Me=h(l()),de[K]=Me),Me}function h(D){const G=[],ae=[],he=[];for(let K=0;K<t;K++)G[K]=0,ae[K]=0,he[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ae,attributeDivisors:he,object:D,attributes:{},index:null}}function d(D,G,ae,he){const K=r.attributes,se=G.attributes;let X=0;const ie=ae.getAttributes();for(const de in ie)if(ie[de].location>=0){const ye=K[de];let be=se[de];if(be===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;X++}return r.attributesNum!==X||r.index!==he}function g(D,G,ae,he){const K={},se=G.attributes;let X=0;const ie=ae.getAttributes();for(const de in ie)if(ie[de].location>=0){let ye=se[de];ye===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),K[de]=be,X++}r.attributes=K,r.attributesNum=X,r.index=he}function x(){const D=r.newAttributes;for(let G=0,ae=D.length;G<ae;G++)D[G]=0}function m(D){p(D,0)}function p(D,G){const ae=r.newAttributes,he=r.enabledAttributes,K=r.attributeDivisors;ae[D]=1,he[D]===0&&(n.enableVertexAttribArray(D),he[D]=1),K[D]!==G&&(n.vertexAttribDivisor(D,G),K[D]=G)}function M(){const D=r.newAttributes,G=r.enabledAttributes;for(let ae=0,he=G.length;ae<he;ae++)G[ae]!==D[ae]&&(n.disableVertexAttribArray(ae),G[ae]=0)}function y(D,G,ae,he,K,se,X){X===!0?n.vertexAttribIPointer(D,G,ae,K,se):n.vertexAttribPointer(D,G,ae,he,K,se)}function _(D,G,ae,he){x();const K=he.attributes,se=ae.getAttributes(),X=G.defaultAttributeValues;for(const ie in se){const de=se[ie];if(de.location>=0){let Me=K[ie];if(Me===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Me!==void 0){const ye=Me.normalized,be=Me.itemSize,Ze=e.get(Me);if(Ze===void 0)continue;const ct=Ze.buffer,Je=Ze.type,le=Ze.bytesPerElement,V=Je===n.INT||Je===n.UNSIGNED_INT||Me.gpuType===Qf;if(Me.isInterleavedBufferAttribute){const Z=Me.data,ce=Z.stride,me=Me.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<de.locationSize;Se++)p(de.location+Se,Z.meshPerAttribute);D.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<de.locationSize;Se++)m(de.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Se=0;Se<de.locationSize;Se++)y(de.location+Se,be/de.locationSize,Je,ye,ce*le,(me+be/de.locationSize*Se)*le,V)}else{if(Me.isInstancedBufferAttribute){for(let Z=0;Z<de.locationSize;Z++)p(de.location+Z,Me.meshPerAttribute);D.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Z=0;Z<de.locationSize;Z++)m(de.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Z=0;Z<de.locationSize;Z++)y(de.location+Z,be/de.locationSize,Je,ye,be*le,be/de.locationSize*Z*le,V)}}else if(X!==void 0){const ye=X[ie];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(de.location,ye);break;case 3:n.vertexAttrib3fv(de.location,ye);break;case 4:n.vertexAttrib4fv(de.location,ye);break;default:n.vertexAttrib1fv(de.location,ye)}}}}M()}function E(){I();for(const D in i){const G=i[D];for(const ae in G){const he=G[ae];for(const K in he){const se=he[K];for(const X in se)u(se[X].object),delete se[X];delete he[K]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const ae in G){const he=G[ae];for(const K in he){const se=he[K];for(const X in se)u(se[X].object),delete se[X];delete he[K]}}delete i[D.id]}function T(D){for(const G in i){const ae=i[G];for(const he in ae){const K=ae[he];if(K[D.id]===void 0)continue;const se=K[D.id];for(const X in se)u(se[X].object),delete se[X];delete K[D.id]}}}function S(D){for(const G in i){const ae=i[G],he=D.isInstancedMesh===!0?D.id:0,K=ae[he];if(K!==void 0){for(const se in K){const X=K[se];for(const ie in X)u(X[ie].object),delete X[ie];delete K[se]}delete ae[he],Object.keys(ae).length===0&&delete i[G]}}}function I(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function v1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function x1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Vn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const S=T===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!S)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:E,samples:A}}function S1(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ks,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,y=M*4;let _=p.clippingState||null;l.value=_,_=u(g,h,y,d);for(let E=0;E!==y;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const As=4,rm=[.125,.215,.35,.446,.526,.582],Gs=20,M1=256,ma=new ql,am=new qe;let $c=null,qc=0,Kc=0,Yc=!1;const y1=new W;class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=y1}=r;$c=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($c,qc,Kc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:os,format:Vn,colorSpace:In,depthBuffer:!1},s=lm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(r)),this._blurMaterial=T1(r,e,t),this._ggxMaterial=E1(r,e,t)}return s}_compileMaterial(e){const t=new Nn(new Gn,e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,i,s,r){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(am),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new oo,new $s({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(am),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const E=this._cubeSize;vr(s,_*E,y>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zs||e.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-As?i-g+As:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,vr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,ma),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,vr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,ma)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Gs;m>Gs&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let M=0;for(let T=0;T<Gs;++T){const S=T/x,I=Math.exp(-S*S/2);p.push(I),T===0?M+=I:T<m&&(M+=2*I)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const _=this._sizeLods[s],E=3*_*(s>y-As?s-y+As:0),A=4*(this._cubeSize-_);vr(t,E,A,3*_,2*_),l.setRenderTarget(t),l.render(f,ma)}}function b1(n){const e=[],t=[],i=[];let s=n;const r=n-As+1+rm.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-As?l=rm[a-n+As-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,S=A>2?0:-1,I=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];M.set(I,x*g*A),y.set(h,m*g*A);const O=[A,A,A,A,A,A];_.set(O,p*g*A)}const E=new Gn;E.setAttribute("position",new Mn(M,x)),E.setAttribute("uv",new Mn(y,m)),E.setAttribute("faceIndex",new Mn(_,p)),i.push(new Nn(E,null)),s>As&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function lm(n,e,t){const i=new Ai(n,e,t);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function E1(n,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function T1(n,e,t){const i=new Float32Array(Gs),s=new W(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function cm(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function um(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}class b0 extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new d0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oo(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:es});r.uniforms.tEquirect.value=t;const a=new Nn(s,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=$t),new yR(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function A1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===gc||d===_c)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new b0(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===gc||d===_c,x=d===Zs||d===zr;if(g||x){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new om(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new om(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===gc?h.mapping=Zs:d===_c&&(h.mapping=zr),h}function l(h){let d=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function R1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Pr("WebGLRenderer: "+i+" extension not supported."),s}}}function w1(n,e,t,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let y=0,_=M.length;y<_;y+=3){const E=M[y+0],A=M[y+1],T=M[y+2];h.push(E,A,A,T,T,E)}}else{const M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const E=y+0,A=y+1,T=y+2;h.push(E,A,A,T,T,E)}}const m=new(g.count>=65535?c0:l0)(h,1);m.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function C1(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function P1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function I1(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let O=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",O)};var d=O;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let E=o.attributes.position.count*_,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*f),S=new r0(T,E,A,f);S.type=kn,S.needsUpdate=!0;const I=_*4;for(let D=0;D<f;D++){const G=p[D],ae=M[D],he=y[D],K=E*A*4*D;for(let se=0;se<G.count;se++){const X=se*I;g===!0&&(s.fromBufferAttribute(G,se),T[K+X+0]=s.x,T[K+X+1]=s.y,T[K+X+2]=s.z,T[K+X+3]=0),x===!0&&(s.fromBufferAttribute(ae,se),T[K+X+4]=s.x,T[K+X+5]=s.y,T[K+X+6]=s.z,T[K+X+7]=0),m===!0&&(s.fromBufferAttribute(he,se),T[K+X+8]=s.x,T[K+X+9]=s.y,T[K+X+10]=s.z,T[K+X+11]=he.itemSize===4?s.w:1)}}h={count:f,texture:S,size:new st(E,A)},i.set(o,h),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function L1(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const N1={[G_]:"LINEAR_TONE_MAPPING",[z_]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[K_]:"NEUTRAL_TONE_MAPPING",[$_]:"CUSTOM_TONE_MAPPING"};function D1(n,e,t,i,s,r){const a=new Ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new $r(e,t):void 0}),o=new Ai(e,t,{type:os,depthBuffer:!1,stencilBuffer:!1}),l=new Gn;l.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jn([0,2,0,0,2,0],2));const c=new jA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Nn(l,c),f=new ql(-1,1,1,-1,0,1);let h=null,d=null,g=!1,x,m=null,p=[],M=!1;this.setSize=function(y,_){a.setSize(y,_),o.setSize(y,_);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(y,_)}},this.setEffects=function(y){p=y,M=p.length>0&&p[0].isRenderPass===!0;const _=a.width,E=a.height;for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(_,E)}},this.begin=function(y,_){if(g||y.toneMapping===Ti&&p.length===0)return!1;if(m=_,_!==null){const E=_.width,A=_.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return M===!1&&y.setRenderTarget(a),x=y.toneMapping,y.toneMapping=Ti,!0},this.hasRenderPass=function(){return M},this.end=function(y,_){y.toneMapping=x,g=!0;let E=a,A=o;for(let T=0;T<p.length;T++){const S=p[T];if(S.enabled!==!1&&(S.render(y,A,E,_),S.needsSwap!==!1)){const I=E;E=A,A=I}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,c.defines={},at.getTransfer(h)===gt&&(c.defines.SRGB_TRANSFER="");const T=N1[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const E0=new jt,Sf=new $r(1,1),T0=new r0,A0=new yA,R0=new d0,fm=[],hm=[],dm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function Qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=fm[s];if(r===void 0&&(r=new Float32Array(s),fm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yl(n,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function k1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;mm.set(i),n.uniformMatrix2fv(this.addr,!1,mm),Zt(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;pm.set(i),n.uniformMatrix3fv(this.addr,!1,pm),Zt(t,i)}}function H1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;dm.set(i),n.uniformMatrix4fv(this.addr,!1,dm),Zt(t,i)}}function G1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function X1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function $1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Z1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sf.compareFunction=t.isReversedDepthBuffer()?oh:ah,r=Sf):r=E0,t.setTexture2D(e||r,s)}function J1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||A0,s)}function j1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||R0,s)}function Q1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||T0,s)}function eP(n){switch(n){case 5126:return O1;case 35664:return U1;case 35665:return F1;case 35666:return B1;case 35674:return k1;case 35675:return V1;case 35676:return H1;case 5124:case 35670:return G1;case 35667:case 35671:return z1;case 35668:case 35672:return W1;case 35669:case 35673:return X1;case 5125:return $1;case 36294:return q1;case 36295:return K1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Q1}}function tP(n,e){n.uniform1fv(this.addr,e)}function nP(n,e){const t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function iP(n,e){const t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function sP(n,e){const t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function rP(n,e){const t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aP(n,e){const t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oP(n,e){const t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lP(n,e){n.uniform1iv(this.addr,e)}function cP(n,e){n.uniform2iv(this.addr,e)}function uP(n,e){n.uniform3iv(this.addr,e)}function fP(n,e){n.uniform4iv(this.addr,e)}function hP(n,e){n.uniform1uiv(this.addr,e)}function dP(n,e){n.uniform2uiv(this.addr,e)}function pP(n,e){n.uniform3uiv(this.addr,e)}function mP(n,e){n.uniform4uiv(this.addr,e)}function gP(n,e,t){const i=this.cache,s=e.length,r=Yl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Sf:a=E0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _P(n,e,t){const i=this.cache,s=e.length,r=Yl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||A0,r[a])}function vP(n,e,t){const i=this.cache,s=e.length,r=Yl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||R0,r[a])}function xP(n,e,t){const i=this.cache,s=e.length,r=Yl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||T0,r[a])}function SP(n){switch(n){case 5126:return tP;case 35664:return nP;case 35665:return iP;case 35666:return sP;case 35674:return rP;case 35675:return aP;case 35676:return oP;case 5124:case 35670:return lP;case 35667:case 35671:return cP;case 35668:case 35672:return uP;case 35669:case 35673:return fP;case 5125:return hP;case 36294:return dP;case 36295:return pP;case 36296:return mP;case 35678:case 36198:case 36298:case 36306:case 35682:return gP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return vP;case 36289:case 36303:case 36311:case 36292:return xP}}class MP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eP(t.type)}}class yP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SP(t.type)}}class bP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function gm(n,e){n.seq.push(e),n.map[e.id]=e}function EP(n,e,t){const i=n.name,s=i.length;for(Zc.lastIndex=0;;){const r=Zc.exec(i),a=Zc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gm(t,c===void 0?new MP(o,n,e):new yP(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new bP(o),gm(t,f)),t=f}}}class tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);EP(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function _m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const TP=37297;let AP=0;function RP(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const vm=new Ke;function wP(n){at._getMatrix(vm,at.workingColorSpace,n);const e=`mat3( ${vm.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case gl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+RP(n.getShaderSource(e),o)}else return r}function CP(n,e){const t=wP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const PP={[G_]:"Linear",[z_]:"Reinhard",[W_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[K_]:"Neutral",[$_]:"Custom"};function IP(n,e){const t=PP[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new W;function LP(){at.getLuminanceCoefficients(Wo);const n=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function DP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ya(n){return n!==""}function Sm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(n){return n.replace(UP,BP)}const FP=new Map;function BP(n,e){let t=tt[e];if(t===void 0){const i=FP.get(e);if(i!==void 0)t=tt[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mf(t)}const kP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(n){return n.replace(kP,VP)}function VP(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HP={[Yo]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function GP(n){return HP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zP={[Zs]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Wl]:"ENVMAP_TYPE_CUBE_UV"};function WP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":zP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const XP={[zr]:"ENVMAP_MODE_REFRACTION"};function $P(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qP={[H_]:"ENVMAP_BLENDING_MULTIPLY",[UT]:"ENVMAP_BLENDING_MIX",[FT]:"ENVMAP_BLENDING_ADD"};function KP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qP[n.combine]||"ENVMAP_BLENDING_NONE"}function YP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ZP(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=GP(t),c=WP(t),u=$P(t),f=KP(t),h=YP(t),d=NP(t),g=DP(r),x=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?IP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,CP("linearToOutputTexel",t.outputColorSpace),LP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Mf(a),a=Sm(a,t),a=Mm(a,t),o=Mf(o),o=Sm(o,t),o=Mm(o,t),a=ym(a),o=ym(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,_=M+p+o,E=_m(s,s.VERTEX_SHADER,y),A=_m(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(x)||"",ae=s.getShaderInfoLog(E)||"",he=s.getShaderInfoLog(A)||"",K=G.trim(),se=ae.trim(),X=he.trim();let ie=!0,de=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,A);else{const Me=xm(s,E,"vertex"),ye=xm(s,A,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+K+`
`+Me+`
`+ye)}else K!==""?ke("WebGLProgram: Program Info Log:",K):(se===""||X==="")&&(de=!1);de&&(D.diagnostics={runnable:ie,programLog:K,vertexShader:{log:se,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(E),s.deleteShader(A),S=new tl(s,x),I=OP(s,x)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,TP)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let JP=0;class jP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QP(e),t.set(e,i)),i}}class QP{constructor(e){this.id=JP++,this.code=e,this.usedTimes=0}}function eI(n){return n===Js||n===pl||n===ml}function tI(n,e,t,i,s,r){const a=new uh,o=new jP,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,I,O,D,G,ae){const he=D.fog,K=G.geometry,se=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ie=e.get(S.envMap||se,X),de=ie&&ie.mapping===Wl?ie.image.height:null,Me=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=ye!==void 0?ye.length:0;let Ze=0;K.morphAttributes.position!==void 0&&(Ze=1),K.morphAttributes.normal!==void 0&&(Ze=2),K.morphAttributes.color!==void 0&&(Ze=3);let ct,Je,le,V;if(Me){const Ue=_i[Me];ct=Ue.vertexShader,Je=Ue.fragmentShader}else{ct=S.vertexShader,Je=S.fragmentShader;const Ue=o.getVertexShaderStage(S),Nt=o.getFragmentShaderStage(S);o.update(S,Ue,Nt),le=Ue.id,V=Nt.id}const Z=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),me=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,L=!!S.map,N=!!S.matcap,F=!!ie,j=!!S.aoMap,te=!!S.lightMap,re=!!S.bumpMap&&S.wireframe===!1,w=!!S.normalMap,P=!!S.displacementMap,B=!!S.emissiveMap,$=!!S.metalnessMap,_e=!!S.roughnessMap,C=S.anisotropy>0,k=S.clearcoat>0,Y=S.dispersion>0,R=S.iridescence>0,v=S.sheen>0,U=S.transmission>0,q=C&&!!S.anisotropyMap,Q=k&&!!S.clearcoatMap,ge=k&&!!S.clearcoatNormalMap,xe=k&&!!S.clearcoatRoughnessMap,oe=R&&!!S.iridescenceMap,ue=R&&!!S.iridescenceThicknessMap,ve=v&&!!S.sheenColorMap,Ne=v&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Ee=!!S.specularColorMap,Ge=!!S.specularIntensityMap,ze=U&&!!S.transmissionMap,je=U&&!!S.thicknessMap,H=!!S.gradientMap,Te=!!S.alphaMap,fe=S.alphaTest>0,Re=!!S.alphaHash,Ie=!!S.extensions;let pe=Ti;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(pe=n.toneMapping);const Be={shaderID:Me,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:Je,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:me,instancingColor:me&&G.instanceColor!==null,instancingMorph:me&&G.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:L,matcap:N,envMap:F,envMapMode:F&&ie.mapping,envMapCubeUVHeight:de,aoMap:j,lightMap:te,bumpMap:re,normalMap:w,displacementMap:P,emissiveMap:B,normalMapObjectSpace:w&&S.normalMapType===GT,normalMapTangentSpace:w&&S.normalMapType===mf,packedNormalMap:w&&S.normalMapType===mf&&eI(S.normalMap.format),metalnessMap:$,roughnessMap:_e,anisotropy:C,anisotropyMap:q,clearcoat:k,clearcoatMap:Q,clearcoatNormalMap:ge,clearcoatRoughnessMap:xe,dispersion:Y,iridescence:R,iridescenceMap:oe,iridescenceThicknessMap:ue,sheen:v,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:Ge,transmission:U,transmissionMap:ze,thicknessMap:je,gradientMap:H,opaque:S.transparent===!1&&S.blending===Cr&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:fe,alphaHash:Re,combine:S.combine,mapUv:L&&g(S.map.channel),aoMapUv:j&&g(S.aoMap.channel),lightMapUv:te&&g(S.lightMap.channel),bumpMapUv:re&&g(S.bumpMap.channel),normalMapUv:w&&g(S.normalMap.channel),displacementMapUv:P&&g(S.displacementMap.channel),emissiveMapUv:B&&g(S.emissiveMap.channel),metalnessMapUv:$&&g(S.metalnessMap.channel),roughnessMapUv:_e&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:Q&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(S.sheenRoughnessMap.channel),specularMapUv:Ae&&g(S.specularMap.channel),specularColorMapUv:Ee&&g(S.specularColorMap.channel),specularIntensityMapUv:Ge&&g(S.specularIntensityMap.channel),transmissionMapUv:ze&&g(S.transmissionMap.channel),thicknessMapUv:je&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(w||C),vertexNormals:!!K.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(L||Te),fog:!!he,useFog:S.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||K.attributes.normal===void 0&&w===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ze,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:L&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:B&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xi,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)I.push(O),I.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(p(I,S),M(I,S),I.push(n.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function p(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function M(S,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function y(S){const I=d[S.type];let O;if(I){const D=_i[I];O=YA.clone(D.uniforms)}else O=S.uniforms;return O}function _(S,I){let O=u.get(I);return O!==void 0?++O.usedTimes:(O=new ZP(n,I,S,s),c.push(O),u.set(I,O)),O}function E(S){if(--S.usedTimes===0){const I=c.indexOf(S);c[I]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:T}}function nI(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function iI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Em(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,x,m,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=a(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function l(h,d,g,x,m,p){const M=o(h,d,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(h,d,g,x,m,p){const M=o(h,d,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,d,g){t.length>1&&t.sort(h||iI),i.length>1&&i.sort(d||Em),s.length>1&&s.sort(d||Em),g&&(t.reverse(),i.reverse(),s.reverse())}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function sI(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Tm,n.set(i,[a])):s>=r.length?(a=new Tm,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new qe};break;case"SpotLight":t={position:new W,direction:new W,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function aI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oI=0;function lI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cI(n){const e=new rI,t=aI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new et,a=new et;function o(c){let u=0,f=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,y=0,_=0,E=0,A=0,T=0;c.sort(lI);for(let I=0,O=c.length;I<O;I++){const D=c[I],G=D.color,ae=D.intensity,he=D.distance;let K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Js?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*ae,f+=G.g*ae,h+=G.b*ae;else if(D.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(D.sh.coefficients[se],ae);T++}else if(D.isDirectionalLight){const se=e.get(D);if(se.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,ie=t.get(D);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=se,d++}else if(D.isSpotLight){const se=e.get(D);se.position.setFromMatrixPosition(D.matrixWorld),se.color.copy(G).multiplyScalar(ae),se.distance=he,se.coneCos=Math.cos(D.angle),se.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),se.decay=D.decay,i.spot[x]=se;const X=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=X.matrix,D.castShadow){const ie=t.get(D);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,i.spotShadow[x]=ie,i.spotShadowMap[x]=K,_++}x++}else if(D.isRectAreaLight){const se=e.get(D);se.color.copy(G).multiplyScalar(ae),se.halfWidth.set(D.width*.5,0,0),se.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=se,m++}else if(D.isPointLight){const se=e.get(D);if(se.color.copy(D.color).multiplyScalar(D.intensity),se.distance=D.distance,se.decay=D.decay,D.castShadow){const X=D.shadow,ie=t.get(D);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,ie.shadowCameraNear=X.camera.near,ie.shadowCameraFar=X.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=se,g++}else if(D.isHemisphereLight){const se=e.get(D);se.skyColor.copy(D.color).multiplyScalar(ae),se.groundColor.copy(D.groundColor).multiplyScalar(ae),i.hemi[p]=se,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const S=i.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==M||S.numPointShadows!==y||S.numSpotShadows!==_||S.numSpotMaps!==E||S.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,S.directionalLength=d,S.pointLength=g,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=M,S.numPointShadows=y,S.numSpotShadows=_,S.numSpotMaps=E,S.numLightProbes=T,i.version=oI++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Am(n){const e=new cI(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function uI(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Am(n),e.set(s,[o])):r>=a.length?(o=new Am(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const fI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dI=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],pI=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Rm=new et,ga=new W,Jc=new W;function mI(n,e,t){let i=new ph;const s=new st,r=new st,a=new yt,o=new QA,l=new eR,c={},u=t.maxTextureSize,f={[as]:En,[En]:as,[xi]:xi},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:fI,fragmentShader:hI}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let p=this.type;this.render=function(A,T,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===_T&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yo);const I=n.getRenderTarget(),O=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(es),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ae=p!==this.type;ae&&T.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(K=>K.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,K=A.length;he<K;he++){const se=A[he],X=se.shadow;if(X===void 0){ke("WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ie=X.getFrameExtents();s.multiply(ie),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,X.mapSize.y=r.y));const de=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=de,X.map===null||ae===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Sa){if(se.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ai(s.x,s.y,{format:Js,type:os,minFilter:$t,magFilter:$t,generateMipmaps:!1}),X.map.texture.name=se.name+".shadowMap",X.map.depthTexture=new $r(s.x,s.y,kn),X.map.depthTexture.name=se.name+".shadowMapDepth",X.map.depthTexture.format=ls,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt}else se.isPointLight?(X.map=new b0(s.x),X.map.depthTexture=new qA(s.x,Ci)):(X.map=new Ai(s.x,s.y),X.map.depthTexture=new $r(s.x,s.y,Ci)),X.map.depthTexture.name=se.name+".shadowMap",X.map.depthTexture.format=ls,this.type===Yo?(X.map.depthTexture.compareFunction=de?oh:ah,X.map.depthTexture.minFilter=$t,X.map.depthTexture.magFilter=$t):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt);X.camera.updateProjectionMatrix()}const Me=X.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Me;ye++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(X.map),n.clear());const be=X.getViewport(ye);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),G.viewport(a)}if(se.isPointLight){const be=X.camera,Ze=X.matrix,ct=se.distance||be.far;ct!==be.far&&(be.far=ct,be.updateProjectionMatrix()),ga.setFromMatrixPosition(se.matrixWorld),be.position.copy(ga),Jc.copy(be.position),Jc.add(dI[ye]),be.up.copy(pI[ye]),be.lookAt(Jc),be.updateMatrixWorld(),Ze.makeTranslation(-ga.x,-ga.y,-ga.z),Rm.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Rm,be.coordinateSystem,be.reversedDepth)}else X.updateMatrices(se);i=X.getFrustum(),_(T,S,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Sa&&M(X,S),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(I,O,D)};function M(A,T){const S=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ai(s.x,s.y,{format:Js,type:os})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,S,h,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,S,d,x,null)}function y(A,T,S,I){let O=null;const D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)O=D;else if(O=S.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const G=O.uuid,ae=T.uuid;let he=c[G];he===void 0&&(he={},c[G]=he);let K=he[ae];K===void 0&&(K=O.clone(),he[ae]=K,T.addEventListener("dispose",E)),O=K}if(O.visible=T.visible,O.wireframe=T.wireframe,I===Sa?O.side=T.shadowSide!==null?T.shadowSide:T.side:O.side=T.shadowSide!==null?T.shadowSide:f[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,O.map=T.map,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const G=n.properties.get(O);G.light=S}return O}function _(A,T,S,I,O){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Sa)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const ae=e.update(A),he=A.material;if(Array.isArray(he)){const K=ae.groups;for(let se=0,X=K.length;se<X;se++){const ie=K[se],de=he[ie.materialIndex];if(de&&de.visible){const Me=y(A,de,I,O);A.onBeforeShadow(n,A,T,S,ae,Me,ie),n.renderBufferDirect(S,null,ae,Me,A,ie),A.onAfterShadow(n,A,T,S,ae,Me,ie)}}}else if(he.visible){const K=y(A,he,I,O);A.onBeforeShadow(n,A,T,S,ae,K,null),n.renderBufferDirect(S,null,ae,K,A,null),A.onAfterShadow(n,A,T,S,ae,K,null)}}const G=A.children;for(let ae=0,he=G.length;ae<he;ae++)_(G[ae],T,S,I,O)}function E(A){A.target.removeEventListener("dispose",E);for(const S in c){const I=c[S],O=A.target.uuid;O in I&&(I[O].dispose(),delete I[O])}}}function gI(n,e){function t(){let H=!1;const Te=new yt;let fe=null;const Re=new yt(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!H&&(n.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,pe,Be,Ue,Nt){Nt===!0&&(Ie*=Ue,pe*=Ue,Be*=Ue),Te.set(Ie,pe,Be,Ue),Re.equals(Te)===!1&&(n.clearColor(Ie,pe,Be,Ue),Re.copy(Te))},reset:function(){H=!1,fe=null,Re.set(-1,0,0,0)}}}function i(){let H=!1,Te=!1,fe=null,Re=null,Ie=null;return{setReversed:function(pe){if(Te!==pe){const Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;const Ue=Ie;Ie=null,this.setClear(Ue)}},getReversed:function(){return Te},setTest:function(pe){pe?Z(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(pe){fe!==pe&&!H&&(n.depthMask(pe),fe=pe)},setFunc:function(pe){if(Te&&(pe=QT[pe]),Re!==pe){switch(pe){case Pu:n.depthFunc(n.NEVER);break;case Iu:n.depthFunc(n.ALWAYS);break;case Lu:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case Nu:n.depthFunc(n.EQUAL);break;case Du:n.depthFunc(n.GEQUAL);break;case Ou:n.depthFunc(n.GREATER);break;case Uu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=pe}},setLocked:function(pe){H=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,Te&&(pe=1-pe),n.clearDepth(pe))},reset:function(){H=!1,fe=null,Re=null,Ie=null,Te=!1}}}function s(){let H=!1,Te=null,fe=null,Re=null,Ie=null,pe=null,Be=null,Ue=null,Nt=null;return{setTest:function(Rt){H||(Rt?Z(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!H&&(n.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,ri,ai){(fe!==Rt||Re!==ri||Ie!==ai)&&(n.stencilFunc(Rt,ri,ai),fe=Rt,Re=ri,Ie=ai)},setOp:function(Rt,ri,ai){(pe!==Rt||Be!==ri||Ue!==ai)&&(n.stencilOp(Rt,ri,ai),pe=Rt,Be=ri,Ue=ai)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Nt!==Rt&&(n.clearStencil(Rt),Nt=Rt)},reset:function(){H=!1,Te=null,fe=null,Re=null,Ie=null,pe=null,Be=null,Ue=null,Nt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,y=null,_=null,E=null,A=null,T=null,S=new qe(0,0,0),I=0,O=!1,D=null,G=null,ae=null,he=null,K=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(de)[1]),X=ie>=1):de.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),X=ie>=2);let Me=null,ye={};const be=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),ct=new yt().fromArray(be),Je=new yt().fromArray(Ze);function le(H,Te,fe,Re){const Ie=new Uint8Array(4),pe=n.createTexture();n.bindTexture(H,pe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<fe;Be++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Te+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return pe}const V={};V[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Gr),re(!1),w(lp),Z(n.CULL_FACE),j(es);function Z(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ce(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function me(H,Te){return h[H]!==Te?(n.bindFramebuffer(H,Te),h[H]=Te,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Se(H,Te){let fe=g,Re=!1;if(H){fe=d.get(Te),fe===void 0&&(fe=[],d.set(Te,fe));const Ie=H.textures;if(fe.length!==Ie.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Be=Ie.length;pe<Be;pe++)fe[pe]=n.COLOR_ATTACHMENT0+pe;fe.length=Ie.length,Re=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Re=!0);Re&&n.drawBuffers(fe)}function L(H){return x!==H?(n.useProgram(H),x=H,!0):!1}const N={[Hs]:n.FUNC_ADD,[xT]:n.FUNC_SUBTRACT,[ST]:n.FUNC_REVERSE_SUBTRACT};N[MT]=n.MIN,N[yT]=n.MAX;const F={[bT]:n.ZERO,[ET]:n.ONE,[TT]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[IT]:n.SRC_ALPHA_SATURATE,[CT]:n.DST_COLOR,[RT]:n.DST_ALPHA,[AT]:n.ONE_MINUS_SRC_COLOR,[Cu]:n.ONE_MINUS_SRC_ALPHA,[PT]:n.ONE_MINUS_DST_COLOR,[wT]:n.ONE_MINUS_DST_ALPHA,[LT]:n.CONSTANT_COLOR,[NT]:n.ONE_MINUS_CONSTANT_COLOR,[DT]:n.CONSTANT_ALPHA,[OT]:n.ONE_MINUS_CONSTANT_ALPHA};function j(H,Te,fe,Re,Ie,pe,Be,Ue,Nt,Rt){if(H===es){m===!0&&(ce(n.BLEND),m=!1);return}if(m===!1&&(Z(n.BLEND),m=!0),H!==vT){if(H!==p||Rt!==O){if((M!==Hs||E!==Hs)&&(n.blendEquation(n.FUNC_ADD),M=Hs,E=Hs),Rt)switch(H){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFunc(n.ONE,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fp:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",H);break}else switch(H){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case up:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",H);break}y=null,_=null,A=null,T=null,S.set(0,0,0),I=0,p=H,O=Rt}return}Ie=Ie||Te,pe=pe||fe,Be=Be||Re,(Te!==M||Ie!==E)&&(n.blendEquationSeparate(N[Te],N[Ie]),M=Te,E=Ie),(fe!==y||Re!==_||pe!==A||Be!==T)&&(n.blendFuncSeparate(F[fe],F[Re],F[pe],F[Be]),y=fe,_=Re,A=pe,T=Be),(Ue.equals(S)===!1||Nt!==I)&&(n.blendColor(Ue.r,Ue.g,Ue.b,Nt),S.copy(Ue),I=Nt),p=H,O=!1}function te(H,Te){H.side===xi?ce(n.CULL_FACE):Z(n.CULL_FACE);let fe=H.side===En;Te&&(fe=!fe),re(fe),H.blending===Cr&&H.transparent===!1?j(es):j(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const Re=H.stencilWrite;o.setTest(Re),Re&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),B(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function w(H){H!==mT?(Z(n.CULL_FACE),H!==G&&(H===lp?n.cullFace(n.BACK):H===gT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),G=H}function P(H){H!==ae&&(X&&n.lineWidth(H),ae=H)}function B(H,Te,fe){H?(Z(n.POLYGON_OFFSET_FILL),(he!==Te||K!==fe)&&(he=Te,K=fe,a.getReversed()&&(Te=-Te),n.polygonOffset(Te,fe))):ce(n.POLYGON_OFFSET_FILL)}function $(H){H?Z(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function _e(H){H===void 0&&(H=n.TEXTURE0+se-1),Me!==H&&(n.activeTexture(H),Me=H)}function C(H,Te,fe){fe===void 0&&(Me===null?fe=n.TEXTURE0+se-1:fe=Me);let Re=ye[fe];Re===void 0&&(Re={type:void 0,texture:void 0},ye[fe]=Re),(Re.type!==H||Re.texture!==Te)&&(Me!==fe&&(n.activeTexture(fe),Me=fe),n.bindTexture(H,Te||V[H]),Re.type=H,Re.texture=Te)}function k(){const H=ye[Me];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Y(){try{n.compressedTexImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function v(){try{n.texSubImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function U(){try{n.texSubImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ge(){try{n.texStorage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function xe(){try{n.texStorage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function oe(){try{n.texImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ue(){try{n.texImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ve(H){return f[H]!==void 0?f[H]:n.getParameter(H)}function Ne(H,Te){f[H]!==Te&&(n.pixelStorei(H,Te),f[H]=Te)}function Ae(H){ct.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ct.copy(H))}function Ee(H){Je.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Je.copy(H))}function Ge(H,Te){let fe=c.get(Te);fe===void 0&&(fe=new WeakMap,c.set(Te,fe));let Re=fe.get(H);Re===void 0&&(Re=n.getUniformBlockIndex(Te,H.name),fe.set(H,Re))}function ze(H,Te){const Re=c.get(Te).get(H);l.get(Te)!==Re&&(n.uniformBlockBinding(Te,Re,H.__bindingPointIndex),l.set(Te,Re))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},Me=null,ye={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,y=null,_=null,E=null,A=null,T=null,S=new qe(0,0,0),I=0,O=!1,D=null,G=null,ae=null,he=null,K=null,ct.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ce,bindFramebuffer:me,drawBuffers:Se,useProgram:L,setBlending:j,setMaterial:te,setFlipSided:re,setCullFace:w,setLineWidth:P,setPolygonOffset:B,setScissorTest:$,activeTexture:_e,bindTexture:C,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:R,texImage2D:oe,texImage3D:ue,pixelStorei:Ne,getParameter:ve,updateUBOMapping:Ge,uniformBlockBinding:ze,texStorage2D:ge,texStorage3D:xe,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:Ae,viewport:Ee,reset:je}}function _I(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return g?new OffscreenCanvas(R,v):Za("canvas")}function m(R,v,U){let q=1;const Q=Y(R);if((Q.width>U||Q.height>U)&&(q=U/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ge=Math.floor(q*Q.width),xe=Math.floor(q*Q.height);h===void 0&&(h=x(ge,xe));const oe=v?x(ge,xe):h;return oe.width=ge,oe.height=xe,oe.getContext("2d").drawImage(R,0,0,ge,xe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ge+"x"+xe+")."),oe}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,v,U,q,Q,ge=!1){if(R!==null){if(n[R]!==void 0)return n[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=v;if(v===n.RED&&(U===n.FLOAT&&(oe=n.R32F),U===n.HALF_FLOAT&&(oe=n.R16F),U===n.UNSIGNED_BYTE&&(oe=n.R8),U===n.UNSIGNED_SHORT&&xe&&(oe=xe.R16_EXT),U===n.SHORT&&xe&&(oe=xe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(oe=n.R8UI),U===n.UNSIGNED_SHORT&&(oe=n.R16UI),U===n.UNSIGNED_INT&&(oe=n.R32UI),U===n.BYTE&&(oe=n.R8I),U===n.SHORT&&(oe=n.R16I),U===n.INT&&(oe=n.R32I)),v===n.RG&&(U===n.FLOAT&&(oe=n.RG32F),U===n.HALF_FLOAT&&(oe=n.RG16F),U===n.UNSIGNED_BYTE&&(oe=n.RG8),U===n.UNSIGNED_SHORT&&xe&&(oe=xe.RG16_EXT),U===n.SHORT&&xe&&(oe=xe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(oe=n.RG8UI),U===n.UNSIGNED_SHORT&&(oe=n.RG16UI),U===n.UNSIGNED_INT&&(oe=n.RG32UI),U===n.BYTE&&(oe=n.RG8I),U===n.SHORT&&(oe=n.RG16I),U===n.INT&&(oe=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),U===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),U===n.UNSIGNED_INT&&(oe=n.RGB32UI),U===n.BYTE&&(oe=n.RGB8I),U===n.SHORT&&(oe=n.RGB16I),U===n.INT&&(oe=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),U===n.UNSIGNED_INT&&(oe=n.RGBA32UI),U===n.BYTE&&(oe=n.RGBA8I),U===n.SHORT&&(oe=n.RGBA16I),U===n.INT&&(oe=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_SHORT&&xe&&(oe=xe.RGB16_EXT),U===n.SHORT&&xe&&(oe=xe.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(oe=n.R11F_G11F_B10F)),v===n.RGBA){const ue=ge?gl:at.getTransfer(Q);U===n.FLOAT&&(oe=n.RGBA32F),U===n.HALF_FLOAT&&(oe=n.RGBA16F),U===n.UNSIGNED_BYTE&&(oe=ue===gt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&xe&&(oe=xe.RGBA16_EXT),U===n.SHORT&&xe&&(oe=xe.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(R,v){let U;return R?v===null||v===Ci||v===$a?U=n.DEPTH24_STENCIL8:v===kn?U=n.DEPTH32F_STENCIL8:v===Xa&&(U=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===$a?U=n.DEPTH_COMPONENT24:v===kn?U=n.DEPTH_COMPONENT32F:v===Xa&&(U=n.DEPTH_COMPONENT16),U}function A(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==$t?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function S(R){const v=R.target;v.removeEventListener("dispose",S),D(v)}function I(R){const v=i.get(R);if(v.__webglInit===void 0)return;const U=R.source,q=d.get(U);if(q){const Q=q[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(R),Object.keys(q).length===0&&d.delete(U)}i.remove(R)}function O(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const U=R.source,q=d.get(U);delete q[v.__cacheKey],a.memory.textures--}function D(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Q=0;Q<v.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let q=0,Q=U.length;q<Q;q++){const ge=i.get(U[q]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(U[q])}i.remove(R)}let G=0;function ae(){G=0}function he(){return G}function K(R){G=R}function se(){const R=G;return R>=s.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),G+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ie(R,v){const U=i.get(R);if(R.isVideoTexture&&C(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const q=R.image;if(q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function de(R,v){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Me(R,v){const U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){ce(U,R,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function ye(R,v){const U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){me(U,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const be={[Wr]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},Ze={[Xt]:n.NEAREST,[Z_]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},ct={[zT]:n.NEVER,[KT]:n.ALWAYS,[WT]:n.LESS,[ah]:n.LEQUAL,[XT]:n.EQUAL,[oh]:n.GEQUAL,[$T]:n.GREATER,[qT]:n.NOTEQUAL};function Je(R,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===$t||v.magFilter===Zo||v.magFilter===Ma||v.magFilter===Zi||v.minFilter===$t||v.minFilter===Zo||v.minFilter===Ma||v.minFilter===Zi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,be[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,be[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,be[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ze[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ze[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==Ma&&v.minFilter!==Zi||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function le(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const ge=X(v);if(ge!==R.__cacheKey){Q[ge]===void 0&&(Q[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[ge].usedTimes++;const xe=Q[R.__cacheKey];xe!==void 0&&(Q[R.__cacheKey].usedTimes--,xe.usedTimes===0&&O(v)),R.__cacheKey=ge,R.__webglTexture=Q[ge].texture}return U}function V(R,v,U){return Math.floor(Math.floor(R/U)/v)}function Z(R,v,U,q){const ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,q,v.data);else{ge.sort((Ne,Ae)=>Ne.start-Ae.start);let xe=0;for(let Ne=1;Ne<ge.length;Ne++){const Ae=ge[xe],Ee=ge[Ne],Ge=Ae.start+Ae.count,ze=V(Ee.start,v.width,4),je=V(Ae.start,v.width,4);Ee.start<=Ge+1&&ze===je&&V(Ee.start+Ee.count-1,v.width,4)===ze?Ae.count=Math.max(Ae.count,Ee.start+Ee.count-Ae.start):(++xe,ge[xe]=Ee)}ge.length=xe+1;const oe=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,Ae=ge.length;Ne<Ae;Ne++){const Ee=ge[Ne],Ge=Math.floor(Ee.start/4),ze=Math.ceil(Ee.count/4),je=Ge%v.width,H=Math.floor(Ge/v.width),Te=ze,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,je,H,Te,fe,U,q,v.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,oe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function ce(R,v,U){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const Q=le(R,v),ge=v.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+U);const xe=i.get(ge);if(ge.version!==xe.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const fe=at.getPrimaries(at.workingColorSpace),Re=v.colorSpace===Ts?null:at.getPrimaries(v.colorSpace),Ie=v.colorSpace===Ts||fe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ue=m(v.image,!1,s.maxTextureSize);ue=k(v,ue);const ve=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type);let Ae=_(v.internalFormat,ve,Ne,v.normalized,v.colorSpace,v.isVideoTexture);Je(q,v);let Ee;const Ge=v.mipmaps,ze=v.isVideoTexture!==!0,je=xe.__version===void 0||Q===!0,H=ge.dataReady,Te=A(v,ue);if(v.isDepthTexture)Ae=E(v.format===Xs,v.type),je&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,ve,Ne,null));else if(v.isDataTexture)if(Ge.length>0){ze&&je&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,Ge[0].width,Ge[0].height);for(let fe=0,Re=Ge.length;fe<Re;fe++)Ee=Ge[fe],ze?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ve,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,ve,Ne,Ee.data);v.generateMipmaps=!1}else ze?(je&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,ue.width,ue.height),H&&Z(v,ue,ve,Ne)):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,ve,Ne,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ae,Ge[0].width,Ge[0].height,ue.depth);for(let fe=0,Re=Ge.length;fe<Re;fe++)if(Ee=Ge[fe],v.format!==Vn)if(ve!==null)if(ze){if(H)if(v.layerUpdates.size>0){const Ie=sm(Ee.width,Ee.height,v.format,v.type);for(const pe of v.layerUpdates){const Be=Ee.data.subarray(pe*Ie/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Ie/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,pe,Ee.width,Ee.height,1,ve,Be)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ue.depth,ve,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ue.depth,ve,Ne,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,Ee.width,Ee.height,ue.depth,0,ve,Ne,Ee.data)}else{ze&&je&&t.texStorage2D(n.TEXTURE_2D,Te,Ae,Ge[0].width,Ge[0].height);for(let fe=0,Re=Ge.length;fe<Re;fe++)Ee=Ge[fe],v.format!==Vn?ve!==null?ze?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,Ee.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ve,Ne,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,Ee.width,Ee.height,0,ve,Ne,Ee.data)}else if(v.isDataArrayTexture)if(ze){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ae,ue.width,ue.height,ue.depth),H)if(v.layerUpdates.size>0){const fe=sm(ue.width,ue.height,v.format,v.type);for(const Re of v.layerUpdates){const Ie=ue.data.subarray(Re*fe/ue.data.BYTES_PER_ELEMENT,(Re+1)*fe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ue.width,ue.height,1,ve,Ne,Ie)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ne,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,ve,Ne,ue.data);else if(v.isData3DTexture)ze?(je&&t.texStorage3D(n.TEXTURE_3D,Te,Ae,ue.width,ue.height,ue.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ne,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,ve,Ne,ue.data);else if(v.isFramebufferTexture){if(je)if(ze)t.texStorage2D(n.TEXTURE_2D,Te,Ae,ue.width,ue.height);else{let fe=ue.width,Re=ue.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Ae,fe,Re,0,ve,Ne,null),fe>>=1,Re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ue.parentNode!==fe){fe.appendChild(ue),f.add(v),fe.onpaint=Re=>{const Ie=Re.changedElements;for(const pe of f)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},fe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{const Ie=n.RGBA,pe=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,pe,Be,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(ze&&je){const fe=Y(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ae,fe.width,fe.height)}for(let fe=0,Re=Ge.length;fe<Re;fe++)Ee=Ge[fe],ze?H&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ve,Ne,Ee):t.texImage2D(n.TEXTURE_2D,fe,Ae,ve,Ne,Ee);v.generateMipmaps=!1}else if(ze){if(je){const fe=Y(ue);t.texStorage2D(n.TEXTURE_2D,Te,Ae,fe.width,fe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ne,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ve,Ne,ue);p(v)&&M(q),xe.__version=ge.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,U){if(v.image.length!==6)return;const q=le(R,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+U);const ge=i.get(Q);if(Q.version!==ge.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const xe=at.getPrimaries(at.workingColorSpace),oe=v.colorSpace===Ts?null:at.getPrimaries(v.colorSpace),ue=v.colorSpace===Ts||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!ve&&!Ne?Ae[pe]=m(v.image[pe],!0,s.maxCubemapSize):Ae[pe]=Ne?v.image[pe].image:v.image[pe],Ae[pe]=k(v,Ae[pe]);const Ee=Ae[0],Ge=r.convert(v.format,v.colorSpace),ze=r.convert(v.type),je=_(v.internalFormat,Ge,ze,v.normalized,v.colorSpace),H=v.isVideoTexture!==!0,Te=ge.__version===void 0||q===!0,fe=Q.dataReady;let Re=A(v,Ee);Je(n.TEXTURE_CUBE_MAP,v);let Ie;if(ve){H&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,je,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){Ie=Ae[pe].mipmaps;for(let Be=0;Be<Ie.length;Be++){const Ue=Ie[Be];v.format!==Vn?Ge!==null?H?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,Ue.width,Ue.height,Ge,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,je,Ue.width,Ue.height,0,Ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,Ue.width,Ue.height,Ge,ze,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,je,Ue.width,Ue.height,0,Ge,ze,Ue.data)}}}else{if(Ie=v.mipmaps,H&&Te){Ie.length>0&&Re++;const pe=Y(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ne){H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,Ge,ze,Ae[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ae[pe].width,Ae[pe].height,0,Ge,ze,Ae[pe].data);for(let Be=0;Be<Ie.length;Be++){const Nt=Ie[Be].image[pe].image;H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,Nt.width,Nt.height,Ge,ze,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,je,Nt.width,Nt.height,0,Ge,ze,Nt.data)}}else{H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ge,ze,Ae[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ge,ze,Ae[pe]);for(let Be=0;Be<Ie.length;Be++){const Ue=Ie[Be];H?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,Ge,ze,Ue.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,je,Ge,ze,Ue.image[pe])}}}p(v)&&M(n.TEXTURE_CUBE_MAP),ge.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Se(R,v,U,q,Q,ge){const xe=r.convert(U.format,U.colorSpace),oe=r.convert(U.type),ue=_(U.internalFormat,xe,oe,U.normalized,U.colorSpace),ve=i.get(v),Ne=i.get(U);if(Ne.__renderTarget=v,!ve.__hasExternalTextures){const Ae=Math.max(1,v.width>>ge),Ee=Math.max(1,v.height>>ge);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ge,ue,Ae,Ee,v.depth,0,xe,oe,null):t.texImage2D(Q,ge,ue,Ae,Ee,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,Ne.__webglTexture,0,$(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,Ne.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(R,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ge=E(v.stencilBuffer,Q),xe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$(v),ge,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,$(v),ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,R)}else{const q=v.textures;for(let Q=0;Q<q.length;Q++){const ge=q[Q],xe=r.convert(ge.format,ge.colorSpace),oe=r.convert(ge.type),ue=_(ge.internalFormat,xe,oe,ge.normalized,ge.colorSpace);_e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$(v),ue,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,$(v),ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(R,v,U){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Je(n.TEXTURE_CUBE_MAP,v.depthTexture);const ve=r.convert(v.depthTexture.format),Ne=r.convert(v.depthTexture.type);let Ae;v.depthTexture.format===ls?Ae=n.DEPTH_COMPONENT24:v.depthTexture.format===Xs&&(Ae=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,v.width,v.height,0,ve,Ne,null)}}else ie(v.depthTexture,0);const ge=Q.__webglTexture,xe=$(v),oe=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,ue=v.depthTexture.format===Xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ls)_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,oe,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ue,oe,ge,0);else if(v.depthTexture.format===Xs)_e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,oe,ge,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ue,oe,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(R){const v=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)N(v.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?N(v.__webglFramebuffer[0],R,0):N(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),L(v.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ge)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),L(v.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,v,U){const q=i.get(R);v!==void 0&&Se(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&F(R)}function te(R){const v=R.texture,U=i.get(R),q=i.get(v);R.addEventListener("dispose",S);const Q=R.textures,ge=R.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,a.memory.textures++),ge){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)U.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else U.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)U.__webglFramebuffer[oe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,ue=Q.length;oe<ue;oe++){const ve=i.get(Q[oe]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const ue=Q[oe];U.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const ve=r.convert(ue.format,ue.colorSpace),Ne=r.convert(ue.type),Ae=_(ue.internalFormat,ve,Ne,ue.normalized,ue.colorSpace,R.isXRRenderTarget===!0),Ee=$(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),L(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Je(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Se(U.__webglFramebuffer[oe][ue],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Se(U.__webglFramebuffer[oe],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(v)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,ue=Q.length;oe<ue;oe++){const ve=Q[oe],Ne=i.get(ve);let Ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Ne.__webglTexture),Je(Ae,ve),Se(U.__webglFramebuffer,R,ve,n.COLOR_ATTACHMENT0+oe,Ae,0),p(ve)&&M(Ae)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),Je(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)Se(U.__webglFramebuffer[ue],R,v,n.COLOR_ATTACHMENT0,oe,ue);else Se(U.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,oe,0);p(v)&&M(oe),t.unbindTexture()}R.depthBuffer&&F(R)}function re(R){const v=R.textures;for(let U=0,q=v.length;U<q;U++){const Q=v[U];if(p(Q)){const ge=y(R),xe=i.get(Q).__webglTexture;t.bindTexture(ge,xe),M(ge),t.unbindTexture()}}}const w=[],P=[];function B(R){if(R.samples>0){if(_e(R)===!1){const v=R.textures,U=R.width,q=R.height;let Q=n.COLOR_BUFFER_BIT;const ge=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),oe=v.length>1;if(oe)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ue=R.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Ne=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,Q,n.NEAREST),l===!0&&(w.length=0,P.length=0,w.push(n.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(w.push(ge),P.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Ne=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $(R){return Math.min(s.maxSamples,R.samples)}function _e(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function C(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function k(R,v){const U=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==In&&U!==Ts&&(at.getTransfer(U)===gt?(q!==Vn||Q!==Cn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",U)),v}function Y(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=se,this.resetTextureUnits=ae,this.getTextureUnits=he,this.setTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=de,this.setTexture3D=Me,this.setTextureCube=ye,this.rebindTextures=j,this.setupRenderTarget=te,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vI(n,e){function t(i,s=Ts){let r;const a=at.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Q_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===e0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===J_)return n.BYTE;if(i===j_)return n.SHORT;if(i===Xa)return n.UNSIGNED_SHORT;if(i===Qf)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===t0)return n.ALPHA;if(i===n0)return n.RGB;if(i===Vn)return n.RGBA;if(i===ls)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===Js)return n.RG;if(i===sh)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===Jo||i===jo||i===Qo||i===el)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fu||i===Bu||i===ku||i===Vu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hu||i===Gu||i===zu||i===Wu||i===Xu||i===pl||i===$u)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hu||i===Gu)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wu)return r.COMPRESSED_R11_EAC;if(i===Xu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pl)return r.COMPRESSED_RG11_EAC;if(i===$u)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qu||i===Ku||i===Yu||i===Zu||i===Ju||i===ju||i===Qu||i===ef||i===tf||i===nf||i===sf||i===rf||i===af||i===of)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ku)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ju)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ef)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nf)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sf)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===af)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===cf||i===uf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lf)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ff||i===hf||i===ml||i===df)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ff)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$a?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new p0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ii({vertexShader:xI,fragmentShader:SI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Xl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yI extends Qs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new MI,p={},M=t.getContextAttributes();let y=null,_=null;const E=[],A=[],T=new st;let S=null;const I=new un;I.viewport=new yt;const O=new un;O.viewport=new yt;const D=[I,O],G=new bR;let ae=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let V=E[le];return V===void 0&&(V=new Ec,E[le]=V),V.getTargetRaySpace()},this.getControllerGrip=function(le){let V=E[le];return V===void 0&&(V=new Ec,E[le]=V),V.getGripSpace()},this.getHand=function(le){let V=E[le];return V===void 0&&(V=new Ec,E[le]=V),V.getHandSpace()};function K(le){const V=A.indexOf(le.inputSource);if(V===-1)return;const Z=E[V];Z!==void 0&&(Z.update(le.inputSource,le.frame,c||a),Z.dispatchEvent({type:le.type,data:le.inputSource}))}function se(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",X);for(let le=0;le<E.length;le++){const V=A[le];V!==null&&(A[le]=null,E[le].disconnect(V))}ae=null,he=null,m.reset();for(const le in p)delete p[le];e.setRenderTarget(y),d=null,h=null,f=null,s=null,_=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",se),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ce=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=M.stencil?Xs:ls,ce=M.stencil?$a:Ci);const Se={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Ai(h.textureWidth,h.textureHeight,{format:Vn,type:Cn,depthTexture:new $r(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ai(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(le){for(let V=0;V<le.removed.length;V++){const Z=le.removed[V],ce=A.indexOf(Z);ce>=0&&(A[ce]=null,E[ce].disconnect(Z))}for(let V=0;V<le.added.length;V++){const Z=le.added[V];let ce=A.indexOf(Z);if(ce===-1){for(let Se=0;Se<E.length;Se++)if(Se>=A.length){A.push(Z),ce=Se;break}else if(A[Se]===null){A[Se]=Z,ce=Se;break}if(ce===-1)break}const me=E[ce];me&&me.connect(Z)}}const ie=new W,de=new W;function Me(le,V,Z){ie.setFromMatrixPosition(V.matrixWorld),de.setFromMatrixPosition(Z.matrixWorld);const ce=ie.distanceTo(de),me=V.projectionMatrix.elements,Se=Z.projectionMatrix.elements,L=me[14]/(me[10]-1),N=me[14]/(me[10]+1),F=(me[9]+1)/me[5],j=(me[9]-1)/me[5],te=(me[8]-1)/me[0],re=(Se[8]+1)/Se[0],w=L*te,P=L*re,B=ce/(-te+re),$=B*-te;if(V.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX($),le.translateZ(B),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),me[10]===-1)le.projectionMatrix.copy(V.projectionMatrix),le.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const _e=L+B,C=N+B,k=w-$,Y=P+(ce-$),R=F*N/C*_e,v=j*N/C*_e;le.projectionMatrix.makePerspective(k,Y,R,v,_e,C),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ye(le,V){V===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(V.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let V=le.near,Z=le.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),G.near=O.near=I.near=V,G.far=O.far=I.far=Z,(ae!==G.near||he!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),ae=G.near,he=G.far),G.layers.mask=le.layers.mask|6,I.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;const ce=le.parent,me=G.cameras;ye(G,ce);for(let Se=0;Se<me.length;Se++)ye(me[Se],ce);me.length===2?Me(G,I,O):G.projectionMatrix.copy(I.projectionMatrix),be(le,G,ce)};function be(le,V,Z){Z===null?le.matrix.copy(V.matrixWorld):(le.matrix.copy(Z.matrixWorld),le.matrix.invert(),le.matrix.multiply(V.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(V.projectionMatrix),le.projectionMatrixInverse.copy(V.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Xr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(le){l=le,h!==null&&(h.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(le){return p[le]};let Ze=null;function ct(le,V){if(u=V.getViewerPose(c||a),g=V,u!==null){const Z=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ce=!1;Z.length!==G.cameras.length&&(G.cameras.length=0,ce=!0);for(let N=0;N<Z.length;N++){const F=Z[N];let j=null;if(d!==null)j=d.getViewport(F);else{const re=f.getViewSubImage(h,F);j=re.viewport,N===0&&(e.setRenderTargetTextures(_,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(_))}let te=D[N];te===void 0&&(te=new un,te.layers.enable(N),te.viewport=new yt,D[N]=te),te.matrix.fromArray(F.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(F.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(j.x,j.y,j.width,j.height),N===0&&(G.matrix.copy(te.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ce===!0&&G.cameras.push(te)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const N=f.getDepthInformation(Z[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<Z.length;N++){const F=Z[N].camera;if(F){let j=p[F];j||(j=new p0,p[F]=j);const te=f.getCameraImage(F);j.sourceTexture=te}}}}for(let Z=0;Z<E.length;Z++){const ce=A[Z],me=E[Z];ce!==null&&me!==void 0&&me.update(ce,V,c||a)}Ze&&Ze(le,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const Je=new M0;Je.setAnimationLoop(ct),this.setAnimationLoop=function(le){Ze=le},this.dispose=function(){}}}const bI=new et,w0=new Ke;w0.set(-1,0,0,0,1,0,0,0,1);function EI(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,m0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(bI.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(w0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TI(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const A=E.program;i.uniformBlockBinding(_,A)}function c(_,E){let A=s[_.id];A===void 0&&(m(_),A=u(_),s[_.id]=A,_.addEventListener("dispose",M));const T=E.program;i.updateUBOMapping(_,T);const S=e.render.frame;r[_.id]!==S&&(h(_),r[_.id]=S)}function u(_){const E=f();_.__bindingPointIndex=E;const A=n.createBuffer(),T=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const E=s[_.id],A=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let S=0,I=A.length;S<I;S++){const O=A[S];if(Array.isArray(O))for(let D=0,G=O.length;D<G;D++)d(O[D],S,D,T);else d(O,S,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,E,A,T){if(x(_,E,A,T)===!0){const S=_.__offset,I=_.value;if(Array.isArray(I)){let O=0;for(let D=0;D<I.length;D++){const G=I[D],ae=p(G);g(G,_.__data,O),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(O+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,_.__data)}}function g(_,E,A){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,A)}function x(_,E,A,T){const S=_.value,I=E+"_"+A;if(T[I]===void 0)return typeof S=="number"||typeof S=="boolean"?T[I]=S:ArrayBuffer.isView(S)?T[I]=S.slice():T[I]=S.clone(),!0;{const O=T[I];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return T[I]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(O.equals(S)===!1)return O.copy(S),!0}}return!1}function m(_){const E=_.uniforms;let A=0;const T=16;for(let I=0,O=E.length;I<O;I++){const D=Array.isArray(E[I])?E[I]:[E[I]];for(let G=0,ae=D.length;G<ae;G++){const he=D[G],K=Array.isArray(he.value)?he.value:[he.value];for(let se=0,X=K.length;se<X;se++){const ie=K[se],de=p(ie),Me=A%T,ye=Me%de.boundary,be=Me+ye;A+=ye,be!==0&&T-be<de.storage&&(A+=T-be),he.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=A,A+=de.storage}}}const S=A%T;return S>0&&(A+=T-S),_.__size=A,_.__cache={},this}function p(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",_),E}function M(_){const E=_.target;E.removeEventListener("dispose",M);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function y(){for(const _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:y}}const AI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function RI(){return hi===null&&(hi=new hh(AI,16,16,Js,os),hi.name="DFG_LUT",hi.minFilter=$t,hi.magFilter=$t,hi.wrapS=Si,hi.wrapT=Si,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class C0{constructor(e={}){const{canvas:t=JT(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=d,m=new Set([rh,sh,ih]),p=new Set([Cn,Ci,Xa,$a,eh,th]),M=new Uint32Array(4),y=new Int32Array(4),_=new W;let E=null,A=null;const T=[],S=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let D=!1,G=null,ae=null,he=null,K=null;this._outputColorSpace=en;let se=0,X=0,ie=null,de=-1,Me=null;const ye=new yt,be=new yt;let Ze=null;const ct=new qe(0);let Je=0,le=t.width,V=t.height,Z=1,ce=null,me=null;const Se=new yt(0,0,le,V),L=new yt(0,0,le,V);let N=!1;const F=new ph;let j=!1,te=!1;const re=new et,w=new W,P=new yt,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function _e(){return ie===null?Z:1}let C=i;function k(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jf}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",ri,!1),C===null){const z="webgl2";if(C=k(z,b),C===null)throw k(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Xe("WebGLRenderer: "+b.message),b}let Y,R,v,U,q,Q,ge,xe,oe,ue,ve,Ne,Ae,Ee,Ge,ze,je,H,Te,fe,Re,Ie,pe;function Be(){Y=new R1(C),Y.init(),Re=new vI(C,Y),R=new x1(C,Y,e,Re),v=new gI(C,Y),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),ae=C.createFramebuffer(),he=C.createFramebuffer(),K=C.createFramebuffer(),U=new P1(C),q=new nI,Q=new _I(C,Y,v,q,R,Re,U),ge=new A1(O),xe=new DR(C),Ie=new _1(C,xe),oe=new w1(C,xe,U,Ie),ue=new L1(C,oe,xe,Ie,U),H=new I1(C,R,Q),Ge=new S1(q),ve=new tI(O,ge,Y,R,Ie,Ge),Ne=new EI(O,q),Ae=new sI,Ee=new uI(Y),je=new g1(O,ge,v,ue,g,l),ze=new mI(O,ue,R),pe=new TI(C,U,R,v),Te=new v1(C,Y,U),fe=new C1(C,Y,U),U.programs=ve.programs,O.capabilities=R,O.extensions=Y,O.properties=q,O.renderLists=Ae,O.shadowMap=ze,O.state=v,O.info=U}Be(),x!==Cn&&(I=new D1(x,t.width,t.height,o,s,r));const Ue=new yI(O,C);this.xr=Ue,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Y.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Y.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(le,V,!1))},this.getSize=function(b){return b.set(le,V)},this.setSize=function(b,z,ne=!0){if(Ue.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,V=z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),ne===!0&&(t.style.width=b+"px",t.style.height=z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(le*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,z,ne){le=b,V=z,Z=ne,t.width=Math.floor(b*ne),t.height=Math.floor(z*ne),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(x===Cn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ye)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,z,ne,J){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,z,ne,J),v.viewport(ye.copy(Se).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(L)},this.setScissor=function(b,z,ne,J){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,z,ne,J),v.scissor(be.copy(L).multiplyScalar(Z).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(b){v.setScissorTest(N=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,ne=!0){let J=0;if(b){let ee=!1;if(ie!==null){const Pe=ie.texture.format;ee=m.has(Pe)}if(ee){const Pe=ie.texture.type,Oe=p.has(Pe),Ce=je.getClearColor(),Fe=je.getClearAlpha(),Ve=Ce.r,Qe=Ce.g,nt=Ce.b;Oe?(M[0]=Ve,M[1]=Qe,M[2]=nt,M[3]=Fe,C.clearBufferuiv(C.COLOR,0,M)):(y[0]=Ve,y[1]=Qe,y[2]=nt,y[3]=Fe,C.clearBufferiv(C.COLOR,0,y))}else J|=C.COLOR_BUFFER_BIT}z&&(J|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",ri,!1),je.dispose(),Ae.dispose(),Ee.dispose(),q.dispose(),ge.dispose(),ue.dispose(),Ie.dispose(),pe.dispose(),ve.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Rh),Ue.removeEventListener("sessionend",wh),Ps.stop()};function Nt(b){b.preventDefault(),_l("WebGLRenderer: Context Lost."),D=!0}function Rt(){_l("WebGLRenderer: Context Restored."),D=!1;const b=U.autoReset,z=ze.enabled,ne=ze.autoUpdate,J=ze.needsUpdate,ee=ze.type;Be(),U.autoReset=b,ze.enabled=z,ze.autoUpdate=ne,ze.needsUpdate=J,ze.type=ee}function ri(b){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ai(b){const z=b.target;z.removeEventListener("dispose",ai),N0(z)}function N0(b){D0(b),q.remove(b)}function D0(b){const z=q.get(b).programs;z!==void 0&&(z.forEach(function(ne){ve.releaseProgram(ne)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,ne,J,ee,Pe){z===null&&(z=B);const Oe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ce=F0(b,z,ne,J,ee);v.setMaterial(J,Oe);let Fe=ne.index,Ve=1;if(J.wireframe===!0){if(Fe=oe.getWireframeAttribute(ne),Fe===void 0)return;Ve=2}const Qe=ne.drawRange,nt=ne.attributes.position;let He=Qe.start*Ve,Mt=(Qe.start+Qe.count)*Ve;Pe!==null&&(He=Math.max(He,Pe.start*Ve),Mt=Math.min(Mt,(Pe.start+Pe.count)*Ve)),Fe!==null?(He=Math.max(He,0),Mt=Math.min(Mt,Fe.count)):nt!=null&&(He=Math.max(He,0),Mt=Math.min(Mt,nt.count));const Bt=Mt-He;if(Bt<0||Bt===1/0)return;Ie.setup(ee,J,Ce,ne,Fe);let Dt,Et=Te;if(Fe!==null&&(Dt=xe.get(Fe),Et=fe,Et.setIndex(Dt)),ee.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*_e()),Et.setMode(C.LINES)):Et.setMode(C.TRIANGLES);else if(ee.isLine){let an=J.linewidth;an===void 0&&(an=1),v.setLineWidth(an*_e()),ee.isLineSegments?Et.setMode(C.LINES):ee.isLineLoop?Et.setMode(C.LINE_LOOP):Et.setMode(C.LINE_STRIP)}else ee.isPoints?Et.setMode(C.POINTS):ee.isSprite&&Et.setMode(C.TRIANGLES);if(ee.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))Et.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const an=ee._multiDrawStarts,De=ee._multiDrawCounts,An=ee._multiDrawCount,ut=Fe?xe.get(Fe).bytesPerElement:1,Dn=q.get(J).currentProgram.getUniforms();for(let oi=0;oi<An;oi++)Dn.setValue(C,"_gl_DrawID",oi),Et.render(an[oi]/ut,De[oi])}else if(ee.isInstancedMesh)Et.renderInstances(He,Bt,ee.count);else if(ne.isInstancedBufferGeometry){const an=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,De=Math.min(ne.instanceCount,an);Et.renderInstances(He,Bt,De)}else Et.render(He,Bt)};function Ah(b,z,ne){b.transparent===!0&&b.side===xi&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,co(b,z,ne),b.side=as,b.needsUpdate=!0,co(b,z,ne),b.side=xi):co(b,z,ne)}this.compile=function(b,z,ne=null){ne===null&&(ne=b),A=Ee.get(ne),A.init(z),S.push(A),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),b!==ne&&b.traverseVisible(function(ee){ee.isLight&&ee.layers.test(z.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();const J=new Set;return b.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){const Ce=Pe[Oe];Ah(Ce,ne,ee),J.add(Ce)}else Ah(Pe,ne,ee),J.add(Pe)}),A=S.pop(),J},this.compileAsync=function(b,z,ne=null){const J=this.compile(b,z,ne);return new Promise(ee=>{function Pe(){if(J.forEach(function(Oe){q.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){ee(b);return}setTimeout(Pe,10)}Y.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Zl=null;function O0(b){Zl&&Zl(b)}function Rh(){Ps.stop()}function wh(){Ps.start()}const Ps=new M0;Ps.setAnimationLoop(O0),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(b){Zl=b,Ue.setAnimationLoop(b),b===null?Ps.stop():Ps.start()},Ue.addEventListener("sessionstart",Rh),Ue.addEventListener("sessionend",wh),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(b,z);const ne=Ue.enabled===!0&&Ue.isPresenting===!0,J=I!==null&&(ie===null||ne)&&I.begin(O,ie);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(z),z=Ue.getCamera()),b.isScene===!0&&b.onBeforeRender(O,b,z,ie),A=Ee.get(b,S.length),A.init(z),A.state.textureUnits=Q.getTextureUnits(),S.push(A),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),F.setFromProjectionMatrix(re,Mi,z.reversedDepth),te=this.localClippingEnabled,j=Ge.init(this.clippingPlanes,te),E=Ae.get(b,T.length),E.init(),T.push(E),Ue.enabled===!0&&Ue.isPresenting===!0){const Oe=O.xr.getDepthSensingMesh();Oe!==null&&Jl(Oe,z,-1/0,O.sortObjects)}Jl(b,z,0,O.sortObjects),E.finish(),O.sortObjects===!0&&E.sort(ce,me,z.reversedDepth),$=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,$&&je.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&Ge.beginShadows();const ee=A.state.shadowsArray;if(ze.render(ee,b,z),j===!0&&Ge.endShadows(),(J&&I.hasRenderPass())===!1){const Oe=E.opaque,Ce=E.transmissive;if(A.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(Ce.length>0)for(let Ve=0,Qe=Fe.length;Ve<Qe;Ve++){const nt=Fe[Ve];Ph(Oe,Ce,b,nt)}$&&je.render(b);for(let Ve=0,Qe=Fe.length;Ve<Qe;Ve++){const nt=Fe[Ve];Ch(E,b,nt,nt.viewport)}}else Ce.length>0&&Ph(Oe,Ce,b,z),$&&je.render(b),Ch(E,b,z)}ie!==null&&X===0&&(Q.updateMultisampleRenderTarget(ie),Q.updateRenderTargetMipmap(ie)),J&&I.end(O),b.isScene===!0&&b.onAfterRender(O,b,z),Ie.resetDefaultState(),de=-1,Me=null,S.pop(),S.length>0?(A=S[S.length-1],Q.setTextureUnits(A.state.textureUnits),j===!0&&Ge.setGlobalState(O.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,G!==null&&G.renderEnd()};function Jl(b,z,ne,J){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||F.intersectsSprite(b)){J&&P.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const Oe=ue.update(b),Ce=b.material;Ce.visible&&E.push(b,Oe,Ce,ne,P.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||F.intersectsObject(b))){const Oe=ue.update(b),Ce=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),P.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),P.copy(Oe.boundingSphere.center)),P.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(Ce)){const Fe=Oe.groups;for(let Ve=0,Qe=Fe.length;Ve<Qe;Ve++){const nt=Fe[Ve],He=Ce[nt.materialIndex];He&&He.visible&&E.push(b,Oe,He,ne,P.z,nt)}}else Ce.visible&&E.push(b,Oe,Ce,ne,P.z,null)}}const Pe=b.children;for(let Oe=0,Ce=Pe.length;Oe<Ce;Oe++)Jl(Pe[Oe],z,ne,J)}function Ch(b,z,ne,J){const{opaque:ee,transmissive:Pe,transparent:Oe}=b;A.setupLightsView(ne),j===!0&&Ge.setGlobalState(O.clippingPlanes,ne),J&&v.viewport(ye.copy(J)),ee.length>0&&lo(ee,z,ne),Pe.length>0&&lo(Pe,z,ne),Oe.length>0&&lo(Oe,z,ne),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ph(b,z,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[J.id]===void 0){const He=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[J.id]=new Ai(1,1,{generateMipmaps:!0,type:He?os:Cn,minFilter:Zi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Pe=A.state.transmissionRenderTarget[J.id],Oe=J.viewport||ye;Pe.setSize(Oe.z*O.transmissionResolutionScale,Oe.w*O.transmissionResolutionScale);const Ce=O.getRenderTarget(),Fe=O.getActiveCubeFace(),Ve=O.getActiveMipmapLevel();O.setRenderTarget(Pe),O.getClearColor(ct),Je=O.getClearAlpha(),Je<1&&O.setClearColor(16777215,.5),O.clear(),$&&je.render(ne);const Qe=O.toneMapping;O.toneMapping=Ti;const nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),A.setupLightsView(J),j===!0&&Ge.setGlobalState(O.clippingPlanes,J),lo(b,ne,J),Q.updateMultisampleRenderTarget(Pe),Q.updateRenderTargetMipmap(Pe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Mt=0,Bt=z.length;Mt<Bt;Mt++){const Dt=z[Mt],{object:Et,geometry:an,material:De,group:An}=Dt;if(De.side===xi&&Et.layers.test(J.layers)){const ut=De.side;De.side=En,De.needsUpdate=!0,Ih(Et,ne,J,an,De,An),De.side=ut,De.needsUpdate=!0,He=!0}}He===!0&&(Q.updateMultisampleRenderTarget(Pe),Q.updateRenderTargetMipmap(Pe))}O.setRenderTarget(Ce,Fe,Ve),O.setClearColor(ct,Je),nt!==void 0&&(J.viewport=nt),O.toneMapping=Qe}function lo(b,z,ne){const J=z.isScene===!0?z.overrideMaterial:null;for(let ee=0,Pe=b.length;ee<Pe;ee++){const Oe=b[ee],{object:Ce,geometry:Fe,group:Ve}=Oe;let Qe=Oe.material;Qe.allowOverride===!0&&J!==null&&(Qe=J),Ce.layers.test(ne.layers)&&Ih(Ce,z,ne,Fe,Qe,Ve)}}function Ih(b,z,ne,J,ee,Pe){b.onBeforeRender(O,z,ne,J,ee,Pe),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(O,z,ne,J,b,Pe),ee.transparent===!0&&ee.side===xi&&ee.forceSinglePass===!1?(ee.side=En,ee.needsUpdate=!0,O.renderBufferDirect(ne,z,J,ee,b,Pe),ee.side=as,ee.needsUpdate=!0,O.renderBufferDirect(ne,z,J,ee,b,Pe),ee.side=xi):O.renderBufferDirect(ne,z,J,ee,b,Pe),b.onAfterRender(O,z,ne,J,ee,Pe)}function co(b,z,ne){z.isScene!==!0&&(z=B);const J=q.get(b),ee=A.state.lights,Pe=A.state.shadowsArray,Oe=ee.state.version,Ce=ve.getParameters(b,ee.state,Pe,z,ne,A.state.lightProbeGridArray),Fe=ve.getProgramCacheKey(Ce);let Ve=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;const Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=ge.get(b.envMap||J.environment,Qe),J.envMapRotation=J.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",ai),Ve=new Map,J.programs=Ve);let nt=Ve.get(Fe);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Oe)return Nh(b,Ce),nt}else Ce.uniforms=ve.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,ne,Ce),b.onBeforeCompile(Ce,O),nt=ve.acquireProgram(Ce,Fe),Ve.set(Fe,nt),J.uniforms=Ce.uniforms;const He=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Ge.uniform),Nh(b,Ce),J.needsLights=k0(b),J.lightsStateVersion=Oe,J.needsLights&&(He.ambientLightColor.value=ee.state.ambient,He.lightProbe.value=ee.state.probe,He.directionalLights.value=ee.state.directional,He.directionalLightShadows.value=ee.state.directionalShadow,He.spotLights.value=ee.state.spot,He.spotLightShadows.value=ee.state.spotShadow,He.rectAreaLights.value=ee.state.rectArea,He.ltc_1.value=ee.state.rectAreaLTC1,He.ltc_2.value=ee.state.rectAreaLTC2,He.pointLights.value=ee.state.point,He.pointLightShadows.value=ee.state.pointShadow,He.hemisphereLights.value=ee.state.hemi,He.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,He.spotLightMatrix.value=ee.state.spotLightMatrix,He.spotLightMap.value=ee.state.spotLightMap,He.pointShadowMatrix.value=ee.state.pointShadowMatrix),J.lightProbeGrid=A.state.lightProbeGridArray.length>0,J.currentProgram=nt,J.uniformsList=null,nt}function Lh(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Nh(b,z){const ne=q.get(b);ne.outputColorSpace=z.outputColorSpace,ne.batching=z.batching,ne.batchingColor=z.batchingColor,ne.instancing=z.instancing,ne.instancingColor=z.instancingColor,ne.instancingMorph=z.instancingMorph,ne.skinning=z.skinning,ne.morphTargets=z.morphTargets,ne.morphNormals=z.morphNormals,ne.morphColors=z.morphColors,ne.morphTargetsCount=z.morphTargetsCount,ne.numClippingPlanes=z.numClippingPlanes,ne.numIntersection=z.numClipIntersection,ne.vertexAlphas=z.vertexAlphas,ne.vertexTangents=z.vertexTangents,ne.toneMapping=z.toneMapping}function U0(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let ne=0,J=b.length;ne<J;ne++){const ee=b[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function F0(b,z,ne,J,ee){z.isScene!==!0&&(z=B),Q.resetTextureUnits();const Pe=z.fog,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,Ce=ie===null?O.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,Fe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ve=ge.get(J.envMap||Oe,Fe),Qe=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!ne.morphAttributes.position,Mt=!!ne.morphAttributes.normal,Bt=!!ne.morphAttributes.color;let Dt=Ti;J.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Dt=O.toneMapping);const Et=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,an=Et!==void 0?Et.length:0,De=q.get(J),An=A.state.lights;if(j===!0&&(te===!0||b!==Me)){const wt=b===Me&&J.id===de;Ge.setState(J,b,wt)}let ut=!1;J.version===De.__version?(De.needsLights&&De.lightsStateVersion!==An.state.version||De.outputColorSpace!==Ce||ee.isBatchedMesh&&De.batching===!1||!ee.isBatchedMesh&&De.batching===!0||ee.isBatchedMesh&&De.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&De.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&De.instancing===!1||!ee.isInstancedMesh&&De.instancing===!0||ee.isSkinnedMesh&&De.skinning===!1||!ee.isSkinnedMesh&&De.skinning===!0||ee.isInstancedMesh&&De.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&De.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&De.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&De.instancingMorph===!1&&ee.morphTexture!==null||De.envMap!==Ve||J.fog===!0&&De.fog!==Pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ge.numPlanes||De.numIntersection!==Ge.numIntersection)||De.vertexAlphas!==Qe||De.vertexTangents!==nt||De.morphTargets!==He||De.morphNormals!==Mt||De.morphColors!==Bt||De.toneMapping!==Dt||De.morphTargetsCount!==an||!!De.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,De.__version=J.version);let Dn=De.currentProgram;ut===!0&&(Dn=co(J,z,ee),G&&J.isNodeMaterial&&G.onUpdateProgram(J,Dn,De));let oi=!1,fs=!1,er=!1;const Tt=Dn.getUniforms(),kt=De.uniforms;if(v.useProgram(Dn.program)&&(oi=!0,fs=!0,er=!0),J.id!==de&&(de=J.id,fs=!0),De.needsLights){const wt=U0(A.state.lightProbeGridArray,ee);De.lightProbeGrid!==wt&&(De.lightProbeGrid=wt,fs=!0)}if(oi||Me!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",b.projectionMatrix),Tt.setValue(C,"viewMatrix",b.matrixWorldInverse);const ds=Tt.map.cameraPosition;ds!==void 0&&ds.setValue(C,w.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),Me!==b&&(Me=b,fs=!0,er=!0)}if(De.needsLights&&(An.state.directionalShadowMap.length>0&&Tt.setValue(C,"directionalShadowMap",An.state.directionalShadowMap,Q),An.state.spotShadowMap.length>0&&Tt.setValue(C,"spotShadowMap",An.state.spotShadowMap,Q),An.state.pointShadowMap.length>0&&Tt.setValue(C,"pointShadowMap",An.state.pointShadowMap,Q)),ee.isSkinnedMesh){Tt.setOptional(C,ee,"bindMatrix"),Tt.setOptional(C,ee,"bindMatrixInverse");const wt=ee.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Tt.setValue(C,"boneTexture",wt.boneTexture,Q))}ee.isBatchedMesh&&(Tt.setOptional(C,ee,"batchingTexture"),Tt.setValue(C,"batchingTexture",ee._matricesTexture,Q),Tt.setOptional(C,ee,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",ee._indirectTexture,Q),Tt.setOptional(C,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",ee._colorsTexture,Q));const hs=ne.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&H.update(ee,ne,Dn),(fs||De.receiveShadow!==ee.receiveShadow)&&(De.receiveShadow=ee.receiveShadow,Tt.setValue(C,"receiveShadow",ee.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(kt.envMapIntensity.value=z.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=RI()),fs){if(Tt.setValue(C,"toneMappingExposure",O.toneMappingExposure),De.needsLights&&B0(kt,er),Pe&&J.fog===!0&&Ne.refreshFogUniforms(kt,Pe),Ne.refreshMaterialUniforms(kt,J,Z,V,A.state.transmissionRenderTarget[b.id]),De.needsLights&&De.lightProbeGrid){const wt=De.lightProbeGrid;kt.probesSH.value=wt.texture,kt.probesMin.value.copy(wt.boundingBox.min),kt.probesMax.value.copy(wt.boundingBox.max),kt.probesResolution.value.copy(wt.resolution)}tl.upload(C,Lh(De),kt,Q)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(tl.upload(C,Lh(De),kt,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Tt.setValue(C,"center",ee.center),Tt.setValue(C,"modelViewMatrix",ee.modelViewMatrix),Tt.setValue(C,"normalMatrix",ee.normalMatrix),Tt.setValue(C,"modelMatrix",ee.matrixWorld),J.uniformsGroups!==void 0){const wt=J.uniformsGroups;for(let ds=0,tr=wt.length;ds<tr;ds++){const Dh=wt[ds];pe.update(Dh,Dn),pe.bind(Dh,Dn)}}return Dn}function B0(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function k0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(b,z,ne){const J=q.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=z,q.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const ne=q.get(b);ne.__webglFramebuffer=z,ne.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,ne=0){ie=b,se=z,X=ne;let J=null,ee=!1,Pe=!1;if(b){const Ce=q.get(b);if(Ce.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(C.FRAMEBUFFER,Ce.__webglFramebuffer),ye.copy(b.viewport),be.copy(b.scissor),Ze=b.scissorTest,v.viewport(ye),v.scissor(be),v.setScissorTest(Ze),de=-1;return}else if(Ce.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(Ce.__hasExternalTextures)Q.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qe=b.depthTexture;if(Ce.__boundDepthTexture!==Qe){if(Qe!==null&&q.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);const Ve=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?J=Ve[z][ne]:J=Ve[z],ee=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?J=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?J=Ve[ne]:J=Ve,ye.copy(b.viewport),be.copy(b.scissor),Ze=b.scissorTest}else ye.copy(Se).multiplyScalar(Z).floor(),be.copy(L).multiplyScalar(Z).floor(),Ze=N;if(ne!==0&&(J=ae),v.bindFramebuffer(C.FRAMEBUFFER,J)&&v.drawBuffers(b,J),v.viewport(ye),v.scissor(be),v.setScissorTest(Ze),ee){const Ce=q.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,ne)}else if(Pe){const Ce=z;for(let Fe=0;Fe<b.textures.length;Fe++){const Ve=q.get(b.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,Ve.__webglTexture,ne,Ce)}}else if(b!==null&&ne!==0){const Ce=q.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,ne)}de=-1},this.readRenderTargetPixels=function(b,z,ne,J,ee,Pe,Oe,Ce=0){if(!(b&&b.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Fe=Fe[Oe]),Fe){v.bindFramebuffer(C.FRAMEBUFFER,Fe);try{const Ve=b.textures[Ce],Qe=Ve.format,nt=Ve.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!R.textureFormatReadable(Qe)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(nt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-J&&ne>=0&&ne<=b.height-ee&&C.readPixels(z,ne,J,ee,Re.convert(Qe),Re.convert(nt),Pe)}finally{const Ve=ie!==null?q.get(ie).__webglFramebuffer:null;v.bindFramebuffer(C.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,z,ne,J,ee,Pe,Oe,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Fe=Fe[Oe]),Fe)if(z>=0&&z<=b.width-J&&ne>=0&&ne<=b.height-ee){v.bindFramebuffer(C.FRAMEBUFFER,Fe);const Ve=b.textures[Ce],Qe=Ve.format,nt=Ve.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!R.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.bufferData(C.PIXEL_PACK_BUFFER,Pe.byteLength,C.STREAM_READ),C.readPixels(z,ne,J,ee,Re.convert(Qe),Re.convert(nt),0);const Mt=ie!==null?q.get(ie).__webglFramebuffer:null;v.bindFramebuffer(C.FRAMEBUFFER,Mt);const Bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jT(C,Bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Pe),C.deleteBuffer(He),C.deleteSync(Bt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,ne=0){const J=Math.pow(2,-ne),ee=Math.floor(b.image.width*J),Pe=Math.floor(b.image.height*J),Oe=z!==null?z.x:0,Ce=z!==null?z.y:0;Q.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,Oe,Ce,ee,Pe),v.unbindTexture()},this.copyTextureToTexture=function(b,z,ne=null,J=null,ee=0,Pe=0){let Oe,Ce,Fe,Ve,Qe,nt,He,Mt,Bt;const Dt=b.isCompressedTexture?b.mipmaps[Pe]:b.image;if(ne!==null)Oe=ne.max.x-ne.min.x,Ce=ne.max.y-ne.min.y,Fe=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,Qe=ne.min.y,nt=ne.isBox3?ne.min.z:0;else{const kt=Math.pow(2,-ee);Oe=Math.floor(Dt.width*kt),Ce=Math.floor(Dt.height*kt),b.isDataArrayTexture?Fe=Dt.depth:b.isData3DTexture?Fe=Math.floor(Dt.depth*kt):Fe=1,Ve=0,Qe=0,nt=0}J!==null?(He=J.x,Mt=J.y,Bt=J.z):(He=0,Mt=0,Bt=0);const Et=Re.convert(z.format),an=Re.convert(z.type);let De;z.isData3DTexture?(Q.setTexture3D(z,0),De=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),De=C.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),De=C.TEXTURE_2D),v.activeTexture(C.TEXTURE0),v.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);const An=v.getParameter(C.UNPACK_ROW_LENGTH),ut=v.getParameter(C.UNPACK_IMAGE_HEIGHT),Dn=v.getParameter(C.UNPACK_SKIP_PIXELS),oi=v.getParameter(C.UNPACK_SKIP_ROWS),fs=v.getParameter(C.UNPACK_SKIP_IMAGES);v.pixelStorei(C.UNPACK_ROW_LENGTH,Dt.width),v.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt.height),v.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);const er=b.isDataArrayTexture||b.isData3DTexture,Tt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const kt=q.get(b),hs=q.get(z),wt=q.get(kt.__renderTarget),ds=q.get(hs.__renderTarget);v.bindFramebuffer(C.READ_FRAMEBUFFER,wt.__webglFramebuffer),v.bindFramebuffer(C.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let tr=0;tr<Fe;tr++)er&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,q.get(b).__webglTexture,ee,nt+tr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,q.get(z).__webglTexture,Pe,Bt+tr)),C.blitFramebuffer(Ve,Qe,Oe,Ce,He,Mt,Oe,Ce,C.DEPTH_BUFFER_BIT,C.NEAREST);v.bindFramebuffer(C.READ_FRAMEBUFFER,null),v.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ee!==0||b.isRenderTargetTexture||q.has(b)){const kt=q.get(b),hs=q.get(z);v.bindFramebuffer(C.READ_FRAMEBUFFER,he),v.bindFramebuffer(C.DRAW_FRAMEBUFFER,K);for(let wt=0;wt<Fe;wt++)er?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,kt.__webglTexture,ee,nt+wt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,kt.__webglTexture,ee),Tt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,hs.__webglTexture,Pe,Bt+wt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,hs.__webglTexture,Pe),ee!==0?C.blitFramebuffer(Ve,Qe,Oe,Ce,He,Mt,Oe,Ce,C.COLOR_BUFFER_BIT,C.NEAREST):Tt?C.copyTexSubImage3D(De,Pe,He,Mt,Bt+wt,Ve,Qe,Oe,Ce):C.copyTexSubImage2D(De,Pe,He,Mt,Ve,Qe,Oe,Ce);v.bindFramebuffer(C.READ_FRAMEBUFFER,null),v.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Tt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(De,Pe,He,Mt,Bt,Oe,Ce,Fe,Et,an,Dt.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(De,Pe,He,Mt,Bt,Oe,Ce,Fe,Et,Dt.data):C.texSubImage3D(De,Pe,He,Mt,Bt,Oe,Ce,Fe,Et,an,Dt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Pe,He,Mt,Oe,Ce,Et,an,Dt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Pe,He,Mt,Dt.width,Dt.height,Et,Dt.data):C.texSubImage2D(C.TEXTURE_2D,Pe,He,Mt,Oe,Ce,Et,an,Dt);v.pixelStorei(C.UNPACK_ROW_LENGTH,An),v.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(C.UNPACK_SKIP_PIXELS,Dn),v.pixelStorei(C.UNPACK_SKIP_ROWS,oi),v.pixelStorei(C.UNPACK_SKIP_IMAGES,fs),Pe===0&&z.generateMipmaps&&C.generateMipmap(De),v.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){se=0,X=0,ie=null,v.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function wm(n,e){if(e===VT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===pf||e===i0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===pf)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function wI(n){const e=new Map,t=new Map,i=n.clone();return P0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function P0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)P0(n.children[i],e.children[i],t)}class CI extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DI(t)}),this.register(function(t){return new OI(t)}),this.register(function(t){return new WI(t)}),this.register(function(t){return new XI(t)}),this.register(function(t){return new $I(t)}),this.register(function(t){return new FI(t)}),this.register(function(t){return new BI(t)}),this.register(function(t){return new kI(t)}),this.register(function(t){return new VI(t)}),this.register(function(t){return new NI(t)}),this.register(function(t){return new HI(t)}),this.register(function(t){return new UI(t)}),this.register(function(t){return new zI(t)}),this.register(function(t){return new GI(t)}),this.register(function(t){return new II(t)}),this.register(function(t){return new Cm(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cm(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qI(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=La.extractUrlBase(e);a=La.resolveURL(c,this.path)}else a=La.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _0(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===I0){try{a[rt.KHR_BINARY_GLTF]=new KI(e)}catch(f){s&&s(f);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case rt.KHR_MATERIALS_UNLIT:a[f]=new LI;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[f]=new YI(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[f]=new ZI;break;case rt.KHR_MESH_QUANTIZATION:a[f]=new JI;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function PI(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Gt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class II{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],In);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qa(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xR(u),c.distance=f;break;case"spot":c=new _R(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class LI{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return $s}extendParams(e,t,i){const s=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,en))}return Promise.all(s)}}class NI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class DI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(r,r)}return Promise.all(s)}}class OI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class UI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class FI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,en)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class BI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class kI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(r[0],r[1],r[2],In),Promise.all(s)}}class VI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class HI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(r[0],r[1],r[2],In),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,en)),Promise.all(s)}}class GI{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class zI{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?Ni:null}extendMaterialParams(e,t){const i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class WI{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class XI{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class $I{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class Cm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class qI{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const x=new et,m=new W,p=new Ln,M=new W(1,1,1),y=new VA(g.geometry,g.material,h);for(let _=0;_<h;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,M));for(const _ in l)if(_==="_COLOR_0"){const E=l[_];y.instanceColor=new _f(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Lt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const I0="glTF",_a=12,Pm={JSON:1313821514,BIN:5130562};class KI{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_a),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==I0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_a,r=new DataView(e,_a);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Pm.JSON){const c=new Uint8Array(e,_a+a,o);this.content=i.decode(c)}else if(l===Pm.BIN){const c=_a+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YI{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=yf[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=yf[u]||u.toLowerCase();if(a[u]!==void 0){const h=i.accessors[e.attributes[u]],d=Lr[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}f(d)},o,c,In,h)})})}}class ZI{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JI{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class L0 extends Yr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,g=e*c,x=g-c,m=-2*d+3*h,p=d-h,M=1-m,y=p-h+f;for(let _=0;_!==o;_++){const E=a[x+_+o],A=a[x+_+l]*u,T=a[g+_+o],S=a[g+_]*u;r[_]=M*E+y*A+m*T+p*S}return r}}const jI=new Ln;class QI extends L0{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return jI.fromArray(r).normalize().toArray(r),r}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Im={9728:Xt,9729:$t,9984:Z_,9985:Zo,9986:Ma,9987:Zi},Lm={33071:Si,33648:dl,10497:Wr},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eL={CUBICSPLINE:void 0,LINEAR:Ka,STEP:qa},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new gh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:as})),n.DefaultMaterial}function Fs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nL(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function iL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sL(n){let e;const t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=n.indices+":"+eu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+eu(n.targets[i]);return e}function eu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function bf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aL=new et;class oL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new mR(this.options.manager):this.textureLoader=new MR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Fs(r,o,s),pi(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(La.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=jc[s.type],o=Lr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Mn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=jc[s.type],c=Lr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(d&&d!==f){const p=Math.floor(h/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(M);y||(x=new c(o,p*d,s.count*d/u),y=new NA(x,d/u),t.cache.add(M,y)),m=new fh(y,l,h%d/u,g)}else o===null?x=new c(s.count*l):x=new c(o,h,s.count*l),m=new Mn(x,l,g);if(s.sparse!==void 0){const p=jc.SCALAR,M=Lr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new M(a[1],y,s.sparse.count*p),A=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Mn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,S=E.length;T<S;T++){const I=E[T];if(m.setX(I,A[T*l]),l>=2&&m.setY(I,A[T*l+1]),l>=3&&m.setZ(I,A[T*l+2]),l>=4&&m.setW(I,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Im[h.magFilter]||$t,u.minFilter=Im[h.minFilter]||Zi,u.wrapS=Lm[h.wrapS]||Wr,u.wrapT=Lm[h.wrapT]||Wr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==$t,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(x){const m=new jt(x);m.needsUpdate=!0,h(m)}),t.load(La.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),pi(f,a),f.userData.mimeType=a.mimeType||rL(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new h0,Ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new f0,Ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return gh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const f=s[rt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],In),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,en)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xi);const u=r.alphaMode||Qc.OPAQUE;if(u===Qc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Qc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$s&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==$s&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$s){const f=r.emissiveFactor;o.emissive=new qe().setRGB(f[0],f[1],f[2],In)}return r.emissiveTexture!==void 0&&a!==$s&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,en)),Promise.all(c).then(function(){const f=new a(o);return r.name&&(f.name=r.name),pi(f,r),t.associations.set(f,{materials:e}),r.extensions&&Fs(s,f,r),f})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=sL(c),f=s[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Nm(new Gn,c,t),s[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?tL(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=a[d];let p;const M=c[d];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new FA(x,M):new Nn(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?p.geometry=wm(p.geometry,i0):m.mode===Un.TRIANGLE_FAN&&(p.geometry=wm(p.geometry,pf));else if(m.mode===Un.LINES)p=new WA(x,M);else if(m.mode===Un.LINE_STRIP)p=new mh(x,M);else if(m.mode===Un.LINE_LOOP)p=new XA(x,M);else if(m.mode===Un.POINTS)p=new $A(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iL(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),pi(p,r),m.extensions&&Fs(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Fs(s,f[0],r),f[0];const h=new Ji;r.extensions&&Fs(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(gA.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ql(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new et;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dh(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],x=f[3],m=f[4],p=[];for(let y=0,_=h.length;y<_;y++){const E=h[y],A=d[y],T=g[y],S=x[y],I=m[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const O=i._createAnimationTracks(E,A,T,S,I);if(O)for(let D=0;D<O.length;D++)p.push(O[D])}const M=new lR(r,void 0,p);return pi(M,s),M})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,aL)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,g=f[0];u.pivot=new W().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new u0:c.length>1?u=new Ji:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=a),pi(u,r),r.extensions&&Fs(i,u,r),r.matrix!==void 0){const f=new et;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Ji;i.name&&(r.name=s.createUniqueName(i.name)),pi(r,i),i.extensions&&Fs(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++){const h=l[u];h.parent!==null?r.add(wI(h)):r.add(h)}const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof Ri||h instanceof jt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ys[r.path]===ys.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(ys[r.path]){case ys.weights:u=Ja;break;case ys.rotation:u=ja;break;case ys.translation:case ys.scale:u=Sl;break;default:switch(i.itemSize){case 1:u=Ja;break;case 2:case 3:default:u=Sl;break}break}const f=s.interpolation!==void 0?eL[s.interpolation]:Ka,h=this._getArrayFromAccessor(i);for(let d=0,g=l.length;d<g;d++){const x=new u(l[d]+"."+ys[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=bf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ja?QI:L0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lL(n,e,t){const i=e.attributes,s=new ii;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),o.normalized){const u=bf(Lr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new W,l=new W;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const x=bf(Lr[h.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Li;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Nm(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=yf[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return at.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),pi(n,e),lL(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nL(n,e.targets,t):n})}const tu=new Map,nu=new Map,cL=new CI;function uL(n){return tu.has(n)?Promise.resolve(tu.get(n)):new Promise((e,t)=>{const i=new Image;i.onload=()=>{tu.set(n,i),e(i)},i.onerror=t,i.src=n})}function Sh(n){if(nu.has(n)){const e=nu.get(n);return Promise.resolve({scene:e.scene.clone(),scenes:e.scenes,animations:e.animations,asset:e.asset,parser:e.parser})}return new Promise((e,t)=>{cL.load(n,i=>{nu.set(n,i),e({scene:i.scene.clone(),scenes:i.scenes,animations:i.animations,asset:i.asset,parser:i.parser})},void 0,t)})}function fL(n){return Promise.all(n.map(e=>uL(e)))}function hL(n){return Promise.all(n.map(e=>Sh(e)))}const dL={Tails:0,Heads:Math.PI},pL={props:{onFlipped:Function,onFlipStart:Function},data(){return{isFlipping:!1,progress:0,modelLoaded:!1,resizeObserver:null,frameId:null,flipFrameId:null,flipTimeoutId:null,flipStartRotation:0}},mounted(){this.initScene(),this.loadCoin(),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.$refs.canvas)},beforeUnmount(){var n,e;cancelAnimationFrame(this.frameId),cancelAnimationFrame(this.flipFrameId),clearTimeout(this.flipTimeoutId),(n=this.resizeObserver)==null||n.disconnect(),(e=this.renderer)==null||e.dispose()},methods:{initScene(){const n=this.$refs.canvas;this.scene=new o0,this.camera=new un(35,1,.1,100),this.camera.position.set(0,2,4),this.camera.lookAt(0,0,0),this.renderer=new C0({canvas:n,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.scene.add(new x0(16777215,1));const e=new Qa(16777215,1.3);e.position.set(2,4,5),this.scene.add(e);const t=new Qa(16777215,.6);t.position.set(-3,-2,-4),this.scene.add(t),this.coinGroup=new Ji,this.scene.add(this.coinGroup),this.handleResize(),this.renderLoop()},loadCoin(){Sh("/models/coin/Coin.glb").then(n=>{this.coinModel=n.scene;const e=new ii().setFromObject(this.coinModel),t=new W;e.getSize(t);const s=.6/(Math.max(t.x,t.y,t.z)||1);this.coinModel.scale.setScalar(s);const r=new W;e.getCenter(r),this.coinModel.position.sub(r.multiplyScalar(s)),this.coinModel.rotation.x=Math.PI/4,this.coinGroup.add(this.coinModel),this.modelLoaded=!0}).catch(n=>console.error("Failed to load coin model:",n))},handleResize(){const n=this.$refs.canvas;if(!n||!this.renderer)return;const e=n.clientWidth,t=n.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())},renderLoop(){this.frameId=requestAnimationFrame(this.renderLoop),this.renderer.render(this.scene,this.camera)},handleClick(n){if(!this.modelLoaded)return;const t=this.$refs.canvas.getBoundingClientRect(),i=new st((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),s=new S0;s.setFromCamera(i,this.camera),s.intersectObject(this.coinModel,!0).length>0&&(this.isFlipping?this.cancelFlip():this.flip())},flip(){var d,g;if(this.isFlipping||!this.modelLoaded)return;(g=(d=this.$props).onFlipStart)==null||g.call(d),this.isFlipping=!0,this.progress=0;const n=xM(["Heads","Tails"]),e=qi(4,6),t=2500,i=this.coinGroup.rotation.x;this.flipStartRotation=i;const s=dL[n],r=e*Math.PI*2+OE(i,s),a=1.5,o=performance.now(),l=.3,c=x=>{if(x<l){const p=x/l;return a*(1-Math.pow(1-p,2))}const m=(x-l)/(1-l);return a*(1-Math.pow(m,2))},u=.85,f=x=>{if(x<u)return x/u*.9;const m=(x-u)/(1-u);return .9+(1-Math.pow(1-m,3))*.1},h=x=>{const m=Math.min((x-o)/t,1);this.coinGroup.rotation.x=i+r*f(m),this.coinGroup.position.y=c(m),this.progress=m,m<1?this.flipFrameId=requestAnimationFrame(h):(this.coinGroup.rotation.x=s,this.coinGroup.position.y=0,this.flipTimeoutId=setTimeout(()=>{var p,M;this.isFlipping=!1,this.progress=0,(M=(p=this.$props).onFlipped)==null||M.call(p,n)},500))};this.flipFrameId=requestAnimationFrame(h)},cancelFlip(){if(!this.isFlipping)return;cancelAnimationFrame(this.flipFrameId),clearTimeout(this.flipTimeoutId);const n=100,e=performance.now(),t=this.coinGroup.position.y,i=this.progress,s=this.coinGroup.rotation.x,r=s+DE(s,this.flipStartRotation),a=o=>{const l=Math.min((o-e)/n,1);this.coinGroup.position.y=t*(1-l),this.coinGroup.rotation.x=s+(r-s)*l,this.progress=i*(1-l),l<1?this.flipFrameId=requestAnimationFrame(a):(this.coinGroup.position.y=0,this.coinGroup.rotation.x=r,this.isFlipping=!1,this.progress=0)};this.flipFrameId=requestAnimationFrame(a)}}},mL={class:"coin-wrapper"};function gL(n,e,t,i,s,r){return It(),Kt("div",mL,[We("canvas",{ref:"canvas",class:"coin-canvas",onClick:e[0]||(e[0]=(...a)=>r.handleClick&&r.handleClick(...a))},null,512)])}const _L=rn(pL,[["render",gL],["__scopeId","data-v-5aae517c"]]),vL={components:{Coin:_L,ActionButton:Gl,AlertBox:zl},data(){return{outcome:""}},setup(){const{t:n}=us();return{t:n}},mounted(){this.$nextTick(()=>this.$forceUpdate())},methods:{flip(){this.$refs.coin.isFlipping?this.$refs.coin.cancelFlip():(this.onFlipStart(),this.$refs.coin.flip())},onFlipStart(){this.$refs.alertBox.close()},onFlipped(n){this.outcome=n,this.$refs.alertBox.open()}}},xL={class:"coin-view"};function SL(n,e,t,i,s,r){const a=Ht("AlertBox"),o=Ht("Coin"),l=Ht("ActionButton");return It(),Kt("div",xL,[lt(a,{header:s.outcome?i.t(s.outcome):"","background-color":"FDDE3B",color:"000000",ref:"alertBox"},null,8,["header"]),lt(o,{ref:"coin",class:"coin",onFlipped:r.onFlipped,onFlipStart:r.onFlipStart},null,8,["onFlipped","onFlipStart"]),lt(l,{class:"spin-button",iconClass:"bi "+(n.$refs.coin&&n.$refs.coin.isFlipping?"bi-x":"bi-shuffle"),progress:n.$refs.coin&&n.$refs.coin.progress||0,callback:r.flip},null,8,["iconClass","progress","callback"])])}const ML=rn(vL,[["render",SL],["__scopeId","data-v-29d196ee"]]),yL={1:new W(1,0,0),2:new W(0,0,1),3:new W(0,1,0),4:new W(0,0,-1),5:new W(0,-1,0),6:new W(-1,0,0)},Dm=new W(0,1,0);function bL(n){const e=new Ln().setFromUnitVectors(yL[n],Dm);return new Ln().setFromAxisAngle(Dm,Math.random()*Math.PI*2).multiply(e)}const EL={props:{onRolled:Function,onRollStart:Function},data(){return{isRolling:!1,progress:0,modelLoaded:!1,resizeObserver:null,frameId:null,rollFrameId:null,rollTimeoutId:null,rollStartQuaternion:new Ln}},mounted(){this.initScene(),this.loadDice(),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.$refs.canvas)},beforeUnmount(){var n,e;cancelAnimationFrame(this.frameId),cancelAnimationFrame(this.rollFrameId),clearTimeout(this.rollTimeoutId),(n=this.resizeObserver)==null||n.disconnect(),(e=this.renderer)==null||e.dispose()},methods:{initScene(){const n=this.$refs.canvas;this.scene=new o0,this.camera=new un(35,1,.1,100),this.camera.position.set(0,6,1.5),this.camera.lookAt(0,0,0),this.renderer=new C0({canvas:n,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.scene.add(new x0(16777215,1));const e=new Qa(16777215,1.3);e.position.set(2,4,5),this.scene.add(e);const t=new Qa(16777215,.6);t.position.set(-3,-2,-4),this.scene.add(t),this.diceGroup=new Ji,this.scene.add(this.diceGroup),this.handleResize(),this.renderLoop()},loadDice(){Sh("/models/dice/Dice.gltf").then(n=>{this.diceModel=n.scene;const e=new ii().setFromObject(this.diceModel),t=new W;e.getSize(t);const s=.56/(Math.max(t.x,t.y,t.z)||1);this.diceModel.scale.setScalar(s);const r=new W;e.getCenter(r),this.diceModel.position.sub(r.multiplyScalar(s)),this.diceGroup.add(this.diceModel),this.modelLoaded=!0}).catch(n=>console.error("Failed to load dice model:",n))},handleResize(){const n=this.$refs.canvas;if(!n||!this.renderer)return;const e=n.clientWidth,t=n.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())},renderLoop(){this.frameId=requestAnimationFrame(this.renderLoop),this.renderer.render(this.scene,this.camera)},handleClick(n){if(!this.modelLoaded)return;const t=this.$refs.canvas.getBoundingClientRect(),i=new st((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),s=new S0;s.setFromCamera(i,this.camera),s.intersectObject(this.diceModel,!0).length>0&&(this.isRolling?this.cancelRoll():this.roll())},roll(){var g,x;if(this.isRolling||!this.modelLoaded)return;(x=(g=this.$props).onRollStart)==null||x.call(g),this.isRolling=!0,this.progress=0;const n=qi(1,6),e=bL(n),t=2500,i=1.5,s=performance.now(),r=this.diceGroup.quaternion.clone();this.rollStartQuaternion=r;const a=new Pi(qi(3,5)*Math.PI*2*(Math.random()<.5?-1:1),qi(3,5)*Math.PI*2*(Math.random()<.5?-1:1),qi(3,5)*Math.PI*2*(Math.random()<.5?-1:1)),o=m=>new Ln().setFromEuler(new Pi(a.x*m,a.y*m,a.z*m)).multiply(r),l=.3,c=m=>{if(m<l){const M=m/l;return i*(1-Math.pow(1-M,2))}const p=(m-l)/(1-l);return i*(1-Math.pow(p,2))},u=.85,f=m=>{if(m<u)return m/u*.9;const p=(m-u)/(1-u);return .9+(1-Math.pow(1-p,3))*.1},h=o(.9),d=m=>{const p=Math.min((m-s)/t,1),M=f(p);if(p<u)this.diceGroup.quaternion.copy(o(M));else{const y=(M-.9)/.1;this.diceGroup.quaternion.copy(h).slerp(e,y)}this.diceGroup.position.y=c(p),this.progress=p,p<1?this.rollFrameId=requestAnimationFrame(d):(this.diceGroup.quaternion.copy(e),this.diceGroup.position.y=0,this.rollTimeoutId=setTimeout(()=>{var y,_;this.isRolling=!1,this.progress=0,(_=(y=this.$props).onRolled)==null||_.call(y,n)},500))};this.rollFrameId=requestAnimationFrame(d)},cancelRoll(){if(!this.isRolling)return;cancelAnimationFrame(this.rollFrameId),clearTimeout(this.rollTimeoutId);const n=100,e=performance.now(),t=this.diceGroup.position.y,i=this.progress,s=this.diceGroup.quaternion.clone(),r=this.rollStartQuaternion,a=o=>{const l=Math.min((o-e)/n,1);this.diceGroup.position.y=t*(1-l),this.diceGroup.quaternion.copy(s).slerp(r,l),this.progress=i*(1-l),l<1?this.rollFrameId=requestAnimationFrame(a):(this.diceGroup.position.y=0,this.diceGroup.quaternion.copy(r),this.isRolling=!1,this.progress=0)};this.rollFrameId=requestAnimationFrame(a)}}},TL={class:"dice-wrapper"};function AL(n,e,t,i,s,r){return It(),Kt("div",TL,[We("canvas",{ref:"canvas",class:"dice-canvas",onClick:e[0]||(e[0]=(...a)=>r.handleClick&&r.handleClick(...a))},null,512)])}const RL=rn(EL,[["render",AL],["__scopeId","data-v-3fe2ce1f"]]),wL=[[3,2],[1,0],[0,1],[0,1],[0,1],[0,1]],CL={components:{Dice:RL,ActionButton:Gl,AlertBox:zl},data(){return{outcome:"",outcomeBackgroundColor:Bn[0],outcomeColor:Bn[1]}},mounted(){this.$nextTick(()=>this.$forceUpdate())},methods:{roll(){this.$refs.dice.isRolling?this.$refs.dice.cancelRoll():(this.onRollStart(),this.$refs.dice.roll())},onRollStart(){this.$refs.alertBox.close()},onRolled(n){this.outcome=String(n);const[e,t]=wL[n-1];this.outcomeBackgroundColor=Bn[e],this.outcomeColor=Bn[t],this.$refs.alertBox.open()}}},PL={class:"dice-view"};function IL(n,e,t,i,s,r){const a=Ht("AlertBox"),o=Ht("Dice"),l=Ht("ActionButton");return It(),Kt("div",PL,[lt(a,{header:s.outcome,"background-color":s.outcomeBackgroundColor,color:s.outcomeColor,ref:"alertBox"},null,8,["header","background-color","color"]),lt(o,{ref:"dice",class:"dice",onRolled:r.onRolled,onRollStart:r.onRollStart},null,8,["onRolled","onRollStart"]),lt(l,{class:"spin-button",iconClass:"bi "+(n.$refs.dice&&n.$refs.dice.isRolling?"bi-x":"bi-shuffle"),progress:n.$refs.dice&&n.$refs.dice.progress||0,callback:r.roll},null,8,["iconClass","progress","callback"])])}const LL=rn(CL,[["render",IL],["__scopeId","data-v-800da31c"]]),Ml=dM({history:XS("/"),routes:[{path:"/",name:"Home",component:TE},{path:"/wheel",name:"Wheel",component:eT},{path:"/matches",name:"Matches",component:pT},{path:"/coin",name:"Coin",component:ML},{path:"/dice",name:"Dice",component:LL}]}),NL={data(){return{currentRoute:"",routes:[]}},mounted(){this.routes=Ml.getRoutes(),this.currentRoute=Ml.currentRoute},setup(){const{t:n}=us();return{t:n}}},DL={class:"nav-bar"};function OL(n,e,t,i,s,r){const a=Ht("router-link");return It(),Kt("div",{class:Kn("navigation "+(n.$route.path==="/"?"hidden":"")),ref:"nav"},[We("div",DL,[(It(!0),Kt(xn,null,Xv(s.routes,o=>(It(),Or(a,{class:"nav-item",to:o.path},{default:Dr(()=>[Wg(wi(i.t(o.name)),1)]),_:2},1032,["to"]))),256))]),s.currentRoute.path!=="/"?(It(),Or(a,{key:0,to:"/",class:"back-button"},{default:Dr(()=>[...e[0]||(e[0]=[We("i",{class:"bi-arrow-left"},null,-1)])]),_:1})):Dl("",!0)],2)}const UL=rn(NL,[["render",OL],["__scopeId","data-v-d0cb63ee"]]),FL={data(){return{darkMode:!1,isMobile:null,currentRoute:Ml.currentRoute}},computed:{classObject(){return{"dark-mode-button":!0,home:this.currentRoute.path==="/"}}},methods:{onClick(){this.darkMode=!this.darkMode,this.setDarkMode(),localStorage.setItem("darkMode",this.darkMode)},usesDarkMode(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},setDarkMode(){var n=document.body;n.classList.toggle("dark")}},mounted(){var n=localStorage.getItem("darkMode");(n===null||n==="true")&&this.usesDarkMode()&&(this.darkMode=!0,this.setDarkMode()),/Mobi|Android/i.test(navigator.userAgent)||(this.isMobile=!0)}};function BL(n,e,t,i,s,r){return It(),Kt("button",{class:Kn(r.classObject),onClick:e[0]||(e[0]=(...a)=>r.onClick&&r.onClick(...a))},[We("i",{class:Kn("bi "+(s.darkMode?"bi-moon-fill":"bi-sun-fill"))},null,2)],2)}const kL=rn(FL,[["render",BL],["__scopeId","data-v-3e5060ba"]]),VL={data(){return{langs:["en","de","es"],open:!1,currentFlag:"us"}},setup(){const{locale:n}=us({useScope:"global"});return{locale:n}},methods:{hideSelect(){if(this.open){var n=document.getElementById("OpenLocaleDropdownButton");n.classList.toggle("open"),this.open=!1}},showSelect(){var n=document.getElementById("OpenLocaleDropdownButton");n.classList.toggle("open"),this.open=!this.open},select(n){this.locale=n,this.showSelect(),localStorage.setItem("locale",n)},onChange(){localStorage.setItem("locale",this.locale)}},mounted(){var n=localStorage.getItem("locale");if(n)this.locale=n;else{try{const e=navigator.language.split("-")[0];this.locale=this.langs.includes(e)?e:"en"}catch(e){console.log("Failed to get locale from browser: ",e)}localStorage.setItem("locale",this.locale)}}},HL={class:"locale-changer"},GL={key:0,class:"locale-select"};function zL(n,e,t,i,s,r){const a=Wv("click-outside");return Ua((It(),Kt("div",HL,[We("button",{onClick:e[0]||(e[0]=(...o)=>r.showSelect&&r.showSelect(...o)),id:"OpenLocaleDropdownButton",class:"locale-option-button"},[e[4]||(e[4]=We("i",{class:"bi bi-translate"},null,-1)),We("i",{class:Kn("bi "+(s.open?"bi-caret-down-fill":"bi-caret-left-fill"))},null,2)]),s.open===!0?(It(),Kt("div",GL,[We("button",{onClick:e[1]||(e[1]=o=>r.select("en")),id:"en",class:Kn("locale-option "+(i.locale==="en"?"active":""))},[...e[5]||(e[5]=[We("p",null,"English",-1)])],2),We("button",{onClick:e[2]||(e[2]=o=>r.select("de")),id:"de",class:Kn("locale-option "+(i.locale==="de"?"active":""))},[...e[6]||(e[6]=[We("p",null,"Deutsch",-1)])],2),We("button",{onClick:e[3]||(e[3]=o=>r.select("es")),id:"es",class:Kn("locale-option "+(i.locale==="es"?"active":""))},[...e[7]||(e[7]=[We("p",null,"Español",-1)])],2)])):Dl("",!0)])),[[a,r.hideSelect]])}const WL=rn(VL,[["render",zL],["__scopeId","data-v-d8e2b0fb"]]),XL={name:"Home",components:{DarkModeButton:kL,LocaleChanger:WL,Navigation:UL}},$L={class:"header"},qL={class:"body"};function KL(n,e,t,i,s,r){const a=Ht("Navigation"),o=Ht("LocaleChanger"),l=Ht("DarkModeButton"),c=Ht("router-view");return It(),Kt("article",null,[We("section",$L,[lt(a),lt(o),lt(l)]),We("section",qL,[lt(c,{class:"page-content"})])])}const YL=rn(XL,[["render",KL]]),ZL={mounted(n,e){n.__clickOutsideHandler__=t=>{n===t.target||n.contains(t.target)||e.value(t)},document.addEventListener("click",n.__clickOutsideHandler__,!0)},unmounted(n){document.removeEventListener("click",n.__clickOutsideHandler__,!0),delete n.__clickOutsideHandler__}},JL=["/images/Wheel.png","/images/Matches.png","/images/Coin.png","/images/Cubes.png"],jL=["/models/coin/Coin.glb","/models/dice/Dice.gltf"];async function QL(){const n=document.getElementById("loading-screen");try{await Promise.all([fL(JL),hL(jL)])}catch(t){console.warn("Preload error:",t)}const e=rS(YL);e.use(Hl),e.use(Ml),e.directive("click-outside",ZL),e.mount("#app"),n&&n.remove()}QL();

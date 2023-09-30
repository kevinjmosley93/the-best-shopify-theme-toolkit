function _t(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var bt={exports:{}},Te={},wt={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=Symbol.for("react.element"),on=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),ln=Symbol.for("react.strict_mode"),cn=Symbol.for("react.profiler"),fn=Symbol.for("react.provider"),pn=Symbol.for("react.context"),dn=Symbol.for("react.forward_ref"),hn=Symbol.for("react.suspense"),gn=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),ht=Symbol.iterator;function vn(a){return a===null||typeof a!="object"?null:(a=ht&&a[ht]||a["@@iterator"],typeof a=="function"?a:null)}var kt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rt=Object.assign,Et={};function oe(a,l,g){this.props=a,this.context=l,this.refs=Et,this.updater=g||kt}oe.prototype.isReactComponent={};oe.prototype.setState=function(a,l){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,l,"setState")};oe.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function xt(){}xt.prototype=oe.prototype;function Ue(a,l,g){this.props=a,this.context=l,this.refs=Et,this.updater=g||kt}var Be=Ue.prototype=new xt;Be.constructor=Ue;Rt(Be,oe.prototype);Be.isPureReactComponent=!0;var gt=Array.isArray,St=Object.prototype.hasOwnProperty,We={current:null},Tt={key:!0,ref:!0,__self:!0,__source:!0};function Ot(a,l,g){var p,v={},k=null,E=null;if(l!=null)for(p in l.ref!==void 0&&(E=l.ref),l.key!==void 0&&(k=""+l.key),l)St.call(l,p)&&!Tt.hasOwnProperty(p)&&(v[p]=l[p]);var w=arguments.length-2;if(w===1)v.children=g;else if(1<w){for(var T=Array(w),I=0;I<w;I++)T[I]=arguments[I+2];v.children=T}if(a&&a.defaultProps)for(p in w=a.defaultProps,w)v[p]===void 0&&(v[p]=w[p]);return{$$typeof:me,type:a,key:k,ref:E,props:v,_owner:We.current}}function yn(a,l){return{$$typeof:me,type:a.type,key:l,ref:a.ref,props:a.props,_owner:a._owner}}function qe(a){return typeof a=="object"&&a!==null&&a.$$typeof===me}function _n(a){var l={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(g){return l[g]})}var mt=/\/+/g;function De(a,l){return typeof a=="object"&&a!==null&&a.key!=null?_n(""+a.key):l.toString(36)}function Ee(a,l,g,p,v){var k=typeof a;(k==="undefined"||k==="boolean")&&(a=null);var E=!1;if(a===null)E=!0;else switch(k){case"string":case"number":E=!0;break;case"object":switch(a.$$typeof){case me:case on:E=!0}}if(E)return E=a,v=v(E),a=p===""?"."+De(E,0):p,gt(v)?(g="",a!=null&&(g=a.replace(mt,"$&/")+"/"),Ee(v,l,g,"",function(I){return I})):v!=null&&(qe(v)&&(v=yn(v,g+(!v.key||E&&E.key===v.key?"":(""+v.key).replace(mt,"$&/")+"/")+a)),l.push(v)),1;if(E=0,p=p===""?".":p+":",gt(a))for(var w=0;w<a.length;w++){k=a[w];var T=p+De(k,w);E+=Ee(k,l,g,T,v)}else if(T=vn(a),typeof T=="function")for(a=T.call(a),w=0;!(k=a.next()).done;)k=k.value,T=p+De(k,w++),E+=Ee(k,l,g,T,v);else if(k==="object")throw l=String(a),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return E}function Re(a,l,g){if(a==null)return a;var p=[],v=0;return Ee(a,p,"","",function(k){return l.call(g,k,v++)}),p}function bn(a){if(a._status===-1){var l=a._result;l=l(),l.then(function(g){(a._status===0||a._status===-1)&&(a._status=1,a._result=g)},function(g){(a._status===0||a._status===-1)&&(a._status=2,a._result=g)}),a._status===-1&&(a._status=0,a._result=l)}if(a._status===1)return a._result.default;throw a._result}var N={current:null},xe={transition:null},wn={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:xe,ReactCurrentOwner:We};P.Children={map:Re,forEach:function(a,l,g){Re(a,function(){l.apply(this,arguments)},g)},count:function(a){var l=0;return Re(a,function(){l++}),l},toArray:function(a){return Re(a,function(l){return l})||[]},only:function(a){if(!qe(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};P.Component=oe;P.Fragment=un;P.Profiler=cn;P.PureComponent=Ue;P.StrictMode=ln;P.Suspense=hn;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wn;P.cloneElement=function(a,l,g){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var p=Rt({},a.props),v=a.key,k=a.ref,E=a._owner;if(l!=null){if(l.ref!==void 0&&(k=l.ref,E=We.current),l.key!==void 0&&(v=""+l.key),a.type&&a.type.defaultProps)var w=a.type.defaultProps;for(T in l)St.call(l,T)&&!Tt.hasOwnProperty(T)&&(p[T]=l[T]===void 0&&w!==void 0?w[T]:l[T])}var T=arguments.length-2;if(T===1)p.children=g;else if(1<T){w=Array(T);for(var I=0;I<T;I++)w[I]=arguments[I+2];p.children=w}return{$$typeof:me,type:a.type,key:v,ref:k,props:p,_owner:E}};P.createContext=function(a){return a={$$typeof:pn,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:fn,_context:a},a.Consumer=a};P.createElement=Ot;P.createFactory=function(a){var l=Ot.bind(null,a);return l.type=a,l};P.createRef=function(){return{current:null}};P.forwardRef=function(a){return{$$typeof:dn,render:a}};P.isValidElement=qe;P.lazy=function(a){return{$$typeof:mn,_payload:{_status:-1,_result:a},_init:bn}};P.memo=function(a,l){return{$$typeof:gn,type:a,compare:l===void 0?null:l}};P.startTransition=function(a){var l=xe.transition;xe.transition={};try{a()}finally{xe.transition=l}};P.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};P.useCallback=function(a,l){return N.current.useCallback(a,l)};P.useContext=function(a){return N.current.useContext(a)};P.useDebugValue=function(){};P.useDeferredValue=function(a){return N.current.useDeferredValue(a)};P.useEffect=function(a,l){return N.current.useEffect(a,l)};P.useId=function(){return N.current.useId()};P.useImperativeHandle=function(a,l,g){return N.current.useImperativeHandle(a,l,g)};P.useInsertionEffect=function(a,l){return N.current.useInsertionEffect(a,l)};P.useLayoutEffect=function(a,l){return N.current.useLayoutEffect(a,l)};P.useMemo=function(a,l){return N.current.useMemo(a,l)};P.useReducer=function(a,l,g){return N.current.useReducer(a,l,g)};P.useRef=function(a){return N.current.useRef(a)};P.useState=function(a){return N.current.useState(a)};P.useSyncExternalStore=function(a,l,g){return N.current.useSyncExternalStore(a,l,g)};P.useTransition=function(){return N.current.useTransition()};P.version="18.2.0";wt.exports=P;var he=wt.exports;const ge=_t(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn=he,Rn=Symbol.for("react.element"),En=Symbol.for("react.fragment"),xn=Object.prototype.hasOwnProperty,Sn=kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tn={key:!0,ref:!0,__self:!0,__source:!0};function Lt(a,l,g){var p,v={},k=null,E=null;g!==void 0&&(k=""+g),l.key!==void 0&&(k=""+l.key),l.ref!==void 0&&(E=l.ref);for(p in l)xn.call(l,p)&&!Tn.hasOwnProperty(p)&&(v[p]=l[p]);if(a&&a.defaultProps)for(p in l=a.defaultProps,l)v[p]===void 0&&(v[p]=l[p]);return{$$typeof:Rn,type:a,key:k,ref:E,props:v,_owner:Sn.current}}Te.Fragment=En;Te.jsx=Lt;Te.jsxs=Lt;bt.exports=Te;var K=bt.exports,Ct={exports:{}},On="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ln=On,Cn=Ln;function Pt(){}function $t(){}$t.resetWarningCache=Pt;var Pn=function(){function a(p,v,k,E,w,T){if(T!==Cn){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}a.isRequired=a;function l(){return a}var g={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:l,element:a,elementType:a,instanceOf:l,node:a,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:$t,resetWarningCache:Pt};return g.PropTypes=g,g};Ct.exports=Pn();var $n=Ct.exports;const de=_t($n);function vt(a,l,g,p,v,k,E){try{var w=a[k](E),T=w.value}catch(I){g(I);return}w.done?l(T):Promise.resolve(T).then(p,v)}function Ne(a){return function(){var l=this,g=arguments;return new Promise(function(p,v){var k=a.apply(l,g);function E(T){vt(k,p,v,E,w,"next",T)}function w(T){vt(k,p,v,E,w,"throw",T)}E(void 0)})}}function Ft(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function yt(a,l){for(var g=0;g<l.length;g++){var p=l[g];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(a,p.key,p)}}function It(a,l,g){return l&&yt(a.prototype,l),g&&yt(a,g),a}function Ve(a,l,g){return l in a?Object.defineProperty(a,l,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[l]=g,a}function He(){return He=Object.assign||function(a){for(var l=1;l<arguments.length;l++){var g=arguments[l];for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}return a},He.apply(this,arguments)}function zt(a,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(l&&l.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),l&&Ye(a,l)}function Se(a){return Se=Object.setPrototypeOf?Object.getPrototypeOf:function(g){return g.__proto__||Object.getPrototypeOf(g)},Se(a)}function Ye(a,l){return Ye=Object.setPrototypeOf||function(p,v){return p.__proto__=v,p},Ye(a,l)}function Fn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Ge(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function In(a,l){return l&&(typeof l=="object"||typeof l=="function")?l:Ge(a)}function Mt(a){var l=Fn();return function(){var p=Se(a),v;if(l){var k=Se(this).constructor;v=Reflect.construct(p,arguments,k)}else v=p.apply(this,arguments);return In(this,v)}}var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mn(a,l){return l={exports:{}},a(l,l.exports),l.exports}var jn=Mn(function(a,l){(function(g,p){a.exports=p()})(zn,function(){var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(r,n){function u(o,i){try{var c=e[o](i),s=c.value}catch(f){n(f);return}if(c.done)r(s);else return Promise.resolve(s).then(function(f){u("next",f)},function(f){u("throw",f)})}return u("next")})}};(function(t){var e=Object.prototype,r=e.hasOwnProperty,n,u=typeof Symbol=="function"?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag",s=g(a)==="object",f=t.regeneratorRuntime;if(f){s&&(a.exports=f);return}f=t.regeneratorRuntime=s?a.exports:{};function d(b,h,m,x){var L=h&&h.prototype instanceof G?h:G,C=Object.create(L.prototype),A=new je(x||[]);return C._invoke=an(b,m,A),C}f.wrap=d;function y(b,h,m){try{return{type:"normal",arg:b.call(h,m)}}catch(x){return{type:"throw",arg:x}}}var _="suspendedStart",O="suspendedYield",R="executing",S="completed",$={};function G(){}function F(){}function D(){}var j={};j[o]=function(){return this};var U=Object.getPrototypeOf,Z=U&&U(U(Ae([])));Z&&Z!==e&&r.call(Z,o)&&(j=Z);var z=D.prototype=G.prototype=Object.create(j);F.prototype=z.constructor=D,D.constructor=F,D[c]=F.displayName="GeneratorFunction";function ee(b){["next","throw","return"].forEach(function(h){b[h]=function(m){return this._invoke(h,m)}})}f.isGeneratorFunction=function(b){var h=typeof b=="function"&&b.constructor;return h?h===F||(h.displayName||h.name)==="GeneratorFunction":!1},f.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,D):(b.__proto__=D,c in b||(b[c]="GeneratorFunction")),b.prototype=Object.create(z),b},f.awrap=function(b){return{__await:b}};function ke(b){function h(L,C,A,W){var q=y(b[L],b,C);if(q.type==="throw")W(q.arg);else{var Q=q.arg,te=Q.value;return te&&(typeof te>"u"?"undefined":g(te))==="object"&&r.call(te,"__await")?Promise.resolve(te.__await).then(function(ie){h("next",ie,A,W)},function(ie){h("throw",ie,A,W)}):Promise.resolve(te).then(function(ie){Q.value=ie,A(Q)},function(ie){return h("throw",ie,A,W)})}}var m;function x(L,C){function A(){return new Promise(function(W,q){h(L,C,W,q)})}return m=m?m.then(A,A):A()}this._invoke=x}ee(ke.prototype),ke.prototype[i]=function(){return this},f.AsyncIterator=ke,f.async=function(b,h,m,x){var L=new ke(d(b,h,m,x));return f.isGeneratorFunction(h)?L:L.next().then(function(C){return C.done?C.value:L.next()})};function an(b,h,m){var x=_;return function(C,A){if(x===R)throw new Error("Generator is already running");if(x===S){if(C==="throw")throw A;return dt()}for(m.method=C,m.arg=A;;){var W=m.delegate;if(W){var q=pt(W,m);if(q){if(q===$)continue;return q}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(x===_)throw x=S,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);x=R;var Q=y(b,h,m);if(Q.type==="normal"){if(x=m.done?S:O,Q.arg===$)continue;return{value:Q.arg,done:m.done}}else Q.type==="throw"&&(x=S,m.method="throw",m.arg=Q.arg)}}}function pt(b,h){var m=b.iterator[h.method];if(m===n){if(h.delegate=null,h.method==="throw"){if(b.iterator.return&&(h.method="return",h.arg=n,pt(b,h),h.method==="throw"))return $;h.method="throw",h.arg=new TypeError("The iterator does not provide a 'throw' method")}return $}var x=y(m,b.iterator,h.arg);if(x.type==="throw")return h.method="throw",h.arg=x.arg,h.delegate=null,$;var L=x.arg;if(!L)return h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,$;if(L.done)h[b.resultName]=L.value,h.next=b.nextLoc,h.method!=="return"&&(h.method="next",h.arg=n);else return L;return h.delegate=null,$}ee(z),z[c]="Generator",z[o]=function(){return this},z.toString=function(){return"[object Generator]"};function sn(b){var h={tryLoc:b[0]};1 in b&&(h.catchLoc=b[1]),2 in b&&(h.finallyLoc=b[2],h.afterLoc=b[3]),this.tryEntries.push(h)}function Me(b){var h=b.completion||{};h.type="normal",delete h.arg,b.completion=h}function je(b){this.tryEntries=[{tryLoc:"root"}],b.forEach(sn,this),this.reset(!0)}f.keys=function(b){var h=[];for(var m in b)h.push(m);return h.reverse(),function x(){for(;h.length;){var L=h.pop();if(L in b)return x.value=L,x.done=!1,x}return x.done=!0,x}};function Ae(b){if(b){var h=b[o];if(h)return h.call(b);if(typeof b.next=="function")return b;if(!isNaN(b.length)){var m=-1,x=function L(){for(;++m<b.length;)if(r.call(b,m))return L.value=b[m],L.done=!1,L;return L.value=n,L.done=!0,L};return x.next=x}}return{next:dt}}f.values=Ae;function dt(){return{value:n,done:!0}}je.prototype={constructor:je,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(Me),!h)for(var m in this)m.charAt(0)==="t"&&r.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=n)},stop:function(){this.done=!0;var h=this.tryEntries[0],m=h.completion;if(m.type==="throw")throw m.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var m=this;function x(Q,te){return A.type="throw",A.arg=h,m.next=Q,te&&(m.method="next",m.arg=n),!!te}for(var L=this.tryEntries.length-1;L>=0;--L){var C=this.tryEntries[L],A=C.completion;if(C.tryLoc==="root")return x("end");if(C.tryLoc<=this.prev){var W=r.call(C,"catchLoc"),q=r.call(C,"finallyLoc");if(W&&q){if(this.prev<C.catchLoc)return x(C.catchLoc,!0);if(this.prev<C.finallyLoc)return x(C.finallyLoc)}else if(W){if(this.prev<C.catchLoc)return x(C.catchLoc,!0)}else if(q){if(this.prev<C.finallyLoc)return x(C.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(h,m){for(var x=this.tryEntries.length-1;x>=0;--x){var L=this.tryEntries[x];if(L.tryLoc<=this.prev&&r.call(L,"finallyLoc")&&this.prev<L.finallyLoc){var C=L;break}}C&&(h==="break"||h==="continue")&&C.tryLoc<=m&&m<=C.finallyLoc&&(C=null);var A=C?C.completion:{};return A.type=h,A.arg=m,C?(this.method="next",this.next=C.finallyLoc,$):this.complete(A)},complete:function(h,m){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&m&&(this.next=m),$},finish:function(h){for(var m=this.tryEntries.length-1;m>=0;--m){var x=this.tryEntries[m];if(x.finallyLoc===h)return this.complete(x.completion,x.afterLoc),Me(x),$}},catch:function(h){for(var m=this.tryEntries.length-1;m>=0;--m){var x=this.tryEntries[m];if(x.tryLoc===h){var L=x.completion;if(L.type==="throw"){var C=L.arg;Me(x)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(h,m,x){return this.delegate={iterator:Ae(h),resultName:m,nextLoc:x},this.method==="next"&&(this.arg=n),$}}})(function(){return this||(typeof self>"u"?"undefined":g(self))==="object"&&self}()||Function("return this")());var v=Object.prototype.toString;function k(t){return v.call(t)==="[object String]"}function E(t){if(T(t))return String(t);if(typeof t.to_liquid=="function")return E(t.to_liquid());if(typeof t.toLiquid=="function")return E(t.toLiquid());if(k(t))return t;var e=[];return JSON.stringify(t,function(r,n){if(ye(n)){if(e.indexOf(n)!==-1)return;e.push(n)}return n})}function w(t){return Object.create(t)}function T(t){return t==null}function I(t){return v.call(t)==="[object Array]"}function ve(t,e){t=t||{};for(var r in t)if(t.hasOwnProperty(r)&&e(t[r],r,t)===!1)break;return t}function X(t){t=ye(t)?t:{};var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(r){return Object.assign(t,r)}),t}function J(t){return t[t.length-1]}function ye(t){var e=typeof t>"u"?"undefined":g(t);return t!==null&&(e==="object"||e==="function")}function At(t,e,r){arguments.length===1&&(e=t,t=0),r=r||1;for(var n=[],u=t;u<e;u+=r)n.push(u);return n}var Dt=/'[^']*'/,Nt=/"[^"]*"/,_e=new RegExp(Dt.source+"|"+Nt.source),Je=new RegExp("(?:"+_e.source+`|[^'"])*`),Vt=/-?\d+/,Le=/-?\d+\.?\d*|\.?\d+/,Qe=/true|false/,V=/[\w-]+[?]?/,Ht=new RegExp("\\[(?:"+_e.source+"|[\\w-\\.]+)\\]"),Xe=new RegExp("(?:"+_e.source+"|"+Qe.source+"|"+Le.source+")"),Ce=new RegExp(V.source+"(?:\\."+V.source+"|"+Ht.source+")*"),be=new RegExp("(?:"+Ce.source+"|"+Le.source+")"),Yt=new RegExp("\\("+be.source+"\\.\\."+be.source+"\\)"),Gt=new RegExp("\\(("+be.source+")\\.\\.("+be.source+")\\)"),B=new RegExp("(?:"+Ce.source+"|"+Xe.source+"|"+Yt.source+")"),Pe=new RegExp("(?:"+V.source+")\\s*:\\s*(?:"+B.source+")"),Ke=new RegExp("("+V.source+")\\s*:\\s*("+B.source+")","g"),Ut=new RegExp("^\\s*("+V.source+")\\s*([\\s\\S]*)\\s*$"),Bt=new RegExp("^"+Xe.source+"$","i"),Wt=new RegExp("^"+Ce.source+"$"),qt=new RegExp("^"+Le.source+"$"),Jt=new RegExp("^"+Qe.source+"$","i"),Ze=new RegExp("^"+_e.source+"$"),Qt=new RegExp("^"+Gt.source+"$"),Xt=new RegExp("^"+Vt.source+"$"),et=new RegExp("(?:"+V.source+"\\s*:\\s*)?"+B.source),tt=new RegExp(et.source+"(\\s*,\\s*"+et.source+")*"),Kt=new RegExp(V.source+"(?:\\s*:\\s*"+tt.source+")?","g"),Zt=new RegExp("("+V.source+")(?:\\s*:\\s*("+tt.source+"))?"),er=new RegExp("^"+Zt.source+"$"),tr=[/\s+or\s+/,/\s+and\s+/,/==|!=|<=|>=|<|>|\s+contains\s+/];function rr(t){return Xt.test(t)}function nr(t){return Bt.test(t)}function ar(t){return Wt.test(t)}function ir(t){return B.exec(t)}function sr(t){var e=t.match(qt);if(e)return Number(t);if(e=t.match(Jt),e)return t.toLowerCase()==="true";if(e=t.match(Ze),e)return t.slice(1,-1);throw new TypeError("cannot parse '"+t+"' as literal")}function $e(){this.name=this.constructor.name,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}function Fe(t,e){$e.call(this),this.input=e.input,this.line=e.line,this.file=e.file;var r=or(e.input,e.line);this.message=lr(t.message,e),this.stack=r+`
`+(this.stack||this.message)+(t.stack?`
From `+t.stack:"")}function ue(t,e){Fe.call(this,{message:t},e)}ue.prototype=w(Error.prototype),ue.prototype.constructor=ue;function le(t,e){X(this,t),this.originalError=t,Fe.call(this,t,e)}le.prototype=w(Error.prototype),le.prototype.constructor=le;function ce(t,e){if(t instanceof ce)return t;X(this,t),this.originalError=t,Fe.call(this,t,e.token)}ce.prototype=w(Error.prototype),ce.prototype.constructor=ce;function re(t){$e.call(this),this.message=t+""}re.prototype=w(Error.prototype),re.prototype.constructor=re;function fe(t){$e.call(this),this.message=t+""}fe.prototype=w(Error.prototype),fe.prototype.constructor=fe;function or(t,e){var r=t.split(`
`),n=Math.max(e-2,1),u=Math.min(e+3,r.length),o=At(n,u+1).map(function(i){return[i===e?">> ":"   ",ur(i,u),"| ",r[i-1]].join("")}).join(`
`);return o}function ur(t,e){var r=(e+"").length,n=t+"",u=Array(r-n.length).join(" ");return u+n}function lr(t,e){return t=t||"",e.file&&(t+=", file:"+e.file),e.line&&(t+=", line:"+e.line),t}function M(t,e){if(!t)throw e=e||"expect "+t+" to be true",new fe(e)}var cr={getAll:function(){return this.contexts.reduce(function(e,r){return X(e,r)},w(null))},get:function(e){var r=this,n=this.propertyAccessSeq(e),u=this.findContextFor(n[0])||J(this.contexts);return n.reduce(function(o,i){return r.readProperty(o,i)},u)},set:function(e,r){var n=this.propertyAccessSeq(e),u=this.findContextFor(n[0])||J(this.contexts);n.some(function(o,i){if(!ye(u))return!0;if(i===n.length-1)return u[o]=r,!0;u[o]===void 0&&(u[o]={}),u=u[o]})},unshift:function(e){return this.contexts.unshift(e)},push:function(e){return this.contexts.push(e)},pop:function(e){if(!arguments.length)return this.contexts.pop();var r=this.contexts.findIndex(function(n){return n===e});if(r===-1)throw new TypeError("scope not found, cannot pop");return this.contexts.splice(r,1)[0]},findContextFor:function(e,r){r=r||function(){return!0};for(var n=this.contexts.length-1;n>=0;n--){var u=this.contexts[n];if(r(u)&&e in u)return u}return null},readProperty:function(e,r){var n=void 0;if(T(e)?n=void 0:(typeof e.to_liquid=="function"?e=e.to_liquid():typeof e.toLiquid=="function"&&(e=e.toLiquid()),r==="size"&&(I(e)||k(e))?n=e.length:n=e[r]),T(n)&&this.opts.strict_variables)throw new TypeError("undefined variable: "+r);return n},propertyAccessSeq:function(e){e=String(e);for(var r=[],n="",u=void 0,o=0;o<e.length;)switch(e[o]){case"[":c();var i=e[o+1];/['"]/.test(i)?(u=e.indexOf(i,o+2),M(u!==-1,"unbalanced "+i+": "+e),n=e.slice(o+2,u),c(),o=u+2):(u=fr(e,o+1),M(u!==-1,"unbalanced []: "+e),n=e.slice(o+1,u),rr(n)||(n=this.get(n)),c(),o=u+1);break;case".":c(),o++;break;default:n+=e[o],o++}if(c(),!r.length)throw new TypeError('invalid path:"'+e+'"');return r;function c(){n.length&&r.push(n),n=""}}};function fr(t,e){for(var r=1,n=e;n<t.length;n++)if(t[n]==="["&&r++,t[n]==="]"&&(r--,r===0))return n;return-1}function pr(t,e){var r={dynamicPartials:!0,strict_variables:!1,strict_filters:!1,blocks:{},root:[]},n=w(cr);return n.opts=X(r,e),n.contexts=[t||{}],n}function dr(t,e){var r=document.createElement("base");r.href=t;var n=document.getElementsByTagName("head")[0];n.insertBefore(r,n.firstChild);var u=document.createElement("a");u.href=e;var o=u.href;return n.removeChild(r),o}function hr(t,e,r){e=e||r.root,I(e)&&(e=e[0]),e.length&&J(e)!=="/"&&(e+="/");var n=dr(e,t);return n.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/,function(u,o,i){var c=i.split("/").pop();return/\.\w+$/.test(c)?u:o+i+r.extname})}var gr=function(){var t=p(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(o,i){var c=new XMLHttpRequest;c.onload=function(){c.status>=200&&c.status<300?o(c.responseText):i(new Error(c.statusText))},c.onerror=function(){i(new Error("An error occurred whilst receiving the response."))},c.open("GET",r),c.send()}));case 1:case"end":return u.stop()}},e,this)}));return function(r){return t.apply(this,arguments)}}();function mr(t,e){e=X({greedy:!0},e);var r=!1;t.forEach(function(n,u){vr(n,r,e)&&_r(t[u-1],e.greedy),n.type==="tag"&&n.name==="raw"&&(r=!0),n.type==="tag"&&n.name==="endraw"&&(r=!1),yr(n,r,e)&&br(t[u+1],e.greedy)})}function vr(t,e,r){if(e)return!1;if(t.type==="tag")return t.trim_left||r.trim_tag_left;if(t.type==="value")return t.trim_left||r.trim_value_left}function yr(t,e,r){if(e)return!1;if(t.type==="tag")return t.trim_right||r.trim_tag_right;if(t.type==="value")return t.trim_right||r.trim_value_right}function _r(t,e){if(!(!t||t.type!=="html")){var r=e?/\s+$/g:/[\t\r ]*$/g;t.value=t.value.replace(r,"")}}function br(t,e){if(!(!t||t.type!=="html")){var r=e?/^\s+/g:/^[\t\r ]*\n?/g;t.value=t.value.replace(r,"")}}function wr(t,e,r){M(k(t),"illegal input");for(var n=/({%-?([\s\S]*?)-?%})|({{-?([\s\S]*?)-?}})/g,u=0,o=kr(t),i=0,c=[],s;s=n.exec(t);i=n.lastIndex)s.index>i&&c.push(y(i,s.index)),c.push(s[1]?f(s[1],s[2].trim(),s.index):d(s[3],s[4].trim(),s.index));return t.length>i&&c.push(y(i,t.length)),mr(c,r),c;function f(_,O,R){var S=O.match(Ut),$={type:"tag",indent:u,line:o.get(R),trim_left:_.slice(0,3)==="{%-",trim_right:_.slice(-3)==="-%}",raw:_,value:O,input:t,file:e};if(!S)throw new ue("illegal tag syntax",$);return $.name=S[1],$.args=S[2],$}function d(_,O,R){return{type:"value",line:o.get(R),trim_left:_.slice(0,3)==="{{-",trim_right:_.slice(-3)==="-}}",raw:_,value:O,input:t,file:e}}function y(_,O){var R=t.slice(_,O);return u=J(R.split(`
`)).length,{type:"html",raw:R,value:R}}}function kr(t){var e=0,r=-1;return{get:function(u){var o=t.slice(r+1,u).split(`
`);return e+=o.length-1,r=u,e+1}}}function Rr(t){return{"==":function(r,n){return r===n},"!=":function(r,n){return r!==n},">":function(r,n){return r!==null&&n!==null&&r>n},"<":function(r,n){return r!==null&&n!==null&&r<n},">=":function(r,n){return r!==null&&n!==null&&r>=n},"<=":function(r,n){return r!==null&&n!==null&&r<=n},contains:function(r,n){return!r||typeof r.indexOf!="function"?!1:r.indexOf(n)>-1},and:function(r,n){return t(r)&&t(n)},or:function(r,n){return t(r)||t(n)}}}var Er=Rr(Ie);function we(t,e){M(e,"unable to evalExp: scope undefined");for(var r=tr,n=void 0,u=0;u<r.length;u++){var o=r[u],i=new RegExp("^("+Je.source+")("+o.source+")("+Je.source+")$");if(n=t.match(i)){var c=we(n[1],e),s=Er[n[2].trim()],f=we(n[3],e);return s(c,f)}}if(n=t.match(Qt)){for(var d=se(n[1],e),y=se(n[2],e),_=[],O=d;O<=y;O++)_.push(O);return _}return se(t,e)}function se(t,e){if(t=t&&t.trim(),!!t){if(nr(t))return sr(t);if(ar(t))return e.get(t);throw new TypeError("cannot eval '"+t+"' as value")}}function Ie(t){return!rt(t)}function rt(t){return t===!1||t===void 0||t===null}var xr={renderTemplates:function(){var t=p(regeneratorRuntime.mark(function r(n,u){var o=function(){var O=p(regeneratorRuntime.mark(function R(S){var $;return regeneratorRuntime.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(S.type!=="tag"){F.next=5;break}return F.next=3,this.renderTag(S,u);case 3:return $=F.sent,F.abrupt("return",$===void 0?"":$);case 5:if(S.type!=="value"){F.next=7;break}return F.abrupt("return",this.renderValue(S,u));case 7:return F.abrupt("return",S.value);case 8:case"end":return F.stop()}},R,this)}));return function(S){return O.apply(this,arguments)}}(),i,c,s,f,d,y,_;return regeneratorRuntime.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:M(u,"unable to evalTemplates: scope undefined"),i="",c=!0,s=!1,f=void 0,R.prev=5,d=n[Symbol.iterator]();case 7:if(c=(y=d.next()).done){R.next=24;break}return _=y.value,R.prev=9,R.next=12,o.call(this,_);case 12:i+=R.sent,R.next=21;break;case 15:if(R.prev=15,R.t0=R.catch(9),!(R.t0 instanceof re)){R.next=20;break}throw R.t0.resolvedHTML=i,R.t0;case 20:throw new ce(R.t0,_);case 21:c=!0,R.next=7;break;case 24:R.next=30;break;case 26:R.prev=26,R.t1=R.catch(5),s=!0,f=R.t1;case 30:R.prev=30,R.prev=31,!c&&d.return&&d.return();case 33:if(R.prev=33,!s){R.next=36;break}throw f;case 36:return R.finish(33);case 37:return R.finish(30);case 38:return R.abrupt("return",i);case 39:case"end":return R.stop()}},r,this,[[5,26,30,38],[9,15],[31,,33,37]])}));function e(r,n){return t.apply(this,arguments)}return e}(),renderTag:function(){var t=p(regeneratorRuntime.mark(function r(n,u){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n.name!=="continue"){i.next=2;break}throw new re("continue");case 2:if(n.name!=="break"){i.next=4;break}throw new re("break");case 4:return i.abrupt("return",n.render(u));case 5:case"end":return i.stop()}},r,this)}));function e(r,n){return t.apply(this,arguments)}return e}(),renderValue:function(){var t=p(regeneratorRuntime.mark(function r(n,u){var o;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=this.evalValue(n,u),c.abrupt("return",o===void 0?"":E(o));case 2:case"end":return c.stop()}},r,this)}));function e(r,n){return t.apply(this,arguments)}return e}(),evalValue:function(e,r){return M(r,"unable to evalValue: scope undefined"),e.filters.reduce(function(n,u){return u.render(n,r)},we(e.initial,r))}};function Sr(){var t=w(xr);return t}function Tr(t,e){var r={},n=void 0;for(Ke.lastIndex=0;n=Ke.exec(t);){var u=n[1],o=n[2];r[u]=se(o,e)}return r}function Or(){var t={},e={render:function(){var o=p(regeneratorRuntime.mark(function c(s){var f,d;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(f=Tr(this.token.args,s),d=this.tagImpl,typeof d.render=="function"){_.next=4;break}return _.abrupt("return","");case 4:return _.abrupt("return",d.render(s,f));case 5:case"end":return _.stop()}},c,this)}));function i(c){return o.apply(this,arguments)}return i}(),parse:function(i,c){this.type="tag",this.token=i,this.name=i.name;var s=t[this.name];M(s,"tag "+this.name+" not found"),this.tagImpl=w(s),this.tagImpl.parse&&this.tagImpl.parse(i,c)}};function r(o,i){t[o]=i}function n(o,i){var c=w(e);return c.parse(o,i),c}function u(){t={}}return{construct:n,register:r,clear:u}}var Lr=new RegExp(""+B.source,"g");function Cr(t){t=X({},t);var e={},r={render:function(c,s){var f=this.args.map(function(d){return se(d,s)});return f.unshift(c),this.filter.apply(null,f)},parse:function(c){var s=er.exec(c);M(s,"illegal filter: "+c);var f=s[1],d=s[2]||"",y=e[f];if(typeof y!="function"){if(t.strict_filters)throw new TypeError("undefined filter: "+f);return this.name=f,this.filter=function(G){return G},this.args=[],this}for(var _=[];s=Lr.exec(d.trim());){var O=s[0],R=new RegExp(O+"\\s*:","g"),S=R.exec(s.input),$=S&&S.index===s.index;$?_.push("'"+O+"'"):_.push(O)}return this.name=f,this.filter=y,this.args=_,this}};function n(i){var c=w(r);return c.parse(i)}function u(i,c){e[i]=c}function o(){e={}}return{construct:n,register:u,clear:o}}function Pr(t,e){var r={init:function(f){return this.tokens=f,this.handlers={},this},on:function(f,d){return this.handlers[f]=d,this},trigger:function(f,d){var y=this.handlers[f];if(typeof y=="function")return y(d),!0},start:function(){this.trigger("start");for(var f=void 0;!this.stopRequested&&(f=this.tokens.shift());)if(!this.trigger("token",f)&&!(f.type==="tag"&&this.trigger("tag:"+f.name,f))){var d=u(f,this.tokens);this.trigger("template",d)}return this.stopRequested||this.trigger("end"),this},stop:function(){return this.stopRequested=!0,this}};function n(s){for(var f=void 0,d=[];f=s.shift();)d.push(u(f,s));return d}function u(s,f){try{var d=null;return s.type==="tag"?d=o(s,f):s.type==="value"?d=i(s.value):d=s,d.token=s,d}catch(y){throw new le(y,s)}}function o(s,f){return s.name==="continue"||s.name==="break"?s:t.construct(s,f)}function i(s){var f=ir(s);M(f,"illegal value string: "+s);var d=f[0];s=s.substr(f.index+f[0].length);for(var y=[];f=Kt.exec(s);)y.push([f[0].trim()]);return{type:"value",initial:d,filters:y.map(function(_){return e.construct(_)})}}function c(s){var f=w(r);return f.init(s)}return{parse:n,parseTag:o,parseStream:c,parseValue:i}}function nt(t,e){var r=Promise.resolve("init"),n=[];return t.forEach(function(u,o){r=r.then(function(){return e(u,o,t)}).then(function(i){return n.push(i)})}),r.then(function(){return n})}function $r(t,e){var r=function(){var i=p(regeneratorRuntime.mark(function c(s,f){var d=this,y,_,O,R,S,$;return regeneratorRuntime.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(y=e.evalExp(this.collection,s),I(y)||(k(y)&&y.length>0?y=[y]:ye(y)&&(y=Object.keys(y).map(function(D){return[D,y[D]]}))),!(!I(y)||!y.length)){F.next=4;break}return F.abrupt("return",t.renderer.renderTemplates(this.elseTemplates,s));case 4:return _=f.offset||0,O=f.limit===void 0?y.length:f.limit,y=y.slice(_,_+O),this.reversed&&y.reverse(),R=y.map(function(D,j){var U={};return U[d.variable]=D,U.forloop={first:j===0,index:j+1,index0:j,last:j===y.length-1,length:y.length,rindex:y.length-j,rindex0:y.length-j-1},U}),S="",$=!1,F.next=13,nt(R,function(){var D=p(regeneratorRuntime.mark(function j(U){return regeneratorRuntime.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(!$){z.next=2;break}return z.abrupt("return");case 2:return s.push(U),z.prev=3,z.next=6,t.renderer.renderTemplates(d.templates,s);case 6:S+=z.sent,z.next=17;break;case 9:if(z.prev=9,z.t0=z.catch(3),!(z.t0 instanceof n)){z.next=16;break}S+=z.t0.resolvedHTML,z.t0.message==="break"&&($=!0),z.next=17;break;case 16:throw z.t0;case 17:s.pop(U);case 18:case"end":return z.stop()}},j,d,[[3,9]])}));return function(j){return D.apply(this,arguments)}}());case 13:return F.abrupt("return",S);case 14:case"end":return F.stop()}},c,this)}));return function(s,f){return i.apply(this,arguments)}}(),n=e.Types.RenderBreakError,u=new RegExp("^("+V.source+")\\s+in\\s+"+("("+B.source+")")+("(?:\\s+"+Pe.source+")*")+"(?:\\s+(reversed))?"+("(?:\\s+"+Pe.source+")*$"));t.registerTag("for",{parse:o,render:r});function o(i,c){var s=this,f=u.exec(i.args);M(f,"illegal tag: "+i.raw),this.variable=f[1],this.collection=f[2],this.reversed=!!f[3],this.templates=[],this.elseTemplates=[];var d=void 0,y=t.parser.parseStream(c).on("start",function(){return d=s.templates}).on("tag:else",function(){return d=s.elseTemplates}).on("tag:endfor",function(){return y.stop()}).on("template",function(_){return d.push(_)}).on("end",function(){throw new Error("tag "+i.raw+" not closed")});y.start()}}function Fr(t,e){var r=new RegExp("("+V.source+")\\s*=(.*)"),n=e.Types.AssignScope;t.registerTag("assign",{parse:function(o){var i=o.args.match(r);M(i,"illegal token "+o.raw),this.key=i[1],this.value=i[2]},render:function(o){var i=w(n);return i[this.key]=t.evalValue(this.value,o),o.push(i),Promise.resolve("")}})}function Ir(t,e){var r=new RegExp("("+V.source+")"),n=e.Types.CaptureScope;t.registerTag("capture",{parse:function(o,i){var c=this,s=o.args.match(r);M(s,o.args+" not valid identifier"),this.variable=s[1],this.templates=[];var f=t.parser.parseStream(i);f.on("tag:endcapture",function(d){return f.stop()}).on("template",function(d){return c.templates.push(d)}).on("end",function(d){throw new Error("tag "+o.raw+" not closed")}),f.start()},render:function(){var u=p(regeneratorRuntime.mark(function i(c,s){var f,d;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,t.renderer.renderTemplates(this.templates,c);case 2:f=_.sent,d=w(n),d[this.variable]=f,c.push(d);case 6:case"end":return _.stop()}},i,this)}));function o(i,c){return u.apply(this,arguments)}return o}()})}function zr(t,e){t.registerTag("case",{parse:function(n,u){var o=this;this.cond=n.args,this.cases=[],this.elseTemplates=[];var i=[],c=t.parser.parseStream(u).on("tag:when",function(s){o.cases.push({val:s.args,templates:i=[]})}).on("tag:else",function(){return i=o.elseTemplates}).on("tag:endcase",function(s){return c.stop()}).on("template",function(s){return i.push(s)}).on("end",function(s){throw new Error("tag "+n.raw+" not closed")});c.start()},render:function(n,u){for(var o=0;o<this.cases.length;o++){var i=this.cases[o],c=e.evalExp(i.val,n),s=e.evalExp(this.cond,n);if(c===s)return t.renderer.renderTemplates(i.templates,n)}return t.renderer.renderTemplates(this.elseTemplates,n)}})}function Mr(t){t.registerTag("comment",{parse:function(r,n){var u=t.parser.parseStream(n);u.on("token",function(o){o.name==="endcomment"&&u.stop()}).on("end",function(o){throw new Error("tag "+r.raw+" not closed")}),u.start()}})}var jr=/[^\s,]+/;function Ar(t,e){var r=new RegExp("with\\s+("+B.source+")");t.registerTag("include",{parse:function(u){var o=jr.exec(u.args);o&&(this.staticValue=o[0]),o=B.exec(u.args),o&&(this.value=o[0]),o=r.exec(u.args),o&&(this.with=o[1])},render:function(){var n=p(regeneratorRuntime.mark(function o(i,c){var s,f,d,y,_,O;return regeneratorRuntime.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(s=void 0,!i.opts.dynamicPartials){S.next=12;break}if(!Ze.exec(this.value)){S.next=9;break}return f=this.value.slice(1,-1),S.next=6,t.parseAndRender(f,i.getAll(),i.opts);case 6:s=S.sent,S.next=10;break;case 9:s=e.evalValue(this.value,i);case 10:S.next=13;break;case 12:s=this.staticValue;case 13:return M(s,"cannot include with empty filename"),d=i.opts.blocks,y=i.opts.blockMode,i.opts.blocks={},i.opts.blockMode="output",this.with&&(c[s]=e.evalValue(this.with,i)),S.next=21,t.getTemplate(s,i.opts.root);case 21:return _=S.sent,i.push(c),S.next=25,t.renderer.renderTemplates(_,i);case 25:return O=S.sent,i.pop(c),i.opts.blocks=d,i.opts.blockMode=y,S.abrupt("return",O);case 30:case"end":return S.stop()}},o,this)}));function u(o,i){return n.apply(this,arguments)}return u}()})}function Dr(t,e){var r=e.Types,n=r.CaptureScope,u=r.AssignScope,o=r.DecrementScope;t.registerTag("decrement",{parse:function(c){var s=c.args.match(V);M(s,"illegal identifier "+c.args),this.variable=s[0]},render:function(c,s){var f=c.findContextFor(this.variable,function(d){var y=Object.getPrototypeOf(d);return y!==n&&y!==u});return f||(f=w(o),c.unshift(f)),typeof f[this.variable]!="number"&&(f[this.variable]=0),--f[this.variable]}})}function Nr(t,e){var r=new RegExp("^(?:("+B.source+")\\s*:\\s*)?(.*)$"),n=new RegExp(B.source,"g");t.registerTag("cycle",{parse:function(o,i){var c=r.exec(o.args);M(c,"illegal tag: "+o.raw),this.group=c[1]||"";var s=c[2];for(this.candidates=[];c=n.exec(s);)this.candidates.push(c[0]);M(this.candidates.length,"empty candidates: "+o.raw)},render:function(o,i){var c=e.evalValue(this.group,o),s="cycle:"+c+":"+this.candidates.join(","),f=o.opts.groups=o.opts.groups||{},d=f[s];d===void 0&&(d=f[s]=0);var y=this.candidates[d];return d=(d+1)%this.candidates.length,f[s]=d,e.evalValue(y,o)}})}function Vr(t,e){t.registerTag("if",{parse:function(n,u){var o=this;this.branches=[],this.elseTemplates=[];var i=void 0,c=t.parser.parseStream(u).on("start",function(){return o.branches.push({cond:n.args,templates:i=[]})}).on("tag:elsif",function(s){o.branches.push({cond:s.args,templates:i=[]})}).on("tag:else",function(){return i=o.elseTemplates}).on("tag:endif",function(s){return c.stop()}).on("template",function(s){return i.push(s)}).on("end",function(s){throw new Error("tag "+n.raw+" not closed")});c.start()},render:function(n,u){var o=!0,i=!1,c=void 0;try{for(var s=this.branches[Symbol.iterator](),f;!(o=(f=s.next()).done);o=!0){var d=f.value,y=e.evalExp(d.cond,n);if(e.isTruthy(y))return t.renderer.renderTemplates(d.templates,n)}}catch(_){i=!0,c=_}finally{try{!o&&s.return&&s.return()}finally{if(i)throw c}}return t.renderer.renderTemplates(this.elseTemplates,n)}})}function Hr(t,e){var r=e.Types,n=r.CaptureScope,u=r.AssignScope,o=r.IncrementScope;t.registerTag("increment",{parse:function(c){var s=c.args.match(V);M(s,"illegal identifier "+c.args),this.variable=s[0]},render:function(c,s){var f=c.findContextFor(this.variable,function(y){var _=Object.getPrototypeOf(y);return _!==n&&_!==u});f||(f=w(o),c.unshift(f)),typeof f[this.variable]!="number"&&(f[this.variable]=0);var d=f[this.variable];return f[this.variable]++,d}})}function Yr(t,e){var r=/\S+/;t.registerTag("layout",{parse:function(u,o){var i=r.exec(u.args);i&&(this.staticLayout=i[0]),i=B.exec(u.args),i&&(this.layout=i[0]),this.tpls=t.parser.parse(o)},render:function(){var n=p(regeneratorRuntime.mark(function o(i,c){var s,f,d,y;return regeneratorRuntime.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return s=i.opts.dynamicPartials?e.evalValue(this.layout,i):this.staticLayout,M(s,"cannot apply layout with empty filename"),i.opts.blockMode="store",O.next=5,t.renderer.renderTemplates(this.tpls,i);case 5:return f=O.sent,i.opts.blocks[""]===void 0&&(i.opts.blocks[""]=f),O.next=9,t.getTemplate(s,i.opts.root);case 9:return d=O.sent,i.push(c),i.opts.blockMode="output",O.next=14,t.renderer.renderTemplates(d,i);case 14:return y=O.sent,i.pop(c),O.abrupt("return",y);case 17:case"end":return O.stop()}},o,this)}));function u(o,i){return n.apply(this,arguments)}return u}()}),t.registerTag("block",{parse:function(u,o){var i=this,c=/\w+/.exec(u.args);this.block=c?c[0]:"",this.tpls=[];var s=t.parser.parseStream(o).on("tag:endblock",function(){return s.stop()}).on("template",function(f){return i.tpls.push(f)}).on("end",function(){throw new Error("tag "+u.raw+" not closed")});s.start()},render:function(){var n=p(regeneratorRuntime.mark(function o(i){var c,s;return regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(c=i.opts.blocks[this.block],c===void 0){d.next=5;break}d.t0=c,d.next=8;break;case 5:return d.next=7,t.renderer.renderTemplates(this.tpls,i);case 7:d.t0=d.sent;case 8:if(s=d.t0,i.opts.blockMode!=="store"){d.next=12;break}return i.opts.blocks[this.block]=s,d.abrupt("return","");case 12:return d.abrupt("return",s);case 13:case"end":return d.stop()}},o,this)}));function u(o){return n.apply(this,arguments)}return u}()})}function Gr(t){t.registerTag("raw",{parse:function(r,n){var u=this;this.tokens=[];var o=t.parser.parseStream(n);o.on("token",function(i){i.name==="endraw"?o.stop():u.tokens.push(i)}).on("end",function(){throw new Error("tag "+r.raw+" not closed")}),o.start()},render:function(r,n){return this.tokens.map(function(u){return u.raw}).join("")}})}function Ur(t,e){var r=new RegExp("^("+V.source+")\\s+in\\s+"+("("+B.source+")")+("(?:\\s+"+Pe.source+")*$"));t.registerTag("tablerow",{parse:function(u,o){var i=this,c=r.exec(u.args);M(c,"illegal tag: "+u.raw),this.variable=c[1],this.collection=c[2],this.templates=[];var s=void 0,f=t.parser.parseStream(o).on("start",function(){return s=i.templates}).on("tag:endtablerow",function(d){return f.stop()}).on("template",function(d){return s.push(d)}).on("end",function(){throw new Error("tag "+u.raw+" not closed")});f.start()},render:function(){var n=p(regeneratorRuntime.mark(function o(i,c){var s=this,f,d,y,_,O,R,S;return regeneratorRuntime.wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return f=e.evalExp(this.collection,i)||[],d=c.offset||0,y=c.limit===void 0?f.length:c.limit,f=f.slice(d,d+y),_=c.cols||f.length,O=f.map(function(F,D){var j={};return j[s.variable]=F,j}),R=void 0,S="",G.next=10,nt(O,function(){var F=p(regeneratorRuntime.mark(function D(j,U){var Z;return regeneratorRuntime.wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return R=Math.floor(U/_)+1,Z=U%_+1,Z===1&&(R!==1&&(S+="</tr>"),S+='<tr class="row'+R+'">'),S+='<td class="col'+Z+'">',i.push(j),ee.next=7,t.renderer.renderTemplates(s.templates,i);case 7:return S+=ee.sent,S+="</td>",i.pop(j),ee.abrupt("return",S);case 11:case"end":return ee.stop()}},D,s)}));return function(D,j){return F.apply(this,arguments)}}());case 10:return R>0&&(S+="</tr>"),G.abrupt("return",S);case 12:case"end":return G.stop()}},o,this)}));function u(o,i){return n.apply(this,arguments)}return u}()})}function Br(t,e){t.registerTag("unless",{parse:function(n,u){var o=this;this.templates=[],this.elseTemplates=[];var i=void 0,c=t.parser.parseStream(u).on("start",function(s){i=o.templates,o.cond=n.args}).on("tag:else",function(){return i=o.elseTemplates}).on("tag:endunless",function(s){return c.stop()}).on("template",function(s){return i.push(s)}).on("end",function(s){throw new Error("tag "+n.raw+" not closed")});c.start()},render:function(n,u){var o=e.evalExp(this.cond,n);return e.isFalsy(o)?t.renderer.renderTemplates(this.templates,n):t.renderer.renderTemplates(this.elseTemplates,n)}})}function Wr(t,e){Fr(t,e),Ir(t,e),zr(t,e),Mr(t),Nr(t,e),Dr(t,e),$r(t,e),Vr(t,e),Ar(t,e),Hr(t,e),Yr(t,e),Gr(t),Ur(t,e),Br(t,e)}var at=["January","February","March","April","May","June","July","August","September","October","November","December"],it=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],qr=at.map(ot),Jr=it.map(ot),st={1:"st",2:"nd",3:"rd",default:"th"};function ot(t){return t.slice(0,3)}var ne={daysInMonth:function(e){var r=ne.isLeapYear(e)?29:28;return[31,r,31,30,31,30,31,31,30,31,30,31]},getDayOfYear:function(e){for(var r=0,n=0;n<e.getMonth();++n)r+=ne.daysInMonth(e)[n];return r+e.getDate()},getWeekOfYear:function(e,r){var n=this.getDayOfYear(e)+(r-e.getDay()),u=new Date(e.getFullYear(),0,1),o=7-u.getDay()+r;return H.pad(Math.floor((n-o)/7)+1,2)},isLeapYear:function(e){var r=e.getFullYear();return!!(!(r&3)&&(r%100||r%400===0&&r))},getSuffix:function(e){var r=e.getDate().toString(),n=parseInt(r.slice(-1));return st[n]||st.default},century:function(e){return parseInt(e.getFullYear().toString().substring(0,2),10)}},H={pad:function(e,r,n){n||(n="0");for(var u=e.toString(),o=r-u.length;o-- >0;)u=n+u;return u}},pe={a:function(e){return Jr[e.getDay()]},A:function(e){return it[e.getDay()]},b:function(e){return qr[e.getMonth()]},B:function(e){return at[e.getMonth()]},c:function(e){return e.toLocaleString()},C:function(e){return ne.century(e)},d:function(e){return H.pad(e.getDate(),2)},e:function(e){return H.pad(e.getDate(),2," ")},H:function(e){return H.pad(e.getHours(),2)},I:function(e){return H.pad(e.getHours()%12||12,2)},j:function(e){return H.pad(ne.getDayOfYear(e),3)},k:function(e){return H.pad(e.getHours(),2," ")},l:function(e){return H.pad(e.getHours()%12||12,2," ")},L:function(e){return H.pad(e.getMilliseconds(),3)},m:function(e){return H.pad(e.getMonth()+1,2)},M:function(e){return H.pad(e.getMinutes(),2)},p:function(e){return e.getHours()<12?"AM":"PM"},P:function(e){return e.getHours()<12?"am":"pm"},q:function(e){return ne.getSuffix(e)},s:function(e){return Math.round(e.valueOf()/1e3)},S:function(e){return H.pad(e.getSeconds(),2)},u:function(e){return e.getDay()||7},U:function(e){return ne.getWeekOfYear(e,0)},w:function(e){return e.getDay()},W:function(e){return ne.getWeekOfYear(e,1)},x:function(e){return e.toLocaleDateString()},X:function(e){return e.toLocaleTimeString()},y:function(e){return e.getFullYear().toString().substring(2,4)},Y:function(e){return e.getFullYear()},z:function(e){var r=e.getTimezoneOffset()/60*100;return(r>0?"-":"+")+H.pad(Math.abs(r),4)},"%":function(){return"%"}};pe.h=pe.b,pe.N=pe.L;function Qr(t,e){for(var r="",n=e;;){var u=/%./g,o=u.exec(n);if(!o)return r+n;r+=n.slice(0,u.lastIndex-2),n=n.slice(u.lastIndex);var i=o[0].charAt(1),c=pe[i];r+=c?c.call(this,t):"%"+i}}var Xr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},Kr={"&amp;":"&","&lt;":"<","&gt;":">","&#34;":'"',"&#39;":"'"},ut={abs:function(e){return Math.abs(e)},append:function(e,r){return e+r},capitalize:function(e){return Y(e).charAt(0).toUpperCase()+e.slice(1)},ceil:function(e){return Math.ceil(e)},concat:function(e,r){return Array.prototype.concat.call(e,r)},date:function(e,r){var n=e;return e==="now"?n=new Date:k(e)&&(n=new Date(e)),tn(n)?Qr(n,r):e},default:function(e,r){return Ie(e)?e:r},divided_by:function(e,r){return e/r},downcase:function(e){return e.toLowerCase()},escape:lt,escape_once:function(e){return lt(Zr(e))},first:function(e){return e[0]},floor:function(e){return Math.floor(e)},join:function(e,r){return e.join(r)},last:function(e){return J(e)},lstrip:function(e){return Y(e).replace(/^\s+/,"")},map:function(e,r){return e.map(function(n){return n[r]})},minus:ze(function(t,e){return t-e}),modulo:ze(function(t,e){return t%e}),newline_to_br:function(e){return e.replace(/\n/g,"<br />")},plus:ze(function(t,e){return Number(t)+Number(e)}),prepend:function(e,r){return r+e},remove:function(e,r){return e.split(r).join("")},remove_first:function(e,r){return e.replace(r,"")},replace:function(e,r,n){return Y(e).split(r).join(n)},replace_first:function(e,r,n){return Y(e).replace(r,n)},reverse:function(e){return e.reverse()},round:function(e,r){var n=Math.pow(10,r||0);return Math.round(e*n,r)/n},rstrip:function(e){return Y(e).replace(/\s+$/,"")},size:function(e){return e.length},slice:function(e,r,n){return e.substr(r,n===void 0?1:n)},sort:function(e,r){return e.sort(r)},split:function(e,r){return Y(e).split(r)},strip:function(e){return Y(e).trim()},strip_html:function(e){return Y(e).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,"")},strip_newlines:function(e){return Y(e).replace(/\n/g,"")},times:function(e,r){return e*r},truncate:function(e,r,n){return e=Y(e),n=n===void 0?"...":n,r=r||16,e.length<=r?e:e.substr(0,r-n.length)+n},truncatewords:function(e,r,n){n===void 0&&(n="...");var u=e.split(" "),o=u.slice(0,r).join(" ");return u.length>r&&(o+=n),o},uniq:function(e){var r={};return(e||[]).filter(function(n){return r.hasOwnProperty(n)?!1:(r[n]=!0,!0)})},upcase:function(e){return Y(e).toUpperCase()},url_encode:encodeURIComponent};function lt(t){return Y(t).replace(/&|<|>|"|'/g,function(e){return Xr[e]})}function Zr(t){return Y(t).replace(/&(amp|lt|gt|#34|#39);/g,function(e){return Kr[e]})}function ct(t){var e=(t+"").split(".");return e.length>1?e[1].length:0}function en(t,e){return Math.max(ct(t),ct(e))}function Y(t){return t+""}function ze(t){return function(e,r){var n=en(e,r);return t(e,r).toFixed(n)}}function tn(t){return t instanceof Date&&!isNaN(t.getTime())}function ft(t){return ve(ut,function(e,r){return t.registerFilter(r,e)})}ft.filters=ut;var rn={init:function(e,r,n){return n.cache&&(this.cache={}),this.options=n,this.tag=e,this.filter=r,this.parser=Pr(e,r),this.renderer=Sr(),Wr(this,ae),ft(this),this},parse:function(e,r){var n=wr(e,r,this.options);return this.parser.parse(n)},render:function(e,r,n){n=X({},this.options,n);var u=pr(r,n);return this.renderer.renderTemplates(e,u)},parseAndRender:function(){var t=p(regeneratorRuntime.mark(function r(n,u,o){var i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.parse(n);case 2:return i=s.sent,s.abrupt("return",this.render(i,u,o));case 4:case"end":return s.stop()}},r,this)}));function e(r,n,u){return t.apply(this,arguments)}return e}(),getTemplate:function(){var t=p(regeneratorRuntime.mark(function r(n,u){var o=this,i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,hr(n,u,this.options);case 2:return i=s.sent,s.abrupt("return",this.respectCache(i,p(regeneratorRuntime.mark(function f(){var d;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,gr(i);case 2:return d=_.sent,_.abrupt("return",o.parse(d,i));case 4:case"end":return _.stop()}},f,o)}))));case 4:case"end":return s.stop()}},r,this)}));function e(r,n){return t.apply(this,arguments)}return e}(),renderFile:function(){var t=p(regeneratorRuntime.mark(function r(n,u,o){var i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=X({},o),s.next=3,this.getTemplate(n,o.root);case 3:return i=s.sent,s.abrupt("return",this.render(i,u,o));case 5:case"end":return s.stop()}},r,this)}));function e(r,n,u){return t.apply(this,arguments)}return e}(),respectCache:function(){var t=p(regeneratorRuntime.mark(function r(n,u){var o,i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(o=this.options.cache,!(o&&this.cache[n])){s.next=3;break}return s.abrupt("return",this.cache[n]);case 3:return s.next=5,u();case 5:return i=s.sent,o&&(this.cache[n]=i),s.abrupt("return",i);case 8:case"end":return s.stop()}},r,this)}));function e(r,n){return t.apply(this,arguments)}return e}(),evalValue:function(e,r){var n=this.parser.parseValue(e.trim());return this.renderer.evalValue(n,r)},registerFilter:function(e,r){return this.filter.register(e,r)},registerTag:function(e,r){return this.tag.register(e,r)},express:function(e){e=e||{};var r=this;return function(n,u,o){M(I(this.root)||k(this.root),"illegal views root, are you using express.js?"),e.root=this.root,r.renderFile(n,u,e).then(function(i){return o(null,i)},o)}}};function nn(t){if(I(t))return t;if(k(t))return[t];throw new TypeError("illegal root: "+t)}function ae(t){t=X({root:["."],cache:!1,extname:"",dynamicPartials:!0,trim_tag_right:!1,trim_tag_left:!1,trim_value_right:!1,trim_value_left:!1,greedy:!0,strict_filters:!1,strict_variables:!1},t),t.root=nn(t.root);var e=w(rn);return e.init(Or(),Cr(t),t),e}return ae.isTruthy=Ie,ae.isFalsy=rt,ae.evalExp=we,ae.evalValue=se,ae.Types={ParseError:le,TokenizationError:ue,RenderBreakError:re,AssertionError:fe,AssignScope:{},CaptureScope:{},IncrementScope:{},DecrementScope:{}},ae})}),An=jn(),Dn=ge.createContext(An),Nn=function(l){return function(g){zt(v,g);var p=Mt(v);function v(){return Ft(this,v),p.apply(this,arguments)}return It(v,[{key:"render",value:function(){var E=this;return ge.createElement(Dn.Consumer,null,function(w){return ge.createElement(l,He({liquidEngine:w},E.props))})}}]),v}(he.Component)},jt=function(a){zt(g,a);var l=Mt(g);function g(){var p;Ft(this,g);for(var v=arguments.length,k=new Array(v),E=0;E<v;E++)k[E]=arguments[E];return p=l.call.apply(l,[this].concat(k)),Ve(Ge(p),"state",{template:void 0,data:void 0,compiledRender:void 0,needsRender:!0}),Ve(Ge(p),"_createHtmlRender",function(){var w=p.state.compiledRender;return{__html:w}}),p}return It(g,[{key:"componentDidMount",value:function(){var p=Ne(regeneratorRuntime.mark(function k(){return regeneratorRuntime.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,this.parseAndRender();case 2:case"end":return w.stop()}},k,this)}));function v(){return p.apply(this,arguments)}return v}()},{key:"componentDidUpdate",value:function(){var p=Ne(regeneratorRuntime.mark(function k(){var E;return regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(E=this.state.needsRender,!E){T.next=4;break}return T.next=4,this.parseAndRender();case 4:case"end":return T.stop()}},k,this)}));function v(){return p.apply(this,arguments)}return v}()},{key:"parseAndRender",value:function(){var p=Ne(regeneratorRuntime.mark(function k(){var E,w,T,I,ve;return regeneratorRuntime.wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return E=this.props,w=E.template,T=E.data,I=E.liquidEngine,J.next=3,I.parseAndRender(w,T);case 3:ve=J.sent,this.setState({compiledRender:ve,template:w,data:T,needsRender:!1});case 5:case"end":return J.stop()}},k,this)}));function v(){return p.apply(this,arguments)}return v}()},{key:"render",value:function(){var v=this.props,k=v.html,E=v.render;if(k)return ge.createElement("div",{dangerouslySetInnerHTML:this._createHtmlRender()});if(E)return E(this._createHtmlRender());var w=this.state.compiledRender;return ge.createElement(he.Fragment,null,w)}}],[{key:"getDerivedStateFromProps",value:function(v,k){return v.template!==k.template||v.data!==k.data?{template:v.template,data:v.data,compiledRender:k.compiledRender,needsRender:!0}:null}}]),g}(he.PureComponent);Ve(jt,"propTypes",{template:de.string.isRequired,data:de.object,liquidEngine:de.object.isRequired,html:de.bool,render:de.func});var Oe=Nn(jt);const Vn=()=>{const a=`
<section class="hero">
  <h1>{{ section.settings.hero_name }}</h1>
</section>

{% schema %}
  {
    "name": "hero",
    "settings": [
      {
        "type": "text",
        "id": "hero_name",
        "label": "Hero",
        "default": "Hero"
      }
    ],
    "presets": [
      {
        "name": "Herooooo"
      }
    ]
  }
{% endschema %}`,l={"section.settings.hero_name":"hero"};return K.jsx(Oe,{template:a,data:l,html:!0})},Hn=()=>{const a=`
<header class="main-header">
  <h1>Hello world</h1>
</header>  


{% schema %}
{
  "name": "Header",
  "class": "main-header",
  "settings": [
    {
      "type": "text",
      "id": "header_name",
      "default": "This is header",
      "label": "header name"
    }
  ],
  "presets": [
    {
      "name": "HEader"
    }
  ]
}
{% endschema %}`,l={header_name:"This is the header"};return K.jsx(Oe,{template:a,data:l,html:!0})},Yn=()=>{const a=`
  {% comment %}theme-check-disable UndefinedObject{% endcomment %}
  {{ 'section-footer.css' | asset_url | stylesheet_tag }}
  {{ 'component-newsletter.css' | asset_url | stylesheet_tag }}
  {{ 'component-list-menu.css' | asset_url | stylesheet_tag }}
  {{ 'component-list-payment.css' | asset_url | stylesheet_tag }}
  {{ 'component-list-social.css' | asset_url | stylesheet_tag }}
  
  {%- style -%}
    .footer {
      margin-top: {{ section.settings.margin_top | times: 0.75 | round: 0 }}
      px;
    }
  
    .section-{{ section.id }}-padding {
      padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}
      px;
      padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}
      px;
    }
  
    @media screen and (min-width: 750px) {
      .footer {
        margin-top: {{ section.settings.margin_top }}
        px;
      }
  
      .section-{{ section.id }}-padding {
        padding-top: {{ section.settings.padding_top }}
        px;
        padding-bottom: {{ section.settings.padding_bottom }}
        px;
      }
    }
  {%- endstyle -%}
  
  <footer class="footer color-{{ section.settings.color_scheme }} gradient section-{{ section.id }}-padding">
    {%- liquid
        assign has_social_icons = true
        if settings.social_facebook_link == blank and settings.social_instagram_link == blank and settings.social_youtube_link == blank and settings.social_tiktok_link == blank and settings.social_twitter_link == blank and settings.social_pinterest_link == blank and settings.social_snapchat_link == blank and settings.social_tumblr_link == blank and settings.social_vimeo_link == blank
          assign has_social_icons = false
        endif
    
        if settings.brand_image == blank and settings.brand_headline == blank and settings.brand_description == blank
          assign brand_empty = true
        endif
    
        if section.blocks.size == 1 and section.blocks[0].type == 'brand_information' and brand_empty and has_social_icons == false and section.settings.newsletter_enable == false and section.settings.enable_follow_on_shop == false
          assign only_empty_brand = true
        endif
      -%}
    {%- if section.blocks.size > 0
   or section.settings.newsletter_enable
   or section.settings.show_social and has_social_icons == true
   or section.settings.enable_follow_on_shop
   -%}
      {%- unless only_empty_brand -%}
        <div class="footer__content-top page-width">
          {%- if section.blocks.size > 0 -%}
            {%- liquid
                if section.blocks.size == 9
                  assign footer_grid_class = 'grid--3-col-tablet'
                elsif section.blocks.size > 6
                  assign footer_grid_class = 'grid--4-col-desktop'
                elsif section.blocks.size > 4
                  assign footer_grid_class = 'grid--3-col-tablet'
                endif
              -%}
            <div
              class="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet {{ footer_grid_class }}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}"
              {% if settings.animations_reveal_on_scroll %}
              data-cascade
              {% endif %}>
              {%- for block in section.blocks -%}
                <div
                  class="footer-block grid__item{% if block.type == 'link_list' %} footer-block--menu{% endif %}{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}"
                  {{ block.shopify_attributes }}
                  {% if settings.animations_reveal_on_scroll %}
                  data-cascade
                  style="--animation-order: {{ forloop.index }};"
                  {% endif %}>
                  {%- if block.settings.heading != blank -%}
                    <h2 class="footer-block__heading inline-richtext">{{- block.settings.heading -}}</h2>
                  {%- endif -%}
  
                  {%- case block.type -%}
                    {%- when '@app' -%}
                    {% render block %}
                    {%- when 'text' -%}
                    <div class="footer-block__details-content rte">
                      {{ block.settings.subtext }}
                    </div>
                    {%- when 'link_list' -%}
                    {%- if block.settings.menu != blank -%}
                      <ul class="footer-block__details-content list-unstyled">
                        {%- for link in block.settings.menu.links -%}
                          <li>
                            <a href="{{ link.url }}" class="link link--text list-menu__item list-menu__item--link{% if link.active %} list-menu__item--active{% endif %}">
                              {{ link.title }}
                            </a>
                          </li>
                        {%- endfor -%}
                      </ul>
                    {%- endif -%}
                    {%- when 'brand_information' -%}
                    <div class="footer-block__brand-info">
                      {%- if settings.brand_image != blank -%}
                        {%- assign brand_image_height = settings.brand_image_width
                          | divided_by: settings.brand_image.aspect_ratio -%}
                        <div class="footer-block__image-wrapper" style="max-width: min(100%, {{ settings.brand_image_width }}px);">
                          {{
                             settings.brand_image
                           | image_url: width: 1100
                           | image_tag:
                           loading: 'lazy',
                           widths: '50, 100, 150, 200, 300, 400, 550, 800, 1100',
                           height: brand_image_height,
                           width: settings.brand_image_width }}
                        </div>
                      {%- endif -%}
                      {%- if settings.brand_headline != blank -%}
                        <h2 class="footer-block__heading rte">{{ settings.brand_headline }}</h2>
                      {%- endif -%}
                      {%- if settings.brand_description != blank -%}
                        <div class="rte">{{ settings.brand_description }}</div>
                      {%- endif -%}
                      {%- if block.settings.show_social and has_social_icons -%}
                        {%- render 'social-icons', class: 'footer__list-social' -%}
                      {%- endif -%}
                    </div>
                    {%- when 'image' -%}
                    <div class="footer-block__details-content footer-block-image {{ block.settings.alignment }}">
                      {%- if block.settings.image != blank -%}
                        {%- assign image_size_2x = block.settings.image_width | times: 2 | at_most: 5760 -%}
                        <div class="footer-block__image-wrapper" style="max-width: min(100%, {{ block.settings.image_width }}px);">
                          <img
                            srcset="{{ block.settings.image | image_url: width: block.settings.image_width }}, {{ block.settings.image | image_url: width: image_size_2x }} 2x"
                            src="{{ block.settings.image | image_url: width: 760 }}"
                            alt="{{ block.settings.image.alt | escape }}"
                            loading="lazy"
                            width="{{ block.settings.image.width }}"
                            height="{{ block.settings.image.height }}">
                        </div>
                      {%- else -%}
                        {{ 'image' | placeholder_svg_tag: 'placeholder-svg placeholder' }}
                      {%- endif -%}
                    </div>
                  {%- endcase -%}
                </div>
              {%- endfor -%}
            </div>
          {%- endif -%}
  
          <div
            class="footer-block--newsletter{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}"
            {% if settings.animations_reveal_on_scroll %}
            data-cascade
            {% endif %}>
            {%- if section.settings.newsletter_enable -%}
              <div class="footer-block__newsletter">
                {%- if section.settings.newsletter_heading != blank -%}
                  <h2 class="footer-block__heading inline-richtext">{{ section.settings.newsletter_heading }}</h2>
                {%- endif -%}
                {%- form 'customer', id: 'ContactFooter', class: 'footer__newsletter newsletter-form' -%}
                  <input
                    type="hidden"
                    name="contact[tags]"
                    value="newsletter">
                  <div class="newsletter-form__field-wrapper">
                    <div class="field">
                      <input
                        id="NewsletterForm--{{ section.id }}"
                        type="email"
                        name="contact[email]"
                        class="field__input"
                        value="{{ form.email }}"
                        aria-required="true"
                        autocorrect="off"
                        autocapitalize="off"
                        autocomplete="email"
                        {% if form.errors %}
                        autofocus
                        aria-invalid="true"
                        aria-describedby="ContactFooter-error"
                        {% elsif form.posted_successfully? %}
                        aria-describedby="ContactFooter-success"
                        {% endif %}
                        placeholder="{{ 'newsletter.label' | t }}"
                        required>
                      <label class="field__label" for="NewsletterForm--{{ section.id }}">
                        {{ 'newsletter.label' | t }}
                      </label>
                      <button
                        type="submit"
                        class="newsletter-form__button field__button"
                        name="commit"
                        id="Subscribe"
                        aria-label="{{ 'newsletter.button_label' | t }}">
                        {% render 'icon-arrow' %}
                      </button>
                    </div>
                    {%- if form.errors -%}
                      <small class="newsletter-form__message form__message" id="ContactFooter-error">
                        {%- render 'icon-error' -%}
                        {{- form.errors.translated_fields.email | capitalize }}
                        {{ form.errors.messages.email -}}
                      </small>
                    {%- endif -%}
                  </div>
                  {%- if form.posted_successfully? -%}
                    <h3
                      class="newsletter-form__message newsletter-form__message--success form__message"
                      id="ContactFooter-success"
                      tabindex="-1"
                      autofocus>
                      {% render 'icon-success' -%}
                      {{- 'newsletter.success' | t }}
                    </h3>
                  {%- endif -%}
                {%- endform -%}
              </div>
            {%- endif -%}
  
            {%- if shop.features.follow_on_shop? and section.settings.enable_follow_on_shop -%}
              <div class="footer__follow-on-shop">
  
                {% # theme-check-disable %}
                {{ shop | login_button: action: 'follow' }}
                {% # theme-check-enable %}
              </div>
            {%- endif -%}
  
            {%- if section.settings.show_social and has_social_icons -%}
              {%- render 'social-icons', class: 'footer__list-social' -%}
            {%- endif -%}
          </div>
        </div>
      {%- endunless -%}
    {%- endif -%}
  
    <div
      class="footer__content-bottom{% if settings.animations_reveal_on_scroll %} scroll-trigger animate--slide-in{% endif %}"
      {% if settings.animations_reveal_on_scroll %}
      data-cascade
      {% endif %}>
      <div class="footer__content-bottom-wrapper page-width">
        <div class="footer__column footer__localization isolate">
          {%- if section.settings.enable_country_selector and localization.available_countries.size > 1 -%}
            <noscript>
              {%- form 'localization', id: 'FooterCountryFormNoScript', class: 'localization-form' -%}
                <div class="localization-form__select">
                  <h2 class="visually-hidden" id="FooterCountryLabelNoScript">{{ 'localization.country_label' | t }}</h2>
                  <select
                    class="localization-selector link"
                    name="country_code"
                    aria-labelledby="FooterCountryLabelNoScript">
                    {%- for country in localization.available_countries -%}
                      <option
                        value="{{ country.iso_code }}"
                        {%- if country.iso_code == localization.country.iso_code %}
                        selected
                        {% endif %}>
                        {{ country.name }} ({{ country.currency.iso_code }}
                        {{ country.currency.symbol }})
                      </option>
                    {%- endfor -%}
                  </select>
                  {% render 'icon-caret' %}
                </div>
                <button class="button button--tertiary">{{ 'localization.update_country' | t }}</button>
              {%- endform -%}
            </noscript>
            <localization-form>
              {%- form 'localization', id: 'FooterCountryForm', class: 'localization-form' -%}
                <div class="no-js-hidden">
                  <h2 class="caption-large text-body" id="FooterCountryLabel">{{ 'localization.country_label' | t }}</h2>
                  {%- render 'country-localization', localPosition: 'FooterCountry' -%}
                </div>
              {%- endform -%}
            </localization-form>
          {%- endif -%}
  
          {%- if section.settings.enable_language_selector and localization.available_languages.size > 1 -%}
            <noscript>
              {%- form 'localization', id: 'FooterLanguageFormNoScript', class: 'localization-form' -%}
                <div class="localization-form__select">
                  <h2 class="visually-hidden" id="FooterLanguageLabelNoScript">
                    {{ 'localization.language_label' | t }}
                  </h2>
                  <select
                    class="localization-selector link"
                    name="locale_code"
                    aria-labelledby="FooterLanguageLabelNoScript">
                    {%- for language in localization.available_languages -%}
                      <option
                        value="{{ language.iso_code }}"
                        lang="{{ language.iso_code }}"
                        {%- if language.iso_code == localization.language.iso_code %}
                        selected
                        {% endif %}>
                        {{ language.endonym_name | capitalize }}
                      </option>
                    {%- endfor -%}
                  </select>
                  {% render 'icon-caret' %}
                </div>
                <button class="button button--tertiary">{{ 'localization.update_language' | t }}</button>
              {%- endform -%}
            </noscript>
  
            <localization-form>
              {%- form 'localization', id: 'FooterLanguageForm', class: 'localization-form' -%}
                <div class="no-js-hidden">
                  <h2 class="caption-large text-body" id="FooterLanguageLabel">
                    {{ 'localization.language_label' | t }}
                  </h2>
                  {%- render 'language-localization', localPosition: 'FooterLanguage' -%}
                </div>
              {%- endform -%}
            </localization-form>
          {%- endif -%}
        </div>
        <div class="footer__column footer__column--info">
          {%- if section.settings.payment_enable -%}
            <div class="footer__payment">
              <span class="visually-hidden">{{ 'sections.footer.payment' | t }}</span>
              <ul class="list list-payment" role="list">
                {%- for type in shop.enabled_payment_types -%}
                  <li class="list-payment__item">
                    {{ type | payment_type_svg_tag: class: 'icon icon--full-color' }}
                  </li>
                {%- endfor -%}
              </ul>
            </div>
          {%- endif -%}
        </div>
      </div>
      <div class="footer__content-bottom-wrapper page-width{% if section.settings.enable_country_selector == false and section.settings.enable_language_selector == false %} footer__content-bottom-wrapper--center{% endif %}">
        <div class="footer__copyright caption">
          <small class="copyright__content">&copy; {{ 'now' | date: '%Y' }}, {{ shop.name | link_to: routes.root_url -}}
          </small>
          <small class="copyright__content">{{ powered_by_link }}</small>
          {%- if section.settings.show_policy -%}
            <ul class="policies list-unstyled">
              {%- for policy in shop.policies -%}
                {%- if policy != blank -%}
                  <li>
                    <small class="copyright__content">
                      <a href="{{ policy.url }}">{{ policy.title }}</a>
                    </small>
                  </li>
                {%- endif -%}
              {%- endfor -%}
            </ul>
          {%- endif -%}
        </div>
      </div>
    </div>
  </footer>
  
  {% schema %}
    {
      "name": "My Footer!!!!",
      "blocks": [
        {
          "type": "@app"
        },
        {
          "type": "link_list",
          "name": "t:sections.footer.blocks.link_list.name",
          "settings": [
            {
              "type": "inline_richtext",
              "id": "heading",
              "default": "Quick links",
              "label": "t:sections.footer.blocks.link_list.settings.heading.label"
            }, {
              "type": "link_list",
              "id": "menu",
              "default": "footer",
              "label": "t:sections.footer.blocks.link_list.settings.menu.label",
              "info": "t:sections.footer.blocks.link_list.settings.menu.info"
            }
          ]
        },
        {
          "type": "brand_information",
          "name": "t:sections.footer.blocks.brand_information.name",
          "settings": [
            {
              "type": "paragraph",
              "content": "t:sections.footer.blocks.brand_information.settings.paragraph.content"
            }, {
              "type": "header",
              "content": "t:sections.footer.blocks.brand_information.settings.header__1.content"
            }, {
              "type": "checkbox",
              "id": "show_social",
              "default": true,
              "label": "t:sections.footer.blocks.brand_information.settings.show_social.label",
              "info": "t:sections.footer.blocks.brand_information.settings.show_social.info"
            }
          ]
        },
        {
          "type": "text",
          "name": "t:sections.footer.blocks.text.name",
          "settings": [
            {
              "type": "inline_richtext",
              "id": "heading",
              "default": "Heading",
              "label": "t:sections.footer.blocks.text.settings.heading.label"
            }, {
              "type": "richtext",
              "id": "subtext",
              "default": "<p>Share contact information, store details, and brand content with your customers.</p>",
              "label": "t:sections.footer.blocks.text.settings.subtext.label"
            }
          ]
        }, {
          "type": "image",
          "name": "Image",
          "settings": [
            {
              "type": "image_picker",
              "id": "image",
              "label": "Image"
            }, {
              "type": "range",
              "id": "image_width",
              "min": 50,
              "max": 550,
              "step": 5,
              "unit": "px",
              "label": "Image width",
              "default": 100
            }, {
              "type": "select",
              "id": "alignment",
              "label": "Image alignment on large screen",
              "options": [
                {
                  "value": "",
                  "label": "Left"
                }, {
                  "value": "center",
                  "label": "Center"
                }, {
                  "value": "right",
                  "label": "Right"
                }
              ],
              "default": "center"
            }
          ]
        }
      ],
      "settings": [
        {
          "type": "color_scheme",
          "id": "color_scheme",
          "label": "t:sections.all.colors.label",
          "default": "background-1"
        },
        {
          "type": "header",
          "content": "t:sections.footer.settings.header__1.content",
          "info": "t:sections.footer.settings.header__1.info"
        },
        {
          "type": "checkbox",
          "id": "newsletter_enable",
          "default": true,
          "label": "t:sections.footer.settings.newsletter_enable.label"
        },
        {
          "type": "inline_richtext",
          "id": "newsletter_heading",
          "default": "Subscribe to our emails",
          "label": "t:sections.footer.settings.newsletter_heading.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__9.content",
          "info": "t:sections.footer.settings.header__9.info"
        }, {
          "type": "checkbox",
          "id": "enable_follow_on_shop",
          "default": true,
          "label": "t:sections.footer.settings.enable_follow_on_shop.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__2.content",
          "info": "t:sections.footer.settings.header__2.info"
        }, {
          "type": "checkbox",
          "id": "show_social",
          "default": true,
          "label": "t:sections.footer.settings.show_social.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__3.content",
          "info": "t:sections.footer.settings.header__4.info"
        }, {
          "type": "checkbox",
          "id": "enable_country_selector",
          "default": true,
          "label": "t:sections.footer.settings.enable_country_selector.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__5.content",
          "info": "t:sections.footer.settings.header__6.info"
        }, {
          "type": "checkbox",
          "id": "enable_language_selector",
          "default": true,
          "label": "t:sections.footer.settings.enable_language_selector.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__7.content"
        }, {
          "type": "checkbox",
          "id": "payment_enable",
          "default": true,
          "label": "t:sections.footer.settings.payment_enable.label"
        }, {
          "type": "header",
          "content": "t:sections.footer.settings.header__8.content",
          "info": "t:sections.footer.settings.header__8.info"
        }, {
          "type": "checkbox",
          "id": "show_policy",
          "default": false,
          "label": "t:sections.footer.settings.show_policy.label"
        }, {
          "type": "header",
          "content": "t:sections.all.spacing"
        }, {
          "type": "range",
          "id": "margin_top",
          "min": 0,
          "max": 100,
          "step": 4,
          "unit": "px",
          "label": "t:sections.footer.settings.margin_top.label",
          "default": 0
        }, {
          "type": "header",
          "content": "t:sections.all.padding.section_padding_heading"
        }, {
          "type": "range",
          "id": "padding_top",
          "min": 0,
          "max": 100,
          "step": 4,
          "unit": "px",
          "label": "t:sections.all.padding.padding_top",
          "default": 36
        }, {
          "type": "range",
          "id": "padding_bottom",
          "min": 0,
          "max": 100,
          "step": 4,
          "unit": "px",
          "label": "t:sections.all.padding.padding_bottom",
          "default": 36
        }
      ],
      "default": {
        "blocks": [
          {
            "type": "link_list"
          }, {
            "type": "text"
          }
        ]
      }
    }
  {% endschema %}`,l={footer_name:"footer"};return K.jsx(Oe,{template:a,data:l,html:!0})},Gn=()=>{const a=`
{% render 'test' %}

{% schema %}
{
  "name": "Test",
  "class": "section-test",
  "settings": [
    {
      "type": "text",
      "id": "test",
      "default": "This is testinnggggg",
      "label": "test name"
    }
  ],
  "presets": [
    {
      "name": "Testinggggggg"
    }
  ]
}
{% endschema %}
`,l={"section.settings.test":"test"};return K.jsx(Oe,{template:a,data:l,html:!0})};function Un(){return K.jsxs(K.Fragment,{children:[K.jsx(Hn,{}),K.jsx(Vn,{}),K.jsx(Gn,{}),K.jsx(Yn,{})]})}export{Un as A,ge as R,K as j,he as r};

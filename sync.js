var El=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hp=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{let o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,p=o>>2,E=(o&3)<<4|u>>4,A=(u&15)<<2|f>>6,P=f&63;h||(P=64,a||(A=64)),r.push(t[p],t[E],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(El(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let f=i<n.length?t[n.charAt(i)]:64;++i;let E=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||E==null)throw new oo;let A=o<<2|u>>4;if(r.push(A),f!==64){let P=u<<4&240|f>>2;if(r.push(P),E!==64){let O=f<<6&192|E;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},oo=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},dp=function(n){let e=El(n);return Tl.encodeByteArray(e,!0)},tr=function(n){return dp(n).replace(/\./g,"")},co=function(n){try{return Tl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var pp=()=>fp().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&co(n[1]);return e&&JSON.parse(e)},ci=()=>{try{return pp()||mp()||gp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uo=n=>{var e,t;return(t=(e=ci())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Al=n=>{let e=uo(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lo=()=>{var n;return(n=ci())===null||n===void 0?void 0:n.config},ho=n=>{var e;return(e=ci())===null||e===void 0?void 0:e[`_${n}`]};var ai=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function bl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tr(JSON.stringify(t)),tr(JSON.stringify(a)),""].join(".")}function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function _p(){var n;let e=(n=ci())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rl(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Pl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cl(){let n=ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dl(){return!_p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fo(){try{return typeof indexedDB=="object"}catch{return!1}}function Nl(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var yp="FirebaseError",Re=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yp,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xe.prototype.create)}},Xe=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?vp(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Re(i,u,r)}};function vp(n,e){return n.replace(Ip,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Ip=/\{\$([^}]+)}/g;function kl(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let o=n[i],a=e[i];if(wl(o)&&wl(a)){if(!Pt(o,a))return!1}else if(o!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function wl(n){return n!==null&&typeof n=="object"}function tn(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function rn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ol(n,e){let t=new ao(n,e);return t.subscribe.bind(t)}var ao=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=so),i.error===void 0&&(i.error=so),i.complete===void 0&&(i.complete=so);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function wp(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function so(){}var ov=4*60*60*1e3;function re(n){return n&&n._delegate?n._delegate:n}var Ne=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Ct="[DEFAULT]";var po=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ai;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tp(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[o,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);let a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ep(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ep(n){return n===Ct?void 0:n}function Tp(n){return n.instantiationMode==="EAGER"}var ui=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new po(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Ap=[],B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));var bp={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Sp=B.INFO,Rp={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Pp=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Rp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},lt=class{constructor(e){this.name=e,this._logLevel=Sp,this._logHandler=Pp,this._userLogHandler=null,Ap.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}};var Cp=(n,e)=>e.some(t=>n instanceof t),xl,Vl;function Dp(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Np(){return Vl||(Vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ll=new WeakMap,go=new WeakMap,Ml=new WeakMap,mo=new WeakMap,yo=new WeakMap;function kp(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ue(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ll.set(t,n)}).catch(()=>{}),yo.set(e,n),e}function Op(n){if(go.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});go.set(n,e)}var _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ml.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fl(n){_o=n(_o)}function xp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(li(this),e,...t);return Ml.set(r,e.sort?e.sort():[e]),Ue(r)}:Np().includes(n)?function(...e){return n.apply(li(this),e),Ue(Ll.get(this))}:function(...e){return Ue(n.apply(li(this),e))}}function Vp(n){return typeof n=="function"?xp(n):(n instanceof IDBTransaction&&Op(n),Cp(n,Dp())?new Proxy(n,_o):n)}function Ue(n){if(n instanceof IDBRequest)return kp(n);if(mo.has(n))return mo.get(n);let e=Vp(n);return e!==n&&(mo.set(n,e),yo.set(e,n)),e}var li=n=>yo.get(n);function ql(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(n,e),u=Ue(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ue(a.result),h.oldVersion,h.newVersion,Ue(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}var Lp=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],vo=new Map;function Ul(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Mp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Lp.includes(t)))return;let o=async function(a,...u){let h=this.transaction(a,i?"readwrite":"readonly"),f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return vo.set(e,o),o}Fl(n=>({...n,get:(e,t,r)=>Ul(e,t)||n.get(e,t,r),has:(e,t)=>!!Ul(e,t)||n.has(e,t)}));var wo=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fp(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Fp(n){let e=n.getComponent();return e?.type==="VERSION"}var Eo="@firebase/app",Bl="0.10.5";var Dt=new lt("@firebase/app"),Up="@firebase/app-compat",qp="@firebase/analytics-compat",Bp="@firebase/analytics",jp="@firebase/app-check-compat",zp="@firebase/app-check",Gp="@firebase/auth",$p="@firebase/auth-compat",Kp="@firebase/database",Hp="@firebase/database-compat",Wp="@firebase/functions",Qp="@firebase/functions-compat",Jp="@firebase/installations",Yp="@firebase/installations-compat",Xp="@firebase/messaging",Zp="@firebase/messaging-compat",em="@firebase/performance",tm="@firebase/performance-compat",nm="@firebase/remote-config",rm="@firebase/remote-config-compat",im="@firebase/storage",sm="@firebase/storage-compat",om="@firebase/firestore",am="@firebase/vertexai-preview",cm="@firebase/firestore-compat",um="firebase",lm="10.12.2";var To="[DEFAULT]",hm={[Eo]:"fire-core",[Up]:"fire-core-compat",[Bp]:"fire-analytics",[qp]:"fire-analytics-compat",[zp]:"fire-app-check",[jp]:"fire-app-check-compat",[Gp]:"fire-auth",[$p]:"fire-auth-compat",[Kp]:"fire-rtdb",[Hp]:"fire-rtdb-compat",[Wp]:"fire-fn",[Qp]:"fire-fn-compat",[Jp]:"fire-iid",[Yp]:"fire-iid-compat",[Xp]:"fire-fcm",[Zp]:"fire-fcm-compat",[em]:"fire-perf",[tm]:"fire-perf-compat",[nm]:"fire-rc",[rm]:"fire-rc-compat",[im]:"fire-gcs",[sm]:"fire-gcs-compat",[om]:"fire-fst",[cm]:"fire-fst-compat",[am]:"fire-vertex","fire-js":"fire-js",[um]:"fire-js-all"};var hi=new Map,dm=new Map,Ao=new Map;function jl(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dt(n){let e=n.name;if(Ao.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Ao.set(e,n);for(let t of hi.values())jl(t,n);for(let t of dm.values())jl(t,n);return!0}function rr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n.settings!==void 0}var fm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new Xe("app","Firebase",fm);var bo=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}};var ft=lm;function Po(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:To,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ht.create("bad-app-name",{appName:String(i)});if(t||(t=lo()),!t)throw ht.create("no-options");let o=hi.get(i);if(o){if(Pt(t,o.options)&&Pt(r,o.config))return o;throw ht.create("duplicate-app",{appName:i})}let a=new ui(i);for(let h of Ao.values())a.addComponent(h);let u=new bo(t,r,a);return hi.set(i,u),u}function di(n=To){let e=hi.get(n);if(!e&&n===To&&lo())return Po();if(!e)throw ht.create("no-app",{appName:n});return e}function Ve(n,e,t){var r;let i=(r=hm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(u.join(" "));return}dt(new Ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var pm="firebase-heartbeat-database",mm=1,nr="firebase-heartbeat-store",Io=null;function Kl(){return Io||(Io=ql(pm,mm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),Io}async function gm(n){try{let t=(await Kl()).transaction(nr),r=await t.objectStore(nr).get(Hl(n));return await t.done,r}catch(e){if(e instanceof Re)Dt.warn(e.message);else{let t=ht.create("idb-get",{originalErrorMessage:e?.message});Dt.warn(t.message)}}}async function zl(n,e){try{let r=(await Kl()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,Hl(n)),await r.done}catch(t){if(t instanceof Re)Dt.warn(t.message);else{let r=ht.create("idb-set",{originalErrorMessage:t?.message});Dt.warn(r.message)}}}function Hl(n){return`${n.name}!${n.options.appId}`}var _m=1024,ym=30*24*60*60*1e3,So=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ro(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let u=new Date(a.date).valueOf();return Date.now()-u<=ym}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Gl(),{heartbeatsToSend:r,unsentEntries:i}=vm(this._heartbeatsCache.heartbeats),o=tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}};function Gl(){return new Date().toISOString().substring(0,10)}function vm(n,e=_m){let t=[],r=n.slice();for(let i of n){let o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),$l(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$l(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Ro=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fo()?Nl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await gm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function $l(n){return tr(JSON.stringify({version:2,heartbeats:n})).length}function Im(n){dt(new Ne("platform-logger",e=>new wo(e),"PRIVATE")),dt(new Ne("heartbeat",e=>new So(e),"PRIVATE")),Ve(Eo,Bl,n),Ve(Eo,Bl,"esm2017"),Ve("fire-js","")}Im("");var wm="firebase",Em="10.12.2";Ve(wm,Em,"app");function fi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function hh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var dh=hh,fh=new Xe("auth","Firebase",hh());var vi=new lt("@firebase/auth");function Tm(n,...e){vi.logLevel<=B.WARN&&vi.warn(`Auth (${ft}): ${n}`,...e)}function mi(n,...e){vi.logLevel<=B.ERROR&&vi.error(`Auth (${ft}): ${n}`,...e)}function ke(n,...e){throw Qo(n,...e)}function Me(n,...e){return Qo(n,...e)}function Wo(n,e,t){let r=Object.assign(Object.assign({},dh()),{[e]:t});return new Xe("auth","Firebase",r).create(e,{appName:n.name})}function mt(n){return Wo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ph(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ke(n,"argument-error"),Wo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qo(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return fh.create(n,...e)}function L(n,e,...t){if(!n)throw Qo(e,...t)}function qe(n){let e="INTERNAL ASSERTION FAILED: "+n;throw mi(e),new Error(e)}function et(n,e){n||qe(e)}function No(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Am(){return Wl()==="http:"||Wl()==="https:"}function Wl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Am()||Rl()||"connection"in navigator)?navigator.onLine:!0}function Sm(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Nt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Sl()||Pl()}get(){return bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Jo(n,e){et(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ii=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Rm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var Pm=new Nt(3e4,6e4);function le(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _e(n,e,t,r,i={}){return mh(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});let u=tn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),Ii.fetch()(gh(n,n.config.apiHost,t,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function mh(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},Rm),e);try{let i=new ko(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw ir(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let u=o.ok?a.errorMessage:a.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw ir(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw ir(n,"user-disabled",a);let p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Wo(n,p,f);ke(n,p)}}catch(i){if(i instanceof Re)throw i;ke(n,"network-request-failed",{message:String(i)})}}async function Mt(n,e,t,r,i={}){let o=await _e(n,e,t,r,i);return"mfaPendingCredential"in o&&ke(n,"multi-factor-auth-required",{_serverResponse:o}),o}function gh(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Jo(n.config,i):`${n.config.apiScheme}://${i}`}function Cm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ko=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),Pm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function ir(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Me(n,e,r);return i.customData._tokenResponse=t,i}function Ql(n){return n!==void 0&&n.enterprise!==void 0}var Oo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Cm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function Dm(n,e){return _e(n,"GET","/v2/recaptchaConfig",le(n,e))}async function Nm(n,e){return _e(n,"POST","/v1/accounts:delete",e)}async function _h(n,e){return _e(n,"POST","/v1/accounts:lookup",e)}function sr(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yh(n,e=!1){let t=re(n),r=await t.getIdToken(e),i=Yo(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:r,authTime:sr(Co(i.auth_time)),issuedAtTime:sr(Co(i.iat)),expirationTime:sr(Co(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Co(n){return Number(n)*1e3}function Yo(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{let i=co(t);return i?JSON.parse(i):(mi("Failed to decode base64 JWT payload"),null)}catch(i){return mi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Jl(n){let e=Yo(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ar(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Re&&km(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function km({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var xo=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var cr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function wi(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ar(n,_h(t,{idToken:r}));L(i?.users.length,t,"internal-error");let o=i.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ih(o.providerUserInfo):[],u=Om(n.providerData,a),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!u?.length,p=h?f:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new cr(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,E)}async function vh(n){let e=re(n);await wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Om(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ih(n){return n.map(e=>{var{providerId:t}=e,r=fi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function xm(n,e){let t=await mh(n,{},async()=>{let r=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=gh(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ii.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vm(n,e){return _e(n,"POST","/v2/accounts:revokeToken",le(n,e))}var or=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");let t=Jl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:o}=await xm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new n;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return qe("not implemented")}};function pt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var on=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new cr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){let t=await ar(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yh(this,e)}reload(){return vh(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(mt(this.auth));let e=await this.getIdToken();return await ar(this,Nm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,f,p;let E=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,P=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(u=t.tenantId)!==null&&u!==void 0?u:void 0,k=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,K=(f=t.createdAt)!==null&&f!==void 0?f:void 0,Q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:X,isAnonymous:we,providerData:J,stsTokenManager:v}=t;L(H&&v,e,"internal-error");let m=or.fromJSON(this.name,v);L(typeof H=="string",e,"internal-error"),pt(E,e.name),pt(A,e.name),L(typeof X=="boolean",e,"internal-error"),L(typeof we=="boolean",e,"internal-error"),pt(P,e.name),pt(O,e.name),pt(U,e.name),pt(k,e.name),pt(K,e.name),pt(Q,e.name);let _=new n({uid:H,auth:e,email:A,emailVerified:X,displayName:E,isAnonymous:we,photoURL:O,phoneNumber:P,tenantId:U,stsTokenManager:m,createdAt:K,lastLoginAt:Q});return J&&Array.isArray(J)&&(_.providerData=J.map(y=>Object.assign({},y))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new or;i.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wi(o),o}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];L(i.localId!==void 0,"internal-error");let o=i.providerUserInfo!==void 0?Ih(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,u=new or;u.updateFromIdToken(r);let h=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,f),h}};var Yl=new Map;function Ze(n){et(n instanceof Function,"Expected a class definition");let e=Yl.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yl.set(n,e),e)}var Ei=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ei.type="NONE";var Vo=Ei;function gi(n,e,t){return`firebase:${n}:${e}:${t}`}var Ti=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:o}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,o),this.fullPersistenceKey=gi("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Ze(Vo),e,r);let i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f),o=i[0]||Ze(Vo),a=gi(r,e.config.apiKey,e.name),u=null;for(let f of t)try{let p=await f._get(a);if(p){let E=on._fromJSON(e,p);f!==o&&(u=E),o=f;break}}catch{}let h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new n(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new n(o,e,r))}};function Xl(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bh(e))return"Blackberry";if(Sh(e))return"Webos";if(Xo(e))return"Safari";if((e.includes("chrome/")||Eh(e))&&!e.includes("edge/"))return"Chrome";if(Ah(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function wh(n=ce()){return/firefox\//i.test(n)}function Xo(n=ce()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eh(n=ce()){return/crios\//i.test(n)}function Th(n=ce()){return/iemobile/i.test(n)}function Ah(n=ce()){return/android/i.test(n)}function bh(n=ce()){return/blackberry/i.test(n)}function Sh(n=ce()){return/webos/i.test(n)}function Bi(n=ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lm(n=ce()){var e;return Bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mm(){return Cl()&&document.documentMode===10}function Rh(n=ce()){return Bi(n)||Ah(n)||Sh(n)||bh(n)||/windows phone/i.test(n)||Th(n)}function Fm(){try{return!!(window&&window!==window.top)}catch{return!1}}function Ph(n,e=[]){let t;switch(n){case"Browser":t=Xl(ce());break;case"Worker":t=`${Xl(ce())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ft}/${r}`}var Lo=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=o=>new Promise((a,u)=>{try{let h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Um(n,e={}){return _e(n,"GET","/v2/passwordPolicy",le(n,e))}var qm=6,Mo=class{constructor(e){var t,r,i,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:qm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;let h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var Fo=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ai(this),this.idTokenSubscription=new Ai(this),this.beforeStateQueue=new Lo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await _h(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Le(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&h?.user&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(mt(this));let t=e?re(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Um(this),t=new Mo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Ze(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{let h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Tm(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Ft(n){return re(n)}var Ai=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ol(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bm(n){ji=n}function Ch(n){return ji.loadJS(n)}function jm(){return ji.recaptchaEnterpriseScript}function zm(){return ji.gapiScript}function Dh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Gm="recaptcha-enterprise",$m="NO_RECAPTCHA",Uo=class{constructor(e){this.type=Gm,this.auth=Ft(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Dm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let f=new Oo(h);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,a(f.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){let h=window.grecaptcha;Ql(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(f=>{a(f)}).catch(()=>{a($m)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Ql(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=jm();h.length!==0&&(h+=u),Ch(h).then(()=>{i(u,o,a)}).catch(f=>{a(f)})}}).catch(u=>{a(u)})})}};async function Zl(n,e,t,r=!1){let i=new Uo(n),o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eh(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let o=await Zl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await Zl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}function Nh(n,e){let t=rr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),o=t.getOptions();if(Pt(o,e??{}))return i;ke(i,"already-initialized")}return t.initialize({options:e})}function Km(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ze);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function kh(n,e,t){let r=Ft(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,o=Oh(e),{host:a,port:u}=Hm(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Wm()}function Oh(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hm(n){let e=Oh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let o=i[1];return{host:o,port:th(r.substr(o.length+1))}}else{let[o,a]=r.split(":");return{host:o,port:th(a)}}}function th(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Wm(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var kt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,t){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}};async function Qm(n,e){return _e(n,"POST","/v1/accounts:signUp",e)}async function Jm(n,e){return Mt(n,"POST","/v1/accounts:signInWithPassword",le(n,e))}async function Ym(n,e){return Mt(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}async function Xm(n,e){return Mt(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}var ur=class n extends kt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eh(e,t,"signInWithPassword",Jm);case"emailLink":return Ym(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eh(e,r,"signUpPassword",Qm);case"emailLink":return Xm(e,{idToken:t,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function sn(n,e){return Mt(n,"POST","/v1/accounts:signInWithIdp",le(n,e))}var Zm="http://localhost",Ot=class n extends kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=fi(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return sn(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,sn(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,sn(e,t)}buildRequest(){let e={requestUri:Zm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}};async function eg(n,e){return _e(n,"POST","/v1/accounts:sendVerificationCode",le(n,e))}async function tg(n,e){return Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e))}async function ng(n,e){let t=await Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e));if(t.temporaryProof)throw ir(n,"account-exists-with-different-credential",t);return t}var rg={USER_NOT_FOUND:"user-not-found"};async function ig(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Mt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,t),rg)}var lr=class n extends kt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tg(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ng(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ig(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}};function sg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function og(n){let e=nn(rn(n)).link,t=e?nn(rn(e)).deep_link_id:null,r=nn(rn(n)).deep_link_id;return(r?nn(rn(r)).link:null)||r||t||e||n}var bi=class n{constructor(e){var t,r,i,o,a,u;let h=nn(rn(e)),f=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,E=sg((i=h.mode)!==null&&i!==void 0?i:null);L(f&&p&&E,"argument-error"),this.apiKey=f,this.operation=E,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=og(e);try{return new n(t)}catch{return null}}};var an=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ur._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=bi.parseLink(t);return L(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}};an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var cn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var xt=class extends cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var hr=class n extends xt{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";var Vt=class n extends xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ot._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";var dr=class n extends xt{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";var fr=class n extends xt{constructor(){super("twitter.com")}static credential(e,t){return Ot._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";var pr=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let o=await on._fromIdTokenResponse(e,r,i),a=nh(r);return new n({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=nh(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function nh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var qo=class n extends Re{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function xh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(n,o,e,r):o})}async function ag(n,e,t=!1){let r=await ar(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pr._forOperation(n,"link",r)}async function cg(n,e,t=!1){let{auth:r}=n;if(Le(r.app))return Promise.reject(mt(r));let i="reauthenticate";try{let o=await ar(n,xh(r,i,e,n),t);L(o.idToken,r,"internal-error");let a=Yo(o.idToken);L(a,r,"internal-error");let{sub:u}=a;return L(n.uid===u,r,"user-mismatch"),pr._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&ke(r,"user-mismatch"),o}}async function ug(n,e,t=!1){if(Le(n.app))return Promise.reject(mt(n));let r="signIn",i=await xh(n,r,e),o=await pr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Zo(n,e){return re(n).setPersistence(e)}function Vh(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function Lh(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function ea(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function ta(n){return re(n).signOut()}function lg(n,e){return _e(n,"POST","/v2/accounts/mfaEnrollment:start",le(n,e))}function hg(n,e){return _e(n,"POST","/v2/accounts/mfaEnrollment:finalize",le(n,e))}function dg(n,e){return _e(n,"POST","/v2/accounts/mfaEnrollment:start",le(n,e))}function fg(n,e){return _e(n,"POST","/v2/accounts/mfaEnrollment:finalize",le(n,e))}var Si="__sak";var Ri=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function pg(){let n=ce();return Xo(n)||Bi(n)}var mg=1e3,gg=10,Pi=class extends Ri{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pg()&&Fm(),this.fallbackToPolling=Rh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Mm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gg):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Pi.type="LOCAL";var zi=Pi;var Ci=class extends Ri{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ci.type="SESSION";var na=Ci;function _g(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Di=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async f=>f(t.origin,o)),h=await _g(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Di.receivers=[];function ra(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Bo=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{let f=ra("",20);i.port1.start();let p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){let A=E;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Be(){return window}function yg(n){Be().location.href=n}function Mh(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function vg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ig(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wg(){return Mh()?self:null}var Fh="firebaseLocalStorageDb",Eg=1,Ni="firebaseLocalStorage",Uh="fbase_key",Lt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Gi(n,e){return n.transaction([Ni],e?"readwrite":"readonly").objectStore(Ni)}function Tg(){let n=indexedDB.deleteDatabase(Fh);return new Lt(n).toPromise()}function jo(){let n=indexedDB.open(Fh,Eg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ni,{keyPath:Uh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ni)?e(r):(r.close(),await Tg(),e(await jo()))})})}async function rh(n,e,t){let r=Gi(n,!0).put({[Uh]:e,value:t});return new Lt(r).toPromise()}async function Ag(n,e){let t=Gi(n,!1).get(e),r=await new Lt(t).toPromise();return r===void 0?null:r.value}function ih(n,e){let t=Gi(n,!0).delete(e);return new Lt(t).toPromise()}var bg=800,Sg=3,ki=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jo(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Sg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(wg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vg(),!this.activeServiceWorker)return;this.sender=new Bo(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ig()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await jo();return await rh(e,Si,"1"),await ih(e,Si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Ag(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ih(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let o=Gi(i,!1).getAll();return new Lt(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ki.type="LOCAL";var qh=ki;function Rg(n,e){return _e(n,"POST","/v2/accounts/mfaSignIn:start",le(n,e))}function Pg(n,e){return _e(n,"POST","/v2/accounts/mfaSignIn:finalize",le(n,e))}function Cg(n,e){return _e(n,"POST","/v2/accounts/mfaSignIn:finalize",le(n,e))}var Ov=Dh("rcb"),xv=new Nt(3e4,6e4);var Dg="recaptcha";async function Ng(n,e,t){var r;let i=await t.verify();try{L(typeof i=="string",n,"argument-error"),L(t.type===Dg,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){let a=o.session;if("phoneNumber"in o)return L(a.type==="enroll",n,"internal-error"),(await lg(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(a.type==="signin",n,"internal-error");let u=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return L(u,n,"missing-multi-factor-info"),(await Rg(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:u,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await eg(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var mr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Ft(e)}verifyPhoneNumber(e,t){return Ng(this.auth,e,re(t))}static credential(e,t){return lr._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?lr._fromTokenResponse(t,r):null}};mr.PROVIDER_ID="phone";mr.PHONE_SIGN_IN_METHOD="phone";function ia(n,e){return e?Ze(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var gr=class extends kt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function kg(n){return ug(n.auth,new gr(n),n.bypassAuthState)}function Og(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),cg(t,new gr(n),n.bypassAuthState)}async function xg(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),ag(t,new gr(n),n.bypassAuthState)}var Oi=class{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}let h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kg;case"linkViaPopup":case"linkViaRedirect":return xg;case"reauthViaPopup":case"reauthViaRedirect":return Og;default:ke(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Vg=new Nt(2e3,1e4);async function sa(n,e,t){if(Le(n.app))return Promise.reject(Me(n,"operation-not-supported-in-this-environment"));let r=Ft(n);ph(n,e,cn);let i=ia(r,t);return new xi(r,"signInViaPopup",e,i).executeNotNull()}var xi=class n extends Oi{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");let e=ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vg.get())};e()}};xi.currentPopupAction=null;var Lg="pendingRedirect",_i=new Map,zo=class extends Oi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{let r=await Mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Mg(n,e){let t=jh(e),r=Bh(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function Fg(n,e){return Bh(n)._set(jh(e),"true")}function Ug(n,e){_i.set(n._key(),e)}function Bh(n){return Ze(n._redirectPersistence)}function jh(n){return gi(Lg,n.config.apiKey,n.name)}function oa(n,e,t){return qg(n,e,t)}async function qg(n,e,t){if(Le(n.app))return Promise.reject(mt(n));let r=Ft(n);ph(n,e,cn),await r._initializationPromise;let i=ia(r,t);return await Fg(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Bg(n,e,t=!1){if(Le(n.app))return Promise.reject(mt(n));let r=Ft(n),i=ia(r,e),a=await new zo(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var jg=10*60*1e3,Go=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zh(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jg&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}};function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function zg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zh(n);default:return!1}}async function Gg(n,e={}){return _e(n,"GET","/v1/projects",e)}var $g=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kg=/^https?/;async function Hg(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Gg(n);for(let t of e)try{if(Wg(t))return}catch{}ke(n,"unauthorized-domain")}function Wg(n){let e=No(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Kg.test(t))return!1;if($g.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Qg=new Nt(3e4,6e4);function oh(){let n=Be().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jg(n){return new Promise((e,t)=>{var r,i,o;function a(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),t(Me(n,"network-request-failed"))},timeout:Qg.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Be().gapi)===null||o===void 0)&&o.load)a();else{let u=Dh("iframefcb");return Be()[u]=()=>{gapi.load?a():t(Me(n,"network-request-failed"))},Ch(`${zm()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw yi=null,e})}var yi=null;function Yg(n){return yi=yi||Jg(n),yi}var Xg=new Nt(5e3,15e3),Zg="__/auth/iframe",e_="emulator/auth/iframe",t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r_(n){let e=n.config;L(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Jo(e,e_):`https://${n.config.authDomain}/${Zg}`,r={apiKey:e.apiKey,appName:n.name,v:ft},i=n_.get(n.config.apiHost);i&&(r.eid=i);let o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${tn(r).slice(1)}`}async function i_(n){let e=await Yg(n),t=Be().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:r_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});let a=Me(n,"network-request-failed"),u=Be().setTimeout(()=>{o(a)},Xg.get());function h(){Be().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}var s_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,a_=600,c_="_blank",u_="http://localhost",Vi=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function l_(n,e,t,r=o_,i=a_){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",h=Object.assign(Object.assign({},s_),{width:r.toString(),height:i.toString(),top:o,left:a}),f=ce().toLowerCase();t&&(u=Eh(f)?c_:t),wh(f)&&(e=e||u_,h.scrollbars="yes");let p=Object.entries(h).reduce((A,[P,O])=>`${A}${P}=${O},`,"");if(Lm(f)&&u!=="_self")return h_(e||"",u),new Vi(null);let E=window.open(e||"",u,p);L(E,n,"popup-blocked");try{E.focus()}catch{}return new Vi(E)}function h_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var d_="__/auth/handler",f_="emulator/auth/handler",p_=encodeURIComponent("fac");async function ah(n,e,t,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ft,eventId:i};if(e instanceof cn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",kl(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,E]of Object.entries(o||{}))a[p]=E}if(e instanceof xt){let p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let h=await n._getAppCheckToken(),f=h?`#${p_}=${encodeURIComponent(h)}`:"";return`${m_(n)}?${tn(u).slice(1)}${f}`}function m_({config:n}){return n.emulator?Jo(n,f_):`https://${n.authDomain}/${d_}`}var Do="webStorageSupport",$o=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=na,this._completeRedirectFn=Bg,this._overrideRedirectResult=Ug}async _openPopup(e,t,r,i){var o;et((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");let a=await ah(e,t,r,No(),i);return l_(e,a,ra())}async _openRedirect(e,t,r,i){await this._originValidation(e);let o=await ah(e,t,r,No(),i);return yg(o),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(et(o,"If manager is not set, promise should be"),o)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await i_(e),r=new Go(e);return t.register("authEvent",i=>(L(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Do,{type:Do},i=>{var o;let a=(o=i?.[0])===null||o===void 0?void 0:o[Do];a!==void 0&&t(!!a),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rh()||Xo()||Bi()}},Gh=$o,Li=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return qe("unexpected MultiFactorSessionType")}}},Ko=class n extends Li{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return hg(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Pg(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Mi=class{constructor(){}static assertion(e){return Ko._fromCredential(e)}};Mi.FACTOR_ID="phone";var Fi=class{static assertionForEnrollment(e,t){return Ui._fromSecret(e,t)}static assertionForSignIn(e,t){return Ui._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;L(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await dg(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return qi._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Fi.FACTOR_ID="totp";var Ui=class n extends Li{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return L(typeof this.secret<"u",e,"argument-error"),fg(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){L(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Cg(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},qi=class n{constructor(e,t,r,i,o,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(pi(e)||pi(t))&&(i=!0),i&&(pi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),pi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function pi(n){return typeof n>"u"||n?.length===0}var ch="@firebase/auth",uh="1.7.4";var Ho=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function g_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function __(n){dt(new Ne("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ph(n)},f=new Fo(r,i,o,h);return Km(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dt(new Ne("auth-internal",e=>{let t=Ft(e.getProvider("auth").getImmediate());return(r=>new Ho(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(ch,uh,g_(n)),Ve(ch,uh,"esm2017")}var y_=5*60,v_=ho("authIdTokenMaxAge")||y_,lh=null,I_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>v_)return;let i=t?.token;lh!==i&&(lh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aa(n=di()){let e=rr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Nh(n,{popupRedirectResolver:Gh,persistence:[qh,zi,na]}),r=ho("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let o=new URL(r,location.origin);if(location.origin===o.origin){let a=I_(o.toString());Lh(t,a,()=>a(t.currentUser)),Vh(t,u=>a(u))}}let i=uo("auth");return i&&kh(t,`http://${i}`),t}function w_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bm({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let o=Me("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});__("Browser");var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kh={};var gt,ca;(function(){var n;function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,I,T){for(var g=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)g[Qe-2]=arguments[Qe];return m.prototype[I].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)y[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)y[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],I=v.g[2];var T=v.g[3],g=m+(T^_&(I^T))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[1]+3905402710&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[2]+606105819&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[5]+1200080426&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[6]+2821735955&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[9]+2336552879&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[10]+4294925233&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(T^_&(I^T))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=T+(I^m&(_^I))+y[13]+4254626195&4294967295,T=m+(g<<12&4294967295|g>>>20),g=I+(_^T&(m^_))+y[14]+2792965006&4294967295,I=T+(g<<17&4294967295|g>>>15),g=_+(m^I&(T^m))+y[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^T&(_^I))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[6]+3225465664&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[11]+643717713&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[10]+38016083&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[15]+3634488961&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[14]+3275163606&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[3]+4107603335&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^T&(_^I))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=T+(_^I&(m^_))+y[2]+4243563512&4294967295,T=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(T^m))+y[7]+1735328473&4294967295,I=T+(g<<14&4294967295|g>>>18),g=_+(T^m&(I^T))+y[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^T)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[8]+2272392833&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[11]+1839030562&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[4]+1272893353&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[7]+4139469664&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[0]+3936430074&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[3]+3572445317&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^T)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=T+(m^_^I)+y[12]+3873151461&4294967295,T=m+(g<<11&4294967295|g>>>21),g=I+(T^m^_)+y[15]+530742520&4294967295,I=T+(g<<16&4294967295|g>>>16),g=_+(I^T^m)+y[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~T))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[7]+1126891415&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[14]+2878612391&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[3]+2399980690&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[10]+4293915773&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[15]+4264355552&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[6]+2734768916&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~T))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=T+(_^(m|~I))+y[11]+3174756917&4294967295,T=m+(g<<10&4294967295|g>>>22),g=I+(m^(T|~_))+y[2]+718787259&4294967295,I=T+(g<<15&4294967295|g>>>17),g=_+(T^(I|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=_;)i(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<m;)if(y[I++]=v.charCodeAt(T++),I==this.blockSize){i(this,y),I=0;break}}else for(;T<m;)if(y[I++]=v[T++],I==this.blockSize){i(this,y),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,I=v.length-1;0<=I;I--){var T=v[I]|0;y&&T==m||(_[I]=T,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return k(f(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return k(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=E,I=0;I<v.length;I+=8){var T=Math.min(8,v.length-I),g=parseInt(v.substring(I,I+T),m);8>T?(T=f(Math.pow(m,T)),y=y.j(T).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(U(this))return-k(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(U(this))return"-"+k(this).toString(v);for(var m=f(Math.pow(v,6)),_=this,y="";;){var I=X(_,m).g;_=K(_,I.j(m));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=I,O(_))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function U(v){return v.h==-1}n.l=function(v){return v=K(this,v),U(v)?-1:O(v)?0:1};function k(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(A)}n.abs=function(){return U(this)?k(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,I=0;I<=m;I++){var T=y+(this.i(I)&65535)+(v.i(I)&65535),g=(T>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);y=g>>>16,T&=65535,g&=65535,_[I]=g<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(v,m){return v.add(k(m))}n.j=function(v){if(O(this)||O(v))return E;if(U(this))return U(v)?k(this).j(k(v)):k(k(this).j(v));if(U(v))return k(this.j(k(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<v.g.length;I++){var T=this.i(y)>>>16,g=this.i(y)&65535,Qe=v.i(I)>>>16,Ln=v.i(I)&65535;_[2*y+2*I]+=g*Ln,Q(_,2*y+2*I),_[2*y+2*I+1]+=T*Ln,Q(_,2*y+2*I+1),_[2*y+2*I+1]+=g*Qe,Q(_,2*y+2*I+1),_[2*y+2*I+2]+=T*Qe,Q(_,2*y+2*I+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function Q(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function X(v,m){if(O(m))throw Error("division by zero");if(O(v))return new H(E,E);if(U(v))return m=X(k(v),m),new H(k(m.g),k(m.h));if(U(m))return m=X(v,k(m)),new H(k(m.g),m.h);if(30<v.g.length){if(U(v)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(v);)_=we(_),y=we(y);var I=J(_,1),T=J(y,1);for(y=J(y,2),_=J(_,2);!O(y);){var g=T.add(y);0>=g.l(v)&&(I=I.add(_),T=g),y=J(y,1),_=J(_,1)}return m=K(v,I.j(m)),new H(I,m)}for(I=E;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=f(_),g=T.j(m);U(g)||0<g.l(v);)_-=y,T=f(_),g=T.j(m);O(T)&&(T=A),I=I.add(T),v=K(v,g)}return new H(I,v)}n.A=function(v){return X(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function we(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function J(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,I=[],T=0;T<y;T++)I[T]=0<m?v.i(T+_)>>>m|v.i(T+_+1)<<32-m:v.i(T+_);return new a(I,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ca=Kh.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,gt=Kh.Integer=a}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tt={};var ua,la,un,ha,_r,Ki,da,fa,pa;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var w=s[d];if(!(w in l))break e;l=l[w]}s=s[s.length-1],d=l[s],c=c(d),c!=d&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,d=!1,w={next:function(){if(!d&&l<s.length){var b=l++;return{value:c(b,s[b]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function f(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function E(s,c,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function A(s,c,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,A.apply(null,arguments)}function P(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function O(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,w,b){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return c.prototype[w].apply(d,D)}}function U(s){let c=s.length;if(0<c){let l=Array(c);for(let d=0;d<c;d++)l[d]=s[d];return l}return[]}function k(s,c){for(let l=1;l<arguments.length;l++){let d=arguments[l];if(h(d)){let w=s.length||0,b=d.length||0;s.length=w+b;for(let D=0;D<b;D++)s[w+D]=d[D]}else s.push(d)}}class K{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Q(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function X(s){return X[" "](s),s}X[" "]=function(){};var we=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function J(s,c,l){for(let d in s)c.call(l,s[d],d,s)}function v(s,c){for(let l in s)c.call(void 0,s[l],l,s)}function m(s){let c={};for(let l in s)c[l]=s[l];return c}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(l in d)s[l]=d[l];for(let b=0;b<_.length;b++)l=_[b],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function I(s){var c=1;s=s.split(":");let l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function T(s){u.setTimeout(()=>{throw s},0)}function g(){var s=xs;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Qe{constructor(){this.h=this.g=null}add(c,l){let d=Ln.get();d.set(c,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Ln=new K(()=>new Nf,s=>s.reset());class Nf{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Mn,Fn=!1,xs=new Qe,Iu=()=>{let s=u.Promise.resolve(void 0);Mn=()=>{s.then(kf)}};var kf=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){T(l)}var c=Ln;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Fn=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Of=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{let l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Un(s,c){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(we){e:{try{X(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:xf[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Un.aa.h.call(this)}}O(Un,fe);var xf={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),Vf=0;function Lf(s,c,l,d,w){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!d,this.ha=w,this.key=++Vf,this.da=this.fa=!1}function Gr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function $r(s){this.src=s,this.g={},this.h=0}$r.prototype.add=function(s,c,l,d,w){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var D=Ls(s,c,d,w);return-1<D?(c=s[D],l||(c.fa=!1)):(c=new Lf(c,this.src,b,!!d,w),c.fa=l,s.push(c)),c};function Vs(s,c){var l=c.type;if(l in s.g){var d=s.g[l],w=Array.prototype.indexOf.call(d,c,void 0),b;(b=0<=w)&&Array.prototype.splice.call(d,w,1),b&&(Gr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ls(s,c,l,d){for(var w=0;w<s.length;++w){var b=s[w];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==d)return w}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),Fs={};function wu(s,c,l,d,w){if(d&&d.once)return Tu(s,c,l,d,w);if(Array.isArray(c)){for(var b=0;b<c.length;b++)wu(s,c[b],l,d,w);return null}return l=js(l),s&&s[qn]?s.K(c,l,f(d)?!!d.capture:!!d,w):Eu(s,c,l,!1,d,w)}function Eu(s,c,l,d,w,b){if(!c)throw Error("Invalid event type");var D=f(w)?!!w.capture:!!w,Y=qs(s);if(Y||(s[Ms]=Y=new $r(s)),l=Y.add(c,l,d,D,b),l.proxy)return l;if(d=Mf(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Of||(w=D),w===void 0&&(w=!1),s.addEventListener(c.toString(),d,w);else if(s.attachEvent)s.attachEvent(bu(c.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Mf(){function s(l){return c.call(s.src,s.listener,l)}let c=Ff;return s}function Tu(s,c,l,d,w){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Tu(s,c[b],l,d,w);return null}return l=js(l),s&&s[qn]?s.L(c,l,f(d)?!!d.capture:!!d,w):Eu(s,c,l,!0,d,w)}function Au(s,c,l,d,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)Au(s,c[b],l,d,w);else d=f(d)?!!d.capture:!!d,l=js(l),s&&s[qn]?(s=s.i,c=String(c).toString(),c in s.g&&(b=s.g[c],l=Ls(b,l,d,w),-1<l&&(Gr(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete s.g[c],s.h--)))):s&&(s=qs(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ls(c,l,d,w)),(l=-1<s?c[s]:null)&&Us(l))}function Us(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[qn])Vs(c.i,s);else{var l=s.type,d=s.proxy;c.removeEventListener?c.removeEventListener(l,d,s.capture):c.detachEvent?c.detachEvent(bu(l),d):c.addListener&&c.removeListener&&c.removeListener(d),(l=qs(c))?(Vs(l,s),l.h==0&&(l.src=null,c[Ms]=null)):Gr(s)}}}function bu(s){return s in Fs?Fs[s]:Fs[s]="on"+s}function Ff(s,c){if(s.da)s=!0;else{c=new Un(c,this);var l=s.listener,d=s.ha||s.src;s.fa&&Us(s),s=l.call(d,c)}return s}function qs(s){return s=s[Ms],s instanceof $r?s:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function js(s){return typeof s=="function"?s:(s[Bs]||(s[Bs]=function(c){return s.handleEvent(c)}),s[Bs])}function pe(){ot.call(this),this.i=new $r(this),this.M=this,this.F=null}O(pe,ot),pe.prototype[qn]=!0,pe.prototype.removeEventListener=function(s,c,l,d){Au(this,s,c,l,d)};function Ee(s,c){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=c.type||c,typeof c=="string")c=new fe(c,s);else if(c instanceof fe)c.target=c.target||s;else{var w=c;c=new fe(d,s),y(c,w)}if(w=!0,l)for(var b=l.length-1;0<=b;b--){var D=c.g=l[b];w=Kr(D,d,!0,c)&&w}if(D=c.g=s,w=Kr(D,d,!0,c)&&w,w=Kr(D,d,!1,c)&&w,l)for(b=0;b<l.length;b++)D=c.g=l[b],w=Kr(D,d,!1,c)&&w}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],d=0;d<l.length;d++)Gr(l[d]);delete s.g[c],s.h--}}this.F=null},pe.prototype.K=function(s,c,l,d){return this.i.add(String(s),c,!1,l,d)},pe.prototype.L=function(s,c,l,d){return this.i.add(String(s),c,!0,l,d)};function Kr(s,c,l,d){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,b=0;b<c.length;++b){var D=c[b];if(D&&!D.da&&D.capture==l){var Y=D.listener,de=D.ha||D.src;D.fa&&Vs(s.i,D),w=Y.call(de,d)!==!1&&w}}return w&&!d.defaultPrevented}function Su(s,c,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Ru(s){s.g=Su(()=>{s.g=null,s.i&&(s.i=!1,Ru(s))},s.l);let c=s.h;s.h=null,s.m.apply(null,c)}class Uf extends ot{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ru(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bn(s){ot.call(this),this.h=s,this.g={}}O(Bn,ot);var Pu=[];function Cu(s){J(s.g,function(c,l){this.g.hasOwnProperty(l)&&Us(c)},s),s.g={}}Bn.prototype.N=function(){Bn.aa.N.call(this),Cu(this)},Bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zs=u.JSON.stringify,qf=u.JSON.parse,Bf=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Gs(){}Gs.prototype.h=null;function Du(s){return s.h||(s.h=s.i())}function Nu(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $s(){fe.call(this,"d")}O($s,fe);function Ks(){fe.call(this,"c")}O(Ks,fe);var At={},ku=null;function Hr(){return ku=ku||new pe}At.La="serverreachability";function Ou(s){fe.call(this,At.La,s)}O(Ou,fe);function zn(s){let c=Hr();Ee(c,new Ou(c))}At.STAT_EVENT="statevent";function xu(s,c){fe.call(this,At.STAT_EVENT,s),this.stat=c}O(xu,fe);function Te(s){let c=Hr();Ee(c,new xu(c,s))}At.Ma="timingevent";function Vu(s,c){fe.call(this,At.Ma,s),this.size=c}O(Vu,fe);function Gn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function jf(s,c,l,d,w,b){s.info(function(){if(s.g)if(b)for(var D="",Y=b.split("&"),de=0;de<Y.length;de++){var $=Y[de].split("=");if(1<$.length){var me=$[0];$=$[1];var ge=me.split("_");D=2<=ge.length&&ge[1]=="type"?D+(me+"="+$+"&"):D+(me+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+c+`
`+l+`
`+D})}function zf(s,c,l,d,w,b,D){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+c+`
`+l+`
`+b+" "+D})}function Yt(s,c,l,d){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+$f(s,l)+(d?" "+d:"")})}function Gf(s,c){s.info(function(){return"TIMEOUT: "+c})}$n.prototype.info=function(){};function $f(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return zs(l)}catch{return c}}var Wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hs;function Qr(){}O(Qr,Gs),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Hs=new Qr;function at(s,c,l,d){this.j=s,this.i=c,this.l=l,this.R=d||1,this.U=new Bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var Fu={},Ws={};function Qs(s,c,l){s.L=1,s.v=Zr(Je(c)),s.m=l,s.P=!0,Uu(s,null)}function Uu(s,c){s.F=Date.now(),Jr(s),s.A=Je(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Zu(l.i,"t",d),s.C=0,l=s.j.J,s.h=new Mu,s.g=_l(s.j,l?c:null,!s.m),0<s.O&&(s.M=new Uf(A(s.Y,s,s.g),s.O)),c=s.U,l=s.g,d=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(Pu[0]=w.toString()),w=Pu);for(var b=0;b<w.length;b++){var D=wu(l,w[b],d||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),zn(),jf(s.i,s.u,s.A,s.l,s.R,s.m)}at.prototype.ca=function(s){s=s.target;let c=this.M;c&&Ye(s)==3?c.j():this.Y(s)},at.prototype.Y=function(s){try{if(s==this.g)e:{let ge=Ye(this.g);var c=this.g.Ba();let en=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||ol(this.g)))){this.J||ge!=4||c==7||(c==8||0>=en?zn(3):zn(2)),Js(this);var l=this.g.Z();this.X=l;t:if(qu(this)){var d=ol(this.g);s="";var w=d.length,b=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),Kn(this);var D="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(d[c],{stream:!(b&&c==w-1)});d.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,zf(this.i,this.u,this.A,this.l,this.R,ge,l),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,de=this.g;if((Y=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Y)){var $=Y;break t}}$=null}if(l=$)Yt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ys(this,l);else{this.o=!1,this.s=3,Te(12),bt(this),Kn(this);break e}}if(this.P){l=!0;let xe;for(;!this.J&&this.C<D.length;)if(xe=Kf(this,D),xe==Ws){ge==4&&(this.s=4,Te(14),l=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Fu){this.s=4,Te(15),Yt(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Yt(this.i,this.l,xe,null),Ys(this,xe);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||D.length!=0||this.h.h||(this.s=1,Te(16),l=!1),this.o=this.o&&l,!l)Yt(this.i,this.l,D,"[Invalid Chunked Response]"),bt(this),Kn(this);else if(0<D.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ro(me),me.M=!0,Te(11))}}else Yt(this.i,this.l,D,null),Ys(this,D);ge==4&&bt(this),this.o&&!this.J&&(ge==4?fl(this.j,this):(this.o=!1,Jr(this)))}else up(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),bt(this),Kn(this)}}}catch{}finally{}};function qu(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Kf(s,c){var l=s.C,d=c.indexOf(`
`,l);return d==-1?Ws:(l=Number(c.substring(l,d)),isNaN(l)?Fu:(d+=1,d+l>c.length?Ws:(c=c.slice(d,d+l),s.C=d+l,c)))}at.prototype.cancel=function(){this.J=!0,bt(this)};function Jr(s){s.S=Date.now()+s.I,Bu(s,s.I)}function Bu(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Gn(A(s.ba,s),c)}function Js(s){s.B&&(u.clearTimeout(s.B),s.B=null)}at.prototype.ba=function(){this.B=null;let s=Date.now();0<=s-this.S?(Gf(this.i,this.A),this.L!=2&&(zn(),Te(17)),bt(this),this.s=2,Kn(this)):Bu(this,this.S-s)};function Kn(s){s.j.G==0||s.J||fl(s.j,s)}function bt(s){Js(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Cu(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Ys(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Xs(l.h,s))){if(!s.K&&Xs(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)ii(l),ni(l);else break e;no(l),Te(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=Gn(A(l.Za,l),6e3));if(1>=Gu(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Rt(l,11)}else if((s.K||l.g==s)&&ii(l),!Q(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let $=w[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];let me=$[3];me!=null&&(l.la=me,l.j.info("VER="+l.la));let ge=$[4];ge!=null&&(l.Aa=ge,l.j.info("SVER="+l.Aa));let en=$[5];en!=null&&typeof en=="number"&&0<en&&(d=1.5*en,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;let xe=s.g;if(xe){let oi=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var b=d.h;b.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Zs(b,b.h),b.h=null))}if(d.D){let io=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(d.ya=io,Z(d.I,d.D,io))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var D=s;if(d.qa=gl(d,d.J?d.ia:null,d.W),D.K){$u(d.h,D);var Y=D,de=d.L;de&&(Y.I=de),Y.B&&(Js(Y),Jr(Y)),d.g=D}else hl(d);0<l.i.length&&ri(l)}else $[0]!="stop"&&$[0]!="close"||Rt(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Rt(l,7):to(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}zn(4)}catch{}}var Hf=class{constructor(s,c){this.g=s,this.map=c}};function ju(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Gu(s){return s.h?1:s.g?s.g.size:0}function Xs(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Zs(s,c){s.g?s.g.add(c):s.h=c}function $u(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}ju.prototype.cancel=function(){if(this.i=Ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let s of this.g.values())s.cancel();this.g.clear()}};function Ku(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(let l of s.g.values())c=c.concat(l.D);return c}return U(s.i)}function Wf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,d=0;d<l;d++)c.push(s[d]);return c}c=[],l=0;for(d in s)c[l++]=s[d];return c}function Qf(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(let d in s)c[l++]=d;return c}}}function Hu(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=Qf(s),d=Wf(s),w=d.length,b=0;b<w;b++)c.call(void 0,d[b],l&&l[b],s)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jf(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),w=null;if(0<=d){var b=s[l].substring(0,d);w=s[l].substring(d+1)}else b=s[l];c(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function St(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof St){this.h=s.h,Yr(this,s.j),this.o=s.o,this.g=s.g,Xr(this,s.s),this.l=s.l;var c=s.i,l=new Qn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Qu(this,l),this.m=s.m}else s&&(c=String(s).match(Wu))?(this.h=!1,Yr(this,c[1]||"",!0),this.o=Hn(c[2]||""),this.g=Hn(c[3]||"",!0),Xr(this,c[4]),this.l=Hn(c[5]||"",!0),Qu(this,c[6]||"",!0),this.m=Hn(c[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}St.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Wn(c,Ju,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Wn(c,Ju,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Wn(l,l.charAt(0)=="/"?Zf:Xf,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Wn(l,tp)),s.join("")};function Je(s){return new St(s)}function Yr(s,c,l){s.j=l?Hn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Xr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Qu(s,c,l){c instanceof Qn?(s.i=c,np(s.i,s.h)):(l||(c=Wn(c,ep)),s.i=new Qn(c,s.h))}function Z(s,c,l){s.i.set(c,l)}function Zr(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Hn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Wn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,Yf),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Yf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ju=/[#\/\?@]/g,Xf=/[#\?:]/g,Zf=/[#\?]/g,ep=/[#\?@]/g,tp=/#/g;function Qn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ct(s){s.g||(s.g=new Map,s.h=0,s.i&&Jf(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Qn.prototype,n.add=function(s,c){ct(this),this.i=null,s=Xt(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Yu(s,c){ct(s),c=Xt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Xu(s,c){return ct(s),c=Xt(s,c),s.g.has(c)}n.forEach=function(s,c){ct(this),this.g.forEach(function(l,d){l.forEach(function(w){s.call(c,w,d,this)},this)},this)},n.na=function(){ct(this);let s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let d=0;d<c.length;d++){let w=s[d];for(let b=0;b<w.length;b++)l.push(c[d])}return l},n.V=function(s){ct(this);let c=[];if(typeof s=="string")Xu(this,s)&&(c=c.concat(this.g.get(Xt(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return ct(this),this.i=null,s=Xt(this,s),Xu(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Zu(s,c,l){Yu(s,c),0<l.length&&(s.i=null,s.g.set(Xt(s,c),U(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var d=c[l];let b=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var w=b;D[d]!==""&&(w+="="+encodeURIComponent(String(D[d]))),s.push(w)}}return this.i=s.join("&")};function Xt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function np(s,c){c&&!s.j&&(ct(s),s.i=null,s.g.forEach(function(l,d){var w=d.toLowerCase();d!=w&&(Yu(this,d),Zu(this,w,l))},s)),s.j=c}function rp(s,c){let l=new $n;if(u.Image){let d=new Image;d.onload=P(ut,l,"TestLoadImage: loaded",!0,c,d),d.onerror=P(ut,l,"TestLoadImage: error",!1,c,d),d.onabort=P(ut,l,"TestLoadImage: abort",!1,c,d),d.ontimeout=P(ut,l,"TestLoadImage: timeout",!1,c,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else c(!1)}function ip(s,c){let l=new $n,d=new AbortController,w=setTimeout(()=>{d.abort(),ut(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:d.signal}).then(b=>{clearTimeout(w),b.ok?ut(l,"TestPingServer: ok",!0,c):ut(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ut(l,"TestPingServer: error",!1,c)})}function ut(s,c,l,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(l)}catch{}}function sp(){this.g=new Bf}function op(s,c,l){let d=l||"";try{Hu(s,function(w,b){let D=w;f(w)&&(D=zs(w)),c.push(d+b+"="+encodeURIComponent(D))})}catch(w){throw c.push(d+"type="+encodeURIComponent("_badmap")),w}}function Jn(s){this.l=s.Ub||null,this.j=s.eb||!1}O(Jn,Gs),Jn.prototype.g=function(){return new ei(this.l,this.j)},Jn.prototype.i=function(s){return function(){return s}}({});function ei(s,c){pe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(ei,pe),n=ei.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Xn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;el(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function el(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Yn(this):Xn(this),this.readyState==3&&el(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Yn(this))},n.Qa=function(s){this.g&&(this.response=s,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Xn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function tl(s){let c="";return J(s,function(l,d){c+=d,c+=":",c+=l,c+=`\r
`}),c}function eo(s,c,l){e:{for(d in l){var d=!1;break e}d=!0}d||(l=tl(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Z(s,c,l))}function ne(s){pe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ne,pe);var ap=/^https?$/i,cp=["POST","PUT"];n=ne.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hs.g(),this.v=this.o?Du(this.o):Du(Hs),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(b){nl(this,b);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)l.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(let b of d.keys())l.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),w=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(cp,c,void 0))||d||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[b,D]of l)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sl(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){nl(this,b)}};function nl(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,rl(s),ti(s)}function rl(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?il(this):this.bb())},n.bb=function(){il(this)};function il(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ye(s)!=4||s.Z()!=2)){if(s.u&&Ye(s)==4)Su(s.Ea,0,s);else if(Ee(s,"readystatechange"),Ye(s)==4){s.h=!1;try{let D=s.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var d;if(d=D===0){var w=String(s.D).match(Wu)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),d=!ap.test(w?w.toLowerCase():"")}l=d}if(l)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var b=2<Ye(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",rl(s)}}finally{ti(s)}}}}function ti(s,c){if(s.g){sl(s);let l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{l.onreadystatechange=d}catch{}}}function sl(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ye(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),qf(c)}};function ol(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function up(s){let c={};s=(s.g&&2<=Ye(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(Q(s[d]))continue;var l=I(s[d]);let w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();let b=c[w]||[];c[w]=b,b.push(l)}v(c,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function al(s){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,s),this.cb=Zn("retryDelaySeedMs",1e4,s),this.Wa=Zn("forwardChannelMaxRetries",2,s),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ju(s&&s.concurrentRequestLimit),this.Da=new sp,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=al.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,d){Te(0),this.W=s,this.H=c||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=gl(this,null,this.W),ri(this)};function to(s){if(cl(s),s.G==3){var c=s.U++,l=Je(s.I);if(Z(l,"SID",s.K),Z(l,"RID",c),Z(l,"TYPE","terminate"),er(s,l),c=new at(s,s.j,c),c.L=2,c.v=Zr(Je(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=_l(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jr(c)}ml(s)}function ni(s){s.g&&(ro(s),s.g.cancel(),s.g=null)}function cl(s){ni(s),s.u&&(u.clearTimeout(s.u),s.u=null),ii(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ri(s){if(!zu(s.h)&&!s.s){s.s=!0;var c=s.Ga;Mn||Iu(),Fn||(Mn(),Fn=!0),xs.add(c,s),s.B=0}}function lp(s,c){return Gu(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Gn(A(s.Ga,s,c),pl(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;let w=new at(this,this.j,s),b=this.o;if(this.S&&(b?(b=m(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=ll(this,w,c),l=Je(this.I),Z(l,"RID",s),Z(l,"CVER",22),this.D&&Z(l,"X-HTTP-Session-Id",this.D),er(this,l),b&&(this.O?c="headers="+encodeURIComponent(String(tl(b)))+"&"+c:this.m&&eo(l,this.m,b)),Zs(this.h,w),this.Ua&&Z(l,"TYPE","init"),this.P?(Z(l,"$req",c),Z(l,"SID","null"),w.T=!0,Qs(w,l,null)):Qs(w,l,c),this.G=2}}else this.G==3&&(s?ul(this,s):this.i.length==0||zu(this.h)||ul(this))};function ul(s,c){var l;c?l=c.l:l=s.U++;let d=Je(s.I);Z(d,"SID",s.K),Z(d,"RID",l),Z(d,"AID",s.T),er(s,d),s.m&&s.o&&eo(d,s.m,s.o),l=new at(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=ll(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Zs(s.h,l),Qs(l,d,c)}function er(s,c){s.H&&J(s.H,function(l,d){Z(c,d,l)}),s.l&&Hu({},function(l,d){Z(c,d,l)})}function ll(s,c,l){l=Math.min(s.i.length,l);var d=s.l?A(s.l.Na,s.l,s):null;e:{var w=s.i;let b=-1;for(;;){let D=["count="+l];b==-1?0<l?(b=w[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let Y=!0;for(let de=0;de<l;de++){let $=w[de].g,me=w[de].map;if($-=b,0>$)b=Math.max(0,w[de].g-100),Y=!1;else try{op(me,D,"req"+$+"_")}catch{d&&d(me)}}if(Y){d=D.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,d}function hl(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Mn||Iu(),Fn||(Mn(),Fn=!0),xs.add(c,s),s.v=0}}function no(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Gn(A(s.Fa,s),pl(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Gn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),ni(this),dl(this))};function ro(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function dl(s){s.g=new at(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Je(s.qa);Z(c,"RID","rpc"),Z(c,"SID",s.K),Z(c,"AID",s.T),Z(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(c,"TO",s.ja),Z(c,"TYPE","xmlhttp"),er(s,c),s.m&&s.o&&eo(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Zr(Je(c)),l.m=null,l.P=!0,Uu(l,s)}n.Za=function(){this.C!=null&&(this.C=null,ni(this),no(this),Te(19))};function ii(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function fl(s,c){var l=null;if(s.g==c){ii(s),ro(s),s.g=null;var d=2}else if(Xs(s.h,c))l=c.D,$u(s.h,c),d=1;else return;if(s.G!=0){if(c.o)if(d==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;d=Hr(),Ee(d,new Vu(d,l)),ri(s)}else hl(s);else if(w=c.s,w==3||w==0&&0<c.X||!(d==1&&lp(s,c)||d==2&&no(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),w){case 1:Rt(s,5);break;case 4:Rt(s,10);break;case 3:Rt(s,6);break;default:Rt(s,2)}}}function pl(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function Rt(s,c){if(s.j.info("Error code "+c),c==2){var l=A(s.fb,s),d=s.Xa;let w=!d;d=new St(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yr(d,"https"),Zr(d),w?rp(d.toString(),l):ip(d.toString(),l)}else Te(2);s.G=0,s.l&&s.l.sa(c),ml(s),cl(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function ml(s){if(s.G=0,s.ka=[],s.l){let c=Ku(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ka,c),k(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function gl(s,c,l){var d=l instanceof St?Je(l):new St(l);if(d.g!="")c&&(d.g=c+"."+d.g),Xr(d,d.s);else{var w=u.location;d=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var b=new St(null);d&&Yr(b,d),c&&(b.g=c),w&&Xr(b,w),l&&(b.l=l),d=b}return l=s.D,c=s.ya,l&&c&&Z(d,l,c),Z(d,"VER",s.la),er(s,d),d}function _l(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ne(new Jn({eb:l})):new ne(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yl(){}n=yl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function si(){}si.prototype.g=function(s,c){return new Se(s,c)};function Se(s,c){pe.call(this),this.g=new al(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!Q(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Q(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Zt(this)}O(Se,pe),Se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Se.prototype.close=function(){to(this.g)},Se.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=zs(s),s=l);c.i.push(new Hf(c.Ya++,s)),c.G==3&&ri(c)},Se.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,Se.aa.N.call(this)};function vl(s){$s.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(let l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}O(vl,$s);function Il(){Ks.call(this),this.status=1}O(Il,Ks);function Zt(s){this.g=s}O(Zt,yl),Zt.prototype.ua=function(){Ee(this.g,"a")},Zt.prototype.ta=function(s){Ee(this.g,new vl(s))},Zt.prototype.sa=function(s){Ee(this.g,new Il)},Zt.prototype.ra=function(){Ee(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,Se.prototype.send=Se.prototype.o,Se.prototype.open=Se.prototype.m,Se.prototype.close=Se.prototype.close,pa=tt.createWebChannelTransport=function(){return new si},fa=tt.getStatEventTarget=function(){return Hr()},da=tt.Event=At,Ki=tt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,_r=tt.ErrorCode=Wr,Lu.COMPLETE="complete",ha=tt.EventType=Lu,Nu.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",pe.prototype.listen=pe.prototype.K,un=tt.WebChannel=Nu,la=tt.FetchXmlHttpFactory=Jn,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,ua=tt.XhrIo=ne}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var Hh="@firebase/firestore";var he=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");var On="10.12.1";var jt=new lt("@firebase/firestore");function yr(){return jt.logLevel}function x(n,...e){if(jt.logLevel<=B.DEBUG){let t=e.map(Qc);jt.debug(`Firestore (${On}): ${n}`,...t)}}function rt(n,...e){if(jt.logLevel<=B.ERROR){let t=e.map(Qc);jt.error(`Firestore (${On}): ${n}`,...t)}}function gn(n,...e){if(jt.logLevel<=B.WARN){let t=e.map(Qc);jt.warn(`Firestore (${On}): ${n}`,...t)}}function Qc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+n;throw rt(e),new Error(e)}function te(n,e){n||M()}function j(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ge=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ji=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},va=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}},Ia=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},wa=class{constructor(e){this.t=e,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve(),o=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){let h=this.t.getImmediate({optional:!0});h?u(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ge)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Ji(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new he(e)}},Ea=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=he.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Ta=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ea(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Aa=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},ba=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};let i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new Aa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function E_(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Yi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=E_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}};function W(n,e){return n<e?-1:n>e?1:0}function _n(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var ve=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var q=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new ve(0,0))}static max(){return new n(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Xi=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},ee=class n extends Xi{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},T_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Oe=class n extends Xi{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return T_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,o=()=>{if(r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var F=class n{constructor(e){this.path=e}static fromPath(e){return new n(ee.fromString(e))}static fromName(e){return new n(ee.fromString(e).popFirst(5))}static empty(){return new n(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ee(e.slice()))}};var Sa=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};Sa.UNKNOWN_ID=-1;function A_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new ve(t+1,0):new ve(t,r));return new zt(i,F.empty(),e)}function b_(n){return new zt(n.readTime,n.key,-1)}var zt=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(q.min(),F.empty(),-1)}static max(){return new n(q.max(),F.empty(),-1)}};function S_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}var R_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ra=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Jc(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==R_)throw n;x("LocalStore","Unexpectedly lost primary lease")}var C=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let o=e.length,a=new Array(o),u=0;for(let h=0;h<o;h++){let f=h;t(e[f]).next(p=>{a[f]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}};function P_(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}var Sr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Sr.oe=-1;function qr(n){return n==null}function Rr(n){return n===0&&1/n==-1/0}function C_(n){return typeof n=="number"&&Number.isInteger(n)&&!Rr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var D_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ZI=[...D_,"documentOverlays"],N_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],k_=N_,ew=[...k_,"indexConfiguration","indexState","indexEntries"];function Wh(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ad(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var se=class n{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fn(this.root,e,this.comparator,!0)}},fn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$e=class n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new n(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,o){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ie=class n{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zi(this.data.getIterator())}getIteratorFrom(e){return new Zi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Zi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Fe=class n{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ie(Oe.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _n(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var es=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ae=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new es("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ae.EMPTY_BYTE_STRING=new Ae("");var O_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(n){if(te(!!n),typeof n=="string"){let e=0,t=O_.exec(n);if(te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}function Yc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xc(n){let e=n.mapValue.fields.__previous_value__;return Yc(e)?Xc(e):e}function Pr(n){let e=it(n.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}var Pa=class{constructor(e,t,r,i,o,a,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}},ts=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yc(n)?4:bd(n)?9007199254740991:10:M()}function He(n,e){if(n===e)return!0;let t=Gt(n);if(t!==Gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pr(n).isEqual(Pr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let a=it(i.timestampValue),u=it(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return vt(i.bytesValue).isEqual(vt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ie(i.geoPointValue.latitude)===ie(o.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ie(i.integerValue)===ie(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){let a=ie(i.doubleValue),u=ie(o.doubleValue);return a===u?Rr(a)===Rr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return _n(n.arrayValue.values||[],e.arrayValue.values||[],He);case 10:return function(i,o){let a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Wh(a)!==Wh(u))return!1;for(let h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!He(a[h],u[h])))return!1;return!0}(n,e);default:return M()}}function Cr(n,e){return(n.values||[]).find(t=>He(t,e))!==void 0}function yn(n,e){if(n===e)return 0;let t=Gt(n),r=Gt(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(o,a){let u=ie(o.integerValue||o.doubleValue),h=ie(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Qh(n.timestampValue,e.timestampValue);case 4:return Qh(Pr(n),Pr(e));case 5:return W(n.stringValue,e.stringValue);case 6:return function(o,a){let u=vt(o),h=vt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){let p=W(u[f],h[f]);if(p!==0)return p}return W(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let u=W(ie(o.latitude),ie(a.latitude));return u!==0?u:W(ie(o.longitude),ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(o,a){let u=o.values||[],h=a.values||[];for(let f=0;f<u.length&&f<h.length;++f){let p=yn(u[f],h[f]);if(p)return p}return W(u.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(o,a){if(o===Hi.mapValue&&a===Hi.mapValue)return 0;if(o===Hi.mapValue)return 1;if(a===Hi.mapValue)return-1;let u=o.fields||{},h=Object.keys(u),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){let A=W(h[E],p[E]);if(A!==0)return A;let P=yn(u[h[E]],f[p[E]]);if(P!==0)return P}return W(h.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function Qh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);let t=it(n),r=it(e),i=W(t.seconds,r.seconds);return i!==0?i:W(t.nanos,r.nanos)}function vn(n){return Ca(n)}function Ca(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=it(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let o of t.values||[])i?i=!1:r+=",",r+=Ca(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",o=!0;for(let a of r)o?o=!1:i+=",",i+=`${a}:${Ca(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function Da(n){return!!n&&"integerValue"in n}function Zc(n){return!!n&&"arrayValue"in n}function Jh(n){return!!n&&"nullValue"in n}function Yh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ma(n){return!!n&&"mapValue"in n}function wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=wr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Pe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ma(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(t)}setAll(e){let t=Oe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=wr(a):i.push(u.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){let t=this.field(e.popLast());ma(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){xn(t,(i,o)=>e[i]=o);for(let i of r)delete e[i]}clone(){return new n(wr(this.value))}};var De=class n{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,q.min(),q.min(),q.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,q.min(),q.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,q.min(),q.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var In=class{constructor(e,t){this.position=e,this.inclusive=t}};function Xh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let o=e[i],a=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=yn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!He(n.position[t],e.position[t]))return!1;return!0}var wn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function x_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ns=class{},ue=class n extends ns{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ka(e,t,r):t==="array-contains"?new Va(e,r):t==="in"?new La(e,r):t==="not-in"?new Ma(e,r):t==="array-contains-any"?new Fa(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Oa(e,r):new xa(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yn(t,this.value)):t!==null&&Gt(this.value)===Gt(t)&&this.matchesComparison(yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},We=class n extends ns{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Sd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Sd(n){return n.op==="and"}function Rd(n){return V_(n)&&Sd(n)}function V_(n){for(let e of n.filters)if(e instanceof We)return!1;return!0}function Na(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+vn(n.value);if(Rd(n))return n.filters.map(e=>Na(e)).join(",");{let e=n.filters.map(t=>Na(t)).join(",");return`${n.op}(${e})`}}function Pd(n,e){return n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&He(r.value,i.value)}(n,e):n instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Pd(a,i.filters[u]),!0):!1}(n,e):void M()}function Cd(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${vn(t.value)}`}(n):n instanceof We?function(t){return t.op.toString()+" {"+t.getFilters().map(Cd).join(" ,")+"}"}(n):"Filter"}var ka=class extends ue{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){let t=F.comparator(e.key,this.key);return this.matchesComparison(t)}},Oa=class extends ue{constructor(e,t){super(e,"in",t),this.keys=Dd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},xa=class extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Dd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Dd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}var Va=class extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Zc(t)&&Cr(t.arrayValue,this.value)}},La=class extends ue{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Cr(this.value.arrayValue,t)}},Ma=class extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Cr(this.value.arrayValue,t)}},Fa=class extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Zc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Cr(this.value.arrayValue,r))}};var Ua=class{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}};function ed(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Ua(n,e,t,r,i,o,a)}function eu(n){let e=j(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Na(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>vn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>vn(r)).join(",")),e.ue=t}return e.ue}function tu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!x_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Zh(n.startAt,e.startAt)&&Zh(n.endAt,e.endAt)}function qa(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var En=class{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function L_(n,e,t,r,i,o,a,u){return new En(n,e,t,r,i,o,a,u)}function nu(n){return new En(n)}function td(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function M_(n){return n.collectionGroup!==null}function Er(n){let e=j(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ie(Oe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new wn(o,r))}),t.has(Oe.keyField().canonicalString())||e.ce.push(new wn(Oe.keyField(),r))}return e.ce}function Ke(n){let e=j(n);return e.le||(e.le=F_(e,Er(n))),e.le}function F_(n,e){if(n.limitType==="F")return ed(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let o=i.dir==="desc"?"asc":"desc";return new wn(i.field,o)});let t=n.endAt?new In(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new In(n.startAt.position,n.startAt.inclusive):null;return ed(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ba(n,e,t){return new En(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ss(n,e){return tu(Ke(n),Ke(e))&&n.limitType===e.limitType}function Nd(n){return`${eu(Ke(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Cd(i)).join(", ")}]`),qr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>vn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>vn(i)).join(",")),`Target(${r})`}(Ke(n))}; limitType=${n.limitType})`}function Rs(n,e){return e.isFoundDocument()&&function(r,i){let o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(let o of Er(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){let f=Xh(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Er(r),i)||r.endAt&&!function(a,u,h){let f=Xh(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Er(r),i))}(n,e)}function U_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kd(n){return(e,t)=>{let r=!1;for(let i of Er(n)){let o=q_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function q_(n,e,t){let r=n.field.isKeyField()?F.comparator(e.key,t.key):function(o,a,u){let h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?yn(h,f):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var It=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xn(this.inner,(t,r)=>{for(let[i,o]of r)e(i,o)})}isEmpty(){return Ad(this.inner)}size(){return this.innerSize}};var B_=new se(F.comparator);function wt(){return B_}var Od=new se(F.comparator);function Ir(...n){let e=Od;for(let t of n)e=e.insert(t.key,t);return e}function j_(n){let e=Od;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ut(){return Tr()}function xd(){return Tr()}function Tr(){return new It(n=>n.toString(),(n,e)=>n.isEqual(e))}var nw=new se(F.comparator),z_=new Ie(F.comparator);function G(...n){let e=z_;for(let t of n)e=e.add(t);return e}var G_=new Ie(W);function $_(){return G_}function Vd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(e)?"-0":e}}function Ld(n){return{integerValue:""+n}}function K_(n,e){return C_(e)?Ld(e):Vd(n,e)}var Tn=class{constructor(){this._=void 0}};function H_(n,e,t){return n instanceof $t?function(i,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Yc(o)&&(o=Xc(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Kt?Md(n,e):n instanceof Ht?Fd(n,e):function(i,o){let a=Q_(i,o),u=nd(a)+nd(i.Pe);return Da(a)&&Da(i.Pe)?Ld(u):Vd(i.serializer,u)}(n,e)}function W_(n,e,t){return n instanceof Kt?Md(n,e):n instanceof Ht?Fd(n,e):t}function Q_(n,e){return n instanceof An?function(r){return Da(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}var $t=class extends Tn{},Kt=class extends Tn{constructor(e){super(),this.elements=e}};function Md(n,e){let t=Ud(e);for(let r of n.elements)t.some(i=>He(i,r))||t.push(r);return{arrayValue:{values:t}}}var Ht=class extends Tn{constructor(e){super(),this.elements=e}};function Fd(n,e){let t=Ud(e);for(let r of n.elements)t=t.filter(i=>!He(i,r));return{arrayValue:{values:t}}}var An=class extends Tn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function nd(n){return ie(n.integerValue||n.doubleValue)}function Ud(n){return Zc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var ja=class{constructor(e,t){this.field=e,this.transform=t}};function J_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Kt&&i instanceof Kt||r instanceof Ht&&i instanceof Ht?_n(r.elements,i.elements,He):r instanceof An&&i instanceof An?He(r.Pe,i.Pe):r instanceof $t&&i instanceof $t}(n.transform,e.transform)}var ze=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var bn=class{};function qd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dr(n.key,ze.none()):new Wt(n.key,n.data,ze.none());{let t=n.data,r=Pe.empty(),i=new Ie(Oe.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new st(n.key,r,new Fe(i.toArray()),ze.none())}}function Y_(n,e,t){n instanceof Wt?function(i,o,a){let u=i.value.clone(),h=id(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof st?function(i,o,a){if(!Qi(i.precondition,o))return void o.convertToUnknownDocument(a.version);let u=id(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Bd(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ar(n,e,t,r){return n instanceof Wt?function(o,a,u,h){if(!Qi(o.precondition,a))return u;let f=o.value.clone(),p=sd(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof st?function(o,a,u,h){if(!Qi(o.precondition,a))return u;let f=sd(o.fieldTransforms,h,a),p=a.data;return p.setAll(Bd(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(o,a,u){return Qi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function rd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_n(r,i,(o,a)=>J_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Wt=class extends bn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},st=class extends bn{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function Bd(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function id(n,e,t){let r=new Map;te(n.length===t.length);for(let i=0;i<t.length;i++){let o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,W_(a,u,t[i]))}return r}function sd(n,e,t){let r=new Map;for(let i of n){let o=i.transform,a=t.data.field(i.field);r.set(i.field,H_(o,a,e))}return r}var Dr=class extends bn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},rs=class extends bn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var za=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let o=this.mutations[i];o.key.isEqual(e.key)&&Y_(o,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ar(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ar(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=xd();return this.mutations.forEach(i=>{let o=e.get(i.key),a=o.overlayedDocument,u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;let h=qd(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&_n(this.mutations,e.mutations,(t,r)=>rd(t,r))&&_n(this.baseMutations,e.baseMutations,(t,r)=>rd(t,r))}};var Ga=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var $a=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var oe,z;function X_(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function jd(n){if(n===void 0)return rt("GRPC error has no .code"),R.UNKNOWN;switch(n){case oe.OK:return R.OK;case oe.CANCELLED:return R.CANCELLED;case oe.UNKNOWN:return R.UNKNOWN;case oe.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case oe.INTERNAL:return R.INTERNAL;case oe.UNAVAILABLE:return R.UNAVAILABLE;case oe.UNAUTHENTICATED:return R.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case oe.NOT_FOUND:return R.NOT_FOUND;case oe.ALREADY_EXISTS:return R.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return R.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case oe.ABORTED:return R.ABORTED;case oe.OUT_OF_RANGE:return R.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return R.UNIMPLEMENTED;case oe.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(z=oe||(oe={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";var od=null;function Z_(){return new TextEncoder}var ey=new gt([4294967295,4294967295],0);function ad(n){let e=Z_().encode(n),t=new ca;return t.update(e),new Uint8Array(t.digest())}function cd(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new gt([t,r],0),new gt([i,o],0)]}var Ka=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qt(`Invalid padding: ${t}`);if(r<0)throw new qt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=gt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(gt.fromNumber(r)));return i.compare(ey)===1&&(i=new gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=ad(e),[r,i]=cd(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;let t=ad(e),[r,i]=cd(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},qt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var is=class n{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(q.min(),i,new se(W),wt(),G())}},Nr=class n{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,G(),G(),G())}};var pn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},ss=class{constructor(e,t){this.targetId=e,this.me=t}},os=class{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},as=class{constructor(){this.fe=0,this.ge=ld(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=G(),t=G(),r=G();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Nr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=ld()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Ha=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=wt(),this.qe=ud(),this.Qe=new se(W)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let o=i.target;if(qa(o))if(r===0){let a=new F(o.path);this.Ue(t,a,De.newNoDocument(a,q.min()))}else te(r===1);else{let a=this.Ye(t);if(a!==r){let u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);let f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}od?.et(function(p,E,A,P,O){var U,k,K,Q,H,X;let we={localCacheCount:p,existenceFilterCount:E.count,databaseId:A.database,projectId:A.projectId},J=E.unchangedNames;return J&&(we.bloomFilter={applied:O===0,hashCount:(U=J?.hashCount)!==null&&U!==void 0?U:0,bitmapLength:(Q=(K=(k=J?.bits)===null||k===void 0?void 0:k.bitmap)===null||K===void 0?void 0:K.length)!==null&&Q!==void 0?Q:0,padding:(X=(H=J?.bits)===null||H===void 0?void 0:H.padding)!==null&&X!==void 0?X:0,mightContain:v=>{var m;return(m=P?.mightContain(v))!==null&&m!==void 0&&m}}),we}(a,e.me,this.Le.tt(),u,h))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t,a,u;try{a=vt(r).toUint8Array()}catch(h){if(h instanceof es)return gn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ka(a,i,o)}catch(h){return gn(h instanceof qt?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(o=>{let a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((o,a)=>{let u=this.Je(a);if(u){if(o.current&&qa(u.target)){let h=new F(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,De.newNoDocument(h,e))}o.be&&(t.set(a,o.Ce()),o.ve())}});let r=G();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{let f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let i=new is(e,t,this.Qe,this.ke,r);return this.ke=wt(),this.qe=ud(),this.Qe=new se(W),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new as,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(W),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new as),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function ud(){return new se(F.comparator)}function ld(){return new se(F.comparator)}var ty={asc:"ASCENDING",desc:"DESCENDING"},ny={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ry={and:"AND",or:"OR"},Wa=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Qa(n,e){return n.useProto3Json||qr(e)?e:{value:e}}function cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iy(n,e){return cs(n,e.toTimestamp())}function nt(n){return te(!!n),q.fromTimestamp(function(t){let r=it(t);return new ve(r.seconds,r.nanos)}(n))}function ru(n,e){return Ja(n,e).canonicalString()}function Ja(n,e){let t=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Gd(n){let e=ee.fromString(n);return te(Qd(e)),e}function us(n,e){return ru(n.databaseId,e.path)}function br(n,e){let t=Gd(e);if(t.get(1)!==n.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Kd(t))}function $d(n,e){return ru(n.databaseId,e)}function sy(n){let e=Gd(n);return e.length===4?ee.emptyPath():Kd(e)}function hd(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kd(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dd(n,e,t){return{name:us(n,e),fields:t.value.mapValue.fields}}function oy(n,e){return"found"in e?function(r,i){te(!!i.found),i.found.name,i.found.updateTime;let o=br(r,i.found.name),a=nt(i.found.updateTime),u=i.found.createTime?nt(i.found.createTime):q.min(),h=new Pe({mapValue:{fields:i.found.fields}});return De.newFoundDocument(o,a,u,h)}(n,e):"missing"in e?function(r,i){te(!!i.missing),te(!!i.readTime);let o=br(r,i.missing),a=nt(i.readTime);return De.newNoDocument(o,a)}(n,e):M()}function ay(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(te(p===void 0||typeof p=="string"),Ae.fromBase64String(p||"")):(te(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ae.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(f){let p=f.code===void 0?R.UNKNOWN:jd(f.code);return new V(p,f.message||"")}(a);t=new os(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=br(n,r.document.name),o=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):q.min(),u=new Pe({mapValue:{fields:r.document.fields}}),h=De.newFoundDocument(i,o,a,u),f=r.targetIds||[],p=r.removedTargetIds||[];t=new pn(f,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=br(n,r.document),o=r.readTime?nt(r.readTime):q.min(),a=De.newNoDocument(i,o),u=r.removedTargetIds||[];t=new pn([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=br(n,r.document),o=r.removedTargetIds||[];t=new pn([],o,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:o}=r,a=new $a(i,o),u=r.targetId;t=new ss(u,a)}}return t}function cy(n,e){let t;if(e instanceof Wt)t={update:dd(n,e.key,e.value)};else if(e instanceof Dr)t={delete:us(n,e.key)};else if(e instanceof st)t={update:dd(n,e.key,e.data),updateMask:gy(e.fieldMask)};else{if(!(e instanceof rs))return M();t={verify:us(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){let u=a.transform;if(u instanceof $t)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Kt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ht)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof An)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:iy(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,e.precondition)),t}function uy(n,e){return{documents:[$d(n,e.path)]}}function ly(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$d(n,i);let o=function(f){if(f.length!==0)return Wd(We.create(f,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(f){if(f.length!==0)return f.map(p=>function(A){return{field:hn(A.field),direction:fy(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=Qa(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:i}}function hy(n){let e=sy(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){te(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(E){let A=Hd(E);return A instanceof We&&Rd(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(A=>function(O){return new wn(dn(O.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(E){let A;return A=typeof E=="object"?E.value:E,qr(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(E){let A=!!E.before,P=E.values||[];return new In(P,A)}(t.startAt));let f=null;return t.endAt&&(f=function(E){let A=!E.before,P=E.values||[];return new In(P,A)}(t.endAt)),L_(e,i,a,o,u,"F",h,f)}function dy(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=dn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=dn(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=dn(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=dn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(dn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return We.create(t.compositeFilter.filters.map(r=>Hd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function fy(n){return ty[n]}function py(n){return ny[n]}function my(n){return ry[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return Oe.fromServerFormat(n.fieldPath)}function Wd(n){return n instanceof ue?function(t){if(t.op==="=="){if(Yh(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(Jh(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yh(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(Jh(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:py(t.op),value:t.value}}}(n):n instanceof We?function(t){let r=t.getFilters().map(i=>Wd(i));return r.length===1?r[0]:{compositeFilter:{op:my(t.op),filters:r}}}(n):M()}function gy(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var kr=class n{constructor(e,t,r,i,o=q.min(),a=q.min(),u=Ae.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Ya=class{constructor(e){this.ct=e}};function _y(n){let e=hy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ba(e,e.limit,"L"):e}var ls=class{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ie(e.integerValue));else if("doubleValue"in e){let r=ie(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),Rr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),typeof r=="string"&&(r=it(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(vt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?bd(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):M()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let r=e.fields||{};this.Et(t,55);for(let i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){let r=e.values||[];this.Et(t,50);for(let i of r)this.It(i,t)}gt(e,t){this.Et(t,37),F.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}};ls.bt=new ls;var Xa=class{constructor(){this._n=new Za}addToCollectionParentIndex(e,t){return this._n.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(zt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}},Za=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(ee.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(ee.comparator)).toArray()}};var rw=new Uint8Array(0);var je=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(41943040,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);var Or=class n{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new n(0)}static Ln(){return new n(-1)}};var ec=class{constructor(){this.changes=new It(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var tc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var nc=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ar(r.mutation,i,Fe.empty(),ve.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){let i=Ut();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ir();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Ut();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){let i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=wt(),a=Tr(),u=function(){return Tr()}();return t.forEach((h,f)=>{let p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof st)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),Ar(p.mutation,f,p.mutation.getFieldMask(),ve.now())):a.set(f.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>{var E;return u.set(f,new tc(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(e,t){let r=Tr(),i=new se((a,u)=>a-u),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(h=>{let f=t.get(h);if(f===null)return;let p=r.get(h)||Fe.empty();p=u.applyToLocalView(f,p),r.set(h,p);let E=(i.get(u.batchId)||G()).add(h);i=i.insert(u.batchId,E)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let h=u.getNext(),f=h.key,p=h.value,E=xd();p.forEach(A=>{if(!o.has(A)){let P=qd(t.get(A),r.get(A));P!==null&&E.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,E))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):M_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{let a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):C.resolve(Ut()),u=-1,h=o;return a.next(f=>C.forEach(f,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,G())).next(p=>({batchId:u,changes:j_(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=Ir();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let o=t.collectionGroup,a=Ir();return this.indexManager.getCollectionParents(e,o).next(u=>C.forEach(u,h=>{let f=function(E,A){return new En(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,f)=>{let p=f.getKey();a.get(p)===null&&(a=a.insert(p,De.newInvalidDocument(p)))});let u=Ir();return a.forEach((h,f)=>{let p=o.get(h);p!==void 0&&Ar(p.mutation,f,Fe.empty(),ve.now()),Rs(t,f)&&(u=u.insert(h,f))}),u})}};var rc=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return C.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:_y(i.bundledQuery),readTime:nt(i.readTime)}}(t)),C.resolve()}};var ic=class{constructor(){this.overlays=new se(F.comparator),this.hr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Ut();return C.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){let i=Ut(),o=t.length+1,a=new F(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new se((f,p)=>f-p),a=this.overlays.getIterator();for(;a.hasNext();){let f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=Ut(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}let u=Ut(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>u.set(f,p)),!(u.size()>=i)););return C.resolve(u)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ga(t,r));let o=this.hr.get(t);o===void 0&&(o=G(),this.hr.set(t,o)),this.hr.set(t,o.add(r.key))}};var xr=class{constructor(){this.Pr=new Ie(ae.Ir),this.Tr=new Ie(ae.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new ae(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new ae(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){let t=new F(new ee([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new F(new ee([])),r=new ae(t,e),i=new ae(t,e+1),o=G();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new ae(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},ae=class{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return F.comparator(e.key,t.key)||W(e.pr,t.pr)}static Er(e,t){return W(e.pr,t.pr)||F.comparator(e.key,t.key)}};var sc=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Ie(ae.Ir)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new za(o,t,r,i);this.mutationQueue.push(a);for(let u of i)this.wr=this.wr.add(new ae(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.br(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{let u=this.Sr(a.pr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(W);return t.forEach(i=>{let o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,o=r;F.isDocumentKey(o)||(o=o.child(""));let a=new ae(new F(o),0),u=new Ie(W);return this.wr.forEachWhile(h=>{let f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.pr)),!0)},a),C.resolve(this.Dr(u))}Dr(e){let t=[];return e.forEach(r=>{let i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(t.mutations,i=>{let o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new ae(t,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var oc=class{constructor(e){this.vr=e,this.docs=function(){return new se(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=wt();return t.forEach(i=>{let o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():De.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=wt(),a=t.path,u=new F(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){let{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||S_(b_(p),r)<=0||(i.has(p.key)||Rs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M()}Fr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ac(this)}getSize(e){return C.resolve(this.size)}},ac=class extends ec{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}};var cc=class{constructor(e){this.persistence=e,this.Mr=new It(t=>eu(t),tu),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new xr,this.targetCount=0,this.Lr=Or.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),C.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new Or(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.qn(t),C.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0,o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),C.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Nr.containsKey(t))}};var uc=class{constructor(e,t){this.Br={},this.overlays={},this.kr=new Sr(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new cc(this),this.indexManager=new Xa,this.remoteDocumentCache=function(i){return new oc(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ya(t),this.$r=new rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ic,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new sc(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);let i=new lc(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,t){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}},lc=class extends Ra{constructor(e){super(),this.currentSequenceNumber=e}},hc=class n{constructor(e){this.persistence=e,this.zr=new xr,this.jr=null}static Hr(e){return new n(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),C.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{let i=F.fromPath(r);return this.Yr(e,i).next(o=>{o||t.removeEntry(i,q.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return C.or([()=>C.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}};var dc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=G(),i=G();for(let o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new n(e,t.fromCache,r,i)}};var fc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var pc=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Dl()?8:P_(ce())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){let o={result:null};return this.ji(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new fc;return this.Ji(e,t,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(e,t,a,u.size)})}).next(()=>o.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(yr()<=B.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(yr()<=B.DEBUG&&x("QueryEngine","Query:",ln(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(yr()<=B.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):C.resolve())}ji(e,t){if(td(t))return C.resolve(null);let r=Ke(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ba(t,null,"F"),r=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{let a=G(...o);return this.zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{let f=this.Zi(t,u);return this.Xi(t,f,a,h.readTime)?this.ji(e,Ba(t,null,"F")):this.es(e,f,t,h)}))})))}Hi(e,t,r,i){return td(t)||i.isEqual(q.min())?C.resolve(null):this.zi.getDocuments(e,r).next(o=>{let a=this.Zi(t,o);return this.Xi(t,a,r,i)?C.resolve(null):(yr()<=B.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ln(t)),this.es(e,a,t,A_(i,-1)).next(u=>u))})}Zi(e,t){let r=new Ie(kd(e));return t.forEach((i,o)=>{Rs(e,o)&&(r=r.add(o))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,t,r){return yr()<=B.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ln(t)),this.zi.getDocumentsMatchingQuery(e,t,zt.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var mc=class{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new se(W),this.rs=new It(o=>eu(o),tu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}};function yy(n,e,t,r){return new mc(n,e,t,r)}async function Jd(n,e){let t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],u=[],h=G();for(let f of i){a.push(f.batchId);for(let p of f.mutations)h=h.add(p.key)}for(let f of o){u.push(f.batchId);for(let p of f.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:a,addedBatchIds:u}))})})}function Yd(n){let e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function vy(n,e){let t=j(n),r=e.snapshotVersion,i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;let u=[];e.targetChanges.forEach((p,E)=>{let A=i.get(E);if(!A)return;u.push(t.Qr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>t.Qr.addMatchingKeys(o,p.addedDocuments,E)));let P=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(Ae.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(E,P),function(U,k,K){return U.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(A,P,p)&&u.push(t.Qr.updateTargetData(o,P))});let h=wt(),f=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Iy(o,a,e.documentUpdates).next(p=>{h=p.cs,f=p.ls})),!r.isEqual(q.min())){let p=t.Qr.getLastRemoteSnapshotVersion(o).next(E=>t.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(t.ns=i,o))}function Iy(n,e,t){let r=G(),i=G();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=wt();return t.forEach((u,h)=>{let f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(q.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):x("LocalStore","Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{cs:a,ls:i}})}function wy(n,e){let t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(o=>o?(i=o,C.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new kr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function gc(n,e,t){let r=j(n),i=r.ns.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ur(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function fd(n,e,t){let r=j(n),i=q.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){let E=j(h),A=E.rs.get(p);return A!==void 0?C.resolve(E.ns.get(A)):E.Qr.getTargetData(f,p)}(r,a,Ke(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?o:G())).next(u=>(Ey(r,U_(e),u),{documents:u,hs:o})))}function Ey(n,e,t){let r=n.ss.get(e)||q.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(e,r)}var hs=class{constructor(){this.activeTargetIds=$_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var _c=class{constructor(){this.no=new hs,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new hs,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var yc=class{io(e){}shutdown(){}};var ds=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Wi=null;function ga(){return Wi===null?Wi=function(){return 268435456+Math.round(2147483648*Math.random())}():Wi++,"0x"+Wi.toString(16)}var Ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var vc=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}};var ye="WebChannelConnection",Ic=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(t,r,i,o,a){let u=ga(),h=this.vo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);let f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,a),this.Mo(t,h,f,i).then(p=>(x("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw gn("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}xo(t,r,i,o,a,u){return this.Co(t,r,i,o,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+On}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}vo(t,r){let i=Ty[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){let o=ga();return new Promise((a,u)=>{let h=new ua;h.setWithCredentials(!0),h.listenOnce(ha.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case _r.NO_ERROR:let p=h.getResponseJson();x(ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case _r.TIMEOUT:x(ye,`RPC '${e}' ${o} timed out`),u(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:let E=h.getStatus();if(x(ye,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);let P=A?.error;if(P&&P.status&&P.message){let O=function(k){let K=k.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(K)>=0?K:R.UNKNOWN}(P.status);u(new V(O,P.message))}else u(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(ye,`RPC '${e}' ${o} completed.`)}});let f=JSON.stringify(i);x(ye,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}Oo(e,t,r){let i=ga(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pa(),u=fa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new la({})),this.Fo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;let p=o.join("");x(ye,`Creating RPC '${e}' stream ${i}: ${p}`,h);let E=a.createWebChannel(p,h),A=!1,P=!1,O=new vc({lo:k=>{P?x(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(A||(x(ye,`Opening RPC '${e}' stream ${i} transport.`),E.open(),A=!0),x(ye,`RPC '${e}' stream ${i} sending:`,k),E.send(k))},ho:()=>E.close()}),U=(k,K,Q)=>{k.listen(K,H=>{try{Q(H)}catch(X){setTimeout(()=>{throw X},0)}})};return U(E,un.EventType.OPEN,()=>{P||(x(ye,`RPC '${e}' stream ${i} transport opened.`),O.mo())}),U(E,un.EventType.CLOSE,()=>{P||(P=!0,x(ye,`RPC '${e}' stream ${i} transport closed`),O.po())}),U(E,un.EventType.ERROR,k=>{P||(P=!0,gn(ye,`RPC '${e}' stream ${i} transport errored:`,k),O.po(new V(R.UNAVAILABLE,"The operation could not be completed")))}),U(E,un.EventType.MESSAGE,k=>{var K;if(!P){let Q=k.data[0];te(!!Q);let H=Q,X=H.error||((K=H[0])===null||K===void 0?void 0:K.error);if(X){x(ye,`RPC '${e}' stream ${i} received error:`,X);let we=X.status,J=function(_){let y=oe[_];if(y!==void 0)return jd(y)}(we),v=X.message;J===void 0&&(J=R.INTERNAL,v="Unknown error status: "+we+" with message "+X.message),P=!0,O.po(new V(J,v)),E.close()}else x(ye,`RPC '${e}' stream ${i} received:`,Q),O.yo(Q)}}),U(u,da.STAT_EVENT,k=>{k.stat===Ki.PROXY?x(ye,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Ki.NOPROXY&&x(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.fo()},0),O}};function _a(){return typeof document<"u"?document:null}function Ps(n){return new Wa(n,!0)}var Vr=class{constructor(e,t,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}};var wc=class{constructor(e,t,r,i,o,a,u,h){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Vr(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(rt(t.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{let i=new V(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){let r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Ec=class extends wc{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();let t=ay(this.serializer,e),r=function(o){if(!("targetChange"in o))return q.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?nt(a.readTime):q.min()}(e);return this.listener.h_(t,r)}P_(e){let t={};t.database=hd(this.serializer),t.addTarget=function(o,a){let u,h=a.target;if(u=qa(h)?{documents:uy(o,h)}:{query:ly(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=zd(o,a.resumeToken);let f=Qa(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(q.min())>0){u.readTime=cs(o,a.snapshotVersion.toTimestamp());let f=Qa(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,e);let r=dy(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){let t={};t.database=hd(this.serializer),t.removeTarget=e,this.i_(t)}};var Tc=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Ja(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())})}xo(e,t,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(e,Ja(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(R.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}},Ac=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(rt(t),this.y_=!1):x("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}};var bc=class{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{jr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){let f=j(h);f.M_.add(4),await Br(f),f.N_.set("Unknown"),f.M_.delete(4),await Cs(f)}(this))})}),this.N_=new Ac(r,i)}};async function Cs(n){if(jr(n))for(let e of n.x_)await e(!0)}async function Br(n){for(let e of n.x_)await e(!1)}function Xd(n,e){let t=j(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),au(t)?ou(t):Vn(t).Xo()&&su(t,e))}function iu(n,e){let t=j(n),r=Vn(t);t.F_.delete(e),r.Xo()&&Zd(t,e),t.F_.size===0&&(r.Xo()?r.n_():jr(t)&&t.N_.set("Unknown"))}function su(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vn(n).P_(e)}function Zd(n,e){n.L_.xe(e),Vn(n).I_(e)}function ou(n){n.L_=new Ha({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Vn(n).start(),n.N_.w_()}function au(n){return jr(n)&&!Vn(n).Zo()&&n.F_.size>0}function jr(n){return j(n).M_.size===0}function ef(n){n.L_=void 0}async function Ay(n){n.N_.set("Online")}async function by(n){n.F_.forEach((e,t)=>{su(n,e)})}async function Sy(n,e){ef(n),au(n)?(n.N_.D_(e),ou(n)):n.N_.set("Unknown")}async function Ry(n,e,t){if(n.N_.set("Online"),e instanceof os&&e.state===2&&e.cause)try{await async function(i,o){let a=o.cause;for(let u of o.targetIds)i.F_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.F_.delete(u),i.L_.removeTarget(u))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pd(n,r)}else if(e instanceof pn?n.L_.Ke(e):e instanceof ss?n.L_.He(e):n.L_.We(e),!t.isEqual(q.min()))try{let r=await Yd(n.localStore);t.compareTo(r)>=0&&await function(o,a){let u=o.L_.rt(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){let p=o.F_.get(f);p&&o.F_.set(f,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{let p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(Ae.EMPTY_BYTE_STRING,p.snapshotVersion)),Zd(o,h);let E=new kr(p.target,h,f,p.sequenceNumber);su(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await pd(n,r)}}async function pd(n,e,t){if(!Ur(e))throw e;n.M_.add(1),await Br(n),n.N_.set("Offline"),t||(t=()=>Yd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Cs(n)})}async function md(n,e){let t=j(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");let r=jr(t);t.M_.add(3),await Br(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Cs(t)}async function Py(n,e){let t=j(n);e?(t.M_.delete(2),await Cs(t)):e||(t.M_.add(2),await Br(t),t.N_.set("Unknown"))}function Vn(n){return n.B_||(n.B_=function(t,r,i){let o=j(t);return o.f_(),new Ec(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Ay.bind(null,n),To:by.bind(null,n),Ao:Sy.bind(null,n),h_:Ry.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),au(n)?ou(n):n.N_.set("Unknown")):(await n.B_.stop(),ef(n))})),n.B_}var Sc=class n{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){let a=Date.now()+r,u=new n(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function tf(n,e){if(rt("AsyncQueue",`${e}: ${n}`),Ur(n))return new V(R.UNAVAILABLE,`${e}: ${n}`);throw n}var fs=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Ir(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ps=class{constructor(){this.q_=new se(F.comparator)}track(e){let t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):M():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}},Sn=class n{constructor(e,t,r,i,o,a,u,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,o){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,fs.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Rc=class{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}},Pc=class{constructor(){this.queries=new It(e=>Nd(e),Ss),this.onlineState="Unknown",this.z_=new Set}};async function nf(n,e){let t=j(n),r=3,i=e.query,o=t.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new Rc,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await t.onListen(i,!0);break;case 1:o.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=tf(a,`Initialization of query '${ln(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.U_.push(e),e.j_(t.onlineState),o.K_&&e.H_(o.K_)&&cu(t)}async function rf(n,e){let t=j(n),r=e.query,i=3,o=t.queries.get(r);if(o){let a=o.U_.indexOf(e);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cy(n,e){let t=j(n),r=!1;for(let i of e){let o=i.query,a=t.queries.get(o);if(a){for(let u of a.U_)u.H_(i)&&(r=!0);a.K_=i}}r&&cu(t)}function Dy(n,e,t){let r=j(n),i=r.queries.get(e);if(i)for(let o of i.U_)o.onError(t);r.queries.delete(e)}function cu(n){n.z_.forEach(e=>{e.next()})}var Cc,gd;(gd=Cc||(Cc={})).J_="default",gd.Cache="cache";var ms=class{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;let r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Cc.Cache}};var gs=class{constructor(e){this.key=e}},_s=class{constructor(e){this.key=e}},Dc=class{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=G(),this.mutatedKeys=G(),this.Ia=kd(e),this.Ta=new fs(this.Ia)}get Ea(){return this.la}da(e,t){let r=t?t.Aa:new ps,i=t?t.Ta:this.Ta,o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,E)=>{let A=i.get(p),P=Rs(this.query,E)?E:null,O=!!A&&this.mutatedKeys.has(A.key),U=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations),k=!1;A&&P?A.data.isEqual(P.data)?O!==U&&(r.track({type:3,doc:P}),k=!0):this.Ra(A,P)||(r.track({type:2,doc:P}),k=!0,(h&&this.Ia(P,h)>0||f&&this.Ia(P,f)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),k=!0):A&&!P&&(r.track({type:1,doc:A}),k=!0,(h||f)&&(u=!0)),k&&(P?(a=a.add(P),o=U?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let a=e.Aa.Q_();a.sort((p,E)=>function(P,O){let U=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return U(P)-U(O)}(p.type,E.type)||this.Ia(p.doc,E.doc)),this.Va(r),i=i!=null&&i;let u=t&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,f=h!==this.ha;return this.ha=h,a.length!==0||f?{snapshot:new Sn(this.query,e.Ta,o,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ps,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=G(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});let t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new _s(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new gs(r))}),t}pa(e){this.la=e.hs,this.Pa=G();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Sn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}},Nc=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},kc=class{constructor(e){this.key=e,this.wa=!1}},Oc=class{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new It(u=>Nd(u),Ss),this.Da=new Map,this.Ca=new Set,this.va=new se(F.comparator),this.Fa=new Map,this.Ma=new xr,this.xa={},this.Oa=new Map,this.Na=Or.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}};async function Ny(n,e,t=!0){let r=uf(n),i,o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await sf(r,e,t,!0),i}async function ky(n,e){let t=uf(n);await sf(t,e,!0,!1)}async function sf(n,e,t,r){let i=await wy(n.localStore,Ke(e)),o=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(o):"not-current",u;return r&&(u=await Oy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Xd(n.remoteStore,i),u}async function Oy(n,e,t,r,i){n.Ba=(E,A,P)=>async function(U,k,K,Q){let H=k.view.da(K);H.Xi&&(H=await fd(U.localStore,k.query,!1).then(({documents:v})=>k.view.da(v,H)));let X=Q&&Q.targetChanges.get(k.targetId),we=Q&&Q.targetMismatches.get(k.targetId)!=null,J=k.view.applyChanges(H,U.isPrimaryClient,X,we);return yd(U,k.targetId,J.fa),J.snapshot}(n,E,A,P);let o=await fd(n.localStore,e,!0),a=new Dc(e,o.hs),u=a.da(o.documents),h=Nr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(u,n.isPrimaryClient,h);yd(n,t,f.fa);let p=new Nc(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),f.snapshot}async function xy(n,e,t){let r=j(n),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!Ss(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&iu(r.remoteStore,i.targetId),xc(r,i.targetId)}).catch(Jc)):(xc(r,i.targetId),await gc(r.localStore,i.targetId,!0))}async function Vy(n,e){let t=j(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),iu(t.remoteStore,r.targetId))}async function of(n,e){let t=j(n);try{let r=await vy(t.localStore,e);e.targetChanges.forEach((i,o)=>{let a=t.Fa.get(o);a&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?te(a.wa):i.removedDocuments.size>0&&(te(a.wa),a.wa=!1))}),await cf(t,r,e)}catch(r){await Jc(r)}}function _d(n,e,t){let r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.ba.forEach((o,a)=>{let u=a.view.j_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let h=j(a);h.onlineState=u;let f=!1;h.queries.forEach((p,E)=>{for(let A of E.U_)A.j_(u)&&(f=!0)}),f&&cu(h)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ly(n,e,t){let r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Fa.get(e),o=i&&i.key;if(o){let a=new se(F.comparator);a=a.insert(o,De.newNoDocument(o,q.min()));let u=G().add(o),h=new is(q.min(),new Map,new se(W),a,u);await of(r,h),r.va=r.va.remove(o),r.Fa.delete(e),uu(r)}else await gc(r.localStore,e,!1).then(()=>xc(r,e,t)).catch(Jc)}function xc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||af(n,r)})}function af(n,e){n.Ca.delete(e.path.canonicalString());let t=n.va.get(e);t!==null&&(iu(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),uu(n))}function yd(n,e,t){for(let r of t)r instanceof gs?(n.Ma.addReference(r.key,e),My(n,r)):r instanceof _s?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||af(n,r.key)):M()}function My(n,e){let t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+t),n.Ca.add(r),uu(n))}function uu(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){let e=n.Ca.values().next().value;n.Ca.delete(e);let t=new F(ee.fromString(e)),r=n.Na.next();n.Fa.set(r,new kc(t)),n.va=n.va.insert(t,r),Xd(n.remoteStore,new kr(Ke(nu(t.path)),r,"TargetPurposeLimboResolution",Sr.oe))}}async function cf(n,e,t){let r=j(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,e,t).then(f=>{if((f||t)&&r.isPrimaryClient){let p=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(f){i.push(f);let p=dc.Ki(h.targetId,f);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,f){let p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>C.forEach(f,A=>C.forEach(A.qi,P=>p.persistence.referenceDelegate.addReference(E,A.targetId,P)).next(()=>C.forEach(A.Qi,P=>p.persistence.referenceDelegate.removeReference(E,A.targetId,P)))))}catch(E){if(!Ur(E))throw E;x("LocalStore","Failed to update sequence numbers: "+E)}for(let E of f){let A=E.targetId;if(!E.fromCache){let P=p.ns.get(A),O=P.snapshotVersion,U=P.withLastLimboFreeSnapshotVersion(O);p.ns=p.ns.insert(A,U)}}}(r.localStore,o))}async function Fy(n,e){let t=j(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());let r=await Jd(t.localStore,e);t.currentUser=e,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new V(R.CANCELLED,a))})}),o.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cf(t,r.us)}}function Uy(n,e){let t=j(n),r=t.Fa.get(e);if(r&&r.wa)return G().add(r.key);{let i=G(),o=t.Da.get(e);if(!o)return i;for(let a of o){let u=t.ba.get(a);i=i.unionWith(u.view.Ea)}return i}}function uf(n){let e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ly.bind(null,e),e.Sa.h_=Cy.bind(null,e.eventManager),e.Sa.ka=Dy.bind(null,e.eventManager),e}var ys=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ps(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return yy(this.persistence,new pc,e.initialUser,this.serializer)}createPersistence(e){return new uc(hc.Hr,this.serializer)}createSharedClientState(e){return new _c}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var Vc=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fy.bind(null,this.syncEngine),await Py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pc}()}createDatastore(e){let t=Ps(e.databaseInfo.databaseId),r=function(o){return new Ic(o)}(e.databaseInfo);return function(o,a,u,h){return new Tc(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new bc(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>_d(this.syncEngine,t,0),function(){return ds.D()?new ds:new yc}())}createSyncEngine(e,t){return function(i,o,a,u,h,f,p){let E=new Oc(i,o,a,u,h,f);return p&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){let i=j(r);x("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Br(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var vs=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};var Lc=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,o){let a=j(i),u={documents:o.map(E=>us(a.serializer,E))},h=await a.xo("BatchGetDocuments",a.serializer.databaseId,ee.emptyPath(),u,o.length),f=new Map;h.forEach(E=>{let A=oy(a.serializer,E);f.set(A.key.toString(),A)});let p=[];return o.forEach(E=>{let A=f.get(E.toString());te(!!A),p.push(A)}),p}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Dr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=F.fromPath(r);this.mutations.push(new rs(i,this.precondition(i)))}),await async function(r,i){let o=j(r),a={writes:i.map(u=>cy(o.serializer,u))};await o.Co("Commit",o.serializer.databaseId,ee.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=q.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new V(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?ze.exists(!1):ze.updateTime(t):ze.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new V(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(t)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var Mc=class{constructor(e,t,r,i,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=o,this.Za=r.maxAttempts,this.Yo=new Vr(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{let e=new Lc(this.datastore),t=this.tu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{let t=this.updateFunction(e);return!qr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!X_(t)}return!1}};var Fc=class{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=he.UNAUTHENTICATED,this.clientId=Yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=tf(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function ya(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vd(n,e){n.asyncQueue.verifyOperationInProgress();let t=await By(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>md(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>md(e.remoteStore,i)),n._onlineComponents=e}function qy(n){return n.name==="FirebaseError"?n.code===R.FAILED_PRECONDITION||n.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function By(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await ya(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!qy(t))throw t;gn("Error using user provided cache. Falling back to memory cache: "+t),await ya(n,new ys)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await ya(n,new ys);return n._offlineComponents}async function lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await vd(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await vd(n,new Vc))),n._onlineComponents}function jy(n){return lf(n).then(e=>e.datastore)}async function Uc(n){let e=await lf(n),t=e.eventManager;return t.onListen=Ny.bind(null,e.syncEngine),t.onUnlisten=xy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ky.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vy.bind(null,e.syncEngine),t}function zy(n,e,t={}){let r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){let p=new vs({next:A=>{a.enqueueAndForget(()=>rf(o,E)),A.fromCache&&h.source==="server"?f.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),E=new ms(u,p,{includeMetadataChanges:!0,ra:!0});return nf(o,E)}(await Uc(n),n.asyncQueue,e,t,r)),r.promise}function hf(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Id=new Map;function df(n,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gy(n,e,t,r){if(e===!0&&r===!0)throw new V(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wd(n){if(!F.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ed(n){if(F.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=lu(n);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var Is=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Rn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Is(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new va;switch(r.type){case"firstParty":return new Ta(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Id.get(t);r&&(x("ComponentProvider","Removing Datastore"),Id.delete(t),r.terminate())}(this),Promise.resolve()}};function $y(n,e,t,r={}){var i;let o=(n=Bt(n,Rn))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=he.MOCK_USER;else{u=bl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new he(f)}n._authCredentials=new Ia(new Ji(u,h))}}var Lr=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Ce=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},yt=class n extends Lr{constructor(e,t,r){super(e,t,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new F(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function ff(n,e,...t){if(n=re(n),df("collection","path",e),n instanceof Rn){let r=ee.fromString(e,...t);return Ed(r),new yt(n,null,r)}{if(!(n instanceof Ce||n instanceof yt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ee.fromString(e,...t));return Ed(r),new yt(n.firestore,null,r)}}function hu(n,e,...t){if(n=re(n),arguments.length===1&&(e=Yi.newId()),df("doc","path",e),n instanceof Rn){let r=ee.fromString(e,...t);return wd(r),new Ce(n,null,new F(r))}{if(!(n instanceof Ce||n instanceof yt))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ee.fromString(e,...t));return wd(r),new Ce(n.firestore,n instanceof yt?n.converter:null,new F(r))}}var qc=class{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Vr(this,"async_queue_retry"),this.hu=()=>{let t=_a();t&&x("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};let e=_a();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=_a();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new Ge;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ur(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;let i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw rt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let i=Sc.createAndSchedule(this,e,t,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}};function Td(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}var Qt=class extends Rn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new qc}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||mf(this),this._firestoreClient.terminate()}};function pf(n,e){let t=typeof n=="object"?n:di(),r=typeof n=="string"?n:e||"(default)",i=rr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let o=Al("firestore");o&&$y(i,...o)}return i}function du(n){return n._firestoreClient||mf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mf(n){var e,t,r;let i=n._freezeSettings(),o=function(u,h,f,p){return new Pa(u,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,hf(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Fc(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var Pn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ae.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Cn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Dn=class{constructor(e){this._methodName=e}};var Mr=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}};var Ky=/^__.*__$/,Bc=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new st(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wt(e,this.data,t,this.fieldTransforms)}},ws=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new st(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var jc=class n{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ts(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(gf(this.fu)&&Ky.test(e))throw this.Du('Document fields cannot begin and end with "__"')}},zc=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ps(e)}Fu(e,t,r,i=!1){return new jc({fu:e,methodName:t,vu:r,path:Oe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Hy(n){let e=n._freezeSettings(),t=Ps(n._databaseId);return new zc(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wy(n,e,t,r,i,o={}){let a=n.Fu(o.merge||o.mergeFields?2:0,e,t,i);fu("Data must be an object, but it was:",a,r);let u=_f(r,a),h,f;if(o.merge)h=new Fe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){let p=[];for(let E of o.mergeFields){let A=$c(e,E,t);if(!a.contains(A))throw new V(R.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);vf(p,A)||p.push(A)}h=new Fe(p),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new Bc(new Pe(u),h,f)}var Es=class n extends Dn{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var Gc=class n extends Dn{_toFieldTransform(e){return new ja(e.path,new $t)}isEqual(e){return e instanceof n}};function Qy(n,e,t,r){let i=n.Fu(1,e,t);fu("Data must be an object, but it was:",i,r);let o=[],a=Pe.empty();xn(r,(h,f)=>{let p=pu(e,h,t);f=re(f);let E=i.Su(p);if(f instanceof Es)o.push(p);else{let A=Ds(f,E);A!=null&&(o.push(p),a.set(p,A))}});let u=new Fe(o);return new ws(a,u,i.fieldTransforms)}function Jy(n,e,t,r,i,o){let a=n.Fu(1,e,t),u=[$c(e,r,t)],h=[i];if(o.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push($c(e,o[A])),h.push(o[A+1]);let f=[],p=Pe.empty();for(let A=u.length-1;A>=0;--A)if(!vf(f,u[A])){let P=u[A],O=h[A];O=re(O);let U=a.Su(P);if(O instanceof Es)f.push(P);else{let k=Ds(O,U);k!=null&&(f.push(P),p.set(P,k))}}let E=new Fe(f);return new ws(p,E,a.fieldTransforms)}function Ds(n,e){if(yf(n=re(n)))return fu("Unsupported field value:",e,n),_f(n,e);if(n instanceof Dn)return function(r,i){if(!gf(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){let o=[],a=0;for(let u of r){let h=Ds(u,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return K_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=ve.fromDate(r);return{timestampValue:cs(i.serializer,o)}}if(r instanceof ve){let o=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cs(i.serializer,o)}}if(r instanceof Mr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:zd(i.serializer,r._byteString)};if(r instanceof Ce){let o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ru(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${lu(r)}`)}(n,e)}function _f(n,e){let t={};return Ad(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xn(n,(r,i)=>{let o=Ds(i,e.pu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function yf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ve||n instanceof Mr||n instanceof Pn||n instanceof Ce||n instanceof Dn)}function fu(n,e,t){if(!yf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=lu(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function $c(n,e,t){if((e=re(e))instanceof Cn)return e._internalPath;if(typeof e=="string")return pu(n,e);throw Ts("Field path arguments must be of type string or ",n,!1,void 0,t)}var Yy=new RegExp("[~\\*/\\[\\]]");function pu(n,e,t){if(e.search(Yy)>=0)throw Ts(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cn(...e.split("."))._internalPath}catch{throw Ts(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ts(n,e,t,r,i){let o=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(R.INVALID_ARGUMENT,u+n+h)}function vf(n,e){return n.some(t=>t.isEqual(e))}var Nn=class{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Kc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(If("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Kc=class extends Nn{data(){return super.data()}};function If(n,e){return typeof e=="string"?pu(n,e):e instanceof Cn?e._internalPath:e._delegate._internalPath}function wf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var As=class{convertValue(e,t="none"){switch(Gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return xn(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertGeoPoint(e){return new Mr(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Xc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pr(e));default:return null}}convertTimestamp(e){let t=it(e);return new ve(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ee.fromString(e);te(Qd(r));let i=new ts(r.get(1),r.get(3)),o=new F(r.popFirst(5));return i.isEqual(t)||rt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function Xy(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Hc=class extends As{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}};var _t=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Fr=class extends Nn{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(If("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},mn=class extends Fr{data(e={}){return super.data(e)}},bs=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new _t(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mn(this._firestore,this._userDataWriter,r.key,r,new _t(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let h=new mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new _t(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{let h=new mn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new _t(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Zy(u.type),doc:h,oldIndex:f,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Zy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}var kn=class extends As{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}};function Ef(n){n=Bt(n,Lr);let e=Bt(n.firestore,Qt),t=du(e),r=new kn(e);return wf(n._query),zy(t,n._query).then(i=>new bs(e,r,n,i))}function Tf(n,...e){var t,r,i;n=re(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Td(e[a])||(o=e[a],a++);let u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Td(e[a])){let E=e[a];e[a]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[a+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,f,p;if(n instanceof Ce)f=Bt(n.firestore,Qt),p=nu(n._key.path),h={next:E=>{e[a]&&e[a](ev(f,n,E))},error:e[a+1],complete:e[a+2]};else{let E=Bt(n,Lr);f=Bt(E.firestore,Qt),p=E._query;let A=new kn(f);h={next:P=>{e[a]&&e[a](new bs(f,A,E,P))},error:e[a+1],complete:e[a+2]},wf(n._query)}return function(A,P,O,U){let k=new vs(U),K=new ms(P,k,O);return A.asyncQueue.enqueueAndForget(async()=>nf(await Uc(A),K)),()=>{k.$a(),A.asyncQueue.enqueueAndForget(async()=>rf(await Uc(A),K))}}(du(f),p,u,h)}function ev(n,e,t){let r=t.docs.get(e._key),i=new kn(n);return new Fr(n,i,e._key,r,new _t(t.hasPendingWrites,t.fromCache),e.converter)}var tv={maxAttempts:5};function vr(n,e){if((n=re(n)).firestore!==e)throw new V(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var Wc=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Hy(t)}get(t){let r=vr(t,this._firestore),i=new Hc(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return M();let a=o[0];if(a.isFoundDocument())return new Nn(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new Nn(this._firestore,i,r._key,null,r.converter);throw M()})}set(t,r,i){let o=vr(t,this._firestore),a=Xy(o.converter,r,i),u=Wy(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,i);return this._transaction.set(o._key,u),this}update(t,r,i,...o){let a=vr(t,this._firestore),u;return u=typeof(r=re(r))=="string"||r instanceof Cn?Jy(this._dataReader,"Transaction.update",a._key,r,i,o):Qy(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,u),this}delete(t){let r=vr(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=vr(e,this._firestore),r=new kn(this._firestore);return super.get(e).then(i=>new Fr(this._firestore,r,t._key,i._document,new _t(!1,!1),t.converter))}};function Af(n,e,t){n=Bt(n,Qt);let r=Object.assign(Object.assign({},tv),t);return function(o){if(o.maxAttempts<1)throw new V(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,u){let h=new Ge;return o.asyncQueue.enqueueAndForget(async()=>{let f=await jy(o);new Mc(o.asyncQueue,f,u,a,h).Xa()}),h.promise}(du(n),i=>e(new Wc(n,i)),r)}function mu(){return new Gc("serverTimestamp")}(function(e,t=!0){(function(i){On=i})(ft),dt(new Ne("firestore",(r,{instanceIdentifier:i,options:o})=>{let a=r.getProvider("app").getImmediate(),u=new Qt(new wa(r.getProvider("auth-internal")),new ba(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ts(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ve(Hh,"4.6.3",e),Ve(Hh,"4.6.3","esm2017")})();var nv=window.FIREBASE_CONFIG,_u="contabilita_sync_ver",Os="contabilita_sync_pend",bf="contabilita_sync_dev",Sf=lsGet(bf)||(()=>{let n="d"+Date.now().toString(36)+Math.random().toString(36).slice(2,7);return lsSet(bf,n),n})(),N={stato:"avvio",user:null,ref:null,ver:+(lsGet(_u)||0),pend:lsGet(Os)==="1",timer:null,inCorso:!1,remota:null,conflitto:!1,primo:!1};window.SYNC=N;var Rf=Po(nv),zr=aa(Rf),ks=pf(Rf);Zo(zr,zi).catch(()=>{});var Pf={avvio:"collegamento\u2026",fuori:"non collegato",ok:"sincronizzato",invio:"invio\u2026",attesa:"in attesa di internet",conflitto:"da decidere",errore:"errore di sincronizzazione"};function be(n){N.stato=n,yu()}function yu(){let n=document.querySelector("#salvato");if(!n)return;let e=ultimoSalvataggio?" alle "+ultimoSalvataggio.toTimeString().slice(0,5):"",t={ok:"\u2601\uFE0E \u2713",invio:"\u2601\uFE0E \u2191",attesa:"\u2601\uFE0E \u23F8",fuori:"\u2601\uFE0E \u2715",conflitto:"\u2601\uFE0E !",errore:"\u2601\uFE0E \u26A0",avvio:"\u2601\uFE0E \u2026"}[N.stato];n.innerHTML=`<button type="button" class="sync-st sync-${N.stato}" data-sync-info title="${N.user?esc(N.user.email):""}">${t} ${Pf[N.stato]}${N.stato==="ok"?e:""}</button>`}var rv=window.renderSalvato;window.renderSalvato=function(){rv(),(N.stato!=="avvio"||N.user)&&yu()};function Tt(n){document.querySelector("#sync-fin")?.remove(),document.body.insertAdjacentHTML("beforeend",`<div id="sync-fin" class="sync-velo"><div class="sync-box">${n}</div></div>`)}function Et(){document.querySelector("#sync-fin")?.remove()}function iv(){Tt(`<h2>Contabilit\xE0</h2><p>Entra con il tuo account Google: i dati sono salvati online e li ritrovi uguali su ogni computer.</p>
    <button class="btn" data-sync-login>Accedi con Google</button><p class="sync-nota">Puoi anche lavorare senza accedere: le modifiche restano in questo browser e partono appena entri.</p><button class="btn chiaro" data-sync-dopo>Pi\xF9 tardi</button>`)}function Cf(n){try{let e=JSON.parse(n.json);S=e,migra(),storia=[]}catch{be("errore");return}lsSet(CHIAVE,JSON.stringify(S)),N.ver=n.ver,lsSet(_u,String(n.ver)),N.pend=!1,lsSet(Os,"0"),render(),be("ok")}function Df(n){if(!(document.querySelector(".finestra, #modale:not(:empty), .velo")||/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement||{}).tagName||"")))return n();be("ok");let t=document.querySelector("#salvato");t&&(t.title="Ci sono modifiche da un altro computer: arrivano appena chiudi la finestra"),clearTimeout(N.tLib),N.tLib=setTimeout(()=>Df(n),1200)}function gu(n){N.conflitto=!0,be("conflitto");let e=n.agg&&n.agg.toDate?n.agg.toDate().toLocaleString("it-IT",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}):"";Tt(`<h2>Modifiche su due computer</h2><p>Su un altro computer i dati sono stati cambiati${e?" ("+e+")":""}, mentre anche qui c'erano modifiche non ancora inviate. Quale versione tieni?</p>
    <div class="sync-az"><button class="btn" data-sync-tieni>Tieni questa (di questo computer)</button><button class="btn chiaro" data-sync-prendi>Prendi quella online</button></div>
    <p class="sync-nota">Prima di decidere puoi scaricare un backup di questa versione da Impostazioni e backup.</p>`)}function vu(){clearTimeout(N.timer),N.timer=setTimeout(Jt,1500)}async function Jt(n){if(!N.user||!N.ref||N.inCorso||N.conflitto||!N.pend&&!n)return;if(!navigator.onLine){be("attesa");return}N.inCorso=!0,be("invio");let e=JSON.stringify(S);try{let t=await Af(ks,async r=>{let i=await r.get(N.ref),o=i.exists()&&i.data().ver||0;if(i.exists()&&o!==N.ver&&!n)return{conflitto:i.data()};let a=oggiISO();if(i.exists()){let u=i.data(),h=u.giorno||(u.agg&&u.agg.toDate?u.agg.toDate().toISOString().slice(0,10):null);h&&h!==a&&r.set(hu(ks,"utenti",N.user.uid,"storico",h.slice(8)),{json:u.json,giorno:h,ver:u.ver||0,agg:mu()})}return r.set(N.ref,{json:e,ver:o+1,da:Sf,agg:mu(),giorno:a}),{ver:o+1}});if(N.inCorso=!1,t.conflitto){gu(t.conflitto);return}N.ver=t.ver,lsSet(_u,String(t.ver)),e===JSON.stringify(S)?(N.pend=!1,lsSet(Os,"0")):vu(),be("ok")}catch(t){N.inCorso=!1,console.warn("sync",t),be(navigator.onLine?"errore":"attesa"),clearTimeout(N.timer),N.timer=setTimeout(Jt,2e4)}}window.dopoSalva=()=>{N.pend=!0,lsSet(Os,"1"),N.user&&vu()};addEventListener("online",()=>Jt());document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Jt()});var Ns=null;ea(zr,n=>{Ns&&(Ns(),Ns=null),N.user=n;try{renderAvviso(),misuraTesta()}catch{}if(!n){be("fuori"),sessionStorage.getItem("sync_dopo")||iv();return}Et(),be("avvio"),N.ref=hu(ks,"utenti",n.uid,"dati","stato"),Ns=Tf(N.ref,{includeMetadataChanges:!1},e=>{if(e.metadata.hasPendingWrites)return;if(!e.exists()){sv();return}let t=e.data();if(N.remota=t,t.ver===N.ver){N.pend&&vu(),be(N.pend?"invio":"ok");return}if(t.ver<N.ver&&t.da===Sf){be("ok");return}if(N.pend&&N.ver>0){gu(t);return}if(N.pend&&N.ver===0){gu(t);return}Df(()=>{Cf(t),toast("Dati aggiornati da un altro computer")})},e=>{console.warn("snapshot",e),be(e.code==="permission-denied"?"errore":"attesa"),e.code==="permission-denied"&&Tt(`<h2>Accesso non permesso</h2><p>L'account <b>${esc(n.email)}</b> non pu\xF2 leggere questi dati. Controlla la mail scritta nelle regole di Firestore, oppure esci ed entra con un altro account.</p><div class="sync-az"><button class="btn chiaro" data-sync-esci>Esci</button></div>`)})});function sv(){N.primo=!0,be("fuori");let n=(S&&S.movimenti||[]).length;Tt(`<h2>Primo collegamento</h2><p>Online non ci sono ancora dati. Da dove parto?</p>
    <div class="sync-az sync-col"><label class="btn">Carica un backup (.json)\u2026 <input type="file" id="sync-file" accept=".json,application/json" hidden></label>
    ${n?`<button class="btn chiaro" data-sync-questi>Usa i dati di questo browser (${n} movimenti)</button>`:""}</div>
    <p class="sync-nota">Il backup si scarica da Impostazioni e backup \u2192 Scarica backup, sul computer con i dati pi\xF9 aggiornati.</p>`)}document.addEventListener("click",async n=>{let e=n.target.closest("[data-sync-storico],[data-sync-torna],[data-sync-login],[data-sync-dopo],[data-sync-tieni],[data-sync-prendi],[data-sync-questi],[data-sync-esci],[data-sync-info]");if(e)if(n.preventDefault(),n.stopPropagation(),e.matches("[data-sync-login]")){let t=new Vt;t.setCustomParameters({prompt:"select_account"});try{await sa(zr,t)}catch(r){/popup/.test(r.code||"")?oa(zr,t):toast("Accesso non riuscito: "+(r.code||r.message))}}else if(e.matches("[data-sync-dopo]"))sessionStorage.setItem("sync_dopo","1"),Et();else if(e.matches("[data-sync-tieni]"))N.conflitto=!1,Et(),N.pend=!0,await Jt(!0),toast("Tenuta la versione di questo computer");else if(e.matches("[data-sync-prendi]"))N.conflitto=!1,Et(),N.remota&&Cf(N.remota),toast("Presa la versione online");else if(e.matches("[data-sync-questi]"))N.primo=!1,Et(),N.ver=0,N.pend=!0,await Jt(!0),toast("Dati di questo browser caricati online",!0);else if(e.matches("[data-sync-esci]"))Et(),await ta(zr);else if(e.matches("[data-sync-storico]")){Tt("<h2>Versioni dei giorni scorsi</h2><p>Carico\u2026</p>");try{let t=await Ef(ff(ks,"utenti",N.user.uid,"storico")),r=[];t.forEach(o=>r.push({id:o.id,...o.data()})),r.sort((o,a)=>a.giorno.localeCompare(o.giorno)),N.storico=r;let i=o=>{try{return JSON.parse(o.json).movimenti.length}catch{return"?"}};Tt(`<h2>Versioni dei giorni scorsi</h2><p>Com'erano i dati alla fine di ogni giornata in cui hai fatto modifiche (ultimi 31 giorni).</p>
        <div class="sync-lista">${r.length?r.map(o=>`<div class="sync-r"><span>${new Date(o.giorno+"T12:00").toLocaleDateString("it-IT",{weekday:"short",day:"numeric",month:"long"})} <small>${i(o)} movimenti</small></span><button class="btn chiaro piccolo" data-sync-torna="${o.id}">Torna a questa</button></div>`).join(""):'<p class="sync-nota">Ancora nessuna: la prima copia arriva con la prima modifica di domani.</p>'}</div>
        <div class="sync-az"><button class="btn chiaro" onclick="document.querySelector('#sync-fin').remove()">Chiudi</button></div>`)}catch(t){Tt(`<h2>Versioni dei giorni scorsi</h2><p>Non riesco a leggerle adesso (${esc(t.code||t.message)}). Riprova quando sei collegato a internet.</p><div class="sync-az"><button class="btn chiaro" onclick="document.querySelector('#sync-fin').remove()">Chiudi</button></div>`)}}else if(e.matches("[data-sync-torna]")){let t=(N.storico||[]).find(i=>i.id===e.dataset.syncTorna);if(!t)return;let r=new Date(t.giorno+"T12:00").toLocaleDateString("it-IT",{day:"numeric",month:"long"});if(!confirm(`Riportare tutti i dati a com'erano alla fine del ${r}? Le modifiche fatte dopo si perdono (puoi annullare subito con Ctrl+Z).`))return;Et(),modifica(()=>{S=JSON.parse(t.json),migra()}),toast("Dati riportati al "+r,!0)}else e.matches("[data-sync-info]")&&Tt(`<h2>Sincronizzazione</h2><p>${N.user?`Collegato come <b>${esc(N.user.email)}</b>.<br>Stato: ${Pf[N.stato]}${N.remota&&N.remota.agg&&N.remota.agg.toDate?", ultima versione online del "+N.remota.agg.toDate().toLocaleString("it-IT"):""}.`:"Non collegato: le modifiche restano in questo browser."}</p>
    <div class="sync-az">${N.user?'<button class="btn" data-sync-storico>Versioni dei giorni scorsi</button><button class="btn chiaro" data-sync-esci>Esci</button>':'<button class="btn" data-sync-login>Accedi con Google</button>'}<button class="btn chiaro" onclick="document.querySelector('#sync-fin').remove()">Chiudi</button></div>`)},!0);document.addEventListener("change",n=>{n.target.id!=="sync-file"||!n.target.files[0]||leggiFile(n.target.files[0],e=>{try{let t=JSON.parse(e);if(!t.movimenti||!t.impostazioni)throw 0;S=t,migra(),salva(),render(),Et(),N.primo=!1,N.ver=0,N.pend=!0,Jt(!0),toast("Backup caricato online",!0)}catch{toast("Questo file non \xE8 un backup valido")}})},!0);yu();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
  *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
*/

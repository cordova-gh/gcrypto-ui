webpackJsonp([0],{"21It":function(t,e,r){"use strict";var a=r("FtD3");t.exports=function(t,e,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(a("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},"5VQ+":function(t,e,r){"use strict";var a=r("cGG2");t.exports=function(t,e){a.forEach(t,function(r,a){a!==e&&a.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[a])})}},"7GwW":function(t,e,r){"use strict";var a=r("cGG2"),n=r("21It"),i=r("p1b6"),s=r("DQCr"),o=r("Oi+a"),c=r("oJlt"),l=r("GHBc"),u=r("FtD3");t.exports=function(t){return new Promise(function(e,r){var f=t.data,p=t.headers;a.isFormData(f)&&delete p["Content-Type"],(a.isBlob(f)||a.isFile(f))&&f.type&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",v=unescape(encodeURIComponent(t.auth.password))||"";p.Authorization="Basic "+btoa(h+":"+v)}var m=o(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),s(m,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:a,config:t,request:d};n(e,r,i),d=null}},d.onabort=function(){d&&(r(u("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(u(e,t,"ECONNABORTED",d)),d=null},a.isStandardBrowserEnv()){var _=(t.withCredentials||l(m))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;_&&(p[t.xsrfHeaderName]=_)}if("setRequestHeader"in d&&a.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),a.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),r(t),d=null)}),f||(f=null),d.send(f)})}},"7HwZ":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mtWM"),n=r.n(a),i={data:function(){return{list:[],parametroPair:{},visualizzaForm:!1,urlApi:"https://gcrypto.herokuapp.com",service:"/parametro-pair-cvs",titleForm:"Salva"}},created:function(){this.getAllEntities()},methods:{saveEntity:function(){var t=this;return n.a.post(this.urlApi+this.service,this.parametroPair,{headers:{Accept:"application/json","Content-type":"application/json"}}).then(function(e){return t.visualizzaForm=!1,t.getAllEntities(),e.data}).catch(function(t){return"An error occured.."+t})},prepareInsert:function(){this.parametroPair={},this.visualizzaForm=!0},deleteEntity:function(t){var e=this;n.a.delete(this.urlApi+this.service+"/"+t).then(function(){e.getAllEntities()})},getAllEntities:function(){var t=this;n.a.get(this.urlApi+this.service).then(function(e){t.list=e.data})},editEntity:function(t){var e=this;n.a.get(this.urlApi+this.service+"/"+t).then(function(t){e.parametroPair=t.data,e.visualizzaForm=!0})},back:function(){this.visualizzaForm=!1}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.visualizzaForm?r("div",{staticClass:"container bg bg-light border rounded py-3"},[r("h3",{staticClass:"bg-white"},[t._v("Form Parametro Pair")]),t._v(" "),r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.saveEntity(e)}}},[r("div",{staticClass:"form-group row justify-content-md-center"},[r("label",{staticClass:"col-2",attrs:{for:"first"}},[t._v("First:")]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-6 col-lg-2 "},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroPair.first_cv,expression:"parametroPair.first_cv"}],staticClass:"form-control",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text",maxlength:"4"},domProps:{value:t.parametroPair.first_cv},on:{input:function(e){e.target.composing||t.$set(t.parametroPair,"first_cv",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-md-center"},[r("label",{staticClass:"col-2",attrs:{for:"second"}},[t._v("Second:")]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-6 col-lg-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroPair.second_cv,expression:"parametroPair.second_cv"}],staticClass:"form-control",staticStyle:{"text-transform":"uppercase"},attrs:{type:"text",maxlength:"4"},domProps:{value:t.parametroPair.second_cv},on:{input:function(e){e.target.composing||t.$set(t.parametroPair,"second_cv",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-md-center"},[r("div",{staticClass:"col-sm-6 col-md-6 col-lg-2"},[r("input",{staticClass:"btn btn-block btn-dark",attrs:{type:"button",value:"Indietro"},on:{click:t.back}})]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-6 col-lg-2"},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.titleForm))])])])])])]):r("div",{staticClass:"container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row py-2"},[t._m(0),t._v(" "),r("div",{staticClass:"col-4 text-right"},[r("a",{attrs:{href:"#"},on:{click:t.prepareInsert}},[r("i",{staticClass:"fas fa-plus-circle"})])])])]),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),r("tbody",t._l(t.list,function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.first_cv))]),t._v(" "),r("td",[t._v(t._s(e.second_cv))]),t._v(" "),r("td",[r("a",{attrs:{href:"#"},on:{click:function(r){return t.editEntity(e.id)}}},[r("i",{staticClass:"far fa-edit"})]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(r){return t.deleteEntity(e.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8 text-left"},[e("h3",[this._v("Elenco Parametri Pairs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",[this._v("First")]),this._v(" "),e("th",[this._v("Second")]),this._v(" "),e("th",[this._v("Azioni")])])])}]},o=r("VU/8")(i,s,!1,null,null,null);e.default=o.exports},DQCr:function(t,e,r){"use strict";var a=r("cGG2");function n(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(a.isURLSearchParams(e))i=e.toString();else{var s=[];a.forEach(e,function(t,e){null!==t&&void 0!==t&&(a.isArray(t)?e+="[]":t=[t],a.forEach(t,function(t){a.isDate(t)?t=t.toISOString():a.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}if(i){var o=t.indexOf("#");-1!==o&&(t=t.slice(0,o)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},DUeU:function(t,e,r){"use strict";var a=r("cGG2");t.exports=function(t,e){e=e||{};var r={},n=["url","method","data"],i=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function c(t,e){return a.isPlainObject(t)&&a.isPlainObject(e)?a.merge(t,e):a.isPlainObject(e)?a.merge({},e):a.isArray(e)?e.slice():e}function l(n){a.isUndefined(e[n])?a.isUndefined(t[n])||(r[n]=c(void 0,t[n])):r[n]=c(t[n],e[n])}a.forEach(n,function(t){a.isUndefined(e[t])||(r[t]=c(void 0,e[t]))}),a.forEach(i,l),a.forEach(s,function(n){a.isUndefined(e[n])?a.isUndefined(t[n])||(r[n]=c(void 0,t[n])):r[n]=c(void 0,e[n])}),a.forEach(o,function(a){a in e?r[a]=c(t[a],e[a]):a in t&&(r[a]=c(void 0,t[a]))});var u=n.concat(i).concat(s).concat(o),f=Object.keys(t).concat(Object.keys(e)).filter(function(t){return-1===u.indexOf(t)});return a.forEach(f,l),r}},FtD3:function(t,e,r){"use strict";var a=r("t8qj");t.exports=function(t,e,r,n,i){var s=new Error(t);return a(s,e,r,n,i)}},GHBc:function(t,e,r){"use strict";var a=r("cGG2");t.exports=a.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(t){var a=t;return e&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=n(window.location.href),function(e){var r=a.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},"JP+z":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),a=0;a<r.length;a++)r[a]=arguments[a];return t.apply(e,r)}}},KCLY:function(t,e,r){"use strict";(function(e){var a=r("cGG2"),n=r("5VQ+"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!a.isUndefined(t)&&a.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o,c={adapter:("undefined"!=typeof XMLHttpRequest?o=r("7GwW"):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(o=r("7GwW")),o),transformRequest:[function(t,e){return n(e,"Accept"),n(e,"Content-Type"),a.isFormData(t)||a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)?t:a.isArrayBufferView(t)?t.buffer:a.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):a.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(t){c.headers[t]={}}),a.forEach(["post","put","patch"],function(t){c.headers[t]=a.merge(i)}),t.exports=c}).call(e,r("W2nU"))},"Oi+a":function(t,e,r){"use strict";var a=r("dIwP"),n=r("qRfI");t.exports=function(t,e){return t&&!a(e)?n(t,e):e}},TNV1:function(t,e,r){"use strict";var a=r("cGG2");t.exports=function(t,e,r){return a.forEach(r,function(r){t=r(t,e)}),t}},W2nU:function(t,e){var r,a,n=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{a="function"==typeof clearTimeout?clearTimeout:s}catch(t){a=s}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var t=o(p);u=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,u=!1,function(t){if(a===clearTimeout)return clearTimeout(t);if((a===s||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new h(t,e)),1!==l.length||u||o(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=v,n.addListener=v,n.once=v,n.off=v,n.removeListener=v,n.removeAllListeners=v,n.emit=v,n.prependListener=v,n.prependOnceListener=v,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},XmWM:function(t,e,r){"use strict";var a=r("cGG2"),n=r("DQCr"),i=r("fuGk"),s=r("xLtR"),o=r("DUeU");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=o(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=o(this.defaults,t),n(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},a.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,r){return this.request(o(r||{},{method:t,url:e}))}}),a.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,r,a){return this.request(o(a||{},{method:t,url:e,data:r}))}}),t.exports=c},cGG2:function(t,e,r){"use strict";var a=r("JP+z"),n=Object.prototype.toString;function i(t){return"[object Array]"===n.call(t)}function s(t){return void 0===t}function o(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==n.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function l(t){return"[object Function]"===n.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),i(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===n.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:o,isPlainObject:c,isUndefined:s,isDate:function(t){return"[object Date]"===n.call(t)},isFile:function(t){return"[object File]"===n.call(t)},isBlob:function(t){return"[object Blob]"===n.call(t)},isFunction:l,isStream:function(t){return o(t)&&l(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function r(r,a){c(e[a])&&c(r)?e[a]=t(e[a],r):c(r)?e[a]=t({},r):i(r)?e[a]=r.slice():e[a]=r}for(var a=0,n=arguments.length;a<n;a++)u(arguments[a],r);return e},extend:function(t,e,r){return u(e,function(e,n){t[n]=r&&"function"==typeof e?a(e,r):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},cWxy:function(t,e,r){"use strict";var a=r("dVOP");function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new a(t),e(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},dIwP:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,r){"use strict";function a(t){this.message=t}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,t.exports=a},fuGk:function(t,e,r){"use strict";var a=r("cGG2");function n(){this.handlers=[]}n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){a.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},gVBJ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mtWM"),n=r.n(a),i={data:function(){return{list:[],visualizzaForm:!1,parametroCandle:{},urlApi:"https://gcrypto.herokuapp.com",service:"/parametro-candle-cvs"}},created:function(){this.getAllEntities()},methods:{saveEntity:function(){var t=this;return n.a.post(this.urlApi+this.service,this.parametroPair,{headers:{Accept:"application/json","Content-type":"application/json"}}).then(function(e){return t.visualizzaForm=!1,t.getAllEntities(),e.data}).catch(function(t){return"An error occured.."+t})},prepareInsert:function(){this.parametroCandle={},this.visualizzaForm=!0},deleteEntity:function(t){var e=this;n.a.delete(this.urlApi+this.service+"/"+t).then(function(){e.getAllEntities()})},getAllEntities:function(){var t=this;n.a.get(this.urlApi+this.service).then(function(e){t.list=e.data})},editEntity:function(t){var e=this;n.a.get(this.urlApi+this.service+"/"+t).then(function(t){e.parametroCandle=t.data,e.visualizzaForm=!0})},back:function(){this.visualizzaForm=!1}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.visualizzaForm?t._e():r("div",{staticClass:"container"},[r("h1",[t._v("Parametro Candles")]),t._v(" "),r("div",{staticClass:"col-12 text-right"},[r("a",{attrs:{href:"#"},on:{click:t.prepareInsert}},[r("i",{staticClass:"fas fa-plus-circle"})])]),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),r("tbody",t._l(t.list,function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.id_parametro_pair_cv))]),t._v(" "),r("td",[t._v(t._s(e.intervallo))]),t._v(" "),r("td",[t._v(t._s(e.diff_alert_low))]),t._v(" "),r("td",[t._v(t._s(e.diff_alert_medium))]),t._v(" "),r("td",[t._v(t._s(e.diff_alert_high))]),t._v(" "),r("td",[t._v(t._s(e.perc_alert))]),t._v(" "),r("td",[t._v(t._s(e.bearish_bullish_count))]),t._v(" "),r("td",[r("a",{attrs:{href:"#"},on:{click:function(r){return t.editEntity(e.id)}}},[r("i",{staticClass:"far fa-edit"})]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(r){return t.deleteEntity(e.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])])])}),0)])]),t._v(" "),t.visualizzaForm?r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.saveEntity(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"alert"}},[t._v("Intervallo:")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.intervallo,expression:"parametroCandle.intervallo"}],staticClass:"form-control col-2",attrs:{type:"text",id:"alert"},domProps:{value:t.parametroCandle.intervallo},on:{input:function(e){e.target.composing||t.$set(t.parametroCandle,"intervallo",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"alert"}},[t._v("Alert Low:")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.diff_alert_low,expression:"parametroCandle.diff_alert_low"}],staticClass:"form-control col-2",attrs:{type:"text",id:"alert"},domProps:{value:t.parametroCandle.diff_alert_low},on:{input:function(e){e.target.composing||t.$set(t.parametroCandle,"diff_alert_low",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"alert"}},[t._v("Alert Medium:")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.diff_alert_medium,expression:"parametroCandle.diff_alert_medium"}],staticClass:"form-control col-2",attrs:{type:"text",id:"alert"},domProps:{value:t.parametroCandle.diff_alert_medium},on:{input:function(e){e.target.composing||t.$set(t.parametroCandle,"diff_alert_medium",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"alert"}},[t._v("Alert High:")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.diff_alert_high,expression:"parametroCandle.diff_alert_high"}],staticClass:"form-control col-2",attrs:{type:"text",id:"alert"},domProps:{value:t.parametroCandle.diff_alert_high},on:{input:function(e){e.target.composing||t.$set(t.parametroCandle,"diff_alert_high",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-sm-2"},[t._v("Percentual:")]),t._v(" "),r("div",{staticClass:"col-sm-2"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.perc_alert,expression:"parametroCandle.perc_alert"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck1"},domProps:{checked:Array.isArray(t.parametroCandle.perc_alert)?t._i(t.parametroCandle.perc_alert,null)>-1:t.parametroCandle.perc_alert},on:{change:function(e){var r=t.parametroCandle.perc_alert,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&t.$set(t.parametroCandle,"perc_alert",r.concat([null])):i>-1&&t.$set(t.parametroCandle,"perc_alert",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.parametroCandle,"perc_alert",n)}}})])])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-sm-2"},[t._v("BB Count:")]),t._v(" "),r("div",{staticClass:"col-sm-2"},[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.parametroCandle.bearish_bullish_count,expression:"parametroCandle.bearish_bullish_count"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck1"},domProps:{checked:Array.isArray(t.parametroCandle.bearish_bullish_count)?t._i(t.parametroCandle.bearish_bullish_count,null)>-1:t.parametroCandle.bearish_bullish_count},on:{change:function(e){var r=t.parametroCandle.bearish_bullish_count,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&t.$set(t.parametroCandle,"bearish_bullish_count",r.concat([null])):i>-1&&t.$set(t.parametroCandle,"bearish_bullish_count",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.parametroCandle,"bearish_bullish_count",n)}}})])])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-sm-5"},[r("input",{staticClass:"btn btn-dark",attrs:{type:"botton",value:"Back"},on:{click:t.back}}),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Salva")])])])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"table table-dark"},[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Intervallo")]),t._v(" "),r("th",[t._v("Alert Low")]),t._v(" "),r("th",[t._v("Alert Medium")]),t._v(" "),r("th",[t._v("Alert High")]),t._v(" "),r("th",[t._v("Percentual")]),t._v(" "),r("th",[t._v("BB count")]),t._v(" "),r("th",[t._v("Azioni")])])])}]},o=r("VU/8")(i,s,!1,null,null,null);e.default=o.exports},mtWM:function(t,e,r){t.exports=r("tIFN")},oJlt:function(t,e,r){"use strict";var a=r("cGG2"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,s={};return t?(a.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=a.trim(t.substr(0,i)).toLowerCase(),r=a.trim(t.substr(i+1)),e){if(s[e]&&n.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}}),s):s}},p1b6:function(t,e,r){"use strict";var a=r("cGG2");t.exports=a.isStandardBrowserEnv()?{write:function(t,e,r,n,i,s){var o=[];o.push(t+"="+encodeURIComponent(e)),a.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),a.isString(n)&&o.push("path="+n),a.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},snZQ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mtWM"),n=r.n(a),i={data:function(){return{list:[],alertPrice:{},visualizzaForm:!1,urlApi:"https://gcrypto.herokuapp.com",service:"/alert-prices",titleForm:"Salva"}},created:function(){this.getAllEntities()},methods:{saveEntity:function(){var t=this;return n.a.post(this.urlApi+this.service,this.alertPrice,{headers:{Accept:"application/json","Content-type":"application/json"}}).then(function(e){return t.visualizzaForm=!1,t.getAllEntities(),e.data}).catch(function(t){return"An error occured.."+t})},prepareInsert:function(){this.alertPrice={},this.visualizzaForm=!0},deleteEntity:function(t){var e=this;n.a.delete(this.urlApi+this.service+"/"+t).then(function(){return e.getAllEntities()})},getAllEntities:function(){var t=this;n.a.get(this.urlApi+this.service).then(function(e){t.list=e.data})},editEntity:function(t){var e=this;n.a.get(this.urlApi+this.service+"/"+t).then(function(t){e.alertPrice=t.data,e.visualizzaForm=!0})},back:function(){this.visualizzaForm=!1}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.visualizzaForm?t._e():r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"col-11 text-right"},[r("a",{attrs:{href:"#"},on:{click:t.prepareInsert}},[r("i",{staticClass:"fas fa-plus-circle"})])]),t._v(" "),r("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),r("tbody",t._l(t.list,function(e,a){return r("tr",{key:a},[r("td",[t._v(t._s(e.id_parametro_pair_cv))]),t._v(" "),r("td",[t._v(t._s(e.price))]),t._v(" "),r("td",[t._v(t._s(e.flag_enable))]),t._v(" "),r("td",[t._v(t._s(e.is_support))]),t._v(" "),r("td",[r("a",{attrs:{href:"#"},on:{click:function(r){return t.editEntity(e.id)}}},[r("i",{staticClass:"far fa-edit"})]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(r){return t.deleteEntity(e.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])])])}),0)])]),t._v(" "),t.visualizzaForm?r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.saveEntity(e)}}},[r("div",{staticClass:"form-row align-items-center"},[r("div",{staticClass:"col-auto"},[r("label",{staticClass:"sr-only",attrs:{for:"Price"}},[t._v("Price")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.alertPrice.price,expression:"alertPrice.price"}],staticClass:"form-control mb-2",attrs:{type:"text"},domProps:{value:t.alertPrice.price},on:{input:function(e){e.target.composing||t.$set(t.alertPrice,"price",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"form-check mb-2"},[r("label",{staticClass:"form-check-label",attrs:{for:"Enable"}},[t._v("Enable")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.alertPrice.flag_enable,expression:"alertPrice.flag_enable"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.alertPrice.flag_enable)?t._i(t.alertPrice.flag_enable,null)>-1:t.alertPrice.flag_enable},on:{change:function(e){var r=t.alertPrice.flag_enable,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&t.$set(t.alertPrice,"flag_enable",r.concat([null])):i>-1&&t.$set(t.alertPrice,"flag_enable",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.alertPrice,"flag_enable",n)}}})])]),t._v(" "),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"form-check mb-2"},[r("label",{staticClass:"form-check-label",attrs:{for:"Support"}},[t._v("Support")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.alertPrice.is_support,expression:"alertPrice.is_support"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.alertPrice.is_support)?t._i(t.alertPrice.is_support,null)>-1:t.alertPrice.is_support},on:{change:function(e){var r=t.alertPrice.is_support,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&t.$set(t.alertPrice,"is_support",r.concat([null])):i>-1&&t.$set(t.alertPrice,"is_support",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.alertPrice,"is_support",n)}}})])]),t._v(" "),r("div",{staticClass:"form-group row justify-content-md-center"},[r("div",{staticClass:"col-2"},[r("input",{staticClass:"btn btn-block btn-dark",attrs:{type:"button",value:"Indietro"},on:{click:t.back}})]),t._v(" "),r("div",{staticClass:"col-2"},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.titleForm))])])])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Alert Prices")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",[t._v("ID")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Enable")]),t._v(" "),r("th",[t._v("Is support")]),t._v(" "),r("th",[t._v("Azioni")])])])}]},o=r("VU/8")(i,s,!1,null,null,null);e.default=o.exports},t8qj:function(t,e,r){"use strict";t.exports=function(t,e,r,a,n){return t.config=e,r&&(t.code=r),t.request=a,t.response=n,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},tIFN:function(t,e,r){"use strict";var a=r("cGG2"),n=r("JP+z"),i=r("XmWM"),s=r("DUeU");function o(t){var e=new i(t),r=n(i.prototype.request,e);return a.extend(r,i.prototype,e),a.extend(r,e),r}var c=o(r("KCLY"));c.Axios=i,c.create=function(t){return o(s(c.defaults,t))},c.Cancel=r("dVOP"),c.CancelToken=r("cWxy"),c.isCancel=r("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=r("pxG4"),t.exports=c,t.exports.default=c},vu9I:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("h1",[this._v("This is an about page")]),this._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[this._v("\n    Profile\n    "),e("span",{staticClass:"badge badge-light"},[this._v("9")]),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("unread messages")])])])}]},n=r("VU/8")(null,a,!1,null,null,null);e.default=n.exports},xLtR:function(t,e,r){"use strict";var a=r("cGG2"),n=r("TNV1"),i=r("pBtG"),s=r("KCLY");function o(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return o(t),t.headers=t.headers||{},t.data=n(t.data,t.headers,t.transformRequest),t.headers=a.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),a.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return o(t),e.data=n(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(o(t),e&&e.response&&(e.response.data=n(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=0.856a6df852d0ba64ef10.js.map
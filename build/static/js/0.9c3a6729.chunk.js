(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{53:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},54:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},55:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}n.d(e,"a",(function(){return a}))},56:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},57:function(t,e,n){"use strict";n.d(e,"a",(function(){return L})),n.d(e,"b",(function(){return G}));var o=n(0),r=n.n(o);function s(t){var e,n,o="";if("string"===typeof t||"number"===typeof t)o+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=s(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=s(t))&&(o&&(o+=" "),o+=e);return o},i=n(16);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){return"number"===typeof t&&!isNaN(t)}function l(t){return"boolean"===typeof t}function f(t){return"string"===typeof t}function d(t){return"function"===typeof t}function p(t){return f(t)||d(t)?t:null}function g(t){return 0===t||t}var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(t){return Object(o.isValidElement)(t)||f(t)||d(t)||u(t)}var v={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function O(t){var e=t.enter,n=t.exit,s=t.appendPosition,a=void 0!==s&&s,i=t.collapse,c=void 0===i||i,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var s=t.children,i=t.position,u=t.preventExitTransition,f=t.done,d=t.nodeRef,p=t.isIn,g=a?e+"--"+i:e,m=a?n+"--"+i:n,y=Object(o.useRef)(),v=Object(o.useRef)(0);function b(){var t=d.current;t.removeEventListener("animationend",b),0===v.current&&(t.className=y.current)}function O(){var t=d.current;t.removeEventListener("animationend",O),c?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()}return Object(o.useLayoutEffect)((function(){!function(){var t=d.current;y.current=t.className,t.className+=" "+g,t.addEventListener("animationend",b)}()}),[]),Object(o.useEffect)((function(){p||(u?O():function(){v.current=1;var t=d.current;t.className+=" "+m,t.addEventListener("animationend",O)}())}),[p]),r.a.createElement(r.a.Fragment,null,s)}}var h={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function T(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function E(t,e){switch(e.type){case 0:return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case 1:return g(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function C(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(E,[]),r=n[0],s=n[1],a=Object(o.useRef)(null),i=T(0),c=T([]),m=T({}),v=T({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:b,getToast:function(t){return m[t]||null}});function b(t){return-1!==r.indexOf(t)}function O(t){var e=t.containerId,n=v.props,o=n.limit,r=n.enableMultiContainer;o&&(!e||v.containerId===e&&r)&&(i-=c.length,c=[])}function C(t){s({type:1,toastId:t})}function I(){var t=c.shift();_(t.toastContent,t.toastProps,t.staleId)}function j(t,n){var r=n.delay,s=n.staleId,b=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(n,["delay","staleId"]);if(y(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!a.current||v.props.enableMultiContainer&&e!==v.props.containerId||m[n]&&null==o)}(b)){var O=b.toastId,h=b.updateId,T=v.props,E=function(){return C(O)},j=null==b.updateId;j&&i++;var R,w,P={toastId:O,updateId:h,isIn:!1,key:b.key||v.toastKey++,type:b.type,closeToast:E,closeButton:b.closeButton,rtl:T.rtl,position:b.position||T.position,transition:b.transition||T.transition,className:p(b.className||T.toastClassName),bodyClassName:p(b.bodyClassName||T.bodyClassName),style:b.style||T.toastStyle,bodyStyle:b.bodyStyle||T.bodyStyle,onClick:b.onClick||T.onClick,pauseOnHover:l(b.pauseOnHover)?b.pauseOnHover:T.pauseOnHover,pauseOnFocusLoss:l(b.pauseOnFocusLoss)?b.pauseOnFocusLoss:T.pauseOnFocusLoss,draggable:l(b.draggable)?b.draggable:T.draggable,draggablePercent:u(b.draggablePercent)?b.draggablePercent:T.draggablePercent,draggableDirection:b.draggableDirection||T.draggableDirection,closeOnClick:l(b.closeOnClick)?b.closeOnClick:T.closeOnClick,progressClassName:p(b.progressClassName||T.progressClassName),progressStyle:b.progressStyle||T.progressStyle,autoClose:(R=b.autoClose,w=T.autoClose,!1===R||u(R)&&R>0?R:w),hideProgressBar:l(b.hideProgressBar)?b.hideProgressBar:T.hideProgressBar,progress:b.progress,role:f(b.role)?b.role:T.role,deleteToast:function(){!function(t){delete m[t];var n=c.length;(i=g(t)?i-1:i-v.displayedToast)<0&&(i=0);if(n>0){var o=g(t)?1:v.props.limit;if(1===n||1===o)v.displayedToast++,I();else{var r=o>n?n:o;v.displayedToast=r;for(var s=0;s<r;s++)I()}}else e()}(O)}};d(b.onOpen)&&(P.onOpen=b.onOpen),d(b.onClose)&&(P.onClose=b.onClose),"y"===P.draggableDirection&&80===P.draggablePercent&&(P.draggablePercent*=1.5);var N=T.closeButton;!1===b.closeButton||y(b.closeButton)?N=b.closeButton:!0===b.closeButton&&(N=!y(T.closeButton)||T.closeButton),P.closeButton=N;var L=t;Object(o.isValidElement)(t)&&!f(t.type)?L=Object(o.cloneElement)(t,{closeToast:E,toastProps:P}):d(t)&&(L=t({closeToast:E,toastProps:P})),T.limit&&T.limit>0&&i>T.limit&&j?c.push({toastContent:L,toastProps:P,staleId:s}):u(r)&&r>0?setTimeout((function(){_(L,P,s)}),r):_(L,P,s)}}function _(t,e,n){var o=e.toastId;n&&delete m[n],m[o]={content:t,props:e},s({type:0,toastId:o,staleId:n})}return Object(o.useEffect)((function(){return v.containerId=t.containerId,h.cancelEmit(3).on(0,j).on(1,(function(t){return a.current&&C(t)})).on(5,O).emit(2,v),function(){return h.emit(3,v)}}),[]),Object(o.useEffect)((function(){v.isToastActive=b,v.displayedToast=r.length,h.emit(4,r.length,t.containerId)}),[r]),Object(o.useEffect)((function(){v.props=t})),{getToastToRender:function(e){for(var n={},o=t.newestOnTop?Object.keys(m).reverse():Object.keys(m),r=0;r<o.length;r++){var s=m[o[r]],a=s.props.position;n[a]||(n[a]=[]),n[a].push(s)}return Object.keys(n).map((function(t){return e(t,n[t])}))},collection:m,containerRef:a,isToastActive:b}}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function j(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function _(t){var e=Object(o.useState)(!0),n=e[0],r=e[1],s=Object(o.useState)(!1),a=s[0],i=s[1],c=Object(o.useRef)(null),u=T({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=T(t,!0),f=t.autoClose,p=t.pauseOnHover,g=t.closeToast,m=t.onClick,y=t.closeOnClick;function v(e){if(t.draggable){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=I(e.nativeEvent),u.y=j(e.nativeEvent),"x"===t.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(t.draggablePercent/100))}}function b(){if(u.boundingRect){var e=u.boundingRect,n=e.top,o=e.bottom,r=e.left,s=e.right;t.pauseOnHover&&u.x>=r&&u.x<=s&&u.y>=n&&u.y<=o?h():O()}}function O(){r(!0)}function h(){r(!1)}function E(e){if(u.canDrag){e.preventDefault();var o=c.current;n&&h(),u.x=I(e),u.y=j(e),"x"===t.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+t.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance))}}function C(){var e=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate"+t.draggableDirection+"(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return d(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){d(l.onClose)&&l.onClose(Object(o.isValidElement)(l.children)&&l.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",E),document.addEventListener("mouseup",C),document.addEventListener("touchmove",E),document.addEventListener("touchend",C)),function(){t.draggable&&(document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",C))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&function(){document.hasFocus()||h();window.addEventListener("focus",O),window.addEventListener("blur",h)}(),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",h))}}),[t.pauseOnFocusLoss]);var _={onMouseDown:v,onTouchStart:v,onMouseUp:b,onTouchEnd:b};return f&&p&&(_.onMouseEnter=h,_.onMouseLeave=O),y&&(_.onClick=function(t){m&&m(t),u.canCloseOnClick&&g()}),{playToast:O,pauseToast:h,isRunning:n,preventExitTransition:a,toastRef:c,eventHandlers:_}}function R(t){var e=t.closeToast,n=t.type,r=t.ariaLabel,s=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":s},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(t){var e,n,r=t.delay,s=t.isRunning,i=t.closeToast,u=t.type,l=t.hide,f=t.className,p=t.style,g=t.controlledProgress,m=t.progress,y=t.rtl,v=t.isIn,b=c({},p,{animationDuration:r+"ms",animationPlayState:s?"running":"paused",opacity:l?0:1});g&&(b.transform="scaleX("+m+")");var O=a("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((e={})["Toastify__progress-bar--rtl"]=y,e)),h=d(f)?f({rtl:y,type:u,defaultClassName:O}):a(O,f),T=((n={})[g&&m>=1?"onTransitionEnd":"onAnimationEnd"]=g&&m<1?null:function(){v&&i()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar",className:h,style:b},T))}w.defaultProps={type:b.DEFAULT,hide:!1};var P=function(t){var e,n=_(t),r=n.isRunning,s=n.preventExitTransition,i=n.toastRef,c=n.eventHandlers,u=t.closeButton,l=t.children,f=t.autoClose,p=t.onClick,g=t.type,m=t.hideProgressBar,y=t.closeToast,v=t.transition,b=t.position,O=t.className,h=t.style,T=t.bodyClassName,E=t.bodyStyle,C=t.progressClassName,I=t.progressStyle,j=t.updateId,R=t.role,P=t.progress,N=t.rtl,L=t.toastId,k=t.deleteToast,D=t.isIn,S=a("Toastify__toast","Toastify__toast--"+g,((e={})["Toastify__toast--rtl"]=N,e)),B=d(O)?O({rtl:N,position:b,type:g,defaultClassName:S}):a(S,O),x=!!P;return Object(o.createElement)(v,{isIn:D,done:k,position:b,preventExitTransition:s,nodeRef:i},Object(o.createElement)("div",Object.assign({id:L,onClick:p,className:B},c,{style:h,ref:i}),Object(o.createElement)("div",Object.assign({},D&&{role:R},{className:d(T)?T({type:g}):a("Toastify__toast-body",T),style:E}),l),function(t){if(t){var e={closeToast:y,type:g};return d(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}}(u),(f||x)&&Object(o.createElement)(w,Object.assign({},j&&!x?{key:"pb-"+j}:{},{rtl:N,delay:f,isRunning:r,isIn:D,closeToast:y,hide:m,type:g,style:I,className:C,controlledProgress:x,progress:P}))))},N=O({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),L=function(t){var e=C(t),n=e.getToastToRender,r=e.containerRef,s=e.isToastActive,i=t.className,u=t.style,l=t.rtl,f=t.containerId;function g(t){var e,n=a("Toastify__toast-container","Toastify__toast-container--"+t,((e={})["Toastify__toast-container--rtl"]=l,e));return d(i)?i({position:t,rtl:l,defaultClassName:n}):a(n,p(i))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:f},n((function(t,e){var n=0===e.length?c({},u,{pointerEvents:"none"}):c({},u);return Object(o.createElement)("div",{className:g(t),style:n,key:"container-"+t},e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(P,Object.assign({},n,{isIn:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?R:n.closeButton}),e)})))})))};L.defaultProps={position:v.TOP_RIGHT,transition:N,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var k,D,S,B=new Map,x=[],A=!1;function F(){return Math.random().toString(36).substr(2,9)}function M(t){return t&&(f(t.toastId)||u(t.toastId))?t.toastId:F()}function H(t,e){return B.size>0?h.emit(0,t,e):(x.push({content:t,options:e}),A&&m&&(A=!1,D=document.createElement("div"),document.body.appendChild(D),Object(i.render)(Object(o.createElement)(L,Object.assign({},S)),D))),e.toastId}function Q(t,e){return c({},e,{type:e&&e.type||t,toastId:M(e)})}var U=function(t){return function(e,n){return H(e,Q(t,n))}},G=function(t,e){return H(t,Q(b.DEFAULT,e))};G.success=U(b.SUCCESS),G.info=U(b.INFO),G.error=U(b.ERROR),G.warning=U(b.WARNING),G.dark=U(b.DARK),G.warn=G.warning,G.dismiss=function(t){return h.emit(1,t)},G.clearWaitingQueue=function(t){return void 0===t&&(t={}),h.emit(5,t)},G.isActive=function(t){var e=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},G.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=B.get(n||k);return o?o.getToast(t):null}(t,e);if(n){var o=n.props,r=n.content,s=c({},o,e,{toastId:e.toastId||t,updateId:F()});s.toastId!==t&&(s.staleId=t);var a=s.render||r;delete s.render,H(a,s)}}),0)},G.done=function(t){G.update(t,{progress:1})},G.onChange=function(t){return d(t)&&h.on(4,t),function(){d(t)&&h.off(4,t)}},G.configure=function(t){void 0===t&&(t={}),A=!0,S=t},G.POSITION=v,G.TYPE=b,h.on(2,(function(t){k=t.containerId||t,B.set(k,t),x.forEach((function(t){h.emit(0,t.content,t.options)})),x=[]})).on(3,(function(t){B.delete(t.containerId||t),0===B.size&&h.off(0).off(1).off(5),m&&D&&document.body.removeChild(D)}))}}]);
//# sourceMappingURL=0.9c3a6729.chunk.js.map
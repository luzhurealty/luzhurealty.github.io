(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){e.exports=a.p+"static/media/wx_qr.566bfd7c.jpeg"},200:function(e,t,a){e.exports=a(309)},205:function(e,t,a){},299:function(e,t,a){e.exports=a.p+"static/media/zhulu_logo.1c409427.png"},300:function(e,t,a){e.exports=a.p+"static/media/banner1.aa7b7fb6.jpeg"},301:function(e,t,a){e.exports=a.p+"static/media/done_1.da7d52c7.png"},302:function(e,t,a){e.exports=a.p+"static/media/done_2.0bf3ef74.png"},303:function(e,t,a){e.exports=a.p+"static/media/done_3.dbd2869e.png"},304:function(e,t,a){e.exports=a.p+"static/media/done_4.a5156e2a.png"},305:function(e,t,a){e.exports=a.p+"static/media/done_5.a5156e2a.png"},306:function(e,t,a){e.exports=a.p+"static/media/done_6.e9e5eb85.png"},307:function(e,t,a){e.exports=a.p+"static/media/1.db597d6a.mp4"},308:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),i=(a(205),a(32)),l=a(33),s=a(47),u=a(46),m=a(36),p=a(170),h=a(56),d=a(84),f=a(30),b=a(77),g=(a(125),a(57)),y=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,v=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var n="string"===typeof e.children&&e.children.match(y)?r.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(console.log(e.children),n=r.a.createElement(g.a,Object(b.a)({},e.children))),r.a.createElement(a,Object(b.a)({key:t.toString()},e),n)};function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var k=function(e){Object(s.a)(a,e);var t=O(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object(h.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a={queue:"bottom",one:{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"}};return r.a.createElement("div",Object.assign({},e,t.wrapper),r.a.createElement("div",t.page,r.a.createElement(d.a,Object.assign({key:"text",type:a.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},t.childWrapper,{componentProps:{md:t.childWrapper.md,xs:t.childWrapper.xs}}),t.childWrapper.children.map(v)),r.a.createElement(f.b,Object.assign({animation:a.one,key:"title"},t.image),r.a.createElement("img",{src:t.image.children,width:"100%",alt:"img"}))))}}]),a}(r.a.PureComponent),w=(a(165),a(97)),N=(a(167),a(96)),j=a(64),E=a.n(j);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var S=function(e){Object(s.a)(a,e);var t=x(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},e}return Object(l.a)(a,[{key:"goUrl",value:function(e){window.location.href=e}},{key:"render",value:function(){var e=this,t=Object(h.a)({},this.props),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var c=0,o=a.block.children.map(function(t,a){var o=t.children,i=n?50*a:e.getDelay(a,24/t.md),l={opacity:0,type:"from",ease:"easeOutQuad",delay:i},s=Object(b.a)({},l,{x:"+=10",delay:i+100});return c=(c+=t.md)>24?0:c,r.a.createElement(f.b,Object.assign({component:N.a,animation:l,key:t.name},t,{onClick:function(){return e.goUrl(t.url)},componentProps:{md:t.md,xs:t.xs},className:c?t.className:"".concat(t.className||""," clear-both").trim()}),r.a.createElement(f.b,Object.assign({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"},key:"img"},o.icon),r.a.createElement("img",{src:o.icon.children,width:"100%",alt:"img"})),r.a.createElement("div",o.textWrapper,r.a.createElement(f.b,Object.assign({key:"h2",animation:s,component:"h2"},o.title),o.title.children),r.a.createElement(f.b,Object.assign({key:"p",animation:Object(b.a)({},s,{delay:i+200}),component:"div"},o.content),o.content.children)))});return r.a.createElement("div",Object.assign({},t,a.wrapper),r.a.createElement("div",a.page,r.a.createElement("div",a.titleWrapper,a.titleWrapper.children.map(v)),r.a.createElement(E.a,a.OverPack,r.a.createElement(d.a,{key:"u",type:"bottom"},r.a.createElement(w.a,Object.assign({key:"row"},a.block),o)))))}}]),a}(r.a.PureComponent);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var _=function(e){Object(s.a)(a,e);var t=R(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).getChildrenToRender=function(e){return e.map(function(e){return r.a.createElement(N.a,Object.assign({key:e.name},e),r.a.createElement("a",e.children.wrapper,r.a.createElement("span",e.children.img,r.a.createElement("img",{src:e.children.img.children,height:"100%",alt:"img"})),r.a.createElement("p",e.children.content,e.children.content.children)))})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=Object(h.a)({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var a=this.getChildrenToRender(t.block.children);return r.a.createElement("div",Object.assign({},e,t.wrapper),r.a.createElement("div",t.page,r.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(v)),r.a.createElement(E.a,Object.assign({className:"content-template ".concat(e.className)},t.OverPack),r.a.createElement(f.a,Object.assign({component:w.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeInOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeInOutQuad"}},t.block),a))))}}]),a}(r.a.PureComponent),L=a(192),C=a.n(L);var M=function(e){var t=Object(h.a)({},e),a=t.dataSource,n=t.isMobile;delete t.dataSource,delete t.isMobile;var c=a.video.children.video,o=c.split("."),i=o[o.length-1];return r.a.createElement("div",Object.assign({},t,a.wrapper),r.a.createElement("div",a.page,r.a.createElement("div",Object.assign({key:"title"},a.titleWrapper),a.titleWrapper.children.map(v)),r.a.createElement(E.a,a.OverPack,r.a.createElement(f.b,Object.assign({key:"video",animation:Object(b.a)({},{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"},{delay:300})},a.video),n?r.a.createElement("video",{width:"100%",loop:!0,controls:!0,poster:a.video.children.image},r.a.createElement("source",{src:c,type:"video/".concat(i)}),r.a.createElement("track",{kind:"captions"})):r.a.createElement(C.a,{loop:!0,width:"100%",poster:a.video.children.image},r.a.createElement("source",{src:c,type:"video/".concat(i)}))))))},W=(a(269),a(198)),P=a(68);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var z=function(e){Object(s.a)(a,e);var t=B(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onTitleClick=function(e,t){n.carouselRef.current.childRefs.carousel.goTo(t)},n.onBeforeChange=function(e,t){n.setState({current:t})},n.getChildrenToRender=function(e){var t=n.state.current,a=e.Carousel,c=e.childWrapper,o=a.children,i=(a.wrapper,Object(P.a)(a,["children","wrapper"])),l=o.titleWrapper,s=o.children,u=Object(P.a)(o,["titleWrapper","children"]),m=(l.barWrapper,l.title),p=Object(P.a)(l,["barWrapper","title"]),f=[],b=s.map(function(e,a){var c=e.title,o=e.children,i=Object(P.a)(e,["title","children"]);s.length>1&&f.push(r.a.createElement("div",Object.assign({},c,{key:a.toString(),onClick:function(e){n.onTitleClick(e,a)},className:a===t?"".concat(c.className||""," active"):c.className}),c.children));var l=o.map(function(e,t){var a=e.children,n=e.arrow,c=Object(P.a)(e,["children","arrow"]),o=Object(h.a)({},a);return r.a.createElement(N.a,Object.assign({},c,{key:t.toString()}),r.a.createElement("div",o,a.children.map(v)),n&&r.a.createElement("div",n,r.a.createElement("img",{src:n.children,alt:"img"})))});return r.a.createElement("div",{key:a.toString()},r.a.createElement(d.a,Object.assign({component:w.a,type:"bottom",componentProps:{type:"flex"}},i),l))});return r.a.createElement(d.a,Object.assign({key:"queue",type:"bottom",ref:n.carouselRef},u),s.length>1&&r.a.createElement("div",Object.assign({},p,{key:"title"}),r.a.createElement("div",m,f)),r.a.createElement(W.a,Object.assign({key:"carousel"},i,{infinite:!1,beforeChange:n.onBeforeChange}),b),r.a.createElement("div",Object.assign({key:"button"},c),c.children.map(v)))},n.carouselRef=r.a.createRef(),n.state={current:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(P.a)(e,["dataSource","isMobile"])),n=t.titleWrapper;return r.a.createElement("div",Object.assign({},a,t.wrapper),r.a.createElement("div",t.page,r.a.createElement("div",t.titleWrapper,n.children.map(v)),r.a.createElement(E.a,t.OverPack,this.getChildrenToRender(t))))}}]),a}(r.a.PureComponent);function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var F=function(e){Object(s.a)(a,e);var t=T(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object(h.a)({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,r.a.createElement("div",Object.assign({},e,t.wrapper),r.a.createElement(E.a,t.OverPack,r.a.createElement(f.b,Object.assign({animation:{y:"+=30",opacity:0,type:"from"},key:"footer"},t.copyright),t.copyright.children)))}}]),a}(r.a.PureComponent),I=(a(282),a(150));function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var q=I.a.Item,A=I.a.SubMenu,G=function(e){Object(s.a)(a,e);var t=Q(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).phoneClick=function(){var e=!n.state.phoneOpen;n.setState({phoneOpen:e})},n.state={phoneOpen:void 0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,n=t.isMobile,c=Object(P.a)(t,["dataSource","isMobile"]),o=this.state.phoneOpen,i=a.Menu.children.map(function(e){var t=e.children,a=e.subItem,n=Object(P.a)(e,["children","subItem"]);return a?r.a.createElement(A,Object.assign({key:e.name},n,{title:r.a.createElement("div",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(v)),popupClassName:"header0-item-child"}),a.map(function(e,t){var a=e.children,n=a.href?r.a.createElement("a",a,a.children.map(v)):r.a.createElement("div",a,a.children.map(v));return r.a.createElement(q,Object.assign({key:e.name||t.toString()},e),n)})):r.a.createElement(q,Object.assign({key:e.name},n),r.a.createElement("a",Object.assign({},t,{className:"header0-item-block ".concat(t.className).trim()}),t.children.map(v)))}),l=void 0===o?300:null;return r.a.createElement(f.b,Object.assign({component:"header",animation:{opacity:0,type:"from"}},a.wrapper,c),r.a.createElement("div",Object.assign({},a.page,{className:"".concat(a.page.className).concat(o?" open":"")}),r.a.createElement(f.b,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),r.a.createElement("img",{width:"100%",className:"zhulu-logo",src:a.logo.children,alt:"img"})),n&&r.a.createElement("div",Object.assign({},a.mobileMenu,{onClick:function(){e.phoneClick()}}),r.a.createElement("em",null),r.a.createElement("em",null),r.a.createElement("em",null)),r.a.createElement(f.b,Object.assign({},a.Menu,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:l,reverse:!!o}),r.a.createElement(I.a,{mode:n?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark"},i))))}}]),a}(r.a.Component),D=(a(285),a(106)),U=(a(287),a(151)),$=(a(289),a(197)),H=(a(291),a(139)),K=a(195),J=a(103),V=a(313);function Y(){Y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(R){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var c=t&&t.prototype instanceof p?t:p,o=Object.create(c.prototype),i=new E(r||[]);return n(o,"_invoke",{value:k(e,a,i)}),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(R){return{type:"throw",arg:R}}}e.wrap=s;var m={};function p(){}function h(){}function d(){}var f={};l(f,c,function(){return this});var b=Object.getPrototypeOf,g=b&&b(b(x([])));g&&g!==t&&a.call(g,c)&&(f=g);var y=d.prototype=p.prototype=Object.create(f);function v(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){var r;n(this,"_invoke",{value:function(n,c){function o(){return new t(function(r,o){!function n(r,c,o,i){var l=u(e[r],e,c);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,o,i)},function(e){n("throw",e,o,i)}):t.resolve(m).then(function(e){s.value=e,o(s)},function(e){return n("throw",e,o,i)})}i(l.arg)}(n,c,r,o)})}return r=r?r.then(o,o):o()}})}function k(e,t,a){var n="suspendedStart";return function(r,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw c;return S()}for(a.method=r,a.arg=c;;){var o=a.delegate;if(o){var i=w(o,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function w(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var c=r.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(O.prototype),l(O.prototype,o,function(){return this}),e.AsyncIterator=O,e.async=function(t,a,n,r,c){void 0===c&&(c=Promise);var o=new O(s(t,a,n,r),c);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},v(y),l(y,i,"Generator"),l(y,c,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var Z,X=function(){var e=Object(n.useState)(!1),t=Object(J.a)(e,2),c=t[0],o=t[1],i=function(){var e=Object(K.a)(Y().mark(function e(t){return Y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),Object(V.a)({method:"POST",url:"https://formspree.io/f/xqkopbnk",data:t}).then(function(e){H.b.success("\u53d1\u9001\u6210\u529f\uff01"),o(!1)}).catch(function(){o(!1)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"content-us"},r.a.createElement("h1",{name:"title",className:"title-h1"},"\u8054\u7cfb\u6211-\u70b9\u51fb\u4e8c\u7ef4\u7801"),r.a.createElement($.a,{width:"50%",src:a(169)}),r.a.createElement("h1",{name:"title",className:"title-h1"},"\u8054\u7cfb\u6211-\u7559\u4e0b\u60a8\u7684\u90ae\u7bb1"),r.a.createElement(D.a,{name:"basic",style:{width:"80%"},labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:i,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"},r.a.createElement(D.a.Item,{label:"\u60a8\u7684\u59d3\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"}]},r.a.createElement(U.a,null)),r.a.createElement(D.a.Item,{label:"\u60a8\u7684\u90ae\u7bb1",name:"email",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\uff0c\u6211\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb"}]},r.a.createElement(U.a,null)),r.a.createElement(D.a.Item,{label:"\u7559\u8a00",name:"message",rules:[{message:"\u8bf7\u8f93\u5165\u60a8\u7684\u7559\u8a00"}]},r.a.createElement(U.a.TextArea,null)),r.a.createElement(D.a.Item,{wrapperCol:{offset:8,span:16}},r.a.createElement(g.a,{type:"primary",htmlType:"submit",loading:c},"\u786e\u5b9a"))))},ee=(a(297),a(172)),te={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:a(299)},Menu:{className:"header0-menu",children:[]},mobileMenu:{className:"header0-mobile-menu"}},ae={wrapper:{className:"home-page-wrapper banner5"},page:{className:"home-page banner5-page"},childWrapper:{className:"banner5-title-wrapper",children:[{name:"title",children:"\u6731\u7490 \u2013 \u7ebd\u7ea6\u5962\u5b85",className:"banner5-title"},{name:"explain",className:"banner5-explain",children:"\u7ebd\u7ea6\u9ad8\u7aef\u5730\u4ea7\u4e13\u4e1a\u54a8\u8be2\u95e8\u6237"},{name:"content",className:"banner5-content",children:"\u6731\u7490 & \u5979\u7684\u56e2\u961f\n\u884c\u4e8b\u98ce\u683c \u2013 \u771f\u8bda\u3001\u4e13\u4e1a\u3001\u9ad8\u6548\u3002\n\u5341\u5e74\u591a\u7684\u534e\u5c14\u8857\u80cc\u666f\u7ed9\u4e86\u6211\u624e\u5b9e\u7684\u5e02\u573a\u6570\u636e\u5206\u6790\u548c\u4e0e\u4eba\u6c9f\u901a\u7684\u80fd\u529b\u3002\u5728\u8fc7\u53bb\u51e0\u5e74\u4e2d\u6211\u5e2e\u52a9\u4e86\u5f88\u591a\u4e2d\u56fd\u548c\u7f8e\u56fd\u5f53\u5730\u7684\u5ba2\u6237\u5728\u7ebd\u7ea6\u505a\u623f\u4ea7\u6295\u8d44\uff0c\u6210\u4ea4\u91cf\u8fc7\u5343\u4e07\u7f8e\u91d1\u3002\u51ed\u501f\u5bf9\u5ba2\u6237\u9700\u6c42\u7684\u51c6\u786e\u6d1e\u6089\u3001\u8ba4\u771f\u548c\u6301\u4e4b\u4ee5\u6052\u7684\u6001\u5ea6\u3001\u6df1\u539a\u7684\u8c08\u5224\u529f\u5e95\uff0c\u83b7\u5f97\u4e86\u5f88\u591a\u5ba2\u4eba\u7684\u4fe1\u4efb\u548c\u8d5e\u8a89\u3002\u4fdd\u969c\u5ba2\u6237\u7684\u5229\u76ca\u6700\u5927\u5316\u662f\u6211\u59cb\u7ec8\u5982\u4e00\u7684\u804c\u4e1a\u4fe1\u6761\u3002\u4f5c\u4e3a\u7ebd\u7ea6\u623f\u5730\u4ea7\u8463\u4e8b\u4f1a (REBNY) \u7684\u4f1a\u5458\uff0c\u591a\u5e74\u7684\u7ecf\u9a8c\u79ef\u7d2f\u4f7f\u6211\u5bf9\u7ebd\u7ea6\u7684\u793e\u533a\u3001\u697c\u76d8\u4e86\u5982\u6307\u638c\u3002\u6211\u8fd8\u6709\u5e9e\u5927\u7684\u793e\u4f1a\u8d44\u6e90\u7f51\u3001\u4e13\u4e1a\u7684\u5f8b\u5e08\u4e0e\u8d37\u6b3e\u56e2\u961f\uff0c\u80fd\u591f\u5728\u7b2c\u4e00\u65f6\u95f4\u4e3a\u5ba2\u6237\u89e3\u51b3\u95ee\u9898\u3002\u6211\u7684\u56e2\u961fLEVEN\u662f\u4e00\u4e2a\u901a\u665312\u79cd\u56fd\u5bb6\u8bed\u8a00\u7684\u591a\u5143\u5316\u4e13\u4e1a\u56e2\u961f\uff0c\u6211\u4eec\u6709\u5341\u591a\u5e74\u4ece\u4e8b\u623f\u5730\u4ea7\u4e70\u3001\u5356\u3001\u79df\u8d41\u548c\u7269\u4e1a\u7ba1\u7406\u7684\u7ecf\u9a8c\u3002\u4e3a\u5ba2\u6237\u63d0\u4f9b\u4e00\u6761\u9f99\u670d\u52a1\u3002\u6b64\u5916\u6211\u4eec\u5bf9\u5ba2\u6237\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u9700\u6c42\u4f1a\u7ed9\u4e0e\u5c0a\u91cd\u4e0e\u4fdd\u5bc6\u3002"},{name:"button",className:"banner5-button-wrapper",children:{className:"banner5-button",type:"primary",children:"\u8054\u7cfb\u5979",onClick:function(){ee.a.info({title:"\u52a0\u6211\u5fae\u4fe1",content:r.a.createElement("img",{style:{width:"80%"},src:a(169),alt:"\u4e8c\u7ef4\u7801"}),onOk:function(){}})}}}]},image:{className:"banner5-image",children:a(300)}},ne={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u9ad8\u6821\u697c\u76d8\u63a8\u8350",className:"title-h1"},{name:"content",className:"title-content",children:"\u771f\u5b9e\u623f\u6e90"}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u54e5\u4f26\u6bd4\u4e9a\u5927\u5b66"},content:{className:"content3-content",children:"\u54e5\u5927\u6700\u65b0\u5efa\u7b51\u6770\u4f5c - Claremont Hall"}}},{name:"block1",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u7ebd\u7ea6\u5927\u5b66"},content:{className:"content3-content",children:"\u5b66\u533a\u623f\u6295\u8d44\u9996\u9009 - 101 West 14"}}},{name:"block2",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u8331\u8389\u4e9a\u97f3\u4e50\u5b66\u9662"},content:{className:"content3-content",children:"The Park Loggia - \u6797\u80af\u4e2d\u5fc3\u95e8\u5eca\u4f4f\u5b85"}}},{name:"block3",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u7ebd\u7ea6\u65f6\u88c5\u6280\u672f\u5b66\u9662"},content:{className:"content3-content",children:"\u5207\u5c14\u897f\u7684\u6b27\u6d32\u60c5\u8c03 - Elisa"}}},{name:"block4",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5e15\u68ee\u65af\u8bbe\u8ba1\u5b66\u9662"},content:{className:"content3-content",children:"\u7b2c\u4e94\u5927\u9053\u8bbe\u8ba1\u5178\u8303 - 277 Fifth"}}},{name:"block5",className:"content3-block",md:8,xs:24,url:"#",children:{icon:{className:"content3-icon",children:"https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"\u5df4\u9c81\u514b\u5b66\u9662"},content:{className:"content3-content",children:"\u4e2d\u57ce\u6700\u7f8e\u5929\u9645\u7ebf"}}}]}},re={wrapper:{className:"home-page-wrapper content5-wrapper"},page:{className:"home-page content5"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u56e2\u961f\u6210\u7ee9 \u2013 \u5ba2\u6237\u6848\u4f8b",className:"title-h1"},{name:"content",className:"title-content",children:"\u7ebd\u7ea6\u4e70\u5356\u623f\u4ea7\u76f4\u901a\u8f66"}]},block:{className:"content5-img-wrapper",gutter:16,children:[{name:"block0",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(301)},content:{children:"56 Leonard Street, 20B-WEST | Triebca 2,252 \u5e73\u65b9\u82f1\u5c3a [209 \u5e73\u7c73]$6,450,000"}}},{name:"block1",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(302)},content:{children:"214 West 72nd Street -FLOOR11 | Lincoln Square 1,477\u5e73\u65b9\u82f1\u5c3a $2,950,000"}}},{name:"block2",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(303)},content:{children:"60 Beach Street #3A | Tribeca 2,300\u5e73\u65b9\u82f1\u5c3a $4,190,000"}}},{name:"block3",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(304)},content:{children:"25 Park Row, 17B | Financial District 1,109\u5e73\u65b9\u82f1\u5c3a $2,225,000"}}},{name:"block4",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(305)},content:{children:"424 West 52nd Street #6| Hell's Kitchen 1,320\u5e73\u65b9\u82f1\u5c3a $2,225,894"}}},{name:"block5",className:"block",md:6,xs:24,children:{wrapper:{className:"content5-block-content"},img:{children:a(306)},content:{children:"Brooklyn Point, Unit 47G | Downtown Brooklyn 754\u5e73\u65b9\u82f1\u5c3a $1,215,717"}}}]}},ce={wrapper:{className:"home-page-wrapper content4-wrapper"},page:{className:"home-page content4"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"\u56e2\u961f\u98ce\u91c7",className:"title-h1"},{name:"content",className:"title-content content4-title-content",children:"\u56e2\u961f\u98ce\u91c7\uff0c\u56e2\u961f\u98ce\u91c7"}]},video:{className:"content4-video",children:{video:a(307),image:"https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg"}}},oe={wrapper:{className:"home-page-wrapper feature8-wrapper"},page:{className:"home-page feature8"},OverPack:{playScale:.3},titleWrapper:{className:"feature8-title-wrapper",children:[{name:"title",className:"feature8-title-h1",children:"\u7ebd\u7ea6\u4e70\u623f\u4e5f\u7b80\u5355"},{name:"content",className:"feature8-title-content",children:"\u6d41\u7a0b\u7b80\u5355\u6e05\u6670\uff0c\u5feb\u901f\u54cd\u5e94\u9700\u6c42"}]},childWrapper:{className:"feature8-button-wrapper",children:[{name:"button",className:"feature8-button",children:{children:"\u7acb\u5373\u4f53\u9a8c",onClick:function(){ee.a.info({title:"\u52a0\u6211\u5fae\u4fe1",content:r.a.createElement("img",{style:{width:"80%"},src:a(169),alt:"\u4e8c\u7ef4\u7801"}),onOk:function(){}})}}}]},Carousel:{dots:!1,className:"feature8-carousel",wrapper:{className:"feature8-block-wrapper"},children:{className:"feature8-block",titleWrapper:{className:"feature8-carousel-title-wrapper",title:{className:"feature8-carousel-title"}},children:[{name:"block0",className:"feature8-block-row",gutter:120,title:{className:"feature8-carousel-title-block",children:"\u5e73\u53f0\u81ea\u4e3b\u8bad\u7ec3\u6d41\u7a0b"},children:[{className:"feature8-block-col",md:6,xs:24,name:"child0",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:"\u70b9\u51fb\u7acb\u5373\u4f53\u9a8c"},{name:"content",className:"feature8-block-content",children:"\u52a0\u6211\u5fae\u4fe1"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child1",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:""},{name:"content",className:"feature8-block-content",children:"\u6c9f\u901a\u60a8\u7684\u9700\u6c42\uff0c\u4e86\u89e3\u60a8\u7684"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child2",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:"\u7ebf\u4e0a\u7ebf\u4e0b\u5e26\u770b"},{name:"content",className:"feature8-block-content",children:"\u7ebf\u4e0a\u7ebf\u4e0b\u90fd\u53ef\u5e26\u770b"}]}},{className:"feature8-block-col",md:6,xs:24,name:"child3",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:"\u6210\u529f\u8d2d\u4e70"},{name:"content",className:"feature8-block-content",children:"\u8d2d\u4e70\u6210\u529f"}]}}]}]}}},ie={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:r.a.createElement("span",null,"\xa92018 ",r.a.createElement("a",{href:"#"},"\u7ebd\u7ea6\u4e70\u623f\u76f4\u901a\u8f66")," All Rights Reserved")}};a(308);function le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}Object(p.enquireScreen)(function(e){Z=e});var se=("undefined"!==typeof window?window:{}).location,ue=void 0===se?{}:se,me=function(e){Object(s.a)(a,e);var t=le(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isMobile:Z,show:!ue.port},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(p.enquireScreen)(function(t){e.setState({isMobile:!!t})}),ue.port&&setTimeout(function(){e.setState({show:!0})},500)}},{key:"render",value:function(){var e=this,t=[r.a.createElement(G,{id:"Nav0_0",key:"Nav0_0",dataSource:te,isMobile:this.state.isMobile}),r.a.createElement(k,{id:"Banner5_0",key:"Banner5_0",dataSource:ae,isMobile:this.state.isMobile}),r.a.createElement(X,{key:"NormalLoginForm0_0"}),r.a.createElement(_,{id:"Content5_0",key:"Content5_0",dataSource:re,isMobile:this.state.isMobile}),r.a.createElement(S,{id:"Content3_0",key:"Content3_0",dataSource:ne,isMobile:this.state.isMobile}),r.a.createElement(z,{id:"Feature8_0",key:"Feature8_0",dataSource:oe,isMobile:this.state.isMobile}),r.a.createElement(M,{id:"Content4_0",key:"Content4_0",dataSource:ce,isMobile:this.state.isMobile}),r.a.createElement(F,{id:"Footer0_1",key:"Footer0_1",dataSource:ie,isMobile:this.state.isMobile})];return r.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&t)}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,1,2]]]);
//# sourceMappingURL=main.e00b79c0.chunk.js.map
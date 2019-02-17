(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{50:function(e,t,a){"use strict";var r=a(1),n=a(2),i=a(4),o=a(3),c=a(5),s=a(0),l=a.n(s),u=(a(51),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.percent!==this.props.percent}},{key:"render",value:function(){return l.a.createElement("div",{className:"progress-bar"},l.a.createElement("div",{className:"progress-bar__mask",style:{transform:"scale(".concat(this.props.percent,", 1)")}},l.a.createElement("div",{className:"progress-bar__progress"})),l.a.createElement("div",{className:"progress-bar__bg"}))}}]),t}(s.Component));t.a=u},51:function(e,t,a){},60:function(e,t,a){e.exports=function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(s){n=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}return function(){function a(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}return r=a,(n=[{key:"getColorAsync",value:function(e,t,a){e.complete?t.call(e,this.getColor(e,a),a&&a.data):this._bindImageEvents(e,t,a)}},{key:"getColor",value:function(e,t){t=t||{};var a=this._getDefaultColor(t),r=this._getOriginalSize(e),n=this._prepareSizeAndPosition(r,t),i=null,o=a;if(!n.srcWidth||!n.srcHeight||!n.destWidth||!n.destHeight)return this._prepareResult(a,new Error("FastAverageColor: Incorrect sizes."));if(!this._ctx&&(this._canvas=this._makeCanvas(),this._ctx=this._canvas.getContext&&this._canvas.getContext("2d"),!this._ctx))return this._prepareResult(a,new Error("FastAverageColor: Canvas Context 2D is not supported in this browser."));this._canvas.width=n.destWidth,this._canvas.height=n.destHeight;try{this._ctx.clearRect(0,0,n.destWidth,n.destHeight),this._ctx.drawImage(e,n.srcLeft,n.srcTop,n.srcWidth,n.srcHeight,0,0,n.destWidth,n.destHeight);var c=this._ctx.getImageData(0,0,n.destWidth,n.destHeight).data;o=this.getColorFromArray4(c,t)}catch(s){i=s}return this._prepareResult(o,i)}},{key:"getColorFromArray4",value:function(e,t){t=t||{};var a=e.length;if(a<4)return this._getDefaultColor(t);var r=a-a%4,n=4*(t.step||1),i="_"+(t.algorithm||"sqrt")+"Algorithm";if("function"!==typeof this[i])throw new Error("FastAverageColor: ".concat(t.algorithm," is unknown algorithm."));return this[i](e,r,n)}},{key:"destroy",value:function(){delete this._canvas,delete this._ctx}},{key:"_getDefaultColor",value:function(e){return this._getOption(e,"defaultColor",[255,255,255,255])}},{key:"_getOption",value:function(e,t,a){return"undefined"===typeof e[t]?a:e[t]}},{key:"_prepareSizeAndPosition",value:function(e,t){var a,r=this._getOption(t,"left",0),n=this._getOption(t,"top",0),i=this._getOption(t,"width",e.width),o=this._getOption(t,"height",e.height),c=i,s=o;return"precision"===t.mode?{srcLeft:r,srcTop:n,srcWidth:i,srcHeight:o,destWidth:c,destHeight:s}:(i>o?(a=i/o,c=100,s=Math.round(c/a)):(a=o/i,s=100,c=Math.round(s/a)),(c>i||s>o||c<10||s<10)&&(c=i,s=o),{srcLeft:r,srcTop:n,srcWidth:i,srcHeight:o,destWidth:c,destHeight:s})}},{key:"_simpleAlgorithm",value:function(e,t,a){for(var r=0,n=0,i=0,o=0,c=0,s=0;s<t;s+=a){var l=e[s+3],u=e[s]*l,h=e[s+1]*l,p=e[s+2]*l;r+=u,n+=h,i+=p,o+=l,c++}return o?[Math.round(r/o),Math.round(n/o),Math.round(i/o),Math.round(o/c)]:[0,0,0,0]}},{key:"_sqrtAlgorithm",value:function(e,t,a){for(var r=0,n=0,i=0,o=0,c=0,s=0;s<t;s+=a){var l=e[s],u=e[s+1],h=e[s+2],p=e[s+3];r+=l*l*p,n+=u*u*p,i+=h*h*p,o+=p,c++}return o?[Math.round(Math.sqrt(r/o)),Math.round(Math.sqrt(n/o)),Math.round(Math.sqrt(i/o)),Math.round(o/c)]:[0,0,0,0]}},{key:"_dominantAlgorithm",value:function(e,a,r){for(var n={},i=0;i<a;i+=r){var o=e[i],c=e[i+1],s=e[i+2],l=e[i+3],u=Math.round(o/24)+","+Math.round(c/24)+","+Math.round(s/24);n[u]?n[u]=[n[u][0]+o*l,n[u][1]+c*l,n[u][2]+s*l,n[u][3]+l,n[u][4]+1]:n[u]=[o*l,c*l,s*l,l,1]}var h=Object.keys(n).map(function(e){return n[e]}).sort(function(e,t){var a=e[4],r=t[4];return a>r?-1:a===r?0:1}),p=t(h[0],5),m=p[0],d=p[1],v=p[2],f=p[3],g=p[4];return f?[Math.round(m/f),Math.round(d/f),Math.round(v/f),Math.round(f/g)]:[0,0,0,0]}},{key:"_bindImageEvents",value:function(e,t,a){var r=this,n=(a=a||{})&&a.data,i=this._getDefaultColor(a),o=function(){l(),t.call(e,r.getColor(e,a),n)},c=function(){l(),t.call(e,r._prepareResult(i,new Error("Image error")),n)},s=function(){l(),t.call(e,r._prepareResult(i,new Error("Image abort")),n)},l=function(){e.removeEventListener("load",o),e.removeEventListener("error",c),e.removeEventListener("abort",s)};e.addEventListener("load",o),e.addEventListener("error",c),e.addEventListener("abort",s)}},{key:"_prepareResult",value:function(e,t){var a=e.slice(0,3),r=[].concat(a,e[3]/255),n=this._isDark(e);return{error:t,value:e,rgb:"rgb("+a.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:this._arrayToHex(a),hexa:this._arrayToHex(e),isDark:n,isLight:!n}}},{key:"_getOriginalSize",value:function(e){return e instanceof HTMLImageElement?{width:e.naturalWidth,height:e.naturalHeight}:e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:{width:e.width,height:e.height}}},{key:"_toHex",value:function(e){var t=e.toString(16);return 1===t.length?"0"+t:t}},{key:"_arrayToHex",value:function(e){return"#"+e.map(this._toHex).join("")}},{key:"_isDark",value:function(e){var t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128}},{key:"_makeCanvas",value:function(){return"undefined"===typeof window?new OffscreenCanvas(1,1):document.createElement("canvas")}}])&&e(r.prototype,n),i&&e(r,i),a;var r,n,i}()}()},61:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),i=a(4),o=a(3),c=a(5),s=a(0),l=a.n(s),u=a(50),h=a(16),p=a(8),m=a.n(p),d=a(9),v=a(12),f=a(60),g=a.n(f),b=a(11);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var y=l.a.createElement("path",{d:"M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 44H2V8h54v42z"}),k=l.a.createElement("path",{d:"M16 28.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 28.138zM16 19c1.968 0 3.569 1.602 3.569 3.569S17.968 26.138 16 26.138s-3.569-1.601-3.569-3.568S14.032 19 16 19zM7 46c.234 0 .47-.082.66-.249l16.313-14.362L34.275 41.69a.999.999 0 1 0 1.414-1.414l-4.807-4.807 9.181-10.054 11.261 10.323a1 1 0 0 0 1.351-1.475l-12-11a1.031 1.031 0 0 0-.72-.262 1.002 1.002 0 0 0-.694.325l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 44.249A1 1 0 0 0 7 46z"}),w=function(e){return l.a.createElement("svg",_({viewBox:"0 0 58 58"},e),y,k)},E=(a.p,a(61),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).onLoadImage=function(){var e=Object(d.a)(m.a.mark(function e(t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.fac.getColor(t.target,{algorithm:"simple"}),e.next=3,Object(b.a)(200);case 3:requestAnimationFrame(function(){a._hideLoader(),a._setAlbumShadowColor(r),a._displayAlbumCover()});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.loader=l.a.createRef(),a.image=l.a.createRef(),a.view=l.a.createRef(),a.fac=new g.a,a._onLoadDummyImage=a._onLoadDummyImage.bind(Object(v.a)(Object(v.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"_onLoadDummyImage",value:function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(200);case 2:this.image.current.src=this.props.src,this.image.current.classList.remove("album-cover__image--loaded"),this.icon.classList.remove("album-cover__icon--active");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_displayLoadingCover",value:function(){var e=this;this.imageDummy.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded"),requestAnimationFrame(function(){e.view.current.style.boxShadow="rgba(107, 179, 237, .5) 0px 24px 35px -16px",e.loader.current.classList.remove("hide"),e.loader.current.classList.add("show"),e.icon.classList.add("album-cover__icon--active")})}},{key:"_setAlbumShadowColor",value:function(e){var t=e.hex.replace("#","").match(/[A-Za-z0-9]{2}/g).map(function(e){return parseInt(e,16)});this.view.current.style.boxShadow="0 24px 35px -16px rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", 0.7)")}},{key:"_displayAlbumCover",value:function(){this.image.current.attributes.src=this.props.src,this.image.current.classList.add("album-cover__image--loaded")}},{key:"_hideLoader",value:function(){this.loader.current.classList.add("hide")}},{key:"componentDidMount",value:function(){this.icon=document.querySelector(".album-cover__icon"),this.imageDummy=new Image,this.imageDummy.onload=this._onLoadDummyImage}},{key:"componentDidUpdate",value:function(e,t,a){e.src!==this.props.src&&this._displayLoadingCover()}},{key:"render",value:function(){return l.a.createElement("div",{ref:this.view,className:"album-cover"},l.a.createElement(w,{className:"album-cover__icon"}),l.a.createElement("div",{ref:this.loader,className:"album-cover__loader"}),l.a.createElement("img",{ref:this.image,className:"album-cover__image",crossOrigin:"",onLoad:this.onLoadImage,alt:this.props.alt}))}}]),t}(s.PureComponent)),C=function(e){var t=parseInt(e,10),a=Math.floor(t/3600),r=Math.floor((t-3600*a)/60),n=t-3600*a-60*r;return r<10&&(r="0"+r),n<10&&(n="0"+n),"".concat(r,":").concat(n)},O=a(10),x=a(17);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var M=l.a.createElement("path",{d:"M15.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2zM28.5 0c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2s2-.897 2-2V2c0-1.103-.897-2-2-2z"}),j=function(e){return l.a.createElement("svg",L({viewBox:"0 0 44 44"},e),M)};a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var H=l.a.createElement("path",{d:"M23.491 144.032c0-28.762 23.399-52.155 52.161-52.155h185.706l-46.874 46.874 14.31 14.305 71.301-71.295L228.8 10.47l-14.3 14.31 46.863 46.868H75.657c-39.912 0-72.389 32.477-72.389 72.389v7.419h20.228v-7.424h-.005z"}),A=l.a.createElement("path",{d:"M276.604 156.058c0 28.762-23.404 52.155-52.166 52.155H38.726l46.879-46.874L71.29 147.04 0 218.335l71.295 71.29 14.299-14.31-46.874-46.868h185.711c39.917 0 72.394-32.471 72.394-72.388v-7.419h-20.228v7.419h.007z"}),I=function(e){return l.a.createElement("svg",N({viewBox:"0 0 300.095 300.095"},e),H,A)};a.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var P=l.a.createElement("path",{d:"M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"}),z=l.a.createElement("path",{d:"M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"}),S=function(e){return l.a.createElement("svg",D({viewBox:"0 0 512.092 512.092"},e),P,z)},W=(a.p,a(63),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).onPlayClick=function(){a.props.onPlayClick(a.props.track)},a.onPauseClick=function(){a.props.onPauseClick(a.props.track)},a.onLinkClick=function(){window.open(a.props.track.permalink_url)},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"detail__track","aria-live":"polite","aria-atomic":"false"},l.a.createElement(E,{hide:!this.props.active,src:this.props.track.artwork_url.replace("t50x50","t300x300"),alt:"album artwork from track ".concat(this.props.track.title)}),l.a.createElement("div",{className:"detail__controls"},l.a.createElement("div",{className:"detail__info"},l.a.createElement("h3",{className:"title"},this.props.track.title),l.a.createElement("p",{className:"artist"},this.props.track.artist)),l.a.createElement(u.a,{percent:this.props.track.percentage}),l.a.createElement("div",{className:"detail__timing"},l.a.createElement("time",{className:"time"},C(this.props.track.currentTime)),l.a.createElement("time",{className:"time"},C(this.props.track.duration/1e3))),l.a.createElement("div",{className:"detail__buttons"},l.a.createElement(O.a,{label:"repeat song",tabEnabled:this.props.active,className:"icon-button ".concat(this.props.repeat?"icon-button--high-light":""),onClick:this.props.onRepeatClick,icon:l.a.createElement(I,{className:"icon icon--back",width:16})}),l.a.createElement("button",{name:"previous song",tabIndex:this.props.active?"0":"-1",className:"prev-button",onClick:this.props.onPlayPrev},l.a.createElement(x.a,{width:16})),l.a.createElement(h.a,{name:"pause button",className:"pause",tabEnabled:this.props.active,active:this.props.track.playing&&!this.props.track.paused,onClick:this.onPauseClick,icon:l.a.createElement(j,{width:24})}),l.a.createElement(h.a,{name:"play button",className:"play",tabEnabled:this.props.active,active:!this.props.track.playing&&this.props.track.paused,onClick:this.onPlayClick,icon:l.a.createElement(x.a,{width:24})}),l.a.createElement("button",{name:"next song button",tabIndex:this.props.active?"0":"-1",className:"next-button",onClick:this.props.onPlayNext},l.a.createElement(x.a,{width:16})),l.a.createElement(O.a,{label:"song link",tabEnabled:this.props.active,className:"icon-button",onClick:this.onLinkClick,icon:l.a.createElement(S,{className:"icon icon--back",width:16})})))))}}]),t}(s.PureComponent));t.default=W}}]);
//# sourceMappingURL=3.e9f6aeae.chunk.js.map
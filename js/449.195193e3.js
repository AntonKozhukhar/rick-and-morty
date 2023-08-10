"use strict";(self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[]).push([[449],{1495:(t,e,i)=>{i.d(e,{Z:()=>k});var n=i(4503),o=i(3698),s=i(6080),a=(i(9653),i(4678),i(1058),i(9826),i(1539),i(2772),i(1038),i(8783),i(7658),i(2222),i(3210),i(2564),i(6699),i(2023),i(8791)),r=i(5840),c=i(4019),h=i(2524),u=i(7943),l=i(8386),d=i(2474),f=i(4987),v=i(1050),p=(0,f.Z)(u.Z,(0,l.d)(["top","right","bottom","left","absolute"]),r.Z,d.Z);const m=p.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),o=0;if(o+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(o-=n-t.width),this.offsetX){var s=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));o+=this.left?-s:t.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return(0,v.kb)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return(0,v.kb)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,n=this.dimensions.activator,o=this.dimensions.content.height,s=t+o,a=i<s;return a&&this.offsetOverflow&&n.top>o?t=this.pageYOffset+(n.top-o):a&&!this.allowOverflow?t=i-o-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}else this.activatorFixed=!1},deactivate:function(){},genActivatorListeners:function(){var t=this,e=r.Z.options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:(0,s.Z)({},this.dimensions.activator),content:(0,s.Z)({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}});var g=i(1649),b=i(3960),A=i(3276),x=i(9042),y=i(9495),w=i(6596),T=i(473),O=(0,f.Z)(h.Z,c.Z,g.Z,b.Z,A.Z,m);const k=O.extend({name:"v-menu",directives:{ClickOutside:x.Z,Resize:y.Z},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"},contentProps:{type:Object,default:function(){return{}}}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,v.kb)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":(0,v.kb)(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return(0,v.kb)(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return(0,v.kb)(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,v.kb)(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?(0,v.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted");var n=this.$refs.content.scrollTop,o=this.$refs.content.clientHeight;n>i.offsetTop-8?(0,T.Z)(i.offsetTop-i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+o<i.offsetTop+i.clientHeight+8&&(0,T.Z)(i.offsetTop-o+2*i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&(0,w.Jk)("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==v.Do.tab){if(t.keyCode===v.Do.down)this.nextTile();else if(t.keyCode===v.Do.up)this.prevTile();else if(t.keyCode===v.Do.end)this.lastTile();else if(t.keyCode===v.Do.home)this.firstTile();else{if(t.keyCode!==v.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r.Z.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?(0,s.Z)((0,s.Z)({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=m.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat((0,o.Z)(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:(0,s.Z)((0,s.Z)((0,s.Z)({},this.getScopeIdAttrs()),this.contentProps),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:(0,s.Z)((0,s.Z)((0,s.Z)({},this.rootThemeClasses),this.roundedClasses),{},(0,n.Z)({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){var i;(null===(i=e.$refs.content)||void 0===i?void 0:i.contains(t.relatedTarget))||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(!this.disableKeys){if(t.keyCode===v.Do.esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[v.Do.up,v.Do.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))}},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(a.Z,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},8791:(t,e,i)=>{i.d(e,{Z:()=>o});i(9826),i(1539);var n=i(3276);const o=n.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n.Z.options.computed.isDark.call(this)}},render:function(){return this.$slots["default"]&&this.$slots["default"].find((function(t){return!t.isComment&&" "!==t.text}))}})},9042:(t,e,i)=>{i.d(e,{Z:()=>l});var n=i(2434),o=(i(7658),i(5212),i(1539),i(2564),i(6044));function s(){return!0}function a(t,e,i){if(!t||!1===r(t,i))return!1;var s=(0,o.e)(e);if("undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&s.host===t.target)return!1;var a=("object"===(0,n.Z)(i.value)&&i.value.include||function(){return[]})();return a.push(e),!a.some((function(e){return e.contains(t.target)}))}function r(t,e){var i="object"===(0,n.Z)(e.value)&&e.value.closeConditional||s;return i(t)}function c(t,e,i){var n="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,i)&&setTimeout((function(){r(t,i)&&n&&n(t)}),0)}function h(t,e){var i=(0,o.e)(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var u={inserted:function(t,e,i){var n=function(i){return c(i,t,e)},o=function(i){t._clickOutside.lastMousedownWasOutside=a(i,t,e)};h(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",o,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:o}},unbind:function(t,e,i){t._clickOutside&&(h(t,(function(e){var n;if(e&&(null===(n=t._clickOutside)||void 0===n?void 0:n[i.context._uid])){var o=t._clickOutside[i.context._uid],s=o.onClick,a=o.onMousedown;e.removeEventListener("click",s,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[i.context._uid])}};const l=u},3134:(t,e,i)=>{i.d(e,{Z:()=>d});i(9554),i(1539),i(4747);var n=i(1050),o=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,o=t.touchendY,s=.5,a=16;t.offsetX=i-e,t.offsetY=o-n,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&o<n-a&&t.up(t),t.down&&o>n+a&&t.down(t))};function s(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return r(t,e)}}}function h(t,e,i){var o=e.value,s=o.parent?t.parentElement:t,a=o.options||{passive:!0};if(s){var r=c(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[i.context._uid]=r,(0,n.XP)(r).forEach((function(t){s.addEventListener(t,r[t],a)}))}}function u(t,e,i){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var s=o._touchHandlers[i.context._uid];(0,n.XP)(s).forEach((function(t){o.removeEventListener(t,s[t])})),delete o._touchHandlers[i.context._uid]}}var l={inserted:h,unbind:u};const d=l},5840:(t,e,i)=>{i.d(e,{Z:()=>u});var n=i(2434),o=(i(6699),i(7941),i(5212),i(1539),i(8309),i(4019)),s=i(6470),a=i(4987),r=i(1050),c=i(6596),h=(0,a.Z)(o.Z,s.Z);const u=h.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes((0,n.Z)(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=(0,r.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,c.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=(0,r.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot:function(){return(0,r.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},4019:(t,e,i)=>{i.d(e,{Z:()=>o});i(9653),i(1058),i(2564);var n=i(144);const o=n.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}})},2524:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(3698),o=(i(7658),i(4987));function s(t){for(var e=[],i=0;i<t.length;i++){var o=t[i];o.isActive&&o.isDependent?e.push(o):e.push.apply(e,(0,n.Z)(s(o.$children)))}return e}const a=(0,o.Z)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,(0,n.Z)(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,(0,n.Z)(this.getOpenDependentElements())),t}}})},2474:(t,e,i)=>{i.d(e,{Z:()=>l});var n=i(4503),o=i(2434),s=(i(9554),i(1539),i(4747),i(9753),i(5212),i(6699),i(2023),i(1038),i(8783),i(4449)),a=i(1050),r=i(4987),c=i(6596);function h(t){var e=(0,o.Z)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function u(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}const l=(0,r.Z)(s.Z).extend({name:"detachable",props:{attach:{default:!1,validator:h},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var i=new MutationObserver((function(n){n.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(i.disconnect(),u(e))}));i.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else u(e)}},methods:{getScopeIdAttrs:function(){var t=(0,a.vO)(this.$vnode,"context.$options._scopeId");return t&&(0,n.Z)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,c.Kd)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},1649:(t,e,i)=>{i.d(e,{Z:()=>o});i(2564);var n=i(144);const o=n.ZP.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},7943:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(3698),o=(i(1058),i(2222),i(6699),i(2023),i(7658),i(144)),s=i(1050);const a=o.ZP.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,s.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,(0,s.KK)(e)],o=[].concat((0,n.Z)(document.getElementsByClassName("v-menu__content--active")),(0,n.Z)(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<o.length;a++)t.includes(o[a])||i.push((0,s.KK)(o[a]));return Math.max.apply(Math,i)}}})},7852:(t,e,i)=>{var n=i(2109),o=i(1470),s=i(1236).f,a=i(7466),r=i(1340),c=i(3929),h=i(4488),u=i(4964),l=i(1913),d=o("".endsWith),f=o("".slice),v=Math.min,p=u("endsWith"),m=!l&&!p&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!m&&!p},{endsWith:function(t){var e=r(h(this));c(t);var i=arguments.length>1?arguments[1]:void 0,n=e.length,o=void 0===i?n:v(a(i),n),s=r(t);return d?d(e,s,o):f(e,o-s.length,o)===s}})}}]);
//# sourceMappingURL=449.195193e3.js.map
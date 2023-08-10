"use strict";(self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[]).push([[545],{5836:(t,e,i)=>{i.d(e,{Z:()=>v});var s=i(3385),r=i(5057),a=i(2469),n=i(7794),c=(i(8309),function(){var t=this,e=t._self._c;return e(s.Z,{staticClass:"ma-2 my-5 ma-sm-3 pa-0 pa-sm-3",attrs:{loading:t.loading}},[e("div",{staticClass:"px-0 d-flex flex-column flex-sm-row pb-0"},[e("router-link",{staticClass:"img-link",attrs:{to:{name:"CharacterItemPage",params:{id:t.character.id}}}},[e(a.Z,{staticClass:"mr-0 mr-sm-4 img",attrs:{src:t.character.image}})],1),e(n.km,{staticClass:"px-4 px-sm-0"},[e("router-link",{staticClass:"text-h6 mb-4 link",attrs:{to:{name:"CharacterItemPage",params:{id:t.character.id}}}},[t._v(" "+t._s(t.character.name)+" ")]),e("div",{staticClass:"mb-3 d-flex align-start"},[e(r.Z,{staticClass:"mr-2",attrs:{color:t.color,small:""}},[t._v("mdi-brightness-1 ")]),e("div",[t._v(" "+t._s(t.character.status)+" - "+t._s(t.character.species)+" ")])],1),e("div",{staticClass:"mb-2"},[t._v("Last known location:")]),e("router-link",{staticClass:"link",attrs:{to:{name:"LocationItemPage",params:{id:+t.character.location.url.split("/").pop()}},"active-class":"mb-3"}},[t._v(" "+t._s(t.character.location.name)+" ")])],1)],1),e("LikeButton",{attrs:{"btn-active":t.btnActive,"on-click":t.onClick}})],1)}),o=[],h=i(6080),d=(i(7658),i(629)),l=i(2086);const u={name:"CharactersCard",components:{LikeButton:l.Z},props:{character:{type:Object,required:!0}},data:function(){return{loading:!1,btnActive:this.character.isLiked}},computed:(0,h.Z)((0,h.Z)((0,h.Z)({},(0,d.rn)("characterStore",["likedCharacters"])),(0,d.Se)("authStore",["isLogged"])),{},{color:function(){switch(this.character.status){case"unknown":return"gray";case"Alive":return"green";case"Dead":return"red"}}}),watch:{likedCharacters:{handler:function(){this.btnActive=this.character.isLiked},deep:!0}},methods:(0,h.Z)((0,h.Z)({},(0,d.OI)({SET_CHARACTER_LIKE:"characterStore/SET_CHARACTER_LIKE",REMOVE_CHARACTER_LIKE:"characterStore/REMOVE_CHARACTER_LIKE"})),{},{onClick:function(){this.isLogged?this.character.isLiked?this.REMOVE_CHARACTER_LIKE(this.character.id):this.SET_CHARACTER_LIKE(this.character):this.$router.push({name:"LoginPage"})}})},m=u;var p=i(1001),g=(0,p.Z)(m,c,o,!1,null,"b1b572cc",null);const v=g.exports},2086:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(1828),r=i(5057),a=function(){var t=this,e=t._self._c;return e(s.Z,{staticClass:"btn-like",attrs:{icon:"",color:t.btnActive?"pink":"gray"},on:{click:t.onClick}},[e(r.Z,[t._v("mdi-heart")])],1)},n=[];const c={name:"LikeButton",props:{btnActive:{},onClick:{}}},o=c;var h=i(1001),d=(0,h.Z)(o,a,n,!1,null,"16b4da73",null);const l=d.exports},6643:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var s=i(3385),r=i(4437),a=i(1908),n=i(7794),c=i(5294),o=(i(8309),function(){var t=this,e=t._self._c;return e("div",[e(s.Z,{staticClass:"ma-2 my-5 ma-sm-5 pa-0 pa-sm-3"},[t.loading?t._e():e(a.Z,{attrs:{"three-line":""}},[e(n.km,[e("div",{staticClass:"text-h6 mb-3"},[t._v(" "+t._s(t.episodeItem.name)+" ")]),e("div",{staticClass:"mb-4"},[t._v(" Episode: "+t._s(t.episodeItem.episode)+" ")]),e("div",{staticClass:"mb-4"},[t._v(" Air date: "+t._s(t.episodeItem.air_date)+" ")]),e("div",{staticClass:"mb-4"},[t._v(" Created: "+t._s(t.episodeItem.created)+" ")]),e("h3",{staticClass:"text-center"},[t._v("Residents:")]),e(c.Z,{ref:"wrapper",on:{scroll:t.loadMore}},t._l(t.characters,(function(t){return e(r.Z,{key:t.id,staticClass:"pa-0",attrs:{cols:"12",md:"6",sm:"12"}},[e("CharactersCard",{attrs:{character:t}})],1)})),1)],1)],1),e("LikeButton",{attrs:{"btn-active":t.btnActive,"on-click":t.onClick}})],1)],1)}),h=[],d=i(1907),l=i(5617),u=i(6080),m=(i(9600),i(7042),i(629)),p=i(5836),g=i(2086);const v={name:"EpisodeItemPage",components:{CharactersCard:p.Z,LikeButton:g.Z},data:function(){return{loading:!1,slice:6,btnActive:!1}},computed:(0,u.Z)((0,u.Z)({},(0,m.rn)({episodeItem:function(t){return t.episodeStore.episodeItem},characters:function(t){return t.characterStore.characters},likedEpisodes:function(t){return t.episodeStore.likedEpisodes}})),(0,m.Se)("episodeStore",["charactersID"])),mounted:function(){document.addEventListener("scroll",this.loadMore)},beforeDestroy:function(){document.removeEventListener("scroll",this.loadMore)},watch:{$route:{handler:function(){var t=this;return(0,l.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.getEpisode(t.$route.params.id);case 3:return t.CLEAR_CHARACTER_BY_IDS(),e.next=6,t.getCharactersByIds(t.charactersID.slice(0,t.slice).join(","));case 6:t.btnActive=t.episodeItem.isLiked,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},deep:!0,immediate:!0},slice:function(){var t=this;return(0,l.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.charactersID.length>t.slice-6)){e.next=3;break}return e.next=3,t.getCharactersByIds(t.charactersID.slice(t.slice-6,t.slice).join(","));case 3:case"end":return e.stop()}}),e)})))()},likedEpisodes:{handler:function(){this.btnActive=this.episodeItem.isLiked},deep:!0}},methods:(0,u.Z)((0,u.Z)((0,u.Z)({},(0,m.nv)({getEpisode:"episodeStore/getEpisode",getCharactersByIds:"characterStore/getCharactersByIds"})),(0,m.OI)({CLEAR_CHARACTER_BY_IDS:"characterStore/CLEAR_CHARACTER_BY_IDS",SET_EPISODES_LIKE:"episodeStore/SET_EPISODES_LIKE",REMOVE_EPISODE_LIKE:"episodeStore/REMOVE_EPISODE_LIKE"})),{},{loadMore:function(){this.$refs.wrapper.getBoundingClientRect().bottom<document.documentElement.clientHeight+10&&(this.slice+=6)},onClick:function(){this.episodeItem.isLiked?this.REMOVE_EPISODE_LIKE(this.episodeItem.id):this.SET_EPISODES_LIKE(this.episodeItem)}})},_=v;var S=i(1001),f=(0,S.Z)(_,o,h,!1,null,"0909e3a8",null);const C=f.exports},2469:(t,e,i)=>{i.d(e,{Z:()=>p});var s=i(2434),r=(i(9653),i(7658),i(9600),i(7852),i(6755),i(2564),i(1558)),a=i(9196),n=i(4987),c=i(1050);const o=(0,n.Z)(a.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,c.z9)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=o;var d=i(3276),l=i(2653),u=i(6596),m="undefined"!==typeof window&&"IntersectionObserver"in window;const p=(0,n.Z)(h,d.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!m||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode()["catch"]((function(e){(0,u.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,a=t.naturalWidth;r||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){var t=(0,c.z9)(this,"placeholder");if(t){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(t){var e=h.options.render.call(this,t),i=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},7852:(t,e,i)=>{var s=i(2109),r=i(1470),a=i(1236).f,n=i(7466),c=i(1340),o=i(3929),h=i(4488),d=i(4964),l=i(1913),u=r("".endsWith),m=r("".slice),p=Math.min,g=d("endsWith"),v=!l&&!g&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!g},{endsWith:function(t){var e=c(h(this));o(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,r=void 0===i?s:p(n(i),s),a=c(t);return u?u(e,a,r):m(e,r-a.length,r)===a}})}}]);
//# sourceMappingURL=episode-item-page.75a7e8bf.js.map
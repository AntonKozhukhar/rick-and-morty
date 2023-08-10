"use strict";(self["webpackChunkrick_and_morty"]=self["webpackChunkrick_and_morty"]||[]).push([[835],{2768:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(1828),r=t(3385),i=t(5223),n=t(4437),o=t(7345),l=t(6904),u=t(1495),c=t(5294),m=t(5234),d=t(5952),p=t(4503),f=function(){var e,s,t=this,f=t._self._c;return f("div",[f("h1",{staticClass:"text-center mb-3"},[t._v("Registration")]),f(r.Z,{staticClass:"pa-2",attrs:{elevation:"2","max-width":"800"}},[f(l.Z,{ref:"form2",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submitUser.apply(null,arguments)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[f(c.Z,{staticClass:"ma-0",attrs:{"no-gutters":""}},[f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" First name ")]),f(d.Z,{attrs:{outlined:"",label:"First name",required:"",rules:t.emptyRule},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Last name ")]),f(d.Z,{attrs:{outlined:"",label:"First name",required:"",rules:t.emptyRule},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Phone number ")]),f(d.Z,{directives:[{name:"mask",rawName:"v-mask",value:"+380-##-###-##-##",expression:"'+380-##-###-##-##'"}],attrs:{outlined:"",label:"Phone number",required:"",rules:t.emptyRule},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(u.Z,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.user.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.user,"date",e)},"update:return-value":function(e){return t.$set(t.user,"date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Birth date ")]),f(d.Z,t._g(t._b({attrs:{outlined:"",label:"Birth date",required:"","append-icon":"mdi-calendar",rules:t.emptyRule},model:{value:t.user.date,callback:function(e){t.$set(t.user,"date",e)},expression:"user.date"}},"v-text-field",a,!1),s))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[f(o.Z,{attrs:{"no-title":"",scrollable:""},model:{value:t.user.date,callback:function(e){t.$set(t.user,"date",e)},expression:"user.date"}},[f(m.Z),f(a.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),f(a.Z,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.user.date)}}},[t._v(" OK ")])],1)],1)],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"12",sm:"12",xs:"12"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Email ")]),f(d.Z,{attrs:{label:"Email",type:"email",outlined:"",rules:t.emailRules,required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Password ")]),f(d.Z,{attrs:(e={label:"Password",type:"password",outlined:"",rules:t.passwordRules,required:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off"},(0,p.Z)(e,"type",t.show1?"text":"password"),(0,p.Z)(e,"hint","At least 8 characters"),e),on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),f(n.Z,{staticClass:"pa-sm-2",attrs:{cols:"12",md:"6",sm:"6",xs:"6"}},[f(i.EB,{staticClass:"pa-0 mb-3"},[t._v(" Confirm password ")]),f(d.Z,{attrs:(s={label:"Confirm password",type:"password",outlined:"",rules:t.confirmPasswordRules,required:"","append-icon":t.show2?"mdi-eye":"mdi-eye-off"},(0,p.Z)(s,"type",t.show2?"text":"password"),(0,p.Z)(s,"hint","At least 8 characters"),s),on:{"click:append":function(e){t.show2=!t.show2}}})],1)],1),f(c.Z,{staticClass:"ma-0",attrs:{justify:"space-between"}},[f(a.Z,{attrs:{color:"primary",plain:"",to:{name:"LoginPage"}}},[t._v(" have account? ")]),f(a.Z,{attrs:{width:"150",color:"primary",type:"submit"}},[t._v(" Submit ")])],1)],1)],1)],1)},h=[],v=t(1907),b=t(5617),w=t(6080),Z=(t(4916),t(7601),t(7658),t(629));const x={name:"RegistrationPage",data:function(){var e=this;return{user:{firstName:"",lastName:"",phone:"",date:"",email:"",password:"",imgSrc:""},isValid:!0,menu:!1,modal:!1,show1:!1,show2:!1,emptyRule:[function(e){return!!e||"Field is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=8||"The password must contain at least 8 characters"}],confirmPasswordRules:[function(e){return!!e||"Confirm password is required"},function(s){return s===e.user.password||"Invalid password"}]}},computed:(0,Z.Se)("authStore",["checkUserRegistration"]),methods:(0,w.Z)((0,w.Z)({},(0,Z.OI)({SET_USERS:"authStore/SET_USERS",SET_SNACKBAR_PARAMS:"snackbarStore/SET_SNACKBAR_PARAMS"})),{},{submitUser:function(){var e=this;return(0,b.Z)((0,v.Z)().mark((function s(){return(0,v.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.isValid=e.$refs.form2.validate(),!e.isValid||e.checkUserRegistration(e.user.email)){s.next=8;break}return e.SET_USERS(e.user),s.next=5,e.$router.push({name:"LoginPage"});case 5:e.SET_SNACKBAR_PARAMS({isOpen:!0,color:"success",message:"Account successfully registered"}),s.next=9;break;case 8:e.isValid&&e.checkUserRegistration(e.user.email)&&e.SET_SNACKBAR_PARAMS({isOpen:!0,color:"error",message:"An account with this email already exists"});case 9:case"end":return s.stop()}}),s)})))()}})},_=x;var k=t(1001),y=(0,k.Z)(_,f,h,!1,null,"731b1bc6",null);const C=y.exports},4449:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(6596),r=t(144);const i=r.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&(0,a.Jk)("lazy",this)},methods:{showLazyContent:function(e){return this.hasContent&&e?e():[this.$createElement()]}}})}}]);
//# sourceMappingURL=registration-page.23adf856.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"R/Hu":function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return s}));var i=n("TYT/"),o=n("K9Ia"),r=n("Gi3i"),b=n("Valr");function a(t,e){if(1&t&&(i.Ub(0,"div",3),i.Qb(1,"div",4),i.Tb()),2&t){var n=i.kc(2);i.Jc("color",n.color),i.Bb(1),i.Jc("width",n.diameter)("height",n.diameter)}}function c(t,e){if(1&t&&(i.Ub(0,"div",5),i.Ub(1,"div",6),i.Qb(2,"div",7),i.Tb(),i.Tb()),2&t){var n=i.kc().ngIf,o=i.kc();i.Jc("color",o.color),i.Bb(1),i.Jc("background",o.color,i.Ib)("height",o.height)("width",n+"%"),i.Bb(1),i.Jc("height",o.height)}}function d(t,e){if(1&t&&(i.Sb(0),i.Kc(1,a,2,6,"div",1),i.Kc(2,c,3,10,"div",2),i.Rb()),2&t){var n=i.kc();i.Bb(1),i.qc("ngIf",n.includeSpinner),i.Bb(1),i.qc("ngIf",n.includeBar)}}var s=function(){function t(t){this.platformId=t,this.progress$=(new o.a).pipe(Object(r.a)(0)),this._pendingRequests=0,this._value=0}return t.prototype.start=function(t){void 0===t&&(t=2),++this._pendingRequests,0!==this._value&&1!==this._pendingRequests||this.set(1===this._pendingRequests&&this._value>0?this._value:t)},t.prototype.stop=function(){for(this.complete();this._pendingRequests>0;)this.complete()},t.prototype.complete=function(){var t=this;0===this._pendingRequests&&0===this._value||(this._pendingRequests>0&&--this._pendingRequests,(0===this._pendingRequests||0===this._pendingRequests&&this._value>0)&&(100!==this._value&&this.set(100),setTimeout((function(){return t.set(0)}),500)))},t.prototype.set=function(t){var e=this;Object(b.B)(this.platformId)?(0===t&&this._pendingRequests>0&&(t=2),this._value=t,this.progress$.next(t),0!==this._pendingRequests&&(clearTimeout(this._incTimeout),this._value>0&&this._value<100&&(this._incTimeout=setTimeout((function(){return e.increment()}),250)))):this._pendingRequests=0},t.prototype.increment=function(t){void 0===t&&(t=0),t>0&&this.set(this._value+t);var e=this._value;t=e>=0&&e<25?3*Math.random()+3:e>=25&&e<65?3*Math.random():e>=65&&e<90?2*Math.random():e>=90&&e<99?.5:0,this.set(this._value+t)},t.prototype.ngOnDestroy=function(){this.progress$.complete()},t.ngInjectableDef=Object(i.R)({factory:function(){return new t(Object(i.U)(i.B))},token:t,providedIn:"root"}),t.\u0275fac=function(e){return new(e||t)(i.cc(i.B))},t.\u0275prov=i.Lb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t}(),l=function(){function t(t){this.loader=t,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.value=null}return t.\u0275fac=function(e){return new(e||t)(i.Pb(s))},t.\u0275cmp=i.Jb({type:t,selectors:[["ngx-loading-bar"]],hostVars:2,hostBindings:function(t,e){2&t&&i.Gb("loading-bar-fixed",e.fixed)},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",value:"value",color:"color",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["id","loading-bar-spinner",3,"color",4,"ngIf"],["id","loading-bar",3,"color",4,"ngIf"],["id","loading-bar-spinner"],[1,"spinner-icon"],["id","loading-bar"],[1,"bar"],[1,"peg"]],template:function(t,e){1&t&&(i.Kc(0,d,3,2,"ng-container",0),i.lc(1,"async")),2&t&&i.qc("ngIf",null!==e.value?e.value:i.mc(1,1,e.loader.progress$))},directives:[b.m],pipes:[b.b],styles:["[_nghost-%COMP%]{position:relative;display:block}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{position:fixed}.loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   .loading-bar-fixed[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{right:10px;left:unset}.loading-bar-fixed[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{pointer-events:none;transition:350ms linear;color:#29d}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{transition:width 350ms;background:#29d;position:absolute;z-index:10002;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%] > div[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{right:0;left:unset}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .peg[_ngcontent-%COMP%]{display:none;position:absolute;width:70px;right:0;top:0;height:2px;opacity:.45;box-shadow:1px 0 6px 1px;color:inherit;border-radius:100%}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]{display:block;position:absolute;z-index:10002;top:5px;left:0}[_nghost-%COMP%] > div#loading-bar-spinner[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:2px solid transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:.4s linear infinite loading-bar-spinner;animation:.4s linear infinite loading-bar-spinner}@-webkit-keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-bar-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),t}(),p=function(){function t(){}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[b.c]]}),t}()},nWYI:function(t,e,n){"use strict";n.r(e);var i=n("Valr"),o=n("oW1M"),r=n("89/Q"),b=n("QJY3"),a=n("X2FZ"),c=n("R/Hu"),d=n("DUip"),s=n("PSD3"),l=n.n(s),p=n("TYT/");function u(t,e){if(1&t){var n=p.Vb();p.Ub(0,"a",52),p.gc("click",(function(t){return p.Dc(n),p.kc().toggleEdit()})),p.Ub(1,"span",53),p.Qb(2,"i",54),p.Tb(),p.Ub(3,"span",55),p.Mc(4,"Edit profile"),p.Tb(),p.Tb()}}function f(t,e){if(1&t){var n=p.Vb();p.Ub(0,"a",56),p.gc("click",(function(t){return p.Dc(n),p.kc().toggleEdit()})),p.Ub(1,"span",53),p.Qb(2,"i",57),p.Tb(),p.Ub(3,"span",55),p.Mc(4,"Back"),p.Tb(),p.Tb()}}function m(t,e){if(1&t){var n=p.Vb();p.Ub(0,"a",58),p.gc("click",(function(t){return p.Dc(n),p.kc().confirm()})),p.Ub(1,"span",53),p.Qb(2,"i",59),p.Tb(),p.Ub(3,"span",55),p.Mc(4,"Save"),p.Tb(),p.Tb()}}function g(t,e){1&t&&(p.Ub(0,"h3",60),p.Mc(1,"Profile"),p.Tb())}function h(t,e){1&t&&(p.Ub(0,"h3",60),p.Mc(1," Edit Profile"),p.Tb())}function v(t,e){1&t&&(p.Ub(0,"a",61),p.Mc(1," Settings "),p.Tb())}function T(t,e){1&t&&(p.Ub(0,"form"),p.Ub(1,"h6",62),p.Mc(2,"User information"),p.Tb(),p.Ub(3,"div",63),p.Ub(4,"div",17),p.Ub(5,"div",64),p.Ub(6,"div",65),p.Ub(7,"label",66),p.Mc(8," Name "),p.Tb(),p.Qb(9,"input",67),p.Tb(),p.Tb(),p.Ub(10,"div",64),p.Ub(11,"div",65),p.Ub(12,"label",68),p.Mc(13," Email address "),p.Tb(),p.Qb(14,"input",69),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Qb(15,"hr",70),p.Ub(16,"h6",62),p.Mc(17,"Contact information"),p.Tb(),p.Ub(18,"div",63),p.Ub(19,"div",17),p.Ub(20,"div",71),p.Ub(21,"div",65),p.Ub(22,"label",72),p.Mc(23," Address "),p.Tb(),p.Qb(24,"input",73),p.Tb(),p.Tb(),p.Tb(),p.Ub(25,"div",17),p.Ub(26,"div",74),p.Ub(27,"div",65),p.Ub(28,"label",75),p.Mc(29," City "),p.Tb(),p.Qb(30,"input",76),p.Tb(),p.Tb(),p.Ub(31,"div",74),p.Ub(32,"div",65),p.Ub(33,"label",77),p.Mc(34," Country "),p.Tb(),p.Qb(35,"input",78),p.Tb(),p.Tb(),p.Ub(36,"div",74),p.Ub(37,"div",65),p.Ub(38,"label",77),p.Mc(39," Postal code "),p.Tb(),p.Qb(40,"input",79),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb())}function U(t,e){if(1&t&&(p.Ub(0,"form",80),p.Ub(1,"h6",62),p.Mc(2,"User information"),p.Tb(),p.Ub(3,"div",63),p.Ub(4,"div",17),p.Ub(5,"div",64),p.Ub(6,"div",65),p.Ub(7,"label",66),p.Mc(8," Name "),p.Tb(),p.Qb(9,"input",81),p.Tb(),p.Tb(),p.Ub(10,"div",64),p.Ub(11,"div",65),p.Ub(12,"label",68),p.Mc(13," Email address "),p.Tb(),p.Qb(14,"input",82),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Qb(15,"hr",70),p.Ub(16,"h6",62),p.Mc(17,"Contact information"),p.Tb(),p.Ub(18,"div",63),p.Ub(19,"div",17),p.Ub(20,"div",71),p.Ub(21,"div",65),p.Ub(22,"label",72),p.Mc(23," Address "),p.Tb(),p.Qb(24,"input",83),p.Tb(),p.Tb(),p.Tb(),p.Ub(25,"div",17),p.Ub(26,"div",74),p.Ub(27,"div",65),p.Ub(28,"label",75),p.Mc(29," City "),p.Tb(),p.Qb(30,"input",84),p.Tb(),p.Tb(),p.Ub(31,"div",74),p.Ub(32,"div",65),p.Ub(33,"label",77),p.Mc(34," Country "),p.Tb(),p.Qb(35,"input",85),p.Tb(),p.Tb(),p.Ub(36,"div",74),p.Ub(37,"div",65),p.Ub(38,"label",77),p.Mc(39," Postal code "),p.Tb(),p.Qb(40,"input",86),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb()),2&t){var n=p.kc();p.qc("formGroup",n.editForm)}}var y=function(){function t(t){this.formBuilder=t,this.editEnabled=!1,this.editFormMessages={name:[{type:"required",message:"Name is required"}],email:[{type:"required",message:"Email is required"},{type:"email",message:"A valid email is required"}]}}return t.prototype.ngOnInit=function(){this.editForm=this.formBuilder.group({name:new b.d("",b.t.compose([b.t.required])),email:new b.d("",b.t.compose([b.t.required,b.t.email]))})},t.prototype.toggleEdit=function(){this.editEnabled=!this.editEnabled},t.prototype.confirm=function(){var t=this;l.a.fire({title:"Confirmation",text:"Are you sure to save this edit?",type:"info",buttonsStyling:!1,confirmButtonClass:"btn btn-info",confirmButtonText:"Confirm",showCancelButton:!0,cancelButtonClass:"btn btn-danger",cancelButtonText:"Cancel"}).then((function(e){e.value&&t.edit()}))},t.prototype.edit=function(){var t=this;l.a.fire({title:"Success",text:"Update has been saved",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Close"}).then((function(e){e.value&&t.editForm.reset()}))},t.\u0275fac=function(e){return new(e||t)(p.Pb(b.c))},t.\u0275cmp=p.Jb({type:t,selectors:[["app-profile"]],decls:76,vars:8,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-chart-bar","text-dark"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["class","btn btn-default btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],["class","btn btn-danger btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],["class","btn btn-success btn-sm text-white btn-icon btn-3",3,"click",4,"ngIf"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col-xl-4","order-xl-2"],[1,"card","card-profile"],["alt","Image placeholder","src","assets/img/theme/img-1-1000x600.jpg",1,"card-img-top"],[1,"row","justify-content-center"],[1,"col-lg-3","order-lg-2"],[1,"card-profile-image"],["src","assets/img/default/avatar.png",1,"rounded-circle"],[1,"card-header","text-center","border-0","pt-8","pt-md-4","pb-0","pb-md-4"],[1,"d-flex","justify-content-between"],["href","javascript:void(0)",1,"btn","btn-sm","btn-info","mr-4"],["href","javascript:void(0)",1,"btn","btn-sm","btn-default","float-right"],[1,"card-body","pt-0"],[1,"col"],[1,"card-profile-stats","d-flex","justify-content-center"],[1,"heading"],[1,"description"],[1,"text-center"],[1,"h3"],[1,"font-weight-light"],[1,"h5","font-weight-300"],[1,"fas","fa-location-arrow","mr-2"],[1,"h5","mt-4"],[1,"fas","fa-briefcase","mr-2"],[1,"col-xl-8","order-xl-1"],[1,"card"],[1,"card-header"],[1,"row","align-items-center"],[1,"col-8"],["class","mb-0",4,"ngIf"],[1,"col-4","text-right"],["class","btn btn-sm btn-primary","href","javascript:void(0)",4,"ngIf"],[1,"card-body"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"btn","btn-default","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-user-edit"],[1,"btn-inner--text"],[1,"btn","btn-danger","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"fas","fa-arrow-left"],[1,"btn","btn-success","btn-sm","text-white","btn-icon","btn-3",3,"click"],[1,"fas","fa-save"],[1,"mb-0"],["href","javascript:void(0)",1,"btn","btn-sm","btn-primary"],[1,"heading-small","text-muted","mb-4"],[1,"pl-lg-4"],[1,"col-lg-6"],[1,"form-group"],["for","input-username",1,"form-control-label"],["id","input-username","placeholder","Name","type","text","value","Ali Imran","disabled","",1,"form-control"],["for","input-email",1,"form-control-label"],["id","input-email","placeholder","Email address","type","email","value","imran@prototype.com.my","disabled","",1,"form-control"],[1,"my-4"],[1,"col-md-12"],["for","input-address",1,"form-control-label"],["id","input-address","placeholder","Home Address","type","text","value","No. 199, Lorong Esplanade 91/8A","disabled","",1,"form-control"],[1,"col-lg-4"],["for","input-city",1,"form-control-label"],["id","input-city","placeholder","City","type","text","value","Petaling Jaya","disabled","",1,"form-control"],["for","input-country",1,"form-control-label"],["id","input-country","placeholder","Country","type","text","value","Malaysia","disabled","",1,"form-control"],["id","input-postal-code","placeholder","Postal code","type","number","value","41240","disabled","",1,"form-control"],[3,"formGroup"],["id","input-username","placeholder","Name","type","text","value","Ali Imran","formControlName","name",1,"form-control"],["id","input-email","placeholder","Email address","type","email","value","imran@prototype.com.my","formControlName","email",1,"form-control"],["id","input-address","placeholder","Home Address","type","text","value","No. 199, Lorong Esplanade 91/8A","formControlName","address",1,"form-control"],["id","input-city","placeholder","City","type","text","value","Petaling Jaya","formControlName","city",1,"form-control"],["id","input-country","placeholder","Country","type","text","value","Malaysia","formControlName","country",1,"form-control"],["id","input-postal-code","placeholder","Postal code","type","number","value","41240","formControlName","postcode",1,"form-control"]],template:function(t,e){1&t&&(p.Ub(0,"div",0),p.Ub(1,"div",1),p.Ub(2,"div",2),p.Ub(3,"div",3),p.Ub(4,"div",4),p.Ub(5,"h6",5),p.Mc(6,"Profile"),p.Tb(),p.Ub(7,"nav",6),p.Ub(8,"ol",7),p.Ub(9,"li",8),p.Ub(10,"a",9),p.Qb(11,"i",10),p.Tb(),p.Tb(),p.Ub(12,"li",11),p.Mc(13," Profile "),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(14,"div",12),p.Kc(15,u,5,0,"a",13),p.Kc(16,f,5,0,"a",14),p.Kc(17,m,5,0,"a",15),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(18,"div",16),p.Ub(19,"div",17),p.Ub(20,"div",18),p.Ub(21,"div",19),p.Qb(22,"img",20),p.Ub(23,"div",21),p.Ub(24,"div",22),p.Ub(25,"div",23),p.Ub(26,"a"),p.Qb(27,"img",24),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(28,"div",25),p.Ub(29,"div",26),p.Ub(30,"a",27),p.Mc(31," Connect "),p.Tb(),p.Ub(32,"a",28),p.Mc(33," Message "),p.Tb(),p.Tb(),p.Tb(),p.Ub(34,"div",29),p.Ub(35,"div",17),p.Ub(36,"div",30),p.Ub(37,"div",31),p.Ub(38,"div"),p.Ub(39,"span",32),p.Mc(40," 22 "),p.Tb(),p.Ub(41,"span",33),p.Mc(42," Friends "),p.Tb(),p.Tb(),p.Ub(43,"div"),p.Ub(44,"span",32),p.Mc(45," 10 "),p.Tb(),p.Ub(46,"span",33),p.Mc(47," Photos "),p.Tb(),p.Tb(),p.Ub(48,"div"),p.Ub(49,"span",32),p.Mc(50," 89 "),p.Tb(),p.Ub(51,"span",33),p.Mc(52," Comments "),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(53,"div",34),p.Ub(54,"h5",35),p.Mc(55," Ali Imran"),p.Ub(56,"span",36),p.Mc(57," , 27 "),p.Tb(),p.Tb(),p.Ub(58,"div",37),p.Qb(59,"i",38),p.Mc(60," Ampang, Kuala Lumpur "),p.Tb(),p.Ub(61,"div",39),p.Qb(62,"i",40),p.Mc(63," IT Manager "),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Ub(64,"div",41),p.Ub(65,"div",42),p.Ub(66,"div",43),p.Ub(67,"div",44),p.Ub(68,"div",45),p.Kc(69,g,2,0,"h3",46),p.Kc(70,h,2,0,"h3",46),p.Tb(),p.Ub(71,"div",47),p.Kc(72,v,2,0,"a",48),p.Tb(),p.Tb(),p.Tb(),p.Ub(73,"div",49),p.Kc(74,T,41,0,"form",50),p.Kc(75,U,41,1,"form",51),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb()),2&t&&(p.Bb(15),p.qc("ngIf",!e.editEnabled),p.Bb(1),p.qc("ngIf",e.editEnabled),p.Bb(1),p.qc("ngIf",e.editEnabled),p.Bb(52),p.qc("ngIf",!e.editEnabled),p.Bb(1),p.qc("ngIf",e.editEnabled),p.Bb(2),p.qc("ngIf",!e.editEnabled),p.Bb(2),p.qc("ngIf",!e.editEnabled),p.Bb(1),p.qc("ngIf",e.editEnabled))},directives:[i.m,b.v,b.n,b.o,b.g,b.b,b.m,b.e,b.r],styles:[""]}),t}(),M=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Jb({type:t,selectors:[["app-settings"]],decls:2,vars:0,template:function(t,e){1&t&&(p.Ub(0,"p"),p.Mc(1,"settings works!"),p.Tb())},styles:[""]}),t}(),x=[{path:"",children:[{path:"notifications",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Jb({type:t,selectors:[["app-notifications"]],decls:2,vars:0,template:function(t,e){1&t&&(p.Ub(0,"p"),p.Mc(1,"notifications works!"),p.Tb())},styles:[""]}),t}()},{path:"profile",component:y},{path:"settings",component:M}]}];n.d(e,"GlobalModule",(function(){return _}));var _=function(){function t(){}return t.\u0275mod=p.Nb({type:t}),t.\u0275inj=p.Mb({factory:function(e){return new(e||t)},imports:[[i.c,o.a.forRoot(),r.c.forRoot(),o.d.forRoot(),o.g.forRoot(),o.i.forRoot(),o.k.forRoot(),o.l.forRoot(),b.h,b.s,c.b,a.e,d.g.forChild(x)]]}),t}()}}]);
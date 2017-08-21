webpackJsonp([1],{134:function(t,e,s){"use strict";var n=s(5),a=s(217),o=s(199),i=s.n(o),c=s(198),r=s.n(c),l=s(200),u=s.n(l);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Add",component:r.a},{path:"/list",name:"List",component:i.a},{path:"/add",name:"Add",component:r.a},{path:"/send",name:"Send",component:u.a}]})},135:function(t,e,s){function n(t){s(185)}var a=s(1)(s(139),s(215),n,null,null);t.exports=a.exports},137:function(t,e,s){"use strict";var n=s(149),a=s.n(n),o=s(5),i=new o.a;a()(o.a.prototype,{$bus:{get:function(){return i}}}),e.a=i},138:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(5),a=s(135),o=s.n(a),i=s(134);n.a.config.productionTip=!1,n.a.config.errorHandler=function(t){alert(t)},new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},139:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s(205),o=s.n(a),i=s(137),c=new n.a("ET_transactions",{auto_compaction:!0,size:50});console.log(c),console.log(i.a),e.default={name:"app",created:function(){this.$bus.$on("DELETE_ITEM",function(t){c.get(t).then(function(t){c.remove(t)}).catch(function(t){console.log(t)})}),window.onerror=function(t){this.$bus.$emit("GLOBAL_ERROR",t)}.bind(this)},components:{AppShell:o.a}}},140:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s(0),o=s.n(a),i=s(201),c=s.n(i),r=s(204),l=s.n(r);console.log(o()("2017-08-19","YYYY-MM-DD"));var u=s.i(n.a)("ET_transactions");e.default={name:"add-page",components:{CameraInput:c.a,ToggleSwitch:l.a},data:function(){return{description:"",date:"",amount:"",donors:[],colleagues:[],alcohol:"",receipt:"",notes:"",sentTo:[]}},methods:{submitHandler:function(){var t=this,e={_id:Date.now().toString(),description:this.description,date:o()(this.date,"YYYY-MM-DD"),amount:this.amount,donors:this.donors,colleagues:this.colleagues,alcohol:this.alcohol,notes:this.notes,_attachments:{receipt:{content_type:this.receipt.type,data:this.receipt}}};u.put(e).then(function(e){t.$bus.$emit("ADD_ITEM_SUCCESS",e.id),console.log(e),t.$bus.$emit("FORM_RESET"),t.description="",t.date="",t.amount="",t.donors=[],t.colleagues=[],t.alcohol="",t.receipt="",t.notes="",t.sentTo=[]}).catch(function(t){console.log(t)}),console.log(e)},captureHandler:function(t){this.receipt=t}}}},141:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s(202),o=s.n(a),i=s.i(n.a)("ET_transactions");e.default={name:"list",components:{ListItem:o.a},data:function(){return{transactions:[]}},created:function(){var t=this;this.fetchData(),this.$bus.$on("DELETE_ITEM",function(e){var s=t.transactions.map(function(t){return t._id}).indexOf(e);t.transactions.splice(s,1)})},methods:{fetchData:function(){var t=this;i.allDocs({include_docs:!0,attachments:!0}).then(function(e){t.transactions=e.rows.map(function(t){return t.doc})})}}}},142:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s(0),o=s.n(a),i=s(191),c=s.n(i),r=s(192),l=s.n(r),u=s(203),d=s.n(u),p=s.i(n.a)("ET_transactions"),v=l.a.pdfMake.vfs;c.a.vfs=v,e.default={name:"send-page",components:{SendItem:d.a},data:function(){return{transactions:[],selected:[],trip:"",officer:"",coordinator:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;p.allDocs({include_docs:!0,attachments:!0}).then(function(e){t.transactions=e.rows.map(function(t){return t.doc})})},selectItem:function(t){if("add"===t.type)this.selected.push(t.transaction);else if("remove"===t.type){var e=this.selected.indexOf(t.transaction);console.log(e),this.selected.splice(e,1)}console.log(t)},generatePDF:function(){for(var t={content:[{text:this.trip+" Report",style:"h1"},"_______________________________","\n",{text:"Gift Officer: "+this.officer,style:["em","small"]},{text:"Coordinator: "+this.coordinator,style:["em","small"]},"\n"],styles:{h1:{fontSize:20,bold:!0},h2:{fontSize:16,bold:!0},h3:{fontSize:14},h4:{fontSize:11,color:"silver"},em:{italics:!0},small:{fontSize:10}}},e=0,s=this.selected.length;e<s;e+=1){var n=e,a=this.selected[n];console.log(a),t.content.push({text:"Expense #"+(e+1),style:"h2"},"\n",{columns:[[{text:"Details",style:"h3"},"\n",{text:"Date",style:"h4"},{text:""+o()(a.date).format("MMM DD, YYYY")},{text:"\n",fontSize:4},{text:"Description",style:"h4"},{text:""+a.description},{text:"\n",fontSize:4},{text:"Amount",style:"h4"},{text:"$"+a.amount},{text:"\n",fontSize:4},{text:"Alcohol",style:"h4"},{text:""+a.alcohol},{text:"\n",fontSize:4},{text:"Donors",style:"h4"},{type:"circle",ul:[""+a.donors],margin:[20,0,0,0]},{text:"\n",fontSize:4},{text:"Colleagues",style:"h4"},{type:"circle",ul:[""+a.colleagues],margin:[20,0,0,0]},{text:"\n",fontSize:4},{text:"Notes",style:"h4"},{text:""+a.notes}],{image:"data:"+a._attachments.receipt.content_type+";base64, "+a._attachments.receipt.data,width:300}],pageBreak:n===s?"":"after"})}c.a.createPdf(t).open()}}}},143:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{receipt:""}},created:function(){var t=this;this.$bus.$on("FORM_RESET",function(){t.receipt=""})},computed:{thumbnail:function(){return window.URL.createObjectURL(this.receipt)}},methods:{imageHandler:function(t){var e=t.target.files[0];this.receipt=e,this.$emit("capture",e)}}}},144:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0),a=s.n(n);e.default={name:"",props:["expense"],data:function(){return{collapsed:!0,toggled:!1}},computed:{formattedDate:function(){return a()(this.expense.date).format("MMM DD, YYYY")},imageURL:function(){return this.expense._attachments.receipt.data&&this.toggled?"data:img/jpeg;base64, "+this.expense._attachments.receipt.data:0}},methods:{clickHandler:function(){this.collapsed=!this.collapsed,this.toggled=!0},deleteItem:function(){this.$bus.$emit("DELETE_ITEM_REQ",this.expense._id)}}}},145:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0),a=s.n(n);e.default={name:"",props:["expense","selected"],data:function(){return{picked:!1}},computed:{formattedDate:function(){return a()(this.expense.date).format("MMM DD, YYYY")}},methods:{select:function(){this.picked=!this.picked,this.picked?this.$emit("select",{transaction:this.expense,type:"add"}):this.$emit("select",{transaction:this.expense,type:"remove"})}}}},146:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toggle-switch",props:["trueValue","falseValue"],data:function(){return{selected:!1,value:this.falseValue}},created:function(){var t=this;this.$bus.$on("FORM_RESET",function(){t.selected=!1,t.value=t.falseValue})},methods:{clickHandler:function(t){var e=t.target.checked?this.trueValue:this.falseValue;this.selected=!this.selected,this.value=e,this.$emit("toggle",e)}}}},147:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(206),a=s.n(n);e.default={name:"app-shell",components:{Toast:a.a},data:function(){return{}}}},148:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toast",created:function(){var t=this;this.$bus.$on("DELETE_ITEM_REQ",function(e){t.target=e}),this.$bus.$on("ADD_ITEM_SUCCESS",function(e){t.success=e,window.setTimeout(function(){t.success=""},2500)}),this.$bus.$on("GLOBAL_ERROR",function(e){t.error=e,window.setTimeout(function(){t.error=""},3e3)})},data:function(){return{target:"",success:"",error:""}},methods:{cancelDelete:function(){this.target=""},acceptDelete:function(){this.$bus.$emit("DELETE_ITEM",this.target),this.target=""}}}},177:function(t,e){},178:function(t,e){},179:function(t,e){},180:function(t,e){},181:function(t,e){},182:function(t,e){},183:function(t,e){},184:function(t,e){},185:function(t,e){},186:function(t,e){},189:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":15,"./af.js":15,"./ar":22,"./ar-dz":16,"./ar-dz.js":16,"./ar-kw":17,"./ar-kw.js":17,"./ar-ly":18,"./ar-ly.js":18,"./ar-ma":19,"./ar-ma.js":19,"./ar-sa":20,"./ar-sa.js":20,"./ar-tn":21,"./ar-tn.js":21,"./ar.js":22,"./az":23,"./az.js":23,"./be":24,"./be.js":24,"./bg":25,"./bg.js":25,"./bn":26,"./bn.js":26,"./bo":27,"./bo.js":27,"./br":28,"./br.js":28,"./bs":29,"./bs.js":29,"./ca":30,"./ca.js":30,"./cs":31,"./cs.js":31,"./cv":32,"./cv.js":32,"./cy":33,"./cy.js":33,"./da":34,"./da.js":34,"./de":37,"./de-at":35,"./de-at.js":35,"./de-ch":36,"./de-ch.js":36,"./de.js":37,"./dv":38,"./dv.js":38,"./el":39,"./el.js":39,"./en-au":40,"./en-au.js":40,"./en-ca":41,"./en-ca.js":41,"./en-gb":42,"./en-gb.js":42,"./en-ie":43,"./en-ie.js":43,"./en-nz":44,"./en-nz.js":44,"./eo":45,"./eo.js":45,"./es":47,"./es-do":46,"./es-do.js":46,"./es.js":47,"./et":48,"./et.js":48,"./eu":49,"./eu.js":49,"./fa":50,"./fa.js":50,"./fi":51,"./fi.js":51,"./fo":52,"./fo.js":52,"./fr":55,"./fr-ca":53,"./fr-ca.js":53,"./fr-ch":54,"./fr-ch.js":54,"./fr.js":55,"./fy":56,"./fy.js":56,"./gd":57,"./gd.js":57,"./gl":58,"./gl.js":58,"./gom-latn":59,"./gom-latn.js":59,"./he":60,"./he.js":60,"./hi":61,"./hi.js":61,"./hr":62,"./hr.js":62,"./hu":63,"./hu.js":63,"./hy-am":64,"./hy-am.js":64,"./id":65,"./id.js":65,"./is":66,"./is.js":66,"./it":67,"./it.js":67,"./ja":68,"./ja.js":68,"./jv":69,"./jv.js":69,"./ka":70,"./ka.js":70,"./kk":71,"./kk.js":71,"./km":72,"./km.js":72,"./kn":73,"./kn.js":73,"./ko":74,"./ko.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mr":84,"./mr.js":84,"./ms":86,"./ms-my":85,"./ms-my.js":85,"./ms.js":86,"./my":87,"./my.js":87,"./nb":88,"./nb.js":88,"./ne":89,"./ne.js":89,"./nl":91,"./nl-be":90,"./nl-be.js":90,"./nl.js":91,"./nn":92,"./nn.js":92,"./pa-in":93,"./pa-in.js":93,"./pl":94,"./pl.js":94,"./pt":96,"./pt-br":95,"./pt-br.js":95,"./pt.js":96,"./ro":97,"./ro.js":97,"./ru":98,"./ru.js":98,"./sd":99,"./sd.js":99,"./se":100,"./se.js":100,"./si":101,"./si.js":101,"./sk":102,"./sk.js":102,"./sl":103,"./sl.js":103,"./sq":104,"./sq.js":104,"./sr":106,"./sr-cyrl":105,"./sr-cyrl.js":105,"./sr.js":106,"./ss":107,"./ss.js":107,"./sv":108,"./sv.js":108,"./sw":109,"./sw.js":109,"./ta":110,"./ta.js":110,"./te":111,"./te.js":111,"./tet":112,"./tet.js":112,"./th":113,"./th.js":113,"./tl-ph":114,"./tl-ph.js":114,"./tlh":115,"./tlh.js":115,"./tr":116,"./tr.js":116,"./tzl":117,"./tzl.js":117,"./tzm":119,"./tzm-latn":118,"./tzm-latn.js":118,"./tzm.js":119,"./uk":120,"./uk.js":120,"./ur":121,"./ur.js":121,"./uz":123,"./uz-latn":122,"./uz-latn.js":122,"./uz.js":123,"./vi":124,"./vi.js":124,"./x-pseudo":125,"./x-pseudo.js":125,"./yo":126,"./yo.js":126,"./zh-cn":127,"./zh-cn.js":127,"./zh-hk":128,"./zh-hk.js":128,"./zh-tw":129,"./zh-tw.js":129};n.keys=function(){return Object.keys(o)},n.resolve=a,t.exports=n,n.id=189},198:function(t,e,s){function n(t){s(184)}var a=s(1)(s(140),s(214),n,null,null);t.exports=a.exports},199:function(t,e,s){function n(t){s(179)}var a=s(1)(s(141),s(209),n,"data-v-227b8170",null);t.exports=a.exports},200:function(t,e,s){function n(t){s(178)}var a=s(1)(s(142),s(208),n,"data-v-1ca11b5a",null);t.exports=a.exports},201:function(t,e,s){function n(t){s(180)}var a=s(1)(s(143),s(210),n,"data-v-46fa579f",null);t.exports=a.exports},202:function(t,e,s){function n(t){s(186)}var a=s(1)(s(144),s(216),n,null,null);t.exports=a.exports},203:function(t,e,s){function n(t){s(181)}var a=s(1)(s(145),s(211),n,"data-v-5ee6c731",null);t.exports=a.exports},204:function(t,e,s){function n(t){s(182)}var a=s(1)(s(146),s(212),n,"data-v-60fb02c4",null);t.exports=a.exports},205:function(t,e,s){function n(t){s(183)}var a=s(1)(s(147),s(213),n,null,null);t.exports=a.exports},206:function(t,e,s){function n(t){s(177)}var a=s(1)(s(148),s(207),n,"data-v-0bcfcf94",null);t.exports=a.exports},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"toast"}},[s("transition",{attrs:{name:"slide-in"}},[t.success?s("div",{staticClass:"notification is-success"},[t._v("\n      Successfully added transaction!\n    ")]):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-in"}},[t.target?s("div",{staticClass:"notification is-danger"},[s("p",[t._v("Are you sure you want to delete this item?")]),t._v(" "),s("div",{staticClass:"controls"},[s("button",{on:{click:t.acceptDelete}},[t._v("Yes")]),t._v(" "),s("button",{on:{click:t.cancelDelete}},[t._v("No")])])]):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-in"}},[t.error?s("div",{staticClass:"notification is-danger"},[s("p",[t._v("The browser has thrown an error.")]),t._v(" "),s("p",[t._v("Message: "+t._s(t.error))])]):t._e()])],1)},staticRenderFns:[]}},208:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-content",attrs:{id:"send"}},[s("h1",{staticClass:"page-title"},[t._v("Generate Report")]),t._v(" "),s("div",{staticClass:"input-group control"},[s("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Trip Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.trip,expression:"trip"}],staticClass:"input",attrs:{type:"text",name:"trip",value:""},domProps:{value:t.trip},on:{input:function(e){e.target.composing||(t.trip=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group control"},[s("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Gift Officer")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.officer,expression:"officer"}],staticClass:"input",attrs:{type:"text",name:"officer",value:""},domProps:{value:t.officer},on:{input:function(e){e.target.composing||(t.officer=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-group control"},[s("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Coordinator")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.coordinator,expression:"coordinator"}],staticClass:"input",attrs:{type:"text",name:"coordinator",value:""},domProps:{value:t.coordinator},on:{input:function(e){e.target.composing||(t.coordinator=e.target.value)}}})]),t._v(" "),s("h2",{staticClass:"label"},[t._v("Select Expenses")]),t._v(" "),s("ul",t._l(t.transactions,function(e){return s("li",[s("SendItem",{attrs:{expense:e},on:{select:t.selectItem}})],1)})),t._v(" "),s("section",[s("button",{on:{click:t.generatePDF}},[t._v("Generate")])])])},staticRenderFns:[]}},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-content",attrs:{id:"list"}},[s("h1",{staticClass:"page-title"},[t._v("List Transactions")]),t._v(" "),s("ul",t._l(t.transactions,function(t){return s("li",[s("ListItem",{attrs:{expense:t}})],1)}))])},staticRenderFns:[]}},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{attrs:{for:"receipt"}},[t.receipt?s("img",{attrs:{src:t.thumbnail,alt:""}}):s("svg",{attrs:{viewBox:"0 0 32 32"}},[s("path",{attrs:{fill:"#1C1C1C",d:"M16,12c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6S19.314,12,16,12z M16,23c-2.761,0-5-2.239-5-5\n      s2.239-5,5-5s5,2.239,5,5S18.761,23,16,23z"}}),t._v(" "),s("path",{attrs:{fill:"#1C1C1C",d:"M28,9c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2C30,9.895,29.105,9,28,9z M28,12\n      c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C29,11.552,28.552,12,28,12z"}}),t._v(" "),s("path",{attrs:{fill:"#1C1C1C",d:"M16,9c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9s9-4.029,9-9C25,13.029,20.971,9,16,9z M16,26\n      c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S20.418,26,16,26z"}}),t._v(" "),s("path",{attrs:{fill:"#1C1C1C",d:"M30,7h-7V5c0-1.105-0.895-2-2-2H11C9.895,3,9,3.895,9,5v2H2C0.895,7,0,7.895,0,9v18c0,1.105,0.895,2,2,2h28\n      c1.105,0,2-0.895,2-2V9C32,7.895,31.105,7,30,7z M31,26c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V10c0-1.105,0.895-2,2-2h7V7V6\n      c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2v1v1h7c1.105,0,2,0.895,2,2V26z"}})])]),t._v(" "),s("input",{attrs:{id:"receipt",type:"file",accept:"image/*"},on:{change:t.imageHandler}}),t._v(" "),s("p",[t._v("Receipt")])])},staticRenderFns:[]}},211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"box list-item",on:{click:t.select}},[s("div",{staticClass:"first-row"},[s("div",{staticClass:"column column-40"},[s("h6",[t._v("Date")]),t._v(" "),s("p",[t._v(t._s(t.formattedDate))])]),t._v(" "),s("div",{staticClass:"column column-40"},[s("h6",[t._v("Description")]),t._v(" "),s("p",[t._v(t._s(t.expense.description))])]),t._v(" "),s("div",{staticClass:"column",staticStyle:{display:"flex","justify-content":"flex-end","align-items":"center"}},[t.picked?s("svg",{attrs:{x:"0px",y:"0px",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,22C6.477,22,2,17.522,2,12S6.477,2,12,2\n        s10,4.478,10,10S17.523,22,12,22z"}}),t._v(" "),s("path",{attrs:{d:"M16.814,7.33c-0.439-0.439-1.15-0.439-1.59,0l-5.033,5.033L8.158,10.33c-0.439-0.439-1.152-0.439-1.592,0L5.33,11.567\n        c-0.439,0.439-0.439,1.152,0,1.591l4.861,4.861l7.861-7.861c0.439-0.438,0.439-1.151,0-1.591L16.814,7.33z M10.191,16.605\n        l-4.242-4.242l1.414-1.414l2.828,2.828l5.828-5.828l1.414,1.414L10.191,16.605z"}})]):t._e()])])])},staticRenderFns:[]}},212:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"toggle-switch"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.selected},on:{change:t.clickHandler}}),t._v(" "),s("div",{staticClass:"checkbox"})])},staticRenderFns:[]}},213:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-shell"}},[s("nav",[s("router-link",{attrs:{to:"/list"}},[s("button",{staticClass:"list-button",attrs:{type:"button",name:"button"}},[t._v("List")])]),t._v(" "),s("router-link",{attrs:{to:"/add"}},[s("button",{staticClass:"add-button",attrs:{type:"button",name:"button"}},[t._v("Add")])]),t._v(" "),s("router-link",{attrs:{to:"/send"}},[s("button",{staticClass:"send-button",attrs:{type:"button",name:"button"}},[t._v("Send")])])],1),t._v(" "),s("router-view"),t._v(" "),s("toast")],1)},staticRenderFns:[]}},214:function(t,e){t.exports={render:function(){var t=this,e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"page-content",attrs:{id:"add-page"}},[n("h1",{staticClass:"page-title"},[e._v("Add Transaction")]),e._v(" "),n("form",{staticClass:"add-transaction-form",attrs:{action:"",method:""}},[n("section",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"description"}},[e._v("Description")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"input",attrs:{type:"text",name:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),n("section",{staticClass:"half-width control",staticStyle:{width:"calc(66% - 5px)"}},[n("label",{staticClass:"label",attrs:{for:"date"}},[e._v("Date")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"input",attrs:{type:"date",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),e._v(" "),n("section",{staticClass:"half-width control",staticStyle:{width:"calc(33% - 5px)"}},[n("label",{staticClass:"label",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{type:"number",name:"amount"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),n("section",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"donors"}},[e._v("Donor Attendance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.donors,expression:"donors"}],staticClass:"input",attrs:{type:"text",name:"donors"},domProps:{value:e.donors},on:{input:function(t){t.target.composing||(e.donors=t.target.value)}}})]),e._v(" "),n("section",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"colleagues"}},[e._v("Colleague Attendance")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.colleagues,expression:"colleagues"}],staticClass:"input",attrs:{type:"text",name:"colleagues"},domProps:{value:e.colleagues},on:{input:function(t){t.target.composing||(e.colleagues=t.target.value)}}})]),e._v(" "),n("section",{staticClass:"control",staticStyle:{width:"calc(33% - 5px)",display:"inline-block"}},[n("label",{staticClass:"label",attrs:{for:""}},[e._v("Alcohol?")]),e._v(" "),n("toggle-switch",{attrs:{"true-value":"Alcohol present","false-value":"No alcohol"},on:{toggle:function(e){t.alcohol=e}}})],1),e._v(" "),n("section",{staticClass:"camera-input",staticStyle:{width:"calc(66% - 5px)",display:"inline-block"}},[n("camera-input",{on:{capture:e.captureHandler}})],1),e._v(" "),n("section",{staticClass:"control"},[n("label",{staticClass:"label",attrs:{for:"notes"}},[e._v("Notes")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],staticClass:"textarea",attrs:{name:"notes"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}})]),e._v(" "),n("section",[n("button",{staticClass:"submit-button",attrs:{type:"button",name:"button"},on:{click:e.submitHandler}},[e._v("Submit")])])])])},staticRenderFns:[]}},215:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("app-shell")],1)},staticRenderFns:[]}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"box list-item",class:{collapsed:this.collapsed},on:{click:t.clickHandler}},[s("div",{staticClass:"first-row"},[s("div",{staticClass:"column column-40"},[s("h6",[t._v("Date")]),t._v(" "),s("p",[t._v(t._s(t.formattedDate))])]),t._v(" "),s("div",{staticClass:"column column-40"},[s("h6",[t._v("Description")]),t._v(" "),s("p",[t._v(t._s(t.expense.description))])]),t._v(" "),s("div",{staticClass:"column"},[s("h6",[t._v("Amount")]),t._v(" "),s("p",[t._v(t._s(t.expense.amount))])])]),t._v(" "),s("div",{staticClass:"hidden-row"},[s("div",{staticClass:"details"},[s("div",{staticClass:"values"},[s("h6",[t._v("Donors")]),t._v(" "),s("p",[t._v(t._s(t.expense.donors))]),t._v(" "),s("h6",[t._v("Colleagues")]),t._v(" "),s("p",[t._v(t._s(t.expense.colleagues))]),t._v(" "),s("h6",[t._v("Alcohol")]),t._v(" "),s("p",[t._v(t._s(t.expense.alcohol))]),t._v(" "),s("h6",[t._v("Notes")]),t._v(" "),s("p",[t._v(t._s(t.expense.notes))])]),t._v(" "),s("div",{staticClass:"receipt"},[s("h6",[t._v("Receipt")]),t._v(" "),s("img",{attrs:{src:t.imageURL,alt:""}})])]),t._v(" "),s("footer",[s("span",{on:{click:t.deleteItem}},[t._v("Delete")])])])])},staticRenderFns:[]}}},[138]);
//# sourceMappingURL=app.048835d3b3e96fcf7666.js.map
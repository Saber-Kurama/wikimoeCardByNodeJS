webpackJsonp([15],{"5jhc":function(t,e,a){"use strict";function r(t){a("8y7B")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("oAV5"),i=a("NC6I"),c=a.n(i),o=a("r4Fr"),n={data:function(){return{price:0,minPrice:0,captcha:"",captchaSrc:"/api/captcha?time="+(new Date).getTime(),wantDialog:!1,wantId:this.$route.query.wantid,want:this.$route.query.want,wantStar:this.$route.query.wantstar||"1",token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):localStorage.getItem("token"),cardList:[],myCard:{},cardPage:Number(this.$route.query.page)||1,cardTotle:0,pageChangeing:!1,searchForm:{name:this.$route.query.name||"name",text:decodeURIComponent(this.$route.query.text||""),star:this.$route.query.star||"0",sort:this.$route.query.sort||"0",ihave:this.$route.query.ihave||"0"},loadingMarket:!0}},created:function(){this.getUserCard(),"1"==this.want&&this.calMinPrice()},methods:{wantCard:function(){var t=this,e={token:this.token,price:this.price,captcha:this.captcha,cardId:this.wantId};o.a.wantcard(e).then(function(e){console.log(e),t.captchaUpdata(),t.loadingMarket=!1,0==e.data.code?t.$message.error(e.data.msg):1==e.data.code&&(t.$message({message:e.data.msg,type:"success"}),t.wantDialog=!1)})},calMinPrice:function(){6==this.wantStar?this.minPrice=600:5==this.wantStar?this.minPrice=200:4==this.wantStar?this.minPrice=90:this.minPrice=30},captchaUpdata:function(){this.captchaSrc="/api/captcha?time="+(new Date).getTime()},haveCardCheck:function(t){var e=this.myCard[t];return e||0},getUserCard:function(){var t=this,e=this.token.split(".")[1],a=JSON.parse(atob(e)).email,r=c()(a);if(!Object(s.e)(r))return this.$message.error("用户信息有误！"),!1;o.a.searchcard({md5:r}).then(function(e){if(console.log(e),0==e.data.code)t.$message.error(e.data.msg);else if(1==e.data.code){e.data;e.data.card&&(t.myCard=e.data.card,console.log(t.myCard)),t.getUserMarket()}})},buyCard:function(t,e,a,r){var s=this.haveCardCheck(t);this.$router.push({name:"cardDetail",query:{type:"buy",card:t,price:a,time:e,id:r,have:s}})},cardPageChange:function(t){this.cardPage=t,this.getUserMarket(),this.$router.replace({name:"buyCard",query:{page:t,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort}})},getUserMarket:function(){var t=this,e={type:"search",token:this.token,page:this.cardPage,name:this.searchForm.name,text:this.searchForm.text,star:this.searchForm.star,sort:this.searchForm.sort,have:this.searchForm.ihave};o.a.marketbuy(e).then(function(e){console.log(e),t.loadingMarket=!1,0==e.data.code?t.$message.error(e.data.msg):1==e.data.code&&(0===e.data.data.length&&1!==t.cardPage&&(t.cardPage=1,t.$router.replace({name:"buyCard",query:{page:t.cardPage,name:t.searchForm.name,text:encodeURIComponent(t.searchForm.text),star:t.searchForm.star,sort:t.searchForm.sort,ihave:t.searchForm.ihave}}),t.getUserMarket()),e.data.data.length>0&&(t.pageChangeing=!0),t.cardList=[],setTimeout(function(){t.pageChangeing=!1,t.cardList=e.data.data,t.$route.query.page&&Object(s.i)(250,200)},100),t.cardTotle=e.data.totle)})},search:function(){this.cardPage=1,this.$router.replace({name:"buyCard",query:{page:this.cardPage,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort,ihave:this.searchForm.ihave}}),this.getUserMarket()},clearSearch:function(){this.cardPage=1,this.searchForm={name:"name",text:"",star:"0",sort:"0"},this.$router.replace({name:"buyCard",query:{page:this.cardPage,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort}}),this.getUserMarket()},PrefixInteger_:function(t,e){return Object(s.a)(t,e)}}},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wm_market_content_body"},[a("div",{staticClass:"wm_market_buy_search_body"},[a("div",{staticClass:"wm_market_buy_search_box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchForm}},[a("el-form-item",{attrs:{label:"关键词"}},[a("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"关键词"},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}},[a("el-option",{attrs:{label:"角色名",value:"name"}}),t._v(" "),a("el-option",{attrs:{label:"作品",value:"title"}})],1)],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:t.searchForm.text,callback:function(e){t.$set(t.searchForm,"text",e)},expression:"searchForm.text"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"星级"}},[a("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"星级"},model:{value:t.searchForm.star,callback:function(e){t.$set(t.searchForm,"star",e)},expression:"searchForm.star"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"1星",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"2星",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"3星",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"4星",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"5星",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"6星",value:"6"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"排序"},model:{value:t.searchForm.sort,callback:function(e){t.$set(t.searchForm,"sort",e)},expression:"searchForm.sort"}},[a("el-option",{attrs:{label:"默认",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"价格从低到高",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"价格从高到低",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"星级从低到高",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"星级从高到底",value:"4"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"拥有"}},[a("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"拥有"},model:{value:t.searchForm.ihave,callback:function(e){t.$set(t.searchForm,"ihave",e)},expression:"searchForm.ihave"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"拥有",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"未拥有",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{staticClass:"wm_market_buy_search_btn_body"},[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.clearSearch}},[t._v("取消")])],1)],1)],1)]),t._v(" "),a("div",[a("transition",{attrs:{name:"el-fade-in-linear"}},[t.cardList.length<=0&&!t.pageChangeing?a("div",{staticClass:"wm_market_card_datail_charts_empty"},[t.loadingMarket?a("span",[t._v("市场加载中")]):a("span",[t._v("市场空空如也")]),t._v(" "),"1"!=t.want||t.loadingMarket?t._e():a("div",{staticClass:"wm_market_buy_want"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.wantDialog=!0}}},[t._v("发布求购")])],1)]):t._e()]),t._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[t.cardList.length>0?a("div",{staticClass:"wm_mycard_list"},t._l(t.cardList,function(e,r){return a("div",{key:r+1,staticClass:"wm_market_mycard_item type_mobile",on:{click:function(a){return t.buyCard(e.cardId,e.time,e.price,e._id)}}},[a("div",{staticClass:"wm_getcard_img_box"},[t.haveCardCheck(e.cardId)>0?a("div",{staticClass:"wm_getcard_img_checked"},[a("i",{staticClass:"el-icon-check"})]):t._e(),t._v(" "),a("img",{staticClass:"wm_getcard_img",attrs:{src:"/static/img/"+t.PrefixInteger_(e.cardId,4)+".jpg"}})]),t._v(" "),a("div",{staticClass:"wm_card_nums"},[a("span",{staticClass:"wm_top_info_star"},[t._v("★")]),t._v(t._s(e.price))])])}),0):t._e()]),t._v(" "),t.cardTotle?a("div",{staticClass:"wm_market_content_page"},[a("el-pagination",{staticClass:"my_card_page",attrs:{small:"",layout:"prev, pager, next",total:t.cardTotle,"current-page":t.cardPage,"page-size":20},on:{"current-change":t.cardPageChange,"update:currentPage":function(e){t.cardPage=e},"update:current-page":function(e){t.cardPage=e}}})],1):t._e()],1),t._v(" "),t.wantDialog?a("el-dialog",{staticClass:"reg_code_dialog",attrs:{title:"发布求购",visible:t.wantDialog,"append-to-body":!0,"close-on-click-modal":!1,width:"100%"},on:{"update:visible":function(e){t.wantDialog=e}}},[a("div",[a("div",{staticClass:"wm_market_card_datail_captcha"},[a("div",{staticClass:"tc mb15"},[t._v("Tip:求购信息有效期为7天。")]),t._v(" "),a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"验证码"}},[a("el-input",{attrs:{placeholder:"请输入验证码",type:"tel"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}},[a("template",{slot:"append"},[a("img",{staticClass:"reg_code_img",attrs:{src:t.captchaSrc},on:{click:t.captchaUpdata}})])],2)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"期望星星"}},[a("el-input-number",{staticClass:"wm_market_card_datail_price_input_box",attrs:{size:"medium",precision:0,step:1,max:99999999,min:t.minPrice},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.wantDialog=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.wantCard}},[t._v("求购")])],1)]):t._e()],1)},m=[],h={render:l,staticRenderFns:m},d=h,u=a("VU/8"),_=r,p=u(n,d,!1,_,null,null);e.default=p.exports},"8y7B":function(t,e,a){var r=a("rzdy");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("1e1df755",r,!0,{})},rzdy:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.wm_market_buy_want{\r\n  margin-top: 10px;\n}\n.wm_market_buy_search_select{\r\n  width: 120px;\n}\n@media screen and (max-width:410px) {\n.wm_market_buy_search_select{\r\n    width: 100%;\n}\n}\r\n",""])}});
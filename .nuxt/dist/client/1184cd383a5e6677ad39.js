(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{278:function(t,e,r){var content=r(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("1c93b39a",content,!0,{sourceMap:!1})},280:function(t,e,r){var content=r(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("36873827",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";var o=r(278);r.n(o).a},289:function(t,e,r){(t.exports=r(37)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},309:function(t,e,r){"use strict";var o=r(280);r.n(o).a},310:function(t,e,r){(t.exports=r(37)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}ul>li{line-height:40px;border-bottom:1px solid #333}",""])},311:function(t,e,r){"use strict";r.r(e);r(288);var o=r(29),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=r(290),c=r.n(l).a.create({baseURL:"http://www.chenjiacheng.cn"}),d={data:function(){return{data:[]}},components:{Logo:n},asyncData:function(t){return c.get("/api/class").then(function(data){return{data:data.data.data}}).catch(function(t){})},created:function(){setTimeout(function(){},1e3)}},f=(r(309),Object(o.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",[r("logo"),t._v(" "),r("nuxt-link",{attrs:{to:"/user"}},[t._v("用户页面")]),t._v(" "),t._m(0),t._v(" "),r("ul",t._l(t.data,function(e){return r("li",{key:e.id},[r("h4",[t._v(t._s(e.title))])])}),0)],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-hd"},[e("h2",{staticClass:"title"},[this._v("test")])])}],!1,null,null,null));e.default=f.exports}}]);
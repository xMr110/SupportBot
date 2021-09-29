"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[261],{261:(e,t,n)=>{n.r(t),n.d(t,{nodeJSChat:()=>v});var a=n(8926),s=n.n(a),r=n(4575),i=n.n(r),c=n(3913),h=n.n(c),o=n(7003),u=n.n(o),d=n(7757),p=n.n(d),l=n(2137),g=n(6512),v=new(function(){function e(){var t=this;i()(this,e),this.socket=null,l.a.eventEmitter.addListener("endedChat",(function(){null!==t.socket&&t.socket.disconnect()}))}return h()(e,[{key:"bootstrap",value:function(e,t,a){console.log("connect");var r=a(),i=r.chatwidget.getIn(["chatData","id"]),c=(r.chatwidget.getIn(["chatData","hash"]),r.chatwidget.getIn(["chat_ui","sync_interval"])),h={hostname:e.hostname,path:e.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}};""!=e.port&&(h.port=parseInt(e.port)),1==e.secure&&(h.secure=!0),e.instance_id>0&&e.instance_id;var o=n(2984),d=this.socket=o.create(h),v=null;function m(){var t=a(),n=t.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+n+"/"+t.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=s()(p().mark((function t(a){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([d.invoke("login",{hash:a.data,chanelName:e.instance_id>0?"chat_"+e.instance_id+"_"+n:"chat_"+n}),d.listener("authenticate").once()]);case 2:b();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function _(t){console.log("typing listener"),1==t.status?e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:t.msg}):e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vts"}):d.transmitPublish("chat_"+i,{op:"vts"})}function f(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"✉️ "+t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:"✉️ "+t.msg})}function w(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):d.transmitPublish("chat_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function x(){if(null!==v)try{v.unsubscribe(),console.log("channel destroy success")}catch(e){console.log(e)}l.a.eventEmitter.removeListener("visitorTyping",_),l.a.eventEmitter.removeListener("messageSend",f),l.a.eventEmitter.removeListener("messageSendError",w),t({type:"CHAT_UI_UPDATE",data:{sync_interval:c}}),t({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})}function b(){return k.apply(this,arguments)}function k(){return(k=s()(p().mark((function n(){var r,c,h,o,m,x,b,k,y,D,I;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(v),r=null==v,v=e.instance_id>0?d.subscribe("chat_"+e.instance_id+"_"+i):d.subscribe("chat_"+i),s()(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.listener("subscribe").once();case 2:d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+i:"chat_"+i,{op:"vi_online",status:!0});case 3:case"end":return t.stop()}}),t)})))(),l.a.eventEmitter.addListener("visitorTyping",_),l.a.eventEmitter.addListener("messageSend",f),l.a.eventEmitter.addListener("messageSendError",w),t({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),t({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1!=r){n.next=38;break}c=!1,h=!1,n.prev=12,m=u()(v);case 14:return n.next=16,m.next();case 16:if(!(c=!(x=n.sent).done)){n.next=22;break}"ot"==(b=x.value).op?1==b.data.status?t({type:"chat_status_changed",data:{text:b.data.ttx}}):t({type:"chat_status_changed",data:{text:""}}):"cmsg"==b.op||"schange"==b.op?(k=a()).chatwidget.hasIn(["chatData","id"])&&t((0,g.W4)({chat_id:k.chatwidget.getIn(["chatData","id"]),hash:k.chatwidget.getIn(["chatData","hash"]),lmgsid:k.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:k.chatwidget.get("theme")})):"umsg"==b.op?(y=a()).chatwidget.hasIn(["chatData","id"])&&(0,g.o6)({msg_id:b.msid,id:y.chatwidget.getIn(["chatData","id"]),hash:y.chatwidget.getIn(["chatData","hash"])})(t,a):"schange"==b.op||"cclose"==b.op?(D=a()).chatwidget.hasIn(["chatData","id"])&&t((0,g.kW)({chat_id:D.chatwidget.getIn(["chatData","id"]),hash:D.chatwidget.getIn(["chatData","hash"]),mode:D.chatwidget.get("mode"),theme:D.chatwidget.get("theme")})):"vo"==b.op&&(I=a()).chatwidget.hasIn(["chatData","id"])&&d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+I.chatwidget.getIn(["chatData","id"]):"chat_"+I.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 19:c=!1,n.next=14;break;case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(12),h=!0,o=n.t0;case 28:if(n.prev=28,n.prev=29,!c||null==m.return){n.next=33;break}return n.next=33,m.return();case 33:if(n.prev=33,!h){n.next=36;break}throw o;case 36:return n.finish(33);case 37:return n.finish(28);case 38:case"end":return n.stop()}}),n,null,[[12,24,28,38],[29,,33,37]])})))).apply(this,arguments)}s()(p().mark((function e(){var t,n,a,s,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,s=u()(d.listener("connect"));case 4:return e.next=6,s.next();case 6:if(!(t=!(r=e.sent).done)){e.next=12;break}r.value.isAuthenticated?b():m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n=!0,a=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==s.return){e.next=23;break}return e.next=23,s.return();case 23:if(e.prev=23,!n){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))(),s()(p().mark((function e(){var t,n,a,s,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,s=u()(d.listener("disconnect"));case 4:return e.next=6,s.next();case 6:if(!(t=!(r=e.sent).done)){e.next=13;break}r.value,console.log("disconnect"),x();case 10:t=!1,e.next=4;break;case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),n=!0,a=e.t0;case 19:if(e.prev=19,e.prev=20,!t||null==s.return){e.next=24;break}return e.next=24,s.return();case 24:if(e.prev=24,!n){e.next=27;break}throw a;case 27:return e.finish(24);case 28:return e.finish(19);case 29:case"end":return e.stop()}}),e,null,[[2,15,19,29],[20,,24,28]])})))(),s()(p().mark((function e(){var t,n,a,s,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,n=!1,e.prev=2,s=u()(d.listener("deauthenticate"));case 4:return e.next=6,s.next();case 6:if(!(t=!(r=e.sent).done)){e.next=12;break}r.value,m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n=!0,a=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==s.return){e.next=23;break}return e.next=23,s.return();case 23:if(e.prev=23,!n){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))()}}]),e}())}}]);
//# sourceMappingURL=261.3c554d076b9002bf8cec.js.map
"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[770],{97770:function(e,t,a){a.r(t),a.d(t,{nodeJSChat:function(){return m}});var n=a(48926),r=a.n(n),s=a(34575),i=a.n(s),c=a(93913),h=a.n(c),u=a(47003),o=a.n(u),d=(a(66992),a(41539),a(88674),a(78783),a(33948),a(87757)),p=a.n(d),l=a(50834),v=a(44134),g=function(){function e(){var t=this;i()(this,e),this.socket=null,l.a.eventEmitter.addListener("endedChat",(function(){null!==t.socket&&t.socket.disconnect()}))}return h()(e,[{key:"bootstrap",value:function(e,t,n){var s=n(),i=s.chatwidget.getIn(["chatData","id"]),c=(s.chatwidget.getIn(["chatData","hash"]),s.chatwidget.getIn(["chat_ui","sync_interval"])),h={protocolVersion:1,hostname:e.hostname,path:e.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}};""!=e.port&&(h.port=parseInt(e.port)),1==e.secure&&(h.secure=!0),e.instance_id>0&&e.instance_id;var u=a(12984),d=this.socket=u.create(h),g=null;function m(){var t=n(),a=t.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+a+"/"+t.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(){var t=r()(p().mark((function t(n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([d.invoke("login",{hash:n.data,chanelName:e.instance_id>0?"chat_"+e.instance_id+"_"+a:"chat_"+a}),d.listener("authenticate").once()]);case 2:b();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}function _(t){1==t.status?e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:t.msg}):e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vts"}):d.transmitPublish("chat_"+i,{op:"vts"})}function f(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"✉️ "+t.msg}):d.transmitPublish("chat_"+i,{op:"vt",msg:"✉️ "+t.msg})}function x(t){e.instance_id>0?d.transmitPublish("chat_"+e.instance_id+"_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):d.transmitPublish("chat_"+i,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function w(){if(null!==g)try{g.unsubscribe()}catch(e){}l.a.eventEmitter.removeListener("visitorTyping",_),l.a.eventEmitter.removeListener("messageSend",f),l.a.eventEmitter.removeListener("messageSendError",x),t({type:"CHAT_UI_UPDATE",data:{sync_interval:c}}),t({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})}function b(){var a=null==g;g=e.instance_id>0?d.subscribe("chat_"+e.instance_id+"_"+i):d.subscribe("chat_"+i),l.a.eventEmitter.addListener("visitorTyping",_),l.a.eventEmitter.addListener("messageSend",f),l.a.eventEmitter.addListener("messageSendError",x),t({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),t({type:"CHAT_ADD_OVERRIDE",data:"typing"}),1==a&&(r()(p().mark((function t(){var a,n,r,s,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=!1,n=!1,t.prev=2,s=o()(g.listener("subscribe"));case 4:return t.next=6,s.next();case 6:if(!(a=!(c=t.sent).done)){t.next=12;break}c.value,d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+i:"chat_"+i,{op:"vi_online",status:!0});case 9:a=!1,t.next=4;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),n=!0,r=t.t0;case 18:if(t.prev=18,t.prev=19,!a||null==s.return){t.next=23;break}return t.next=23,s.return();case 23:if(t.prev=23,!n){t.next=26;break}throw r;case 26:return t.finish(23);case 27:return t.finish(18);case 28:case"end":return t.stop()}}),t,null,[[2,14,18,28],[19,,23,27]])})))(),r()(p().mark((function a(){var r,s,i,c,h,u,l,m,_,f;return p().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=!1,s=!1,a.prev=2,c=o()(g);case 4:return a.next=6,c.next();case 6:if(!(r=!(h=a.sent).done)){a.next=12;break}"ot"==(u=h.value).op?1==u.data.status?t({type:"chat_status_changed",data:{text:u.data.ttx}}):t({type:"chat_status_changed",data:{text:""}}):"cmsg"==u.op||"schange"==u.op?(l=n()).chatwidget.hasIn(["chatData","id"])&&t((0,v.W4)({chat_id:l.chatwidget.getIn(["chatData","id"]),hash:l.chatwidget.getIn(["chatData","hash"]),lmgsid:l.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:l.chatwidget.get("theme")})):"umsg"==u.op?(m=n()).chatwidget.hasIn(["chatData","id"])&&(0,v.o6)({msg_id:u.msid,id:m.chatwidget.getIn(["chatData","id"]),hash:m.chatwidget.getIn(["chatData","hash"])})(t,n):"schange"==u.op||"cclose"==u.op?(_=n()).chatwidget.hasIn(["chatData","id"])&&t((0,v.kW)({chat_id:_.chatwidget.getIn(["chatData","id"]),hash:_.chatwidget.getIn(["chatData","hash"]),mode:_.chatwidget.get("mode"),theme:_.chatwidget.get("theme")})):"vo"==u.op&&(f=n()).chatwidget.hasIn(["chatData","id"])&&d.transmitPublish(e.instance_id>0?"chat_"+e.instance_id+"_"+f.chatwidget.getIn(["chatData","id"]):"chat_"+f.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0});case 9:r=!1,a.next=4;break;case 12:a.next=18;break;case 14:a.prev=14,a.t0=a.catch(2),s=!0,i=a.t0;case 18:if(a.prev=18,a.prev=19,!r||null==c.return){a.next=23;break}return a.next=23,c.return();case 23:if(a.prev=23,!s){a.next=26;break}throw i;case 26:return a.finish(23);case 27:return a.finish(18);case 28:case"end":return a.stop()}}),a,null,[[2,14,18,28],[19,,23,27]])})))())}r()(p().mark((function e(){var t,a,n,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,a=!1,e.prev=2,r=o()(d.listener("connect"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value.isAuthenticated&&i>0?b():m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),a=!0,n=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!a){e.next=26;break}throw n;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))(),r()(p().mark((function e(){var t,a,n,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,a=!1,e.prev=2,r=o()(d.listener("disconnect"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value,w();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),a=!0,n=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!a){e.next=26;break}throw n;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))(),r()(p().mark((function e(){var t,a,n,r,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!1,a=!1,e.prev=2,r=o()(d.listener("deauthenticate"));case 4:return e.next=6,r.next();case 6:if(!(t=!(s=e.sent).done)){e.next=12;break}s.value,m();case 9:t=!1,e.next=4;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),a=!0,n=e.t0;case 18:if(e.prev=18,e.prev=19,!t||null==r.return){e.next=23;break}return e.next=23,r.return();case 23:if(e.prev=23,!a){e.next=26;break}throw n;case 26:return e.finish(23);case 27:return e.finish(18);case 28:case"end":return e.stop()}}),e,null,[[2,14,18,28],[19,,23,27]])})))()}}]),e}(),m=new g}}]);
//# sourceMappingURL=770.9361f4009981728c2077.ie.js.map
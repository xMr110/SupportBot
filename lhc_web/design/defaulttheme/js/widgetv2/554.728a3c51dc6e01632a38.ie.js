"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[554],{95554:function(t,e,a){a.r(e),a(12419),a(47941),a(82526),a(57327),a(38880),a(89554),a(54747),a(49337),a(33321),a(69070);var i,n=a(59713),r=a.n(n),s=a(34575),o=a.n(s),p=a(93913),h=a.n(p),c=a(81506),l=a.n(c),d=a(2205),g=a.n(d),f=a(78585),u=a.n(f),m=a(29754),w=a.n(m),_=(a(24812),a(68309),a(21249),a(67294)),v=a(46458),b=a(30578),I=(a(29354),a(7139)),y=a(44134),C=a(50834),E=a(32125);function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S=(0,v.$j)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){g()(n,t);var e,a,i=(e=n,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=w()(e);if(a){var n=w()(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return u()(this,t)});function n(t){var e;return o()(this,n),(e=i.call(this,t)).state={},e.initOfflineFormCall(),e.handleSubmit=e.handleSubmit.bind(l()(e)),e.handleContentChange=e.handleContentChange.bind(l()(e)),e.handleContentChangeCustom=e.handleContentChangeCustom.bind(l()(e)),e.goToChat=e.goToChat.bind(l()(e)),e}return h()(n,[{key:"initOfflineFormCall",value:function(t){this.props.dispatch((0,y.Zg)({department:this.props.chatwidget.get("department"),theme:this.props.chatwidget.get("theme"),mode:this.props.chatwidget.get("mode"),bot_id:this.props.chatwidget.get("bot_id"),trigger_id:this.props.chatwidget.get("trigger_id"),online:0,dep_default:t||this.props.chatwidget.get("departmentDefault")||0}))}},{key:"handleSubmit",value:function(t){var e=this.state,a=!1,i=new FormData;void 0!==e.File&&(a=!0,i.append("File",e.File,e.File.name)),e.jsvar=this.props.chatwidget.get("jsVars"),e["captcha_"+this.props.chatwidget.getIn(["captcha","hash"])]=this.props.chatwidget.getIn(["captcha","ts"]),e.tscaptcha=this.props.chatwidget.getIn(["captcha","ts"]),e.user_timezone=C.a.getTimeZone(),e.URLRefer=window.location.href.substring(window.location.protocol.length),e.r=this.props.chatwidget.get("ses_ref"),""!=this.props.chatwidget.get("operator")&&(e.operator=this.props.chatwidget.get("operator")),null!==this.props.chatwidget.get("priority")&&(e.priority=this.props.chatwidget.get("priority"));var n=C.a.getCustomFieldsSubmit(this.props.chatwidget.getIn(["customData","fields"]));null!==n&&(e=O(O({},e),n));var r={department:this.props.chatwidget.get("department"),theme:this.props.chatwidget.get("theme"),mode:this.props.chatwidget.get("mode"),vid:this.props.chatwidget.get("vid"),fields:e};a&&i.append("document",JSON.stringify(r)),this.props.dispatch((0,y.q5)(a?i:r)),t.preventDefault()}},{key:"handleContentChange",value:function(t){var e=this,a=this.state;a[t.id]=t.value,this.setState(a),"DepartamentID"==t.id&&this.props.chatwidget.getIn(["offlineData","department","departments"]).size>0&&this.props.chatwidget.getIn(["offlineData","department","departments"]).map((function(a){a.get("value")==t.value&&(1==a.get("online")&&(e.props.dispatch({type:"dep_default",data:t.value}),e.props.dispatch({type:"onlineStatus",data:!0})),e.props.chatwidget.getIn(["onlineData","dep_forms"])!=t.value&&e.initOfflineFormCall(t.value))}))}},{key:"componentDidMount",value:function(){C.a.prefillFields(this)}},{key:"handleContentChangeCustom",value:function(t){this.props.dispatch({type:"CUSTOM_FIELDS_ITEM",data:{id:t.field.get("index"),value:t.value}})}},{key:"goToChat",value:function(){this.props.dispatch({type:"attr_set",attr:["isOfflineMode"],data:!1})}},{key:"componentDidUpdate",value:function(t,e,a){if(document.getElementById("id-container-fluid")){var i=0;document.getElementById("widget-header-content")&&(i=document.getElementById("widget-header-content").offsetHeight),C.a.sendMessageParent("widgetHeight",[{height:document.getElementById("id-container-fluid").offsetHeight+i+10}])}}},{key:"render",value:function(){var t=this,e=this.props.t;if(!0===this.props.chatwidget.getIn(["offlineData","fetched"])&&!0===this.props.chatwidget.getIn(["offlineData","disabled"]))return _.createElement("div",{className:"alert alert-danger m-2",role:"alert"},e("start_chat.cant_start_a_chat"));if(!1===this.props.chatwidget.getIn(["offlineData","fetched"]))return null;if(this.props.chatwidget.getIn(["offlineData","fields"]).size>0)var a=this.props.chatwidget.getIn(["offlineData","fields"]).map((function(e){return _.createElement(b.Z,{chatUI:t.props.chatwidget.get("chat_ui"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),attrPrefill:{attr_prefill_admin:t.props.chatwidget.get("attr_prefill_admin"),attr_prefill:t.props.chatwidget.get("attr_prefill")},defaultValueField:t.state[e.get("name")]||e.get("value"),onChangeContent:t.handleContentChange,field:e})}));else a="";if(this.props.chatwidget.getIn(["customData","fields"]).size>0)var i=this.props.chatwidget.getIn(["customData","fields"]).map((function(e){return _.createElement(b.Z,{chatUI:t.props.chatwidget.get("chat_ui"),key:e.get("identifier"),isInvalid:t.props.chatwidget.hasIn(["validationErrors",e.get("identifier")]),defaultValueField:e.get("value"),onChangeContent:t.handleContentChangeCustom,field:e})}));else i="";return 0==this.props.chatwidget.get("processStatus")||1==this.props.chatwidget.get("processStatus")?_.createElement("div",{id:"id-container-fluid"},this.props.chatwidget.get("leave_message")&&this.props.chatwidget.hasIn(["chat_ui","operator_profile"])&&""!=this.props.chatwidget.getIn(["chat_ui","operator_profile"])&&_.createElement("div",{className:"py-2 px-3 offline-intro-operator",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","operator_profile"])}}),this.props.chatwidget.get("leave_message")&&this.props.chatwidget.hasIn(["chat_ui","offline_intro"])&&""!=this.props.chatwidget.getIn(["chat_ui","offline_intro"])&&_.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","offline_intro"])}}),!this.props.chatwidget.get("leave_message")&&_.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro"},this.props.chatwidget.getIn(["chat_ui","chat_unavailable"])),this.props.chatwidget.get("leave_message")&&_.createElement("div",{className:"container-fluid"},_.createElement("form",{onSubmit:this.handleSubmit,className:"offline-form"},_.createElement("div",{className:"row pt-2"},a,i,this.props.chatwidget.hasIn(["offlineData","department"])&&_.createElement(E.Z,{defaultValueField:this.state.DepartamentID,setDefaultValue:this.props.chatwidget.get("departmentDefault"),onChangeContent:this.handleContentChange,isInvalid:this.props.chatwidget.hasIn(["validationErrors","department"]),departments:this.props.chatwidget.getIn(["offlineData","department"])})),(!this.props.chatwidget.hasIn(["chat_ui","hstr_btn"])||""!==i||""!==a)&&_.createElement("div",{className:"row"},_.createElement("div",{className:"col-12 pb-2"},_.createElement("button",{type:"submit",disabled:1==this.props.chatwidget.get("processStatus"),className:"btn btn-secondary btn-sm"},1==this.props.chatwidget.get("processStatus")&&_.createElement("i",{className:"material-icons"},""),this.props.chatwidget.getIn(["chat_ui","custom_start_button"])||e("start_chat.leave_a_message")),!0===this.props.chatwidget.get("isOnline")&&!0===this.props.chatwidget.get("isOfflineMode")&&_.createElement("button",{type:"button",onClick:this.goToChat,className:"float-right btn btn-sm btn-link text-muted"},"« ",e("button.back_to_chat"))))))):2==this.props.chatwidget.get("processStatus")?_.createElement("div",{id:"id-container-fluid"},this.props.chatwidget.hasIn(["chat_ui","operator_profile"])&&""!=this.props.chatwidget.getIn(["chat_ui","operator_profile"])&&_.createElement("div",{className:"py-2 px-3 offline-intro-operator",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","operator_profile"])}}),this.props.chatwidget.hasIn(["chat_ui","offline_intro"])&&""!=this.props.chatwidget.getIn(["chat_ui","offline_intro"])&&_.createElement("p",{className:"pb-1 mb-0 pt-2 px-3 font-weight-bold offline-intro",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["chat_ui","offline_intro"])}}),_.createElement("div",{className:"container-fluid"},_.createElement("div",{className:"row"},_.createElement("div",{className:"col-12"},_.createElement("p",{className:"pt-2"},this.props.chatwidget.getIn(["chat_ui","thank_feedback"])||e("start_chat.thank_you_for_feedback")))))):void 0}}]),n}(_.Component))||i;e.default=(0,I.Z)()(S)}}]);
//# sourceMappingURL=554.728a3c51dc6e01632a38.ie.js.map
"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[94],{37094:function(e,t,a){a.r(t),a(12419);var n=a(34575),s=a.n(n),l=a(93913),r=a.n(l),i=a(81506),o=a.n(i),c=a(2205),m=a.n(c),d=a(78585),u=a.n(d),h=a(29754),f=a.n(h),p=a(59713),b=a.n(p),g=a(67294),v=a(9669),E=a.n(v),y=a(7139);var N=function(e){m()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=f()(t);if(a){var s=f()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return u()(this,e)});function l(e){var t;return s()(this,l),t=n.call(this,e),b()(o()(t),"state",{mail:null,success:"",errors:null,sending:!1}),b()(o()(t),"dismissModal",(function(){t.props.toggle()})),t.sendMail=t.sendMail.bind(o()(t)),t.emailRef=g.createRef(),t}return r()(l,[{key:"sendMail",value:function(e){var t=this;this.setState({sending:!0}),E().post(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash+"/(action)/send",{email:this.state.mail},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){0==e.data.error?t.props.toggle():(t.setState({sending:!1}),t.setState({errors:e.data.result}))})),e&&e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;E().get(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash).then((function(t){e.setState({mail:t.data}),e.emailRef.current&&e.emailRef.current.focus()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.t;return g.createElement(g.Fragment,null,null!==this.state.mail&&g.createElement(g.Fragment,null,g.createElement("div",{className:"fade modal-backdrop show"}),g.createElement("div",{role:"dialog",id:"dialog-content","aria-modal":"true",className:"fade modal show d-block",tabIndex:"-1"},g.createElement("div",{className:"modal-dialog modal-lg"},g.createElement("div",{className:"modal-content"},g.createElement("div",{className:"modal-header pt-1 pb-1 pl-2 pr-2"}," ",g.createElement("h4",{className:"modal-title",id:"myModalLabel"},g.createElement("span",{className:"material-icons"},""),t("button.mail")),g.createElement("button",{type:"button",className:"close float-right","data-dismiss":"modal",onClick:this.dismissModal,"aria-label":"Close"},g.createElement("span",{"aria-hidden":"true"},"×"))),g.createElement("div",{className:"modal-body"},g.createElement("div",{className:"row"},g.createElement("div",{className:"col-12"},this.state.errors&&g.createElement("div",{className:"mb-0",dangerouslySetInnerHTML:{__html:this.state.errors}}),g.createElement("div",{className:"mb-0"},g.createElement("form",{onSubmit:this.sendMail},g.createElement("input",{className:"form-control form-group form-control-sm",ref:this.emailRef,required:"required",type:"email",defaultValue:this.state.mail,onChange:function(t){return e.setState({mail:t.target.value})},placeholder:t("chat.enter_email"),title:t("chat.enter_email")}),g.createElement("div",{className:"btn-group",role:"group","aria-label":"..."},g.createElement("button",{type:"submit",disabled:this.state.sending,className:"btn btn-secondary btn-sm"},t("button.send")),g.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:this.dismissModal},t("button.cancel")))))))))))))}}]),l}(g.PureComponent);t.default=(0,y.Z)()(N)}}]);
//# sourceMappingURL=94.764dbd621b27167979b4.ie.js.map
(self.webpackChunkchatting_webapp=self.webpackChunkchatting_webapp||[]).push([[109],{6109:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P});var r=s(14890),a=s(37703),o=s(42560),n=s(18493),l=(s(88674),s(33948),s(60285),s(64765),s(45697)),c=s.n(l),i=s(67294),d=s(44012),u=s(89262),m=s(92337),p=s(927),h=s(82251);function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class f extends i.PureComponent{constructor(e){super(e),w(this,"handlePasswordReset",(async e=>{e.preventDefault();const t=this.passwordInput.current.value;if(!t||t.length<m.ZP.MIN_PASSWORD_LENGTH)return void this.setState({error:i.createElement(d.Z,{id:"password_form.error",defaultMessage:"Please enter at least {chars} characters.",values:{chars:m.ZP.MIN_PASSWORD_LENGTH}})});this.setState({error:null});const s=new URLSearchParams(this.props.location.search).get("token"),{data:r,error:a}=await this.props.actions.resetUserPassword(s,t);r?(u.m.push("/login?extra="+m.ZP.PASSWORD_CHANGE),this.setState({error:null})):a&&this.setState({error:a.message})})),this.state={error:null},this.passwordInput=i.createRef()}render(){let e=null;this.state.error&&(e=i.createElement("div",{className:"form-group has-error"},i.createElement("label",{className:"control-label"},this.state.error)));let t="form-group";return e&&(t+=" has-error"),i.createElement("div",{className:"col-sm-12"},i.createElement("div",{className:"signup-team__container"},i.createElement("h3",null,i.createElement(d.Z,{id:"password_form.title",defaultMessage:"Password Reset"})),i.createElement("form",{onSubmit:this.handlePasswordReset},i.createElement("p",null,i.createElement(d.Z,{id:"password_form.enter",defaultMessage:"Enter a new password for your {siteName} account.",values:{siteName:this.props.siteName}})),i.createElement("div",{className:t},i.createElement(p.Z,{id:"resetPasswordInput",type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:(0,h.t)("password_form.pwd"),defaultMessage:"Password"},spellCheck:"false",autoFocus:!0})),e,i.createElement("button",{id:"resetPasswordButton",type:"submit",className:"btn btn-primary"},i.createElement(d.Z,{id:"password_form.change",defaultMessage:"Change my password"})))))}}w(f,"propTypes",{location:c().object.isRequired,siteName:c().string,actions:c().shape({resetUserPassword:c().func.isRequired}).isRequired});const P=(0,a.connect)((e=>{const{SiteName:t}=(0,o.iE)(e);return{siteName:t}}),(e=>({actions:(0,r.bindActionCreators)({resetUserPassword:n.$P},e)})))(f)}}]);
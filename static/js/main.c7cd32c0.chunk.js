(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(n,e,t){n.exports=t.p+"static/media/logo.311a680a.png"},41:function(n,e,t){n.exports=t(58)},52:function(n,e,t){"use strict";t.r(e);e.default={cloudantUrl:"https://532d2bcf-5ee9-4ade-89df-78fb309beb8c-bluemix.cloudant.com/react-pouchdb-couchdb-demo",username:"532d2bcf-5ee9-4ade-89df-78fb309beb8c-bluemix",password:"e1695887a19bbe12c809b226222fb38e1758a967151e8138b4daab7b5fa2d0e9"}},58:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(13),i=t.n(a),c=t(1),u=t(32),l=t.n(u),d=t(22),s={white:"#ffffff",darkGray:"#888",gray:"#e6e6e6",lightGray:"#fafafa",red:"#cb084a",lightRed:"#f5bcbc",black:"#000",blue:"#03bde2",darkBlue:"#0293b0",offline:"#f94a58",online:"#0cd29c"},f={spacing:{sm:"5px",md:"10px",lg:"15px",xl:"20px",xxl:"25px"}},h={boxSizing:"border-box",width:"100%",outline:"none",borderRadius:"50px",borderWidth:1,borderStyle:"solid",borderColor:s.gray,padding:f.spacing.lg,background:s.white,transition:"all 0.3s ease"},m={view:{boxSizing:"border-box",height:"100%",background:s.lightGray,padding:f.spacing.xl},input:Object(d.a)({},h),inputError:Object(d.a)({},h,{borderColor:s.red}),boxShadow:"0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08)"},b={size:{default:"16px",small:"14px"},type:{default:"Helvetica Neue, sans-serif"},weight:{regular:"400",bold:"700"}},g={document:{background:s.lightGray,color:s.black,fontFamily:b.type.default,fontSize:b.size.default,logo:l.a,logoHeightSmall:"30px",logoHeightTablet:"50px"},header:{background:s.white,boxShadow:m.boxShadow,marginBottom:"40px",padding:"".concat(f.spacing.xl," ").concat(f.spacing.xl)},heading:{fontWeight:b.weight.bold},link:{color:s.darkBlue},inputWrapper:{margin:"0 0 ".concat(f.spacing.lg," 0")},input:{background:s.white,borderColor:s.gray,borderError:s.red,borderRadius:"50px",fontFamily:b.type.roboto,fontSize:"16px",fontWeight:b.weight.regular,height:"50px",padding:f.spacing.lg,width:"100%"},listItem:{background:s.gray,backgroundHover:s.lightRed,margin:"0 0 ".concat(f.spacing.sm," 0"),padding:f.spacing.lg},modalClose:{color:s.blue,fontSize:"18px",fontWeight:"bold",padding:f.spacing.xl},modalTrigger:{color:s.blue,fontSize:"18px",fontWeight:"bold"},offlineStatus:{background:s.offline},onlineStatus:{background:s.online}},p=t(4),v=t(5),x=t(7),w=t(6),y=t(8),k=t(2),O=t(14),j=t(11),E=t.n(j),C=t(17),S=t(23),z=function(n){function e(n){var r;Object(p.a)(this,e),(r=Object(x.a)(this,Object(w.a)(e).call(this))).state={items:{}},r.localDB=new S.a(n);try{var o=t(52),a=o.default,i=a.cloudantUrl,c=a.username,u=a.password;o.default.cloudant_url&&(r.remoteDB=new S.a(i,{auth:{username:c,password:u}}))}catch(l){throw new Error("Unable to find secret.js file. Remote sync disabled.")}return r.remoteDB&&r.syncToRemote(),r.getItems().then(function(n){return r.setState({items:n})}),r}return Object(y.a)(e,n),Object(v.a)(e,[{key:"syncToRemote",value:function(){var n=this;this.localDB.sync(this.remoteDB,{live:!0}).on("change",function(){n.getItems().then(function(e){return n.setState({items:e})})}).on("paused",function(n){console.log("paused",n)}).on("active",function(){console.log("active")}).on("denied",function(n){console.log("denied",n)}).on("complete",function(n){console.log("complete",n)}).on("error",function(n){console.log("error"),console.log(JSON.stringify(n))})}},{key:"getItems",value:function(){var n=Object(C.a)(E.a.mark(function n(){var e,t;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.warn("getItems"),e={},n.next=4,this.localDB.allDocs({include_docs:!0});case 4:return(t=n.sent).rows.forEach(function(n){return e[n.id]=n.doc}),console.log("Items from database: ".concat(JSON.stringify(t))),n.abrupt("return",e);case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"saveItem",value:function(){var n=Object(C.a)(E.a.mark(function n(e){return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.localDB.post(e);case 1:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var n=Object(C.a)(E.a.mark(function n(e){return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.localDB.remove(e);case 1:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}]),e}(O.a),B=t(34);function T(){var n=Object(k.a)(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return T=function(){return n},n}var W={tablet:768},R=Object.keys(W).reduce(function(n,e){var t=W[e]/16;return n[e]=function(){return Object(c.c)(T(),t,c.c.apply(void 0,arguments))},n},{});function D(){var n=Object(k.a)(["\n  background: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ",";\n  font-weight: ",";\n"]);return D=function(){return n},n}var I=c.d.button(D(),function(n){return n.theme.modalTrigger.color},function(n){return n.theme.modalTrigger.fontSize},function(n){return n.theme.modalTrigger.fontWeight}),N=function(n){var e=n.buttonRef,t=n.onOpen,r=n.text;return o.a.createElement(I,{type:"button",onClick:t,ref:e},r)};N.defaultProps={buttonRef:null};var L=N,P=t(37),A=t.n(P);function F(){var n=Object(k.a)(["\n  padding-top: 0.25em;\n"]);return F=function(){return n},n}function H(){var n=Object(k.a)(["\n  align-items: center;\n  border: 0;\n  box-shadow: 0;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1;\n  padding: ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);return H=function(){return n},n}function U(){var n=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 2.5em 1.5em 1.5em 1.5em;\n  background-color: #ffffff;\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n\n  @media screen and (min-width: 500px) {\n    left: 50%;\n    top: 50%;\n    height: auto;\n    transform: translate(-50%, -50%);\n    max-width: 30em;\n    max-height: calc(100% - 1em);\n  }\n"]);return U=function(){return n},n}function G(){var n=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999; /* This must be at a higher index to the rest of your page content */\n  transform: translateZ(0);\n  background-color: rgba(0, 0, 0, 0.8);\n"]);return G=function(){return n},n}var J=Object(c.d)(A.a)(G()),Y=c.d.div(U()),_=c.d.button(H(),function(n){return n.theme.modalClose.color},function(n){return n.theme.modalClose.fontSize},function(n){return n.theme.modalClose.fontWeight},function(n){return n.theme.modalClose.padding}),q=c.d.div(F()),M=function(n){var e=n.ariaLabel,t=n.buttonRef,r=n.content,a=n.modalRef,c=n.onClickAway,u=n.onClose,l=n.role,d=void 0===l?"dialog":l;return i.a.createPortal(o.a.createElement(J,{"aria-label":e,"aria-modal":"true",className:"c-modal-cover",focusTrapOptions:{onDeactivate:u},onClick:c,role:d,tag:"aside"},o.a.createElement(Y,{ref:a},o.a.createElement(_,{"aria-labelledby":"close-modal",onClick:u,ref:t,type:"button"},"Close"),o.a.createElement(q,null,r))),document.body)},V=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(x.a)(this,Object(w.a)(e).call(this,n))).onOpen=function(){t.setState({isOpen:!0},function(){t.closeButtonNode.focus()}),t.addScrollLock()},t.onClose=function(){t.setState({isOpen:!1}),t.openButtonNode.focus(),t.removeScrollLock()},t.onClickAway=function(n){t.modalNode&&t.modalNode.contains(n.target)||t.onClose()},t.addScrollLock=function(){return document.querySelector("html").classList.add("u-lock-scroll")},t.removeScrollLock=function(){return document.querySelector("html").classList.remove("u-lock-scroll")},t.state={isOpen:!1},t}return Object(y.a)(e,n),Object(v.a)(e,[{key:"render",value:function(){var n=this,e=this.state.isOpen,t=this.props,a=t.ariaLabel,i=t.children,c=t.triggerText,u=t.role;return o.a.createElement(r.Fragment,null,o.a.createElement(L,{onOpen:this.onOpen,buttonRef:function(e){return n.openButtonNode=e},text:c}),e&&o.a.createElement(M,{ariaLabel:a,buttonRef:function(e){return n.closeButtonNode=e},modalRef:function(e){return n.modalNode=e},content:i,onClickAway:this.onClickAway,onClose:this.onClose,role:u}))}}]),e}(r.Component);function Z(){var n=Object(k.a)(["\n  font-size: 16px;\n  margin: 0 0 20px;\n"]);return Z=function(){return n},n}function $(){var n=Object(k.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return $=function(){return n},n}function K(){var n=Object(k.a)(["\n  font-size: 22px;\n  font-weight: ",";\n  margin: 0 0 10px;\n"]);return K=function(){return n},n}function Q(){var n=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Q=function(){return n},n}function X(){var n=Object(k.a)(["\n  display: flex;\n  text-align: center;\n  justify-content: center;\n\n  .online {\n    background-color: ",";\n    border-radius: 5px;\n    padding: 5px;\n    width: 200px;\n  }\n\n  .offline {\n    background-color: ",";\n    border-radius: 5px;\n    padding: 5px;\n    width: 200px;\n  }\n"]);return X=function(){return n},n}function nn(){var n=Object(k.a)(["\n    height: ",";\n  "]);return nn=function(){return n},n}function en(){var n=Object(k.a)(['\n  background: url("','") no-repeat;\n  background-size: contain;\n  height: 100%;\n  height: ',";\n  width: 100%;\n\n  ",";\n"]);return en=function(){return n},n}function tn(){var n=Object(k.a)(["\n  align-items: center;\n  background: ",";\n  box-shadow: ",";\n  display: flex;\n  margin-bottom: ",";\n  padding: ",";\n  position: relative;\n  width: 100%;\n\n  > * {\n    flex: 1;\n  }\n"]);return tn=function(){return n},n}var rn=c.d.div(tn(),function(n){return n.theme.header.background},function(n){return n.theme.header.boxShadow},function(n){return n.theme.header.marginBottom},function(n){return n.theme.header.padding}),on=c.d.a(en(),function(n){return n.theme.document.logo},function(n){return n.theme.document.logoHeightSmall},R.tablet(nn(),function(n){return n.theme.document.logoHeightTablet})),an=c.d.div(X(),function(n){return n.theme.onlineStatus.background},function(n){return n.theme.offlineStatus.background}),cn=c.d.div(Q()),un=c.d.h2(K(),function(n){return n.theme.heading.fontWeight}),ln=c.d.a($(),function(n){return n.theme.link.color}),dn=c.d.p(Z()),sn="https://yard.nl",fn=function(){var n=o.a.createElement("div",null,o.a.createElement(un,null,"PouchDB / CouchDB demo"),o.a.createElement(dn,null,"This little demo was accompanied by a presentation given on 19 february 2019 at our inhouse event Yardcon. It was created to demonstrate the use of PouchDB and CouchDB in a React PWA."),o.a.createElement(dn,null,"Visit us at"," ",o.a.createElement(ln,{href:sn,target:"_blank",rel:"noopener noreferrer"},"Yard.nl")),o.a.createElement(un,null,"Instructions"),o.a.createElement(dn,null,"Fill the field, hit ",o.a.createElement("strong",null,"ENTER")," and see it synchronized with PouchDB."),o.a.createElement(dn,null,"When you go offline, enter and submit text and go back online, it should"));return o.a.createElement(rn,null,o.a.createElement(on,{href:sn,target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(an,null,o.a.createElement(B.Detector,{render:function(n){var e=n.online;return o.a.createElement("div",{className:e?"online":"offline"},"You are currently ",e?"online":"offline")}})),o.a.createElement(cn,null,o.a.createElement(V,{ariaLabel:"Yard - PouchDB / CouchDB demo",triggerText:"Info"},n)))},hn=t(39),mn=t(16),bn=t(15);function gn(){var n=Object(k.a)(["\n  margin: ",";\n"]);return gn=function(){return n},n}var pn=c.d.div(gn(),function(n){return n.theme.inputWrapper.margin}),vn=function(n){var e=n.children;return o.a.createElement(pn,null,e)};function xn(){var n=Object(k.a)(["\n    text-align: ",";\n  "]);return xn=function(){return n},n}function wn(){var n=Object(k.a)(["\n  text-align: ",";\n\n  ",";\n\n  > * {\n    font-weight: ",";\n  }\n"]);return wn=function(){return n},n}var yn=c.d.div(wn(),function(n){return n.center?"center":"left"},R.tablet(xn(),function(n){return n.center?"center":"left"}),function(n){return n.theme.heading.fontWeight}),kn=function(n){var e=n.size,t=n.title,r=n.center;return o.a.createElement(yn,{center:r},1===e&&o.a.createElement("h1",null,t),2===e&&o.a.createElement("h2",null,t),3===e&&o.a.createElement("h3",null,t))};kn.defaultProps={center:!1,size:1};var On=kn,jn=t(38),En=t.n(jn),Cn=function(n){return void 0===n||null===n||"object"===typeof n&&0===Object.keys(n).length||"string"===typeof n&&0===n.trim().length};function Sn(){var n=Object(k.a)(["\n  background: ",";\n  cursor: pointer;\n  margin: ",";\n  padding: ",";\n  text-align: left;\n\n  &:hover {\n    background: ",";\n  }\n"]);return Sn=function(){return n},n}function zn(){var n=Object(k.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return zn=function(){return n},n}var Bn=c.d.ul(zn()),Tn=c.d.li(Sn(),function(n){return n.theme.listItem.background},function(n){return n.theme.listItem.margin},function(n){return n.theme.listItem.padding},function(n){return n.theme.listItem.backgroundHover}),Wn=function(n){function e(){return Object(p.a)(this,e),Object(x.a)(this,Object(w.a)(e).apply(this,arguments))}return Object(y.a)(e,n),Object(v.a)(e,[{key:"render",value:function(){var n=this.props,e=n.handleClick,t=n.items;return o.a.createElement(vn,null,o.a.createElement(Bn,null,t.map(function(n,t){return o.a.createElement(Tn,{onClick:e(t),key:En()()},n)})),Cn(t)&&o.a.createElement("div",null,"There are no items yet..."))}}]),e}(r.PureComponent);function Rn(){var n=Object(k.a)(["\n  width: ",";\n  height: ",";\n  padding: ",";\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  outline: none;\n  border-radius: ",";\n  border: 1px solid\n    ",";\n  background: ",";\n  transition: all 0.3s ease;\n  color: #000;\n"]);return Rn=function(){return n},n}function Dn(){var n=Object(k.a)(["\n  position: relative;\n  width: 100%;\n"]);return Dn=function(){return n},n}var In=c.d.div(Dn()),Nn=c.d.input(Rn(),function(n){return n.theme.input.width},function(n){return n.theme.input.height},function(n){return n.theme.input.padding},function(n){return n.theme.input.fontFamily},function(n){return n.theme.input.fontSize},function(n){return n.theme.input.fontWeight},function(n){return n.theme.input.borderRadius},function(n){return n.error?n.theme.input.borderError:n.theme.input.borderColor},function(n){return n.theme.input.background}),Ln=function(n){function e(){return Object(p.a)(this,e),Object(x.a)(this,Object(w.a)(e).apply(this,arguments))}return Object(y.a)(e,n),Object(v.a)(e,[{key:"render",value:function(){var n=this.props,e=n.name,t=n.onChange,r=n.placeholder,a=n.type,i=n.value;return o.a.createElement(In,null,o.a.createElement(Nn,{name:e,onChange:t,placeholder:r,type:a,value:i}))}}]),e}(r.PureComponent);Ln.defaultProps={placeholder:null};var Pn=Ln;function An(){var n=Object(k.a)(["\n    padding: 0;\n  "]);return An=function(){return n},n}function Fn(){var n=Object(k.a)(["\n  margin: 0 auto;\n  max-width: 490px;\n  padding: 0 20px;\n  text-align: ",";\n\n  ",";\n"]);return Fn=function(){return n},n}function Hn(){var n=Object(k.a)(["\n  height: 100%;\n  max-width: 100%;\n"]);return Hn=function(){return n},n}var Un=c.d.div(Hn()),Gn=c.d.div(Fn(),function(n){return n.center?"center":"left"},R.tablet(An())),Jn=function(n){var e=n.children,t=n.center;return o.a.createElement(Un,null,o.a.createElement(Gn,{center:t},e))};Jn.defaultProps={center:!1};var Yn=Jn;function _n(){var n=Object(k.a)(["\n  font-size: 16px;\n  margin: 0 0 20px;\n"]);return _n=function(){return n},n}var qn=c.d.p(_n()),Mn=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(x.a)(this,Object(w.a)(e).call(this,n))).handleChange=function(n){var e=n.target,r=e.name,o=e.value;console.warn(r,o),t.setState(Object(mn.a)({},r,o))},t.handleClick=function(n){var e=t.state.items;t.setState({items:e.filter(function(e,t){return t!==n})})},t.handleSubmit=function(n,e){n.preventDefault();var r=t.state,o=r.items,a=r.itemText;a&&(e.saveItem({itemText:a}),t.setState({items:[].concat(Object(hn.a)(o),[a]),itemText:""}))},t.state={itemText:"",items:[]},t.handleChange=t.handleChange.bind(Object(bn.a)(t)),t.handleClick=t.handleClick.bind(Object(bn.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(bn.a)(t)),t}return Object(y.a)(e,n),Object(v.a)(e,[{key:"render",value:function(){var n=this,e=this.state,t=e.items,r=e.itemText;return o.a.createElement(Yn,{center:!0},o.a.createElement(On,{center:!0,size:2,title:"Enter some text!"}),o.a.createElement(qn,null,"Follow the instructions inside the info tab above."),o.a.createElement(O.c,{to:[z]},function(e){return o.a.createElement("form",{onSubmit:function(t){return n.handleSubmit(t,e)}},o.a.createElement(vn,null,o.a.createElement(Pn,{name:"itemText",onChange:n.handleChange,placeholder:"Some text",type:"text",value:r})),o.a.createElement(Wn,{items:t,handleClick:function(){return n.handleClick}}))}))}}]),e}(r.Component);function Vn(){var n=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(k.a)(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  html {\n    height: 100%;\n    background-color: ",";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x: hidden;\n  }\n\n  body {\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: ",";\n    font-size: ",";\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1.5;\n    color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  input:focus,\n  select:focus,\n  textarea:focus,\n  button:focus {\n    outline: none;\n  }\n\n  /**\n   * Modal - Lock the scroll position by adding this class to the '<html>' element.\n   */\n  .u-lock-scroll {\n    overflow: hidden !important;\n  }\n"]);return Zn=function(){return n},n}var $n=Object(c.b)(Zn(),function(n){return n.theme.document.background},function(n){return n.theme.document.fontFamily},function(n){return n.theme.document.fontSize},function(n){return n.theme.document.color}),Kn=c.d.div(Vn()),Qn=function(n){function e(){var n;return Object(p.a)(this,e),(n=Object(x.a)(this,Object(w.a)(e).call(this))).dbContainer=new z("react-pouchdb-couchdb-demo"),n}return Object(y.a)(e,n),Object(v.a)(e,[{key:"render",value:function(){return o.a.createElement(O.b,{inject:[this.dbContainer]},o.a.createElement(Kn,null,o.a.createElement($n,null),o.a.createElement(fn,null),o.a.createElement(Mn,null)))}}]),e}(r.Component),Xn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}i.a.render(o.a.createElement(c.a,{theme:g},o.a.createElement(Qn,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/react-pouchdb-couchdb-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-pouchdb-couchdb-demo","/service-worker.js");Xn?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):ne(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ne(e,n)})}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.c7cd32c0.chunk.js.map
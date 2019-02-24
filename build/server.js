!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.h="60481129770c750e9211",n.cn="main",n(n.s=16)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("reselect")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("connected-react-router")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("react-hot-loader")},function(e,t){e.exports=require("classnames")},function(e,t,n){e.exports=n(24)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(0),a=n(11),c=n(9),i=n(12),s=n(2),l=n(4),d=n(1),u=n.n(d),p=n(13),m=n(14),f=n(6),h=n(7),g=n(10);var E={appInited:!0};var y=(e=E,t)=>{switch(t.type){case"APP_INITED":return Object.assign({},e,{inited:t.payload})}return e};var x={wordsPerPage:10};var v=(e=x,t)=>{switch(t.type){case"SETTINGS_REQUEST":return Object.assign({},e,{loading:!0});case"SETTINGS_SUCCESS":return Object.assign({},e,{loading:!1,settings:t.payload});case"SETTINGS_UPDATE":return Object.assign({},e,{loading:!0});case"SETTINGS_FAILURE":return Object.assign({},e,{loading:!1,error:t.payload})}return e};var S={words:[{en:"nothinga",ru:"ничего"}],countWords:0};var b=(e=S,t)=>{switch(t.type){case"WORDS_REQUEST":return Object.assign({},e,{loading:!0});case"WORDS_SUCCESS":return Object.assign({},e,{loading:!1,words:t.payload});case"WORDS_FAILURE":return Object.assign({},e,{loading:!1,error:t.payload});case"INFO_WORDS_REQUEST":return Object.assign({},e,{loading:!0});case"INFO_WORDS_SUCCESS":return Object.assign({},e,{loading:!1,countWords:t.payload.countWords});case"INFO_WORDS_FAILURE":return Object.assign({},e,{loading:!1,error:t.payload})}return e};const w=!("undefined"!=typeof window&&window.document&&window.document.createElement),O={router:{},app:E,settings:x,words:S};var N=function(e=O,t="/"){const n=h.compose,r=w?Object(g.createMemoryHistory)({initialEntries:[t]}):Object(g.createBrowserHistory)(),o=n(Object(h.applyMiddleware)(Object(f.routerMiddleware)(r))),a=Object(h.combineReducers)({router:Object(f.connectRouter)(r),app:y,settings:v,words:b});return[Object(h.createStore)(a,e,o),r]};n(17),n(18);var j={home:{root:()=>"/"},settings:{root:()=>"/settings",user:()=>"/settings/user",auth:()=>"/settings/user/auth"},words:{root:(e=":id")=>"/words/"+e}};n(19);var _=class extends o.Component{render(){const{className:e}=this.props;return o.createElement("div",{className:e},"Hi and welocome to home!")}};n(20);var R=class extends o.Component{render(){const{className:e}=this.props;return o.createElement("div",{className:e},o.createElement("strong",{className:"NotFound__code"},"404"),o.createElement("h1",{className:"NotFound__titl"},"Sorry page not found"))}};n(21);var C=class extends o.Component{render(){const{className:e}=this.props;return o.createElement("div",{className:e},"You are at settings page")}},T=n(3),I=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,i)}s((r=r.apply(e,t||[])).next())})};var P=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function c(e){try{s(r.next(e))}catch(e){a(e)}}function i(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(c,i)}s((r=r.apply(e,t||[])).next())})};const k=(e,t,n)=>P(void 0,void 0,void 0,function*(){try{e({type:"WORDS_REQUEST"});const r=yield((e=15,t=0)=>I(void 0,void 0,void 0,function*(){const n=yield fetch("http://localhost:3000/static/en.txt");return(yield n.text()).split("\n").map(e=>e.split(" ")[0]).slice(t,t+e).map(e=>({en:e,ru:""}))}))(t,n);e((e=>({type:"WORDS_SUCCESS",payload:e}))(r))}catch(t){e((e=>({type:"WORDS_FAILURE",payload:e}))(t))}}),W=e=>P(void 0,void 0,void 0,function*(){try{e({type:"INFO_WORDS_REQUEST"});const t=yield(()=>I(void 0,void 0,void 0,function*(){const e=yield fetch("../static/en.txt");return{countWords:(yield e.text()).split("\n").map(e=>e.split(" ")[0]).length}}))();e((e=>({type:"INFO_WORDS_SUCCESS",payload:e}))(t))}catch(t){e((e=>({type:"INFO_WORDS_FAILURE",payload:e}))(t))}}),D=e=>e.words,U=Object(T.createSelector)(D,e=>e.words),A=Object(T.createSelector)(D,e=>e.countWords),q=Object(T.createSelector)(e=>e.settings,e=>e.wordsPerPage);var F=n(5);const L=u.a.div.withConfig({displayName:"Container",componentId:"sc-q0baij"})`

`,M=u.a.ul.withConfig({displayName:"List",componentId:"sc-1fo998h"})`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`,$=u.a.li.withConfig({displayName:"Item",componentId:"sc-1of2gif"})`
  list-style: none;
  padding: 0;
  margin: 0;
`,H=u()(F.NavLink).withConfig({displayName:"Link",componentId:"sc-1h0ir8v"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background: #aaa;
  color: #e1e1e1;
  text-decoration: none;

  &.active {
    border: 2px solid #aa0000;
    color: #aa0000;
  }
`,Q=u()(F.Link).withConfig({displayName:"Arrow",componentId:"sc-1rht9y9"})`
  display: flex;
`;var G=class extends o.Component{render(){let{className:e,path:t,count:n}=this.props;return n=n>10?10:n,o.createElement(L,{className:e},o.createElement(Q,{to:t+1},"Prev"),o.createElement(M,null,new Array(n).fill("").map((e,n)=>o.createElement($,{key:n+1},o.createElement(H,{to:t+(n+1),exact:!0},n+1)))),o.createElement(Q,{to:t+n},"Next"))}};const z=u.a.div`
  width: 100%;
  border: 1px solid #e1e1e1;
`,Y=u.a.h1`

`,B=u.a.table`
  width: 100%;
  background: #f1f1f1;
`,X=u.a.th`
  padding: 20px 0;
  background: #ddd;
`,Z=u.a.tr`
  width: 100%;
  border: 1px solid #e1e1e1;

  &:nth-child(2n + 1) {
    background: #fff;
  }
`;var J=Object(l.connect)(Object(T.createStructuredSelector)({words:U,wordsPerPage:q,countWords:A}))(class extends o.Component{componentDidMount(){const{dispatch:e,wordsPerPage:t,match:{params:{id:n}}}=this.props;W(e),k(e,t,n*t)}componentDidUpdate(e){const{dispatch:t,wordsPerPage:n,match:{params:{id:r}}}=e;r!==this.props.match.params.id&&k(t,n,r*n)}render(){const{className:e,words:t=[],countWords:n}=this.props;return o.createElement(z,{className:e},o.createElement(Y,null,"Words player"),o.createElement(B,null,o.createElement("thead",null,o.createElement(Z,null,o.createElement(X,null,"EN"),o.createElement(X,null,"RU"),o.createElement(X,null,"Know"))),o.createElement("tbody",null,t.map(({en:e,ru:t},n)=>o.createElement(Z,{key:e+t+n},o.createElement("td",null,e),o.createElement("td",null,t),o.createElement("td",null,o.createElement("input",{type:"checkbox"})))))),o.createElement(G,{count:n,path:j.words.root("")}))}});const K=u.a.div`
  text-align: left;
`,V=u.a.h1`

`,ee=u.a.p`

`;var te=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1},this.error=null,this.info=null}componentDidCatch(e,t){this.error=e,this.info=t,this.setState({hasError:!0})}render(){const{className:e,children:t}=this.props,{hasError:n}=this.state;return n?o.createElement(K,{className:e},o.createElement(V,null,"Something bad happens"),o.createElement(ee,null,this.error&&this.error.message),o.createElement(ee,null,this.info&&this.info.componentStack.split("\n").filter(e=>!!e).map((e,t)=>o.createElement("span",{key:t},t+1," ",e,o.createElement("br",null))))):t}};const ne=u.a.header`

`,re=u()(F.NavLink)`
  display: block;
  max-width: 400px;
  margin: 0 auto 1em;
  font-size: 48px;
  color: brown;
  text-decoration: none;
`,oe=u.a.nav`

`,ae=u.a.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
`,ce=u.a.li`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-right: 10px;
`,ie=u()(F.NavLink)`
  display: block;    
  color: inherit;
  padding: 10px 20px;
  text-decoration: none;
  border-bottom: 2px solid rgba(pink, .6);
  transition: 400ms;
  font-weight: 600;
  font-size: 14px;
  color: #a11;
  text-transform: uppercase;

  &.active,
  &:hover {
    border-bottom: 2px solid red;
  }
  &.active {
    color: black;
  }
`,se=[{to:j.words.root(""),name:"Words"},{to:j.settings.root(),name:"Settings"}];var le=n(15);n(22);var de=class extends o.Component{render(){const{className:e}=this.props;return o.createElement("footer",{className:le(e,"Footer")},o.createElement("p",null,"Created by Nikolay Nazarishin. 2019"))}};const ue=u.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
`,pe=u()(class extends o.Component{render(){const{className:e}=this.props;return o.createElement(ne,{className:e},o.createElement(re,{to:j.home.root()},"Hi! Welcome to english cards!"),o.createElement(oe,null,o.createElement(ae,null,se.map(e=>o.createElement(ce,{key:e.name},o.createElement(ie,{to:e.to},e.name))))))}})`
  padding: 50px 0;
  background: #eaeaea;
`,me=e=>t=>{const n=u()(e)`
    max-width: 900px;
    margin: auto;
  `;return o.createElement(n,Object.assign({},t))},fe=u()(de)`
  margin-top: auto;
  padding: 20px 0;
  background: #3a3a3a;
  color: #fff;
`;var he=class extends o.Component{render(){return o.createElement(ue,null,o.createElement(pe,null),o.createElement(te,null,o.createElement(s.Switch,null,o.createElement(s.Route,{path:j.home.root(),component:me(_),exact:!0}),o.createElement(s.Route,{path:j.words.root(),component:me(J)}),o.createElement(s.Route,{path:j.settings.root(),component:me(C)}),o.createElement(s.Route,{component:R}))),o.createElement(fe,null))}};n(23);const[ge,Ee]=N();w||function(e=he){const t=document.getElementById("app-root");Object(p.render)(o.createElement(m.AppContainer,null,o.createElement(l.Provider,{store:ge},o.createElement(f.ConnectedRouter,{history:Ee},o.createElement(e,null)))),t)}(he);var ye={App:he,configureStore:N};let xe,ve;ve="/",xe=`client-${n.h}.js`;const Se=r(),be=ye.App;let[we]=ye.configureStore();function Oe(e,t=""){return`\n  <!DOCTYPE html>\n  <html lang="en"> \n    <head> \n      <meta charset="UTF-8" />\n      <meta name="viewport" content="width=device-width">\n      <title>WHEN I DO LEARN REACT I CRAZZY</title>\n      ${t}\n      <script>window.REDUX_STATE = ${JSON.stringify(we.getState())}<\/script>\n    </head>\n    <body>\n      <div id="app-root">${e}</div>\n      <script type="application/javascript" src="${ve}static/${xe}"><\/script>\n    </body>\n  </html>\n  `}Se.use("/static",r.static(c.join(__dirname,"/static/"))),Se.use(`/static/${xe}`,r.static(c.join(__dirname,"/static/client.js"))),Se.post("/UPDATE_STORE",i.json(),(e,t)=>{[we]=ye.configureStore(e.body.REDUX_STATE),t.redirect(302,"back")}),Se.use(function(e,t){let n=o.createElement(l.Provider,{store:we},o.createElement(s.StaticRouter,{location:e.url,context:{}},o.createElement(be,null)));try{const e=(new d.ServerStyleSheet).getStyleTags(),r=a.renderToString(n);return t.end(Oe(r,e))}catch(e){return t.end(Oe("Something went wrong on server!<br />"+e.message))}}),Se.listen("3000",()=>console.log("Server is runing!"))}]);
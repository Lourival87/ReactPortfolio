(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"a":{"id":1,"name":"Accuity","email":"ClientId@email.com","location":"ClientId"}}')},43:function(e,t,n){e.exports=n(76)},48:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},51:function(e,t,n){},53:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(37),r=n.n(c),l=(n(48),n(49),n(50),n(51),n(14)),i=n.n(l),s=n(20),u=n(9),m=n(10),p=n(12),f=n(11),d=n(13),h=(n(53),n(38)),b=n(16),v=n(18),E=n(15),y=n(39),O=n(21),g=n.n(O);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=o.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});default:return e}},k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={contacts:[],dispatch:function(e){return n.setState((function(t){return C(t,e)}))}},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users/");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,n){console.log("componentDidUpdate: rendering again")}},{key:"render",value:function(){return o.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),N=w.Consumer,D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={showContactInfo:!1},n.onShowClick=function(e,t){n.setState({showContactInfo:!n.state.showContactInfo}),console.log(e),console.log(e),console.log(t),console.log()},n.onDeleteClick=function(){var e=Object(s.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Child Contact Component > onDeleteClick"),e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/{$id}");case 3:n({type:"DELETE_CONTACT",payload:t});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount")}},{key:"render",value:function(){var e=this;console.log("Reading JSON file: ".concat(h.a.name));var t=this.props.contact,n=this.state.showContactInfo;return o.a.createElement(N,null,(function(a){var c=a.dispatch;return o.a.createElement("div",{className:"card card-body mb-3"},o.a.createElement(b.a,{icon:E.c,color:"#5ed4f4"}),o.a.createElement(b.a,{icon:E.a,color:"#b13138"}),o.a.createElement(b.a,{icon:E.b,color:"#f7df1e"}),o.a.createElement("h3",null,t.name," ",o.a.createElement(b.a,{icon:v.a,color:"#000",onClick:e.onShowClick.bind(e,t.id),style:{cursor:"pointer"}}),o.a.createElement(b.a,{icon:v.b,className:"delete-icon",onClick:e.onDeleteClick.bind(e,t.id,c)})),n?o.a.createElement("ul",{className:"list-group"},o.a.createElement("li",{className:"list-group-item"},t.email),o.a.createElement("li",{className:"list-group-item"},t.username)):null)}))}}]),t}(a.Component);D.defaultProps={name:"Leo Lanese",email:"developer@leolanese.com",location:"London"};var P=D,x=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(N,null,(function(e){var t=e.contacts;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(P,{key:e.id,contact:e})})))}))}}]),t}(a.Component),L=n(22),S=n(7),A=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"About"))},I=function(e){e.title;return o.a.createElement(L.a,null,o.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light justify-content-center mb-3 py-0"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(L.b,{className:"nav-link",to:"/contacts"},"Contacts")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(L.b,{className:"nav-link",to:"/about"},"About")))),o.a.createElement(S.a,{exact:!0,path:"/contacts"},o.a.createElement(x,null)),o.a.createElement(S.a,{exact:!0,path:"/about"},o.a.createElement(A,null)))};I.defaultProps={title:"Leo Lanese - Portfolio"};var T=I,J=n(17),B=n(42);var M=function(){return J.b.add(E.d,v.c,B.a),o.a.createElement(k,null,o.a.createElement("div",{className:"App"},o.a.createElement(T,{title:"Portfolio - Leo Lanese"}),o.a.createElement("div",{className:"container"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b2015264.chunk.js.map
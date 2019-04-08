(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(27),r=a.n(l),i=(a(84),a(34)),o=a(35),m=a(37),s=a(36),u=a(38),p=a(77),h=a(20);a(85);var E=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"nav"},c.a.createElement("h1",{className:"brand"},c.a.createElement("a",{href:"/"},"Daniel Oviedo")),c.a.createElement("ul",{className:"ul"},c.a.createElement("li",{className:"li"},c.a.createElement("a",{className:"lilink",onClick:function(){return e.changePage(1)},href:"#projects"},"Projects")),c.a.createElement("li",{className:"li"},c.a.createElement("a",{className:"lilink",onClick:function(){return e.changePage(2)},href:"#resume"},"Resume")),c.a.createElement("li",{className:"li"},c.a.createElement("a",{className:"lilink",onClick:function(){return e.changePage(3)},href:"#about"},"About Me")),c.a.createElement("li",{className:"li"},c.a.createElement("a",{className:"lilink",onClick:function(){return e.changePage(4)},href:"#contact"},"Contact")))))},d=(a(86),a(39)),g=a.n(d),v=a(40),f=a.n(v),y=a(43),b=a.n(y),N=a(42),k=a.n(N),w=a(41),C=a.n(w),j=a(14),R=a.n(j),S=a(21),P=a.n(S),O=a(73),x=a.n(O),T=a(74),B=a.n(T),z=a(75),U=a.n(z),G=a(51),L=Object(G.createMuiTheme)({palette:{primary:{main:"rgb(0,90,0)"}}});var M=function(e){return c.a.createElement("div",{className:"Paper"},c.a.createElement(G.MuiThemeProvider,{theme:L},c.a.createElement(g.a,{className:"card1"},c.a.createElement(f.a,{className:"cardaction"},c.a.createElement(C.a,{component:"img",alt:"Contemplative Reptile",height:"180",image:x.a,title:"Contemplative Reptile"}),c.a.createElement(k.a,null,c.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{fontSize:"160%"}},"Fuel Request"),c.a.createElement(P.a,{component:"p",style:{fontSize:"120%"}},"A simulated oil distribution company that creates oil qoutes which factors in competitor prices, distance, gallons, purchase history, etc."),c.a.createElement("ul",{className:"text"},"Tech Used:"),c.a.createElement("p",null,"-React/Bootstrap/MaterialUI"),c.a.createElement("p",null,"-Node.js/Express.js/CORS"),c.a.createElement("p",null,"-bcrypt/JWT"),c.a.createElement("p",null,"-mySQL"),c.a.createElement("p",null,"-SSL/NGINX"),c.a.createElement("div",{style:{height:100}}))),c.a.createElement(b.a,{style:{bottom:0,height:40}},c.a.createElement("div",{className:"buttonCont"},c.a.createElement(R.a,{href:"https://www.fuelrequest.ga",target:"_blank",variant:"contained",color:"primary",style:{marginRight:10}},"Live"),c.a.createElement(R.a,{variant:"contained",color:"primary"},"Github")))),c.a.createElement(g.a,{className:"card2"},c.a.createElement(f.a,{className:"cardaction"},c.a.createElement(C.a,{component:"img",alt:"Contemplative Reptile",height:"180",image:B.a,title:"Contemplative Reptile"}),c.a.createElement(k.a,null,c.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{fontSize:"160%"}},"Virtual ThemePark"),c.a.createElement(P.a,{component:"p",style:{fontSize:"120%"}},"A simulated themepark where users can purchase tickets, employees can scan tickets, create maintenance reports, view park analytics, and manage a themepark."),c.a.createElement("ul",{className:"text"},"Tech Used:"),c.a.createElement("p",null,"-React/Bootstrap/MaterialUI"),c.a.createElement("p",null,"-Node.js/Express.js/CORS"),c.a.createElement("p",null,"-mySQL"),c.a.createElement("div",{style:{height:100}}))),c.a.createElement(b.a,{style:{bottom:0}},c.a.createElement("div",{className:"buttonCont"},c.a.createElement(R.a,{variant:"contained",color:"primary",style:{marginRight:10}},"Demo"),c.a.createElement(R.a,{variant:"contained",color:"primary"},"Github")))),c.a.createElement(g.a,{className:"card3"},c.a.createElement(f.a,{className:"cardaction"},c.a.createElement(C.a,{component:"img",alt:"Contemplative Reptile",height:"180",image:U.a,title:"Contemplative Reptile"}),c.a.createElement(k.a,null,c.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{fontSize:"160%"}},"Workout Tracker"),c.a.createElement(P.a,{component:"p",style:{fontSize:"120%"}},"A web/native app where users can create custom workout plans, view progress for each workout, look for verified trainers/programs."),c.a.createElement("ul",{className:"text"},"Tech Used:"),c.a.createElement("p",null,"-React/React-Native"),c.a.createElement("p",null,"-Node.js/Express.js/CORS"),c.a.createElement("p",null,"-bcrypt/JWT"),c.a.createElement("p",null,"-mySQL"),c.a.createElement("div",{style:{height:100}}))),c.a.createElement(b.a,{style:{bottom:0}},c.a.createElement("div",{className:"buttonCont"},c.a.createElement(R.a,{variant:"contained",color:"primary",style:{marginRight:10}},"Demo"),c.a.createElement(R.a,{variant:"contained",color:"primary"},"Github"))))))},W=(a(176),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).changePage=function(e){a.setState({selectedPage:e})},a.state={selectedPage:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getStepContent",value:function(e){switch(e){case 0:return c.a.createElement("div",null);case 1:return c.a.createElement(M,null);case 2:case 3:case 4:return c.a.createElement("div",null);default:throw new Error("Unknown step")}}},{key:"render",value:function(){var e=this.state.selectedPage;return c.a.createElement("header",null,c.a.createElement(E,{selected:this.state.selectedPage,changePage:this.changePage}),this.getStepContent(e))}}]),t}(n.Component)),A=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(h.a,{path:"/",exact:!0,component:W}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a.p+"static/media/img1.46dfcb04.PNG"},74:function(e,t,a){e.exports=a.p+"static/media/ss2.9db4fd1b.png"},75:function(e,t,a){e.exports=a.p+"static/media/ss3.0b2371ba.jpg"},79:function(e,t,a){e.exports=a(182)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.bbea3f56.chunk.js.map
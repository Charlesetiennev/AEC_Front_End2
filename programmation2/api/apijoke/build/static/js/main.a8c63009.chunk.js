(this.webpackJsonpapijoke=this.webpackJsonpapijoke||[]).push([[0],{15:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),s=(a(20),a(9)),l=a.n(s),i=a(12),u=a(5),p=a(6),m=a(8),h=a(7),f=a(24),d=a(25),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.data),r.a.createElement(d.a,{className:"col-lg-2"},r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,r.a.createElement("h1",null,this.props.message),r.a.createElement("h1",null,this.props.joke),r.a.createElement("ul",null,Object.keys(this.props.data).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.props.data[t])}))))))}}]),a}(r.a.Component);k.defaultProps={data:[]};var v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=1;case 2:if(!(a<=10)){e.next=22;break}return e.prev=3,e.next=6,fetch("https://sv443.net/jokeapi/v2/joke/Any?type=single");case 6:return n=e.sent,e.next=9,n.json();case 9:if(r=e.sent,t.push(r),this.setState({data:t}),n.ok){e.next=14;break}throw Error(n.statusText);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:a++,e.next=2;break;case 22:case"end":return e.stop()}}),e,this,[[3,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,"   ",this.state.data.map((function(e){return r.a.createElement(k,{message:e.message,joke:e.joke})}))))}}]),a}(r.a.Component);a(22);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8c63009.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(7),r=n.n(c),i=(n(15),n(8)),l=n(1),s=n(2),d=n(4),m=n(3),u=n(5),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={content:""},n.handleChange=function(e){n.setState({content:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state),n.props.addTodo(n.state),n.setState({content:""})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"Enter your todo item"),a.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),t}(o.Component),v=function(e){var t=e.todos,n=e.removeTodo,o=t.length?t.map(function(e){return a.a.createElement("div",{className:"collection item",onClick:function(){n(e.id)},key:e.id},a.a.createElement("span",null,e.content))}):a.a.createElement("p",{className:"center"},"You do not have any more to do. Well done!!");return a.a.createElement("div",{className:"todos collection"},o)},f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todoItems:[{id:1,content:"shop for cloth"},{id:2,content:"Go to viewing center by noon"}]},n.removeTodoItem=function(e){console.log(e);var t=n.state.todoItems.filter(function(t){return t.id!==e});n.setState({todoItems:t})},n.addTodoItem=function(e){e.id=Math.random();var t=[].concat(Object(i.a)(n.state.todoItems),[e]);n.setState({todoItems:t})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"center yellow-text"},"Simple Todo's List"),a.a.createElement("div",{className:"container"},a.a.createElement(v,{todos:this.state.todoItems,removeTodo:this.removeTodoItem}),a.a.createElement(h,{addTodo:this.addTodoItem})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a5c2cc12.chunk.js.map
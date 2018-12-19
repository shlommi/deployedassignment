(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},44:function(e,t,a){},50:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(13),l=a.n(i),o=(a(42),a(44),a(8)),c=a(12),s=a(34),u=a(17),m={movies:[],curentEditedMovie:{Title:"",Year:"",Runtime:"",Genre:"",Director:""}},d=a(36),h=Object(c.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(u.a)({},e,{movies:t.payload});case"GET_MOVIE":return Object(u.a)({},e,{curentEditedMovie:t.payload});case"DELETE_MOVIE":return Object(u.a)({},e,{movies:e.movies.filter(function(e){return e.imdbID!==t.payload})});default:return e}},subDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DETAILS_MOVIE":return[t.payload].concat(Object(d.a)(e));default:return e}}}),p=c.d,v=Object(c.e)(h,{},p(Object(c.a)(s.a))),f=a(5),E=a(6),b=a(9),g=a(7),O=a(10),j=(a(50),a(3)),C=a(14),y=a(2),D=a.n(y),M=function(e){var t=e.type,a=e.name,r=e.placeholder,i=e.value,l=e.onChange,o=e.label,c=e.error;return n.a.createElement("div",null,n.a.createElement(j.k,null,n.a.createElement(j.m,{for:"name"},o),n.a.createElement(j.l,{type:t,name:a,placeholder:r,value:i,onChange:l,className:D()("form-control",{"is-invalid":c})}),c&&n.a.createElement(j.j,null,c)))};M.defaultProps={type:"text"};var S=M,T=a(11),k=a.n(T),w=a(15),G=a(18),Y=a.n(G),I=function(){return function(){var e=Object(w.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("https://www.omdbapi.com/?s=all&apikey=".concat("7f16f077"));case 2:a=e.sent,t({type:"GET_MOVIES",payload:a.data.Search});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(w.a)(k.a.mark(function t(a){var r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("7f16f077"));case 2:r=t.sent,a({type:"GET_DETAILS_MOVIE",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},A=function(e){return e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ").replace(/[\W_]+/g," ")},q=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).toggleModal=function(){return a.setState({modalOpen:!a.state.modalOpen,errors:{},Title:"",Year:"",Runtime:"",Genre:"",Director:""})},a.handleChange=function(e){return a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){var t=a.state,r=t.Title,n=t.Year,i=t.Runtime,l=t.Genre,o=t.Director,c=a.props.movies.map(function(e){return e.Title});if(e.preventDefault(),""!==r)if(c.includes(r.trim()))a.setState({errors:{Title:"Movie name is already existing!"}});else if(""!==n){n<1900||isNaN(n)||!/^\d{4}$/.test(n)?a.setState({errors:{Year:"Valid Year is required"}}):""!==i?""!==l?""!==o?a.toggleModal():a.setState({errors:{Director:"Director is required"}}):a.setState({errors:{Genre:"Genre is required"}}):a.setState({errors:{Runtime:"Runtime is required"}})}else a.setState({errors:{Year:"Year is required"}});else a.setState({errors:{Title:"Title is required"}})},a.state={modalOpen:!1,errors:{},Title:"",Year:"",Runtime:"",Genre:"",Director:""},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.Title,a=e.Year,r=e.Runtime,i=e.Genre,l=e.Director,o=e.errors;return A(t),n.a.createElement("div",null,n.a.createElement(j.b,{color:"info",onClick:this.toggleModal,className:"mt-2"},"Add New Movie"),n.a.createElement(j.n,{isOpen:this.state.modalOpen,toggle:this.toggleModal},n.a.createElement(j.q,null,"Add Movie"),n.a.createElement(j.o,null,n.a.createElement(j.i,{onSubmit:this.handleSubmit},n.a.createElement(S,{label:"Title",name:"Title",placeholder:"Add title name",value:t,onChange:this.handleChange,error:o.Title}),n.a.createElement(S,{label:"Year",name:"Year",placeholder:"Add year",value:a,onChange:this.handleChange,error:o.Year}),n.a.createElement(S,{label:"Runtime",name:"Runtime",placeholder:"Add runtime",value:r,onChange:this.handleChange,error:o.Runtime}),n.a.createElement(S,{label:"Genre",name:"Genre",placeholder:"Add genre",value:i,onChange:this.handleChange,error:o.Genre}),n.a.createElement(S,{label:"Director",name:"Director",placeholder:"Add director",value:l,onChange:this.handleChange,error:o.Director}))),n.a.createElement(j.p,null,n.a.createElement(j.b,{type:"submit",color:"info",onClick:this.handleSubmit},"Save"),n.a.createElement(j.b,{color:"danger",active:!0,onClick:this.toggleModal},"Cancle"))))}}]),t}(r.Component),x=Object(o.b)(function(e){return{movies:e.movies.movies}},{getMovies:I})(q),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j.u,{color:"dark",dark:!0,expand:"md"},n.a.createElement(j.v,{href:"/"},"My Cinema"),n.a.createElement(j.r,{className:"ml-5",navbar:!0},n.a.createElement(j.s,null,n.a.createElement(j.t,null,n.a.createElement(x,null))))))},_=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).toggleModal=function(){var e=a.props.editIdMovie;a.props.getMovie(e),a.setState({modalOpen:!a.state.modalOpen,Title:"",Year:"",Runtime:"",Genre:"",Director:"",errors:{}})},a.handleChange=function(e){return a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.movies.map(function(e){return e.Title}),r=a.state,n=r.Title,i=r.Year,l=r.Runtime,o=r.Genre,c=r.Director;if(t.includes(n.trim()))a.setState({errors:{Title:"Movie name is already existing!"}});else if(""!==n){i<1900||isNaN(i)||!/^\d{4}$/.test(i)?a.setState({errors:{Year:"Year is required"}}):""!==i?""!==l?""!==o?""!==c?a.setState({modalOpen:!1}):a.setState({errors:{Director:"Director is required"}}):a.setState({errors:{Genre:"Genre is required"}}):a.setState({errors:{Runtime:"Runtime is required"}}):a.setState({errors:{Year:"Valid Year is required"}})}else a.setState({errors:{Title:"Title is required"}})},a.state={Title:"",Year:"",Runtime:"",Genre:"",Director:"",errors:{},modalOpen:!1},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.currentMovie!==e.currentMovie&&this.setState(this.props.currentMovie)}},{key:"render",value:function(){var e=this.state,t=e.Title,a=e.Year,r=e.Runtime,i=e.Genre,l=e.Director,o=e.errors;return A(t),n.a.createElement("div",null,n.a.createElement(j.b,{color:"info",onClick:this.toggleModal},"Edit movie"),n.a.createElement(j.n,{isOpen:this.state.modalOpen,toggle:this.toggleModal},n.a.createElement(j.q,null,"Edit Movie"),n.a.createElement(j.o,null,n.a.createElement(j.i,{onSubmit:this.handleSubmit},n.a.createElement(S,{label:"Title",name:"Title",placeholder:"Add title name",value:t,onChange:this.handleChange,error:o.Title}),n.a.createElement(S,{label:"Year",name:"Year",placeholder:"Add year",value:a,onChange:this.handleChange,error:o.Year}),n.a.createElement(S,{label:"Runtime",name:"Runtime",placeholder:"Add runtime",value:r,onChange:this.handleChange,error:o.Runtime}),n.a.createElement(S,{label:"Genre",name:"Genre",placeholder:"Add genre",value:i,onChange:this.handleChange,error:o.Genre}),n.a.createElement(S,{label:"Director",name:"Director",placeholder:"Add director",value:l,onChange:this.handleChange,error:o.Director}))),n.a.createElement(j.p,null,n.a.createElement(j.b,{type:"submit",color:"info",onClick:this.handleSubmit},"Save"),n.a.createElement(j.b,{color:"danger",active:!0,onClick:this.toggleModal},"Cancle"))))}}]),t}(r.Component),V=Object(o.b)(function(e){return{currentMovie:e.movies.curentEditedMovie,movies:e.movies.movies}},{getMovie:function(e){return function(){var t=Object(w.a)(k.a.mark(function t(a){var r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("7f16f077"));case 2:r=t.sent,a({type:"GET_MOVIE",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},getMovies:I})(_),L=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).toggle=function(){a.setState({modal:!a.state.modal})},a.delete=function(e){a.props.deleteCurrentMovie(a.props.deleteIdMovie)},a.state={modal:!1},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j.b,{color:"danger",onClick:this.toggle},"Delete Movie"),n.a.createElement(j.n,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(j.q,{toggle:this.toggle},"Delete movie?"),n.a.createElement(j.p,null,n.a.createElement(j.b,{color:"primary",onClick:this.delete},"Ok"),n.a.createElement(j.b,{color:"danger",onClick:this.toggle},"Cancel"))))}}]),t}(r.Component),F=Object(o.b)(null,{deleteCurrentMovie:function(e){return function(t){t({type:"DELETE_MOVIE",payload:e})}}})(L),J=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).handleShowDetails=function(){a.setState({collapse:!a.state.collapse})},a.state={collapse:!1,Title:"",Year:"",Runtime:"",Genre:"",Director:""},a}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movie,a=t.imdbID,r=t.Poster,i=t.Title;A(i);var l=this.props.moreDetails;return this.props.moreDetails?n.a.createElement("div",null,n.a.createElement(j.c,{style:{cursor:"pointer"},className:"shadow"},n.a.createElement(j.e,{top:!0,width:"100%",src:r,alt:"Card image cap",onClick:function(){return e.handleShowDetails()}}),n.a.createElement(j.g,{isOpen:this.state.collapse},n.a.createElement(j.c,null,n.a.createElement(j.d,null,n.a.createElement("h5",null,n.a.createElement(j.a,{color:"info"},"Title: "),i),n.a.createElement("h5",null,n.a.createElement(j.a,{color:"info"},"Year:"),l.Year),n.a.createElement("h5",null,n.a.createElement(j.a,{color:"info"},"Runtime:"),l.Runtime),n.a.createElement("h5",null,n.a.createElement(j.a,{color:"info"},"Genre:"),l.Genre),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(V,{editIdMovie:a}),n.a.createElement(F,{deleteIdMovie:a}))))))):null}}]),t}(r.Component),P=Object(o.b)(function(e,t){return{moreDetails:e.subDetails.find(function(e){return e.imdbID===t.movieId})}})(J),U=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMoviesAndDetails()}},{key:"render",value:function(){var e=this.props.movies.map(function(e){return n.a.createElement(j.f,{md:"4",key:e.imdbID},n.a.createElement(P,{movie:e,movieId:e.imdbID,className:"mb-2"}))});return n.a.createElement(j.h,{fluid:!0},n.a.createElement("h2",{className:"display-4 mb-2"},"Find movies"),n.a.createElement(j.w,null,e))}}]),t}(r.Component),$=Object(o.b)(function(e){return{movies:e.movies.movies}},{fetchMoviesAndDetails:function(){return function(){var e=Object(w.a)(k.a.mark(function e(t,a){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(I());case 2:a().movies.movies.map(function(e){return e.imdbID}).forEach(function(e){return t(R(e))});case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}})(U),B=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N,null),n.a.createElement($,null))}}]),t}(r.Component);l.a.render(n.a.createElement(o.a,{store:v},n.a.createElement(B,null)),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.fb179c50.chunk.js.map
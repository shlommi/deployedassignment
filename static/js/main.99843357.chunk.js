(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},49:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(12),i=a.n(l),o=(a(41),a(43),a(10)),c=a(11),s=a(34),u=a(16),m={movies:[],detailsMovie:{},curentEditedMovie:{Title:"",Year:"",Runtime:"",Genre:"",Director:""}},d=Object(c.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(u.a)({},e,{movies:t.payload});case"GET_MOVIE":return Object(u.a)({},e,{curentEditedMovie:t.payload});case"GET_DETAILS_MOVIE":return Object(u.a)({},e,{detailsMovie:t.payload});default:return e}}}),h=[s.a],p=Object(c.e)(d,{},Object(c.d)(c.a.apply(void 0,h),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=a(5),E=a(6),f=a(8),g=a(7),b=a(9),O=(a(49),a(3)),j=a(14),C=a(2),M=a.n(C),y=function(e){var t=e.type,a=e.name,r=e.placeholder,l=e.value,i=e.onChange,o=e.label,c=e.error;return n.a.createElement("div",null,n.a.createElement(O.k,null,n.a.createElement(O.m,{for:"name"},o),n.a.createElement(O.l,{type:t,name:a,placeholder:r,value:l,onChange:i,className:M()("form-control",{"is-invalid":c})}),c&&n.a.createElement(O.j,null,c)))};y.defaultProps={type:"text"};var S=y,D=a(13),T=a.n(D),w=a(17),k=a(18),G=a.n(k),Y=function(){return function(){var e=Object(w.a)(T.a.mark(function e(t){var a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://www.omdbapi.com/?s=all&apikey=".concat("7f16f077"));case 2:a=e.sent,t({type:"GET_MOVIES",payload:a.data.Search});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},R=function(e){return e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ").replace(/[\W_]+/g," ")},_=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).toggleModal=function(){return a.setState({modalOpen:!a.state.modalOpen,errors:{},Title:"",Year:"",Runtime:"",Genre:"",Director:""})},a.handleChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){var t=a.state,r=t.Title,n=t.Year,l=t.Runtime,i=t.Genre,o=t.Director,c=a.props.movies.map(function(e){return e.Title});if(e.preventDefault(),""!==r)if(c.includes(r.trim()))a.setState({errors:{Title:"Movie name is already existing!"}});else if(""!==n){n<1900||isNaN(n)||!/^\d{4}$/.test(n)?a.setState({errors:{Year:"Valid Year is required"}}):""!==l?""!==i?""!==o?a.toggleModal():a.setState({errors:{Director:"Director is required"}}):a.setState({errors:{Genre:"Genre is required"}}):a.setState({errors:{Runtime:"Runtime is required"}})}else a.setState({errors:{Year:"Year is required"}});else a.setState({errors:{Title:"Title is required"}})},a.state={modalOpen:!1,errors:{},Title:"",Year:"",Runtime:"",Genre:"",Director:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.Title,a=e.Year,r=e.Runtime,l=e.Genre,i=e.Director,o=e.errors;return R(t),n.a.createElement("div",null,n.a.createElement(O.b,{color:"info",onClick:this.toggleModal,className:"mt-2"},"Add New Movie"),n.a.createElement(O.n,{isOpen:this.state.modalOpen,toggle:this.toggleModal},n.a.createElement(O.q,null,"Add Movie"),n.a.createElement(O.o,null,n.a.createElement(O.i,{onSubmit:this.handleSubmit},n.a.createElement(S,{label:"Title",name:"Title",placeholder:"Add title name",value:t,onChange:this.handleChange,error:o.Title}),n.a.createElement(S,{label:"Year",name:"Year",placeholder:"Add year",value:a,onChange:this.handleChange,error:o.Year}),n.a.createElement(S,{label:"Runtime",name:"Runtime",placeholder:"Add runtime",value:r,onChange:this.handleChange,error:o.Runtime}),n.a.createElement(S,{label:"Genre",name:"Genre",placeholder:"Add genre",value:l,onChange:this.handleChange,error:o.Genre}),n.a.createElement(S,{label:"Director",name:"Director",placeholder:"Add director",value:i,onChange:this.handleChange,error:o.Director}))),n.a.createElement(O.p,null,n.a.createElement(O.b,{type:"submit",color:"info",onClick:this.handleSubmit},"Save"),n.a.createElement(O.b,{color:"danger",active:!0,onClick:this.toggleModal},"Cancle"))))}}]),t}(r.Component),N=Object(o.b)(function(e){return{movies:e.movies.movies}},{getMovies:Y})(_),q=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.u,{color:"dark",dark:!0,expand:"md"},n.a.createElement(O.v,{href:"/"},"Herolo Cinema"),n.a.createElement(O.r,{className:"ml-5",navbar:!0},n.a.createElement(O.s,null,n.a.createElement(O.t,null,n.a.createElement(N,null))))))},A=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).toggleModal=function(){var e=a.props.editIdMovie;a.props.getMovie(e),a.setState({modalOpen:!a.state.modalOpen,Title:"",Year:"",Runtime:"",Genre:"",Director:"",errors:{}})},a.handleChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.movies.map(function(e){return e.Title}),r=a.state,n=r.Title,l=r.Year,i=r.Runtime,o=r.Genre,c=r.Director;if(t.includes(n.trim()))a.setState({errors:{Title:"Movie name is already existing!"}});else if(""!==n){l<1900||isNaN(l)||!/^\d{4}$/.test(l)?a.setState({errors:{Year:"Year is required"}}):""!==l?""!==i?""!==o?""!==c?a.setState({modalOpen:!1}):a.setState({errors:{Director:"Director is required"}}):a.setState({errors:{Genre:"Genre is required"}}):a.setState({errors:{Runtime:"Runtime is required"}}):a.setState({errors:{Year:"Valid Year is required"}})}else a.setState({errors:{Title:"Title is required"}})},a.state={Title:"",Year:"",Runtime:"",Genre:"",Director:"",errors:{},modalOpen:!1},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.currentMovie!==e.currentMovie&&this.setState(this.props.currentMovie)}},{key:"render",value:function(){var e=this.state,t=e.Title,a=e.Year,r=e.Runtime,l=e.Genre,i=e.Director,o=e.errors;return R(t),n.a.createElement("div",null,n.a.createElement(O.b,{color:"info",onClick:this.toggleModal},"Edit movie"),n.a.createElement(O.n,{isOpen:this.state.modalOpen,toggle:this.toggleModal},n.a.createElement(O.q,null,"Edit Movie"),n.a.createElement(O.o,null,n.a.createElement(O.i,{onSubmit:this.handleSubmit},n.a.createElement(S,{label:"Title",name:"Title",placeholder:"Add title name",value:t,onChange:this.handleChange,error:o.Title}),n.a.createElement(S,{label:"Year",name:"Year",placeholder:"Add year",value:a,onChange:this.handleChange,error:o.Year}),n.a.createElement(S,{label:"Runtime",name:"Runtime",placeholder:"Add runtime",value:r,onChange:this.handleChange,error:o.Runtime}),n.a.createElement(S,{label:"Genre",name:"Genre",placeholder:"Add genre",value:l,onChange:this.handleChange,error:o.Genre}),n.a.createElement(S,{label:"Director",name:"Director",placeholder:"Add director",value:i,onChange:this.handleChange,error:o.Director}))),n.a.createElement(O.p,null,n.a.createElement(O.b,{type:"submit",color:"info",onClick:this.handleSubmit},"Save"),n.a.createElement(O.b,{color:"danger",active:!0,onClick:this.toggleModal},"Cancle"))))}}]),t}(r.Component),I=Object(o.b)(function(e){return{currentMovie:e.movies.curentEditedMovie,movies:e.movies.movies}},{getMovie:function(e){return function(){var t=Object(w.a)(T.a.mark(function t(a){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("7f16f077"));case 2:r=t.sent,a({type:"GET_MOVIE",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},getMovies:Y})(A),x=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).toggle=function(){a.setState({modal:!a.state.modal})},a.state={modal:!1},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O.b,{color:"danger",onClick:this.toggle},"Delete Movie"),n.a.createElement(O.n,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(O.q,{toggle:this.toggle},"Delete movie?"),n.a.createElement(O.p,null,n.a.createElement(O.b,{color:"primary",onClick:this.toggle},"Ok"),n.a.createElement(O.b,{color:"danger",onClick:this.toggle},"Cancel"))))}}]),t}(r.Component),V=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).handleShowDetails=function(e){a.props.getDetailsMovie(e),a.setState({collapse:!a.state.collapse})},a.state={collapse:!1,Title:"",Year:"",Runtime:"",Genre:"",Director:""},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movie,a=t.imdbID,r=t.Poster,l=t.Title,i=this.props.moreDetails,o=i.Year,c=i.Runtime,s=i.Genre;return R(l),n.a.createElement("div",null,n.a.createElement(O.c,{style:{cursor:"pointer"},className:"shadow",onClick:function(){return e.handleShowDetails(a)},onMouseLeave:function(){return e.setState({collapse:!1})}},n.a.createElement(O.e,{top:!0,width:"100%",src:r,alt:"Card image cap"}),n.a.createElement(O.g,{isOpen:this.state.collapse,onMouseLeave:function(){return e.setState({collapse:!1})}},n.a.createElement(O.c,null,n.a.createElement(O.d,null,n.a.createElement("h5",null,n.a.createElement(O.a,{color:"info"},"Title: "),l),n.a.createElement("h5",null,n.a.createElement(O.a,{color:"info"},"Year:"),o),n.a.createElement("h5",null,n.a.createElement(O.a,{color:"info"},"Runtime:"),c),n.a.createElement("h5",null,n.a.createElement(O.a,{color:"info"},"Genre:"),s),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(I,{editIdMovie:a}),n.a.createElement(x,null)))))))}}]),t}(r.Component),L=Object(o.b)(function(e){return{moreDetails:e.movies.detailsMovie}},{getDetailsMovie:function(e){return function(){var t=Object(w.a)(T.a.mark(function t(a){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("7f16f077"));case 2:r=t.sent,a({type:"GET_DETAILS_MOVIE",payload:r.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(V),U=function(e){function t(){return Object(v.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this.props.movies.map(function(e){return n.a.createElement(O.f,{md:"4",key:e.imdbID},n.a.createElement(L,{movie:e,className:"mb-2"}))});return n.a.createElement(O.h,{fluid:!0},n.a.createElement("h2",{className:"display-4 mb-2"},"Find movies"),n.a.createElement(O.w,null,e))}}]),t}(r.Component),X=Object(o.b)(function(e){return{movies:e.movies.movies}},{getMovies:Y})(U),F=function(e){function t(){return Object(v.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(q,null),n.a.createElement(X,null))}}]),t}(r.Component);i.a.render(n.a.createElement(o.a,{store:p},n.a.createElement(F,null)),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.99843357.chunk.js.map
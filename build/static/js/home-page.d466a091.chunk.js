(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{52:function(t,e,n){"use strict";var c="99b92b74df9bbace873ae013dcdaea30",a="https://api.themoviedb.org/3/",r="https://image.tmdb.org/t/p/".concat("w500","/");var i={IMG_URL:r,defaultImage:"".concat(r,"wwemzKWzjKYJFfCeiB57q3r4Bcm.png"),fetchTrendingMovies:function(){return fetch("".concat(a,"trending/all/day?api_key=").concat(c)).then((function(t){return t.json()})).then((function(t){return t.results})).then((function(t){return t.filter((function(t){return"movie"===t.media_type}))}))},fetchMoviesWithQuery:function(t){return fetch("".concat(a,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.json()})).then((function(t){return t.results}))},fetchMovieDetails:function(t){return fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(t){return t.json()}))},fetchMovieCast:function(t){return fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(t){return t.json()}))},fetchMovieReviews:function(t){return fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(t){return t.json()})).then((function(t){return t.results}))}};e.a=i},58:function(t,e,n){"use strict";var c=n(1),a=(n(0),n(10)),r=n(3),i=n(8);e.a=Object(r.g)((function(t){var e=t.movies,n=t.location;return Object(c.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,r=t.title;return Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:{pathname:"".concat(i.a.movies,"/").concat(e),state:{from:n}},children:r})},e)}))})}))},69:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var c=n(1),a=n(53),r=n(54),i=n(56),o=n(55),u=n(0),s=n(52),f=n(57),h=n(15),l=n(58),v=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={movies:[],loading:!1,error:null},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),s.a.fetchTrendingMovies().then((function(e){return t.setState({movies:e})})).catch((function(e){f.b.error(e.message),t.setState({error:e.message})})).finally((function(){return t.setState({loading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.loading;return Object(c.jsxs)("div",{className:"MainContainer",children:[Object(c.jsx)("h1",{children:"Trending today"}),n?Object(c.jsx)(h.a,{}):Object(c.jsx)(l.a,{movies:e})]})}}]),n}(u.Component)}}]);
//# sourceMappingURL=home-page.d466a091.chunk.js.map
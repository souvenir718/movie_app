(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),c=a(30),n=a.n(c),r=a(8),o=a(2);a(37);var l=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)(r.b,{to:"/",children:Object(s.jsx)("img",{src:"".concat("/SOUPEDIA","/logo2.png"),alt:"logo",title:"logo",className:"header__logo"})}),Object(s.jsx)("a",{href:"https://souvenir718.github.io/",children:Object(s.jsx)("img",{src:"".concat("/SOUPEDIA","/portfolio.png"),alt:"logo",title:"portfolio page",className:"header__portfolio"})}),Object(s.jsx)("a",{href:"https://github.com/souvenir718",children:Object(s.jsx)("img",{src:"".concat("/SOUPEDIA","/github.jpg"),alt:"logo",title:"souvenir github",className:"header__github"})})]})};var d=function(){return Object(s.jsx)("span",{children:"About"})},j=a(10),m=a.n(j),p=a(13),h=a(14),u=a(15),b=a(17),v=a(16),_=(a(47),a(12)),g=a.n(_);a(66);var O=function(e){var t=e.id,a=e.year,i=e.title,c=e.summary,n=e.poster,o=(e.backdrop_path,e.rating),l=a.substr(0,4);return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("div",{className:"movie__poster",children:Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:i,title:i})}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{id:t}},children:Object(s.jsxs)("h3",{className:"movie__title",children:[i," (",l,")"]})}),Object(s.jsxs)("h4",{className:"movie__rating",children:["\ud83c\udfc6 ",Object(s.jsxs)("span",{children:[o," / 10"]})]}),Object(s.jsx)("p",{className:"movie__summary",children:c.length>140?c.slice(0,140)+"...":c})]})]})},x=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movie:{},similars:[]},e.getMovie=function(){var t=Object(p.a)(m.a.mark((function t(a){var s,i,c,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=ffe228ac6463158a2c4230ff91248853&language=en-US"));case 2:return s=t.sent,i=s.data,t.next=6,g.a.get("https://api.themoviedb.org/3/movie/".concat(a,"/similar?api_key=ffe228ac6463158a2c4230ff91248853&language=en-US&page=1"));case 6:c=t.sent,n=c.data.results,console.log(n),e.setState({movie:i,similars:n,isLoading:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/"),this.getMovie(t.state.id)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movie,i=e.similars;return Object(s.jsx)("div",{children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsxs)("div",{className:"detail__container",children:[Object(s.jsx)("div",{className:"detail__backdrop",style:{background:"url(https://image.tmdb.org/t/p/w500".concat(a.backdrop_path,") no-repeat center center/contain")}}),Object(s.jsx)("div",{className:"detail__poster",children:Object(s.jsxs)("div",{className:"poster__header",children:[Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:a.title,title:a.title}),Object(s.jsxs)("div",{className:"potser__data",children:[Object(s.jsx)("h1",{className:"data__title",children:a.title}),Object(s.jsxs)("h3",{className:"data__year",children:[a.release_date.slice(0,4)," \u2022"," ",a.production_countries?a.production_countries.map((function(e){return e.name})):null]}),Object(s.jsxs)("h3",{className:"data__rating",children:["\u2b50 ",a.vote_average," / 10"]}),Object(s.jsx)("a",{href:a.homepage,className:"data_homepage",children:"\ud83c\udfac Homepage"})]})]})}),Object(s.jsxs)("div",{className:"detail__contents",children:[Object(s.jsx)("h2",{className:"basic_info",children:"\ud83c\udfa5 Info"}),Object(s.jsx)("h3",{className:"info__title",children:a.title}),Object(s.jsxs)("p",{className:"info__date_country",children:[a.release_date.slice(0,4)," \u2022"," ",a.production_countries?a.production_countries.map((function(e){return e.name})):null]}),a.genres?a.genres.map((function(e){return Object(s.jsxs)("span",{className:"info__genre",children:[" ","#",e.name," "]},e.id)})):null,Object(s.jsxs)("p",{children:[Math.floor(a.runtime/60),"\uc2dc\uac04 ",a.runtime%60,"\ubd84"]}),Object(s.jsx)("p",{className:"info__overview",children:a.overview}),Object(s.jsx)("h2",{children:"\ud83c\udfa5 Similar Movies"}),Object(s.jsx)("div",{className:"detail__similars",children:i.map((function(e){return Object(s.jsxs)("div",{className:"similar",children:[Object(s.jsx)("div",{className:"similar__poster",children:Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,title:e.title})}),Object(s.jsx)("span",{className:"similar__title",children:e.title}),Object(s.jsxs)("span",{className:"similar__rating",children:["\u2b50 ",e.vote_average," / 10"]})]},e.id)}))})]})]})})}}]),a}(i.Component),f=(a(67),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(p.a)(m.a.mark((function t(){var a,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ffe228ac6463158a2c4230ff91248853&language=en-US&page=1");case 2:a=t.sent,s=a.data.results,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(O,{id:e.id,year:e.release_date,title:e.title,summary:e.overview,poster:e.poster_path,rating:e.vote_average,backdrop_path:e.backdrop_path},e.id)}))})})}}]),a}(i.Component));var N=function(){return Object(s.jsxs)(r.a,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(o.a,{path:"/movie/:id",component:x}),Object(s.jsx)(o.a,{path:"/about",component:d})]})};n.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1612590d.chunk.js.map
(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),i=(a(70),a(25)),m=a(7),o=a(12),d=(a(71),a(72),a(1));var l=function(e){var t=e.actorId,a=e.firstName,r=e.lastName,s=e.age,c=e.image,l=(e.imdburl,e.getActorId,Object(n.useState)()),b=Object(o.a)(l,2),j=b[0],h=(b[1],Object(m.g)());return void 0!==j?Object(d.jsx)(m.a,{to:"/actors/"+j+"/movie/"}):Object(d.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 card-box",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h5",{children:Object(d.jsx)(i.b,{onClick:function(){return h.push("/actors/"+t+"/movie/")},children:a+" "+r})})}),Object(d.jsx)("div",{className:"img-box",children:Object(d.jsx)("img",{className:"card-img",src:c})}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{children:"Age:\xa0"}),s]})})]})})},b=a(29),j=a(30),h=function(){function e(t,a,n,r,s,c){Object(b.a)(this,e),this.tmdbId=t,this.firstName=a,this.lastName=n,this.birthday=r,this.image=s,this.imdbLink=c}return Object(j.a)(e,[{key:"age",value:function(){var e=Date.now()-Date.parse(this.birthday),t=new Date(e);return Math.abs(t.getUTCFullYear()-1970)}}]),e}(),p=a(110),_=a(111),u=a(106),g=a(112),M=(a(78),a(46));function O(e){var t=e.filterText,a=e.sortOrder,n=e.handleFilter,r=e.handleSortBy,s=e.handleSortOrder;return Object(d.jsxs)(p.a,{collapseOnSelect:!0,expand:"md",bg:"primary",children:[Object(d.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(_.a,{className:"search",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(u.a.Prepend,{children:Object(d.jsx)(u.a.Text,{children:"Search:"})}),Object(d.jsx)(g.a,{placeholder:"Search actor","aria-label":"Filter",value:t,onChange:n})]})}),Object(d.jsx)(_.a,{className:"sort",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(u.a.Prepend,{children:Object(d.jsx)(u.a.Text,{children:"Sort:"})}),Object(d.jsxs)(g.a,{as:"select",custom:!0,onChange:r,children:[Object(d.jsx)("option",{defaultValue:"1",children:"Select"}),Object(d.jsx)("option",{value:"1",children:"First Name"}),Object(d.jsx)("option",{value:"2",children:"Last Name"}),Object(d.jsx)("option",{value:"3",children:"Age"})]}),Object(d.jsxs)("div",{className:"arrows",children:[Object(d.jsx)(M.a,{style:{cursor:"pointer"},icon:"long-arrow-alt-down",values:a,size:"lg",color:"Asc"===a?"#d0cfca":"#0275df",onClick:function(){return s("Asc")}}),Object(d.jsx)(M.a,{style:{cursor:"pointer"},icon:"long-arrow-alt-up",values:a,size:"lg",color:"Desc"===a?"#d0cfca":"#0275df",onClick:function(){return s("Desc")}})]})]})})]})]})}var w=a(63);var f=function(e){var t=e.getActorId,a=Object(n.useState)([]),r=Object(o.a)(a,2),s=r[0],c=r[1];Object(n.useEffect)((function(){c(w.map((function(e){return new h(e.tmdbId,e.name1,e.name2,e.birthdate,e.img,e.imdbLink)})))}),[]);var i=Object(n.useState)(""),m=Object(o.a)(i,2),b=m[0],j=m[1],p=Object(n.useState)(""),_=Object(o.a)(p,2),u=_[0],g=_[1],M=Object(n.useState)("Asc"),f=Object(o.a)(M,2),v=f[0],x=f[1],N=s.filter(function(e){return function(t){return!e||t.firstName.toLowerCase().includes(e.toLowerCase())||t.lastName.toLowerCase().includes(e.toLowerCase())}}(b));"1"===u?"Asc"===v?N.sort((function(e,t){return e.firstName>t.firstName?1:-1})):N.sort((function(e,t){return t.firstName>e.firstName?1:-1})):"2"===u?"Asc"===v?N.sort((function(e,t){return e.lastName>t.lastName?1:-1})):N.sort((function(e,t){return t.lastName>e.lastName?1:-1})):"3"===u&&("Asc"===v?N.sort((function(e,t){return Number(e.age())-Number(t.age())})):N.sort((function(e,t){return Number(t.age())-Number(e.age())})));var B=N.map((function(e,a){return Object(d.jsx)(l,{actorId:e.tmdbId,firstName:e.firstName,lastName:e.lastName,age:e.age(),image:e.image,imdburl:e.imdbLink,getActorId:t},"act"+a)}));return Object(d.jsxs)("div",{className:"p-actor",children:[Object(d.jsx)(O,{filterText:b,sortOrder:v,handleFilter:function(e){var t=e.target.value;j(t)},handleSortBy:function(e){g(e.target.value)},handleSortOrder:function(e){x(e)}}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:B})})]})},v=a(27),x=a.n(v),N=a(47),B=a(23),k=a.n(B),T=a(107),z=a(108),L=a(109),A=a(36),y=a(113),I=a(114);a(100);var V=function(e){var t=e.movie;return Object(d.jsx)("div",{className:"c-movie",children:Object(d.jsx)(y.a,{bg:"secondary",text:"white",children:Object(d.jsxs)("div",{className:"card-horizontal",children:[t.poster?Object(d.jsx)(y.a.Img,{variant:"top",src:t.poster}):null,Object(d.jsxs)(y.a.Body,{children:[Object(d.jsx)(y.a.Title,{children:"".concat(t.name," (").concat(t.release_year(),") ")}),Object(d.jsxs)(I.a,{variant:"flush",children:[Object(d.jsxs)(I.a.Item,{variant:"secondary",children:[Object(d.jsx)("span",{className:"card-label",children:"Length:"}),t.length+" minutes"]}),Object(d.jsxs)(I.a.Item,{variant:"secondary",children:[Object(d.jsx)("span",{className:"card-label",children:"Director:"}),t.director]}),Object(d.jsxs)(I.a.Item,{variant:"secondary",children:[Object(d.jsx)("span",{className:"card-label",children:"Main stars:"}),t.stars]}),Object(d.jsxs)(I.a.Item,{variant:"secondary",children:[Object(d.jsx)("span",{className:"card-label",children:"Overview:"}),Object(d.jsx)("span",{children:t.plot})]})]})]})]})})})},D=function(){function e(t,a,n,r,s,c,i,m){Object(b.a)(this,e),this.id=t,this.name=n,this.length=r,this.director=s,this.poster="https://image.tmdb.org/t/p/w500"+c,this.plot=i,this.stars=m,this.release_date=a}return Object(j.a)(e,[{key:"release_year",value:function(){return new Date(this.release_date).getFullYear()}}]),e}();var C=function(){var e=A.tmdb_api_key,t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],s=a[1],c=Object(m.h)().actorId;return Object(n.useEffect)((function(){(function(){var t=Object(N.a)(x.a.mark((function t(){var a,n,r,i,m;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(e,"&with_cast=").concat(c,"&sort_by=vote_average.desc"));case 3:return a=t.sent,t.next=6,Promise.all(a.data.results.map((function(t){var a=t.id;return k.a.all([k.a.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat(e,"&language=en-US")),k.a.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat(e,"&language=en-US"))])})));case 6:return n=t.sent,t.next=9,Promise.all([a,n]);case 9:r=t.sent,i=r[0].data.results,m=r[1],console.log(m[0][1]),function(){var e=Object(N.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(i.map((function(e,t){return new D(e.id,e.release_date,e.title,m[t][1].data.runtime,m[t][0].data.crew.map((function(e){return"Director"===e.job?e.name:""})),e.poster_path,e.overview,m[t][0].data.cast.slice(0,10).map((function(e){return e.name+", "})))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0.stack);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}})()()}),[c]),Object(d.jsx)("div",{className:"p-movies",children:Object(d.jsx)(T.a,{children:Object(d.jsx)(z.a,{children:r.map((function(e,t){return Object(d.jsx)(L.a,{lg:12,children:Object(d.jsx)(V,{movie:e})},"col"+t)}))})})})},F=a(39);var U=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),c=Object(o.a)(s,2),i=c[0],m=c[1];return Object(n.useEffect)((function(){var e=A.tmdb_api_key,t="http://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e);k.a.get(t).then((function(e){r(e.data.results)}))}),[]),Object(n.useEffect)((function(){m(a.map((function(e){return new D(e.id,"",e.original_title,0,"",e.poster_path,e.overview,"")})))}),[a]),Object(d.jsxs)("div",{className:"c-carousel",children:[Object(d.jsx)("h2",{children:"Top rated movies"}),Object(d.jsx)(F.a,{fade:!0,children:i.map((function(e,t){return Object(d.jsxs)(F.a.Item,{interval:1e3,children:[Object(d.jsx)("img",{className:"d-block w-100",src:e.poster,alt:e.name}),Object(d.jsxs)(F.a.Caption,{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{children:e.plot})]})]},t)}))})]})};a(101);var Y=function(e){return Object(d.jsx)("div",{className:"p-homepage",children:Object(d.jsx)(T.a,{children:Object(d.jsx)(U,{})})})};var X=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(T.a,{children:Object(d.jsx)("h1",{className:"display-1",children:"404"})})})},S=(a(102),a.p+"static/media/cluster-clip-art_1093814.dfecdd2c.png");function R(){return Object(d.jsx)("div",{children:Object(d.jsxs)(p.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:[Object(d.jsx)(p.a.Brand,{href:"#home",children:Object(d.jsx)("img",{src:S,height:"40",className:"d-inline-block align-top",alt:"logo"})}),Object(d.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(_.a,{className:"mr-auto",children:[Object(d.jsx)(_.a.Link,{href:"#home",children:"Home"}),Object(d.jsx)(_.a.Link,{href:"#Actors",children:"Actors"}),Object(d.jsx)(_.a.Link,{href:"#Contact",disabled:!0,children:"Contact"})]})})]})})}var Z=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)("header",{children:Object(d.jsx)("span",{className:"header-text",children:"Movies App"})}),Object(d.jsx)(R,{}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{exact:!0,path:"/",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(m.b,{exact:!0,path:"/home",children:Object(d.jsx)(Y,{})}),Object(d.jsxs)(m.b,{exact:!0,path:"/actors",children:[Object(d.jsx)(f,{}),"   "]}),Object(d.jsx)(m.b,{exact:!0,path:"/actors/:actorId/movie",children:Object(d.jsx)(C,{})}),Object(d.jsx)(m.b,{path:"*",children:Object(d.jsx)(X,{})})]})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},Q=(a(103),a(22)),J=a(65),P=a(48);Q.b.add(J.a,P.b,P.a),c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),E()},36:function(e){e.exports=JSON.parse('{"tmdb_api_key":"53d2ee2137cf3228aefae083c8158855","homepage":"https://slavik74.github.io/movie-app-TMDB","name":"movie-app","version":"0.1.0","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.35","@fortawesome/free-brands-svg-icons":"^5.15.3","@fortawesome/free-solid-svg-icons":"^5.15.3","@fortawesome/react-fontawesome":"^0.1.14","@testing-library/jest-dom":"^5.11.10","@testing-library/react":"^11.2.6","@testing-library/user-event":"^12.8.3","axios":"^0.21.1","bootstrap":"^4.6.0","gh-pages":"^3.1.0","react":"^17.0.2","react-bootstrap":"^1.5.2","react-dom":"^17.0.2","react-router-dom":"^5.2.0","react-scripts":"4.0.3","web-vitals":"^1.1.1"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},63:function(e){e.exports=JSON.parse('[{"tmdbId":190,"name1":"Clint","name2":"Eastwood","birthdate":"May 31, 1930","img":"https://m.media-amazon.com/images/M/MV5BMTg3MDc0MjY0OV5BMl5BanBnXkFtZTcwNzU1MDAxOA@@._V1_UY317_CR10,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000142?ref_=nmls_hd"},{"tmdbId":514,"name1":"Jack","name2":"Nicholson","birthdate":"April 22, 1937","img":"https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000197/?ref_=nmls_hd"},{"tmdbId":4111,"name1":"Ingrid","name2":"Bergman","birthdate":"August 29, 1915","img":"https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_UY317_CR20,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000006/?ref_=nmls_pst"},{"tmdbId":3635,"name1":"Elizabeth","name2":"Taylor","birthdate":"February 27, 1932","img":"https://m.media-amazon.com/images/M/MV5BMTQzMTc5MDg0OF5BMl5BanBnXkFtZTgwODE4NjMzNDE@._V1_UY317_CR21,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000072?ref_=nmls_hd"},{"tmdbId":380,"name1":"Robert","name2":"De Niro","birthdate":"August 17, 1943","img":"https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000134/?ref_=nmls_hd"},{"tmdbId":10400,"name1":"Barbra","name2":"Streisand","birthdate":"April 24, 1942","img":"https://m.media-amazon.com/images/M/MV5BMjMwOTQ3NTg1MF5BMl5BanBnXkFtZTcwMjc4MjQ4OA@@._V1_UY317_CR4,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000659/?ref_=nv_sr_srsg_4\')"},{"tmdbId":3223,"name1":"Robert","name2":"Downey Jr.","birthdate":"April 4, 1965","img":"https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000375/?ref_=nv_sr_srsg_0"},{"tmdbId":1245,"name1":"Scarlett","name2":"Johansson","birthdate":"November 22, 1984","img":"https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0424060/?ref_=nm_mv_close"},{"tmdbId":6384,"name1":"Keanu","name2":"Reeves","birthdate":"September 2, 1964","img":"https://m.media-amazon.com/images/M/MV5BYTkzODI4MDMtNDNmZC00NDZlLWFmNTktNDRhOWE2YzhlZTQ2XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_UY317_CR19,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000206/?ref_=nv_sr_srsg_0"},{"tmdbId":62,"name1":"Bruce","name2":"Willis","birthdate":"March 19, 1955","img":"https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000246/?ref_=nmls_hd"},{"tmdbId":1204,"name1":"Julia","name2":"Roberts","birthdate":"October 28, 1967","img":"https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000210/?ref_=nmls_hd"},{"tmdbId":18277,"name1":"Sandra","name2":"Bullock","birthdate":"July 26, 1964","img":"https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY317_CR1,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000113/?ref_=nmls_hd"},{"tmdbId":1100,"name1":"Arnold","name2":"Schwarzenegger","birthdate":"July 30, 1947","img":"https://m.media-amazon.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY317_CR19,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000216/?ref_=nv_sr_srsg_0"},{"tmdbId":112,"name1":"Cate","name2":"Blanchett","birthdate":"May 14, 1969","img":"https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY317_CR3,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000949/?ref_=nv_sr_srsg_0"},{"tmdbId":85,"name1":"Johnny","name2":"Depp","birthdate":"June 9, 1963","img":"https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000136/?ref_=nv_sr_srsg_3"},{"tmdbId":776,"name1":"Eddie","name2":"Murphy","birthdate":"April 3, 1961","img":"https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY317_CR6,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000552/?ref_=nv_sr_srsg_0"},{"tmdbId":18897,"name1":"Jackie","name2":"Chan","birthdate":"April 7, 1954","img":"https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000329/?ref_=nv_sr_srsg_0"},{"tmdbId":1327,"name1":"Ian","name2":"McKellen","birthdate":"May 25, 1939","img":"https://m.media-amazon.com/images/M/MV5BMTQ2MjgyNjk3MV5BMl5BanBnXkFtZTcwNTA3NTY5Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0005212/"},{"tmdbId":8891,"name1":"John","name2":"Travolta","birthdate":"February 18, 1954","img":"https://m.media-amazon.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_UY317_CR11,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000237/?ref_=tt_ov_st_sm"},{"tmdbId":139,"name1":"Uma","name2":"Thurman","birthdate":"April 29, 1970","img":"https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000235/?ref_=tt_ov_st_sm"},{"tmdbId":3,"name1":"Harrison","name2":"Ford","birthdate":" July 13, 1942","img":"https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000148/?ref_=nv_sr_srsg_3"},{"tmdbId":1158,"name1":"Al","name2":"Pacino","birthdate":"April 25, 1940","img":"https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000199/?ref_=nm_ov_bio_lk7"},{"tmdbId":1160,"name1":"Michelle","name2":"Pfeiffer","birthdate":"April 29, 1958","img":"https://m.media-amazon.com/images/M/MV5BMTUzNjI0Njc5NF5BMl5BanBnXkFtZTYwOTM2MjYz._V1_UX214_CR0,0,214,317_AL_.jpg","imdbLink":"https://www.imdb.com/name/nm0000201/?ref_=nv_sr_srsg_0"}]')},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.dac44c31.chunk.js.map
(this["webpackJsonpreceipe-app"]=this["webpackJsonpreceipe-app"]||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(15),a(3)),i=a(4),s=a(6),d=a(5),m=a(7),u=(a(25),a(8)),p=a(13),h=(a(26),a(28),p.initializeApp({apiKey:"AIzaSyCfi4BhRLOG4NXEHbDggmdMxtq2FaBX86g",authDomain:"recipe-app-2502.firebaseapp.com",databaseURL:"https://recipe-app-2502.firebaseio.com",projectId:"recipe-app-2502",storageBucket:"recipe-app-2502.appspot.com",messagingSenderId:"742840870839",appId:"1:742840870839:web:70bbf68da69a435d7fea32"})),b=p.firestore(),g=l.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),d=s[0],m=s[1];return Object(n.useEffect)((function(){h.auth().onAuthStateChanged(o),fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.json()})).then((function(e){m(e.categories.map((function(e){return e.strCategory})))}))}),[]),l.a.createElement(g.Provider,{value:{currentUser:r,categories:d}},t)},f=a(2);var E=function(e){var t=Object(n.useContext)(g).categories;return l.a.createElement("div",{className:e.direction},l.a.createElement("button",{className:e.classNameButton,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:e.handlerMarginTop},"Choose ",l.a.createElement("span",{className:"desktop"}," recipe "),"category"),l.a.createElement("div",{className:"dropdown-menu",style:{transform:"none"},"aria-labelledby":"dropdownMenuButton"},l.a.createElement("button",{className:"dropdown-item",type:"button",onClick:e.handleClick,name:"random"},"Random"),t?t.map((function(t){return l.a.createElement("button",{className:"dropdown-item",type:"button",key:t,name:t,onClick:e.handleClick},t)})):null))},k=a(10),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={emailSignIn:"",passwordSignIn:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e.handlePasswordReset=e.handlePasswordReset.bind(Object(f.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(k.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),h.auth().signInWithEmailAndPassword(this.state.emailSignIn,this.state.passwordSignIn).then((function(e){console.log(e)})).catch((function(e){return console.log(e.message)}))}},{key:"handlePasswordReset",value:function(e){console.log(e),console.log(this.state.emailSignIn),""!==this.state.emailSignIn?h.auth().sendPasswordResetEmail(this.state.emailSignIn).then(alert("Email has been sent to ".concat(this.state.emailSignIn))).catch((function(e){return console.log(e.message)})):alert("Fill in the email field")}},{key:"render",value:function(){return l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-outline-dark btn-sm loggedout dropdown-toggle",type:"button",id:"dropdownMenuButtonLogin","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sign in"),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right",style:{padding:"17px"},"aria-labelledby":"dropdownMenuButtonLogin"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"emailSignIn"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"emailSignIn",placeholder:"email@example.com",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"passwordSignIn"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"passwordSignIn",placeholder:"Password",onChange:this.handleChange}),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{style:{marginTop:"3px"},id:"resetPassword",className:"btn btn-light btn-sm",onClick:this.handlePasswordReset},l.a.createElement("small",{className:"text-muted text-right"},"Forget password?")))),l.a.createElement("div",{id:"signinButtons"},l.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-sm "},"Sign in")))))}}]),t}(l.a.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(k.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(e)})).catch((function(e){return console.log(e.message)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-secondary btn-sm loggedout dropdown-toggle",type:"button",id:"dropdownMenuButtonSignUp","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sign up"),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right",style:{padding:"17px"},"aria-labelledby":"dropdownMenuButtonSignUp"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"email@example.com",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleChange})),l.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-sm "},"Sign up"))))}}]),t}(l.a.Component);var C=function(e){var t=Object(n.useContext)(g).currentUser;return l.a.createElement("div",{id:"auth-buttons"},t?l.a.createElement("div",{className:"loggedin"},l.a.createElement("button",{className:"btn btn-outline-secondary btn-sm loggedin",id:"logout",onClick:function(){return h.auth().signOut()}},"Log out"),l.a.createElement("button",{className:"btn btn-outline-secondary btn-sm loggedin",id:"account",onClick:e.onAccountClick},"Account")):l.a.createElement("div",{className:"loggedout"},l.a.createElement(N,null),l.a.createElement(y,null)))};var w=function(e){return l.a.createElement("nav",{className:"navbar fixed-top navbar-light "},l.a.createElement("div",null,l.a.createElement("div",{id:"navHeader",className:"navbar-brand",onClick:e.onClick},l.a.createElement("span",{className:"desktop"},"Random recipe "),l.a.createElement("span",{className:"mobile"},"Recipe "),"generator")),l.a.createElement("div",{className:"navbar-button-block"},e.state.loaded?l.a.createElement("div",{className:"navbar-button-block"},l.a.createElement("p",{className:"desktop"},"Hit a button to get one of the delicious recipes"),l.a.createElement(E,{handleClick:e.handleClick,classNameButton:"btn btn-primary btn-sm dropdown-toggle",direction:"dropdown"})):null,l.a.createElement(C,{onAccountClick:e.onAccountClick})))},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={categories:[],unloadedMarginTop:"25vh",unloadedHeaderP:"block"},a.handlerMarginTop=a.handlerMarginTop.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.json()})).then((function(t){e.setState({categories:t.categories.map((function(e){return e.strCategory}))})}))}},{key:"handlerMarginTop",value:function(){this.setState({unloadedMarginTop:"5vh",unloadedHeaderP:"none"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"unloaded"},l.a.createElement("h1",{style:{marginTop:this.state.unloadedMarginTop},className:"display-3"},"Random recipe generator"),l.a.createElement("p",{id:"unloaded-p",style:{display:this.state.unloadedHeaderP}},"Choose category and hit a button to get one of the delicious recipes"),l.a.createElement("p",null,this.props.state.testText),l.a.createElement(E,{handleClick:this.props.handleClick,handlerMarginTop:this.handlerMarginTop,classNameButton:"btn btn-primary dropdown-toggle",direction:"btn-group dropright"}))}}]),t}(l.a.Component);var O=function(e){if(e.loaded){var t=e.url.slice(-11);return l.a.createElement("iframe",{width:"560",height:"315",title:t,src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}return null};var S=function(e){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("a",{href:e.href,className:"text-primary",target:"_blank",rel:"noopener noreferrer"},"Recipe source")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.themealdb.com/api.php",className:"text-secondary",target:"_blank",rel:"noopener noreferrer"},"API source")))};var M=function(e){var t=Object(n.useContext)(g).currentUser;return l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm",id:"favButton",onClick:function(a){a.preventDefault(),t&&(console.log(e.recipe),b.collection("users").doc(t.uid).collection("favorites").add(e.recipe).then((function(e){console.log("Added to favorites",e)})).catch((function(e){console.log(e.message)})))}},"Add to favorites")},x=function(e){for(var t=[],a=1;a<=20;a++)e["strIngredient".concat(a)]&&t.push(e["strIngredient".concat(a)]+" - "+e["strMeasure".concat(a)]);return t.map((function(e){return l.a.createElement("li",{key:e},e)}))},I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={loaded:null,recipe:""},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchRecipe",value:function(e){var t=this,a="";"random"===e?fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){t.setState({loaded:!0,recipe:e.meals[0]})})):fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e)).then((function(e){return e.json()})).then((function(e){return a=e.meals[Math.floor(Math.random()*e.meals.length)].idMeal,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(a))})).then((function(e){return e.json()})).then((function(e){t.setState({loaded:!0,recipe:e.meals[0]})}))}},{key:"componentDidMount",value:function(){this.fetchRecipe(this.props.state.targetCategory)}},{key:"componentDidUpdate",value:function(e){this.props.state.targetCategory!==e.state.targetCategory&&this.fetchRecipe(this.props.state.targetCategory)}},{key:"handleClick",value:function(e){this.fetchRecipe(e.target.name)}},{key:"render",value:function(){var e=x(this.state.recipe);return l.a.createElement("div",null,l.a.createElement("div",{className:"recipeContainer"},l.a.createElement("div",{className:"instructions"},l.a.createElement("h1",{className:"display-4"},this.state.recipe.strMeal),l.a.createElement("img",{className:"img-fluid mobile",src:this.state.recipe.strMealThumb,alt:this.state.recipe.strMeal}),l.a.createElement("div",{id:"listFavButtonContainer"},l.a.createElement("ul",{className:"list-unstyled"},e),l.a.createElement("div",null,l.a.createElement(M,{recipe:this.state.recipe}))),l.a.createElement("p",null,this.state.recipe.strInstructions)),l.a.createElement("div",{className:"media desktop"},l.a.createElement("img",{className:"img-fluid",src:this.state.recipe.strMealThumb,alt:this.state.recipe.strMeal}))),l.a.createElement("div",{className:"row justify-content-md-center video-div"},l.a.createElement(O,{loaded:this.state.loaded,url:this.state.recipe.strYoutube})),l.a.createElement(S,{href:this.state.recipe.strSource}))}}]),t}(l.a.Component),B=a(19);var H=function(e){var t=e.instructions.slice(0,75)+"...",a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],o=c[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"card mb-3 desktop",style:{width:"400px"}},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{onClick:e.onClick,id:e.id,src:e.img,className:"card-img",alt:"..."})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},t),l.a.createElement("button",{type:"button",className:"close",onClick:e.onDelete},l.a.createElement("span",{id:e.db,"aria-hidden":"true"},"\xd7")),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},e.category)))))),l.a.createElement("div",{className:"accordion mobile",id:"accordionExample"},l.a.createElement("div",{className:"card accordion-card"},l.a.createElement("div",{className:"card-header",id:"headingOne"},l.a.createElement("h2",{className:"mb-0"},l.a.createElement("img",{id:e.id,src:e.img,className:"card-img",alt:"...","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",onClick:function(){o(!r)},role:"button"})),l.a.createElement("div",{className:"card-header-container2"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},t),l.a.createElement("button",{type:"button",className:"close",onClick:e.onDelete},l.a.createElement("span",{id:e.db,"aria-hidden":"true"},"\xd7")),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},e.category)))),l.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample",style:r?{display:"block"}:{display:"none"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("ul",{className:"list-unstyled"},e.ingredients)),e.instructions,l.a.createElement("div",{className:"row justify-content-md-center video-div"},l.a.createElement(O,{loaded:Boolean(e),url:e.strYoutube})))))))};var T=function(e){var t=e.recipes.map((function(t){return l.a.createElement(H,{key:t.idMeal,img:t.strMealThumb,id:t.idMeal,db:t.id,name:t.strMeal,instructions:t.strInstructions,category:t.strCategory,onClick:e.onClick,onDelete:e.onDelete,ingredients:x(t),strYoutube:t.strYoutube})}));return l.a.createElement("div",null,t)};var P=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){r(e.recipe[0]),d(x(e.recipe[0]))}),[e]),l.a.createElement("div",{className:"desktop"},null!==c?l.a.createElement("div",null,l.a.createElement("div",{className:"recipeContainer",style:{marginTop:"0px"}},l.a.createElement("div",{className:"instructions"},l.a.createElement("h1",{className:"display-4"},c.strMeal),l.a.createElement("img",{className:"img-fluid mobile",src:c.strMealThumb,alt:c.strMeal}),l.a.createElement("div",{id:"listFavButtonContainer"},l.a.createElement("ul",{className:"list-unstyled"},s)),l.a.createElement("p",null,c.strInstructions)),l.a.createElement("div",{className:"media desktop"},l.a.createElement("img",{className:"img-fluid",src:c.strMealThumb,alt:c.strMeal}))),l.a.createElement("div",{className:"row justify-content-md-center video-div"},l.a.createElement(O,{loaded:Boolean(c),url:c.strYoutube})),l.a.createElement(S,{href:c.strSource})):null)};var A=function(e){var t=Object(n.useContext)(g).currentUser,a=Object(n.useState)([]),c=Object(u.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),d=s[0],m=s[1];function p(e){0!==e.length&&e.forEach((function(e){var t=e.data();t.id=e.id,o((function(e){return[].concat(Object(B.a)(e),[t])}))}))}return Object(n.useEffect)((function(){t?b.collection("users").doc(t.uid).collection("favorites").onSnapshot((function(e){p(e)}),(function(e){console.log(e)})):p([])}),[t]),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar fixed-top navbar-light "},l.a.createElement("div",null,l.a.createElement("div",{id:"navHeader",className:"navbar-brand",onClick:e.onHomeClick},l.a.createElement("span",{className:"desktop"},"Random recipe "),l.a.createElement("span",{className:"mobile"},"Recipe "),"generator")),l.a.createElement("div",{className:"navbar-button-block"},l.a.createElement("p",null,t?t.email:null),l.a.createElement("div",{className:"loggedin"},l.a.createElement("button",{className:"btn btn-outline-secondary btn-sm loggedin",id:"logout",onClick:function(){return h.auth().signOut()}},"Log out")))),l.a.createElement("div",{id:"account-content"},l.a.createElement("div",{id:"fav-list"},r.length>0?l.a.createElement(T,{recipes:r,onClick:function(e){e.preventDefault(),m(r.filter((function(t){return t.idMeal===e.target.id}))),window.document.body.clientWidth>800&&window.scrollTo(0,0)},onDelete:function(e){e.preventDefault(),b.collection("users").doc(t.uid).collection("favorites").doc(e.target.id).delete().catch((function(e){console.log(e.message)})),o([])}}):l.a.createElement("p",null,"Add recipes to your favorites to see them here")),null!==d?l.a.createElement("div",{id:"fav-recipe"},l.a.createElement(P,{recipe:d})):null))},R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={loaded:!1,account:!1,categories:[],unloadedMarginTop:"25vh",unloadedHeaderP:"block",targetCategory:""},e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.handleNavHeaderClick=e.handleNavHeaderClick.bind(Object(f.a)(e)),e.handleAccountClick=e.handleAccountClick.bind(Object(f.a)(e)),e.handleHomeClick=e.handleHomeClick.bind(Object(f.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=e.target.name;this.setState({targetCategory:t,loaded:!0})}},{key:"handleNavHeaderClick",value:function(){this.setState({loaded:!1,unloadedMarginTop:"25vh",unloadedHeaderP:"block"})}},{key:"handleAccountClick",value:function(){this.setState({account:!0})}},{key:"handleHomeClick",value:function(){this.setState({account:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{state:this.state,handleClick:this.handleClick,onClick:this.handleNavHeaderClick,onAccountClick:this.handleAccountClick}),this.state.account?l.a.createElement(A,{onHomeClick:this.handleHomeClick}):this.state.loaded?l.a.createElement(I,{state:this.state,handleNavHeaderClick:this.handleNavHeaderClick}):l.a.createElement(j,{state:this.state,handleClick:this.handleClick}))}}]),t}(l.a.Component),D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(v,null,l.a.createElement(R,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.48ea49b8.chunk.js.map
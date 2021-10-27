(this["webpackJsonpTrivia Time"]=this["webpackJsonpTrivia Time"]||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(8),n=s.n(a),i=s(3),r=s(9),l=s(1);function o(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("header",{className:"has-text-centered",children:[Object(l.jsxs)("div",{className:"is-flex is-align-items-center is-justify-content-center",children:[Object(l.jsx)(r.a,{className:"mr-2",size:"3rem",color:"#363636"}),Object(l.jsx)("h1",{className:"title is-1",children:"Hello, Trivia"})]}),Object(l.jsx)("p",{className:"subtitle",children:"Do You Want to Play a Game?"})]})})}var u=s(10),d=s(4);function j(e,t){e.preventDefault();var s=document.querySelector("#"+t),c=document.querySelector("html");s.classList.add("is-active"),c.classList.add("is-clipped")}function b(e,t){e.preventDefault();var s=document.querySelector("#"+t),c=document.querySelector("html");s.classList.remove("is-active"),c.classList.remove("is-clipped")}function m(e){var t=e.categoryNames;return Object(l.jsxs)("div",{id:"categoryList",className:"modal",children:[Object(l.jsx)("div",{className:"modal-background",onClick:function(e){return b(e,"categoryList")}}),Object(l.jsxs)("div",{className:"modal-content box",children:[Object(l.jsx)("h3",{className:"title",children:"Categories"}),Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{className:"buttonLooksLikeLink",onClick:function(t){document.querySelector("#category").value=e,validateCategory(),b(t,"categoryList")},children:e})},t)}))})]}),Object(l.jsx)("button",{className:"button modal-close","aria-label":"close",onClick:function(e){return b(e,"categoryList")}})]})}function h(e){var t=e.player,s=e.setPlayer,a=e.categories,n=e.setQuery,r=e.setErrorMessage,o=e.getErrorMessage,b=Object.keys(a),h=b.map((function(e){return a[e].name})).sort(),f=Object(c.useState)(""),O=Object(i.a)(f,2),x=O[0],y=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),N=v[0],g=v[1],k=Object(c.useState)(""),S=Object(i.a)(k,2),C=S[0],q=S[1],T=Object(c.useState)(""),w=Object(i.a)(T,2),F=w[0],L=w[1];function E(e){e.target.select()}return Object(l.jsxs)("div",{className:"box container has-text-centered",children:[Object(l.jsxs)("p",{className:"subtitle",children:["Hello ",t]}),Object(l.jsx)("h2",{className:"title",children:"Set up your game"}),Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=function(){for(var e=["amount=","category=","difficulty=","type="],t=[x,N,C,F],s="",c=0;c<t.length;c++)null!==t[c]&&""!==t[c]&&(null===t[c]&&""===t[c]||(s+=0===c?e[c]+t[c]:"&"+e[c]+t[c]));return s}();n(t)},children:[Object(l.jsxs)("div",{className:"field is-horizontal is-align-items-center",children:[Object(l.jsx)("div",{className:"field-label",children:Object(l.jsx)("label",{className:"label",htmlFor:"playerName",children:"Type your Name"})}),Object(l.jsx)("div",{className:"field-body",children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("input",{className:"input",type:"text",name:"playerName",value:t,onChange:function(e){return s(e.target.value)},onBlur:function(e){""===e.target.value.trim()&&s("Player")},onFocus:E,placeholder:"Enter Your Name"})})})]}),Object(l.jsxs)("div",{className:"field is-horizontal is-align-items-center",children:[Object(l.jsx)("div",{className:"field-label",children:Object(l.jsx)("label",{className:"label",htmlFor:"numOfQuestions",children:"Number of Questions?"})}),Object(l.jsx)("div",{className:"field-body",children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("input",{className:"input",type:"number",name:"numOfQuestions",id:"numOfQuestions",min:"1",max:"50",placeholder:"1-50",required:!0,onChange:function(e){r(""),"numOfQuestions"===e.target.name&&y(e.target.value)}})})})]}),Object(l.jsxs)("div",{className:"field is-horizontal",children:[Object(l.jsx)("div",{className:"field-label is-normal",children:Object(l.jsx)("label",{className:"label",children:"Category"})}),Object(l.jsx)("div",{className:"field-body",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{className:"input",type:"text",id:"category",name:"category",onFocus:E,onChange:function(){var e,t,s=document.querySelector("#category").value,c=!1,n=Object(u.a)(b);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(s===a[i].name){e=a[i].id,c=!0;break}}}catch(l){n.e(l)}finally{n.f()}c?(g(e),r("")):r(o(2))},placeholder:"Search for a Category",required:!0})}),Object(l.jsxs)("p",{className:"help is-flex is-align-items-center",children:[Object(l.jsx)(d.a,{}),"\xa0",Object(l.jsx)("button",{className:"buttonLooksLikeLink",onClick:function(e){return j(e,"categoryList")},children:"Hint: Category List"})]})]})})]}),Object(l.jsxs)("div",{className:"field is-horizontal",children:[Object(l.jsx)("div",{className:"field-label",children:Object(l.jsx)("label",{className:"label",children:"Difficulty"})}),Object(l.jsxs)("div",{className:"field-body has-text-left",children:[Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"anyDifficulty",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"difficulty",id:"anyDifficulty",value:"",onChange:function(e){q(e.target.value),r("")},required:!0}),"Any Difficulty"]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"easy",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"difficulty",id:"easy",value:"easy",onChange:function(e){q(e.target.value),r("")},required:!0}),"Easy"]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"medium",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"difficulty",id:"medium",value:"medium",onChange:function(e){q(e.target.value),r("")},required:!0}),"Medium"]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"hard",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"difficulty",id:"hard",value:"hard",onChange:function(e){q(e.target.value),r("")},required:!0}),"Hard"]})})]})]}),Object(l.jsxs)("div",{className:"field is-horizontal",children:[Object(l.jsx)("div",{className:"field-label",children:Object(l.jsx)("label",{className:"label",children:"Format"})}),Object(l.jsxs)("div",{className:"field-body has-text-left",children:[Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"anyType",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"format",id:"anyType",value:"",onChange:function(e){L(e.target.value),r("")},required:!0}),"Any Type"]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"multipleChoice",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"format",id:"multipleChoice",value:"multiple",onChange:function(e){L(e.target.value),r("")},required:!0}),"Multiple Choice"]})}),Object(l.jsx)("div",{className:"field",children:Object(l.jsxs)("label",{className:"control",htmlFor:"trueFalse",children:[Object(l.jsx)("input",{className:"mr-1",type:"radio",name:"format",id:"trueFalse",value:"boolean",onChange:function(e){L(e.target.value),r("")},required:!0}),"True/False"]})})]})]}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{className:"button",id:"submit",type:"submit"})})]}),Object(l.jsx)(m,{categoryNames:h})]})}function f(e){var t,s,a=e.q,n=e.setAnswered,i=e.setScore,r=e.completedQuestions,o=a.category,u=a.correct_answer,d=a.difficulty,j=a.incorrect_answers,b=a.question,m=a.type;function h(e){e.preventDefault(),e.target.value===u&&i((function(e){return e+1})),n(!0)}return"multiple"===m&&(t=function(e,t){var s=e.slice(),c=e.length+1,a=Math.floor(Math.random()*(c-0+1)+0);return s.splice(a,0,t),s}(j,u)),Object(c.useEffect)((function(){n(!1)}),[a]),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-content has-text-centered",children:[Object(l.jsxs)("p",{className:"subtitle",children:["Question ",r+1]}),Object(l.jsx)("p",{className:"title is-3",children:(s=b,Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:s}}))}),Object(l.jsx)("form",{children:"boolean"===m?Object(l.jsxs)("div",{className:"field is-grouped-centered is-flex is-align-items-center is-justify-content-center",children:[Object(l.jsx)("button",{className:"button has-background-light is-medium",name:"True",id:"True",value:"True",onClick:h,children:"True"}),Object(l.jsx)("span",{className:"mx-3",children:"OR"}),Object(l.jsx)("button",{className:"button has-background-light is-medium",name:"False",id:"False",value:"False",onClick:h,children:"False"})]}):"multiple"===m?Object(l.jsx)("div",{className:"buttons is-centered",children:t.map((function(e,t){return Object(l.jsx)("button",{className:"button has-background-light is-medium",name:"answers",value:e,onClick:h,required:!0,dangerouslySetInnerHTML:(s=e,{__html:s})},t);var s}))}):void 0})]}),Object(l.jsxs)("div",{className:"card-footer",children:[Object(l.jsxs)("p",{className:"card-footer-item has-text-white has-background-success",children:["Category | ",o]}),Object(l.jsxs)("p",{className:"card-footer-item has-text-white has-background-info",children:["Difficulty | ",d]})]})]})}var O=s(6);function x(e){var t=e.questions,s=e.setQuestions,a=e.setQuery,n=Object(c.useState)(0),r=Object(i.a)(n,2),o=r[0],u=r[1],d=Object(c.useState)(!1),j=Object(i.a)(d,2),b=j[0],m=j[1],h=Object(c.useState)(0),x=Object(i.a)(h,2),y=x[0],p=x[1];return Object(c.useEffect)((function(){u(0),m(!1),p(0)}),[t]),Object(c.useEffect)((function(){b&&u((function(e){return e+1}))}),[b]),Object(l.jsxs)("section",{id:"questions",children:[Object(l.jsxs)("div",{className:"container has-text-centered my-5",children:[Object(l.jsx)("h4",{className:"subtitle is-6",children:"Current Score"}),Object(l.jsxs)("p",{className:"title is-4",children:[y," out of ",t.length]})]}),Object(l.jsx)("div",{children:o<t.length?Object(l.jsx)(f,{q:t[o],setAnswered:m,setScore:p,completedQuestions:o}):o===t.length?y===t.length?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("p",{className:"is-flex is-align-items-center is-justify-content-center",children:[Object(l.jsx)(O.c,{}),"\xa0100%! Great job! Setup your game to play again!"]})}):0===y?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("p",{className:"is-flex is-align-items-center is-justify-content-center",children:["You lose... your head!\xa0",Object(l.jsx)(O.b,{}),"\xa0Kidding... Setup your game to play again!"]})}):Object(l.jsx)("div",{className:"container has-text-centered",children:Object(l.jsx)("p",{children:"Good job! Setup your game to play again!"})}):void 0}),Object(l.jsx)("div",{className:"has-text-centered mt-5",children:Object(l.jsxs)("button",{className:"button closeGame has-background-danger has-text-white",onClick:function(e){e.preventDefault(),s(null),a("")},children:[Object(l.jsx)(O.a,{size:"2rem",color:"white"}),"\xa0 Return to Setup"]})})]})}function y(e){var t=e.resetSessionToken;return Object(l.jsxs)("div",{id:"resetSession",className:"modal",children:[Object(l.jsx)("div",{className:"modal-background",onClick:function(e){return b(e,"resetSession")}}),Object(l.jsxs)("div",{className:"modal-content box content",children:[Object(l.jsx)("h3",{className:"title",children:"Resetting Your Game Session Token"}),Object(l.jsx)("p",{children:"The session token of your game keeps track of what questions you have already answered. If you exhaust all of the questions in a category, you can reset your session token (use the button below) OR pick another category."}),Object(l.jsx)("p",{children:"If you've exhausted all of the questions in every category (IMPRESSIVE), you'll need to reset your token with the button below."}),Object(l.jsx)("p",{children:"Your token will expire after 6 hours of inactivity."}),Object(l.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(l.jsx)("button",{className:"button has-background-danger has-text-white",onClick:function(e){window.confirm("Are you sure you want to reset your session token?")&&(t(),b(e,"resetSession"))},children:"Reset Session Token"})})]}),Object(l.jsx)("button",{className:"button modal-close","aria-label":"close",onClick:function(e){return b(e,"resetSession")}})]})}function p(e){var t=e.resetSessionToken;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("footer",{className:"footer has-background-black has-text-white has-text-centered pb-6",children:[Object(l.jsxs)("p",{children:["Coded by Ayame Ulrich | API"," ",Object(l.jsx)("a",{href:"https://opentdb.com",target:"_blank",rel:"noreferrer",children:"Open Trivia Database"})]}),Object(l.jsx)("div",{className:"is-flex is-justify-content-center mt-2",children:Object(l.jsxs)("button",{className:"buttonLooksLikeLink is-flex is-align-items-center",onClick:function(e){return j(e,"resetSession")},children:[Object(l.jsx)(d.a,{className:"mr-1",size:"1rem"}),Object(l.jsx)("p",{children:"Reset Session Token"})]})})]}),Object(l.jsx)(y,{resetSessionToken:t})]})}function v(){var e=Object(c.useState)(),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),u=r[0],d=r[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),m=b[0],f=b[1],O=Object(c.useState)(""),y=Object(i.a)(O,2),v=y[0],N=y[1],g=Object(c.useState)(null),k=Object(i.a)(g,2),S=k[0],C=k[1],q=Object(c.useState)(null),T=Object(i.a)(q,2),w=T[0],F=T[1];function L(){fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){0===e.response_code&&a(e.token)}))}function E(e){var t="";switch(e){case 1:t="No results found. There aren't enough questions in that category.";break;case 2:t="Not a valid category. Check out the list of category topics.";break;case 3:t="Session Token Not Found.";break;case 4:t="Congrats! You've completed all of the questions for your category. Pick another category or reset your session token.";break;default:t=""}return t}return Object(c.useEffect)((function(){fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return f(e.trivia_categories)}))}),[]),Object(c.useEffect)((function(){return L()}),[]),Object(c.useEffect)((function(){if(""!==v){var e=encodeURI("https://opentdb.com/api.php?"+v+"&"+s);""===s&&L(),fetch(e).then((function(e){return e.json()})).then((function(e){0===e.response_code?F(e):C(E(e.response_code))}))}}),[v]),Object(c.useEffect)((function(){document.querySelector("#submit").disabled=""!==S}),[S]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[!w&&Object(l.jsx)(h,{player:u,setPlayer:d,categories:m,setQuery:N,setErrorMessage:C,getErrorMessage:E}),w&&Object(l.jsx)(x,{questions:w.results,setQuestions:F,setQuery:N}),Object(l.jsx)("p",{children:S})]}),Object(l.jsx)(p,{resetSessionToken:function(){fetch("https://opentdb.com/api_token.php?command=reset&token="+s).then((function(e){return e.json()})).then((function(e){0===e.response_code&&a(e.token)}))}})]})}s(16),s(17);var N=document.getElementById("root");n.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(v,{})}),N)}},[[18,1,2]]]);
//# sourceMappingURL=main.5d51b640.chunk.js.map
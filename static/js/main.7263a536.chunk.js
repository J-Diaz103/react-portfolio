(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(16),i=c.n(r),l=(c(23),c(24),c(7)),n=c(0);var j=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(l.b,{className:"navbar-brand",href:"/",children:"Jesus Diaz"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor03",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link ",to:"/aboutme",children:"About Me"})}),Object(n.jsx)("li",{classNames:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/portfolio",children:"Portfolio"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/resume",children:"Resume"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})},o=c(8),d=function(){var e=Object(a.useState)("I am a fullstack web developer  with a lot to learn but eager to become a part of a bigger team"),t=Object(o.a)(e,1)[0];return Object(n.jsxs)("div",{className:"aboutMe",children:[Object(n.jsx)("h1",{children:" About Me"}),Object(n.jsx)("p",{children:t})]})},b=function(e){var t=e.projects,c=e.title;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:c}),t.map((function(e){return Object(n.jsxs)("div",{className:"card border-primary mb-3",children:[Object(n.jsx)("h3",{className:"card-header",children:e.name}),Object(n.jsx)("rect",{width:"100%",height:"100%",fill:"#868e96"}),Object(n.jsx)("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em",children:e.name}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("p",{className:"card-text",children:e.description})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("a",{href:e.link,className:"card-link",children:"Link"}),Object(n.jsx)("a",{href:e.repo,className:"card-link",children:"Repository"})]})]},e.id)}))]})};var h=function(){var e=Object(a.useState)([{name:"Trip-Assist",description:"MERN Stack",link:"https://project-3-trip-assist.herokuapp.com/",repo:"https://github.com/J-Diaz103/project-3-trip-assist",id:1},{name:"Pet-Connect",description:"MVC",link:"https://project-2-pet-connect.herokuapp.com/",repo:"https://github.com/J-Diaz103/project-2-pet-connect",id:2},{name:"Bucket-List",description:"HTML/CSS/Javascript",link:"https://j-diaz103.github.io/Bucket-List/",repo:"https://github.com/J-Diaz103/Bucket-List",id:3}]),t=Object(o.a)(e,1)[0];return Object(n.jsx)("div",{children:Object(n.jsx)(b,{projects:t,title:"My Projects"})})};var m=function(){return Object(n.jsx)("section",{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Download my ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/j-diaz103/",children:"resume"})]}),Object(n.jsx)("h3",{children:"Front-end Proficiencies"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"HTML"}),Object(n.jsx)("li",{children:"CSS"}),Object(n.jsx)("li",{children:"JavaScript"}),Object(n.jsx)("li",{children:"jQuery"}),Object(n.jsx)("li",{children:"responsive design"}),Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"Bootstrap"})]}),Object(n.jsx)("h3",{children:"Back-end Proficiencies"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"APIs"}),Object(n.jsx)("li",{children:"Node"}),Object(n.jsx)("li",{children:"Express"}),Object(n.jsx)("li",{children:"MySQL, Sequelize"}),Object(n.jsx)("li",{children:"MongoDB, Mongoose"}),Object(n.jsx)("li",{children:"REST"}),Object(n.jsx)("li",{children:"GraphQL"})]})]})})},x=c(11),u=c(15);var O=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),l=i[0],j=i[1],d=c.name,b=c.email,h=c.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(s(Object(u.a)(Object(u.a)({},c),{},Object(x.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"card text-white bg-primary mb-3",style:{maxWidth:"30rem"},children:[Object(n.jsx)("div",{class:"card-header",children:"Contact Me"}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("p",{class:"card-text",children:"To get in touch with me send me a message and your Information and I'll be sure to get back to you ass soon as possible!"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",c)},children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",class:"form-label mt-4",children:"Name"}),Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter Name",defaultValue:d,onBlur:m})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleInputEmail1",class:"form-label mt-4",children:"Email address"}),Object(n.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",defaultValue:b,onBlur:m}),Object(n.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleTextarea",class:"form-label mt-4",children:"Message"}),Object(n.jsx)("textarea",{class:"form-control",id:"exampleTextarea",rows:"3",defaultValue:h,onBlur:m})]}),l&&Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:l})}),Object(n.jsx)("button",{type:"submit",class:"btn btn-outline-warning",children:"Submit"})]})]})]})})},p=c(2),v=function(){return Object(n.jsx)("h1",{children:"Hello my name is Jesus"})};var f=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(v,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/aboutme",children:Object(n.jsx)(d,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/portfolio",children:Object(n.jsx)(h,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/resume",children:Object(n.jsx)(m,{})}),Object(n.jsx)(p.a,{exact:!0,path:"/contact",children:Object(n.jsx)(O,{})})]})})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.7263a536.chunk.js.map
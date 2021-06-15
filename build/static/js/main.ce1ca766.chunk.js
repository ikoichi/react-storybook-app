(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{19:function(r,n,e){},23:function(r,n,e){"use strict";e.r(n);var c,o=e(1),t=e.n(o),a=e(11),i=e.n(a),l=(e(19),e(2)),b={colors:{primary100:"#f7fbfd",primary200:"#eff7fa",primary300:"#deeff5",primary400:"#cee8f0",primary500:"#bde0eb",primary600:"#add8e6",primary700:"#8aadb8",primary800:"#68828a",primary900:"#45565c",secondary100:"#f6f6f6",secondary200:"#eeeeee",secondary300:"#dddddd",secondary400:"#cbcbcb",secondary500:"#bababa",secondary600:"#a9a9a9",secondary700:"#878787",secondary800:"#656565",secondary900:"#444444"}},d=e(9),s=e(3),j=e(4),p=e(5),O=function(r){return function(n){return n.theme.colors[r]}},x=e(0),u=l.c.input(c||(c=Object(s.a)(["\n  ","\n  padding: 8px;\n  border: 1px solid ",";\n  border-radius: 4px;\n  outline: none;\n  color: ",";\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(r){var n=r.theme;return console.log("theme",n)}),O("primary600"),O("primary800"),O("primary700"),O("secondary300")),h=function(r){var n=Object.assign({},r);return Object(x.jsx)(u,Object(j.a)({},n))};h.defaultProps={placeholder:""};var m,g,y,f=h,v=l.c.div(m||(m=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=l.c.label(g||(g=Object(s.a)(["\n  margin-bottom: 4px;\n  color: ",";\n  font-weight: 600;\n  font-size: 14px;\n"])),O("primary800")),k=function(r){var n=r.label,e=r.placeholder,c=r.type,o=r.onChange,t=Object(p.a)(r,["label","placeholder","type","onChange"]);return Object(x.jsxs)(v,Object(j.a)(Object(j.a)({},t),{},{children:[Object(x.jsx)(C,{children:n}),Object(x.jsx)(f,{onChange:o,placeholder:e,type:c})]}))},w={isPrimary:{rest:{color:b.colors.primary800,backgroundColor:b.colors.primary500,border:"1px solid "+b.colors.primary500},hover:{color:b.colors.primary800,backgroundColor:b.colors.primary400,border:"1px solid "+b.colors.primary400},active:{color:b.colors.primary900,backgroundColor:b.colors.primary600,border:"1px solid "+b.colors.primary600}},isSecondary:{rest:{color:b.colors.primary700,backgroundColor:"white",border:"1px solid "+b.colors.primary600},hover:{color:b.colors.primary800,backgroundColor:"white",border:"1px solid "+b.colors.primary700},active:{color:b.colors.primary800,backgroundColor:b.colors.primary100,border:"1px solid "+b.colors.primary800}}},P="rest",S="hover",L="active",F=function(r){return function(n){return function(e){return e.isPrimary?w.isPrimary[r][n]:w.isSecondary[r][n]}}},E=l.c.button(y||(y=Object(s.a)(["\n  border-radius: 4px;\n  border: 0;\n  padding: 8px 16px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  outline: none;\n  transition: all 0.1s linear;\n  border: ",";\n\n  &&:hover {\n    background-color: ",";\n    color: ",";\n    border: ","};\n  }\n\n  &&:active {\n    background-color: ",";\n    color: ",";\n    border: ",";\n  }\n"])),F(P)("backgroundColor"),F(P)("color"),F(P)("border"),F(S)("backgroundColor"),F(S)("color"),F(S)("border"),F(L)("backgroundColor"),F(L)("color"),F(L)("border")),J=function(r){var n=r.isPrimary,e=r.children,c=r.onClick,o=Object(p.a)(r,["isPrimary","children","onClick"]);return Object(x.jsx)(E,Object(j.a)(Object(j.a)({isPrimary:n,onClick:c},o),{},{children:e}))};J.defaultProps={isPrimary:!1};var U,z,B,D,I,M,R,T,q,A,G,H,K,N,Q,V,W,X,Y,Z=J,$=l.c.form(U||(U=Object(s.a)([""]))),_=l.c.h3(z||(z=Object(s.a)(["\n  color: ",";\n"])),O("primary900")),rr=Object(l.c)(k)(B||(B=Object(s.a)(["\n  margin-bottom: 16px;\n"]))),nr=l.c.div(D||(D=Object(s.a)(["\n  margin-top: 8px;\n  text-align: right;\n"]))),er=Object(l.c)(Z)(I||(I=Object(s.a)(["\n  margin-right: 16px;\n"]))),cr=function(r){var n=Object.assign({},r);return Object(x.jsxs)($,Object(j.a)(Object(j.a)({},n),{},{children:[Object(x.jsx)(_,{children:"Sign in"}),Object(x.jsx)(rr,{label:"Email"}),Object(x.jsx)(rr,{label:"Password",type:"password"}),Object(x.jsxs)(nr,{children:[Object(x.jsx)(er,{children:"Reset"}),Object(x.jsx)(Z,{isPrimary:!0,children:"Login"})]})]}))},or=l.c.div(M||(M=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  padding: 16px;\n  align-items: center;\n  box-shadow: 0 5px 5px #dddddd;\n  box-sizing: border-box;\n\n  button {\n    margin-right: 16px;\n  }\n\n  button:last-child {\n    margin-right: 0;\n  }\n"]))),tr=l.c.div(R||(R=Object(s.a)(["\n  flex-grow: 1;\n"]))),ar=l.c.div(T||(T=Object(s.a)([""]))),ir=function(r){var n=r.onLogin,e=r.onSignUp,c=Object(p.a)(r,["onLogin","onSignUp"]);return Object(x.jsxs)(or,Object(j.a)(Object(j.a)({},c),{},{children:[Object(x.jsx)(tr,{children:"My brand"}),Object(x.jsxs)(ar,{children:[Object(x.jsx)(Z,{onClick:n,children:"Login"}),Object(x.jsx)(Z,{isPrimary:!0,onClick:e,children:"Sign up"})]})]}))},lr=l.c.form(q||(q=Object(s.a)([""]))),br=l.c.h3(A||(A=Object(s.a)(["\n  color: ",";\n"])),O("primary900")),dr=Object(l.c)(k)(G||(G=Object(s.a)(["\n  margin-bottom: 16px;\n"]))),sr=l.c.div(H||(H=Object(s.a)(["\n  margin-top: 8px;\n  text-align: right;\n"]))),jr=Object(l.c)(Z)(K||(K=Object(s.a)(["\n  margin-right: 16px;\n"]))),pr=function(r){var n=Object.assign({},r);return Object(x.jsxs)(lr,Object(j.a)(Object(j.a)({},n),{},{children:[Object(x.jsx)(br,{children:"Sign up"}),Object(x.jsx)(dr,{label:"Full name",placeholder:"John Doe"}),Object(x.jsx)(dr,{label:"Email",placeholder:"john.doe@example.com"}),Object(x.jsx)(dr,{label:"Password",type:"password",placeholder:"Choose a strong password..."}),Object(x.jsxs)(sr,{children:[Object(x.jsx)(jr,{children:"Reset"}),Object(x.jsx)(Z,{isPrimary:!0,children:"Create account"})]})]}))},Or=l.c.div(N||(N=Object(s.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"])),O("secondary100")),xr=Object(l.c)(ir)(Q||(Q=Object(s.a)(["\n  background-color: white;\n"]))),ur=l.c.div(V||(V=Object(s.a)(["\n  max-width: 70%;\n  flex-grow: 1;\n  display: flex;\n"]))),hr=Object(l.b)(W||(W=Object(s.a)(["\n  width: 350px;\n  margin-top: 80px;\n"]))),mr=Object(l.c)(cr)(X||(X=Object(s.a)(["\n  ","\n"])),hr),gr=Object(l.c)(pr)(Y||(Y=Object(s.a)(["\n  ","\n"])),hr),yr=function(){var r=Object(o.useState)(!0),n=Object(d.a)(r,2),e=n[0],c=n[1],t=Object(o.useState)(!1),a=Object(d.a)(t,2),i=a[0],l=a[1];return Object(x.jsxs)(Or,{children:[Object(x.jsx)(xr,{onLogin:function(){c(!0),l(!1)},onSignUp:function(){c(!1),l(!0)}}),Object(x.jsxs)(ur,{children:[e&&Object(x.jsx)(mr,{}),i&&Object(x.jsx)(gr,{})]})]})},fr=function(){return Object(x.jsx)(l.a,{theme:b,children:Object(x.jsx)(yr,{})})},vr=function(r){r&&r instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,t=n.getLCP,a=n.getTTFB;e(r),c(r),o(r),t(r),a(r)}))};i.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(fr,{})}),document.getElementById("root")),vr()}},[[23,1,2]]]);
//# sourceMappingURL=main.ce1ca766.chunk.js.map
import{T as u,c as d,w as l,o as m,a,u as t,Z as c,b as o,f as p,t as f,g as w,d as _,n as g,e as y}from"./app-Bwa3TLRK.js";import{_ as b}from"./GuestLayout-wd34O1Y0.js";import{_ as x}from"./InputError-D5_PrTg8.js";import{_ as k,a as V}from"./TextInput-BZDJ3t6i.js";import{P as v}from"./PrimaryButton-CFZdU-N-.js";import"./ApplicationLogo-aHaCBYlU.js";import"./hero-logo-new-nav-DErDjNTI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},N={class:"mt-4 flex items-center justify-end"},q={__name:"ForgotPassword",props:{status:{type:String}},setup(r){const e=u({email:""}),i=()=>{e.post(route("password.email"))};return(P,s)=>(m(),d(b,null,{default:l(()=>[a(t(c),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),r.status?(m(),p("div",B,f(r.status),1)):w("",!0),o("form",{onSubmit:y(i,["prevent"])},[o("div",null,[a(k,{for:"email",value:"Email"}),a(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(x,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",N,[a(v,{class:g({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:l(()=>s[1]||(s[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{q as default};

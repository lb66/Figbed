(this["webpackJsonpreact-figbed"]=this["webpackJsonpreact-figbed"]||[]).push([[12],{368:function(e,a,r){"use strict";r.r(a);var n=r(16),t=r(0),s=r.n(t),o=r(371),l=r(374),c=r(176),i=r(17),u=r(67),m=r(4);function d(){var e=Object(n.a)(["\ntext-align:center;\nmargin: 10px;\n"]);return d=function(){return e},e}function p(){var e=Object(n.a)(["\nmargin:30px auto;\nbox-shadow:2px 2px 4px 0 rgba(0,0,0,0.2);\nborder-radius:4px;\npadding:20px;\nmax-width:600px;\nbackground-color:#eeeeee;\n"]);return p=function(){return e},e}var b=i.a.div(p()),f=i.a.h1(d()),g={labelCol:{span:8},wrapperCol:{span:10}},h={wrapperCol:{offset:8,span:16}};a.default=function(){var e=Object(u.a)().authStore,a=Object(m.f)();return s.a.createElement(b,null,s.a.createElement(f,null,"\u6ce8\u518c"),s.a.createElement(o.a,Object.assign({},g,{name:"basic",onFinish:function(r){console.log("Success:",r),e.setUsername(r.username),e.setPassword(r.password),e.register().then((function(){a.push("/")})).catch((function(){console.log("\u6ce8\u518c\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(o.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u60a8\u8fd8\u672a\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u548c\u4e0b\u5212\u7ebf"):Promise.resolve()}}]},s.a.createElement(l.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",allowClear:!0})),s.a.createElement(o.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u60a8\u8fd8\u672a\u8f93\u5165\u5bc6\u7801"},{min:6,message:"\u6700\u5c116\u4e2a\u5b57\u7b26"}]},s.a.createElement(l.a.Password,{placeholder:"\u8bf7\u8bbe\u7f6e\u5bc6\u7801"})),s.a.createElement(o.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"\u60a8\u8fd8\u672a\u8f93\u5165\u5bc6\u7801"},function(e){var a=e.getFieldValue;return{validator:function(e,r){return r&&a("password")!==r?Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):Promise.resolve()}}}]},s.a.createElement(l.a.Password,{placeholder:"\u8bf7\u786e\u8ba4\u5bc6\u7801"})),s.a.createElement(o.a.Item,h,s.a.createElement(c.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=12.09750dee.chunk.js.map
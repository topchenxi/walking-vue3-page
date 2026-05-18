import{C as e,D as t,Gt as n,Jt as r,b as i,bt as a,ct as o,ht as s,k as c,kt as l,q as u}from"./vue.runtime.esm-bundler.Cb8OOsKr.js";import{G as d,K as f}from"./style.Di9TsXJ0.js";import{t as p}from"./vue-export-helper.Du3wJ9gW.js";import"./dashboard.D5u5UJoq.js";import{t as m}from"./dev-vue-codemirror.Bw_hLEro.js";var h={class:`demo-page-container`},g={class:`section-block`},_={class:`section-block`},v={class:`code-block`},y=c({name:`VueCodeMirrorBasicUsage`,__name:`index`,setup(r){let c=a(`// 欢迎使用 vue-codemirror 代码编辑器
function greeting(name) {
  return "Hello, " + name + "!";
}

const message = greeting("World");
console.log(message);

// 试试编辑这段代码，右侧会实时预览`);function p(e){console.log(`代码内容已更改:`,e)}return(r,a)=>{let y=d,b=f;return u(),e(`div`,h,[t(b,{gutter:20},{default:o(()=>[t(y,{span:12},{default:o(()=>[i(`div`,g,[a[1]||=i(`h4`,{class:`section-title`},`代码编辑器`,-1),t(m,{modelValue:l(c),"onUpdate:modelValue":a[0]||=e=>s(c)?c.value=e:null,language:`javascript`,height:`400px`,onChange:p},null,8,[`modelValue`]),a[2]||=i(`p`,{class:`editor-tip`},`使用上方编辑器编辑 JavaScript 代码，实时预览将在右侧显示`,-1)])]),_:1}),t(y,{span:12},{default:o(()=>[i(`div`,_,[a[3]||=i(`h4`,{class:`section-title`},`实时内容预览`,-1),i(`pre`,v,n(l(c)||`编辑器内容为空`),1)])]),_:1})]),_:1})])}}}),b=r({default:()=>x}),x=p(y,[[`__scopeId`,`data-v-b590b0d8`]]);export{b as n,x as t};
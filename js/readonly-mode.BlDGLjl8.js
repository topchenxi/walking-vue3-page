import{n as e}from"./rolldown-runtime.CXI4HHzU.js";import{C as t,D as n,Dt as r,E as i,Ut as a,b as o,k as s,mt as c,q as l,st as u,yt as d}from"./vue.runtime.esm-bundler.DaMdaczi.js";import{d as f,rt as p,tt as m,y as h}from"./style.WikGDUa_.js";import"./style.B5cFo5YB.js";import"./style.CLBy6ulv.js";import"./style.DqTRMSKO.js";import{t as g}from"./dev-wangeditor.CMfCsoUs.js";var _={class:`demo-page-container`},v={class:`control-section section-block`},y={class:`editor-section section-block`},b={class:`section-title`},x={class:`preview-section section-block`},S=[`innerHTML`],C={class:`tips-section section-block`},w=s({__name:`index`,setup(e){let s=d(!0),w=d(`
  <h2>wangEditor 只读模式示例</h2>
  <p>这是一段<strong>预填充的内容</strong>，用于展示只读模式的效果。</p>
  <p>在只读模式下，用户只能查看内容，无法进行任何编辑操作。</p>
  <ul>
    <li>支持查看文本内容</li>
    <li>支持查看图片</li>
    <li>支持查看表格</li>
    <li>不支持任何编辑操作</li>
  </ul>
  <blockquote>引用文本示例：在只读模式下，所有编辑功能都被禁用。</blockquote>
  <p><span style="color: rgb(51, 51, 51);">这是一段带有样式的文本，用于测试富文本内容的显示效果。</span></p>
`),T=()=>{s.value=!s.value};return(e,d)=>{let E=p,D=m,O=h,k=g,A=f;return l(),t(`div`,_,[o(`div`,v,[n(O,null,{default:u(()=>[n(E,{type:`primary`,onClick:T},{default:u(()=>[i(a(r(s)?`切换为编辑模式`:`切换为只读模式`),1)]),_:1}),n(D,{type:`info`},{default:u(()=>[i(`当前状态：`+a(r(s)?`只读`:`可编辑`),1)]),_:1})]),_:1})]),o(`div`,y,[o(`h4`,b,`富文本编辑器（`+a(r(s)?`只读`:`可编辑`)+`模式）`,1),n(k,{modelValue:r(w),"onUpdate:modelValue":d[0]||=e=>c(w)?w.value=e:null,"read-only":r(s),height:`400px`},null,8,[`modelValue`,`read-only`])]),o(`div`,x,[d[1]||=o(`h4`,{class:`section-title`},`内容预览`,-1),o(`div`,{class:`content-preview`,innerHTML:r(w)},null,8,S)]),o(`div`,C,[d[6]||=o(`h4`,{class:`section-title`},`只读模式说明`,-1),n(O,{direction:`vertical`,alignment:`flex-start`},{default:u(()=>[n(A,null,{default:u(()=>[...d[2]||=[i(`1. 只读模式下，工具栏仍然显示但不可操作`,-1)]]),_:1}),n(A,null,{default:u(()=>[...d[3]||=[i(`2. 编辑区域不可编辑，内容无法修改`,-1)]]),_:1}),n(A,null,{default:u(()=>[...d[4]||=[i(`3. 通过 readOnly 属性可以动态切换编辑器的只读状态`,-1)]]),_:1}),n(A,null,{default:u(()=>[...d[5]||=[i(`4. 只读模式适用于展示已保存的内容、审批意见等场景`,-1)]]),_:1})]),_:1})])])}}}),T=e({default:()=>E}),E=w;export{T as n,E as t};
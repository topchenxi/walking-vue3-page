import{C as e,Ct as t,D as n,Gt as r,Jt as i,V as a,b as o,bt as s,k as c,kt as l,q as u}from"./vue.runtime.esm-bundler.Cb8OOsKr.js";import{t as d}from"./vue-export-helper.Du3wJ9gW.js";import{a as f,c as p,i as m,n as h,r as g}from"./shared.CpUKumat.js";var _={class:`demo-page-container`},v={class:`section-block`},y={class:`ht-theme-main handsontable-preview`},b=`<template>
  <div class="ht-theme-main">
    <HotTable :settings="hotSettings" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HotTable } from '@handsontable/vue3'
import { registerAllModules } from 'handsontable/registry'

registerAllModules()

const hotSettings = ref({
  licenseKey: 'non-commercial-and-evaluation',
  data: [
    { name: '张三', age: 25, role: '开发工程师' },
    { name: '李四', age: 30, role: '产品经理' },
  ],
  columns: [
    { data: 'name', title: '姓名' },
    { data: 'age', title: '年龄', type: 'numeric' },
    { data: 'role', title: '角色' },
  ],
  colHeaders: true,
  rowHeaders: true,
  height: 360,
})
<\/script>`,x=c({name:`HandsontableBasicUsage`,__name:`index`,setup(i){let c=t(null),d=s(g({data:h(),columns:[...f],colHeaders:!0,rowHeaders:!0,height:360,stretchH:`all`}));return a(()=>{m(c.value?.hotInstance)}),(t,i)=>(u(),e(`div`,_,[o(`div`,v,[i[0]||=o(`h4`,{class:`section-title`},`基础用法`,-1),i[1]||=o(`p`,{class:`desc-text`},`使用 HotTable 组件展示对象数组数据，开启行列头`,-1),o(`div`,y,[n(l(p),{ref_key:`hotRef`,ref:c,settings:d.value},null,8,[`settings`])])]),o(`div`,{class:`section-block`},[i[2]||=o(`h4`,{class:`section-title`},`代码示例`,-1),o(`pre`,{class:`code-block`},r(b))])]))}}),S=i({default:()=>C}),C=d(x,[[`__scopeId`,`data-v-1f1c6b6f`]]);export{S as n,C as t};
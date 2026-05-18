import{C as e,D as t,Jt as n,b as r,bt as i,ct as a,k as o,kt as s,q as c}from"./vue.runtime.esm-bundler.Cb8OOsKr.js";import{n as l,t as u}from"./index.esm.DDrKgCTT.js";var d={class:`demo-page-container`},f={class:`section-block`},p=o({name:`VxeTableBasicUsage`,__name:`index`,setup(n){let o=i([{name:`张三`,age:25,role:`开发工程师`,email:`zhangsan@example.com`},{name:`李四`,age:30,role:`产品经理`,email:`lisi@example.com`},{name:`王五`,age:28,role:`设计师`,email:`wangwu@example.com`},{name:`赵六`,age:32,role:`测试工程师`,email:`zhaoliu@example.com`},{name:`钱七`,age:26,role:`前端工程师`,email:`qianqi@example.com`},{name:`孙八`,age:29,role:`后端工程师`,email:`sunba@example.com`},{name:`周九`,age:31,role:`运维工程师`,email:`zhoujiu@example.com`},{name:`吴十`,age:27,role:`数据分析师`,email:`wushi@example.com`}]);return(n,i)=>(c(),e(`div`,d,[r(`div`,f,[i[0]||=r(`h4`,{class:`section-title`},`基础用法`,-1),i[1]||=r(`p`,{class:`desc-text`},`最简单的表格用法，展示基本的数据列表`,-1),t(s(u),{border:``,stripe:``,data:o.value,height:400},{default:a(()=>[t(s(l),{type:`seq`,width:`60`,title:`序号`}),t(s(l),{field:`name`,title:`姓名`}),t(s(l),{field:`age`,title:`年龄`}),t(s(l),{field:`role`,title:`角色`}),t(s(l),{field:`email`,title:`邮箱`})]),_:1},8,[`data`])]),i[2]||=r(`div`,{class:`section-block`},[r(`h4`,{class:`section-title`},`代码示例`),r(`pre`,{class:`code-block`},`<template>
  <vxe-table
    border
    stripe
    :data="tableData"
    :height="400"
  >
    <vxe-column type="seq" width="60" title="序号" />
    <vxe-column field="name" title="姓名" />
    <vxe-column field="age" title="年龄" />
    <vxe-column field="role" title="角色" />
    <vxe-column field="email" title="邮箱" />
  </vxe-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VxeTable, VxeColumn } from 'vxe-table'

const tableData = ref([
  { name: '张三', age: 25, role: '开发工程师', email: 'zhangsan@example.com' },
  { name: '李四', age: 30, role: '产品经理', email: 'lisi@example.com' },
  { name: '王五', age: 28, role: '设计师', email: 'wangwu@example.com' },
  { name: '赵六', age: 32, role: '测试工程师', email: 'zhaoliu@example.com' },
  { name: '钱七', age: 26, role: '前端工程师', email: 'qianqi@example.com' }
])
<\/script>`)],-1)]))}}),m=n({default:()=>h}),h=p;export{m as n,h as t};
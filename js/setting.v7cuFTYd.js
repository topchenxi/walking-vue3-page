import{C as e,D as t,E as n,Gt as r,Jt as i,b as a,ct as o,k as s,q as c}from"./vue.runtime.esm-bundler.Cb8OOsKr.js";import{g as l,h as u,m as d,nt as f,p}from"./style.Di9TsXJ0.js";import"./style.CThZhuMh.js";import"./style.V3nmcovO.js";import"./style.DPh5CKL4.js";var m={class:`demo-page-container`},h={class:`section-wrapper`},g={class:`config-name`},_={class:`default-value`},v=[`innerHTML`],y={class:`section-wrapper`},b={class:`config-name`},x={class:`default-value`},S=[`innerHTML`],C={class:`section-wrapper`},w={class:`config-name`},T={class:`section-wrapper`},E={class:`method-name`},D={class:`code-section`},O=s({name:`TanStackTableSetting`,__name:`index`,setup(i){let s=[{name:`data`,type:`TData[]`,default:`[]`,description:`表格数据源，可以是响应式数据`},{name:`columns`,type:`ColumnDef<TData>[]`,default:`[]`,description:`列定义数组，配置每列的显示方式和行为`},{name:`getCoreRowModel`,type:`RowModel<TData>`,default:`undefined`,description:`核心行模型，通常使用 getCoreRowModel()`},{name:`state`,type:`TableState`,default:`{}`,description:`表格的初始状态，如排序、分页、筛选等`},{name:`enableSorting`,type:`boolean`,default:`false`,description:`是否启用排序功能`},{name:`enableFilters`,type:`boolean`,default:`false`,description:`是否启用筛选功能`},{name:`enablePagination`,type:`boolean`,default:`false`,description:`是否启用分页功能`},{name:`enableRowSelection`,type:`boolean`,default:`false`,description:`是否启用行选择功能`},{name:`enableMultiRowSelection`,type:`boolean`,default:`false`,description:`是否允许多行选择`},{name:`enableExpanding`,type:`boolean`,default:`false`,description:`是否启用行展开功能`},{name:`enableColumnFilters`,type:`boolean`,default:`false`,description:`是否启用列筛选功能`},{name:`enableGlobalFilter`,type:`boolean`,default:`false`,description:`是否启用全局筛选功能`}],O=[{name:`accessorKey`,type:`string`,default:`undefined`,description:`数据对象中的键名，用于访问单元格数据`},{name:`header`,type:`string | ((context: HeaderContext) => VNode)`,default:`undefined`,description:`列标题，可以是字符串或渲染函数`},{name:`cell`,type:`(context: CellContext) => VNode`,default:`undefined`,description:`单元格渲染函数，自定义单元格内容`},{name:`footer`,type:`string | ((context: HeaderContext) => VNode)`,default:`undefined`,description:`列脚注，可以是字符串或渲染函数`},{name:`id`,type:`string`,default:`auto-generated`,description:`列的唯一标识符，未指定时自动生成`},{name:`size`,type:`number`,default:`150`,description:`列的宽度（像素）`},{name:`minSize`,type:`number`,default:`undefined`,description:`列的最小宽度`},{name:`maxSize`,type:`number`,default:`undefined`,description:`列的最大宽度`},{name:`enableSorting`,type:`boolean`,default:`undefined`,description:`是否允许该列排序`},{name:`enableColumnFilter`,type:`boolean`,default:`undefined`,description:`是否允许该列筛选`},{name:`filterFn`,type:`FilterFn`,default:`undefined`,description:`自定义筛选函数`},{name:`sortingFn`,type:`SortingFn`,default:`undefined`,description:`自定义排序函数`}],k=[{name:`enableSorting`,description:`启用列排序功能，支持升序、降序和多列排序`},{name:`enableFilters`,description:`启用列筛选功能，支持自定义筛选逻辑`},{name:`enableGlobalFilter`,description:`启用全局筛选功能，可在所有列中搜索`},{name:`enablePagination`,description:`启用分页功能，支持自定义每页数量和页码`},{name:`enableRowSelection`,description:`启用行选择功能，支持单选和多选`},{name:`enableMultiRowSelection`,description:`启用多行选择，配合 enableRowSelection 使用`},{name:`enableExpanding`,description:`启用行展开功能，可显示子行或详情`},{name:`enableColumnFilters`,description:`启用列筛选，每列可独立筛选`},{name:`enableHiding`,description:`启用列隐藏功能，用户可隐藏/显示列`},{name:`enableColumnResizing`,description:`启用列宽调整功能，用户可拖拽调整列宽`}],A=[{name:`getRowModel`,params:`() => RowModel`,description:`获取行模型，包含所有行数据`},{name:`getHeaderGroups`,params:`() => HeaderGroup[]`,description:`获取表头组数组`},{name:`getFlatHeaders`,params:`() => Header[]`,description:`获取扁平化的表头数组`},{name:`getState`,params:`() => TableState`,description:`获取表格当前状态`},{name:`setState`,params:`(updater: Updater) => void`,description:`更新表格状态`},{name:`setPageIndex`,params:`(index: number) => void`,description:`设置当前页码`},{name:`setPageSize`,params:`(size: number) => void`,description:`设置每页显示数量`},{name:`previousPage`,params:`() => void`,description:`跳转到上一页`},{name:`nextPage`,params:`() => void`,description:`跳转到下一页`},{name:`setPageSize`,params:`(size: number) => void`,description:`设置每页显示数量`},{name:`toggleAllRowsSelected`,params:`(value?: boolean) => void`,description:`切换所有行的选中状态`},{name:`getSelectedRowModel`,params:`() => RowModel`,description:`获取选中行的模型`},{name:`resetSorting`,params:`(defaultState?: boolean) => void`,description:`重置排序状态`},{name:`resetFilters`,params:`(defaultState?: boolean) => void`,description:`重置筛选状态`},{name:`resetGlobalFilter`,params:`(defaultState?: boolean) => void`,description:`重置全局筛选`},{name:`resetPagination`,params:`(defaultState?: boolean) => void`,description:`重置分页状态`}];return(i,j)=>{let M=l,N=f,P=u,F=p,I=d;return c(),e(`div`,m,[j[12]||=a(`div`,{class:`header-section`},[a(`h3`,{class:`main-title`},[a(`a`,{href:`https://github.com/TanStack/table`,target:`_blank`,class:`official-link`},` TanStack Table `),n(` 表格组件 - 配置说明 `)]),a(`p`,{class:`desc-text`},` 本文档详细列出 TanStack Table (Vue 3) 的核心配置项和功能特性，版本：@tanstack/vue-table 8.x `)],-1),a(`div`,h,[j[0]||=a(`h4`,{class:`section-title`},`一、核心配置项`,-1),j[1]||=a(`p`,{class:`desc-text`},`useTable 钩子的核心配置参数`,-1),t(P,{data:s,stripe:``,border:``},{default:o(()=>[t(M,{prop:`name`,label:`配置项`,width:`200`},{default:o(({row:e})=>[a(`code`,g,r(e.name),1)]),_:1}),t(M,{prop:`type`,label:`类型`,width:`180`},{default:o(({row:e})=>[t(N,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(M,{prop:`default`,label:`默认值`,width:`160`},{default:o(({row:e})=>[a(`code`,_,r(e.default),1)]),_:1}),t(M,{prop:`description`,label:`说明`,"min-width":`280`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,v)]),_:1})]),_:1})]),a(`div`,y,[j[2]||=a(`h4`,{class:`section-title`},`二、列定义配置`,-1),j[3]||=a(`p`,{class:`desc-text`},`columns 数组中每个列对象的配置项`,-1),t(P,{data:O,stripe:``,border:``},{default:o(()=>[t(M,{prop:`name`,label:`配置项`,width:`200`},{default:o(({row:e})=>[a(`code`,b,r(e.name),1)]),_:1}),t(M,{prop:`type`,label:`类型`,width:`180`},{default:o(({row:e})=>[t(N,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(M,{prop:`default`,label:`默认值`,width:`160`},{default:o(({row:e})=>[a(`code`,x,r(e.default),1)]),_:1}),t(M,{prop:`description`,label:`说明`,"min-width":`280`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,S)]),_:1})]),_:1})]),a(`div`,C,[j[4]||=a(`h4`,{class:`section-title`},`三、功能特性`,-1),j[5]||=a(`p`,{class:`desc-text`},`通过 enableX 配置启用的功能特性`,-1),t(P,{data:k,stripe:``,border:``},{default:o(()=>[t(M,{prop:`name`,label:`功能名`,width:`200`},{default:o(({row:e})=>[a(`code`,w,r(e.name),1)]),_:1}),t(M,{prop:`description`,label:`功能说明`,"min-width":`400`},{default:o(({row:e})=>[a(`span`,null,r(e.description),1)]),_:1})]),_:1})]),a(`div`,T,[j[6]||=a(`h4`,{class:`section-title`},`四、表格实例方法`,-1),j[7]||=a(`p`,{class:`desc-text`},`table 实例提供的常用方法`,-1),t(P,{data:A,stripe:``,border:``},{default:o(()=>[t(M,{prop:`name`,label:`方法名`,width:`200`},{default:o(({row:e})=>[a(`code`,E,r(e.name),1)]),_:1}),t(M,{prop:`params`,label:`参数`,width:`240`},{default:o(({row:e})=>[t(N,{size:`small`,type:`info`},{default:o(()=>[n(r(e.params),1)]),_:2},1024)]),_:1}),t(M,{prop:`description`,label:`说明`,"min-width":`300`},{default:o(({row:e})=>[a(`span`,null,r(e.description),1)]),_:1})]),_:1})]),a(`div`,D,[j[11]||=a(`h4`,{class:`section-title`},`配置示例`,-1),t(I,null,{default:o(()=>[t(F,{label:`基础用法`},{default:o(()=>[...j[8]||=[a(`pre`,{class:`code-block`},`<template>
  <table>
    <thead>
      <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <th v-for="header in headerGroup.headers" :key="header.id">
          {{ flexRender(header.column.columnDef.header, header.getContext()) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td v-for="cell in row.getVisibleCells()" :key="cell.id">
          {{ flexRender(cell.column.columnDef.cell, cell.getContext()) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useVueTable, flexRender, getCoreRowModel } from '@tanstack/vue-table'

const data = ref([...])

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
]

const table = useVueTable({
  get data() { return data.value },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
<\/script>`,-1)]]),_:1}),t(F,{label:`启用排序`},{default:o(()=>[...j[9]||=[a(`pre`,{class:`code-block`},`const table = useVueTable({
  get data() { return data.value },
  columns,
  getCoreRowModel: getCoreRowModel(),
  enableSorting: true,
  getSortedRowModel: getSortedRowModel(),
})`,-1)]]),_:1}),t(F,{label:`启用分页`},{default:o(()=>[...j[10]||=[a(`pre`,{class:`code-block`},`const table = useVueTable({
  get data() { return data.value },
  columns,
  getCoreRowModel: getCoreRowModel(),
  enablePagination: true,
  getPaginationRowModel: getPaginationRowModel(),
  state: {
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
  },
})`,-1)]]),_:1})]),_:1})])])}}}),k=i({default:()=>A}),A=O;export{k as n,A as t};
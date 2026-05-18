import{C as e,D as t,E as n,Gt as r,Jt as i,b as a,ct as o,k as s,q as c}from"./vue.runtime.esm-bundler.Cb8OOsKr.js";import{g as l,h as u,m as d,nt as f,p}from"./style.Di9TsXJ0.js";import"./style.CThZhuMh.js";import"./style.V3nmcovO.js";import"./style.DPh5CKL4.js";var m={class:`demo-page-container`},h={class:`section-wrapper`},g={class:`config-name`},_={class:`default-value`},v=[`innerHTML`],y={class:`section-wrapper`},b={class:`config-name`},x={class:`default-value`},S=[`innerHTML`],C={class:`section-wrapper`},w={class:`config-name`},T={class:`default-value`},E=[`innerHTML`],D={class:`section-wrapper`},O={class:`config-name`},k={class:`default-value`},A=[`innerHTML`],j={class:`section-wrapper`},M={class:`event-name`},N=[`innerHTML`],P={class:`code-section`},F=s({name:`VTableDemoSetting`,__name:`index`,setup(i){let s=[{name:`container`,type:`HTMLElement`,default:`必填`,description:`表格容器 DOM 元素，VTable 将在此元素内创建 Canvas`},{name:`option`,type:`ListTableConstructorOptions`,default:`必填`,description:`表格配置项，包含 records、columns、theme 等完整配置`},{name:`records`,type:`Record<string, any>[][]`,default:`[]`,description:`表格数据源，二维数组格式，每行是一条记录`},{name:`width`,type:`number`,default:`容器宽度`,description:`表格宽度（px），不设置则使用容器宽度`},{name:`height`,type:`number`,default:`容器高度`,description:`表格高度（px），不设置则使用容器高度`}],F=[{name:`field`,type:`string`,default:`必填`,description:`字段名，对应 records 中每条数据的 key`},{name:`caption`,type:`string`,default:`必填`,description:`列标题显示文本`},{name:`cellType`,type:`'text' | 'link' | 'image' | 'checkbox' | 'progressBar' | 'sparkline'`,default:`'text'`,description:`单元格类型，支持文本、链接、图片、复选框、进度条、迷你图`},{name:`width`,type:`number | 'auto'`,default:`'auto'`,description:`列宽（px），设为 auto 自动计算`},{name:`style`,type:`ColumnStyle`,default:`undefined`,description:`单元格样式配置，包含 color、fontSize、fontWeight 等`},{name:`headerStyle`,type:`ColumnStyle`,default:`undefined`,description:`表头样式配置`},{name:`sort`,type:`boolean`,default:`false`,description:`是否支持排序`},{name:`sortFunc`,type:`'number' | 'string' | 'date' | function`,default:`undefined`,description:`排序方式或自定义排序函数`},{name:`sortable`,type:`boolean`,default:`false`,description:`是否显示排序按钮`},{name:`widthMode`,type:`'auto' | 'standard'`,default:`'standard'`,description:`列宽计算模式`},{name:`fieldFormat`,type:`function`,default:`undefined`,description:`字段格式化函数 (record, col, row, table) => string`},{name:`icon`,type:`TableIcon[]`,default:`[]`,description:`列图标配置`},{name:`templateId`,type:`function`,default:`undefined`,description:`自定义渲染模板 ID 函数`},{name:`disableColumnHover`,type:`boolean`,default:`false`,description:`是否禁用列悬停高亮`}],I=[{name:`transpose`,type:`boolean`,default:`false`,description:`是否转置表格，行列互换`},{name:`showHeader`,type:`boolean`,default:`true`,description:`是否显示表头`},{name:`widthMode`,type:`'standard' | 'adaptive' | 'autoWidth'`,default:`'standard'`,description:`表格宽度模式：标准/自适应/自动撑开`},{name:`heightMode`,type:`'standard' | 'adaptive' | 'autoHeight'`,default:`'standard'`,description:`表格高度模式：标准/自适应/自动撑开`},{name:`autoWrapText`,type:`boolean`,default:`false`,description:`是否自动换行，超出宽度时换行显示`},{name:`frozenColCount`,type:`number`,default:`0`,description:`冻结列数，左侧固定不动的列数`},{name:`frozenRowCount`,type:`number`,default:`0`,description:`冻结行数，顶部固定不动的行数`},{name:`rightFrozenColCount`,type:`number`,default:`0`,description:`右侧冻结列数`},{name:`bottomFrozenRowCount`,type:`number`,default:`0`,description:`底部冻结行数`},{name:`columnResizeType`,type:`'all' | 'current' | 'nearest'`,default:`'all'`,description:`列宽调整模式`},{name:`maxLineClamp`,type:`number`,default:`undefined`,description:`最大显示行数，超出显示省略号`},{name:`rowSeriesNumber`,type:`RowSeriesNumber`,default:`undefined`,description:`行号配置，包含 width、title、format 等`},{name:`scrollStyle`,type:`ScrollStyle`,default:`{}`,description:`滚动条样式配置`},{name:`hoverHighlightMode`,type:`'cross' | 'row' | 'column' | 'cell'`,default:`'cross'`,description:`悬停高亮模式`},{name:`enableCellConfig`,type:`boolean`,default:`true`,description:`是否启用单元格配置`},{name:`dragHeaderMode`,type:`'all' | 'row' | 'column' | 'none'`,default:`'none'`,description:`表头拖拽模式`},{name:`menu`,type:`MenuConfig`,default:`undefined`,description:`右键菜单配置`},{name:`keyboardOptions`,type:`KeyboardOptions`,default:`{}`,description:`键盘操作配置`},{name:`selectionMode`,type:`'cell' | 'row' | 'multipleCell' | 'multipleRow'`,default:`'cell'`,description:`选中模式`},{name:`multipleSelection`,type:`boolean`,default:`true`,description:`是否允许多选`}],L=[{name:`underlayBackgroundColor`,type:`string`,default:`'#F4F4F4'`,description:`表格底层背景色`},{name:`bodyStyle`,type:`BodyStyle`,default:`{}`,description:`表格体样式配置`},{name:`bodyStyle.bgcolor`,type:`string`,default:`'#FFF'`,description:`表格体背景色`},{name:`bodyStyle.color`,type:`string`,default:`'#000'`,description:`表格体文字颜色`},{name:`bodyStyle.fontSize`,type:`number`,default:`14`,description:`表格体文字大小`},{name:`bodyStyle.fontWeight`,type:`string`,default:`'normal'`,description:`表格体文字粗细`},{name:`headerStyle`,type:`HeaderStyle`,default:`{}`,description:`表头样式配置`},{name:`headerStyle.bgcolor`,type:`string`,default:`'#F6F7F9'`,description:`表头背景色`},{name:`headerStyle.color`,type:`string`,default:`'#000'`,description:`表头文字颜色`},{name:`headerStyle.fontSize`,type:`number`,default:`14`,description:`表头文字大小`},{name:`headerStyle.fontWeight`,type:`string`,default:`'bold'`,description:`表头文字粗细`},{name:`frameStyle`,type:`FrameStyle`,default:`{}`,description:`表格边框样式配置`},{name:`frameStyle.borderColor`,type:`string`,default:`'#E0E0E0'`,description:`边框颜色`},{name:`frameStyle.borderLineWidth`,type:`number`,default:`1`,description:`边框线宽`},{name:`headerVerticalLineSize`,type:`number`,default:`1`,description:`表头垂直分割线宽度`},{name:`cellInnerBorder`,type:`number`,default:`4`,description:`单元格内边距`},{name:`cellHoverBorder`,type:`number`,default:`2`,description:`单元格悬停内边距`},{name:`selectionStyle`,type:`SelectionStyle`,default:`{}`,description:`选中区域样式`},{name:`selectionStyle.bgcolor`,type:`string`,default:`'#CCE0FF'`,description:`选中区域背景色`}],R=[{name:`mouse_enter_cell`,params:`args: MousePointerCellEvent`,description:`鼠标进入单元格时触发，返回单元格信息`},{name:`mouse_leave_cell`,params:`args: MousePointerCellEvent`,description:`鼠标离开单元格时触发`},{name:`mouse_move_cell`,params:`args: MousePointerCellEvent`,description:`鼠标在单元格上移动时触发`},{name:`click_cell`,params:`args: MousePointerCellEvent`,description:`点击单元格时触发`},{name:`dblclick_cell`,params:`args: MousePointerCellEvent`,description:`双击单元格时触发`},{name:`selected_cell`,params:`args: SelectedCellEvent`,description:`选中单元格时触发，返回选中区域信息`},{name:`mousedown_cell`,params:`args: MousePointerCellEvent`,description:`在单元格上按下鼠标时触发`},{name:`mouseup_cell`,params:`args: MousePointerCellEvent`,description:`在单元格上释放鼠标时触发`},{name:`sort_change`,params:`args: SortChangeEvent`,description:`排序状态变化时触发，返回排序字段和排序方式`},{name:`scroll`,params:`args: ScrollEvent`,description:`表格滚动时触发，返回滚动位置信息`},{name:`resize_column`,params:`args: ResizeColumnEvent`,description:`列宽调整完成时触发，返回列索引和新宽度`},{name:`resize_column_end`,params:`args: ResizeColumnEvent`,description:`列宽调整结束时触发`},{name:`change_header_position`,params:`args: ChangeHeaderPositionEvent`,description:`表头位置变化时触发（拖拽）`},{name:`right_click`,params:`args: MousePointerCellEvent`,description:`右键点击单元格时触发`},{name:`keydown`,params:`args: KeyboardEvent`,description:`键盘按下时触发`},{name:`copy_data`,params:`args: CopyDataEvent`,description:`复制数据时触发（Ctrl+C）`},{name:`after_render`,params:`args: RenderEvent`,description:`表格渲染完成后触发`}];return(i,z)=>{let B=l,V=f,H=u,U=p,W=d;return c(),e(`div`,m,[z[13]||=a(`div`,{class:`header-section`},[a(`h3`,{class:`main-title`},[a(`a`,{href:`https://visactor.io/vtable`,target:`_blank`,class:`official-link`},`VTable`),n(` 多维表格 - 组件配置说明 `)]),a(`p`,{class:`desc-text`},` VTable 是基于 Canvas 的高性能多维分析表格组件，支持 ListTable、PivotTable、PivotChart 等类型。版本：VTable 1.x `)],-1),a(`div`,h,[z[0]||=a(`h4`,{class:`section-title`},`一、ListTable 核心配置（new VTable.ListTable）`,-1),t(H,{data:s,stripe:``,border:``},{default:o(()=>[t(B,{prop:`name`,label:`配置项`,width:`200`},{default:o(({row:e})=>[a(`code`,g,r(e.name),1)]),_:1}),t(B,{prop:`type`,label:`类型`,width:`200`},{default:o(({row:e})=>[t(V,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(B,{prop:`default`,label:`默认值`,width:`140`},{default:o(({row:e})=>[a(`code`,_,r(e.default),1)]),_:1}),t(B,{prop:`description`,label:`说明`,"min-width":`280`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,v)]),_:1})]),_:1})]),a(`div`,y,[z[1]||=a(`h4`,{class:`section-title`},`二、列配置（columns 数组项）`,-1),t(H,{data:F,stripe:``,border:``},{default:o(()=>[t(B,{prop:`name`,label:`配置项`,width:`200`},{default:o(({row:e})=>[a(`code`,b,r(e.name),1)]),_:1}),t(B,{prop:`type`,label:`类型`,width:`200`},{default:o(({row:e})=>[t(V,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(B,{prop:`default`,label:`默认值`,width:`140`},{default:o(({row:e})=>[a(`code`,x,r(e.default),1)]),_:1}),t(B,{prop:`description`,label:`说明`,"min-width":`280`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,S)]),_:1})]),_:1})]),a(`div`,C,[z[2]||=a(`h4`,{class:`section-title`},`三、表格选项（option 配置项）`,-1),t(H,{data:I,stripe:``,border:``},{default:o(()=>[t(B,{prop:`name`,label:`配置项`,width:`220`},{default:o(({row:e})=>[a(`code`,w,r(e.name),1)]),_:1}),t(B,{prop:`type`,label:`类型`,width:`200`},{default:o(({row:e})=>[t(V,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(B,{prop:`default`,label:`默认值`,width:`140`},{default:o(({row:e})=>[a(`code`,T,r(e.default),1)]),_:1}),t(B,{prop:`description`,label:`说明`,"min-width":`260`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,E)]),_:1})]),_:1})]),a(`div`,D,[z[3]||=a(`h4`,{class:`section-title`},`四、主题配置（theme）`,-1),t(H,{data:L,stripe:``,border:``},{default:o(()=>[t(B,{prop:`name`,label:`配置项`,width:`220`},{default:o(({row:e})=>[a(`code`,O,r(e.name),1)]),_:1}),t(B,{prop:`type`,label:`类型`,width:`200`},{default:o(({row:e})=>[t(V,{size:`small`,type:`info`},{default:o(()=>[n(r(e.type),1)]),_:2},1024)]),_:1}),t(B,{prop:`default`,label:`默认值`,width:`140`},{default:o(({row:e})=>[a(`code`,k,r(e.default),1)]),_:1}),t(B,{prop:`description`,label:`说明`,"min-width":`260`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,A)]),_:1})]),_:1})]),a(`div`,j,[z[4]||=a(`h4`,{class:`section-title`},`五、事件 Props（事件回调）`,-1),t(H,{data:R,stripe:``,border:``},{default:o(()=>[t(B,{prop:`name`,label:`事件名`,width:`240`},{default:o(({row:e})=>[a(`code`,M,r(e.name),1)]),_:1}),t(B,{prop:`params`,label:`参数`,width:`260`},{default:o(({row:e})=>[t(V,{size:`small`,type:`info`},{default:o(()=>[n(r(e.params),1)]),_:2},1024)]),_:1}),t(B,{prop:`description`,label:`说明`,"min-width":`280`},{default:o(({row:e})=>[a(`span`,{innerHTML:e.description},null,8,N)]),_:1})]),_:1})]),a(`div`,P,[z[12]||=a(`h4`,{class:`section-title`},`使用示例`,-1),t(W,null,{default:o(()=>[t(U,{label:`基础用法`},{default:o(()=>[...z[5]||=[a(`pre`,{class:`code-block`},`import * as VTable from '@visactor/vtable';

const option = {
  records: [
    { name: '张三', age: 25, city: '北京' },
    { name: '李四', age: 30, city: '上海' },
  ],
  columns: [
    { field: 'name', caption: '姓名' },
    { field: 'age', caption: '年龄' },
    { field: 'city', caption: '城市' },
  ],
};

const container = document.getElementById('tableContainer');
const tableInstance = new VTable.ListTable(container, option);`,-1)]]),_:1}),t(U,{label:`列宽配置`},{default:o(()=>[...z[6]||=[a(`pre`,{class:`code-block`},`const option = {
  records: data,
  columns: [
    { field: 'name', caption: '姓名', width: 120 },
    { field: 'age', caption: '年龄', width: 100 },
    { field: 'city', caption: '城市', width: 150 },
    { field: 'address', caption: '地址', width: 'auto' },
  ],
  widthMode: 'standard',
  heightMode: 'standard',
};`,-1)]]),_:1}),t(U,{label:`排序功能`},{default:o(()=>[...z[7]||=[a(`pre`,{class:`code-block`},`const option = {
  records: data,
  columns: [
    {
      field: 'name',
      caption: '姓名',
      sort: true,
    },
    {
      field: 'age',
      caption: '年龄',
      sort: true,
      sortFunc: 'number',
    },
  ],
};

tableInstance.on('sort_change', (args) => {
  console.log('排序字段:', args.order);
  console.log('排序方式:', args.order);
});`,-1)]]),_:1}),t(U,{label:`冻结列`},{default:o(()=>[...z[8]||=[a(`pre`,{class:`code-block`},`const option = {
  records: data,
  columns: [
    { field: 'id', caption: 'ID', width: 80 },
    { field: 'name', caption: '姓名', width: 120 },
    { field: 'age', caption: '年龄' },
    { field: 'city', caption: '城市' },
  ],
  frozenColCount: 2,
};`,-1)]]),_:1}),t(U,{label:`自动换行`},{default:o(()=>[...z[9]||=[a(`pre`,{class:`code-block`},`const option = {
  records: data,
  columns: columns,
  autoWrapText: true,
  heightMode: 'auto',
  maxLineClamp: 3,
};`,-1)]]),_:1}),t(U,{label:`主题配置`},{default:o(()=>[...z[10]||=[a(`pre`,{class:`code-block`},`const option = {
  records: data,
  columns: columns,
  theme: {
    underlayBackgroundColor: '#F9FAFB',
    bodyStyle: {
      bgcolor: '#FFFFFF',
      color: '#141414',
      fontSize: 14,
    },
    headerStyle: {
      bgcolor: '#F0F0F0',
      color: '#141414',
      fontSize: 14,
      fontWeight: 'bold',
    },
    frameStyle: {
      borderColor: '#E0E0E0',
      borderLineWidth: 1,
    },
  },
};`,-1)]]),_:1}),t(U,{label:`事件监听`},{default:o(()=>[...z[11]||=[a(`pre`,{class:`code-block`},`const tableInstance = new VTable.ListTable(container, option);

// 单元格鼠标进入
tableInstance.on('mouse_enter_cell', (args) => {
  console.log('进入单元格:', args);
});

// 单元格鼠标离开
tableInstance.on('mouse_leave_cell', (args) => {
  console.log('离开单元格:', args);
});

// 选中单元格
tableInstance.on('selected_cell', (args) => {
  console.log('选中单元格:', args);
});

// 排序变化
tableInstance.on('sort_change', (args) => {
  console.log('排序变化:', args);
});

// 单元格点击
tableInstance.on('click_cell', (args) => {
  console.log('点击单元格:', args);
});

// 销毁实例
tableInstance.release();`,-1)]]),_:1})]),_:1})])])}}}),I=i({default:()=>L}),L=F;export{I as n,L as t};
/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */

/**
 * 简单表格描述信息
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-18
 */
export default {
  urls: {
    query: '/demo/fac/meta/tpl-simple-table/query',
    edit: '/demo/fac/meta/tpl-simple-form/:id',
    delete: '/demo/fac/meta/tpl-simple-table/delete'
  },
  search: {
    placeholder: '请输入编码/名称进行搜索',
    items: ['code', 'name']
  },
  xquery: {
    cols: 3,
    items: [
      {
        type: 'input',
        label: '编码: ',
        field: 'code',
        op: 'like'
      },
      {
        type: 'input',
        label: '姓名: ',
        field: 'name',
        op: 'like'
      },
      {
        type: 'input',
        label: '编码: ',
        field: 'code',
        op: 'like'
      },
      {
        type: 'input',
        label: '姓名: ',
        field: 'name',
        op: 'like'
      }
    ]
  },
  columns: [
    {
      label: '单据编号: ',
      field: 'applyNo'
    },
    {
      label: '姓名: ',
      field: 'name',
      sortable: 'custom'
    },
    {
      label: '申请人邮箱: ',
      field: 'applyMail'
    }, {
      label: '申请日期: ',
      field: 'applyDate'
    }
  ]
}
